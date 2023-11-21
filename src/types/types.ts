export type AnimeObject = {
  id: number;
  title: {
    userPreferred: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    color: string;
  };
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: null;
  volumes: null;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  mediaListEntry: null;
  nextAiringEpisode: {
    airingAt : number;
    episode : number;
    timeUntilAiring: number;
   };
  studios: {
    edges: [
      {
        isMain: true;
        node: {
          id: number;
          name: string;
        };
      }
    ];
  };
};

export type Datadd = {
  data: {
    nextSeason: {
      media: Array<AnimeObject>;
    };
    popular: {
      media: Array<AnimeObject>;
    };
    season: {
      media: Array<AnimeObject>;
    };
    top: {
      media: Array<AnimeObject>;
    };
    trending: {
      media: Array<AnimeObject>;
    };
  };
};
