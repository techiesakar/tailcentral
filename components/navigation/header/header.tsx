"use client";
import { usePathname } from "next/navigation";
import { ActionButton } from "./header-action-button";

export const Header = () => {
  const pathName = usePathname();

  const slugTitle = pathName.split("/").pop();
  const formattedTitle = slugTitle?.split("-").join(" ");
  return (
    <header className="">
      <div className="bg-gray-100 px-6 h-16 rounded-xl flex justify-between items-center">
        <h1 className="text-lg capitalize">{formattedTitle || "Blocks"}</h1>
        <div>
          <ActionButton />
        </div>
      </div>
    </header>
  );
};
