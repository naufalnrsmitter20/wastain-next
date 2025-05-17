import React from "react";
import ProductService from "@/services/ProductService";
import ClothesItem from "./ClothesItem";

export default async function BanyakDicari() {
  const latestProduct = await ProductService.getLatest();

  return (
    <React.Fragment>
      <div className="mb-[48px] mx-6 md:mx-16 lg:mx-24 xl:mx-40">
        <div className="flex justify-between mb-[16px]">
          <h1 className="font-bold text-[24px]">Lagi banyak dicari, nih</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat Semua</p>
        </div>
        <div className="grid grid-rows-2 mb-[24px] gap-y-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[16px]">
            {latestProduct.map((item) => (
              <ClothesItem key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
