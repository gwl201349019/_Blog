(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{554:function(t,v,e){"use strict";e.r(v);var a=e(7),_=Object(a.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("h3",{attrs:{id:"说一下盒模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下盒模型"}},[t._v("#")]),t._v(" 说一下盒模型?")]),t._v(" "),e("p",[t._v("盒模型包括： 宽高 ，内间距，边框线，外间距"),e("br"),t._v("\n有两种盒模型：IE 盒子模型、标准 W3C 盒子模型")]),t._v(" "),e("p",[t._v("标准模式是按 W3C 盒子模型解析。混杂模式下会按照 IE5.5 的盒模 型解析。")]),t._v(" "),e("h3",{attrs:{id:"什么是doctype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是doctype"}},[t._v("#")]),t._v(" 什么是DOCTYPE？")]),t._v(" "),e("ul",[e("li",[t._v("DOCTYPE是 "),e("strong",[t._v("document")]),t._v(" "),e("strong",[t._v("type")]),t._v(" 的简写，它并不是 HTML 标签，也没有结束标签，它是一种标\n记语言的文档类型声明，即告诉浏览器当前 HTML 是用什么版本编写的。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("注意")]),t._v(": DOCTYPE的声明必须是 HTML 文档的第一行，位于html标签之前。大多数Web文档的顶部都有doctype声明，它是在新建一个文档时，由Web创作软件草率处理的众多细节之一。很少人会去注意 doctype ，但在遵循标准的任何Web文档中，它都是一项必需的元素。doctype会影响代码验证，并决定了浏览器最终如何显示你的 Web文档。")])]),e("h3",{attrs:{id:"html-xml-和-xhtml有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-xml-和-xhtml有什么区别"}},[t._v("#")]),t._v(" HTML XML 和 XHTML有什么区别？")]),t._v(" "),e("ul",[e("li",[t._v("HTML(超文本标记语言): 在 html4.0 之前 HTML 先有实现再有标准，导致 HTML 非常混乱和松散")]),t._v(" "),e("li",[t._v("XML(可扩展标记语言): 主要用于存储数据和结构，JSON作用类似，但更加轻量高效")]),t._v(" "),e("li",[t._v("XHTML(可扩展超文本标记语言): 基于以上两者而来")])]),t._v(" "),e("h3",{attrs:{id:"你对html语义化的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你对html语义化的理解"}},[t._v("#")]),t._v(" 你对HTML语义化的理解？")]),t._v(" "),e("ul",[e("li",[t._v("在没有 CSS 的情况下，页面也能呈现出清晰的结构，有利于 SEO 和搜索引擎建立良好沟通， 有助于爬虫抓取信息，方便其他设备解析，便于开发和维护，使代码更具可读性")])]),t._v(" "),e("h3",{attrs:{id:"html5-与-html4的不同之处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-与-html4的不同之处"}},[t._v("#")]),t._v(" HTML5 与 HTML4的不同之处？")]),t._v(" "),e("ul",[e("li",[t._v("HTML5相比HTML4代码更加简洁，HTML5的一些新元素、新属性等可以使web开发变的容易简单，比如说HTML5提高了API。")]),t._v(" "),e("li",[t._v("HTML5之前有很多功能必须依靠javascript实现，现在使用HTML5元素的标签属性就可以。由于HTML5在web页面这种大量可代替脚本（javascript）属性使语言变的简单易懂，而仅靠html4需要和javascript配合才能做到。")])]),t._v(" "),e("h2",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("h3",{attrs:{id:"css选择器的优先级是怎样的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css选择器的优先级是怎样的"}},[t._v("#")]),t._v(" css选择器的优先级是怎样的？")]),t._v(" "),e("ul",[e("li",[t._v("!import(最大) > 行间样式(1000) > id(100) > class(10) > 标签(1) > 通配符(0)")])]),t._v(" "),e("h2",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" javascript")]),t._v(" "),e("h3",{attrs:{id:"跨域问题的解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题的解决方案"}},[t._v("#")]),t._v(" 跨域问题的解决方案?")]),t._v(" "),e("p",[t._v("跨域分为多种情况：\n有前端跨域、后端跨域、线上跨域、线下跨域。\n解决办法也有多种：\n1、使用jsonp(只能用于get请求)。\n2、使用webpack配置proxy反向代理。\n3、使用nginx设置反向代理。\n4、后端设置请求头。\nA） header('Access-Control-Allow-Origin:*');//允许所有来源访问\nB） header('Access-Control-Allow-Method:POST,GET');//允许访问的方式\n线上跨域：\n后端进行处理。")]),t._v(" "),e("h3",{attrs:{id:"闭包的概念-优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#闭包的概念-优缺点"}},[t._v("#")]),t._v(" 闭包的概念？优缺点？")]),t._v(" "),e("p",[t._v("闭包的概念：闭包就是能读取其他函数内部变量的函数。")]),t._v(" "),e("ul",[e("li",[t._v("优点：")])]),t._v(" "),e("ol",[e("li",[t._v("避免全局变量的污染")]),t._v(" "),e("li",[t._v("希望一个变量长期存储在内存中（缓存变量）")])]),t._v(" "),e("ul",[e("li",[t._v("缺点：")])]),t._v(" "),e("ol",[e("li",[t._v("内存泄露（消耗）")]),t._v(" "),e("li",[t._v("常驻内存，增加内存使用量")])]),t._v(" "),e("h3",{attrs:{id:"对前端性能优化有什么了解-一般都通过那几个方面去优化的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对前端性能优化有什么了解-一般都通过那几个方面去优化的"}},[t._v("#")]),t._v(" 对前端性能优化有什么了解？一般都通过那几个方面去优化的？")]),t._v(" "),e("ol",[e("li",[t._v("减少请求数量")]),t._v(" "),e("li",[t._v("减小资源大小")]),t._v(" "),e("li",[t._v("优化网络连接")]),t._v(" "),e("li",[t._v("优化资源加载")]),t._v(" "),e("li",[t._v("减少重绘回流")]),t._v(" "),e("li",[t._v("性能更好的API")]),t._v(" "),e("li",[t._v("webpack优化")])]),t._v(" "),e("h2",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue 🔥")]),t._v(" "),e("h3",{attrs:{id:"_1、说说你对生命周期的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、说说你对生命周期的理解"}},[t._v("#")]),t._v(" 1、说说你对生命周期的理解?")]),t._v(" "),e("p",[t._v("生命周期概念")]),t._v(" "),e("ul",[e("li",[t._v("一个vue实例从创建到销毁的过程。\n或者生命周期概念：Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")])]),t._v(" "),e("p",[t._v("生命周期："),e("strong",[t._v("总共分为8个阶段，"),e("em",[t._v("创建前/后")]),t._v("，载入前/后，更新前/后，销毁前/后")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[e("strong",[t._v("beforeCreate")]),t._v(" 阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("created")]),t._v(" 阶段，已经有了数据对象data，但$el还没有。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("beforeMount")]),t._v(" 阶段，vue实例的$el和数据对象data都已经初始化，但还是虚拟的dom节点。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"4"}},[e("li",[e("strong",[t._v("mounted")]),t._v(" 阶段，模板已经编译好，虚拟dom渲染成真正的dom标签，数据已经渲染到页面，Vue实例已经创建完毕。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"5"}},[e("li",[e("strong",[t._v("beforeUpdate")]),t._v(" 阶段当数据依赖改变时，对象data中的数据已经更改（虚拟dom已经重新渲染），但是还未开始渲染真正dom，页面中的值还是原来的。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"6"}},[e("li",[e("strong",[t._v("updated")]),t._v(" 阶段data中的数据更新完毕，页面已经被重新渲染。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"7"}},[e("li",[e("strong",[t._v("beforeDestroy")]),t._v(" 阶段实例还是可用的一般在这里做一些善后工作。（例如清除定时器、清除非指令绑定的事件等等。）。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"8"}},[e("li",[e("strong",[t._v("destroyed")]),t._v(" 阶段Vue实例被销毁，观察者、子组件、事件监听被清除（页面数据不会消失，只是响应式无效了）。")])])])]),t._v(" "),e("p",[e("strong",[t._v("一般会在created和mounted阶段做网络请求和第三方插件的初始化。在destroyed阶段进行清除定时器和一些事件的解绑")])]),t._v(" "),e("h3",{attrs:{id:"_2、你对mvvm的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、你对mvvm的理解"}},[t._v("#")]),t._v(" 2、你对MVVM的理解?")]),t._v(" "),e("h3",{attrs:{id:"_3、mvvm的优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、mvvm的优缺点"}},[t._v("#")]),t._v(" 3、MVVM的优缺点？")]),t._v(" "),e("h3",{attrs:{id:"_4、vue组件如何通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue组件如何通讯"}},[t._v("#")]),t._v(" 4、Vue组件如何通讯?")]),t._v(" "),e("h3",{attrs:{id:"_5、说说你对vuex的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、说说你对vuex的理解"}},[t._v("#")]),t._v(" 5、说说你对vuex的理解?")]),t._v(" "),e("p",[t._v("vuex的概念")]),t._v(" "),e("ul",[e("li",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。")]),t._v(" "),e("li",[t._v("Vuex 的应用场景：组件数据传递不太方便的时候，可以使用vuex,比如购物车、用户信息等")])]),t._v(" "),e("p",[t._v("五个状态分别是："),e("strong",[t._v("State")]),t._v("、"),e("strong",[t._v("Getters")]),t._v("、"),e("strong",[t._v("Mutations")]),t._v("、"),e("strong",[t._v("Actions")]),t._v("、"),e("strong",[t._v("Modules")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("state")]),t._v(" 存储状态（数据），在根实例中注册了store 后，用 this.$store.state 来访问store里面的状态，存放数据方式为响应式。")]),t._v(" "),e("li",[e("strong",[t._v("getters")]),t._v(" 可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。")]),t._v(" "),e("li",[e("strong",[t._v("mutations")]),t._v(" 更改 Vuex 的 store 中的状态的唯一方法是提交 mutations。")]),t._v(" "),e("li",[e("strong",[t._v("actions")]),t._v(" 包含任意异步操作，通过提交 mutations 间接改变状态。")]),t._v(" "),e("li",[e("strong",[t._v("modules")]),t._v(" 将store分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块")])]),t._v(" "),e("p",[t._v("简单来说：state 存储状态\ngetters 获取state的状态\nmutations: 函数来改变我们的状态\nactions: 提交给mutations，让mutation来改变我们的状态（可以做异步）\nmodules：将store分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。")]),t._v(" "),e("p",[t._v("vuex的缺点：页面刷新后数据丢失")]),t._v(" "),e("ul",[e("li",[t._v("解决方法：vuex结合本地存储实现组件之前状态的共享或者使用一些插件例如vuex-persist")])]),t._v(" "),e("h3",{attrs:{id:"_6、vue中的key的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、vue中的key的作用"}},[t._v("#")]),t._v(" 6、Vue中的key的作用?")]),t._v(" "),e("p",[t._v("key的作用是为了在 "),e("strong",[t._v("diff")]),t._v(" 算法执行时更快的找到对应的节点，提高diff速度，key具有唯一性。\n让每一个item有一个唯一的识别身份，主要是为了vue精准的追踪到每一个元素，更高效的更新虚拟DOM。")]),t._v(" "),e("ul",[e("li",[t._v("专业回答\n"),e("ol",[e("li",[t._v("key的作用主要是为了高效的更新虚拟DOM,其原理是vue在patch过程中通过key可以精确判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量，提高性能。")]),t._v(" "),e("li",[t._v("另外，若不设置key还可能在列表更新时引发一些隐蔽的bug")]),t._v(" "),e("li",[t._v("vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为让vue可以区分他们，否则vue只会替换其内部属性而不会触发过渡效果。")])])])]),t._v(" "),e("h3",{attrs:{id:"_7、params传参和query传参的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、params传参和query传参的区别"}},[t._v("#")]),t._v(" 7、Params传参和query传参的区别?")]),t._v(" "),e("ul",[e("li",[t._v("区别")])]),t._v(" "),e("ol",[e("li",[t._v("params通过name传参，query通过path和name都可以传参")]),t._v(" "),e("li",[t._v("query相当于get请求，参数会在地址栏显示，而params相当于post请求，参数不会再地址栏显示。")]),t._v(" "),e("li",[t._v("用params传参，F5强制刷新参数会被清空；用query，由于参数是用路径传参的，所以F5强制刷新也不会被清空。")]),t._v(" "),e("li",[t._v("使用这两种方式传参的时候都可通过路由的name进行传参，所以在配置路由的时候需要加个name属性")])]),t._v(" "),e("h3",{attrs:{id:"_8、router和route的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、router和route的区别"}},[t._v("#")]),t._v(" 8、router和route的区别?")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("route")]),t._v(" 获取路由属性")]),t._v(" "),e("li",[e("strong",[t._v("router")]),t._v(" 设置路由属性")])]),t._v(" "),e("h3",{attrs:{id:"_9、路由钩子的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、路由钩子的理解"}},[t._v("#")]),t._v(" 9、路由钩子的理解?")]),t._v(" "),e("ul",[e("li",[t._v("导航钩子 就是路由的生命周期,分为："),e("strong",[t._v("全局路由守卫")]),t._v("、"),e("strong",[t._v("组件内守卫")]),t._v("、"),e("strong",[t._v("路由独享守卫")])]),t._v(" "),e("li",[t._v("全局的钩子函数\n"),e("ul",[e("li",[e("strong",[t._v("beforeEach")]),t._v("  \t在路由切换开始时调用")]),t._v(" "),e("li",[e("strong",[t._v("afterEach")]),t._v("\t\t在路由切换离开时调用")])])]),t._v(" "),e("li",[t._v("路由独享守卫\n"),e("ul",[e("li",[e("strong",[t._v("beforeEnter")])])])]),t._v(" "),e("li",[t._v("组件的钩子函数\n"),e("ul",[e("li",[e("strong",[t._v("beforeRouteEnter")])]),t._v(" "),e("li",[e("strong",[t._v("beforeRouteUpdate")])]),t._v(" "),e("li",[e("strong",[t._v("beforeRouteLeave")])])])])]),t._v(" "),e("p",[t._v("项目中一般使用全局路由守卫的中 "),e("strong",[t._v("beforeEach")]),t._v("，进行登录拦截。")]),t._v(" "),e("p",[e("strong",[t._v("to")]),t._v(" 即将进入的目标对象, "),e("strong",[t._v("from")]),t._v(" 当前导航要离开的导航对象, "),e("strong",[t._v("next")]),t._v(" 是一个函数，调用resolve 执行下一步。")]),t._v(" "),e("h3",{attrs:{id:"页面之间传值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面之间传值"}},[t._v("#")]),t._v(" 页面之间传值?")]),t._v(" "),e("h3",{attrs:{id:"vue怎么自定义指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue怎么自定义指令"}},[t._v("#")]),t._v(" vue怎么自定义指令?")]),t._v(" "),e("p",[t._v("1、可以使用Vue.directive( dir_name , {} ) 来定义全局自定义指令")]),t._v(" "),e("p",[t._v("2、也可以使用 directives{ dir_name : {} } 来定义局部自定义指令")]),t._v(" "),e("h3",{attrs:{id:"nexttick的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexttick的作用"}},[t._v("#")]),t._v(" nextTick的作用?")]),t._v(" "),e("p",[t._v("当数据更新了，在dom中渲染后，自动执行该函数\n1、Vue生命周期的mounted()钩子函数进行的DOM操作要放在Vue.nextTick()的回调函数中。")]),t._v(" "),e("p",[t._v("2、当项目中你想在改变DOM元素的数据后基于新的dom做点什么，对新DOM一系列的js操作都需要放进Vue.nextTick()的回调函数中；\n通俗的理解是：更改数据后想立即使用js操作新的视图的时候需要使用nextTick。")]),t._v(" "),e("p",[t._v("3、在使用某个第三方插件时 ，希望在vue生成的某些dom动态发生变化时重新应用该插件，也会用到该方法，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。")]),t._v(" "),e("h3",{attrs:{id:"对keep-alive的了解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对keep-alive的了解"}},[t._v("#")]),t._v(" 对Keep-Alive的了解?")]),t._v(" "),e("p",[t._v("vue的缓存机制是keep-alive，keep-alive是vue的一个内置组件，它提供了include与exclude两个属性,允许组件有条件的缓存.主要用于保留组件状态，避免重新渲染。")]),t._v(" "),e("p",[t._v("比如：\n有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用"),e("keep-alive"),t._v("进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染，这样就会减轻服务器压力，提高性能。")],1),t._v(" "),e("h3",{attrs:{id:"vue和react的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue和react的区别"}},[t._v("#")]),t._v(" vue和react的区别？")]),t._v(" "),e("p",[t._v("Vue和React的共同点\n01. react采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定\n02. 两者都需要编译后使用\n03. 中心思想相同：一切都是组件，组件实例之间可以嵌套\n04. 都提供合理的钩子函数，可以让开发者定制化地去处理需求\n05. 都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载\nVue和React的不同点\n01. Vue性能更好、Vue性能上更有优势，因为 Vue 的 Virtual DOM 实现相对更为轻量一些，整体大小比react.js更小更轻便\n02. react.JS 彩用JSX语法，对语大部分工程师入手比较困难，需要要大量的时间去学习适应这种新语法的形式，vue采用DOM模板的方法，易看易用")]),t._v(" "),e("h3",{attrs:{id:"diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),e("p",[t._v("1.diff 算法是虚拟dom生成的必然产物，通过新旧dom比较，将变化的地方更新到真实的dom上\n2.当页面的数据发上变化的时候，Diff算法只会比较同一层级的节点\n3.在diff算法时key的作用很重要，就是为了高效的更新虚拟DOM")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("没加key的diff算法问题（虚拟DOM）\n1、如果节点类型不同，直接干掉前面所有不同的节点，再创建并插入新的节点，不会再比较这个节点以后的子节点了。\n2、如果节点类型相同，则会重新设置节点的属性，从而实现节点的更新。")]),t._v(" "),e("p",[t._v("加key的diff算法问题（虚拟DOM）\n要使用key来给每一个节点做一个唯一标识， diff算法就可以正确的识别此节点，找到正确的位置直接插入新的节点。")]),t._v(" "),e("p",[t._v("专业的回答：\n1.diff算法是虚拟DOM技术的必然产物，通过新旧虚拟DOM作对比(即diff),将变化的地方更新在真实DOM上，另外，也需要diff高效的执行对比过程，从而降低时间复杂度O(n).\n2.vue2.x为了降低watcher（我吃）力度，每个组件有一个watcher与之对应，只有引入diff才能精确找到发生变化的地方\n3.vue中diff执行的时刻是组件实例执行更新函数时，它会比对上一次渲染结果oldVnode和新的渲染结果newVnode,此过程称为patch.\n4.diff过程整体遵循深度优先，同层比较的策略;两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作，比较两组子节点是算法的重点，首先假设头尾节点可能相同4次对比尝试，如果没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点;借助key通常可以非常精确找到相同节点，因此整个patch过程非常高效。")]),t._v(" "),e("h3",{attrs:{id:"项目优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[t._v("#")]),t._v(" 项目优化")]),t._v(" "),e("p",[t._v("v-for 遍历避免同时使用 v-if\nkeep-alive缓存页面\n细分vuejs组件降低耦合性\n使用better-click防止iphone点击延迟\n减少网络请求")]),t._v(" "),e("p",[t._v("图片懒加载\n路由懒加载\n第三方插件按需引入\n使用CND资源\n使用骨架屏提高用户体验\n开启gzip压缩")]),t._v(" "),e("h3",{attrs:{id:"vue中的两个内置组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中的两个内置组件"}},[t._v("#")]),t._v(" vue中的两个内置组件?")]),t._v(" "),e("p",[t._v("vue中的两个内置组件：transition、 keep-alive")]),t._v(" "),e("h3",{attrs:{id:"你都封装过什么组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你都封装过什么组件"}},[t._v("#")]),t._v(" 你都封装过什么组件?")]),t._v(" "),e("p",[t._v("封装过图片轮播、tabbar、tab切换、loading效果。")]),t._v(" "),e("h3",{attrs:{id:"v-if和v-for的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for的区别"}},[t._v("#")]),t._v(" v-if和v-for的区别")]),t._v(" "),e("p",[t._v("1.v-for优先于v-if被解析\n2.如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能\n3.要避免出现这种情况，则在外层嵌套在层div,在这一层进行v-if判断，然后在内部进行v-for循环\n注 而如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 "),e("strong",[e("code",[t._v("<template>")])]),t._v(" )上")]),t._v(" "),e("h2",{attrs:{id:"es6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),e("h3",{attrs:{id:"es6新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6新特性"}},[t._v("#")]),t._v(" ES6新特性")]),t._v(" "),e("ol",[e("li",[t._v("模块化")]),t._v(" "),e("li",[t._v("箭头函数")]),t._v(" "),e("li",[t._v("函数参数默认值")]),t._v(" "),e("li",[t._v("模板字符串")]),t._v(" "),e("li",[t._v("解构赋值")]),t._v(" "),e("li",[t._v("对象属性简写")]),t._v(" "),e("li",[t._v("Promise")]),t._v(" "),e("li",[t._v("Let与Const")]),t._v(" "),e("li",[t._v("Class 类")]),t._v(" "),e("li",[t._v("扩展运算符")]),t._v(" "),e("li",[t._v("新增数组、字符串、对象的方法")])]),t._v(" "),e("p",[t._v("1.声明变量let和声明常量的const\n2.解构赋值\n3.字符串新增了模板字符串和includes()、repeat()、trimStart()等方法\n4.数组新增了includes()、find()、flat()、map()等方法\n5.对象新增了Object.assign()、for of 循环、Object.is()等方法\n6.函数新增了箭头函数\n7.新增了数据类型symbol\n8.新增了set和三点运算符\n9.新增了class类\n10.新增了Promise()\n11.新增了模块化：抛出模块：export，export default 和引入模块：import")]),t._v(" "),e("h3",{attrs:{id:"箭头函数和普通函数的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数和普通函数的区别"}},[t._v("#")]),t._v(" 箭头函数和普通函数的区别?")]),t._v(" "),e("p",[t._v("区别：")]),t._v(" "),e("ol",[e("li",[t._v("语法不同。")]),t._v(" "),e("li",[t._v("箭头函数是匿名函数，不能作为构造函数，不能使用new。")]),t._v(" "),e("li",[t._v("箭头函数不能绑定arguments，取而代之用rest参数...解决。")]),t._v(" "),e("li",[t._v("箭头函数没有原型属性。")]),t._v(" "),e("li",[t._v("箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值。")]),t._v(" "),e("li",[t._v("箭头函数不能当做Generator函数,不能使用yield关键字.")])]),t._v(" "),e("h3",{attrs:{id:"let-const-var的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-const-var的区别"}},[t._v("#")]),t._v(" let const var的区别?")]),t._v(" "),e("p",[t._v("区别：\n1、var声明的变量会挂载到window上，而let和const声明的变量不会。\n2、var声明变量存在变量声明提升，let和const不存在变量声明提升。\n3、let和const声明的变量有块作用域。\n4、同一作用域下let和const不能声明同名变量，而var可以。\n5、Let和const声明的变量存在 暂时性死区。")]),t._v(" "),e("p",[t._v("const：一旦声明必须赋值,不能使用null占位。而且声明后不能再修改，如果声明的是复合类型数据，可以修改其属性。")]),t._v(" "),e("h3",{attrs:{id:"说说对promise的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说说对promise的理解"}},[t._v("#")]),t._v(" 说说对promise的理解")]),t._v(" "),e("p",[t._v("Promise是异步编程的一种解决方案，主要解决由于异步请求的多层嵌套造成的回调地狱问题。\nPromise有三个状态和两个过程\n三个状态：pending（初始状态）、fulfilled（成功状态）、rejected（失败状态）；")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("两个过程：pending==>fulfilled的过程和pending==>rejected的过程。\n缺点：promise的状态一旦改变则不会再变，是不可逆的\n\n方法：Promise是一个构造函数，自身有all、reject、resolve这几个方法，原型上有then和catch方法\t\n")])])])])}),[],!1,null,null,null);v.default=_.exports}}]);