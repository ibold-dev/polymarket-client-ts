import { PolymarketClient } from '../client';
import { SportsMetadata } from '../types/sports';

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
}
