import { Card, Skeleton } from "@nextui-org/react";

export const SkeletonCard = () => {
  return (
    <Card className="w-[200px] h-[270px]  px-4" radius="lg">
      <div className="  h-full w-full flex justify-end items-center flex-col py-2 gap-2">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg ">
          <div className="h-3 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};
