import { TopAnimes } from "@/components/top/TopAnimes";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <h1>Anime Tv</h1>
      <Suspense fallback={<div>loader</div>}>
        <TopAnimes />
      </Suspense>
    </main>
  );
}
