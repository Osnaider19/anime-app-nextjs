import SkeletonHome from "@/components/skeleton/SkeletonHome";
import { FetchingHome } from "./FetchingHome";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="relative w-full h-full">
      <Suspense fallback={<SkeletonHome />}>
        <FetchingHome />
      </Suspense>
    </main>
  );
}
