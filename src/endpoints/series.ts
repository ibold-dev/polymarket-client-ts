import { PolymarketClient } from '../client';
import { Series, GetSeriesParams, GetSeriesByIdParams } from '../types/series';

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

    /**
     * Get a series by its ID.
     * @param id The series ID.
     * @param params Query parameters for fetching the series.
     * @returns A single series.
     */
    public async getSeriesById(id: number | string, params?: GetSeriesByIdParams): Promise<Series> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Series>(`/series/${id}`, {
            params: queryParams
        });

        return response.data;
    }
}
