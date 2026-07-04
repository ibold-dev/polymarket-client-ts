import { PolymarketClient } from '../client';
import { Search, GetSearchParams } from '../types/search';

export class SearchEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Search markets, events, and profiles via the Gamma API.
     * @param params Query parameters for the search.
     * @returns A Search object containing arrays of matched events, tags, and profiles.
     */
    public async search(params: GetSearchParams): Promise<Search> {
        // Query parameters with potential array serialization depending on Axios config
        const queryParams: Record<string, any> = { ...params };

        // For arrays like events_tag, Axios default serialization might use events_tag[]=..., 
        // which might or might not be what the API expects.
        // If the API expects comma separated values or repeated parameters without brackets,
        // you might need a custom paramsSerializer in the Axios instance.
        // For now, we will pass them as is.

        const response = await this.client.gammaApi.get<Search>('/public-search', {
            params: queryParams
        });

        return response.data;
    }
}
