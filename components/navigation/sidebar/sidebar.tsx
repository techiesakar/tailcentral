import Link from "next/link";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { ScrollItems } from "./scroll-items";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 h-screen flex flex-col left-0 border-r",
        className
      )}
    >
      <header>
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
      <ScrollItems />
    </aside>
  );
};
