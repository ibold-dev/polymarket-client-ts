import { PolymarketClient } from '../client';
import { Tag, GetTagsParams } from '../types/tags';

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
}
