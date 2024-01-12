"use server";

import { db } from "@/lib/db";

type Product = {
  description: string;
  hasVariant?: boolean;
  name: string;
  normalPrice: number;
  newPrice?: number;
  active: boolean;
  categoryId: string;
};

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
