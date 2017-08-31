!function(e){function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}var n={};r.m=e,r.c=n,r.i=function(e){return e},r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=10)}({"./server/controllers/defaultController.js":function(e,r,n){"use strict";function t(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,n){function t(s,o){try{var u=r[s](o),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){t("next",e)},function(e){t("throw",e)});e(i)}return t("next")})}}var s=n("./server/services/defaultService.js"),o=this,u=function(){var e=t(regeneratorRuntime.mark(function e(r,n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.foo();case 2:t=e.sent,n.success({data:t,num:100*Math.random(),message:"I am a server route and can also be hot reloaded"});case 4:case"end":return e.stop()}},e,o)}));return function(r,n){return e.apply(this,arguments)}}();r.a={index:u}},"./server/index.js":function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(5),s=n.n(t),o=n("./server/server.js"),u=n("./server/utils/configs.js"),i=n.i(u.a)("production"),a=s.a.createServer(o.a);o.a;a.listen(i.port||3e3)},"./server/middlewares/jsend.js":function(e,r,n){"use strict";r.a=function(){var e=function(e,r){return s.call(this,"success",e,r)},r=function(e,r,n){return s.call(this,"fail",r,e,n)},n=function(e,r,n){return s.call(this,"error",r,e,n)},t=function(r,t,s){return r?n(r,t,s):e(t)},s=function(e,r,n,t){var s={status:e};t&&(s.code=t),n&&(s.message=n),r&&(s.data=r),this.json(s)};return function(s,o,u){o.success=e,o.fail=r,o.error=n,o.jsend=t,u()}}},"./server/routes/index.js":function(e,r,n){"use strict";var t=n(0),s=n.n(t),o=n("./server/controllers/defaultController.js"),u=s.a.Router();u.get("/health-check",function(e,r){r.send("OK")}),u.get("/error-check",function(e,r,n){return n(new Error("oh noess!"))}),u.get("/",o.a.index),r.a=u},"./server/server.js":function(e,r,n){"use strict";var t=n(0),s=n.n(t),o=n(2),u=n.n(o),i=n(7),a=n.n(i),c=n(8),f=n.n(c),l=n(6),p=n.n(l),d=n("./server/middlewares/jsend.js"),v=n("./server/routes/index.js"),h=n(3)(),x=s()();x.use(u.a.json()),x.use(u.a.urlencoded({extended:!0})),x.use(n.i(d.a)());var m=p.a.basic({realm:"Monitor Area"},function(e,r,n){return n("username"===e&&"password"===r)});x.use(h),x.get("/status",p.a.connect(m),h.pageRoute),x.use("/",v.a),x.use(function(e,r,n,t){var s=r.headers["content-type"];s&&0===s.indexOf("application/json")?n.error({message:e.message,trace:f()(e,{sources:!1}).object()},500):(new a.a).pushHandler(new a.a.handlers.PrettyPageHandler).handleException(e,r,n,function(){t()})}),r.a=x},"./server/services/defaultService.js":function(e,r,n){"use strict";function t(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,n){function t(s,o){try{var u=r[s](o),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){t("next",e)},function(e){t("throw",e)});e(i)}return t("next")})}}var s=function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","async working!");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();r.a={foo:s}},"./server/utils/configs.js":function(e,r,n){"use strict";function t(e){var r=JSON.parse(o.a.readFileSync(i.a.resolve(a,"../config","server-config.json"),"utf8"));return"production"===e?r.production:r.development}r.a=t;var s=n(4),o=n.n(s),u=n(9),i=n.n(u),a=__dirname},0:function(e,r){e.exports=require("express")},1:function(e,r){e.exports=require("babel-polyfill")},10:function(e,r,n){n(1),e.exports=n("./server/index.js")},2:function(e,r){e.exports=require("body-parser")},3:function(e,r){e.exports=require("express-status-monitor")},4:function(e,r){e.exports=require("fs")},5:function(e,r){e.exports=require("http")},6:function(e,r){e.exports=require("http-auth")},7:function(e,r){e.exports=require("ouch")},8:function(e,r){e.exports=require("parsetrace")},9:function(e,r){e.exports=require("path")}});