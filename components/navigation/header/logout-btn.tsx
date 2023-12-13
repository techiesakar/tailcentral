"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export const LogoutButton = () => {
  const { data: session, status } = useSession();
  return (
    <Avatar className="h-10 w-10 cursor-pointer">
      <AvatarImage
        onClick={() => signOut()}
        src={session?.user?.image || "https://github.com/shadcn.png"}
      />
    </Avatar>
  );
};
