"use client";
import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";

export default function Login() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="my-[100px] mx-auto">
        <div className="text-center text-primary-black">
          <h1 className="text-[64px] font-bold text-center mb-[20px]">
            Selamat Datang
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
            <PrimaryButton type="submit">Masuk</PrimaryButton>
            <SecondaryButton type="button">Masuk Dengan Google</SecondaryButton>

          </form>
          <div className="text-center text-[14px] font-medium mt-[5px] ">
            <p>Lupa kata sandi Anda?</p>
          </div>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-1 w-[200px]"></div>
            <p className="font-bold text-[12px] uppercase">atau</p>
            <div className="bg-primary-black border h-1 w-[200px]"></div>
          </div>
          <div className="flex flex-col">
            <PrimaryButton onClick={() => router.push("/register")} type="button">
              Daftar
            </PrimaryButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
