# Interact Specification reference

This specification is for the interact data format between dApp and Newton ecosystem.


## Basic of request and response

see [Common request and response](specification-common.md)

## User Authentication

### Endpoints

* NewPay iOS/Android

### Request

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| scope            | int    | profile type Id. 1: base profile including name,head,newid; 2: advance profile including cellphone  |

Example
```
{
  ...
  "scope": 1,
  ...
}
```


### Response

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| newid            | string | NewID              |
| name        | string | the user name      |
| country_code     | string | the country code   |
| cellphone        | string | the cellphone      |
| avatar      | string | the avatar of user |

Example
```
{
  "req_id": "1",
  "errors": [...],
  "result": {
    "newid": "NEWID...",
    ...
  }
}
```


## Payment

### Endpoints

* NewPay iOS/Android

### Request

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| seller     | string | The seller's NewID                                               |
| broker     | string | The broker's NewID                                               |
| customer     | string | The customer's NewID                                               |
| proof_hash     | string | The proof hash which is hex string                                               |


Example
```
{
  ...
  "seller": "NEWID...",
  "broker": "NEWID....",
  "proof_hash": "0x...",
}
```


### Response

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| customer            | string | The customer's NewID              |
| txid        | string | The transaction Id      |

Example
```
{
  "req_id": "1",
  "errors": [...],
  "result": {
    "customer": "NEWID...",
    "txid": "...",
    ...
  }
}
```

## Upload Offchain Transaction

### Endpoints

* NewPay iOS/Android

### Request

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| uploader     | string | The uploader's NewID                                               |
| proof_hash     | string | The proof hash which is hex string                                               |
                                             |

Example
```
{
  ...
  "uploader": "NEWID...",
  "proof_hash": "20190510...."
}
```


### Response

| Field            | Type   | Notes                                                      |
| ---              | ---    | ---                                                        |
| uploader     | string | The uploader's NewID                                               |
| txid        | string | The transaction Id      |

Example
```
{
  "req_id": "1",
  "errors": [...],
  "result": {
    "uploader": "NEWID...",
    "txid": "...",
    ...
  }
}
```

