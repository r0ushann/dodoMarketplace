require("@nomiclabs/hardhat-waffle");

module.exports = {
    defaultNetwork: "mumbai",
    networks: {
        hardhat: {},
        mumbai: {
            url: https://polygon-mumbai.g.alchemy.com/v2/BoBVblJEM1aYN7X_bRvUlz40JQqRc2uZ,
            accounts: [process.env.PRIVATE_KEY]
        }
    },
  solidity: "0.8.4",
  
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
