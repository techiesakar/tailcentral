"use client";
import { useSearchParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import parse from 'html-react-parser';

import { convertHtmlToJsx } from "@/hooks/use-html-jsx";


const ShowCode = ({ code }: any) => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const jsx = convertHtmlToJsx(code as string)

  if (mode === "preview") {
    return (
      <div className="code-preview">
        {parse(
          code || ""
        )}
      </div>
    )
  }


  else if (mode === "jsx") {
    return (
      <div className="code-area flex-1 h-full overflow-scroll">
        <SyntaxHighlighter language="jsx" style={oneLight} wrapLongLines={true}>
          {jsx}
        </SyntaxHighlighter></div>
    );
  }
  else {
    return (
      <div className="code-area flex-1 h-full overflow-scroll">
        <SyntaxHighlighter language="jsx" style={oneLight} wrapLongLines={true}>
          {code}
        </SyntaxHighlighter></div>
    );
  }
};
export default ShowCode;
