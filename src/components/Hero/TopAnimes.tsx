



"use client"
import { useState, useEffect } from 'react';

export const TopAnimes = () => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query($season:MediaSeason,$seasonYear:Int $nextSeason:MediaSeason,$nextYear:Int){trending:Page(page:1,perPage:6){media(sort:TRENDING_DESC,type:ANIME,isAdult:false){...media}}season:Page(page:1,perPage:6){media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}nextSeason:Page(page:1,perPage:6){media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}popular:Page(page:1,perPage:6){media(sort:POPULARITY_DESC,type:ANIME,isAdult:false){...media}}top:Page(page:1,perPage:10){media(sort:SCORE_DESC,type:ANIME,isAdult:false){...media}}}fragment media on Media{id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity mediaListEntry{id status}nextAiringEpisode{airingAt timeUntilAiring episode}studios(isMain:true){edges{isMain node{id name}}}}
            `,
            variables: {
              // Tus variables de consulta aquí
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        setAnimeData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Asegúrate de ajustar las dependencias según tus necesidades

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error}</p>;
  }
  console.log(animeData)
  // Renderiza tu componente con los datos obtenidos
  return (
    <div>
      <p>animes</p>

    </div>
  );
};


