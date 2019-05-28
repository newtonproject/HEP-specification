# HEP Node API

[DWeb](#dweb)
1. [DWeb_Login](#login) 
1. [DWeb_Pay](#pay)
1. [DWeb_PlaceOrder](#placeorder)

[Native](#native)
1. [Native Login](#native_login)
1. [Native Pay](#native_pay)
1. [Native Place Order](#native_place_order)
1. [Native Notify Place Order](#native_notify_place_order)

[HEP-SDK](#hep-sdk)
1. [Hep Login](#hep_login)
1. [Hep Pay](#hep_pay)
1. [Hep Place Order](#hep_place_order)

---
<h2 id="dweb">For DWeb</h2>

1. <h5 id="login">Login</h5>

    1. url: /request/login
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | string | flag of app |
        | timestamp | long | timestamp |
        | session_id | string | session |
        | expired | long | expired time |
        | sign_r | string | sign_r |
        | sign_s | string | sign_s |
        | sign_message | string | sign_message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "login_key": "34ksdjksuiorwrkwermlwenr" // md5 or uuid
        }
    }
    ```
2. <h5 id="pay">Pay</h5>

    1. url: /request/pay
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | string | flag of app |
        | timestamp | string | timestamp |
        | expired | string | expired time |
        | order_id | string | order_id |
        | pay_type | int | 1: CNY, 2: NEW |
        | value | string | unit: ISAAC, RMB |
        | from | newid | buyer newid |
        | sign_r | string | sign_r |
        | sign_s | string | sign_s |
        | sign_message | string | sign message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "pay_key": "34ksdjksuiorwrkwermlwenr" // md5 or uuid
        }
    }
    ```
3. <h5 id="placeorder">place order</h5>

    1. url: /request/placeorder
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | string | flag of app |
        | timestamp | string | timestamp |
        | expired | string | expired time |
        | order_id | string | order_id |
        | pay_type | int | 1: CNY, 2: NEW |
        | value | string | unit: ISAAC, RMB |
        | from | newid | buyer newid |
        | sign_r | string | sign_r |
        | sign_s | string | sign_s |
        | sign_message | string | sign message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "place_order_key": "34ksdjksuiorwrkwermlwenr" // md5
        }
    }
    ```

<h2 id="native">For Native</h2>

1. <h5 id="native_login">Native Login</h5>

    1. url: /get/login
    1. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | action_id | String | login_key |
    1. return:
    ```
    {
        "error_code": 1,
        "result": {
            "app_id": "23ndksflskdjf3",
            "app_icon": "https://www.newtonproject.icon.png",
            "app_name": "NewMall",
            "session_id": "134ksdjksuiorwrkwermlwenr", // app's session id
        }
    }
    ```

2. <h5 id="native_pay">Native Pay</h5>

    1. url: /get/pay
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | action_id | String | login_key |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "app_id": "23ndksflskdjf3",
            "app_icon": "https://www.newtonproject.icon.png",
            "app_name": "NewMall",
            "order_id": "orderid....",
            "to": "NEW182ERPC3abc32112312abced12",
            "value": "10000000",
            "pay_type": 2, // 1 CNY 2 NEW
        }
    }
    ```

3. <h5 id="native_place_order">Native Place Order</h5>

    1. url: /get/placeorder
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | action_id | String | login_key |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "app_id": "23ndksflskdjf3",
            "app_icon": "https://www.newtonproject.icon.png",
            "app_name": "NewMall",
            "order_hash": "0x42b8382aadf0853b11025a4016aca61463f83ee2841b14858bbc7494bc87a8b5",
        }
    }
    ```

4. <h5 id="native_notify_place_order">Native Notify Place Order</h5>

    1. url: /notify/placeorder
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | String | app id |
        | order_hash | String | order hash |
        | sign_r | String | sign_r |
        | sign_s | String | sign_s |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {}
    }
    ```

<h2 id="hep-sdk">HEP SDK</h2>

1. <h5 id="hep_login">Hep Login</h5>

    1. url: /hep/login
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | String | app_id |
        | session_id | String | session id |
        | newid | String | user's new id |
        | cellphone | String | cellphone |
        | country_code | String | country code |
        | name | String | user's name |
        | sign_r | String | sign r |
        | sign_s | String | sign s |
        | sign_message | String | sign message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {}
    }
    ```

2. <h5 id="hep_pay">Hep Pay</h5>

    1. url: /hep/pay

    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | String | app_id |
        | txid | String | txid |
        | order_id | String | order_id |
        | sign_r | String | sign_r |
        | sign_s | String | sign_s |
        | sign_message | String | sign_message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {}
    }
    ```

3. <h5 id="hep_place_order">Hep Place Order</h5>

    1. url: /hep/placeorder
    2. params:
        | Field | Type | Desc |
        |:--:|:--:|:--:|
        | app_id | String | app_id |
        | txid | String | place order txid |
        | order_id | String | order_id |
        | order_hash | String | order_hash |
        | sign_r | String | sign_r |
        | sign_s | String | sign_s |
        | sign_message | String | sign_message |
    3. return:
    ```
    {
        "error_code": 1,
        "result": {
            "app_id": "23ndksflskdjf3",
            "app_icon": "https://www.newtonproject.icon.png",
            "app_name": "NewMall",
            "order_hash": "0x42b8382aadf0853b11025a4016aca61463f83ee2841b14858bbc7494bc87a8b5", // decode transaction and check order hash.
        }
    }
    ```