"use client";

import { Skeleton } from "@nextui-org/react";
import { SkeletonCardCharacters } from "./SkeletonCardCharacters";

export const SkeletonCharacters = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-end items-center py-2">
        <Skeleton className="w-[200px] h-[48px] rounded-md" />
      </div>
      <div className="grid_characters">
        <SkeletonCardCharacters />
        <SkeletonCardCharacters />
        <SkeletonCardCharacters />
        <SkeletonCardCharacters />
        <SkeletonCardCharacters />
        <SkeletonCardCharacters />
      </div>
    </div>
  );
};
