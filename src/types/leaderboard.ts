export interface TraderLeaderboardEntry {
    /**
     * The rank position of the trader
     */
    rank?: string;
    proxyWallet?: string;
    /**
     * The trader's username
     */
    userName?: string;
    /**
     * Trading volume for this trader
     */
    vol?: number;
    /**
     * Profit and loss for this trader
     */
    pnl?: number;
    /**
     * URL to the trader's profile image
     */
    profileImage?: string;
    /**
     * The trader's X (Twitter) username
     */
    xUsername?: string;
    /**
     * Whether the trader has a verified badge
     */
    verifiedBadge?: boolean;
}

export interface GetLeaderboardParams {
    /**
     * Market category for the leaderboard. Defaults to OVERALL.
     */
    category?: 'OVERALL' | 'POLITICS' | 'SPORTS' | 'ESPORTS' | 'CRYPTO' | 'CULTURE' | 'MENTIONS' | 'WEATHER' | 'ECONOMICS' | 'TECH' | 'FINANCE';
    /**
     * Time period for leaderboard results. Defaults to DAY.
     */
    timePeriod?: 'DAY' | 'WEEK' | 'MONTH' | 'ALL';
    /**
     * Leaderboard ordering criteria. Defaults to PNL.
     */
    orderBy?: 'PNL' | 'VOL';
    /**
     * Max number of leaderboard traders to return. Max 50, defaults to 25.
     */
    limit?: number;
    /**
     * Starting index for pagination. Max 1000, defaults to 0.
     */
    offset?: number;
    /**
     * Limit leaderboard to a single user by proxy wallet address
     */
    user?: string;
    /**
     * Limit leaderboard to a single username
     */
    userName?: string;
}
