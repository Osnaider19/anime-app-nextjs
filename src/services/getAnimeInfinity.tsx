import { validateVariables } from "@/helpers/validateVariables";
import { queryAnimePopular } from "@/querys/query";

interface variables {
  page?: number;
  type?: string;
  sort?: string | string[];
  search?: string;
  year?: string;
  season?: string;
  seasonyear?: string;
  format?: string;
  id?: string | number;
  isAdult?: boolean;
}
export async function getAnimeInfinity(variables: variables) {
  const { query } = queryAnimePopular;
  console.log(variables)
  try {
    const response = await fetch("https://graphql.anilist.co", {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("error al obtener los datos" + error);
  }
}
