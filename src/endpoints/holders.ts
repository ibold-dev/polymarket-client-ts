import { PolymarketClient } from '../client';
import { GetHoldersParams, MetaHolder } from '../types/holders';

export class HoldersEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Get top holders for markets.
     * @param params Query parameters for fetching holders.
     * @returns A list of meta holders.
     */
    public async getHolders(params: GetHoldersParams): Promise<MetaHolder[]> {
        const queryParams: Record<string, any> = { ...params };
        
        if (params.market && Array.isArray(params.market)) {
            queryParams.market = params.market.join(',');
        }

        const response = await this.client.dataApi.get<MetaHolder[]>('/holders', {
            params: queryParams
        });

        return response.data;
    }
}
