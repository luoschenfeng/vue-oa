(function(e){function n(n){for(var r,u,c=n[0],i=n[1],s=n[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==a[i]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o=[];function u(e){return c.p+"js/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-2d0ab84e":"74b6233f","chunk-2d0db310":"5ead4cbf","chunk-cc013c90":"7dae74d6","lang-request0":"a8ac3e94","lang-request4":"6ad162c4"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/vue-oa/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"28fa":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u}));var r=t("53ca"),a=Array.isArray;function o(e){var n=Object(r["a"])(e);return null!==e&&"object"===n}function u(e,n){return n.test(e)}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"abc",attrs:{id:"app"}},[t("router-view")],1)},o=[],u=t("2877"),c={},i=Object(u["a"])(c,a,o,!1,null,null,null),s=i.exports,f=t("2f62"),l={roles:function(e){return e.user.roles}},d=(t("d3b7"),t("fa57")),h=t("ef2b");function m(e){return Object(h["a"])({url:"api/login",method:"post",params:e})}function p(){return Object(h["a"])({url:"api/logout"})}function b(){return Object(h["a"])({url:"api/userInfo"})}var v=t("b768"),g={token:Object(d["a"])(),roles:[],avatar:v["a"],username:"",local:"zh-CN"},w={SET_TOKEN:function(e,n){e.token=n},REMOVE_TOKEN:function(e){e.token=""},SET_ROLE:function(e,n){e.roles=n},SET_AVATAR:function(e,n){e.avatar=n},SET_USERNAME:function(e,n){e.username=n},SET_LOCAL:function(e,n){e.local=n}},O={login:function(e,n){var t=e.commit;return new Promise((function(e,r){m(n).then((function(n){var r=n.token;Object(d["c"])(r),t("SET_TOKEN",r),e()})).catch((function(e){return r(e)}))}))},logout:function(e){var n=e.commit;return new Promise((function(e,t){p().then((function(){Object(d["b"])(),n("REMOVE_TOKEN"),e()})).catch(t())}))},userInfo:function(e){var n=e.commit;return new Promise((function(e,t){b().then((function(t){var r=t.roles,a=t.avatar,o=void 0===a?v["a"]:a,u=t.username,c=t.local,i=void 0===c?"zh-CN":c;n("SET_ROLE",r),n("SET_AVATAR",o),n("SET_USERNAME",u),n("SET_LOCAL",i),e({roles:r,avatar:o,username:u,local:i})})).catch((function(e){return t(e)}))}))}},E={namespaced:!0,state:g,mutations:w,actions:O},T=(t("99af"),t("caad"),t("45fc"),t("2532"),t("b85c")),j=t("2909"),y=[],k=[{path:"/login",name:"Login",component:function(){return t.e("chunk-cc013c90").then(t.bind(null,"9ed6"))}},{path:"/",component:function(){return t.e("chunk-2d0ab84e").then(t.bind(null,"162e"))},redirect:"/home-page",children:[{path:"home-page",name:"HomePage",component:function(){return t.e("chunk-2d0db310").then(t.bind(null,"6f8b"))}}]}],S={routes:[],dynimicRoutes:[]},_={SET_ROUTES:function(e,n){e.routes=k.concat(n),e.dynimicRoutes=n}};function x(e,n){return!e.meta||!e.meta.roles||n.some((function(n){return e.meta.roles.includes(n)}))}function N(e,n){var t,r=[],a=Object(j["a"])(e),o=Object(T["a"])(a);try{for(o.s();!(t=o.n()).done;){var u=t.value,c=u;x(u,n)&&(c.children&&(c.children=N(c.children,n)),r.push(c))}}catch(i){o.e(i)}finally{o.f()}return r}var P={generateRoutes:function(e,n){var t=e.commit;return new Promise((function(e){var r;r=n.includes("admin")?y||[]:N(y,n),t("SET_ROUTES",r),e(r)}))}},q={namespaced:!0,state:S,mutations:_,actions:P};r["default"].use(f["a"]);var R=new f["a"].Store({getters:l,modules:{user:E,permission:q}}),L=t("9923"),A=t("8c4f");r["default"].use(A["a"]);var C=Object(j["a"])(k),z=new A["a"]({base:"/vue-oa/",routes:C,scrollBehavior:function(e,n,t){return t||(e.hash&&document.querySelector(e.hash)?{selector:e.hash}:{y:0})}}),U=z,M=(t("96cf"),t("1da1"));U.beforeEach(function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(n,t,r){var a,o,u,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(d["a"])(),"/login"!==n.path){e.next=5;break}a?r("/"):r(),e.next=29;break;case 5:if(!a){e.next=28;break}if(e.prev=6,o=R.getters.roles&&R.getters.roles.length>0,!o){e.next=12;break}r(),e.next=21;break;case 12:return e.next=14,R.dispatch("user/userInfo");case 14:return u=e.sent,c=u.roles,e.next=18,R.dispatch("permission/generateRoutes",c);case 18:i=e.sent,U.addRoutes(i),r();case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](6),r(new Error(e.t0));case 26:e.next=29;break;case 28:r("/login?next=".concat(n.fullPath));case 29:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(n,t,r){return e.apply(this,arguments)}}());t("0fb7"),t("450d");var H=t("f529"),I=t.n(H),K=(t("10cb"),t("f3ad")),V=t.n(K),W=(t("1f1a"),t("4e4b")),B=t.n(W),D=(t("eca7"),t("3787")),F=t.n(D),$=(t("425f"),t("4105")),J=t.n($),X=(t("1951"),t("eedf")),Q=t.n(X);r["default"].use(Q.a),r["default"].use(J.a),r["default"].use(F.a),r["default"].use(B.a),r["default"].use(V.a),r["default"].prototype.$message=I.a,r["default"].config.productionTip=!1;n["default"]=new r["default"]({i18n:L["i18n"],router:U,store:R,render:function(e){return e(s)}}).$mount("#app")},5892:function(e,n,t){var r={"./":["9923"],"./en":["cc06","lang-request0"],"./en/":["cc06","lang-request0"],"./en/index":["cc06","lang-request0"],"./en/index.js":["cc06","lang-request0"],"./en/request":["3e28","lang-request4"],"./en/request.js":["3e28","lang-request4"],"./index":["9923"],"./index.js":["9923"],"./zh-CN":["b60a"],"./zh-CN/":["b60a"],"./zh-CN/index":["b60a"],"./zh-CN/index.js":["b60a"],"./zh-CN/login":["feb5"],"./zh-CN/login.js":["feb5"],"./zh-CN/request":["a200"],"./zh-CN/request.js":["a200"]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},9923:function(e,n,t){"use strict";t.r(n),t.d(n,"i18n",(function(){return s})),t.d(n,"loadLanguageAsync",(function(){return f}));t("99af"),t("caad"),t("d3b7");var r=t("2b0e"),a=t("a925"),o=t("b60a"),u=t("4897"),c=t.n(u);r["default"].use(a["a"]);var i=["zh"],s=new a["a"]({locale:"zh",fallbackLocale:"zh",messages:{zh:o["default"]},missing:function(e,n){throw new Error("the ".concat(e," local not find the key: ").concat(n))}});function f(e){return s.locale!==e&&(i.includes(e)||t("5892")("./".concat(e)).then((function(n){s.setLocaleMessage(e,n.default),i.push(e)})),s.locale=e,c.a.i18n((function(e,n){return s.t(e,n)}))),Promise.resolve(e)}},a200:function(e,n,t){"use strict";t.r(n),n["default"]={HTTP_STATUS_UNKNOWN:"未知的HTTP状态码"}},b60a:function(e,n,t){"use strict";t.r(n);var r=t("a200"),a=t("feb5");n["default"]={request:r["default"],Login:a["default"]}},b768:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r=1,a="https://dummyimage.com/100x100/666/666&text=default-avatar"},ef2b:function(e,n,t){"use strict";t("d3b7"),t("0fb7"),t("450d");var r=t("f529"),a=t.n(r),o=t("bc3a"),u=t.n(o),c=t("9923"),i=(t("07ac"),t("28fa"));function s(e,n){for(var t=!0,r=0,a=Object.values(e);r<a.length;r++){var o=a[r];if(Object(i["b"])(o)||Object(i["a"])(o))t=s(o);else if(Boolean(o)||Boolean(!0===n)&&0===o){t=!1;break}}return t}function f(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Object(i["b"])(e))return s(e,n);throw new Error("not a object")}var l=t("b768"),d=t("fa57"),h=u.a.create({baseURL:"https://luoschenfeng.com:5000/mock/5f13002872833e605442f079",timeout:5e3});h.defaults.headers.common["HTTP_X_REQUESTED_WITH"]="XMLHttpRequest";var m=Object(d["a"])();function p(e){var n=e.url,t=e.method,r=void 0===t?"get":t,a=e.params,o=void 0===a?{}:a,u={url:n,method:r};return"get"!==r||f(o)||(u.params=o),"post"!==r||f(o)||(u.data=o),h(u)}h.defaults.headers.common["token"]=m,h.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.interceptors.response.use((function(e){var n=e.data,t=n.status,r=n.data,o=void 0===r?{}:r;if(t===l["b"])return Promise.resolve(o);try{var u=n.code,i=void 0===u?0:u,s=n.message,f=void 0===s?"":s;if(f)throw a.a.error(f),new Error(f);if(i){var d="";throw d=4e3<=i<5e3?"code ".concat(i," 权限未定义"):5e3<=i<6e3?"code ".concat(i," 验证失败"):"code ".concat(i),a.a.error(d),new Error(d)}throw a.a.error(c["i18n"].t("request.HTTP_STATUS_UNKNOWN")),new Error(c["i18n"].t("request.HTTP_STATUS_UNKNOWN"))}catch(h){return Promise.reject(h)}}),(function(e){return Promise.reject(e)}));n["a"]=p},fa57:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return i}));var r=t("a78e"),a=t.n(r),o="token";function u(e){return window.navigator.cookieEnabled?a.a.set(o,e):window.localStorage.setItem(o,e)}function c(){return window.navigator.cookieEnabled?a.a.get(o):window.localStorage.getItem(o)}function i(){return window.navigator.cookieEnabled?a.a.remove(o):window.localStorage.removeItem(o)}},feb5:function(e,n,t){"use strict";t.r(n),n["default"]={placeholder:{username:"请输入用户名",password:"请输入密码"},prompt:{usernameLength:"用户名长度有误，应为3-15位",usernameFormat:"用户名格式有误，应由数字和字母的组成",passwordLength:"密码长度有误，应为8-30位",passwordFormat:"密码格式有误，应为大写字母、小写字母、数字、特殊字符的组合"},text:{login:"登录"}}}});
//# sourceMappingURL=app.0e77312d.js.map