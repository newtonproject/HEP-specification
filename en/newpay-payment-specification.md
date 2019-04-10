## NewPay 支付请求规则 NewPay Payment Rules：

a. 授权状态 Authorization status

NewMall 发起支付请求跳转到 NewPay 后，通过 signature 和 message 两个参数解出第三方应用的 public key 发给 API 进行授权校验 After NewMall initiates a payment request and jumps to NewPay, it solves the public key of the third-party application through the signature and message parameters and sends it to the API for authorization verification.

> 授权成功：进入支付功能开放状态校验；Authorization success: Enter the payment function open status check;

> 授权失败：提示授权失败，请用户创建或导入钱包；Authorization failed: Prompt authorization failed, please create or import a wallet;

b. 支付开放状态 Payment open status

通过 API 返回的第三方 App 信息中支付功能的开放状态进行校验 Verify the open status of the payment function in the third-party app information returned by the API

> 支付开放：进入支付确认状态；Payment open: enter the payment confirmation status;

> 支付未开放：提示支付授权失败，该 App（第三方 App）未在本平台开放支付功能；The payment is not open: the payment authorization fails, and the App (third party App) does not open the payment function on the platform;

c. 支付确认状态 Payment confirmation status

通过 signature 和 message 两个参数解析出第三方 App 的支付请求信息，在支付确认页面展示出支付信息中包含的付款地址，收款地址，支付金额等信息 The payment request information of the third-party app is parsed by the signature and message parameters, and the payment address, the payment address, the payment amount, and the like included in the payment information are displayed on the payment confirmation page.

> 确认支付：进入支付状态；Confirm payment: enter the payment status;

> 取消支付：携带未支付状态跳回第三方 App；Cancel payment: Jump back to the third-party app with the unpaid status;

d. 支付状态 Payment status

通过 signature 和 message 两个参数解析出第三方 App 的支付请求信息，发起支付 The payment request information of the third-party app is parsed by the signature and message parameters, and the payment is initiated.

> 支付成功：把支付结果回调给第三方 App；Successful payment: call back the payment result to a third-party app；

> 支付失败：提示支付异常信息；Payment failed: prompting to pay abnormal information;