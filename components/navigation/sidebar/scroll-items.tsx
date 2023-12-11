"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavItemsType } from "@/app/lib/definitions";
import { Input } from "@/components/ui/input";

export const ScrollItems = () => {
  const [navItems, setNavItems] = useState<NavItemsType[]>([]);

  const [queryString, setQueryString] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/blocks`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      return data.blocks;
    } catch (error) {
      return [];
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setNavItems(data);
    };
    loadData();
  }, [fetchData]);

  const filteredItems = useMemo(() => {
    const lowercaseInput = queryString.toLowerCase();
    return navItems.filter((item) =>
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
        <ScrollArea className="flex-1  w-full rounded-md">
          <div className="bg-gray-50">
            {filteredItems?.map((item: any) => (
              <div
                key={item.id}
                className="capitalize  py-4 px-3 border-b flex items-center justify-between border-gray-200"
              >
                <span> {item.title}</span>
                <span className="bg-gray-200/60 px-2 py-1 rounded-md text-xs text-gray-600">
                  {item.components.length}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </>
  );
};
