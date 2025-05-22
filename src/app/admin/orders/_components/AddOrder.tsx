"use client";
import { PrimaryButton } from "@/app/(user)/Components/utilities/Buttons";
import React, { useState } from "react";
import Modal from "./Modal";

export default function AddOrder() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <PrimaryButton className="text-sm px-4 py-2" type="button" onClick={() => setModal(true)}>
        Add Product
      </PrimaryButton>
      {modal && <Modal setIsOpenModal={setModal} />}
    </>
  );
}
