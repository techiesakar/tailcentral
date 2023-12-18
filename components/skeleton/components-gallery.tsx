import React from "react";
import { Skeleton } from "../ui/skeleton";

const ComponentsGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1">
        <Skeleton className="w-full h-[200px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-8/12 h-[18px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-6/12 h-[18px] rounded-md bg-gray-200" />
      </div>
      <div className="col-span-1">
        <Skeleton className="w-full h-[200px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-8/12 h-[18px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-6/12 h-[18px] rounded-md bg-gray-200" />
      </div>
      <div className="col-span-1">
        <Skeleton className="w-full h-[200px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-8/12 h-[18px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-6/12 h-[18px] rounded-md bg-gray-200" />
      </div>
      <div className="col-span-1">
        <Skeleton className="w-full h-[200px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-8/12 h-[18px] mb-5 rounded-md bg-gray-200" />
        <Skeleton className="w-6/12 h-[18px] rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default ComponentsGallery;
