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
    "revision": "e3e411e9f150e38bdf270cdf55799e37"
  },
  {
    "url": "about/index.html",
    "revision": "2973041acd426c0e919ee83ae1a8a66c"
  },
  {
    "url": "assets/css/0.styles.a02a1512.css",
    "revision": "121df5778eb37f44efbd49b321189b8b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/高文龙简历.87051696.png",
    "revision": "870516966a852d3b132c2670e5c8daab"
  },
  {
    "url": "assets/js/1.65f13cbc.js",
    "revision": "08077277634b985e49638aec24265a2e"
  },
  {
    "url": "assets/js/10.f3472418.js",
    "revision": "943c828a991051ae177be9e58866333f"
  },
  {
    "url": "assets/js/11.878d7406.js",
    "revision": "b15a47fc54c3878c1cd7afaf9977dec2"
  },
  {
    "url": "assets/js/12.f15f57b3.js",
    "revision": "23e401039b5780dc23df91ffa3c704ca"
  },
  {
    "url": "assets/js/13.47f78c10.js",
    "revision": "8b29a47ffd4cf331a9d59d35a69dab98"
  },
  {
    "url": "assets/js/14.a98e2c7f.js",
    "revision": "d1a7b524e7c960a45a3c6017b94faefe"
  },
  {
    "url": "assets/js/15.988a2249.js",
    "revision": "1726d2801af4bb6e0612ac858b71dd50"
  },
  {
    "url": "assets/js/16.716c187c.js",
    "revision": "18895f4d33bd329b04be5c44a682c1b2"
  },
  {
    "url": "assets/js/17.532c935c.js",
    "revision": "0f273aa4ad461d82555a078bcb243922"
  },
  {
    "url": "assets/js/18.1080a5dc.js",
    "revision": "c9f9d362bb1006fc106d98e7547f32fc"
  },
  {
    "url": "assets/js/19.b42eac2e.js",
    "revision": "482d2a3f05bc3da75db15b4424f4ebd9"
  },
  {
    "url": "assets/js/20.a1e44abe.js",
    "revision": "2432b9e103ddd2b9b96b009ee8ffed9a"
  },
  {
    "url": "assets/js/21.244c3987.js",
    "revision": "27e0ba8ed610331a8bf7290c95c4a814"
  },
  {
    "url": "assets/js/22.80f3b700.js",
    "revision": "d3bd96d653eb66587b461ce09f7eb0e1"
  },
  {
    "url": "assets/js/23.8c8565be.js",
    "revision": "a1ff77193fd43b67f25623b9a9dfbb7e"
  },
  {
    "url": "assets/js/24.6acda6ca.js",
    "revision": "acbe45a2b4ba619b4da8a20b60ee2928"
  },
  {
    "url": "assets/js/25.4a46041d.js",
    "revision": "bd195e3988904013e61106b7a564ced0"
  },
  {
    "url": "assets/js/26.d856d192.js",
    "revision": "7abb7233b8bb423d77aec1c4346b8c96"
  },
  {
    "url": "assets/js/27.75f202ff.js",
    "revision": "f8507f8d09ddaed83d842793156083f7"
  },
  {
    "url": "assets/js/28.350c0443.js",
    "revision": "4d43a700eef599734919d448a3b7039e"
  },
  {
    "url": "assets/js/29.b2552d19.js",
    "revision": "9a9db285293d00b95d97e29a562c9d3e"
  },
  {
    "url": "assets/js/3.0d062e81.js",
    "revision": "be927412c5a0a541e09323f295a438dc"
  },
  {
    "url": "assets/js/30.609d5ea7.js",
    "revision": "7dda985f6cf4d29cfc9a894bdc50afd7"
  },
  {
    "url": "assets/js/31.8c7d0138.js",
    "revision": "4df91d6d42241e9da65ff3254ac63590"
  },
  {
    "url": "assets/js/32.f516b722.js",
    "revision": "fc9ce8997ec05714e0b82bc6ecc9cf1c"
  },
  {
    "url": "assets/js/33.dbe05138.js",
    "revision": "cc06b1d54448fe1e4fea718fe21435f3"
  },
  {
    "url": "assets/js/34.a6fa37f5.js",
    "revision": "b893b30885e8d0f2e4e66e9b2b32e96d"
  },
  {
    "url": "assets/js/35.6c675b9b.js",
    "revision": "f62f70b30e475cff80a39d39c1bd29d3"
  },
  {
    "url": "assets/js/36.e9c184ba.js",
    "revision": "7d2638633f4a97aa8d49f0a001653765"
  },
  {
    "url": "assets/js/37.4a5e69a4.js",
    "revision": "20b66a10696ee49fd244e9b55c6d149a"
  },
  {
    "url": "assets/js/38.28af613d.js",
    "revision": "95db4af6b63ccb3982743a93673e1258"
  },
  {
    "url": "assets/js/39.aa6e4b60.js",
    "revision": "d6d4e2a5c0f60de6e6c56f9ee267e337"
  },
  {
    "url": "assets/js/4.0e1457c6.js",
    "revision": "4fb10bb06a0d6555867ea345b8e584e6"
  },
  {
    "url": "assets/js/40.3ab4e6a1.js",
    "revision": "8b18d7b4fd788c649c5a3bf168333d17"
  },
  {
    "url": "assets/js/41.7d9b1219.js",
    "revision": "0cb50cb8e1c34d8e872d5bff5cbba38d"
  },
  {
    "url": "assets/js/42.f1d89e53.js",
    "revision": "ead242b177e2af194614c766e4e4227e"
  },
  {
    "url": "assets/js/43.3100eb6b.js",
    "revision": "79ce2958d0d44a08d8678f01d8d6d9e8"
  },
  {
    "url": "assets/js/44.51f0de7e.js",
    "revision": "de79301ee5e5c46d7da6fb4700c002bc"
  },
  {
    "url": "assets/js/45.55e31e5f.js",
    "revision": "8d06bcb1c42c1e421a868ddbf75df8e7"
  },
  {
    "url": "assets/js/46.60888ab0.js",
    "revision": "95f0c25dc710b83d68f0ee324d3026d6"
  },
  {
    "url": "assets/js/47.e3125273.js",
    "revision": "55a2c0f06bc41634d0467ef12954cae9"
  },
  {
    "url": "assets/js/48.a627c934.js",
    "revision": "970671eba3885cc0ab331bc4f7bd792a"
  },
  {
    "url": "assets/js/49.2771d068.js",
    "revision": "88fb3bba6eadb5102225514ff1ae3978"
  },
  {
    "url": "assets/js/5.b430937a.js",
    "revision": "c6b119333c16e8f714cbb3b371eacd09"
  },
  {
    "url": "assets/js/50.73f613c1.js",
    "revision": "cb4f6c8663330b27923009613b899d27"
  },
  {
    "url": "assets/js/51.1323e692.js",
    "revision": "c19e6b5bb0b819025d0dcba4fd1eec71"
  },
  {
    "url": "assets/js/52.98e766d4.js",
    "revision": "11660860e62c3662987636ec9c5715fb"
  },
  {
    "url": "assets/js/53.2ea72e0f.js",
    "revision": "95a90c178200a38b0e1f463a5e4ae0f6"
  },
  {
    "url": "assets/js/6.8416b583.js",
    "revision": "46652f0243c3ee95f9b82cc7aa877f81"
  },
  {
    "url": "assets/js/7.89dbdac6.js",
    "revision": "99d1625e39d73a3b8fe951bba9a601ba"
  },
  {
    "url": "assets/js/8.0bef6fb3.js",
    "revision": "1ab4ae97d81d8c68e764ec8b02653384"
  },
  {
    "url": "assets/js/9.e0ad26ef.js",
    "revision": "55d46b628925def5c60bd35c0f338ba1"
  },
  {
    "url": "assets/js/app.758d1f85.js",
    "revision": "b3e2044a96725a96e4186cbdbc8e4252"
  },
  {
    "url": "categories/index.html",
    "revision": "c9672a3f2c6e1f1524277ad105d4cdc5"
  },
  {
    "url": "categories/js/index.html",
    "revision": "cf3ab3b3c265606de8880f66dd523b8e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "e092ead626034aa66c340bbf0182b97f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6129a28cea3bd1257e6e61997d50d988"
  },
  {
    "url": "categories/忧伤的年轻人/index.html",
    "revision": "65a58b9aeebfe84f6e5d26752f68233a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "05c59c129f8ad2f1e42d928186f2cf5c"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "78c949a1d6d1d21eca5d0c89b87ee322"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "d0b058daaa237672b1d1c6a394834211"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "9063ffd0454bfe919c56757699b5215c"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "1dcf260e36ae3752e27095818eea3a1e"
  },
  {
    "url": "head2.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "9d2cb0a90a9717a1d465ba9f69090045"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "3a79e4d2eac0505da324604c30ed7621"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "5e47acfc2fdb1e2da1722ad743f1108f"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "7b8e313b19d9e3bc801beadbc34c56b8"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "c8167ecb01126bda79ae9c1a51afdc90"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "751cf9ca2b0645bf9eaf44a696b7a8a9"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "edcf4f976f57b4d4fec61b4750fc81b9"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "bd51e0c880278cce3a853d3c0d628860"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "9d5b09486e6cb0056c80a4b0c5e71db4"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "2485decbb5bfd88c187ba1f0adc16eff"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "078531607c62a5fd025dd3136207e2a8"
  },
  {
    "url": "note/index.html",
    "revision": "e04d68d2edade59b1934e09ba176ce93"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "7dc4b603e63dfbd7a1f9141ed1787050"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "3f3d1ba73221afa506cfd869ff309eb4"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "9aab42973d1fcfb7578cce8dc436811f"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "c62818a01081ee872c30ec45e0de2702"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "f7d07919fd9e041b7dfd12e837a34818"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "f8977ebcda2f7e5a79c8cf9b0fc86b99"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "8b14159dbda80f39e988c4f14a5f4d14"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "ab9b7621223fe2880f137fcea475c28b"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "prog/index.html",
    "revision": "cc1d0c69ec21828073d3230900136ca0"
  },
  {
    "url": "prog/interview/css.html",
    "revision": "6e551f75822e8a8904c985dabfaf372c"
  },
  {
    "url": "prog/interview/ge-ren-jian-li.html",
    "revision": "4a4ced6e94a439e8102e31c67f024f4e"
  },
  {
    "url": "prog/interview/html.html",
    "revision": "0e55b02463f8e13e722ed7d725cf8213"
  },
  {
    "url": "prog/interview/javascript.html",
    "revision": "c90565a5009f262fce16300231a434f1"
  },
  {
    "url": "prog/interview/jing-dian-mian-shi-ti.html",
    "revision": "8e410c62e338a563b90c3b002878f9f0"
  },
  {
    "url": "prog/interview/mian-shi-jing-yan.html",
    "revision": "c8730eb5315381472c030073ea2d3422"
  },
  {
    "url": "prog/interview/vue.html",
    "revision": "43cba06af71771a755ac6c40d21e1a02"
  },
  {
    "url": "prog/js/bian-liang-lei-xing-he-lei-xing-zhuan-huan.html",
    "revision": "6bae1b39d6670d1179bd98be00b8d165"
  },
  {
    "url": "prog/js/bom.html",
    "revision": "2be47e38dd72a153876b088b80248e10"
  },
  {
    "url": "prog/js/dom.html",
    "revision": "4462c50643346aca6cf93aac74338f68"
  },
  {
    "url": "prog/js/es6.html",
    "revision": "3f873e11b62bf85c588eee766aa3786d"
  },
  {
    "url": "prog/js/this.html",
    "revision": "93ad7973d0a32eb35b0336c917ed099e"
  },
  {
    "url": "prog/js/yuan-xing-lian-yu-ji-cheng.html",
    "revision": "7e58bbce102d93262a29f6afcff269f0"
  },
  {
    "url": "prog/js/zheng-ze-biao-da-shi.html",
    "revision": "4f5fa4f7981105a99eb2ed864bb9261a"
  },
  {
    "url": "prog/js/zuo-yong-yu.html",
    "revision": "0d823add1d2efa6baf8d6bf5e6f39fd6"
  },
  {
    "url": "prog/vue/ji-chu-mian-shi-ti.html",
    "revision": "5de42069fd0cc15f702da48184c224d1"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "f830c8188e33b333b11a878374572780"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "755eb46fa82518d8ae6e10fe8577c975"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "5d54122c5cbd8a8a014581a800dc0d0e"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "588d49d6d0b9b5c13a321bdea7385f8a"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "6193837ad05a7242456128a0a6db7e69"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "428585a197858616741a2e91853b9d73"
  },
  {
    "url": "tag/index.html",
    "revision": "23af16eecf8f0ac80375835ae910bd6c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "910e1b106723722c00e78607d211b3c3"
  },
  {
    "url": "tag/this/index.html",
    "revision": "bb4f4342bb16f19fccb072f863329918"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "48b15ad0dfb92bce1dc8ff21c36a2996"
  },
  {
    "url": "tag/作用域/index.html",
    "revision": "c0a4549a442e4a723f0494d16c30f331"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "91e701b52f3efbd39fc5e15bf30f8aa7"
  },
  {
    "url": "tag/原型链与继承/index.html",
    "revision": "8d29be4bbb17db8c061135592f36b0e2"
  },
  {
    "url": "tag/变量类型和类型转换/index.html",
    "revision": "7c79b7cedfe79ec4562ed84c07b28efc"
  },
  {
    "url": "tag/基础面试题/index.html",
    "revision": "e43428adcf9afb127496a75cfac11d09"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "3ba7859feba6b811b1ea316ee11ab484"
  },
  {
    "url": "tag/忧伤的年轻人/index.html",
    "revision": "d36d80f088be476c8b3184a3d0e67117"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "87d5cd4f3c4a3003a8a2f190cad5b0cd"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d10fb6aa6c124dcec33159bb7767fd0f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "e16cf7a0907de18bc801bf4feca0a2d6"
  },
  {
    "url": "timeline/index.html",
    "revision": "f20532aac403d8f260ca0c0401aec109"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "680b3d7d716bdda2e8ee7b0333a02c65"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "1a46396579cd2c7f565c9b3233449bb5"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "bcb29c8efdcb60c72034b7b6929f172b"
  },
  {
    "url": "views/you-shang-de-nian-qing-ren/player.bilibili.html",
    "revision": "e7dff49948a94f67270bcda33bb86ae0"
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
