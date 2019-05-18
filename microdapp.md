# Dapp-in-Dapp

Newton provides a Javascript API for Dapps-in-Dapps, which are mini-programs that run within the [NewPay Wallet] Dapp

## User Account Creation and Login

### Preconditions

* User has NewPay installed on their device and has set a NewID
* The Dapp or website requesting login has [registered on Newton's platform]

```mermaid
sequenceDiagram;
    participant User;
    participant Dapp;
	participant NewPay;
	participant HEP API;

	User->>NewPay: Open Dapp Store;
	User->>NewPay: Install Dapp;
	User-->>Dapp: Open Dapp
	Dapp->>NewPay: Request NewID access
	NewPay->>HEP API: Send Dapp public key;
	HEP API->>NewPay: Send Dapp info, request user access;
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
	participant HEP API;

    User->>Dapp: Click 'Pay with NewPay';
	Dapp->>NewPay: Send public key + order info;
	NewPay->>HEP API: Send public key;
	HEP API->>NewPay: Send Dapp info;
	NewPay->> User: Prompt: authorize payment;
	User->>NewPay: Type password + authorize;
	NewPay->>HEP API: Request payment;
loop FundsTransfer;
        HEP API->>HEP API: Transfer payment;
	end;
	HEP API->>NewPay: Send receipt;
	NewPay->>User: Send receipt;
	NewPay->>Dapp: Send receipt;
	NewPay-->>Dapp: Send user back;
```
