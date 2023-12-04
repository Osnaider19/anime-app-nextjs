export const animeIdParams = {
  characters: "characters",
  watch: "watch",
  staff: "staff",
  stats: "stats",
  social: "social",
};
export const yearsArray = Array.from({ length: 74 }, (_, index) => ({
  id: index + 1,
  year: 1950 + index,
})).reverse();

export const sort = [
  {
    name: "Title",
    value: "TITLE_ROMAJI",
  },
  {
    name: "Popularity",
    value: "POPULARITY_DESC",
  },
  {
    name: "Average Score",
    value: "SCORE_DESC",
  },
  {
    name: "Trending",
    value: "TRENDING_DESC",
  },
  {
    name: "Favorites",
    value: "FAVOURITES_DESC",
  },
  {
    name: "Date Added",
    value: "ID_DESC",
  },
  {
    name: "Release Date",
    value: "START_DATE_DESC",
  },
];

export const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Hentai",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export const Seasons = [
  {
    name: "Winter",
    value: "WINTER",
  },
  {
    name: "Spring",
    value: "SPRING",
  },
  {
    name: "Summer",
    value: "SUMMER",
  },
  {
    name: "Fall",
    value: "FALL",
  },
];

export const format = [
  {
    name: "Tv",
    value: "TV",
  },
  {
    name: "Movie",
    value: "MOVIE",
  },
  {
    name: "Tv Short",
    value: "TV_SHORT",
  },
  {
    name: "Special",
    value: "SPECIAL",
  },
  {
    name: "OVA",
    value: "OVA",
  },
  {
    name: "ONA",
    value: "ONA",
  },
  {
    name: "Music",
    value: "MUSIC",
  },
];
