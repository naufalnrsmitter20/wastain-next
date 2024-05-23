import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  redirect("/homepage");
  return <div></div>;
}
