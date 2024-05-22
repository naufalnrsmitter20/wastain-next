import { IClothesBooked } from "@/models/clothesBookedModel";
import User from "@/models/userModel";
import connect from "@/utils/mongodb";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

interface NewUserRequest {
  username: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  _id: string;
  username: string;
  email: string;
  alamat?: string;
  clothes_booked?: IClothesBooked[];
  clothes?: [
    {
      type: Types.ObjectId;
      ref: "Clothes";
    }
  ];
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;
  await connect();
  const oldUser = await User.findOne({ email: body.email });
  if (oldUser) return NextResponse.json({ error: "Email sudah digunakan!" }, { status: 501 });
  if (!body.username || !body.email || !body.password) {
    return NextResponse.json({ error: "username, email, dan password harus diisi!" }, { status: 402 });
  }
  const user = await User.create({ ...body });
  return NextResponse.json({
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
      alamat: user.alamat,
      clothes_booked: user.clothes_booked,
      clothes: user.clothes,
    },
  });
};

export async function GET() {
  try {
    await connect();
    const user = await User.find();
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "New user Failed to Created" }, { status: 201 });
  }
}
