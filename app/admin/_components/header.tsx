import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SidebarDrawer } from "@/components/drawers/sidebar-drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="h-20 p-5 flex justify-between items-center">
      <div className="flex-grow">
        <SidebarDrawer />
      </div>
      <div className="flex items-center">
        <ThemeSwitcher />
        <span className="text-sm mx-2">Juan Perez</span>
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
