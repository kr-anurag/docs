---
slug: /sdk.contractroles.grant
title: ContractRoles.grant() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ContractRoles.grant() method

Call this to grant a role to a specific address.

**Signature:**

```typescript
grant(role: TRole, address: string): Promise<TransactionResult>;
```

## Parameters

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| role      | TRole  | The [Role](./sdk.role.md) to grant to the address |
| address   | string | The address to grant the role to                  |

**Returns:**

Promise&lt;[TransactionResult](./sdk.transactionresult.md)&gt;

The transaction receipt

## Exceptions

If you are trying to grant does not exist on the contract this will throw an error.

## Remarks

Make sure you are sure you want to grant the role to the address.
