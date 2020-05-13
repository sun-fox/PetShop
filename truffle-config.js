const HDwalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    rinkeby:{
      provider:()=>new HDwalletProvider(process.env.MNEMONIC,"https://mainnet.infura.io/v3/"+process.env.INFURA_API_KEY),
      network_id: 1
    }
  }
};
