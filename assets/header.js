(()=>{var e={3674:()=>{},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],s=0;s<e.length;s++){var a=e[s],u=r.base?a[0]+r.base:a[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=n(f),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:f,updater:h,references:1})}c.push(f)}return c}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=n(i[c]);t[s].references--}for(var a=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}function r(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t(o.key),o)}}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function s(e,t,n){return s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i},s.apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,e)},a(e)}var u=n(3379),l=n.n(u),f=n(7795),d=n.n(f),p=n(569),h=n.n(p),v=n(3565),y=n.n(v),m=n(9216),b=n.n(m),g=n(4589),w=n.n(g),S=n(3674),O=n.n(S),E={};E.styleTagTransform=w(),E.setAttributes=y(),E.insert=h().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=b();l()(O(),E);O()&&O().locals&&O().locals;function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(s,e);var t,n,i,c=T(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),e=c.call(this),document.getElementById("btn-search-desktop").addEventListener("click",(function(){window.addEventListener("click",(function(e){document.getElementById("searchspring-search-input").classList.contains("active")&&(document.getElementById("btn-search-desktop").contains(e.target)||document.getElementById("searchspring-search-input").contains(e.target)||document.getElementById("searchspring-search-input").classList.remove("active"))})),document.getElementById("searchspring-search-input").classList.add("active"),setTimeout((function(){document.querySelector(".input-search").focus()}),500)})),e}return t=s,(n=[{key:"connectedCallback",value:function(){var e=this;this.header=document.getElementById("shopify-section-header"),this.headerBounds={},this.currentScrollTop=0,this.preventReveal=!1,this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=function(){return e.preventReveal=!0},this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1),this.createObserver()}},{key:"disconnectedCallback",value:function(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}},{key:"createObserver",value:function(){var e=this;new IntersectionObserver((function(t,n){e.headerBounds=t[0].intersectionRect,n.disconnect()})).observe(this.header)}},{key:"onScroll",value:function(){var e=this,t=window.pageYOffset||document.documentElement.scrollTop;if(t>this.currentScrollTop&&t>this.headerBounds.bottom){if(this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else t<this.currentScrollTop&&t>this.headerBounds.bottom?this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout((function(){e.preventReveal=!1}),66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this)):t<=this.headerBounds.top&&requestAnimationFrame(this.reset.bind(this));this.currentScrollTop=t}},{key:"hide",value:function(){this.header.classList.add("shopify-section-header-sticky")}},{key:"reveal",value:function(){this.header.classList.add("shopify-section-header-sticky","animate")}},{key:"reset",value:function(){this.header.classList.remove("shopify-section-header-sticky","animate")}}])&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(a(HTMLElement));customElements.define("sticky-header",R)})()})();