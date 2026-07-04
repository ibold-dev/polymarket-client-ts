import axios, { AxiosInstance } from 'axios';
import { ProfileEndpoints } from './endpoints/profile';
import { PositionsEndpoints } from './endpoints/positions';
import { ActivityEndpoints } from './endpoints/activity';
import { TradesEndpoints } from './endpoints/trades';
import { LeaderboardEndpoints } from './endpoints/leaderboard';
import { BuildersEndpoints } from './endpoints/builders';

export interface PolymarketClientConfig {
    gammaApiUrl?: string;
    dataApiUrl?: string;
}

export class PolymarketClient {
    public readonly gammaApi: AxiosInstance;
    public readonly dataApi: AxiosInstance;

    public readonly profile: ProfileEndpoints;
    public readonly positions: PositionsEndpoints;
    public readonly activity: ActivityEndpoints;
    public readonly trades: TradesEndpoints;
    public readonly leaderboard: LeaderboardEndpoints;
    public readonly builders: BuildersEndpoints;

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
        this.activity = new ActivityEndpoints(this);
        this.trades = new TradesEndpoints(this);
        this.leaderboard = new LeaderboardEndpoints(this);
        this.builders = new BuildersEndpoints(this);
    }
}
