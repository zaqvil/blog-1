(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{331:function(e,t,a){"use strict";a.r(t);var n=a(18),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator"}},[e._v("#")]),e._v(" Generator")]),e._v(" "),a("blockquote",[a("p",[e._v("本文为初学前端时所写，未进行勘误便移植了过来，若有错误请见谅。")])]),e._v(" "),a("p",[e._v("Generator是种特殊的函数，让我们直接上手看下哪里特殊吧。")]),e._v(" "),a("h3",{attrs:{id:"函数声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数声明"}},[e._v("#")]),e._v(" 函数声明")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function* A() {\n\tyield 'a'\n\tyield 'b'\n\treturn 'c'\n}\n\n")])])]),a("ul",[a("li",[e._v("在function后面有个星号")]),e._v(" "),a("li",[e._v("函数内部使用了yield关键字")])]),e._v(" "),a("h3",{attrs:{id:"函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数调用"}},[e._v("#")]),e._v(" 函数调用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var x = A()\nconsole.log(x)\n")])])]),a("blockquote",[a("p",[e._v("Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，遍历器对象。")])]),e._v(" "),a("p",[e._v("遍历器对象部署了next方法，调用next方法会返回对象，对象具有两个属性")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("x.next()\n//{value: 'a'; done: false}\nx.next()\n//{value: 'b'; done: false}\nx.next()\n//{value: 'c'; done: true}\n")])])]),a("p",[e._v("从现在来看，就是可以一个函数，可以调用，暂停，调用。")]),e._v(" "),a("h3",{attrs:{id:"给next传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给next传递参数"}},[e._v("#")]),e._v(" 给next传递参数")]),e._v(" "),a("p",[a("code",[e._v("next")]),e._v("方法可以带一个参数，该参数就会被当作上一个"),a("code",[e._v("yield")]),e._v("表达式的返回值。")]),e._v(" "),a("p",[e._v("相当于在外面改变了函数内部的行为。")]),e._v(" "),a("p",[e._v("而这，也让Generator具有了代替回调地狱的功能。")]),e._v(" "),a("p",[e._v("详情见下一篇文章。")])])}),[],!1,null,null,null);t.default=r.exports}}]);