# DApp-Process-Public

#### Welcome to Newton DApp Ecosystem

* The DApp develeper is an important group of Newton Community. Developers can join mining by providing variety of services in Newton Community Economy.

#### 欢迎加入牛顿DApp生态

* DApp开发者是牛顿社群的重要组成部分，并能通过提供DApp服务参与到牛顿生态的挖矿中。
* 所有用户在DApp中的行为进行上链确权后都会获得社群激励。
* 牛顿为DApp开发者提供了完整的SDK、技术文档、和管理后台。

#### DApp入驻流程

1. 牛顿社群节点
    * 获得DApp开发者权限需要成为牛顿社群节点，即锁定1000万NEW

2. NewID登录
    * 使用成为牛顿社群节点的NewID扫码登录

3. 填写DApp/DWeb的申请信息和开发者的联系信息
	* 牛顿DApp生态目前支持iOS、Android、Web平台
	    * iOS平台的DApp需要提供Bundle ID
	    * Android平台的DApp需要提供Package Name
	    * Web平台的DWeb需要提供auth_login_callback URL、pay_order_callback URL、proof_submit_callback URL

4. 上传公钥
	* 生成DApp的公钥-示例代码

    ```java
    @Test
        public void generateKeyTest() throws Exception {
            byte[] bytes = new byte[32];
            new SecureRandom().nextBytes(bytes);
            ECKeyPair keyPair = ECKeyPair.create(bytes);
            System.out.println("priv:" + keyPair.getPrivateKey().toString(16));
            System.out.println("pub:" + keyPair.getPublicKey().toString(16));
        }
        
    priv: 30052c79d52897c38e129ebec2f3e00b4e0ba9ecb4cb7e3dfd53cf9bb50dd672
    pub: 7fba91006d0899775c2e019746480030072316f26964d302f6dbf44b7793e880c4233806097502a6f261186dcd8e1367c9e3bc41c484bdeb076c91194b801db5
    ```

5. NewPay-SDK
	* 在应用配置中获取AppID、AppKey、AppSecret
	* 在应用配置中下载NewPay-SDK并查看技术文档

6. 提交DApp
	* 开发完成后，请提供DApp的下载链接/DWeb的访问链接

7. 运营税收
    * 填写NEW的收款地址
	* 查看DAPP运营账户地址和余额
	* 向DAPP运营账户地址转入NEW

8. 审核关停
	* 如有发现违规内容或行为则关闭AppKey