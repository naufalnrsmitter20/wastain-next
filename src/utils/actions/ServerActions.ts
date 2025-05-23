"use server";

import { authOption } from "@/lib/AuthOption";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { Kategori, Prisma, Role } from "@prisma/client";
import { hash } from "bcrypt";
import { UploadImageCloudinary } from "./uploadImage";
import { cartStore, initialState } from "@/lib/hooks/useCartStore";

export const updateUserById = async (id: string | null, data: FormData) => {
  try {
    const email = data.get("email") as string;
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    const role = data.get("role") as Role;

    const findEmail = await prisma.user.findFirst({
      where: { email },
    });

    if (!findEmail && id == null) {
      const userPassword = password;
      const hashedPassword = await hash(userPassword, 10);

      const create = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          role,
        },
      });
      if (!create) throw new Error("Create failed");
      revalidatePath("/admin/users");
      revalidatePath("/admin/dashboard");
    } else if (id) {
      const findUserById = await prisma.user.findFirst({
        where: { id },
      });
      if (findUserById) {
        const hashedPassword = await hash(password, 10);
        const update = await prisma.user.update({
          where: { id: id ?? findUserById.id },
          data: {
            email: email ?? findUserById.email,
            username: username ?? findUserById.username,
            password: password ? hashedPassword : findUserById.password,
            role: role ?? findUserById.role,
          },
        });
        if (!update) throw new Error("Update failed");
      } else throw new Error("User not found");
    }
    revalidatePath("/admin/users");
    return { message: "Success to update Users", error: false };
  } catch (error) {
    console.error((error as Error).message);
    return {
      message: "Failed to Update User",
      error: true,
    };
  }
};

export const deleteUserById = async (id: string) => {
  try {
    const session = await getServerSession(authOption);
    const del = await prisma.user.delete({
      where: { id },
    });
    if (!del) throw new Error("Delete failed");
    else {
      revalidatePath("/admin/users");
      revalidatePath("/admin/dashboard");
      return { message: "Success to Delete!", error: false };
    }
  } catch (e) {
    console.error((e as Error).message);
    return {
      message: "Failed to Delete",
      error: true,
    };
  }
};

export const updateProductById = async (id: string | null, data: FormData) => {
  try {
    const nama_barang = data.get("nama_barang") as string;
    const slug = data.get("slug") as string;
    const kategori = data.get("kategori") as Kategori;
    const tipe = data.get("tipe") as string;
    const harga = data.get("harga") as string;
    const stok = data.get("stok") as string;
    const location = data.get("location") as string;
    const rating = data.get("rating") as string;
    const diskon = data.get("diskon") as string;
    const deskripsi = data.get("deskripsi") as string;
    const isFeatured = data.get("isFeatured") as string;
    // const image = data.get("image") as File;

    // const ArrayBuffer = await image.arrayBuffer();
    // const upload = await UploadImageCloudinary(Buffer.from(ArrayBuffer));

    const rawImage = data.get("image");
    let imageUrl: string | null = null;

    if (rawImage instanceof File && rawImage.size > 0) {
      const arrayBuffer = await rawImage.arrayBuffer();
      const upload = await UploadImageCloudinary(Buffer.from(arrayBuffer));
      imageUrl = upload.data?.url || null;
    }

    const findEmail = await prisma.products.findFirst({
      where: { slug },
    });

    if (!findEmail && id == null) {
      const create = await prisma.products.create({
        data: {
          nama_barang,
          slug: slug ?? nama_barang.replace(/\s+/g, "-").toLowerCase(),
          kategori,
          tipe,
          harga: parseFloat(harga) || 0,
          stok: parseInt(stok) || 0,
          location,
          rating: parseFloat(rating) || 0,
          diskon: parseFloat(diskon) || 0,
          deskripsi,
          image: imageUrl || "",
          isFeatured: isFeatured === "true" ? true : false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      if (!create) throw new Error("Create failed");
      revalidatePath("/admin/users");
      revalidatePath("/admin/dashboard");
    } else if (id) {
      const findProductById = await prisma.products.findFirst({
        where: { id },
      });
      if (findProductById) {
        const update = await prisma.products.update({
          where: { id: id ?? findProductById.id },
          data: {
            nama_barang: nama_barang ?? findProductById.nama_barang,
            slug: slug ?? nama_barang.replace(/\s+/g, "-").toLowerCase() ?? findProductById.slug,
            kategori: kategori ?? findProductById.kategori,
            tipe: tipe ?? findProductById.tipe,
            harga: parseFloat(harga) ?? findProductById.harga,
            stok: parseInt(stok) ?? findProductById.stok,
            location: location ?? findProductById.location,
            rating: parseFloat(rating) ?? findProductById.rating,
            diskon: parseFloat(diskon) ?? findProductById.diskon,
            deskripsi: deskripsi ?? findProductById.deskripsi,
            image: (imageUrl || "") ?? findProductById.image,
            isFeatured: isFeatured === "true" ? true : false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
        if (!update) throw new Error("Update failed");
      } else throw new Error("User not found");
    }
    revalidatePath("/admin/products");
    return { message: "Success to update Users", error: false };
  } catch (error) {
    console.error((error as Error).message);
    return {
      message: "Failed to Update User",
      error: true,
    };
  }
};

export const deleteProductById = async (id: string) => {
  try {
    const session = await getServerSession(authOption);
    const del = await prisma.products.delete({
      where: { id },
    });
    if (!del) throw new Error("Delete failed");
    else {
      revalidatePath("/admin/products");
      return { message: "Success to Delete!", error: false };
    }
  } catch (e) {
    console.error((e as Error).message);
    return {
      message: "Failed to Delete",
      error: true,
    };
  }
};

export const deleteOrderById = async (id: string) => {
  try {
    const session = await getServerSession(authOption);
    const del = await prisma.order.delete({
      where: { id },
    });
    if (!del) throw new Error("Delete failed");
    else {
      revalidatePath("/admin/products");
      return { message: "Success to Delete!", error: false };
    }
  } catch (e) {
    console.error((e as Error).message);
    return {
      message: "Failed to Delete",
      error: true,
    };
  }
};

export const AddtoCartAction = async (data: Prisma.OrderItemGetPayload<{}>[]) => {
  try {
    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("Session not found");
    }

    const cartAction = await prisma.orderItem.createMany({
      data: data.map((item) => ({
        diskon: item.diskon,
        harga: item.harga,
        qty: item.qty,
        slug: item.slug,
        nama_barang: item.nama_barang,
        image: item.image,
        kategori: item.kategori,
        tipe: item.tipe,
        location: item.location,
      })),
    });
    if (!cartAction) throw new Error("Add to cart failed");
    else {
      return { message: "Success to Add to Cart!", error: false };
    }
  } catch (error) {
    console.error((error as Error).message);
    return {
      message: "Failed to Add to Cart",
      error: true,
    };
  }
};

export const CheckoutStepsAction = async (data: any) => {
  try {
    const session = await getServerSession(authOption);
    if (!session) {
      throw new Error("Session not found");
    }
    console.log(session);
    const { paymentMethod, shippingAddress, items, itemsPrice, taxPrice, shippingPrice, totalPriceFix } = data;
    const checkoutAction = await prisma.order.create({
      data: {
        paymentMethod,
        shippingAddress,
        item: {
          create: items.map((item: any) => ({
            nama_barang: item.nama_barang,
            qty: item.qty,
            image: item.image,
            slug: item.slug,
            harga: item.harga,
            kategori: item.kategori,
            tipe: item.tipe,
            location: item.location,
            diskon: item.diskon,
          })),
        },
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice: totalPriceFix,
        user: {
          connect: {
            id: session?.user?.id.toString(),
          },
        },
        deliveredAt: null,
        isPaid: false,
        isDelivered: false,
        paidAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    if (!checkoutAction) throw new Error("Checkout failed");
    else {
      cartStore.setState(initialState);
      revalidatePath("/orders");
      revalidatePath("/homepage");
      revalidatePath("/checkout");
      revalidatePath("/checkout/pembayaran");
      return { message: "Success to Checkout!", error: false };
    }
  } catch (error) {
    console.error((error as Error).message);
    return {
      message: "Failed to Checkout",
      error: true,
    };
  }
};

export const CancelOrderAction = async (id: string) => {
  try {
    const delOrder = await prisma.order.delete({
      where: { id },
    });
    await prisma.orderItem.deleteMany({
      where: { orderId: id },
    });
    if (!delOrder) throw new Error("Delete failed");
    else {
      revalidatePath("/orders");
      revalidatePath("/profile");
      return { message: "Success to Cancel Order!", error: false };
    }
  } catch (error) {
    console.error((error as Error).message);
    return {
      message: "Failed to Cancel Order",
      error: true,
    };
  }
};
