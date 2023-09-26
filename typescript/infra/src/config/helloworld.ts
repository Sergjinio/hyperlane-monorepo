import { AgentConnectionType, ChainMap, ChainName } from '@hyperlane-xyz/sdk';
import { MultiProvider, RouterConfig } from '@hyperlane-xyz/sdk';
import { objMap } from '@hyperlane-xyz/utils';

import { Contexts } from '../../config/contexts';
import {
  mainnetHyperlaneDefaultIsmCache,
  routingIsm,
} from '../../config/routingIsm';
import { getRouterConfig } from '../../scripts/utils';

import { DockerConfig } from './agent';
import { DeployEnvironment } from './environment';

export enum HelloWorldKathyRunMode {
  // Sends messages between all pairwise chains
  CycleOnce,
  // Long-running service, sending messages according to a full cycle time
  Service,
}

export interface HelloWorldKathyConfig {
  docker: DockerConfig;
  runEnv: string;
  namespace: string;
  chainsToSkip: ChainName[];
  runConfig:
    | {
        mode: HelloWorldKathyRunMode.CycleOnce;
      }
    | {
        mode: HelloWorldKathyRunMode.Service;
        /** How long kathy should take to send a message to all chain pairs before looping (milliseconds) */
        fullCycleTime: number;
      };
  /** How long kathy should wait before declaring an attempted to send a failure (milliseconds). */
  messageSendTimeout: number;
  /** How long kathy should wait before giving up on waiting for the message to be received (milliseconds). */
  messageReceiptTimeout: number;

  // Which type of provider to use
  connectionType: Exclude<AgentConnectionType, AgentConnectionType.Ws>;
  // How many cycles to skip between a cycles that send messages to/from Ethereum. Defaults to 0.
  cyclesBetweenEthereumMessages?: number;
}

export interface HelloWorldConfig {
  addresses: ChainMap<{ router: string }>;
  kathy: HelloWorldKathyConfig;
}

export async function helloWorldRouterConfig(
  environment: DeployEnvironment,
  context: Contexts,
  multiProvider: MultiProvider,
): Promise<ChainMap<RouterConfig>> {
  const routerConfig = await getRouterConfig(environment, multiProvider, true);
  return objMap(routerConfig, (chain, config) => ({
    ...config,
    interchainSecurityModule:
      context === Contexts.Hyperlane
        ? // TODO move back to `undefined` after these are verified
          mainnetHyperlaneDefaultIsmCache[chain]
        : routingIsm(environment, chain, context),
  }));
}
