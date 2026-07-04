import { PolymarketClient } from '../client';
import { Tag, GetTagsParams, GetTagParams, RelatedTag, GetRelatedTagsParams } from '../types/tags';

export class TagsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List tags from the Gamma API.
     * @param params Query parameters for fetching tags.
     * @returns An array of tags.
     */
    public async getTags(params?: GetTagsParams): Promise<Tag[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Tag[]>('/tags', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get a tag by its ID.
     * @param id The tag ID.
     * @param params Query parameters for fetching the tag.
     * @returns A single tag.
     */
    public async getTag(id: number | string, params?: GetTagParams): Promise<Tag> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Tag>(`/tags/${id}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get a tag by its slug.
     * @param slug The tag slug.
     * @param params Query parameters for fetching the tag.
     * @returns A single tag.
     */
    public async getTagBySlug(slug: string, params?: GetTagParams): Promise<Tag> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Tag>(`/tags/slug/${slug}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get related tags (relationships) by tag ID.
     * @param id The tag ID.
     * @param params Query parameters for fetching related tags.
     * @returns An array of related tag relationships.
     */
    public async getRelatedTagsById(id: number | string, params?: GetRelatedTagsParams): Promise<RelatedTag[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<RelatedTag[]>(`/tags/${id}/related-tags`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get related tags (relationships) by tag slug.
     * @param slug The tag slug.
     * @param params Query parameters for fetching related tags.
     * @returns An array of related tag relationships.
     */
    public async getRelatedTagsBySlug(slug: string, params?: GetRelatedTagsParams): Promise<RelatedTag[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<RelatedTag[]>(`/tags/slug/${slug}/related-tags`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get tags related to a tag ID.
     * @param id The tag ID.
     * @param params Query parameters for fetching related tags.
     * @returns An array of tags.
     */
    public async getTagsRelatedToATagById(id: number | string, params?: GetRelatedTagsParams): Promise<Tag[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Tag[]>(`/tags/${id}/related-tags/tags`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get tags related to a tag slug.
     * @param slug The tag slug.
     * @param params Query parameters for fetching related tags.
     * @returns An array of tags.
     */
    public async getTagsRelatedToATagBySlug(slug: string, params?: GetRelatedTagsParams): Promise<Tag[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Tag[]>(`/tags/slug/${slug}/related-tags/tags`, {
            params: queryParams
        });

        return response.data;
    }
}
