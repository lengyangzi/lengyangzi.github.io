(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{360:function(a,t,r){"use strict";r.r(t);var e=r(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"代理自定义规则设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理自定义规则设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 代理自定义规则设置")]),a._v(" "),r("h2",{attrs:{id:"规则的设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规则的设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 规则的设置")]),a._v(" "),r("p",[a._v("如果要实现国内走直连，国外走代理的话，就需要用到规则。Shadowrocket 的规则是可以兼容 Surge 的。")]),a._v(" "),r("h3",{attrs:{id:"设置方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置方式")]),a._v(" "),r("p",[a._v("点击 Settings，然后在点击 Config 你就可以看到以下界面")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.sspai.com/attachment/origin/2016/04/18/322985.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"IMG_3201.png"}})]),a._v(" "),r("p",[a._v("点击 + 通过添加链接，在点击 Use Config 来下载规则文件。")]),a._v(" "),r("p",[a._v("各位可以直接下载网友提供的配置,github 搜索 【shadowrocket 配置】")]),a._v(" "),r("h3",{attrs:{id:"自己添加规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自己添加规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 自己添加规则")]),a._v(" "),r("p",[a._v("下载的网友提供的规则，你可以对其进行编辑，以满足自己的使用习惯。")]),a._v(" "),r("p",[a._v("点击感叹号")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.sspai.com/attachment/origin/2016/04/18/322991.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"IMG_3203.jpeg"}})]),a._v(" "),r("p",[a._v("然后在点击 Add Rule")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.sspai.com/attachment/origin/2016/04/18/322992.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"IMG_3205.jpeg"}}),a._v("点击 Type，就可以看到多种过滤方式")]),a._v(" "),r("h3",{attrs:{id:"大致上说明下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大致上说明下","aria-hidden":"true"}},[a._v("#")]),a._v(" 大致上说明下")]),a._v(" "),r("h4",{attrs:{id:"domain-suffix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#domain-suffix","aria-hidden":"true"}},[a._v("#")]),a._v(" DOMAIN-SUFFIX")]),a._v(" "),r("p",[a._v("基于域名后缀判断。")]),a._v(" "),r("p",[a._v("输入 baidu.com 就可以过滤zhidao.baidu.com，pan.baidu.comd等 baidu.com 后缀的网站。")]),a._v(" "),r("h4",{attrs:{id:"domain-keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#domain-keyword","aria-hidden":"true"}},[a._v("#")]),a._v(" DOMAIN-KEYWORD")]),a._v(" "),r("p",[a._v("基于关键词的判断。")]),a._v(" "),r("p",[a._v("输入baidu，就可以过滤 baidu.com，baidu.jp等含有 baidu 字眼的网站。")]),a._v(" "),r("h4",{attrs:{id:"domain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#domain","aria-hidden":"true"}},[a._v("#")]),a._v(" DOMAIN")]),a._v(" "),r("p",[a._v("基于域名的判断。")]),a._v(" "),r("p",[a._v("输入 www.baidu.com 就可以过滤网站。")]),a._v(" "),r("h4",{attrs:{id:"ip-cidr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-cidr","aria-hidden":"true"}},[a._v("#")]),a._v(" IP-CIDR")]),a._v(" "),r("p",[a._v("判断是否为局域网。")]),a._v(" "),r("h4",{attrs:{id:"geoip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geoip","aria-hidden":"true"}},[a._v("#")]),a._v(" GEOIP")]),a._v(" "),r("p",[a._v("判断服务器地址。")]),a._v(" "),r("p",[a._v("Surge 是可以选择的，但是之类好像只能自己填写，比如 JP，CN 之类的。")]),a._v(" "),r("h4",{attrs:{id:"final"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#final","aria-hidden":"true"}},[a._v("#")]),a._v(" FINAL")]),a._v(" "),r("p",[a._v("剩余的网站。")]),a._v(" "),r("h3",{attrs:{id:"过滤网址之后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#过滤网址之后","aria-hidden":"true"}},[a._v("#")]),a._v(" 过滤网址之后")]),a._v(" "),r("p",[a._v("过滤网址之后，对其进行操作，你可以选择走代理 PROXY，或者直连 DIRECT，或者拒绝访问 REJECT。")]),a._v(" "),r("h2",{attrs:{id:"日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志","aria-hidden":"true"}},[a._v("#")]),a._v(" 日志")]),a._v(" "),r("p",[a._v("Shadowrocket 可以进行简单的代理日志的查看。")]),a._v(" "),r("p",[a._v("点击 Settings，Proxy，Logging，就可以查看代理日志了。")]),a._v(" "),r("h3",{attrs:{id:"查看日志可以干什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看日志可以干什么","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看日志可以干什么")]),a._v(" "),r("p",[a._v("Shadowrocket 的日志功能，并没有 Surge 那么强大，不过你可以通过简单的查看，来判断当前的连接是否都如你所愿的走了代理，或者直连了，并进行修改。")])])}],!1,null,null,null);t.default=i.exports}}]);