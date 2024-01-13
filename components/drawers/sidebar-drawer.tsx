"use client";
import { useEffect, useState } from "react";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export const SidebarDrawer = () => {
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
        <Button variant={"outline"} size={"sm"}>
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="w-[200px] max-w-full">
        <SheetHeader>
          <SheetTitle>KHYO</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
