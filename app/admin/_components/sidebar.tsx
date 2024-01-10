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
  { title: "dashboard", icon: <AiOutlineDashboard /> },
  { title: "products", icon: <CiBoxes /> },
  { title: "orders", icon: <PiBag /> },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-black w-20 transition-all relative dark:bg-white p-5 pt-8",
        open ? "w-52" : "w-20"
      )}
    >
      <MdOutlineArrowRightAlt
        onClick={() => setOpen(!open)}
        className={cn(
          "w-8 h-8 cursor-pointer border-muted-foreground border rounded-full p-2 absolute -right-3 top-9 bg-white",
          open && "rotate-180"
        )}
      />
      <div className="inline-flex">
        <PiMapPin className="bg-white block float-left mr-2 cursor-pointer w-8 h-8 rounded" />
        <h1
          className={cn(
            "text-white dark:text-black text-2xl origin-left font-medium duration-300",
            !open && "scale-0"
          )}
        >
          Tailwind
        </h1>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <Link
            href={`/admin/${menu.title}`}
            key={index}
            className={cn(
              "text-black  text-sm flex items-center gap-x-4 cursor-pointer p-2 dark:bg-opacity-80 hover:bg-white/20 dark:text-white transition duration-300 rounded-md mt-2",
              pathname === `/admin/${menu.title}` && "bg-blue-600"
            )}
          >
            <span className="float-left block">{menu.icon}</span>
            <span
              className={cn(
                "font-light text-sm flex-1 capitalize",
                !open && "hidden"
              )}
            >
              {menu.title}
            </span>
          </Link>
        ))}
      </ul>
    </aside>
  );
};
