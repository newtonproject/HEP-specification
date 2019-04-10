## NewPay Login Rules:

a. Precondition: Third-party app is required to finish registration on Newton open platform (Fill in public key, app name, schema host and other app information)

b. Third-party application jumps to NewPay with three parameters which are auth_type, signature and message.
newpay.native.login.requestAccess(```auth_type```, ```signature```, ```message```)
What are valid ```auth_type```s?

c. NewPay gets the public key of the third-party application through the signature and message parameters.

d. NewPay sends the public key of third-party application to API.

e. API uses the public key to request app information from database and send the information received back to NewPay.

> If app information is returned successfully, authorization view should be loaded with app information and a specific style that defined by auth_type.

> If failed to recieve app information, app should jump back to third-party app with specific information.

f. Enter Payment Password

> The third-party App data returned by the API is stored locally according to the following data structure, and the user's authorization record is displayed on the authorization history page in Newpay. Authorization Success (Enter correct password) Jump back to third-party application with NewID, message and signature as parameters.

| key | attribute | value |
| :-: | :-: | :-: | :-: |
| app_name | string | newmall |
| app_icon | string | http://api.newtonproject.beta.diynova.com/app_icon |
| payment_auth | bool | true |

> Authorization Fail (Enter wrong password) Repeat step f until success or cancel.

![flow_v2](/uploads/c68220d7ef5416a9f1beac490dbecdc2/flow_v2.png)

* app_info:app_name，schema_host，app_icon, etc (to be completed)
* Rules for message creation: timestamp and nonce
* message valid period: 5 min
* timestamp unit: second (秒)

| code | message |
| :-: | :-: | :-: |
| 1001 | 授权成功 |
| 1002 | 取消授权 |
| 1003 | 授权失败 |
