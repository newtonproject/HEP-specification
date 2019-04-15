```mermaid
graph TD
Click[User click login with NewID] --> web_check{Is it a website?}
web_check--> |Yes| qr[Show QR code]
web_check--> |No| send_req_newpay
qr --> user_scan{User scans QR code}
user_scan-->|No| Err
user_scan-->|Yes| send_req_newpay
send_req_newpay[Send message + key to NewPay];
send_req_newpay--> newpay_hep[Data sent to HEP]
newpay_hep --> check_key{Key OK?}
check_key -->|No| Err[Send error code]
check_key -->|Yes| redirect_newpay[Send user to NewPay]
redirect_newpay --> user_auth_ask{User authorize}
user_auth_ask-->|No| Err
user_auth_ask-->|Yes| send_newid[Send NewID]
send_newid --> login_user[Log user in]
```
