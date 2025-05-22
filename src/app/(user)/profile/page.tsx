import React from "react";
import ProfileHeader from "../Components/profiles/ProfileHeader";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";
import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";

export default async function profilePage() {
  const session = await getServerSession(authOption);
  const orderData = await prisma.order.findMany({
    where: {
      userId: session?.user?.id.toString(),
    },
    include: {
      item: true,
      user: true,
    },
  });
  if (session?.user?.role === "Admin") return redirect("/admin");
  return (
    <>
      <ProfileHeader order={orderData} />
    </>
  );
}
