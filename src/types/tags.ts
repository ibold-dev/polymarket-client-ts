export { Tag } from './search';

export interface GetTagsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    include_template?: boolean;
    is_carousel?: boolean;
}
