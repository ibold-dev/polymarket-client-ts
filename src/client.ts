import axios, { AxiosInstance } from 'axios';
import { ProfileEndpoints } from './endpoints/profile';
import { PositionsEndpoints } from './endpoints/positions';
import { ActivityEndpoints } from './endpoints/activity';
import { TradesEndpoints } from './endpoints/trades';
import { BuildersEndpoints } from './endpoints/builders';
import { SearchEndpoints } from './endpoints/search';
import { TagsEndpoints } from './endpoints/tags';
import { LeaderboardEndpoints } from './endpoints/leaderboard';
import { SeriesEndpoints } from './endpoints/series';
import { CommentsEndpoints } from './endpoints/comments';
import { SportsEndpoints } from './endpoints/sports';
import { TeamsEndpoints } from './endpoints/teams';
import { RewardsEndpoints } from './endpoints/rewards';
import { RebatesEndpoints } from './endpoints/rebates';

export interface PolymarketClientConfig {
    gammaApiUrl?: string;
    dataApiUrl?: string;
    clobApiUrl?: string;
}

export class PolymarketClient {
    public readonly gammaApi: AxiosInstance;
    public readonly dataApi: AxiosInstance;
    public readonly clobApi: AxiosInstance;

    public readonly profile: ProfileEndpoints;
    public readonly positions: PositionsEndpoints;
    public readonly activity: ActivityEndpoints;
    public readonly trades: TradesEndpoints;
    public readonly leaderboard: LeaderboardEndpoints;
    public readonly builders: BuildersEndpoints;
    public readonly search: SearchEndpoints;
    public readonly tags: TagsEndpoints;
    public readonly series: SeriesEndpoints;
    public readonly comments: CommentsEndpoints;
    public readonly sports: SportsEndpoints;
    public readonly teams: TeamsEndpoints;
    public readonly rewards: RewardsEndpoints;
    public readonly rebates: RebatesEndpoints;

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

        this.clobApi = axios.create({
            baseURL: config?.clobApiUrl || 'https://clob.polymarket.com',
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
        this.search = new SearchEndpoints(this);
        this.tags = new TagsEndpoints(this);
        this.series = new SeriesEndpoints(this);
        this.comments = new CommentsEndpoints(this);
        this.sports = new SportsEndpoints(this);
        this.teams = new TeamsEndpoints(this);
        this.rewards = new RewardsEndpoints(this);
        this.rebates = new RebatesEndpoints(this);
    }
}
