"use client";

import { cn } from "@/lib/utils";

import { PiBag, PiMapPin } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Menus = [
  { title: "dashboard", icon: <AiOutlineDashboard className="size-4" /> },
  { title: "products", icon: <CiBoxes className="size-4" /> },
  { title: "orders", icon: <PiBag className="size-4" /> },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <div className="bg-teal-400 w-52 hidden md:block">Sidebar</div>;
};
