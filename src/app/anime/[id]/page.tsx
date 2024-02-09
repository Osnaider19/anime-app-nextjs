import { AnimePage } from "./AnimePage";
import type { Metadata } from "next";
import { fetchAnime } from "@/services/fetchAnime";
import { queryIdMetadata } from "@/querys/query";

type Params = {
  params: {
    id: number;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // read route params
  const id = params.id;

  const { query } = queryIdMetadata; //query especial para los metadatos

  const data = await fetchAnime(query, { id, type: "ANIME" }); //fetch de los metadatos
  const anime = data.data.Media;
  const title = anime.title.userPreferred;
  const previousImages = anime.coverImage.large;
  const description = anime.description;

  return {
    title,
    openGraph: {
      images: [
        {
          url: previousImages,
          alt: `picture of ${title}`,
        },
      ],
    },
    description,
  };
}
export default function PageAnimeId({ params }: Params) {
  return (
    <>
      <AnimePage id={params.id} />
    </>
  );
}
