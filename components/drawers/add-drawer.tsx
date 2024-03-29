"use client";
import { useEffect, useState } from "react";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type AddDrawer = {
  children: React.ReactNode;
  title: string;
  textButton: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: React.ReactElement;
};

export const AddDrawer = ({
  children,
  title,
  textButton,
  setOpen,
  isOpen,
  icon,
}: AddDrawer) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
      <SheetTrigger asChild className="cursor-pointer">
        <Button size={"sm"} className="text-sm py-0 font-light">
          {icon}
          {textButton}
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="w-full overflow-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
