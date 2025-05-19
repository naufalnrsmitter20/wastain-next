"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AR from "@/../public/ArrowRight.png";
import { InputFields } from "./utilities/InputField";
import { PrimaryButton } from "./utilities/Buttons";
import { useRouter } from "next/navigation";
import useCartServices from "@/lib/hooks/useCartStore";
import Link from "next/link";

export default function Cart() {
  const router = useRouter();
  const { items, itemsPrice, decrease, increase } = useCartServices();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  console.log(items);

  if (!mounted) return <></>;
  return (
    <React.Fragment>
      <div className="mx-40 mt-[75px] min-h-[80vh]">
        <div className="mb-[50px]">
          <h1 className="text-primary-green font-bold text-[64px]">Keranjang Belanja</h1>
        </div>
        {items.length > 0 && (
          <p>
            <Link href={"/#products"} className="font-bold text-[16px] text-primary-black underline">
              Kembali ke halaman produk
            </Link>
          </p>
        )}
        <div className="bg-white shadow w-full rounded-[10px] mb-[150px]">
          <div className="mx-[25px]">
            <p className="py-[25px] font-bold text-[16px] text-light-green">Pilih Produk</p>
            <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
            {items.length === 0 ? (
              <>
                <p className="font-bold text-[24px] ml-16">
                  Keranjang kosong!{" "}
                  <Link href={"/"} className="text-primary-green underline">
                    Klik untuk pergi belanja
                  </Link>
                </p>
              </>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.slug} className="flex gap-x-10 pb-[30px] justify-between">
                    <div>
                      <div className="max-w-[140px] p-[10px] bg-white rounded-[10px] border border-gray-200">
                        <Link href={`/product/${item.slug}`}>
                          <Image src={item.image} width={100} height={100} alt={item.nama_barang} />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="mt-8">
                        <p className="font-bold text-[16px]">{item.nama_barang}</p>
                        <p className="text-[14px] font-medium">Kategori: {item.kategori}</p>
                        <p className="text-[14px] font-medium">Tipe: {item.tipe}</p>
                      </div>
                    </div>
                    <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
                    <div className="mt-11">
                      <p className="text-[14px] font-medium">Harga Satuan</p>
                      {item.diskon && item.diskon > 0 ? (
                        <>
                          <p className="text-[16px] font-semibold text-gray-2">
                            <s>Rp. {item.harga.toLocaleString("id-ID")}</s>
                          </p>
                          <p className="text-[16px] font-bold">Rp. {item.slug && item.diskon ? (item.harga - item.harga * (item.diskon / 100)).toLocaleString("id-ID") : item.harga.toLocaleString("id-ID")}</p>
                        </>
                      ) : (
                        <p className="text-[16px] font-bold text-black">Rp. {item.harga.toLocaleString("id-ID")}</p>
                      )}
                    </div>
                    <div className="mt-12 ml-5">
                      <p className="text-[14px] font-medium">dikirim dari {item.location}</p>
                    </div>
                    <div className="mx-3 mt-8">
                      <p className="text-[16px] font-medium mb-2">Jumlah Produk</p>
                      <button
                        className="text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase px-2.5 py-0.5 rounded-[10px]"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase px-2.5 py-0.5 rounded-[10px]"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-[1px] h-[60px] bg-gray-1 border mt-9"></div>
                    <div className="mt-10 text-center">
                      <p className="text-[16px] font-medium">Total Harga</p>
                      {item.diskon && item.diskon > 0 ? (
                        <>
                          <p className="text-[16px] font-semibold text-gray-2">
                            <s>Rp. {(item.harga * item.qty).toLocaleString("id-ID")}</s>
                          </p>
                          <p className="text-[16px] font-bold">Rp. {item.slug && item.diskon ? (item.qty * item.harga * (1 - item.diskon / 100)).toLocaleString("id-ID") : (item.harga * item.qty).toLocaleString("id-ID")}</p>
                        </>
                      ) : (
                        <p className="text-[16px] font-bold">Rp. {item.slug && item.diskon ? (item.qty * item.harga * (1 - item.diskon / 100)).toLocaleString("id-ID") : (item.harga * item.qty).toLocaleString("id-ID")}</p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div>
          </div>
        </div>
      </div>
      {/* bar */}
      <div className="w-full bg-white h-fit max-w-full mx-auto fixed bottom-0 left-0 border-t border-gray-1">
        <div className="mt-[10px] mx-auto w-full">
          <div className="flex gap-x-[20px] justify-between px-20 py-4 pb-6">
            <h1 className="font-bold text-[24px] ml-16">Total Produk({items.reduce((a, c) => a + c.qty, 0)})</h1>
            <div className="relative flex items-center justify-center w-[85px] bg-white rounded-[8px] shadow-md">
              <Image src={AR} width={20} alt="icon reuse" className="rounded-bl-[10px] rounded-tl-[10px]" />
            </div>
            <div className="w-[1px] h-[60px] bg-gray-1 border mt-4"></div>
            <div className="mt-5">
              <InputFields id="voucher" type="text" name="username" placeholder="Pakai Voucher" className="rounded-[10px] w-[350px] bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green" />
            </div>
            <div className="mt-3 ml-6">
              <p className="font-medium text-[14px]">Total Harga</p>
              <p className="font-semibold text-[16px] text-gray-2">
                <s>Rp. {itemsPrice.toLocaleString("id-ID")}</s>
              </p>
              <p className="font-bold text-[24px]">Rp. {items.reduce((total, item) => total + item.qty * item.harga * (1 - (item.diskon ?? 0) / 100), 0).toLocaleString("id-ID")}</p>
            </div>
            <div className="mt-4 ml-6">
              <PrimaryButton onClick={() => router.push("/checkout/alamat_pembelian")} type="submit" className="py-[15px] px-[50px]">
                Checkout
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
