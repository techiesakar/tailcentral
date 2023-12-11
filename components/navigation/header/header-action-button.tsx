"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModal } from "@/hooks/use-modal-store";

export const ActionButton = () => {
  const { onOpen } = useModal();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default"> Add +</Button>
      </PopoverTrigger>
      <PopoverContent className="mr-2 mt-2 text-sm flex flex-col p-0 transition-all">
        <div
          className="px-4 pt-4 hover:text-sky-600 cursor-pointer"
          onClick={() => onOpen("addBlock")}
        >
          Add Block
        </div>
        <div
          className="px-4 py-4 hover:text-sky-600 cursor-pointer"
          onClick={() => onOpen("addBlock")}
        >
          Add Component
        </div>
      </PopoverContent>
    </Popover>
  );
};
