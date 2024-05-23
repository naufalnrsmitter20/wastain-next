"use client";
import { dataClothes } from "@/lib/dataProduct/dataType";
import React from "react";
import { PrimaryButton } from "./utilities/Buttons";
import Image from "next/image";
import Link from "next/link";
import kemeja from "@/public/kemejaFormal.png";
import { useRouter } from "next/navigation";

export default function ClothesItem({ product }: { product: dataClothes }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="max-w-xs bg-white shadow-gray-1 rounded-lg shadow ">
        <Link href={`/product/${product.slug}`}>
          <Image src={product.image} width={240} height={240} className="object-cover w-full h-60 object-top rounded-lg" alt="kemeja hehe" />
        </Link>
        <div className="p-5 relative  flex-col justify-between">
          <div>
            <a href="#">
              <p className="font-bold text-[16px] tracking-wide">{product.nama_barang}</p>
            </a>
            <p className="font-medium text-[16px] leading-loose">Rp. {product.harga.toLocaleString("id-ID")}</p>
            <p className="font-medium text-[14px] text-gray-3"> - {product.kategori} - </p>
            <p className="mt-1 font-medium text-[14px] text-gray-3">{product.deskripsi}</p>
          </div>

          <PrimaryButton onClick={() => router.push(`/product/${product.slug}`)} type="button" className="w-full mt-5 ">
            Detail
          </PrimaryButton>
        </div>
      </div>
    </React.Fragment>
  );
}
