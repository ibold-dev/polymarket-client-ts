import { PolymarketClient } from '../client';
import { Trade, GetTradesParams } from '../types/trades';

export class TradesEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets trades for a user or markets.
     * @param params Query parameters for fetching trades.
     * @returns An array of trades.
     */
    public async getTrades(params?: GetTradesParams): Promise<Trade[]> {
        const queryParams: Record<string, any> = { ...params };

        if (queryParams.user && !/^0x[a-fA-F0-9]{40}$/.test(queryParams.user)) {
            throw new Error('Invalid wallet address format for user. Must be a valid Ethereum address.');
        }

        if (Array.isArray(queryParams.market)) {
            queryParams.market = queryParams.market.join(',');
        }
        if (Array.isArray(queryParams.eventId)) {
            queryParams.eventId = queryParams.eventId.join(',');
        }

        const response = await this.client.dataApi.get<Trade[]>('/trades', {
            params: queryParams
        });

        return response.data;
    }
}
