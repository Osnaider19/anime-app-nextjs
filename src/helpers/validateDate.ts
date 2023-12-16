export function transmittingIn(segundos: number): string {
  const segDay = 86400; // 60 segundos/min * 60 minutos/hora * 24
  const segHours = 3600; // 60 segundos/min * 60 minutos/hora
  const segMin = 60;
  const day = Math.floor(segundos / segDay);
  const hours = Math.floor((segundos % segDay) / segHours);
  const minutes = Math.floor(((segundos % segDay) % segHours) / segMin);

  return `${day}d ${hours}h ${minutes}m`;
}

export function transmissionDate(timestamp: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
