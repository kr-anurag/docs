---
slug: /sdk.pack.royalty
title: Pack.royalty property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Pack.royalty property

Configure royalties

**Signature:**

```typescript
royalty: ContractRoyalty<PackContract, typeof Pack.schema>;
```

## Remarks

Set your own royalties for the entire contract or per pack

## Example

```javascript
// royalties on the whole contract
contract.royalty.setDefaultRoyaltyInfo({
  seller_fee_basis_points: 100, // 1%
  fee_recipient: "0x...",
});
// override royalty for a particular pack
contract.royalty.setTokenRoyaltyInfo(packId, {
  seller_fee_basis_points: 500, // 5%
  fee_recipient: "0x...",
});
```
