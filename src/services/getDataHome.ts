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
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const data : Data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
