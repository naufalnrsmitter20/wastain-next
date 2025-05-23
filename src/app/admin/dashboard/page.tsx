import prisma from "@/utils/prisma";
import React from "react";
import AdminTable from "./_components/Table";
import AdminHeader from "../_components/AdminHeader";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";

export default async function admin() {
  const customer = await prisma.user.findMany({
    where: {
      role: "Customer",
    },
  });
  const admin = await prisma.user.findMany({
    where: {
      role: "Admin",
    },
  });
  const product = await prisma.products.findMany();
  const order = await prisma.order.findMany();
  return (
    <>
      <AdminHeader />
      <div className="w-[170vh] h-full pt-12">
        <AdminTable admin={admin} customer={customer} order={order} product={product} />
      </div>
    </>
  );
}
