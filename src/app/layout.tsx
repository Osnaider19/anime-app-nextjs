import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Providers } from "./providers";
import { lato } from "@/fonts/fonts";
export const metadata: Metadata = {
  title: "NexAnime",
  description: "Generated by create next app",
};
export default function RootLayout(props: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Providers >
          <div className="relative top-0 left-0 w-full h-full">
            <Header />
            <div className="w-full h-full relative">{props.children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
