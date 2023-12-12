"use client";
import { usePathname } from "next/navigation";

export const HeaderTitle = () => {
  const pathName = usePathname();
  const slugTitle = pathName.split("/").pop();
  const formattedTitle = slugTitle?.split("-").join(" ");

  return <h1 className="text-lg capitalize">{formattedTitle || "Blocks"}</h1>;
};
