import React from "react";
type ParamsType = {
  params: {
    componentId: string;
  };
};
const page = ({ params }: ParamsType) => {
  const splitted = params.componentId.split("-").join(" ");

  return <div>{splitted}</div>;
};

export default page;
