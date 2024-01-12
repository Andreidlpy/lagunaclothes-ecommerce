"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";

import { useEffect, useState } from "react";
import { Button } from "./button";

interface DrawerProps {
  children: React.ReactNode;
  title: string;
  side?: "left" | "top" | "bottom" | "right";
  isButton?: boolean;
  textButton?: string;
}

export const Drawer = ({
  children,
  title,
  side,
  isButton = false,
  textButton,
}: DrawerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        {isButton ? (
          <Button className="font-light text-sm py-0" size={"sm"}>
            <Plus className="size-4 mr-2" />
            {textButton}
          </Button>
        ) : (
          <Menu />
        )}
      </SheetTrigger>
      <SheetContent side={side} className="w-[200px] max-w-full">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
