import { queryId } from "@/querys/query";
import { AnimeId } from "@/types/types";
import BannerImg from "./BannerImg";
import { Suspense } from "react";
import { CardDetails } from "@/components/card/CardDetails";
import Link from "next/link";
import { Wath } from "./Wath";
import { Characters } from "./Characters";

type Params = {
  params: {
    id: number;
  };
};

async function getData(id: number) {
  const { query } = queryId;
  try {
    const response = await fetch("https://graphql.anilist.co", {
      cache: "force-cache",

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          id,
          type: "ANIME",
          isAdult: false,
        },
      }),
    });
    if (!response.ok) {
      throw new Error("error  al obtener  los datos");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function Anime({ params }: Params) {
  const data: { data: AnimeId } = await getData(params.id);
  const anime = data?.data?.Media;
  return (
    <section className="relative w-full h-full">
      <Suspense fallback={<div>loander</div>}>
        <BannerImg img={anime?.bannerImage} />
      </Suspense>
      <div className="w-full h-full relative px-11 flex ">
        <CardDetails img={anime?.coverImage.extraLarge} />
        <div className="px-3 py-3 ">
          <p className="text-2xl font-extrabold ">
            {anime?.title.userPreferred}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: anime?.description,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full  relative  px-10">
        <Wath streamingEpisodes={anime?.streamingEpisodes} />
        <Characters characterPreview={anime?.characterPreview} />
      </div>
    </section>
  );
}

/*const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { query } = queryId;
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          cache : "force-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query,
            variables: {
              id,
              type: "ANIME",
              isAdult: false,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setAnimeData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(params.id);
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error}</p>;
  }
   */
