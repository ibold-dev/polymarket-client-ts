import { PolymarketClient } from '../client';
import { RebatedFees, GetCurrentRebatedFeesParams } from '../types/rebates';

export class RebatesEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Get current rebated fees for a maker.
     * @param params Query parameters for fetching current rebated fees.
     * @returns An array of rebated fees.
     */
    public async getCurrentRebatedFees(params: GetCurrentRebatedFeesParams): Promise<RebatedFees[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.clobApi.get<RebatedFees[]>('/rebates/current', {
            params: queryParams
        });

        return response.data;
    }
}
