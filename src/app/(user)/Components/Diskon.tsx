import React from "react";
import Image from "next/image";
import Model from "@/../public/foto-model.jpg";

export default function Diskon() {
  return (
    <React.Fragment>
      <div className="mx-40">
        <div className="flex justify-between mb-[56px]">
          <h1 className="font-bold text-[24px]">Yang Lagi Diskon</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat semua</p>
        </div>
        <div className="grid grid-cols-6 gap-x-[16px] mb-[30px]">
          <div className="max-w-sm bg-white rounded-[10px] shadow-md">
            <a href="#">
              <Image
                src={Model}
                alt="icon kemeja"
                className="rounded-t-[10px]"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
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
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
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
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
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
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
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
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
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
                <h1 className="text-[16px] font-bold">Kemeja Formal</h1>
              </a>
              <p className="text-[16px] font-medium">Rp98.900</p>
              <div className="bg-gray-1 border h-0.5 w-full"></div>
              <p className="text-[14px] font-medium text-gray-3">Recycle</p>
            </div>
          </div>
        </div>
        <div className="border bg-gray-1 w-full h-0.5 mb-[24px]"></div>
      </div>
    </React.Fragment>
  );
}
