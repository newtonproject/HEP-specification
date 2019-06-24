The format of HEP Protocol is follows:
`
hep://:dappid/:path/?:parameters
`

* `dappid` - The DApp Id.
* `path` - The visit internal path of DApp.
* `parameters` - key-value pair, similar to HTTP GET.

# How to handle for DApp
The DApp should handle the path and parameters as input parameters.
 
## The support of NewPay

### Authentication
`
hep://:dappid/?action=hep.auth.login&auth_hash=...
`

### Payment
`
hep://:dappid/?action=hep.pay.order&pay_hash=...
`

### Proof
`
hep://:dappid/?action=hep.proof.submit&proof_hash=...
`

## Return information to Dapp 

### Return Profile to DApp
| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The profile's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| name | string | user's name |
| country_code | string | eg: 86 |
| cellphone | string | user's cellphone |
| avatar | string | user's avatar path |
| address | string | user's address |
| newid | string | user's newid |
| invite_code | string | user's invite code |

### Return transaction information to DApp
| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The profile's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| nonce | string | nonce, random string |
| dapp_id | string | dapp id |
| ts | string | timestamp |
| txid | string | transaction id |
| order_number | string | order number |

### Return proof information to DApp
| Field | Type | Desc |
|:--:|:--:|:--:|
| signature | string | The profile's signature |
| sign_type | string | secp256r1, signature method name |
| uuid | string | uuid |
| nonce | string | nonce, random string |
| dapp_id | string | dapp id |
| ts | string | timestamp |
| proof_hash | string | proof hash |



