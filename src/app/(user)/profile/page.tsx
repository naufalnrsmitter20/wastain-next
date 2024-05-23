import React from "react";
import Navbars from "../Components/Navbar";
import ProfileHeader from "../Components/profiles/ProfileHeader";
import HistoriBelanja from "../Components/profiles/HistoriBelanja";

export default function profilePage() {
  return (
    <>
      <ProfileHeader />
      <HistoriBelanja />
    </>
  );
}
