"use client";
import { useMenuContext } from "@/components/providers/menu-context";
import { useMenuToggle } from "@/hooks/use-menu-toggle-store";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export const MenuToggleButton = () => {
  const { isOpen, onOpen, onClose } = useMenuToggle();

  return (
    <Menu
      className={cn(
        "text-gray-500 hover:bg-slate-300 md:hidden transition-all duration-200 p-2 h-10  w-10 bg-slate-200 rounded-full  cursor-pointer",
        isOpen && "bg-slate-300 "
      )}
      onClick={() => (isOpen ? onClose() : onOpen())}
    />
  );
};
