"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import AR from "@/../public/ArrowRight.png";
import { InputFields } from "./utilities/InputField";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";
import { useRouter } from "next/navigation";
import useCartServices from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { AddtoCartAction } from "@/utils/actions/ServerActions";
import toast from "react-hot-toast";

export default function Cart() {
  const router = useRouter();
  const { items, itemsPrice, decrease, increase } = useCartServices();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // const HandleCheckout = async () => {
  //   try {
  //     const action = await AddtoCartAction(items);
  //     if (!action.error) {
  //       toast.success("Berhasil Checkout");
  //       router.push("/checkout/alamat_pembelian");
  //     } else {
  //       toast.error(action.message);
  //       console.error(action.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout:", error);
  //     throw new Error((error as Error).message);
  //   }
  // };

  if (!mounted) return <></>;
  return (
    <React.Fragment>
      <div className="flex justify-start gap-x-28 mx-auto max-w-7xl mt-20 pt-20 flex-col h-screen min-h-max">
        <div className="flex justify-between w-full items-center mb-[40px]">
          <div className="">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-green dark:text-gray-400 dark:hover:text-white text-[20px]">
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 text-[20px]">Keranjang Belanja</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-[30px] text-primary-green">Keranjang belanja</p>
          </div>
        </div>
        <div className="bg-white *:w-full rounded-[10px] mb-[150px]">
          <div className="">
            {items.length === 0 ? (
              <>
                <div className="flex flex-col items-center justify-center h-[300px] gap-5">
                  <div className="bg-gray-50 justify-center items-center flex flex-col gap-5 p-7 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-700">Keranjang Belanja Kosong</h2>
                    <p className="text-gray-500">Silakan tambahkan produk ke keranjang belanja Anda.</p>
                    <SecondaryButton onClick={() => router.push("/")} type="submit" className="py-[10px] px-[10px]">
                      Kembali ke halaman produk
                    </SecondaryButton>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="overflow-x-auto h-auto">
                  <table className="min-w-full text-sm text-left text-gray-500 border rounded-lg">
                    <thead className="text-xs text-gray-700 bg-gray-100 font-bold text-[16px] tracking-wide">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr className="bg-white border-b" key={item.slug}>
                          {/* Product */}
                          <td className="px-6 py-6">
                            <div className="flex items-center space-x-4">
                              <Link href={`/product/${item.slug}`}>
                                <Image src={item.image} width={80} height={80} alt={item.nama_barang} className="rounded-md border" />
                              </Link>
                              <span className="font-medium text-gray-900">{item.nama_barang}</span>
                            </div>
                          </td>
                          {/* Price */}
                          <td className="px-6 py-6 font-medium text-gray-900">
                            {item.diskon && item.diskon > 0 ? (
                              <div>
                                <span className="block text-gray-400 text-sm line-through">Rp. {item.harga.toLocaleString("id-ID")}</span>
                                <span className="block text-black font-bold">Rp. {(item.harga * (1 - item.diskon / 100)).toLocaleString("id-ID")}</span>
                              </div>
                            ) : (
                              <span className="text-black font-bold">Rp. {item.harga.toLocaleString("id-ID")}</span>
                            )}
                          </td>
                          {/* Quantity */}
                          <td className="px-6 py-6">
                            <div className="flex items-center space-x-2">
                              <button className="text-primary-green border border-primary-green hover:bg-dark-green hover:text-white font-bold px-2.5 py-0.5 rounded transition" type="button" onClick={() => decrease(item)}>
                                -
                              </button>
                              <span className="px-2">{item.qty}</span>
                              <button className="text-primary-green border border-primary-green hover:bg-dark-green hover:text-white font-bold px-2.5 py-0.5 rounded transition" type="button" onClick={() => increase(item)}>
                                +
                              </button>
                            </div>
                          </td>
                          {/* Subtotal */}
                          <td className="px-6 py-6">
                            {item.diskon && item.diskon > 0 ? (
                              <div>
                                <span className="block text-black font-bold">Rp. {(item.qty * item.harga * (1 - item.diskon / 100)).toLocaleString("id-ID")}</span>
                              </div>
                            ) : (
                              <span className="text-black font-bold">Rp. {(item.qty * item.harga).toLocaleString("id-ID")}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="py-14">
                    <SecondaryButton onClick={() => router.push("/")} type="submit" className="py-[10px] px-[10px]">
                      Kembali ke halaman produk
                    </SecondaryButton>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start h-auto gap-6">
                    {/* Voucher Input - placed above the total bill on mobile, side by side on desktop */}
                    <div className="flex flex-col w-full md:w-auto">
                      <div className="flex items-center gap-x-5 mb-4 md:mb-0">
                        <input id="voucher" type="text" name="voucher" placeholder="Pakai Voucher" className="rounded-[10px] h-auto w-80 bg-gray-100 border-none focus:ring-primary-green items-center" />
                        <PrimaryButton onClick={() => {}} type="submit" className="h-auto px-4 items-center">
                          Gunakan
                        </PrimaryButton>
                      </div>
                    </div>
                    {/* Total Bill */}
                    <div className="flex flex-col gap-7">
                      <div className="bg-gray-100 p-5 rounded-lg flex flex-col gap-2 min-w-[500px] w-full md:w-auto">
                        <div className="mb-4">
                          <p className="text-[24px] font-semibold">Card Total</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 items-center py-2">
                          <p className="text-[16px] font-medium">Jumlah produk</p>
                          <p className="text-[16px] font-medium text-right">{items.reduce((a, c) => a + c.qty, 0)}</p>
                        </div>
                        <div className="border-b border-gray-300 my-2" />
                        <div className="grid grid-cols-2 gap-x-4 items-center py-2">
                          <p className="text-[16px] font-medium">Subtotal</p>
                          <p className="text-[16px] font-medium text-right">Rp.{items.reduce((total, item) => total + item.qty * item.harga, 0).toLocaleString("id-ID")}</p>
                        </div>
                        <div className="border-b border-gray-300 my-2" />
                        <div className="grid grid-cols-2 gap-x-4 items-center py-2">
                          <p className="text-[16px] font-medium">Diskon</p>
                          <p className="text-[16px] font-medium text-right">
                            Rp.{" "}
                            {items
                              .reduce((total, item) => {
                                const diskonPerItem = item.diskon ? item.qty * item.harga * (item.diskon / 100) : 0;
                                return total + diskonPerItem;
                              }, 0)
                              .toLocaleString("id-ID")}
                          </p>
                        </div>
                        <div className="border-b border-gray-300 my-2" />
                        <div className="grid grid-cols-2 gap-x-4 items-center py-2">
                          <p className="text-[16px] font-medium">Total</p>
                          <p className="font-medium text-[16px] text-right">Rp. {items.reduce((total, item) => total + item.qty * item.harga * (1 - (item.diskon ?? 0) / 100), 0).toLocaleString("id-ID")}</p>
                        </div>
                      </div>
                      <PrimaryButton onClick={() => router.push("/checkout/alamat_pembelian")} type="submit" className="py-[15px] px-[50px]">
                        Lanjut ke Proses
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* <div className="border bg-gray-1 w-full h-[1px] mb-[24px]"></div> */}
          </div>
        </div>
      </div>
      {/* bar */}
      {/* <div className="w-full bg-white h-fit max-w-full mx-auto fixed bottom-0 left-0 border-t border-gray-1">
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
      </div> */}
    </React.Fragment>
  );
}
