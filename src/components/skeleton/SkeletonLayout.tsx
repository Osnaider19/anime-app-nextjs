"use client";
import { Skeleton } from "@nextui-org/react";
import { SkeletonCharacters } from "./SkeletonCharacters";

export const SkeletonLayout = () => {
  return (
    <div className="w-full h-full">
      <Skeleton className="w-[200px] h-4 rounded-md my-2" />
      <div className="w-full h-full grid grid-cols-4 gap-y-4 gap-x-4 relative">
        <Skeleton className="w-full h-[200px] rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-[200px] rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
      </div>
      <Skeleton className="w-[250px] h-4 rounded-md my-3" />
      <SkeletonCharacters />
    </div>
  );
};
