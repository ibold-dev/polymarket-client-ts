import axios, { AxiosInstance } from 'axios';
import { ProfileEndpoints } from './endpoints/profile';
import { PositionsEndpoints } from './endpoints/positions';

export interface PolymarketClientConfig {
    gammaApiUrl?: string;
    dataApiUrl?: string;
}

export class PolymarketClient {
    public readonly gammaApi: AxiosInstance;
    public readonly dataApi: AxiosInstance;

    public readonly profile: ProfileEndpoints;
    public readonly positions: PositionsEndpoints;

    constructor(config?: PolymarketClientConfig) {
        this.gammaApi = axios.create({
            baseURL: config?.gammaApiUrl || 'https://gamma-api.polymarket.com',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.dataApi = axios.create({
            baseURL: config?.dataApiUrl || 'https://data-api.polymarket.com',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.profile = new ProfileEndpoints(this);
        this.positions = new PositionsEndpoints(this);
    }
}
