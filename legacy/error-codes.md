# NewPay Error Codes

## General Errors

These generally apply to all cases, including user login. More specific use cases are outlined in later sections.

### Auth type errors

* Auth type invalid

### User errors

* User key invalid
* User key not found
* User key blocked
* User pending verification
* User refused authorization (for payment, login)
* User authorization timeout (for payment, login)

### Dapp/website/in-app-dapp errors

* Dapp key invalid
* Dapp key not found
* Dapp key blocked
* Dapp pending verification

### Message errors

* Invalid message format

#### Protocol errors

* Outdated protocol
* Protocol format invalid
* Protocol unsupported

### Signature errors

* Invalid signature format
* Signature mismatch

### Network errors

* Network inaccessible
* Network timeout

### NewPay/HEP API errors

* System inaccessible
* System timeout

### Unknown

* Unknown error

## Payment Errors

### Transaction

* Transaction ID not found
* Transaction ID invalid
* Transaction already paid
* Transaction blocked by system (because it looks suspect?)

### Merchant

* Merchant ID invalid
* Merchant ID not found
* Merchant ID blocked
* Merchant pending verification

### Order item

* Order item ID invalid
* Order item ID not found
* Order item ID removed (for e.g. an auction for the Mona Lisa. There's only one, and if two people bid at once they can't both have it)

### Price

* Invalid price format
* Price out of bounds (should we allow this? Do we have an upper limit. What if someone puts a price of 99999999999999999999999999999999999999999999 USD?)
* Price is zero

### Currency

* Invalid currency format
* Deprecated currency format (for example French Francs were replaced by Euros. This is for future-proofing)
