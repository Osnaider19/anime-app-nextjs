"use client";

import { Media } from "@/types/types";
import { Chip, Divider } from "@nextui-org/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
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
export const Details = ({ anime }: Props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const ref: React.RefObject<HTMLElement> = useRef();
  const { endDate, startDate, episodes } = anime;

  const handelOpenDetails = () => {
    setOpenDetails(!openDetails);
    ref.current?.classList.toggle("h-[205px]");
  };
  return (
    <>
      <div className="w-full relative h-full">
        <div
          className="w-full  h-[205px] relative pb-4 overflow-hidden transition-all duration-300"
          ref={ref}
        >
          <p className="text-3xl font-extrabold py-2">
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
            <div className="flex w-full relative justify-between items-center py-1">
              <h2>Genres</h2>
              <div className="flex justify-start items-center gap-x-3">
                {anime?.genres.map((genre, index) => (
                  <Link href={""} key={genre + index}>
                    <Chip color="secondary" variant="flat" className="hover:shadow-lg">
                      {genre}
                    </Chip>
                  </Link>
                ))}
              </div>
            </div>
            {episodes && (
              <>
                <Divider className="my-1" />
                <div className="flex w-full relative justify-between items-center py-1">
                  <h2>Episodes</h2>
                  <div className="flex justify-start items-center">
                    <p>{episodes}</p>
                  </div>
                </div>
              </>
            )}
            {startDate &&
              startDate.day &&
              startDate.month &&
              startDate.year && (
                <>
                  <Divider className="my-1" />
                  <div className="flex w-full relative justify-between items-center py-1">
                    <h2>Start date</h2>
                    <div className="flex justify-start items-center gap-x-3">
                      {`${startDate.day} ${meses[startDate.month - 1]} ${
                        startDate.year
                      }`}
                    </div>
                  </div>
                </>
              )}
            {endDate &&
              endDate.day &&
              endDate.month &&
              endDate.year &&  (
              <>
                <Divider className="my-1" />
                <div className="flex w-full relative justify-between items-center py-1">
                  <h2>End date</h2>
                  <div className="flex justify-start items-center gap-x-3">
                    {`${endDate.day} ${meses[endDate.month]} ${endDate.year}`}
                  </div>
                </div>
                <Divider className="my-1" />
              </>
            )}
          </section>
        </div>
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
