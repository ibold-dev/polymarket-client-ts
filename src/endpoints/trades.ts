import { PolymarketClient } from '../client';
import { Trade, GetTradesParams, TradedCount, GetTradedParams, GetClobTradesParams, ClobTradesResponse, GetBuilderTradesParams, BuilderTradesResponse } from '../types/trades';

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

    /**
     * Gets the total markets a user has traded.
     * @param params Query parameters including the required 'user' wallet address.
     * @returns An object containing the count of traded markets.
     */
    public async getTotalMarketsTraded(params: GetTradedParams): Promise<TradedCount> {
        if (!/^0x[a-fA-F0-9]{40}$/.test(params.user)) {
            throw new Error('Invalid wallet address format for user. Must be a valid Ethereum address.');
        }

        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.dataApi.get<TradedCount>('/traded', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Retrieves trades for the authenticated user (CLOB API).
     * @param params Query parameters for fetching CLOB trades.
     * @returns A paginated list of CLOB trades.
     */
    public async getClobTrades(params: GetClobTradesParams): Promise<ClobTradesResponse> {
        const queryParams: Record<string, any> = { ...params };
        
        const response = await this.client.clobApi.get<ClobTradesResponse>('/data/trades', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Retrieves trades attributed to a builder code (CLOB API).
     * @param params Query parameters for fetching builder trades.
     * @returns A paginated list of builder trades.
     */
    public async getBuilderTrades(params: GetBuilderTradesParams): Promise<BuilderTradesResponse> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.clobApi.get<BuilderTradesResponse>('/builder/trades', {
            params: queryParams
        });

        return response.data;
    }
}
