import { Hero } from "@/components/Hero/Hero";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>loader</div>}>
        <Hero />
      </Suspense>
    </main>
  );
}
