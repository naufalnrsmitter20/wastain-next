"use client";
import React, { useEffect, useState } from "react";
import profileIcon from "@/public/user-logo-profile.png";
import Image from "next/image";
import { PrimaryButton } from "../utilities/Buttons";
import Location from "@/app/Icons/Location";
import { useSession } from "next-auth/react";
import { HiCheck } from "react-icons/hi";
import useCartServices from "@/lib/hooks/useCartStore";
import HistoriBelanja from "./HistoriBelanja";

interface IUser {
  username: string;
  email: string;
}

function ProfileHeader() {
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

  // Fungsi untuk render konten berdasarkan tab yang aktif
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <AccountSettings user={user} shippingAddress={shippingAddress} />;
      case "payment":
        return <PaymentSettings />;
      case "history":
        return <PurchaseHistory />;
      default:
        return <AccountSettings user={user} shippingAddress={shippingAddress} />;
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-start gap-x-28 mx-auto max-w-7xl mt-20 pt-20 flex-col h-screen">
        <div className="flex justify-between w-full items-center mb-[40px]">
          <p className="font-medium text-[18px]">Home / Akun Saya</p>
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
                <p 
                  onClick={() => setActiveTab("profile")} 
                  className={`cursor-pointer font-medium ${activeTab === "profile" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}
                >
                  Akun Saya
                </p>
              </div>
              <div className="mb-3">
                <p 
                  onClick={() => setActiveTab("payment")}
                  className={`cursor-pointer font-medium ${activeTab === "payment" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}
                >
                  Penyelesaian Pembayaran
                </p>
              </div>
              <div>
                <p 
                  onClick={() => setActiveTab("history")}
                  className={`cursor-pointer font-medium ${activeTab === "history" ? "text-primary-green" : "text-gray-700"} hover:text-primary-green`}
                >
                  Histori Belanja
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow w-full rounded-[10px] p-[40px]">
            {renderContent()}
          </div>
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

// Komponen untuk tab Penyelesaian Pembayaran
function PaymentSettings() {
  return (
    <div>
      <div>
        <p className="font-semibold text-[30px] text-primary-green">Penyelesaian Pembayaran</p>
      </div>
      <div className="flex gap-5">
      <div className="rounded-md shadow-sm items-start border max-w-xs w-full p-3 mt-3">
        <p className="font-bold text-[16px] tracking-wide">Kemeja Formal</p>
        <p className="font-medium text-[16px] leading-loose">Total Harga : </p>
        <div className="flex justify-start items-center mt-2">
          <Location />
          <p className="font-medium text-[16px] leading-loose">Kirim Ke Rumah</p>
        </div>
      </div>
      <div className="rounded-md shadow-sm items-start border max-w-xs w-full p-3 mt-3">
        <p className="font-bold text-[16px] tracking-wide">Kemeja Formal</p>
        <p className="font-medium text-[16px] leading-loose">Total Harga : </p>
        <div className="flex justify-start items-center mt-2">
          <Location />
          <p className="font-medium text-[16px] leading-loose">Kirim Ke Rumah</p>
        </div>
      </div>
      <div className="rounded-md shadow-sm items-start border max-w-xs w-full p-3 mt-3">
        <p className="font-bold text-[16px] tracking-wide">Kemeja Formal</p>
        <p className="font-medium text-[16px] leading-loose">Total Harga : </p>
        <div className="flex justify-start items-center mt-2">
          <Location />
          <p className="font-medium text-[16px] leading-loose">Kirim Ke Rumah</p>
        </div>
      </div>
      </div>
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