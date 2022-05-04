//https://eth-ropsten.alchemyapi.io/v2/FZcCitnqdROfnvIexY_f6gMODNpGpype

//waffle for smart contract test
require("@nomiclabs/hardhat-waffle");

URL = process.env.URL;
ACC = process.env.ACC;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: URL,
      accounts: [ACC],
    },
  },
};
