import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mantle: {
      accounts: [process.env.PRIVATE_KEY!],
      url: 'https://rpc.testnet.mantle.xyz'
    }
  }
};

export default config;
