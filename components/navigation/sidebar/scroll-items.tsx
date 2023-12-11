"use client";
import { useMemo, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export const ScrollItems = ({ navItems }: any) => {
  const [queryString, setQueryString] = useState("");

  const filteredItems = useMemo(() => {
    const lowercaseInput = queryString.toLowerCase();
    return navItems.filter((item: any) =>
      item.title.toLowerCase().includes(lowercaseInput)
    );
  }, [queryString, navItems]);

  return (
    <>
      <Input
        onChange={(e) => {
          setQueryString(e.target.value);
        }}
        placeholder="Filter..."
        className="focus-visible:ring-0 focus-visible:outline-0 border-x-0 text-base bg-gray-100 h-14  px-3"
      />
      {filteredItems && (
        <ScrollArea className="h-full  w-full rounded-md">
          <div className="bg-gray-50">
            {filteredItems?.map((item: any) => (
              <Link
                href={`/b/${item.slug}`}
                key={item.id}
                className="capitalize  py-4 px-3 border-b flex items-center justify-between border-gray-200"
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
