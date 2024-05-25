import { auth } from "@/lib/AuthOption";
import { round2 } from "@/lib/utils";
import clothes from "@/models/clothesModel";
import OrderModel, { OrderItem } from "@/models/orderModels";
import connect from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

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

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return NextResponse.json(
      { message: "unauthorized" },
      {
        status: 401,
      }
    );
  }
  const { user } = req.auth;
  try {
    const payload = await req.json();
    await connect();
    const dbProductPrices = await clothes.find(
      {
        _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
      },
      "harga"
    );
    const dbOrderItems = payload.items.map((x: { _id: string }) => ({
      ...x,
      products: x._id,
      harga: dbProductPrices.find((x) => x._id === x._id).price,
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
      user: user._id,
    });

    const createdOrder = await newOrder.save();
    return Response.json(
      { message: "Pesanan anda telah dibuat", order: createdOrder },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}) as any;
