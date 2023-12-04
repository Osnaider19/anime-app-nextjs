import { Browse } from "@/const/const";

export function validateV(params: string, page: string) {
  const { NextSeason, ThisSeason, popular, topAnimes, treding } = Browse;
  if (params === NextSeason.slug) {
    const variables = {
      page: page || 1,
      ...NextSeason.value,
    };
    return variables;
  }
  if (params === ThisSeason.slug) {
    const variables = {
      page: page || 1,
      ...ThisSeason.value,
    };
    return variables;
  }
  if (params === popular.slug) {
    const variables = {
      page: page || 1,
      ...popular.value,
    };
    return variables;
  }
  if (params === topAnimes.slug) {
    const variables = {
      page: page || 1,
      ...topAnimes.value,
    };
    return variables;
  }
  if (params === treding.slug) {
    const variables = {
      page: page || 1,
      ...treding.value,
    };
    return variables;
  }
}
