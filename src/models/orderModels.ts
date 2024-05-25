import mongoose, { Schema } from "mongoose";
import { StaticImageData } from "next/image";

const orderModels = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        products: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        nama_barang: { type: String, required: true },
        slug: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        harga: { type: Number, required: true },
        kategori: { type: String, required: true },
        tipe: { type: String, required: true },
        diskon: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      username: { type: String, required: true },
      alamat: { type: String, required: true },
      kota: { type: String, required: true },
      kode_pos: { type: String, required: true },
      negara: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const OrderModel = mongoose.models.Order || mongoose.model("Order", orderModels);
export default OrderModel;

export type Order = {
  _id: string;
  user?: { name: string };
  items: [OrderItem];
  shippingAddress: {
    username: string;
    alamat: string;
    kota: string;
    kode_pos: string;
    negara: string;
  };
  paymentMethod: string;
  paymentResult?: { id: string; status: string; email_address: string };
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
};

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
