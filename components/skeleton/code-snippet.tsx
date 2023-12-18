import React from "react";
import { Skeleton } from "../ui/skeleton";

const CodeSkeleton = () => {
  return (
    <div className="flex gap-8 flex-col">
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

export default CodeSkeleton;
