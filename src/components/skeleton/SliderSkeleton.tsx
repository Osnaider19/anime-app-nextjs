import { Skeleton } from "@nextui-org/react";

export const SliderSkeleton = () => {
  return (
    <div className="w-full h-full relative px-8  pt-[80px]">
      <div className="w-full relative h-[388px]">
        <div className="absolute left-0 top-0 w-full h-full bg-[#18181B]   rounded-lg px-5 py-5 flex justify-end items-center flex-col gap-3 ">
          <Skeleton className=" overflow-hidden relative w-[300px] rounded-full mx-auto ">
            <div className="h-7 w-[300px] rounded-md bg-default-300 "></div>
          </Skeleton>
          <Skeleton className="rounded-md overflow-hidden relative w-[400px] mx-auto">
            <div className="h-4 w-[400px] rounded-md bg-default-300 "></div>
          </Skeleton>
          <div className="relative w-full flex justify-center items-center mx-auto  gap-2 flex-col">
            <Skeleton className="rounded-md overflow-hidden relative w-[90%]">
              <div className="h-2 w-full rounded-md bg-default-300 "></div>
            </Skeleton>
            <Skeleton className="rounded-md overflow-hidden relative w-[90%]">
              <div className="h-2 w-full rounded-md bg-default-300 "></div>
            </Skeleton>
            <Skeleton className="rounded-md overflow-hidden relative w-[90%]">
              <div className="h-2 w-full rounded-md bg-default-300 "></div>
            </Skeleton>
            <Skeleton className="rounded-md overflow-hidden relative w-[90%]">
              <div className="h-2 w-full rounded-md bg-default-300 "></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};
