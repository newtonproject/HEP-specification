# Newton DApp API v0.1
The framework provides a rich Newton native API that makes it easy to tune Newton's capabilities, such as access to user information, local storage, and payment functions.
- - - -
# Interface

## Interactive feedback

### nt.showToast(OBJECT)
#### Display message prompt box
##### OBJECT Parameters

Parameter | Type | Required | Description
--- | --- | --- | ---
title | String | yes | Standard content
icon | String | No | Icon, valid values ​​"success", "loading", "none"
image | String | No | Customize the local path of the icon, image has priority over icon
duration | Number | No | Delay of the prompt, in milliseconds, default: 1500
mask | Boolean | No | Whether to display a transparent mask to prevent touch penetration, default: false
success | Function | No | The interface calls a successful callback function
fail | Function | No | Callback function for interface call failure
complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

##### icon RMS

Valid value | Description
--- | ---
Success | Displays the success icon, at which point the title text displays up to 7 Chinese characters. Defaults
Loading | The loading icon is displayed, at which point the title text displays up to 7 Chinese characters.
None | No icon is displayed, at this time title text can display up to two lines

#### Sample Code:
```
nt.showToast({
  Title: 'success',
  Icon: 'success',
  Duration: 2000
})
```
### nt.hideToast
#### Hide message prompt box
---
### nt.showLoading(OBJECT)
#### Display loading prompt box, you need to call nt.hideLoading to close the prompt box.
#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Title | String | yes |
Mask | Boolean No | Whether to display a transparent mask to prevent touch penetration, default: false
Success | Function | No | The callback function that the interface calls successfully
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

### nt.hideLoading
#### Hide loading prompt box

```
nt.showLoading({
  Title: 'Loading',
})
setTimeout(function(){
  nt.hideLoading()
}, 2000)
```
- - - -
### nt.showModal(OBJECT)
#### Display modal popup
#### OBJECT parameter description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Title | String | Yes | Tip title
Content | String | yes |
showCancel | Boolean | No | Whether to display the Cancel button, the default is true
cancelText | String | No | Cancel button text, defaults to "Cancel", up to 4 characters
cancelColor | HexColor | No | Cancel the text color of the button, defaults to "#000000"
confirmText | String | No | Determines the text of the button, defaults to "OK", up to 4 characters
confirmColor | HexColor | No | Determines the text color of the button, defaults to "#3CC51F"
Success | Function | No | The callback function that the interface calls successfully
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
Confirm | Boolean | When true, the user clicked the OK button
Cancel | Boolean | When true, indicates that the user clicked Cancel (for Android to distinguish between click blinding or clicking the Cancel button)

#### Sample Code:

```
nt.showModal({
  Title: 'prompt',
  Content: 'This is a modal popup',
  Success: function(res) {
    If (res.confirm) {
      Console.log('User clicks OK')
    } else if (res.cancel) {
      Console.log('User clicks cancel')
    }
  }
})
```

- - - -
### nt.showActionSheet(OBJECT)
#### Display operation menu
#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
itemList | String Array | Yes | An array of text for the button, with an array length of up to 6
itemColor | HexColor | No | The text color of the button, defaults to "#000000"
Success | Function | No | The callback function that the interface calls successfully, see the return parameter description
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
tapIndex | Number | The button the user clicked, from top to bottom, starting at 0

#### Sample Code:

```
nt.showActionSheet({
  itemList: ['A', 'B', 'C'],
  Success: function(res) {
    Console.log(res.tapIndex)
  },
  Fail: function(res) {
    Console.log(res.errMsg)
  }
})
```

- - - -
## Setting up the navigation bar

### nt.hideNavigationBar
#### Dynamically hide the navigation interface of the current page

`nt.hideNavigationBarLoading`

### nt.setNavigationBarTitle(OBJECT)
#### Dynamically set the title of the current page.
#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ----
Title | String | Yes | Page Title
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.setNavigationBarTitle({
  Title: 'current page'
})
```
- - - -

### nt.setNavigationBarColor(OBJECT)
#### Dynamically set the title of the current page.
#### OBJECT parameter description:

Parameter Name | Type | Required | Description
--- | --- | --- | ---
frontColor | String | Yes | The foreground color value, including the color of the button, title, and status bar, only supports #ffffff and #000000
backgroundColor | String | Yes | Background color value, valid values ​​are hexadecimal color
Animation | Object | No | Animation
Animation.duration | Number | No | Animation change time, default 0, unit: milliseconds
animation.timingFunc | String | No | Animation change mode, default linear
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### animation.timingFunc Valid values:

Value | Description
--- | ---
Linear | The speed of the animation is the same from start to finish.
easeIn | Animation starts at low speed
easeOut | The animation ends at a low speed.
easeInOut | Animation starts and ends at low speed.

#### success Return parameter description:

Parameter name | type | description
--- | --- | ---
errMsg | String | Call result

#### Sample Code:

```
nt.setNavigationBarColor({
   frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    Animation: {
        Duration: 400,
        timingFunc: 'easeIn'
    }
})
```
- - - -

### nt.showNavigationBarLoading
#### Display the navigation bar loading animation on the current page.
### nt.hideNavigationBarLoading
#### Hide the navigation bar to load the animation.
----
## Setting tabBar

### nt.setTabBarBadge(OBJECT)
#### Add text to the top right corner of an item in tabBar

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Index | Number | yes | which item of tabBar, counting from the left
Text | String | yes | displayed text, more than 3 characters are displayed as "..."
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.setTabBarBadge({
  Index: 0,
  Text: '1'
})
```

- - - -

### nt.removeTabBarBadge(OBJECT)
#### Remove the text in the top right corner of a tabBar

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Index | Number | yes | which item of tabBar, counting from the left
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

- - - -

### nt.showTabBarRedDot(OBJECT)
#### Displaying the red dot in the upper right corner of an item of tabBar

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Index | Number | yes | which item of tabBar, counting from the left
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

- - - -

### nt.hideTabBarRedDot(OBJECT)
#### Hide the red dot in the upper right corner of a tabBar

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Index | Number | yes | which item of tabBar, counting from the left
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

- - - -

### nt.setTabBarStyle(OBJECT)
#### Dynamically setting the overall style of the tabBar
#### OBJECT Parameter Description:

Parameter | Type | Description
--- | --- | ---
Color | The default color of the text on the HexColor | tab
selectedColor | HexColor | The color of the text on the tab when selected
backgroundColor | HexColor | tab background color
borderStyle | String | The color of the top border of the tabbar, only supports black/white
Success | Function | Callback function that the interface calls successfully
Fail | Function | Callback function for interface call failure
Complete | Function | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.setTabBarStyle({
    Color: '#FF0000',
    selectedColor: '#00FF00',
    backgroundColor: '#0000FF',
    borderStyle: 'white'
})
```

- - - -

### nt.setTabBarItem(OBJECT)
#### Dynamically setting the contents of a tabBar item
#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Index | Number | yes | which item of tabBar, counting from the left
Text | String | No | tab button text
iconPath | String | No | Image path, icon size limit is 40kb, recommended size is 81px * 81px, when postion is top, this parameter is invalid, does not support network image
selectedIconPath | String | No | Image path when selected, icon size is limited to 40kb, recommended size is 81px * 81px, this parameter is invalid when postion is top
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.setTabBarItem({
    Index: 0,
    Text: 'text',
    iconPath: '/path/to/iconPath',
    selectedIconPath: '/path/to/selectedIconPath'
})
```

- - - -

### nt.showTabBar(OBJECT)
#### Display tabBar
#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Animation | Boolean | No | Whether animation is required, default is none
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

- - - -

### nt.hideTabBar(OBJECT)
#### Hide tabBar

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Animation | Boolean | No | Whether animation is required, default is none
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

- - - -

## Setting the window background

### nt.setBackgroundColor(OBJECT)
#### Dynamically setting the background color of the window

#### OBJECT Parameter Description:

Parameter | Type | Description
--- | --- | ---
backgroundColor | HexColor | Background color of the window
backgroundColorTop | HexColor | Background color of the top window, only iOS support
backgroundColorBottom | HexColor | Background color of the bottom window, only iOS support#### Sample Code:

```
nt.setBackgroundColor({
    backgroundColor: '#ffffff', // the background color of the window is white
})

nt.setBackgroundColor({
    backgroundColorTop: '#ffffff', // The background color of the top window is white
    backgroundColorBottom: '#ffffff', // The background color of the bottom window is white
})
```

- - - -
### nt.setBackgroundTextStyle(OBJECT)

#### Dynamically setting the style of the drop-down background font and loading diagram

#### OBJECT Parameter Description:

Parameter | Type | Description
--- | --- | ---
textStyle | String | Drop-down background font, loading graph style, only supports 'dark', 'light'

#### Sample Code:

```
nt.setBackgroundTextStyle({
    textStyle: 'dark', // drop the background font, load the drawing style as dark
})
```
 
----
## navigation

### nt.navigateTo(OBJECT)
#### Keep the current page, jump to a page in the app, use nt.navigateBack to return to the original page.

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Url | String | Yes | The path to the page of the non-tabBar in the application that needs to jump. The path can take parameters. The parameter is separated from the path by ?, the parameter key is connected with the parameter value by =, and the different parameters are separated by &; for example, 'path?key=value&key2=value2'
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.navigateTo({
  Url: 'test?id=1'
})
//test.js
Page({
  onLoad: function(option){
    Console.log(option.query)
  }
})
```

- - - -
### nt.redirectTo(OBJECT)
#### Close the current page and jump to a page within the app.

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Url | String | Yes | The path to the non-tabBar page within the application that needs to be jumped. The path can take parameters. The parameter is separated from the path by ?, the parameter key is connected with the parameter value by =, and the different parameters are separated by &; for example, 'path?key=value&key2=value2'
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.redirectTo({
  Url: 'test?id=1'
})
```

- - - -

### nt.switchTab(OBJECT)
#### Jump to the tabBar page and close all other non-tabBar pages

#### OBJECT Parameter Description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Url | String | Yes | The path to the tabBar page that needs to be jumped (the page defined in the tabBar field of app.json ), with no arguments after the path
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "Home"
    },{
      "pagePath": "other",
      "text": "other"
    }]
  }
}
nt.switchTab({
  Url: '/index'
})
```
- - - -

### nt.navigateBack(OBJECT)
#### Close the current page and return to the previous or multi-level page.
#### OBJECT Parameter Description:

Parameters | Type | Default | Description
---- | ---- | ---- | ----
Delta | Number | 1 | The number of pages returned, if delta is greater than the number of existing pages, return to the first page.

#### Sample Code:

#### // Note: When calling navigateTo jump, the page that calls the method will be added to the stack, and the redirectTo method will not. See the sample code below

```
// Here is the A page
nt.navigateTo({
  Url: 'B?id=1'
})

// Here is the B page
nt.navigateTo({
  Url: 'C?id=1'
})

// navigateBack in page C, will return to page A
nt.navigateBack({
  Delta: 2
})
```
- - - -

### nt.reLaunch(OBJECT)
#### Close all pages and open to a page within the app.
#### OBJECT Parameter Description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Url | String | Yes | The in-page page path that needs to be jumped. The path can take parameters. The parameter is separated from the path by ?, the parameter key is connected with the parameter value by =, and the different parameters are separated by &; for example, 'path?key=value&key2=value2', if the page path of the jump is tabBar, the parameter cannot be taken.
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)#### Sample Code:

```
nt.reLaunch({
  Url: 'test?id=1'
})
//test.js
Page({
  onLoad: function(option){
    Console.log(option.query)
  }
})
```

----
## Location

### nt.pageScrollTo(OBJECT)
#### Scroll the page to the target location.

#### OBJECT parameter description:

Parameter Name | Type | Required | Description
--- | --- | --- | ---
scrollTop | Number | Yes | Scroll to the target position of the page (in px)
Duration | Number | No | The duration of the scrolling animation, default 300ms, in ms

#### Sample code:

```
nt.pageScrollTo({
  scrollTop: 0,
  Duration: 300
})
```
----

# Device

## system message
### nt.getSystemInfo(OBJECT)
#### Get system information.
#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Success | Function | Yes | Callback for successful interface call
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)
Success callback parameter description:

Parameter | Description
--- | ---
Brand | mobile phone brand
Model | phone model
pixelRatio | device pixel ratio
screenWidth | screen width
screenHeight | screen height
windowWidth | can use window width
windowHeight | can use window height
statusBarHeight | The height of the status bar
Language | WeChat set language
Version | WeChat version number
System | operating system version
Platform | client platform
fontSizeSetting | User font size setting. The setting in "I-Settings-Universal-Font Size" shall take the unit: px
SDKVersion | Client base library version

#### Sample Code:

```
nt.getSystemInfo({
  Success: function(res) {
    Console.log(res.model)
    Console.log(res.pixelRatio)
    Console.log(res.windowWidth)
    Console.log(res.windowHeight)
    Console.log(res.language)
    Console.log(res.version)
    Console.log(res.platform)
  }
})
```

----
## RAM
### nt.onMemoryWarning(OBJECT)
#### Monitor the alarm information of the memory address

#### CALLBACK return parameters:

Parameter | Type | Description
--- | --- | ---
Level | Number | This field is only available for Android, corresponding to the system memory alarm level macro definition

#### Android alarm level corresponding system macro:
#### TRIM_MEMORY_RUNNING_MODERATE = 5
#### TRIM_MEMORY_RUNNING_LOW = 10
#### TRIM_MEMORY_RUNNING_CRITICAL = 15

#### Sample code:

```
nt.onMemoryWarning(function () {
  Console.log('onMemoryWarningReceive')
})
```

----
## network status
### nt.getNetworkType(OBJECT)
#### Get the network type.
#### OBJECT parameter description:

Parameter | Type | Required | Description
---- | ---- | ---- | ----
Success | Function | Yes | Interface call succeeded, return network type networkType
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
---- | ----
networkType | Network Type

```
nt.getNetworkType({
  Success: function(res) {
    // return network type, valid values:
    // wifi/2g/3g/4g/unknown (uncommon network type under Android) /none (no network)
    Var networkType = res.networkType
  }
})
```
- - - -
### nt.onNetworkStatusChange(OBJECT)
#### Monitor network status changes.
#### CALLBACK return parameters:

Parameter | Type | Description
---- | ---- | ----
isConnected | Boolean | Is there a network connection currently?
networkType | String | Network Type

#### networkType Valid values:

Value | Description
---- | ----
Wifi | wifi network
2g | 2g network
3g | 3g network
4g | 4g network
None | no network
Unknown | Unusual network type under Android

#### Sample Code:

```
nt.onNetworkStatusChange(function(res) {
  Console.log(res.isConnected)
  Console.log(res.networkType)
})
```

----
## Scan code
### nt.scanCode(OBJECTIVE)
#### Tune the client scan code interface, and return the corresponding result after scanning the code successfully.

#### Object Parameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
onlyFromCamera | Boolean | No | Can I only scan from the camera, not from the album?
scanType | Array | No | Scan type, parameter type is array, QR code is 'qrCode', 1D code is 'barCode', DataMatrix is ​​‘datamatrix’, pdf417 is ‘pdf417’
Success | Function | No | The interface calls a successful callback function. See the return parameter description for details.
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
--- | ---
Result | The content of the scanned code
scanType | Type of code scanned
charSet | The character set of the scanned code
Path | When the scanned code is the legal QR code of the current applet, this field is returned, and the content is the path carried by the QR code.
rawData | raw data, base64 encoding

#### Sample code:

```
// Allow scanning code from camera and album
nt.scanCode({
  Success: (res) => {
    Console.log(res)
  }
})

// only allow scanning from the camera
nt.scanCode({
  onlyFromCamera: true,
  Success: (res) => {
    Console.log(res)
  }
})
```

----
## dial number
### nt.makePhoneCall(OBJECT)#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
withShareTicket | Boolean | No | Whether to use forwarding details with shareTicket
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.showShareMenu({
  withShareTicket: true
})
```

----

### nt.hideShareMenu(OBJECT)
#### Hide Forward Button

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

`nt.hideShareMenu()`

----

### nt.updateShareMenu(OBJECT)
#### Update forwarding properties

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
withShareTicket | Boolean | No | Whether to use forwarding details with shareTicket
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.updateShareMenu({
  withShareTicket: true,
  Success() {
  }
})
```

----

### nt.getShareInfo(OBJECT)

#### Get forwarding details

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
shareTicket | String | Yes | shareTicket
Timeout | Number | No | Timeout in ms
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### CALLBACK Parameter Description:

Parameter | Type | Description
--- | --- | ---
errMsg | String | Error Message
encryptedData | String | Encrypted data of complete forwarding information including sensitive data, see Encrypted Data Decryption Algorithm for details.
Iv | String | The initial vector of the encryption algorithm, see the encrypted data decryption algorithm for details.
Encrypted | Data | Decrypted to a JSON structure with the following fields:

Field | Description
--- | ---
openGId | The unique ID of the group to the current applet

----

### Page.onShareAppMessage(OBJECT)
#### Define the onShareAppMessage event handler in Page to customize the forwarding content of the page.

----
# The internet

## nt.request(OBJECT)
## Initiating a request
### Initiate a network request.

#### OBJECTParameter Description:

Parameter Name | Type | Required | Default | Description
--- | ---| --- | --- | ---
Url | String | yes | | developer server interface address
Data | Object/String/ArrayBuffer | No | | Requested parameters
Header | Object | No | | Set the header of the request, and the Referer cannot be set in the header.
Method | String | No | GET | (Capital) Valid values: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
dataType | String | no | json | If set to json, will try to do a JSON.parse on the returned data
responseType | String | no | text | Set the data type of the response. Legal value: text, arraybuffer
Success | Function | No | | Received a callback function that the developer service returned successfully
Fail | Function | No | | Callback function for interface call failure
Complete | Function | No | | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
Data | Object/String/ArrayBuffer | Data returned by the developer server
statusCode | Number | HTTP status code returned by the developer server
Header | Object | HTTP Response Header returned by the developer server

#### Data

Description of data:

The data that is ultimately sent to the server is of type String , and if the passed in data is not of type String , it will be converted to a String . The conversion rules are as follows:

For the data of the GET method, the data will be converted into a query string(encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...)
For the POST method and the header['content-type'] is application/json data, the data is JSON serialized.
For POST methods and header['content-type'] is application/x-www-form-urlencoded, the data will be converted to a query string (encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k) =encodeURIComponent(v)...)

#### Sample Code:

```
Nt.request({
  Url: 'test.php', // is only an example, not a real interface address
  Data: {
     x: '' ,
     y: ''
  },
  Header: {
  'content-type': 'application/json' // default value
  },
  Success: function(res) {
    Console.log(res.data)
  }
})
```

#### return value:

#### Returns a requestTask object that can be interrupted by requestTask.

#### The list of methods for the requestTask object:

Method | Parameters | Description
--- | --- | ---
Abort | | Interrupt request task

#### Sample Code:

```
Const requestTask = nt.request({
  Url: 'test.php', // is only an example, not a real interface address
  Data: {
     x: '' ,
     y: ''
  },
  Header: {
  'content-type': 'application/json'
  },
  Success: function(res) {
    Console.log(res.data)
  }
})

requestTask.abort() // cancel request task
```

## Upload/Download
## WebSocket
----
# Files

### nt.saveFile(OBJECT)
#### Save the file to the local.

Note: saveFile will move the temporary file, so the incoming tempFilePath will not be available after the call is successful.

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
tempFilePath | String | yes | temporary path to the file to be saved
Success | Function | No | Returns the path to save the file, res = {savedFilePath: 'Save path to file'}
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
--- | ---
savedFilePath | File save path

#### Sample Code:

```
nt.chooseImage({
  Success: function(res) {
    Var tempFilePaths = res.tempFilePaths
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      Success: function(res) {
        Var savedFilePath = res.savedFilePath
      }
    })
  }
})
```

- - - -

### nt.getFileInfo(OBJECT)

#### Get file information of local files. This interface can only be used to obtain files that have been saved to the local. If you need to obtain temporary file information, use the wx.getFileInfo interface.

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
filePath | String | yes | file path
Success | Function | No | The interface calls a successful callback function, returning the result see success return parameter description
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
errMsg | String | Interface call result
Size | Number | File size, unit B
createTime | Number | The timestamp when the file was saved, from 1970/01/01 08:00:00 to the number of seconds at that time

#### Sample Code:

```
nt.getSavedFileInfo({
  filePath: 'wxfile://somefile', //only for example, non-real file path
  Success: function(res) {
    Console.log(res.size)
    Console.log(res.createTime)
  }
})
```

----

### nt.getSavedFileList(OBJECT)
#### Get a list of locally saved files

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Success | Function | No | The interface calls a successful callback function, returning the result see success return parameter description
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
errMsg | String | interface call result
fileList | Object Array | File List

#### Description of the items in fileList:

Key | Type | Description
--- | --- | ---
filePath | String | The local path to the file
createTime | Number | The timestamp when the file was saved, from 1970/01/01 08:00:00 to the current time in seconds
Size | Number | File size, unit B

#### Sample Code:

```
nt.getSavedFileList({
  Success: function(res) {
    Console.log(res.fileList)
  }
})
```

### nt.removeSavedFile(OBJECT)
#### Delete locally stored files

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
filePath | String | yes | file path to be deleted
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)#### Sample Code:

```
Nt.request({
  Url: 'test.php', // is only an example, not a real interface address
  Data: {
     x: '' ,
     y: ''
  },
  Header: {
  'content-type': 'application/json' // default value
  },
  Success: function(res) {
    Console.log(res.data)
  }
})
```

#### return value:

#### Returns a requestTask object that can be interrupted by requestTask.

#### The list of methods for the requestTask object:

Method | Parameters | Description
--- | --- | ---
Abort | | Interrupt request task

#### Sample Code:

```
Const requestTask = nt.request({
  Url: 'test.php', // is only an example, not a real interface address
  Data: {
     x: '' ,
     y: ''
  },
  Header: {
  'content-type': 'application/json'
  },
  Success: function(res) {
    Console.log(res.data)
  }
})

requestTask.abort() // cancel request task
```

## Upload Download
## WebSocket
----
# Files

### nt.saveFile(OBJECT)
#### Save the file to the local. Note: saveFile will move the temporary file, so the incoming tempFilePath will not be available after the call is successful.

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
tempFilePath | String | yes | temporary path to the file to be saved
Success | Function | No | Returns the path to save the file, res = {savedFilePath: 'Save path to file'}
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
--- | ---
savedFilePath | File save path

#### Sample Code:

```
nt.chooseImage({
  Success: function(res) {
    Var tempFilePaths = res.tempFilePaths
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      Success: function(res) {
        Var savedFilePath = res.savedFilePath
      }
    })
  }
})
```

- - - -

### nt.getFileInfo(OBJECT)

#### Get file information of local files. This interface can only be used to obtain files that have been saved to the local. If you need to obtain temporary file information, use the wx.getFileInfo interface.

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
filePath | String | yes | file path
Success | Function | No | The interface calls a successful callback function, returning the result see success return parameter description
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
errMsg | String | Interface call result
Size | Number | File size, unit B
createTime | Number | The timestamp when the file was saved, from 1970/01/01 08:00:00 to the number of seconds at that time

#### Sample Code:

```
nt.getSavedFileInfo({
  filePath: 'wxfile://somefile', //only for example, non-real file path
  Success: function(res) {
    Console.log(res.size)
    Console.log(res.createTime)
  }
})
```

----

### nt.getSavedFileList(OBJECT)
#### Get a list of locally saved files

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Success | Function | No | The interface calls a successful callback function, returning the result see success return parameter description
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
errMsg | String | interface call result
fileList | Object Array | File List

#### Description of the items in fileList:

Key | Type | Description
--- | --- | ---
filePath | String | The local path to the file
createTime | Number | The timestamp when the file was saved, from 1970/01/01 08:00:00 to the current time in seconds
Size | Number | File size, unit B

#### Sample Code:

```
nt.getSavedFileList({
  Success: function(res) {
    Console.log(res.fileList)
  }
})
```

### nt.removeSavedFile(OBJECT)
#### Delete locally stored files

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
filePath | String | yes | file path to be deleted
Success | Function | No | The interface calls a successful callback function
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)...#### success Return parameter description:

Parameter | Type | Description
--- | --- | ---
Keys | String Array | All keys in the current storage
currentSize | Number | The current size of the space, in kb
limitSize | Number | The size of the space, in kb

#### Sample Code:

```
nt.getStorageInfo({
  Success: function(res) {
    Console.log(res.keys)
    Console.log(res.currentSize)
    Console.log(res.limitSize)
  }
})
```
----

### nt.removeStorage(OBJECT)
####Asynchronously removes the specified key from the local cache.

####OBJECTParameter Description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Key | String | yes | the specified key in the local cache
Success | Function | Yes | Callback function called by interface
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### Sample Code:

```
nt.removeStorage({
  Key: 'key',
  Success: function(res) {
    Console.log(res.data)
  }
})
```
----
### nt.removeStorageSync(key)
### Synchronize the specified key from the local cache.

### Parameter Description:

Parameter | Type | Required | Description
Key | String | yes | the specified key in the local cache

#### Sample Code:

```
Try {
  nt.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
```
----

### nt.clearStorage
####Clean up the local data cache.

#### Sample code:

`nt.clearStorage()`

### nt.clearStorageSync

### Synchronizing cleanup of local data cache

### Sample Code:

```
Try {
nt.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
```

----
#位置

## Get location
### nt.getLocation
#### Get the current location and speed. This interface cannot be called when the user leaves the applet.

#### Require user authorization scope.userLocation

#### OBJECT parameter description:

Parameter | Type | Required | Description
--- | --- | --- | ---
Type | String | No | Default wgs84 Returns GPS coordinates; gcj02 Returns the coordinates of the National Bureau, which can be used for the coordinates of wx.openLocation
Altitude | Boolean | No | Passing true returns height information, which slows down the interface because of the high precision required to get the height
Success | Function | Yes | The interface calls a successful callback function. See the return parameter description for details.
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
--- | ---
Latitude | Latitude, floating point number, range -90~90, negative number means south latitude
Longitude | Longitude, floating point number, range -180~180, negative number means west longitude
Speed ​​| speed, floating point, unit m/s
Accuracy | Position accuracy
Altitude | height in m
verticalAccuracy | Vertical precision, in m (Android cannot get, returns 0)
horizontalAccuracy | Horizontal accuracy in m

Sample code:

```
nt.getLocation({
  Type: 'wgs84',
  Success: function(res) {
    Var latitude = res.latitude
    Var longitude = res.longitude
    Var speed = res.speed
    Var accuracy = res.accuracy
  }
})
```

----

### nt.chooseLocation
## View location
#### Open the map selection location.

#### Require user authorization scope.userLocation

#### OBJECT parameter description:

Parameter | Type | Required | Description
---- | --- | --- | ---
Success | Function | Yes | The interface calls a successful callback function. See the return parameter description for details.
Fail | Function | No | Callback function for interface call failure
Complete | Function | No | Callback function at the end of the interface call (call success and failure will be executed)

#### success Return parameter description:

Parameter | Description
--- | ---
Name | location name
Address | Detailed address
Latitude | Latitude, floating point number, range -90~90, negative number means south latitude. Use gcj02 National Bureau of Surveying Coordinate System
Longitude | Longitude, floating point number, the range is -180~180, negative numbers indicate the West. Use gcj02 National Bureau of Surveying Coordinate System


----
# update
### nt.getUpdateManager
