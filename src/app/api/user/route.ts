import User from "@/models/userModel";
import connect from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const customer = await User.find();
    return NextResponse.json({ customer });
  } catch (error) {
    console.error("Error fetching customer:", error);
    return NextResponse.json({ message: "New data Failed to Created" }, { status: 201 });
  }
}

export async function POST(request: any): Promise<NextResponse> {
  const { username, email, alamat, clothes_booked, clothes } = await request.json();
  await connect();
  await User.create({
    username,
    email,
    alamat,
    clothes_booked,
    clothes,
  });
  return NextResponse.json({ message: "New data Success to Created" }, { status: 201 });
}

export async function DELETE(request: any): Promise<NextResponse> {
  const id: string | null = request.nextUrl.searchParams.get("_id");
  if (!id) {
    throw new Error("ID parameter is missing");
  }
  await connect();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data data deleted!" }, { status: 200 });
}
