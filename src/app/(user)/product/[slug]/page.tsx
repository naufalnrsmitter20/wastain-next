import React from "react";
import prisma from "@/utils/prisma";
import ProductDetail from "./ProductDetail";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const data = await prisma.products.findMany();
  return <ProductDetail data={data} params={params} />;
}
