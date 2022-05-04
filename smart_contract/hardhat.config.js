//https://eth-ropsten.alchemyapi.io/v2/FZcCitnqdROfnvIexY_f6gMODNpGpype

//waffle for smart contract test
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/FZcCitnqdROfnvIexY_f6gMODNpGpype",
      accounts: [
        "f54dd34c9a27cb06647239da13cee9eb6dcf83ac633c171264d9c35f965922e2",
      ],
    },
  },
};
