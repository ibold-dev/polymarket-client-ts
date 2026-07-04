import { PolymarketClient } from '../client';
import { SportsMetadata, SportsMarketTypesResponse } from '../types/sports';

export class SportsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Get sports metadata information.
     * @returns An array of sports metadata objects.
     */
    public async getSportsMetadata(): Promise<SportsMetadata[]> {
        const response = await this.client.gammaApi.get<SportsMetadata[]>('/sports');
        return response.data;
    }

    /**
     * Get valid sports market types.
     * @returns A list of valid sports market types.
     */
    public async getSportsMarketTypes(): Promise<SportsMarketTypesResponse> {
        const response = await this.client.gammaApi.get<SportsMarketTypesResponse>('/sports/market-types');
        return response.data;
    }
}
