export interface Holder {
    proxyWallet?: string;
    bio?: string;
    asset?: string;
    pseudonym?: string;
    amount?: number;
    displayUsernamePublic?: boolean;
    outcomeIndex?: number;
    name?: string;
    profileImage?: string;
    profileImageOptimized?: string;
}

export interface MetaHolder {
    token?: string;
    holders?: Holder[];
}

export interface GetHoldersParams {
    limit?: number;
    market: string[];
    minBalance?: number;
}
