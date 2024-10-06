require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/_yHKplxaC-grUrcH8KmPGXWoCoEChdG2",
      accounts: [""]
    },
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: [""]
    }
  }
};
