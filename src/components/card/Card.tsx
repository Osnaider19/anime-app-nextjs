"use client";
import { IconsPoint } from "@/icons/Icons";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
type Props = {
  id: number;
  imagen: string;
  title: string;
  genres: string[];
  color: string;
};
export const Card = ({ id, imagen, title, genres, color }: Props) => {
  const genresR = genres.slice(0, 3); //recortar el arry

  return (
    <Link href={`/anime/${id}`}>
      <div className="min-w-[140px]  max-w-[200px] min-h-[230px]  sm:min-h-[270px] relative border border-[#ffffff20] overflow-hidden rounded-lg shadow-2xl shadow-[#ffffff10] group">
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">Custom Content</div>
              <div className="text-tiny">This is a custom tooltip content</div>
            </div>
          }
          color="primary"
        >
          <img
            src={imagen}
            alt={`imagen de ${title}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        </Tooltip>
        <div
          className="w-full h-full  absolute top-0 left-0"
          style={{
            background: `linear-gradient(${
              color ? color + `90` : "transparent"
            }, transparent , transparent , transparent  , rgba(0,0,0,.7)  , rgba(0,0,0,.7))`,
          }}
        ></div>
        <div className="w-full min-h-full h-full absolute bottom-0 left-0 px-2 ">
          <div className="w-full flex min-h-full  items-end pb-1  ">
            <div className="w-full">
              <p className="text-center text-sm md:text-base  font-semibold  line-clamp-2">
                {title}
              </p>
              <div className="flex gap-x-2 w-full h-full flex-wrap justify-center ">
                {genresR?.map((genre, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center gap-x-[1px] items-center line-clamp-1"
                    >
                      <p className="text-[8px] md:text-[12px]">{genre}</p>
                      <span>
                        {index < genresR.length - 1 ? (
                          <IconsPoint size="8" fill={color} />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
