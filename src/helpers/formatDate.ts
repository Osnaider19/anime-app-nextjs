export function formatearFecha(dia : number, mes : number, anio : number) {
  const fecha = new Date(anio, mes - 1, dia);
  const mesesAbreviados = [
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

  const fechaFormateada = dia + " " + mesesAbreviados[mes - 1] + " " + anio;

  return fechaFormateada;
}
