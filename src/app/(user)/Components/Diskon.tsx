"use client";
import React, { useEffect, useState } from "react";
import data from "@/lib/dataProduct/data";
import DiscountItem from "./DiscountItem";
import { Prisma } from "@prisma/client";

export default function Diskon({ data }: { data: Prisma.ProductsGetPayload<{}>[] }) {
  const [mounted, setMounted] = useState(false);
  const filteredDiskon = data.filter((product) => product.diskon);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
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
    </>
  );
}
