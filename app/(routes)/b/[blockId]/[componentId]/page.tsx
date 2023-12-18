import React from "react";
import client from "@/app/utils/db";
import ShowCode from "./_components/show-code";
import ComponentHeader from "./_components/component-header";
type ParamsType = {
  params: {
    blockId: string;
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
    <>
      <ComponentHeader
        title="Preview"
        code={fetchComponent?.code}
        blockID={params?.blockId}
      />

      <ShowCode code={fetchComponent?.code} />
    </>
  );
};

export default SingleComponentPage;
