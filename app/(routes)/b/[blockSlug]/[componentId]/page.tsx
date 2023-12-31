import React from "react";
import client from "@/app/utils/db";
import ShowCode from "../_components/show-code";
import ComponentHeader from "../_components/component-header";
import { convertHtmlToJsx } from "@/hooks/use-html-jsx";
import "./component.css"
import { NotFound } from "@/components/common/404";
type ParamsType = {
  params: {
    blockSlug: string;
    componentId: string;
  };
};

const SingleComponentPage = async ({ params }: ParamsType) => {
  const fetchComponent = await client.component.findUnique({
    where: {
      id: parseInt(params.componentId),
      blockSlug: params.blockSlug
    },
  });
  if (fetchComponent) {
    const jsx = convertHtmlToJsx(fetchComponent?.code as string)
    return (
      <>
        <ComponentHeader
          title="Preview"
          code={fetchComponent?.code}
          blockSlug={params.blockSlug} jsx={jsx}
        />
        <ShowCode code={fetchComponent?.code} jsx={jsx} />
      </>
    );

  }
  return <NotFound />



};

export default SingleComponentPage;
