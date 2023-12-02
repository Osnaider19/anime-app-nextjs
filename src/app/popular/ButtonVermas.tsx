"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export const ButtonVermas = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handelClick = () => {
    const params = new URLSearchParams(searchParams);
    const page = params.get("page");
    if (page) {
      params.set("page", (Number(page) + 1).toString());
    } else {
      params.set("page", (2).toString());
    }
    console.log(params.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Button color="primary" onClick={handelClick}>
      Button
    </Button>
  );
};
