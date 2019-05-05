# NewPay SDK 1.0

NewPay supports three kinds of Dapps:

| Dapp type                      | Description                                                                                                                                  | Language                      |
| ---                            | ---                                                                                                                                          | ---                           |
| **[Native](native)**           | Runs natively in iOS or Android. Downloadable from Apple App Store or Google Play Store                                                      | Swift (iOS) or Java (Android) |
| **[Web](web)**                 | A regular website with hooks into the NewPay API                                                                                             | Javascript                    |
| **[In-app Dapp](in-app-dapp)** | A mini-program that runs inside NewPay. Similar to [WeChat mini-programs](https://walkthechat.com/wechat-mini-programs-simple-introduction/) | Javascript                    |

In our release of SDK 1.0, we support the following features:

* Login
* Payment

## Dapp Anatomy

A distributed app consists of:

| Item                    | Language/infrastructure      |
| ---                     | ---                          |
| A smart contract        | Solidity                     |
| A user interface        | HTML/CSS or relevant toolkit |
| A transaction interface | Java/Python/Javascript       |

## Building your Dapp

### SDKs

Software Development Kits are available for:

* [iOS](http://cocoapods.org/pods/NewPaySDK-iOS)
* [Android](https://github.com/newtonproject/NewPaySDK-Android)

### Smart Contract

NewPay Dapps use [NewTruffle](newtruffle.md), a fork of [Truffle](https://truffleframework.com/), so if you're familiar with [Ethereum](https://www.ethereum.org/) you'll feel right at home.

### User Interface

### Transaction Interface

NewPay SDK 1.0 provides basic functions for login and payment.
