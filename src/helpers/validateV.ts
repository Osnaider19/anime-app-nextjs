import { Browse } from "@/const/const";

export function validateV(params: string, page: number) {
  const { NextSeason, ThisSeason, popular, topAnimes, treding } = Browse;
  if (params === NextSeason.slug) {
    const variables = {
      page: page,
      ...NextSeason.value,
    };
    return variables;
  }
  if (params === ThisSeason.slug) {
    const variables = {
      page: page,
      ...ThisSeason.value,
    };
    return variables;
  }
  if (params === popular.slug) {
    const variables = {
      page: page,
      ...popular.value,
    };
    return variables;
  }
  if (params === topAnimes.slug) {
    const variables = {
      page: page,
      ...topAnimes.value,
    };
    return variables;
  }
  if (params === treding.slug) {
    const variables = {
      page: page,
      ...treding.value,
    };
    return variables;
  }
  if (params === undefined || params === null || params === "") {
    const variables = {
      page: 1,
      sort: "POPULARITY_DESC",
      type: "ANIME",
    };
    return variables;
  }
}
