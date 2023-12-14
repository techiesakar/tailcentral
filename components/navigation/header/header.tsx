import { auth } from "@/auth";
import { ActionButton } from "./header-action-button";
import { HeaderTitle } from "./header-title";
import { LogoutButton } from "./logout-btn";
import { findAdmin } from "@/app/action";

export const Header = async () => {
  const isAdmin = await findAdmin();
  const session = await auth();
  return (
    <header className="">
      <div className="bg-gray-100 px-6 h-16 rounded-xl flex justify-between items-center">
        <HeaderTitle />
        <div className="flex gap-3">
          {session && <LogoutButton />}
          {isAdmin && <ActionButton />}
        </div>
      </div>
    </header>
  );
};
