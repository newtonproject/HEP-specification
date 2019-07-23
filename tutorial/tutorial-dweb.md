# DWeb Tutorial

HEP provides Python、PHP、Java SDK. 

## SDK Installation

### python SDK
```bash
pip install hep-rest-api
```

### PHP

[PHP Tutorial](tutorial\tutorial-dweb-zh-php.md)

### Java
```bash
TBD
```

## Steps

### Generating Public-Private Key Pair

### Create DApp
TBD

### Basic Parameters

* Python
```python
import sys

# Basic Parameters
HEP_HOST = "https://hep.testnet.newtonproject.org" # testnet url
DAPP_ID = "{dapp_id}"
DAPP_KEY = "{dapp_key}"
DAPP_SECERT = "{dapp_secret}"
DAPP_PRIVATE_KEY_PATH = "{dapp_private_key_path}"
DAPP_PROTOCOL = "HEP"
DAPP_PROTOCOL_VERSION = "1.0"
CHAIN_ID = 1012  # dev environment is 1002, test environment is 1002, mainnet environment is 1012

# ACTION Parameters
ACTION_LOGIN = "hep.auth.login"
ACTION_PAY = "hep.pay.order"
ACTION_PROOF_SUBMIT = "hep.proof.submit"

# Basic Config Info
base_parameters = {
    'dapp_key': DAPP_KEY,
    'protocol': DAPP_PROTOCOL,
    'version': DAPP_PROTOCOL_VERSION,
    'os': sys.platform,
    'language': 'en' # Your language
}

## Create API client
configuration = hep_rest_api.api_client.Configuration()
configuration.host = HEP_HOST
api_client = hep_rest_api.RestApi(hep_rest_api.ApiClient(configuration))
```

* javascript defination
```javascript
https://github.com/newtonproject/HEP-specification/blob/master/hep-provider/user-agent.md
```


### NewID Authorization

#### Initialize Authorization Helper
* python
```python
auth_helper = AuthHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

#### Generate Authorization Signature
* python
```python
session_id = '{session_id}': # session identifier
auth_response = auth_helper.generate_auth_request(uuid=session_id)
```

#### Website Generate QRCode
* python
```python
qr_code_str = auth_helper.generate_qrcode_string(auth_response.auth_hash)
```

#### Mobile webistes calls in-build Javascript function，<a href="https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-callback-error-messages.md#example">Callback Data Format</a>

* Acquire login parameters，pass them to NewPay and get profile information back
```javascript
function h5login() {
    let url = "/request/login/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        success: function (res) {
            if(res.error_code === 1) {
                let params = res.result;
                if(hep) {   // Make sure the object is already initialized which is injected by NewPay
                    hep.auth.login(params, function (response) {
                        if(response.status_code === 200) {
                            var profile = response.result;   // Success return
                            let url = "/post/profile/";
                            $.post(url, profile, function (res) {
                                if(res.error_code === 1) {
                                    window.location.href = "/user"
                                }
                            }, "json")
                        } else {
                            alert(response.message);  // Failure information
                        }
                    });
                }else {
                    alert("hep is not inject");
                }
            }
        }
    });
}
```

#### Authorize with NewPay and send the authorization data back to website callback interface

Check callback parameter format in: https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#newpay-return-to-dweb-app-or-server


#### Website verify the authorization data 

* python
```python

# If return is true, then users' info is verified
verify_status = auth_helper.validate_auth_callback(data)


from hep_rest_api.scenarios.auth import AuthHelper
from hep_rest_api.scenarios.pay import PayHelper
from hep_rest_api.scenarios.proof import ProofHelper
```
#### It's a success if http code is 200，otherwise it's a failure.

## Payment

#### Acquire PayHelper

```python
def _get_pay_helper():
    if pay_helper:
        return pay_helper
    return PayHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

#### Generate Payment Signature
* python
```python
data = {'orderInformation'}
pay_response = pay_helper.generate_pay_request(data)
```

#### Website Generate QRCode
* python
```python
qr_code_str = pay_helper.generate_qrcode_string(pay_helper.pay_hash)
```

#### Mobile webistes calls in-build Javascript function

* Acquire payment parameters，send them to NewPay and get payment result information.
```javascript
function h5pay() {
    let url = "/request/pay/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: {'order_number': 'orderNumber'},
        success: function (res) {
            if(res.error_code === 1) {
                if(hep) {
                    let params = res.result;
                    hep.pay.order(params, function (response) {
                        if(response.status_code === 200) {
                            var pay_info = response.result;
                            let url = "/receive/pay/";
                            $.ajax({
                                url: url,
                                async: true,
                                type: 'post',
                                data: pay_info,
                                success: function (res) {
                                    if(res.error_code == 1) {
                                        window.location.href = "/placeorder/"
                                    }
                                }
                            });
                        } else {
                            alert(response.message);
                        }
                    })
                } else {
                    alert("hep is not inject");
                }
            }
        }
    });
}

```

#### Use NewPay to finish the payment and send payment data to website callback interface
Check callback parameters format in: https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#return-transaction-information-to-dapp-js-or-server

#### Website verifys payment data sent from users
```python
def verify_pay(params):
    # Check the signature
    is_valid = _get_pay_helper().validate_pay_callback(params)
    if is_valid:
        # Based on txid to acquire order information. The return includes order uuid, from address, to address, amount and so on.
        response = _get_pay_helper().get_confirmed_transaction(params.get('txid'))
        # See details in: https://github.com/newtonproject/HEP-specification/blob/master/hep-protocol/README.md#return-transaction-information-to-dapp
        return response
    return None
```
#### It's a success if http code is 200，otherwise it's a failure.

## Submit Proof

#### Acquire ProofHelper

```python
def _get_proof_helper():
    if proof_helper:
        return proof_helper
    return ProofHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

#### Generate Proof submit Signature
* python
```python
content = {'proofinformation'}
uuid = {'session_id'}
proof_response = proof_helper.generate_proof_request(content.to_dict(), uuid)
```

#### Website Generate QRCode
* python
```python
qr_code_str = proof_helper.generate_qrcode_string(proof_response.proof_hash)
```

#### Mobile webistes calls in-build Javascript function

* Acquire proof parameters and them to NewPay
```javascript
function h5proof() {
    let url = "/request/proof/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: {'order_number': 'orderNumber'},
        success: function (res) {
            if(res.error_code === 1) {
                if(hep) {
                    let params = res.result;
                    hep.proof.submit(params, function(response) {
                        if(response.status_code === 200) {
                            var proof_info = response.result;
                            let url = "/receive/proof/";
                            $.ajax({
                                url: url,
                                async: true,
                                type: 'post',
                                data: proof_info,
                                success: function (res) {
                                    $('#tip').val("success")
                                }
                            })
                        } else {
                            alert(response.message); 
                        }
                    });
                } else {
                    alert("hep is not inject");
                }
            }
        }
    });
}

```

#### Submit proof by NewPay and send the data to website callback interface
Check callback data format in: https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#result-to-dweb-app-or-server

#### Website verify proof data sent from users
```python
def verify_proof(data):
    # Verify proof signature
    is_valid = _get_proof_helper().validate_proof_callback(data)
    if is_valid:
        # Can do batch verification of the status of proof_hash
        proof_hashes = [data.get('proof_hash')]
        response = _get_proof_helper().get_status_of_proofs(proof_hashes)
        # If only one proof is required to verify, take the first item in the array. The returns include proof_hash and proof_status
        # proof_status data type: string. SUBMIT(submitted), CONFIRMED(on blockchain), CANCELED(canceled), PART_CANCELED(partly canceled/refund)
        # See details in https://github.com/newtonproject/HEP-specification/blob/master/hep-node/REST-API.md#proof_getproofreceipts
        return response.receipts[0]
    return None
```

#### It's a success if http code is 200，otherwise it's a failure.

