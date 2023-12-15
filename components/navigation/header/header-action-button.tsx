"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModal } from "@/hooks/use-modal-store";
import { Plus } from "lucide-react";
import Link from "next/link";

export const ActionButton = () => {
  const { onOpen } = useModal();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Plus className="text-gray-500 hover:bg-slate-300 transition-all duration-200 p-2 h-10  w-10 bg-slate-200 rounded-full  cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="mr-2 mt-2  flex flex-col p-0 transition-all">
        <div
          className="px-4 pt-4 hover:text-sky-600 cursor-pointer"
          onClick={() => onOpen("addBlock")}
        >
          Add Block
        </div>

        <div
          className="px-4 py-4 hover:text-sky-600 cursor-pointer"
          onClick={() => onOpen("addComponent")}
        >
          Add Component
        </div>
      </PopoverContent>
    </Popover>
  );
};
