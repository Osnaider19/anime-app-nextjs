"use client";
import { Skeleton } from "@nextui-org/react";

export const SkeletonLayout = () => {
  return (
    <div className="w-full h-full">
      {/* <Skeleton className="w-full h-[350px]" /> */}
      <div className="w-full h-[350px]"></div>
      <div className="w-[85%] mx-auto">
        <div className="grid_decription">
          <div className="relative w-full h-[280px]">
            <Skeleton className="w-full h-[280px] rounded-md absolute left-0 -top-16" />
          </div>
          <div className="w-full h-full py-1 flex flex-col gap-y-2">
            <Skeleton className="w-[300px] h-7 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
