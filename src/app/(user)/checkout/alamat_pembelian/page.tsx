import { Metadata } from "next";
import React from "react";
import Form from "./Form";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";

export const metadata: Metadata = {
  title: "Alamat Pembelian",
};

export default async function Shipping() {
  const session = await getServerSession(authOption);
  return <Form session={session!} />;
}
