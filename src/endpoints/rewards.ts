import { PolymarketClient } from '../client';
import { PaginatedCurrentReward, GetCurrentRewardsParams, PaginatedMarketReward, GetRawRewardsForMarketParams, PaginatedMultiMarketInfo, GetMultiMarketsParams } from '../types/rewards';

export class RewardsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Get current active rewards configurations grouped by market.
     * @param params Query parameters for fetching current rewards.
     * @returns A paginated list of current reward configurations.
     */
    public async getCurrentRewards(params?: GetCurrentRewardsParams): Promise<PaginatedCurrentReward> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.clobApi.get<PaginatedCurrentReward>('/rewards/markets/current', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get raw rewards for a specific market.
     * @param conditionId The condition ID of the market.
     * @param params Query parameters for fetching raw rewards.
     * @returns A paginated list of market reward configurations.
     */
    public async getRawRewardsForMarket(conditionId: string, params?: GetRawRewardsForMarketParams): Promise<PaginatedMarketReward> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.clobApi.get<PaginatedMarketReward>(`/rewards/markets/${conditionId}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get multiple markets with rewards.
     * @param params Query parameters for filtering, sorting, and pagination.
     * @returns A paginated list of markets with rewards and trading metrics.
     */
    public async getMultiMarkets(params?: GetMultiMarketsParams): Promise<PaginatedMultiMarketInfo> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.clobApi.get<PaginatedMultiMarketInfo>('/rewards/markets/multi', {
            params: queryParams
        });

        return response.data;
    }
}
