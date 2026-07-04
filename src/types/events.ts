import { Event } from './search';

export interface KeysetEventsResponse {
    events?: Event[];
    next_cursor?: string;
}

export interface GetEventsKeysetParams {
    limit?: number;
    order?: string;
    ascending?: boolean;
    after_cursor?: string;
    offset?: number;
    id?: number[];
    slug?: string[];
    closed?: boolean;
    live?: boolean;
    featured?: boolean;
    cyom?: boolean;
    title_search?: string;
    liquidity_min?: number;
    liquidity_max?: number;
    volume_min?: number;
    volume_max?: number;
    start_date_min?: string;
    start_date_max?: string;
    end_date_min?: string;
    end_date_max?: string;
    start_time_min?: string;
    start_time_max?: string;
    tag_id?: number[];
    tag_slug?: string;
    exclude_tag_id?: number[];
    related_tags?: boolean;
    tag_match?: string;
    series_id?: number[];
    game_id?: number[];
    event_date?: string;
    event_week?: number;
    featured_order?: boolean;
    recurrence?: string;
    created_by?: string[];
    parent_event_id?: number;
    include_children?: boolean;
    partner_slug?: string;
    include_chat?: boolean;
    include_template?: boolean;
    include_best_lines?: boolean;
    locale?: string;
}

export interface GetEventsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    id?: number[];
    tag_id?: number;
    exclude_tag_id?: number[];
    slug?: string[];
    tag_slug?: string;
    related_tags?: boolean;
    active?: boolean;
    archived?: boolean;
    featured?: boolean;
    cyom?: boolean;
    include_chat?: boolean;
    include_template?: boolean;
    recurrence?: string;
    closed?: boolean;
    liquidity_min?: number;
    liquidity_max?: number;
    volume_min?: number;
    volume_max?: number;
    start_date_min?: string;
    start_date_max?: string;
    end_date_min?: string;
    end_date_max?: string;
}

export interface GetEventParams {
    include_chat?: boolean;
    include_template?: boolean;
}


