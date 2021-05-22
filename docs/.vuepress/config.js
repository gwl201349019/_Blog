module.exports = {
  base:'/_Blog/',
  dest: 'blog',
  theme: 'reco',
  port: '9999', //端口号
  title: "latte and cat",
  description: 'study programs and record life',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    // 密钥
    keyPage: {
      keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    },
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '开始', link: '/note/', icon: 'reco-document' },
      // { text: '时间节点', link: '/timeline/', icon: 'reco-date' },
      // { text: 'PhotoAlbum', link: 'http://photo.smallsunnyfox.com/', icon: 'reco-blog'},
      { text: '关于我的', link: '/about/', icon: 'reco-account'},
      // { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    // logo: '/head2.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/note/': [
        {
          title: 'HTML5',
          collapsable: true,
          children: [
            'html5/HTML5的语义元素',
            'html5/HTML5多媒体标签',
            'html5/HTML5表单元素',
            'html5/HTML5中的API',
            'html5/Canvas'
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'css/css3新特性',
            'css/css3Flip'
          ]
        },
        {
          title: 'JS',
          collapsable: true,
          children: [
            'js/js数据类型',
            'js/js对象',
            'js/js继承',
            'js/js原型链、闭包',
            'js/js函数的四种调用方式'
          ]
        },
        {
          title: 'Vue.js',
          collapsable: true,
          children: [
            'Vue/Vue基础笔记',
            'Vue/Vue组件'
          ]
        },
        {
          title: '前端单元测试',
          collapsable: true,
          children: [
            'fe-unit-test/chai',
            'fe-unit-test/mocha',
            'fe-unit-test/vueTestUtils'
          ]
        },
        {
          title: '微信小程序',
          collapsable: true,
          children: [
            'wechat-mini-program/初识微信小程序',
          ]
        },
        {
          title: '面试',
          collapsable: true,
          children: [
            'interview/个人简历',
            'interview/面试经验',
            'interview/经典面试题',
          ]
        }
      ]
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'reco_luan',
    authorAvatar: '/head2.png',
    // 备案号
    record: '豫ICP备19035192号',
    recordLink: 'http://www.beian.miit.gov.cn/',
    cyberSecurityRecord: '豫公网安备41172602000151号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172602000151',
    // 项目开始时间
    startYear: '2019',
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz',// your appId
      appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
      placeholder: '是时候展现真正的技术了',
      avatar: 'wavatar',
      serverUrl: 'https://leanserver.smallsunnyfox.com'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        // {
        //   type: 'image',
        //   // src: '/rvcode_qq.png'
        // }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        }
      ]
    }]
    // [
    //   require('./plugins/KanBanNiang'),
    //   {
    //     theme: ['blackCat'],
    //     width: 200,
    //     height: 400,
    //     modelStyle: {
    //       position: 'fixed',
    //       right: '70px',
    //       bottom: '50px',
    //       opacity: '0.9' 
    //     },
    //     messageStyle: {
    //       position: 'fixed',
    //       right: '70px',
    //       bottom: '380px'
    //     },
    //     btnStyle: {
    //       bottom: '60px',
    //       right: '80px'
    //     }
    //   }
    // ],
    // [
    //   require('./plugins/BgMusic'),
    //   {
    //     audios: [
    //       {
    //         name: '不喜欢下雨天Remix',
    //         artist: 'Piggy,Owen,DP龙猪',
    //         url: 'https://assets.smallsunnyfox.com/music/1.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
    //       },
    //       {
    //         name: 'Peaches',
    //         artist: 'Justin Bieber',
    //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //       }
    //     ]
    //   }
    // ]
    ,
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}  