"use client";
import data from "@/lib/dataProduct/data";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../../Components/utilities/Buttons";
import { signIn, useSession } from "next-auth/react";
import AddToCart from "../../Components/AddToCart";
import { convertDocToObject } from "@/lib/utils";
import AddToCartActions from "./AddToCartActions";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((items) => items.slug === params.slug);
  const { data: session, status } = useSession();
  const discount = product?.diskon
    ? product?.harga * (product?.diskon / 100)
    : 0;
  const harga = product?.harga ? product.harga - discount : 0;

  if (!product) {
    return (
      <div className="text-center flex justify-center place-items-center h-screen max-h-96 text-[40px] font-bold tracking-tight leading-none text-black ">
        <p>Produk ini tidak tersedia</p>
      </div>
    );
  }

  const handleConfirm = () => {
    const confirmed = confirm("Ingin memesan produk? Login untuk melanjutkan");
    if (confirmed) {
      return signIn();
    }
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < product.rating) {
      stars.push(
        <svg
          key={i}
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1827 1.40068C12.4821 0.479374 13.7855 0.479373 14.0848 1.40068L16.277 8.14739C16.4109 8.55942 16.7948 8.83838 17.228 8.83838H24.322C25.2907 8.83838 25.6935 10.078 24.9097 10.6474L19.1706 14.8171C18.8202 15.0717 18.6735 15.5231 18.8074 15.9351L20.9995 22.6818C21.2989 23.6031 20.2444 24.3693 19.4607 23.7999L13.7216 19.6302C13.3711 19.3755 12.8965 19.3755 12.546 19.6302L6.80691 23.7999C6.0232 24.3693 4.96871 23.6031 5.26807 22.6818L7.46021 15.9351C7.59408 15.5231 7.44742 15.0717 7.09693 14.8171L1.35784 10.6474C0.574126 10.078 0.976901 8.83838 1.94562 8.83838H9.03954C9.47276 8.83838 9.85672 8.55942 9.99059 8.1474L12.1827 1.40068Z"
            fill="#FFD600"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1827 1.40068C12.4821 0.479374 13.7855 0.479373 14.0848 1.40068L16.277 8.14739C16.4109 8.55942 16.7948 8.83838 17.228 8.83838H24.322C25.2907 8.83838 25.6935 10.078 24.9097 10.6474L19.1706 14.8171C18.8202 15.0717 18.6735 15.5231 18.8074 15.9351L20.9995 22.6818C21.2989 23.6031 20.2444 24.3693 19.4607 23.7999L13.7216 19.6302C13.3711 19.3755 12.8965 19.3755 12.546 19.6302L6.80691 23.7999C6.0232 24.3693 4.96871 23.6031 5.26807 22.6818L7.46021 15.9351C7.59408 15.5231 7.44742 15.0717 7.09693 14.8171L1.35784 10.6474C0.574126 10.078 0.976901 8.83838 1.94562 8.83838H9.03954C9.47276 8.83838 9.85672 8.55942 9.99059 8.1474L12.1827 1.40068Z"
            fill="#D9D9D9"
          />
        </svg>
      );
    }
  }
  return (
    <>
      <main className="max-w-6xl flex justify-start mt-28 mx-auto">
        <div className="mb-10">
          <Image
            src={product.image}
            alt={product.nama_barang}
            className="rounded-[10px] max-w-[536px]"
          />
        </div>
        <div className="ml-12">
          <h4 className="font-bold text-[24px] tracking-wide">
            {product.nama_barang}
          </h4>
          <div className="flex">
            <div className="flex">{stars}</div>
            <div className="font-semibold text-[16px] text-gray-2 ml-4">
              | {product.rating}/{stars.length}
            </div>
          </div>
          <h2 className="font-semibold text-[24px] mt-4 text-gray-3">
            {product.diskon && product.diskon > 0 ? (
              <>
                <s>Rp. {product.harga.toLocaleString("id-ID")}</s>{" "}
                <span className="text-black"> | Diskon {product.diskon}%</span>
              </>
            ) : (
              <></>
            )}
          </h2>
          <h2 className="font-bold text-[64px] text-primary-green -mt-3">
            Rp. {harga.toLocaleString("id-ID")}
          </h2>

          <h4 className="font-bold mt-4 text-[24px] tracking-wide">
            Spesifikasi Produk
          </h4>
          <div className="flex justify-start gap-x-6 items-center">
            <div>
              <p className="font-medium text-[14px] text-gray-3 leading-loose">
                Kategori
              </p>
              <p className="font-medium text-[14px] text-gray-3 leading-loose">
                Tipe
              </p>
              <p className="font-medium text-[14px] text-gray-3 leading-loose">
                Stok
              </p>
              <p className="font-medium text-[14px] text-gray-3 leading-loose">
                Status
              </p>
            </div>
            <div>
              <p className="font-medium text-[16px] leading-loose">
                : {product.kategori}
              </p>
              <p className="font-medium text-[16px] leading-loose">
                : {product.tipe}
              </p>
              <p className="font-medium text-[16px] leading-loose">
                : {product.stok}
              </p>
              <p className="font-medium text-[16px] leading-loose">
                : {product.stok > 0 ? "Stok Tersedia" : "Stok Habis"}
              </p>
            </div>
          </div>
          <div>
            <h5 className="font-bold mt-3 text-[16px] text-gray-3 leading-loose">
              Detail Produk
            </h5>
            <p className="font-medium text-primary-black text-[16px] leading-relaxed">
              {product.deskripsi}
            </p>
          </div>
          {status === "unauthenticated" ? (
            <PrimaryButton
              type="button"
              onClick={handleConfirm}
              className="px-10 mt-6"
            >
              Tambahkan Ke Keranjang
            </PrimaryButton>
          ) : (
            <>
              {product.stok !== 0 && (
                <div>
                  <AddToCartActions params={params} />
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
