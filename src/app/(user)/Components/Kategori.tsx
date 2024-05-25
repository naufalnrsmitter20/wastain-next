"use client";
import React, { useState } from "react";
import Image from "next/image";
import Reuse from "@/../public/reuse.png";
import Recycle from "@/../public/recycle.png";
import ClothesItem from "./ClothesItem";
import data from "@/lib/dataProduct/data";
import { convertDocToObject } from "@/lib/utils";

export default function Kategori() {
  const [selected, setSelected] = useState("All");
  const handleCategory = (category: string) => {
    setSelected(category);
  };
  const filteredProducts = selected === "All" ? data.products : data.products.filter((product) => product.kategori === selected);

  return (
    <React.Fragment>
      <div className="mx-40 mb-[48px]">
        <div className="bg-white shadow-md rounded-[10px] ">
          <div className="mx-[16px] pt-[16px]">
            <h1 className="text-[24px] font-bold mb-[10px]">Kategori pakaian</h1>
            <div className="mt-[16px] pb-[30px] group">
              <div className="grid grid-cols-2 place-items-center">
                <div onClick={() => handleCategory("reuse")} className="flex max-w-[550px] p-[12px] bg-white rounded-[10px] hover:ring-2 hover:ring-primary-green/80 focus:ring-primary-green focus:ring-4 shadow-md cursor-pointer">
                  <div>
                    <Image src={Reuse} width={90} alt="icon reuse" className="mr-[16px]" />
                  </div>
                  <div className="mt-5">
                    <div>
                      <p className="font-bold text-[16px]">Reuse</p>
                      <p className="text-gray-3">Pakaian Bekas Dengan Kondisi Yang Masih Bagus</p>
                    </div>
                  </div>
                </div>
                <div onClick={() => handleCategory("recycle")} className="flex max-w-[550px] p-[12px] bg-white rounded-[10px] shadow-md hover:ring-2 hover:ring-primary-green/80 focus:ring-primary-green focus:ring-4 cursor-pointer">
                  <div>
                    <Image src={Recycle} width={90} alt="icon reuse" className="mr-[16px]" />
                  </div>
                  <div className="mt-5">
                    <div>
                      <p className="font-bold text-[16px]">Recycle</p>
                      <p className="text-gray-3">Pakaian Baru Yang Dibuat Oleh Bahan Daur Ulang </p>
                    </div>
                  </div>
                </div>
              </div>
              <aside>
                <main className="grid grid-cols-4 gap-x-3 gap-y-4 mt-5 " id="products">
                  {filteredProducts.map((items) => (
                    <ClothesItem key={items.slug} product={items} />
                  ))}
                </main>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
