export interface PnlDataPoint {
    /** Timestamp of the data point */
    t: string | number;
    /** Profit and Loss value */
    p: number;
}

export type PnlInterval = '1d' | '1w' | '1m' | 'all';
export type PnlFidelity = '1h' | '1d';

export interface GetPnlParams {
    /** User Profile Address (0x-prefixed, 40 hex chars) */
    user_address: string;
    /** Time interval */
    interval: PnlInterval;
    /** Data resolution */
    fidelity: PnlFidelity;
}

export interface UserProfitMetrics {
    daily: number;
    weekly: number;
    monthly: number;
    ytd: number;
}
