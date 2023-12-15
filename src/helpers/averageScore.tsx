export function averageScoreColor(score: number) {
  if (score > 20 && score < 40) return "#F31260";
  if (score > 40 && score < 60) return "#EE4F3E";
  if (score > 60 && score < 80) return "#F5A524";
  if (score > 80) return "#18C964";
}
