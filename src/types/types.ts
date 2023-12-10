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
    airingAt: number;
    episode: number;
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

export interface AnimeId {
  Media: Media;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  bannerImage: string;
  startDate: EndDateClass;
  endDate: EndDateClass;
  description: string;
  season: string;
  seasonYear: number;
  type: Source;
  format: string;
  status: Status;
  episodes: null;
  duration: number;
  chapters: null;
  volumes: null;
  genres: string[];
  synonyms: string[];
  source: Source;
  isAdult: boolean;
  isLocked: boolean;
  meanScore: number;
  averageScore: number;
  popularity: number;
  favourites: number;
  isFavouriteBlocked: boolean;
  hashtag: string;
  countryOfOrigin: string;
  isLicensed: boolean;
  isFavourite: boolean;
  isRecommendationBlocked: boolean;
  isReviewBlocked: boolean;
  nextAiringEpisode: NextAiringEpisode;
  relations: Relations;
  characterPreview: CharacterPreview;
  staffPreview: StaffPreview;
  studios: Studios;
  reviewPreview: ReviewPreview;
  recommendations: Recommendations;
  externalLinks: ExternalLink[];
  streamingEpisodes: StreamingEpisode[];
  trailer: {
    id: string;
    site: string;
  };
  rankings: Ranking[];
  tags: Tag[];
  mediaListEntry: null;
  stats: Stats;
}

export interface CharacterPreview {
  edges: CharacterPreviewEdge[];
}

export interface CharacterPreviewEdge {
  id: number;
  role: string;
  name: null;
  voiceActors: VoiceActorClass[];
  node: VoiceActorClass;
}

export interface VoiceActorClass {
  id: number;
  name: Name;
  image: Image;
  language?: Language;
}

export interface Image {
  large: string;
  color: string;
}

export enum Language {
  Japanese = "Japanese",
}

export interface Name {
  userPreferred: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
}

export interface EndDateClass {
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface ExternalLink {
  id: number;
  site: string;
  url: string;
  type: Type;
  language: Language | null;
  color: null | string;
  icon: null | string;
  notes: null;
  isDisabled: boolean;
}

export enum Type {
  Info = "INFO",
  Social = "SOCIAL",
  Streaming = "STREAMING",
}

export interface NextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface Ranking {
  id: number;
  rank: number;
  type: string;
  format: string;
  year: number | null;
  season: null;
  allTime: boolean;
  context: string;
}

export type Recommendations = {
  pageInfo: PageInfo;
  nodes: RecommendationsNode[];
};

export interface RecommendationsNode {
  id: number;
  rating: number;
  userRating: string;
  mediaRecommendation: MediaRecommendation;
  user: User;
}

export interface MediaRecommendation {
  id: number;
  title: Name;
  format: null | string;
  type: Source;
  status: Status;
  bannerImage: null | string;
  coverImage: Image;
  genres: string[];
}

export enum Status {
  Finished = "FINISHED",
  NotYetReleased = "NOT_YET_RELEASED",
  Releasing = "RELEASING",
}

export enum Source {
  Anime = "ANIME",
  Manga = "MANGA",
}

export interface User {
  id: number;
  name: string;
  avatar: Image;
}

export interface PageInfo {
  total: number;
}

export interface Relations {
  edges: RelationsEdge[];
}

export interface RelationsEdge {
  id: number;
  relationType: RelationType;
  node: MediaRecommendation;
}

export enum RelationType {
  Alternative = "ALTERNATIVE",
  Character = "CHARACTER",
  Other = "OTHER",
  Prequel = "PREQUEL",
  SideStory = "SIDE_STORY",
  Source = "SOURCE",
  Summary = "SUMMARY",
}

export interface ReviewPreview {
  pageInfo: PageInfo;
  nodes: ReviewPreviewNode[];
}

export interface ReviewPreviewNode {
  id: number;
  summary: string;
  rating: number;
  ratingAmount: number;
  user: User;
}

export interface StaffPreview {
  edges: StaffPreviewEdge[];
}

export interface StaffPreviewEdge {
  id: number;
  role: string;
  node: VoiceActorClass;
}

export interface Stats {
  statusDistribution: StatusDistribution[];
  scoreDistribution: ScoreDistribution[];
}

export interface ScoreDistribution {
  score: number;
  amount: number;
}

export interface StatusDistribution {
  status: string;
  amount: number;
}

export interface StreamingEpisode {
  site: Site;
  title: string;
  thumbnail: string;
  url: string;
}

export enum Site {
  Crunchyroll = "Crunchyroll",
}

export interface Studios {
  edges: StudiosEdge[];
}

export interface StudiosEdge {
  isMain: boolean;
  node: PurpleNode;
}

export interface PurpleNode {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
  description: string;
  rank: number;
  isMediaSpoiler: boolean;
  isGeneralSpoiler: boolean;
  userId: number | null;
}

export interface Title {
  userPreferred: string;
  romaji: string;
  english: string;
  native: string;
}

export interface Pagination {
  data: {
    Page: {
      media: AnimeObject[];
      pageInfo: {
        currentPage: number;
        hasNextPage: boolean;
        lastPage: number;
        perPage: number;
        total: number;
      };
    };
  };
}

///

export interface Tag {
  name: string;
  description: string;
  category: string;
  isAdult: boolean;
}

//

export type PageParams = {
  searchParams: {
    genres?: string;
    page?: number;
    search?: string;
    year?: string;
    season?: string;
    seasonyear?: string;
    format?: string;
    sort: string;
  };
};
