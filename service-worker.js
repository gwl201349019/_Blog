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
    "revision": "58153e237369cad28001dd525366f979"
  },
  {
    "url": "about/index.html",
    "revision": "109b3b32842573d66f6446db36c64c7f"
  },
  {
    "url": "assets/css/0.styles.87d273f3.css",
    "revision": "0abdaf57672c927e4e677e90b8074de8"
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
    "url": "assets/js/1.71d485bc.js",
    "revision": "969f75ab4d0b84f5ec5d4c492a53afc7"
  },
  {
    "url": "assets/js/10.ceb78c2d.js",
    "revision": "7dd8ab729e6d8e15a08fb378768c768d"
  },
  {
    "url": "assets/js/11.c7f4b8b6.js",
    "revision": "1a4d79707c28f834d2ad9a65a8c4a2d9"
  },
  {
    "url": "assets/js/12.10933134.js",
    "revision": "feec6f0701a9375ca64bc55122dcdd76"
  },
  {
    "url": "assets/js/13.f86230d3.js",
    "revision": "b92e0d9974d354ea589089109e86fce2"
  },
  {
    "url": "assets/js/14.2fb19a3d.js",
    "revision": "ec072d3a9ce316ee7be5dc9ee3221cec"
  },
  {
    "url": "assets/js/15.8d4f0dc3.js",
    "revision": "18a53a9df12955b4b5b393fce1b74946"
  },
  {
    "url": "assets/js/16.a5babae3.js",
    "revision": "ae90bdfac07277cf18b963cd8e7de31b"
  },
  {
    "url": "assets/js/17.e155edfa.js",
    "revision": "ff2199a3d135b821a56ded21dfeac5d5"
  },
  {
    "url": "assets/js/18.a26ff85c.js",
    "revision": "9566e52327eaae192596699b02b8eb5d"
  },
  {
    "url": "assets/js/19.e53d84a1.js",
    "revision": "a5d1ac8ce56e4e3b8654886fc04e9ee4"
  },
  {
    "url": "assets/js/20.cd08af3f.js",
    "revision": "e762335879fee6c68a710f9b3722bc50"
  },
  {
    "url": "assets/js/21.79e57a42.js",
    "revision": "3b983c535a97ae1665a5b71c364921f9"
  },
  {
    "url": "assets/js/22.0b0c41b6.js",
    "revision": "d6ff992e9514e5295071595b0f31d50a"
  },
  {
    "url": "assets/js/23.551886f7.js",
    "revision": "a3d272eb6fc12ca2c4ebd169705ae740"
  },
  {
    "url": "assets/js/24.c26cdacc.js",
    "revision": "6320247d73004ad1094f257b824e933b"
  },
  {
    "url": "assets/js/25.e7acc1b8.js",
    "revision": "1d543ee2ba201f012abcb04c6784d779"
  },
  {
    "url": "assets/js/26.e6235159.js",
    "revision": "69b9318ed42dc531526e8912bd485bc1"
  },
  {
    "url": "assets/js/27.937728c7.js",
    "revision": "7b8204c76df80bc1e53a8f2cab21d02e"
  },
  {
    "url": "assets/js/28.c7551a36.js",
    "revision": "0e4cb512d270bc8acf0377124d75a7ba"
  },
  {
    "url": "assets/js/29.8d6ceda9.js",
    "revision": "dc7309da7556f951a72acbaba9547f0f"
  },
  {
    "url": "assets/js/3.da965cd3.js",
    "revision": "0515bad95c3e6eb54a3dc378a826a759"
  },
  {
    "url": "assets/js/30.73e49c0f.js",
    "revision": "23be3d97587d8d2409a4184dbbab1e6c"
  },
  {
    "url": "assets/js/31.5a861043.js",
    "revision": "208c714e933741e141eb507b599763f4"
  },
  {
    "url": "assets/js/32.c26a92ae.js",
    "revision": "2e6497a2ea962506504b058530bdc30d"
  },
  {
    "url": "assets/js/33.7c77a354.js",
    "revision": "78f4e61d40150b3f9ca932a6e6d8f7b6"
  },
  {
    "url": "assets/js/34.fb77a837.js",
    "revision": "36010c771f03ef3caf3b0800b0b17812"
  },
  {
    "url": "assets/js/35.4e514896.js",
    "revision": "d60f900c00ac9c3b85327febc02f420b"
  },
  {
    "url": "assets/js/36.c2216e5b.js",
    "revision": "d97667ac93092e4819b25dda449de37c"
  },
  {
    "url": "assets/js/37.9b93168b.js",
    "revision": "b12dbd4400ec7250f4635e838b74d935"
  },
  {
    "url": "assets/js/38.b254e60e.js",
    "revision": "4d6f10bf62343932bc7946870c3f88de"
  },
  {
    "url": "assets/js/39.4d8ee0ff.js",
    "revision": "89b820fa886d5223ab3d234c2ea75e31"
  },
  {
    "url": "assets/js/4.6e01f933.js",
    "revision": "6cb1209d801a520a3418a1848d1f824f"
  },
  {
    "url": "assets/js/40.1d1d0de0.js",
    "revision": "58fbbefa675c92470f77a9daf11ad72a"
  },
  {
    "url": "assets/js/41.26297735.js",
    "revision": "ec7c5d6e0df449085ee650bfccf95c42"
  },
  {
    "url": "assets/js/42.16cd88bf.js",
    "revision": "803a7514c400eb26de077dd9989f2825"
  },
  {
    "url": "assets/js/43.c259eed0.js",
    "revision": "d1e78b2047b7e9087b92b759bc346a9e"
  },
  {
    "url": "assets/js/44.af7b2d99.js",
    "revision": "d32a6fb7acb4a291e154f3c3eeea761a"
  },
  {
    "url": "assets/js/5.11b3c914.js",
    "revision": "76100921ca8e4d9394d9a1cddf7d67a2"
  },
  {
    "url": "assets/js/6.e81133ca.js",
    "revision": "2ce82a88883d0f059cf4a9e552cb3b7e"
  },
  {
    "url": "assets/js/7.31c74962.js",
    "revision": "20dd4a62d5e618ed68297b9f2e238e83"
  },
  {
    "url": "assets/js/8.f03d86ec.js",
    "revision": "efcda0484acc874921bf001ae72cd08c"
  },
  {
    "url": "assets/js/9.9a65884f.js",
    "revision": "ddfab3b60923c7dc0ebaf73991ca1072"
  },
  {
    "url": "assets/js/app.bfc340d7.js",
    "revision": "5427935d57f645e0e5df6a088445d509"
  },
  {
    "url": "categories/index.html",
    "revision": "3c2ad5cb8a0d2866c5542b6a49af78ee"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a6945e0892cce2d664c135c1b63ff9ce"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "cc401f68368afe6b472951599030f623"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "4c6fc3b8f6ca7d79bb914b4d1dbf134a"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "337318ba6565768c944650031c8b8f1b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "06a6ebcd560efa6608ee2292238ae9c6"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "dd9e505f366f1732b1b408c25f469441"
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
    "url": "index.html",
    "revision": "a73a3193339e01fef08d859b9fcb5fa4"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "52322366299e929c1ecdc3649e9f1dcd"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "fe0ed792b368022317f6bbbfd65c590c"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "840ef0e8e731298ee5a241668b1adcc1"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "faad3157b57c709bf6d1b5da4ac96b1d"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "eae3d75d968ae5c84e2aac82ba48703f"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "ec0e5d76c71455db15bea5ba68cc0a22"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "0bd882f11e139153885faad95598504f"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "7862d04ad973b56bf28fef078700d42b"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "1b47c66a0fdcafaff56475a026534923"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "c8a280780e61020db29985b8a9b7ca97"
  },
  {
    "url": "note/index.html",
    "revision": "6f504e0a282904d6ea31b27e513a23a2"
  },
  {
    "url": "note/interview/css.html",
    "revision": "452192148efd077c09883f8dcd24843f"
  },
  {
    "url": "note/interview/ge-ren-jian-li.html",
    "revision": "61dd268b8a328c6c8c887327d103dda7"
  },
  {
    "url": "note/interview/html.html",
    "revision": "64f767d983761701d27c8eddd200d916"
  },
  {
    "url": "note/interview/javascript.html",
    "revision": "4fd86b6bbbd21e7b34e9fa1f0bc13d05"
  },
  {
    "url": "note/interview/jing-dian-mian-shi-ti.html",
    "revision": "46c31b5548624dcbf158635e1e4ce67f"
  },
  {
    "url": "note/interview/mian-shi-jing-yan.html",
    "revision": "7eed152e368084bbe8f76f754ab2c4d7"
  },
  {
    "url": "note/interview/vue.html",
    "revision": "5a0f4a9941852a21355109b825d145aa"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "16b2d2c42e5e1b5d079986c76a9fd0a5"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "0dbb08e224c88dd9f19739a3bd41774a"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "abfbe446c1d60d383a3f158a6acd29f8"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "a8c8a9d76c522d7c66d744e780dfa7fa"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "d9104a0ce9e04b0a7fa950b42776e0d3"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "3857aca09a8cf4113b2243a2432d0fdf"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "8ad701bef030dcad948ac9fbf9c75703"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "f473044b89037bf669c62308705b80d2"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "c8972d1c39768166d65f55cdd15c7523"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "4d03e38add4984cdfe63522419fda133"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "46df78a267cbcc106739ce276fddf468"
  },
  {
    "url": "tag/index.html",
    "revision": "df148d1d512d60b98b8cb9add7cbaaa1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "06ed8f9cd3d466afb325520a1a3732ae"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0b1386662151d110153e13037a9e8f86"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "6fe9ae7256058db9638c3b4d97ed8bf6"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "09daf83f8bfec82f1318077f4bc49ecb"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "4ddbebd6c707b0f42c05d808835fcfc3"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "6510a5e0371a646c093a7708a25dae4a"
  },
  {
    "url": "timeline/index.html",
    "revision": "bc760d6388d55ab872e5c0b333d98132"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "a674fcba14b4330b6a660dcaf7d0d426"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "349628216df07dada861524ddd55d8ae"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "d30ee59e7165cd0701fceacd2059d00b"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "7adf4a4bc8c109de13e255f8a842f645"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "1f422ad19989003706258994d102bb20"
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
