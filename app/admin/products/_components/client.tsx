import { Heading } from "@/components/ui/heading";
import React from "react";
import { ListProducts } from "./products-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductsFilter } from "./products-filter";
import { AsideDrawer } from "@/components/modals/aside-modal";
import { Drawer } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

export const ProductClient = () => {
  return (
    <div className="flex gap-3">
      <div className="flex-grow max-w-full sm:max-w-[75%]">
        <div className="flex justify-between items-center pb-5 min-w-full">
          <Heading title="Products" description="Manage your products here" />
          <Drawer
            isButton
            textButton="Añadir Producto"
            title="Añadir Producto"
            side="right"
          >
            <Separator />
          </Drawer>
        </div>
        <ListProducts />
      </div>
      <ProductsFilter />
    </div>
  );
};
