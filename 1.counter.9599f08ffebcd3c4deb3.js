webpackJsonp([1],{150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:l,payload:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments[1],n=h[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_DOUBLE_ASYNC=t.COUNTER_INCREMENT=void 0;var c,u=n(288),s=r(u),a=n(284),f=r(a);t.increment=o,t.default=i;var l=t.COUNTER_INCREMENT="COUNTER_INCREMENT",d=t.COUNTER_DOUBLE_ASYNC="COUNTER_DOUBLE_ASYNC",v=t.doubleAsync=function(){return function(e,t){return new f.default(function(n){setTimeout(function(){e({type:d,payload:t().counter}),n()},200)})}},h=(t.actions={increment:o,doubleAsync:v},c={},(0,s.default)(c,l,function(e,t){return e+t.payload}),(0,s.default)(c,d,function(e,t){return 2*e}),c),_=0},274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=void 0;var o=n(1),i=r(o),c=t.Counter=function(e){return i.default.createElement("div",{style:{margin:"0 auto"}},i.default.createElement("h2",null,"Counter: ",e.counter),i.default.createElement("button",{className:"btn btn-default",onClick:e.increment},"Increment")," ",i.default.createElement("button",{className:"btn btn-default",onClick:e.doubleAsync},"Double (Async)"))};c.propTypes={counter:i.default.PropTypes.number.isRequired,doubleAsync:i.default.PropTypes.func.isRequired,increment:i.default.PropTypes.func.isRequired},t.default=c},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(141),i=n(150),c=n(274),u=r(c),s={increment:function(){return(0,i.increment)(1)},doubleAsync:i.doubleAsync},a=function(e){return{counter:e.counter}};t.default=(0,o.connect)(a,s)(u.default)},284:function(e,t,n){e.exports={default:n(297),__esModule:!0}},288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(154),i=r(o);t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},297:function(e,t,n){n(171),n(107),n(172),n(331),e.exports=n(17).Promise},302:function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},306:function(e,t,n){var r=n(42),o=n(161),i=n(160),c=n(33),u=n(103),s=n(170),a={},f={},t=e.exports=function(e,t,n,l,d){var v,h,_,p,m=d?function(){return e}:s(e),y=r(n,l,t?2:1),b=0;if("function"!=typeof m)throw TypeError(e+" is not iterable!");if(i(m)){for(v=u(e.length);v>b;b++)if(p=t?y(c(h=e[b])[0],h[1]):y(e[b]),p===a||p===f)return p}else for(_=m.call(e);!(h=_.next()).done;)if(p=o(_,y,h.value,t),p===a||p===f)return p};t.BREAK=a,t.RETURN=f},313:function(e,t,n){var r=n(25),o=n(101).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==n(58)(c);e.exports=function(){var e,t,n,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();e;){o=e.fn,e=e.next;try{o()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(u&&u.resolve){var d=u.resolve();n=function(){d.then(a)}}else n=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};t&&(t.next=o),e||(e=o,n()),t=o}}},318:function(e,t,n){var r=n(39);e.exports=function(e,t,n){for(var o in t)n&&e[o]?e[o]=t[o]:r(e,o,t[o]);return e}},320:function(e,t,n){"use strict";var r=n(25),o=n(17),i=n(30),c=n(34),u=n(21)("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:r[e];c&&t&&!t[u]&&i.f(t,u,{configurable:!0,get:function(){return this}})}},321:function(e,t,n){var r=n(33),o=n(93),i=n(21)("species");e.exports=function(e,t){var n,c=r(e).constructor;return void 0===c||void 0==(n=r(c)[i])?t:o(n)}},331:function(e,t,n){"use strict";var r,o,i,c=n(72),u=n(25),s=n(42),a=n(156),f=n(24),l=n(44),d=n(93),v=n(302),h=n(306),_=n(321),p=n(101).set,m=n(313)(),y="Promise",b=u.TypeError,E=u.process,T=u[y],E=u.process,N="process"==a(E),w=function(){},C=!!function(){try{var e=T.resolve(1),t=(e.constructor={})[n(21)("species")]=function(e){e(w,w)};return(N||"function"==typeof PromiseRejectionEvent)&&e.then(w)instanceof t}catch(e){}}(),R=function(e,t){return e===t||e===T&&t===i},j=function(e){var t;return!(!l(e)||"function"!=typeof(t=e.then))&&t},x=function(e){return R(T,e)?new M(e):new o(e)},M=o=function(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw b("Bad Promise constructor");t=e,n=r}),this.resolve=d(t),this.reject=d(n)},O=function(e){try{e()}catch(e){return{error:e}}},P=function(e,t){if(!e._n){e._n=!0;var n=e._c;m(function(){for(var r=e._v,o=1==e._s,i=0,c=function(t){var n,i,c=o?t.ok:t.fail,u=t.resolve,s=t.reject,a=t.domain;try{c?(o||(2==e._h&&g(e),e._h=1),c===!0?n=r:(a&&a.enter(),n=c(r),a&&a.exit()),n===t.promise?s(b("Promise-chain cycle")):(i=j(n))?i.call(n,u,s):u(n)):s(r)}catch(e){s(e)}};n.length>i;)c(n[i++]);e._c=[],e._n=!1,t&&!e._h&&A(e)})}},A=function(e){p.call(u,function(){var t,n,r,o=e._v;if(U(e)&&(t=O(function(){N?E.emit("unhandledRejection",o,e):(n=u.onunhandledrejection)?n({promise:e,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),e._h=N||U(e)?2:1),e._a=void 0,t)throw t.error})},U=function(e){if(1==e._h)return!1;for(var t,n=e._a||e._c,r=0;n.length>r;)if(t=n[r++],t.fail||!U(t.promise))return!1;return!0},g=function(e){p.call(u,function(){var t;N?E.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},k=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),P(t,!0))},S=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw b("Promise can't be resolved itself");(t=j(e))?m(function(){var r={_w:n,_d:!1};try{t.call(e,s(S,r,1),s(k,r,1))}catch(e){k.call(r,e)}}):(n._v=e,n._s=1,P(n,!1))}catch(e){k.call({_w:n,_d:!1},e)}}};C||(T=function(e){v(this,T,y,"_h"),d(e),r.call(this);try{e(s(S,this,1),s(k,this,1))}catch(e){k.call(this,e)}},r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(318)(T.prototype,{then:function(e,t){var n=x(_(this,T));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=N?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&P(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),M=function(){var e=new r;this.promise=e,this.resolve=s(S,e,1),this.reject=s(k,e,1)}),f(f.G+f.W+f.F*!C,{Promise:T}),n(73)(T,y),n(320)(y),i=n(17)[y],f(f.S+f.F*!C,y,{reject:function(e){var t=x(this),n=t.reject;return n(e),t.promise}}),f(f.S+f.F*(c||!C),y,{resolve:function(e){if(e instanceof T&&R(e.constructor,this))return e;var t=x(this),n=t.resolve;return n(e),t.promise}}),f(f.S+f.F*!(C&&n(163)(function(e){T.all(e).catch(w)})),y,{all:function(e){var t=this,n=x(t),r=n.resolve,o=n.reject,i=O(function(){var n=[],i=0,c=1;h(e,!1,function(e){var u=i++,s=!1;n.push(void 0),c++,t.resolve(e).then(function(e){s||(s=!0,n[u]=e,--c||r(n))},o)}),--c||r(n)});return i&&o(i.error),n.promise},race:function(e){var t=this,n=x(t),r=n.reject,o=O(function(){h(e,!1,function(e){t.resolve(e).then(n.resolve,r)})});return o&&r(o.error),n.promise}})}});