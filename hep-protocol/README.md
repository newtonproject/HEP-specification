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
