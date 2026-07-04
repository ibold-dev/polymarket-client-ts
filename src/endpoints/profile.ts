import { PolymarketClient } from '../client';
import { PublicProfile } from '../types/profile';

export class ProfileEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * Gets a public profile by wallet address.
     * @param address The proxy wallet or user EOA address.
     * @returns The public profile information.
     */
    public async getPublicProfile(address: string): Promise<PublicProfile> {
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            throw new Error('Invalid wallet address format. Must be a valid Ethereum address.');
        }

        const response = await this.client.gammaApi.get<PublicProfile>('/public-profile', {
            params: { address }
        });

        return response.data;
    }
}
