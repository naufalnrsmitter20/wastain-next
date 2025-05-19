import { PrismaClient } from "@prisma/client";
import { cache } from "react";

const prisma = new PrismaClient();
export const revalidate = 3000;

const getLatest = cache(async () => {
  const products = await prisma.products.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return products;
});

const getFeatured = cache(async () => {
  const products = await prisma.products.findMany({
    where: { isFeatured: true },
    take: 3,
  });
  return products;
});

const getBySlug = cache(async (slug: string) => {
  const product = await prisma.products.findFirst({
    where: { slug },
  });
  return product;
});

const ProductService = {
  getLatest,
  getFeatured,
  getBySlug,
};

export default ProductService;
