import React from "react";
import Image from "next/image";
import Sweater from "@/../public/sweater.jpg";

export default function BanyakDicari() {
  return (
    <React.Fragment>
      <div className="mx-40">
        <div className="flex justify-between mb-[16px]">
          <h1 className="font-bold text-[24px]">Lagi banyak dicari, nih</h1>
          <p className="font-bold text-[16px] text-light-green">Lihat Semua</p>
        </div>
        <div className="grid grid-rows-2 mb-[24px] gap-y-[16px]">
          <div className="grid grid-cols-4 gap-x-[16px]">
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-[16px]">
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[10px] shadow-md">
              <Image
                src={Sweater}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5">
                <p className="font-bold text-[16px]">Sweater</p>
                <p className="text-gray-3">227rb pencarian </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
      </div>
    </React.Fragment>
  );
}
