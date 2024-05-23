import { StaticImageData } from "next/image";

export type OrderItem = {
  nama_barang: string;
  slug: string;
  qty: number;
  image: StaticImageData;
  harga: number;
  kategori: string;
  tipe: string;
};
