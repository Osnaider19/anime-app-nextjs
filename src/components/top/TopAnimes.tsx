

async function getAnimeTop() {
  const res = await fetch(
    "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0",
    {
      method : "POST",
      // query de GraphQL
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }
  return await res.json();
}
export const TopAnimes = async () => {
  const animes = await getAnimeTop();
  console.log(animes);
  if (!animes.data) {
    return <div>error al cargar los datos</div>;
  }
  return (
    <div className="w-full h-screen flex justify-center items-center flex-wrap">
      {animes.data[0].attributes.titles.en}
      <img
        src={animes.data[0].attributes.coverImage.large}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};
