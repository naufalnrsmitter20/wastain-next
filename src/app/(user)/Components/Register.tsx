import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function Register() {
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
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                placeholder="Kata Sandi"
                className="mb-[16px]"
              />
            </div>
            <button
              className="bg-primary-green text-[16px] transition-all duration-200 hover:bg-dark-green text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Register
            </button>
            <button
              className=" text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Register with google
            </button>
          </form>
          <div className="flex gap-x-4 place-items-center mx-auto justify-center my-[20px]">
            <div className="bg-primary-black border h-1 w-[99px]"></div>
            <p className="font-medium text-[12px]">Already have an account?</p>
            <div className="bg-primary-black border h-1 w-[99px]"></div>
          </div>
          <div className="flex flex-col">
            <button
              className=" text-[16px] text-primary-green border transition-all duration-200 border-primary-green hover:bg-dark-green hover:text-white font-bold uppercase py-[13px] rounded-[10px]"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
