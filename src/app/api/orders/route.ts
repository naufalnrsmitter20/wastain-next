import { round2 } from "@/lib/utils";
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

const calcPrices = (orderItems: { harga: number; qty: number }[]) => {
  const itemsPrice = round2(orderItems.reduce((acc, item) => acc + item.harga * item.qty, 0));
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export const POST = async (req: Request) => {
  try {
    const payload = await req.json();

    // Ambil semua harga produk yang valid dari database
    const dbProductPrices = await prisma.products.findMany({
      where: {
        id: { in: payload.item.map((x: { id: string }) => x.id) },
      },
      select: { id: true, harga: true },
    });

    const dbOrderItems = payload.item.map((x: { id: string; qty: number }) => {
      const matchedProduct = dbProductPrices.find((p) => p.id === x.id);
      if (!matchedProduct) throw new Error(`Produk dengan ID ${x.id} tidak ditemukan`);
      return {
        clothesId: matchedProduct.id,
        qty: x.qty,
        harga: matchedProduct.harga,
      };
    });

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } = calcPrices(dbOrderItems);

    const createdOrder = await prisma.order.create({
      data: {
        user: {
          connect: { id: payload.userId },
        },
        item: dbOrderItems,
        shippingAddress: payload.shippingAddress,
        paymentMethod: payload.paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      },
    });

    return NextResponse.json({ message: "Pesanan anda telah dibuat", order: createdOrder }, { status: 201 });
  } catch (err: any) {
    console.error("Error creating order:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
