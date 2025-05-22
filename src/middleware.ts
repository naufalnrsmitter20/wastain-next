import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, res: NextResponse, next: NextFetchEvent) {
  const requireAuthToken = ["/admin/:path*", "/admin", "/checkout", "/profile", "/keranjang", "/products", "/products/:path*", "/checkout/:path*"];

  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (requireAuthToken.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.includes("/login") && token) {
    if (token.role === "Admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (pathname.includes("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (pathname.startsWith("/admin") && ["Customer", "Seller"].includes(token?.role as string)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin", "/login", "/checkout", "/profile", "/keranjang", "/products", "/products/:path*", "/checkout/:path*"],
};
