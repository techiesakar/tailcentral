import { auth } from "@/auth";
import { ActionButton } from "./header-action-button";
import { HeaderTitle } from "./header-title";
import { LogoutButton } from "./logout-btn";
import { MenuToggleButton } from "./menu-toggle-button";
import { findAdmin } from "@/app/action";
import { MobileLogo } from "./mobile-logo";


export const Header = async () => {
  const isAdmin = await findAdmin();
  const session = await auth();

  return (
    <header className="bg-gray-100 px-6 border-l-0 border border-stone-200  z-50  flex justify-between items-center ">
      <MobileLogo />
      <div className="flex gap-3 flex-1 justify-end items-center h-16">
        {session && <LogoutButton />}
        {isAdmin &&
          <ActionButton />
        }
        <MenuToggleButton />
      </div>
    </header>
  );
};
