# DMA - NewPay Interaction Specification

## Basic Parameters
### Request

| Field | Type | Notes |
| --- | --- | --- |
| dapp_id | string | Decentralized Application Id |
| protocol | string | protocol name. The default is "HEP". |
| version | string    | protocol version. The example is "1.0". |
| environment | int | Environment of NewPay. 1 for release, 2 for testnet, 3 for dev |


## Authentication

*** 

### Union Login

#### EndPoints
`NewPay`


### Steps

1. DMA app calls the **login** function in NewPaySDK with basic parameters and extra parameters, such as scope, memo, sign_type and signature.
2. NewPay sends dapp_profile to verify DH5 app info.
3. NewPay authorizes Login.
4. NewPay sends profile back to DMA app.

### login

#### Parameters
| Field | Type | Notes |
| --- | --- | --- |
| scope | int | profile type Id. 1: base profile including name,head,newid; 2: advance profile including cellphone  |
| memo | string | Login Memo,optional |
| sign_type | string | Signature Type,aka cryptographic algorithm |
| signature | string | signature hex string by application owner, format: "0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138". |
| success | function | callback function for successfully passing parameters to NewPay |
| failure | function | callback function for failling to passing parameters to NewPay |



#### Example Parameters
TBD

#### Returns

success / failure

#### Example


### dapp_profile
Verify the dapp information
Details in [REST-API]
   

### Profile Infomation return to DMA app

| Field | Type | Notes |
| --- | --- | --- |
| user_name | string | Name |
| newid | string | newid |
| invite_code | string | invite code |
| address | string | address |
| user_avatar | string | user avatar |
| country_code | string | Country code (scope is 2) |
| cellphone | string | Cellphone (scope is 2) |
| error_code | string | errcode |
| error_message | string | errorMessage |


*** 


## Payment

### Steps

1. DMA app calls the **pay** function in NewPaySDK with basic parameters and extra parameters, such as description, price_currency, total_price, order_number, seller, customer, broker, signature.
2. NewPay sends dapp_profile to verify DH5 app info.
3. NewPay authorizes payment.
4. NewPay jump back to DMA app.

### pay

#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| description      | string | The order description |
| price_currency   | string | symbol of fiat or digital token, such as USD, RMB, NEW,BTC,ETH
| total_price      | string | amount of fiat or digital token, unit is the minimum unit of given fiat or digital token |
| order_number     | string | The order number. |
| seller           | string | The seller's NewID  |
| customer         | string | The customer's NewID |
| broker           | string | The broker's NewID. optional.  |
| signature        | string | signature hex string by application owner, format: "secp256r1:0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138". |
| success | function | callback function for successfully passing parameters to NewPay |
| failure | function | callback function for failling to passing parameters to NewPay |

#### Example Parameters
TBD

#### Returns

success/ failure

#### Example
  

### dapp_profile
Verify the dapp information
Details in [REST-API]

### Infomation return to DMA app

| Field | Type | Notes |
| --- | --- | --- |
| error_code | string | errcode |
| error_message | string | errorMessage |


*** 

## Proof

### Steps

1. DMA app calls the **submitProof** function in NewPaySDK with basic parameters and extra parameters, such as description, price_currency, total_price, order_number, order_items, seller, customer, broker, signature.
2. NewPay sends dapp_profile to verify DH5 app info.
3. NewPay authorizes submitProof.
4. NewPay jump back to DMA app.

### submitProof

### proof_submitProof


#### Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| content      | json | The content of proof |
| signature      | string | The signature by proof submitter |

##### Order Proof Parameters
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| type           | string | The value is "order"                             |
| description      | string | The order description |
| price_currency   | string | symbol of fiat or digital token, such as USD, RMB, NEW,BTC,ETH
| total_price      | string | amount of fiat or digital token, unit is the minimum unit of given fiat or digital token |
| order_number     | string | The order number. |
| order_items      | json | The list of order items, see [schema/order-item.json]. |
| seller           | string | The seller's NewID  |
| customer         | string | The customer's NewID |
| broker           | string | The broker's NewID. optional.  |

#### Example Parameters
TBD

#### Returns
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| proof_hash           | string | The proof hash                             |

#### Example
```
// Request
curl -X POST --data '{}'


// Response
{
    "req_id": "...",
    "result": {
        "proof_hash": "...."
    }
}
```

## NewID

### newid_profile

#### Path
`
/newid/[newid]/
`

#### Parameters
none

#### Example Parameters
TBD

#### Returns
| Field            | Type   | Notes                                      |
| ---              | ---    | ---                                        |
| public_key           | string | The hex string of public key                             |

#### Example
```
// Request
curl -X POST --data '{}'


// Response
{
    "req_id": "...",
    "result": {
        "public_key": "...."
    }
}
```

