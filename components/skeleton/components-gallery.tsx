import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ComponentsGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-8">
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

export const CodeSkeleton = () => {
  return (
    <div className="flex gap-8 flex-col  p-8">
      <Skeleton className="h-4 w-full rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-10/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-9/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-8/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-7/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-6/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-5/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-4/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-3/12 rounded-md bg-gray-200" />
      <Skeleton className="h-4 w-2/12 rounded-md bg-gray-200" />
    </div>
  );
};
