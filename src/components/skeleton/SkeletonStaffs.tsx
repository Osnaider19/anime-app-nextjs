import { Skeleton } from "@nextui-org/react";

export const SkeletonStaffs = () => {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]">
          <div className="flex justify-center items-center">
            <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex items-start flex-col w-full justify-start h-full  px-3  gap-2">
              <Skeleton className="w-[50%] h-5 rounded-md" />
              <Skeleton className="w-[50%] h-5 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
