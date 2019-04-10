# Websites

## Logging in

1. User clicks *Login with NewID* on **website**
2. Website pops up a QR code with embedded JSON data
3. User scans QR code in NewPay
4. NewPay pops up dialog, asking user for permission to share information
5. User confirms
6. NewPay sends data to website (*in which format?*) and redirects user back to website
7. Website receives user information, creates account, and logs in user

## Payments

1. User clicks *Pay with NewPay* in **website**
2. Website pops up a QR code with embedded JSON data
3. User scans QR code in NewPay
4. NewPay pops up dialog, asking user to authorize payment
5. User confirms
6. NewPay transfers the payment
7. NewPay sends confirmation to website
8. NewPay redirects user back to website

## Proof of Action

1. Website requests proof of action with [newpay.web.proofOfAction.requestAccess]()
2. NewPay sends proof to website

