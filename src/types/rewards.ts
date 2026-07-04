export interface CurrentRewardConfig {
    id: number;
    asset_address: string;
    start_date: string;
    end_date: string;
    rate_per_day: number;
    total_rewards?: number;
}

export interface CurrentReward {
    condition_id: string;
    rewards_max_spread?: number;
    rewards_min_size?: number;
    rewards_config?: CurrentRewardConfig[];
    sponsored_daily_rate?: number;
    sponsors_count?: number;
    native_daily_rate?: number;
    total_daily_rate?: number;
}

export interface PaginatedCurrentReward {
    limit: number;
    count: number;
    next_cursor: string;
    data: CurrentReward[];
}

export interface GetCurrentRewardsParams {
    sponsored?: boolean;
    next_cursor?: string;
}

export interface RewardsToken {
    token_id: string;
    outcome: string;
    price?: number;
}

export interface RewardsConfig {
    id?: number;
    asset_address: string;
    start_date: string;
    end_date?: string;
    rate_per_day: number;
    total_rewards?: number;
    remaining_reward_amount?: number;
    total_days?: number;
}

export interface MarketReward {
    condition_id: string;
    question: string;
    market_slug?: string;
    event_slug?: string;
    image?: string;
    rewards_max_spread?: number;
    rewards_min_size?: number;
    market_competitiveness?: number;
    tokens: RewardsToken[];
    rewards_config?: RewardsConfig[];
}

export interface PaginatedMarketReward {
    limit: number;
    count: number;
    next_cursor: string;
    data: MarketReward[];
}

export interface GetRawRewardsForMarketParams {
    sponsored?: boolean;
    next_cursor?: string;
}

export interface MultiMarketInfo {
    condition_id: string;
    event_id?: string;
    event_slug?: string;
    created_at?: string;
    group_item_title?: string;
    image?: string;
    market_competitiveness?: number;
    market_id: string;
    market_slug?: string;
    one_day_price_change?: number;
    question: string;
    rewards_max_spread?: number;
    rewards_min_size?: number;
    spread?: number;
    end_date?: string;
    tokens: RewardsToken[];
    volume_24hr?: number;
    rewards_config?: RewardsConfig[];
}

export interface PaginatedMultiMarketInfo {
    limit: number;
    count: number;
    next_cursor: string;
    data: MultiMarketInfo[];
}

export interface GetMultiMarketsParams {
    q?: string;
    tag_slug?: string | string[];
    event_id?: string | string[];
    event_title?: string;
    order_by?: string;
    position?: 'ASC' | 'DESC';
    min_volume_24hr?: number;
    max_volume_24hr?: number;
    min_spread?: number;
    max_spread?: number;
    min_price?: number;
    max_price?: number;
    next_cursor?: string;
    page_size?: number;
}


