import { Skeleton } from "@nextui-org/react";

export default function loading() {
  return (
    <div className="w-full h-full pt-3">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
        <Skeleton className="w-full h-[125px] md:h-[134px] lg:h-[200px] rounded-sm" />
      </div>
    </div>
  );
}
