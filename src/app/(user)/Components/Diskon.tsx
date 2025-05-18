import React from "react";
import data from "@/lib/dataProduct/data";
import DiscountItem from "./DiscountItem";

export default function Diskon() {
  const filteredDiskon = data.products.filter((product) => product.diskon);
  return (
    <React.Fragment>
      <div className="mb-[48px] mx-6 md:mx-16 lg:mx-24 xl:mx-40">
        <div className="flex justify-between mb-[56px]">
          <h1 className="font-bold text-[24px]">Yang Lagi Diskon</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat semua</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[16px] mb-[30px]">
          {filteredDiskon.map((product) => (
            <DiscountItem key={product.slug} product={product} />
          ))}
        </div>
        <div className="border bg-gray-1 w-full h-0.5 mb-[24px]"></div>
      </div>
    </React.Fragment>
  );
}
