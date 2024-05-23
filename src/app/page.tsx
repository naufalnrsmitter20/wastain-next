import Image from "next/image";
import Navbars from "./(user)/Components/Navbar";
import Jumbotron from "./(user)/Components/Jumbotron";
import Kategori from "./(user)/Components/Kategori";
import Diskon from "./(user)/Components/Diskon";
import banyakDicari from "./(user)/Components/banyakDicari";

export default function page() {
  return (
    <>
      <Navbars />
      <Jumbotron />
      <Kategori />
      <Diskon />
      <banyakDicari />
    </>
  );
}
