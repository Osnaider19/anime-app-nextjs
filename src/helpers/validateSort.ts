export function validateSort(type: string) {
  if (type === "RADED") return "SCORE_DESC";
  if (type === "POPULAR") return "POPULARITY_DESC";
}
