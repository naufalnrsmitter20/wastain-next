import React from "react";
import Image from "next/image";
import Model from "@/../public/foto-model.png";

export default function Diskon() {
  return (
    <React.Fragment>
      <div className="mx-40">
        <div className="flex justify-between mb-[56px]">
          <h1 className="font-bold text-[24px]">Yang Lagi Diskon</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat semua</p>
        </div>
        <div className="grid grid-cols-6">
          <div className="max-w-sm bg-white rounded-[10px] shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                src={Model}
                alt="icon kemeja"
                className="rounded-t-[10px]"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="mb-2 text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="mb-3 text-[16px] font-medium">Rp98.900</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
