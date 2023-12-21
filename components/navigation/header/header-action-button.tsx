"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const ActionButton = () => {
  const { onOpen } = useModal();
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Plus className="w-8 h-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={14} className="mr-4 w-[200px] p-0">
        <DropdownMenuItem onClick={() => onOpen("addBlock")} className="border-b transition-all duration-50 border-gray-100 hover:bg-gray-50 cursor-pointer p-3">Add Block</DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/add")} className="cursor-pointer transition-all duration-50 p-3 hover:bg-gray-50">Add Component</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
