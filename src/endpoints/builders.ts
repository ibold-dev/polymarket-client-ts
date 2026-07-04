import { PolymarketClient } from '../client';
import { BuilderLeaderboardEntry, GetBuilderLeaderboardParams, BuilderVolumeEntry, GetBuilderVolumeParams } from '../types/builders';

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

    /**
     * Gets daily builder volume time-series.
     * @param params Query parameters for fetching the builders volume time-series.
     * @returns An array of daily builder volume records.
     */
    public async getVolume(params?: GetBuilderVolumeParams): Promise<BuilderVolumeEntry[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.dataApi.get<BuilderVolumeEntry[]>('/v1/builders/volume', {
            params: queryParams
        });

        return response.data;
    }
}
