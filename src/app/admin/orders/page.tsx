import React from "react";
import AdminHeader from "../_components/AdminHeader";
import prisma from "@/utils/prisma";
import OrderTable from "./_components/Table";

export default async function page() {
  const order = await prisma.order.findMany({
    include: {
      item: true,
      user: true,
    },
  });
  return (
    <>
      <AdminHeader />
      <div className="w-[170vh] h-full pt-12">
        <OrderTable order={order} />
      </div>
    </>
  );
}
