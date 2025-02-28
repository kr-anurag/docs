---
slug: /sdk.contractdeployer.deploynftdrop
title: ContractDeployer.deployNFTDrop() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ContractDeployer.deployNFTDrop() method

Deploys a new NFTDrop contract

**Signature:**

```typescript
deployNFTDrop(metadata: NFTContractDeployMetadata): Promise<string>;
```

## Parameters

| Parameter | Type                                                            | Description           |
| --------- | --------------------------------------------------------------- | --------------------- |
| metadata  | [NFTContractDeployMetadata](./sdk.nftcontractdeploymetadata.md) | the contract metadata |

**Returns:**

Promise&lt;string&gt;

the address of the deployed contract

## Remarks

Deploys an NFT Drop contract and returns the address of the deployed contract

## Example

```javascript
const contractAddress = await sdk.deployer.deployNFTDrop({
  name: "My Drop",
  primary_sale_recipient: "your-address",
});
```
