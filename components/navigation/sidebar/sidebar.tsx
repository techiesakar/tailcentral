import Link from "next/link";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { ScrollItems } from "./scroll-items";

export const revalidate = 1;

const Sidebar = async ({ className }: { className?: string }) => {
  const navItems = await fetch("http://localhost:3000/api/blocks", {
    next: {
      tags: ["blocks"],
    },
  });

  const products = await navItems.json();
  return (
    <aside
      className={cn(
        "fixed inset-y-0 h-screen flex flex-col left-0 border-r",
        className
      )}
    >
      <header className="h-16">
        <Link href="/">
          <Image
            src={Logo}
            height={60}
            width={180}
            priority
            alt=""
            className=" px-3 py-3"
          />
        </Link>
      </header>
      <ScrollItems navItems={products.result} />
    </aside>
  );
};

export default Sidebar;
