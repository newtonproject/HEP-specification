# NewPay Proof of Action Process

**Note:** 'Transaction' can refer to any action stored on NewChain, for example login, payment, etc

## Preconditions

* The Dapp or website requesting proof has [registered on Newton's platform](register_service.md)

## Native Dapp

```mermaid
sequenceDiagram;
    participant Native Dapp;
	participant NewPay;
	participant HEP API;

	Native Dapp->>NewPay: Send public key + transaction hash;
	NewPay->>HEP API: Send public key + transaction hash;
loop loop;
        HEP API->>HEP API: Check key;
		HEP API->>HEP API: Get transaction data;
	end;
	HEP API->>NewPay: Send proof of transaction;
	NewPay->>Native Dapp: Send proof of transaction;
```

## Website

```mermaid
sequenceDiagram;
    participant Website;
	participant NewPay;
	participant HEP API;

	Website->>NewPay: Send public key + transaction hash;
	NewPay->>HEP API: Send public key + transaction hash;
loop loop;
        HEP API->>HEP API: Check key;
		HEP API->>HEP API: Get transaction data;
	end;
	HEP API->>NewPay: Send proof of transaction;
	NewPay->>Website: Send proof of transaction;
```

## Dapp-in-Dapp

