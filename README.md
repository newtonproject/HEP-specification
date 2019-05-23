# Hyper Exchange Protocol (HEP)

More see [HEP introduction](HEP-introd.md).

## Architecture

TBD

### HEP Node

see [HEP Node](hep-node/README.md)

### Proof Engine Subchain

see [Proof Engine Suchain](proof-engine-subchain/README.md)

### Oracle Services

see [Oracle Services](oracle/README.md)


## DApp Ecosystem

### DApp economy

see [DApp economy](DApp-Economy.md)

### DApp Type 

Now HEP supports three kinds of Dapps to integration:

| Dapp type                      | Description                                                                                                                                  | Language                      |
| ---                            | ---                                                                                                                                          | ---                           |
| **[DMA - Decentralized Mobile App](DMA.md)**           | Runs natively in iOS or Android. Downloadable from Apple App Store or Google Play Store                                                      | Swift (iOS) or Java (Android) |
| **[DWEB - Decentralized Web](DWEB.md)**                 | A regular website with hooks into the HEP API                                                                                             | Javascript                    |
| **[NewDApp](NewDApp.md)** | A decentralized app that runs on [NewVM](NewVM.md). Similar to [WeChat mini-programs](https://walkthechat.com/wechat-mini-programs-simple-introduction/) | Javascript or [NewLang](NewLang.md)                    |

### Features 

In our release of HEP 1.0, we support the following features:

* Authentication
* Payment
* Upload OffChain Transaction

## Building your Dapp

### SDKs

Software Development Kits are available for:

* [iOS](http://cocoapods.org/pods/NewPaySDK-iOS)
* [Android](https://github.com/newtonproject/NewPaySDK-Android)
* [NodeJS](https://github.com/newtonproject/hep.js)

### Smart Contract
In Newton ecosystem, you don't need to write the smart contracts for developing DApp because we provide the smart contract template and market place. 

If you still want to do it, it is easy. Use [NewTruffle](NewTruffle.md), a fork of [Truffle](https://truffleframework.com/), so if you're familiar with [Ethereum](https://www.ethereum.org/) you'll feel right at home.

### Tutorial

* examples - [DApp Example](https://github.com/newtonproject/hep-example)

### Use Cases

TBD
