import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET - fetch all users
export async function GET() {
  try {
    const customers = await prisma.user.findMany();
    return NextResponse.json({ customer: customers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return NextResponse.json({ message: "Failed to fetch data" }, { status: 500 });
  }
}

// POST - create new user
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { username, email, alamat } = await request.json();
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        alamat,
        password: "",
        role: "Customer",
        Order: {},
      },
    });
    return NextResponse.json({ message: "New data successfully created", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ message: "Failed to create data" }, { status: 500 });
  }
}

// DELETE - delete user by ID
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const id = request.nextUrl.searchParams.get("_id");
    if (!id) {
      return NextResponse.json({ message: "ID parameter is missing" }, { status: 400 });
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ message: "Failed to delete user" }, { status: 500 });
  }
}
