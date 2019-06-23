# HEP-NODE 接入流程

## 简介
DApp 接入牛顿生态，获取联合登录，用 NEW 支付，上链数据的功能。
DAPP 服务端需要的功能有:
	1. 生成客户端需要的登录信息的参数
	2. 生成客户端需要的支付信息参数
	3. 生成客户端需要的上链信息参数
	4. 验证 NewPay 传递的用户信息
	5. 验证 NewPay 传递的支付信息
	6. 验证 NewPay 传递的上链信息
DApp 客户端需要的功能:
	1. 传递登录参数到 NewPay, 并且接受来自NewPay的用户身份信息，发送到服务端验证保存
	2. 传递支付参数到 NewPay, 并且接受来自NewPay的支付信息，发送到服务端验证保存
	3. 传递上链参数到 NewPay, 并接受来自 NewPay的上链信息，发送到服务端验证保存

## 1. 准备工作

- 使用 NewPay 创建 NewId, 作为开发者的 NewId
- 使用上述 NewId 创建节点, 以获取接入权限

## 2. 获取开发需要的应用配置

### 提交信息

1. NewId
2. DApp 类型
	```
	1. Android
		1. Android 需要提交包名(package_name)
	2. IOS
		1. IOS 需要提交Bundle_id
	3. DWeb
		1. DWeb 需要提交接收登录信息，接收支付信息，接收上链信息的 Callback Url
	```
3. 开发者的基础信息

### 获取应用配置

1. 应用 ID: dapp_id
2. 应用 Key: dapp_key
3. 应用 Secret: dapp_secret
4. 应用运营地址: deposit_contract_address
5. 应用收款地址: operation_contract_address
6. ？: deposit_wallet_address

## 3. Android 接入

### <a href="https://github.com/newtonproject/NewPaySDK-Android">Android Demo</a>

## 4. IOS 接入

### <a href="https://github.com/newtonproject/NewPaySDK-iOS">IOS Demo </a>

## 5. Web 接入

### <a href="https://github.com/newtonproject/dapp_demo"> web Demo</a>

## 6. 服务端接入

### <a href="https://github.com/newtonproject/hep-sdk"> hep sdk</a>


