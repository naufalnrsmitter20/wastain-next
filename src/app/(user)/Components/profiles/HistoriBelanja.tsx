import Image from "next/image";
import React from "react";
import exampleImage from "@/public/exampleimghistoribelanja.png";

export default function HistoriBelanja() {
  return (
    <React.Fragment>
      <main className="mt-28 mx-auto max-w-4xl">
        <h4 className="font-bold text-[24px] tracking-wide">Histori Belanja</h4>
        <section className="grid grid-cols-5 my-6 gap-4">
          <div className="shadow-sm shadow-gray-2 rounded-md bg-white">
            <Image src={exampleImage} alt="example" />
            <div className="p-4">
              <p className="font-bold text-[16px] tracking-wide mt-2">Kemeja Formal</p>
              <p className="font-medium text-[16px] leading-loose mt-1">Rp98.900</p>
              <p className="mt-1 font-medium text-[14px] text-gray-3">Recycle</p>
            </div>
          </div>
          <div className="shadow-sm shadow-gray-2 rounded-md bg-white">
            <Image src={exampleImage} alt="example" />
            <div className="p-4">
              <p className="font-bold text-[16px] tracking-wide mt-2">Kemeja Formal</p>
              <p className="font-medium text-[16px] leading-loose mt-1">Rp98.900</p>
              <p className="mt-1 font-medium text-[14px] text-gray-3">Recycle</p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
