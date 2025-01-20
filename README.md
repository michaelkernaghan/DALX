# DALX Token

This project implements the DALX token on the Etherlink network, a Layer 2 blockchain powered by Tezos.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your private key:
```bash
cp .env.example .env
```

3. Edit `.env` and add your wallet's private key

## Deployment

To deploy the token to Etherlink network:

```bash
npm run deploy
```

## Contract Details

- Name: DALX
- Symbol: DALX
- Decimals: 18
- Initial Supply: 1,000,000 DALX

The contract includes:
- Standard ERC20 functionality
- Minting capability (owner only)
- Ownership controls

## Network Information

The token is deployed on Etherlink's network:
- RPC URL: https://node.ghostnet.etherlink.com
- Chain: Etherlink (Tezos L2)
