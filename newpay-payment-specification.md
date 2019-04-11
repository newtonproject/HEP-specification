## NewPay Payment Rules: 

a. Authorization status

After a Dapp initiates a payment request and jumps to NewPay, it solves the public key of the third-party application through the signature and message parameters and sends it to the API for authorization verification.
```
newpay.native.payment.requestPayment(signature, message)
```

> Authorization success: Enter the payment function open status check;

> Authorization failed: Prompt authorization failed, please create or import a wallet;

b. Payment open status

Verify the open status of the payment function in the third-party app information returned by the API

> Payment open: enter the payment confirmation status;

> The payment is not open: the payment authorization fails, and the App (third party App) does not open the payment function on the platform;

c. Payment confirmation status

The payment request information of the third-party app is parsed by the signature and message parameters, and the payment address, the payment address, the payment amount, and the like included in the payment information are displayed on the payment confirmation page.

> Confirm payment: enter the payment status;

> App; Cancel payment: Jump back to the third-party app with the unpaid status;

d. Payment status

The payment request information of the third-party app is parsed by the signature and message parameters, and the payment is initiated.

> Successful payment: call back the payment result to a third-party app; 

> Payment failed: prompting to pay abnormal information;
