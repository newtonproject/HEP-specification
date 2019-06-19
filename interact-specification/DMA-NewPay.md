# DMA - NewPay Interaction Specification

## Basic Parameters
### Request

| Field | Type | Notes |
| --- | --- | --- |
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


### Retrieve the profile of DApp in NewPay
Details in [HEP NODE REST API](hep-node/REST-API.md)
   

### NewPay return to DMA app

#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| user_name | string | The user name |
| newid | string | newid |
| invite_code | string | invite code |
| wallet_address | string | The wallet address |
| user_avatar | string | user avatar |
| country_code | string | Country code (scope is 2) |
| cellphone | string | Cellphone (scope is 2) |

#### Example
```
{
	"status_code": 200,
	"result": {
		"user_name": "..."
		...
	}
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
| signature        | string | signature hex string by application owner, format: "0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138". |


### Retrieve the profile of DApp in NewPay
Details in [HEP NODE REST API](hep-node/REST-API.md)

### Infomation return to DMA app
#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| order_number     | string | The order number. |
| txid | string | The transaction id. |


#### Example
```
{
	"status_code": 200,
	"result": {
		"order_number": "..."
		"txid": "..."
	}
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

### Retrieve the profile of DApp in NewPay
Details in [dapp_profile](hep-node/REST-API.md)

### Confirm the proof
Details in [proof_confirmProof](hep-node/REST-API.md)

### Result return to DMA app
#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| proof_hash      | string | The hash of proof which prefix is '0x'. |
| txid | string | The transaction id of confirm proof. |


#### Example
```
{
	"status_code": 200,
	"result": {
		"proof_hash": "...",
		"txid": "..."
	}
}
```

