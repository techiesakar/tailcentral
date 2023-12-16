import client from "@/app/utils/db";
import { ComponentCard } from "@/components/pages/component/component-card";
import React from "react";

type ParamsType = {
  params: {
    blockId: string;
  };
};
const SingleBlockPage = async ({ params }: ParamsType) => {
  const splitted = params.blockId.split("-").join(" ");
  const fetchBlock = await client.block.findUnique({
    where: {
      slug: splitted,
    },
    select: {
      id: true,
    },
  });
  const fetchAllBlocks = await client.component.findMany({
    where: {
      blockId: fetchBlock?.id,
    },
    select: {
      id: true,
      title: true,
      code: true,
    },
  });
  return (
    <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 xl:grid-cols-4">
      {fetchAllBlocks.map((item) => (
        <ComponentCard key={item.id} card={item} />
      ))}
    </div>
  );
};

export default SingleBlockPage;
