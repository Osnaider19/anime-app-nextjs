interface Variables {
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
export async function fetchAnime(query: string, variables: Variables) {
  try {
    const response = await fetch("https://graphql.anilist.co", {
      cache: "force-cache",
      method: "POST",
      headers: {
        Accept: "application/json",
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error al obtener los datos" + error);
  }
}
