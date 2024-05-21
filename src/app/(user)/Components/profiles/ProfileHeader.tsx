import React from "react";
import profileIcon from "@/public/user-logo-profile.png";
import Image from "next/image";
import { PrimaryButton } from "../utilities/Buttons";
import Location from "@/app/Icons/Location";

function ProfileHeader() {
  return (
    <React.Fragment>
      <div className="flex justify-start gap-x-28 mx-auto max-w-4xl mt-16">
        <aside>
          <Image width={240} src={profileIcon} alt="icons" />
          <PrimaryButton type="button" className="w-full mt-8">
            edit profile
          </PrimaryButton>
        </aside>
        <aside className="mt-4">
          <h4 className="font-bold text-[24px] tracking-wide">Profile</h4>
          <div className="mt-10">
            <p className="font-medium text-[16px] leading-loose">Nama : </p>
            <p className="font-medium text-[16px] leading-loose">Alamat : </p>
            <p className="font-medium text-[16px] leading-loose">Email : </p>
          </div>
          <p className="font-bold text-[16px] tracking-wide mt-16">Selesaikan Pembayaran</p>
          <main className="grid grid-cols-2 gap-2 max-w-full">
            <div className="rounded-md shadow-sm shadow-gray-3 p-4 max-w-sm w-full mt-4">
              <p className="font-bold text-[16px] tracking-wide">Kemeja Formal</p>
              <p className="font-medium text-[16px] leading-loose">Total Harga : </p>
              <div className="flex justify-center items-center mt-2">
                <Location />
                <p className="font-medium text-[16px] leading-loose">Kirim Ke Rumah</p>
              </div>
            </div>
          </main>
        </aside>
      </div>
    </React.Fragment>
  );
}

export default ProfileHeader;
