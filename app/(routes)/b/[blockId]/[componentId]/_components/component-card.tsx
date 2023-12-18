"use client";
import { Check, Code, Copy, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type CardType = {
  title?: string | null | undefined;
  id?: string;
  code: string;
};

type BlockProps = {
  card: CardType;
};
export const ComponentCard = ({ card }: BlockProps) => {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(card.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="border border-gray-200  flex flex-col bg-gray-50">
      <div className="flex-1 p-8 relative">
        <Image
          src="/block.svg"
          width={500}
          height={300}
          alt="banner"
          className="border border-gray-200"
        />
      </div>

      <div className="bottom border-x-0 border-b-0 bg-white flex items-center justify-end border h-14">
        <Link href={`/b/Banner/` + card.id + "?preview=true"}>
          <Eye className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
        </Link>
        <Link href={`/b/Banner/` + card.id}>
          <Code className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
        </Link>
        {copied ? (
          <Check className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
        ) : (
          <Copy
            onClick={onCopy}
            className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4"
          />
        )}
      </div>
    </div>
  );
};
