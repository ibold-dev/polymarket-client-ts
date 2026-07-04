export interface BuilderLeaderboardEntry {
    /**
     * The rank position of the builder
     */
    rank?: string;
    /**
     * The builder name or identifier
     */
    builder?: string;
    /**
     * The builder's onchain attribution code
     */
    builderCode?: string;
    /**
     * Total trading volume attributed to this builder
     */
    volume?: number;
    /**
     * Number of active users for this builder
     */
    activeUsers?: number;
    /**
     * Whether the builder is verified
     */
    verified?: boolean;
    /**
     * URL to the builder's logo image
     */
    builderLogo?: string;
}

export interface GetBuilderLeaderboardParams {
    /**
     * Time period for leaderboard results. Defaults to DAY.
     */
    timePeriod?: 'DAY' | 'WEEK' | 'MONTH' | 'ALL';
    /**
     * Max number of builders to return. Max 50, defaults to 25.
     */
    limit?: number;
    /**
     * Starting index for pagination. Max 1000, defaults to 0.
     */
    offset?: number;
}
