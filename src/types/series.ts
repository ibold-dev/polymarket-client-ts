export { Series } from './search';

export interface GetSeriesParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    slug?: string[];
    categories_ids?: number[];
    categories_labels?: string[];
    closed?: boolean;
    include_chat?: boolean;
    recurrence?: string;
    exclude_events?: boolean;
}

export interface GetSeriesByIdParams {
    include_chat?: boolean;
}
