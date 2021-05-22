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
    "revision": "595de6ac43da7e8146f81cf3d46a82e0"
  },
  {
    "url": "about/index.html",
    "revision": "41b833062ef50bda2ef8ef7f94526810"
  },
  {
    "url": "assets/css/0.styles.2132ca66.css",
    "revision": "522e5f3cd6d0e25a18310e1c2d3ad733"
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
    "url": "assets/js/1.8c9837c1.js",
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
    "url": "assets/js/12.c9b72620.js",
    "revision": "c6bb11108ee368d61e4d37447c0f8d75"
  },
  {
    "url": "assets/js/13.e0c0c6fa.js",
    "revision": "60538d7a2f9effaf0f7349e7ebf3a814"
  },
  {
    "url": "assets/js/14.87f3447b.js",
    "revision": "4643c9d161e80bf84eb22c8f19231241"
  },
  {
    "url": "assets/js/15.115f0f15.js",
    "revision": "4546ca0e75672e816c386242a440727e"
  },
  {
    "url": "assets/js/16.a5babae3.js",
    "revision": "ae90bdfac07277cf18b963cd8e7de31b"
  },
  {
    "url": "assets/js/17.100f0862.js",
    "revision": "4506bf50bf9a44c4ee0834a1c0f71e2d"
  },
  {
    "url": "assets/js/18.a26ff85c.js",
    "revision": "9566e52327eaae192596699b02b8eb5d"
  },
  {
    "url": "assets/js/19.8dac4293.js",
    "revision": "a2caedff22a6ebf34abc056a548689b9"
  },
  {
    "url": "assets/js/20.26273a1e.js",
    "revision": "a0144b170df5ce303e9800febc6a9bfd"
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
    "url": "assets/js/23.32f9414d.js",
    "revision": "bb880796d7dd20f137217822c86075a5"
  },
  {
    "url": "assets/js/24.cfa6d1bc.js",
    "revision": "8ad0e61f8ff9705b4b3c1ef42825c342"
  },
  {
    "url": "assets/js/25.1cdbd207.js",
    "revision": "96368c43575ae688a53ee8c6503dc96d"
  },
  {
    "url": "assets/js/26.9f7b8b09.js",
    "revision": "0b39dadaf61ec2f6a780096e4272e204"
  },
  {
    "url": "assets/js/27.487ca840.js",
    "revision": "7e6c234ab5d39a1d94a02ed2f900d5a9"
  },
  {
    "url": "assets/js/28.be4b415c.js",
    "revision": "e8d2169c2cf23feb4ca913c744226317"
  },
  {
    "url": "assets/js/29.65c9addd.js",
    "revision": "f281c1be6a3ec4f5de1291720dd3ff33"
  },
  {
    "url": "assets/js/3.ffeacef9.js",
    "revision": "0515bad95c3e6eb54a3dc378a826a759"
  },
  {
    "url": "assets/js/30.b8aebfd8.js",
    "revision": "50140e91a82d3f33f17d94dffa650c71"
  },
  {
    "url": "assets/js/31.ef37970a.js",
    "revision": "a553545e6d8ff3de6991450922e36e08"
  },
  {
    "url": "assets/js/32.1f9d20ba.js",
    "revision": "fc950ab5b2387b993499d4dcbf41fa0b"
  },
  {
    "url": "assets/js/33.b5708dea.js",
    "revision": "aa5755b9c2dc64b5e8d5d18822acda77"
  },
  {
    "url": "assets/js/34.13255ed6.js",
    "revision": "c6cd163ec35c117bb704a78bdcb88283"
  },
  {
    "url": "assets/js/35.030bb5ee.js",
    "revision": "f383c98671d28825d466198bee0fd7d3"
  },
  {
    "url": "assets/js/36.acc82c40.js",
    "revision": "ce70014cec47a74d5c30bfa3ac86e2f2"
  },
  {
    "url": "assets/js/37.d9beb8a0.js",
    "revision": "96f33b4b8dfbbcb842afb944f2d7d254"
  },
  {
    "url": "assets/js/38.9d24776c.js",
    "revision": "91e501fa34b3e2d87e7c09d198e0d8e9"
  },
  {
    "url": "assets/js/39.03ec4231.js",
    "revision": "163995a1a119d45e6f905a55630d3a74"
  },
  {
    "url": "assets/js/4.481cb05e.js",
    "revision": "6cb1209d801a520a3418a1848d1f824f"
  },
  {
    "url": "assets/js/40.9c6b2b8c.js",
    "revision": "24a3d5639ad172e93c9fb116061a8637"
  },
  {
    "url": "assets/js/41.a18ac461.js",
    "revision": "db20823582bef7acc301994bd5d2131c"
  },
  {
    "url": "assets/js/5.42d3ef44.js",
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
    "url": "assets/js/9.47085e98.js",
    "revision": "7a4f2677f91688800911a23e96eb9cdf"
  },
  {
    "url": "assets/js/app.baa5d52b.js",
    "revision": "a190f583dffe80a3eafe609050c841b9"
  },
  {
    "url": "categories/index.html",
    "revision": "0b47cf9f483b00a8b1a26a5eff3dbac7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0fcf9ada0a5c0a77940447e2231acdf2"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "2bad19f28cb6851e613d52db3f772e9a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "9b46d2912d4389b8e3732f316f67300f"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "9de840e468accc09b3c58b71d11b855d"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "132a8954343bd90c5141d3e277bf76f9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "e34fc93b9fc0162d53b11d79c929d377"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "7c7b05f960b258786ecec00cfe1acc24"
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
    "revision": "ee0b3ccfb73c576404d9a8252e83ff6a"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "e56d877192624e2e24788bd3a398bde6"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "82edf29c122f12ddb3b5dd3b03b9cbac"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "58f1b2b3e3d8cf92f01f644809196cfe"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "77524494c62450dc979e9216e50626dc"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "f88d9d6b94c9ded8e074341dc3b6a411"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "e12fa7753e85b91f1db9f37d439c19f9"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "7234d5c7bf7d63efed64db31c01b791a"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "dbfc1d40276802ce040771dbe3416c01"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "63de6d3e3da06614db8aea2e57f2f87b"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "b8e65a1c9eaa899e2849c1c3822cc37c"
  },
  {
    "url": "note/index.html",
    "revision": "71c78aff9f1a08310fce8fed621daf3f"
  },
  {
    "url": "note/interview/ge-ren-jian-li.html",
    "revision": "814fe01947683787a1d07b35b35f3f42"
  },
  {
    "url": "note/interview/jing-dian-mian-shi-ti.html",
    "revision": "be0d5eb019c0b9cef0c3b65163b3f346"
  },
  {
    "url": "note/interview/mian-shi-jing-yan.html",
    "revision": "88e0cf1d4ef66c3582cd5a306f25db76"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "4bbf5550fe08154047edf49c41d489e7"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "cace6f60f728f593d11b58898c89e467"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "b9282196eab39f3a18d42543e100d24c"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "befc61e63c9e45cfada041a17cf056a2"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "4377b2ab60f75336c291cdcd54c0e5b0"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "98d2e12516f9a14b510f7b1c9b6adf53"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "bf18076f2004d2f9b141e3142e71d3e2"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "190d738a6f1acd2daf824a52a88ec703"
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
    "revision": "42fe7f871c01cf51bc130e724f931e96"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "12fe1d7411d988ac58811aca93844662"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "db83a27f1dbcdc71c7c03f9896d23627"
  },
  {
    "url": "tag/index.html",
    "revision": "34588802351b4c77f9675e1305b81631"
  },
  {
    "url": "tag/js/index.html",
    "revision": "282313baf9ef7ece44f7a78a941f786b"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "966cd90604584cb541d6e32253bce56e"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "3adecbc594e5e61b3f405eab1622e006"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "c7967ff2115aa3f89cc987dc8487b9d8"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "17035c7ca2ed9537f16fbf13aae7b2c9"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "c11735f1df1808e66a33a245c93c4dc7"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "6c2ac81721d75759067565f6635b1f78"
  },
  {
    "url": "timeline/index.html",
    "revision": "49f6257e1d9f93332f3c03b1f0e39e0e"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "61c9c11e27345da63f0f26885c55110b"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "0d29c9752efbcd2476b3367628635b01"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "e33dea4accc940d2af1c38443ff350c9"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "2166f42ad9ccbb4c36caa78b68e36d3e"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "f542ade0ffb0ccf90d771032190d3d71"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "8837c691943c6d91957dc3f9d071d43f"
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
