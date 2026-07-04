export interface Team {
    id?: number;
    name?: string | null;
    league?: string | null;
    record?: string | null;
    logo?: string | null;
    abbreviation?: string | null;
    alias?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

export interface GetTeamsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    league?: string[];
    name?: string[];
    abbreviation?: string[];
}
