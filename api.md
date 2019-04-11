# NewPay SDK API reference

## User Login

### Request access

newpay.login.requestAccess(DappId)

#### Parameters

* [JSON object](qr_login.md)

#### Returns

* User public key

#### Error Codes

| Code | Meaning                            |
| ---  | ---                                |
|      | Signature mis-match                 |
|      | NewPay not installed on user device |
|      | User ID unrecognized               |
|      | User ID blocked                    |
|      | Access refused by user             |
|      | User access confirmation timed out |
|      | Access refused by system           |
|      | Network unreachable                |
|      | Dapp ID unrecognized               |
|      | Dapp ID blocked                    |
|      | Internal error                      |


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

| Code | Meaning                             |
| ---  | ---                                 |
|      | Signature mis-match                 |
|      | NewPay not installed on user device |
|      | Transaction not found               |
|      | User refused payment                |
|      | User payment confirmation timed out |
|      | Network unreachable                 |
|      | Dapp ID unrecognized                |
|      | Dapp ID blocked                     |
|      | User ID unrecognized                |
|      | User ID blocked                     |
|      | Insufficient user funds             |
|      | Internal error                      |

### Refund Payment

newpay.payment.refundPayment

#### Parameters

* [JSON object](qr_refund.md)
* [Signature](signature.md)

## Proof of Action

### Confirm Proof of Payment

Confirms a payment was logged on NewChain

newpay.proofOfAction.checkPayment

#### Error Codes

| Code | Meaning                             |
| ---  | ---                                 |
|      | Signature mis-match                 |
|      | NewPay not installed on user device |
|      | Transaction not found               |
|      | Network unreachable                 |
|      | Dapp ID unrecognized                |
|      | Dapp ID blocked                     |
|      | User ID unrecognized                |
|      | User ID blocked                     |
|      | Internal error                       |

