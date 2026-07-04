export { Tag } from './search';

export interface GetTagsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    include_template?: boolean;
    is_carousel?: boolean;
}

export interface GetTagParams {
    include_template?: boolean;
}

export interface RelatedTag {
    id?: string;
    tagID?: number | null;
    relatedTagID?: number | null;
    rank?: number | null;
}

export interface GetRelatedTagsParams {
    omit_empty?: boolean;
    status?: 'active' | 'closed' | 'all';
}
