import React from "react";

type ParamsType = {
  params: {
    blockId: string;
  };
};
const SingleBlockPage = ({ params }: ParamsType) => {
  const splitted = params.blockId.split("-").join(" ");

  return <div>{splitted}</div>;
};

export default SingleBlockPage;
