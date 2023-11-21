type Fecha = {
  year: number;
  month: number;
  day: number;
};
export function formatDate(objetoFecha : Fecha) {
  const meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const { year, month, day } = objetoFecha;
  const nombreMes = meses[month - 1];

  const fechaFormateada = `${day} ${nombreMes} ${year}`;

  return fechaFormateada;
}
