# Swap V2

Port of Uniswap v2 periphery for Tron. In-depth documentation on Uniswap
V2 (Ethereum version) is available at
[uniswap.org](https://uniswap.org/docs).

## Contract Addresses

| Chain   | Contract | Address                                                                                                       |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Mainnet | Router   | [TTUyubMTGzccuMBcYeygooZ5ehx7XhMUdt](https://tronscan.org/#/contract/TTUyubMTGzccuMBcYeygooZ5ehx7XhMUdt)      |
| Shasta    | Router   | [TMzVRRSfkTZ2Ywz5qMQw2wPxBARMsp6qz8](https://shasta.tronscan.org/#/contract/TMzVRRSfkTZ2Ywz5qMQw2wPxBARMsp6qz8) |

Compiled with `solc 0.6.6+commit.6c089d02.Emscripten.clang`.

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

```
nvm use 12
npm install
```

## Compile Contracts

`npm run compile`

## Run Tests

`npm test`

## Deploy

```sh
npm run deploy:shasta
```
