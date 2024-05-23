import React, { useState } from "react";
import Image from "next/image";
import Kemeja from "@/../public/Kemeja.png";
import White from "@/../public/white.png";
import AR from "@/../public/ArrowRight.png";
import { InputFields } from "./utilities/InputField";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";

export default function Cart() {
  return (
    <React.Fragment>
      <div className="mx-40 mt-[75px]">
        <div className="mb-[50px]">
          <h1 className="text-primary-green font-bold text-[64px]">
            Keranjang Belanja
          </h1>
        </div>
        <div className="bg-white shadow w-full rounded-[10px] mb-[150px]">
          <div className="mx-[25px]">
            <p className="py-[25px] font-bold text-[16px] text-light-green">
              Pilih Produk
            </p>
            <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
            <div className="flex gap-x-10 pb-[30px]">
              <div>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-[32px] h-[32px] text-primary-green bg-gray-4 border-gray-300 rounded-[8px] focus:ring-light-green"
                />
              </div>
              <div>
                <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                  <a href="#">
                    <Image src={Kemeja} width={40} alt="icon kemeja" />
                  </a>
                  <div className="text-center mt-[10px]">
                    <a href="#">
                      <p className="font-bold text-[16px]">
                        Kemeja{" "}
                        <span className="text-[14px] font-medium">Formal</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-bold text-[16px]">Kemeja Formal</p>
                  <p className="text-[14px] font-medium">Warna: Putih</p>
                  <p className="text-[14px] font-medium">Ukuran: XL</p>
                </div>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-11">
                <p className="text-[14px] font-medium">Harga Satuan</p>
                <p className="text-[16px] font-bold">Rp. 200.000</p>
              </div>
              <div className="mt-12 ml-5">
                <p className="text-[14px] font-medium">dikirim dari Jakarta</p>
              </div>
              <div className="mx-3 mt-8">
                <p className="text-[16px] font-medium">Jumlah Produk</p>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-10 text-center">
                <p className="text-[16px] font-medium">Total Harga</p>
                <p className="text-[16px] font-bold">Rp. 400.000</p>
              </div>
            </div>
            <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
            <div className="flex gap-x-10 pb-[30px]">
              <div>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-[32px] h-[32px] text-primary-green bg-gray-4 border-gray-300 rounded-[8px] focus:ring-light-green"
                />
              </div>
              <div>
                <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                  <a href="#">
                    <Image src={Kemeja} width={40} alt="icon kemeja" />
                  </a>
                  <div className="text-center mt-[10px]">
                    <a href="#">
                      <p className="font-bold text-[16px]">
                        Kemeja{" "}
                        <span className="text-[14px] font-medium">Formal</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-bold text-[16px]">Kemeja Formal</p>
                  <p className="text-[14px] font-medium">Warna: Putih</p>
                  <p className="text-[14px] font-medium">Ukuran: XL</p>
                </div>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-11">
                <p className="text-[14px] font-medium">Harga Satuan</p>
                <p className="text-[16px] font-bold">Rp. 200.000</p>
              </div>
              <div className="mt-12 ml-5">
                <p className="text-[14px] font-medium">dikirim dari Jakarta</p>
              </div>
              <div className="mx-3 mt-8">
                <p className="text-[16px] font-medium">Jumlah Produk</p>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-10 text-center">
                <p className="text-[16px] font-medium">Total Harga</p>
                <p className="text-[16px] font-bold">Rp. 400.000</p>
              </div>
            </div>
            <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
            <div className="flex gap-x-10 pb-[30px]">
              <div>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-[32px] h-[32px] text-primary-green bg-gray-4 border-gray-300 rounded-[8px] focus:ring-light-green"
                />
              </div>
              <div>
                <div className="max-w-[140px] p-[20px] bg-white rounded-[10px] border border-gray-200">
                  <a href="#">
                    <Image src={Kemeja} width={40} alt="icon kemeja" />
                  </a>
                  <div className="text-center mt-[10px]">
                    <a href="#">
                      <p className="font-bold text-[16px]">
                        Kemeja{" "}
                        <span className="text-[14px] font-medium">Formal</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <p className="font-bold text-[16px]">Kemeja Formal</p>
                  <p className="text-[14px] font-medium">Warna: Putih</p>
                  <p className="text-[14px] font-medium">Ukuran: XL</p>
                </div>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-11">
                <p className="text-[14px] font-medium">Harga Satuan</p>
                <p className="text-[16px] font-bold">Rp. 200.000</p>
              </div>
              <div className="mt-12 ml-5">
                <p className="text-[14px] font-medium">dikirim dari Jakarta</p>
              </div>
              <div className="mx-3 mt-8">
                <p className="text-[16px] font-medium">Jumlah Produk</p>
              </div>
              <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
              <div className="mt-10 text-center">
                <p className="text-[16px] font-medium">Total Harga</p>
                <p className="text-[16px] font-bold">Rp. 400.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[150px] fixed bottom-0 left-0 border-t border-gray-4">
        <div className="mx-[25px] mt-[10px]">
          <h1 className="font-bold text-[24px] ">Total Produk(2)</h1>
          <div className="flex gap-x-[20px]">
            <div className="flex max-w-sm bg-white rounded-[8px] shadow-md">
              <Image
                src={White}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5 pr-4">
                <p className="font-medium text-[16px]">Kemeja Formal</p>
                <p className="text-gray-3 text-[14px]">227rb pencarian </p>
              </div>
            </div>
            <div className="flex max-w-sm bg-white rounded-[8px] shadow-md">
              <Image
                src={White}
                width={100}
                alt="icon reuse"
                className="mr-[16px] rounded-bl-[10px] rounded-tl-[10px]"
              />
              <div className="mt-5 pr-4">
                <p className="font-medium text-[16px]">Kemeja Formal</p>
                <p className="text-gray-3 text-[14px]">227rb pencarian </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[85px] bg-white rounded-[8px] shadow-md">
              <Image
                src={AR}
                width={20}
                alt="icon reuse"
                className="rounded-bl-[10px] rounded-tl-[10px]"
              />
            </div>
            <div className="w-[1px] h-[60px] bg-gray-1 border mt-4"></div>
            <div className="mt-5">
              <InputFields
                id="voucher"
                type="text"
                name="username"
                placeholder="Pakai Voucher"
                className="rounded-[10px] w-[350px] bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green"
              />
            </div>
            <div className="mt-3 ml-6">
              <p className="font-medium text-[14px]">Total Harga</p>
              <p className="font-bold text-[24px]">Rp. 500.000</p>
            </div>
            <div className="mt-4 ml-6">
              <PrimaryButton type="submit" className="py-[15px] px-[50px]">
                Checkout
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
