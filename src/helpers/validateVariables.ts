interface SearchParams {
  sort?: string | string[];
  format?: string;
  genres?: string | string[];
  search?: string;
  season?: string;
  seasonyear?: string;
  year?: string;
  page? : number
}

export function validateVariables({
  sort,
  format,
  genres,
  page,
  search,
  season,
  seasonyear,
  year,
}: SearchParams): any {
  // Se asegura de que 'genres' sea un array si es proporcionado como cadena
  const genresArray = Array.isArray(genres) ? genres : genres?.split(",");
  const formatArray = Array.isArray(format) ? format : format?.split(",");

  let variables: any = {
    page : page || 1,
    type: "ANIME",
    sort: sort || "POPULARITY_DESC",
  };

  // Define un objeto con los parámetros opcionales y sus nombres correspondientes
  const optionalParams = {
    season,
    seasonyear,
    year: year ? `${year}%` : null,
    format: formatArray,
    genres: genresArray,
    search,
  };

  // Agrega los valores de los parámetros opcionales a las variables si existen
  Object.keys(optionalParams).forEach((param) => {
    if (optionalParams[param] !== undefined && optionalParams[param] !== null) {
      variables[param] = optionalParams[param];
    }
  });

  return variables;
}

export function variablesInfinitiScroll(
  {
    sort,
    format,
    genres,

    search,
    season,
    seasonyear,
    year,
  }: SearchParams,
  page: number
): any {
  // Se asegura de que 'genres' sea un array si es proporcionado como cadena
  const genresArray = Array.isArray(genres) ? genres : genres?.split(",");
  const formatArray = Array.isArray(format) ? format : format?.split(",");

  let variables: any = {
    page: page,
    type: "ANIME",
    sort: sort || "POPULARITY_DESC",
  };

  // Define un objeto con los parámetros opcionales y sus nombres correspondientes
  const optionalParams = {
    season,
    seasonyear,
    year: year ? `${year}%` : null,
    format: formatArray,
    genres: genresArray,
    search,
  };

  // Agrega los valores de los parámetros opcionales a las variables si existen
  Object.keys(optionalParams).forEach((param) => {
    if (optionalParams[param] !== undefined && optionalParams[param] !== null) {
      variables[param] = optionalParams[param];
    }
  });

  return variables;
}
