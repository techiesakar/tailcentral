import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";

export const Header = () => {
  return (
    <header className="p-3">
      <div className="bg-gray-100 h-14 rounded-xl flex justify-between items-center">
        <h1>Header</h1>
      </div>
    </header>
  );
};
