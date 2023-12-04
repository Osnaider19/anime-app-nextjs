"use client"
import { useRouter } from "next/navigation";
export default function pageRedirect() {
  const { replace } = useRouter();
  replace("search/anime");
  return null
}
