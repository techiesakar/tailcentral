"use client";
import { useSearchParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentHeader from "./component-header";

const ShowCode = ({ code }: any) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("preview");

  if (search) {
    return <div dangerouslySetInnerHTML={{ __html: code }} />;
  } else {
    return (
      <SyntaxHighlighter language="jsx" style={oneLight}>
        {code}
      </SyntaxHighlighter>
    );
  }
};
export default ShowCode;
