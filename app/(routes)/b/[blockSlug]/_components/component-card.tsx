"use client";
import { Check, Code, Copy, Eye } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";

type CardType = {
  title?: string | null | undefined;
  id?: number;
  code: string;
  jsx?: string
  lightThumb: string | null;
  darkThumb: string | null
};

type BlockProps = {
  card: CardType;
  blockSlug: string
};
export const ComponentCard = ({ card, blockSlug, }: BlockProps) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const modeType = searchParams.get("mode");

  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    if (modeType === "jsx") {
      navigator.clipboard.writeText(card.jsx || "");
    }
    else {
      navigator.clipboard.writeText(card.code || "");
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="border border-gray-200  flex flex-col bg-gray-50">
      <div className="flex-1 p-8 relative">
        <Image
          src={card.lightThumb || "/block.svg"}
          width={500}
          height={300}
          alt="banner"
          className="border"
        />
      </div>

      <div className="bottom border-x-0 border-b-0 bg-white flex items-center justify-end border h-14">
        <Eye onClick={() => router.push(`/b/${blockSlug}/` + card.id + "?mode=preview")} className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
        <FaReact onClick={() => router.push(`/b/${blockSlug}/` + card.id + "?mode=jsx")} className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
        <Code onClick={() => router.push(`/b/${blockSlug}/` + card.id + "?mode=html")} className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
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
