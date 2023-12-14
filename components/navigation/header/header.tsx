import { useSession } from "next-auth/react";
import { ActionButton } from "./header-action-button";
import { HeaderTitle } from "./header-title";
import { LogoutButton } from "./logout-btn";
import { getServerSession } from "next-auth";

export const Header = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <header className="">
      <div className="bg-gray-100 px-6 h-16 rounded-xl flex justify-between items-center">
        <HeaderTitle />

        <div className="flex gap-3">
          {session && (
            <>
              <LogoutButton />
              <ActionButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
