# QR Code for NewPay Login

QR code should encode the following in JSON:

| Field            | Type   | Notes                         |
| ---              | ---    | ---                           |
| Nonce            | int    |                               |
| Website URL      | string |                               |
| Callback URL     | string |                               |
| Dapp ID          | string |                               |
| Summary          | string |                               |
| Icon URL         | string | Please see icon specification |
| Protocol version | int    |                               |
| Signature        | string | Should be a hexed hash        |
