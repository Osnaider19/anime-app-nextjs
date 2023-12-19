"use client";

import { StreamingEpisode } from "@/types/types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

//note : validar si la lenth de los characters es mayor a 6 y renderizar el componente
export function NavegationDetails({
  streamingEpisodes,
}: {
  streamingEpisodes: StreamingEpisode[];
}) {
  const params = useParams();
  const pathname = usePathname();
  let tabs = [
    {
      id: "characters",
      label: "Characters",
    },
    {
      id: "social",
      label: "Social",
    },
    {
      id: "staff",
      label: "Staff",
    },
  ];

  return (
    <div className="flex  gap-x-2 gap-y-2 w-full min-w-full py-2  flex-wrap">
      <div className="h-full rounded-full overflow-hidden block">
        <Link
          className={`hover:bg-[#1E112A] block w-full h-full transition-colors duration-300 py-1 px-3 text-[#7846aa] ${
            pathname === `/anime/${params.id}` ? "bg-[#1E112A] " : ""
          }`}
          href={`/anime/${params.id}`}
        >
          Overview
        </Link>
      </div>
      {streamingEpisodes?.length > 8 && (
        <div className="h-full rounded-full overflow-hidden ">
          <Link
            className={`hover:bg-[#1E112A] block w-full h-full transition-colors duration-300 py-1 px-3  text-[#7846aa] ${
              pathname === `/anime/${params.id}/watch` ? "bg-[#1E112A] " : ""
            }`}
            href={`/anime/${params.id}/watch`}
          >
            Watch
          </Link>
        </div>
      )}
      {tabs.map((item) => (
        <div className="h-full rounded-full overflow-hidden " key={item.id}>
          <Link
            className={`hover:bg-[#1E112A] block w-full h-full transition-colors duration-300 py-1 px-3  text-[#7846aa] ${
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
      <div className="h-full rounded-full overflow-hidden block">
        <Link
          className={`hover:bg-[#1E112A] block w-full h-full transition-colors duration-300 py-1 px-3 text-[#7846aa] ${
            pathname === `/anime/${params.id}/stats` ? "bg-[#1E112A] " : ""
          }`}
          href={`/anime/${params.id}/stats`}
        >
          Stats
        </Link>
      </div>
    </div>
  );
}
