import prisma from "@/utils/prisma";
import { ClothesBooked } from "@prisma/client";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

interface NewUserRequest {
  username: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  username: string;
  email: string;
  order?: ClothesBooked[];
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;
  const oldUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (oldUser) return NextResponse.json({ error: "Email sudah digunakan!" }, { status: 501 });
  if (!body.username || !body.email || !body.password) {
    return NextResponse.json({ error: "username, email, dan password harus diisi!" }, { status: 402 });
  }
  const user = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
      role: "Customer",
      Order: {},
    },
    include: { Order: true },
  });

  return NextResponse.json(
    {
      user: {
        id: user.id,
        username: (user.username as string) || user.email.split("@")[0],
        email: user.email,
      },
    },
    { status: 201 }
  );
};

export async function GET() {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }
}
