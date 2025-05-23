"use client";
import React, { useEffect, useState } from "react";
import profileIcon from "@/public/user-logo-profile.png";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../utilities/Buttons";
import Location from "@/app/Icons/Location";
import { useSession } from "next-auth/react";
import { HiCheck } from "react-icons/hi";
import useCartServices from "@/lib/hooks/useCartStore";
import HistoriBelanja from "./HistoriBelanja";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { CancelOrderAction } from "@/utils/actions/ServerActions";
import toast from "react-hot-toast";

interface IUser {
  username: string;
  email: string;
}

function ProfileHeader({ order }: { order: Prisma.OrderGetPayload<{ include: { item: true; user: true } }>[] }) {
  const { shippingAddress } = useCartServices();
  const { data: session, status } = useSession();
  const [user, setUser] = useState<IUser | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (session) {
      try {
        const fetchUsers = async () => {
          const res = await fetch("/api/auth/usersauth");
          const data = await res.json();
          const customer = data.user || null;
          const logInUser = customer.find((user: any) => user.email === session?.user?.email);
          setUser(logInUser || null);
        };
        fetchUsers();
      } catch (error) {
        console.log("Error fetching users", error);
      }
    }
  }, [session]);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <AccountSettings user={user} shippingAddress={shippingAddress} />;
      case "payment":
        return <PaymentSettings data={order} />;
      case "history":
        return <PurchaseHistory />;
      default:
        return <AccountSettings user={user} shippingAddress={shippingAddress} />;
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-start min-h-screen gap-x-28 mx-auto max-w-7xl mt-20 pt-20 flex-col h-auto">
        <div className="flex justify-between w-full items-center mb-[40px]">
          <div className="">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-green dark:text-gray-400 dark:hover:text-white text-[20px]">
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 text-[20px]">Halaman Profile</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex gap-1">
            <p className="font-medium text-[18px]">Selamat Datang</p>
            <p className="font-medium text-[20px] text-primary-green">{user?.username}</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="w-96">
            <div className="mb-4">
              <p className="font-medium text-[22px]">Pengaturan</p>
            </div>
            <div className="h-full gap-2 w-full">
              <div className="mb-3">
                <p onClick={() => setActiveTab("profile")} className={`cursor-pointer font-medium ${activeTab === "profile" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}>
                  Akun Saya
                </p>
              </div>
              <div className="mb-3">
                <p onClick={() => setActiveTab("payment")} className={`cursor-pointer font-medium ${activeTab === "payment" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}>
                  Penyelesaian Pembayaran
                </p>
              </div>
              <div>
                <p onClick={() => setActiveTab("history")} className={`cursor-pointer font-medium ${activeTab === "history" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}>
                  Histori Belanja
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow w-full rounded-[10px] p-[40px]">{renderContent()}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

// Komponen untuk tab Akun Saya
interface AccountSettingsProps {
  user: IUser | null;
  shippingAddress: any;
}

function AccountSettings({ user, shippingAddress }: AccountSettingsProps) {
  return (
    <div>
      <div>
        <p className="font-semibold text-[30px] text-primary-green">Akun Anda</p>
      </div>
      <div>
        {user && (
          <div className="mt-3">
            <div className="mb-3">
              <p className="font-medium text-[20px] leading-loose mt-2">Nama</p>
              <div className="w-full bg-slate-100 p-3 rounded-lg text-lg font-medium">{user.username}</div>
            </div>
            <div className="mb-3">
              <p className="font-medium text-[20px] leading-loose mt-2">Alamat</p>
              <div className="w-full bg-slate-100 p-3 rounded-lg text-lg font-medium">{shippingAddress.alamat}</div>
            </div>
            <div className="mb-3">
              <p className="font-medium text-[20px] leading-loose mt-2">Email</p>
              <div className="w-full bg-slate-100 p-3 rounded-lg text-lg font-medium">{user.email}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PaymentSettings({ data }: { data: Prisma.OrderGetPayload<{ include: { item: true; user: true } }>[] }) {
  const router = useRouter();
  const HandleCancelOrder = async (id: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const del = await CancelOrderAction(id);
      if (del.error) {
        console.log("Error canceling order", del.error);
        toast.error(del.message, { id: toastId });
      } else {
        toast.success(del.message, { id: toastId });
        router.refresh();
      }
    } catch (error) {
      console.log("Error canceling order", error);
    }
  };
  return (
    <div>
      <div>
        <p className="font-semibold text-[30px] text-primary-green">Penyelesaian Pembayaran</p>
      </div>
      {data.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center h-[300px] gap-5">
            <div className="bg-gray-50 justify-center items-center flex flex-col gap-5 p-7 rounded-lg">
              <h2 className="text-xl font-bold text-gray-700">Anda tidak memiliki tagihan belanja!</h2>
              <p className="text-gray-500">Silakan tambahkan produk ke keranjang belanja Anda.</p>
              <SecondaryButton onClick={() => router.push("/")} type="submit" className="py-[10px] px-[10px]">
                Kembali Halaman produk
              </SecondaryButton>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-5">
          {data.map((order, index) => (
            <div key={index} className="rounded-md shadow-sm border max-w-full w-full p-3 mt-3">
              <p className="text-primary-green text-xl font-bold mb-4">Tagihan {index + 1}</p>
              <p className="text-[16px] tracking-wide">
                <span className="font-bold">Order ID: </span> {order.id}
              </p>
              <p className="font-medium text-[16px] leading-loose">
                <span className="font-bold">Metode Pembayaran:</span> {order.paymentMethod}
              </p>
              <p className="font-medium text-[16px] leading-loose">
                <span className="font-bold">Total Harga:</span> Rp. {order.totalPrice.toLocaleString("id-ID")}
              </p>
              <div className="w-full h-[1px] bg-gray-300 my-2"></div>
              <h6 className="font-bold mt-2 text-[20px]">List Item</h6>
              <div className="space-y-4 relative block mt-2 mb-7 ">
                {order.item.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image src={item.image} alt={item.nama_barang} width={100} height={100} className="rounded-md" />
                      <div>
                        <p className="text-[20px] font-semibold">{item.nama_barang}</p>
                        <p className="text-[16px] font-medium">Tipe: {item.tipe}</p>
                        <p className="text-[16px] font-medium">Lokasi: {item.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold">Rp. {item.harga.toLocaleString("id-ID")}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const confirmCancel = confirm("Apakah Anda yakin ingin membatalkan pesanan ini?");
                  if (confirmCancel) {
                    HandleCancelOrder(order.id);
                  }
                }}
                className="bg-red-500 text-[16px] transition-all duration-200 hover:bg-red-600 text-white font-semibold py-[8px] px-6 rounded-[10px]"
                type="button"
              >
                Batalkan Pesanan
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Komponen untuk tab Histori Belanja
function PurchaseHistory() {
  return (
    <div>
      <div>
        <p className="font-semibold text-[30px] text-primary-green">Histori Belanja</p>
      </div>
      <HistoriBelanja />
    </div>
  );
}

export default ProfileHeader;
