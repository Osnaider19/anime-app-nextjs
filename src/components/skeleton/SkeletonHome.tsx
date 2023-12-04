import { Skeleton } from "@nextui-org/react";
import { SkeletonCard } from "./SkeletonCard";
import { SliderSkeleton } from "./SliderSkeleton";

export default function SkeletonHome() {
  return (
    <div className="w-full h-full relative">
      <SliderSkeleton />
      <div className="w-full h-full px-8">
        <Skeleton className="w-[200px] rounded-md mt-3 mb-2">
          <div className="w-[200px] h-6 bg-default-300  "></div>
        </Skeleton>
        <div className="flex gap-x-4 justify-center items-center overflow-hidden w-full ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
      
      <div className="w-full h-full px-8">
        <Skeleton className="w-[200px] rounded-md mt-3 mb-2">
          <div className="w-[200px] h-6 bg-default-300  "></div>
        </Skeleton>
        <div className="flex gap-x-4 justify-center items-center overflow-hidden w-full ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
