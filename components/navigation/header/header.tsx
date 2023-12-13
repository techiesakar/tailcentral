import { getServerSession } from "next-auth";
import { ActionButton } from "./header-action-button";
import { HeaderTitle } from "./header-title";
import { LogoutButton } from "./logout-btn";
import { authOptions } from "@/app/utils/auth";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="">
      <div className="bg-gray-100 px-6 h-16 rounded-xl flex justify-between items-center">
        <HeaderTitle />
        {session && session.user?.email === "techiesakar@gmail.com" && (
          <div className="flex gap-3">
            <LogoutButton />
            <ActionButton />
          </div>
        )}
      </div>
    </header>
  );
};
