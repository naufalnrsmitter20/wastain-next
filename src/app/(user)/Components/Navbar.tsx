"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "@/public/logo-wastain.png";
import Search from "@/app/Icons/Search";
import Cart from "@/app/Icons/Cart";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import userProfile from "@/public/navProfile.png";
import useCartServices from "@/lib/hooks/useCartStore";
import { Session } from "next-auth";

export default function Navbars({ session }: { session: Session }) {
  const { items } = useCartServices();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <React.Fragment>
      <Navbar fluid className="shadow-md w-full h-[75px] fixed top-0 z-50 bg-white" rounded={false}>
        <div className="lg:mx-8">
          <Navbar.Brand href="/">
            <Image src={logo} width={160} alt="wastain logo" />
          </Navbar.Brand>
        </div>
        <form className="md:flex items-center hidden md:max-w-xs lg:max-w-lg xl:max-w-xl w-full">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-white border border-gray-3 text-gray-900 text-sm rounded-lg focus:ring-gray-1 focus:border-gray-2 block w-full ps-10 p-2.5 placeholder:text-gray-2"
              placeholder="Cari di wastain"
              required
            />
          </div>
          <button className="hidden" type="submit"></button>
        </form>
        {!session ? (
          <>
            <section className="hidden md:flex justify-between gap-x-4">
              <button onClick={() => router.push("/keranjang")} className="place-items-center flex">
                <Cart />
                <p className="font-medium leading-relaxed text-[16px]">Cart</p>
              </button>
              <div className="flex gap-x-2">
                <button
                  onClick={() => signIn()}
                  className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-primary-green border-primary-green bg-white hover:text-white hover:bg-dark-green border rounded-md transition-all duration-200"
                >
                  masuk
                </button>
                <button onClick={() => router.push("/register")} className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green">
                  daftar
                </button>
              </div>
            </section>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            {isOpen && (
              <section className="fixed top-[72px] right-0 z-50 w-full bg-white shadow-md md:hidden p-6 space-y-3">
                <button
                  onClick={() => router.push("/keranjang")}
                  className="place-items-center flex justify-center w-full py-2 gap-x-2 text-primary-green border-primary-green bg-white hover:text-white hover:bg-dark-green border rounded-lg transition-all duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_16_7893)">
                      <g clipPath="url(#clip1_16_7893)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.76367 18.634C9.16211 18.634 8.63867 19.1416 8.63867 19.8126C8.63867 20.4835 9.16211 20.9911 9.76367 20.9911C10.3652 20.9911 10.8887 20.4835 10.8887 19.8126C10.8887 19.1416 10.3652 18.634 9.76367 18.634ZM7.13867 19.8126C7.13867 18.3533 8.29417 17.134 9.76367 17.134C11.2332 17.134 12.3887 18.3533 12.3887 19.8126C12.3887 21.2718 11.2332 22.4911 9.76367 22.4911C8.29417 22.4911 7.13867 21.2718 7.13867 19.8126Z"
                          fill="#4F6F52"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2642 18.634C16.6626 18.634 16.1392 19.1416 16.1392 19.8126C16.1392 20.4835 16.6626 20.9911 17.2642 20.9911C17.8657 20.9911 18.3892 20.4835 18.3892 19.8126C18.3892 19.1416 17.8657 18.634 17.2642 18.634ZM14.6392 19.8126C14.6392 18.3533 15.7947 17.134 17.2642 17.134C18.7337 17.134 19.8892 18.3533 19.8892 19.8126C19.8892 21.2718 18.7337 22.4911 17.2642 22.4911C15.7947 22.4911 14.6392 21.2718 14.6392 19.8126Z"
                          fill="#4F6F52"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.76367 3.74146C2.76367 3.32724 3.09946 2.99146 3.51367 2.99146H5.66723C6.30388 2.99146 6.83881 3.46995 6.9095 4.10266L7.93454 13.2769H19.6616C19.7699 13.2769 19.866 13.2071 19.8994 13.104L21.7512 7.38989C21.8035 7.2284 21.6831 7.06282 21.5134 7.06282H9.76367C9.34946 7.06282 9.01367 6.72703 9.01367 6.31282C9.01367 5.89861 9.34946 5.56282 9.76367 5.56282H21.5134C22.7017 5.56282 23.5445 6.72188 23.1781 7.85234L21.3263 13.5664C21.0924 14.2881 20.4202 14.7769 19.6616 14.7769H7.46775L6.43697 15.3828C6.36675 15.424 6.33926 15.4681 6.3259 15.5044C6.3101 15.5472 6.30604 15.6037 6.32242 15.6639C6.33879 15.7241 6.37094 15.7708 6.40625 15.7997C6.43615 15.8242 6.48219 15.8483 6.56364 15.8483H19.1387C19.5529 15.8483 19.8887 16.1841 19.8887 16.5983C19.8887 17.0125 19.5529 17.3483 19.1387 17.3483H6.56364C4.78039 17.3483 4.13954 14.9931 5.67691 14.0896L6.4643 13.6268L5.44361 4.49146H3.51367C3.09946 4.49146 2.76367 4.15567 2.76367 3.74146Z"
                          fill="#4F6F52"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_16_7893">
                        <rect width="24" height="24" fill="white" transform="translate(0.888672 0.741455)" />
                      </clipPath>
                      <clipPath id="clip1_16_7893">
                        <rect width="24" height="144" fill="white" transform="translate(0.888672 0.741455)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold leading-relaxed uppercase text-[12px] text-primary-green">Cart</p>
                </button>
                <button onClick={() => signIn()} className="uppercase font-bold text-[12px] w-full py-3 text-primary-green border-primary-green bg-white hover:text-white hover:bg-dark-green border rounded-lg transition-all duration-200">
                  masuk
                </button>
                <button onClick={() => router.push("/register")} className="uppercase font-bold text-[12px] w-full py-3 text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green">
                  daftar
                </button>
              </section>
            )}
          </>
        ) : (
          <div className="flex md:order-2 items-center">
            <button onClick={() => router.push("/keranjang")} className="place-items-center flex mr-10">
              <Cart />
              <p className="font-medium leading-relaxed text-[16px]">
                Cart
                {mounted && items.length !== 0 && <span className="ml-2 px-1.5 py-0.5 rounded-full bg-primary-green text-white">{items.reduce((a, c) => a + c.qty, 0)} </span>}
              </p>
            </button>
            {session?.user && <h5 className="mr-6 text-[16px] font-bold">{session.user.name}</h5>}
            <Dropdown arrowIcon={false} inline label={<Image src={userProfile} alt="profile" width={40} />}>
              {session?.user && (
                <Dropdown.Header>
                  <span className="block text-sm">{session?.user.name}</span>
                  <span className="block truncate mt-2 text-sm font-medium">{session?.user.email}</span>
                </Dropdown.Header>
              )}
              <Dropdown.Divider />
              {session?.user?.role === "Admin" ? <Dropdown.Item onClick={() => router.push("/admin/dashboard")}>Dashboard</Dropdown.Item> : <Dropdown.Item onClick={() => router.push("/profile")}>Profile</Dropdown.Item>}
              <Dropdown.Item onClick={() => signOut({ callbackUrl: "/login" })}>Log Out</Dropdown.Item>
            </Dropdown>
          </div>
        )}
      </Navbar>
    </React.Fragment>
  );
}
