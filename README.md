# 12h finance
this repo represent demo for starkhack 2024. It is build in react/next + dynamic.xyz + starknet;

## run locally

install node dependeices and run 'dev' script wiht npm|yarn|bun
no extra config needed;


## contracts
change workdir

    cd contracts

after deploy dont forget to update contract address!

### build
```
scarb build
```

### deploy

``` 
starcli declare target/dev/contracts*

starcli deploy $HASH $ARGS
```

### deoloy history
```
-> starkli declare target/dev/contracts_USDCToken.contract_class.json
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: sepolia. Using the default compiler version for this network: 2.6.2. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x03e18ff2f96adbe4e09cff5ef584aabac9406e189c122d83d2883aa41445383b
Compiling Sierra class to CASM with compiler version 2.6.2...
CASM class hash: 0x033486153203e69a48f4e3cbd10fd76ae485e3a9d42d3436c4b559032e8ddc58
Contract declaration transaction: 0x005cd91e2a9a35d968007150c7f4189f47820bcc0b67cd74b67160c0e9be85a8
Class hash declared:
0x03e18ff2f96adbe4e09cff5ef584aabac9406e189c122d83d2883aa41445383b
06:22:20 mr13tech@bee1 contracts ±|main ✗|→ starkli deploy 0x03e18ff2f96adbe4e09cff5ef584aabac9406e189c122d83d2883aa41445383b
Enter keystore password:
Deploying class 0x03e18ff2f96adbe4e09cff5ef584aabac9406e189c122d83d2883aa41445383b with salt 0x023245b17b7bf5e84404c8d6bfde566990131903f390d0ce7b6c0e47fd13ea68...
The contract will be deployed at address 0x02093eb421181dd2ac407d75d910a1bbe38995dfce8047c3860ea576bc77b5b8
Contract deployment transaction: 0x045f40081995bf0a7e967422e33786919aa16ae91b8c26ceb6a3cc08824d24fa
Contract deployed:
0x02093eb421181dd2ac407d75d910a1bbe38995dfce8047c3860ea576bc77b5b8
→ starkli declare target/dev/contracts_SPXToken.contract_class.json
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: sepolia. Using the default compiler version for this network: 2.6.2. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
Compiling Sierra class to CASM with compiler version 2.6.2...
CASM class hash: 0x05fee6b06d649d8294a44dff56f82f7f1068ad04587fa5fddac66f86dafce9ac
Contract declaration transaction: 0x033fcbf0e572c1ea5f7af664699ea2b684a9e6c23f1165fa037f2eaca4ff22fd
Class hash declared:
0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
→ starkli deploy 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
Deploying class 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe with salt 0x0021cdb71c4e1072cfdc9d84c70fdd1f023d7e96e8c7a0ef070cdc616b937a9e...
The contract will be deployed at address 0x07c05e2f844299cb6e95a87929171af4975e7757540ad97c2c5cfe1a1742db73
Contract deployment transaction: 0x04f3c0ae667b65808111cc00d37ced0756d42e4e0e7da12c11b85beee6dbe7ff
Contract deployed:
0x07c05e2f844299cb6e95a87929171af4975e7757540ad97c2c5cfe1a1742db73
→ starkli declare ./target/dev/contracts_Pool.contract_class.json
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: sepolia. Using the default compiler version for this network: 2.6.2. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x034e8c320b72447cc94027dbd57850a8b6fa7018fe29f075da23c6a586c5897b
Compiling Sierra class to CASM with compiler version 2.6.2...
CASM class hash: 0x05d2f021bd0135f311f5930c3080ed5e206abc8b41bcb1dcebd616c72c7719c4
Contract declaration transaction: 0x018665d75fd391ec21ea95227c416786bcbb44658ad298b99a50895721f4f01c
Class hash declared:
0x034e8c320b72447cc94027dbd57850a8b6fa7018fe29f075da23c6a586c5897b
→ starkli de
declare  deploy
→ starkli deploy 0x034e8c320b72447cc94027dbd57850a8b6fa7018fe29f075da23c6a586c5897b
Deploying class 0x034e8c320b72447cc94027dbd57850a8b6fa7018fe29f075da23c6a586c5897b with salt 0x000d51125d14b739cf99acaece7e5f1835d68c902ea2a3c053ab8f5a7c1bb08f...
The contract will be deployed at address 0x0340693a874131acbef99ac3983005482be8240d2437b30973db7c48eb49b203
Contract deployment transaction: 0x016ad03c9559b2ed73bca25024ce003e470d0f20502ec4d3d2a9c3388a3846c1
Contract deployed:
0x0340693a874131acbef99ac3983005482be8240d2437b30973db7c48eb49b203
```
