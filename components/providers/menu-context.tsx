"use client";
import React, { createContext, useContext, useState } from "react";

type MenuContextType = {
  open: boolean;
  SetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export default function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, SetOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        open,
        SetOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

// custom hook

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Menu Context is used outside the provider");
  }
  return context;
}
