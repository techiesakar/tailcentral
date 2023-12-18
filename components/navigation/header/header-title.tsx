"use client";
import { usePathname } from "next/navigation";

export const HeaderTitle = () => {
  const pathName = usePathname();
  console.log(pathName);
  const slugTitle = pathName.split("/").pop();
  const formattedTitle = slugTitle?.split("-").join(" ");
  const showTitle = !pathName.startsWith("/b/Banner/");

  if (showTitle) {
    return (
      <h1 className="text-lg capitalize">
        {formattedTitle || "Blocks"} {}
      </h1>
    );
  }
  return null;
};
