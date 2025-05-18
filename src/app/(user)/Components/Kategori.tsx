"use client";
import React, { useState } from "react";
import Image from "next/image";
import Reuse from "@/../public/reuse.png";
import Recycle from "@/../public/recycle.png";
import ClothesItem from "./ClothesItem";
import data from "@/lib/dataProduct/data";
import Badge from "@/app/Icons/Badge";

export default function Kategori() {
  const [selected, setSelected] = useState("All");
  const handleCategory = (category: string) => {
    setSelected(category);
  };
  const filteredProducts = selected === "All" ? data.products : data.products.filter((product) => product.kategori === selected);

  return (
    <React.Fragment>
      <div className="mx-6 md:mx-16 lg:mx-24 xl:mx-40 mb-[48px]">
        <div className="bg-white shadow-md rounded-[10px] ">
          <div className="mx-[16px] pt-[16px]">
            <h1 className="text-[24px] font-bold mb-[10px]">Kategori pakaian</h1>
            <div className="mt-[16px] pb-[30px] group w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center w-full">
                <div onClick={() => handleCategory("All")} className="flex p-[12px] bg-white rounded-[10px] hover:ring-2 hover:ring-primary-green focus:ring-primary-green focus:ring-4 shadow-md cursor-pointer">
                  <div>
                    <div className="mr-[16px]">
                      <Badge />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <p className="font-bold text-[16px]">All</p>
                      <p className="text-gray-3">Seluruh Pakaian Bekas</p>
                    </div>
                  </div>
                </div>
                <div onClick={() => handleCategory("Reuse")} className="flex p-[12px] bg-white rounded-[10px] hover:ring-2 hover:ring-primary-green focus:ring-primary-green focus:ring-4 shadow-md cursor-pointer">
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
                <div onClick={() => handleCategory("Recycle")} className="flex p-[12px] bg-white rounded-[10px] shadow-md hover:ring-2 hover:ring-primary-green focus:ring-primary-green focus:ring-4 cursor-pointer">
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
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 mt-5 " id="products">
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
