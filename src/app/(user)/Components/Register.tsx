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
      <div className="mb-[80px] mt-[60px] mx-auto min-h-[80vh]">
        <div className="text-center text-primary-black">
          <h1 className="text-[40px] font-bold text-center mb-[20px] pt-6 lg:pt-10">Buat Akun</h1>
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
            <button
              className="text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase py-[13px] rounded-[10px]"
              onClick={() => signIn("google", { callbackUrl: "/homepage", redirect: false })}
              type="button"
            >
              Masuk Dengan Google
            </button>
          </form>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-0.5 w-[110px]"></div>
            <p className="font-medium text-[12px]">Sudah memiliki akun?</p>
            <div className="bg-primary-black border h-0.5 w-[110px]"></div>
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
