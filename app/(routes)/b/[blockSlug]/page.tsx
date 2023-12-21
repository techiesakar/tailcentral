import client from "@/app/utils/db";
import React from "react";
import { ComponentCard } from "./_components/component-card";

type ParamsType = {
  params: {
    blockSlug: string;
  };
};
const SingleBlockPage = async ({ params }: ParamsType) => {


  const fetchAllComponents = await client.component.findMany({
    where: {
      blockSlug: params.blockSlug,
    },
    select: {
      id: true,
      title: true,
      code: true,
      darkThumb: true,
      lightThumb: true
    },
  });
  return (
    <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 xl:grid-cols-4">
      {fetchAllComponents.map((item) => (
        <ComponentCard key={item.id} card={item} blockSlug={params.blockSlug} />
      ))}
    </div>
  );

};

export default SingleBlockPage;
