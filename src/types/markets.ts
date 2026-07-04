import { Market } from './search';

export interface KeysetMarketsResponse {
    markets: Market[];
    next_cursor?: string;
}

export interface GetMarketsKeysetParams {
    limit?: number;
    order?: string;
    ascending?: boolean;
    after_cursor?: string;
    id?: number[];
    slug?: string[];
    closed?: boolean;
    decimalized?: boolean;
    clob_token_ids?: string[];
    condition_ids?: string[];
    question_ids?: string[];
    market_maker_address?: string[];
    liquidity_num_min?: number;
    liquidity_num_max?: number;
    volume_num_min?: number;
    volume_num_max?: number;
    start_date_min?: string;
    start_date_max?: string;
    end_date_min?: string;
    end_date_max?: string;
    tag_id?: number[];
    related_tags?: boolean;
    tag_match?: string;
    cyom?: boolean;
    rfq_enabled?: boolean;
    uma_resolution_status?: string;
    game_id?: string;
    sports_market_types?: string[];
    include_tag?: boolean;
    locale?: string;
}

export interface GetMarketsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    id?: number[];
    slug?: string[];
    clob_token_ids?: string[];
    condition_ids?: string[];
    market_maker_address?: string[];
    liquidity_num_min?: number;
    liquidity_num_max?: number;
    volume_num_min?: number;
    volume_num_max?: number;
    start_date_min?: string;
    start_date_max?: string;
    end_date_min?: string;
    end_date_max?: string;
    tag_id?: number;
    related_tags?: boolean;
    cyom?: boolean;
    uma_resolution_status?: string;
    game_id?: string;
    sports_market_types?: string[];
    rewards_min_size?: number;
    question_ids?: string[];
    include_tag?: boolean;
    closed?: boolean;
}

export interface GetMarketParams {
    include_tag?: boolean;
}

export interface MarketByTokenResponse {
    condition_id: string;
    primary_token_id: string;
    secondary_token_id: string;
}

export interface OpenInterest {
    market: string;
    value: number;
}

export interface GetOpenInterestParams {
    market?: string[];
}




