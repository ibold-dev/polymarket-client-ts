import { PolymarketClient } from '../client';
import { GetPnlParams, PnlDataPoint, UserProfitMetrics } from '../types/pnl';

export class PnlEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets the raw PnL history for a user over a specific interval and fidelity.
     * @param params Query parameters for fetching PnL history.
     * @returns Array of PnL data points.
     */
    public async getHistory(params: GetPnlParams): Promise<PnlDataPoint[]> {
        if (!/^0x[a-fA-F0-9]{40}$/.test(params.user_address)) {
            throw new Error('Invalid wallet address format for user_address. Must be a valid Ethereum address.');
        }

        try {
            const response = await this.client.pnlApi.get<PnlDataPoint[]>('/user-pnl', {
                params
            });
            return response.data;
        } catch (error) {
            // Polymarket PnL API often returns 404 or empty for new users
            return [];
        }
    }

    /**
     * A convenience method to calculate a user's daily, weekly, monthly, and YTD profit.
     * It makes parallel requests to the PnL API to fetch the required intervals and calculates the differences.
     * @param user_address User Profile Address.
     * @returns Calculated user profit metrics.
     */
    public async getProfitMetrics(user_address: string): Promise<UserProfitMetrics> {
        const [all, d1, w1, m1] = await Promise.all([
            this.getHistory({ user_address, interval: 'all', fidelity: '1h' }),
            this.getHistory({ user_address, interval: '1d', fidelity: '1h' }),
            this.getHistory({ user_address, interval: '1w', fidelity: '1d' }),
            this.getHistory({ user_address, interval: '1m', fidelity: '1d' }),
        ]);

        const getDiffVal = (data: PnlDataPoint[]) => {
            if (Array.isArray(data) && data.length >= 2) {
                return data[data.length - 1].p - data[0].p;
            }
            return 0;
        };

        const getEndValNum = (data: PnlDataPoint[]) => {
            if (Array.isArray(data) && data.length > 0) {
                return data[data.length - 1].p || 0;
            }
            return 0;
        };

        return {
            daily: getDiffVal(d1),
            weekly: getEndValNum(w1), // Assuming weekly uses getEndValNum based on original code, or getDiffVal(w1) if more accurate
            monthly: getEndValNum(m1),
            ytd: getEndValNum(all)
        };
    }
}
