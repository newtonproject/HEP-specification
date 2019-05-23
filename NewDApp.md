# NewDApp

Newton provides a Javascript API for NewDApps.

## User Account Creation and Login

### Preconditions

* User has NewPay installed on their device and has set a NewID
* The Dapp or website requesting login has [registered on Newton's platform]

```mermaid
sequenceDiagram;
    participant User;
    participant Dapp;
	participant NewPay;
	participant HEP Node;

	User->>NewPay: Open Dapp Store;
	User->>NewPay: Install Dapp;
	User-->>Dapp: Open Dapp
	Dapp->>NewPay: Request NewID access
	NewPay->>HEP Node: Send Dapp public key;
	HEP Node->>NewPay: Send Dapp info, request user access;
	NewPay->>User: Pop-up requesting NewID
	User->>NewPay: Authorize access
	NewPay->>Dapp: NewID sent to Dapp;
	NewPay-->>Dapp: Send user back;
```

### User installs Dapp

1. User opens Dapp Store in NewPay
2. User installs Dapp
3. User's NewID automatically shared upon install (**correct**?)

### User opens Dapp in NewPay

* User automatically logged into Dapp-in-Dapp

## Payments

```mermaid

sequenceDiagram;
    participant User;
    participant Dapp;
	participant NewPay;
	participant HEP Node;

    User->>Dapp: Click 'Pay with NewPay';
	Dapp->>NewPay: Send public key + order info;
	NewPay->>HEP Node: Send public key;
	HEP Node->>NewPay: Send Dapp info;
	NewPay->> User: Prompt: authorize payment;
	User->>NewPay: Type password + authorize;
	NewPay->>HEP Node: Request payment;
loop FundsTransfer;
        HEP Node->>HEP Node: Transfer payment;
	end;
	HEP Node->>NewPay: Send receipt;
	NewPay->>User: Send receipt;
	NewPay->>Dapp: Send receipt;
	NewPay-->>Dapp: Send user back;
```
