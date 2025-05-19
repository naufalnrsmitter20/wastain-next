import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Kategori from "./Components/Kategori";
import Diskon from "./Components/Diskon";
import BanyakDicari from "./Components/banyakDicari";
import ProductService from "@/services/ProductService";
import prisma from "@/utils/prisma";

export default async function homepage() {
  const latestProduct = await ProductService.getLatest();
  const allProduct = await prisma.products.findMany();
  const featuredProduct = ProductService.getFeatured();
  return (
    <div>
      <Jumbotron />
      <Kategori data={allProduct} />
      <Diskon data={allProduct} />
      <BanyakDicari data={latestProduct} />
    </div>
  );
}
