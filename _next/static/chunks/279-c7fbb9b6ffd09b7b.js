(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),l=n(6273),c=n(2725),f=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,m=e.prefetch,g=e.passHref,O=e.replace,C=e.shallow,x=e.scroll,_=e.locale,j=e.onClick,w=e.onMouseEnter,M=e.onTouchStart,E=e.legacyBehavior,P=void 0===E?!0!==Boolean(!1):E,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!P||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==m,k=u.default.useContext(f.RouterContext),S=u.default.useContext(i.AppRouterContext);S&&(k=S);var N,I=u.default.useMemo((function(){var e=r(l.resolveHref(k,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(k,h):n||t}}),[k,o,h]),T=I.href,Z=I.as,U=u.default.useRef(T),z=u.default.useRef(Z);P&&(N=u.default.Children.only(n));var B=P?N&&"object"===typeof N&&N.ref:t,A=r(s.useIntersection({rootMargin:"200px"}),3),D=A[0],H=A[1],K=A[2],G=u.default.useCallback((function(e){z.current===Z&&U.current===T||(K(),z.current=Z,U.current=T),D(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[Z,B,T,K,D]);u.default.useEffect((function(){var e=H&&R&&l.isLocalURL(T),t="undefined"!==typeof _?_:k&&k.locale,n=v[T+"%"+Z+(t?"%"+t:"")];e&&!n&&y(k,T,Z,{locale:t})}),[Z,T,H,_,R,k]);var q={ref:G,onClick:function(e){P||"function"!==typeof j||j(e),P&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?u.default.startTransition(d):d()}}(e,k,T,Z,O,C,x,_,Boolean(S),R)},onMouseEnter:function(e){P||"function"!==typeof w||w(e),P&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!R&&S||l.isLocalURL(T)&&y(k,T,Z,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof M||M(e),P&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!R&&S||l.isLocalURL(T)&&y(k,T,Z,{priority:!0})}};if(!P||g||"a"===N.type&&!("href"in N.props)){var W="undefined"!==typeof _?_:k&&k.locale,F=k&&k.isLocaleDomain&&d.getDomainLocale(Z,W,k.locales,k.domainLocales);q.href=F||p.addBasePath(c.addLocale(Z,W,k&&k.defaultLocale))}return P?u.default.cloneElement(N,q):u.default.createElement("a",Object.assign({},L,q),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,i=r(o.useState(!1),2),s=i[0],d=i[1],p=r(o.useState(null),2),v=p[0],y=p[1];o.useEffect((function(){if(u){if(f||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[v,f,n,t,s]);var h=o.useCallback((function(){d(!1)}),[]);return[y,s,h]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=r.default.createContext(null);t.TemplateContext=l},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),c(e.child))}))}function f(e){return function(t){return r.createElement(i,u({attr:u({},e.attr)},t),c(e.child))}}function i(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,f=l(e,["attr","size","title"]),i=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},7568:function(e,t,n){"use strict";function r(e,t,n,r,o,a,u){try{var l=e[a](u),c=l.value}catch(f){return void n(f)}l.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var u=e.apply(t,n);function l(e){r(u,o,a,l,c,"next",e)}function c(e){r(u,o,a,l,c,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return o}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);