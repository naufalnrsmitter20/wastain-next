"use client";
import { dataClothes } from "@/lib/dataProduct/dataType";
import React from "react";
import { PrimaryButton } from "./utilities/Buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClothesItem({ product }: { product: dataClothes }) {
  const router = useRouter();
  const discount = product.diskon ? product.harga * (product.diskon / 100) : 0;
  const harga = product.harga - discount;
  return (
    <React.Fragment>
      <div className="bg-white shadow-gray-1 rounded-lg shadow flex flex-col justify-between h-full">
        <Link href={`/product/${product.slug}`}>
          <Image src={product.image} width={240} height={240} className="object-cover w-full h-60 object-top rounded-t-lg" alt="kemeja" />
        </Link>
        <div className="p-5 relative flex flex-col justify-between h-full">
          <div>
            <Link href="#">
              <p className="font-bold text-[16px] tracking-wide">{product.nama_barang}</p>
            </Link>
            {product.diskon && product.diskon > 0 ? (
              <>
                <p className="font-medium text-[16px] text-gray-3">
                  <s>Rp. {product.harga.toLocaleString("id-ID")}</s> | <span className="text-black"> Rp. {harga.toLocaleString("id-ID")}</span>
                </p>
                <p className="font-bold text-[16px] text-primary-green mb-2">{product.diskon}% Lebih Hemat!</p>
              </>
            ) : (
              <p className="font-medium text-[16px] leading-loose">Rp. {product.harga.toLocaleString("id-ID")}</p>
            )}
            <p className="font-medium text-[14px] text-gray-3"> - {product.kategori} - </p>
            <p className="mt-1 font-medium text-[14px] text-gray-3 truncate">{product.deskripsi}</p>
          </div>
          <div className="relative">
            <PrimaryButton onClick={() => router.push(`/product/${product.slug}`)} type="button" className="w-full mt-5">
              Detail
            </PrimaryButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
