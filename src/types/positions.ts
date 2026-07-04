export interface CurrentPosition {
    proxyWallet: string;
    asset: string;
    conditionId: string;
    size: number;
    avgPrice: number;
    initialValue: number;
    currentValue: number;
    cashPnl: number;
    percentPnl: number;
    totalBought: number;
    realizedPnl: number;
    percentRealizedPnl: number;
    curPrice: number;
    redeemable: boolean;
    mergeable: boolean;
    title: string;
    slug: string;
    icon: string;
    eventId: string;
    eventSlug: string;
    outcome: string;
    outcomeIndex: number;
    oppositeOutcome: string;
    oppositeAsset: string;
    endDate: string;
    negativeRisk: boolean;
}

export interface GetPositionsParams {
    /**
     * User Profile Address (0x-prefixed, 40 hex chars)
     */
    user: string;
    /**
     * Comma-separated list of condition IDs. Mutually exclusive with eventId.
     */
    market?: string | string[];
    /**
     * Comma-separated list of event IDs. Mutually exclusive with market.
     */
    eventId?: number | number[];
    /**
     * Minimum position size to include. Defaults to 1.
     */
    sizeThreshold?: number;
    /**
     * Filter by whether positions are redeemable. Defaults to false.
     */
    redeemable?: boolean;
    /**
     * Filter by whether positions are mergeable. Defaults to false.
     */
    mergeable?: boolean;
    /**
     * Max number of positions to return. Max 500, defaults to 100.
     */
    limit?: number;
    /**
     * Number of positions to skip. Max 10000, defaults to 0.
     */
    offset?: number;
    /**
     * Field to sort by. Defaults to TOKENS.
     */
    sortBy?: 'CURRENT' | 'INITIAL' | 'TOKENS' | 'CASHPNL' | 'PERCENTPNL' | 'TITLE' | 'RESOLVING' | 'PRICE' | 'AVGPRICE';
    /**
     * Sort direction. Defaults to DESC.
     */
    sortDirection?: 'ASC' | 'DESC';
    /**
     * Filter by market title (maximum string length: 100).
     */
    title?: string;
}

export interface ClosedPosition {
    proxyWallet: string;
    asset: string;
    conditionId: string;
    avgPrice: number;
    totalBought: number;
    realizedPnl: number;
    curPrice: number;
    timestamp: number;
    title: string;
    slug: string;
    icon: string;
    eventSlug: string;
    outcome: string;
    outcomeIndex: number;
    oppositeOutcome: string;
    oppositeAsset: string;
    endDate: string;
}

export interface GetClosedPositionsParams {
    /**
     * User Profile Address (0x-prefixed, 40 hex chars)
     */
    user: string;
    /**
     * Comma-separated list of condition IDs. Mutually exclusive with eventId.
     */
    market?: string | string[];
    /**
     * Filter by market title (maximum string length: 100).
     */
    title?: string;
    /**
     * Comma-separated list of event IDs. Mutually exclusive with market.
     */
    eventId?: number | number[];
    /**
     * Max number of positions to return. Max 50, defaults to 10.
     */
    limit?: number;
    /**
     * Number of positions to skip. Max 100000, defaults to 0.
     */
    offset?: number;
    /**
     * Field to sort by. Defaults to REALIZEDPNL.
     */
    sortBy?: 'REALIZEDPNL' | 'TITLE' | 'PRICE' | 'AVGPRICE' | 'TIMESTAMP';
    /**
     * Sort direction. Defaults to DESC.
     */
    sortDirection?: 'ASC' | 'DESC';
}
