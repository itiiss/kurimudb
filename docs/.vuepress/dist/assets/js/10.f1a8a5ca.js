(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{394:function(t,s,a){"use strict";a.r(s);var n=a(43),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"缓存驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存驱动"}},[t._v("#")]),t._v(" 缓存驱动")]),t._v(" "),a("p",[t._v("Kurimudb 会将应用正在使用的数据，保留在"),a("strong",[t._v("缓存层")]),t._v("。")]),t._v(" "),a("p",[t._v("这样的好处是，当你的应用在多处使用同一条数据时，Kurimudb 就不会傻乎乎地去持久化层 (如 LocalStorage、IndexedDB) 再读取一遍，而是直接返回此数据在缓存层中的引用：这意味着，"),a("strong",[t._v("一条数据永远只会存在一份")]),t._v("。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("关于 IndexedDB..")]),t._v(" "),a("p",[t._v("此外，缓存层也把使用 IndexedDB 时的部分异步操作，变成了同步操作：")]),t._v(" "),a("p",[t._v("当你对 Kurimudb 中的数据增删改时，"),a("strong",[t._v("操作都是同步的：")]),t._v(" 都是以同步的形式操作缓存层，在处理完成缓存层的变更后，Kurimudb 会先返回给你处理结果，再异步地保存到 IndexedDB 中。")]),t._v(" "),a("p",[t._v("当然啦，"),a("strong",[t._v("查询操作还需要是异步的，")]),t._v(" 因为在你调用函数之前，Kurimudb 无法确认你的数据是否已经被缓存到了缓存层。当缓存层不存在此数据时，Kurimudb 会去持久化层查询，在拿到结果后告诉你，顺便缓存到缓存层里一份。")])]),t._v(" "),a("h2",{attrs:{id:"rxjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs"}},[t._v("#")]),t._v(" Rxjs")]),t._v(" "),a("p",[t._v("Kurimudb 内置了 "),a("a",{attrs:{href:"https://rxjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rxjs"),a("OutboundLink")],1),t._v(" 的缓存层驱动，它会将存入的数据转为 "),a("a",{attrs:{href:"https://rxjs.dev/guide/subject#behaviorsubject",target:"_blank",rel:"noopener noreferrer"}},[t._v("BehaviorSubject"),a("OutboundLink")],1),t._v(" 对象并存入缓存层，这样你就可以利用 Rxjs 强大的操作符来简化你应用的开发体验了。")]),t._v(" "),a("p",[t._v("Rxjs 驱动支持 "),a("code",[t._v("6.x")]),t._v(" 和 "),a("code",[t._v("7.x")]),t._v(" 版本的 Rxjs，你可以先安装：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i rxjs@6\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn add rxjs@6")]),t._v("\n")])])]),a("p",[t._v("想使用 Rxjs 作为缓存层驱动，只需在模型的 "),a("code",[t._v("config")]),t._v(" 中指定使用 "),a("code",[t._v("RxjsDriver")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /models/configModel.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BehaviorSubject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rxjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RxjsDriver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kurimudb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    drivers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里告诉模型，使用 RxjsDriver 作为缓存层驱动")]),t._v("\n      cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RxjsDriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向驱动注入的依赖，传入 Rxjs 的 BehaviorSubject 对象")]),t._v("\n      cacheInject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BehaviorSubject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 驱动需要依赖注入的目的是，让你可以自由控制驱动中所使用的依赖版本，")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 驱动它不关心你到底在用什么，以及什么版本，只要传入的对象拥有驱动所需的方法即可。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如，无论是 rxj6 还是 rxjs7，是 jquery 还是 zepto，是 momentjs 还是 dayjs..")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用时，只需在变量名的后面加上 "),a("code",[t._v("$")]),t._v(" 符号，就可以获得此变量的 "),a("a",{attrs:{href:"https://rxjs.dev/guide/subject#behaviorsubject",target:"_blank",rel:"noopener noreferrer"}},[t._v("BehaviorSubject"),a("OutboundLink")],1),t._v(" 对象，你可以订阅此变量的更新、或使用 Rxjs 的各种操作符……")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kurimudb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 订阅这个变量..")]),t._v("\nlocal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"what you want to say: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以用 rxjs 强大的操作符..")]),t._v("\nlocal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"自制缓存驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自制缓存驱动"}},[t._v("#")]),t._v(" 自制缓存驱动")]),t._v(" "),a("p",[t._v("目前，缓存层 Kurimudb 只拥有 Rxjs 一个驱动，但实现一个新驱动其实很简单，只要实现此接口即可：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CacheDriverInterface "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kurimudb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果需要参考例子，可以"),a("a",{attrs:{href:"https://github.com/akirarika/kurimudb/blob/master/kurimudb/drivers/RxjsDriver.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看此处"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("如果你实现了新的驱动，欢迎给在 Github 上给 Kurimudb 发 "),a("a",{attrs:{href:"https://github.com/akirarika/kurimudb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),a("OutboundLink")],1),t._v("，让大家一起使用哦！")])])}),[],!1,null,null,null);s.default=r.exports}}]);