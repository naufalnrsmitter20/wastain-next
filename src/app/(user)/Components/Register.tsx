"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./utilities/Buttons";
import { InputFields } from "./utilities/InputField";
import { signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch("/api/auth/usersauth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 501) {
      const res = await response.json();
      setError(`${res.error}`);
    }
    if (response.status === 402) {
      const res = await response.json();
      setError(`${res.error}`);
    }

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/login");
    } else {
      console.log("Register gagal");
    }
  };

  return (
    <React.Fragment>
      <div className="my-[100px] mx-auto">
        <div className="text-center text-primary-black">
          <h1 className="text-[64px] font-bold text-center mb-[20px]">Buat Akun</h1>
          <p className="text-[16px] mx-auto max-w-[500px] mb-[42px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur alias reprehenderit soluta, odio vitae architecto rem consequuntur optio culpa. Modi culpa incidunt.
          </p>
        </div>
        <div className="max-w-sm mx-auto text-primary-black">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <InputFields
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
                className="rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green"
              />
            </div>
            <div>
              <InputFields id="email1" name="email" type="email" value={email} onChange={handleChange} placeholder="Email" className="rounded-[10px] w-full bg-gray-4 border-none mb-[10px] py-[10px] px-[20px] focus:ring-primary-green" />
            </div>
            <div>
              <InputFields
                id="password1"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Kata Sandi"
                className="mb-[15px] rounded-[10px] w-full bg-gray-4 border-none py-[10px] px-[20px] focus:ring-primary-green"
              />
            </div>
            <PrimaryButton type="submit">Daftar</PrimaryButton>
            {error && <p className="text-sm text-red-600 font-medium text-center">{error}</p>}
            <SecondaryButton type="button">Daftar dengan google</SecondaryButton>
          </form>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-1 w-[110px]"></div>
            <p className="font-medium text-[12px]">Sudah memiliki akun?</p>
            <div className="bg-primary-black border h-1 w-[110px]"></div>
          </div>
          <div className="flex flex-col">
            <SecondaryButton onClick={() => signIn()} type="button">
              Masuk
            </SecondaryButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
