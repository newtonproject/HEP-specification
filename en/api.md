# NewPay SDK API reference

## User Login

newpay.login

### Request access

newpay.login.requestAccess(DappId)

#### Parameters

* [JSON object](qr_login.md)

#### Returns

* User public key

#### Error Codes

* User does not exist
* Access refused by user
* User access confirmation timed out
* Access refused by system
* Network unreachable
* Dapp ID unrecognized

## Payments

### Request Payment

newpay.payment.requestPayment

#### Parameters

* [JSON object](qr_payment.md)

#### Error Codes

| Code		| Meaning																	|
| ---		| ---																		|
|			| Transaction not found														|
|			| User refused payment														|
|			| User payment confirmation timed out										|
|			| System refused access														|
|			| Network unreachable														|
|			| Dapp ID unrecognized														|

### Refund Payment

newpay.payment.refundPayment

### Confirm Payment

Confirms a payment was logged on NewChain

newpay.payment.checkPayment

## Proof of Action
