import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import React from "react";
import { columns } from "./columns";
import { payments } from "./data";

export const ProductClient = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Orders"
          description="Manage yout orders for your store"
        />
      </div>
      <div className="w-96 min-w-full">
        <DataTable columns={columns} data={payments} searchKey="user" />
      </div>
    </>
  );
};
