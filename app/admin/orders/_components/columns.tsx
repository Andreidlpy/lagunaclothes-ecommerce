"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type Order = {
  id: string;
  orderNumber: string;
  status: "pending" | "processing" | "success" | "failed";
  amount: number;
  user: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderNumber",
    header: "Order Number",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
