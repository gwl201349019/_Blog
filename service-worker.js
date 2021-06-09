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
    "revision": "23e562b6642b4c89ffb37473a4b59c9a"
  },
  {
    "url": "about/index.html",
    "revision": "fd598c2974d39adb6223f44dde2e7bd6"
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
    "url": "assets/js/11.71fd4ead.js",
    "revision": "28a53c5f185bfe97e22750597936b47e"
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
    "url": "assets/js/14.0f551cfa.js",
    "revision": "08cea90875361cbe981a76fa457aade3"
  },
  {
    "url": "assets/js/15.6aa61498.js",
    "revision": "c78cf66cef2734d316dd0d26376c1a80"
  },
  {
    "url": "assets/js/16.ccdad454.js",
    "revision": "54fedda986c6d91cf12b517cf9516520"
  },
  {
    "url": "assets/js/17.7a3d97b0.js",
    "revision": "f3fb4a3b4a30e489ae06a0b625a05372"
  },
  {
    "url": "assets/js/18.d7259eb9.js",
    "revision": "b7e1b74ad78254c5892316780f2926af"
  },
  {
    "url": "assets/js/19.67321c23.js",
    "revision": "eef1e03837f0ed9ff7f4ad3b23dc6026"
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
    "url": "assets/js/23.5fe6c07d.js",
    "revision": "c3309257045795f41af3ec02ee456cb4"
  },
  {
    "url": "assets/js/24.c24f6684.js",
    "revision": "1629e4369ebeacefc242fe70ade0454b"
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
    "url": "assets/js/27.5243ed8b.js",
    "revision": "42d01622d201136f63031a4c20165539"
  },
  {
    "url": "assets/js/28.9e4c8ba0.js",
    "revision": "6353e27669d9ad668d2043c5a4e69275"
  },
  {
    "url": "assets/js/29.3c25b447.js",
    "revision": "b28ce3feffa0f97864a86686d1fe5cd9"
  },
  {
    "url": "assets/js/3.2ec75dc5.js",
    "revision": "44d032428dd4d91ee666ff0f51fff3c0"
  },
  {
    "url": "assets/js/30.dd8f3c42.js",
    "revision": "630ba40f6e798a9e3d2fafbcd20f5a22"
  },
  {
    "url": "assets/js/31.e104cd87.js",
    "revision": "d704d41787c3932feeaf4433da7c3c34"
  },
  {
    "url": "assets/js/32.4b909652.js",
    "revision": "ae34ad130f5367c260c5cda122171396"
  },
  {
    "url": "assets/js/33.87d17280.js",
    "revision": "cb003b67f143a3418d5a1ce88d683c75"
  },
  {
    "url": "assets/js/34.b20c0ed4.js",
    "revision": "545b13458b7ff569293f88aba7cbd378"
  },
  {
    "url": "assets/js/35.698de50a.js",
    "revision": "ac94f87eac0ba3f44e77f390cbe1a2d2"
  },
  {
    "url": "assets/js/36.2319834e.js",
    "revision": "6559f85ef26a17783a5e62a3ddb3689a"
  },
  {
    "url": "assets/js/37.fb3724b6.js",
    "revision": "cbb62854be437d8370eb9d34cb923ade"
  },
  {
    "url": "assets/js/38.a8c91d60.js",
    "revision": "20c52ee877955d867f0eb4e9b6a8b0ce"
  },
  {
    "url": "assets/js/39.c29b78e6.js",
    "revision": "1703bf41d2550a35fcb12273d2b7fcee"
  },
  {
    "url": "assets/js/4.779465c8.js",
    "revision": "80db9f7a3e13ae734f0a10cdb79f2faa"
  },
  {
    "url": "assets/js/40.c99304c6.js",
    "revision": "98ded3c062a4c5670e09a4227551635d"
  },
  {
    "url": "assets/js/41.841df54e.js",
    "revision": "b3b38114f7409ade24d305a5a05c2b1b"
  },
  {
    "url": "assets/js/42.d7aede21.js",
    "revision": "1c9ac167b58462797e505c906372b40a"
  },
  {
    "url": "assets/js/43.5ca78dfe.js",
    "revision": "86a42a7ff2dc4b2db006944eba3e0cf6"
  },
  {
    "url": "assets/js/44.90968447.js",
    "revision": "29cf1abd47890bf62e6a9818a21612b6"
  },
  {
    "url": "assets/js/45.e78fd8ef.js",
    "revision": "0d3102d2d3814a229b46e9ecdf77e7ad"
  },
  {
    "url": "assets/js/46.d5c4c7e6.js",
    "revision": "0dbc7e51986369e4534c63f9cd6e40e3"
  },
  {
    "url": "assets/js/47.4f2e9b6f.js",
    "revision": "1fa9157a201a60efd9dc49d9b8ff669d"
  },
  {
    "url": "assets/js/48.47b4d0ba.js",
    "revision": "0b65c392132536af6041342b772c9f1b"
  },
  {
    "url": "assets/js/49.9296316b.js",
    "revision": "e2aa119b5acbde36f55c5a20d7e4cf90"
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
    "url": "assets/js/52.157b2d76.js",
    "revision": "fb15f8603d871968a7f88b41ddb8e8b4"
  },
  {
    "url": "assets/js/53.083e4a1d.js",
    "revision": "8cc8d851bc7f82f1357c297b17af4b71"
  },
  {
    "url": "assets/js/54.67618f01.js",
    "revision": "4e3341e26d1d148e0215477339d28571"
  },
  {
    "url": "assets/js/55.8f85d4d6.js",
    "revision": "ddc7da551947bfdcbba7542cb4d80001"
  },
  {
    "url": "assets/js/56.7a5ce06d.js",
    "revision": "9c5c557931c85efbe53b9002ad3327ae"
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
    "url": "assets/js/app.f68c788d.js",
    "revision": "4ea858020b8499ff2ed0ecf004c78c17"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "02da114accea22bc68a73d20887679c2"
  },
  {
    "url": "categories/index.html",
    "revision": "14e5298bce32b2a6c0d03f84a4a601cd"
  },
  {
    "url": "categories/js/index.html",
    "revision": "dad228509948f57619abefcb6cc6bf6f"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "7263c7e4e7be4ce28be9216b0e8403c3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "be127c64a13fbda4c46abb6ed39ca53e"
  },
  {
    "url": "categories/忧伤的年轻人/index.html",
    "revision": "b9198369831ad30fa67d3d651bb977fb"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "6a7f4656fe5ff7bef8d3320dedca48c2"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "e49d8242e5038a35175aefbb492ae137"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "1d2db21af1ed5712d42456fe18c2d0ed"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "d37ce989b81805d1c586261c33736477"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "3ad0e32b59df45389e40a0871747ea66"
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
    "revision": "c0889b16f91e3301f18126c4ab5354f2"
  },
  {
    "url": "index.html",
    "revision": "7ca0de18f12c2753b0f61c315695ad59"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "771b40f36a6d0605fee5748464f81266"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "b2a006f44da9a77c0c0302745ff3cc67"
  },
  {
    "url": "note/es6/shu-zu.html",
    "revision": "f720bd6777b4e4c11fcfc1e61145fab7"
  },
  {
    "url": "note/es6/yi-bu.html",
    "revision": "d3563500199856c79eea7ca8de2d1371"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "30d765a1692c15b5a4d2699a70d5b5e5"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "8c106e79c2d60269f514c3718934289c"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "093541db27267de4b412a2e80dac71b7"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "39719318bd9fba29b321bdd5c5af625d"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "442673486178a2c4cc352b9194dfbb31"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "06c1d2b2e822ada4c7018f06e6118093"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "e00ffef3062b3cd68185816cfb4d6eef"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "e64bbcaca2fb81f7517752d13f28e2c9"
  },
  {
    "url": "note/index.html",
    "revision": "17d88c8d869c4f3345551cd3587c995f"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "430028c074767761895df096214edc55"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "39b9b030ccc15dd4e76a28a1eceaff39"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "ece2d7f1927ddbb1e6ecfe1b98800821"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "8094f12088cd0a8673e2a8d976fe3c0d"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "764e00db693917a984602ac2dfa06ac2"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "8a0ffa86f54f0f2688acd3e39b9341af"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "c128a9dc3cf086b1ac730096ad812148"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "44e00e54dda59457d5fb421c3f058cde"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "prog/index.html",
    "revision": "5a435a758a369c8b244d774a82114da3"
  },
  {
    "url": "prog/interview/css.html",
    "revision": "98cfbd38a4246f8d0d25dba39a456c74"
  },
  {
    "url": "prog/interview/ge-ren-jian-li.html",
    "revision": "21858757deb0ca6f439a083282654203"
  },
  {
    "url": "prog/interview/html.html",
    "revision": "3bf9ff9a7bdded626085be395f72ac16"
  },
  {
    "url": "prog/interview/javascript.html",
    "revision": "70ca678512de70408837ef0ff944756a"
  },
  {
    "url": "prog/interview/jing-dian-mian-shi-ti.html",
    "revision": "19d0f47092c68ad6afc31378fb8ba748"
  },
  {
    "url": "prog/interview/mian-shi-jing-yan.html",
    "revision": "bdbb1da353c565e86a8a16806c023ba3"
  },
  {
    "url": "prog/interview/vue.html",
    "revision": "773e5a3eb08718262c3339e6b67aec73"
  },
  {
    "url": "prog/js/bian-liang-lei-xing-he-lei-xing-zhuan-huan.html",
    "revision": "621b97fb750b1d23742d03ffdccf9e5b"
  },
  {
    "url": "prog/js/bom.html",
    "revision": "e8f5ea5b0992e7d3e4ef4c1fe8848c5e"
  },
  {
    "url": "prog/js/dom.html",
    "revision": "3e40d1e691adfa92be63bf2cddc5ac17"
  },
  {
    "url": "prog/js/es6.html",
    "revision": "b6581366633129a3765d570db07dbdf5"
  },
  {
    "url": "prog/js/this.html",
    "revision": "5a66b552f739dcedc66b338353b5ec77"
  },
  {
    "url": "prog/js/yuan-xing-lian-yu-ji-cheng.html",
    "revision": "3ef7734bac7315c5a6498901a83db7d7"
  },
  {
    "url": "prog/js/zheng-ze-biao-da-shi.html",
    "revision": "642b689ea9790cacc11d73127181b833"
  },
  {
    "url": "prog/js/zuo-yong-yu.html",
    "revision": "6c2ed95e8fe0292d0149cee2a90abbf1"
  },
  {
    "url": "prog/vue/ji-chu-mian-shi-ti.html",
    "revision": "ba6529a5adcba4985d66022bf5534c0e"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "1ece80a495bc6b75c4de1a915b1cd8c8"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "8a72123030df03244b4668e2be60f1ee"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "c5631c21820a662f46bb5d20c056a793"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "7e2fe51a6186a1b3276411bd6cac81fa"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "6da9fbafe0bff1578d2b510d3b9fb12a"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "de8a42a92f57c5c54691e7c25393c97b"
  },
  {
    "url": "tag/index.html",
    "revision": "799e5c3465e81748cb44db053fb3c66f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9735d91205c1ab1f2cf796f552b0bed6"
  },
  {
    "url": "tag/this/index.html",
    "revision": "73d8fdec445a74e755c28acf09d2fe5c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3afd2b88b0e0cb1ff11f28c93598fe99"
  },
  {
    "url": "tag/作用域/index.html",
    "revision": "d234d476fe16aade145d143aa743385e"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "f7b79679eb728a8adce4ece5804f5bfa"
  },
  {
    "url": "tag/原型链与继承/index.html",
    "revision": "18658c0e73f61af4f6f78751cf98d821"
  },
  {
    "url": "tag/变量类型和类型转换/index.html",
    "revision": "f904034bd3957be67b1c2227c777e007"
  },
  {
    "url": "tag/基础面试题/index.html",
    "revision": "7e3f69200fbc61b7d02d9b4d5cd0ae8a"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "ff28c12d3142d56cfc89cfff71db0226"
  },
  {
    "url": "tag/忧伤的年轻人/index.html",
    "revision": "60ca206c835940e29beb545cef365968"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "eb241d59ef1dee3aacd78db9f6a65d45"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "5787cd55e15f82232d44d3ecd16c213c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7553460d9992f2fd1a08cab672678c1d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f255ca6985cbd8bd76f8d1aec7c4b4e"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "2b26118ecc05036ea716d006197fcf73"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "aee96cc6816b27e08e22a35aa3676201"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "fd82b62dbd0e06313a87d80844af9a0d"
  },
  {
    "url": "views/you-shang-de-nian-qing-ren/player.bilibili.html",
    "revision": "57692b0785d6e1941c13b8cdd9480269"
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
