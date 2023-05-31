import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf7E3D58627b82039aD4821C8d4FebC388fe58174"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/DV85cRQwhBpRdnEUEzKGIscUDVcKctiJ",
  },
};