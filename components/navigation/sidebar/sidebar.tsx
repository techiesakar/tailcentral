import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { cn } from "@/app/lib/utils";
import client from "@/app/utils/db";

import { ScrollItems } from "./scroll-items";

const Sidebar = async ({ className }: { className?: string }) => {
  const navItems = await client.block.findMany({
    include: {
      components: {
        select: {
          id: true,
        },
      },
    },
  });

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
      <ScrollItems navItems={navItems} />
    </aside>
  );
};

export default Sidebar;
