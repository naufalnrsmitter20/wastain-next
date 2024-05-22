"use client";
import React, { ChangeEventHandler, useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";
import { InputFields } from "./utilities/InputField";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
        callbackUrl: "/",
      });
      if (res?.status === 401) {
        console.log(res.error);
        setError(`${res.error}`);
      }
      if (res?.ok) {
        [router.push("/profile")];
      }
    } catch (error) {
      console.log("Error: " + (error as Error).message);
    }
  };

  return (
    <React.Fragment>
      <div className="my-[100px] mx-auto">
        <div className="text-center text-primary-black">
          <h1 className="text-[64px] font-bold text-center mb-[20px]">Selamat Datang</h1>
          <p className="text-[16px] mx-auto max-w-[500px] mb-[42px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur alias reprehenderit soluta, odio vitae architecto rem consequuntur optio culpa. Modi culpa incidunt.
          </p>
        </div>
        <div className="max-w-sm mx-auto text-primary-black">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <InputFields value={email} onChange={handleChange} id="email1" name="email" type="email" placeholder="Email" required={true} />
            </div>
            <div>
              <InputFields value={password} onChange={handleChange} id="password1" type="password" name="password" placeholder="Kata Sandi" className="mb-[15px]" required={true} />
            </div>
            <PrimaryButton type="submit">Masuk</PrimaryButton>
            {error && <p className="text-sm text-red-600 font-medium text-center">{error}</p>}
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
