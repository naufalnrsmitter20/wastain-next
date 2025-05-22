"use client";
import React, { useEffect, useState } from "react";
import CheckoutSteps from "../../Components/utilities/CheckOutSteps";
import { useRouter } from "next/navigation";
import useCartServices from "@/lib/hooks/useCartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { CheckoutStepsAction } from "@/utils/actions/ServerActions";

function Form() {
  const router = useRouter();
  const { paymentMethod, shippingAddress, items, itemsPrice, taxPrice, shippingPrice, totalPrice, clear } = useCartServices();

  // const { trigger: placeOrder, isMutating: isPlacing } = useSWRMutation(`/api/orders/mine`, async (url) => {
  //   const res = await fetch("/api/orders", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       paymentMethod,
  //       shippingAddress,
  //       items,
  //       itemsPrice,
  //       taxPrice,
  //       shippingPrice,
  //       totalPrice,
  //     }),
  //   });

  //   if (!res.ok) {
  //     const errorData = await res.text();
  //     console.error(errorData);
  //     toast.error("Failed to place order: " + errorData);
  //     throw new Error("Network response was not ok" + errorData);
  //   }
  // });

  const handleCheckout = async () => {
    try {
      const res = await CheckoutStepsAction({
        paymentMethod,
        shippingAddress,
        items,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      if (!res.error) {
        toast.success("Pesanan berhasil dibuat!");
        clear();
        router.push("/profile");
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error("Terjadi kesalahan saat checkout.");
    }
  };

  useEffect(() => {
    if (!paymentMethod) {
      return router.push("/checkout/pembayaran");
    }
    if (items.length === 0) {
      return router.push("/homepage");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, router]);
  const AfterDiscount = items.reduce((total, item) => total + item.qty * item.harga * (1 - (item.diskon ?? 0) / 100), 0);

  const totalFix = AfterDiscount + taxPrice;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      <CheckoutSteps current={3} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-4 max-w-7xl mx-auto">
        <div className="overflow-x-auto md:col-span-3">
          <div className="bg-base-300 p-4">
            <h2 className="text-xl font-bold">Alamat Pembelian</h2>
            <p className="text-[16px] font-medium">Username: {shippingAddress.username}</p>
            <p className="text-[16px] font-medium">Alamat: {shippingAddress.alamat},</p>
            <p className="text-[16px] font-medium">Kota: {shippingAddress.kota},</p>
            <p className="text-[16px] font-medium">Kode Pos: {shippingAddress.kode_pos},</p>
            <p className="text-[16px] font-medium">Negara: {shippingAddress.negara},</p>
            <div>
              <button
                className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green mt-6"
                onClick={() => router.push("/checkout/alamat_pembelian")}
              >
                <p>Edit</p>
              </button>
            </div>
          </div>

          <div className="bg-base-300 mt-4 p-4">
            <h2 className="text-xl font-bold">Metode Pembayaran</h2>
            <p className="text-[16px] font-medium">{paymentMethod}</p>
            <div>
              <button
                className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green mt-6"
                onClick={() => router.push("/checkout/pembayaran")}
              >
                <p>Edit</p>
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto mt-4 p-4">
            <h2 className="text-xl font-bold">Items</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-800 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr className="bg-white border-b" key={item.slug}>
                    <td className="flex items-center justify-start px-6 py-4 text-[16px] font-medium">
                      <Link href={`/product/${item.slug}`}>
                        <div className="flex items-center">
                          <Image src={item.image} alt={item.nama_barang} width={50} height={50}></Image>
                          <span className="px-2 pl-8">
                            {item.nama_barang} ({item.tipe})
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 capitalize">
                      <span>{item.kategori}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span>{item.qty}</span>
                    </td>
                    <td className="px-6 py-4">
                      {item.diskon && item.diskon > 0 ? (
                        <>
                          <p className="text-[16px] text-gray-2 ">
                            <s>Rp. {item.harga.toLocaleString("id-ID")}</s>
                            <span className="text-[16px] ml-4 text-black font-semibold">Rp. {item.slug && item.diskon ? (item.harga - item.harga * (item.diskon / 100)).toLocaleString("id-ID") : item.harga.toLocaleString("id-ID")}</span>
                          </p>
                        </>
                      ) : (
                        <p className="text-[16px] font-semibold text-black">Rp. {item.harga.toLocaleString("id-ID")}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button
                type="button"
                className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green mt-6"
                onClick={() => router.push("/keranjang")}
              >
                <p>Edit</p>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-base-300 p-4">
            <h2 className="text-xl font-bold">Ringkasan Pesanan</h2>
            <ul className="space-y-3">
              <li className="flex justify-between mt-6">
                <div>Items</div>
                <p className="text-[16px] font-medium">Rp. {itemsPrice.toLocaleString("id-ID")}</p>
              </li>
              <li className="flex justify-between">
                <div>Diskon</div>
                <p className="text-[16px] font-medium"> - Rp. {(itemsPrice - AfterDiscount).toLocaleString("id-ID")}</p>
              </li>
              <li className="flex justify-between">
                <div>Harga setelah diskon</div>
                <p className="text-[16px] font-medium">Rp. {AfterDiscount.toLocaleString("id-ID")}</p>
              </li>
              <li className="flex justify-between">
                <div>Tax</div>
                <p className="text-[16px] font-medium">Rp. {taxPrice.toLocaleString("id-ID")}</p>
              </li>
              <li className="flex justify-between">
                <div>Bayar</div>
                <p className="text-[16px] font-medium">Rp. {shippingPrice.toLocaleString("id-ID")}</p>
              </li>
              <li className="flex justify-between">
                <div>Total</div>
                <p className="text-[16px] font-medium">Rp. {(AfterDiscount + taxPrice).toLocaleString("id-ID")}</p>
              </li>

              <li>
                <button onClick={handleCheckout} type="submit" className="w-full uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green">
                  <span className="ml-3">Buat Pesanan</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
