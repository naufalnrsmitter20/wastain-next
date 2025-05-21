import React from "react";
import AdminHeader from "../_components/AdminHeader";
import prisma from "@/utils/prisma";
import ProductTable from "./_components/Table";

export default async function page() {
  const product = await prisma.products.findMany();
  return (
    <>
      <AdminHeader />
      <div className="w-[170vh] h-full pt-12">
        <ProductTable product={product} />
      </div>
    </>
  );
}
