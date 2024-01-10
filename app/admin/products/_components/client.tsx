import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { PlusIcon } from "lucide-react";
import React from "react";
import { columns } from "./columns";
import { payments } from "./data";

export const ProductClient = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Products"
          description="Manage products for your store"
        />
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
      <DataTable columns={columns} data={payments} searchKey="status" />
    </>
  );
};
