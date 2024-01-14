"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { editCategory } from "@/actions/category";
import { toast } from "sonner";

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  editing?: boolean; // Add this line
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => <p className="truncate w-14">{row.original.id}</p>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const [isEditing, setIsEditing] = useState(false);
      const [isPending, startTransition] = useTransition();
      const [categoryName, setCategoryName] = useState(row.original.name);

      const startEditing = (e: any) => {
        e.stopPropagation();
        setIsEditing(true);
      };

      const stopEditing = async (e: any, id?: string) => {
        e.stopPropagation();
        if (!id) return;
        if (e.key === "Enter") {
          startTransition(() => {
            editCategory(id, { name: categoryName })
              .then((data) => {
                if (data.error) {
                  toast.error(data.error);
                }
                if (data.success) {
                  toast.success(data.success);
                }
              })
              .catch(() => toast.error("Something went wrong!"))
              .finally(() => setIsEditing(false));
          });
        }
      };
      const stopBlurEditing = () => {
        setIsEditing(false);
      };

      const editCategoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
      };

      return (
        <>
          {isEditing ? (
            <Input
              type="text"
              value={categoryName}
              onChange={(e) => {
                e.stopPropagation();
                editCategoryName(e);
              }}
              onBlur={stopBlurEditing}
              onKeyPress={(e) => stopEditing(e, row.original.id)}
              className="max-w-28 focus-visible:ring-2 py-0 h-9 focus-visible:ring-blue-500"
              autoFocus // autoFocus to focus the input when it appears
            />
          ) : (
            <p
              className="w-32 max-w-full cursor-pointer hover:text-blue-500/70 hover:underline transition"
              onClick={startEditing}
            >
              {categoryName}
            </p>
          )}
        </>
      );
    },
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
