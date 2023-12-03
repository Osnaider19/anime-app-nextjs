import { queryHome } from "@/querys/query";
import { AnimeObject } from "@/types/types";
type Data = {
  data: {
    nextSeason: {
      media: Array<AnimeObject>;
    };
    popular: {
      media: Array<AnimeObject>;
    };
    season: {
      media: Array<AnimeObject>;
    };
    top: {
      media: Array<AnimeObject>;
    };
    trending: {
      media: Array<AnimeObject>;
    };
  };
};
export async function getDataHome() {
  const { query, variables } = queryHome;
  try {
    const response = await fetch("https://graphql.anilist.co", { cache : "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    if (!response.ok) {
      throw new Error("error  al obtener  los datos");
    }
    const data : Data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
