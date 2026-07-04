import { PolymarketClient } from '../client';
import { KeysetMarketsResponse, GetMarketsKeysetParams, GetMarketsParams, GetMarketParams, MarketByTokenResponse, GetOpenInterestParams, OpenInterest, CursorPaginationParams, PaginatedSimplifiedMarkets, PaginatedClobMarkets } from '../types/markets';
import { Market, Tag } from '../types/search';

export class MarketsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List markets using cursor-based keyset pagination.
     * @param params Query parameters for fetching markets.
     * @returns A paginated list of markets.
     */
    public async getMarketsKeyset(params?: GetMarketsKeysetParams): Promise<KeysetMarketsResponse> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<KeysetMarketsResponse>('/markets/keyset', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * List markets.
     * @param params Query parameters for fetching markets.
     * @returns A list of markets.
     */
    public async getMarkets(params?: GetMarketsParams): Promise<Market[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Market[]>('/markets', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get a market by its ID.
     * @param id The ID of the market to fetch.
     * @param params Query parameters for fetching the market.
     * @returns The market.
     */
    public async getMarket(id: string | number, params?: GetMarketParams): Promise<Market> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Market>(`/markets/${id}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get a market by its slug.
     * @param slug The slug of the market to fetch.
     * @param params Query parameters for fetching the market.
     * @returns The market.
     */
    public async getMarketBySlug(slug: string, params?: GetMarketParams): Promise<Market> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Market>(`/markets/slug/${slug}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get tags attached to a market.
     * @param id The ID of the market.
     * @returns An array of tags attached to the market.
     */
    public async getMarketTags(id: string | number): Promise<Tag[]> {
        const response = await this.client.gammaApi.get<Tag[]>(`/markets/${id}/tags`);
        return response.data;
    }

    /**
     * Get market by token.
     * Returns the parent market for a given token ID.
     * @param tokenId The token ID to look up the parent market for.
     * @returns The market's condition ID and token IDs.
     */
    public async getMarketByToken(tokenId: string): Promise<MarketByTokenResponse> {
        const response = await this.client.clobApi.get<MarketByTokenResponse>(`/markets-by-token/${tokenId}`);
        return response.data;
    }

    /**
     * Get open interest for markets.
     * @param params Query parameters for fetching open interest.
     * @returns Array of open interest values.
     */
    public async getOpenInterest(params?: GetOpenInterestParams): Promise<OpenInterest[]> {
        const queryParams: Record<string, any> = { ...params };
        
        if (params?.market && Array.isArray(params.market)) {
            queryParams.market = params.market.join(',');
        }

        const response = await this.client.dataApi.get<OpenInterest[]>('/oi', {
            params: queryParams
        });
        return response.data;
    }

    /**
     * Get simplified markets (CLOB API).
     * @param params Query parameters for pagination.
     * @returns Paginated simplified markets.
     */
    public async getSimplifiedMarkets(params?: CursorPaginationParams): Promise<PaginatedSimplifiedMarkets> {
        const response = await this.client.clobApi.get<PaginatedSimplifiedMarkets>('/simplified-markets', {
            params
        });
        return response.data;
    }

    /**
     * Get sampling markets (CLOB API).
     * @param params Query parameters for pagination.
     * @returns Paginated CLOB markets.
     */
    public async getSamplingMarkets(params?: CursorPaginationParams): Promise<PaginatedClobMarkets> {
        const response = await this.client.clobApi.get<PaginatedClobMarkets>('/sampling-markets', {
            params
        });
        return response.data;
    }

    /**
     * Get sampling simplified markets (CLOB API).
     * @param params Query parameters for pagination.
     * @returns Paginated simplified markets.
     */
    public async getSamplingSimplifiedMarkets(params?: CursorPaginationParams): Promise<PaginatedSimplifiedMarkets> {
        const response = await this.client.clobApi.get<PaginatedSimplifiedMarkets>('/sampling-simplified-markets', {
            params
        });
        return response.data;
    }
}
