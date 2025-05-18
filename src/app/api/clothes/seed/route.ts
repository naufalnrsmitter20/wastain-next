import data from "@/lib/dataProduct/data";
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { products } = data;
  await Promise.all([
    prisma.products.deleteMany(),
    prisma.products.createMany({
      data: products,
    }),
  ]);
  return NextResponse.json({
    message: "Data berhasil ditambahkan",
    products,
  });
};
