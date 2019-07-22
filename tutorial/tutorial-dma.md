# HEP-NODE Tutorial

## Introducation
```
DApp acquires login, NEW payment and proof submission from Newton Ecosystem.
DAPP Server-side Requirement:
	1. Provide login parameters for the native app
	2. Provide payment parameters for the native app
	3. Provide proof parameters for the native app
	4. Verify profile information from NewPay 
	5. Verify payment information from NewPay
	6. Verify proof submission information from NewPay
DApp Native-side Requirement:
	1. Pass login parameters to NewPay, receive profile infomation from NewPay and send it to server for verification.
	2. Pass payment parameters to NewPay, receive payment infomation from NewPay and send it to server for verification.
	3. Pass proof parameters to NewPay, receive proof infomation from NewPay and send it to server for verification.
```
## 1. Preparation

- Use NewPay to create developer NewID
- Use the NewID to create a community node

## 2. Acquire DApp configuration for development

### Submit Information

1. NewId
2. DApp Types
	```
	1. Android
		1. Android package name is required(package_name)
	2. IOS
		1. IOS bundle id is required
	3. DWeb
		1. DWeb callback urls are required for login, payment and proof submission.
	```
3. Developer Basic Information

### Acquire DApp Information

1. DApp ID: dapp_id
2. DApp Key: dapp_key
3. DApp Secret: dapp_secret
4. DApp Deposit Contract Address: deposit_contract_address    
5. DApp Deposit Wallet address: deposit_wallet_address        
6. DApp Operation Contract Address: operation_contract_address  

## 3. Android 

### <a href="https://github.com/newtonproject/NewPaySDK-Android">Android Demo</a>

## 4. IOS 

### <a href="https://github.com/newtonproject/NewPaySDK-iOS">IOS Demo </a>

## 5. Web 

### <a href="https://github.com/newtonproject/dapp_demo"> web Demo</a>

## 6. Server 

### <a href="https://github.com/newtonproject/hep-sdk"> hep sdk</a>

## 7. Native parameters, python verification

### <a href="https://github.com/newtonproject/HEP-specification/blob/master/tutorial/README-HEP-REST-API.md">客户端参数，验证</a>


