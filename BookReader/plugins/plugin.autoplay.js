!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=24)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(27))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4),o=e(16),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(31),o=e(32);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.3.3",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(11),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(4),o=e(28),i=e(10),u=e(7),c=e(14),f=e(3),a=e(15),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(1),i=e(29);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4),o=e(15),i=e(17),u=e(14),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(6);t.exports=r("native-function-to-string",Function.toString)},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(6),i=e(19),u=e(53),c=r.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,e){"use strict";e.r(n);var r;e(25);jQuery.extend(BookReader.defaultOptions,{enableAutoPlayPlugin:!0}),BookReader.prototype.setup=(r=BookReader.prototype.setup,function(t){r.call(this,t),this.auto=!1,this.autoTimer=null,this.flipDelay=5e3}),BookReader.prototype.init=function(t){return function(n){t.call(this,n),this.options.enableAutoPlayPlugin&&this.bind(BookReader.eventNames.stop,(function(t,n){n.autoStop()}))}}(BookReader.prototype.init),BookReader.prototype.bindNavigationHandlers=function(t){return function(){if(t.call(this),this.options.enableAutoPlayPlugin){var n=this,e=this.$(".BRicon").add(".BRmobileMenu .BRicon");e.filter(".play").click((function(t){return n.autoToggle(),!1})),e.filter(".pause").click((function(t){return n.autoToggle(),!1}))}}}(BookReader.prototype.bindNavigationHandlers),BookReader.prototype.autoToggle=function(t){if(this.options.enableAutoPlayPlugin){var n=$.extend({flipSpeed:this.flipSpeed,flipDelay:this.flipDelay},t);this.flipSpeed="number"==typeof n.flipSpeed?n.flipSpeed:this.flipSpeed,this.flipDelay="number"==typeof n.flipDelay?n.flipDelay:this.flipDelay,this.trigger(BookReader.eventNames.stop);var e=!1;this.constMode2up!=this.mode&&(e=!0,this.switchMode(this.constMode2up)),this.reduce<this.twoPageGetAutofitReduce()&&this.zoom2up("auto");var r=this;null==this.autoTimer?("rl"==this.pageProgression&&e||this.flipFwdToIndex(),this.$(".play").hide(),this.$(".pause").show(),this.autoTimer=setInterval((function(){r.animating||(Math.max(r.twoPage.currentIndexL,r.twoPage.currentIndexR)>=r.lastDisplayableIndex()?r.flipBackToIndex(1):r.flipFwdToIndex())}),this.flipDelay)):this.autoStop()}},BookReader.prototype.autoStop=function(){this.options.enableAutoPlayPlugin&&null!=this.autoTimer&&(clearInterval(this.autoTimer),this.flipSpeed="fast",this.$(".pause").hide(),this.$(".play").show(),this.autoTimer=null)}},function(t,n,e){"use strict";var r=e(26),o=e(47).filter;r({target:"Array",proto:!0,forced:!e(54)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0),o=e(9).f,i=e(5),u=e(30),c=e(8),f=e(36),a=e(46);t.exports=function(t,n){var e,s,l,p,y,v=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(y=o(e,s))&&y.value:e[s],!a(h?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(2),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(6),i=e(5),u=e(3),c=e(8),f=e(18),a=e(33),s=a.get,l=a.enforce,p=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,e,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:i(t,n,e)):a?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(8),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,u=e(34),c=e(0),f=e(2),a=e(5),s=e(3),l=e(35),p=e(20),y=c.WeakMap;if(u){var v=new y,h=v.get,d=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return d.call(v,t)}}else{var x=l("state");p[x]=!0,r=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(18),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(6),o=e(19),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(3),o=e(37),i=e(9),u=e(16);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(38),o=e(40),i=e(45),u=e(17);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(39),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(41),o=e(44).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(7),i=e(42).indexOf,u=e(20);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(7),o=e(21),i=e(43),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(22),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(48),o=e(11),i=e(50),u=e(21),c=e(51),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(y,v,h,d){for(var g,x,b=i(y),m=o(b),w=r(v,h,3),S=u(m.length),O=0,P=d||c,j=n?P(y,S):e?P(y,0):void 0;S>O;O++)if((p||O in m)&&(x=w(g=m[O],O,b),t))if(n)j[O]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:f.call(j,g)}else if(s)return!1;return l?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(49);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(2),o=e(52),i=e(23)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(23)("species");t.exports=function(t){return!r((function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}}]);
//# sourceMappingURL=plugin.autoplay.js.map