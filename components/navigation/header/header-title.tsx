"use client";
import { usePathname } from "next/navigation";

export const HeaderTitle = () => {
  const pathName = usePathname();
  const BlockTitle = pathName.split("/b/")[1]?.split("/")[0]?.split("-")?.join(" ")

  if (BlockTitle) {
    return (
      <h1 className="text-lg capitalize">
        {BlockTitle || "Blocks"}
      </h1>
    );
  }
  return null
}

