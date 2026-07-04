# polymarket-client-ts

A strongly-typed, unauthenticated TypeScript client for the [Polymarket APIs](https://docs.polymarket.com/).

This client is designed specifically for building Polymarket explorers and data-driven applications. It focuses entirely on **public, unauthenticated read endpoints**, ensuring you can seamlessly pull market data, events, profiles, and statistics without needing API keys.

It abstracts away the complexity of Polymarket's multiple sub-APIs (Gamma, CLOB, Data, and User-PnL) into a single, unified `PolymarketClient`.

## Features

- **Fully Typed:** Exhaustive TypeScript interfaces for all requests and responses.
- **Unified Interface:** Automatically routes requests to the correct Polymarket sub-API (Gamma, Data, CLOB, PnL) under the hood.
- **Unauthenticated:** Safely use it in environments where you only need read access.
- **Namespaced:** Endpoints are neatly categorized (e.g., `client.markets`, `client.events`, `client.pnl`).

## Installation

Since this package is built and ready for local usage or publishing, you can install it directly into another project on your machine:

```bash
# In your target project (e.g., your explorer)
npm install ../polymarket-client-ts
```

## Quick Start

```typescript
import { PolymarketClient } from 'polymarket-client-ts';

// 1. Initialize the client
const client = new PolymarketClient();

async function run() {
  // --- MARKETS ---
  // Fetch paginated simplified markets from the CLOB API
  const markets = await client.markets.getSimplifiedMarkets();
  console.log('Markets count:', markets.count);

  // Fetch specific market details from the Gamma API
  const marketDetails = await client.markets.getMarket('market-id-here');

  // --- USER PNL ---
  // Get computed daily, weekly, monthly, and YTD profit for a user
  const profit = await client.pnl.getProfitMetrics('0x12345...');
  console.log('YTD Profit:', profit.ytd);

  // --- EVENTS ---
  // Fetch live volume for an event
  const liveVolume = await client.events.getLiveVolume(12345);
  
  // --- SEARCH ---
  // Search for events, markets, or tags
  const searchResults = await client.search.searchEvents({ query: 'election' });
}

run();
```

## Supported Namespaces

- **`client.markets`**: Keysets, Open Interest, Sampling, Simplified, Token lookups.
- **`client.events`**: Keysets, Live Volume, Tags.
- **`client.search`**: Global search for events, markets, and tags.
- **`client.pnl`**: Historical timeline points, convenience metrics (Daily/Weekly/Monthly/YTD).
- **`client.holders`**: Top token holders for specific markets.
- **`client.profile`**: Public user profiles.
- **`client.leaderboard`**: Top traders and profitability leaderboards.
- **`client.tags` / `client.series` / `client.sports` / `client.teams`**: Metadata and classification endpoints.
- **`client.rewards` / `client.rebates`**: Data on maker rebates and active reward configurations.

## Architecture

The SDK internally manages four distinct Axios instances to handle Polymarket's microservice architecture:
- **Gamma API** (`gamma-api.polymarket.com`): Events, detailed markets, standard metadata.
- **CLOB API** (`clob.polymarket.com`): Simplified markets, sampling, token lookups.
- **Data API** (`data-api.polymarket.com`): Open interest, live volume, holders.
- **User PnL API** (`user-pnl-api.polymarket.com`): User profitability metrics.

## License

[MIT](LICENSE)
