import { PolymarketClient } from '../client';
import { TraderLeaderboardEntry, GetLeaderboardParams } from '../types/leaderboard';

export class LeaderboardEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets trader leaderboard rankings.
     * @param params Query parameters for fetching the leaderboard.
     * @returns An array of trader leaderboard entries.
     */
    public async getLeaderboard(params?: GetLeaderboardParams): Promise<TraderLeaderboardEntry[]> {
        const queryParams: Record<string, any> = { ...params };

        if (queryParams.user && !/^0x[a-fA-F0-9]{40}$/.test(queryParams.user)) {
            throw new Error('Invalid wallet address format for user. Must be a valid Ethereum address.');
        }

        const response = await this.client.dataApi.get<TraderLeaderboardEntry[]>('/v1/leaderboard', {
            params: queryParams
        });

        return response.data;
    }
}
