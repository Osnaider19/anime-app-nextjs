export const queryHome = {
  query: `
query (
  $season: MediaSeason,
  $seasonYear: Int,
  $nextSeason: MediaSeason,
  $nextYear: Int
) {
  trending: Page(page: 1, perPage: 10) {
    media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  season: Page(page: 1, perPage: 10) {
    media(
      season: $season,
      seasonYear: $seasonYear,
      sort: POPULARITY_DESC,
      type: ANIME,
      isAdult: false
    ) {
      ...media
    }
  }
  nextSeason: Page(page: 1, perPage: 10) {
    media(
      season: $nextSeason,
      seasonYear: $nextYear,
      sort: POPULARITY_DESC,
      type: ANIME,
      isAdult: false
    ) {
      ...media
    }
  }
  popular: Page(page: 1, perPage: 10) {
    media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  top: Page(page: 1, perPage: 10) {
    media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
}

fragment media on Media {
  id
  title {
    userPreferred
  }
  coverImage {
    extraLarge
    large
    color
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  bannerImage
  season
  seasonYear
  description
  type
  format
  status(version: 2)
  episodes
  duration
  chapters
  volumes
  genres
  isAdult
  averageScore
  popularity
  mediaListEntry {
    id
    status
  }
  nextAiringEpisode {
    airingAt
    timeUntilAiring
    episode
  }
  studios(isMain: true) {
    edges {
      isMain
      node {
        id
        name
      }
    }
  }
}        
    `,
  variables: {
    type: "ANIME",
    season: "FALL",
    seasonYear: 2023,
    nextSeason: "WINTER",
    nextYear: 2024,
  },
};

export const queryId = {
  query: ` query media($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      title {
        userPreferred
        romaji
        english
        native
      }
      coverImage {
        extraLarge
        large
        color
      }
      bannerImage
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      description
      season
      seasonYear
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      synonyms
      source(version: 3)
      isAdult
      isLocked
      meanScore
      averageScore
      popularity
      favourites
      isFavouriteBlocked
      hashtag
      countryOfOrigin
      isLicensed
      isFavourite
      isRecommendationBlocked
      isFavouriteBlocked
      isReviewBlocked
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      relations {
        edges {
          id
          relationType(version: 2)
          node {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              extraLarge
              large
              color
            }
          }
        }
      }
      characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
        edges {
          id
          role
          name
          voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
          node {
            id
            name {
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
      staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
        edges {
          id
          role
          node {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
        }
      }
      studios {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
      reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating
          userRating
          mediaRecommendation {
            id
            title {
              userPreferred
            }
            genres
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
              color
            }
          }
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      externalLinks {
        id
        site
        url
        type
        language
        color
        icon
        notes
        isDisabled
      }
      streamingEpisodes{
        site
        title
        thumbnail
        url
      }
      trailer {
        id
        site
      }
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      tags {
        id
        name
        description
        rank
        isMediaSpoiler
        isGeneralSpoiler
        userId
      }
      mediaListEntry {
        id
        status
        score
      }
      stats {
        statusDistribution {
          status
          amount
        }
        scoreDistribution {
          score
          amount
        }
      }
    }
  }
  `,
};

export const queryAnimePopular = {
  query: `
    query(
      $page: Int = 1
      $id: Int
      $type: MediaType
      $isAdult: Boolean = false
      $search: String
      $format: [MediaFormat]
      $status: MediaStatus
      $countryOfOrigin: CountryCode
      $source: MediaSource
      $season: MediaSeason
      $seasonYear: Int
      $year: String
      $onList: Boolean
      $yearLesser: FuzzyDateInt
      $yearGreater: FuzzyDateInt
      $episodeLesser: Int
      $episodeGreater: Int
      $durationLesser: Int
      $durationGreater: Int
      $chapterLesser: Int
      $chapterGreater: Int
      $volumeLesser: Int
      $volumeGreater: Int
      $licensedBy: [Int]
      $isLicensed: Boolean
      $genres: [String]
      $excludedGenres: [String]
      $tags: [String]
      $excludedTags: [String]
      $minimumTagRank: Int
      $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
    ) {
      Page(
        page: $page
        perPage: 20
      ) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(
          id: $id
          type: $type
          season: $season
          format_in: $format
          status: $status
          countryOfOrigin: $countryOfOrigin
          source: $source
          search: $search
          onList: $onList
          seasonYear: $seasonYear
          startDate_like: $year
          startDate_lesser: $yearLesser
          startDate_greater: $yearGreater
          episodes_lesser: $episodeLesser
          episodes_greater: $episodeGreater
          duration_lesser: $durationLesser
          duration_greater: $durationGreater
          chapters_lesser: $chapterLesser
          chapters_greater: $chapterGreater
          volumes_lesser: $volumeLesser
          volumes_greater: $volumeGreater
          licensedById_in: $licensedBy
          isLicensed: $isLicensed
          genre_in: $genres
          genre_not_in: $excludedGenres
          tag_in: $tags
          tag_not_in: $excludedTags
          minimumTagRank: $minimumTagRank
          sort: $sort
          isAdult: $isAdult
        ) {
          id
          title {
            userPreferred
          }
          coverImage {
            extraLarge
            large
            color
          }
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          bannerImage
          season
          seasonYear
          description
          type
          format
          status(version: 2)
          episodes
          duration
          chapters
          volumes
          genres
          isAdult
          averageScore
          popularity
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
          }
          mediaListEntry {
            id
            status
          }
          studios(isMain: true) {
            edges {
              isMain
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  `,
  variables: {
    page: 1,
    type: "ANIME",
    sort: "POPULARITY_DESC",
  },
};

export const queryPopular = {
  query: `
  query (
    $season: MediaSeason,
    $seasonYear: Int,
    $nextSeason: MediaSeason,
    $nextYear: Int
  ) {
    
    popular: Page(page: 1, perPage: 10) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...media
      }
    }
    
  }
  
  fragment media on Media {
    id
    title {
      userPreferred
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry {
      id
      status
    }
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }        
      `,
  variables: {
    page: 1,
    type: "ANIME",
    sort: "POPULARITY_DESC",
  },
};

export const queryWatch = {
  query: `query GetVideoData($id: Int, $type: MediaType, $isAdult: Boolean) { Media(id: $id, type: $type, isAdult: $isAdult) { id title { userPreferred romaji english native } streamingEpisodes { site title thumbnail url } trailer { id site } } }`,
};

export const queryCharacters = {
  query:
    "query media($id:Int,$page:Int){Media(id:$id){id characters(page:$page,sort:[ROLE,RELEVANCE,ID]){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id role name voiceActorRoles(sort:[RELEVANCE,ID]){roleNotes dubGroup voiceActor{id name{userPreferred}language:languageV2 image{large}}}node{id name{userPreferred}image{large}}}}}}",
};

export const queryStaff = {
  query:
    "query media($id:Int,$page:Int){Media(id:$id){id staff(page:$page,sort:[RELEVANCE,ID]){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id role node{id name{userPreferred}image{large}}}}}}",
};

export const queryStats = {
  query:
    "query($id:Int){Media(id:$id){id rankings{id rank type format year season allTime context}trends(sort:ID_DESC){nodes{averageScore date trending popularity}}airingTrends:trends(releasing:true,sort:EPISODE_DESC){nodes{averageScore inProgress episode}}distribution:stats{status:statusDistribution{status amount}score:scoreDistribution{score amount}}}}",
  variables: {
    id: 162803,
  },
};
