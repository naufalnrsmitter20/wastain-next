import { Role } from "@prisma/client";
import { getToken, JWT } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

interface TokenProps extends JWT {
  picture: string;
  email: string;
  name: string;
  sub: string;
  user: {
    email: string;
    name: string;
    role: Role;
  };
  iat: number;
  exp: number;
  jti: string;
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = (await getToken({
    req: req as NextRequest,
    secret: process.env.NEXTAUTH_SECRET,
  })) as TokenProps | null;

  if (pathname.startsWith("/login")) {
    if (token) {
      return NextResponse.redirect(new URL(token.user.role === "Admin" ? "/admin" : "/", req.url));
    }
    return NextResponse.next();
  }

  const protectedPaths = ["/admin", "/checkout", "/profile", "/keranjang", "/products"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/admin")) {
    if (!token || (token?.user?.role as Role) !== "Admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin", "/login", "/checkout", "/profile", "/keranjang", "/products/:path*", "/products", "/checkout/:path*"],
};
