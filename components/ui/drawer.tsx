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
      <SheetTrigger className="cursor-pointer">
        {isButton && (
          <Button className="bg-blue-500 text-white font-light">
            <Plus className="size-4 mr-2" />
            {textButton}
          </Button>
        )}
        {!isButton && <Menu />}
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
