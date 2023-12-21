"use client";
import { convertHtmlToJsx } from "@/hooks/use-html-jsx";
import { Check, Code, Copy, Cross, Eye, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

type PropsType = {
  title: string;
  code?: string;
  blockSlug: string;
  jsx?: string
};
const ComponentHeader = ({ title, code, blockSlug, jsx }: PropsType) => {
  const router = useRouter()
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const modeType = searchParams.get("mode");

  const componentId = pathname.split("/").pop();

  const onCopy = () => {

    if (modeType === "jsx") {
      navigator.clipboard.writeText(jsx || "");
    }
    else {
      navigator.clipboard.writeText(code || "");
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <header className=" bg-gray-100 h-14 border-b">
      <div className="bottom border-x-0 border-b-0  flex items-center justify-between border h-14 px-6">
        <h1 >{modeType === "preview" && "Preview"} {modeType === "jsx" && "JSX"} {modeType === "html" && "HTML"}</h1>
        <div className="flex items-center">
          <Eye onClick={() => router.push(`/b/${blockSlug}/` + componentId + "?mode=preview")} className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          <FaReact onClick={() => router.push(`/b/${blockSlug}/` + componentId + "?mode=jsx")} className="h-14 border-l text-gray-400 cursor-pointer hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          <Code onClick={() => router.push(`/b/${blockSlug}/` + componentId + "?mode=html")} className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          {copied ? (
            <Check className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />
          ) : (
            <Copy
              onClick={onCopy}
              className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4"
            />
          )}


          <X onClick={() => router.push(`/b/${blockSlug}`)} className="h-14 border-l text-gray-400 cursor-pointer  hover:text-indigo-500 transition-all duration-300 w-14  p-4" />

        </div>
      </div>
    </header>
  );
};

export default ComponentHeader;
