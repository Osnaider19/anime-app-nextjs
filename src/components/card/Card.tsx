import { IconsPoint } from "@/icons/Icons";
import Link from "next/link";
type Props = {
  id: number;
  imagen: string;
  title: string;
  genres: string[];
  color: string;
  description?: string;
  episodes?: number;
  averageScore?: number;
  yearStart?: number;
  yearEnd?: number;
  hover?: boolean;
};
export const Card = ({
  id,
  imagen,
  title,
  genres,
  color,
  description,
  episodes,
  averageScore,
  yearEnd,
  yearStart,
  hover,
}: Props) => {
  return (
    <Link href={`/anime/${id}`}>
      <div className="w-[130px] h-[190px] sm:w-[200px]  sm:h-[270px] relative border border-[#ffffff20] overflow-hidden rounded-lg shadow-2xl shadow-[#ffffff10] group">
        {/* {hover && (
          <div className="absolute left-0 top-0 w-full h-full opacity-0 transition-opacity duration-300 pointer-events-none bg-black/95 z-10 group-hover:opacity-100 group-hover:pointer-events-auto px-2 py-3">
            <div className="w-full h-full flex  flex-col ">
              <div className="flex items-center py-1 gap-x-1">
                {episodes && <p className="text-sm">{episodes} episodes</p>}
                <IconsPoint />
                <p className="text-sm ">
                  {yearStart !== yearEnd && yearEnd && yearStart
                    ? `${yearStart} - ${yearEnd}`
                    : yearStart}
                </p>
              </div>
              {averageScore && <span>{`${averageScore}%`}</span>}
              {description && (
                <div
                  className="w-full overflow-hidden text-sm line-clamp-[9]"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></div>
              )}
            </div>
          </div>
        )} */}
        <img
          src={imagen}
          alt={`imagen de ${title}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="w-full h-full  absolute top-0 left-0"
          style={{
            background: `linear-gradient(${
              color ? color + `90` : "transparent"
            }, transparent , transparent , transparent  , rgba(0,0,0,.7)  , rgba(0,0,0,.7))`,
          }}
        ></div>
        <div className="w-full min-h-full h-full relative px-2">
          <div className="w-full flex min-h-full  items-end pb-1  ">
            <div className="w-full">
              <p className="text-center text-sm md:text-base  font-semibold  line-clamp-2">
                {title}
              </p>
              <div className="flex gap-x-2 w-full h-full flex-wrap justify-center ">
                {genres?.map((genre, index) => {
                  const length = 3;
                  if (index >= length) return;

                  return (
                    <div
                      key={index}
                      className="flex justify-center gap-x-[1px] items-center line-clamp-1"
                    >
                      <p className="text-[8px] md:text-[12px]">{genre}</p>
                      <span>{index < 2 && <IconsPoint />}</span>
                    </div>
                  );
                })}
              </div>
              {/* <div className="flex justify-cente  w-full items-center gap-x-2 py-1">
              <Link href={`/anime/${id}`} className="w-[50%] ">
                <div className="bg-[#ffffff] text-[#000] w-full flex justify-center items-center py-1  rounded-[4px] overflow-hidden">
                <span className="block font-semibold">Ver</span>
                </div>
                </Link>
              <button className="bg-[#ffffff30] w-[50%] rounded-[4px] flex justify-center items-center py-1">
                <span className="block">+</span>
                <span className="block font-semibold">Mi lista</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

/*


<div
      className="w-[230px] h-[280px] relative border border-[#ffffff20] overflow-hidden rounded-lg shadow-2xl shadow-[#ffffff10]"
      key={id}
    >
      <img
        src={imagen}
        alt={`imagen de ${title}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="w-full h-full  absolute top-0 left-0"
        style={{
          background: `linear-gradient(${
            color + `90`
          }, transparent , transparent , transparent , transparent , rgba(0,0,0,.7) , rgba(0,0,0,.7)  , rgba(0,0,0,.7)  , rgba(0,0,0,.7))`,
        }}
      ></div>
      <div className="w-full min-h-full h-full relative px-2">
        <div className="w-full flex min-h-full  items-end pb-1  ">
          <div className="w-full">
            <p className="text-center text-xl font-bold line-clamp-2">
              {title}
            </p>
            <div className="flex gap-x-2 w-full h-full flex-wrap justify-center">
              {genres.map((genre, index) => (
                <div key={index} className="flex justify-center items-center">
                  <p className="text-sm">{genre}</p>
                  <span>{index < genres.length - 1 && ", "}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-cente  w-full items-center gap-x-2 py-2">
              <Link href={`/anime/${id}`} className="w-[50%] ">
                <div className="bg-white text-[#000] w-full flex justify-center items-center py-1  rounded-[4px] overflow-hidden">
                  <span className="block font-semibold">Ver</span>
                </div>
              </Link>
              <button className="bg-[#ffffff30] w-[50%] rounded-[4px] flex justify-center items-center py-1">
                <span className="block">+</span>
                <span className="block font-semibold">Mi lista</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
