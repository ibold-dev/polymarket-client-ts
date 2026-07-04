import { PolymarketClient } from '../client';
import { Team, GetTeamsParams } from '../types/teams';

export class TeamsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List teams from the Gamma API.
     * @param params Query parameters for fetching teams.
     * @returns An array of teams.
     */
    public async getTeams(params?: GetTeamsParams): Promise<Team[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Team[]>('/teams', {
            params: queryParams
        });

        return response.data;
    }
}
