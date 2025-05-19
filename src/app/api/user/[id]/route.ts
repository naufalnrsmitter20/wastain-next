import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { _id: string } }) {
  try {
    const { _id } = params;

    const user = await prisma.user.findUnique({
      where: {
        id: _id,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return NextResponse.json({ message: "Failed to fetch user" }, { status: 500 });
  }
}
