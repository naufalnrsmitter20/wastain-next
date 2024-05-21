import Image from "next/image";
import Navbars from "./(user)/Components/Navbar";
import Jumbotron from "./(user)/Components/Jumbotron";
import Kategori from "./(user)/Components/Kategori";

export default function page() {
  return (
    <>
      <Navbars />
      <Jumbotron />
      <Kategori />
    </>
  );
}
