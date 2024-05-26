import data from "@/lib/dataProduct/data";
import clothes from "@/models/clothesModel";
import connect from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { products } = data;
  await connect();
  await clothes.deleteMany();
  await clothes.insertMany(products);
  return NextResponse.json({
    message: "Data berhasil ditambahkan",
    products,
  });
};
