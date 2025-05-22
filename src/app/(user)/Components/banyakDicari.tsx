import React from "react";
import ClothesItem from "./ClothesItem";
import { Prisma } from "@prisma/client";

export default async function BanyakDicari({ data }: { data: Prisma.ProductsGetPayload<{}>[] }) {
  return (
    <>
      <div className="mb-[48px] mx-6 md:mx-16 lg:mx-24 xl:mx-40">
        <div className="flex justify-between mb-[16px]">
          <h1 className="font-bold text-[24px]">Produk Terbaru dari Wastain</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat Semua</p>
        </div>
        <div className="grid grid-rows-2 gap-y-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[16px]">
            {data.map((item) => (
              <ClothesItem key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
