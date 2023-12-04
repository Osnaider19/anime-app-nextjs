import { Skeleton } from "@nextui-org/react";

export const SkeletonFilters = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <Skeleton className="w-[200px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      <Skeleton className="w-[200px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      <Skeleton className="w-[140px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      <Skeleton className="w-[140px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      <Skeleton className="w-[150px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      <Skeleton className="w-[170px] h-[48px] flex flex-col rounded-full overflow-hidden"></Skeleton>
      {/* <div className="w-[200px] h-[48px] flex flex-col py-2 bg-default-200">
        <Skeleton className="h-2 w-7 bg-default-700"></Skeleton>
      </div> */}
    </div>
  );
};
