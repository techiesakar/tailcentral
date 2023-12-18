import React from "react";
import client from "@/app/utils/db";
import CodeHighlighter from "@/components/pages/component/code-highlighter";
type ParamsType = {
  params: {
    componentId: string;
  };
};

const SingleComponentPage = async ({ params }: ParamsType) => {
  const fetchComponent = await client.component.findUnique({
    where: {
      id: params.componentId,
    },
  });
  return (
    <div>
      <CodeHighlighter code={fetchComponent?.code} />
    </div>
  );
};

export default SingleComponentPage;
