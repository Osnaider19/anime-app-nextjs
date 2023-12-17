import { Browse } from "@/const/const";
import { validateVariables } from "./validateVariables";
type searchParams = {
  genres?: string;
  page?: number;
  search?: string;
  year?: string;
  season?: string;
  seasonyear?: string;
  format?: string;
  sort: string;
};
export function validateV(params: string, searchParams: searchParams) {
  const { NextSeason, ThisSeason, popular, topAnimes, treding } = Browse;
  if (params === NextSeason.slug) {
    const variables = {
      ...NextSeason.value,
    };
    return variables;
  }
  if (params === ThisSeason.slug) {
    const variables = {
      ...ThisSeason.value,
    };
    return variables;
  }
  if (params === popular.slug) {
    const variables = {
      ...popular.value,
    };
    return variables;
  }
  if (params === topAnimes.slug) {
    const variables = {
      ...topAnimes.value,
    };
    return variables;
  }
  if (params === treding.slug) {
    const variables = {
      ...treding.value,
    };
    return variables;
  } else {
    const variables = validateVariables(searchParams);
    return variables;
  }
}
