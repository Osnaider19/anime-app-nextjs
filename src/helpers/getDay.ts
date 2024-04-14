export function getDay(fecha: number): string {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Definir la fecha de referencia (puede ser cualquier fecha)
  const fechaDeReferencia = new Date("2024-01-01");

  // Calcular la fecha sumando los días a la fecha de referencia
  const fechaCalculada = new Date(
    fechaDeReferencia.getTime() + fecha * 24 * 60 * 60 * 1000
  );

  // Calcular la diferencia en milisegundos entre la fecha calculada y la fecha actual
  const diferenciaEnMilisegundos =
    fechaCalculada.getTime() - fechaActual.getTime();

  // Convertir la diferencia en milisegundos a días
  const diasFaltantes = Math.ceil(
    diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
  );

  // Construir la cadena de texto
  const textoDias = diasFaltantes === 1 ? "día" : "días";
  return `${diasFaltantes} ${textoDias}`;
}
