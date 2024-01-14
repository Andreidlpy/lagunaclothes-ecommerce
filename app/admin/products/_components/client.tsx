import { Heading } from "@/components/ui/heading";
import React from "react";
import { ListProducts } from "./products-list";
import { ProductsFilter } from "./products-filter";
import { FormDrawer } from "./form-drawer";

export const ProductClient = () => {
  return (
    <div className="flex gap-3">
      <div className="flex-grow max-w-full sm:min-w-[75%] mx-auto">
        <div className="flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between pb-5">
          <Heading title="Productos" description="Manage your products here" />
          <FormDrawer />
        </div>
        <ListProducts />
      </div>
      <ProductsFilter />
    </div>
  );
};
