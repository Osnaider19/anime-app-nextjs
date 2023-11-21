import { SkeletonCard } from "./SkeletonCard";
import { SliderSkeleton } from "./SliderSkeleton";

export default function SkeletonHome() {
  return (
    <div className="w-full h-full relative">
      <SliderSkeleton />
      <div className="w-full h-full px-8">
        <div className="w-[200px] h-6 animate-pulse bg-[#ffffff30] rounded-md mt-3 mb-2"></div>
        <div className="flex gap-x-4 justify-center items-center overflow-hidden w-full ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      <div className="w-full h-full px-8">
        <div className="w-[200px] h-6 animate-pulse bg-[#ffffff30] rounded-md mt-3 mb-2"></div>
        <div className="flex gap-x-4 justify-center items-center overflow-hidden w-full ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      <div className="w-full h-full px-8">
        <div className="w-[200px] h-6 animate-pulse bg-[#ffffff30] rounded-md mt-3 mb-2"></div>
        <div className="flex gap-x-4 justify-center items-center overflow-hidden w-full ">
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
