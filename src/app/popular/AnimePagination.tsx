import { Card } from "@/components/card/Card";
import { queryAnimePopular } from "@/querys/query";
import { Pagination } from "@/types/types";
import { PaginationComponent } from "./PaginationComponent";
import { fetchAnime } from "@/services/fetchAnime";
import { validateVariables } from "@/helpers/validateVariables";

type Props = {
  searchParams: {
    genres?: string;
    page?: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};
export async function Animes({ searchParams }: Props) {
  const { query } = queryAnimePopular;
  const data: Pagination = await fetchAnime(
    query,
    validateVariables(searchParams)
  );

  if (!data || data.data.Page.media.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center flex-grow">
        <h2 className="text-3xl font-bold">If results check the filters</h2>
      </div>
    );
  }
  return (
    <>
      <div className="h-full w-full ">
        <div className="flex flex-wrap py-2  md:w-full justify-center gap-y-4 gap-x-2 md:py-6 md:gap-4 md:justify-center items-center mx-auto xl:grid xl:grid-cols-5">
          {data?.data.Page.media.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              color={anime.coverImage.color}
              genres={anime.genres}
              imagen={anime.coverImage.large}
              title={anime.title.userPreferred}
              description={anime.description}
              episodes={anime.episodes}
              averageScore={anime.averageScore}
              yearStart={anime.startDate.year}
              yearEnd={anime.endDate.year}
              hover={true}
            />
          ))}
        </div>
      </div>

      <PaginationComponent pageInfo={data?.data?.Page?.pageInfo} />
    </>
  );
}

// "use client";
// import { Card } from "@/components/card/Card";
// import { useFetch } from "@/hooks/useFetch";
// import { SkeletonCards } from "@/components/skeleton/SkeletonCards";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import { AnimeObject, Pagination } from "@/types/types";
// import { useSearchParams } from "next/navigation";
// import { queryAnimePopular } from "@/querys/query";
// import {
//   validateVariables,
//   variablesInfinitiScroll,
// } from "@/helpers/validateVariables";
// type Props = {
//   searchParams: {
//     genres?: string;
//     page?: number;
//     search?: string;
//     year?: string;
//     season?: string;
//     seasonyear?: string;
//     format?: string;
//     sort: string;
//   };
// };
// type pageInfo = {
//   currentPage: number;
//   hasNextPage: boolean;
//   lastPage: number;
//   perPage: number;
//   total: number;
// };
// let page = 1;
// export function Animes({ searchParams }: Props) {
//   const { ref, inView } = useInView();
//   const { query } = queryAnimePopular;
//   const [data, setData] = useState<AnimeObject[]>([]);
//   const [isPending, setIsPending] = useState(false);
//   const [infoPage, setInfoPage] = useState<pageInfo>();
//   const params = useSearchParams();

//   useEffect(() => {
//     setData([]);
//     page = 1;
//     console.log("siiiii");
//   }, [params]);
//   useEffect(() => {
//     async function fetchAnime(variables) {
//       setIsPending(true);
//       try {
//         const response = await fetch("https://graphql.anilist.co", {
//           cache: "force-cache",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             query,
//             variables,
//           }),
//         });
//         if (response.ok) {
//           const newData: Pagination = await response.json();
//           setData((prevData) => [...prevData, ...newData.data.Page.media]);
//           setInfoPage(newData.data.Page.pageInfo);
//         }
//       } catch (error) {
//         console.log("error al obtener los datos" + error);
//       } finally {
//         setIsPending(false);
//       }
//     }

//     fetchAnime(variablesInfinitiScroll(searchParams, page));
//     page++;
//   }, [params, inView]);

//   console.log(infoPage);
//   return (
//     <>
//       {isPending && <SkeletonCards />}
//       <div className="h-full w-full pt-4">
//         <div className="flex flex-wrap pt-2  md:w-full justify-center gap-y-4 gap-x-2  md:gap-4 md:justify-center items-center mx-auto xl:grid xl:grid-cols-5">
//           {data?.map((anime) => (
//             <Card
//               key={anime.id}
//               id={anime.id}
//               color={anime.coverImage.color}
//               genres={anime.genres}
//               imagen={anime.coverImage.large}
//               title={anime.title.userPreferred}
//               description={anime.description}
//               episodes={anime.episodes}
//               averageScore={anime.averageScore}
//               yearStart={anime.startDate.year}
//               yearEnd={anime.endDate.year}
//               hover={true}
//             />
//           ))}
//         </div>
//         {infoPage?.hasNextPage && isPending === false ? (
//           <div className="h-1 w-full " ref={ref}></div>
//         ) : (
//           <SkeletonCards />
//         )}
//       </div>
//     </>
//   );
// }
