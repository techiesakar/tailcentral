import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import client from "@/app/utils/db";

import { ScrollItems } from "./public-scroll-items";

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
    <>
      <header className=" bg-gray-100 flex ">
        <Link href="/" className="h-16 flex">
          <Image
            src={Logo}
            height={64}
            width={180}
            priority
            alt=""
            className="px-3 "
          />
        </Link>
      </header>
      <ScrollItems navItems={navItems} />
    </>
  );
};

export default Sidebar;
