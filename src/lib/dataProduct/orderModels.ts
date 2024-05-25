import { StaticImageData } from "next/image";

export type OrderItem = {
  nama_barang: string;
  slug: string;
  qty: number;
  image: StaticImageData;
  harga: number;
  kategori: string;
  tipe: string;
  diskon?: number;
};

export type shippingAddress = {
  username: string;
  alamat: string;
  kota: string;
  kode_pos: string;
  negara: string;
};
