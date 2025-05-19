import prisma from "@/utils/prisma";
import React from "react";
import AdminTable from "./_components/Table";

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
    <div className="max-w-full min-h-screen pt-12">
      <AdminTable admin={admin} customer={customer} order={order} product={product} />
    </div>
  );
}
