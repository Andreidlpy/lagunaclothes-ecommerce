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
          title="Orders"
          description="Manage yout orders for your store"
        />
      </div>
      <DataTable columns={columns} data={payments} searchKey="user" />
    </>
  );
};
