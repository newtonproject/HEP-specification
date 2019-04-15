# NewPay SDK API reference

## Endpoints

```
Testnet: https://rpc1.newchain.newtonproject.org
```

## User Login

### Request access

newpay.login.requestAccess(DappId)

#### Parameters

* [JSON object](login_json.md)
* [Signature]

#### Return Values

* User NewID

#### Error Codes

See error codes[error_codes.md]

## Payments

### Request Payment

newpay.payment.requestPayment

```
newpay.payment.requestPayment("auth_type", json-object, signature)
```

#### Parameters

* [auth-type](auth-type.md)
* [JSON object](qr_payment.md)
* [Signature](signature.md)

#### Error Codes

See error codes[error_codes.md]

### Refund Payment

newpay.payment.refundPayment

#### Parameters

* [JSON object](qr_refund.md)
* [Signature](signature.md)

#### Returns

```True``` if successful

#### Error Codes

See error codes[error_codes.md]

## Proof of Action

### Confirm Proof of Action

newpay.proofOfAction.confirm(```hash```)

#### Parameters

The hash value of the transaction to check

#### Return Values

Returns a single boolean

| Value | Meaning              |
| ---   | ---                  |
| True  | Action confirmed     |
| False | Action not confirmed |

#### Error Codes

See error codes[error_codes.md]
