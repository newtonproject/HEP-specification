# DMA - NewPay Interaction Specification

## Basic Parameters
### Request

| Field | Type | Notes |
| --- | --- | --- |
| uuid | string | uuid |
| dapp_id | string | Decentralized Application Id |
| protocol | string | protocol name. The default is "HEP". |
| version | string    | protocol version. The example is "1.0". |
| ts        | number    | timestamp                                  |
| nonce            | string | random string or auto-increment sequence                              |

### Response
| Field | Type | Notes |
| --- | --- | --- |
| status_code | int | The status code. |
| message | string | The error message, support i18n. |
| errors       | json    | The error list, see [error.json](schema/error.json) |
| result       | json    | The result |


## Authentication

### Steps

* DMA app calls the **login** function in NewPaySDK with basic parameters and extra parameters, such as scope, memo, sign_type and signature.
* NewPay retrieve the dapp profile from hep node and verify the DMA app info.
* NewPay authorizes Login.
* NewPay sends profile back to DMA app.

### EndPoints
`NewPay`


### DMA -> NewPay
#### Parameters
| Field | Type | Notes |
| --- | --- | --- |
| action           | string | The value is "hep.auth.login"                             |
| scope | int | profile type Id. 1: base profile including name,head,newid; 2: advance profile including cellphone  |
| memo | string | Login Memo,optional |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature | string | signature hex string by DApp owner. |

### NewPay profile information to DMA app

#### Returns

| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The profile's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| name | string | user's name |
| avatar | string | user's avatar path |
| newid | string | user's newid |
| country_code | string | eg: 86 scope=2 |
| cellphone | string | user's cellphone, scope =2 |
| address | string | user's address, scope=2 |
| invite_code | string | user's invite code,scope=2 |

#### Example
```
{
    "signature": "0x...",
    "sign_type": "secp256r1",
    "uuid": "xxx",
    "name": "name",
    "avatar": "avatar path",
    "newid": "NEWID182...",
    "country_code": "86",
    "cellphone": "1888888888",
    "address": "NEW...",
    "invite_code": "123456"
}
```

## Payment
### Steps

* DMA app calls the **pay** function in NewPaySDK with basic parameters and extra parameters, such as description, price_currency, total_price, order_number, seller, customer, broker, signature.
* NewPay retrieve the dapp profile from hep node and verify the DMA app info.
* NewPay authorizes payment.
* NewPay jump back to DMA app.

### Request payment

#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| action           | string | The value is "hep.pay.order"                             |
| description      | string | The order description |
| price_currency   | string | symbol of fiat or digital token, such as USD, RMB, NEW,BTC,ETH
| total_price      | string | amount of fiat or digital token, unit is the minimum unit of given fiat or digital token |
| order_number     | string | The order number. |
| seller           | string | The seller's NewID  |
| customer         | string | The customer's NewID |
| broker           | string | The broker's NewID. optional.  |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature        | string | 0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138". |


#### Return transaction information to DMA
| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The pay's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| nonce | string | nonce, random string |
| dapp_id | string | dapp id |
| ts | string | timestamp |
| txid | string | transaction id |
| order_number | string | order number |

#### Example
```
{
    "signature": "0x...",
    "sign_type": "secp256r1",
    "uuid": "xxx",
    "nonce": "random string",
    "dapp_id": "dapp id",
    "ts": "timestamp",
    "txid": "txid",
    "order_number": "order number"
}
```

## Proof

### Steps

* DMA app calls the **submitProof** function in NewPaySDK with basic parameters and extra parameters, such as description, price_currency, total_price, order_number, order_items, seller, customer, broker, signature. In the process, DMA app submit proof to hep node, and get the proof hash, and jump to NewPay.
* NewPay retrieve the proof detail of given proof hash, then retrieve the dapp profile from hep node and verify the DMA app info.
* NewPay confirm proof.
* NewPay jump back to DMA app.

### DMA -> HEP node
see [proof_submitProof](hep-node/REST-API.md)

### DMA -> NewPay

#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| action | string | The value is "hep.proof.submit". |
| proof_hash      | string | The hash of proof which prefix is '0x'. |
| sign_type | string | Signature Type,aka cryptographic algorithm. |
| signature      | string | The signature by DApp owner. |

#### Result to DMA
| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The proof's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| nonce | string | nonce, random string |
| dapp_id | string | dapp id |
| ts | string | timestamp |
| proof_hash | string | proof hash |


#### Example
```
{
    "signature": "0x...",
    "sign_type": "secp256r1",
    "uuid": "xxx",
    "nonce": "random string",
    "dapp_id": "dapp id",
    "ts": "timestamp",
    "proof_hash": "proof hash"
}
```

