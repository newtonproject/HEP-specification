## NewPay联合登录规则 NewPay Login Rules：

a.  前提条件： 第三方应用已完成在DappStore的注册（填写public key以及app的相应信息）Precondition: Third-party app is required to finish registration on Newton open platform (Fill in public key, app name, schema host and other app information)

b.  第三方应用在跳转NewPay时传递auth_type(授权类型), signature和message三个参数. Third-party application jumps to NewPay with three parameters which are auth_type, signature and message.

c.  NewPay通过signature和message两个参数解出第三方应用的public key. NewPay gets the public key of the third-party application through the signature and message parameters.

d.  NewPay将第三方应用的public key发送给API. Newpay sends the public key of third-party application to API.

e.  API通过接收到的public key 获得app的相应信息（查找数据库）并发送回NewPay. API uses the public key to request app information from database and send the information received back to NewPay.

> 若成功获得相应app信息，根据auth_type(授权类型)弹出加载有app相应信息的授权界面，进行步骤f. If app information is returned successfully, authorization view should be loaded with app information and a specific style that defined by auth_type.

> 若未获得相应app信息，携带错误信息跳转回第三方应用. If failed to recieve app information, app should jump back to third-party app with specific information.

f.  输入支付码 Enter Payment Password

> 授权成功（输入支付码正确）: 把API返回的第三方App数据依照如下数据结构存储到本地，用户的授权记录之后会在Newpay中的授权历史页面进行展示，携带NewID, message, signature跳回第三方应用 The third-party App data returned by the API is stored locally according to the following data structure, and the user's authorization record is displayed on the authorization history page in Newpay. Authorization Success (Enter correct password) Jump back to third-party application with NewID, message and signature as parameters.

| key | attribute | value |
| :-: | :-: | :-: | :-: |
| app_name | string | newmall |
| app_icon | string | http://api.newtonproject.beta.diynova.com/app_icon |
| payment_auth | bool | true |

> 授权失败（输入支付码失败）: 重复步骤f直到成功或取消 Authorization Fail (Enter wrong password) Repeat step f until success or cancel.

![flow_v2](/uploads/c68220d7ef5416a9f1beac490dbecdc2/flow_v2.png)

* app_info：app_name，schema_host，app_icon, etc （to be completed）
* Rules for message creation： 时间戳（timestamp）+ 随机数（nonce）
* message valid period：5 min
* timestamp unit: second (秒)

| code | message |
| :-: | :-: | :-: |
| 1001 | 授权成功 |
| 1002 | 取消授权 |
| 1003 | 授权失败 |