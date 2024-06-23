# 12h finance

## contracts

    cd contracts

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
Enter keystore password:
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: sepolia. Using the default compiler version for this network: 2.6.2. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
Compiling Sierra class to CASM with compiler version 2.6.2...
CASM class hash: 0x05fee6b06d649d8294a44dff56f82f7f1068ad04587fa5fddac66f86dafce9ac
Contract declaration transaction: 0x033fcbf0e572c1ea5f7af664699ea2b684a9e6c23f1165fa037f2eaca4ff22fd
Class hash declared:
0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
→ starkli deploy 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe
Enter keystore password:
Deploying class 0x04c12924381715545c10071c36c271c1398fa43d5c5432f2d1fb28ffed59c8fe with salt 0x0021cdb71c4e1072cfdc9d84c70fdd1f023d7e96e8c7a0ef070cdc616b937a9e...
The contract will be deployed at address 0x07c05e2f844299cb6e95a87929171af4975e7757540ad97c2c5cfe1a1742db73
Contract deployment transaction: 0x04f3c0ae667b65808111cc00d37ced0756d42e4e0e7da12c11b85beee6dbe7ff
Contract deployed:
0x07c05e2f844299cb6e95a87929171af4975e7757540ad97c2c5cfe1a1742db73
→ starkli declare target/dev/
contracts_Pool.contract_class.json       contracts_SPXToken.contract_class.json   contracts.starknet_artifacts.json        contracts_USDCToken.contract_class.json
→ starkli declare target/dev/contracts_Pool.contract_class.json
Enter keystore password:
Not declaring class as it's already declared. Class hash:
0x023c202111c9e78666821b87295103fc1e61bac7d3daad8540a7d57d73661197
→ starkli deploy 0x023c202111c9e78666821b87295103fc1e61bac7d3daad8540a7d57d73661197
Enter keystore password:
Deploying class 0x023c202111c9e78666821b87295103fc1e61bac7d3daad8540a7d57d73661197 with salt 0x06e92f1579b2cd229cf6fa2badae4061ef7cbd69e2f868d781ec9b1090dcb66c...
The contract will be deployed at address 0x06e91685daa4ac73581cb5bd9c19f5826d6d6d2680de0d4755b15d63e82d2fa8
Contract deployment transaction: 0x02b66be12cb3cc406b403e495e63e1be7dc47456d3452f69399b46cdf8beb505
Contract deployed:
0x06e91685daa4ac73581cb5bd9c19f5826d6d6d2680de0d4755b15d63e82d2fa8
```
