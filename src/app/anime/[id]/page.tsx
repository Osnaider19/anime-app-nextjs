import { Popular } from "@/components/Hero/Popular";
import { queryId } from "@/querys/query";
import { AnimeId } from "@/types/types";
import BannerImg from "./BannerImg";
import { Suspense } from "react";

type Params = {
  params: {
    id: number;
  };
};

async function getData(id) {
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
  const data : { data : AnimeId } = await getData(params.id);
  return (
    <section className="pt-[70px] relative">
      <Suspense fallback={<div>loander</div>}>
        <BannerImg img={data?.data.Media.bannerImage} />
      </Suspense>
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
