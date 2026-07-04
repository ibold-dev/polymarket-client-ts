export interface RebatedFees {
    date: string;
    condition_id: string;
    asset_address: string;
    maker_address: string;
    rebated_fees_usdc: string;
}

export interface GetCurrentRebatedFeesParams {
    date: string;
    maker_address: string;
}
