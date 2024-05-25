import clothes, { dataClothes } from "@/models/clothesModel";
import connect from "@/utils/mongodb";
import { cache } from "react";

export const revalidate = 3000;

const getLatest = cache(async () => {
  await connect();
  const products = await clothes.find({}).sort({ _id: -1 }).limit(4).lean();
  return products as dataClothes[];
});

const getFeatured = cache(async () => {
  await connect();
  const Products = await clothes.find({ isFeatured: true }).limit(3).lean();
  return Products as dataClothes[];
});

const getBySlug = cache(async (slug: string) => {
  await connect();
  const Product = await clothes.findOne({ slug }).lean();
  return Product as dataClothes[];
});

const ProductService = {
  getLatest,
  getFeatured,
  getBySlug,
};

export default ProductService;
