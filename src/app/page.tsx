import { Hero } from "@/components/Hero/Hero";
import SkeletonHome from "@/components/skeleton/SkeletonHome";
import { SliderSkeleton } from "@/components/skeleton/SliderSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="relative w-full h-full">
      <Suspense fallback={<SkeletonHome/>}>
        <Hero />
      </Suspense>
    </main>
  );
}
