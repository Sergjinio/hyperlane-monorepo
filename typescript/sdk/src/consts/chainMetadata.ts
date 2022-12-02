import { ChainName } from '../types';

/**
 * A Chain and its characteristics
 */
export type ChainMetadata = {
  id: number;
  finalityBlocks: number;
  nativeTokenDecimals?: number;
  paginate?: RpcPagination;
  // The CoinGecko API expects, in some cases, IDs that do not match
  // ChainNames.
  gasCurrencyCoinGeckoId?: string;
  // URL of the gnosis safe transaction service.
  gnosisSafeTransactionServiceUrl?: string;
};

/**
 * RPC Pagination information
 */
export interface RpcPagination {
  blocks: number;
  from: number;
}

// IDs can be generated in many ways-- for example, in JS:
// > Array.from('celo').map((c, i) => c.charCodeAt(0).toString(16).padStart(2, '0')).join('')
// '63656c6f'

/**
 * Mainnets
 */
export const celo: ChainMetadata = {
  id: 42220,
  finalityBlocks: 0,
  gnosisSafeTransactionServiceUrl:
    'https://transaction-service.gnosis-safe-staging.celo-networks-dev.org',
};

export const ethereum: ChainMetadata = {
  id: 1,
  finalityBlocks: 20,
  gnosisSafeTransactionServiceUrl: 'https://safe-transaction.gnosis.io',
};

export const arbitrum: ChainMetadata = {
  id: 42161,
  finalityBlocks: 0,
  gasCurrencyCoinGeckoId: 'ethereum', // ETH is used for gas
  gnosisSafeTransactionServiceUrl:
    'https://safe-transaction.arbitrum.gnosis.io/',
};

export const optimism: ChainMetadata = {
  id: 10,
  finalityBlocks: 0,
  gasCurrencyCoinGeckoId: 'ethereum', // ETH is used for gas
  gnosisSafeTransactionServiceUrl:
    'https://safe-transaction.optimism.gnosis.io/',
};

export const bsc: ChainMetadata = {
  id: 56,
  finalityBlocks: 15,
  gasCurrencyCoinGeckoId: 'binancecoin',
  gnosisSafeTransactionServiceUrl: 'https://safe-transaction.bsc.gnosis.io/',
};

export const avalanche: ChainMetadata = {
  id: 43114,
  finalityBlocks: 3,
  paginate: {
    // Needs to be low to avoid RPC timeouts
    blocks: 100000,
    from: 6765067,
  },
  gasCurrencyCoinGeckoId: 'avalanche-2',
  gnosisSafeTransactionServiceUrl:
    'https://safe-transaction.avalanche.gnosis.io/',
};

export const polygon: ChainMetadata = {
  id: 137,
  finalityBlocks: 256,
  paginate: {
    // Needs to be low to avoid RPC timeouts
    blocks: 10000,
    from: 19657100,
  },
  gasCurrencyCoinGeckoId: 'matic-network',
  gnosisSafeTransactionServiceUrl:
    'https://safe-transaction.polygon.gnosis.io/',
};

/**
 * Testnets
 */
export const alfajores: ChainMetadata = {
  id: 44787,
  finalityBlocks: 0,
};

export const fuji: ChainMetadata = {
  id: 43113,
  finalityBlocks: 3,
};

export const goerli: ChainMetadata = {
  id: 5,
  finalityBlocks: 2,
};

export const optimismgoerli: ChainMetadata = {
  id: 420,
  finalityBlocks: 1,
};

export const arbitrumgoerli: ChainMetadata = {
  id: 421613,
  finalityBlocks: 1,
};

export const zksync2testnet: ChainMetadata = {
  id: 280,
  finalityBlocks: 1,
};

export const mumbai: ChainMetadata = {
  id: 80001,
  finalityBlocks: 32,
  paginate: {
    // eth_getLogs and eth_newFilter are limited to a 10,000 blocks range
    blocks: 10000,
    from: 22900000,
  },
};

const testChains = {
  test1: {
    id: 13371,
    finalityBlocks: 0,
  },
  test2: {
    id: 13372,
    finalityBlocks: 1,
  },
  test3: {
    id: 13373,
    finalityBlocks: 2,
  },
};

export const bsctestnet: ChainMetadata = {
  id: 97,
  finalityBlocks: 9,
};

export const moonbasealpha: ChainMetadata = {
  id: 1287,
  finalityBlocks: 1,
};

export const moonbeam: ChainMetadata = {
  id: 1284,
  finalityBlocks: 1,
};

export const chainMetadata = {
  arbitrum,
  bsc,
  celo,
  ethereum,
  avalanche,
  optimism,
  polygon,
  alfajores,
  fuji,
  goerli,
  mumbai,
  bsctestnet,
  moonbasealpha,
  moonbeam,
  optimismgoerli,
  arbitrumgoerli,
  zksync2testnet,
  ...testChains,
} as Record<ChainName, ChainMetadata>;

// used for chains.json: console.log(JSON.stringify(chainMetadata));
