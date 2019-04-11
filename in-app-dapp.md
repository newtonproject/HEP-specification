# Native Dapps

## Logging in

1. User clicks *Login with NewID* in **Dapp**
2. Dapp requests user information with [newpay.native.login.requestAccess]()
3. NewPay opens and pops up dialog, asking user for permission to share information
4. User confirms
5. NewPay sends data to Dapp (*in which format?*) and redirects user back to Dapp
6. Dapp receives user information, creates account, and logs in user

## Payments

1. User clicks *Pay with NewPay* in **Dapp**
2. Dapp requests payment with [newpay.native.payment.requestPayment]()
3. NewPay opens and prompts user to pay
4. User confirms
5. NewPay transfers the payment
6. NewPay sends confirmation to Dapp
7. NewPay redirects user back to Dapp

## Proof of Action

1. Dapp requests proof of action with [newpay.native.proofOfAction.requestAccess]()
2. NewPay sends proof to Dapp

