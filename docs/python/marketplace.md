---
slug: /marketplace
title: Marketplace Objects
hide_title: true
displayed_sidebar: python
---

<a id="contracts.marketplace"></a>

# contracts.marketplace

Interface for interacting with a marketplace contract

<a id="contracts.marketplace.Marketplace"></a>

## Marketplace Objects

```python
class Marketplace(BaseContract[MarketplaceABI])
```

Create your own whitelabel marketplace that enables users to buy and sell any digital assets.

```python
from thirdweb import ThirdwebSDK
from eth_account import Account

# You can customize this to a supported network or your own RPC URL
network = "mumbai"

# This will create a random account to use for signing transactions
signer = Account.create()

sdk = ThirdwebSDK(network, signer)
contract = sdk.get_marketplace("{{contract_address}}")
```

<a id="contracts.marketplace.Marketplace.get_listing"></a>

#### get_listing

```python
def get_listing(listing_id: int) -> Union[DirectListing, AuctionListing]
```

Get a listing from the marketplace by ID

**Arguments**:

- `listing_id`: ID of the listing to get

**Returns**:

Listing object

<a id="contracts.marketplace.Marketplace.get_active_listings"></a>

#### get_active_listings

```python
def get_active_listings() -> List[Union[DirectListing, AuctionListing]]
```

Get all the currently active listings from the marketplace.

```python
listings = contract.get_active_listings()
price_of_first = listings[0].price
```

**Returns**:

List of listings

<a id="contracts.marketplace.Marketplace.get_all_listings"></a>

#### get_all_listings

```python
def get_all_listings(
    filter: MarketplaceFilter = None
) -> List[Union[DirectListing, AuctionListing]]
```

Get all the listings that have ever been made on this marketplace.

```python
listings = contract.get_all_listings()
price_of_first = listings[0].price
```

**Arguments**:

- `filter`: Filter to apply to the listings

**Returns**:

List of listings

<a id="contracts.marketplace.Marketplace.get_total_count"></a>

#### get_total_count

```python
def get_total_count() -> int
```

Get the total number of listings on this marketplace.

**Returns**:

Total number of listings

<a id="contracts.marketplace.Marketplace.is_restricted_to_lister_role_only"></a>

#### is_restricted_to_lister_role_only

```python
def is_restricted_to_lister_role_only() -> bool
```

Check whether only wallets with the lister role can make listings.

**Returns**:

True if only lister wallets can make listings

<a id="contracts.marketplace.Marketplace.get_bid_buffer_bps"></a>

#### get_bid_buffer_bps

```python
def get_bid_buffer_bps() -> int
```

Get the bid buffer basis points for this marketplace.

**Returns**:

Bid buffer basis points

<a id="contracts.marketplace.Marketplace.get_time_buffer_in_seconds"></a>

#### get_time_buffer_in_seconds

```python
def get_time_buffer_in_seconds() -> int
```

Get the time buffer for this marketplace in seconds

**Returns**:

Time buffer in seconds

<a id="contracts.marketplace.Marketplace.buyout_listing"></a>

#### buyout_listing

```python
def buyout_listing(listing_id: int,
                   quantity_desired: Optional[int] = None,
                   receiver: Optional[str] = None) -> TxReceipt
```

Buyout a listing by listing ID

```python
listing_id = 0
quantity_desired = 1

contract.buyout_listing(listing_id, quantity_desired)
```

**Arguments**:

- `listing_id`: ID of the listing to buyout
- `quantity_desired`: Quantity to buyout
- `receiver`: Address to send the asset to

**Returns**:

Transaction receipt of buyout

<a id="contracts.marketplace.Marketplace.set_bid_buffer_bps"></a>

#### set_bid_buffer_bps

```python
def set_bid_buffer_bps(buffer_bps: int) -> TxReceipt
```

Set the bid buffer basis points for this marketplace.

```python
buffer_bps = 500
contract.set_bid_buffer_bps(buffer_bps)
```

**Arguments**:

- `buffer_bps`: Bid buffer basis points

**Returns**:

Transaction receipt

<a id="contracts.marketplace.Marketplace.set_time_buffer_in_seconds"></a>

#### set_time_buffer_in_seconds

```python
def set_time_buffer_in_seconds(buffer_in_seconds: int) -> TxReceipt
```

Set the time buffer of the marketplace.

```python
buffer_in_seconds = 60
contract.set_time_buffer_in_seconds(buffer_in_seconds)
```

**Arguments**:

- `buffer_in_seconds`: Time buffer in seconds

**Returns**:

Transaction receipt

<a id="contracts.marketplace.Marketplace.allow_listing_from_specific_asset_only"></a>

#### allow_listing_from_specific_asset_only

```python
def allow_listing_from_specific_asset_only(contract_address: str) -> TxReceipt
```

Restrict marketplace so only specific asset can be listed.

**Arguments**:

- `contract_address`: Address of the asset contract

<a id="contracts.marketplace.Marketplace.allow_listing_from_any_asset"></a>

#### allow_listing_from_any_asset

```python
def allow_listing_from_any_asset() -> TxReceipt
```

Allow asset to be listed on the marketplace.

**Returns**:

Transaction receipt
