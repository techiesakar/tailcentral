"use client";
import { Check, Code, Copy, Cross, Eye, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

type PropsType = {
  title: string;
  code?: string;
  blockID: string;
};
const ComponentHeader = ({ title, code, blockID }: PropsType) => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isPreview = !!searchParams.get("preview");
  const componentId = pathname.split("/").pop();
  const onCopy = () => {
    navigator.clipboard.writeText(code || "");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="h-13 bg-gray-100 border-b ">
      <div className="bottom border-x-0 border-b-0  flex items-center justify-between border h-14 px-6">
        <h1>{isPreview ? "Preview" : "Code"}</h1>
        <div className="flex items-center">
          <Link href={`/b/Banner/` + componentId + "?preview=true"}>
            <Eye className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          </Link>
          <Link href={`/b/Banner/` + componentId}>
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

          <Link href={`/b/${blockID}`}>
            <X className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
