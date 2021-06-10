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
    "revision": "13645c8053a5a0628fa0aad2bec3b9b6"
  },
  {
    "url": "about/index.html",
    "revision": "25f373220ae7ff8f330aa59833be82fd"
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
    "url": "assets/js/1.f51b8c6a.js",
    "revision": "777daddae69bb786c53218c69d3ffa99"
  },
  {
    "url": "assets/js/10.99f50d28.js",
    "revision": "b1bf2873f176ea849df4e885dde79297"
  },
  {
    "url": "assets/js/11.68918f33.js",
    "revision": "72fe4c135cdd624dd5caf4ec63900853"
  },
  {
    "url": "assets/js/12.78047c09.js",
    "revision": "7bc59a4d20dc4782317499216ab41c56"
  },
  {
    "url": "assets/js/13.940c8fb8.js",
    "revision": "bec4f831da8652162bf890b23b42b245"
  },
  {
    "url": "assets/js/14.42289261.js",
    "revision": "2c55b304b6f052705c9c9351c127cd59"
  },
  {
    "url": "assets/js/15.a2d1db8c.js",
    "revision": "dc3508589a925fc819756a2af2e0bc02"
  },
  {
    "url": "assets/js/16.ccdad454.js",
    "revision": "54fedda986c6d91cf12b517cf9516520"
  },
  {
    "url": "assets/js/17.6f6e7fec.js",
    "revision": "8b26e0a064e6b76fdf9ae1b475e1022c"
  },
  {
    "url": "assets/js/18.053dd8c3.js",
    "revision": "30f745f01cdc18c71e38e80d1ab90e3f"
  },
  {
    "url": "assets/js/19.45869df6.js",
    "revision": "ea7ac0a09f179c5406977662f0a44936"
  },
  {
    "url": "assets/js/20.08900cfb.js",
    "revision": "da207ca92b909608815b65ce10f84589"
  },
  {
    "url": "assets/js/21.4929119e.js",
    "revision": "261a4754c2428254f64752cd80f8c559"
  },
  {
    "url": "assets/js/22.45f0e8ca.js",
    "revision": "16af54e1d098d92f868dfd11c8d539ba"
  },
  {
    "url": "assets/js/23.6f584b70.js",
    "revision": "3ca69ea4f9c409f7b85f923ebcf342a0"
  },
  {
    "url": "assets/js/24.d77e042f.js",
    "revision": "4a741f244062889a923ab5cfa8a79333"
  },
  {
    "url": "assets/js/25.609cfe6f.js",
    "revision": "bcd0d614a540dcf0beec2777a6106097"
  },
  {
    "url": "assets/js/26.441f699a.js",
    "revision": "c961fd7a6f849b5e747658480180b317"
  },
  {
    "url": "assets/js/27.fde3b823.js",
    "revision": "a76394ce3aef3bacc9f812b4434db66c"
  },
  {
    "url": "assets/js/28.9ee0ba0a.js",
    "revision": "aad2dd0eb5a69824b1f26d90de196d20"
  },
  {
    "url": "assets/js/29.db46f6e0.js",
    "revision": "5a2d4d24414d55c5ca3f071750bad4d9"
  },
  {
    "url": "assets/js/3.2ec75dc5.js",
    "revision": "44d032428dd4d91ee666ff0f51fff3c0"
  },
  {
    "url": "assets/js/30.1979dde3.js",
    "revision": "6adad15f8808391e3dae35dfe6ca9171"
  },
  {
    "url": "assets/js/31.516fdf9f.js",
    "revision": "92a89d39113f3f804f43cfa2b947438e"
  },
  {
    "url": "assets/js/32.0b040f13.js",
    "revision": "f618d7f89557a9e281659b6c8d316bdf"
  },
  {
    "url": "assets/js/33.87d17280.js",
    "revision": "cb003b67f143a3418d5a1ce88d683c75"
  },
  {
    "url": "assets/js/34.cab1dab7.js",
    "revision": "c74266ab3938a0f50960f72074b25cd2"
  },
  {
    "url": "assets/js/35.6ff30a1d.js",
    "revision": "c1ef0f5de71a44c56ac2a61a47df5cec"
  },
  {
    "url": "assets/js/36.ee01ee58.js",
    "revision": "466bc537c7a3bd64eda8e5d333920c52"
  },
  {
    "url": "assets/js/37.fb3724b6.js",
    "revision": "cbb62854be437d8370eb9d34cb923ade"
  },
  {
    "url": "assets/js/38.38047c81.js",
    "revision": "65035118f310cad28ba834eacf592731"
  },
  {
    "url": "assets/js/39.15710e22.js",
    "revision": "8a5489000c24a07a8e1ac02205f2d8ac"
  },
  {
    "url": "assets/js/4.779465c8.js",
    "revision": "80db9f7a3e13ae734f0a10cdb79f2faa"
  },
  {
    "url": "assets/js/40.c362e7c0.js",
    "revision": "632122cfc2fe427dfa472c3f21608979"
  },
  {
    "url": "assets/js/41.ea349f4c.js",
    "revision": "15fed64f36de8b6a51afab70d7b6a950"
  },
  {
    "url": "assets/js/42.8012ef06.js",
    "revision": "cdc157ee76bf2149124b9c804069ed4c"
  },
  {
    "url": "assets/js/43.449a6c09.js",
    "revision": "47b455b68d21e8d82074d3ccf821efca"
  },
  {
    "url": "assets/js/44.f885c52f.js",
    "revision": "cf84befaaa9407d122f2e64c069f9c3a"
  },
  {
    "url": "assets/js/45.df07a16f.js",
    "revision": "a4daf952edaa42cc12da9d87859ad630"
  },
  {
    "url": "assets/js/46.23543b03.js",
    "revision": "95f781acc7f0da1ce048e217ff2ed74a"
  },
  {
    "url": "assets/js/47.4f2e9b6f.js",
    "revision": "1fa9157a201a60efd9dc49d9b8ff669d"
  },
  {
    "url": "assets/js/48.0562a4e9.js",
    "revision": "b2aeb139752bcf2e718b63a04b411564"
  },
  {
    "url": "assets/js/49.d43201f6.js",
    "revision": "cb3dbfa6a7193c0620cb1007977f7da8"
  },
  {
    "url": "assets/js/5.4955cefb.js",
    "revision": "8d9242fd814ad13ec3602b87c1ceb2d5"
  },
  {
    "url": "assets/js/50.2fed84d2.js",
    "revision": "3038b61118319429159936144309e89c"
  },
  {
    "url": "assets/js/51.0914825d.js",
    "revision": "f36f6f27a84d75c4f5b90a71ed4439be"
  },
  {
    "url": "assets/js/52.17c1e1a4.js",
    "revision": "749133c626015da21f124a6f8fea876f"
  },
  {
    "url": "assets/js/53.844f8768.js",
    "revision": "e4a05111c617abfeedba120077051449"
  },
  {
    "url": "assets/js/54.e7a61c99.js",
    "revision": "d2d026839f619cd82edb69452373bb2e"
  },
  {
    "url": "assets/js/55.be75b565.js",
    "revision": "5bb3cbcbe0a8ccf8f82efe66d1417263"
  },
  {
    "url": "assets/js/56.591b5655.js",
    "revision": "894b0049b00fdf4a87ab47ad05e4f1d7"
  },
  {
    "url": "assets/js/6.ab5d511a.js",
    "revision": "1605ffd351e2e850b2538573ad0ca122"
  },
  {
    "url": "assets/js/7.5af53ae9.js",
    "revision": "0058c75616cfb005fd519ab2d6cb4d45"
  },
  {
    "url": "assets/js/8.cc385a7e.js",
    "revision": "dd4f92de8f32eb5eb260fa1a2ca4b6df"
  },
  {
    "url": "assets/js/9.8f044cd8.js",
    "revision": "84122a87ffc29e00d160301d7f406335"
  },
  {
    "url": "assets/js/app.a51b33fc.js",
    "revision": "4442b1fc1315886dceeb44fbbd95e602"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "59e7ad39387f20420459452618f623c9"
  },
  {
    "url": "categories/index.html",
    "revision": "707521de3d0f39efef5afcbc0e513c65"
  },
  {
    "url": "categories/js/index.html",
    "revision": "45aeb2ac0a6668fbb1d30ae1f9a0cca8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "17591b95ea36a4456863fee552df7518"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a97f29edbda6d0666672c618c5d45ec4"
  },
  {
    "url": "categories/忧伤的年轻人/index.html",
    "revision": "1fc3421d51917a19f73678dda5b0e99f"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "49c30527507626ae3e844b59e84bd36f"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "ee1450415923d1db30058c42a47fa680"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "228ef99bd07961a9fe40a099e70bc99b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "eca2917a583e1a1d86dde962413a1b1f"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "112fb884861af91c8892934c07d7d3fa"
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
    "revision": "ec9380aaccc3ef15b7150505a7c5f524"
  },
  {
    "url": "import/index.html",
    "revision": "f3408b4b5778959046e4dce23f99811e"
  },
  {
    "url": "index.html",
    "revision": "6ba158b3bafe8119b1a379dc4520e357"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "6596a597d6558a6eabe27d5b3ce6109c"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "ba3a013f4e33b2d952844a542584ac40"
  },
  {
    "url": "note/es6/shu-zu.html",
    "revision": "c7477031d18677b64aa2d340202400e3"
  },
  {
    "url": "note/es6/yi-bu.html",
    "revision": "4d965a95eb0f7910b9e737ecde05ad9a"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "587bd3ba9676b50738be449194cbd7cf"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "27beb9194e3d9576b34e428f9f873b7f"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "acb28c205a9adf9b2036f3376971280d"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "30398f4863d0eb434ca3213647ab287d"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "6bdeb3fb82cba3cb068520fef43765bf"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "a192e2fc60f09068e5e6ead426d09196"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "10d6725daec02da5f1ce0b4ef309e26b"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "51c5311dff2a541ee73bd9974203748e"
  },
  {
    "url": "note/index.html",
    "revision": "9f851c73c2e0d0b2b1c2ec8b6c93668a"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "24db57a582e286413132481533934706"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "4c11384dd3af29991f37617a70c917ea"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "9ae5e3e44d075f85dca3f9e6baaf6053"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "2b574d635ab61f687a60b55a778149c4"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "77c3ea0b47fd83e68e4532fa1067b84b"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "a6039c975174485b2cb94df77db33033"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "5f87910a4bf33e32813b5c5a0fffa6c7"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "82caa5535c8b15ab9ae3147df3e9c8d1"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "prog/index.html",
    "revision": "19cf6303cb2bda303e56019dc835acac"
  },
  {
    "url": "prog/interview/css.html",
    "revision": "78e64cd0908053a96a2e7dd7d6456682"
  },
  {
    "url": "prog/interview/ge-ren-jian-li.html",
    "revision": "3c7df330ed2c4ea607bcad1c88868154"
  },
  {
    "url": "prog/interview/html.html",
    "revision": "9c55e49db0bf1a1f0e174bedfd4899ad"
  },
  {
    "url": "prog/interview/javascript.html",
    "revision": "7fb31fe23d5d8ff1ec0f47361a6c6796"
  },
  {
    "url": "prog/interview/jing-dian-mian-shi-ti.html",
    "revision": "72866f10367c0fa2a973ea90ca9c8fd0"
  },
  {
    "url": "prog/interview/mian-shi-jing-yan.html",
    "revision": "e3e9ceec31c8a29bf843d4abf2edfaa3"
  },
  {
    "url": "prog/interview/vue.html",
    "revision": "0fed09a1819702e3b1e49906f601717b"
  },
  {
    "url": "prog/js/bian-liang-lei-xing-he-lei-xing-zhuan-huan.html",
    "revision": "2912b043dde2445246c80ddd540a75bd"
  },
  {
    "url": "prog/js/bom.html",
    "revision": "c2e35bab9c27de31fa09d94498df493d"
  },
  {
    "url": "prog/js/dom.html",
    "revision": "091c9f1db436d6c97f24bf2ce061c24e"
  },
  {
    "url": "prog/js/es6.html",
    "revision": "6edc903028ab9e02fb4e1aa856151306"
  },
  {
    "url": "prog/js/this.html",
    "revision": "4d91abf7f43a5d5ba9746c1bff5d1590"
  },
  {
    "url": "prog/js/yuan-xing-lian-yu-ji-cheng.html",
    "revision": "1547e6e6d5f0ba838540a82c8ca61054"
  },
  {
    "url": "prog/js/zheng-ze-biao-da-shi.html",
    "revision": "1628448095d05e1fe34bc4e43797b250"
  },
  {
    "url": "prog/js/zuo-yong-yu.html",
    "revision": "0d0b7320e95ee71d43db1f538d9fcd22"
  },
  {
    "url": "prog/vue/ji-chu-mian-shi-ti.html",
    "revision": "ae522442de3a79d654d30a4d38acc5d6"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "77a08a70656db99d90f51460faa55923"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "a9816c807dcd4cc8bffff92e8999da4e"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "a4de76f4f0be7d5f593622a746dbd852"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "e534bc2070a89874b00de7f5022d4a72"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "9255d7520e59a95d4cf267e90e4e92ab"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "a5ea07856a809206e042729670023aa0"
  },
  {
    "url": "tag/index.html",
    "revision": "80445d97b410a4f30d89441b336b633b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3cc44492dae9ec0d6b0d221d3346045c"
  },
  {
    "url": "tag/this/index.html",
    "revision": "2f6a46182a62c0cea42059a6620b1a3c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0d487f5199a681438de0fe1158471be2"
  },
  {
    "url": "tag/作用域/index.html",
    "revision": "eb5ecb6ba5ab070b04677a3ad9cec37a"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "7f0e1d893c24c1b337b4771e58377d48"
  },
  {
    "url": "tag/原型链与继承/index.html",
    "revision": "663d6fe2aefbb0ceac63de5dcb5b42c1"
  },
  {
    "url": "tag/变量类型和类型转换/index.html",
    "revision": "711d70ae797f3179402374a5c4922301"
  },
  {
    "url": "tag/基础面试题/index.html",
    "revision": "c70012b6c6fa45cf4c64c60d078b28bc"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "a8caf5715dedb35bbfed73d2dcc6e35a"
  },
  {
    "url": "tag/忧伤的年轻人/index.html",
    "revision": "e0740dc6a7fa8d75fa9297f398cc2d08"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "c0564f0a478a6b85ab2d083c7af61fcf"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "363eaa39cd45f9258c286dc747041bb3"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3094747b45b8a1f9304115a584ef8f84"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6a970ad106f04eee92a9c5821a9073e"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "aad7d3f6c2f62374a9430fe7e537d35b"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "557d71739194c1ce591e90539ce9c098"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "82e6a2b3cea1affd5678252b491bb5d0"
  },
  {
    "url": "views/you-shang-de-nian-qing-ren/player.bilibili.html",
    "revision": "8dfbaee7fb1ffa045241888d67e648c6"
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
