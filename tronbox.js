const port = process.env.HOST_PORT || 9090

let privateKey = "[deployment account private key]"

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey,

      /*
      Create a .env file (it must be gitignored) containing something like

        export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

      Then, run the migration with:

        source .env && tronbox migrate --network mainnet

      */

      
      userFeePercentage: 100,
      // feeLimit: 1e8,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey,
      userFeePercentage: 100,
      //feeLimit: 1e8,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey,
      userFeePercentage: 100,
      //feeLimit: 1e8,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey,
      userFeePercentage: 0,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.6.0',





        settings: {          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: true,
            runs: 200
          },
         //evmVersion: "byzantium"
         }



        
      }
    }
  }
}
