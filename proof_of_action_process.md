# NewPay Proof of Action Process

**Note:** 'Transaction' can refer to any action stored on NewChain, for example login, payment, etc

## Preconditions

* The Dapp or website requesting proof has [registered on Newton's platform](register_service.md)

## Native Dapp

```mermaid
sequenceDiagram;
    participant Native Dapp;
	participant HEP API;

	Native Dapp->>HEP API: Send public key + transaction hash;
	HEP API->>Native Dapp: Send proof of transaction;
```

## Website

```mermaid
sequenceDiagram;
    participant Website;
	participant NewPay;
	participant HEP API;

	Website->>HEP API: Send public key + transaction hash;
	HEP API->>Website: Send proof of transaction;
```

## Dapp-in-Dapp

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
