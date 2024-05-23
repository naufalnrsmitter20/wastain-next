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

interface IUser {
  username: string;
  email: string;
}

export default function Navbars() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      if (session) {
        try {
          const res = await fetch("/api/auth/usersauth");
          const data = await res.json();
          const customer = data.user || [];
          const logInUser = customer.find(
            (user: any) => user.email === session.user?.email
          );
          setUser(logInUser || null);
        } catch (error) {
          console.log("Error fetching user : ", error);
        }
      }
    };
    fetchUser();
  }, [session]);

  return (
    <React.Fragment>
      <Navbar fluid className="shadow-md mt-[15px] w-full h-[75px]">
        <div className="mx-8">
          <Navbar.Brand href="/">
            <Image src={logo} width={160} alt="wastain logo" />
          </Navbar.Brand>
        </div>
        <form className="md:flex items-center hidden md:max-w-xs lg:max-w-lg xl:max-w-3xl w-full">
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
        {status === "unauthenticated" ? (
          <section className="flex justify-between gap-x-4">
            <button
              onClick={() => router.push("/keranjang")}
              className="place-items-center flex"
            >
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
              <button
                onClick={() => router.push("/register")}
                className="uppercase font-bold text-[12px] px-[18px] py-[8px] text-white border-white bg-primary-green border rounded-md transition-all duration-200 hover:bg-dark-green"
              >
                daftar
              </button>
            </div>
          </section>
        ) : (
          <div className="flex md:order-2 items-center">
            <button
              onClick={() => router.push("/cart")}
              className="place-items-center flex mr-10"
            >
              <Cart />
              <p className="font-medium leading-relaxed text-[16px]">Cart</p>
            </button>
            {user && (
              <h5 className="mr-6 text-[16px] font-bold">{user.username}</h5>
            )}
            <Dropdown
              arrowIcon={false}
              inline
              label={<Image src={userProfile} alt="profile" width={40} />}
            >
              {user && (
                <Dropdown.Header>
                  <span className="block text-sm">{user.username}</span>
                  <span className="block truncate mt-2 text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => router.push("/profile")}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={() => signOut()}>Log Out</Dropdown.Item>
            </Dropdown>
          </div>
        )}
      </Navbar>
    </React.Fragment>
  );
}
