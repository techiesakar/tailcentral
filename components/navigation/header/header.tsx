import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

import { ActionButton } from "./header-action-button";
import { HeaderTitle } from "./header-title";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="">
      <div className="bg-gray-100 px-6 h-16 rounded-xl flex justify-between items-center">
        <HeaderTitle />
        <div>{session && <ActionButton />}</div>
      </div>
    </header>
  );
};
