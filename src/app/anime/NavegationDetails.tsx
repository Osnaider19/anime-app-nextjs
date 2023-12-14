"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
export function NavegationDetails() {
  const params = useParams();
  const pathname = usePathname();
  let tabs = [
    {
      id: "watch",
      label: "Watch",
    },
    {
      id: "characters",
      label: "Characters",
    },
    {
      id: "social",
      label: "Social",
    },
  ];

  return (
    <div className="flex rounded-xl  gap-x-2 py-2">
      <div className="h-full rounded-full overflow-hidden ">
        <Link
          className={`hover:bg-[#ffffff20] block w-full h-full transition-colors duration-300 py-1 px-3 text-[#7846aa] ${
            pathname === `/anime/${params.id}` ? "bg-[#1E112A] " : ""
          }`}
          href={`/anime/${params.id}`}
        >
          Overview
        </Link>
      </div>
      {tabs.map((item) => (
        <div className="h-full rounded-full overflow-hidden " key={item.id}>
          <Link
            className={`hover:bg-[#ffffff20] block w-full h-full transition-colors duration-300 py-1 px-3  text-[#7846aa] ${
              pathname === `/anime/${params.id}/${item.id}`
                ? "bg-[#1E112A] "
                : ""
            }`}
            href={`/anime/${params.id}/${item.id}`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
