import React from "react";
import Image from "next/image";
import Sweater from "@/../public/sweater.jpg";
import ProductService from "@/services/ProductService";
import ClothesItem from "./ClothesItem";

export default async function BanyakDicari() {
  const latestProduct = await ProductService.getLatest();

  return (
    <React.Fragment>
      <div className="mx-40">
        <div className="flex justify-between mb-[16px]">
          <h1 className="font-bold text-[24px]">Lagi banyak dicari, nih</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat Semua</p>
        </div>
        <div className="grid grid-rows-2 mb-[24px] gap-y-[16px]">
          <div className="grid grid-cols-4 gap-x-[16px]">
            {latestProduct.map((item) => (
              <ClothesItem key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
