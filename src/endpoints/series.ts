import { PolymarketClient } from '../client';
import { Series, GetSeriesParams } from '../types/series';

export class SeriesEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List series from the Gamma API.
     * @param params Query parameters for fetching series.
     * @returns An array of series.
     */
    public async getSeries(params?: GetSeriesParams): Promise<Series[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Series[]>('/series', {
            params: queryParams
        });

        return response.data;
    }
}
