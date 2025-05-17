import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Kategori from "./Components/Kategori";
import Diskon from "./Components/Diskon";
import BanyakDicari from "./Components/banyakDicari";

export default function homepage() {
  return (
    <div>
      <Jumbotron />
      <Kategori />
      <Diskon />
      <BanyakDicari />
    </div>
  );
}
