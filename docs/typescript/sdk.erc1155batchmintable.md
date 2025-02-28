---
slug: /sdk.erc1155batchmintable
title: Erc1155BatchMintable class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Erc1155BatchMintable class

Mint Many ERC1155 NFTs at once

**Signature:**

```typescript
export declare class Erc1155BatchMintable implements DetectableFeature
```

**Implements:** DetectableFeature

## Remarks

NFT batch minting functionality that handles IPFS storage for you.

## Example

```javascript
const contract = await sdk.getContract("{{contract_address}}");
await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
```

## Constructors

| Constructor                                                                                     | Modifiers | Description                                                              |
| ----------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| [(constructor)(erc1155, contractWrapper, storage)](./sdk.erc1155batchmintable._constructor_.md) |           | Constructs a new instance of the <code>Erc1155BatchMintable</code> class |

## Properties

| Property                                                 | Modifiers | Type                   | Description |
| -------------------------------------------------------- | --------- | ---------------------- | ----------- |
| [featureName](./sdk.erc1155batchmintable.featurename.md) |           | "ERC1155BatchMintable" |             |

## Methods

| Method                                                         | Modifiers | Description                          |
| -------------------------------------------------------------- | --------- | ------------------------------------ |
| [to(to, metadataWithSupply)](./sdk.erc1155batchmintable.to.md) |           | Mint Many NFTs with limited supplies |
