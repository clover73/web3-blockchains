var ethereum = {
  name: 'Victoriascoin',
  id: '0x1',
  networkId: '93076',
  label: 'Victorias Coin',
  fullName: 'Victorias Mainnet',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAADJJREFUGFc1jEEOADAIwtr/P5qFET1ogw2KdEIoB3AR5MOU7SbOrGpdU5L07jXrytr6ALTCDw+pVOr+AAAAAElFTkSuQmCC',
  currency: {
    name: 'Viki',
    symbol: 'VIKI',
    decimals: 8
  },
  explorer: 'https://viki.io',
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://etherscan.io/tx/${transaction.id}` }
    if(token) { return `https://etherscan.io/token/${token}` }
  },
  rpc: ['https://mainnet.infura.io/v3/9aa3d95b3bc4', '40fa88ea12eaa4456161'].join(''),
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "ETH", "name": "Ether", "decimals": 18, "logo": "data:image/png;base64,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"},
    {"address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},
    {"address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"},
    {"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"},
    {"address": "0x6B175474E89094C44Da98b954EedeAC495271d0F", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"},
    {"address": "0x853d955aCEf822Db058eb8505911ED77F175b99e", "symbol": "FRAX", "name": "Frax", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png"},
    {"address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53", "symbol": "BUSD", "name": "Binance USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png"},
    {"address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1", "symbol": "USDP", "name": "Pax Dollar", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png"},
    {"address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", "symbol": "UNI", "name": "Uniswap", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"},
    {"address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "symbol": "FEI", "name": "Fei USD", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png"}
  ]
};

var bsc = {
  name: 'bsc',
  id: '0x38',
  networkId: '56',
  label: 'Binance Smart Chain',
  fullName: 'Binance Smart Chain Mainnet',
  logo:
    'data:image/png;base64,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',
  currency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18
  },
  explorer: 'https://bscscan.com',
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://bscscan.com/tx/${transaction.id}` }
    if(token) { return `https://bscscan.com/token/${token}` }
  },
  rpc: 'https://bsc-dataseed1.binance.org',
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "BNB", "name": "Binance Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"},
    {"address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "symbol": "BUSD", "name": "BUSD Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png"},
    {"address": "0x55d398326f99059fF775485246999027B3197955", "symbol": "USDT", "name": "Binance-Peg BSC-USD", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png"},
    {"address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "symbol": "Cake", "name": "PancakeSwap Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png"},
    {"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "symbol": "USDC", "name": "USD Coin", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png"},
    {"address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "symbol": "ETH", "name": "Ethereum Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png"},
    {"address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "symbol": "BTCB", "name": "BTCB Token", "decimals": 18, "logo": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png"}
  ]
};

var polygon = {
  name: 'polygon',
  id: '0x89',
  networkId: '137',
  label: 'Polygon',
  fullName: 'Matic(Polygon) Mainnet',
  logo:
    'data:image/png;base64,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',
  currency: {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18
  },
  explorer: 'https://polygonscan.com',
  explorerUrlFor: ({ transaction, token })=>{
    if(transaction) { return `https://polygonscan.com/tx/${transaction.id}` }
    if(token) { return `https://polygonscan.com/token/${token}` }
  },
  rpc: 'https://rpc-mainnet.matic.network'
};

var unknown = {
  name: 'unknown',
  label: 'Unknown',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAHklzmMLqCsLrGwAAAQ9JREFUeNrtlrsOgkAQRRdFbDcae4IFrZEYazXRVitqQ2Hrk/19BVdX7XYuiQX3VDZzMsxrVYQQQkibGIyzLNHi8OHaVJRLWXgwMy8KLYnfGEchEFTxjp2/wHxRalBg9v4CNAXzwxYVXCSC2ypJstx+g6/ATaAdqImvoHxHzEVFcPGqWwtOnoLFx++6DGdgq9NnG+T0K8EVEPTqnrZbEKGCFO1CDs2BG2UZbpnABEwMJIA1IRSeZfdCgV8wsjdVnEBuLyKyBu51Fb+xpfhPRgdsgYqeM6DlQwQmoA62AvISgIsc2j0EaxgDL0ojx/CCCs4KPGYnVHCk4CEg7SbIKqbqfyeRAgoaERBCCCGESLgDeRfMNogh3QMAAAAASUVORK5CYII='
};

let all = [ethereum, bsc, polygon, unknown];

let Blockchain = {
  all,

  findById: function (id) {
    let fixedId = id;
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x');
    }
    let found = all.find((blockchain) => {
      return blockchain.id == fixedId
    });
    if(found == undefined) {
      found = all.find((blockchain) => {
        return blockchain.id == undefined
      });
    }
    return found
  },

  findByNetworkId: function (networkId) {
    networkId = networkId.toString();
    let found = all.find((blockchain) => {
      return blockchain.networkId == networkId
    });
    return found
  },

  findByName: function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  },
};

export { Blockchain };
