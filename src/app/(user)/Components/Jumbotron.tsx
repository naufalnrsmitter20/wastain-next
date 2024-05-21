import React from "react";
import { Carousel } from "flowbite-react";

export default function Jumbotron() {
  return (
    <React.Fragment>
      <div className="mt-[56px] mb-[48px] mx-40 ">
        <section className="bg-primary-green rounded-[10px]">
          <div className="mx-[45px] max-w-screen-xl py-[90px]">
            <h1 className="mb-5 text-[40px] font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome User
            </h1>
            <p className="text-[16px] font-medium text-white">
              Selamat datang, user! Website ini dirancang khusus untuk membantu
              Anda dalam melakukan registrasi check-up kesehatan, selain itu
              website ini juga bisa membantu Anda melihat riwayat check-up
              kesehatan. Dapatkan akses informasi kesehatan Anda dengan mudah
              dan cepat. Kami berkomitmen untuk menyediakan layanan yang dapat
              meningkatkan kesehatan dan kesejahteraan lansia.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
