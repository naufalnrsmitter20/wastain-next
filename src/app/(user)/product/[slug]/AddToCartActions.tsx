"use client";
import React from "react";
import AddToCart from "../../Components/AddToCart";
import { convertDocToObject } from "@/lib/utils";
import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";

export default function AddToCartActions({ data, params }: { data: Prisma.ProductsGetPayload<{}>[]; params: { slug: string } }) {
  // const data = await prisma.products.findMany();
  const product = data.find((items) => items.slug === params.slug);
  return <AddToCart item={{ ...convertDocToObject(product), qty: 0 }} />;
}
