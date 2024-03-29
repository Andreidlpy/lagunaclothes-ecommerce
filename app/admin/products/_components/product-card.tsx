"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit } from "lucide-react";
import { FormDrawer } from "./form-drawer";

type ProductCardProps = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

export const ProductCard = ({
  first_name,
  last_name,
  email,
  phone,
}: ProductCardProps) => {
  return (
    <>
      <Card className="overflow-hidden relative flex flex-col justify-center">
        <CardHeader>
          <Image
            src={"https://github.com/shadcn.png"}
            alt="product-image"
            width={250}
            height={250}
            className="rounded-md overflow-hidden self-center"
          />
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="-top-2 right-0 absolute cursor-pointer px-2"
            >
              <Button
                variant="link"
                className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <span className="sr-only">Open menu</span>
                <IoEllipsisVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="">
          <h2 className="font-semibold uppercase">{first_name}</h2>
          <p className="py-4 font-light text-sm text-balance">{last_name}</p>
          <span className="py-2 font-semibold text-xl truncate block">
            {email}
          </span>
        </CardContent>
      </Card>
    </>
  );
};
