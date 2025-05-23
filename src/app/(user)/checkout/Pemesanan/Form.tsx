"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm, ValidationRule } from "react-hook-form";
import { ShippingAddress, MetodePembayaran } from "@prisma/client";
import { Session } from "next-auth";
import useCartServices from "@/lib/hooks/useCartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { CheckoutStepsAction } from "@/utils/actions/ServerActions";
import { SecondaryButton } from "../../Components/utilities/Buttons";

function Form({ session }: { session: Session }) {
  const router = useRouter();
  const { saveShippingAddrress, paymentMethod, shippingAddress, items, itemsPrice, taxPrice, shippingPrice, totalPrice, clear } = useCartServices();
  const AfterDiscount = items.reduce((total, item) => total + item.qty * item.harga * (1 - (item.diskon ?? 0) / 100), 0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  function formatLabel(text: string): string {
    return text
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const totalPriceFix = AfterDiscount + taxPrice;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      username: "",
      alamat: "",
      kota: "",
      kode_pos: "",
      negara: "",
    },
  });

  useEffect(() => {
    setValue("username", shippingAddress.username);
    setValue("alamat", shippingAddress.alamat);
    setValue("kota", shippingAddress.kota);
    setValue("kode_pos", shippingAddress.kode_pos);
    setValue("negara", shippingAddress.negara);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form);
    console.log(form);
    router.push("/checkout/pembayaran");
  };

  const FormInput = ({ id, name, required, pattern }: { id: keyof ShippingAddress; name: string; required?: boolean; pattern?: ValidationRule<RegExp> }) => (
    <div className="mb-2">
      <label className="text-[16px] font-medium" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        className="rounded-[10px] w-full bg-gray-100 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green"
        {...register(id, {
          required: required && `${name} Harus diisi`,
          pattern,
        })}
      />
      {errors[id]?.message && <div className="text-red-500">{errors[id]?.message}</div>}
    </div>
  );
  const handleCheckout = async () => {
    try {
      const res = await CheckoutStepsAction({
        paymentMethod,
        shippingAddress,
        items,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPriceFix,
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

  return (
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link href="/keranjang" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-green dark:text-gray-400 dark:hover:text-white text-[20px]">
                    Keranjang Belanjaan
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white text-[20px]">
                    Pembayaran
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-[30px] text-primary-green">Detail Pembayaran</p>
        </div>
      </div>

      <div className="bg-white rounded-[10px] flex justify-between gap-40 w-full max-w-7xl mx-auto">
        <form className="w-full max-w-[500px] " onSubmit={handleSubmit(formSubmit)}>
          <h2 className="text-xl font-medium pb-3">Data Diri</h2>
          <FormInput name="username" id="username" required />
          <FormInput name="alamat" id="alamat" required />
          <FormInput name="kota" id="kota" required />
          <FormInput name="kode_pos" id="kode_pos" required />
          <FormInput name="negara" id="negara" required />
          {/* <div className="my-2">
            <PrimaryButton type="submit" className="px-8 mt-6" disabled={isSubmitting}>
              {isSubmitting && (
                <span className="animate-spin mr-2">
                  <Spinner theme={SpinnerProops.spinner} color={"white"} />
                </span>
              )}
              Lanjut
            </PrimaryButton>
          </div> */}
        </form>
        <div className="w-full mx-auto space-y-8">
          {/* Items Table */}
          <div className="space-y-1">
            <h2 className="text-xl font-medium pb-3">Ringkasan Pesanan</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 border rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 font-bold text-[16px] tracking-wide">
                  <tr>
                    <th scope="col" className="px-6 py-3">Product</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr className="bg-white border-b" key={item.slug}>

                      <td className="px-6 py-6">
                        <div className="flex items-center space-x-4">
                          <Link href={`/product/${item.slug}`}>
                            <Image src={item.image} alt={item.nama_barang} width={50} height={50} className="object-contain rounded-md border" />
                          </Link>
                          <span>{item.nama_barang} ({item.tipe})</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-900">{item.kategori}</td>
                      <td className="px-6 py-4">{item.qty}</td>
                      <td className="px-6 py-4">
                        {item.diskon && item.diskon > 0 ? (
                          <div>
                            <s className="text-gray-400">Rp. {item.harga.toLocaleString("id-ID")}</s>
                            <span className="ml-2 font-semibold text-black">
                              Rp. {(item.harga - item.harga * (item.diskon / 100)).toLocaleString("id-ID")}
                            </span>
                          </div>
                        ) : (
                          <span className="font-semibold text-black">Rp. {item.harga.toLocaleString("id-ID")}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <button
              type="button"
              className="uppercase font-bold text-sm px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => router.push("/keranjang")}
            >
              Edit
            </button> */}
          </div>

          {/* Ringkasan Pesanan */}
          <div className="space-y-3">
            {/* <h2 className="text-xl font-medium pb-3">Ringkasan Pesanan</h2> */}
            <div className="flex justify-between">
              <span>Items</span>
              <span className="font-medium">Rp. {itemsPrice.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] font-medium">Diskon</span>
              <span className="font-medium">- Rp. {(itemsPrice - AfterDiscount).toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px] font-medium">Harga setelah diskon</span>
              <span className="font-medium">Rp. {AfterDiscount.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-medium">Rp. {taxPrice.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-3">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">Rp. {(AfterDiscount + taxPrice).toLocaleString("id-ID")}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            {/* <h1 className="text-xl font-medium pb-2">Metode Pembayaran</h1> */}
            <>
              {Object.values(MetodePembayaran).map((payment) => (
                <div key={payment} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-4 h-4 text-green-600 focus:ring-green-400"
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                    required
                  />
                  <span className="text-[16px] font-medium">{formatLabel(payment)}</span>
                </div>
              ))}
              <div className="mt-6 flex gap-x-4 justify-between">
                <button onClick={handleCheckout} type="submit" className="w-full uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green">
                  <span className="ml-3">Buat Pesanan</span>
                </button>
                <SecondaryButton onClick={() => router.push("/keranjang")} type="submit" className="py-[10px] px-[10px] w-full">
                  Kembali ke keranjang
                </SecondaryButton>
                {/* <SecondaryButton className="px-6" type="button" onClick={() => router.back()}>
                  Back
                </SecondaryButton>
                <PrimaryButton className="px-6" type="submit">
                  Next
                </PrimaryButton> */}
              </div>
            </>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Form;
