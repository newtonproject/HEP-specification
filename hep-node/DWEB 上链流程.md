### 登录流程图
```mermaid
sequenceDiagram;
    participant User;
    participant DWA;
	participant NewPay;
	participant HEP Node;
    User->>DWA: Click Login;
    DWA->>NewPay: QRCode(AppId,LoginAction)
    NewPay->>HEP Node:Send AppId, signMessage;
    HEP Node->> DWA: Verify signMessage, send user's profile;
    DWA->>User:Login success;
```

### 支付流程图
```mermaid
sequenceDiagram;
    participant User;
    participant DWA;
	participant NewPay;
	participant HEP Node;
	User->>DWA:Click pay with NEW;
	DWA->>NewPay:QRCode(AppId, OrderKey);
	DWA->>HEP Node:AppId, OrderValue;
	NewPay->>HEP Node:Query Order by AppId, OrderId;
	HEP Node->>NewPay: OrderValue;
	NewPay->>HEP Node:Pay and send txid;
	HEP Node->>DWA:txid, verify tx;
	DWA->>User:Pay success;
```

### 上链流程图
```mermaid
sequenceDiagram;
	participant User;
	participant DWA;
	participant NewPay;
	participant HEP Node;
	participant RPC;
	User->>DWA:Click place order;
	DWA->>HEP Node:AppId, OrderInfo;
	HEP Node->>RPC:Query Appid can place order;
	RPC->>HEP Node:Place Order Status: true;
	HEP Node->>DWA: OrderInfo hash;
	DWA->>NewPay: QRCode(AppId, OrderInfo Hash)
	NewPay->> HEP Node:AppId, OrderInfo Hash;
	HEP Node->>NewPay:Order Info;
	NewPay->>HEP Node:sign hash, txid;
	HEP Node->>RPC:hash, txid;
	RPC->>HEP Node:Query Order;
	HEP Node->>RPC:Order;
	RPC->>RPC: Calculate NF;
	HEP Node->>DWA:place order txid;
	DWA->>User:Place Order Success;
```