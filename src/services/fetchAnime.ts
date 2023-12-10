interface Variables {
  page: number;
  type?: string;
  sort?: string | string[];
  search?: string;
  year?: string;
  season?: string;
  seasonyear?: string;
  format?: string;
  id?: string;
  isAdult? : string
}
export async function fetchAnime(query: string, variables: Variables) {
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
