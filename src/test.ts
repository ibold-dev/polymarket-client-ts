import { PolymarketClient } from './client';

async function main() {
    const client = new PolymarketClient();
    
    // Testing with a random valid ETH address structure (zero address)
    // You should replace this with a known proxy wallet address to see populated data
    const addressToTest = '0x0000000000000000000000000000000000000000';
    
    try {
        console.log(`Fetching profile for ${addressToTest}...`);
        const profile = await client.profile.getPublicProfile(addressToTest);
        console.log('Success! Profile data:');
        console.log(JSON.stringify(profile, null, 2));
    } catch (error) {
        console.error('Failed to fetch profile:', error);
    }
}

main();
