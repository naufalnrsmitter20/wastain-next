import React from "react";
import Login from "../Components/Login";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/AuthOption";

export default async function login() {
  const session = await getServerSession(authOption);
  return (
    <>
      <Login session={session!} />
    </>
  );
}
