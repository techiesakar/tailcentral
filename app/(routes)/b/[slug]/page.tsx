import React from "react";

type ParamsType = {
  params: {
    slug: string;
  };
};
const SingleBlockPage = ({ params }: ParamsType) => {
  const splitted = params.slug.split("-").join(" ");

  return <div>{splitted}</div>;
};

export default SingleBlockPage;
