export function averageScoreColor(score: number) {
  if (score > 20 && score < 40) return "danger";
  if (score > 40 && score < 60) return "warning";
  if (score > 60 && score < 80) return "primary";
  if (score > 80) return "success";
}
