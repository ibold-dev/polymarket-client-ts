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

        console.log(`\nFetching trades for ${addressToTest}...`);
        const trades = await client.trades.getTrades({ user: addressToTest });
        console.log(`Success! Found ${trades.length} trades.`);
        if (trades.length > 0) {
            console.log('First trade data:');
            console.log(JSON.stringify(trades[0], null, 2));
        }

        console.log(`\nFetching total markets traded for ${addressToTest}...`);
        const totalMarkets = await client.trades.getTotalMarketsTraded({ user: addressToTest });
        console.log('Success! Total markets traded data:');
        console.log(JSON.stringify(totalMarkets, null, 2));

        if (positions.length > 0 && positions[0].conditionId) {
            const conditionId = positions[0].conditionId;
            console.log(`\nFetching market positions for condition ID ${conditionId}...`);
            const marketPositions = await client.positions.getMarketPositions({ market: conditionId, limit: 5 });
            console.log(`Success! Found data for ${marketPositions.length} outcome tokens.`);
            if (marketPositions.length > 0) {
                console.log('First token positions data:');
                console.log(JSON.stringify(marketPositions[0], null, 2));
            }
        } else {
            console.log('\nSkipping market positions test (no active positions to extract conditionId from).');
        }

        console.log(`\nFetching top 5 overall traders on the daily leaderboard...`);
        const leaderboard = await client.leaderboard.getLeaderboard({ limit: 5 });
        console.log(`Success! Found ${leaderboard.length} traders.`);
        if (leaderboard.length > 0) {
            console.log('Top trader data:');
            console.log(JSON.stringify(leaderboard[0], null, 2));
        }

        console.log(`\nFetching top 5 builders on the daily leaderboard...`);
        const builderLeaderboard = await client.builders.getLeaderboard({ limit: 5 });
        console.log(`Success! Found ${builderLeaderboard.length} builders.`);
        if (builderLeaderboard.length > 0) {
            console.log('Top builder data:');
            console.log(JSON.stringify(builderLeaderboard[0], null, 2));
        }

        console.log(`\nFetching weekly builder volume time-series...`);
        const builderVolume = await client.builders.getVolume({ timePeriod: 'WEEK' });
        console.log(`Success! Found ${builderVolume.length} daily volume records.`);
        if (builderVolume.length > 0) {
            console.log('First volume record:');
            console.log(JSON.stringify(builderVolume[0], null, 2));
        }
    } catch (error) {
        console.error('Failed to fetch profile:', error);
    }
}

main();
