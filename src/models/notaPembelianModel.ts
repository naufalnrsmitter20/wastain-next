// notaPembelianModel.ts
import { Schema } from "mongoose";

export interface INotaPembelian {
  nomor_nota: string;
  daftar_barang: string[];
  metode_pembayaran: string;
  nama_produk: string;
  tanggal_pembelian: Date;
  subtotal: number;
  pajak: number;
  diskon: number;
  status_pembayaran: string;
}

const notaPembelianSchema = new Schema<INotaPembelian>({
  nomor_nota: {
    type: String,
    required: true,
  },
  daftar_barang: {
    type: [String],
    required: true,
  },
  metode_pembayaran: {
    type: String,
    enum: ["kartu kredit", "transfer bank", "tunai"],
    required: true,
  },
  nama_produk: {
    type: String,
    required: true,
  },
  tanggal_pembelian: {
    type: Date,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  pajak: {
    type: Number,
    required: true,
  },
  diskon: {
    type: Number,
    required: true,
  },
  status_pembayaran: {
    type: String,
    enum: ["lunas", "belum lunas", "belum dibayar"],
    required: true,
  },
});

export default notaPembelianSchema;
