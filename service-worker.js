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
    "revision": "5b8b25d811c5811314ae7275c486ad78"
  },
  {
    "url": "about/index.html",
    "revision": "045192bdece2affb1230a7a7822c7faa"
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
    "url": "assets/js/14.a2b3c0a6.js",
    "revision": "387767993058beb00dcc555292362204"
  },
  {
    "url": "assets/js/15.a2de3cd1.js",
    "revision": "40f9a4fadc01341e23c80ca3b7ec3dc0"
  },
  {
    "url": "assets/js/16.bb45a360.js",
    "revision": "6a82594e3256abff64952d12195c24bd"
  },
  {
    "url": "assets/js/17.100f0862.js",
    "revision": "4506bf50bf9a44c4ee0834a1c0f71e2d"
  },
  {
    "url": "assets/js/18.5dbb1868.js",
    "revision": "02a610ea1d1198413a8bf9b669fd7965"
  },
  {
    "url": "assets/js/19.6252986c.js",
    "revision": "b69b21146befc9f197560f657782c8d5"
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
    "url": "assets/js/27.76d0ca6c.js",
    "revision": "380a3b753c89b6ab8fe398486e268225"
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
    "url": "assets/js/33.ad66df07.js",
    "revision": "fa0262565a0f20f85c21f68979cd16bf"
  },
  {
    "url": "assets/js/34.fb77a837.js",
    "revision": "36010c771f03ef3caf3b0800b0b17812"
  },
  {
    "url": "assets/js/35.0fb2eaa6.js",
    "revision": "5791e42c7aaf19591bd2aa6b79781f91"
  },
  {
    "url": "assets/js/36.13468879.js",
    "revision": "107a6a0b8100c6aefdacc762f235f901"
  },
  {
    "url": "assets/js/37.5ef7c4f9.js",
    "revision": "dcf373ae71a1ce10785d0357d6b0a237"
  },
  {
    "url": "assets/js/38.34ba9daf.js",
    "revision": "d57f17492cf31e31d7b18772a1346aea"
  },
  {
    "url": "assets/js/39.c0f93eb3.js",
    "revision": "1410c6d5fcdf11e96ee7559df8eefbf2"
  },
  {
    "url": "assets/js/4.6e01f933.js",
    "revision": "6cb1209d801a520a3418a1848d1f824f"
  },
  {
    "url": "assets/js/40.b3f7c2a0.js",
    "revision": "8f413f3baa5e7af947ed48ba12d723ef"
  },
  {
    "url": "assets/js/41.30e826eb.js",
    "revision": "f63f6e072f37222b9674ac347a2b0f81"
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
    "url": "assets/js/app.5cb8639e.js",
    "revision": "18957cb1733b0de7da81ba3c8408cb14"
  },
  {
    "url": "categories/index.html",
    "revision": "95e35cee78a200bf136277cc72712e36"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a863eba894ebad2944f1d903bdf19088"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "2e21072153785a631966f0c2b0ebf25a"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "889f0d507443dfcead3cf9b51cf5581c"
  },
  {
    "url": "categories/简历/index.html",
    "revision": "0dbfbb73359214f856b91ff23d87bb08"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "cb1e2057e9bac50061bbe2eb66e66450"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "1634cff767c27b7218d53ad8bacb6ebe"
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
    "revision": "445239a2d63c7ab89819b2967d1fb9f5"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "ac0882571c5d72281bd680b01f3cbda3"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "2a50bbece920c74fa9e0808d8954eb9a"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "60641edb5ccd58ddfe14907df2d3fef0"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "196dc55c011ae4370f914342c943d2c6"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "8ee22f5a5874bb770941c982611603e5"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "cc19eeb2694b0a1bc17e6fea5a3d733b"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "8a5805d4058f68f7b3f3fa72e68fa295"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "10531017a88cff4cbab901b6d34d43fa"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "9c24529c71010a86eb7b279aea5a88f1"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "c0f7d1ae2503c16413365b58ab54d20d"
  },
  {
    "url": "note/index.html",
    "revision": "57d253265cd554e8eb0f07737aca3669"
  },
  {
    "url": "note/interview/css.html",
    "revision": "a48be06d6186c8b84f50f6683b28dbd4"
  },
  {
    "url": "note/interview/ge-ren-jian-li.html",
    "revision": "cb1f9b6dfa350d48a4f92c8923ae46cd"
  },
  {
    "url": "note/interview/html.html",
    "revision": "3c705228bad05b1b283c61362a7add12"
  },
  {
    "url": "note/interview/javascript.html",
    "revision": "4dac9d8129afad2ca6583488a5ab15ea"
  },
  {
    "url": "note/interview/jing-dian-mian-shi-ti.html",
    "revision": "2bdd396dd20a5af3867107f0550e1ef0"
  },
  {
    "url": "note/interview/mian-shi-jing-yan.html",
    "revision": "410a541db74d9d95fd938bc13230e9ab"
  },
  {
    "url": "note/interview/vue.html",
    "revision": "bbf47eb20d61d2a3899961d0713b2c25"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "e0a1f3a84f848b967e5bc01af465c205"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "8855d28647ac7d3ea328525f7aee5e43"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "f99b52641a17bb3097805fe30c25fed3"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "4cbae9919eb02a41cd39709bcdf6b5dd"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "3505e101c80976022b15e5fb07b9225e"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "3120aead23265fbc38ac7b7742d073f9"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "0018b05afecb281f186486c69fe8d73b"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "87b65eb6e42902c149229985848fa79f"
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
    "revision": "7211750ff20ebad681c8280a649981fd"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "203f8ddd81be3529b8810d7e2ddb67b6"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "50c4cb301bd4909de2be09bcb6318c88"
  },
  {
    "url": "tag/index.html",
    "revision": "30980211f741e656f6eae1bbee46521a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "34f00989908115be37b4fb71b15e6ca3"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "400961101231cb04c39c2e2029c1c281"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "8087d6ef091514496a8c19e7fcb6b01c"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "f5c30d6af529459f167252527b8efc51"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "aef6d1f1f8f26850268539704883e381"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1c0d22b821502b98c73196c766b724ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e41f8690b4516c3a0c4a94deab6a365"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "113af728c855562eec2d59d0f128f8fa"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "04b824aed3511a9b532c70b04bab2c26"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "e8159f23c180f65d3e6736f9a7ba553f"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "c4b421b6fd27054cd2fad2d661e9c145"
  },
  {
    "url": "views/sui-bi/2020/ji-wo-de-da-xue.html",
    "revision": "64d9a5e52f6ca0b3e0fdfbf12b4024e6"
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
