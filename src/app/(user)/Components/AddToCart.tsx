"use client";
import React, { useEffect, useState } from "react";
import useCartServices from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";
import { OrderItem } from "@prisma/client";

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter();
  const { items, increase, decrease } = useCartServices();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((e: any) => e.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
  };
  return existItem ? (
    <div className="mt-6">
      <button
        className="text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase px-2.5 py-0.5 rounded-[10px]"
        type="button"
        onClick={() => decrease(existItem)}
      >
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button
        className="text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase px-2.5 py-0.5 rounded-[10px]"
        type="button"
        onClick={() => increase(existItem)}
      >
        +
      </button>
      <SecondaryButton type="button" onClick={() => router.push("/keranjang")} className="px-10 mt-6 block">
        Lihat Keranjang
      </SecondaryButton>
    </div>
  ) : (
    <PrimaryButton type="button" onClick={addToCartHandler} className="px-10 mt-6">
      Tambahkan Ke Keranjang
    </PrimaryButton>
  );
}
