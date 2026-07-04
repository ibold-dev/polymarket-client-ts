import { PolymarketClient } from '../client';
import { BuilderLeaderboardEntry, GetBuilderLeaderboardParams } from '../types/builders';

export class BuildersEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets the aggregated builder leaderboard rankings.
     * @param params Query parameters for fetching the builders leaderboard.
     * @returns An array of builder leaderboard entries.
     */
    public async getLeaderboard(params?: GetBuilderLeaderboardParams): Promise<BuilderLeaderboardEntry[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.dataApi.get<BuilderLeaderboardEntry[]>('/v1/builders/leaderboard', {
            params: queryParams
        });

        return response.data;
    }
}
