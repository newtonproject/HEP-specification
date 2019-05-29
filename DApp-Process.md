# DApp Process for NewPay 1.3

1. 通过NewID登录“Newton-Developer网站”

2. 申请成为DAPP生态开发者
	* DAPP生态开发者指南
	* NewPay扫描二维码登录或点击通过NewPay登录

3. 系统确认此NewID锁定了1000万NEW
	* 显示NewID关联的节点
	* TRUE：开启此NewID的DAPP权限
	* FALSE：禁用此NewID的DAPP权限
	
4. 填写DAPP申请信息
	* DAPP名称
	* DAPP图标
	* DAPP类型
		* Native
			* IOS
				> 需要Buildle ID
			* Android
				> 需要package name
		* Web
			> 需要API域名
		* H5
	* DAPP简介
	* DAPP平台
	* 开发者名称
	* 开发者网站
	* 生成DAPP运营账户地址
	* 填写NEW地址（待定）
	* 上传公钥

5. 获得NewPay-SDK并生成AppKey

6. 集成NewPay-SDK开发DAPP

7. 在“Newton-Developer网站”提交DAPP
	* Native DAPP：提交DAPP的下载页面URL
	* Web DAPP：提交DAPP的URL
	* 版本信息

8. 审核通过后上线NewPay生态商店
	* 修改DAPP信息
	* 查看DAPP运营账户地址的Balance
	* 向DAPP运营账户地址转入NEW

9. 如有发现违规内容或行为则关闭AppKey