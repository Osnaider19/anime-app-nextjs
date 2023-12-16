"use client";
import { Skeleton } from "@nextui-org/react";

export const SkeletonLayout = () => {
  return (
    <div className="w-full h-full">
      <Skeleton className="w-full h-[240px] lg:h-[350px] bg-default-100" />
      <div className="w-full px-3 lg:w-[85%] mx-auto">
        <div className="flex flex-col relative md:flex-row gap-4 ">
          {/* krmf */}
          <div className="relative w-[130px] h-[170px] lg:h-[280px] lg:min-w-[210px] lg:w-[210px]">
            <Skeleton className="w-full h-full rounded-md absolute left-0 -top-16" />
          </div>
          <div className="w-full -mt-[4.8rem] h-full py-1 flex flex-col gap-y-2 lg:-mt-0">
            <Skeleton className="w-[300px] h-7 rounded-full py-2" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-full h-3 rounded-full" />
            <Skeleton className="w-[200px] h-3 rounded-full mt-2" />
          </div>
        </div>
        <div className="flex justify-start items-center w-full h-full gap-x-3 mt-3 md:-mt-8">
          <Skeleton className="h-[32px] w-[92px] rounded-full" />
          <Skeleton className="h-[32px] w-[92px] rounded-full" />
          <Skeleton className="h-[32px] w-[92px] rounded-full" />
          <Skeleton className="h-[32px] w-[92px] rounded-full" />
        </div>
      </div>
    </div>
  );
};
