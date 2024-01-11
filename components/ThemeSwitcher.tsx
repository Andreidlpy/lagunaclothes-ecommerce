import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RxMoon } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = ["light", "dark", "system"];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus-visible:ring-0 px-2 focus-visible:ring-offset-0 border-none"
        >
          <RxMoon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-32 p-1 border rounded-md z-50 opacity-100 bg-background"
        collisionPadding={20}
      >
        <DropdownMenuSeparator />
        {themes.map((them) => (
          <DropdownMenuItem
            key={them}
            className={cn(
              "outline-none px-2 py-1.5 dark:hover:bg-white/10 text-sm capitalize"
            )}
            onClick={() => setTheme(them)}
          >
            {them}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
