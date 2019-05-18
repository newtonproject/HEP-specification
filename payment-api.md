# JSON NewPay Payment

Dapps should send the following JSON to NewPay to allow payments. In the case of websites, it should be encoded in the QR code.

| Field            | Type   | Notes                         |
| ---              | ---    | ---                           |
| Nonce            | int    |                               |
| Dapp ID          | string |                               |
| Buyer ID		   | string |								|
| Order information| array	| See below						|
| Protocol version | int    |                               |
| Signature        | string | Should be a hexed hash        |

Order information is constructed as an array of JSON objects. Each element is a different order item:

| Field            | Type   |
| ---              | ---    |
| Merchant ID	   | string	|
| Product ID	   | string	|
| Price			   | float	|
| Currency		   | string	|

## Example

```json
"transaction": {
	"Nonce": 12345,
	"Dapp ID": "NEW182X4BUrUViiVZUMibXgjFy77Z8M2g5okr2B",
	"Buyer ID": "NEW17zNfjpwrrqJGMYUN2UjdUvq7vwy4X4BQZv1",
	"Order information": [
			{
				"Merchant ID": "NEW17zGkXm6JjqxyBUR5oKyLSgSntUzAsgvFhzZ",
    			"Product ID": "NEW17zaAf8LzQjXDnytCdhvaWxJvJbkD6WNw3DF",
    			"Price": 5.99,
    			"Currency": "USD"
			}
	],
	"Protocol version": 1,
	"Signature": ????
}
```

## Why this structure?

Our initial thoughts were to organize order information in a flat JSON structure, but this cuts out many edge cases:

* Ordering multiple products from one vendor
* Ordering products from places like eBay, in which Dapp ID and merchant ID would be the same

By having an array in the order information, we can address these cases and batch process payments, rather than paying once for each item.
