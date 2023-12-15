import { Skeleton } from "@nextui-org/react";

export default function loading() {
  return (
    <div className="w-full h-full pt-3">
      <div className="w-full h-full grid grid-cols-4 gap-y-4 gap-x-4 relative">
        <Skeleton className="w-full h-[200px] rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-[200px] rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
        <Skeleton className="w-full h-full rounded-sm" />
      </div>
    </div>
  );
}
