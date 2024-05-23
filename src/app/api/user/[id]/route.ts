import User from "@/models/userModel";
import connect from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { _id: string } }) {
  const { _id } = params;
  await connect();
  const pasien = await User.findOne({ _id: _id });
  return NextResponse.json(pasien, { status: 200 });
}
