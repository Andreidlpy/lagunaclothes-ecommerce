"use client";
import { AddDrawer } from "@/components/drawers/add-drawer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Nombre requerido!" }).toLowerCase(),
  description: z
    .string()
    .max(500, { message: "500 letras maximos" })
    .optional(),
  price: z.coerce.number().positive({ message: "Precio debe ser mayor a 0" }),
});

export const FormDrawer = ({ isEditing = true }: { isEditing?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const createProduct = isEditing ? "Crear Producto" : "Editar Producto";
  const buttonSave = isEditing ? "Guardar" : "Editar";
  const addProduct = isEditing ? "Añadir Producto" : "Editar Producto";

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    console.log("open");
  }, [isOpen]);

  return (
    <AddDrawer
      isOpen={isOpen}
      setOpen={setIsOpen}
      textButton={addProduct}
      title={createProduct}
    >
      <Separator className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      disabled={false}
                      {...field}
                      type="text"
                      placeholder="Nombre..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={false}
                      {...field}
                      placeholder="Description..."
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input
                      disabled={false}
                      {...field}
                      type="number"
                      placeholder="00.00"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            {buttonSave}
          </Button>
        </form>
      </Form>
    </AddDrawer>
  );
};
