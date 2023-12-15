import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { PrivateScrollItems } from "./private-scroll-items";

const PrivateSidebar = async ({ className }: { className?: string }) => {
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
      <PrivateScrollItems />
    </>
  );
};

export default PrivateSidebar;
