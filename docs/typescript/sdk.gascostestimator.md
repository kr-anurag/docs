---
slug: /sdk.gascostestimator
title: GasCostEstimator class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## GasCostEstimator class

Estimates the gas cost of Contract calls

**Signature:**

```typescript
export declare class GasCostEstimator<TContract extends BaseContract>
```

## Constructors

| Constructor                                                               | Modifiers | Description                                                          |
| ------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------- |
| [(constructor)(contractWrapper)](./sdk.gascostestimator._constructor_.md) |           | Constructs a new instance of the <code>GasCostEstimator</code> class |

## Methods

| Method                                                                     | Modifiers | Description                                                    |
| -------------------------------------------------------------------------- | --------- | -------------------------------------------------------------- |
| [currentGasPriceInGwei()](./sdk.gascostestimator.currentgaspriceingwei.md) |           | Returns the current gas price in gwei                          |
| [gasCostOf(fn, args)](./sdk.gascostestimator.gascostof.md)                 |           | Estimates the cost of gas in native token of the current chain |
