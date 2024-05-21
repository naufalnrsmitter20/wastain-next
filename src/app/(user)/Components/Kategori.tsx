import React from "react";
import Image from "next/image";
import Kemeja from "@/../public/Kemeja.png";
import Reuse from "@/../public/reuse.png";
import Recycle from "@/../public/recycle.png";

export default function Kategori() {
  return (
    <React.Fragment>
      <div className="mx-40 mb-[48px]">
        <div className="bg-white shadow-md rounded-[10px] ">
          <div className="mx-[16px] pt-[16px]">
            <h1 className="text-[24px] font-bold mb-[10px]">
              Kategori pakaian
            </h1>
            <div className="grid grid-cols-7 gap-x-0">
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
              <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                <Image src={Kemeja} width={40} alt="icon kemeja" />
                <div className="text-center mt-[10px]">
                  <p className="font-bold text-[16px]">
                    Kemeja{" "}
                    <span className="text-[14px] font-medium">Formal</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[16px] pb-[30px]">
              <div className="grid grid-cols-2">
                <div className="flex max-w-[550px] p-[12px] bg-white rounded-[10px] shadow-md">
                  <Image
                    src={Reuse}
                    width={90}
                    alt="icon reuse"
                    className="mr-[16px]"
                  />
                  <div className="grid grid-cols-1">
                    <p className="font-bold text-[16px] ">Reuse</p>
                    <p className="text-gray-3">
                      Pakaian Bekas Dengan Kondisi Yang Masih Bagus
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[550px] p-[12px] bg-white rounded-[10px] shadow-md">
                  <Image
                    src={Recycle}
                    width={90}
                    alt="icon reuse"
                    className="mr-[16px]"
                  />
                  <div className="grid grid-cols-1">
                    <p className="font-bold text-[16px]">Recycle</p>
                    <p className="text-gray-3">
                      Pakaian Baru Yang Dibuat Oleh Bahan Daur Ulang{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
