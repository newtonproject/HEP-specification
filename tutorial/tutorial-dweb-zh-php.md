# 网站DApp网站开发指南 - PHP版本
网站DApp提供Python、PHP、Java编程语言SDK。根据开发需要，选择不同版本的SDK。

## 安装SDK

### PHP SDK
```bash
composer require newtonproject/hep-sdk
```

## 步骤

### 生成DApp公私钥对

### 创建DApp
TBD

### 基础参数配置

* PHP
```php
require_once "vendor/autoload.php";
use HepRestApi\Scenarios\AuthHelper;
use HepRestApi\Scenarios\ProofHelper;
use HepRestApi\Api\RestApi;
use HepRestApi\Configuration;
use HepRestApi\Scenarios\Order;
use HepRestApi\Scenarios\OrderProof;
use HepRestApi\Scenarios\PayHelper;

# 配置基础参数
const HEP_HOST = "http://hep.newtonproject.dev.diynova.com"; # testnet url
const DAPP_ID = "...";
const DAPP_KEY = "...";
const DAPP_SECERT = "...";
const DAPP_PRIVATE_KEY_PATH = "/path/to/your/private-key";
const DAPP_PROTOCOL = "HEP";
const DAPP_PROTOCOL_VERSION = "1.0";
const API_VERSION = "1";
const CHAIN_ID = 1012;  # dev environment is 1002, test environment is 1002, mainnet environment is 1012

# ACTION 参数
const ACTION_LOGIN = "hep.auth.login";
const ACTION_PAY = "hep.pay.order";
const ACTION_PROOF_SUBMIT = "hep.proof.submit";

# 基础配置信息
$base_parameters = [
    'dapp_key' => DAPP_KEY,
    'protocol' => DAPP_PROTOCOL,
    'version' => DAPP_PROTOCOL_VERSION,
    'os' => 'dweb',
    'language' => 'en'
];

## 创建api client
$config = new Configuration();
$config->setHost(HEP_HOST);
$restApi = new RestApi($config);
```

* javascript 基础定义
```javascript
https://github.com/newtonproject/HEP-specification/blob/master/hep-provider/user-agent.md
```


### NewID授权

#### 初始化授权Helper
```php
$authHelper = new AuthHelper($restApi, $base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, API_VERSION, CHAIN_ID);
```

#### 生成授权签名
```php
$session_id = 'session_id': # 会话标识
$auth_response = $authHelper->generate_auth_request($session_id);
```

#### PC网站生成QRCode
```php
$qr_code_str = $authHelper->generate_qrcode_string($auth_response['auth_hash']);
```

#### 移动网站调用内置Javascript函数，<a href="https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-callback-error-messages.md#example">回调的数据结构</a>

* 获取登录参数，并且传递参数到 NewPay, 获取 profile 信息
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
                if(hep) {   // 确保 newpay 注入成功，由 NewPay 完成
                    hep.auth.login(params, function (response) {
                        if(response.status_code === 200) {
                            var profile = response.result;   // 成功的结果数据
                            let url = "/post/profile/";
                            $.post(url, profile, function (res) {
                                if(res.error_code === 1) {
                                    window.location.href = "/user"
                                }
                            }, "json")
                        } else {
                            alert(response.message);  // 错误信息
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

#### 使用NewPay完成授权，将授权数据发送到网站回调接口
callback的接受参数格式见 https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#newpay-return-to-dweb-app-or-server


#### 网站验证用户返回授权数据
```php
# 如果返回为 True， 那么用户的信息已确认
$verify_status = $authHelper->validate_auth_callback($data);

```
#### 验证成功返回 true，失败返回false

## 支付

#### 获取支付的 PayHelper

```php
$payHelper = new PayHelper($restApi, $base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, API_VERSION, CHAIN_ID);
```

#### 生成支付签名

```php
$pay_response = $payHelper->generate_pay_request(
        $order_number,
        $price_currency,
        $total_price,
        $description,
        $seller,
        $customer,
        $broker,
        $expired,
        $uuid
    );
```

#### PC网站生成QRCode

```php
$qr_code_str = $payHelper->generate_qrcode_string($pay_response['pay_hash']);
```

#### 移动网站调用内置Javascript函数

* 获取支付参数，并且传递支付参数到 NewPay, 获取支付结果信息
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

#### 使用NewPay完成支付，将支付数据发送到网站回调接口
callback的接受参数格式见 https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#return-transaction-information-to-dapp-js-or-server

#### 网站验证用户返回支付数据
```php
/**
 * $params = [
 *     "signature" => "0x...",
 *     "sign_type" => "secp256r1",
 *     "uuid" => '...',
 *     "nonce" => '...',
 *     "dapp_id" => DAPP_ID,
 *     "ts" => time(),
 *     "txid" => '0x...',
 *     "order_number" => "..."
 * ];
 */
function verify_pay($params) {
    global $payHelper;
    $is_valid = $payHelper->validate_pay_callback($params);
    if ($is_valid) {
        # 根据txid获取确认的订单信息，返回结果包括 订单唯一编号，支付接受地址，支付发送方地址，支付金额等
        $response = $payHelper->get_confirmed_transaction($params['txid']);
        return $response;
    }
}
```
#### 

## 上链

#### 获取上链的 ProofHelper

```php
$profHelper = new ProofHelper($restApi, $base_parameters, DAPP_ID, DAPP_SECERT, DAPP_PRIVATE_KEY_PATH, API_VERSION, CHAIN_ID);
```

#### 生成上链签名

```php
$order = new Order(
    'order_num',    # 订单号
    'description',  # description
    '100',          # total price
    'NEW',          # 支付单位
    'NEWID...',     # seller NewID
    'NEWID...',     # customer NewID
    'NEWID...'      # broker NewID
);  # 用 NEW 支付的交易id，由 NewPay 发送到 Dapp客户端

$order->add_order_item(
    'sub_order_num',  # 子订单编号
    1,                # 订单质量等级
    '10',             # 子订单价格
    'NEW',            # 支付单位
    'pingguo',        # 子订单名称
    'sub_order_id',   # 子订单id
    'product'         # 子订单类型 product, service
);

$order_content = new OrderProof(
    "100",      # total price
    "NEW",      # 支付单位
    'NEWID...', # submitter NewID
    "order"     # proof type
);  # 用 NEW 支付的交易id，由 NewPay 发送到 Dapp客户端

$order_content->add_order(
    $order->to_dict()
);

$content = $order_content->to_dict();
$uuid = 'session_id';
$proof_response = $profHelper->generate_proof_request($content, $uuid);
```

#### PC网站生成QRCode

```php
$qr_code_str = $profHelper->generate_qrcode_string($proof_response['proof_hash']);
```

#### 移动网站调用内置Javascript函数

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

#### 使用NewPay完成上链，将支付数据发送到网站回调接口
callback的接受参数格式见 https://github.com/newtonproject/HEP-specification/blob/master/interact-specification/DWeb-NewPay.md#result-to-dweb-app-or-server

#### 网站验证用户返回上链数据

```php
function verify_proof($data) {
    global $profHelper;
    # 验证上链信息的签名
    $is_valid = $profHelper->validate_proof_callback($data);
    if ($is_valid) {
        # 可以批量验证 proof_hash 的状态
        $proof_hashes = [$data['proof_hash']];
        $response = $profHelper->get_status_of_proofs($proof_hashes);
        # 如果只校验一条的话取第一个数组的值，返回结果包括 proof_hash, 和 proof_status
        # proof_status 为字符串类型 SUBMIT(已提交), CONFIRMED(已上链), CANCELED(已取消), PART_CANCELED(部分取消/退货)
        # 参见 https://github.com/newtonproject/HEP-specification/blob/master/hep-node/REST-API.md#proof_getproofreceipts
        return $response['receipts'][0];
    }
    return false;
}
```


