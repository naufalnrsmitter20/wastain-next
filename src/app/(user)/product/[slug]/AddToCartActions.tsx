import React from "react";
import AddToCart from "../../Components/AddToCart";
import { convertDocToObject } from "@/lib/utils";
import data from "@/lib/dataProduct/data";

export default function AddToCartActions({ params }: { params: { slug: string } }) {
  const product = data.products.find((items) => items.slug === params.slug);

  return (
    <>
      <AddToCart item={{ ...convertDocToObject(product), qty: 0 }} />
    </>
  );
}
