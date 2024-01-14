"use client";

import { useEffect, useState, useTransition } from "react";
import { AddDrawer as Drawer } from "@/components/drawers/add-drawer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { register } from "@/actions/category";
import { Button } from "@/components/ui/button";
import { categorySchema } from "@/schemas";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { FormError } from "@/components/auth/form-error";
import { Plus } from "lucide-react";

export const AddDrawer = () => {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof categorySchema>) => {
    setError("");
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }
          if (data?.success) {
            setOpen(false);
            form.reset();
            toast.success(data.success);
          }
        })
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  useEffect(() => {
    setError("");
    form.reset();
  }, [open]);

  return (
    <Drawer
      setOpen={setOpen}
      isOpen={open}
      textButton="Añadir Categoria"
      icon={<Plus className="mr-2 size-4" />}
      title="Categorias"
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
                      {...field}
                      disabled={isPending}
                      placeholder="Polos..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <Button disabled={isPending} type="submit" className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </Drawer>
  );
};
