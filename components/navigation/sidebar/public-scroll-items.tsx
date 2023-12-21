"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const ScrollItems = ({ navItems }: any) => {

  const pathName = usePathname();
  const block_slug = pathName.split("/b/")[1]?.split("/")[0]

  const [queryString, setQueryString] = useState("");

  const filteredItems = useMemo(() => {
    const lowercaseInput = queryString.toLowerCase();
    return navItems.filter((item: any) =>
      item.title.toLowerCase().includes(lowercaseInput)
    );
  }, [queryString, navItems]);

  return (
    <>
      <div className="border-t">
        <Input
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
          placeholder="Filter..."
          className="block rounded-none focus-visible:ring-0 focus-visible:outline-0 border-0 focus-visible:ring-offset-0 text-base bg-gray-100 h-14  px-3"
        />
      </div>
      {filteredItems && (
        <ScrollArea className="h-full  w-full border-t">
          <div className="bg-gray-50">
            {filteredItems?.map((item: any) => (
              <Link
                href={`/b/${item.slug}`}
                key={item.id}
                className={cn("capitalize  py-4 px-3 border-b flex items-center justify-between border-gray-200", block_slug == item.slug && "text-blue-600")}
              >
                <span> {item.title}</span>
                <span className="bg-gray-200/60 px-2 py-1 rounded-md text-xs text-gray-600">
                  {item.components.length}
                </span>
              </Link>
            ))}
          </div>
        </ScrollArea>
      )}
    </>
  );
};
