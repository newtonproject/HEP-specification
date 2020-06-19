/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cb5af9bf684420461e24ea711c378693"
  },
  {
    "url": "api-style-guide/api-style-guide.html",
    "revision": "db5ea84527daf527346068e17954a262"
  },
  {
    "url": "assets/css/0.styles.ba461f21.css",
    "revision": "9463a5befb75bb73e1b0fab52af367af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.07b5122b.js",
    "revision": "8b42cb102215160b56ed61722d60277b"
  },
  {
    "url": "assets/js/11.07ab2f5a.js",
    "revision": "3c88d2f929134a71e92a856da00158d5"
  },
  {
    "url": "assets/js/12.ccd7c691.js",
    "revision": "047a8c23a7a42df717576361807e7b77"
  },
  {
    "url": "assets/js/13.590ca748.js",
    "revision": "0f56eedf9be0f8511e82a8405ce27ac9"
  },
  {
    "url": "assets/js/14.2d893eb2.js",
    "revision": "9a7df6ba68ed64e718d4173cc2bc32c8"
  },
  {
    "url": "assets/js/15.b78077ba.js",
    "revision": "9d67fe5c5bf7fad05d4c78d9dbaff503"
  },
  {
    "url": "assets/js/16.7829fee6.js",
    "revision": "495db96655926667e71d4dd77d1b9a8d"
  },
  {
    "url": "assets/js/17.0d23eaee.js",
    "revision": "2f6288d9623582d490e3d80cb16c8867"
  },
  {
    "url": "assets/js/18.fda3c910.js",
    "revision": "4f5d9b8db28e4b8b9be778e6e6773ae7"
  },
  {
    "url": "assets/js/19.388dc885.js",
    "revision": "1882ac9e10c43967c7d59aa993146898"
  },
  {
    "url": "assets/js/2.810d226b.js",
    "revision": "2170db32f4ea230d208df3f2db576220"
  },
  {
    "url": "assets/js/20.bd33d416.js",
    "revision": "2a77f49bd34d9f5d53d46da867ab69ad"
  },
  {
    "url": "assets/js/21.fec79911.js",
    "revision": "0ca4b1e91bc47bf0fb1528dbb0759a3b"
  },
  {
    "url": "assets/js/22.4852e8c3.js",
    "revision": "39861351da27f9c9a2a90d7cca7ec907"
  },
  {
    "url": "assets/js/23.02ca9ad2.js",
    "revision": "77e7b7a0b203f070592eed44eb5f2d65"
  },
  {
    "url": "assets/js/24.a27ecedb.js",
    "revision": "b42d392d0ff39aba9f0209d658e6a0be"
  },
  {
    "url": "assets/js/25.6d591597.js",
    "revision": "41ced85af40df31b7a68fa58a4d5ac20"
  },
  {
    "url": "assets/js/26.5b54232e.js",
    "revision": "304ba805cff5aa0fd328976f3dd52edb"
  },
  {
    "url": "assets/js/27.db582809.js",
    "revision": "c3bd320b438b04c88c926db7365d66f1"
  },
  {
    "url": "assets/js/28.6fe812df.js",
    "revision": "f61bf243e93175ae77df37715ee2510e"
  },
  {
    "url": "assets/js/29.e2c1a4a5.js",
    "revision": "1fb4bcc37e870a523bf5211d6d969901"
  },
  {
    "url": "assets/js/3.aada4df1.js",
    "revision": "7d555bd091284776bc79ad050178fd7b"
  },
  {
    "url": "assets/js/30.c8bfc05d.js",
    "revision": "46bab3664138c372a5ff484904d6996b"
  },
  {
    "url": "assets/js/31.efd4bdf8.js",
    "revision": "b6a83779b02f256d62e42bc26f8a0652"
  },
  {
    "url": "assets/js/32.8e817237.js",
    "revision": "236278d0fa28f2b2ee05b752d485b827"
  },
  {
    "url": "assets/js/33.5124ac4c.js",
    "revision": "2777e9ac69341c225198bf2453e1cf5b"
  },
  {
    "url": "assets/js/34.425f35bd.js",
    "revision": "efac544eab5d38da03613f4d5378ca67"
  },
  {
    "url": "assets/js/35.102079c4.js",
    "revision": "8872c8f75e8eb9bd66b8097a81020193"
  },
  {
    "url": "assets/js/36.476ac90a.js",
    "revision": "03a305ecff014eb5afc1f32c21e7f1c1"
  },
  {
    "url": "assets/js/37.04ff4ab5.js",
    "revision": "3ea513c43bdb8fd4e644116605cabeb0"
  },
  {
    "url": "assets/js/38.7da043dd.js",
    "revision": "63088a76f92f7701c275db6c7e313fe0"
  },
  {
    "url": "assets/js/39.b6051c5a.js",
    "revision": "efa2afb6bd919641f599587ca1c12638"
  },
  {
    "url": "assets/js/4.65a1a4c3.js",
    "revision": "71153c1fcd1709d5c260574e9f94d7a4"
  },
  {
    "url": "assets/js/40.0f513e54.js",
    "revision": "bed87e55448ab7366a4015bbe46a7e3a"
  },
  {
    "url": "assets/js/41.d680db47.js",
    "revision": "d8abbcff4568946e72e6f9d45dc9670b"
  },
  {
    "url": "assets/js/42.5bf0e2d1.js",
    "revision": "d3399296a70b37db4833bb25a59beb11"
  },
  {
    "url": "assets/js/43.1d061f75.js",
    "revision": "010613cf9d120f551927556850af6095"
  },
  {
    "url": "assets/js/44.f794bd6d.js",
    "revision": "b51631476d8680ea404b09e4941d52ed"
  },
  {
    "url": "assets/js/45.c060c4a9.js",
    "revision": "e91d7293607748fffcdfa224bd9b22fb"
  },
  {
    "url": "assets/js/46.60bf6604.js",
    "revision": "429fb5ef316397947b935e067e657626"
  },
  {
    "url": "assets/js/47.88292d12.js",
    "revision": "00a46dd3036999761dec0024df32b9b5"
  },
  {
    "url": "assets/js/48.f9953027.js",
    "revision": "57683960562317c42d9f41dc0b5e761c"
  },
  {
    "url": "assets/js/49.79770fab.js",
    "revision": "1043489b11b3e2df049065376b353cdb"
  },
  {
    "url": "assets/js/5.11a4bfaf.js",
    "revision": "59c8a0ccb4e2a0645efde986b8a2186b"
  },
  {
    "url": "assets/js/50.c47ea8c2.js",
    "revision": "54ff5b497a2b80059a70efab04b26706"
  },
  {
    "url": "assets/js/51.f7c689e5.js",
    "revision": "c96db48627d03b49a9ff29dc1f41c57c"
  },
  {
    "url": "assets/js/52.081ff357.js",
    "revision": "78d8a4999deb69e4705c5b37a46dc974"
  },
  {
    "url": "assets/js/53.e66884bb.js",
    "revision": "0a51a2ee85d40648b2fcbd54a17bce46"
  },
  {
    "url": "assets/js/54.6884c4e5.js",
    "revision": "0175a250f942bf6169dc32fd8d606119"
  },
  {
    "url": "assets/js/55.e1ad1900.js",
    "revision": "2a00d85458e824a4ec8897bc669d5520"
  },
  {
    "url": "assets/js/56.0bb83b11.js",
    "revision": "a163832e20323d4f2153d9e5bc25419c"
  },
  {
    "url": "assets/js/57.f85086c4.js",
    "revision": "8ecf331fd6d5df0a9755c163282a2e58"
  },
  {
    "url": "assets/js/58.2d1f834a.js",
    "revision": "b8f1611f504378dfb10e96ea8a6150f0"
  },
  {
    "url": "assets/js/59.18855501.js",
    "revision": "43f0c22ceb57bf0a0b061b57e3502601"
  },
  {
    "url": "assets/js/6.ee814126.js",
    "revision": "5938b06e12f81f0550d939405f4187a4"
  },
  {
    "url": "assets/js/7.cfd8f4f1.js",
    "revision": "c05e9e42e26086ed7d4bdfae00ca3bff"
  },
  {
    "url": "assets/js/8.01bf51c2.js",
    "revision": "07f6061f2d83b0cbf163b65328f21907"
  },
  {
    "url": "assets/js/9.849c036f.js",
    "revision": "2337c8445aa5b1232323068347fff025"
  },
  {
    "url": "assets/js/app.419242cf.js",
    "revision": "b1c0d8eb8c359bb9cb877b2d185edef2"
  },
  {
    "url": "DApp-Process.html",
    "revision": "efea4e5326b743fb7a5f5b99d4f86ce8"
  },
  {
    "url": "DMA.html",
    "revision": "c91f9c6448d2ce4754aa0616878a7934"
  },
  {
    "url": "DWeb.html",
    "revision": "6163648ca3d29c33935148ed8485974a"
  },
  {
    "url": "economy-model-v1.html",
    "revision": "ec884db7eb1c4aa61ebd2bc791cbdff4"
  },
  {
    "url": "flow/auth-flowchart.html",
    "revision": "04f8b72b32528cd2d03035eefa6363aa"
  },
  {
    "url": "flow/auth-process.html",
    "revision": "e3b8d3c66c7cc28b1b4cc5e86042cba6"
  },
  {
    "url": "flow/payment-flowchart.html",
    "revision": "d33b94f888969e90f283bd5a7f7b7908"
  },
  {
    "url": "flow/payment-process.html",
    "revision": "410065188c760f179ed0edd3199876f7"
  },
  {
    "url": "HEP-intro.html",
    "revision": "bf880dd5e96990bd68cfca3a12ec88b8"
  },
  {
    "url": "hep-node/HEP-DAPP.html",
    "revision": "2eb052fba1907e0460a65644887c3e6e"
  },
  {
    "url": "hep-node/index.html",
    "revision": "50ea5f6e84f64ba6b3dd8380c5200827"
  },
  {
    "url": "hep-node/REST-API.html",
    "revision": "e517287e249cafde4a185bf7483b1635"
  },
  {
    "url": "hep-protocol/index.html",
    "revision": "52eb6e366cfe0a771a3bf852520cbf43"
  },
  {
    "url": "hep-provider/error-codes.html",
    "revision": "516be3f0fa045de284f6785cb78d6675"
  },
  {
    "url": "hep-provider/user-agent.html",
    "revision": "9a6979d485e8fb82bb445999ae6b0e64"
  },
  {
    "url": "index.html",
    "revision": "61e91ab3fed9cbb82dbde19be236c172"
  },
  {
    "url": "interact-specification/DMA-NewPay.html",
    "revision": "ba115b9d6cdc6bdccf8d8bd53981c1eb"
  },
  {
    "url": "interact-specification/DWeb-callback-error-messages.html",
    "revision": "aadb757d2d49327b8ebb019523b8c5f1"
  },
  {
    "url": "interact-specification/DWeb-NewPay.html",
    "revision": "536b679368dcd68b00cec9b2f8a66dc5"
  },
  {
    "url": "interact-specification/NewID-specification.html",
    "revision": "6b4738358ee815d1fc50bff47cbd3c73"
  },
  {
    "url": "legacy/auth-api.html",
    "revision": "c8d5ae889a764ae6f639a536b565a3c1"
  },
  {
    "url": "legacy/error-codes.html",
    "revision": "1f422c4b65fa2b99914cb895763e740c"
  },
  {
    "url": "legacy/NewPay-SDK-specification.html",
    "revision": "35fa7f7d441a26e615721fbdace58501"
  },
  {
    "url": "legacy/payment-api.html",
    "revision": "5f46b2fc27b57d6740a5b795236e30c3"
  },
  {
    "url": "legacy/specification-common.html",
    "revision": "4c60116d2a87bd80376aa77f8da552a8"
  },
  {
    "url": "legacy/specification.html",
    "revision": "6de82064888146ef7a40ec0b60a2d961"
  },
  {
    "url": "miner.html",
    "revision": "9a63e7c2227dd31d658424600fb33216"
  },
  {
    "url": "NewDApp.html",
    "revision": "b5e97c618355de08081f8de7ba0989db"
  },
  {
    "url": "NewLang.html",
    "revision": "f32e4f3e0be6dbbb3c360eb71d188dbe"
  },
  {
    "url": "NewTruffle.html",
    "revision": "562e14eaeee3d607efa5d3c82f971715"
  },
  {
    "url": "NewVM.html",
    "revision": "78d58773766df053dd758fd7239a78d9"
  },
  {
    "url": "oracle/index.html",
    "revision": "d686662bac236e7c06e62ea25513472b"
  },
  {
    "url": "oracle/oracle.html",
    "revision": "6a0da06944f67345811c40fbcbdda077"
  },
  {
    "url": "proof-engine-subchain/index.html",
    "revision": "6588a9767e1d0b521336d9c1fe051ab0"
  },
  {
    "url": "README_cn.html",
    "revision": "b24830d0b8edbfbbb59f0698bd588d26"
  },
  {
    "url": "reference/android-sdk-list.html",
    "revision": "0c426d38ccfa0ecd0305063cd10067a8"
  },
  {
    "url": "reference/newpay_merchant_transaction.html",
    "revision": "2d6e93e5a114e351e2e65652cdb2e3a0"
  },
  {
    "url": "reference/newpay-payment-specification.html",
    "revision": "2cd51b7e2104f2ef709979a76918f9ca"
  },
  {
    "url": "reference/newton-api-authentication.html",
    "revision": "53b33666826d965675d401bbb9986d4d"
  },
  {
    "url": "reference/Newton-dapp-api-0.1.html",
    "revision": "cdeb2e38bb38fe272ebb1104cd488ca7"
  },
  {
    "url": "tech-service-developer.html",
    "revision": "3edc24b8b121a6f92ed1c4ece8aa1078"
  },
  {
    "url": "tutorial/index.html",
    "revision": "4823f63ae1ea26edbf1c1fead517b266"
  },
  {
    "url": "tutorial/README-HEP-REST-API.html",
    "revision": "cb7e2ab2e52eb72c694b78ebaa9fea41"
  },
  {
    "url": "tutorial/tutorial-dma-zh.html",
    "revision": "667311a5900f619db33f5d199a42a1ab"
  },
  {
    "url": "tutorial/tutorial-dma.html",
    "revision": "64a79aacab832706ec1ae5b3ccdf4b57"
  },
  {
    "url": "tutorial/tutorial-dweb-zh-php.html",
    "revision": "f5aa13337813dfd9a8ae6adf04236464"
  },
  {
    "url": "tutorial/tutorial-dweb-zh.html",
    "revision": "56740394e92cfde0bc4f1de4973c09ee"
  },
  {
    "url": "tutorial/tutorial-dweb.html",
    "revision": "b60806e6d3e705641b6cb20dd625b438"
  },
  {
    "url": "tutorial/tutorial-newdapp.html",
    "revision": "4f6dd136afd495e64716232939fabd4d"
  },
  {
    "url": "tutorial/tutorial-smart-contract.html",
    "revision": "bda48c6a9f79742ff9b948331ab0fce6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
