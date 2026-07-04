export interface Trade {
    proxyWallet?: string;
    side?: 'BUY' | 'SELL';
    asset?: string;
    conditionId?: string;
    size?: number;
    price?: number;
    timestamp?: number;
    title?: string;
    slug?: string;
    icon?: string;
    eventSlug?: string;
    outcome?: string;
    outcomeIndex?: number;
    name?: string;
    pseudonym?: string;
    bio?: string;
    profileImage?: string;
    profileImageOptimized?: string;
    transactionHash?: string;
}

export interface GetTradesParams {
    /**
     * Max number of trades to return. Max 10000, defaults to 100.
     */
    limit?: number;
    /**
     * Number of trades to skip. Max 10000, defaults to 0.
     */
    offset?: number;
    /**
     * Defaults to true.
     */
    takerOnly?: boolean;
    /**
     * Filter by type. Must be provided together with filterAmount.
     */
    filterType?: 'CASH' | 'TOKENS';
    /**
     * Filter amount. Must be provided together with filterType.
     */
    filterAmount?: number;
    /**
     * Comma-separated list of condition IDs. Mutually exclusive with eventId.
     */
    market?: string | string[];
    /**
     * Comma-separated list of event IDs. Mutually exclusive with market.
     */
    eventId?: number | number[];
    /**
     * User Profile Address (0x-prefixed, 40 hex chars)
     */
    user?: string;
    /**
     * Filter by trade side.
     */
    side?: 'BUY' | 'SELL';
}
