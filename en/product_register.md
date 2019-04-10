# Registering a Product on NewChain

## Why?

By registering a product on NewChain, you make it easier for:

* Retail Dapps like [NewMall] to list your product
* You and your customers to track delivery progress of your product

## How?

### Product Type

The process for registering your product differs based on two main factors:

1. Is it a product with an existing UUID? (e.g. ISBN, ID3 Tag)
2. Is it a digital or physical product?

For example:

|         | Physical                   | Digital                 |
| ---     | ---                        | ---                     |
| UUID    | Paperback book (with ISBN) | MP3 (with id3 tag)      |
| No UUID | Football                   | User generated document |

#### Products with UUID's

For items with UUID's in popular product ranges, a merchant should provide JSON containing:

| Field     | Type   | Example             |
| ---       | ---    | ---                 |
| UUID type | string | "ISBN"              |
| UUID ID   | string | "978-3-16-148410-0" |
| Price     | float  | 9.99                |
| Currency  | string | "USD"               |
| Signature	| string | 					|

Newton's HEP API can then generate a product listing by oracalizing the UUID to gather the relevant product information.

#### Products without UUID's


