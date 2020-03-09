# DWeb - NewPay Interaction Specification

## Basic Parameters
### Request

| Field | Type | Notes |
| --- | --- | --- |
| dapp_id | string | Decentralized Application Id |
| protocol | string | protocol name. The default is "HEP". |
| version | string    | protocol version. The example is "1.0". |
| ts        | number    | timestamp                                  |
| nonce            | string | random string or auto-increment sequence                              |
| environment | int | Environment of NewPay. 1 for release, 2 for testnet, 3 for dev |
| language | string | The language of DWeb app. choices:zh_CN,en |

### Response
| Field | Type | Notes |
| --- | --- | --- |
| status_code | int | The status code. |
| message | string | The error message, support i18n. |
| errors       | json    | The error list, see [error.json](schema/error.json) |
| result       | json    | The result |


## Authentication

### Steps

#### In Desktop Browser
* DWeb app generates the QR code by **hep.js** in which basic parameters and extra parameters, such as scope, memo, sign_type and signature, is encoded.
* NewPay Scan the QR code, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes Login.
* NewPay sends profile back to the API of DWeb app.

#### In Mobile Browser
* DWeb app generates the redirect schema by **hep.js** in which basic parameters and extra parameters, such as scope, memo, sign_type and signature, is encoded. Users click the NewID-Login button, and redirect to NewPay. If NewPay is not installed, redirect to NewPay download page.
* NewPay received the input parameters from schema, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes Login.
* NewPay sends profile back to the API of DWeb app.

#### In NewPay
* Users click the NewID-Login button. DWeb app call the **login** function by **hep.js** in which basic parameters and extra parameters, such as scope, memo, sign_type and signature, is encoded.
* NewPay received the input parameters from **JS-bridge**, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes Login.
* NewPay sends profile back to the API of DWeb app.

### DWeb -> NewPay
#### Parameters
| Field | Type | Notes |
| --- | --- | --- |
| uuid           | string | The request uuid                             |
| action           | string | The value is "hep.auth.login"                             |
| scope | int | profile type Id. 1: base profile including name,head,newid; 2: advance profile including cellphone  |
| memo | string | Login Memo,optional |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature | string | signature hex string by DApp owner. |


### Retrieve the profile of DApp in NewPay
Details in [HEP NODE REST API](hep-node/REST-API.md)
   

### NewPay return to DWeb app or server

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
        "uuid": "...",
        "user_name": "...",
        ...
    }
}
```

## Payment
### Steps

#### In Desktop Browser
* DWeb app generates the QR code by **hep.js** in which basic parameters and extra parameters, such as description, price_currency, total_price, order_number, seller, customer, broker, signature, is encoded.
* NewPay Scan the QR code, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes payment.
* NewPay jump back to DWeb app.

#### In Mobile Browser
* DWeb app generates the redirect schema by **hep.js** in which basic parameters and extra parameters, such as description, price_currency, total_price, order_number, seller, customer, broker, signature, is encoded. Users click the New-Payment button, and redirect to NewPay. If NewPay is not installed, redirect to NewPay download page.
* NewPay received the input parameters from schema, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes payment.
* NewPay jump back to DWeb app.

#### In NewPay
* Users click the New-Payment button. DWeb app call the **pay** function by **hep.js** in which basic parameters and extra parameters, such as description, price_currency, total_price, order_number, seller, customer, broker, signature, is encoded.
* NewPay received the input parameters from **JS-bridge**, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay authorizes payment.
* NewPay jump back to DWeb app.

### Request payment

#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| uuid           | string | The request uuid                             |
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

### Infomation return to DWeb app or server
#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| uuid           | string | The request uuid                             |
| order_number     | string | The order number. |
| txid | string | The transaction id. |


#### Example
```
{
    "status_code": 200,
    "result": {
        "uuid": "...",
        "order_number": "...",
        "txid": "...",
    }
}
```

## Proof

### Steps
#### In Desktop Browser
* DWeb app generates the QR code by **hep.js** in which basic parameters and extra proof parameters is encoded.
* NewPay Scan the QR code, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay confirm proof.
* NewPay jump back to DWeb app.

#### In Mobile Browser
* DWeb app generates the redirect schema by **hep.js** in which basic parameters and extra proof parameters is encoded. Users click the New-Payment button, and redirect to NewPay. If NewPay is not installed, redirect to NewPay download page.
* NewPay received the input parameters from schema, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay confirm proof.
* NewPay jump back to DWeb app.

#### In NewPay
* Users click the New-Payment button. DWeb app call the **pay** function by **hep.js** in which basic parameters and extra proof parameters is encoded.
* NewPay received the input parameters from **JS-bridge**, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay confirm proof.
* NewPay jump back to DWeb app.

### DWeb -> HEP node
see [proof_submitProof](hep-node/REST-API.md)

### DWeb -> NewPay

#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| uuid           | string | The request uuid                             |
| action | string | The value is "hep.proof.submit". |
| proof_hash      | string | The hash of proof which prefix is '0x'. |
| sign_type | string | Signature Type,aka cryptographic algorithm. |
| signature      | string | The signature by DApp owner. |

### Retrieve the profile of DApp in NewPay
Details in [dapp_profile](hep-node/REST-API.md)

### Confirm the proof
TBD

### Result return to DWeb app or server
#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| uuid           | string | The request uuid                             |
| proof_hash      | string | The hash of proof which prefix is '0x'. |


#### Example
```
{
    "status_code": 200,
    "result": {
        "uuid": "...",
        "proof_hash": "...",
    }
}
```

## Sign Message

### Steps

#### In Mobile Browser
* DWeb app generates the redirect schema by **hep.js** in which basic parameters and extra parameters. Users click any button, and redirect to NewPay. If NewPay is not installed, redirect to NewPay download page.
* NewPay received the input parameters from schema, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay sign message.
* NewPay sends signature back to the API of DWeb app.

#### In NewPay
* Users click any button. DWeb app call the **signMessage** function by **hep.js** in which basic parameters and extra parameters.
* NewPay received the input parameters from **JS-bridge**, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay sign message.
* NewPay sends signature back to the API of DWeb app.

### DWeb -> NewPay
#### Parameters
| Field | Type | Notes |
| --- | --- | --- |
| action | string | The value is "hep.sign.message"|
| message | string | The message to be signed |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature | string | signature hex string by DApp owner. |


### Sign the message
   

### NewPay return to DWeb app or server

#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| message | string |  |
| sign_type | string |  |
| signature | string |  |

#### Example
```
{
	"status_code": 200,
	"result": {
		"signature": "0x6e6577746f6e70726f6a656374",
		"sign_type": "secp256r1",
		"message": "86"
	}
}
```


## Sign Transaction

### Steps

#### In Mobile Browser
* DWeb app generates the redirect schema by **hep.js** in which basic parameters and extra parameters. Users click any button, and redirect to NewPay. If NewPay is not installed, redirect to NewPay download page.
* NewPay received the input parameters from schema, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay sign the transaction.
* NewPay sends signed data and signature back to the API of DWeb app.

#### In NewPay
* Users click any button. DWeb app call the **signTransaction** function by **hep.js** in which basic parameters and extra parameters.
* NewPay received the input parameters from **JS-bridge**, and retrieve the dapp profile from hep node and verify the DWeb app info.
* NewPay sign the transaction.
* NewPay sends signed data and signature back to the API of DWeb app.

### DWeb -> NewPay
#### Parameters

| Field | Type | Notes |
| --- | --- | --- |
| action | string | The value is "hep.sign.transaction" |
| amount | string | The amount of transaction |
| from | string | The from address of the transaction |
| to | string | The to address of the transaction |
| nonce | string | The nonce of the transaction |
| gas_price | string | The gas_price of the transaction |
| gas_limit | string | The gas_limit of the transaction |
| data | string | The data of the transaction and should be a hex string |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature | string | signature hex string by DApp owner. |


### Sign the transaction
   
### NewPay return to DWeb app or server

#### Returns

| Field | Type | Notes |
| --- | --- | --- |
| signed_transaction | string |  |

#### Example
```
{
	"status_code": 200,
	"result": {
		"signed_transaction": "0x6e6577746f6e70726f6a656374"
	}
}
```

