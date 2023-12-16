"use client";
import { PowerIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <PowerIcon
      onClick={() => signOut()}
      className="text-gray-500  transition-all duration-200 p-2 h-10  w-10  rounded-full  cursor-pointer"
    />
  );
};
