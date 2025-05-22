import { authOption } from "@/lib/AuthOption";
import { getServerSession } from "next-auth";
import React from "react";

export default async function AdminHeader() {
  const session = await getServerSession(authOption);
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full py-4 bg-primary-green">
        <p className="text-lg font-semibold text-white">Selamat Datang {session?.user?.name ?? "Admin"}!</p>
      </div>
    </section>
  );
}
