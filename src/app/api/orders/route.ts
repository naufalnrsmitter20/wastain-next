import { round2 } from "@/lib/utils";
import clothes from "@/models/clothesModel";
import OrderModel, { OrderItem } from "@/models/orderModels";
import User from "@/models/userModel";
import connect from "@/utils/mongodb";
import { NextResponse } from "next/server";

const calcPrices = (orderItems: OrderItem[]) => {
  // Calculate the items price
  const itemsPrice = round2(orderItems.reduce((acc, item) => acc + item.harga * item.qty, 0));
  // Calculate the shipping price
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  // Calculate the tax price
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  // Calculate the total price
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export const POST = async (req: Request) => {
  try {
    const payload = await req.json();
    await connect();
    const dbProductPrices = await clothes.find(
      {
        _id: { $in: payload.item.map((x: { _id: string }) => x._id) },
      },
      "harga"
    );
    const dbOrderItems = payload.item.map((x: { _id: string }) => ({
      ...x,
      clothes: x._id,
      harga: dbProductPrices.find((x) => x._id === x._id).harga,
      _id: undefined,
    }));

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } = calcPrices(dbOrderItems);

    const newOrder = new OrderModel({
      items: dbOrderItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress: payload.shippingAddress,
      paymentMethod: payload.paymentMethod,
      user: User.castObject(payload.user),
    });

    const createdOrder = await newOrder.save();
    return NextResponse.json({ message: "Pesanan anda telah dibuat", order: createdOrder }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
