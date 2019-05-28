### 登录流程图
```mermaid
sequenceDiagram;
    participant User;
    participant DWEB;
	participant NewPay;
	participant HEP Node;
    User->>DWEB: Click Login;
    DWEB->>NewPay: QRCode(AppId,LoginAction,UUID)
    NewPay->>HEP Node:Query AppId
    HEP Node->> NewPay: DWEB info, loginUrl;
    NewPay->>DWEB:Profile Info, Signature;
    DWEB->>User:verify signature and Login success;
```

### 支付流程图
```mermaid
sequenceDiagram;
    participant User;
    participant DWEB;
	participant NewPay;
	participant HEP Node;
	User->>DWEB:Click pay with NEW;
	DWEB->>NewPay:QRCode(AppId, OrderHash);
	DWEB->>HEP Node:AppId, OrderValue;
	NewPay->>HEP Node:Query Order by AppId, OrderHash;
	HEP Node->>NewPay: OrderValue;
	NewPay->>DWEB:Pay and send txid;
	DWEB->>User:verify tx and Pay success;
```

### 上链流程图
```mermaid
sequenceDiagram;
	participant User;
	participant DWEB;
	participant NewPay;
	participant HEP Node;
	participant NF API;
	User->>DWEB:Click place order;
	DWEB->>HEP Node:AppId, OrderInfo;
	HEP Node->>NF API:Query Appid can place order;
	NF API->>HEP Node:Place Order Status: true;
	HEP Node->>DWEB: OrderInfo hash;
	DWEB->>NewPay: QRCode(AppId, OrderInfo Hash)
	NewPay->> HEP Node:AppId, OrderInfo Hash;
	HEP Node->>NewPay:Order Info;
	NewPay->>DWEB:sign hash, txid, order hash;
	DWEB->>User:Place Order Success;
	NewPay->>HEP Node:sign hash, txid;
	HEP Node->>NF API:hash, txid;
	NF API->>HEP Node:Query Order;
	HEP Node->>NF API:Order;
	NF API->>NF API: Calculate NF;
```
