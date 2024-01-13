"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { categorySchema } from "@/schemas";

export const register = async (values: z.infer<typeof categorySchema>) => {
  const validatedFields = categorySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { name } = validatedFields.data;

  const existingCategory = await db.category.findFirst({
    where: {
      name,
    },
  });

  if (existingCategory) {
    return { error: "Categoria ya existe." };
  }

  await db.category.create({
    data: {
      name,
    },
  });

  return { success: "Categoria creada!" };
};
export const getCategories = async () => {
  const categories = await db.category.findMany();

  return { categories };
};

export const editCategory = async (
  id: string,
  values: z.infer<typeof categorySchema>
) => {
  const validatedFields = categorySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name } = validatedFields.data;

  const existingCategory = await db.category.findUnique({
    where: {
      id,
    },
  });

  if (!existingCategory) {
    return { error: "Categoria no existe!" };
  }

  const existingNameCategory = await db.category.findFirst({
    where: {
      name,
    },
  });

  if (existingNameCategory) {
    return { error: "Categoria ya existe." };
  }

  await db.category.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return { success: "Categoria actualizada!" };
};
