(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{545:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return t(6979)}])},1639:function(n,e,t){"use strict";t.d(e,{z:function(){return h}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function s(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return s=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=o.ZP.button.withConfig({componentId:"sc-5c88af8-0"})(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=o.ZP.div.withConfig({componentId:"sc-5c88af8-1"})(s()),h=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,i.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:e})}))}},6979:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return de}});var r=t(5893),i=t(7294),o=t(9008),c=t(5152),u=t(1664),a=t.n(u),l=t(2125),s=t(9583),f=t(5434),d=t(8193),h=t(471),p=t(4931);function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function x(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return b(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function v(){var n=m(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return v=function(){return n},n}function g(){var n=m(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 25%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  opacity: ",";\n  transition: opacity 0.2s;\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return g=function(){return n},n}function y(){var n=m([""]);return y=function(){return n},n}var j=l.ZP.div.withConfig({componentId:"sc-c6feedbe-0"})(v()),w=l.ZP.div.withConfig({componentId:"sc-c6feedbe-1"})(g(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"1":"0"})),O=l.ZP.div.withConfig({componentId:"sc-c6feedbe-2"})(y()),C=function(n){var e=n.children,t=n.title,o=x(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(j,{children:[(0,r.jsx)(w,{visible:c,children:t}),(0,r.jsx)(O,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},E=t(5623),I=t(6827),P=t(1163);function R(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return R(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function T(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 42px;\n  background: ",";\n  padding: 8px;\n  border-right: 1px solid ",";\n"]);return T=function(){return n},n}function N(){var n=S(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n\n  svg {\n    padding: 8px 0;\n    vertical-align: middle;\n  }\n"]);return N=function(){return n},n}function z(){var n=S(["\n  color: ",";\n"]);return z=function(){return n},n}function _(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return _=function(){return n},n}function k(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return k=function(){return n},n}function Z(){var n=S(["\n  color: ",";\n"]);return Z=function(){return n},n}function L(){var n=S(['\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return L=function(){return n},n}var G=l.ZP.div.withConfig({componentId:"sc-e2dbd4f0-0"})(T(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),D=l.ZP.div.withConfig({componentId:"sc-e2dbd4f0-1"})(N(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),M=l.ZP.span.withConfig({componentId:"sc-e2dbd4f0-2"})(z(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),U=l.ZP.nav.withConfig({componentId:"sc-e2dbd4f0-3"})(_(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),B=l.ZP.nav.withConfig({componentId:"sc-e2dbd4f0-4"})(k(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),K=l.ZP.div.withConfig({componentId:"sc-e2dbd4f0-5"})(Z(),(function(n){return n.theme.FULL_WHITE})),V=l.ZP.label.withConfig({componentId:"sc-e2dbd4f0-6"})(L());var F=function(){var n,e=(0,I.ZR)(),t=e.states.settings,o=e.dispatch,c=(0,P.useRouter)(),u=A(i.useState(null),2),l=u[0],b=u[1];return i.useEffect((function(){if(l){var n=new FileReader;n.readAsText(l,"UTF-8"),n.onload=function(n){var e;o({type:E.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result})}}}),[l,o]),(0,r.jsxs)(G,{children:[(0,r.jsxs)(U,{children:[(0,r.jsx)(a(),{passHref:!0,href:"/",children:(0,r.jsx)(D,{onClick:function(){return c.push("/")},children:(0,r.jsxs)(K,{children:[(0,r.jsx)(M,{children:"J"}),(0,r.jsx)(M,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(C,{title:"Home",children:(0,r.jsx)(D,{onClick:function(){return c.push("/")},children:(0,r.jsx)(d.V9Z,{})})}),(0,r.jsx)(C,{title:"Auto Format",children:(0,r.jsx)(D,{onClick:function(){o({type:E.n.TOGGLE_AUTOFORMAT}),(0,p.ZP)("Auto format has been ".concat(t.autoformat?"disabled.":"enabled."))},children:t.autoformat?(0,r.jsx)(f.kk0,{}):(0,r.jsx)(f.sGS,{})})}),(0,r.jsx)(C,{title:"Change Layout",children:(0,r.jsx)(D,{onClick:function(){return o({type:E.n.TOGGLE_LAYOUT})},children:(n=t.layout,"LEFT"===n?(0,r.jsx)(h.mtx,{}):"UP"===n?(0,r.jsx)(h.LkX,{}):"RIGHT"===n?(0,r.jsx)(h.glP,{}):(0,r.jsx)(h.uFB,{}))})}),(0,r.jsx)(C,{title:"Toggle Compact Nodes",children:(0,r.jsx)(D,{title:"Toggle Expand/Collapse",onClick:function(){o({type:E.n.TOGGLE_EXPAND}),(0,p.ZP)("".concat(t.expand?"Collapsed":"Expanded"," nodes."))},children:t.expand?(0,r.jsx)(f.bPX,{}):(0,r.jsx)(f.SPo,{})})}),(0,r.jsx)(C,{title:"Clear JSON",children:(0,r.jsx)(D,{onClick:function(){o({type:E.n.SET_JSON,payload:"[]"}),localStorage.removeItem("json"),p.ZP.success("Cleared JSON and removed from memory.")},children:(0,r.jsx)(d.YK6,{})})}),(0,r.jsx)(C,{title:"Import File",children:(0,r.jsx)(D,{children:(0,r.jsxs)(V,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&b(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===l||void 0===l?void 0:l.name),(0,r.jsx)(s.Xur,{})]})})})]}),(0,r.jsxs)(B,{children:[(0,r.jsx)(D,{children:(0,r.jsx)(a(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(d.h3E,{})})})}),(0,r.jsx)(D,{children:(0,r.jsx)(a(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(d.RrF,{})})})})]})]})},Y=t(6126),H=t(8687),J=t(1676);function X(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function W(){var n=X(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return W=function(){return n},n}function $(){var n=X(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  color: ",";\n"]);return $=function(){return n},n}function q(){var n=X(["\n  pointer-events: none;\n\n  &.searched {\n    border: 2px solid ",";\n    border-radius: 2px;\n  }\n"]);return q=function(){return n},n}function Q(){var n=X(["\n  color: ",";\n"]);return Q=function(){return n},n}function nn(){var n=X(["\n  height: fit-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return nn=function(){return n},n}var en=l.ZP.div.withConfig({componentId:"sc-7fd8034b-0"})(W()),tn=l.ZP.pre.withConfig({componentId:"sc-7fd8034b-1"})($(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),rn=l.ZP.foreignObject.withConfig({componentId:"sc-7fd8034b-2"})(q(),(function(n){return n.theme.TEXT_POSITIVE})),on=l.ZP.span.withConfig({componentId:"sc-7fd8034b-3"})(Q(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.ORANGE:t?"#5c87ff":e.TEXT_POSITIVE})),cn=l.ZP.div.withConfig({componentId:"sc-7fd8034b-4"})(nn(),(function(n){var e=n.width;return"".concat(e-20,"px")})),un=function(n){var e=n.width,t=n.height,i=n.value,o=n.x,c=n.y;return(0,r.jsx)(rn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(en,{children:(0,r.jsx)(tn,{width:e,height:t,children:i.map((function(n,t){return n[1]&&(0,r.jsxs)(cn,{width:e,children:[(0,r.jsxs)(on,{"data-x":o,"data-y":c,"data-key":n[1],objectKey:!0,children:[n[0],":"," "]}),n[1]]},t)}))})})})},an=function(n){var e=n.width,t=n.height,i=n.value,o=n.isParent,c=void 0!==o&&o,u=n.x,a=n.y;return(0,r.jsx)(rn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(en,{children:(0,r.jsx)(tn,{width:e,height:t,children:(0,r.jsx)(on,{"data-x":u,"data-y":a,"data-key":i,parent:c,children:i})})})})};function ln(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var sn={fill:"transparent",stroke:"transparent",strokeWidth:0},fn=i.memo((function(n){var e=n.properties;return(0,r.jsx)(H.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){ln(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(H.Label,{style:sn}),children:function(){var t,i,o=n.width,c=n.height;if(t=e.text,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](t):t instanceof i){var u=Object.entries(e.text);return(0,r.jsx)(un,{x:n.x,y:n.y,width:o,height:c,value:u})}return(0,r.jsx)(an,{isParent:e.data.isParent,width:o,height:c,value:e.text,x:n.x,y:n.y})}}))})),dn=t(3854),hn=t(155);function pn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function bn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return pn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function mn(){var n=xn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return mn=function(){return n},n}function vn(){var n=xn(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return vn=function(){return n},n}function gn(){var n=xn(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return gn=function(){return n},n}var yn=l.ZP.div.withConfig({componentId:"sc-152d1fc1-0"})(mn(),(function(n){return n.theme.BACKGROUND_TERTIARY})),jn=l.ZP.input.withConfig({componentId:"sc-152d1fc1-1"})(vn(),(function(n){return n.theme.TEXT_NORMAL})),wn=l.ZP.button.withConfig({componentId:"sc-152d1fc1-2"})(gn(),(function(n){return n.theme.INTERACTIVE_NORMAL})),On=function(){var n=(0,I.ZR)().dispatch,e=bn(i.useState(""),2),t=e[0],o=e[1];i.useEffect((function(){var e=setTimeout((function(){n({type:E.n.SET_SEARCH_NODE,payload:t})}),1500);return function(){return clearTimeout(e)}}),[t,n]);return(0,r.jsxs)(yn,{children:[(0,r.jsx)(jn,{type:"text",value:t,onChange:function(n){return o(n.target.value)},placeholder:"Search Node"}),(0,r.jsx)(wn,{"aria-label":"search",onClick:function(){o("")},children:t?(0,r.jsx)(hn.Lp2,{size:18}):(0,r.jsx)(d.RB5,{size:18})})]})};function Cn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function En(){var n=Cn(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return En=function(){return n},n}function In(){var n=Cn(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return In=function(){return n},n}var Pn=l.ZP.div.withConfig({componentId:"sc-8f2d3d6a-0"})(En(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),Rn=l.ZP.button.withConfig({componentId:"sc-8f2d3d6a-1"})(In(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),An=function(){var n=(0,I.ZR)(),e=n.states,t=n.dispatch;return(0,r.jsxs)(Pn,{children:[(0,r.jsx)(Rn,{"aria-label":"fullscreen",onClick:function(){return t({type:E.n.TOGGLE_DOCK})},children:(0,r.jsx)(d.vju,{})}),(0,r.jsx)(Rn,{"aria-label":"switch theme",onClick:function(){return t({type:E.n.TOGGLE_THEME})},children:e.settings.lightmode?(0,r.jsx)(dn.Fxr,{}):(0,r.jsx)(dn.YGJ,{})}),(0,r.jsx)(On,{}),(0,r.jsx)(Rn,{"aria-label":"save",onClick:function(){localStorage.setItem("json",e.json),p.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(d.JMf,{})}),(0,r.jsx)(Rn,{"aria-label":"center canvas",onClick:function(){return t({type:E.n.CENTER_VIEW})},children:(0,r.jsx)(f.XIv,{})}),(0,r.jsx)(Rn,{"aria-label":"zoom out",onClick:function(){return t({type:E.n.ZOOM_OUT})},children:(0,r.jsx)(d.ywL,{})}),(0,r.jsx)(Rn,{"aria-label":"zoom in",onClick:function(){return t({type:E.n.ZOOM_IN})},children:(0,r.jsx)(d.Lfi,{})})]})};function Sn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Tn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Nn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Sn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function _n(){var n=zn(["\n  position: relative;\n"]);return _n=function(){return n},n}function kn(){var n=zn(["\n  position: absolute;\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return kn=function(){return n},n}var Zn=l.ZP.div.withConfig({componentId:"sc-3bcb741c-0"})(_n()),Ln=l.ZP.div.withConfig({componentId:"sc-3bcb741c-1"})(kn(),(function(n){return n.theme.BACKGROUND_NODE})),Gn={step:.05},Dn=i.memo((function(){var n=(0,I.ZR)(),e=n.states,t=e.json,o=e.settings,c=n.dispatch,u=function(){var n=(0,i.useState)(!1),e=n[0],t=n[1];return(0,i.useEffect)((function(){return t(!0)}),[]),e}(),a=Nn(i.useState({nodes:[],edges:[]}),2),l=a[0],s=a[1];i.useEffect((function(){var n=(0,J.h)(t,o.expand),e=n.nodes,r=n.edges;s({nodes:e,edges:r})}),[t,o.expand]),i.useEffect((function(){var n;if(o.zoomPanPinch){var e=o.zoomPanPinch.instance.wrapperComponent,t=document.querySelector("span[data-key*='".concat(o.searchNode,"' i]"));if(null===(n=document.querySelector("foreignObject.searched"))||void 0===n||n.classList.remove("searched"),e&&t&&t.parentElement){var r,i,c,u=Number(t.getAttribute("data-x")),a=Number(t.getAttribute("data-y")),l=1*(e.offsetLeft-u)+t.getBoundingClientRect().width,s=1*(e.offsetTop-a)+t.getBoundingClientRect().height;null===(i=null===(r=t.parentElement.parentElement)||void 0===r?void 0:r.closest("foreignObject"))||void 0===i||i.classList.toggle("searched"),null===(c=o.zoomPanPinch)||void 0===c||c.setTransform(l,s,1)}}}),[o.searchNode,o.zoomPanPinch]);return u?(0,r.jsxs)(Zn,{children:[(0,r.jsx)(An,{}),(0,r.jsx)(Ln,{children:(0,r.jsx)(Y.d$,{maxScale:1.8,minScale:.4,initialScale:.8,limitToBounds:!1,wheel:Gn,onInit:function(n){c({type:E.n.SET_ZOOM_PAN_PICNH_REF,payload:n})},children:(0,r.jsx)(Y.Uv,{children:(0,r.jsx)(H.Canvas,{nodes:l.nodes,node:function(n){return(0,r.jsx)(fn,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Tn(n,e,t[e])}))}return n}({},n))},edges:l.edges,maxWidth:2e4,maxHeight:2e4,center:!1,zoomable:!1,fit:!0,direction:o.layout,readonly:!0,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()}},o.layout)})})})]}):null}));function Mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Un(){var n=Mn(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return Un=function(){return n},n}function Bn(){var n=Mn(["\n  font-weight: 700;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return Bn=function(){return n},n}function Kn(){var n=Mn(["\n  color: #faa81a;\n"]);return Kn=function(){return n},n}function Vn(){var n=Mn(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return Vn=function(){return n},n}var Fn=l.ZP.div.withConfig({componentId:"sc-ccf04899-0"})(Un(),(function(n){return n.theme.BLACK_DARK})),Yn=l.ZP.h2.withConfig({componentId:"sc-ccf04899-1"})(Bn()),Hn=l.ZP.span.withConfig({componentId:"sc-ccf04899-2"})(Kn()),Jn=l.ZP.div.withConfig({componentId:"sc-ccf04899-3"})(Vn()),Xn=function(n){var e=n.message;return(0,r.jsxs)(Fn,{children:[(0,r.jsxs)(Yn,{children:[(0,r.jsx)(Hn,{children:"JSON"})," Visio"]}),(0,r.jsx)(Jn,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})},Wn=t(1639);function $n(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 700;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return $n=function(){return t},t}var qn=l.ZP.div.withConfig({componentId:"sc-c29e823a-0"})($n(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),Qn=function(){var n=(0,P.useRouter)();return(0,r.jsxs)(qn,{children:["This app is not compatible with your device!",(0,r.jsx)(Wn.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},ne=t(5884);function ee(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function te(){var n=ee(["\n  display: flex;\n  height: 100vh;\n"]);return te=function(){return n},n}function re(){var n=ee(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return re=function(){return n},n}function ie(){var n=ee(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n\n  .Resizer {\n    background: ",";\n    box-sizing: border-box;\n    background-clip: padding-box;\n    z-index: 1;\n  }\n\n  .Resizer.disabled {\n    pointer-events: none;\n  }\n\n  .Resizer:hover {\n    transition: all 2s ease;\n  }\n\n  .Resizer.horizontal {\n    height: 11px;\n    margin: -5px 0;\n    border-top: 5px solid rgba(255, 255, 255, 0);\n    border-bottom: 5px solid rgba(255, 255, 255, 0);\n    cursor: row-resize;\n    width: 100%;\n  }\n\n  .Resizer.horizontal:hover {\n    border-top: 5px solid rgba(0, 0, 0, 0);\n    border-bottom: 5px solid rgba(0, 0, 0, 0);\n  }\n\n  .Resizer.vertical {\n    width: 14px;\n    margin: 0 -5px;\n    border-left: 5px solid rgba(255, 255, 255, 0);\n    border-right: 5px solid rgba(255, 255, 255, 0);\n    cursor: col-resize;\n    z-index: 1;\n  }\n\n  .Resizer.vertical:hover {\n    border-left: 5px solid rgba(0, 0, 0, 0);\n    border-right: 5px solid rgba(0, 0, 0, 0);\n  }\n\n  .Resizer.disabled {\n    cursor: not-allowed;\n  }\n\n  .Resizer.disabled:hover {\n    border-color: transparent;\n  }\n"]);return ie=function(){return n},n}var oe=l.ZP.div.withConfig({componentId:"sc-59604cc7-0"})(te()),ce=l.ZP.div.withConfig({componentId:"sc-59604cc7-1"})(re()),ue=(0,l.ZP)(ne.Z).withConfig({componentId:"sc-59604cc7-2"})(ie(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),ae=(0,c.default)((function(){return Promise.all([t.e(774),t.e(281),t.e(593),t.e(369)]).then(t.bind(t,5369))}),{loadableGenerated:{webpack:function(){return[5369]}},ssr:!1,loading:function(){return(0,r.jsx)(Xn,{message:"Loading Editor..."})}}),le=function(){var n=(0,I.ZR)().states.settings;return(0,r.jsxs)(oe,{children:[(0,r.jsx)(F,{}),(0,r.jsx)(ce,{children:(0,r.jsxs)(ue,{maxSize:800,minSize:300,defaultSize:450,split:"vertical",size:n.hideEditor?0:450,allowResize:!n.hideEditor,children:[(0,r.jsx)(ae,{}),(0,r.jsx)(Dn,{})]})}),(0,r.jsx)(Qn,{})]})};function se(){var n,e,t=(n=["\n  *::-webkit-scrollbar {\n    width: 8px;\n    background: ",";\n  }\n\n  *::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background-color: ",";\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return se=function(){return t},t}var fe=l.ZP.div.withConfig({componentId:"sc-affa8f85-0"})(se(),(function(n){return n.theme.BLACK_SECONDARY}),(function(n){return n.theme.SILVER_DARK})),de=function(){return(0,r.jsxs)(fe,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Editor | JSON Visio"}),(0,r.jsx)("meta",{name:"description",content:"View your JSON data in graphs instantly."})]}),(0,r.jsx)(le,{})]})}}},function(n){n.O(0,[617,228,260,556,445,955,319,987,636,65,774,888,179],(function(){return e=545,n(n.s=e);var e}));var e=n.O();_N_E=e}]);