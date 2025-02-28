---
slug: /SignatureMintERC20
title: SignatureMintERC20
hide_title: true
displayed_sidebar: contracts
---

# SignatureMintERC20

## Methods

### mintWithSignature

```solidity
function mintWithSignature(ISignatureMintERC20.MintRequest req, bytes signature) external payable
```

Mints tokens according to the provided mint request.

#### Parameters

| Name      | Type                            | Description                                                    |
| --------- | ------------------------------- | -------------------------------------------------------------- |
| req       | ISignatureMintERC20.MintRequest | The payload / mint request.                                    |
| signature | bytes                           | The signature produced by an account signing the mint request. |

### verify

```solidity
function verify(ISignatureMintERC20.MintRequest _req, bytes _signature) external view returns (bool success, address signer)
```

_Verifies that a mint request is signed by an account holding MINTER_ROLE (at the time of the function call)._

#### Parameters

| Name        | Type                            | Description |
| ----------- | ------------------------------- | ----------- |
| \_req       | ISignatureMintERC20.MintRequest | undefined   |
| \_signature | bytes                           | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| success | bool    | undefined   |
| signer  | address | undefined   |

## Events

### TokensMintedWithSignature

```solidity
event TokensMintedWithSignature(address indexed signer, address indexed mintedTo, ISignatureMintERC20.MintRequest mintRequest)
```

#### Parameters

| Name               | Type                            | Description |
| ------------------ | ------------------------------- | ----------- |
| signer `indexed`   | address                         | undefined   |
| mintedTo `indexed` | address                         | undefined   |
| mintRequest        | ISignatureMintERC20.MintRequest | undefined   |
