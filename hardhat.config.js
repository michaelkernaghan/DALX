require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  solidity: "0.8.20",
  networks: {
    etherlink: {
      url: process.env.ETHERLINK_RPC_URL || "https://node.ghostnet.etherlink.com",
      accounts: [PRIVATE_KEY]
    }
  }
}; 