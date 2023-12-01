export async function getGenresTags() {
  const query = `query{genres:GenreCollection tags:MediaTagCollection{name description category isAdult}}`;
  try {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query}),
    });
    if (!res.ok) {
      throw new Error("error  al obtener  los datos");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
