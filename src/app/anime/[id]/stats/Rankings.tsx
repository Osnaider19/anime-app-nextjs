import { validateSort } from "@/helpers/validateSort";
import { Ranking } from "@/types/stats";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export const Rankings = ({ rankings }: { rankings: Ranking[] }) => {
  return (
    <>
      {rankings.length > 1 && (
        <div className="w-full h-full pb-5">
          <h2 className="font-semibold py-3">Rankings</h2>
          <div className="flex justify-start items-center gap-2 md:gap-x-3 flex-wrap">
            {rankings.map((rang, index) => (
              <Link
                href={{
                  pathname: "/search/anime",
                  query: {
                    year: rang.year || undefined,
                    season: rang.season || undefined,
                    format: rang.format || undefined,
                    sort: validateSort(rang.type) || undefined,
                  },
                }}
                key={rang.id}
              >
                <Chip
                  color="secondary"
                  variant="flat"
                  className="text-sm md:text-base"
                >
                  {` #${rang.rank} ${rang.context} ${rang.type} ${
                    rang.year ? rang.year : ""
                  }`}
                </Chip>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
