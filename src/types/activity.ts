export type ActivityTypeEnum = 'TRADE' | 'SPLIT' | 'MERGE' | 'REDEEM' | 'REWARD' | 'CONVERSION' | 'DEPOSIT' | 'WITHDRAWAL' | 'YIELD' | 'MAKER_REBATE' | 'TAKER_REBATE' | 'REFERRAL_REWARD';

export interface Activity {
    proxyWallet?: string;
    timestamp?: number;
    conditionId?: string;
    type?: ActivityTypeEnum;
    size?: number;
    usdcSize?: number;
    transactionHash?: string;
    price?: number;
    asset?: string;
    side?: 'BUY' | 'SELL';
    outcomeIndex?: number;
    title?: string;
    slug?: string;
    icon?: string;
    eventSlug?: string;
    outcome?: string;
    name?: string;
    pseudonym?: string;
    bio?: string;
    profileImage?: string;
    profileImageOptimized?: string;
    /**
     * True when this row is part of a combinatorial (multi-market) position. 
     * Flag only — combo detail is not embedded here.
     */
    isCombo?: boolean;
}

export interface GetActivityParams {
    /**
     * User Profile Address (0x-prefixed, 40 hex chars)
     */
    user: string;
    /**
     * Max number of activities to return. Max 500, defaults to 100.
     */
    limit?: number;
    /**
     * Number of activities to skip. Max 10000, defaults to 0.
     */
    offset?: number;
    /**
     * Comma-separated list of condition IDs. Mutually exclusive with eventId.
     */
    market?: string | string[];
    /**
     * Comma-separated list of event IDs. Mutually exclusive with market.
     */
    eventId?: number | number[];
    /**
     * Array of activity types to filter by.
     */
    type?: ActivityTypeEnum | ActivityTypeEnum[];
    /**
     * Lower-bound timestamp (epoch seconds) for the activity window. Omit or pass 0 for default.
     */
    start?: number;
    /**
     * Upper-bound timestamp (epoch seconds) for the activity window.
     */
    end?: number;
    /**
     * Field to sort by. Defaults to TIMESTAMP.
     */
    sortBy?: 'TIMESTAMP' | 'TOKENS' | 'CASH';
    /**
     * Sort direction. Defaults to DESC.
     */
    sortDirection?: 'ASC' | 'DESC';
    /**
     * Filter by trade side.
     */
    side?: 'BUY' | 'SELL';
}
