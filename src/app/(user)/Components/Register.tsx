"use client";
import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="my-[100px] mx-auto">
        <div className="text-center text-primary-black">
          <h1 className="text-[64px] font-bold text-center mb-[20px]">
            Buat Akun
          </h1>
          <p className="text-[16px] mx-auto max-w-[500px] mb-[42px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            tenetur alias reprehenderit soluta, odio vitae architecto rem
            consequuntur optio culpa. Modi culpa incidunt.
          </p>
        </div>
        <div className="max-w-sm mx-auto text-primary-black">
          <form className="flex flex-col gap-4">
            <div>
              <input
                id="email1"
                type="email"
                placeholder="Email"
                required
                className="rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green"
              />
            </div>
            <div>
              <input
                id="password1"
                type="password"
                required
                placeholder="Kata Sandi"
                className="mb-[15px] rounded-[10px] w-full bg-gray-4 border-none py-[10px] px-[20px] focus:ring-primary-green"
              />
            </div>
            <button
              className="bg-primary-green text-[16px] transition-all duration-200 hover:bg-dark-green text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Daftar
            </button>
            <button
              className=" text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Daftar dengan google
            </button>
          </form>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-1 w-[110px]"></div>
            <p className="font-medium text-[12px]">Sudah memiliki akun?</p>
            <div className="bg-primary-black border h-1 w-[110px]"></div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => router.push("/login")}
              className=" text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
