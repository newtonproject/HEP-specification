# NewPay Login Process

## Preconditions

* User has NewPay installed on their device and has set a NewID
* The Dapp requesting login has [registered on Newton's platform]

## The Login Process

{% tabs first="Native", second="Web", third="In-app Dapp" %}

{% content "first" %}
### Dapp requests user login

1. Dapp displays **Login with NewID** button
2. User taps button

* See [newpay.native.login.requestAccess]

### User authorizes Dapp on NewPay

1. NewPay gets public key of Dapp through [signature] and [message] parameters
2. NewPay sends public key to [HEP API]
3. HEP API uses public key to request app information that was registered in database and sends that information back to NewPay
4. NewPay opens and prompts user to authorize the Dapp login based on information gathered from HEP API
5. User confirms login
6. User's NewID is sent to Dapp, with [message] and [signature]

{% content "second" %}
Coming soon...

{% content "third" %}
Coming soon...

{% endtabs %}
----


## NewPay Login Rules:

a. Precondition: Third-party app is required to finish registration on Newton open platform (Fill in public key, app name, schema host and other app information)

b. Third-party application jumps to NewPay with three parameters which are auth_type, signature and message.

> newpay.native.login.requestAccess(```auth_type```, ```signature```, ```message```)
> What are valid ```auth_type```s?
> Message is json object?

c. NewPay gets the public key of the third-party application through the signature and message parameters.

d. NewPay sends the public key of third-party application to API.

e. API uses the public key to request app information from database and send the information received back to NewPay.

> If app information is returned successfully, authorization view should be loaded with app information and a specific style that defined by auth_type.

> If failed to recieve app information, app should jump back to third-party app with specific information.
> **Error codes?**

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
* timestamp unit: second

| code | message |
| :-: | :-: | :-: |
| 1001 | 授权成功 |
| 1002 | 取消授权 |
| 1003 | 授权失败 |
