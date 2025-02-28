---
slug: /sdk.nftcollection
title: NFTCollection class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## NFTCollection class

Create a collection of one-of-one NFTs.

**Signature:**

```typescript
export declare class NFTCollection extends Erc721<TokenERC721>
```

**Extends:** [Erc721](./sdk.erc721.md)&lt;TokenERC721

## Example

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK("rinkeby");
const contract = sdk.getNFTCollection("{{contract_address}}");
```

## Constructors

| Constructor                                                                                                | Modifiers | Description                                                       |
| ---------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------- |
| [(constructor)(network, address, storage, options, contractWrapper)](./sdk.nftcollection._constructor_.md) |           | Constructs a new instance of the <code>NFTCollection</code> class |

## Properties

| Property                                              | Modifiers           | Type                                                                                                                                             | Description         |
| ----------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| [contractAbi](./sdk.nftcollection.contractabi.md)     | <code>static</code> | any                                                                                                                                              |                     |
| [contractRoles](./sdk.nftcollection.contractroles.md) | <code>static</code> | readonly \["admin", "minter", "transfer"\]                                                                                                       |                     |
| [contractType](./sdk.nftcollection.contracttype.md)   | <code>static</code> | "nft-collection"                                                                                                                                 |                     |
| [encoder](./sdk.nftcollection.encoder.md)             |                     | [ContractEncoder](./sdk.contractencoder.md)&lt;TokenERC721&gt;                                                                                   |                     |
| [estimator](./sdk.nftcollection.estimator.md)         |                     | [GasCostEstimator](./sdk.gascostestimator.md)&lt;TokenERC721&gt;                                                                                 |                     |
| [events](./sdk.nftcollection.events.md)               |                     | [ContractEvents](./sdk.contractevents.md)&lt;TokenERC721&gt;                                                                                     |                     |
| [metadata](./sdk.nftcollection.metadata.md)           |                     | [ContractMetadata](./sdk.contractmetadata.md)&lt;TokenERC721, typeof NFTCollection.schema&gt;                                                    |                     |
| [platformFee](./sdk.nftcollection.platformfee.md)     |                     | [ContractPlatformFee](./sdk.contractplatformfee.md)&lt;TokenERC721&gt;                                                                           |                     |
| [primarySale](./sdk.nftcollection.primarysale.md)     |                     | [ContractPrimarySale](./sdk.contractprimarysale.md)&lt;TokenERC721&gt;                                                                           |                     |
| [roles](./sdk.nftcollection.roles.md)                 |                     | [ContractRoles](./sdk.contractroles.md)&lt;TokenERC721, typeof [NFTCollection.contractRoles](./sdk.nftcollection.contractroles.md)\[number\]&gt; |                     |
| [royalty](./sdk.nftcollection.royalty.md)             |                     | [ContractRoyalty](./sdk.contractroyalty.md)&lt;TokenERC721, typeof NFTCollection.schema&gt;                                                      | Configure royalties |
| [signature](./sdk.nftcollection.signature.md)         |                     | [Erc721SignatureMinting](./sdk.erc721signatureminting.md)                                                                                        | Signature Minting   |

## Methods

| Method                                                                     | Modifiers | Description                                            |
| -------------------------------------------------------------------------- | --------- | ------------------------------------------------------ |
| [burn(tokenId)](./sdk.nftcollection.burn.md)                               |           | Burn a single NFT                                      |
| [getAll(queryParams)](./sdk.nftcollection.getall.md)                       |           | Get All Minted NFTs                                    |
| [getOwned(walletAddress)](./sdk.nftcollection.getowned.md)                 |           | Get Owned NFTs                                         |
| [getOwnedTokenIds(walletAddress)](./sdk.nftcollection.getownedtokenids.md) |           | Get all token ids of NFTs owned by a specific wallet.  |
| [isTransferRestricted()](./sdk.nftcollection.istransferrestricted.md)      |           | Get whether users can transfer NFTs from this contract |
| [mintBatch(metadata)](./sdk.nftcollection.mintbatch.md)                    |           | Mint Many unique NFTs                                  |
| [mintBatchTo(walletAddress, metadata)](./sdk.nftcollection.mintbatchto.md) |           | Mint Many unique NFTs                                  |
| [mintTo(walletAddress, metadata)](./sdk.nftcollection.mintto.md)           |           | Mint a unique NFT                                      |
| [mintToSelf(metadata)](./sdk.nftcollection.minttoself.md)                  |           | Mint a unique NFT                                      |
| [totalSupply()](./sdk.nftcollection.totalsupply.md)                        |           | Get the total count NFTs minted in this contract       |
