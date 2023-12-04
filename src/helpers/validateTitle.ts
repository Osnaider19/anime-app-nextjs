import { Browse } from "@/const/const";

export function validateTitle(params: string) {
  const { NextSeason, ThisSeason, popular, topAnimes, treding } = Browse;
  if (params === popular.slug) return popular.title;
  if (params === NextSeason.slug) return NextSeason.title;
  if (params === ThisSeason.slug) return ThisSeason.title;
  if (params === topAnimes.slug) return topAnimes.title;
  if (params === treding.slug) return treding.title;
}
