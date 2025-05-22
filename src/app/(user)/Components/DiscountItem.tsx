"use client";
import React, { useEffect, useState } from "react";
import { dataClothes } from "@/lib/dataProduct/dataType";
import Link from "next/link";
import Image from "next/image";
import { SecondaryButton } from "./utilities/Buttons";
import { useRouter } from "next/navigation";

export default function DiscountItem({ product }: { product: dataClothes }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const discount = product.diskon ? product.harga * (product.diskon / 100) : 0;
  const harga = product.harga - discount;
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <div className="bg-white shadow-gray-1 rounded-lg shadow flex flex-col justify-between h-full">
        <Link href={`/product/${product.slug}`}>
          <Image src={product.image} width={240} height={240} className="object-cover w-full h-60 object-top rounded-lg" alt="kemeja hehe" />
        </Link>
        <div className="p-5 relative flex flex-col justify-between h-full">
          <div>
            <a href="#">
              <p className="font-bold text-[16px] tracking-wide">{product.nama_barang}</p>
            </a>
            <p className="font-medium text-[16px] text-gray-3">
              <s>Rp. {product.harga.toLocaleString("id-ID")}</s> | <span className="text-black"> Rp. {harga.toLocaleString("id-ID")}</span>
            </p>
            <p className="font-bold text-[16px] text-primary-green mb-2">{product.diskon}% Lebih Hemat!</p>
            <p className="font-medium text-[14px] text-gray-3"> - {product.kategori} - </p>
            <p className="mt-1 font-medium text-[14px] text-gray-3">{product.deskripsi}</p>
          </div>

          <SecondaryButton onClick={() => router.push(`/product/${product.slug}`)} type="button" className="w-full mt-5 ">
            Detail
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}
