import { PolymarketClient } from './client';

async function main() {
    const client = new PolymarketClient();

    // Testing with a random valid ETH address structure (zero address)
    // You should replace this with a known proxy wallet address to see populated data
    const addressToTest = '0x095fbca2e0eaf0c9841005135427e1e0117190b2';

    try {
        console.log(`Fetching profile for ${addressToTest}...`);
        const profile = await client.profile.getPublicProfile(addressToTest);
        console.log('Success! Profile data:');
        console.log(JSON.stringify(profile, null, 2));

        console.log(`\nFetching current positions for ${addressToTest}...`);
        const positions = await client.positions.getCurrentPositions({ user: addressToTest });
        console.log(`Success! Found ${positions.length} active positions.`);
        if (positions.length > 0) {
            console.log('First active position data:');
            console.log(JSON.stringify(positions[0], null, 2));
        }

        console.log(`\nFetching closed positions for ${addressToTest}...`);
        const closedPositions = await client.positions.getClosedPositions({ user: addressToTest });
        console.log(`Success! Found ${closedPositions.length} closed positions.`);
        if (closedPositions.length > 0) {
            console.log('First closed position data:');
            console.log(JSON.stringify(closedPositions[0], null, 2));
        }

        console.log(`\nFetching user activity for ${addressToTest}...`);
        const activity = await client.activity.getUserActivity({ user: addressToTest });
        console.log(`Success! Found ${activity.length} activity items.`);
        if (activity.length > 0) {
            console.log('First activity data:');
            console.log(JSON.stringify(activity[0], null, 2));
        }

        console.log(`\nFetching total value for ${addressToTest}...`);
        const totalValue = await client.positions.getTotalValue({ user: addressToTest });
        console.log('Success! Total value data:');
        console.log(JSON.stringify(totalValue, null, 2));
    } catch (error) {
        console.error('Failed to fetch profile:', error);
    }
}

main();
