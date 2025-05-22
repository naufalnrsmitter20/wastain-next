import Image from "next/image";
import React from "react";
import exampleImage from "@/public/exampleimghistoribelanja.png";
import { Trash2, ShoppingCart } from "lucide-react";

export default function HistoriBelanja() {
  return (
    <React.Fragment>
      <main className="mt-3 mx-auto w-full gap-4 h-auto">
        <div className="gap-3 grid grid-cols-3">
          <div className="relative shadow-sm border rounded-lg bg-white w-72">
            <div className="flex justify-center items-center w-full h-40 overflow-hidden rounded-t-lg bg-gray-100">
              <Image src={exampleImage} alt="Gucci duffle bag" className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">Kemeja Formal</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-red-500 font-bold text-sm">Rp98.900</span>
                <span className="line-through text-gray-400 text-sm">Rp200.000</span>
              </div>
              <hr className="my-3 border-t border-gray-200" />
              <span className="text-gray-500 text-base">Recycle</span>
            </div>
          </div>
        </div>
        {/* <section className="grid grid-cols-5 my-6 gap-4">
          <div className="shadow-sm border rounded-lg bg-white w-60">
            <Image src={exampleImage} alt="example" />
            <div className="p-4">
              <p className="font-bold text-[16px] tracking-wide mt-2">Kemeja Formal</p>
              <p className="font-medium text-[16px] leading-loose mt-1">Rp98.900</p>
              <p className="mt-1 font-medium text-[14px] text-gray-3">Recycle</p>
            </div>
          </div>
          <div className="shadow-sm border rounded-lg bg-white w-60">
            <Image src={exampleImage} alt="example" />
            <div className="p-4">
              <p className="font-bold text-[16px] tracking-wide mt-2">Kemeja Formal</p>
              <p className="font-medium text-[16px] leading-loose mt-1">Rp98.900</p>
              <p className="mt-1 font-medium text-[14px] text-gray-3">Recycle</p>
            </div>
          </div>
        </section> */}
      </main>
    </React.Fragment>
  );
}
