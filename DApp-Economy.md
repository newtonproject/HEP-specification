# DApp Economy for NewPay 1.3

---

# NewPay 1.3 DApp 经济模型 

### NewTax：
* 牛顿DApp生态经济所产生的NEW收入都将流入NewTax
* NewTax的主要用途：Dapp开发商、基金会运营、生态基金
* 部分的NEW将会在未来释放到**NewPool**中，为社群经济提供激励

### 在DAPP产生的用户交易订单：
* 法币通过DAPP支付渠道进入开发者账户
* 通过NewID关联的NEW地址进入一个管理地址，通过智能合约**一个月后**发放给开发者账户
* 对于游戏类DAPP，用户产生的交易订单将被抽取**10%**的手续费

### 用户在DAPP中将交易订单提交上链获得NF：
* 按照**订单上链时间**计算NF，按照**订单上链时间**计算NF系数
* 法币基准比例：**1元人民币 = 1 NF**
* 外币比例：按照**openexchangerates.org的昨日均价**换算成人民币，按照法币基准比例计算
* NEW比例：按照**CoinMarketCap的昨日均价**换算成人民币，按法币比例计算

### 从DAPP运营账户中收取NewTax：
* 基于DAPP的每笔**上链**营业总额收取
	* 收入为**法币**的部分基于**法币等值的NEW**按费率收取
	* 收入为**NEW**的部分按费率收取**NEW**

### DAPP的NewTax费率：
* 游戏类DAPP：**3%**
* 零售类DAPP：**3%**
* 其他类DAPP：**3%**

### DAPP产生退单退税：
* DAPP产生退款将按照订单信息将对应NewTax退回至DAPP运营账户

### DAPP每日提交NF上限规则：
* **锁定1000万NEW** 限额提交 **25万NF**
* 按锁定NEW的数额等比例调整NF提交限额

### DAPP运营账户NEW：
* 开发者向DAPP运营账户转账
* NEW不足则关闭AppKey下架DAPP
