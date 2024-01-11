import { Heading } from "@/components/ui/heading";
import React from "react";
import { ListProducts } from "./products-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductsFilter } from "./products-filter";

export const ProductClient = () => {
  return (
    <div className="flex gap-2">
      <div>
        <div className="flex justify-between items-center p-4">
          <Heading title="Products" description="Manage your products here" />
          <Button>
            <Plus className="mr-2 size-6" />
            Añadir Producto
          </Button>
        </div>
        <ListProducts />
      </div>
      <ProductsFilter />
    </div>
  );
};
