# 基础架构

<img src="https://gitlab.newtonproject.org/xiawu/newton-documentation/uploads/012152af18aafb9f607fcb9967ccbcc4/14941558591441_.pic_hd.jpg"/>

1. NewChain  NewNet  NewIoT  NewAI
> Newton底层技术支持

2. 基础合约 + MarketPlace(提供合约模板)

3. Proof Engine + hep-node
> Proof Engine: 用于查询工作量信息，提交数据信息（基于Proof的Blockchain）<br/>
> Hep-node: 提供查询接口服务 第三方通过hep-node，去 ProofEngine 实现所需要的功能

4. 行业SDK, 基础服务SDK, Oracle服务
> 行业SDK: TBD<br/>
> 基础服务SDK: 联合登录，数据上链，New 支付（包括Native, Web, H5）

# Dapp 分类
1. Native Dapp
> 运行在手机端的app，包括Native和js 
2. Web Dapp 
> 在网站中的app，需要接入提供的 hep.js,实现登录，提交数据等功能 
3. NewDapp 
> 运行在NewVM

## Dapp 接入流程

### 公共部分
1. 使用NewID登录 developer（使用NewId登录） 网站，填写DApp信息
>1. 申请的Dapp 类型（web，native(android/ios), h5）
>2. Icon
>3. Native的话需要 包名或者Bundle
>4. 网站的话需要 api 域名
>5. 应用名称
>6. 填写公钥信息或者developer自动生成，给三方app私钥
>7. 节点名称

2. 获取信息如下:
>1. AppId
>2. ApiKey, ApiSecret(可动态替换)
>3. 对应平台的SDK。

### web 部分流程
1. 获取js的sdk（Hep.js）填写AppId，
2. 实现登录，支付，上链的回调接口，正在扫描中...
3. 需要为每笔商品生成交易编号

#### Hep protocol
1. 需要填入AppId,(需要时间戳，标记过期)
2. Hep://AppId/ActionType/Params
> AppId 用于网址寻址，加密传输
> ActionType:Login, Pay, PlaceOrder...

#### Hep provider
1. 登录将newid 信息传递到H5
2. 调起支付
3. 上链

#### Hep Node

#### Demo 网站
##### 登录
1. 点击使用 NewID 登录，通过 Hep.js 生成登录的QRCode（Hep://324/0）
2. NewPay 扫描到信息，根据AppId和ActionType，先去 Hep-node 验证App信息，验证合法之后, 显示Dapp信息，调取授权页面，签名信息，发送到 Hep-node, Hep-node 查询ProofEngine 拿到登录需要的信息，发送到dapp的api接口（Hep.js处理，同时记录登录信息），Hep.js 拿到数据自己Decode验证信息，确认数据的合法性，通知网站前台页面登录成功。

##### 支付
1. 点击使用 New 支付，通过 Hep.js 生成支付的QRCode（Hep://324/1/100&address）
2. NewPay 扫描到信息，验证App信息，调取授权，支付，获取txid，将txid，发送到Hep-node，同时记录交易信息，然后发送txid到三方网站的Hep.js, hep.js 去链上查询交易信息，确认后显示支付成功页面

##### 上链
1. 点击数据上链，生成QRCode（Hep://324/2/(三方app的交易编号)）
2. NewPay 扫描信息，验证App信息，授权，查询是否有上链资格，根据订单编号信息，获取交易信息，交易上链，发送txid到Hep-node和rpc，hep-node 将上链信息提交到Hep.js 自行处理数据信息，显示成功页面

### 节点选择
1. 根据参加节点锁定的new的数量决定三方DApp的权益
> eg: 锁定 1000w New, （计算NewMall大致获得的NF，和交易额）设置每天获取NF的帽，比如 10W nf，如果超过10w nf数额，那么改Dapp就没有上链的能力，需要等到第二天，刷新数据（类似每月的定额发票），
> 关于收税：一方面从该Dapp的NF中扣点收税，进入NewTax，比如今天NewMall今天产生了10W NF，那么有30% NF 产生的new进入 newtax

#### NewCard 添加（开门，交互逻辑）
