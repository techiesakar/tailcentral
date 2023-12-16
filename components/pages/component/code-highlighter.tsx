"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeHighlighter = ({ code }: any) => {
  return (
    <SyntaxHighlighter language="jsx" style={oneLight}>
      {code}
    </SyntaxHighlighter>
  );
};
export default CodeHighlighter;
