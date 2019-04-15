# NewPay Login Process

## Preconditions

* User has NewPay installed on their device and has set a NewID
* The Dapp or website requesting login has [registered on Newton's platform]

## The Login Process

## Native Dapp

```mermaid
sequenceDiagram;
    participant User;
    participant Native Dapp;
	participant NewPay;
	participant HEP API;
	participant NewChain;
    User->>Native Dapp: Click Login;
	Native Dapp->>NewPay: Send login request;
	NewPay->>HEP API: Send Dapp public key;
	HEP API->>NewChain: Request Dapp info;
	NewChain->>HEP API: Send Dapp info;
	HEP API->>NewPay: Send Dapp info, request user access;
	NewPay->> User: Prompt to authorize login;
	User->>NewPay: Authorize login;
	NewPay->>Native Dapp: NewID sent to Dapp;
	NewPay-->>Native Dapp: Send user back;
```

### Dapp requests user login

1. Dapp displays **Login with NewID** button
2. User taps button

* See [newpay.native.login.requestAccess]

### User authorizes Dapp on NewPay

1. Dapp sends request for login to NewPay
2. NewPay gets public key of Dapp through [signature] and [message] parameters
3. NewPay sends public key to [HEP API]
4. HEP API uses public key to request app information that was registered in database and sends that information back to NewPay
5. NewPay opens and prompts user to authorize the Dapp login based on information gathered from HEP API
6. User confirms login
7. User's NewID is sent to Dapp, with [message] and [signature]

## Website

```mermaid

sequenceDiagram;
    participant User;
    participant Website;
	participant NewPay;
	participant HEP API;
	participant NewChain;
 
    User->>Website: Click Login;
	Website->>User: Display QR code;
	User-->>NewPay: Open NewPay;
	User->>NewPay: Scan QR code;
	NewPay->>HEP API: Send website public key;
	HEP API->>NewChain: Request website info;
	NewChain->>HEP API: Send website info;
	HEP API->>NewPay: Send website info, request user access;
	NewPay->> User: Prompt to authorize login;
	User->>NewPay: Authorize login;
	NewPay->>Website: NewID sent to website;
	NewPay-->>Website: Send user back;
```

### Website requests user login

1. Website displays *Login with NewID* button
2. User clicks or taps button
3. If on mobile, user is redirected to NewPay. Otherwise, website pops up a QR code for user to scan, containing [website signature] and [message]

* See [newpay.web.login.requestAccess]

### User authorizes website on NewPay

1. NewPay gets public key of website through [signature] and [message] parameters
2. NewPay sends public key to [HEP API]
3. HEP API uses public key to request website information that was registered in database and sends that information back to NewPay
4. NewPay opens and prompts user to authorize the website login based on information gathered from HEP API
5. User confirms login
6. User's NewID is sent to website, with [message] and [signature]

## Dapp-in-Dapp

```mermaid

sequenceDiagram;
    participant User;
    participant Dapp;
	participant NewPay;
	participant HEP API;
	participant NewChain;

	User->>NewPay: Open Dapp Store;
	User->>NewPay: Install Dapp;
	User-->>Dapp: Open Dapp
	Dapp->>NewPay: Request NewID access
	NewPay->>HEP API: Send Dapp public key;
	HEP API->>NewChain: Request Dapp info;
	NewChain->>HEP API: Send Dapp info;
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

* User automatically logged into in-app Dapp
