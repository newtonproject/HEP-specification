# HEP API reference

## Basic of request and response

see [Common request and response](api-common.md)

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
| seller     | string | NewID of seller                                               |
| order_number     | string | The order number                                               |
| description     | string | The order description                                               |
| order_items     | list | The list of order items, see [schema/order-item.json]                                               |
| price_currency     | string | symbol of fiat or digital token, such as USD, RMB, NEW,BTC,ETH                                               |
| total_price     | string | amount of fiat or digital token, unit is the minimum unit of given fiat or digital token                                               |

Example
```
{
  ...
  "seller": "NEWID...",
  "order_number": "20190510....",
  "description": "....",
  "order_items": [
    {
      "order_item_number": "...",
      "order_item_quantity": 1,
      "ordered_item": {...},
    }
  ],
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
