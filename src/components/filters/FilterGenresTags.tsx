import { getGenresTags } from "@/services/getGenres";
import { Genres } from "./Genres";
import { Tag } from "@/types/types";
import { Tags } from "./Tags";

export interface Data {
  data: {
    genres: string[];
    tags: Tag[];
  };
}



export async function FilterGenresTags() {
  const data: Data = await getGenresTags();
  if (data?.data.genres.length < 1 || data?.data.tags.length < 1) return;
  return (
    <>
      <Genres genres={data?.data.genres}  />
      {/* <Tags tags={data?.data.tags}/> */}
    </>
  );
}
