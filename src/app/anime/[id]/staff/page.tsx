"use client";
import { useInfinityStaff } from "@/hooks/useInfinityStaff";
import { queryStaff } from "@/querys/query";
import { StaffPreviewEdge } from "@/types/types";
import { Staffs } from "./Staffs";
import { SkeletonStaffs } from "@/components/skeleton/SkeletonStaffs";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
type Props = {
  params: {
    id: string;
  };
};

export default function staffPage({ params }: Props) {
  const { query } = queryStaff;
  const variables = {
    id: params.id,
    type: "ANIME",
  };
  const { staffs, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfinityStaff(query, variables);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  if (isLoading) {
    return <SkeletonStaffs />;
  }
  if (!staffs) {
    return;
  }
  return (
    <div className="w-full h-full relative">
      <Staffs staffs={staffs} />
      {isFetchingNextPage && <SkeletonStaffs />}
      {hasNextPage && <div className="w-full" ref={ref}></div>}
    </div>
  );
}
