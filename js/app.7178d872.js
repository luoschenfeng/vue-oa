(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return c.p+"js/"+({"lang-request0":"lang-request0","lang-request4":"lang-request4"}[e]||e)+"."+{"chunk-2d0ab84e":"f45bf69e","chunk-2d0db310":"2953d020","chunk-cc013c90":"7651a487","lang-request0":"a8ac3e94","lang-request4":"6ad162c4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-oa/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n("53ca"),a=Array.isArray;function o(e){var t=Object(r["a"])(e);return null!==e&&"object"===t}function u(e,t){return t.test(e)}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"abc",attrs:{id:"app"}},[n("router-view")],1)},o=[],u=n("2877"),c={},i=Object(u["a"])(c,a,o,!1,null,null,null),s=i.exports,f=n("2f62"),l={roles:function(e){return e.user.roles}},d=(n("d3b7"),n("fa57")),h=n("ef2b");function m(e){return Object(h["a"])({url:"api/login",method:"post",params:e})}function p(){return Object(h["a"])({url:"api/logout"})}function b(){return Object(h["a"])({url:"api/userInfo"})}var v=n("b768"),g={token:Object(d["a"])(),roles:[],avatar:v["a"],username:"",local:"zh-CN"},w={SET_TOKEN:function(e,t){e.token=t},REMOVE_TOKEN:function(e){e.token=""},SET_ROLE:function(e,t){e.roles=t},SET_AVATAR:function(e,t){e.avatar=t},SET_USERNAME:function(e,t){e.username=t},SET_LOCAL:function(e,t){e.local=t}},O={login:function(e,t){var n=e.commit;return new Promise((function(e,r){m(t).then((function(t){var r=t.token;Object(d["c"])(r),n("SET_TOKEN",r),e()})).catch((function(e){return r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){p().then((function(){Object(d["b"])(),t("REMOVE_TOKEN"),e()})).catch(n())}))},userInfo:function(e){var t=e.commit;return new Promise((function(e,n){b().then((function(n){var r=n.roles,a=n.avatar,o=void 0===a?v["a"]:a,u=n.username,c=n.local,i=void 0===c?"zh-CN":c;t("SET_ROLE",r),t("SET_AVATAR",o),t("SET_USERNAME",u),t("SET_LOCAL",i),e({roles:r,avatar:o,username:u,local:i})})).catch((function(e){return n(e)}))}))}},E={namespaced:!0,state:g,mutations:w,actions:O},T=(n("99af"),n("caad"),n("45fc"),n("2532"),n("b85c")),j=n("2909"),y=[{path:"home-page",name:"HomePage",component:function(){return n.e("chunk-2d0db310").then(n.bind(null,"6f8b"))}}],k=[{path:"/",component:function(){return n.e("chunk-2d0ab84e").then(n.bind(null,"162e"))},redirect:"/home-page",children:Object(j["a"])(y)}],S=[{path:"/login",name:"Login",component:function(){return n.e("chunk-cc013c90").then(n.bind(null,"9ed6"))}}],_={routes:[],dynimicRoutes:[]},x={SET_ROUTES:function(e,t){e.routes=S.concat(t),e.dynimicRoutes=t}};function P(e,t){return!e.meta||!e.meta.roles||t.some((function(t){return e.meta.roles.includes(t)}))}function N(e,t){var n,r=[],a=Object(j["a"])(e),o=Object(T["a"])(a);try{for(o.s();!(n=o.n()).done;){var u=n.value,c=u;P(u,t)&&(c.children&&(c.children=N(c.children,t)),r.push(c))}}catch(i){o.e(i)}finally{o.f()}return r}var q={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r;r=t.includes("admin")?k||[]:N(k,t),n("SET_ROUTES",r),e(r)}))}},R={namespaced:!0,state:_,mutations:x,actions:q};r["default"].use(f["a"]);var L=new f["a"].Store({getters:l,modules:{user:E,permission:R}}),A=n("9923"),C=n("8c4f");r["default"].use(C["a"]);var z=Object(j["a"])(S),U=new C["a"]({base:"/vue-oa/",routes:z,scrollBehavior:function(e,t,n){return n||(e.hash&&document.querySelector(e.hash)?{selector:e.hash}:{y:0})}}),M=U,H=(n("96cf"),n("1da1"));M.beforeEach(function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,u,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object(d["a"])(),console.log("from ".concat(n.fullPath)),console.log("to ".concat(t.fullPath)),"/login"!==t.path){e.next=7;break}a?r("/"):r(),e.next=31;break;case 7:if(!a){e.next=30;break}if(e.prev=8,o=L.getters.roles&&L.getters.roles.length>0,!o){e.next=14;break}r(),e.next=23;break;case 14:return e.next=16,L.dispatch("user/userInfo");case 16:return u=e.sent,c=u.roles,e.next=20,L.dispatch("permission/generateRoutes",c);case 20:i=e.sent,M.addRoutes(i),r();case 23:e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](8),r(new Error(e.t0));case 28:e.next=31;break;case 30:r("/login?next=".concat(t.path));case 31:case"end":return e.stop()}}),e,null,[[8,25]])})));return function(t,n,r){return e.apply(this,arguments)}}());n("0fb7"),n("450d");var I=n("f529"),K=n.n(I),V=(n("10cb"),n("f3ad")),W=n.n(V),B=(n("1f1a"),n("4e4b")),D=n.n(B),F=(n("eca7"),n("3787")),$=n.n(F),J=(n("425f"),n("4105")),X=n.n(J),Q=(n("1951"),n("eedf")),G=n.n(Q);r["default"].use(G.a),r["default"].use(X.a),r["default"].use($.a),r["default"].use(D.a),r["default"].use(W.a),r["default"].prototype.$message=K.a,r["default"].config.productionTip=!1;t["default"]=new r["default"]({i18n:A["i18n"],router:M,store:L,render:function(e){return e(s)}}).$mount("#app")},5892:function(e,t,n){var r={"./":["9923"],"./en":["cc06","lang-request0"],"./en/":["cc06","lang-request0"],"./en/index":["cc06","lang-request0"],"./en/index.js":["cc06","lang-request0"],"./en/request":["3e28","lang-request4"],"./en/request.js":["3e28","lang-request4"],"./index":["9923"],"./index.js":["9923"],"./zh-CN":["b60a"],"./zh-CN/":["b60a"],"./zh-CN/index":["b60a"],"./zh-CN/index.js":["b60a"],"./zh-CN/login":["feb5"],"./zh-CN/login.js":["feb5"],"./zh-CN/request":["a200"],"./zh-CN/request.js":["a200"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},9923:function(e,t,n){"use strict";n.r(t),n.d(t,"i18n",(function(){return s})),n.d(t,"loadLanguageAsync",(function(){return f}));n("99af"),n("caad"),n("d3b7");var r=n("2b0e"),a=n("a925"),o=n("b60a"),u=n("4897"),c=n.n(u);r["default"].use(a["a"]);var i=["zh"],s=new a["a"]({locale:"zh",fallbackLocale:"zh",messages:{zh:o["default"]},missing:function(e,t){throw new Error("the ".concat(e," local not find the key: ").concat(t))}});function f(e){return s.locale!==e&&(i.includes(e)||n("5892")("./".concat(e)).then((function(t){s.setLocaleMessage(e,t.default),i.push(e)})),s.locale=e,c.a.i18n((function(e,t){return s.t(e,t)}))),Promise.resolve(e)}},a200:function(e,t,n){"use strict";n.r(t),t["default"]={HTTP_STATUS_UNKNOWN:"未知的HTTP状态码"}},b60a:function(e,t,n){"use strict";n.r(t);var r=n("a200"),a=n("feb5");t["default"]={request:r["default"],Login:a["default"]}},b768:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=1,a="https://dummyimage.com/100x100/666/666&text=default-avatar"},ef2b:function(e,t,n){"use strict";n("d3b7"),n("0fb7"),n("450d");var r=n("f529"),a=n.n(r),o=n("bc3a"),u=n.n(o),c=n("9923"),i=(n("07ac"),n("28fa"));function s(e,t){for(var n=!0,r=0,a=Object.values(e);r<a.length;r++){var o=a[r];if(Object(i["b"])(o)||Object(i["a"])(o))n=s(o);else if(Boolean(o)||Boolean(!0===t)&&0===o){n=!1;break}}return n}function f(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Object(i["b"])(e))return s(e,t);throw new Error("not a object")}var l=n("b768"),d=n("fa57"),h=u.a.create({baseURL:"https://193.9.44.226:5000/mock/5f13002872833e605442f079",timeout:5e3});h.defaults.headers.common["HTTP_X_REQUESTED_WITH"]="XMLHttpRequest";var m=Object(d["a"])();function p(e){var t=e.url,n=e.method,r=void 0===n?"get":n,a=e.params,o=void 0===a?{}:a,u={url:t,method:r};return"get"!==r||f(o)||(u.params=o),"post"!==r||f(o)||(u.data=o),h(u)}h.defaults.headers.common["token"]=m,h.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.interceptors.response.use((function(e){var t=e.data,n=t.status,r=t.data,o=void 0===r?{}:r;if(n===l["b"])return Promise.resolve(o);try{var u=t.code,i=void 0===u?0:u,s=t.message,f=void 0===s?"":s;if(f)throw a.a.error(f),new Error(f);if(i){var d="";throw d=4e3<=i<5e3?"code ".concat(i," 权限未定义"):5e3<=i<6e3?"code ".concat(i," 验证失败"):"code ".concat(i),a.a.error(d),new Error(d)}throw a.a.error(c["i18n"].t("request.HTTP_STATUS_UNKNOWN")),new Error(c["i18n"].t("request.HTTP_STATUS_UNKNOWN"))}catch(h){return Promise.reject(h)}}),(function(e){return Promise.reject(e)}));t["a"]=p},fa57:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("a78e"),a=n.n(r),o="token";function u(e){return window.navigator.cookieEnabled?a.a.set(o,e):window.localStorage.setItem(o,e)}function c(){return window.navigator.cookieEnabled?a.a.get(o):window.localStorage.getItem(o)}function i(){return window.navigator.cookieEnabled?a.a.remove(o):window.localStorage.removeItem(o)}},feb5:function(e,t,n){"use strict";n.r(t),t["default"]={placeholder:{username:"请输入用户名",password:"请输入密码"},prompt:{usernameLength:"用户名长度有误，应为3-15位",usernameFormat:"用户名格式有误，应由数字和字母的组成",passwordLength:"密码长度有误，应为8-30位",passwordFormat:"密码格式有误，应为大写字母、小写字母、数字、特殊字符的组合"},text:{login:"登录"}}}});
//# sourceMappingURL=app.7178d872.js.map