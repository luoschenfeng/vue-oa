(function(e){function t(t){for(var a,r,u=t[0],c=t[1],i=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function u(e){return c.p+"js/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-061508ed":"0f2d850f","chunk-2d0e5357":"696b24e0","chunk-2d0e5a11":"5de8355a","chunk-2d21dc20":"6fc92c72","chunk-2d2293f3":"766691f9","lang-request0":"eee013f4","lang-request4":"6ad162c4"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-061508ed":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-061508ed":"a2973f33","chunk-2d0e5357":"31d6cfe0","chunk-2d0e5a11":"31d6cfe0","chunk-2d21dc20":"31d6cfe0","chunk-2d2293f3":"31d6cfe0","lang-request0":"31d6cfe0","lang-request4":"31d6cfe0"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-oa/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e0e":function(e,t,n){"use strict";n.r(t),t["default"]={placeholder:{search:"请输入内容"}}},"13b8":function(e,t,n){"use strict";var a=n("ec59"),r=n.n(a);r.a},"28fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n("53ca"),r=Array.isArray;function o(e){var t=Object(a["a"])(e);return null!==e&&"object"===t}function s(e,t){return t.test(e)}},4958:function(e,t,n){"use strict";n.r(t),t["default"]={title:"首页"}},"4b44":function(e,t,n){"use strict";var a=n("647b"),r=n.n(a);r.a},"51ff":function(e,t,n){var a={"./default-menu.svg":"9359","./email.svg":"cbb7","./menu.svg":"bd3d","./prompt.svg":"c27d","./vue.svg":"f938"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="51ff"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),u={},c=Object(s["a"])(u,r,o,!1,null,null,null),i=c.exports,l=n("2f62"),d={roles:function(e){return e.user.roles},dynimicRoutes:function(e){return e.permission.dynimicRoutes},routes:function(e){return e.permission.routes},theme:function(e){return e.settings.theme},local:function(e){return e.settings.local},sidebarCollapse:function(e){return e.settings.sidebarCollapse}},f=(n("d3b7"),n("fa57")),m=n("ef2b");function h(e){return Object(m["a"])({url:"api/login",method:"post",params:e})}function p(){return Object(m["a"])({url:"api/logout"})}function v(){return Object(m["a"])({url:"api/userInfo"})}var b=n("b768"),g={token:Object(f["a"])(),roles:[],avatar:b["a"],username:""},w={SET_TOKEN:function(e,t){e.token=t},REMOVE_TOKEN:function(e){e.token=""},SET_ROLE:function(e,t){e.roles=t},SET_AVATAR:function(e,t){e.avatar=t},SET_USERNAME:function(e,t){e.username=t}},_={login:function(e,t){var n=e.commit;return new Promise((function(e,a){h(t).then((function(t){var a=t.token;Object(f["c"])(a),n("SET_TOKEN",a),e()})).catch((function(e){return a(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){p().then((function(){Object(f["b"])(),t("REMOVE_TOKEN"),e()})).catch(n())}))},userInfo:function(e){var t=e.commit;return new Promise((function(e,n){v().then((function(n){var a=n.roles,r=n.avatar,o=void 0===r?b["a"]:r,s=n.username,u=n.local,c=void 0===u?"zh-CN":u;t("SET_ROLE",a),t("SET_AVATAR",o),t("SET_USERNAME",s),e({roles:a,avatar:o,username:s,local:c})})).catch((function(e){return n(e)}))}))}},y={namespaced:!0,state:g,mutations:w,actions:_},C=(n("99af"),n("caad"),n("45fc"),n("2532"),n("b85c")),E=n("2909");function k(e){return e}var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("layout-header",{staticClass:"layout_header"}),n("div",{staticClass:"layout_main"},[n("layout-sidebar",{class:[e.sidebarCollapse?"main_sidebar__resize":"","main_sidebar"]}),n("router-view",{class:[e.sidebarCollapse?"main_view__resize":"","main_view"]})],1),n("layout-sittings",{staticClass:"layout_sittings"})],1)},S=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{class:[e.sidebarCollapse?"header_title__collapse":"","header_title"],attrs:{collapse:e.sidebarCollapse}},[n("router-link",{staticClass:"title_link",attrs:{to:"/",tag:"h2"}},[n("svg-icon",{staticClass:"icon_vue",attrs:{"class-name":"vue"}}),e.sidebarCollapse?e._e():n("span",{staticClass:"title_link title_link__h2"},[e._v("vue-oa")])],1)],1),n("div",{staticClass:"header_menu"},[n("svg-icon",{staticClass:"menu_icon",attrs:{"class-name":"menu"},on:{click:e.handleToggleSidebar}})],1),n("div",{staticClass:"header_search"},[n("transition",{attrs:{name:"zoom-in-right"}},[e.showInput?n("el-input",{staticClass:"search_input",attrs:{placeholder:e.$t("common.placeholder.search")},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}):e._e()],1),n("i",{staticClass:"el-icon-search search_icon",on:{click:e.handleClick}})],1),n("div",{staticClass:"header_message"},[n("el-badge",{staticClass:"message_item",attrs:{value:12}},[n("svg-icon",{staticClass:"info_icon",attrs:{"class-name":"prompt"}})],1),n("el-badge",{staticClass:"message_item",attrs:{value:12}},[n("svg-icon",{staticClass:"info_icon",attrs:{"class-name":"email"}})],1)],1),n("div",{staticClass:"header_operate"},[n("el-dropdown",[n("div",{staticClass:"header_avatar"},[n("el-avatar",{attrs:{size:e.avatar.size,src:e.avatar.url}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("黄金糕")]),n("el-dropdown-item",[e._v("狮子头")]),n("el-dropdown-item",[e._v("螺蛳粉")]),n("el-dropdown-item",[e._v("双皮奶")]),n("el-dropdown-item",[e._v("蚵仔煎")])],1)],1)],1)])},x=[],j={name:"LayoutHeader",data:function(){return{showInput:!1,searchValue:"",avatar:{size:"medium",url:"https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196_960_720.jpg"}}},computed:{sidebarCollapse:{get:function(){return this.$store.getters["sidebarCollapse"]},set:function(e){this.$store.dispatch("settings/setSidebarCollapse",e)}}},methods:{handleClick:function(){this.showInput=!this.showInput},handleToggleSidebar:function(){this.sidebarCollapse=!this.sidebarCollapse}}},N=j,z=(n("4b44"),Object(s["a"])(N,T,x,!1,null,"4f50d1e4",null)),L=z.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar_menu"},[n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{"default-active":e.menu.cuttentActive,collapse:e.sidebarCollapse,"collapse-transition":!1,"unique-opened":!1}},[n("submenu-component",{attrs:{routes:e.routes}})],1)],1)],1)},q=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.routes,(function(t){return[t.children&&t.children.length?n("div",{key:t.path},[e.submenuShow(t)?n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("svg-icon",{attrs:{"class-name":t.meta.icon||"default-menu"}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(e.$t(""+t.meta.title))+" ")])],1),n("submenu-component",{staticClass:"menu__nest",attrs:{routes:t.children}})],2):n("submenu-component",{attrs:{routes:t.children}})],1):e.submenuShow(t)?[n("router-link",{key:t.path,staticClass:"menu-item_link",attrs:{to:{name:t.name}}},[n("el-menu-item",{attrs:{index:t.path}},[n("svg-icon",{attrs:{"class-name":t.meta.icon||"default-menu"}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t(""+t.meta.title)))])],1)],1)]:e._e()]}))],2)},H=[],A={name:"SubmenuComponent",props:{routes:{type:Array,default:function(){return[]}}},methods:{submenuShow:function(e){return e.meta&&(void 0===e.meta.sidebarShow||e.meta.sidebarShow)&&e.meta.title}}},P=A,B=(n("13b8"),Object(s["a"])(P,M,H,!1,null,"2d6bf6a4",null)),I=B.exports,$={name:"LayoutSidebar",components:{SubmenuComponent:I},data:function(){return{menu:{cuttentActive:"dashboard"}}},computed:{routes:function(){return this.$store.getters["routes"]},sidebarCollapse:function(){return this.$store.getters["sidebarCollapse"]}}},U=$,V=Object(s["a"])(U,R,q,!1,null,"17ba2a8d",null),D=V.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},F=[],W={},J=W,X=Object(s["a"])(J,K,F,!1,null,null,null),Q=X.exports,G={name:"Layout",components:{LayoutHeader:L,LayoutSidebar:D,LayoutSittings:Q},computed:{sidebarCollapse:function(){return this.$store.getters["sidebarCollapse"]}}},Y=G,Z=(n("a44a"),Object(s["a"])(Y,O,S,!1,null,"67f327e3",null)),ee=Z.exports,te=k({path:"/router",name:"Router",redirect:{name:"MiddleRouter"},component:ee,meta:{roles:[2],title:"router.title.index"},children:[{path:"middle-router",name:"MiddleRouter",redirect:{name:"LasterRouterOne"},component:function(){return n.e("chunk-2d2293f3").then(n.bind(null,"dd41"))},meta:{roles:[2],title:"router.title.middleRouter"},children:[{path:"laster-router-one",name:"LasterRouterOne",component:function(){return n.e("chunk-2d21dc20").then(n.bind(null,"d350"))},meta:{roles:[2],title:"router.title.lasterRouterOne"}},{path:"laster-router-two",name:"LasterRouterTwo",component:function(){return n.e("chunk-2d0e5a11").then(n.bind(null,"94ff"))},meta:{roles:[2],title:"router.title.lasterRouterTwo"}}]}]}),ne=[te],ae=[k({path:"/login",name:"Login",component:function(){return n.e("chunk-061508ed").then(n.bind(null,"9ed6"))}}),k({path:"/",component:ee,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0e5357").then(n.bind(null,"9406"))},meta:{title:"dashboard.title"}}]})],re={routes:[],dynimicRoutes:[]},oe={SET_ROUTES:function(e,t){e.routes=ae.concat(t),e.dynimicRoutes=t}};function se(e,t){return!e.meta||!e.meta.roles||t.some((function(t){return e.meta.roles.includes(t)}))}function ue(e,t){var n,a=[],r=Object(E["a"])(e),o=Object(C["a"])(r);try{for(o.s();!(n=o.n()).done;){var s=n.value,u=s;se(s,t)&&(u.children&&(u.children=ue(u.children,t)),a.push(u))}}catch(c){o.e(c)}finally{o.f()}return a}var ce={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var a;a=t.includes("admin")?ne||[]:ue(ne,t),n("SET_ROUTES",a),e(a)}))}},ie={namespaced:!0,state:re,mutations:oe,actions:ce},le=n("a78e"),de=n.n(le),fe="theme",me="local";function he(e){return window.navigator.cookieEnabled?de.a.set(fe,e):window.localStorage.setItem(fe,e)}function pe(){return window.navigator.cookieEnabled?de.a.get(fe):window.localStorage.getItem(fe)}function ve(e){return window.navigator.cookieEnabled?de.a.set(me,e):window.localStorage.setItem(me,e)}function be(){return window.navigator.cookieEnabled?de.a.get(me):window.localStorage.getItem(me)}var ge={theme:pe(),local:be(),sidebarCollapse:!1},we={SET_THEME:function(e,t){e.theme=t},SET_LOCAL:function(e,t){e.local=t},SET_Sidebar_Collapse:function(e,t){e.sidebarCollapse=t}},_e={setTheme:function(e,t){var n=e.commit;n("SET_THEME",t),he(t)},setLocal:function(e,t){var n=e.commit;n("SET_LOCAL",t),ve()},setSidebarCollapse:function(e,t){var n=e.commit;n("SET_Sidebar_Collapse",t)}},ye={namespaced:!0,state:ge,mutations:we,actions:_e};a["default"].use(l["a"]);var Ce=new l["a"].Store({getters:d,modules:{user:y,permission:ie,settings:ye}}),Ee=n("9923"),ke=n("8c4f");a["default"].use(ke["a"]);var Oe=Object(E["a"])(ae),Se=new ke["a"]({base:"/vue-oa/",routes:Oe,scrollBehavior:function(e,t,n){return n||(e.hash&&document.querySelector(e.hash)?{selector:e.hash}:{y:0})}}),Te=Se,xe=n("5530"),je=(n("96cf"),n("1da1"));Te.beforeEach(function(){var e=Object(je["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,s,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=Object(f["a"])(),"/login"!==t.path){e.next=5;break}r?a("/"):a(),e.next=29;break;case 5:if(!r){e.next=28;break}if(e.prev=6,o=Ce.getters.roles&&Ce.getters.roles.length>0,!o){e.next=12;break}a(),e.next=21;break;case 12:return e.next=14,Ce.dispatch("user/userInfo");case 14:return s=e.sent,u=s.roles,e.next=18,Ce.dispatch("permission/generateRoutes",u);case 18:c=e.sent,Te.addRoutes(c),a(Object(xe["a"])(Object(xe["a"])({},t),{},{replace:!0}));case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](6),a(new Error(e.t0));case 26:e.next=29;break;case 28:a("/login?next=".concat(t.fullPath));case 29:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t,n,a){return e.apply(this,arguments)}}());n("0fb7"),n("450d");var Ne=n("f529"),ze=n.n(Ne),Le=(n("e2f3"),n("06f9")),Re=n.n(Le),qe=(n("0c67"),n("299c")),Me=n.n(qe),He=(n("8bd8"),n("4cb2")),Ae=n.n(He),Pe=(n("34db"),n("3803")),Be=n.n(Pe),Ie=(n("ce18"),n("f58e")),$e=n.n(Ie),Ue=(n("4ca3"),n("443e")),Ve=n.n(Ue),De=(n("bd49"),n("18ff")),Ke=n.n(De),Fe=(n("960d"),n("defb")),We=n.n(Fe),Je=(n("cb70"),n("b370")),Xe=n.n(Je),Qe=(n("920a"),n("4f0c")),Ge=n.n(Qe),Ye=(n("10cb"),n("f3ad")),Ze=n.n(Ye),et=(n("1f1a"),n("4e4b")),tt=n.n(et),nt=(n("eca7"),n("3787")),at=n.n(nt),rt=(n("425f"),n("4105")),ot=n.n(rt),st=(n("2986"),n("14e9")),ut=n.n(st),ct=(n("1951"),n("eedf")),it=n.n(ct);a["default"].use(it.a),a["default"].use(ut.a),a["default"].use(ot.a),a["default"].use(at.a),a["default"].use(tt.a),a["default"].use(Ze.a),a["default"].use(Ge.a),a["default"].use(Xe.a),a["default"].use(We.a),a["default"].use(Ke.a),a["default"].use(Ve.a),a["default"].use($e.a),a["default"].use(Be.a),a["default"].use(Ae.a),a["default"].use(Me.a),a["default"].use(Re.a),a["default"].prototype.$message=ze.a;n("f5df1"),n("fb98"),n("d81d"),n("ac1f"),n("466d"),n("ddb0");var lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({staticClass:"svg-icon",class:e.className,attrs:{"aria-hidden":"true"}},e.$listeners),[n("use",{attrs:{"xlink:href":e.useName}})])},dt=[],ft={name:"SvgIcon",props:{className:{type:String,required:!0}},computed:{useName:function(){return"#icon-".concat(this.className)}},created:function(){0}},mt=ft,ht=Object(s["a"])(mt,lt,dt,!1,null,null,null),pt=ht.exports;a["default"].component("svg-icon",pt);var vt=n("51ff"),bt=function(e){return e.keys().map(e)};bt(vt),a["default"].config.productionTip=!1;t["default"]=new a["default"]({i18n:Ee["i18n"],router:Te,store:Ce,render:function(e){return e(i)}}).$mount("#app")},5892:function(e,t,n){var a={"./":["9923"],"./en":["cc06","lang-request0"],"./en/":["cc06","lang-request0"],"./en/index":["cc06","lang-request0"],"./en/index.js":["cc06","lang-request0"],"./en/request":["3e28","lang-request4"],"./en/request.js":["3e28","lang-request4"],"./index":["9923"],"./index.js":["9923"],"./zh-CN":["b60a"],"./zh-CN/":["b60a"],"./zh-CN/common":["0e0e"],"./zh-CN/common.js":["0e0e"],"./zh-CN/dashboard":["4958"],"./zh-CN/dashboard.js":["4958"],"./zh-CN/index":["b60a"],"./zh-CN/index.js":["b60a"],"./zh-CN/login":["feb5"],"./zh-CN/login.js":["feb5"],"./zh-CN/request":["a200"],"./zh-CN/request.js":["a200"],"./zh-CN/router":["6cdb"],"./zh-CN/router.js":["6cdb"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="5892",e.exports=r},"647b":function(e,t,n){},"6cdb":function(e,t,n){"use strict";n.r(t),t["default"]={title:{index:"导航",middleRouter:"导航1-1",lasterRouterOne:"导航1-1-1",lasterRouterTwo:"导航1-1-2"}}},9359:function(e,t,n){"use strict";n.r(t);var a=n("e017"),r=n.n(a),o=n("21a1"),s=n.n(o),u=new r.a({id:"icon-default-menu",use:"icon-default-menu-usage",viewBox:"0 0 1152 1024",content:'<symbol class="icon" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg" id="icon-default-menu"><defs><style></style></defs><path d="M978.56 186.182c0 24.522-16.638 46.545-37.158 46.545H177.188c-20.52 0-37.16-22.023-37.16-46.545 0-24.522 16.639-46.546 37.16-46.546h764.214c20.52 0 37.158 22.024 37.158 46.546zm0 325.818c0 24.522-16.638 46.545-37.158 46.545H177.188c-20.52 0-37.16-22.023-37.16-46.545 0-24.522 16.639-46.545 37.16-46.545h764.214c20.52 0 37.158 22.023 37.158 46.545zm0 325.818c0 24.522-16.638 46.546-37.158 46.546H177.188c-20.52 0-37.16-22.024-37.16-46.546s16.639-46.545 37.16-46.545h764.214c20.52 0 37.158 22.023 37.158 46.545z" /></symbol>'});s.a.add(u);t["default"]=u},9744:function(e,t,n){},9923:function(e,t,n){"use strict";n.r(t),n.d(t,"i18n",(function(){return i})),n.d(t,"loadLanguageAsync",(function(){return l}));n("99af"),n("caad"),n("d3b7");var a=n("2b0e"),r=n("a925"),o=n("b60a"),s=n("4897"),u=n.n(s);a["default"].use(r["a"]);var c=["zh"],i=new r["a"]({locale:"zh",fallbackLocale:"zh",messages:{zh:o["default"]},missing:function(e,t){console.warn("[VueI18n] the ".concat(e," local not find the key: ").concat(t))}});function l(e){return i.locale!==e&&(c.includes(e)||n("5892")("./".concat(e)).then((function(t){i.setLocaleMessage(e,t.default),c.push(e)})),i.locale=e,u.a.i18n((function(e,t){return i.t(e,t)}))),Promise.resolve(e)}},a200:function(e,t,n){"use strict";n.r(t),t["default"]={HTTP_STATUS_UNKNOWN:"未知的HTTP状态码"}},a44a:function(e,t,n){"use strict";var a=n("9744"),r=n.n(a);r.a},b60a:function(e,t,n){"use strict";n.r(t);var a=n("a200"),r=n("feb5"),o=n("0e0e"),s=n("6cdb"),u=n("4958");t["default"]={common:o["default"],request:a["default"],login:r["default"],router:s["default"],dashboard:u["default"]}},b768:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=1,r="https://dummyimage.com/100x100/666/666&text=default-avatar"},bd3d:function(e,t,n){"use strict";n.r(t);var a=n("e017"),r=n.n(a),o=n("21a1"),s=n.n(o),u=new r.a({id:"icon-menu",use:"icon-menu-usage",viewBox:"0 0 1152 1024",content:'<symbol class="icon" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg" id="icon-menu"><defs><style></style></defs><path d="M978.56 186.182c0 24.522-16.638 46.545-37.158 46.545H177.188c-20.52 0-37.16-22.023-37.16-46.545 0-24.522 16.639-46.546 37.16-46.546h764.214c20.52 0 37.158 22.024 37.158 46.546zm0 325.818c0 24.522-16.638 46.545-37.158 46.545H177.188c-20.52 0-37.16-22.023-37.16-46.545 0-24.522 16.639-46.545 37.16-46.545h764.214c20.52 0 37.158 22.023 37.158 46.545zm0 325.818c0 24.522-16.638 46.546-37.158 46.546H177.188c-20.52 0-37.16-22.024-37.16-46.546s16.639-46.545 37.16-46.545h764.214c20.52 0 37.158 22.023 37.158 46.545z" /></symbol>'});s.a.add(u);t["default"]=u},c27d:function(e,t,n){"use strict";n.r(t);var a=n("e017"),r=n.n(a),o=n("21a1"),s=n.n(o),u=new r.a({id:"icon-prompt",use:"icon-prompt-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-prompt"><defs><style></style></defs><path d="M905.325 737.104l-66.421-51.65c-11.461-8.904-18.033-22.346-18.033-36.882V410.418c0-41.676-8.178-82.125-24.304-120.227-15.544-36.774-37.797-69.791-66.14-98.141-28.31-28.336-61.333-50.594-98.152-66.157a310.216 310.216 0 00-39.96-13.75v-31.9c-.032-44.247-36.047-80.244-80.279-80.244-44.262 0-80.272 35.997-80.272 80.245v31.88a312.742 312.742 0 00-39.966 13.752c-36.741 15.528-69.764 37.787-98.147 66.152-28.325 28.298-50.587 61.317-66.169 98.142-16.127 38.155-24.305 78.602-24.305 120.218v238.13c0 14.527-6.57 27.97-18.03 36.882l-66.427 51.659c-13.141 10.224-22.312 24.01-26.524 39.865-3.854 14.488-3.308 29.66 1.577 43.874 4.88 14.253 13.758 26.57 25.68 35.62 13.103 9.932 28.812 15.183 45.427 15.183h694.26c16.622 0 32.328-5.241 45.428-15.155 11.906-9.035 20.789-21.352 25.684-35.617 4.893-14.223 5.446-29.396 1.599-43.884-4.219-15.844-13.39-29.621-26.526-39.841zm-102.605-5.157l66.414 51.643c6.768 5.288 7.229 12.823 5.4 18.117-1.817 5.306-6.807 10.976-15.365 10.976H164.881c-8.566 0-13.547-5.668-15.354-10.976-1.814-5.303-1.35-12.849 5.385-18.113l66.414-51.647c25.925-20.156 40.795-50.552 40.795-83.396V410.387c0-137.799 112.112-249.903 249.914-249.903 137.782 0 249.873 112.106 249.873 249.903V648.55c.02 32.848 14.898 63.245 40.812 83.396zM512.035 58.935c11.754 0 21.316 9.56 21.316 21.31v18.147H490.7V80.244c0-11.75 9.571-21.309 21.334-21.309zM406.366 918.343c0 58.26 47.404 105.657 105.67 105.657 58.254 0 105.648-47.398 105.648-105.657v-4.075H406.366v4.075zM243.198 128.56c6.113-4.952 9.939-11.992 10.773-19.827.838-7.843-1.432-15.524-6.395-21.636-5.634-6.922-13.992-10.892-22.933-10.892a29.565 29.565 0 00-18.515 6.545c-48.966 39.622-89.285 87.59-119.838 142.576-31.335 56.47-50.82 117.649-57.918 181.835-.87 7.808 1.362 15.495 6.287 21.646 4.923 6.147 11.94 10.012 19.74 10.88a28.15 28.15 0 003.272.188c15.023 0 27.598-11.272 29.248-26.218 12.467-112.38 67.968-213.628 156.28-285.097zm752.434 278.577c-7.075-64.164-26.551-125.334-57.894-181.81C907.214 170.36 866.893 122.38 817.9 82.718a29.551 29.551 0 00-18.521-6.54c-8.923 0-17.281 3.98-22.937 10.924-4.943 6.112-7.213 13.79-6.388 21.626.823 7.836 4.641 14.87 10.75 19.802 88.346 71.502 143.838 172.75 156.257 285.095 1.667 14.953 14.243 26.226 29.25 26.226 1.131 0 2.235-.061 3.263-.183 7.812-.856 14.836-4.722 19.778-10.884 4.905-6.117 7.136-13.803 6.279-21.647z" /></symbol>'});s.a.add(u);t["default"]=u},cbb7:function(e,t,n){"use strict";n.r(t);var a=n("e017"),r=n.n(a),o=n("21a1"),s=n.n(o),u=new r.a({id:"icon-email",use:"icon-email-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-email"><defs><style></style></defs><path d="M954.182 896H70.47C31.977 896 .652 864.675.652 826.182V244.364c0-38.493 31.325-69.819 69.818-69.819h883.712c38.493 0 69.818 31.326 69.818 69.819v581.818c0 38.493-31.325 69.818-69.818 69.818zM70.47 221.09c-12.847 0-23.273 10.45-23.273 23.274v581.818c0 12.823 10.426 23.273 23.273 23.273h883.712c12.846 0 23.273-10.45 23.273-23.273V244.364c0-12.824-10.427-23.273-23.273-23.273H70.47z" /><path d="M537.135 628.364c-5.842 0-11.683-2.188-16.175-6.563-9.24-8.937-9.472-23.669-.535-32.908L914.85 181.62c8.983-9.262 23.738-9.425 32.908-.512 9.239 8.937 9.472 23.669.535 32.908L553.868 621.289a23.281 23.281 0 01-16.733 7.075z" /><path d="M537.135 628.364a23.211 23.211 0 01-15.174-5.632l-315.392-271.43c-9.752-8.378-10.845-23.087-2.444-32.815 8.378-9.798 23.087-10.845 32.815-2.443l315.392 271.43c9.75 8.378 10.845 23.086 2.443 32.814-4.584 5.33-11.124 8.076-17.64 8.076z" /></symbol>'});s.a.add(u);t["default"]=u},ec59:function(e,t,n){},ef2b:function(e,t,n){"use strict";n("d3b7"),n("0fb7"),n("450d");var a=n("f529"),r=n.n(a),o=n("bc3a"),s=n.n(o),u=n("9923"),c=(n("07ac"),n("28fa"));function i(e,t){for(var n=!0,a=0,r=Object.values(e);a<r.length;a++){var o=r[a];if(Object(c["b"])(o)||Object(c["a"])(o))n=i(o);else if(Boolean(o)||Boolean(!0===t)&&0===o){n=!1;break}}return n}function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Object(c["b"])(e))return i(e,t);throw new Error("not a object")}var d=n("b768"),f=n("fa57"),m=s.a.create({baseURL:"https://luoschenfeng.com:5000/mock/5f13002872833e605442f079",timeout:5e3});m.defaults.headers.common["HTTP_X_REQUESTED_WITH"]="XMLHttpRequest";var h=Object(f["a"])();function p(e){var t=e.url,n=e.method,a=void 0===n?"get":n,r=e.params,o=void 0===r?{}:r,s={url:t,method:a};return"get"!==a||l(o)||(s.params=o),"post"!==a||l(o)||(s.data=o),m(s)}m.defaults.headers.common["token"]=h,m.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){var t=e.data,n=t.status,a=t.data,o=void 0===a?{}:a;if(n===d["b"])return Promise.resolve(o);try{var s=t.code,c=void 0===s?0:s,i=t.message,l=void 0===i?"":i;if(l)throw r.a.error(l),new Error(l);if(c){var f="";throw f=4e3<=c<5e3?"code ".concat(c," 权限未定义"):5e3<=c<6e3?"code ".concat(c," 验证失败"):"code ".concat(c),r.a.error(f),new Error(f)}throw r.a.error(u["i18n"].t("request.HTTP_STATUS_UNKNOWN")),new Error(u["i18n"].t("request.HTTP_STATUS_UNKNOWN"))}catch(m){return Promise.reject(m)}}),(function(e){return Promise.reject(e)}));t["a"]=p},f938:function(e,t,n){"use strict";n.r(t);var a=n("e017"),r=n.n(a),o=n("21a1"),s=n.n(o),u=new r.a({id:"icon-vue",use:"icon-vue-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-vue"><defs><style></style></defs><path d="M512 504L764.8 68.8H630.4L512 275.2 393.6 70.4H259.2L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4 512-884.8H819.2z" /></symbol>'});s.a.add(u);t["default"]=u},fa57:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var a=n("a78e"),r=n.n(a),o="token";function s(e){return window.navigator.cookieEnabled?r.a.set(o,e):window.localStorage.setItem(o,e)}function u(){return window.navigator.cookieEnabled?r.a.get(o):window.localStorage.getItem(o)}function c(){return window.navigator.cookieEnabled?r.a.remove(o):window.localStorage.removeItem(o)}},fb98:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#333",menuHover:"#1e1e1e",subMenuBg:"#3a3d41",subMenuHover:"#46474e"}},feb5:function(e,t,n){"use strict";n.r(t),t["default"]={placeholder:{username:"请输入用户名",password:"请输入密码"},prompt:{usernameLength:"用户名长度有误，应为3-15位",usernameFormat:"用户名格式有误，应由数字和字母的组成",passwordLength:"密码长度有误，应为8-30位",passwordFormat:"密码格式有误，应为大写字母、小写字母、数字、特殊字符的组合"},text:{login:"登录"}}}});
//# sourceMappingURL=app.8ffe8e3c.js.map