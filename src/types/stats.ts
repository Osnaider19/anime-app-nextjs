export interface StatsType {
    stats: StatsClass;
}

export interface StatsClass {
    id:           number;
    rankings:     Ranking[];
    trends:       Trends;
    airingTrends: AiringTrends;
    distribution: Distribution;
}

export interface AiringTrends {
    nodes: AiringTrendsNode[];
}

export interface AiringTrendsNode {
    averageScore: number;
    inProgress:   number;
    episode:      number;
}

export interface Distribution {
    status: Status[];
    score:  Score[];
}

export interface Score {
    score:  number;
    amount: number;
}

export interface Status {
    status: string;
    amount: number;
}

export interface Ranking {
    id:      number;
    rank:    number;
    type:    string;
    format:  string;
    year:    number | null;
    season:  null;
    allTime: boolean;
    context: string;
}

export interface Trends {
    nodes: TrendsNode[];
}

export interface TrendsNode {
    averageScore: number;
    date:         number;
    trending:     number;
    popularity:   number;
}
