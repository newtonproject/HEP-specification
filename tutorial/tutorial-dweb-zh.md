# 网站DApp网站开发指南
网站DApp提供Python、PHP、Java编程语言SDK。根据开发需要，选择不同版本的SDK。

## 安装SDK

### python SDK
```bash
pip install hep-rest-api
```

### PHP
```bash
TBD
```

### Java
```bash
TBD
```

## 步骤

### 生成DApp公私钥对

### 创建DApp
TBD

### 基础参数配置

* Python
```python
import sys

# 配置基础参数
HEP_HOST = "https://hep.testnet.newtonproject.org" # testnet url
DAPP_ID = "{dapp_id}"
DAPP_KEY = "{dapp_key}"
DAPP_SECERT = "{dapp_secret}"
DAPP_PRIVATE_KEY_PATH = "{dapp_private_key_path}"
DAPP_PROTOCOL = "protocol"
DAPP_PROTOCOL_VERSION = "1.0"
CHAIN_ID = 1012  # dev environment is 1002, test environment is 1002, mainnet environment is 1012

# ACTION 参数
ACTION_LOGIN = "hep.auth.login"
ACTION_PAY = "hep.pay.order"
ACTION_PROOF_SUBMIT = "hep.proof.submit"

# 基础配置信息
base_parameters = {
    'dapp_key': DAPP_KEY,
    'protocol': DAPP_PROTOCOL,
    'version': DAPP_PROTOCOL_VERSION,
    'os': sys.platform,
    'language': 'en' # Your language
}

## 创建api client
configuration = hep_rest_api.api_client.Configuration()
configuration.host = HEP_HOST
api_client = hep_rest_api.RestApi(hep_rest_api.ApiClient(configuration))
```

### NewID授权

#### 初始化授权Helper
* python
```python
auth_helper = AuthHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

#### 生成授权签名
* python
```python
session_id = '{session_id}': # 会话标识
auth_response = auth_helper.generate_auth_request(uuid=session_id)
```

#### PC网站生成QRCode
* python
```python
qr_code_str = auth_helper.generate_qrcode_string(auth_response.auth_hash)
```

#### 移动网站调用内置Javascript函数
* javascript 基础定义
```javascript
// 检查浏览器Agent。
// 如果在NewPay里面打开，调用内置Javasciprt授权函数。
// 如果在非NewPay中打开，跳转到NewPay下载。
// 函数定义
const REQUEST_PROFILE = "requestProfile"; // 请求传递登录参数到NewPay
const REQUEST_PAY = "requestPay";         // 请求传递支付参数到NewPay
const REQUEST_PROOF = "requestProof";     // 请求传递上链参数到NewPay

const ON_PROFILE = "onProfile";           // 接收来自NewPay的profile信息
const ON_PAY = "onPay";                   // 接收来自NewPay的支付信息
const ON_PROOF = "onProof";               // 接收来自NewPay的上链信息
const ON_ERROR = "onCallNewPayError";     // 接收来自NewPay的错误信息
const NEWPAY_AGENT = "NewPay";            // NewPay 的 User-Agent

```

* 注册接收 profile 的函数
```javascript
// js 与 Nativie 通信使用的 dsbridge,需要引入到项目
// https://github.com/wendux/DSBridge-Android/blob/master/app/src/main/assets/dsbridge.
// 检查 user-agent
// let isInNewPay = navigator.userAgent == "NewPay";
var dsBridge = bridge;
// 接收来自 NewPay 的 profile 信息
dsBridge.registerAsyn(ON_PROFILE, function (profile) {
    let url = "/post/profile/";
    alert(JSON.stringify(profile));
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: profile,
        success: function (res) {
            console.log(JSON.stringify(res));
            if(res.error_code == 1) {
                window.location.href = "/user"
            }
        }
    })
});
```

* 注册接收支付信息的函数
```javascript
// 接收来自 NewPay 的支付信息
dsBridge.registerAsyn(ON_PAY, function (pay_info) {
    let url = "/receive/pay/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: pay_info,
        success: function (res) {
            console.log(JSON.stringify(res));
            if(res.error_code == 1) {
                window.location.href = "/placeorder/"
            }
        }
    })
});
```

* 注册接收上链信息的函数
```javascript
// 接收来自 NewPay 的上链信息
dsBridge.registerAsyn(ON_PROOF, function (proof_info) {
    let url = "/receive/proof/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: proof_info,
        success: function (res) {
            console.log(res);
            $('#tip').val("success")
        }
    })
});
```

* 获取登录参数，并且传递参数到 NewPay
```javascript
function h5login() {
    let url = "/request/login/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        success: function (res) {
            console.log(JSON.stringify(res));
            if(res.error_code == 1) {
                let params = res.result;
                dsBridge.call(REQUEST_PROFILE, params, function (res) {
                    console.log("call success")
                })
            }
        }
    });
}
```

* 获取支付参数，并且传递支付参数到 NewPay
```javascript
function h5pay() {
    let url = "/request/pay/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: {'order_number': 'orderNumber'},
        success: function (res) {
            if(res.error_code == 1) {
                console.log(res);
                let params = res.result;
                dsBridge.call(REQUEST_PAY, params, function (res) {
                    console.log("call success")
                });
            }
        }
    });
}
```

* 获取上链的参数，并且传递上链参数到 NewPay
```javascript
function h5proof() {
    let url = "/request/proof/h5/";
    $.ajax({
        url: url,
        async: true,
        type: 'post',
        data: {'order_number': 'orderNumber'},
        success: function (res) {
            if(res.error_code == 1) {
                let params = res.result;
                dsBridge.call(REQUEST_PROOF, params, function (res) {
                    console.log("call success")
                });
            }
        }
    });
}
```

#### 使用NewPay完成授权，将授权数据发送到网站回调接口
callback的接受参数格式见 https://github.com/newtonproject/HEP-specification/blob/master/hep-protocol/README.md#return-information-to-dapp

#### 网站验证用户返回授权数据
* python
```python
# 如果返回为 True， 那么用户的信息已确认
verify_status = auth_helper.validate_auth_callback(data)


from hep_rest_api.scenarios.auth import AuthHelper
from hep_rest_api.scenarios.pay import PayHelper
from hep_rest_api.scenarios.proof import ProofHelper
```

## 获取支付的 PayHelper

```
def _get_pay_helper():
    if pay_helper:
        return pay_helper
    return PayHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

## 获取上链的 ProofHelper

```
def _get_proof_helper():
    if proof_helper:
        return proof_helper
    return ProofHelper(_get_api_client(), base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, chain_id=CHAIN_ID)
```

## 网页支付
```
def hep_pay(params):
    data = {
        'uuid': params['uuid'], # 会话标识
        'description': params['description'], # 订单描述
        'price_currency': params['price_currency'], # 支付单位 NEW. CNY
        'total_price': params['total_price'], # 支付金额，
        'order_number': params['order_number'], # 订单唯一编号
        'seller': params['celler'], # 卖家的 newid
        'customer': params['customer'], # 买家的 newid
        'broker': params['broker'],  # 商品厂家的 newid, 选填
    }
    # 生成支付的的订单hash
    pay_response = _get_pay_helper().generate_pay_request(data['order_number'], data['price_currency'], data['total_price'],
                                                          data['description'], data['seller'],
                                                          data['customer'], data['broker'], uuid=data['uuid'])
    # 根据生成的订单hash 生成支付二维码
    pay_qr_str = _get_pay_helper().generate_qrcode_string(pay_response.pay_hash)
    return pay_qr_str
```

## 网页上链
def hep_proof(content, uuid):

```
 # content dict
 # order_content = OrderProof(order_number=uuid.uuid4().hex,
 #                               price_currency="NEW",
 #                               total_price="100",
 #                               seller=seller.newid,
 #                               customer=customer.newid,
 #                               broker=broker.newid,
 #                               description="description",
 #                               chain_txid=txid)  # 用 NEW 支付的交易id，由 NewPay 发送到 Dapp客户端
 #    order_content.add_order_item(
 #        order_item_number=uuid.uuid4().hex, # 子订单编号
 #        order_item_quantity=1,			  # 订单质量等级
 #        price="10",					      # 子订单价格
 #        price_currency="NEW",               # 支付单位
 #        thing_name="pingguo",	 		      # 子订单名称
 #        thing_id=uuid.uuid4().hex,          # 子订单id
 #        thing_type='product'                # 子订单类型 product, service
 #    )
 #	  content = order_content.to_dict()
 	# 请求 hep-node 生成 上链 hash
    proof_response = _get_proof_helper().generate_proof_request(content, uuid=uuid)
    # 根据上链 hash 生成上链需要的二维码字符串
    proof_qr_str = _get_proof_helper().generate_qrcode_string(proof_response.proof_hash)
    return proof_qr_str
```


## 验证支付信息
```
def verify_pay(params):
	# 验证签名是否通过
    is_valid = _get_pay_helper().validate_pay_callback(params)
    if is_valid:
    	# 根据txid获取确认的订单信息，返回结果包括 订单唯一编号，支付接受地址，支付发送方地址，支付金额等
        response = _get_pay_helper().get_confirmed_transaction(params.get('txid'))
        return response
    return None
```

## 验证上链信息

```
def verify_proof(data):
	# 验证上链信息的签名
    is_valid = _get_proof_helper().validate_proof_callback(data)
    if is_valid:
    	# 可以批量验证 proof_hash 的状态
        proof_hashes = [data.get('proof_hash')]
        response = _get_proof_helper().get_status_of_proofs(proof_hashes)
        # 如果只校验一条的话取第一个数组的值，返回结果包括 proof_hash, 和 proof_status
        # proof_status 为字符串类型 SUBMIT(已提交), CONFIRMED(已上链), CANCELED(已取消), PART_CANCELED(部分取消/退货)
        return response.receipts[0]
    return None
```

## 获取客户端的基础参数

```
def _get_client_params(data, os=None):
    if os == "android":
        dapp_id = DAPP_ID_ANDROID
        private_key_path = DAPP_ANDROID_PRIVATE_PATH
    elif os == "ios":
        dapp_id = DAPP_ID_IOS
        private_key_path = DAPP_ID_IOS_PRIVATE_PATH
    else:
        dapp_id = DAPP_ID
        private_key_path = DAPP_PRIVATE_KEY_PATH
    params = {
        'dapp_id': dapp_id,
        'protocol': DAPP_PROTOCOL,
        'version': DAPP_PROTOCOL_VERSION,
        'ts': int(datetime.datetime.now().timestamp()),
        'nonce': uuid.uuid4().hex,
        'sign_type': "secp256r1",
    }
    data.update(params)
    # 获取签名的字符串
    message = utils.generate_signature_base_string(data, "&")
    # 使用 secp256r1 进行签名
    r, s = utils.sign_secp256r1(message, private_key_path)
    if r.startswith('0x'):
        r = r.replace('0x', '')
    if s.startswith('0x'):
        s = s.replace('0x', '')
    if len(r) < 64:
        x = 64 - len(r)
        r = '0' * x + r
    if len(s) < 64:
        y = 64 - len(s)
        s = '0' * y + s
    data['signature'] = '0x' + r + s
    return data
```

## 获取登录参数

```
def get_client_login(request):
    os = request.POST.get('os')
    if not os:
        body = json.loads(request.body)
        os = body.get('os')
    login_params = {
        'action': settings.ACTION_LOGIN,
        'scope': 2, # 1. 获取 newid, avatar, name; 2 能获取到 country_code, cellphone, address, invite_code
        'memo': 'Demo Request Login',
        'uuid': uuid.uuid4().hex
    }
    login_params = _get_client_params(login_params, os)
    return http.JsonSuccessResponse(data=login_params)
```

## 获取支付参数

```python
def get_client_pay(request):
    os = request.POST.get('os')
    if not os:
        body = json.loads(request.body)
        os = body.get('os')
    newid = request.POST.get('newid')
    if not newid:
        body = json.loads(request.body)
        newid = body.get('newid')
    pay_params = {
        'action': ACTION_PAY,
        'description': 'Pay description',
        'price_currency': 'NEW',
        'total_price': "1",
        'order_number': uuid.uuid4().hex,
        'seller': newid,
        'customer': newid,
        'broker': newid,
        'uuid': uuid.uuid4().hex
    }
    pay_params = _get_client_params(pay_params, os)
    return http.JsonSuccessResponse(data=pay_params)
```

## 获取上链参数信息

```python
def get_client_proof(request):
    try:
        os = request.POST.get('os')
        if not os:
            body = json.loads(request.body)
            os = body.get('os')
        newid = request.POST.get('newid')
        if not newid:
            body = json.loads(request.body)
            newid = body.get('newid')
        # txid for chaid_txid parameters.
        pay_model = PayModel.objects.last()
        txid = pay_model.txid
        proof_session_id = uuid.uuid4().hex
        order_content = OrderProof(order_number=uuid.uuid4().hex,
                                   price_currency="NEW",
                                   total_price="100",
                                   seller=newid,
                                   customer=newid,
                                   broker=newid,
                                   description="description",
                                   chain_txid=txid)
        order_content.add_order_item(
            order_item_number=uuid.uuid4().hex,
            order_item_quantity=1,
            price="10",
            price_currency="NEW",
            thing_name="pingguo",
            thing_id=uuid.uuid4().hex,
            thing_type='product'
        )
        proof_hash = services.get_proof_hash(order_content.to_dict(), proof_session_id)
        client_params = {
            'action': settings.ACTION_PROOF_SUBMIT,
            'proof_hash': proof_hash,
            'uuid': proof_session_id
        }
        client_params = _get_client_params(client_params, os)
        return http.JsonSuccessResponse(data=client_params)
    except Exception as e:
        print(str(e))
        return http.JsonErrorResponse(error_message=str(e))
```
