(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-2d0e5357":"843fbedf","chunk-2d0e5a11":"f52fa60a","chunk-2d21dc20":"0c4eba80","chunk-2d2293f3":"2ccdf9b5","chunk-5bea62c7":"f6daa9e4","lang-request0":"eee013f4","lang-request4":"6ad162c4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-5bea62c7":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-2d0e5357":"31d6cfe0","chunk-2d0e5a11":"31d6cfe0","chunk-2d21dc20":"31d6cfe0","chunk-2d2293f3":"31d6cfe0","chunk-5bea62c7":"37882b8c","lang-request0":"31d6cfe0","lang-request4":"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-oa/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0169":function(e,t,n){},"0e0e":function(e,t,n){"use strict";n.r(t),t["default"]={placeholder:{search:"请输入内容"}}},"28fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var r=n("53ca"),a=Array.isArray;function o(e){var t=Object(r["a"])(e);return null!==e&&"object"===t}function c(e,t){return t.test(e)}},"51ff":function(e,t,n){var r={"./email.svg":"cbb7","./prompt.svg":"c27d"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="51ff"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=n("2877"),u={},s=Object(c["a"])(u,a,o,!1,null,null,null),i=s.exports,l=n("2f62"),d={roles:function(e){return e.user.roles}},f=(n("d3b7"),n("fa57")),h=n("ef2b");function m(e){return Object(h["a"])({url:"api/login",method:"post",params:e})}function p(){return Object(h["a"])({url:"api/logout"})}function v(){return Object(h["a"])({url:"api/userInfo"})}var b=n("b768"),g={token:Object(f["a"])(),roles:[],avatar:b["a"],username:"",local:"zh-CN"},w={SET_TOKEN:function(e,t){e.token=t},REMOVE_TOKEN:function(e){e.token=""},SET_ROLE:function(e,t){e.roles=t},SET_AVATAR:function(e,t){e.avatar=t},SET_USERNAME:function(e,t){e.username=t},SET_LOCAL:function(e,t){e.local=t}},O={login:function(e,t){var n=e.commit;return new Promise((function(e,r){m(t).then((function(t){var r=t.token;Object(f["c"])(r),n("SET_TOKEN",r),e()})).catch((function(e){return r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){p().then((function(){Object(f["b"])(),t("REMOVE_TOKEN"),e()})).catch(n())}))},userInfo:function(e){var t=e.commit;return new Promise((function(e,n){v().then((function(n){var r=n.roles,a=n.avatar,o=void 0===a?b["a"]:a,c=n.username,u=n.local,s=void 0===u?"zh-CN":u;t("SET_ROLE",r),t("SET_AVATAR",o),t("SET_USERNAME",c),t("SET_LOCAL",s),e({roles:r,avatar:o,username:c,local:s})})).catch((function(e){return n(e)}))}))}},E={namespaced:!0,state:g,mutations:w,actions:O},_=(n("99af"),n("caad"),n("45fc"),n("2532"),n("b85c")),y=n("2909"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("app-header"),n("app-side-bar"),n("app-sittings"),n("app-footer"),n("router-view")],1)},j=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"header_search"},[n("transition",{attrs:{name:"zoom-in-center"}},[e.showInput?n("el-input",{attrs:{placeholder:e.$t("common.placeholder.search")},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}):e._e()],1),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleClick},slot:"append"})],1),n("div",{staticClass:"header_prompt"},[n("svg-icon",{attrs:{"class-name":"prompt"}}),n("svg-icon",{attrs:{"class-name":"email"}})],1),n("div",{staticClass:"header_avatar"})])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header_title"},[n("h2",{staticClass:"title_inline"},[e._v(" vue-oa ")])])}],S={name:"AppHeader",data:function(){return{showInput:!1,searchValue:""}},methods:{handleClick:function(){this.showInput=!this.showInput}}},N=S,C=Object(c["a"])(N,T,x,!1,null,null,null),q=C.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},A=[],L={name:"AppSideBar",data:function(){return{}}},z=L,P=Object(c["a"])(z,R,A,!1,null,null,null),M=P.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},H=[],V={},I=V,B=Object(c["a"])(I,U,H,!1,null,null,null),$=B.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},K=[],F={},W=F,J=Object(c["a"])(W,D,K,!1,null,null,null),X=J.exports,Q={name:"Layout",components:{AppHeader:q,AppSideBar:M,AppSittings:$,AppFooter:X}},G=Q,Y=(n("9aa9"),Object(c["a"])(G,k,j,!1,null,"233dd4eb",null)),Z=Y.exports,ee={path:"/router",name:"Router",redirect:{name:"MiddleRouter"},component:Z,meta:{roles:[2],title:"router",icon:"router"},children:[{path:"middle-router",name:"MiddleRouter",redirect:{name:"LasterRouterOne"},component:function(){return n.e("chunk-2d2293f3").then(n.bind(null,"dd41"))},meta:{roles:[2],title:"middleRouter",icon:"middle-router"},children:[{path:"laster-router-one",name:"LasterRouterOne",component:function(){return n.e("chunk-2d21dc20").then(n.bind(null,"d350"))},meta:{roles:[2],title:"lasterRouterOne",icon:"laster-router-one"}},{path:"laster-router-two",name:"LasterRouterTwo",component:function(){return n.e("chunk-2d0e5a11").then(n.bind(null,"94ff"))},meta:{roles:[2],title:"lasterRouterTwo",icon:"laster-router-two"}}]}]},te=[ee],ne=[{path:"/login",name:"Login",component:function(){return n.e("chunk-5bea62c7").then(n.bind(null,"9ed6"))}},{path:"/",component:Z,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0e5357").then(n.bind(null,"9406"))}}]}],re={routes:[],dynimicRoutes:[]},ae={SET_ROUTES:function(e,t){e.routes=ne.concat(t),e.dynimicRoutes=t}};function oe(e,t){return!e.meta||!e.meta.roles||t.some((function(t){return e.meta.roles.includes(t)}))}function ce(e,t){var n,r=[],a=Object(y["a"])(e),o=Object(_["a"])(a);try{for(o.s();!(n=o.n()).done;){var c=n.value,u=c;oe(c,t)&&(u.children&&(u.children=ce(u.children,t)),r.push(u))}}catch(s){o.e(s)}finally{o.f()}return r}var ue={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r;r=t.includes("admin")?te||[]:ce(te,t),n("SET_ROUTES",r),e(r)}))}},se={namespaced:!0,state:re,mutations:ae,actions:ue};r["default"].use(l["a"]);var ie=new l["a"].Store({getters:d,modules:{user:E,permission:se}}),le=n("9923"),de=n("8c4f");r["default"].use(de["a"]);var fe=Object(y["a"])(ne),he=new de["a"]({base:"/vue-oa/",routes:fe,scrollBehavior:function(e,t,n){return n||(e.hash&&document.querySelector(e.hash)?{selector:e.hash}:{y:0})}}),me=he,pe=n("5530"),ve=(n("96cf"),n("1da1"));me.beforeEach(function(){var e=Object(ve["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,c,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(f["a"])(),"/login"!==t.path){e.next=5;break}a?r("/"):r(),e.next=29;break;case 5:if(!a){e.next=28;break}if(e.prev=6,o=ie.getters.roles&&ie.getters.roles.length>0,!o){e.next=12;break}r(),e.next=21;break;case 12:return e.next=14,ie.dispatch("user/userInfo");case 14:return c=e.sent,u=c.roles,e.next=18,ie.dispatch("permission/generateRoutes",u);case 18:s=e.sent,me.addRoutes(s),r(Object(pe["a"])(Object(pe["a"])({},t),{},{replace:!0}));case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](6),r(new Error(e.t0));case 26:e.next=29;break;case 28:r("/login?next=".concat(t.fullPath));case 29:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t,n,r){return e.apply(this,arguments)}}());n("0fb7"),n("450d");var be=n("f529"),ge=n.n(be),we=(n("10cb"),n("f3ad")),Oe=n.n(we),Ee=(n("1f1a"),n("4e4b")),_e=n.n(Ee),ye=(n("eca7"),n("3787")),ke=n.n(ye),je=(n("425f"),n("4105")),Te=n.n(je),xe=(n("1951"),n("eedf")),Se=n.n(xe);r["default"].use(Se.a),r["default"].use(Te.a),r["default"].use(ke.a),r["default"].use(_e.a),r["default"].use(Oe.a),r["default"].prototype.$message=ge.a;n("f5df1"),n("fb98"),n("d81d"),n("ddb0");var Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({staticClass:"svg-icon",class:e.className,attrs:{"aria-hidden":"true"}},e.$listeners),[n("use",{attrs:{"xlink:href":e.useName}})])},Ce=[],qe={name:"SvgIcon",props:{className:{type:String,required:!0}},computed:{useName:function(){return"#icon-".concat(this.className)}}},Re=qe,Ae=Object(c["a"])(Re,Ne,Ce,!1,null,null,null),Le=Ae.exports;r["default"].component("svg-icon",Le);var ze=n("51ff"),Pe=function(e){return e.keys().map(e)};Pe(ze),r["default"].config.productionTip=!1;t["default"]=new r["default"]({i18n:le["i18n"],router:me,store:ie,render:function(e){return e(i)}}).$mount("#app")},5892:function(e,t,n){var r={"./":["9923"],"./en":["cc06","lang-request0"],"./en/":["cc06","lang-request0"],"./en/index":["cc06","lang-request0"],"./en/index.js":["cc06","lang-request0"],"./en/request":["3e28","lang-request4"],"./en/request.js":["3e28","lang-request4"],"./index":["9923"],"./index.js":["9923"],"./zh-CN":["b60a"],"./zh-CN/":["b60a"],"./zh-CN/common":["0e0e"],"./zh-CN/common.js":["0e0e"],"./zh-CN/index":["b60a"],"./zh-CN/index.js":["b60a"],"./zh-CN/login":["feb5"],"./zh-CN/login.js":["feb5"],"./zh-CN/request":["a200"],"./zh-CN/request.js":["a200"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},9923:function(e,t,n){"use strict";n.r(t),n.d(t,"i18n",(function(){return i})),n.d(t,"loadLanguageAsync",(function(){return l}));n("99af"),n("caad"),n("d3b7");var r=n("2b0e"),a=n("a925"),o=n("b60a"),c=n("4897"),u=n.n(c);r["default"].use(a["a"]);var s=["zh"],i=new a["a"]({locale:"zh",fallbackLocale:"zh",messages:{zh:o["default"]},missing:function(e,t){throw new Error("the ".concat(e," local not find the key: ").concat(t))}});function l(e){return i.locale!==e&&(s.includes(e)||n("5892")("./".concat(e)).then((function(t){i.setLocaleMessage(e,t.default),s.push(e)})),i.locale=e,u.a.i18n((function(e,t){return i.t(e,t)}))),Promise.resolve(e)}},"9aa9":function(e,t,n){"use strict";var r=n("0169"),a=n.n(r);a.a},a200:function(e,t,n){"use strict";n.r(t),t["default"]={HTTP_STATUS_UNKNOWN:"未知的HTTP状态码"}},b60a:function(e,t,n){"use strict";n.r(t);var r=n("a200"),a=n("feb5"),o=n("0e0e");t["default"]={common:o["default"],request:r["default"],Login:a["default"]}},b768:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=1,a="https://dummyimage.com/100x100/666/666&text=default-avatar"},c27d:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),u=new a.a({id:"icon-prompt",use:"icon-prompt-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-prompt"><defs><style></style></defs><path d="M905.325 737.104l-66.421-51.65c-11.461-8.904-18.033-22.346-18.033-36.882V410.418c0-41.676-8.178-82.125-24.304-120.227-15.544-36.774-37.797-69.791-66.14-98.141-28.31-28.336-61.333-50.594-98.152-66.157a310.216 310.216 0 00-39.96-13.75v-31.9c-.032-44.247-36.047-80.244-80.279-80.244-44.262 0-80.272 35.997-80.272 80.245v31.88a312.742 312.742 0 00-39.966 13.752c-36.741 15.528-69.764 37.787-98.147 66.152-28.325 28.298-50.587 61.317-66.169 98.142-16.127 38.155-24.305 78.602-24.305 120.218v238.13c0 14.527-6.57 27.97-18.03 36.882l-66.427 51.659c-13.141 10.224-22.312 24.01-26.524 39.865-3.854 14.488-3.308 29.66 1.577 43.874 4.88 14.253 13.758 26.57 25.68 35.62 13.103 9.932 28.812 15.183 45.427 15.183h694.26c16.622 0 32.328-5.241 45.428-15.155 11.906-9.035 20.789-21.352 25.684-35.617 4.893-14.223 5.446-29.396 1.599-43.884-4.219-15.844-13.39-29.621-26.526-39.841zm-102.605-5.157l66.414 51.643c6.768 5.288 7.229 12.823 5.4 18.117-1.817 5.306-6.807 10.976-15.365 10.976H164.881c-8.566 0-13.547-5.668-15.354-10.976-1.814-5.303-1.35-12.849 5.385-18.113l66.414-51.647c25.925-20.156 40.795-50.552 40.795-83.396V410.387c0-137.799 112.112-249.903 249.914-249.903 137.782 0 249.873 112.106 249.873 249.903V648.55c.02 32.848 14.898 63.245 40.812 83.396zM512.035 58.935c11.754 0 21.316 9.56 21.316 21.31v18.147H490.7V80.244c0-11.75 9.571-21.309 21.334-21.309zM406.366 918.343c0 58.26 47.404 105.657 105.67 105.657 58.254 0 105.648-47.398 105.648-105.657v-4.075H406.366v4.075zM243.198 128.56c6.113-4.952 9.939-11.992 10.773-19.827.838-7.843-1.432-15.524-6.395-21.636-5.634-6.922-13.992-10.892-22.933-10.892a29.565 29.565 0 00-18.515 6.545c-48.966 39.622-89.285 87.59-119.838 142.576-31.335 56.47-50.82 117.649-57.918 181.835-.87 7.808 1.362 15.495 6.287 21.646 4.923 6.147 11.94 10.012 19.74 10.88a28.15 28.15 0 003.272.188c15.023 0 27.598-11.272 29.248-26.218 12.467-112.38 67.968-213.628 156.28-285.097zm752.434 278.577c-7.075-64.164-26.551-125.334-57.894-181.81C907.214 170.36 866.893 122.38 817.9 82.718a29.551 29.551 0 00-18.521-6.54c-8.923 0-17.281 3.98-22.937 10.924-4.943 6.112-7.213 13.79-6.388 21.626.823 7.836 4.641 14.87 10.75 19.802 88.346 71.502 143.838 172.75 156.257 285.095 1.667 14.953 14.243 26.226 29.25 26.226 1.131 0 2.235-.061 3.263-.183 7.812-.856 14.836-4.722 19.778-10.884 4.905-6.117 7.136-13.803 6.279-21.647z" /></symbol>'});c.a.add(u);t["default"]=u},cbb7:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),u=new a.a({id:"icon-email",use:"icon-email-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-email"><defs><style></style></defs><path d="M954.182 896H70.47C31.977 896 .652 864.675.652 826.182V244.364c0-38.493 31.325-69.819 69.818-69.819h883.712c38.493 0 69.818 31.326 69.818 69.819v581.818c0 38.493-31.325 69.818-69.818 69.818zM70.47 221.09c-12.847 0-23.273 10.45-23.273 23.274v581.818c0 12.823 10.426 23.273 23.273 23.273h883.712c12.846 0 23.273-10.45 23.273-23.273V244.364c0-12.824-10.427-23.273-23.273-23.273H70.47z" /><path d="M537.135 628.364c-5.842 0-11.683-2.188-16.175-6.563-9.24-8.937-9.472-23.669-.535-32.908L914.85 181.62c8.983-9.262 23.738-9.425 32.908-.512 9.239 8.937 9.472 23.669.535 32.908L553.868 621.289a23.281 23.281 0 01-16.733 7.075z" /><path d="M537.135 628.364a23.211 23.211 0 01-15.174-5.632l-315.392-271.43c-9.752-8.378-10.845-23.087-2.444-32.815 8.378-9.798 23.087-10.845 32.815-2.443l315.392 271.43c9.75 8.378 10.845 23.086 2.443 32.814-4.584 5.33-11.124 8.076-17.64 8.076z" /></symbol>'});c.a.add(u);t["default"]=u},ef2b:function(e,t,n){"use strict";n("d3b7"),n("0fb7"),n("450d");var r=n("f529"),a=n.n(r),o=n("bc3a"),c=n.n(o),u=n("9923"),s=(n("07ac"),n("28fa"));function i(e,t){for(var n=!0,r=0,a=Object.values(e);r<a.length;r++){var o=a[r];if(Object(s["b"])(o)||Object(s["a"])(o))n=i(o);else if(Boolean(o)||Boolean(!0===t)&&0===o){n=!1;break}}return n}function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Object(s["b"])(e))return i(e,t);throw new Error("not a object")}var d=n("b768"),f=n("fa57"),h=c.a.create({baseURL:"https://luoschenfeng.com:5000/mock/5f13002872833e605442f079",timeout:5e3});h.defaults.headers.common["HTTP_X_REQUESTED_WITH"]="XMLHttpRequest";var m=Object(f["a"])();function p(e){var t=e.url,n=e.method,r=void 0===n?"get":n,a=e.params,o=void 0===a?{}:a,c={url:t,method:r};return"get"!==r||l(o)||(c.params=o),"post"!==r||l(o)||(c.data=o),h(c)}h.defaults.headers.common["token"]=m,h.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.interceptors.response.use((function(e){var t=e.data,n=t.status,r=t.data,o=void 0===r?{}:r;if(n===d["b"])return Promise.resolve(o);try{var c=t.code,s=void 0===c?0:c,i=t.message,l=void 0===i?"":i;if(l)throw a.a.error(l),new Error(l);if(s){var f="";throw f=4e3<=s<5e3?"code ".concat(s," 权限未定义"):5e3<=s<6e3?"code ".concat(s," 验证失败"):"code ".concat(s),a.a.error(f),new Error(f)}throw a.a.error(u["i18n"].t("request.HTTP_STATUS_UNKNOWN")),new Error(u["i18n"].t("request.HTTP_STATUS_UNKNOWN"))}catch(h){return Promise.reject(h)}}),(function(e){return Promise.reject(e)}));t["a"]=p},fa57:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("a78e"),a=n.n(r),o="token";function c(e){return window.navigator.cookieEnabled?a.a.set(o,e):window.localStorage.setItem(o,e)}function u(){return window.navigator.cookieEnabled?a.a.get(o):window.localStorage.getItem(o)}function s(){return window.navigator.cookieEnabled?a.a.remove(o):window.localStorage.removeItem(o)}},fb98:function(e,t,n){},feb5:function(e,t,n){"use strict";n.r(t),t["default"]={placeholder:{username:"请输入用户名",password:"请输入密码"},prompt:{usernameLength:"用户名长度有误，应为3-15位",usernameFormat:"用户名格式有误，应由数字和字母的组成",passwordLength:"密码长度有误，应为8-30位",passwordFormat:"密码格式有误，应为大写字母、小写字母、数字、特殊字符的组合"},text:{login:"登录"}}}});
//# sourceMappingURL=app.dcd7d06e.js.map