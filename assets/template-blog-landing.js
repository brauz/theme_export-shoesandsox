(()=>{"use strict";var e,n,t,_,l,o,r,i={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c=Array.isArray;function f(e,n){for(var t in n)e[t]=n[t];return e}function p(e){var n=e.parentNode;n&&n.removeChild(e)}function d(n,t,_){var l,o,r,i={};for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===i[r]&&(i[r]=n.defaultProps[r]);return a(n,i,l,o,null)}function a(e,_,l,o,r){var i={type:e,props:_,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++t:r};return null==r&&null!=n.vnode&&n.vnode(i),i}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!k.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||o)(k)}function k(){var e,n,t,l,o,i,u,s,c;for(_.sort(r);e=_.shift();)e.__d&&(n=_.length,l=void 0,o=void 0,i=void 0,s=(u=(t=e).__v).__e,(c=t.__P)&&(l=[],o=[],(i=f({},u)).__v=u.__v+1,D(c,u,i,t.__n,void 0!==c.ownerSVGElement,null!=u.__h?[s]:null,l,null==s?y(u):s,u.__h,o),T(l,u,o),u.__e!=s&&m(u)),_.length>n&&_.sort(r));k.__r=0}function b(e,n,t,_,l,o,r,s,f,p,d){var v,m,g,k,b,P,C,E,L,T=0,U=_&&_.__k||u,W=U.length,q=W,A=n.length;for(t.__k=[],v=0;v<A;v++)null!=(k=t.__k[v]=null==(k=n[v])||"boolean"==typeof k||"function"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?a(null,k,null,null,k):c(k)?a(h,{children:k},null,null,null):k.__b>0?a(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)?(k.__=t,k.__b=t.__b+1,-1===(E=w(k,U,C=v+T,q))?g=i:(g=U[E]||i,U[E]=void 0,q--),D(e,k,g,l,o,r,s,f,p,d),b=k.__e,(m=k.ref)&&g.ref!=m&&(g.ref&&M(g.ref,null,k),d.push(m,k.__c||b,k)),null!=b&&(null==P&&(P=b),(L=g===i||null===g.__v)?-1==E&&T--:E!==C&&(E===C+1?T++:E>C?q>A-C?T+=E-C:T--:T=E<C&&E==C-1?E-C:0),C=v+T,"function"!=typeof k.type||E===C&&g.__k!==k.__k?"function"==typeof k.type||E===C&&!L?void 0!==k.__d?(f=k.__d,k.__d=void 0):f=b.nextSibling:f=x(e,b,f):f=S(k,f,e),"function"==typeof t.type&&(t.__d=f))):(g=U[v])&&null==g.key&&g.__e&&(g.__e==f&&(f=y(g)),N(g,g,!1),U[v]=null);for(t.__e=P,v=W;v--;)null!=U[v]&&("function"==typeof t.type&&null!=U[v].__e&&U[v].__e==t.__d&&(t.__d=U[v].__e.nextSibling),N(U[v],U[v]))}function S(e,n,t){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,n="function"==typeof _.type?S(_,n,t):x(t,_.__e,n));return n}function x(e,n,t){return null==t||t.parentNode!==e?e.insertBefore(n,null):n==t&&null!=n.parentNode||e.insertBefore(n,t),n.nextSibling}function w(e,n,t,_){var l=e.key,o=e.type,r=t-1,i=t+1,u=n[t];if(null===u||u&&l==u.key&&o===u.type)return t;if(_>(null!=u?1:0))for(;r>=0||i<n.length;){if(r>=0){if((u=n[r])&&l==u.key&&o===u.type)return r;r--}if(i<n.length){if((u=n[i])&&l==u.key&&o===u.type)return i;i++}}return-1}function P(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function C(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||P(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?L:E,o):e.removeEventListener(n,o?L:E,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function E(e){return this.l[e.type+!1](n.event?n.event(e):e)}function L(e){return this.l[e.type+!0](n.event?n.event(e):e)}function D(e,t,_,l,o,r,i,u,s,p){var d,a,y,m,g,k,S,x,w,P,C,E,L,D,T,M=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(s=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(d=n.__b)&&d(t);e:if("function"==typeof M)try{if(x=t.props,w=(d=M.contextType)&&l[d.__c],P=d?w?w.props.value:d.__:l,_.__c?S=(a=t.__c=_.__c).__=a.__E:("prototype"in M&&M.prototype.render?t.__c=a=new M(x,P):(t.__c=a=new v(x,P),a.constructor=M,a.render=W),w&&w.sub(a),a.props=x,a.state||(a.state={}),a.context=P,a.__n=l,y=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=M.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=f({},a.__s)),f(a.__s,M.getDerivedStateFromProps(x,a.__s))),m=a.props,g=a.state,a.__v=t,y)null==M.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==M.getDerivedStateFromProps&&x!==m&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(x,P),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(x,a.__s,P)||t.__v===_.__v)){for(t.__v!==_.__v&&(a.props=x,a.state=a.__s,a.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach((function(e){e&&(e.__=t)})),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(x,a.__s,P),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(m,g,k)}))}if(a.context=P,a.props=x,a.__P=e,a.__e=!1,E=n.__r,L=0,"prototype"in M&&M.prototype.render){for(a.state=a.__s,a.__d=!1,E&&E(t),d=a.render(a.props,a.state,a.context),D=0;D<a._sb.length;D++)a.__h.push(a._sb[D]);a._sb=[]}else do{a.__d=!1,E&&E(t),d=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++L<25);a.state=a.__s,null!=a.getChildContext&&(l=f(f({},l),a.getChildContext())),y||null==a.getSnapshotBeforeUpdate||(k=a.getSnapshotBeforeUpdate(m,g)),b(e,c(T=null!=d&&d.type===h&&null==d.key?d.props.children:d)?T:[T],t,_,l,o,r,i,u,s,p),a.base=t.__e,t.__h=null,a.__h.length&&i.push(a),S&&(a.__E=a.__=null)}catch(e){t.__v=null,(s||null!=r)&&(t.__e=u,t.__h=!!s,r[r.indexOf(u)]=null),n.__e(e,t,_)}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=U(_.__e,t,_,l,o,r,i,s,p);(d=n.diffed)&&d(t)}function T(e,t,_){for(var l=0;l<_.length;l++)M(_[l],_[++l],_[++l]);n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function U(n,t,_,l,o,r,u,s,f){var d,a,h,v=_.props,m=t.props,g=t.type,k=0;if("svg"===g&&(o=!0),null!=r)for(;k<r.length;k++)if((d=r[k])&&"setAttribute"in d==!!g&&(g?d.localName===g:3===d.nodeType)){n=d,r[k]=null;break}if(null==n){if(null===g)return document.createTextNode(m);n=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),r=null,s=!1}if(null===g)v===m||s&&n.data===m||(n.data=m);else{if(r=r&&e.call(n.childNodes),a=(v=_.props||i).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!s){if(null!=r)for(v={},k=0;k<n.attributes.length;k++)v[n.attributes[k].name]=n.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||C(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||C(e,o,n[o],t[o],_)}(n,m,v,o,s),h)t.__k=[];else if(b(n,c(k=t.props.children)?k:[k],t,_,l,o&&"foreignObject"!==g,r,u,r?r[0]:_.__k&&y(_,0),s,f),null!=r)for(k=r.length;k--;)null!=r[k]&&p(r[k]);s||("value"in m&&void 0!==(k=m.value)&&(k!==n.value||"progress"===g&&!k||"option"===g&&k!==v.value)&&C(n,"value",k,v.value,!1),"checked"in m&&void 0!==(k=m.checked)&&k!==n.checked&&C(n,"checked",k,v.checked,!1))}return n}function M(e,t,_){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,_)}}function N(e,t,_){var l,o;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||M(l,null,t)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&N(l[o],t,_||"function"!=typeof e.type);_||null==e.__e||p(e.__e),e.__=e.__e=e.__d=void 0}function W(e,n,t){return this.constructor(e,t)}function q(t,_,l){var o,r,u,s;n.__&&n.__(t,_),r=(o="function"==typeof l)?null:l&&l.__k||_.__k,u=[],s=[],D(_,t=(!o&&l||_).__k=d(h,null,[t]),r||i,i,void 0!==_.ownerSVGElement,!o&&l?[l]:r?null:_.firstChild?e.call(_.childNodes):null,u,!o&&l?l:r?r.__e:_.firstChild,o,s),T(u,t,s)}e=u.slice,n={__e:function(e,n,t,_){for(var l,o,r;n=n.__;)if((l=n.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,_||{}),r=l.__d),r)return l.__E=l}catch(n){e=n}throw e}},t=0,v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},t),this.props)),e&&f(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,_=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(e,n){return e.__v.__b-n.__v.__b},k.__r=0;var A=function(e){var n=e.dom,t=n.querySelector(".read-more");t&&t.addEventListener("click",(function(){t.classList.add("loading"),n.querySelectorAll(".article-card").forEach((function(e){e.classList.remove("!hidden")})),t.classList.remove("loading"),t.classList.add("!hidden")}))};q(d(A,{dom:document.querySelector("#landing-desktop")}),document.querySelector("#landing-desktop .blog-wrapper")),q(d(A,{dom:document.querySelector("#landing-mobile")}),document.querySelector("#landing-mobile .blog-wrapper"))})();