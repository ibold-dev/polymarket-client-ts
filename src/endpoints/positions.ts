import { PolymarketClient } from '../client';
import { CurrentPosition, GetPositionsParams, ClosedPosition, GetClosedPositionsParams, PositionValue, GetValueParams } from '../types/positions';

export class PositionsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets the current positions for a user.
     * @param params Query parameters including the required 'user' wallet address.
     * @returns An array of the user's active positions.
     */
    public async getCurrentPositions(params: GetPositionsParams): Promise<CurrentPosition[]> {
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

        const response = await this.client.dataApi.get<CurrentPosition[]>('/positions', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Gets the closed positions for a user.
     * @param params Query parameters including the required 'user' wallet address.
     * @returns An array of the user's closed positions.
     */
    public async getClosedPositions(params: GetClosedPositionsParams): Promise<ClosedPosition[]> {
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

        const response = await this.client.dataApi.get<ClosedPosition[]>('/closed-positions', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Gets the total value of a user's positions.
     * @param params Query parameters including the required 'user' wallet address.
     * @returns An array containing the user's total position value.
     */
    public async getTotalValue(params: GetValueParams): Promise<PositionValue[]> {
        if (!/^0x[a-fA-F0-9]{40}$/.test(params.user)) {
            throw new Error('Invalid wallet address format for user. Must be a valid Ethereum address.');
        }

        const queryParams: Record<string, any> = { ...params };

        if (Array.isArray(queryParams.market)) {
            queryParams.market = queryParams.market.join(',');
        }

        const response = await this.client.dataApi.get<PositionValue[]>('/value', {
            params: queryParams
        });

        return response.data;
    }
}
