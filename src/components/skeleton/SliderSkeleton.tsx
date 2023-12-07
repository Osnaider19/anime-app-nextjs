import { Skeleton } from "@nextui-org/react";

export const SliderSkeleton = () => {
  return (
    <div className="w-full h-full relative px-2 md:px-8  pt-[80px]">
      <div className="w-[350px] m-auto md:w-full relative h-[388px]">
        <div className="absolute left-0 top-0 w-full h-full bg-[#18181B]   rounded-lg px-5 py-5 flex justify-end items-center flex-col gap-3 ">
          <Skeleton className=" overflow-hidden relative w-[300px] rounded-full mx-auto ">
            <div className="h-7 w-full md:w-[300px] rounded-md bg-default-300 "></div>
          </Skeleton>
          <Skeleton className="rounded-md overflow-hidden relative w-full md:w-[400px] mx-auto">
            <div className="h-4 w-full  rounded-md bg-default-300 "></div>
          </Skeleton>
          <div className="flex justify-center items-center gap-x-3 w-full px-3 md:hidden">
            <Skeleton className="rounded-md overflow-hidden relative w-[50%]">
              <div className="h-8 w-full  rounded-md bg-default-300 ">f</div>
            </Skeleton>
            <Skeleton className="rounded-md overflow-hidden relative w-[50%]">
              <div className="h-8 w-full  rounded-md bg-default-300 ">f</div>
            </Skeleton>
          </div>
          <div className="hidden relative w-full md:flex justify-center items-center mx-auto  gap-2 flex-col">
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
