import prisma from "@/utils/prisma";
import React from "react";
import AdminHeader from "../_components/AdminHeader";
import UserTable from "./_components/Table";

export default async function page() {
  const customer = await prisma.user.findMany({
    where: {
      role: { not: "Admin" },
    },
  });
  return (
    <>
      <AdminHeader />
      <div className="w-[170vh] h-full pt-12">
        <UserTable customer={customer} />
      </div>
    </>
  );
}
