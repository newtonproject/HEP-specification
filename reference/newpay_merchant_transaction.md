# Transaction Process

1. Buyer [logs in] to Dapp using NewPay
2. Buyer finds interesting product and clicks 'buy now'
3. Dapp sends message to NewPay to [request payment]
4. NewPay opens and:
 > Checks Dapp is legitimate (by examining Dapp ID)
 > Confirms order with user (via PIN)
5. NewPay verifies transaction is complete (via HEP API)
6. If the recipient ID is a smart contract, send funds and execute the smart contract. Otherwise simply transfer funds
7. NewPay notifies buyer that transaction is complete
8. NewPay sends the buyer back to originating Dapp

