import { StaticImageData } from "next/image";

export type dataClothes = {
  _id?: string;
  nama_barang: string;
  slug: string;
  kategori: string;
  tipe?: string;
  harga: number;
  stok?: number;
  rating?: number;
  deskripsi: string;
  image: StaticImageData;
};