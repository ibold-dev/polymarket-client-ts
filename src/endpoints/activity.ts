import { PolymarketClient } from '../client';
import { Activity, GetActivityParams } from '../types/activity';

export class ActivityEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets the activity for a user.
     * @param params Query parameters including the required 'user' wallet address.
     * @returns An array of the user's activity.
     */
    public async getUserActivity(params: GetActivityParams): Promise<Activity[]> {
        if (!/^0x[a-fA-F0-9]{40}$/.test(params.user)) {
            throw new Error('Invalid wallet address format for user. Must be a valid Ethereum address.');
        }

        const queryParams: Record<string, any> = { ...params };

        if (Array.isArray(queryParams.market)) {
            queryParams.market = queryParams.market.join(',');
        }
        if (Array.isArray(queryParams.eventId)) {
            queryParams.eventId = queryParams.eventId.join(',');
        }
        if (Array.isArray(queryParams.type)) {
            queryParams.type = queryParams.type.join(',');
        }

        const response = await this.client.dataApi.get<Activity[]>('/activity', {
            params: queryParams
        });

        return response.data;
    }
}
