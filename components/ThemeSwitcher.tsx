import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Monitor, Moon, SunMoon } from "lucide-react";
import { FaDesktop } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 right-0 p-5">
      {theme === "dark" && (
        <Button
          className="rounded-full p-2"
          variant={"outline"}
          value={"dark"}
          onClick={() => setTheme("light")}
        >
          <Moon />
        </Button>
      )}
      {theme === "light" && (
        <Button
          className="rounded-full p-2"
          variant={"outline"}
          value={"light"}
          onClick={() => setTheme("dark")}
        >
          <SunMoon />
        </Button>
      )}
    </div>
  );
};
