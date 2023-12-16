"use client";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivateScrollItems = () => {
  return (
    <>
      <ScrollArea className="h-full  w-full rounded-md">
        <div className="bg-gray-50">
          <Link
            href="/private"
            className="capitalize  py-4 px-3 border-b flex items-center justify-between border-gray-200"
          >
            <span> Add Component</span>
          </Link>
        </div>
      </ScrollArea>
    </>
  );
};
