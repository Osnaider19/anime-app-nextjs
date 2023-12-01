"use client";
import { Input } from "@nextui-org/react";

export const Search = () => {
  return (
    <div className="flex w-[200px]  rounded-2xl overflow-hidden">
      <Input type="text" placeholder="search" size="sm" />
    </div>
  );
};
