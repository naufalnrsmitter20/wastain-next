import React from "react";
import ProfileHeader from "../Components/profiles/ProfileHeader";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";
import prisma from "@/utils/prisma";

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
  return (
    <>
      <ProfileHeader order={orderData} />
    </>
  );
}
