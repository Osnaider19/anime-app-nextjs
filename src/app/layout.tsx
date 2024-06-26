import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Providers } from "./providers";
import { lato } from "@/fonts/fonts";
import NextTopLoader from "nextjs-toploader";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Footer } from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "NexAnime",
  description: `Follow, discover and share the most popular and best-rated anime through reviews and recommendations. everything here in Nexanime`,
};

export default function RootLayout(props: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning={true}>
        <Analytics />
        <Providers>
          <div className="w-full h-full relative">
            <div className="relative top-0 left-0 w-full h-full dark dark:bg-[#000] dark:text-white    max-w-[1355px] mx-auto">
              <Header />
              <ReactQueryDevtools />
              <div className="w-full h-full relative">
                <NextTopLoader color="#F31260" />
                {props.children}
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
