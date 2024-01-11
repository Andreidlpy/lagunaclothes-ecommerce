"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ProductCard = () => {
  return (
    <Card className="overflow-hidden relative">
      <CardHeader>
        <Image
          src={"https://github.com/shadcn.png"}
          className="object-cover w-full rounded-md h-full"
          width={50}
          height={40}
          alt="product-image"
        />
        <Button
          variant={"ghost"}
          className="-top-2 right-0 absolute cursor-pointer px-2"
        >
          <IoEllipsisVertical className="size-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <h2 className="font-semibold uppercase">Pantalon Saint</h2>
        <p className="py-4 text-ellipsis font-light text-sm text-balance">
          New range of formal shirts are designed keeping you in mind. With fits
          and
        </p>
        <span className="py-2 font-semibold text-xl">S/1.32</span>
      </CardContent>
    </Card>
  );
};
