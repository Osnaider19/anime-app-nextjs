import { Skeleton } from "@nextui-org/react";
import { SkeletonCard } from "./SkeletonCard";

export const SkeletonSliderR = () => {
  return (
    <div className="w-full h-full px-3 md:px-8 overflow-hidden">
      <Skeleton className="w-[200px] rounded-md mt-3 mb-2">
        <div className="w-[200px] h-6 bg-default-300  "></div>
      </Skeleton>
      <div className="flex justify-start items-center w-full gap-x-4  overflow-hidden flex-nowrap">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};
