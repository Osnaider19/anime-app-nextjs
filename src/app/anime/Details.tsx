"use client";
import { averageScoreColor } from "@/helpers/averageScore";
import { transmissionDate, transmittingIn } from "@/helpers/validateDate";
import { Media } from "@/types/types";
import { Chip, Divider, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  anime: Media;
};
const meses = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const variant = {
  open: {
    height: "100%",
  },
  close: {
    height: "205px",
  },
};
export const Details = ({ anime }: Props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const ref: React.RefObject<HTMLElement> = useRef();
  const { endDate, startDate, episodes } = anime;

  const handelOpenDetails = () => {
    setOpenDetails(!openDetails);
    //ref.current?.classList.toggle("h-[205px]");
  };
  if (!anime) {
    return;
  }
  return (
    <>
      <div className="w-full relative h-full transition-all duration-300 ">
        <motion.div
          className="w-full  relative pb-4 overflow-hidden h-[205px]"
          variants={variant}
          animate={openDetails ? "open" : "close"}
          transition={{
            duration: 0.3,
          }}
          ref={ref}
        >
          <p className="text-2xl md:text-3xl font-extrabold py-2 ">
            {anime?.title.userPreferred}
          </p>
          <div
            className="overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: anime?.description,
            }}
          ></div>
          <section className="relative w-full h-full py-3">
            <Divider className="my-1" />
            <div className="flex w-full relative justify-between sm:items-center py-1">
              <h2>Genres</h2>
              <div className="flex justify-end md:justify-start items-center gap-2 md:gap-x-3 flex-wrap">
                {anime?.genres.map((genre, index) => (
                  <Link
                    href={`/search/anime?genres=${genre}`}
                    key={genre + index}
                  >
                    <Chip color="danger" variant="solid">
                      {genre}
                    </Chip>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-x-2">
              {episodes && (
                <>
                  <div className="w-full h-full">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>Episodes</h2>
                      <div className="flex justify-start items-center">
                        <Chip
                          color="danger" variant="solid"
                         
                        >
                          {episodes}
                        </Chip>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {anime?.nextAiringEpisode?.episode && (
                <>
                  <div className="w-full h-full">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>Next episode</h2>
                      <div className="flex justify-start items-center gap-x-2">
                        <Chip
                          color="danger"
                          variant="solid"
                          
                        >
                          {anime.nextAiringEpisode.episode}
                        </Chip>
                        <div>
                          <Tooltip
                            content={transmissionDate(
                              anime.nextAiringEpisode.airingAt
                            )}
                            color="danger"
                          >
                            <Chip
                              color="danger"
                              variant="solid"
                              
                            >
                              {transmittingIn(
                                anime.nextAiringEpisode.timeUntilAiring
                              )}
                            </Chip>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {startDate &&
                startDate.day &&
                startDate.month &&
                startDate.year && (
                  <>
                    <div className="w-full h-full">
                      <Divider className="my-1" />
                      <div className="flex w-full relative justify-between items-center py-1">
                        <h2>Start date</h2>
                        <div className="flex justify-start items-center gap-x-3">
                          <Chip
                            color="danger" variant="solid"
                            className="hover:shadow-lg"
                          >
                            {`${startDate.day} ${meses[startDate.month - 1]} ${
                              startDate.year
                            }`}
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              {endDate.day && endDate.month && endDate.year && (
                <>
                  <div className="w-full h-full">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>End date</h2>
                      <div className="flex justify-start items-center gap-x-3">
                        <Chip
                         color="danger" variant="solid"
                          className="hover:shadow-lg"
                        >
                          {`${endDate.day} ${meses[endDate.month - 1]} ${
                            endDate.year
                          }`}
                        </Chip>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {anime.averageScore && (
                <>
                  <div className="w-full h-full ">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>Average Score</h2>
                      <div className="flex justify-start items-center gap-x-3">
                        <Chip
                          color="danger"
                          variant="solid"
                          className="hover:shadow-lg"
                        >
                          {anime.averageScore}%
                        </Chip>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {anime.duration && (
                <>
                  <div className="w-full h-full">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>Durantion</h2>
                      <div className="flex justify-start items-center gap-x-3">
                        <Chip
                          color="danger" variant="solid"
                          className="hover:shadow-lg"
                        >
                          {anime.duration}m
                        </Chip>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {anime.status && (
                <>
                  <div className="w-full h-full">
                    <Divider className="my-1" />
                    <div className="flex w-full relative justify-between items-center py-1">
                      <h2>Status</h2>
                      <div className="flex justify-start items-center gap-x-3">
                        <Chip
                          color="danger" variant="solid"
                          className="hover:shadow-lg"
                        >
                          {anime.status}
                        </Chip>
                      </div>
                    </div>
                    <Divider className="my-1" />
                  </div>
                </>
              )}
            </div>
          </section>
        </motion.div>
        <div className="absolute left-0 bottom-0 w-full h-[50px]">
          <div className="w-full relative h-full bg-gradient-to-b from-transparent to-[#000] ">
            <button
              className="absolute left-0 -bottom-4 rounded-sm z-10 text-[#ffffff70] hover:text-white transition-colors duration-300 uppercase text-sm"
              onClick={handelOpenDetails}
            >
              {openDetails ? "Fewer Details" : "More Details"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
