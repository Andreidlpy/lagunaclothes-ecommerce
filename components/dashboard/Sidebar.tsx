"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Box, LayoutDashboard, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Menus = [
  { title: "dashboard", icon: <LayoutDashboard /> },
  { title: "products", icon: <Box /> },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-black w-20 transition-all relative dark:bg-white p-5 pt-8 h-screen",
        open ? "w-72" : "w-20"
      )}
    >
      <ArrowRight
        onClick={() => setOpen(!open)}
        className={cn(
          "w-8 h-8 cursor-pointer border-muted-foreground border rounded-full p-2 absolute -right-3 top-9 bg-white",
          open && "rotate-180"
        )}
      />
      <div className="inline-flex">
        <MapPin className="bg-white block float-left mr-2 cursor-pointer w-8 h-8 rounded" />
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
            href={`/lg-admin/${menu.title}`}
            key={index}
            className={cn(
              "text-white dark:text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/70 hover:text-black transition duration-300 rounded-md mt-2",
              pathname === `/lg-admin/${menu.title}` && "bg-white/70"
            )}
          >
            <span className="float-left block">{menu.icon}</span>
            <span
              className={cn(
                "font-medium text-base flex-1 capitalize",
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
