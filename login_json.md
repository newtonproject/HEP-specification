# JSON for NewPay Login

Dapps should send the following JSON to NewPay to allow NewID logins. In the case of websites, it should be encoded in the QR code.

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
