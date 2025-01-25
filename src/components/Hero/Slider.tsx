"use client";
import { AnimeObject } from "@/types/types";
import { useResize } from "@/hooks/useRezise";
import { MobileHero } from "./MobileHero";
import { DestopHero } from "./DestopHero";
import "./slider.css";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import SkeletonHome from "../skeleton/SkeletonHome";

type Props = {
  animesPopular: AnimeObject[];
};
export const Slider = ({ animesPopular }: Props) => {
  //
  const isMobile = useResize(750);
  //
  if (!isMobile) return <SkeletonHome />;
  //
  if (!animesPopular || !animesPopular.length) return;
  //
  return (
    <>
      {isMobile ? (
        <MobileHero animes={animesPopular} key={"mobile"} />
      ) : (
        <DestopHero animes={animesPopular} key={"compu"} />
      )}
    </>
  );
};

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { AnimeObject } from "@/types/types";
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
// import { IconsPoint } from "@/icons/Icons";
// import Link from "next/link";

// type Props = {
//   animesPopular: AnimeObject[];
// };
// export const Slider = ({ animesPopular }: Props) => {
//   return (
//     <div className="w-full h-[600px] flex justify-center items-center ">
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         loop={true}
//         autoplay={{
//           delay: 5000,
//         }}
//         modules={[EffectFade, Navigation, Pagination, Autoplay]}
//         className="w-full h-full"
//       >
//         {animesPopular.map((anime) => {
//           if (!anime.bannerImage) return;
//           if (!anime.coverImage.color) return;
//           return (
//             <SwiperSlide key={anime.id}>
//               <div className=" w-full h-[490px] relative pt-[60px] sm:px-3 pb-2 bg-gradient-to-b flex flex-col justify-center items-center">
//                 <div
//                   className="w-full h-[570px] absolute top-0 left-0 "
//                   style={{
//                     background: `linear-gradient(${anime.coverImage.color}, ${anime.coverImage.color}  , #000 )`,
//                   }}
//                 ></div>

//                 <div className="w-[350px] sm:w-full relative h-full rounded-br-2xl overflow-hidden rounded-bl-2xl border border-[#ffffff30] shadow-2xl">
//                   <Link href={`/anime/${anime.id}`} className="w-full h-full ">
//                     <img
//                       src={anime.bannerImage}
//                       alt={anime.title.userPreferred}
//                       className="hidden md:block w-full h-full absolute top-0 left-0 object-cover object-top  "
//                       loading="lazy"
//                     />
//                     {/* <div
//                       className="md:hidden w-full h-full absolute top-0 left-0  "
//                       style={{
//                         backgroundImage: `url(${anime.coverImage.extraLarge})`, //aqui
//                         backgroundPosition: "top",
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "100%",
//                       }}
//                     ></div> */}
//                     <div
//                       className=" w-full h-full absolute top-0 left-0"
//                       style={{
//                         background:
//                           "linear-gradient(to right, rgba(0, 0, 0 , .2), rgba(0, 0, 0 , .2) ,  transparent, transparent)",
//                       }}
//                     ></div>
//                     <img
//                       src={anime.coverImage.extraLarge}
//                       alt={`image de ${anime.title.userPreferred}`}
//                       className="md:hidden w-full h-full absolute top-0 left-0  object-cover mx-auto"
//                       loading="lazy"
//                     />
//                     {/* <div
//                       className="w-full h-full absolute top-0 left-0"
//                       style={{
//                         background: `linear-gradient(rgba(0,0,0 , .2) , rgba(0,0,0 , .2),
//                          "rgba(0,0,0 ,.7)"
//                         })`,
//                       }}
//                     ></div> */}
//                     <div
//                       className="w-full h-full absolute top-0 left-0"
//                       style={{
//                         background: `linear-gradient(transparent ,
//                           rgba(0,0,0 , .5)`,
//                       }}
//                     ></div>
//                     <div className="relative w-full h-full px-6 pt-9 pb-2  flex justify-start items-start ">
//                       <div className="flex justify-start items-start flex-col w-full ">
//                         <div className="w-full h-full ">
//                           <p className="font-extrabold  drop-shadow-2xl  line-clamp-2 sm:line-clamp-2 text-2xl sm:text-4xl md:max-w-[50%]">
//                             {anime.title.userPreferred}
//                           </p>
//                         </div>
//                         <div className="flex  items-center  gap-x-1 py-2 w-full justify-start flex-wrap">
//                           {anime?.genres.map((genre, index) => (
//                             <Link
//                               href={`/search/anime?genres=${genre}`}
//                               key={index}
//                             >
//                               <div className="flex justify-center items-center ">
//                                 <div className=" flex justify-center items-center gap-x-1 ">
//                                   <p>{genre}</p>
//                                   <span className="block min-h-full ">
//                                     {index < anime.genres.length - 1 && (
//                                       <IconsPoint
//                                         fill={anime.coverImage.color}
//                                       />
//                                     )}
//                                   </span>
//                                 </div>
//                               </div>
//                             </Link>
//                           ))}
//                         </div>

//                         <div className="flex items-start justify-start flex-col w-full">
//                           <div
//                             className="line-clamp-2 w-full pt-2  text-sm sm:text-base sm:line-clamp-4 hidden max-w-[50%]"
//                             dangerouslySetInnerHTML={{
//                               __html: anime.description,
//                             }}
//                           ></div>
//                         </div>
//                         {/* buttons */}
//                         <div className="flex justify-cente  w-full items-center gap-x-2 py-2 sm:hidden ">
//                           <div className="bg-[#ffffff] text-[#000]  flex justify-center items-center py-1  rounded-[4px] overflow-hidden w-[50%]">
//                             <span className="block font-semibold">Ver</span>
//                           </div>

//                           <button className="bg-[#ffffff30] w-[50%] rounded-[4px] flex justify-center items-center py-1">
//                             <span className="block">+</span>
//                             <span className="block font-semibold">
//                               Mi lista
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };
