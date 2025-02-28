---
slug: /react
title: react package
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## react package

## Functions

| Function                                                                             | Description                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useActiveClaimCondition(\[contract, tokenId\])](./react.useactiveclaimcondition.md) | **<i>(BETA)</i>** Use this to get the active claim conditon for ERC20, ERC721 or ERC1155 based contracts. They need to extend the <code>claimCondition</code> extension for this hook to work. |
| [useActiveListings(contract, filter)](./react.useactivelistings.md)                  | **<i>(BETA)</i>** Use this to get a list active listings from your marketplace contract.                                                                                                       |
| [useAddress()](./react.useaddress.md)                                                | Hook for accessing the address of the connected wallet                                                                                                                                         |

```javascript
import { useAddress } from "@thirdweb-dev/react";
```

|
| [useAuctionWinner(contract, listingId)](./react.useauctionwinner.md) | **<i>(BETA)</i>** Use this to get the winner of an auction listing from your marketplace contract. |
| [useBalance(tokenAddress)](./react.usebalance.md) | |
| [useBidBuffer(contract)](./react.usebidbuffer.md) | **<i>(BETA)</i>** Use this to get the buffer in basis points between offers from your marketplace contract. |
| [useBuyNow(contract)](./react.usebuynow.md) | **<i>(BETA)</i>** Use this to buy out an auction listing from your marketplace contract. |
| [useChainId()](./react.usechainid.md) | Hook for accessing the chain ID of the network the current wallet is connected to

```javascript
import { useChainId } from "@thirdweb-dev/react";
```

|
| [useClaimConditions(\[contract, tokenId\])](./react.useclaimconditions.md) | **<i>(BETA)</i>** Use this to get all claim conditons for ERC20, ERC721 or ERC1155 based contracts. They need to extend the <code>claimCondition</code> extension for this hook to work. |
| [useClaimedNFTs(contract, queryParams)](./react.useclaimednfts.md) | **<i>(BETA)</i>** Use this to get a list of \*claimed\* (minted) NFT tokens of your ERC721 Drop contract. |
| [useClaimedNFTSupply(contract)](./react.useclaimednftsupply.md) | |
| [useClaimIneligibilityReasons(\[contract, params, tokenId\])](./react.useclaimineligibilityreasons.md) | **<i>(BETA)</i>** Use this to check for reasons that prevent claiming for either ERC20, ERC721 or ERC1155 based contracts. They need to extend the <code>claimCondition</code> extension for this hook to work. |
| [useClaimNFT(contract)](./react.useclaimnft.md) | **<i>(BETA)</i>** Use this to mint a new NFT on your [DropContract](./react.dropcontract.md) |
| [useCoinbaseWallet()](./react.usecoinbasewallet.md) | Hook for connecting to a Coinbase wallet.

```javascript
import { useCoinbaseWallet } from "@thirdweb-dev/react";
```

|
| [useContract(contractAddress)](./react.usecontract.md) | **<i>(BETA)</i>** Use this resolve a contract address to a thirdweb (built-in / custom) contract instance. |
| [useContractMetadata(contractAddress)](./react.usecontractmetadata.md) | **<i>(BETA)</i>** Use this to get the contract metadata for a (built-in or custom) contract. |
| [useContractPublishMetadata(contractAddress)](./react.usecontractpublishmetadata.md) | **<i>(BETA)</i>** Use this to get the publish metadata for a deployed contract. |
| [useContractType(contractAddress)](./react.usecontracttype.md) | **<i>(BETA)</i>** Use this to get the contract type for a (built-in or custom) contract. |
| [useCreateAuctionListing(contract)](./react.usecreateauctionlisting.md) | **<i>(BETA)</i>** Use this to create a new Auction Listing on your marketplace contract. |
| [useCreateDirectListing(contract)](./react.usecreatedirectlisting.md) | **<i>(BETA)</i>** Use this to create a new Direct Listing on your marketplace contract. |
| [useDisconnect(options)](./react.usedisconnect.md) | Hook for disconnecting the currently connected wallet

```javascript
import { useDisconnect } from "@thirdweb-dev/react";
```

|
| [useEdition(contractAddress)](./react.useedition.md) | Hook for getting an instance of an <code>Edition</code> contract. This contract is used to interface with ERC1155 compliant NFTs. |
| [useEditionDrop(contractAddress)](./react.useeditiondrop.md) | Hook for getting an instance of an <code>EditionDrop</code> contract. This conract is used to interface with ERC1155 compliant NFTs that can be lazily minted. |
| [useGnosis()](./react.usegnosis.md) | Hook for connecting to a Gnosis Safe. This enables multisig wallets to connect to your application and sing transactions.

```javascript
import { useGnosis } from "@thirdweb-dev/react";
```

|
| [useListing(contract, listingId)](./react.uselisting.md) | **<i>(BETA)</i>** Use this to get a specific listing from the marketplace. |
| [useListings(contract, filter)](./react.uselistings.md) | **<i>(BETA)</i>** Use this to get a list all listings from your marketplace contract. |
| [useMagic()](./react.usemagic.md) | Hook for connecting to an email wallet using magic link. This enables users without their own wallets to connect to your application and sign transactions securely using their email.

```javascript
import { useMagic } from "@thirdweb-dev/react";
```

|
| [useMakeBid(contract)](./react.usemakebid.md) | **<i>(BETA)</i>** Use this to place a bid on an auction listing from your marketplace contract. |
| [useMarketplace(contractAddress)](./react.usemarketplace.md) | Hook for getting an instance of a <code>Marketplace</code> contract. This contract is used to support marketplace for purchase and sale of on-chain assets. |
| [useMetamask()](./react.usemetamask.md) | Hook for connecting to a Metamask wallet.

```javascript
import { useMetamask } from "@thirdweb-dev/react";
```

|
| [useMintNFT(contract)](./react.usemintnft.md) | **<i>(BETA)</i>** Use this to mint a new NFT on your [NFTContract](./react.nftcontract.md) |
| [useMintToken(contract)](./react.useminttoken.md) | **<i>(BETA)</i>** Use this to mint a new NFT on your ERC20 contract |
| [useNetwork()](./react.usenetwork.md) | Hook for getting metadata about the network the current wallet is connected to and switching networks

```javascript
import { useNetwork } from "@thirdweb-dev/react";
```

|
| [useNetworkMismatch()](./react.usenetworkmismatch.md) | Hook for checking whether the connected wallet is on the correct network specified by the <code>desiredChainId</code> passed to the <code>&lt;ThirdwebProvider /&gt;</code>.

```javascript
import { useNetworkMistmatch } from "@thirdweb-dev/react";
```

|
| [useNFT(contract, tokenId)](./react.usenft.md) | **<i>(BETA)</i>** Use this to get an individual NFT token of your [NFTContract](./react.nftcontract.md). |
| [useNFTBalance(\[contract, ownerWalletAddress, tokenId\])](./react.usenftbalance.md) | **<i>(BETA)</i>** Use this to get a the total balance of a [NFTContract](./react.nftcontract.md) and wallet address. |
| [useNFTCollection(contractAddress)](./react.usenftcollection.md) | Hook for getting an instance of an <code>NFTCollection</code> contract. This contract is meant to interface with ERC721 compliant NFTs. |
| [useNFTDrop(contractAddress)](./react.usenftdrop.md) | Hook for getting an instance of an <code>NFTDrop</code> contract. This contract is meant to interface with ERC721 compliant NFTs that can be lazily minted. |
| [useNFTs(contract, queryParams)](./react.usenfts.md) | **<i>(BETA)</i>** Use this to get a list of NFT tokens of your [NFTContract](./react.nftcontract.md). |
| [useOwnedNFTs(contract, ownerWalletAddress)](./react.useownednfts.md) | **<i>(BETA)</i>** Use this to get a the owned NFTs for a specific [NFTContract](./react.nftcontract.md) and wallet address. |
| [usePack(contractAddress)](./react.usepack.md) | Hook for getting an instance of a <code>Pack</code> contract. This contract supports the creation of on-chain luck-based lootboxes. |
| [useResolvedMediaType(uri)](./react.useresolvedmediatype.md) | |
| [useSplit(contractAddress)](./react.usesplit.md) | Hook for getting an instance of a <code>Split</code> contract. This contract supports fund distribution to multiple parties. |
| [useToken(contractAddress)](./react.usetoken.md) | Hook for getting an instance of an <code>Token</code> contract. This contract supports ERC20 compliant tokens. |
| [useTokenBalance(contract, walletAddress)](./react.usetokenbalance.md) | **<i>(BETA)</i>** Use this to get the balance of your Token contract for a given address. |
| [useTokenSupply(contract)](./react.usetokensupply.md) | **<i>(BETA)</i>** Use this to get a the total supply of your Token contract. |
| [useTotalCirculatingSupply(contract)](./react.usetotalcirculatingsupply.md) | **<i>(BETA)</i>** Use this to get a the total (minted) supply of your [NFTContract](./react.nftcontract.md). |
| [useUnclaimedNFTs(contract, queryParams)](./react.useunclaimednfts.md) | **<i>(BETA)</i>** Use this to get a list of \*unclaimed\* NFT tokens of your ERC721 Drop contract. |
| [useUnclaimedNFTSupply(contract)](./react.useunclaimednftsupply.md) | |
| [useVote(contractAddress)](./react.usevote.md) | Hook for getting an instance of an <code>Vote</code> contract. This contract enables fully featured voting-based decentralized governance systems. |
| [useWalletConnect()](./react.usewalletconnect.md) | Hook for connecting to a mobile wallet with Wallet Connect

```javascript
import { useWalletConnect } from "@thirdweb-dev/react";
```

|
| [useWinningBid(contract, listingId)](./react.usewinningbid.md) | **<i>(BETA)</i>** Use this to get a the winning bid for an auction listing from your marketplace contract. |

## Interfaces

| Interface                                                       | Description                                                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [DAppMetaData](./react.dappmetadata.md)                         | the metadata to pass to wallet connection dialog (may show up during the wallet-connection process) |
| [MediaRendererProps](./react.mediarendererprops.md)             | The props for the [MediaRenderer](./react.mediarenderer.md) component.                              |
| [MediaType](./react.mediatype.md)                               |                                                                                                     |
| [SharedMediaProps](./react.sharedmediaprops.md)                 |                                                                                                     |
| [ThirdwebNftMediaProps](./react.thirdwebnftmediaprops.md)       | The props for the [ThirdwebNftMedia](./react.thirdwebnftmedia.md) component.                        |
| [ThirdwebProviderProps](./react.thirdwebproviderprops.md)       | The possible props for the ThirdwebProvider.                                                        |
| [ThirdwebSDKProviderProps](./react.thirdwebsdkproviderprops.md) |                                                                                                     |

## Variables

| Variable                                              | Description                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MediaRenderer](./react.mediarenderer.md)             | This component can be used to render any media type, including image, audio, video, and html files. Its convenient for rendering NFT media files, as these can be a variety of different types. The component falls back to a external link if the media type is not supported.Props: [MediaRendererProps](./react.mediarendererprops.md) |
| [ThirdwebNftMedia](./react.thirdwebnftmedia.md)       | Render a nft based on the common metadata returned by the thirdweb sdk.                                                                                                                                                                                                                                                                   |
| [ThirdwebProvider](./react.thirdwebprovider.md)       | The <code>&lt;ThirdwebProvider /&gt;</code> component lets you control what networks you want users to connect to, what types of wallets can connect to your app, and the settings for the \[Typescript SDK\](https://docs.thirdweb.com/typescript).                                                                                      |
| [ThirdwebSDKProvider](./react.thirdwebsdkprovider.md) | **<i>(BETA)</i>** A barebones wrapper around the Thirdweb SDK.You can use this in order to be able to pass a provider &amp; signer directly to the SDK.                                                                                                                                                                                   |

## Type Aliases

| Type Alias                                                              | Description                                                                                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [BuyNowParams](./react.buynowparams.md)                                 |                                                                                                                           |
| [ClaimIneligibilityParameters](./react.claimineligibilityparameters.md) | **<i>(BETA)</i>** The options to be passed as the second parameter to the <code>useClaimIneligibilityReasons</code> hook. |
| [ClaimNFTParams](./react.claimnftparams.md)                             | **<i>(BETA)</i>** The params for the [useClaimNFT()](./react.useclaimnft.md) hook mutation.                               |
| [ClaimNFTReturnType](./react.claimnftreturntype.md)                     | **<i>(BETA)</i>** The return type of the [useClaimNFT()](./react.useclaimnft.md) hook.                                    |
| [ContractAddress](./react.contractaddress.md)                           | **<i>(BETA)</i>** A contract address.                                                                                     |
| [DropContract](./react.dropcontract.md)                                 | **<i>(BETA)</i>** The possible DROP contract types.                                                                       |
| [MakeBidParams](./react.makebidparams.md)                               |                                                                                                                           |
| [MintNFTParams](./react.mintnftparams.md)                               | **<i>(BETA)</i>** The params for the [useMintNFT()](./react.usemintnft.md) hook mutation.                                 |
| [MintNFTReturnType](./react.mintnftreturntype.md)                       | **<i>(BETA)</i>** The return type of the [useMintNFT()](./react.usemintnft.md) hook.                                      |
| [NFT](./react.nft.md)                                                   | **<i>(BETA)</i>** A single NFT token                                                                                      |
| [NFTContract](./react.nftcontract.md)                                   | **<i>(BETA)</i>** The possible NFT contract types.                                                                        |
| [RequiredParam](./react.requiredparam.md)                               | **<i>(BETA)</i>** Makes a parameter required to be passed, but still allowes it to be undefined.                          |
| [TokenMintParams](./react.tokenmintparams.md)                           | **<i>(BETA)</i>** The parameters to pass to the nft mint function.                                                        |
| [useNFTBalanceParams](./react.usenftbalanceparams.md)                   | **<i>(BETA)</i>** The params to pass to <code>useNftBalance</code>.                                                       |
| [WalletAddress](./react.walletaddress.md)                               | **<i>(BETA)</i>** A wallet address.                                                                                       |
