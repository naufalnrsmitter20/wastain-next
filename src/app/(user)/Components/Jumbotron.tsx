import React from "react";
import { AlertsLight } from "./utilities/Alert";

export default function Jumbotron() {
  return (
    <React.Fragment>
      <div className="mt-[56px] mb-[48px] mx-40">
        <section className="bg-primary-green rounded-[10px]">
          <div className="mx-[45px] max-w-screen-xl py-[90px]">
            <h1 className="mb-5 text-[40px] font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Selamat Datang di Wastain</h1>
            <p className="text-[16px] font-medium text-white">
              Selamat datang di Wastain, destinasi utama untuk pakaian bekas berkualitas tinggi. Temukan gaya unik dan hemat sambil berkontribusi pada lingkungan dengan mendukung gerakan reuse & recycle. Setiap pembelian Anda membantu
              mengurangi limbah tekstil dan mendukung masa depan yang lebih hijau. Belanja sekarang dan jadi bagian dari perubahan positif!
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
