"use server";

import { db } from "@/lib/db";
import { Product } from "@prisma/client";

export const register = async (data: Product) => {
  const {
    categoryId,
    description,
    hasVariant = false,
    name,
    normalPrice,
    newPrice = 0,
    active,
  } = data;

  const existingProduct = await db.product.findFirst({
    where: {
      name,
    },
  });

  if (existingProduct) {
    return { error: "Producto ya existe" };
  }
  const product = await db.product.create({
    data: {
      categoryId,
      description,
      hasVariant: hasVariant,
      name,
      normalPrice,
      newPrice: newPrice,
      active,
    },
  });
  return { product };
};
