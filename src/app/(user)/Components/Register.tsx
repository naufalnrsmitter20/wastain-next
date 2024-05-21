"use client";
import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";

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
            <PrimaryButton type="submit">Daftar</PrimaryButton>
            <SecondaryButton type="button">Daftar dengan google</SecondaryButton>
          </form>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-1 w-[110px]"></div>
            <p className="font-medium text-[12px]">Sudah memiliki akun?</p>
            <div className="bg-primary-black border h-1 w-[110px]"></div>
          </div>
          <div className="flex flex-col">
            <SecondaryButton onClick={() => router.push("/login")} type="button">
              Masuk
            </SecondaryButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
