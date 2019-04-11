## 1. MD5签名规则 ##

1. 在所有请求参数中，所有参数都需要拼接进行MD5签名，获取sign的值，拼接参数sign进行请求。
2. 在拼接过程中，需要将所有参数的key按字典排序（a-z），然后用“&”拼接键值对，最后拼接access_secret.

## 2. 公共参数 ##
| params | type | value | desc |
|:--:|:--:|:--:|:--:|
| os | String | 'android' | 平台信息 |
| version | String | '2' | 版本号（version_code）|
| device_id | String | LKMFA23LKASDF | 设备唯一编码 IMEI |
| device_info | String | vivo-Y550A-4.0.1 | 设备信息 |
| app_key | String | asldkfalskdsajf | key，可用作访问限制 |
| language | String | zh | 语言信息 |
| timezone | String | UTC | 时区信息 |
| channel | String | www | 渠道信息 |
| nonce | String | 'asdf134' | 唯一随机数 |
| timestamp | String | 1539582627.158863 | 时间戳(单位为秒) |

3. 
```
signContent:
> app_key=d41d8cd98f00b204e9800998ecf8427e&name=test&os=android&
version=175d78bdb89dd0baeaeacdbef66ba4240
> sign result :
b1396e2e83478a426a31fe24e0de363e
> post data:
{app_key=d41d8cd98f00b204e9800998ecf8427e, os=android, name=test, sign=b1396e2e83478a426a31fe24e0de363e, version=1}
```

## 3. ERROR_CODE 列表 ##
| 错误码 | 描述 | 示例 |
|:--:|:--:|:--:|
| 1 | 成功 | <code>{ "error_code" : 1,"result":{} }</code> ||
| 0 | 失败 | <code>{ "error_code" : 0,"result":{},"error_message":"permission denied" } </code>||

## 4.示例代码 #

### 4.1 java 语言 ###
```
//method for signature
public void sign(Map<String, String> params) {
        if (params != null) {
            String[] keys = params.keySet().toArray(new String[0]);
            Arrays.sort(keys);
            ArrayList<String> signPair = new ArrayList<String>();
            for (String key : keys) {
                signPair.add(key + "=" + params.get(key));
            }
            String signContent = StringUtils.join(signPair, "&") + APP_SECRET;
            MessageDigest messageDigest;
            try {
                messageDigest = MessageDigest.getInstance("MD5");
                messageDigest.reset();
                messageDigest.update(signContent.getBytes("UTF8"));
                final byte[] resultByte = messageDigest.digest();
                final String result = new String(Hex.encodeHex(resultByte));
                params.put(“sign”, result);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```
```
private String APP_KEY = "93ecc2e817f27e9e81b5363229e231dd";
private String APP_SECRET = "bfe65f6d29c397e7efe55d5f25015ed5";
private String url = "http://[API Domain]/api/v3/payment/withdraw/success/";

//parameter for post request
Map<String,String> map = new HashMap<>();
map.put("country_code","86");
map.put("cellphone","17612321557");
map.put("coins","10000");
map.put("access_key",APP_KEY);
sign(this,map)；
//netword request
OkHttpUtils
    .post()
    .url(url)
    .params(map)
    .build()
    .execute(new StringCallback() {
    @Override
    public void onError(okhttp3.Call call, Exception e, int i) {
          //TODO error
    }
    @Override
     public void onResponse(String s, int i) {
          //TODO success
    }
   });
```
