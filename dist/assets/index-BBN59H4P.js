var gv=Object.defineProperty;var _v=(s,e,t)=>e in s?gv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Sn=(s,e,t)=>_v(s,typeof e!="symbol"?e+"":e,t);import{r as B,a as yv,u as mg,b as pg,L as kt,O as bv,R as Po,N as Ev,B as vv,c as Nv,d as vr}from"./vendor-BClCDLqr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var gg={exports:{}},su={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var s=B,e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),E=Symbol.for("react.offscreen"),T=Symbol.iterator,S="@@iterator";function k(N){if(N===null||typeof N!="object")return null;var L=T&&N[T]||N[S];return typeof L=="function"?L:null}var G=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function F(N){{for(var L=arguments.length,W=new Array(L>1?L-1:0),ee=1;ee<L;ee++)W[ee-1]=arguments[ee];M("error",N,W)}}function M(N,L,W){{var ee=G.ReactDebugCurrentFrame,pe=ee.getStackAddendum();pe!==""&&(L+="%s",W=W.concat([pe]));var ve=W.map(function(ce){return String(ce)});ve.unshift("Warning: "+L),Function.prototype.apply.call(console[N],console,ve)}}var Q=!1,re=!1,Y=!1,I=!1,y=!1,v;v=Symbol.for("react.module.reference");function w(N){return!!(typeof N=="string"||typeof N=="function"||N===n||N===i||y||N===r||N===u||N===f||I||N===E||Q||re||Y||typeof N=="object"&&N!==null&&(N.$$typeof===g||N.$$typeof===p||N.$$typeof===o||N.$$typeof===l||N.$$typeof===c||N.$$typeof===v||N.getModuleId!==void 0))}function x(N,L,W){var ee=N.displayName;if(ee)return ee;var pe=L.displayName||L.name||"";return pe!==""?W+"("+pe+")":W}function D(N){return N.displayName||"Context"}function b(N){if(N==null)return null;if(typeof N.tag=="number"&&F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof N=="function")return N.displayName||N.name||null;if(typeof N=="string")return N;switch(N){case n:return"Fragment";case t:return"Portal";case i:return"Profiler";case r:return"StrictMode";case u:return"Suspense";case f:return"SuspenseList"}if(typeof N=="object")switch(N.$$typeof){case l:var L=N;return D(L)+".Consumer";case o:var W=N;return D(W._context)+".Provider";case c:return x(N,N.render,"ForwardRef");case p:var ee=N.displayName||null;return ee!==null?ee:b(N.type)||"Memo";case g:{var pe=N,ve=pe._payload,ce=pe._init;try{return b(ce(ve))}catch{return null}}}return null}var Re=Object.assign,lt=0,ye,Lt,_t,$t,Ye,wn,yt;function Ve(){}Ve.__reactDisabledLog=!0;function xn(){{if(lt===0){ye=console.log,Lt=console.info,_t=console.warn,$t=console.error,Ye=console.group,wn=console.groupCollapsed,yt=console.groupEnd;var N={configurable:!0,enumerable:!0,value:Ve,writable:!0};Object.defineProperties(console,{info:N,log:N,warn:N,error:N,group:N,groupCollapsed:N,groupEnd:N})}lt++}}function zt(){{if(lt--,lt===0){var N={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Re({},N,{value:ye}),info:Re({},N,{value:Lt}),warn:Re({},N,{value:_t}),error:Re({},N,{value:$t}),group:Re({},N,{value:Ye}),groupCollapsed:Re({},N,{value:wn}),groupEnd:Re({},N,{value:yt})})}lt<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Wt=G.ReactCurrentDispatcher,tt;function sn(N,L,W){{if(tt===void 0)try{throw Error()}catch(pe){var ee=pe.stack.trim().match(/\n( *(at )?)/);tt=ee&&ee[1]||""}return`
`+tt+N}}var Kt=!1,Dt;{var rn=typeof WeakMap=="function"?WeakMap:Map;Dt=new rn}function Ut(N,L){if(!N||Kt)return"";{var W=Dt.get(N);if(W!==void 0)return W}var ee;Kt=!0;var pe=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ve;ve=Wt.current,Wt.current=null,xn();try{if(L){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(st){ee=st}Reflect.construct(N,[],ce)}else{try{ce.call()}catch(st){ee=st}N.call(ce.prototype)}}else{try{throw Error()}catch(st){ee=st}N()}}catch(st){if(st&&ee&&typeof st.stack=="string"){for(var ae=st.stack.split(`
`),je=ee.stack.split(`
`),Oe=ae.length-1,Me=je.length-1;Oe>=1&&Me>=0&&ae[Oe]!==je[Me];)Me--;for(;Oe>=1&&Me>=0;Oe--,Me--)if(ae[Oe]!==je[Me]){if(Oe!==1||Me!==1)do if(Oe--,Me--,Me<0||ae[Oe]!==je[Me]){var ct=`
`+ae[Oe].replace(" at new "," at ");return N.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",N.displayName)),typeof N=="function"&&Dt.set(N,ct),ct}while(Oe>=1&&Me>=0);break}}}finally{Kt=!1,Wt.current=ve,zt(),Error.prepareStackTrace=pe}var ln=N?N.displayName||N.name:"",cn=ln?sn(ln):"";return typeof N=="function"&&Dt.set(N,cn),cn}function Tn(N,L,W){return Ut(N,!1)}function Dn(N){var L=N.prototype;return!!(L&&L.isReactComponent)}function Mt(N,L,W){if(N==null)return"";if(typeof N=="function")return Ut(N,Dn(N));if(typeof N=="string")return sn(N);switch(N){case u:return sn("Suspense");case f:return sn("SuspenseList")}if(typeof N=="object")switch(N.$$typeof){case c:return Tn(N.render);case p:return Mt(N.type,L,W);case g:{var ee=N,pe=ee._payload,ve=ee._init;try{return Mt(ve(pe),L,W)}catch{}}}return""}var Vt=Object.prototype.hasOwnProperty,Vn={},Hn=G.ReactDebugCurrentFrame;function Ht(N){if(N){var L=N._owner,W=Mt(N.type,N._source,L?L.type:null);Hn.setExtraStackFrame(W)}else Hn.setExtraStackFrame(null)}function R(N,L,W,ee,pe){{var ve=Function.call.bind(Vt);for(var ce in N)if(ve(N,ce)){var ae=void 0;try{if(typeof N[ce]!="function"){var je=Error((ee||"React class")+": "+W+" type `"+ce+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof N[ce]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw je.name="Invariant Violation",je}ae=N[ce](L,ce,ee,W,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Oe){ae=Oe}ae&&!(ae instanceof Error)&&(Ht(pe),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",ee||"React class",W,ce,typeof ae),Ht(null)),ae instanceof Error&&!(ae.message in Vn)&&(Vn[ae.message]=!0,Ht(pe),F("Failed %s type: %s",W,ae.message),Ht(null))}}}var P=Array.isArray;function O(N){return P(N)}function Z(N){{var L=typeof Symbol=="function"&&Symbol.toStringTag,W=L&&N[Symbol.toStringTag]||N.constructor.name||"Object";return W}}function oe(N){try{return Pe(N),!1}catch{return!0}}function Pe(N){return""+N}function xe(N){if(oe(N))return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Z(N)),Pe(N)}var Ae=G.ReactCurrentOwner,on={key:!0,ref:!0,__self:!0,__source:!0},Ft,bi,Ei;Ei={};function Ds(N){if(Vt.call(N,"ref")){var L=Object.getOwnPropertyDescriptor(N,"ref").get;if(L&&L.isReactWarning)return!1}return N.ref!==void 0}function Zo(N){if(Vt.call(N,"key")){var L=Object.getOwnPropertyDescriptor(N,"key").get;if(L&&L.isReactWarning)return!1}return N.key!==void 0}function ea(N,L){if(typeof N.ref=="string"&&Ae.current&&L&&Ae.current.stateNode!==L){var W=b(Ae.current.type);Ei[W]||(F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(Ae.current.type),N.ref),Ei[W]=!0)}}function vi(N,L){{var W=function(){Ft||(Ft=!0,F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",L))};W.isReactWarning=!0,Object.defineProperty(N,"key",{get:W,configurable:!0})}}function Ic(N,L){{var W=function(){bi||(bi=!0,F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",L))};W.isReactWarning=!0,Object.defineProperty(N,"ref",{get:W,configurable:!0})}}var wc=function(N,L,W,ee,pe,ve,ce){var ae={$$typeof:e,type:N,key:L,ref:W,props:ce,_owner:ve};return ae._store={},Object.defineProperty(ae._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(ae,"_self",{configurable:!1,enumerable:!1,writable:!1,value:ee}),Object.defineProperty(ae,"_source",{configurable:!1,enumerable:!1,writable:!1,value:pe}),Object.freeze&&(Object.freeze(ae.props),Object.freeze(ae)),ae};function Ni(N,L,W,ee,pe){{var ve,ce={},ae=null,je=null;W!==void 0&&(xe(W),ae=""+W),Zo(L)&&(xe(L.key),ae=""+L.key),Ds(L)&&(je=L.ref,ea(L,pe));for(ve in L)Vt.call(L,ve)&&!on.hasOwnProperty(ve)&&(ce[ve]=L[ve]);if(N&&N.defaultProps){var Oe=N.defaultProps;for(ve in Oe)ce[ve]===void 0&&(ce[ve]=Oe[ve])}if(ae||je){var Me=typeof N=="function"?N.displayName||N.name||"Unknown":N;ae&&vi(ce,Me),je&&Ic(ce,Me)}return wc(N,ae,je,pe,ee,Ae.current,ce)}}var gr=G.ReactCurrentOwner,Ii=G.ReactDebugCurrentFrame;function Bt(N){if(N){var L=N._owner,W=Mt(N.type,N._source,L?L.type:null);Ii.setExtraStackFrame(W)}else Ii.setExtraStackFrame(null)}var Vs;Vs=!1;function As(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function an(){{if(gr.current){var N=b(gr.current.type);if(N)return`

Check the render method of \``+N+"`."}return""}}function ta(N){{if(N!==void 0){var L=N.fileName.replace(/^.*[\\\/]/,""),W=N.lineNumber;return`

Check your code at `+L+":"+W+"."}return""}}var ks={};function na(N){{var L=an();if(!L){var W=typeof N=="string"?N:N.displayName||N.name;W&&(L=`

Check the top-level render call using <`+W+">.")}return L}}function Qn(N,L){{if(!N._store||N._store.validated||N.key!=null)return;N._store.validated=!0;var W=na(L);if(ks[W])return;ks[W]=!0;var ee="";N&&N._owner&&N._owner!==gr.current&&(ee=" It was passed a child from "+b(N._owner.type)+"."),Bt(N),F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',W,ee),Bt(null)}}function wi(N,L){{if(typeof N!="object")return;if(O(N))for(var W=0;W<N.length;W++){var ee=N[W];As(ee)&&Qn(ee,L)}else if(As(N))N._store&&(N._store.validated=!0);else if(N){var pe=k(N);if(typeof pe=="function"&&pe!==N.entries)for(var ve=pe.call(N),ce;!(ce=ve.next()).done;)As(ce.value)&&Qn(ce.value,L)}}}function nt(N){{var L=N.type;if(L==null||typeof L=="string")return;var W;if(typeof L=="function")W=L.propTypes;else if(typeof L=="object"&&(L.$$typeof===c||L.$$typeof===p))W=L.propTypes;else return;if(W){var ee=b(L);R(W,N.props,"prop",ee,N)}else if(L.PropTypes!==void 0&&!Vs){Vs=!0;var pe=b(L);F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",pe||"Unknown")}typeof L.getDefaultProps=="function"&&!L.getDefaultProps.isReactClassApproved&&F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sa(N){{for(var L=Object.keys(N.props),W=0;W<L.length;W++){var ee=L[W];if(ee!=="children"&&ee!=="key"){Bt(N),F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",ee),Bt(null);break}}N.ref!==null&&(Bt(N),F("Invalid attribute `ref` supplied to `React.Fragment`."),Bt(null))}}var Yn={};function Ss(N,L,W,ee,pe,ve){{var ce=w(N);if(!ce){var ae="";(N===void 0||typeof N=="object"&&N!==null&&Object.keys(N).length===0)&&(ae+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var je=ta(pe);je?ae+=je:ae+=an();var Oe;N===null?Oe="null":O(N)?Oe="array":N!==void 0&&N.$$typeof===e?(Oe="<"+(b(N.type)||"Unknown")+" />",ae=" Did you accidentally export a JSX literal instead of a component?"):Oe=typeof N,F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Oe,ae)}var Me=Ni(N,L,W,pe,ve);if(Me==null)return Me;if(ce){var ct=L.children;if(ct!==void 0)if(ee)if(O(ct)){for(var ln=0;ln<ct.length;ln++)wi(ct[ln],N);Object.freeze&&Object.freeze(ct)}else F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else wi(ct,N)}if(Vt.call(L,"key")){var cn=b(N),st=Object.keys(L).filter(function(ra){return ra!=="key"}),xi=st.length>0?"{key: someKey, "+st.join(": ..., ")+": ...}":"{key: someKey}";if(!Yn[cn+xi]){var _r=st.length>0?"{"+st.join(": ..., ")+": ...}":"{}";F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,xi,cn,_r,cn),Yn[cn+xi]=!0}}return N===n?sa(Me):nt(Me),Me}}var xc=Ss;su.Fragment=n,su.jsxDEV=xc})();gg.exports=su;var d=gg.exports,ru={},jc=yv;{var ga=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ru.createRoot=function(s,e){ga.usingClientEntryPoint=!0;try{return jc.createRoot(s,e)}finally{ga.usingClientEntryPoint=!1}},ru.hydrateRoot=function(s,e,t){ga.usingClientEntryPoint=!0;try{return jc.hydrateRoot(s,e,t)}finally{ga.usingClientEntryPoint=!1}}}/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),me=(s,e)=>{const t=B.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...u},f)=>B.createElement("svg",{ref:f,...Iv,width:r,height:r,stroke:n,strokeWidth:o?Number(i)*24/Number(r):i,className:["lucide",`lucide-${wv(s)}`,l].join(" "),...u},[...e.map(([p,g])=>B.createElement(p,g)),...Array.isArray(c)?c:[c]]));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=me("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=me("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=me("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=me("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=me("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=me("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=me("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=me("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=me("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=me("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=me("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=me("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=me("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=me("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=me("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=me("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=me("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=me("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=me("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=me("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=me("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=me("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=me("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=me("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=me("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=me("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=me("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=me("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=me("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=me("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=me("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=me("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=me("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=me("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=me("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=me("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Tf=[{code:"en-US",name:"English",nativeName:"English",direction:"ltr"},{code:"hi-IN",name:"Hindi",nativeName:"हिंदी",direction:"ltr"},{code:"bn-IN",name:"Bengali",nativeName:"বাংলা",direction:"ltr"},{code:"te-IN",name:"Telugu",nativeName:"తెలుగు",direction:"ltr"},{code:"mr-IN",name:"Marathi",nativeName:"मराठी",direction:"ltr"},{code:"ta-IN",name:"Tamil",nativeName:"தமிழ்",direction:"ltr"},{code:"gu-IN",name:"Gujarati",nativeName:"ગુજરાતી",direction:"ltr"},{code:"kn-IN",name:"Kannada",nativeName:"ಕನ್ನಡ",direction:"ltr"},{code:"ml-IN",name:"Malayalam",nativeName:"മലയാളം",direction:"ltr"},{code:"pa-IN",name:"Punjabi",nativeName:"ਪੰਜਾਬੀ",direction:"ltr"},{code:"or-IN",name:"Odia",nativeName:"ଓଡ଼ିଆ",direction:"ltr"},{code:"as-IN",name:"Assamese",nativeName:"অসমীয়া",direction:"ltr"}],Jv={currentLanguage:Tf[0],setLanguage:()=>{},languages:Tf,speak:()=>{}},Zv=B.createContext(Jv),eN=()=>{const s=B.useContext(Zv);if(!s)throw new Error("useLanguage must be used within a LanguageProvider");return s},tN={sm:"w-6 h-6 border-2",md:"w-10 h-10 border-3",lg:"w-16 h-16 border-4"},nN=({size:s="md",color:e="blue-500"})=>d.jsxDEV("div",{className:`${tN[s]} rounded-full border-gray-200 border-t-${e} animate-spin`,role:"status","aria-label":"Loading",children:d.jsxDEV("span",{className:"sr-only",children:"Loading..."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/LoadingSpinner.tsx",lineNumber:24,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/LoadingSpinner.tsx",lineNumber:19,columnNumber:5},void 0),sN=["All","Infrastructure","Technology","Events","Awareness","Training","Process"],dt=[{id:1,src:"https://picsum.photos/800/600?eci=headquarters",alt:"Election Commission of India Headquarters",description:"Nirvachan Sadan - The iconic headquarters of the Election Commission of India in New Delhi",category:"Infrastructure",date:"2024",location:"New Delhi"},{id:2,src:"https://picsum.photos/800/600?eci=evm",alt:"EVM Demonstration",description:"Election officials demonstrating the use of Electronic Voting Machines (EVMs) and VVPAT system",category:"Technology",date:"2024",location:"Various Locations"},{id:3,src:"https://picsum.photos/800/600?eci=nvd",alt:"National Voters' Day Celebration",description:"Celebration of National Voters' Day on January 25th, promoting democratic participation",category:"Events",date:"January 25, 2024",location:"Pan India"},{id:4,src:"https://picsum.photos/800/600?eci=registration",alt:"Voter Registration Drive",description:"Special voter registration campaign to ensure maximum electoral participation",category:"Awareness",date:"2024",location:"Multiple States"},{id:5,src:"https://picsum.photos/800/600?eci=training",alt:"Election Officials Training",description:"Training session for election officials on electoral processes and EVM operation",category:"Training",date:"2024",location:"Regional Offices"},{id:6,src:"https://picsum.photos/800/600?eci=accessible",alt:"Accessible Voting Facilities",description:"Special arrangements ensuring accessible voting for elderly and differently-abled voters",category:"Process",date:"2024",location:"Nationwide"},{id:7,src:"https://picsum.photos/800/600?eci=counting",alt:"Vote Counting Process",description:"Systematic counting of votes under strict supervision and security",category:"Process",date:"2024",location:"Counting Centers"},{id:8,src:"https://picsum.photos/800/600?eci=awareness",alt:"Voter Awareness Campaign",description:"SVEEP campaign activities to educate voters about their electoral rights and responsibilities",category:"Awareness",date:"2024",location:"Pan India"}],rN=()=>{const[s,e]=B.useState(null),[t,n]=B.useState({}),[r,i]=B.useState({}),[o,l]=B.useState({}),[c,u]=B.useState(new Set),f=B.useRef(null),p=B.useRef({}),[g,E]=B.useState(null),[T,S]=B.useState(null),[k,G]=B.useState(!1),[F,M]=B.useState(1),[Q,re]=B.useState(!1),[Y,I]=B.useState({x:0,y:0}),[y,v]=B.useState(!1),w=B.useRef(null),x=B.useRef(null),[D,b]=B.useState(!1),[Re,lt]=B.useState(null),ye=B.useRef(null),Lt=B.useRef(null),[_t,$t]=B.useState("All"),[Ye,wn]=B.useState(dt),[yt,Ve]=B.useState(4),xn=B.useCallback(R=>{if(!s)return;const P=dt.findIndex(O=>O.id===s.id);switch(R.key){case"ArrowLeft":R.preventDefault(),P>0&&e(dt[P-1]);break;case"ArrowRight":R.preventDefault(),P<dt.length-1&&e(dt[P+1]);break;case"Escape":R.preventDefault(),e(null);break}},[s]);B.useEffect(()=>{if(s)return window.addEventListener("keydown",xn),()=>window.removeEventListener("keydown",xn)},[s,xn]),B.useEffect(()=>(f.current=new IntersectionObserver(R=>{R.forEach(P=>{if(P.isIntersecting){const O=Number(P.target.getAttribute("data-image-id"));if(O&&!c.has(O)){const Z=dt.find(oe=>oe.id===O);Z&&zt(Z)}}})},{rootMargin:"50px"}),()=>{f.current&&f.current.disconnect()}),[c]);const zt=async R=>{if(!c.has(R.id)){i(P=>({...P,[R.id]:!0}));try{const P=new Image;P.onload=()=>{l(O=>({...O,[R.id]:R.src})),u(O=>new Set(O).add(R.id)),i(O=>({...O,[R.id]:!1}))},P.onerror=()=>{Wt(R.id),i(O=>({...O,[R.id]:!1}))},P.src=R.src}catch{Wt(R.id),i(O=>({...O,[R.id]:!1}))}}},Wt=R=>{n(P=>({...P,[R]:!0}))},tt=R=>t[R.id]?R.src:o[R.id]||R.src,sn=async R=>{try{const O=await(await fetch(tt(R))).blob(),Z=window.URL.createObjectURL(O),oe=document.createElement("a");oe.href=Z,oe.download=`${R.alt.toLowerCase().replace(/\s+/g,"-")}.jpg`,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),window.URL.revokeObjectURL(Z)}catch(P){console.error("Error downloading image:",P)}},Kt=(R,P)=>{R&&f.current&&(p.current[P]=R,f.current.observe(R))};B.useEffect(()=>(y&&s&&(w.current=setInterval(()=>{const R=dt.findIndex(P=>P.id===s.id);R<dt.length-1?e(dt[R+1]):e(dt[0])},3e3)),()=>{w.current&&clearInterval(w.current)}),[y,s]);const Dt=R=>{if(R.touches.length===2){const P=Math.hypot(R.touches[0].clientX-R.touches[1].clientX,R.touches[0].clientY-R.touches[1].clientY);lt(P)}else E(R.touches[0].clientX),S(null)},rn=R=>{if(R.touches.length===2){if(Re===null)return;const P=Math.hypot(R.touches[0].clientX-R.touches[1].clientX,R.touches[0].clientY-R.touches[1].clientY),Z=(P-Re)*.01;M(oe=>{const Pe=Math.max(1,Math.min(3,oe+Z));return G(Pe>1),Pe}),lt(P)}else S(R.touches[0].clientX)},Ut=()=>{if(!g||!T)return;const R=g-T,P=R>50,O=R<-50;if(s){const Z=dt.findIndex(oe=>oe.id===s.id);P&&Z<dt.length-1&&e(dt[Z+1]),O&&Z>0&&e(dt[Z-1])}E(null),S(null)},Tn=()=>{F<3&&(M(R=>R+.5),G(!0))},Dn=()=>{F>1&&(M(R=>R-.5),F<=1.5&&(G(!1),M(1),I({x:0,y:0})))},Mt=R=>{k&&(re(!0),I({x:R.clientX-Y.x,y:R.clientY-Y.y}))},Vt=R=>{var P;if(Q&&k){const O=R.clientX-Y.x,Z=R.clientY-Y.y,oe=(P=x.current)==null?void 0:P.getBoundingClientRect();if(oe){const Pe=oe.width*(F-1)/2,xe=oe.height*(F-1)/2;I({x:Math.max(Math.min(O,Pe),-Pe),y:Math.max(Math.min(Z,xe),-xe)})}}},Vn=()=>{re(!1)},Hn=async R=>{try{navigator.share?await navigator.share({title:R.alt,text:R.description,url:tt(R)}):(await navigator.clipboard.writeText(tt(R)),alert("Image URL copied to clipboard!"))}catch(P){console.error("Error sharing image:",P)}},Ht=async()=>{var R,P;if(D)try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen(),b(!1)}catch(O){console.error("Error exiting fullscreen:",O)}else try{(R=ye.current)!=null&&R.requestFullscreen?await ye.current.requestFullscreen():(P=ye.current)!=null&&P.webkitRequestFullscreen&&await ye.current.webkitRequestFullscreen(),b(!0)}catch(O){console.error("Error entering fullscreen:",O)}};return B.useEffect(()=>{const R=()=>{b(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",R),document.addEventListener("webkitfullscreenchange",R),()=>{document.removeEventListener("fullscreenchange",R),document.removeEventListener("webkitfullscreenchange",R)}},[]),B.useEffect(()=>{wn(_t==="All"?dt:dt.filter(R=>R.category===_t))},[_t]),B.useEffect(()=>{const R=()=>{const P=window.innerWidth;P<640?Ve(1):P<768?Ve(2):P<1024?Ve(3):Ve(4)};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),d.jsxDEV("section",{className:"bg-gradient-to-b from-white to-gray-50 py-16",children:d.jsxDEV("div",{className:"container mx-auto px-4",children:[d.jsxDEV("h2",{className:"text-3xl font-bold text-center mb-2 text-gray-800",children:"Photo Gallery"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:546,columnNumber:9},void 0),d.jsxDEV("p",{className:"text-center text-gray-600 mb-8",children:"Glimpses of Indian Democracy in Action"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:549,columnNumber:9},void 0),d.jsxDEV("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:sN.map(R=>d.jsxDEV("button",{onClick:()=>$t(R),className:`px-4 py-2 rounded-full transition-all duration-300 ${_t===R?"bg-primary text-white shadow-md":"bg-white text-gray-600 hover:bg-gray-100"}`,children:R},R,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:556,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:554,columnNumber:9},void 0),d.jsxDEV("div",{className:"grid gap-6",style:{gridTemplateColumns:`repeat(${yt}, 1fr)`},children:Ye.map(R=>d.jsxDEV("div",{className:"relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",onClick:()=>e(R),children:[d.jsxDEV("div",{className:"aspect-w-16 aspect-h-9",children:[r[R.id]&&d.jsxDEV("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100",children:d.jsxDEV(nN,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:586,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:585,columnNumber:19},void 0),d.jsxDEV("img",{ref:P=>Kt(P,R.id),src:tt(R),alt:R.alt,className:"object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500",loading:"lazy",onError:()=>Wt(R.id),"data-image-id":R.id},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:589,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:583,columnNumber:15},void 0),d.jsxDEV("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:d.jsxDEV("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[d.jsxDEV("h3",{className:"text-white font-semibold text-lg mb-1",children:R.alt},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:601,columnNumber:19},void 0),d.jsxDEV("div",{className:"flex items-center gap-2 text-white/80 text-sm mb-2",children:[d.jsxDEV(wf,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:605,columnNumber:21},void 0),d.jsxDEV("span",{children:R.date},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:606,columnNumber:21},void 0),d.jsxDEV(iu,{className:"h-4 w-4 ml-2"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:607,columnNumber:21},void 0),d.jsxDEV("span",{children:R.location},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:608,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:604,columnNumber:19},void 0),d.jsxDEV("p",{className:"text-white/90 text-sm line-clamp-2",children:R.description},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:610,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:600,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:599,columnNumber:15},void 0)]},R.id,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:578,columnNumber:13},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:571,columnNumber:9},void 0),s&&d.jsxDEV("div",{ref:ye,className:"fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4",onClick:R=>{R.target===R.currentTarget&&!Q&&e(null)},onTouchStart:Dt,onTouchMove:rn,onTouchEnd:Ut,children:[d.jsxDEV("div",{className:"absolute top-4 right-4 flex items-center space-x-4 z-10",children:[d.jsxDEV("button",{onClick:()=>v(!y),className:"text-white hover:text-gray-300 transition-colors","aria-label":y?"Pause slideshow":"Start slideshow",children:y?d.jsxDEV(Mv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:639,columnNumber:32},void 0):d.jsxDEV(Bv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:639,columnNumber:54},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:634,columnNumber:15},void 0),d.jsxDEV("button",{onClick:Tn,className:"text-white hover:text-gray-300 transition-colors",disabled:F>=3,"aria-label":"Zoom in",children:d.jsxDEV(Qv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:647,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:641,columnNumber:15},void 0),d.jsxDEV("button",{onClick:Dn,className:"text-white hover:text-gray-300 transition-colors",disabled:F<=1,"aria-label":"Zoom out",children:d.jsxDEV(Yv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:655,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:649,columnNumber:15},void 0),d.jsxDEV("button",{onClick:Ht,className:"text-white hover:text-gray-300 transition-colors","aria-label":D?"Exit fullscreen":"Enter fullscreen",children:D?d.jsxDEV(Uv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:665,columnNumber:19},void 0):d.jsxDEV(Lv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:667,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:657,columnNumber:15},void 0),d.jsxDEV("button",{onClick:R=>{R.stopPropagation(),Hn(s)},className:"text-white hover:text-gray-300 transition-colors","aria-label":"Share image",children:d.jsxDEV(Wv,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:678,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:670,columnNumber:15},void 0),d.jsxDEV("button",{onClick:R=>{R.stopPropagation(),sn(s)},className:"text-white hover:text-gray-300 transition-colors","aria-label":"Download image",children:d.jsxDEV(Av,{size:24},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:688,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:680,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:633,columnNumber:13},void 0),d.jsxDEV("div",{className:"max-w-6xl w-full relative flex-1",children:[d.jsxDEV("div",{className:"relative overflow-hidden",onMouseDown:Mt,onMouseMove:Vt,onMouseUp:Vn,onMouseLeave:Vn,children:d.jsxDEV("img",{ref:x,src:tt(s),alt:s.alt,className:"w-full h-auto max-h-[80vh] object-contain transition-transform duration-200",style:{transform:`scale(${F}) translate(${Y.x}px, ${Y.y}px)`,cursor:k?"grab":"default"}},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:701,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:694,columnNumber:15},void 0),d.jsxDEV("div",{className:"absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent",children:[d.jsxDEV("h3",{className:"text-white text-2xl font-bold mb-2",children:s.alt},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:715,columnNumber:17},void 0),d.jsxDEV("div",{className:"flex items-center gap-4 text-white/80 mb-2",children:[d.jsxDEV("div",{className:"flex items-center gap-2",children:[d.jsxDEV(wf,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:720,columnNumber:21},void 0),d.jsxDEV("span",{children:s.date},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:721,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:719,columnNumber:19},void 0),d.jsxDEV("div",{className:"flex items-center gap-2",children:[d.jsxDEV(iu,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:724,columnNumber:21},void 0),d.jsxDEV("span",{children:s.location},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:725,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:723,columnNumber:19},void 0),d.jsxDEV("div",{className:"flex items-center gap-2",children:[d.jsxDEV(Cv,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:728,columnNumber:21},void 0),d.jsxDEV("span",{children:s.category},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:729,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:727,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:718,columnNumber:17},void 0),d.jsxDEV("p",{className:"text-white/90",children:s.description},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:732,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:714,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:693,columnNumber:13},void 0),d.jsxDEV("button",{onClick:R=>{R.stopPropagation();const P=Ye.findIndex(O=>O.id===s.id);P>0&&e(Ye[P-1])},className:"absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",disabled:Ye.findIndex(R=>R.id===s.id)===0,"aria-label":"Previous image",children:d.jsxDEV(_g,{size:36},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:755,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:737,columnNumber:13},void 0),d.jsxDEV("button",{onClick:R=>{R.stopPropagation();const P=Ye.findIndex(O=>O.id===s.id);P<Ye.length-1&&e(Ye[P+1])},className:"absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",disabled:Ye.findIndex(R=>R.id===s.id)===Ye.length-1,"aria-label":"Next image",children:d.jsxDEV(Dv,{size:36},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:777,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:758,columnNumber:13},void 0),d.jsxDEV("div",{className:"absolute bottom-4 left-0 right-0 px-4",children:d.jsxDEV("div",{className:"max-w-6xl mx-auto",children:d.jsxDEV("div",{ref:Lt,className:"flex gap-2 overflow-x-auto py-2 px-4 bg-black/50 rounded-lg",children:Ye.map(R=>d.jsxDEV("button",{onClick:()=>e(R),className:`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${s.id===R.id?"ring-2 ring-primary scale-105":"opacity-60 hover:opacity-100"}`,children:d.jsxDEV("img",{src:tt(R),alt:R.alt,className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:797,columnNumber:23},void 0)},R.id,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:788,columnNumber:21},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:783,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:782,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:781,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:621,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:545,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/PhotoGallery.tsx",lineNumber:544,columnNumber:5},void 0)};var Df={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(s,e){if(!s)throw li(e)},li=function(s){return new Error("Firebase Database ("+Eg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},iN=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],l=s[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,l=o?s[r+1]:0,c=r+2<s.length,u=c?s[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),n.push(t[f],t[p],t[g],t[E])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(vg(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):iN(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],l=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const p=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new oN;const g=i<<2|l>>4;if(n.push(g),u!==64){const E=l<<4&240|u>>2;if(n.push(E),p!==64){const T=u<<6&192|p;n.push(T)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class oN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ng=function(s){const e=vg(s);return sh.encodeByteArray(e,!0)},Ha=function(s){return Ng(s).replace(/\./g,"")},Qa=function(s){try{return sh.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(s){return Ig(void 0,s)}function Ig(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lN(t)||(s[t]=Ig(s[t],e[t]));return s}function lN(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=()=>cN().__FIREBASE_DEFAULTS__,hN=()=>{if(typeof process>"u"||typeof Df>"u")return;const s=Df.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},dN=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Qa(s[1]);return e&&JSON.parse(e)},Ml=()=>{try{return uN()||hN()||dN()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},wg=s=>{var e,t;return(t=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},Fl=s=>{const e=wg(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},xg=()=>{var s;return(s=Ml())===null||s===void 0?void 0:s.config},Tg=s=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Ha(JSON.stringify(t)),Ha(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ih(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function fN(){var s;const e=(s=Ml())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pN(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gN(){const s=He();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function _N(){return Eg.NODE_ADMIN===!0}function Vg(){return!fN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ag(){try{return typeof indexedDB=="object"}catch{return!1}}function yN(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="FirebaseError";class Nn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=bN,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?EN(i,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Nn(r,l,n)}}function EN(s,e){return s.replace(vN,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const vN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(s){return JSON.parse(s)}function et(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=function(s){let e={},t={},n={},r="";try{const i=s.split(".");e=uo(Qa(i[0])||""),t=uo(Qa(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},NN=function(s){const e=kg(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},IN=function(s){const e=kg(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function qr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function au(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ya(s,e,t){const n={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=e.call(t,s[r],r,s));return n}function Ja(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(Vf(i)&&Vf(o)){if(!Ja(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Vf(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)n[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)n[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=n[p-3]^n[p-8]^n[p-14]^n[p-16];n[p]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=l^i&(o^l),f=1518500249):(u=i^o^l,f=1859775393):p<60?(u=i&o|l&(i|o),f=2400959708):(u=i^o^l,f=3395469782);const g=(r<<5|r>>>27)+u+c+f+n[p]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e}}function xN(s,e){const t=new TN(s,e);return t.subscribe.bind(t)}class TN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");DN(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=Oc),r.error===void 0&&(r.error=Oc),r.complete===void 0&&(r.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DN(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Oc(){}function oh(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,X(n<s.length,"Surrogate pair missing trail surrogate.");const o=s.charCodeAt(n)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Xl=function(s){let e=0;for(let t=0;t<s.length;t++){const n=s.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(s){return s&&s._delegate?s._delegate:s}class bn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Bl;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SN(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kN(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kN(s){return s===Os?void 0:s}function SN(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new AN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(de||(de={}));const RN={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},PN=de.INFO,jN={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},ON=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=jN[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=PN,this._logHandler=ON,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const LN=(s,e)=>e.some(t=>s instanceof t);let Af,kf;function UN(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MN(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sg=new WeakMap,lu=new WeakMap,Cg=new WeakMap,Lc=new WeakMap,ah=new WeakMap;function FN(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(us(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sg.set(t,s)}).catch(()=>{}),ah.set(e,s),e}function BN(s){if(lu.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});lu.set(s,e)}let cu={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return lu.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Cg.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return us(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function XN(s){cu=s(cu)}function qN(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Uc(this),e,...t);return Cg.set(n,e.sort?e.sort():[e]),us(n)}:MN().includes(s)?function(...e){return s.apply(Uc(this),e),us(Sg.get(this))}:function(...e){return us(s.apply(Uc(this),e))}}function GN(s){return typeof s=="function"?qN(s):(s instanceof IDBTransaction&&BN(s),LN(s,UN())?new Proxy(s,cu):s)}function us(s){if(s instanceof IDBRequest)return FN(s);if(Lc.has(s))return Lc.get(s);const e=GN(s);return e!==s&&(Lc.set(s,e),ah.set(e,s)),e}const Uc=s=>ah.get(s);function $N(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),l=us(o);return n&&o.addEventListener("upgradeneeded",c=>{n(us(o.result),c.oldVersion,c.newVersion,us(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const zN=["get","getKey","getAll","getAllKeys","count"],WN=["put","add","delete","clear"],Mc=new Map;function Sf(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=WN.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||zN.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return Mc.set(e,i),i}XN(s=>({...s,get:(e,t,n)=>Sf(e,t)||s.get(e,t,n),has:(e,t)=>!!Sf(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HN(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function HN(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",Cf="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new ql("@firebase/app"),QN="@firebase/app-compat",YN="@firebase/analytics-compat",JN="@firebase/analytics",ZN="@firebase/app-check-compat",eI="@firebase/app-check",tI="@firebase/auth",nI="@firebase/auth-compat",sI="@firebase/database",rI="@firebase/data-connect",iI="@firebase/database-compat",oI="@firebase/functions",aI="@firebase/functions-compat",lI="@firebase/installations",cI="@firebase/installations-compat",uI="@firebase/messaging",hI="@firebase/messaging-compat",dI="@firebase/performance",fI="@firebase/performance-compat",mI="@firebase/remote-config",pI="@firebase/remote-config-compat",gI="@firebase/storage",_I="@firebase/storage-compat",yI="@firebase/firestore",bI="@firebase/vertexai",EI="@firebase/firestore-compat",vI="firebase",NI="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="[DEFAULT]",II={[uu]:"fire-core",[QN]:"fire-core-compat",[JN]:"fire-analytics",[YN]:"fire-analytics-compat",[eI]:"fire-app-check",[ZN]:"fire-app-check-compat",[tI]:"fire-auth",[nI]:"fire-auth-compat",[sI]:"fire-rtdb",[rI]:"fire-data-connect",[iI]:"fire-rtdb-compat",[oI]:"fire-fn",[aI]:"fire-fn-compat",[lI]:"fire-iid",[cI]:"fire-iid-compat",[uI]:"fire-fcm",[hI]:"fire-fcm-compat",[dI]:"fire-perf",[fI]:"fire-perf-compat",[mI]:"fire-rc",[pI]:"fire-rc-compat",[gI]:"fire-gcs",[_I]:"fire-gcs-compat",[yI]:"fire-fst",[EI]:"fire-fst-compat",[bI]:"fire-vertex","fire-js":"fire-js",[vI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map,wI=new Map,du=new Map;function Rf(s,e){try{s.container.addComponent(e)}catch(t){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Fn(s){const e=s.name;if(du.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,s);for(const t of Za.values())Rf(t,s);for(const t of wI.values())Rf(t,s);return!0}function ui(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Rt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hs=new jo("app","Firebase",xI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=NI;function Rg(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw hs.create("bad-app-name",{appName:String(r)});if(t||(t=xg()),!t)throw hs.create("no-options");const i=Za.get(r);if(i){if(Ja(t,i.options)&&Ja(n,i.config))return i;throw hs.create("duplicate-app",{appName:r})}const o=new CN(r);for(const c of du.values())o.addComponent(c);const l=new TI(t,n,o);return Za.set(r,l),l}function Oo(s=hu){const e=Za.get(s);if(!e&&s===hu&&xg())return Rg();if(!e)throw hs.create("no-app",{appName:s});return e}function It(s,e,t){var n;let r=(n=II[s])!==null&&n!==void 0?n:s;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}Fn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="firebase-heartbeat-database",VI=1,ho="firebase-heartbeat-store";let Fc=null;function Pg(){return Fc||(Fc=$N(DI,VI,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(ho)}catch(t){console.warn(t)}}}}).catch(s=>{throw hs.create("idb-open",{originalErrorMessage:s.message})})),Fc}async function AI(s){try{const t=(await Pg()).transaction(ho),n=await t.objectStore(ho).get(jg(s));return await t.done,n}catch(e){if(e instanceof Nn)Mn.warn(e.message);else{const t=hs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(t.message)}}}async function Pf(s,e){try{const n=(await Pg()).transaction(ho,"readwrite");await n.objectStore(ho).put(e,jg(s)),await n.done}catch(t){if(t instanceof Nn)Mn.warn(t.message);else{const n=hs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(n.message)}}}function jg(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=1024,SI=30;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>SI){const o=jI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Mn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jf(),{heartbeatsToSend:n,unsentEntries:r}=RI(this._heartbeatsCache.heartbeats),i=Ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Mn.warn(t),""}}}function jf(){return new Date().toISOString().substring(0,10)}function RI(s,e=kI){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Of(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Of(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class PI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ag()?yN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Of(s){return Ha(JSON.stringify({version:2,heartbeats:s})).length}function jI(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(s){Fn(new bn("platform-logger",e=>new KN(e),"PRIVATE")),Fn(new bn("heartbeat",e=>new CI(e),"PRIVATE")),It(uu,Cf,s),It(uu,Cf,"esm2017"),It("fire-js","")}OI("");var Lf={};const Uf="@firebase/database",Mf="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og="";function LI(s){Og=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:uo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UI(e)}}catch{}return new MI},$s=Lg("localStorage"),FI=Lg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new ql("@firebase/database"),BI=function(){let s=1;return function(){return s++}}(),Ug=function(s){const e=VN(s),t=new wN;t.update(e);const n=t.digest();return sh.encodeByteArray(n)},Lo=function(...s){let e="";for(let t=0;t<s.length;t++){const n=s[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Lo.apply(null,n):typeof n=="object"?e+=et(n):e+=n,e+=" "}return e};let Qi=null,Ff=!0;const XI=function(s,e){X(!0,"Can't turn on custom loggers persistently."),Or.logLevel=de.VERBOSE,Qi=Or.log.bind(Or)},pt=function(...s){if(Ff===!0&&(Ff=!1,Qi===null&&FI.get("logging_enabled")===!0&&XI()),Qi){const e=Lo.apply(null,s);Qi(e)}},Uo=function(s){return function(...e){pt(s,...e)}},fu=function(...s){const e="FIREBASE INTERNAL ERROR: "+Lo(...s);Or.error(e)},Bn=function(...s){const e=`FIREBASE FATAL ERROR: ${Lo(...s)}`;throw Or.error(e),new Error(e)},wt=function(...s){const e="FIREBASE WARNING: "+Lo(...s);Or.warn(e)},qI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mg=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},GI=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Gr="[MIN_NAME]",Js="[MAX_NAME]",hi=function(s,e){if(s===e)return 0;if(s===Gr||e===Js)return-1;if(e===Gr||s===Js)return 1;{const t=Bf(s),n=Bf(e);return t!==null?n!==null?t-n===0?s.length-e.length:t-n:-1:n!==null?1:s<e?-1:1}},$I=function(s,e){return s===e?0:s<e?-1:1},Pi=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+et(e))},lh=function(s){if(typeof s!="object"||s===null)return et(s);const e=[];for(const n in s)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=et(e[n]),t+=":",t+=lh(s[e[n]]);return t+="}",t},Fg=function(s,e){const t=s.length;if(t<=e)return[s];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(s.substring(r,t)):n.push(s.substring(r,r+e));return n};function Tt(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const Bg=function(s){X(!Mg(s),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,o,l,c;s===0?(i=0,o=0,r=1/s===-1/0?1:0):(r=s<0,s=Math.abs(s),s>=Math.pow(2,1-n)?(l=Math.min(Math.floor(Math.log(s)/Math.LN2),n),i=l+n,o=Math.round(s*Math.pow(2,t-l)-Math.pow(2,t))):(i=0,o=Math.round(s/Math.pow(2,1-n-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},zI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function KI(s,e){let t="Unknown Error";s==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?t="Client doesn't have permission to access the desired data.":s==="unavailable"&&(t="The service is unavailable");const n=new Error(s+" at "+e._path.toString()+": "+t);return n.code=s.toUpperCase(),n}const HI=new RegExp("^-?(0*)\\d{1,10}$"),QI=-2147483648,YI=2147483647,Bf=function(s){if(HI.test(s)){const e=Number(s);if(e>=QI&&e<=YI)return e}return null},di=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw wt("Exception was thrown by user callback.",t),e},Math.floor(0))}},JI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yi=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Rt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class ka{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ka.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="5",Xg="v",qg="s",Gg="r",$g="f",zg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wg="ls",Kg="p",mu="ac",Hg="websocket",Qg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,n,r,i=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function tw(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Jg(s,e,t){X(typeof e=="string","typeof type must == string"),X(typeof t=="object","typeof params must == object");let n;if(e===Hg)n=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===Qg)n=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tw(s)&&(t.ns=s.namespace);const r=[];return Tt(t,(i,o)=>{r.push(i+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.counters_={}}incrementCounter(e,t=1){Wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={},Xc={};function uh(s){const e=s.toString();return Bc[e]||(Bc[e]=new nw),Bc[e]}function sw(s,e){const t=s.toString();return Xc[t]||(Xc[t]=e()),Xc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&di(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="start",iw="close",ow="pLPCommand",aw="pRTLPCB",Zg="id",e_="pw",t_="ser",lw="cb",cw="seg",uw="ts",hw="d",dw="dframe",n_=1870,s_=30,fw=n_-s_,mw=25e3,pw=3e4;class Pr{constructor(e,t,n,r,i,o,l){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uo(e),this.stats_=uh(t),this.urlFn=c=>(this.appCheckToken&&(c[mu]=this.appCheckToken),Jg(t,Qg,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new rw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pw)),GI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hh((...i)=>{const[o,l,c,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xf)this.id=l,this.password=c;else if(o===iw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const n={};n[Xf]="t",n[t_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[lw]=this.scriptTagHolder.uniqueCallbackIdentifier),n[Xg]=ch,this.transportSessionId&&(n[qg]=this.transportSessionId),this.lastSessionId&&(n[Wg]=this.lastSessionId),this.applicationId&&(n[Kg]=this.applicationId),this.appCheckToken&&(n[mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&zg.test(location.hostname)&&(n[Gg]=$g);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pr.forceAllow_=!0}static forceDisallow(){Pr.forceDisallow_=!0}static isAvailable(){return Pr.forceAllow_?!0:!Pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zI()&&!WI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ng(t),r=Fg(n,fw);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[dw]="t",n[Zg]=e,n[e_]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hh{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BI(),window[ow+this.uniqueCallbackIdentifier]=e,window[aw+this.uniqueCallbackIdentifier]=t,this.myIFrame=hh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){pt("frame writing exception"),l.stack&&pt(l.stack),pt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zg]=this.myID,e[e_]=this.myPW,e[t_]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+s_+n.length<=n_;){const o=this.pendingSegs.shift();n=n+"&"+cw+r+"="+o.seg+"&"+uw+r+"="+o.ts+"&"+hw+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(mw)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=16384,_w=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class Jt{constructor(e,t,n,r,i,o,l){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uo(this.connId),this.stats_=uh(t),this.connURL=Jt.connectionURL_(t,o,l,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[Xg]=ch,typeof location<"u"&&location.hostname&&zg.test(location.hostname)&&(o[Gg]=$g),t&&(o[qg]=t),n&&(o[Wg]=n),r&&(o[mu]=r),i&&(o[Kg]=i),Jg(e,Hg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$s.set("previous_websocket_failure",!0);try{let n;_N(),this.mySock=new el(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&el!==null&&!Jt.forceDisallow_}static previouslyFailed(){return $s.isInMemoryStorage||$s.get("previous_websocket_failure")===!0}markConnectionHealthy(){$s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=uo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Fg(t,gw);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_w))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static get ALL_TRANSPORTS(){return[Pr,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Jt&&Jt.isAvailable();let n=t&&!Jt.previouslyFailed();if(e.webSocketOnly&&(t||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Jt];else{const r=this.transports_=[];for(const i of fo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=6e4,bw=5e3,Ew=10*1024,vw=100*1024,qc="t",qf="d",Nw="s",Gf="r",Iw="e",$f="o",zf="a",Wf="n",Kf="p",ww="h";class xw{constructor(e,t,n,r,i,o,l,c,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uo("c:"+this.id+":"),this.transportManager_=new fo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ew?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qc in e){const t=e[qc];t===zf?this.upgradeIfSecondaryHealthy_():t===Gf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$f&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pi("t",e),n=Pi("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pi("t",e),n=Pi("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pi(qc,e);if(qf in e){const n=e[qf];if(t===ww){const r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Wf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Nw?this.onConnectionShutdown_(n):t===Gf?this.onReset_(n):t===Iw?fu("Server Error: "+n):t===$f?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ch!==n&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends i_{static getInstance(){return new tl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ih()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=32,Qf=768;class De{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ee(){return new De("")}function ue(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function gs(s){return s.pieces_.length-s.pieceNum_}function ke(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new De(s.pieces_,e)}function o_(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function Tw(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function a_(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function l_(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new De(e,0)}function Ke(s,e){const t=[];for(let n=s.pieceNum_;n<s.pieces_.length;n++)t.push(s.pieces_[n]);if(e instanceof De)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new De(t,0)}function fe(s){return s.pieceNum_>=s.pieces_.length}function Nt(s,e){const t=ue(s),n=ue(e);if(t===null)return e;if(t===n)return Nt(ke(s),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function dh(s,e){if(gs(s)!==gs(e))return!1;for(let t=s.pieceNum_,n=e.pieceNum_;t<=s.pieces_.length;t++,n++)if(s.pieces_[t]!==e.pieces_[n])return!1;return!0}function Zt(s,e){let t=s.pieceNum_,n=e.pieceNum_;if(gs(s)>gs(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class Dw{constructor(e,t){this.errorPrefix_=t,this.parts_=a_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Xl(this.parts_[n]);c_(this)}}function Vw(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Xl(e),c_(s)}function Aw(s){const e=s.parts_.pop();s.byteLength_-=Xl(e),s.parts_.length>0&&(s.byteLength_-=1)}function c_(s){if(s.byteLength_>Qf)throw new Error(s.errorPrefix_+"has a key path longer than "+Qf+" bytes ("+s.byteLength_+").");if(s.parts_.length>Hf)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hf+") or object contains a cycle "+Ls(s))}function Ls(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends i_{static getInstance(){return new fh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=1e3,kw=60*5*1e3,Yf=30*1e3,Sw=1.3,Cw=3e4,Rw="server_kill",Jf=3;class Un extends r_{constructor(e,t,n,r,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Un.nextPersistentConnectionId_++,this.log_=Uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ji,this.maxReconnectDelay_=kw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(et(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Bl,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Un.warnOnListenWarnings_(c,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Wn(e,"w")){const n=qr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||IN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=NN(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=n,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):fu("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cw&&(this.reconnectDelay_=ji),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Un.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,n())},u=function(p){X(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new xw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,E=>{wt(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rw)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&wt(p),c())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],au(this.interruptReasons_)&&(this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>lh(i)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new De(e).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){pt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Og.replace(/\./g,"-")]=1,ih()?e["framework.cordova"]=1:Dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return au(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new he(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new he(Gr,e),r=new he(Gr,t);return this.compare(n,r)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class u_ extends Gl{static get __EMPTY_NODE(){return _a}static set __EMPTY_NODE(e){_a=e}compare(e,t){return hi(e.name,t.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return he.MIN}maxPost(){return new he(Js,_a)}makePost(e,t){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,_a)}toString(){return".key"}}const Lr=new u_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya=class{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},St=class Gi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??Gi.RED,this.left=r??dn.EMPTY_NODE,this.right=i??dn.EMPTY_NODE}copy(e,t,n,r,i){return new Gi(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return dn.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};St.RED=!0;St.BLACK=!1;class Pw{copy(e,t,n,r,i){return this}insert(e,t,n){return new St(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let dn=class Sa{constructor(e,t=Sa.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Sa(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,St.BLACK,null,null))}remove(e){return new Sa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,St.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ya(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ya(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ya(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ya(this.root_,null,this.comparator_,!0,e)}};dn.EMPTY_NODE=new Pw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(s,e){return hi(s.name,e.name)}function mh(s,e){return hi(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;function Ow(s){pu=s}const h_=function(s){return typeof s=="number"?"number:"+Bg(s):"string:"+s},d_=function(s){if(s.isLeafNode()){const e=s.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wn(e,".sv"),"Priority must be a string or number.")}else X(s===pu||s.isEmpty(),"priority of unexpected type.");X(s===pu||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;class Je{static set __childrenNodeConstructor(e){Zf=e}static get __childrenNodeConstructor(){return Zf}constructor(e,t=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),d_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:ue(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ue(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(X(n!==".priority"||gs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+h_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Bg(this.value_):e+=this.value_,this.lazyHash_=Ug(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Je.VALUE_TYPE_ORDER.indexOf(t),i=Je.VALUE_TYPE_ORDER.indexOf(n);return X(r>=0,"Unknown leaf type: "+t),X(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_,m_;function Lw(s){f_=s}function Uw(s){m_=s}class Mw extends Gl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?hi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Js,new Je("[PRIORITY-POST]",m_))}makePost(e,t){const n=f_(e);return new he(t,new Je("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ge=new Mw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=Math.log(2);class Bw{constructor(e){const t=i=>parseInt(Math.log(i)/Fw,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(s,e,t,n){s.sort(e);const r=function(c,u){const f=u-c;let p,g;if(f===0)return null;if(f===1)return p=s[c],g=t?t(p):p,new St(g,p.node,St.BLACK,null,null);{const E=parseInt(f/2,10)+c,T=r(c,E),S=r(E+1,u);return p=s[E],g=t?t(p):p,new St(g,p.node,St.BLACK,T,S)}},i=function(c){let u=null,f=null,p=s.length;const g=function(T,S){const k=p-T,G=p;p-=T;const F=r(k+1,G),M=s[k],Q=t?t(M):M;E(new St(Q,M.node,S,null,F))},E=function(T){u?(u.left=T,u=T):(f=T,u=T)};for(let T=0;T<c.count;++T){const S=c.nextBitIsOne(),k=Math.pow(2,c.count-(T+1));S?g(k,St.BLACK):(g(k,St.BLACK),g(k,St.RED))}return f},o=new Bw(s.length),l=i(o);return new dn(n||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;const Nr={};class Rn{static get Default(){return X(Nr&&Ge,"ChildrenNode.ts has not been loaded"),Gc=Gc||new Rn({".priority":Nr},{".priority":Ge}),Gc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof dn?t:null}hasIndex(e){return Wn(this.indexSet_,e.toString())}addIndex(e,t){X(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(he.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let l;r?l=nl(n,e.getCompare()):l=Nr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new Rn(f,u)}addToIndexes(e,t){const n=Ya(this.indexes_,(r,i)=>{const o=qr(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),r===Nr)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(he.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),nl(l,o.getCompare())}else return Nr;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new he(e.name,l))),c.insert(e,e.node)}});return new Rn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ya(this.indexes_,r=>{if(r===Nr)return r;{const i=t.get(e.name);return i?r.remove(new he(e.name,i)):r}});return new Rn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class te{static get EMPTY_NODE(){return Oi||(Oi=new te(new dn(mh),null,Rn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&d_(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Oi:t}}getChild(e){const t=ue(e);return t===null?this:this.getImmediateChild(t).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(X(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new he(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Oi:this.priorityNode_;return new te(r,o,i)}}updateChild(e,t){const n=ue(e);if(n===null)return t;{X(ue(e)!==".priority"||gs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ke(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ge,(o,l)=>{t[o]=l.val(e),n++,i&&te.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+h_(this.getPriority().val())+":"),this.forEachChild(Ge,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Ug(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new he(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new he(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new he(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,he.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ge),r=t.getIterator(Ge);let i=n.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Xw extends te{constructor(){super(new dn(mh),te.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Mo=new Xw;Object.defineProperties(he,{MIN:{value:new he(Gr,te.EMPTY_NODE)},MAX:{value:new he(Js,Mo)}});u_.__EMPTY_NODE=te.EMPTY_NODE;Je.__childrenNodeConstructor=te;Ow(Mo);Uw(Mo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=!0;function at(s,e=null){if(s===null)return te.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new Je(t,at(e))}if(!(s instanceof Array)&&qw){const t=[];let n=!1;if(Tt(s,(o,l)=>{if(o.substring(0,1)!=="."){const c=at(l);c.isEmpty()||(n=n||!c.getPriority().isEmpty(),t.push(new he(o,c)))}}),t.length===0)return te.EMPTY_NODE;const i=nl(t,jw,o=>o.name,mh);if(n){const o=nl(t,Ge.getCompare());return new te(i,at(e),new Rn({".priority":o},{".priority":Ge}))}else return new te(i,at(e),Rn.Default)}else{let t=te.EMPTY_NODE;return Tt(s,(n,r)=>{if(Wn(s,n)&&n.substring(0,1)!=="."){const i=at(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(at(e))}}Lw(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Gl{constructor(e){super(),this.indexPath_=e,X(!fe(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?hi(e.name,t.name):i}makePost(e,t){const n=at(e),r=te.EMPTY_NODE.updateChild(this.indexPath_,n);return new he(t,r)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new he(Js,e)}toString(){return a_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends Gl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?hi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,t){const n=at(e);return new he(t,n)}toString(){return".value"}}const zw=new $w;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(s){return{type:"value",snapshotNode:s}}function $r(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function mo(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function po(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function Ww(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){X(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(n.getChild(r))&&l.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(mo(t,l)):X(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(t,n)):o.trackChildChange(po(t,n,l))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ge,(r,i)=>{t.hasChild(r)||n.trackChildChange(mo(r,i))}),t.isLeafNode()||t.forEachChild(Ge,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||n.trackChildChange(po(r,i,o))}else n.trackChildChange($r(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.indexedFilter_=new ph(e.getIndex()),this.index_=e.getIndex(),this.startPost_=go.getStartPost_(e),this.endPost_=go.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new he(t,n))||(n=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=te.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(te.EMPTY_NODE);const i=this;return t.forEachChild(Ge,(o,l)=>{i.matches(new he(o,l))||(r=r.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new go(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new he(t,n))||(n=te.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=te.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(te.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:r=r.updateImmediateChild(l.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,E)=>p(E,g)}else o=this.index_.getCompare();const l=e;X(l.numChildren()===this.limit_,"");const c=new he(t,n),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let g=r.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===t||l.hasChild(g.name));)g=r.getChildAfterChild(this.index_,g,this.reverse_);const E=g==null?1:o(g,c);if(f&&!n.isEmpty()&&E>=0)return i!=null&&i.trackChildChange(po(t,n,p)),l.updateImmediateChild(t,n);{i!=null&&i.trackChildChange(mo(t,p));const S=l.updateImmediateChild(t,te.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange($r(g.name,g.node)),S.updateImmediateChild(g.name,g.node)):S}}else return n.isEmpty()?e:f&&o(u,c)>=0?(i!=null&&(i.trackChildChange(mo(u.name,u.node)),i.trackChildChange($r(t,n))),l.updateImmediateChild(t,n).updateImmediateChild(u.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Js}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ge}copy(){const e=new gh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hw(s){return s.loadsAllData()?new ph(s.getIndex()):s.hasLimit()?new Kw(s):new go(s)}function em(s){const e={};if(s.isDefault())return e;let t;if(s.index_===Ge?t="$priority":s.index_===zw?t="$value":s.index_===Lr?t="$key":(X(s.index_ instanceof Gw,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=et(t),s.startSet_){const n=s.startAfterSet_?"startAfter":"startAt";e[n]=et(s.indexStartValue_),s.startNameSet_&&(e[n]+=","+et(s.indexStartName_))}if(s.endSet_){const n=s.endBeforeSet_?"endBefore":"endAt";e[n]=et(s.indexEndValue_),s.endNameSet_&&(e[n]+=","+et(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function tm(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==Ge&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends r_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Uo("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=sl.getListenId_(e,n),l={};this.listens_[o]=l;const c=em(e._queryParams);this.restRequest_(i+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(i,p,!1,n),qr(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,t){const n=sl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=em(e._queryParams),n=e._path.toString(),r=new Bl;return this.restRequest_(n+".json",t,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(n,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ci(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(n&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=uo(l.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+l.responseText)}n(null,c)}else l.status!==401&&l.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+l.status),n(l.status);n=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{value:null,children:new Map}}function g_(s,e,t){if(fe(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const n=ue(e);s.children.has(n)||s.children.set(n,rl());const r=s.children.get(n);e=ke(e),g_(r,e,t)}}function gu(s,e,t){s.value!==null?t(e,s.value):Yw(s,(n,r)=>{const i=new De(e.toString()+"/"+n);gu(r,i,t)})}function Yw(s,e){s.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Tt(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=10*1e3,Zw=30*1e3,ex=5*60*1e3;class tx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Jw(e);const n=nm+(Zw-nm)*Math.random();Yi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Tt(e,(r,i)=>{i>0&&Wn(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),Yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ex))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function __(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _h(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=en.ACK_USER_WRITE,this.source=__()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new De(e));return new il(Ee(),t,this.revert)}}else return X(ue(this.path)===e,"operationForChild called for unrelated child."),new il(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.source=e,this.path=t,this.type=en.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new _o(this.source,Ee()):new _o(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=en.OVERWRITE}operationForChild(e){return fe(this.path)?new Zs(this.source,Ee(),this.snap.getImmediateChild(e)):new Zs(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=en.MERGE}operationForChild(e){if(fe(this.path)){const t=this.children.subtree(new De(e));return t.isEmpty()?null:t.value?new Zs(this.source,Ee(),t.value):new yo(this.source,Ee(),t)}else return X(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ue(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sx(s,e,t,n){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&s.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Ww(o.childName,o.snapshotNode))}),Li(s,r,"child_removed",e,n,t),Li(s,r,"child_added",e,n,t),Li(s,r,"child_moved",i,n,t),Li(s,r,"child_changed",e,n,t),Li(s,r,"value",e,n,t),r}function Li(s,e,t,n,r,i){const o=n.filter(l=>l.type===t);o.sort((l,c)=>ix(s,l,c)),o.forEach(l=>{const c=rx(s,l,i);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,s.query_))})})}function rx(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function ix(s,e,t){if(e.childName==null||t.childName==null)throw li("Should only compare child_ events.");const n=new he(e.childName,e.snapshotNode),r=new he(t.childName,t.snapshotNode);return s.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(s,e){return{eventCache:s,serverCache:e}}function Ji(s,e,t,n){return $l(new er(e,t,n),s.serverCache)}function y_(s,e,t,n){return $l(s.eventCache,new er(e,t,n))}function _u(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function tr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;const ox=()=>($c||($c=new dn($I)),$c);class Ce{static fromObject(e){let t=new Ce(null);return Tt(e,(n,r)=>{t=t.set(new De(n),r)}),t}constructor(e,t=ox()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ee(),value:this.value};if(fe(e))return null;{const n=ue(e),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ke(e),t);return i!=null?{path:Ke(new De(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const t=ue(e),n=this.children.get(t);return n!==null?n.subtree(ke(e)):new Ce(null)}}set(e,t){if(fe(e))return new Ce(t,this.children);{const n=ue(e),i=(this.children.get(n)||new Ce(null)).set(ke(e),t),o=this.children.insert(n,i);return new Ce(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const t=ue(e),n=this.children.get(t);if(n){const r=n.remove(ke(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(fe(e))return this.value;{const t=ue(e),n=this.children.get(t);return n?n.get(ke(e)):null}}setTree(e,t){if(fe(e))return t;{const n=ue(e),i=(this.children.get(n)||new Ce(null)).setTree(ke(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new Ce(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Ke(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ee(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(fe(e))return null;{const i=ue(e),o=this.children.get(i);return o?o.findOnPath_(ke(e),Ke(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ee(),t)}foreachOnPath_(e,t,n){if(fe(e))return this;{this.value&&n(t,this.value);const r=ue(e),i=this.children.get(r);return i?i.foreachOnPath_(ke(e),Ke(t,r),n):new Ce(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Ke(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new Ce(null))}}function Zi(s,e,t){if(fe(e))return new nn(new Ce(t));{const n=s.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let i=n.value;const o=Nt(r,e);return i=i.updateChild(o,t),new nn(s.writeTree_.set(r,i))}else{const r=new Ce(t),i=s.writeTree_.setTree(e,r);return new nn(i)}}}function sm(s,e,t){let n=s;return Tt(t,(r,i)=>{n=Zi(n,Ke(e,r),i)}),n}function rm(s,e){if(fe(e))return nn.empty();{const t=s.writeTree_.setTree(e,new Ce(null));return new nn(t)}}function yu(s,e){return dr(s,e)!=null}function dr(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(Nt(t.path,e)):null}function im(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ge,(n,r)=>{e.push(new he(n,r))}):s.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new he(n,r.value))}),e}function ds(s,e){if(fe(e))return s;{const t=dr(s,e);return t!=null?new nn(new Ce(t)):new nn(s.writeTree_.subtree(e))}}function bu(s){return s.writeTree_.isEmpty()}function zr(s,e){return b_(Ee(),s.writeTree_,e)}function b_(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let n=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=b_(Ke(s,r),i,t)}),!t.getChild(s).isEmpty()&&n!==null&&(t=t.updateChild(Ke(s,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(s,e){return I_(e,s)}function ax(s,e,t,n,r){X(n>s.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),s.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(s.visibleWrites=Zi(s.visibleWrites,e,t)),s.lastWriteId=n}function lx(s,e){for(let t=0;t<s.allWrites.length;t++){const n=s.allWrites[t];if(n.writeId===e)return n}return null}function cx(s,e){const t=s.allWrites.findIndex(l=>l.writeId===e);X(t>=0,"removeWrite called with nonexistent writeId.");const n=s.allWrites[t];s.allWrites.splice(t,1);let r=n.visible,i=!1,o=s.allWrites.length-1;for(;r&&o>=0;){const l=s.allWrites[o];l.visible&&(o>=t&&ux(l,n.path)?r=!1:Zt(n.path,l.path)&&(i=!0)),o--}if(r){if(i)return hx(s),!0;if(n.snap)s.visibleWrites=rm(s.visibleWrites,n.path);else{const l=n.children;Tt(l,c=>{s.visibleWrites=rm(s.visibleWrites,Ke(n.path,c))})}return!0}else return!1}function ux(s,e){if(s.snap)return Zt(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&Zt(Ke(s.path,t),e))return!0;return!1}function hx(s){s.visibleWrites=E_(s.allWrites,dx,Ee()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function dx(s){return s.visible}function E_(s,e,t){let n=nn.empty();for(let r=0;r<s.length;++r){const i=s[r];if(e(i)){const o=i.path;let l;if(i.snap)Zt(t,o)?(l=Nt(t,o),n=Zi(n,l,i.snap)):Zt(o,t)&&(l=Nt(o,t),n=Zi(n,Ee(),i.snap.getChild(l)));else if(i.children){if(Zt(t,o))l=Nt(t,o),n=sm(n,l,i.children);else if(Zt(o,t))if(l=Nt(o,t),fe(l))n=sm(n,Ee(),i.children);else{const c=qr(i.children,ue(l));if(c){const u=c.getChild(ke(l));n=Zi(n,Ee(),u)}}}else throw li("WriteRecord should have .snap or .children")}}return n}function v_(s,e,t,n,r){if(!n&&!r){const i=dr(s.visibleWrites,e);if(i!=null)return i;{const o=ds(s.visibleWrites,e);if(bu(o))return t;if(t==null&&!yu(o,Ee()))return null;{const l=t||te.EMPTY_NODE;return zr(o,l)}}}else{const i=ds(s.visibleWrites,e);if(!r&&bu(i))return t;if(!r&&t==null&&!yu(i,Ee()))return null;{const o=function(u){return(u.visible||r)&&(!n||!~n.indexOf(u.writeId))&&(Zt(u.path,e)||Zt(e,u.path))},l=E_(s.allWrites,o,e),c=t||te.EMPTY_NODE;return zr(l,c)}}}function fx(s,e,t){let n=te.EMPTY_NODE;const r=dr(s.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ge,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=ds(s.visibleWrites,e);return t.forEachChild(Ge,(o,l)=>{const c=zr(ds(i,new De(o)),l);n=n.updateImmediateChild(o,c)}),im(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=ds(s.visibleWrites,e);return im(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function mx(s,e,t,n,r){X(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,t);if(yu(s.visibleWrites,i))return null;{const o=ds(s.visibleWrites,i);return bu(o)?r.getChild(t):zr(o,r.getChild(t))}}function px(s,e,t,n){const r=Ke(e,t),i=dr(s.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=ds(s.visibleWrites,r);return zr(o,n.getNode().getImmediateChild(t))}else return null}function gx(s,e){return dr(s.visibleWrites,e)}function _x(s,e,t,n,r,i,o){let l;const c=ds(s.visibleWrites,e),u=dr(c,Ee());if(u!=null)l=u;else if(t!=null)l=zr(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=i?l.getReverseIteratorFrom(n,o):l.getIteratorFrom(n,o);let E=g.getNext();for(;E&&f.length<r;)p(E,n)!==0&&f.push(E),E=g.getNext();return f}else return[]}function yx(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function ol(s,e,t,n){return v_(s.writeTree,s.treePath,e,t,n)}function Eh(s,e){return fx(s.writeTree,s.treePath,e)}function om(s,e,t,n){return mx(s.writeTree,s.treePath,e,t,n)}function al(s,e){return gx(s.writeTree,Ke(s.treePath,e))}function bx(s,e,t,n,r,i){return _x(s.writeTree,s.treePath,e,t,n,r,i)}function vh(s,e,t){return px(s.writeTree,s.treePath,e,t)}function N_(s,e){return I_(Ke(s.treePath,e),s.writeTree)}function I_(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;X(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),X(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,po(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,mo(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,$r(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,po(n,e.snapshotNode,r.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const w_=new vx;class Nh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vh(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),i=bx(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(s){return{filter:s}}function Ix(s,e){X(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function wx(s,e,t,n,r){const i=new Ex;let o,l;if(t.type===en.OVERWRITE){const u=t;u.source.fromUser?o=Eu(s,e,u.path,u.snap,n,r,i):(X(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!fe(u.path),o=ll(s,e,u.path,u.snap,n,r,l,i))}else if(t.type===en.MERGE){const u=t;u.source.fromUser?o=Tx(s,e,u.path,u.children,n,r,i):(X(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=vu(s,e,u.path,u.children,n,r,l,i))}else if(t.type===en.ACK_USER_WRITE){const u=t;u.revert?o=Ax(s,e,u.path,n,r,i):o=Dx(s,e,u.path,u.affectedTree,n,r,i)}else if(t.type===en.LISTEN_COMPLETE)o=Vx(s,e,t.path,n,i);else throw li("Unknown operation type: "+t.type);const c=i.getChanges();return xx(e,o,c),{viewCache:o,changes:c}}function xx(s,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=_u(s);(t.length>0||!s.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(p_(_u(e)))}}function x_(s,e,t,n,r,i){const o=e.eventCache;if(al(n,t)!=null)return e;{let l,c;if(fe(t))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tr(e),f=u instanceof te?u:te.EMPTY_NODE,p=Eh(n,f);l=s.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const u=ol(n,tr(e));l=s.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ue(t);if(u===".priority"){X(gs(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=om(n,t,f,c);p!=null?l=s.filter.updatePriority(f,p):l=o.getNode()}else{const f=ke(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=om(n,t,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(f,g):p=o.getNode().getImmediateChild(u)}else p=vh(n,u,e.serverCache);p!=null?l=s.filter.updateChild(o.getNode(),u,p,f,r,i):l=o.getNode()}}return Ji(e,l,o.isFullyInitialized()||fe(t),s.filter.filtersNodes())}}function ll(s,e,t,n,r,i,o,l){const c=e.serverCache;let u;const f=o?s.filter:s.filter.getIndexedFilter();if(fe(t))u=f.updateFullNode(c.getNode(),n,null);else if(f.filtersNodes()&&!c.isFiltered()){const E=c.getNode().updateChild(t,n);u=f.updateFullNode(c.getNode(),E,null)}else{const E=ue(t);if(!c.isCompleteForPath(t)&&gs(t)>1)return e;const T=ke(t),k=c.getNode().getImmediateChild(E).updateChild(T,n);E===".priority"?u=f.updatePriority(c.getNode(),k):u=f.updateChild(c.getNode(),E,k,T,w_,null)}const p=y_(e,u,c.isFullyInitialized()||fe(t),f.filtersNodes()),g=new Nh(r,p,i);return x_(s,p,t,r,g,l)}function Eu(s,e,t,n,r,i,o){const l=e.eventCache;let c,u;const f=new Nh(r,e,i);if(fe(t))u=s.filter.updateFullNode(e.eventCache.getNode(),n,o),c=Ji(e,u,!0,s.filter.filtersNodes());else{const p=ue(t);if(p===".priority")u=s.filter.updatePriority(e.eventCache.getNode(),n),c=Ji(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=ke(t),E=l.getNode().getImmediateChild(p);let T;if(fe(g))T=n;else{const S=f.getCompleteChild(p);S!=null?o_(g)===".priority"&&S.getChild(l_(g)).isEmpty()?T=S:T=S.updateChild(g,n):T=te.EMPTY_NODE}if(E.equals(T))c=e;else{const S=s.filter.updateChild(l.getNode(),p,T,g,f,o);c=Ji(e,S,l.isFullyInitialized(),s.filter.filtersNodes())}}}return c}function am(s,e){return s.eventCache.isCompleteForChild(e)}function Tx(s,e,t,n,r,i,o){let l=e;return n.foreach((c,u)=>{const f=Ke(t,c);am(e,ue(f))&&(l=Eu(s,l,f,u,r,i,o))}),n.foreach((c,u)=>{const f=Ke(t,c);am(e,ue(f))||(l=Eu(s,l,f,u,r,i,o))}),l}function lm(s,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function vu(s,e,t,n,r,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;fe(t)?u=n:u=new Ce(null).setTree(t,n);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const E=e.serverCache.getNode().getImmediateChild(p),T=lm(s,E,g);c=ll(s,c,new De(p),T,r,i,o,l)}}),u.children.inorderTraversal((p,g)=>{const E=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!E){const T=e.serverCache.getNode().getImmediateChild(p),S=lm(s,T,g);c=ll(s,c,new De(p),S,r,i,o,l)}}),c}function Dx(s,e,t,n,r,i,o){if(al(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(n.value!=null){if(fe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ll(s,e,t,c.getNode().getChild(t),r,i,l,o);if(fe(t)){let u=new Ce(null);return c.getNode().forEachChild(Lr,(f,p)=>{u=u.set(new De(f),p)}),vu(s,e,t,u,r,i,l,o)}else return e}else{let u=new Ce(null);return n.foreach((f,p)=>{const g=Ke(t,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),vu(s,e,t,u,r,i,l,o)}}function Vx(s,e,t,n,r){const i=e.serverCache,o=y_(e,i.getNode(),i.isFullyInitialized()||fe(t),i.isFiltered());return x_(s,o,t,n,w_,r)}function Ax(s,e,t,n,r,i){let o;if(al(n,t)!=null)return e;{const l=new Nh(n,e,r),c=e.eventCache.getNode();let u;if(fe(t)||ue(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=ol(n,tr(e));else{const p=e.serverCache.getNode();X(p instanceof te,"serverChildren would be complete if leaf node"),f=Eh(n,p)}f=f,u=s.filter.updateFullNode(c,f,i)}else{const f=ue(t);let p=vh(n,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=s.filter.updateChild(c,f,p,ke(t),l,i):e.eventCache.getNode().hasChild(f)?u=s.filter.updateChild(c,f,te.EMPTY_NODE,ke(t),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ol(n,tr(e)),o.isLeafNode()&&(u=s.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||al(n,Ee())!=null,Ji(e,u,o,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new ph(n.getIndex()),i=Hw(n);this.processor_=Nx(i);const o=t.serverCache,l=t.eventCache,c=r.updateFullNode(te.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(te.EMPTY_NODE,l.getNode(),null),f=new er(c,o.isFullyInitialized(),r.filtersNodes()),p=new er(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=$l(p,f),this.eventGenerator_=new nx(this.query_)}get query(){return this.query_}}function Sx(s){return s.viewCache_.serverCache.getNode()}function Cx(s,e){const t=tr(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!fe(e)&&!t.getImmediateChild(ue(e)).isEmpty())?t.getChild(e):null}function cm(s){return s.eventRegistrations_.length===0}function Rx(s,e){s.eventRegistrations_.push(e)}function um(s,e,t){const n=[];if(t){X(e==null,"A cancel should cancel all event registrations.");const r=s.query._path;s.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let i=0;i<s.eventRegistrations_.length;++i){const o=s.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(s.eventRegistrations_.slice(i+1));break}}s.eventRegistrations_=r}else s.eventRegistrations_=[];return n}function hm(s,e,t,n){e.type===en.MERGE&&e.source.queryId!==null&&(X(tr(s.viewCache_),"We should always have a full cache before handling merges"),X(_u(s.viewCache_),"Missing event cache, even though we have a server cache"));const r=s.viewCache_,i=wx(s.processor_,r,e,t,n);return Ix(s.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=i.viewCache,T_(s,i.changes,i.viewCache.eventCache.getNode(),null)}function Px(s,e){const t=s.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ge,(i,o)=>{n.push($r(i,o))}),t.isFullyInitialized()&&n.push(p_(t.getNode())),T_(s,n,t.getNode(),e)}function T_(s,e,t,n){const r=n?[n]:s.eventRegistrations_;return sx(s.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class jx{constructor(){this.views=new Map}}function Ox(s){X(!cl,"__referenceConstructor has already been defined"),cl=s}function Lx(){return X(cl,"Reference.ts has not been loaded"),cl}function Ux(s){return s.views.size===0}function Ih(s,e,t,n){const r=e.source.queryId;if(r!==null){const i=s.views.get(r);return X(i!=null,"SyncTree gave us an op for an invalid query."),hm(i,e,t,n)}else{let i=[];for(const o of s.views.values())i=i.concat(hm(o,e,t,n));return i}}function Mx(s,e,t,n,r){const i=e._queryIdentifier,o=s.views.get(i);if(!o){let l=ol(t,r?n:null),c=!1;l?c=!0:n instanceof te?(l=Eh(t,n),c=!1):(l=te.EMPTY_NODE,c=!1);const u=$l(new er(l,c,!1),new er(n,r,!1));return new kx(e,u)}return o}function Fx(s,e,t,n,r,i){const o=Mx(s,e,n,r,i);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,o),Rx(o,t),Px(o,t)}function Bx(s,e,t,n){const r=e._queryIdentifier,i=[];let o=[];const l=_s(s);if(r==="default")for(const[c,u]of s.views.entries())o=o.concat(um(u,t,n)),cm(u)&&(s.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=s.views.get(r);c&&(o=o.concat(um(c,t,n)),cm(c)&&(s.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return l&&!_s(s)&&i.push(new(Lx())(e._repo,e._path)),{removed:i,events:o}}function D_(s){const e=[];for(const t of s.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ur(s,e){let t=null;for(const n of s.views.values())t=t||Cx(n,e);return t}function V_(s,e){if(e._queryParams.loadsAllData())return zl(s);{const n=e._queryIdentifier;return s.views.get(n)}}function A_(s,e){return V_(s,e)!=null}function _s(s){return zl(s)!=null}function zl(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;function Xx(s){X(!ul,"__referenceConstructor has already been defined"),ul=s}function qx(){return X(ul,"Reference.ts has not been loaded"),ul}let Gx=1;class dm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=yx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function k_(s,e,t,n,r){return ax(s.pendingWriteTree_,e,t,n,r),r?Fo(s,new Zs(__(),e,t)):[]}function zs(s,e,t=!1){const n=lx(s.pendingWriteTree_,e);if(cx(s.pendingWriteTree_,e)){let i=new Ce(null);return n.snap!=null?i=i.set(Ee(),!0):Tt(n.children,o=>{i=i.set(new De(o),!0)}),Fo(s,new il(n.path,i,t))}else return[]}function Wl(s,e,t){return Fo(s,new Zs(_h(),e,t))}function $x(s,e,t){const n=Ce.fromObject(t);return Fo(s,new yo(_h(),e,n))}function zx(s,e){return Fo(s,new _o(_h(),e))}function Wx(s,e,t){const n=xh(s,t);if(n){const r=Th(n),i=r.path,o=r.queryId,l=Nt(i,e),c=new _o(yh(o),l);return Dh(s,i,c)}else return[]}function Nu(s,e,t,n,r=!1){const i=e._path,o=s.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||A_(o,e))){const c=Bx(o,e,t,n);Ux(o)&&(s.syncPointTree_=s.syncPointTree_.remove(i));const u=c.removed;if(l=c.events,!r){const f=u.findIndex(g=>g._queryParams.loadsAllData())!==-1,p=s.syncPointTree_.findOnPath(i,(g,E)=>_s(E));if(f&&!p){const g=s.syncPointTree_.subtree(i);if(!g.isEmpty()){const E=Qx(g);for(let T=0;T<E.length;++T){const S=E[T],k=S.query,G=R_(s,S);s.listenProvider_.startListening(eo(k),hl(s,k),G.hashFn,G.onComplete)}}}!p&&u.length>0&&!n&&(f?s.listenProvider_.stopListening(eo(e),null):u.forEach(g=>{const E=s.queryToTagMap.get(Kl(g));s.listenProvider_.stopListening(eo(g),E)}))}Yx(s,u)}return l}function Kx(s,e,t,n){const r=xh(s,n);if(r!=null){const i=Th(r),o=i.path,l=i.queryId,c=Nt(o,e),u=new Zs(yh(l),c,t);return Dh(s,o,u)}else return[]}function Hx(s,e,t,n){const r=xh(s,n);if(r){const i=Th(r),o=i.path,l=i.queryId,c=Nt(o,e),u=Ce.fromObject(t),f=new yo(yh(l),c,u);return Dh(s,o,f)}else return[]}function fm(s,e,t,n=!1){const r=e._path;let i=null,o=!1;s.syncPointTree_.foreachOnPath(r,(g,E)=>{const T=Nt(g,r);i=i||Ur(E,T),o=o||_s(E)});let l=s.syncPointTree_.get(r);l?(o=o||_s(l),i=i||Ur(l,Ee())):(l=new jx,s.syncPointTree_=s.syncPointTree_.set(r,l));let c;i!=null?c=!0:(c=!1,i=te.EMPTY_NODE,s.syncPointTree_.subtree(r).foreachChild((E,T)=>{const S=Ur(T,Ee());S&&(i=i.updateImmediateChild(E,S))}));const u=A_(l,e);if(!u&&!e._queryParams.loadsAllData()){const g=Kl(e);X(!s.queryToTagMap.has(g),"View does not exist, but we have a tag");const E=Jx();s.queryToTagMap.set(g,E),s.tagToQueryMap.set(E,g)}const f=bh(s.pendingWriteTree_,r);let p=Fx(l,e,t,f,i,c);if(!u&&!o&&!n){const g=V_(l,e);p=p.concat(Zx(s,e,g))}return p}function wh(s,e,t){const r=s.pendingWriteTree_,i=s.syncPointTree_.findOnPath(e,(o,l)=>{const c=Nt(o,e),u=Ur(l,c);if(u)return u});return v_(r,e,i,t,!0)}function Fo(s,e){return S_(e,s.syncPointTree_,null,bh(s.pendingWriteTree_,Ee()))}function S_(s,e,t,n){if(fe(s.path))return C_(s,e,t,n);{const r=e.get(Ee());t==null&&r!=null&&(t=Ur(r,Ee()));let i=[];const o=ue(s.path),l=s.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,f=N_(n,o);i=i.concat(S_(l,c,u,f))}return r&&(i=i.concat(Ih(r,s,n,t))),i}}function C_(s,e,t,n){const r=e.get(Ee());t==null&&r!=null&&(t=Ur(r,Ee()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=N_(n,o),f=s.operationForChild(o);f&&(i=i.concat(C_(f,l,c,u)))}),r&&(i=i.concat(Ih(r,s,n,t))),i}function R_(s,e){const t=e.query,n=hl(s,t);return{hashFn:()=>(Sx(e)||te.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?Wx(s,t._path,n):zx(s,t._path);{const i=KI(r,t);return Nu(s,t,null,i)}}}}function hl(s,e){const t=Kl(e);return s.queryToTagMap.get(t)}function Kl(s){return s._path.toString()+"$"+s._queryIdentifier}function xh(s,e){return s.tagToQueryMap.get(e)}function Th(s){const e=s.indexOf("$");return X(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new De(s.substr(0,e))}}function Dh(s,e,t){const n=s.syncPointTree_.get(e);X(n,"Missing sync point for query tag that we're tracking");const r=bh(s.pendingWriteTree_,e);return Ih(n,t,r,null)}function Qx(s){return s.fold((e,t,n)=>{if(t&&_s(t))return[zl(t)];{let r=[];return t&&(r=D_(t)),Tt(n,(i,o)=>{r=r.concat(o)}),r}})}function eo(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(qx())(s._repo,s._path):s}function Yx(s,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=Kl(n),i=s.queryToTagMap.get(r);s.queryToTagMap.delete(r),s.tagToQueryMap.delete(i)}}}function Jx(){return Gx++}function Zx(s,e,t){const n=e._path,r=hl(s,e),i=R_(s,t),o=s.listenProvider_.startListening(eo(e),r,i.hashFn,i.onComplete),l=s.syncPointTree_.subtree(n);if(r)X(!_s(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,f,p)=>{if(!fe(u)&&f&&_s(f))return[zl(f).query];{let g=[];return f&&(g=g.concat(D_(f).map(E=>E.query))),Tt(p,(E,T)=>{g=g.concat(T)}),g}});for(let u=0;u<c.length;++u){const f=c[u];s.listenProvider_.stopListening(eo(f),hl(s,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vh(t)}node(){return this.node_}}class Ah{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ke(this.path_,e);return new Ah(this.syncTree_,t)}node(){return wh(this.syncTree_,this.path_)}}const eT=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},mm=function(s,e,t){if(!s||typeof s!="object")return s;if(X(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return tT(s[".sv"],e,t);if(typeof s[".sv"]=="object")return nT(s[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},tT=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:X(!1,"Unexpected server value: "+s)}},nT=function(s,e,t){s.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const n=s.increment;typeof n!="number"&&X(!1,"Unexpected increment value: "+n);const r=e.node();if(X(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},sT=function(s,e,t,n){return kh(e,new Ah(t,s),n)},P_=function(s,e,t){return kh(s,new Vh(e),t)};function kh(s,e,t){const n=s.getPriority().val(),r=mm(n,e.getImmediateChild(".priority"),t);let i;if(s.isLeafNode()){const o=s,l=mm(o.getValue(),e,t);return l!==o.getValue()||r!==o.getPriority().val()?new Je(l,at(r)):s}else{const o=s;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Je(r))),o.forEachChild(Ge,(l,c)=>{const u=kh(c,e.getImmediateChild(l),t);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ch(s,e){let t=e instanceof De?e:new De(e),n=s,r=ue(t);for(;r!==null;){const i=qr(n.node.children,r)||{children:{},childCount:0};n=new Sh(r,n,i),t=ke(t),r=ue(t)}return n}function fi(s){return s.node.value}function j_(s,e){s.node.value=e,Iu(s)}function O_(s){return s.node.childCount>0}function rT(s){return fi(s)===void 0&&!O_(s)}function Hl(s,e){Tt(s.node.children,(t,n)=>{e(new Sh(t,s,n))})}function L_(s,e,t,n){t&&e(s),Hl(s,r=>{L_(r,e,!0)})}function iT(s,e,t){let n=s.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Bo(s){return new De(s.parent===null?s.name:Bo(s.parent)+"/"+s.name)}function Iu(s){s.parent!==null&&oT(s.parent,s.name,s)}function oT(s,e,t){const n=rT(t),r=Wn(s.node.children,e);n&&r?(delete s.node.children[e],s.node.childCount--,Iu(s)):!n&&!r&&(s.node.children[e]=t.node,s.node.childCount++,Iu(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=/[\[\].#$\/\u0000-\u001F\u007F]/,lT=/[\[\].#$\u0000-\u001F\u007F]/,zc=10*1024*1024,U_=function(s){return typeof s=="string"&&s.length!==0&&!aT.test(s)},M_=function(s){return typeof s=="string"&&s.length!==0&&!lT.test(s)},cT=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),M_(s)},uT=function(s,e,t,n){Rh(oh(s,"value"),e,t)},Rh=function(s,e,t){const n=t instanceof De?new Dw(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+Ls(n));if(typeof e=="function")throw new Error(s+"contains a function "+Ls(n)+" with contents = "+e.toString());if(Mg(e))throw new Error(s+"contains "+e.toString()+" "+Ls(n));if(typeof e=="string"&&e.length>zc/3&&Xl(e)>zc)throw new Error(s+"contains a string greater than "+zc+" utf8 bytes "+Ls(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Tt(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!U_(o)))throw new Error(s+" contains an invalid key ("+o+") "+Ls(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vw(n,o),Rh(s,l,n),Aw(n)}),r&&i)throw new Error(s+' contains ".value" child '+Ls(n)+" in addition to actual children.")}},F_=function(s,e,t,n){if(!M_(t))throw new Error(oh(s,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hT=function(s,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),F_(s,e,t)},B_=function(s,e){if(ue(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},dT=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!U_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!cT(t))throw new Error(oh(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ph(s,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],i=r.getPath();t!==null&&!dh(i,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&s.eventLists_.push(t)}function X_(s,e,t){Ph(s,t),q_(s,n=>dh(n,e))}function Xn(s,e,t){Ph(s,t),q_(s,n=>Zt(n,e)||Zt(e,n))}function q_(s,e){s.recursionDepth_++;let t=!0;for(let n=0;n<s.eventLists_.length;n++){const r=s.eventLists_[n];if(r){const i=r.path;e(i)?(mT(s.eventLists_[n]),s.eventLists_[n]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function mT(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const n=t.getEventRunner();Qi&&pt("event: "+t.toString()),di(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="repo_interrupt",gT=25;class _T{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rl(),this.transactionQueueTree_=new Sh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yT(s,e,t){if(s.stats_=uh(s.repoInfo_),s.forceRestClient_||JI())s.server_=new sl(s.repoInfo_,(n,r,i,o)=>{pm(s,n,r,i,o)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>gm(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}s.persistentConnection_=new Un(s.repoInfo_,e,(n,r,i,o)=>{pm(s,n,r,i,o)},n=>{gm(s,n)},n=>{ET(s,n)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(n=>{s.server_.refreshAuthToken(n)}),s.appCheckProvider_.addTokenChangeListener(n=>{s.server_.refreshAppCheckToken(n.token)}),s.statsReporter_=sw(s.repoInfo_,()=>new tx(s.stats_,s.server_)),s.infoData_=new Qw,s.infoSyncTree_=new dm({startListening:(n,r,i,o)=>{let l=[];const c=s.infoData_.getNode(n._path);return c.isEmpty()||(l=Wl(s.infoSyncTree_,n._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Oh(s,"connected",!1),s.serverSyncTree_=new dm({startListening:(n,r,i,o)=>(s.server_.listen(n,i,r,(l,c)=>{const u=o(l,c);Xn(s.eventQueue_,n._path,u)}),[]),stopListening:(n,r)=>{s.server_.unlisten(n,r)}})}function bT(s){const t=s.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jh(s){return eT({timestamp:bT(s)})}function pm(s,e,t,n,r){s.dataUpdateCount++;const i=new De(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const c=Ya(t,u=>at(u));o=Hx(s.serverSyncTree_,i,c,r)}else{const c=at(t);o=Kx(s.serverSyncTree_,i,c,r)}else if(n){const c=Ya(t,u=>at(u));o=$x(s.serverSyncTree_,i,c)}else{const c=at(t);o=Wl(s.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=Ql(s,i)),Xn(s.eventQueue_,l,o)}function gm(s,e){Oh(s,"connected",e),e===!1&&NT(s)}function ET(s,e){Tt(e,(t,n)=>{Oh(s,t,n)})}function Oh(s,e,t){const n=new De("/.info/"+e),r=at(t);s.infoData_.updateSnapshot(n,r);const i=Wl(s.infoSyncTree_,n,r);Xn(s.eventQueue_,n,i)}function G_(s){return s.nextWriteId_++}function vT(s,e,t,n,r){Lh(s,"set",{path:e.toString(),value:t,priority:n});const i=jh(s),o=at(t,n),l=wh(s.serverSyncTree_,e),c=P_(o,l,i),u=G_(s),f=k_(s.serverSyncTree_,e,c,u,!0);Ph(s.eventQueue_,f),s.server_.put(e.toString(),o.val(!0),(g,E)=>{const T=g==="ok";T||wt("set at "+e+" failed: "+g);const S=zs(s.serverSyncTree_,u,!T);Xn(s.eventQueue_,e,S),TT(s,r,g,E)});const p=H_(s,e);Ql(s,p),Xn(s.eventQueue_,p,[])}function NT(s){Lh(s,"onDisconnectEvents");const e=jh(s),t=rl();gu(s.onDisconnect_,Ee(),(r,i)=>{const o=sT(r,i,s.serverSyncTree_,e);g_(t,r,o)});let n=[];gu(t,Ee(),(r,i)=>{n=n.concat(Wl(s.serverSyncTree_,r,i));const o=H_(s,r);Ql(s,o)}),s.onDisconnect_=rl(),Xn(s.eventQueue_,Ee(),n)}function IT(s,e,t){let n;ue(e._path)===".info"?n=fm(s.infoSyncTree_,e,t):n=fm(s.serverSyncTree_,e,t),X_(s.eventQueue_,e._path,n)}function wT(s,e,t){let n;ue(e._path)===".info"?n=Nu(s.infoSyncTree_,e,t):n=Nu(s.serverSyncTree_,e,t),X_(s.eventQueue_,e._path,n)}function xT(s){s.persistentConnection_&&s.persistentConnection_.interrupt(pT)}function Lh(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),pt(t,...e)}function TT(s,e,t,n){e&&di(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const o=new Error(i);o.code=r,e(o)}})}function $_(s,e,t){return wh(s.serverSyncTree_,e,t)||te.EMPTY_NODE}function Uh(s,e=s.transactionQueueTree_){if(e||Yl(s,e),fi(e)){const t=W_(s,e);X(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&DT(s,Bo(e),t)}else O_(e)&&Hl(e,t=>{Uh(s,t)})}function DT(s,e,t){const n=t.map(u=>u.currentWriteId),r=$_(s,e,n);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const f=t[u];X(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Nt(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;s.server_.put(c.toString(),l,u=>{Lh(s,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(zs(s.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();Yl(s,Ch(s.transactionQueueTree_,e)),Uh(s,s.transactionQueueTree_),Xn(s.eventQueue_,e,f);for(let g=0;g<p.length;g++)di(p[g])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{wt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Ql(s,e)}},o)}function Ql(s,e){const t=z_(s,e),n=Bo(t),r=W_(s,t);return VT(s,r,n),n}function VT(s,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Nt(t,c.path);let f=!1,p;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,r=r.concat(zs(s.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=gT)f=!0,p="maxretry",r=r.concat(zs(s.serverSyncTree_,c.currentWriteId,!0));else{const g=$_(s,c.path,o);c.currentInputSnapshot=g;const E=e[l].update(g.val());if(E!==void 0){Rh("transaction failed: Data returned ",E,c.path);let T=at(E);typeof E=="object"&&E!=null&&Wn(E,".priority")||(T=T.updatePriority(g.getPriority()));const k=c.currentWriteId,G=jh(s),F=P_(T,g,G);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=F,c.currentWriteId=G_(s),o.splice(o.indexOf(k),1),r=r.concat(k_(s.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),r=r.concat(zs(s.serverSyncTree_,k,!0))}else f=!0,p="nodata",r=r.concat(zs(s.serverSyncTree_,c.currentWriteId,!0))}Xn(s.eventQueue_,t,r),r=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?n.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):n.push(()=>e[l].onComplete(new Error(p),!1,null))))}Yl(s,s.transactionQueueTree_);for(let l=0;l<n.length;l++)di(n[l]);Uh(s,s.transactionQueueTree_)}function z_(s,e){let t,n=s.transactionQueueTree_;for(t=ue(e);t!==null&&fi(n)===void 0;)n=Ch(n,t),e=ke(e),t=ue(e);return n}function W_(s,e){const t=[];return K_(s,e,t),t.sort((n,r)=>n.order-r.order),t}function K_(s,e,t){const n=fi(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);Hl(e,r=>{K_(s,r,t)})}function Yl(s,e){const t=fi(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,j_(e,t.length>0?t:void 0)}Hl(e,n=>{Yl(s,n)})}function H_(s,e){const t=Bo(z_(s,e)),n=Ch(s.transactionQueueTree_,e);return iT(n,r=>{Wc(s,r)}),Wc(s,n),L_(n,r=>{Wc(s,r)}),t}function Wc(s,e){const t=fi(e);if(t){const n=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(X(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(zs(s.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?j_(e,void 0):t.length=i+1,Xn(s.eventQueue_,Bo(e),r);for(let o=0;o<n.length;o++)di(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(s){let e="";const t=s.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function kT(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):wt(`Invalid query segment '${t}' in query '${s}'`)}return e}const _m=function(s,e){const t=ST(s),n=t.namespace;t.domain==="firebase.com"&&Bn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qI();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Yg(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new De(t.pathString)}},ST=function(s){let e="",t="",n="",r="",i="",o=!0,l="https",c=443;if(typeof s=="string"){let u=s.indexOf("//");u>=0&&(l=s.substring(0,u-1),s=s.substring(u+2));let f=s.indexOf("/");f===-1&&(f=s.length);let p=s.indexOf("?");p===-1&&(p=s.length),e=s.substring(0,Math.min(f,p)),f<p&&(r=AT(s.substring(f,p)));const g=kT(s.substring(Math.min(s.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const E=e.slice(0,u);if(E.toLowerCase()==="localhost")t="localhost";else if(E.split(".").length<=2)t=E;else{const T=e.indexOf(".");n=e.substring(0,T).toLowerCase(),t=e.substring(T+1),i=n}"ns"in g&&(i=g.ns)}return{host:e,port:c,domain:t,subdomain:n,secure:o,scheme:l,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class RT{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return X(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return fe(this._path)?null:o_(this._path)}get ref(){return new Is(this._repo,this._path)}get _queryIdentifier(){const e=tm(this._queryParams),t=lh(e);return t==="{}"?"default":t}get _queryObject(){return tm(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Mh))return!1;const t=this._repo===e._repo,n=dh(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tw(this._path)}}class Is extends Mh{constructor(e,t){super(e,t,new gh,!1)}get parent(){const e=l_(this._path);return e===null?null:new Is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class dl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new De(e),n=wu(this.ref,e);return new dl(this._node.getChild(t),n,Ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new dl(r,wu(this.ref,n),Ge)))}hasChild(e){const t=new De(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ui(s,e){return s=$e(s),s._checkNotDeleted("ref"),e!==void 0?wu(s._root,e):s._root}function wu(s,e){return s=$e(s),ue(s._path)===null?hT("child","path",e):F_("child","path",e),new Is(s._repo,Ke(s._path,e))}function ym(s){return B_("remove",s._path),Ca(s,null)}function Ca(s,e){s=$e(s),B_("set",s._path),uT("set",e,s._path);const t=new Bl;return vT(s._repo,s._path,e,null,t.wrapCallback(()=>{})),t.promise}class Fh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new CT("value",this,new dl(e.snapshotNode,new Is(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new RT(this,e,t):null}matches(e){return e instanceof Fh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jT(s,e,t,n,r){const i=new PT(t,void 0),o=new Fh(i);return IT(s._repo,s,o),()=>wT(s._repo,s,o)}function bm(s,e,t,n){return jT(s,"value",e)}Ox(Is);Xx(Is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="FIREBASE_DATABASE_EMULATOR_HOST",xu={};let LT=!1;function UT(s,e,t,n){s.repoInfo_=new Yg(`${e}:${t}`,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0),n&&(s.authTokenProvider_=n)}function MT(s,e,t,n,r){let i=n||s.options.databaseURL;i===void 0&&(s.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",s.options.projectId),i=`${s.options.projectId}-default-rtdb.firebaseio.com`);let o=_m(i,r),l=o.repoInfo,c;typeof process<"u"&&Lf&&(c=Lf[OT]),c?(i=`http://${c}?ns=${l.namespace}`,o=_m(i,r),l=o.repoInfo):o.repoInfo.secure;const u=new ew(s.name,s.options,e);dT("Invalid Firebase Database URL",o),fe(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=BT(l,s,u,new ZI(s,t));return new XT(f,s)}function FT(s,e){const t=xu[e];(!t||t[s.key]!==s)&&Bn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),xT(s),delete t[s.key]}function BT(s,e,t,n){let r=xu[e.name];r||(r={},xu[e.name]=r);let i=r[s.toURLString()];return i&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new _T(s,LT,t,n),r[s.toURLString()]=i,i}class XT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Is(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function qT(s=Oo(),e){const t=ui(s,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=Fl("database");n&&GT(t,...n)}return t}function GT(s,e,t,n={}){s=$e(s),s._checkNotDeleted("useEmulator"),s._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const r=s._repoInternal;let i;if(r.repoInfo_.nodeAdmin)n.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new ka(ka.OWNER);else if(n.mockUserToken){const o=typeof n.mockUserToken=="string"?n.mockUserToken:rh(n.mockUserToken,s.app.options.projectId);i=new ka(o)}UT(r,e,t,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(s){LI(Ns),Fn(new bn("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return MT(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),It(Uf,Mf,s),It(Uf,Mf,"esm2017")}Un.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Un.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};$T();function Bh(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(s);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(s,n[r])&&(t[n[r]]=s[n[r]]);return t}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=Q_,Y_=new jo("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new ql("@firebase/auth");function WT(s,...e){fl.logLevel<=de.WARN&&fl.warn(`Auth (${Ns}): ${s}`,...e)}function Ra(s,...e){fl.logLevel<=de.ERROR&&fl.error(`Auth (${Ns}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(s,...e){throw Xh(s,...e)}function pn(s,...e){return Xh(s,...e)}function J_(s,e,t){const n=Object.assign(Object.assign({},zT()),{[e]:t});return new jo("auth","Firebase",n).create(e,{appName:s.name})}function Ks(s){return J_(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xh(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Y_.create(s,...e)}function ne(s,e,...t){if(!s)throw Xh(e,...t)}function Pn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Ra(e),new Error(e)}function Gn(s,e){s||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function KT(){return Em()==="http:"||Em()==="https:"}function Em(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KT()||pN()||"connection"in navigator)?navigator.onLine:!0}function QT(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gn(t>e,"Short delay should be less than long delay!"),this.isMobile=ih()||Dg()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(s,e){Gn(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new Xo(3e4,6e4);function Gh(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function mi(s,e,t,n,r={}){return ey(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=ci(Object.assign({key:s.config.apiKey},o)).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const u=Object.assign({method:e,headers:c},i);return mN()||(u.referrerPolicy="no-referrer"),Z_.fetch()(ty(s,s.config.apiHost,t,l),u)})}async function ey(s,e,t){s._canInitEmulator=!1;const n=Object.assign(Object.assign({},YT),e);try{const r=new eD(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ba(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ba(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw ba(s,"user-disabled",o);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw J_(s,f,u);qn(s,f)}}catch(r){if(r instanceof Nn)throw r;qn(s,"network-request-failed",{message:String(r)})}}async function ZT(s,e,t,n,r={}){const i=await mi(s,e,t,n,r);return"mfaPendingCredential"in i&&qn(s,"multi-factor-auth-required",{_serverResponse:i}),i}function ty(s,e,t,n){const r=`${e}${t}?${n}`;return s.config.emulator?qh(s.config,r):`${s.config.apiScheme}://${r}`}class eD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(pn(this.auth,"network-request-failed")),JT.get())})}}function ba(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=pn(s,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(s,e){return mi(s,"POST","/v1/accounts:delete",e)}async function ny(s,e){return mi(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nD(s,e=!1){const t=$e(s),n=await t.getIdToken(e),r=$h(n);ne(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:to(Kc(r.auth_time)),issuedAtTime:to(Kc(r.iat)),expirationTime:to(Kc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kc(s){return Number(s)*1e3}function $h(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qa(t);return r?JSON.parse(r):(Ra("Failed to decode base64 JWT payload"),null)}catch(r){return Ra("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function vm(s){const e=$h(s);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Nn&&sD(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function sD({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(s){var e;const t=s.auth,n=await s.getIdToken(),r=await bo(s,ny(t,{idToken:n}));ne(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];s._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sy(i.providerUserInfo):[],l=oD(s.providerData,o),c=s.isAnonymous,u=!(s.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(s,p)}async function iD(s){const e=$e(s);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oD(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function sy(s){return s.map(e=>{var{providerId:t}=e,n=Bh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(s,e){const t=await ey(s,{},async()=>{const n=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=ty(s,r,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lD(s,e){return mi(s,"POST","/v2/accounts:revokeToken",Gh(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=vm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await aD(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Mr;return n&&(ne(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(s,e){ne(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Bh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Du(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await bo(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nD(this,e)}reload(){return iD(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ml(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Ks(this.auth));const e=await this.getIdToken();return await bo(this,tD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,l,c,u,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,S=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,G=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:Q,isAnonymous:re,providerData:Y,stsTokenManager:I}=t;ne(M&&I,e,"internal-error");const y=Mr.fromJSON(this.name,I);ne(typeof M=="string",e,"internal-error"),es(p,e.name),es(g,e.name),ne(typeof Q=="boolean",e,"internal-error"),ne(typeof re=="boolean",e,"internal-error"),es(E,e.name),es(T,e.name),es(S,e.name),es(k,e.name),es(G,e.name),es(F,e.name);const v=new jn({uid:M,auth:e,email:g,emailVerified:Q,displayName:p,isAnonymous:re,photoURL:T,phoneNumber:E,tenantId:S,stsTokenManager:y,createdAt:G,lastLoginAt:F});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(w=>Object.assign({},w))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,n=!1){const r=new Mr;r.updateFromServerResponse(t);const i=new jn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ml(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];ne(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?sy(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Mr;l.updateFromIdToken(n);const c=new jn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Du(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;function On(s){Gn(s instanceof Function,"Expected a class definition");let e=Nm.get(s);return e?(Gn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Nm.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ry.type="NONE";const Im=ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(s,e,t){return`firebase:${s}:${e}:${t}`}class Fr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Pa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Fr(On(Im),e,n);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||On(Im);const o=Pa(n,e.config.apiKey,e.name);let l=null;for(const u of t)try{const f=await u._get(o);if(f){const p=jn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fr(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uy(e))return"Blackberry";if(hy(e))return"Webos";if(oy(e))return"Safari";if((e.includes("chrome/")||ay(e))&&!e.includes("edge/"))return"Chrome";if(cy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function iy(s=He()){return/firefox\//i.test(s)}function oy(s=He()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ay(s=He()){return/crios\//i.test(s)}function ly(s=He()){return/iemobile/i.test(s)}function cy(s=He()){return/android/i.test(s)}function uy(s=He()){return/blackberry/i.test(s)}function hy(s=He()){return/webos/i.test(s)}function zh(s=He()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function cD(s=He()){var e;return zh(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uD(){return gN()&&document.documentMode===10}function dy(s=He()){return zh(s)||cy(s)||hy(s)||uy(s)||/windows phone/i.test(s)||ly(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(s,e=[]){let t;switch(s){case"Browser":t=wm(He());break;case"Worker":t=`${wm(He())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(s,e={}){return mi(s,"GET","/v2/passwordPolicy",Gh(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=6;class mD{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:fD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xm(this),this.idTokenSubscription=new xm(this),this.beforeStateQueue=new hD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=On(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ny(this,{idToken:e}),n=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(Ks(this));const t=e?$e(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Ks(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(Ks(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dD(this),t=new mD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await lD(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&On(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[On(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&WT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wh(s){return $e(s)}class xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=xN(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gD(s){Kh=s}function _D(s){return Kh.loadJS(s)}function yD(){return Kh.gapiScript}function bD(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(s,e){const t=ui(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ja(i,e??{}))return r;qn(r,"already-initialized")}return t.initialize({options:e})}function vD(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(On);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ND(s,e,t){const n=Wh(s);ne(n._canInitEmulator,n,"emulator-config-failed"),ne(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=my(e),{host:o,port:l}=ID(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${i}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),wD()}function my(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function ID(s){const e=my(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:Tm(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Tm(o)}}}function Tm(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function wD(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,t){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(s,e){return ZT(s,"POST","/v1/accounts:signInWithIdp",Gh(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="http://localhost";class nr extends py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Bh(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new nr(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Br(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Br(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Br(e,t)}buildRequest(){const e={requestUri:xD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ci(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends gy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends qo{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return is.credential(t,n)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends qo{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends qo{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return as.credential(t,n)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await jn._fromIdTokenResponse(e,n,r),o=Dm(n);return new Wr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Dm(n);return new Wr({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Dm(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Nn{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new pl(e,t,n,r)}}function _y(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(s,i,e,n):i})}async function TD(s,e,t=!1){const n=await bo(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Wr._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(s,e,t=!1){const{auth:n}=s;if(Rt(n.app))return Promise.reject(Ks(n));const r="reauthenticate";try{const i=await bo(s,_y(n,r,e,s),t);ne(i.idToken,n,"internal-error");const o=$h(i.idToken);ne(o,n,"internal-error");const{sub:l}=o;return ne(s.uid===l,n,"user-mismatch"),Wr._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qn(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(s,e,t=!1){if(Rt(s.app))return Promise.reject(Ks(s));const n="signIn",r=await _y(s,n,e),i=await Wr._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}function AD(s,e,t,n){return $e(s).onIdTokenChanged(e,t,n)}function kD(s,e,t){return $e(s).beforeAuthStateChanged(e,t)}function yy(s,e,t,n){return $e(s).onAuthStateChanged(e,t,n)}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=1e3,CD=10;class Ey extends by{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);uD()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,CD):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},SD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ey.type="LOCAL";const RD=Ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends by{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vy.type="SESSION";const Ny=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Jl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await PD(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Hh("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function OD(s){gn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function LD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UD(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function MD(){return Iy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebaseLocalStorageDb",FD=1,_l="firebaseLocalStorage",xy="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zl(s,e){return s.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function BD(){const s=indexedDB.deleteDatabase(wy);return new Go(s).toPromise()}function Vu(){const s=indexedDB.open(wy,FD);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(_l,{keyPath:xy})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(_l)?e(n):(n.close(),await BD(),e(await Vu()))})})}async function Vm(s,e,t){const n=Zl(s,!0).put({[xy]:e,value:t});return new Go(n).toPromise()}async function XD(s,e){const t=Zl(s,!1).get(e),n=await new Go(t).toPromise();return n===void 0?null:n.value}function Am(s,e){const t=Zl(s,!0).delete(e);return new Go(t).toPromise()}const qD=800,GD=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>GD)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(MD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await LD(),!this.activeServiceWorker)return;this.sender=new jD(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await Vm(e,gl,"1"),await Am(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>XD(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Am(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Zl(r,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const $D=Ty;new Xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(s,e){return e?On(e):(ne(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function WD(s){return VD(s.auth,new Qh(s),s.bypassAuthState)}function KD(s){const{auth:e,user:t}=s;return ne(t,e,"internal-error"),DD(t,new Qh(s),s.bypassAuthState)}async function HD(s){const{auth:e,user:t}=s;return ne(t,e,"internal-error"),TD(t,new Qh(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WD;case"linkViaPopup":case"linkViaRedirect":return HD;case"reauthViaPopup":case"reauthViaRedirect":return KD;default:qn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=new Xo(2e3,1e4);class jr extends Dy{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QD.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="pendingRedirect",ja=new Map;class JD extends Dy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const n=await ZD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZD(s,e){const t=nV(e),n=tV(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function eV(s,e){ja.set(s._key(),e)}function tV(s){return On(s._redirectPersistence)}function nV(s){return Pa(YD,s.config.apiKey,s.name)}async function sV(s,e,t=!1){if(Rt(s.app))return Promise.reject(Ks(s));const n=Wh(s),r=zD(n,e),o=await new JD(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=10*60*1e3;class iV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vy(e)){const r=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(pn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rV&&this.cachedEventUids.clear(),this.cachedEventUids.has(km(e))}saveEventToCache(e){this.cachedEventUids.add(km(e)),this.lastProcessedEventTime=Date.now()}}function km(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Vy({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oV(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vy(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aV(s,e={}){return mi(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cV=/^https?/;async function uV(s){if(s.config.emulator)return;const{authorizedDomains:e}=await aV(s);for(const t of e)try{if(hV(t))return}catch{}qn(s,"unauthorized-domain")}function hV(s){const e=Tu(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!cV.test(t))return!1;if(lV.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dV=new Xo(3e4,6e4);function Sm(){const s=gn().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function fV(s){return new Promise((e,t)=>{var n,r,i;function o(){Sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sm(),t(pn(s,"network-request-failed"))},timeout:dV.get()})}if(!((r=(n=gn().gapi)===null||n===void 0?void 0:n.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)o();else{const l=bD("iframefcb");return gn()[l]=()=>{gapi.load?o():t(pn(s,"network-request-failed"))},_D(`${yD()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function mV(s){return Oa=Oa||fV(s),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=new Xo(5e3,15e3),gV="__/auth/iframe",_V="emulator/auth/iframe",yV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EV(s){const e=s.config;ne(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?qh(e,_V):`https://${s.config.authDomain}/${gV}`,n={apiKey:e.apiKey,appName:s.name,v:Ns},r=bV.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ci(n).slice(1)}`}async function vV(s){const e=await mV(s),t=gn().gapi;return ne(t,s,"internal-error"),e.open({where:document.body,url:EV(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yV,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=pn(s,"network-request-failed"),l=gn().setTimeout(()=>{i(o)},pV.get());function c(){gn().clearTimeout(l),r(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IV=500,wV=600,xV="_blank",TV="http://localhost";class Cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DV(s,e,t,n=IV,r=wV){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},NV),{width:n.toString(),height:r.toString(),top:i,left:o}),u=He().toLowerCase();t&&(l=ay(u)?xV:t),iy(u)&&(e=e||TV,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,T])=>`${g}${E}=${T},`,"");if(cD(u)&&l!=="_self")return VV(e||"",l),new Cm(null);const p=window.open(e||"",l,f);ne(p,s,"popup-blocked");try{p.focus()}catch{}return new Cm(p)}function VV(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV="__/auth/handler",kV="emulator/auth/handler",SV=encodeURIComponent("fac");async function Rm(s,e,t,n,r,i){ne(s.config.authDomain,s,"auth-domain-config-required"),ne(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:Ns,eventId:r};if(e instanceof gy){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof qo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}s.tenantId&&(o.tid=s.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await s._getAppCheckToken(),u=c?`#${SV}=${encodeURIComponent(c)}`:"";return`${CV(s)}?${ci(l).slice(1)}${u}`}function CV({config:s}){return s.emulator?qh(s,kV):`https://${s.authDomain}/${AV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="webStorageSupport";class RV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ny,this._completeRedirectFn=sV,this._overrideRedirectResult=eV}async _openPopup(e,t,n,r){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rm(e,t,n,Tu(),r);return DV(e,o,Hh())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Rm(e,t,n,Tu(),r);return OD(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Gn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await vV(e),n=new iV(e);return t.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hc,{type:Hc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Hc];o!==void 0&&t(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dy()||oy()||zh()}}const PV=RV;var Pm="@firebase/auth",jm="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LV(s){Fn(new bn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(s)},u=new pD(n,r,i,c);return vD(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Fn(new bn("auth-internal",e=>{const t=Wh(e.getProvider("auth").getImmediate());return(n=>new jV(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Pm,jm,OV(s)),It(Pm,jm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV=5*60,MV=Tg("authIdTokenMaxAge")||UV;let Om=null;const FV=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>MV)return;const r=t==null?void 0:t.token;Om!==r&&(Om=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ay(s=Oo()){const e=ui(s,"auth");if(e.isInitialized())return e.getImmediate();const t=ED(s,{popupRedirectResolver:PV,persistence:[$D,RD,Ny]}),n=Tg("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=FV(i.toString());kD(t,o,()=>o(t.currentUser)),AD(t,l=>o(l))}}const r=wg("auth");return r&&ND(t,`http://${r}`),t}function BV(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}gD({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=pn("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",BV().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LV("Browser");const XV=()=>{const[s,e]=B.useState(0);return B.useEffect(()=>{const t=qT(),n=Ui(t,"activeUsers");Ay();const r=`anonymous_${Math.random().toString(36).substring(2,9)}`,i=()=>{const g=Ui(t,`activeUsers/${r}`);Ca(g,{lastActive:new Date().toISOString(),isOnline:!0,sessionStart:new Date().toISOString()})},o=()=>{bm(n,g=>{if(!g.exists())return;const E=g.val(),T=new Date(Date.now()-5*60*1e3).toISOString();Object.entries(E).forEach(([S,k])=>{(!k.isOnline||k.lastActive<T)&&ym(Ui(t,`activeUsers/${S}`))})})},l=g=>{if(!g.exists()){e(0);return}const E=g.val(),T=new Date(Date.now()-5*60*1e3).toISOString(),S=Object.values(E).filter(k=>k.isOnline&&k.lastActive>T).length;e(S)};i();const c=setInterval(o,6e4),u=setInterval(()=>i(),3e4),f=bm(n,l),p=()=>{const g=Ui(t,`activeUsers/${r}`);Ca(g,{lastActive:new Date().toISOString(),isOnline:!document.hidden,sessionStart:new Date().toISOString()})};return document.addEventListener("visibilitychange",p),()=>{clearInterval(c),clearInterval(u),f(),document.removeEventListener("visibilitychange",p);const g=Ui(t,`activeUsers/${r}`);Ca(g,{lastActive:new Date().toISOString(),isOnline:!1}).then(()=>ym(g))}},[]),d.jsxDEV("div",{className:"flex items-center space-x-2",children:[d.jsxDEV("div",{className:"w-3 h-3 bg-green-500 rounded-full animate-pulse"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VisitorCounter.tsx",lineNumber:101,columnNumber:7},void 0),d.jsxDEV("span",{className:"text-white",children:[s," active ",s===1?"visitor":"visitors"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VisitorCounter.tsx",lineNumber:102,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VisitorCounter.tsx",lineNumber:100,columnNumber:5},void 0)},qV=()=>{const s=mg();pg();const[e,t]=B.useState(!1),[n,r]=B.useState(""),i=s.pathname.includes("/staff")||s.pathname.includes("/dashboard"),{currentLanguage:o,setLanguage:l,languages:c}=eN();B.useEffect(()=>{if("webkitSpeechRecognition"in window){const p=new window.webkitSpeechRecognition;return p.continuous=!0,p.interimResults=!0,p.onresult=g=>{const E=Array.from(g.results).map(T=>T[0]).map(T=>T.transcript).join("");r(E)},e&&p.start(),()=>{p.stop()}}},[e]);const u=()=>{const p="Screen reader activated",g=new SpeechSynthesisUtterance(p);g.lang=o.code,window.speechSynthesis.speak(g)},f=p=>{var E;l(p.target.value);const g=new SpeechSynthesisUtterance(`Language changed to ${(E=c.find(T=>T.code===p.target.value))==null?void 0:E.name}`);g.lang=p.target.value,window.speechSynthesis.speak(g)};return d.jsxDEV(d.Fragment,{children:[d.jsxDEV("a",{href:"#main-content",className:"skip-to-main",children:"Skip to main content"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:100,columnNumber:7},void 0),d.jsxDEV("div",{className:"min-h-screen flex flex-col bg-gradient-to-b from-primary/5 via-white to-secondary/5",children:[d.jsxDEV("header",{className:"bg-white shadow-lg border-t-4 border-primary",children:[d.jsxDEV("div",{className:"bg-gray-50 border-b border-gray-200",children:d.jsxDEV("div",{className:"gov-container flex justify-between items-center py-2",children:[d.jsxDEV("div",{className:"flex items-center space-x-4",children:[d.jsxDEV("span",{className:"text-gray-700 font-medium",children:"Government of India"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:111,columnNumber:17},void 0),d.jsxDEV("span",{className:"text-gray-400",children:"|"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:114,columnNumber:17},void 0),d.jsxDEV("span",{className:"text-gray-700 font-medium",children:"भारत सरकार"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:115,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:110,columnNumber:15},void 0),d.jsxDEV("div",{className:"flex items-center space-x-4",children:[d.jsxDEV("button",{className:"text-sm hover:text-primary transition-colors",onClick:u,"aria-label":"Activate screen reader",children:"Screen Reader"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:118,columnNumber:17},void 0),d.jsxDEV("select",{className:"bg-transparent border-none text-sm hover:text-primary focus:ring-primary","aria-label":"Select language",value:o.code,onChange:f,children:c.map(p=>d.jsxDEV("option",{value:p.code,children:[p.nativeName," (",p.name,")"]},p.code,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:132,columnNumber:21},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:125,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:117,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:109,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:108,columnNumber:11},void 0),d.jsxDEV("div",{className:"gov-container py-6",children:d.jsxDEV("div",{className:"flex items-center justify-between",children:[d.jsxDEV("div",{className:"flex items-center space-x-6",children:d.jsxDEV("div",{className:"flex items-center space-x-4",children:[d.jsxDEV("div",{className:"flex flex-col items-center",children:[d.jsxDEV("div",{className:"w-16 h-16 relative hover:scale-105 transition-transform",children:d.jsxDEV("svg",{viewBox:"0 0 320 320",className:"w-full h-full",children:[d.jsxDEV("circle",{cx:"160",cy:"160",r:"155",fill:"#13227A",stroke:"#F1B821",strokeWidth:"5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:151,columnNumber:25},void 0),d.jsxDEV("circle",{cx:"160",cy:"160",r:"140",fill:"none",stroke:"#F1B821",strokeWidth:"2"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:159,columnNumber:25},void 0),d.jsxDEV("path",{d:"M160 40 L160 280 M40 160 L280 160",stroke:"#F1B821",strokeWidth:"2"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:167,columnNumber:25},void 0),d.jsxDEV("circle",{cx:"160",cy:"160",r:"40",fill:"none",stroke:"#F1B821",strokeWidth:"3"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:173,columnNumber:25},void 0),[...Array(24)].map((p,g)=>d.jsxDEV("line",{x1:"160",y1:"120",x2:"160",y2:"200",stroke:"#F1B821",strokeWidth:"2",transform:`rotate(${g*15} 160 160)`},g,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:183,columnNumber:27},void 0))]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:150,columnNumber:23},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:149,columnNumber:21},void 0),d.jsxDEV("span",{className:"text-[10px] font-semibold text-center mt-1 text-primary",children:"सत्यमेव जयते"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:196,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:147,columnNumber:19},void 0),d.jsxDEV("div",{children:d.jsxDEV("h1",{className:"gov-title text-2xl font-bold text-gray-800 hover:text-primary transition-colors",children:["Election Commission of India",d.jsxDEV("span",{className:"block text-lg font-semibold text-secondary",children:"भारत निर्वाचन आयोग"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:203,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:201,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:200,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:146,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:144,columnNumber:15},void 0),d.jsxDEV("div",{className:"flex items-center space-x-4",children:[d.jsxDEV("button",{onClick:()=>t(!e),className:"p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary","aria-label":e?"Stop voice commands":"Start voice commands","aria-pressed":e,children:e?d.jsxDEV(ou,{className:"h-5 w-5 text-secondary"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:222,columnNumber:21},void 0):d.jsxDEV(yg,{className:"h-5 w-5 text-gray-600 hover:text-primary"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:224,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:213,columnNumber:17},void 0),d.jsxDEV(kt,{to:i?"/":"/staff",className:"px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:-translate-y-0.5","aria-label":i?"Switch to Voter Portal":"Switch to Staff Dashboard",children:i?d.jsxDEV(d.Fragment,{children:[d.jsxDEV(nh,{className:"h-5 w-5 inline-block mr-2"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:239,columnNumber:23},void 0),d.jsxDEV("span",{children:"Voter Portal"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:240,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:238,columnNumber:21},void 0):d.jsxDEV(d.Fragment,{children:[d.jsxDEV(Pv,{className:"h-5 w-5 inline-block mr-2"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:244,columnNumber:23},void 0),d.jsxDEV("span",{children:"Staff Login"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:245,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:243,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:228,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:212,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:143,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:142,columnNumber:11},void 0),d.jsxDEV("nav",{className:"gov-nav border-t border-gray-200",role:"navigation",children:d.jsxDEV("div",{className:"gov-container",children:d.jsxDEV("ul",{className:"flex space-x-6",children:[d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/",className:"text-accent hover:text-accent/80 transition",children:"Home"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:258,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:257,columnNumber:17},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/about",className:"text-accent hover:text-accent/80 transition",children:"About ECI"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:266,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:265,columnNumber:17},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/contact",className:"text-accent hover:text-accent/80 transition",children:"Contact"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:274,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:273,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:256,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:255,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:254,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:106,columnNumber:9},void 0),n&&d.jsxDEV("div",{className:"fixed bottom-4 right-4 max-w-md p-6 bg-gradient-to-br from-primary/90 to-secondary/90 rounded-2xl border border-white/20 text-white shadow-lg backdrop-blur-xl transform transition-all duration-300 ease-in-out hover:scale-105",role:"status","aria-live":"polite",children:d.jsxDEV("div",{className:"flex items-start space-x-3",children:[d.jsxDEV(ou,{className:"h-5 w-5 text-white/90 animate-pulse"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:294,columnNumber:15},void 0),d.jsxDEV("div",{children:[d.jsxDEV("p",{className:"text-sm font-medium",children:n},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:296,columnNumber:17},void 0),d.jsxDEV("p",{className:"text-xs text-white/70 mt-1",children:"Voice command detected"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:297,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:295,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:293,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:288,columnNumber:11},void 0),d.jsxDEV("main",{id:"main-content",className:"flex-1",role:"main",children:d.jsxDEV("div",{className:"gov-container",children:d.jsxDEV(bv,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:308,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:307,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:306,columnNumber:9},void 0),d.jsxDEV(rN,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:313,columnNumber:9},void 0),d.jsxDEV("footer",{className:"gov-footer",children:d.jsxDEV("div",{className:"gov-container",children:[d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[d.jsxDEV("div",{children:[d.jsxDEV("h2",{className:"text-lg font-semibold mb-4",children:"Contact Us"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:320,columnNumber:17},void 0),d.jsxDEV("address",{className:"not-italic",children:["Election Commission of India",d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:323,columnNumber:19},void 0),"Nirvachan Sadan",d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:325,columnNumber:19},void 0),"Ashoka Road, New Delhi-110001",d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:327,columnNumber:19},void 0),d.jsxDEV("a",{href:"tel:+911123052205",className:"hover:underline",children:"+91-11-23052205"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:328,columnNumber:19},void 0),d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:331,columnNumber:19},void 0),d.jsxDEV("a",{href:"mailto:support@eci.gov.in",className:"hover:underline",children:"support@eci.gov.in"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:332,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:321,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:319,columnNumber:15},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h2",{className:"text-lg font-semibold mb-4",children:"Important Links"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:341,columnNumber:17},void 0),d.jsxDEV("ul",{className:"space-y-2",children:[d.jsxDEV("li",{children:d.jsxDEV("a",{href:"https://eci.gov.in",className:"hover:underline",children:"ECI Website"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:344,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:343,columnNumber:19},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/rti",className:"hover:underline",children:"RTI"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:349,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:348,columnNumber:19},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/careers",className:"hover:underline",children:"Careers"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:354,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:353,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:342,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:340,columnNumber:15},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h2",{className:"text-lg font-semibold mb-4",children:"Legal"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:361,columnNumber:17},void 0),d.jsxDEV("ul",{className:"space-y-2",children:[d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/legal/terms",className:"text-gray-600 hover:text-primary transition-colors",children:"Terms of Service"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:364,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:363,columnNumber:19},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/legal/privacy",className:"text-gray-600 hover:text-primary transition-colors",children:"Privacy Policy"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:372,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:371,columnNumber:19},void 0),d.jsxDEV("li",{children:d.jsxDEV(kt,{to:"/legal/disclaimer",className:"text-gray-600 hover:text-primary transition-colors",children:"Disclaimer"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:380,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:379,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:362,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:360,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:318,columnNumber:13},void 0),d.jsxDEV("div",{className:"mt-8 pt-8 border-t border-white/10",children:[d.jsxDEV("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[d.jsxDEV("p",{children:["© ",new Date().getFullYear()," Election Commission of India. All rights reserved."]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:392,columnNumber:17},void 0),d.jsxDEV("div",{className:"mt-4 md:mt-0",children:d.jsxDEV(XV,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:397,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:396,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:391,columnNumber:15},void 0),d.jsxDEV("p",{className:"mt-2 text-sm text-center",children:["Last Updated: ",new Date().toLocaleDateString("en-IN")]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:400,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:390,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:317,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:316,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/Layout.tsx",lineNumber:98,columnNumber:5},void 0)};var Lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fs,ky;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function v(){}v.prototype=y.prototype,I.D=y.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,x,D){for(var b=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)b[Re-2]=arguments[Re];return y.prototype[x].apply(w,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)w[x]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(x=0;16>x;++x)w[x]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=I.g[0],v=I.g[1],x=I.g[2];var D=I.g[3],b=y+(D^v&(x^D))+w[0]+3614090360&4294967295;y=v+(b<<7&4294967295|b>>>25),b=D+(x^y&(v^x))+w[1]+3905402710&4294967295,D=y+(b<<12&4294967295|b>>>20),b=x+(v^D&(y^v))+w[2]+606105819&4294967295,x=D+(b<<17&4294967295|b>>>15),b=v+(y^x&(D^y))+w[3]+3250441966&4294967295,v=x+(b<<22&4294967295|b>>>10),b=y+(D^v&(x^D))+w[4]+4118548399&4294967295,y=v+(b<<7&4294967295|b>>>25),b=D+(x^y&(v^x))+w[5]+1200080426&4294967295,D=y+(b<<12&4294967295|b>>>20),b=x+(v^D&(y^v))+w[6]+2821735955&4294967295,x=D+(b<<17&4294967295|b>>>15),b=v+(y^x&(D^y))+w[7]+4249261313&4294967295,v=x+(b<<22&4294967295|b>>>10),b=y+(D^v&(x^D))+w[8]+1770035416&4294967295,y=v+(b<<7&4294967295|b>>>25),b=D+(x^y&(v^x))+w[9]+2336552879&4294967295,D=y+(b<<12&4294967295|b>>>20),b=x+(v^D&(y^v))+w[10]+4294925233&4294967295,x=D+(b<<17&4294967295|b>>>15),b=v+(y^x&(D^y))+w[11]+2304563134&4294967295,v=x+(b<<22&4294967295|b>>>10),b=y+(D^v&(x^D))+w[12]+1804603682&4294967295,y=v+(b<<7&4294967295|b>>>25),b=D+(x^y&(v^x))+w[13]+4254626195&4294967295,D=y+(b<<12&4294967295|b>>>20),b=x+(v^D&(y^v))+w[14]+2792965006&4294967295,x=D+(b<<17&4294967295|b>>>15),b=v+(y^x&(D^y))+w[15]+1236535329&4294967295,v=x+(b<<22&4294967295|b>>>10),b=y+(x^D&(v^x))+w[1]+4129170786&4294967295,y=v+(b<<5&4294967295|b>>>27),b=D+(v^x&(y^v))+w[6]+3225465664&4294967295,D=y+(b<<9&4294967295|b>>>23),b=x+(y^v&(D^y))+w[11]+643717713&4294967295,x=D+(b<<14&4294967295|b>>>18),b=v+(D^y&(x^D))+w[0]+3921069994&4294967295,v=x+(b<<20&4294967295|b>>>12),b=y+(x^D&(v^x))+w[5]+3593408605&4294967295,y=v+(b<<5&4294967295|b>>>27),b=D+(v^x&(y^v))+w[10]+38016083&4294967295,D=y+(b<<9&4294967295|b>>>23),b=x+(y^v&(D^y))+w[15]+3634488961&4294967295,x=D+(b<<14&4294967295|b>>>18),b=v+(D^y&(x^D))+w[4]+3889429448&4294967295,v=x+(b<<20&4294967295|b>>>12),b=y+(x^D&(v^x))+w[9]+568446438&4294967295,y=v+(b<<5&4294967295|b>>>27),b=D+(v^x&(y^v))+w[14]+3275163606&4294967295,D=y+(b<<9&4294967295|b>>>23),b=x+(y^v&(D^y))+w[3]+4107603335&4294967295,x=D+(b<<14&4294967295|b>>>18),b=v+(D^y&(x^D))+w[8]+1163531501&4294967295,v=x+(b<<20&4294967295|b>>>12),b=y+(x^D&(v^x))+w[13]+2850285829&4294967295,y=v+(b<<5&4294967295|b>>>27),b=D+(v^x&(y^v))+w[2]+4243563512&4294967295,D=y+(b<<9&4294967295|b>>>23),b=x+(y^v&(D^y))+w[7]+1735328473&4294967295,x=D+(b<<14&4294967295|b>>>18),b=v+(D^y&(x^D))+w[12]+2368359562&4294967295,v=x+(b<<20&4294967295|b>>>12),b=y+(v^x^D)+w[5]+4294588738&4294967295,y=v+(b<<4&4294967295|b>>>28),b=D+(y^v^x)+w[8]+2272392833&4294967295,D=y+(b<<11&4294967295|b>>>21),b=x+(D^y^v)+w[11]+1839030562&4294967295,x=D+(b<<16&4294967295|b>>>16),b=v+(x^D^y)+w[14]+4259657740&4294967295,v=x+(b<<23&4294967295|b>>>9),b=y+(v^x^D)+w[1]+2763975236&4294967295,y=v+(b<<4&4294967295|b>>>28),b=D+(y^v^x)+w[4]+1272893353&4294967295,D=y+(b<<11&4294967295|b>>>21),b=x+(D^y^v)+w[7]+4139469664&4294967295,x=D+(b<<16&4294967295|b>>>16),b=v+(x^D^y)+w[10]+3200236656&4294967295,v=x+(b<<23&4294967295|b>>>9),b=y+(v^x^D)+w[13]+681279174&4294967295,y=v+(b<<4&4294967295|b>>>28),b=D+(y^v^x)+w[0]+3936430074&4294967295,D=y+(b<<11&4294967295|b>>>21),b=x+(D^y^v)+w[3]+3572445317&4294967295,x=D+(b<<16&4294967295|b>>>16),b=v+(x^D^y)+w[6]+76029189&4294967295,v=x+(b<<23&4294967295|b>>>9),b=y+(v^x^D)+w[9]+3654602809&4294967295,y=v+(b<<4&4294967295|b>>>28),b=D+(y^v^x)+w[12]+3873151461&4294967295,D=y+(b<<11&4294967295|b>>>21),b=x+(D^y^v)+w[15]+530742520&4294967295,x=D+(b<<16&4294967295|b>>>16),b=v+(x^D^y)+w[2]+3299628645&4294967295,v=x+(b<<23&4294967295|b>>>9),b=y+(x^(v|~D))+w[0]+4096336452&4294967295,y=v+(b<<6&4294967295|b>>>26),b=D+(v^(y|~x))+w[7]+1126891415&4294967295,D=y+(b<<10&4294967295|b>>>22),b=x+(y^(D|~v))+w[14]+2878612391&4294967295,x=D+(b<<15&4294967295|b>>>17),b=v+(D^(x|~y))+w[5]+4237533241&4294967295,v=x+(b<<21&4294967295|b>>>11),b=y+(x^(v|~D))+w[12]+1700485571&4294967295,y=v+(b<<6&4294967295|b>>>26),b=D+(v^(y|~x))+w[3]+2399980690&4294967295,D=y+(b<<10&4294967295|b>>>22),b=x+(y^(D|~v))+w[10]+4293915773&4294967295,x=D+(b<<15&4294967295|b>>>17),b=v+(D^(x|~y))+w[1]+2240044497&4294967295,v=x+(b<<21&4294967295|b>>>11),b=y+(x^(v|~D))+w[8]+1873313359&4294967295,y=v+(b<<6&4294967295|b>>>26),b=D+(v^(y|~x))+w[15]+4264355552&4294967295,D=y+(b<<10&4294967295|b>>>22),b=x+(y^(D|~v))+w[6]+2734768916&4294967295,x=D+(b<<15&4294967295|b>>>17),b=v+(D^(x|~y))+w[13]+1309151649&4294967295,v=x+(b<<21&4294967295|b>>>11),b=y+(x^(v|~D))+w[4]+4149444226&4294967295,y=v+(b<<6&4294967295|b>>>26),b=D+(v^(y|~x))+w[11]+3174756917&4294967295,D=y+(b<<10&4294967295|b>>>22),b=x+(y^(D|~v))+w[2]+718787259&4294967295,x=D+(b<<15&4294967295|b>>>17),b=v+(D^(x|~y))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(x+(b<<21&4294967295|b>>>11))&4294967295,I.g[2]=I.g[2]+x&4294967295,I.g[3]=I.g[3]+D&4294967295}n.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var v=y-this.blockSize,w=this.B,x=this.h,D=0;D<y;){if(x==0)for(;D<=v;)r(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<y;)if(w[x++]=I.charCodeAt(D++),x==this.blockSize){r(this,w),x=0;break}}else for(;D<y;)if(w[x++]=I[D++],x==this.blockSize){r(this,w),x=0;break}}this.h=x,this.o+=y},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var v=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=v&255,v/=256;for(this.u(I),I=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)I[v++]=this.g[y]>>>w&255;return I};function i(I,y){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=y(I)}function o(I,y){this.h=y;for(var v=[],w=!0,x=I.length-1;0<=x;x--){var D=I[x]|0;w&&D==y||(v[x]=D,w=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(u(-I));for(var y=[],v=1,w=0;I>=v;w++)y[w]=I/v|0,v*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),w=p,x=0;x<I.length;x+=8){var D=Math.min(8,I.length-x),b=parseInt(I.substring(x,x+D),y);8>D?(D=u(Math.pow(y,D)),w=w.j(D).add(u(b))):(w=w.j(v),w=w.add(u(b)))}return w}var p=c(0),g=c(1),E=c(16777216);s=o.prototype,s.m=function(){if(S(this))return-k(this).m();for(var I=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*y,y*=4294967296}return I},s.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(S(this))return"-"+k(this).toString(I);for(var y=u(Math.pow(I,6)),v=this,w="";;){var x=Q(v,y).g;v=G(v,x.j(y));var D=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=x,T(v))return D+w;for(;6>D.length;)D="0"+D;w=D+w}},s.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function S(I){return I.h==-1}s.l=function(I){return I=G(this,I),S(I)?-1:T(I)?0:1};function k(I){for(var y=I.g.length,v=[],w=0;w<y;w++)v[w]=~I.g[w];return new o(v,~I.h).add(g)}s.abs=function(){return S(this)?k(this):this},s.add=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0,x=0;x<=y;x++){var D=w+(this.i(x)&65535)+(I.i(x)&65535),b=(D>>>16)+(this.i(x)>>>16)+(I.i(x)>>>16);w=b>>>16,D&=65535,b&=65535,v[x]=b<<16|D}return new o(v,v[v.length-1]&-2147483648?-1:0)};function G(I,y){return I.add(k(y))}s.j=function(I){if(T(this)||T(I))return p;if(S(this))return S(I)?k(this).j(k(I)):k(k(this).j(I));if(S(I))return k(this.j(k(I)));if(0>this.l(E)&&0>I.l(E))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var x=0;x<I.g.length;x++){var D=this.i(w)>>>16,b=this.i(w)&65535,Re=I.i(x)>>>16,lt=I.i(x)&65535;v[2*w+2*x]+=b*lt,F(v,2*w+2*x),v[2*w+2*x+1]+=D*lt,F(v,2*w+2*x+1),v[2*w+2*x+1]+=b*Re,F(v,2*w+2*x+1),v[2*w+2*x+2]+=D*Re,F(v,2*w+2*x+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function F(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function M(I,y){this.g=I,this.h=y}function Q(I,y){if(T(y))throw Error("division by zero");if(T(I))return new M(p,p);if(S(I))return y=Q(k(I),y),new M(k(y.g),k(y.h));if(S(y))return y=Q(I,k(y)),new M(k(y.g),y.h);if(30<I.g.length){if(S(I)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=y;0>=w.l(I);)v=re(v),w=re(w);var x=Y(v,1),D=Y(w,1);for(w=Y(w,2),v=Y(v,2);!T(w);){var b=D.add(w);0>=b.l(I)&&(x=x.add(v),D=b),w=Y(w,1),v=Y(v,1)}return y=G(I,x.j(y)),new M(x,y)}for(x=p;0<=I.l(y);){for(v=Math.max(1,Math.floor(I.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),D=u(v),b=D.j(y);S(b)||0<b.l(I);)v-=w,D=u(v),b=D.j(y);T(D)&&(D=g),x=x.add(D),I=G(I,b)}return new M(x,I)}s.A=function(I){return Q(this,I).h},s.and=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&I.i(w);return new o(v,this.h&I.h)},s.or=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|I.i(w);return new o(v,this.h|I.h)},s.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^I.i(w);return new o(v,this.h^I.h)};function re(I){for(var y=I.g.length+1,v=[],w=0;w<y;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(v,I.h)}function Y(I,y){var v=y>>5;y%=32;for(var w=I.g.length-v,x=[],D=0;D<w;D++)x[D]=0<y?I.i(D+v)>>>y|I.i(D+v+1)<<32-y:I.i(D+v);return new o(x,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ky=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,fs=o}).apply(typeof Lm<"u"?Lm:typeof self<"u"?self:typeof window<"u"?window:{});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sy,$i,Cy,La,Au,Ry,Py,jy;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ea=="object"&&Ea];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var n=t(this);function r(a,h){if(h)e:{var m=n;a=a.split(".");for(var _=0;_<a.length-1;_++){var A=a[_];if(!(A in m))break e;m=m[A]}a=a[a.length-1],_=m[a],h=h(_),h!=_&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var m=0,_=!1,A={next:function(){if(!_&&m<a.length){var C=m++;return{value:h(C,a[C]),done:!1}}return _=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}r("Array.prototype.values",function(a){return a||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,m){return a.call.apply(a.bind,arguments)}function p(a,h,m){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,_),a.apply(h,A)}}return function(){return a.apply(h,arguments)}}function g(a,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function T(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(_,A,C){for(var q=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)q[Te-2]=arguments[Te];return h.prototype[A].apply(_,q)}}function S(a){const h=a.length;if(0<h){const m=Array(h);for(let _=0;_<h;_++)m[_]=a[_];return m}return[]}function k(a,h){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(c(_)){const A=a.length||0,C=_.length||0;a.length=A+C;for(let q=0;q<C;q++)a[A+q]=_[q]}else a.push(_)}}class G{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var re=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Y(a,h,m){for(const _ in a)h.call(m,a[_],_,a)}function I(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function y(a){const h={};for(const m in a)h[m]=a[m];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let m,_;for(let A=1;A<arguments.length;A++){_=arguments[A];for(m in _)a[m]=_[m];for(let C=0;C<v.length;C++)m=v[C],Object.prototype.hasOwnProperty.call(_,m)&&(a[m]=_[m])}}function x(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function D(a){l.setTimeout(()=>{throw a},0)}function b(){var a=$t;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Re{constructor(){this.h=this.g=null}add(h,m){const _=lt.get();_.set(h,m),this.h?this.h.next=_:this.g=_,this.h=_}}var lt=new G(()=>new ye,a=>a.reset());class ye{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,_t=!1,$t=new Re,Ye=()=>{const a=l.Promise.resolve(void 0);Lt=()=>{a.then(wn)}};var wn=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(m){D(m)}var h=lt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_t=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var xn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function zt(a,h){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(re){e:{try{Q(h.nodeName);var A=!0;break e}catch{}A=!1}A||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zt.aa.h.call(this)}}T(zt,Ve);var Wt={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),sn=0;function Kt(a,h,m,_,A){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!_,this.ha=A,this.key=++sn,this.da=this.fa=!1}function Dt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function rn(a){this.src=a,this.g={},this.h=0}rn.prototype.add=function(a,h,m,_,A){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var q=Tn(a,h,_,A);return-1<q?(h=a[q],m||(h.fa=!1)):(h=new Kt(h,this.src,C,!!_,A),h.fa=m,a.push(h)),h};function Ut(a,h){var m=h.type;if(m in a.g){var _=a.g[m],A=Array.prototype.indexOf.call(_,h,void 0),C;(C=0<=A)&&Array.prototype.splice.call(_,A,1),C&&(Dt(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Tn(a,h,m,_){for(var A=0;A<a.length;++A){var C=a[A];if(!C.da&&C.listener==h&&C.capture==!!m&&C.ha==_)return A}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),Mt={};function Vt(a,h,m,_,A){if(Array.isArray(h)){for(var C=0;C<h.length;C++)Vt(a,h[C],m,_,A);return null}return m=Pe(m),a&&a[tt]?a.K(h,m,u(_)?!!_.capture:!1,A):Vn(a,h,m,!1,_,A)}function Vn(a,h,m,_,A,C){if(!h)throw Error("Invalid event type");var q=u(A)?!!A.capture:!!A,Te=Z(a);if(Te||(a[Dn]=Te=new rn(a)),m=Te.add(h,m,_,q,C),m.proxy)return m;if(_=Hn(),m.proxy=_,_.src=a,_.listener=m,a.addEventListener)xn||(A=q),A===void 0&&(A=!1),a.addEventListener(h.toString(),_,A);else if(a.attachEvent)a.attachEvent(P(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Hn(){function a(m){return h.call(a.src,a.listener,m)}const h=O;return a}function Ht(a,h,m,_,A){if(Array.isArray(h))for(var C=0;C<h.length;C++)Ht(a,h[C],m,_,A);else _=u(_)?!!_.capture:!!_,m=Pe(m),a&&a[tt]?(a=a.i,h=String(h).toString(),h in a.g&&(C=a.g[h],m=Tn(C,m,_,A),-1<m&&(Dt(C[m]),Array.prototype.splice.call(C,m,1),C.length==0&&(delete a.g[h],a.h--)))):a&&(a=Z(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Tn(h,m,_,A)),(m=-1<a?h[a]:null)&&R(m))}function R(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tt])Ut(h.i,a);else{var m=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(m,_,a.capture):h.detachEvent?h.detachEvent(P(m),_):h.addListener&&h.removeListener&&h.removeListener(_),(m=Z(h))?(Ut(m,a),m.h==0&&(m.src=null,h[Dn]=null)):Dt(a)}}}function P(a){return a in Mt?Mt[a]:Mt[a]="on"+a}function O(a,h){if(a.da)a=!0;else{h=new zt(h,this);var m=a.listener,_=a.ha||a.src;a.fa&&R(a),a=m.call(_,h)}return a}function Z(a){return a=a[Dn],a instanceof rn?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pe(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(h){return a.handleEvent(h)}),a[oe])}function xe(){yt.call(this),this.i=new rn(this),this.M=this,this.F=null}T(xe,yt),xe.prototype[tt]=!0,xe.prototype.removeEventListener=function(a,h,m,_){Ht(this,a,h,m,_)};function Ae(a,h){var m,_=a.F;if(_)for(m=[];_;_=_.F)m.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ve(h,a);else if(h instanceof Ve)h.target=h.target||a;else{var A=h;h=new Ve(_,a),w(h,A)}if(A=!0,m)for(var C=m.length-1;0<=C;C--){var q=h.g=m[C];A=on(q,_,!0,h)&&A}if(q=h.g=a,A=on(q,_,!0,h)&&A,A=on(q,_,!1,h)&&A,m)for(C=0;C<m.length;C++)q=h.g=m[C],A=on(q,_,!1,h)&&A}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],_=0;_<m.length;_++)Dt(m[_]);delete a.g[h],a.h--}}this.F=null},xe.prototype.K=function(a,h,m,_){return this.i.add(String(a),h,!1,m,_)},xe.prototype.L=function(a,h,m,_){return this.i.add(String(a),h,!0,m,_)};function on(a,h,m,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var A=!0,C=0;C<h.length;++C){var q=h[C];if(q&&!q.da&&q.capture==m){var Te=q.listener,rt=q.ha||q.src;q.fa&&Ut(a.i,q),A=Te.call(rt,_)!==!1&&A}}return A&&!_.defaultPrevented}function Ft(a,h,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function bi(a){a.g=Ft(()=>{a.g=null,a.i&&(a.i=!1,bi(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ei extends yt{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(a){yt.call(this),this.h=a,this.g={}}T(Ds,yt);var Zo=[];function ea(a){Y(a.g,function(h,m){this.g.hasOwnProperty(m)&&R(h)},a),a.g={}}Ds.prototype.N=function(){Ds.aa.N.call(this),ea(this)},Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=l.JSON.stringify,Ic=l.JSON.parse,wc=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ni(){}Ni.prototype.h=null;function gr(a){return a.h||(a.h=a.i())}function Ii(){}var Bt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vs(){Ve.call(this,"d")}T(Vs,Ve);function As(){Ve.call(this,"c")}T(As,Ve);var an={},ta=null;function ks(){return ta=ta||new xe}an.La="serverreachability";function na(a){Ve.call(this,an.La,a)}T(na,Ve);function Qn(a){const h=ks();Ae(h,new na(h))}an.STAT_EVENT="statevent";function wi(a,h){Ve.call(this,an.STAT_EVENT,a),this.stat=h}T(wi,Ve);function nt(a){const h=ks();Ae(h,new wi(h,a))}an.Ma="timingevent";function sa(a,h){Ve.call(this,an.Ma,a),this.size=h}T(sa,Ve);function Yn(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function xc(a,h,m,_,A,C){a.info(function(){if(a.g)if(C)for(var q="",Te=C.split("&"),rt=0;rt<Te.length;rt++){var be=Te[rt].split("=");if(1<be.length){var ut=be[0];be=be[1];var ht=ut.split("_");q=2<=ht.length&&ht[1]=="type"?q+(ut+"="+be+"&"):q+(ut+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+_+") [attempt "+A+"]: "+h+`
`+m+`
`+q})}function N(a,h,m,_,A,C,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+A+"]: "+h+`
`+m+`
`+C+" "+q})}function L(a,h,m,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ee(a,m)+(_?" "+_:"")})}function W(a,h){a.info(function(){return"TIMEOUT: "+h})}Ss.prototype.info=function(){};function ee(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var _=m[a];if(!(2>_.length)){var A=_[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<A.length;q++)A[q]=""}}}}return vi(m)}catch{return h}}var pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ve={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ce;function ae(){}T(ae,Ni),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},ce=new ae;function je(a,h,m,_){this.j=a,this.i=h,this.l=m,this.R=_||1,this.U=new Ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}var Me={},ct={};function ln(a,h,m){a.L=1,a.v=aa(An(h)),a.m=m,a.P=!0,cn(a,null)}function cn(a,h){a.F=Date.now(),_r(a),a.A=An(a.v);var m=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),tf(m.i,"t",_),a.C=0,m=a.j.J,a.h=new Oe,a.g=Ef(a.j,m?h:null,!a.m),0<a.O&&(a.M=new Ei(g(a.Y,a,a.g),a.O)),h=a.U,m=a.g,_=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Zo[0]=A.toString()),A=Zo);for(var C=0;C<A.length;C++){var q=Vt(m,A[C],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Qn(),xc(a.i,a.u,a.A,a.l,a.R,a.m)}je.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},je.prototype.Y=function(a){try{if(a==this.g)e:{const ht=kn(this.g);var h=this.g.Ba();const Er=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||cf(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Er?Qn(3):Qn(2)),Tc(this);var m=this.g.Z();this.X=m;t:if(st(this)){var _=cf(this.g);a="";var A=_.length,C=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cs(this),Ti(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<A;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(C&&h==A-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,N(this.i,this.u,this.A,this.l,this.R,ht,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,rt=this.g;if((Te=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Te)){var be=Te;break t}}be=null}if(m=be)L(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,m);else{this.o=!1,this.s=3,nt(12),Cs(this),Ti(this);break e}}if(this.P){m=!0;let Qt;for(;!this.J&&this.C<q.length;)if(Qt=xi(this,q),Qt==ct){ht==4&&(this.s=4,nt(14),m=!1),L(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Me){this.s=4,nt(15),L(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else L(this.i,this.l,Qt,null),Dc(this,Qt);if(st(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||q.length!=0||this.h.h||(this.s=1,nt(16),m=!1),this.o=this.o&&m,!m)L(this.i,this.l,q,"[Invalid Chunked Response]"),Cs(this),Ti(this);else if(0<q.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Rc(ut),ut.M=!0,nt(11))}}else L(this.i,this.l,q,null),Dc(this,q);ht==4&&Cs(this),this.o&&!this.J&&(ht==4?gf(this.j,this):(this.o=!1,_r(this)))}else mv(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Cs(this),Ti(this)}}}catch{}finally{}};function st(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xi(a,h){var m=a.C,_=h.indexOf(`
`,m);return _==-1?ct:(m=Number(h.substring(m,_)),isNaN(m)?Me:(_+=1,_+m>h.length?ct:(h=h.slice(_,_+m),a.C=_+m,h)))}je.prototype.cancel=function(){this.J=!0,Cs(this)};function _r(a){a.S=Date.now()+a.I,ra(a,a.I)}function ra(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yn(g(a.ba,a),h)}function Tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}je.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(W(this.i,this.A),this.L!=2&&(Qn(),nt(17)),Cs(this),this.s=2,Ti(this)):ra(this,this.S-a)};function Ti(a){a.j.G==0||a.J||gf(a.j,a)}function Cs(a){Tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ea(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dc(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||Vc(m.h,a))){if(!a.K&&Vc(m.h,a)&&m.G==3){try{var _=m.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var A=_;if(A[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)fa(m),ha(m);else break e;Cc(m),nt(18)}}else m.za=A[1],0<m.za-m.T&&37500>A[2]&&m.F&&m.v==0&&!m.C&&(m.C=Yn(g(m.Za,m),6e3));if(1>=zd(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ps(m,11)}else if((a.K||m.g==a)&&fa(m),!F(h))for(A=m.Da.g.parse(h),h=0;h<A.length;h++){let be=A[h];if(m.T=be[0],be=be[1],m.G==2)if(be[0]=="c"){m.K=be[1],m.ia=be[2];const ut=be[3];ut!=null&&(m.la=ut,m.j.info("VER="+m.la));const ht=be[4];ht!=null&&(m.Aa=ht,m.j.info("SVER="+m.Aa));const Er=be[5];Er!=null&&typeof Er=="number"&&0<Er&&(_=1.5*Er,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const Qt=a.g;if(Qt){const pa=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pa){var C=_.h;C.g||pa.indexOf("spdy")==-1&&pa.indexOf("quic")==-1&&pa.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ac(C,C.h),C.h=null))}if(_.D){const Pc=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(_.ya=Pc,Se(_.I,_.D,Pc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var q=a;if(_.qa=bf(_,_.J?_.ia:null,_.W),q.K){Wd(_.h,q);var Te=q,rt=_.L;rt&&(Te.I=rt),Te.B&&(Tc(Te),_r(Te)),_.g=q}else mf(_);0<m.i.length&&da(m)}else be[0]!="stop"&&be[0]!="close"||Ps(m,7);else m.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Ps(m,7):Sc(m):be[0]!="noop"&&m.l&&m.l.ta(be),m.v=0)}}Qn(4)}catch{}}var JE=class{constructor(a,h){this.g=a,this.map=h}};function Gd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $d(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zd(a){return a.h?1:a.g?a.g.size:0}function Vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ac(a,h){a.g?a.g.add(h):a.h=h}function Wd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gd.prototype.cancel=function(){if(this.i=Kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return S(a.i)}function ZE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],m=a.length,_=0;_<m;_++)h.push(a[_]);return h}h=[],m=0;for(_ in a)h[m++]=a[_];return h}function ev(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const _ in a)h[m++]=_;return h}}}function Hd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=ev(a),_=ZE(a),A=_.length,C=0;C<A;C++)h.call(void 0,_[C],m&&m[C],a)}var Qd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tv(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var _=a[m].indexOf("="),A=null;if(0<=_){var C=a[m].substring(0,_);A=a[m].substring(_+1)}else C=a[m];h(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Rs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rs){this.h=a.h,ia(this,a.j),this.o=a.o,this.g=a.g,oa(this,a.s),this.l=a.l;var h=a.i,m=new Ai;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Yd(this,m),this.m=a.m}else a&&(h=String(a).match(Qd))?(this.h=!1,ia(this,h[1]||"",!0),this.o=Di(h[2]||""),this.g=Di(h[3]||"",!0),oa(this,h[4]),this.l=Di(h[5]||"",!0),Yd(this,h[6]||"",!0),this.m=Di(h[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Rs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Vi(h,Jd,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vi(h,Jd,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Vi(m,m.charAt(0)=="/"?rv:sv,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Vi(m,ov)),a.join("")};function An(a){return new Rs(a)}function ia(a,h,m){a.j=m?Di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function oa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Yd(a,h,m){h instanceof Ai?(a.i=h,av(a.i,a.h)):(m||(h=Vi(h,iv)),a.i=new Ai(h,a.h))}function Se(a,h,m){a.i.set(h,m)}function aa(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,nv),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jd=/[#\/\?@]/g,sv=/[#\?:]/g,rv=/[#\?]/g,iv=/[#\?@]/g,ov=/#/g;function Ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&tv(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}s=Ai.prototype,s.add=function(a,h){Jn(this),this.i=null,a=yr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Zd(a,h){Jn(a),h=yr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ef(a,h){return Jn(a),h=yr(a,h),a.g.has(h)}s.forEach=function(a,h){Jn(this),this.g.forEach(function(m,_){m.forEach(function(A){a.call(h,A,_,this)},this)},this)},s.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let _=0;_<h.length;_++){const A=a[_];for(let C=0;C<A.length;C++)m.push(h[_])}return m},s.V=function(a){Jn(this);let h=[];if(typeof a=="string")ef(this,a)&&(h=h.concat(this.g.get(yr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},s.set=function(a,h){return Jn(this),this.i=null,a=yr(this,a),ef(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},s.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function tf(a,h,m){Zd(a,h),0<m.length&&(a.i=null,a.g.set(yr(a,h),S(m)),a.h+=m.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var _=h[m];const C=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var A=C;q[_]!==""&&(A+="="+encodeURIComponent(String(q[_]))),a.push(A)}}return this.i=a.join("&")};function yr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function av(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(m,_){var A=_.toLowerCase();_!=A&&(Zd(this,_),tf(this,A,m))},a)),a.j=h}function lv(a,h){const m=new Ss;if(l.Image){const _=new Image;_.onload=E(Zn,m,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Zn,m,"TestLoadImage: error",!1,h,_),_.onabort=E(Zn,m,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Zn,m,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function cv(a,h){const m=new Ss,_=new AbortController,A=setTimeout(()=>{_.abort(),Zn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(C=>{clearTimeout(A),C.ok?Zn(m,"TestPingServer: ok",!0,h):Zn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),Zn(m,"TestPingServer: error",!1,h)})}function Zn(a,h,m,_,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),_(m)}catch{}}function uv(){this.g=new wc}function hv(a,h,m){const _=m||"";try{Hd(a,function(A,C){let q=A;u(A)&&(q=vi(A)),h.push(_+C+"="+encodeURIComponent(q))})}catch(A){throw h.push(_+"type="+encodeURIComponent("_badmap")),A}}function la(a){this.l=a.Ub||null,this.j=a.eb||!1}T(la,Ni),la.prototype.g=function(){return new ca(this.l,this.j)},la.prototype.i=function(a){return function(){return a}}({});function ca(a,h){xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ca,xe),s=ca.prototype,s.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Si(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},s.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}s.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ki(this):Si(this),this.readyState==3&&nf(this)}},s.Ra=function(a){this.g&&(this.response=this.responseText=a,ki(this))},s.Qa=function(a){this.g&&(this.response=a,ki(this))},s.ga=function(){this.g&&ki(this)};function ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Si(a)}s.setRequestHeader=function(a,h){this.u.append(a,h)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function Si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sf(a){let h="";return Y(a,function(m,_){h+=_,h+=":",h+=m,h+=`\r
`}),h}function kc(a,h,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=sf(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Se(a,h,m))}function Xe(a){xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Xe,xe);var dv=/^https?$/i,fv=["POST","PUT"];s=Xe.prototype,s.Ha=function(a){this.J=a},s.ea=function(a,h,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ce.g(),this.v=this.o?gr(this.o):gr(ce),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(C){rf(this,C);return}if(a=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var A in _)m.set(A,_[A]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const C of _.keys())m.set(C,_.get(C));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(C=>C.toLowerCase()=="content-type"),A=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fv,h,void 0))||_||A||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of m)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lf(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){rf(this,C)}};function rf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,of(a),ua(a)}function of(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),ua(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ua(this,!0)),Xe.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?af(this):this.bb())},s.bb=function(){af(this)};function af(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)Ft(a.Ea,0,a);else if(Ae(a,"readystatechange"),kn(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var _;if(_=q===0){var A=String(a.D).match(Qd)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),_=!dv.test(A?A.toLowerCase():"")}m=_}if(m)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var C=2<kn(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",of(a)}}finally{ua(a)}}}}function ua(a,h){if(a.g){lf(a);const m=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ae(a,"ready");try{m.onreadystatechange=_}catch{}}}function lf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}s.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}s.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ic(h)}};function cf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mv(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(F(a[_]))continue;var m=x(a[_]);const A=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const C=h[A]||[];h[A]=C,C.push(m)}I(h,function(_){return _.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function uf(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ci("baseRetryDelayMs",5e3,a),this.cb=Ci("retryDelaySeedMs",1e4,a),this.Wa=Ci("forwardChannelMaxRetries",2,a),this.wa=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gd(a&&a.concurrentRequestLimit),this.Da=new uv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=uf.prototype,s.la=8,s.G=1,s.connect=function(a,h,m,_){nt(0),this.W=a,this.H=h||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=bf(this,null,this.W),da(this)};function Sc(a){if(hf(a),a.G==3){var h=a.U++,m=An(a.I);if(Se(m,"SID",a.K),Se(m,"RID",h),Se(m,"TYPE","terminate"),Ri(a,m),h=new je(a,a.j,h),h.L=2,h.v=aa(An(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=Ef(h.j,null),h.g.ea(h.v)),h.F=Date.now(),_r(h)}yf(a)}function ha(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function hf(a){ha(a),a.u&&(l.clearTimeout(a.u),a.u=null),fa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function da(a){if(!$d(a.h)&&!a.s){a.s=!0;var h=a.Ga;Lt||Ye(),_t||(Lt(),_t=!0),$t.add(h,a),a.B=0}}function pv(a,h){return zd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yn(g(a.Ga,a,h),_f(a,a.B)),a.B++,!0)}s.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new je(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=ff(this,A,h),m=An(this.I),Se(m,"RID",a),Se(m,"CVER",22),this.D&&Se(m,"X-HTTP-Session-Id",this.D),Ri(this,m),C&&(this.O?h="headers="+encodeURIComponent(String(sf(C)))+"&"+h:this.m&&kc(m,this.m,C)),Ac(this.h,A),this.Ua&&Se(m,"TYPE","init"),this.P?(Se(m,"$req",h),Se(m,"SID","null"),A.T=!0,ln(A,m,null)):ln(A,m,h),this.G=2}}else this.G==3&&(a?df(this,a):this.i.length==0||$d(this.h)||df(this))};function df(a,h){var m;h?m=h.l:m=a.U++;const _=An(a.I);Se(_,"SID",a.K),Se(_,"RID",m),Se(_,"AID",a.T),Ri(a,_),a.m&&a.o&&kc(_,a.m,a.o),m=new je(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ff(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ac(a.h,m),ln(m,_,h)}function Ri(a,h){a.H&&Y(a.H,function(m,_){Se(h,_,m)}),a.l&&Hd({},function(m,_){Se(h,_,m)})}function ff(a,h,m){m=Math.min(a.i.length,m);var _=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let C=-1;for(;;){const q=["count="+m];C==-1?0<m?(C=A[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let Te=!0;for(let rt=0;rt<m;rt++){let be=A[rt].g;const ut=A[rt].map;if(be-=C,0>be)C=Math.max(0,A[rt].g-100),Te=!1;else try{hv(ut,q,"req"+be+"_")}catch{_&&_(ut)}}if(Te){_=q.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,_}function mf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Lt||Ye(),_t||(Lt(),_t=!0),$t.add(h,a),a.v=0}}function Cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yn(g(a.Fa,a),_f(a,a.v)),a.v++,!0)}s.Fa=function(){if(this.u=null,pf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yn(g(this.ab,this),a)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),ha(this),pf(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function pf(a){a.g=new je(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);Se(h,"RID","rpc"),Se(h,"SID",a.K),Se(h,"AID",a.T),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(h,"TO",a.ja),Se(h,"TYPE","xmlhttp"),Ri(a,h),a.m&&a.o&&kc(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=aa(An(h)),m.m=null,m.P=!0,cn(m,a)}s.Za=function(){this.C!=null&&(this.C=null,ha(this),Cc(this),nt(19))};function fa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function gf(a,h){var m=null;if(a.g==h){fa(a),Rc(a),a.g=null;var _=2}else if(Vc(a.h,h))m=h.D,Wd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var A=a.B;_=ks(),Ae(_,new sa(_,m)),da(a)}else mf(a);else if(A=h.s,A==3||A==0&&0<h.X||!(_==1&&pv(a,h)||_==2&&Cc(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),A){case 1:Ps(a,5);break;case 4:Ps(a,10);break;case 3:Ps(a,6);break;default:Ps(a,2)}}}function _f(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Ps(a,h){if(a.j.info("Error code "+h),h==2){var m=g(a.fb,a),_=a.Xa;const A=!_;_=new Rs(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ia(_,"https"),aa(_),A?lv(_.toString(),m):cv(_.toString(),m)}else nt(2);a.G=0,a.l&&a.l.sa(h),yf(a),hf(a)}s.fb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function yf(a){if(a.G=0,a.ka=[],a.l){const h=Kd(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function bf(a,h,m){var _=m instanceof Rs?An(m):new Rs(m);if(_.g!="")h&&(_.g=h+"."+_.g),oa(_,_.s);else{var A=l.location;_=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;var C=new Rs(null);_&&ia(C,_),h&&(C.g=h),A&&oa(C,A),m&&(C.l=m),_=C}return m=a.D,h=a.ya,m&&h&&Se(_,m,h),Se(_,"VER",a.la),Ri(a,_),_}function Ef(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new la({eb:m})):new Xe(a.pa),h.Ha(a.J),h}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function vf(){}s=vf.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function ma(){}ma.prototype.g=function(a,h){return new At(a,h)};function At(a,h){xe.call(this),this.g=new uf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new br(this)}T(At,xe),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Sc(this.g)},At.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=vi(a),a=m);h.i.push(new JE(h.Ya++,a)),h.G==3&&da(h)},At.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,At.aa.N.call(this)};function Nf(a){Vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(Nf,Vs);function If(){As.call(this),this.status=1}T(If,As);function br(a){this.g=a}T(br,vf),br.prototype.ua=function(){Ae(this.g,"a")},br.prototype.ta=function(a){Ae(this.g,new Nf(a))},br.prototype.sa=function(a){Ae(this.g,new If)},br.prototype.ra=function(){Ae(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,jy=function(){return new ma},Py=function(){return ks()},Ry=an,Au={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,La=pe,ve.COMPLETE="complete",Cy=ve,Ii.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",xe.prototype.listen=xe.prototype.K,$i=Ii,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,Sy=Xe}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});const Um="@firebase/firestore",Mm="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new ql("@firebase/firestore");function Ar(){return sr.logLevel}function U(s,...e){if(sr.logLevel<=de.DEBUG){const t=e.map(Yh);sr.debug(`Firestore (${pi}): ${s}`,...t)}}function bt(s,...e){if(sr.logLevel<=de.ERROR){const t=e.map(Yh);sr.error(`Firestore (${pi}): ${s}`,...t)}}function rr(s,...e){if(sr.logLevel<=de.WARN){const t=e.map(Yh);sr.warn(`Firestore (${pi}): ${s}`,...t)}}function Yh(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(s="Unexpected state"){const e=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: `+s;throw bt(e),new Error(e)}function H(s,e){s||K()}function se(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class $V{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zV{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0);let n=this.i;const r=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string"),new Oy(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new it(e)}}class WV{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=it.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class KV{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new WV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HV{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Rt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){H(this.o===void 0);const n=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Fm(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string"),this.R=t.token,new Fm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=QV(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function ie(s,e){return s<e?-1:s>e?1:0}function Kr(s,e,t){return s.length===e.length&&s.every((n,r)=>t(n,e[r]))}function Uy(s){return s+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=-62135596800,Xm=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Xm);return new Be(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bm)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xm}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Bm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Be(0,0))}static max(){return new J(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="__name__";class un{constructor(e,t,n){t===void 0?t=0:t>e.length&&K(),n===void 0?n=e.length-t:n>e.length-t&&K(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=un.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=un.isNumericId(e),r=un.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?un.extractNumericId(e).compare(un.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fs.fromString(e.substring(4,e.length-2))}}class Ne extends un{construct(e,t,n){return new Ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const YV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends un{construct(e,t,n){return new Fe(e,t,n)}static isValidIdentifier(e){return YV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qm}static keyField(){return new Fe([qm])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new $(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(i(),r++)}if(i(),o)throw new $(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ne.fromString(e))}static fromName(e){return new z(Ne.fromString(e).popFirst(5))}static empty(){return new z(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-1;class yl{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function ku(s){return s.fields.find(e=>e.kind===2)}function Us(s){return s.fields.filter(e=>e.kind!==2)}yl.UNKNOWN_ID=-1;class Ua{constructor(e,t){this.fieldPath=e,this.kind=t}}class vo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new vo(0,Ot.min())}}function JV(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=J.fromTimestamp(n===1e9?new Be(t+1,0):new Be(t,n));return new Ot(r,z.empty(),e)}function My(s){return new Ot(s.readTime,s.key,Eo)}class Ot{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ot(J.min(),z.empty(),Eo)}static max(){return new Ot(J.max(),z.empty(),Eo)}}function Jh(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(s.documentKey,e.documentKey),t!==0?t:ie(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class By{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(s){if(s.code!==j.FAILED_PRECONDITION||s.message!==Fy)throw s;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,n)=>{t(e)})}static reject(e){return new V((t,n)=>{n(e)})}static waitFor(e){return new V((t,n)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&t()},c=>n(c))}),o=!0,i===r&&t()})}static or(e){let t=V.resolve(!1);for(const n of e)t=t.next(r=>r?V.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,i)=>{n.push(t.call(this,r,i))}),this.waitFor(n)}static mapArray(e,t){return new V((n,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(f=>{o[u]=f,++l,l===i&&n(o)},f=>r(f))}})}static doWhile(e,t){return new V((n,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="SimpleDb";class ec{static open(e,t,n,r){try{return new ec(t,e.transaction(r,n))}catch(i){throw new no(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new _n,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new no(e,t.error)):this.m.resolve()},this.transaction.onerror=n=>{const r=Zh(n.target.error);this.m.reject(new no(e,r))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(U(Ct,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new e0(t)}}class ms{static delete(e){return U(Ct,"Removing database:",e),Fs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ag())return!1;if(ms.v())return!0;const e=He(),t=ms.C(e),n=0<t&&t<10,r=Xy(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.O=n,ms.C(He())===12.2&&bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(U(Ct,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{n(new no(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new $(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new $(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new no(e,o))},r.onupgradeneeded=i=>{U(Ct,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.O.B(o,r.transaction,i.oldVersion,this.version).next(()=>{U(Ct,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const l=ec.open(this.db,e,i?"readonly":"readwrite",n),c=r(l).next(u=>(l.S(),u)).catch(u=>(l.abort(u),V.reject(u))).toPromise();return c.catch(()=>{}),await l.p,c}catch(l){const c=l,u=c.name!=="FirebaseError"&&o<3;if(U(Ct,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Xy(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class ZV{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return Fs(this.q.delete())}}class no extends ${constructor(e,t){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ws(s){return s.name==="IndexedDbTransactionError"}class e0{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(U(Ct,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(U(Ct,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Fs(n)}add(e){return U(Ct,"ADD",this.store.name,e,e),Fs(this.store.add(e))}get(e){return Fs(this.store.get(e)).next(t=>(t===void 0&&(t=null),U(Ct,"GET",this.store.name,e,t),t))}delete(e){return U(Ct,"DELETE",this.store.name,e),Fs(this.store.delete(e))}count(){return U(Ct,"COUNT",this.store.name),Fs(this.store.count())}G(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if(typeof r.getAll=="function"){const i=r.getAll(n.range);return new V((o,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(n),o=[];return this.j(i,(l,c)=>{o.push(c)}).next(()=>o)}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new V((r,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{r(o.target.result)}})}J(e,t){U(Ct,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.j(r,(i,o,l)=>l.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.j(r,t)}X(e){const t=this.cursor({});return new V((n,r)=>{t.onerror=i=>{const o=Zh(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():n()}):n()}})}j(e,t){const n=[];return new V((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void r();const c=new ZV(l),u=t(l.primaryKey,l.value,c);if(u instanceof V){const f=u.catch(p=>(c.done(),V.reject(p)));n.push(f)}c.isDone?r():c.U===null?l.continue():l.continue(c.U)}}).next(()=>V.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Fs(s){return new V((e,t)=>{s.onsuccess=n=>{const r=n.target.result;e(r)},s.onerror=n=>{const r=Zh(n.target.error);t(r)}})}let Gm=!1;function Zh(s){const e=ms.C(He());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(s.message.indexOf(t)>=0){const n=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Gm||(Gm=!0,setTimeout(()=>{throw n},0)),n}}return s}const so="IndexBackfiller";class t0{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){U(so,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();U(so,`Documents written: ${t}`)}catch(t){ws(t)?U(so,"Ignoring IndexedDB error during index backfill: ",t):await fr(t)}await this.te(6e4)})}}class n0{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const n=new Set;let r=t,i=!0;return V.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return U(so,`Processing collection: ${o}`),this.ie(e,o,r).next(l=>{r-=l,n.add(o)});i=!1})).next(()=>t-r)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(r,i)).next(l=>(U(so,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>o.size)}))}se(e,t){let n=e;return t.changes.forEach((r,i)=>{const o=My(i);Jh(o,n)>0&&(n=o)}),new Ot(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.oe(n),this._e=n=>t.writeSequenceNumber(n))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xt.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=-1;function tc(s){return s==null}function No(s){return s===0&&1/s==-1/0}function s0(s){return typeof s=="number"&&Number.isInteger(s)&&!No(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="";function gt(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=$m(e)),e=r0(s.get(t),e);return $m(e)}function r0(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case bl:t+="";break;default:t+=i}}return t}function $m(s){return s+bl+""}function fn(s){const e=s.length;if(H(e>=2),e===2)return H(s.charAt(0)===bl&&s.charAt(1)===""),Ne.emptyPath();const t=e-2,n=[];let r="";for(let i=0;i<e;){const o=s.indexOf(bl,i);switch((o<0||o>t)&&K(),s.charAt(o+1)){case"":const l=s.substring(i,o);let c;r.length===0?c=l:(r+=l,c=r,r=""),n.push(c);break;case"":r+=s.substring(i,o),r+="\0";break;case"":r+=s.substring(i,o+1);break;default:K()}i=o+2}return new Ne(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="remoteDocuments",$o="owner",Ir="owner",Io="mutationQueues",i0="userId",Yt="mutations",zm="batchId",Ws="userMutationsIndex",Wm=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(s,e){return[s,gt(e)]}function qy(s,e,t){return[s,gt(e),t]}const o0={},Hr="documentMutations",El="remoteDocumentsV14",a0=["prefixPath","collectionGroup","readTime","documentId"],Fa="documentKeyIndex",l0=["prefixPath","collectionGroup","documentId"],Gy="collectionGroupIndex",c0=["collectionGroup","readTime","prefixPath","documentId"],wo="remoteDocumentGlobal",Su="remoteDocumentGlobalKey",Qr="targets",$y="queryTargetsIndex",u0=["canonicalId","targetId"],Yr="targetDocuments",h0=["targetId","path"],ed="documentTargetsIndex",d0=["path","targetId"],vl="targetGlobalKey",Qs="targetGlobal",xo="collectionParents",f0=["collectionId","parent"],Jr="clientMetadata",m0="clientId",nc="bundles",p0="bundleId",sc="namedQueries",g0="name",td="indexConfiguration",_0="indexId",Cu="collectionGroupIndex",y0="collectionGroup",Nl="indexState",b0=["indexId","uid"],zy="sequenceNumberIndex",E0=["uid","sequenceNumber"],Il="indexEntries",v0=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Wy="documentKeyIndex",N0=["indexId","uid","orderedDocumentKey"],rc="documentOverlays",I0=["userId","collectionPath","documentId"],Ru="collectionPathOverlayIndex",w0=["userId","collectionPath","largestBatchId"],Ky="collectionGroupOverlayIndex",x0=["userId","collectionGroup","largestBatchId"],nd="globals",T0="name",Hy=[Io,Yt,Hr,Ms,Qr,$o,Qs,Yr,Jr,wo,xo,nc,sc],D0=[...Hy,rc],Qy=[Io,Yt,Hr,El,Qr,$o,Qs,Yr,Jr,wo,xo,nc,sc,rc],Yy=Qy,sd=[...Yy,td,Nl,Il],V0=sd,A0=[...sd,nd];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends By{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Qe(s,e){const t=se(s);return ms.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function mr(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Jy(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new Ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ot(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hm(this.data.getIterator())}getIteratorFrom(e){return new Hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class Hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wr(s){return s.hasNext()?s.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new qt([])}unionWith(e){let t=new we(Fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zy("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const k0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(s){if(H(!!s),typeof s=="string"){let e=0;const t=k0.exec(s);if(H(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Le(s.seconds),nanos:Le(s.nanos)}}function Le(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function zn(s){return typeof s=="string"?We.fromBase64String(s):We.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="server_timestamp",tb="__type__",nb="__previous_value__",sb="__local_write_time__";function rd(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[tb])===null||t===void 0?void 0:t.stringValue)===eb}function ic(s){const e=s.mapValue.fields[nb];return rd(e)?ic(e):e}function To(s){const e=$n(s.mapValue.fields[sb].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t,n,r,i,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const wl="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||wl}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===wl}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="__type__",rb="__max__",cs={mapValue:{fields:{__type__:{stringValue:rb}}}},od="__vector__",Zr="value",Ba={nullValue:"NULL_VALUE"};function ys(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?rd(s)?4:ib(s)?9007199254740991:oc(s)?10:11:K()}function En(s,e){if(s===e)return!0;const t=ys(s);if(t!==ys(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return To(s).isEqual(To(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=$n(r.timestampValue),l=$n(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(r,i){return zn(r.bytesValue).isEqual(zn(i.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(s,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Le(r.doubleValue),l=Le(i.doubleValue);return o===l?No(o)===No(l):isNaN(o)&&isNaN(l)}return!1}(s,e);case 9:return Kr(s.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Km(o)!==Km(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!En(o[c],l[c])))return!1;return!0}(s,e);default:return K()}}function Do(s,e){return(s.values||[]).find(t=>En(t,e))!==void 0}function bs(s,e){if(s===e)return 0;const t=ys(s),n=ys(e);if(t!==n)return ie(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(s.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(s,e);case 3:return Qm(s.timestampValue,e.timestampValue);case 4:return Qm(To(s),To(e));case 5:return ie(s.stringValue,e.stringValue);case 6:return function(i,o){const l=zn(i),c=zn(o);return l.compareTo(c)}(s.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ie(l[u],c[u]);if(f!==0)return f}return ie(l.length,c.length)}(s.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(Le(i.latitude),Le(o.latitude));return l!==0?l:ie(Le(i.longitude),Le(o.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return Ym(s.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},g=o.fields||{},E=(l=p[Zr])===null||l===void 0?void 0:l.arrayValue,T=(c=g[Zr])===null||c===void 0?void 0:c.arrayValue,S=ie(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return S!==0?S:Ym(E,T)}(s.mapValue,e.mapValue);case 11:return function(i,o){if(i===cs.mapValue&&o===cs.mapValue)return 0;if(i===cs.mapValue)return 1;if(o===cs.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=ie(c[p],f[p]);if(g!==0)return g;const E=bs(l[c[p]],u[f[p]]);if(E!==0)return E}return ie(c.length,f.length)}(s.mapValue,e.mapValue);default:throw K()}}function Qm(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ie(s,e);const t=$n(s),n=$n(e),r=ie(t.seconds,n.seconds);return r!==0?r:ie(t.nanos,n.nanos)}function Ym(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=bs(t[r],n[r]);if(i)return i}return ie(t.length,n.length)}function ei(s){return ju(s)}function ju(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=$n(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return zn(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return z.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=ju(i);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${ju(t.fields[o])}`;return r+"}"}(s.mapValue):K()}function Xa(s){switch(ys(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(s);return e?16+Xa(e):16;case 5:return 2*s.stringValue.length;case 6:return zn(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+Xa(i),0)}(s.arrayValue);case 10:case 11:return function(n){let r=0;return mr(n.fields,(i,o)=>{r+=i.length+Xa(o)}),r}(s.mapValue);default:throw K()}}function Vo(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Ou(s){return!!s&&"integerValue"in s}function Ao(s){return!!s&&"arrayValue"in s}function Jm(s){return!!s&&"nullValue"in s}function Zm(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function qa(s){return!!s&&"mapValue"in s}function oc(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[id])===null||t===void 0?void 0:t.stringValue)===od}function ro(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return mr(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ro(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ro(s.arrayValue.values[t]);return e}return Object.assign({},s)}function ib(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===rb}const ob={mapValue:{fields:{[id]:{stringValue:od},[Zr]:{arrayValue:{}}}}};function C0(s){return"nullValue"in s?Ba:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?Vo(ir.empty(),z.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?oc(s)?ob:{mapValue:{}}:K()}function R0(s){return"nullValue"in s?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?Vo(ir.empty(),z.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?ob:"mapValue"in s?oc(s)?{mapValue:{}}:cs:K()}function ep(s,e){const t=bs(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?-1:!s.inclusive&&e.inclusive?1:0}function tp(s,e){const t=bs(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?1:!s.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!qa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(t)}setAll(e){let t=Fe.emptyPath(),n={},r=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=l.popLast()}o?n[l.lastSegment()]=ro(o):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());qa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];qa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){mr(t,(r,i)=>e[r]=i);for(const r of n)delete e[r]}clone(){return new vt(ro(this.value))}}function ab(s){const e=[];return mr(s.fields,(t,n)=>{const r=new Fe([t]);if(qa(n)){const i=ab(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,n,r,i,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new qe(e,0,J.min(),J.min(),J.min(),vt.empty(),0)}static newFoundDocument(e,t,n,r){return new qe(e,1,t,J.min(),n,r,0)}static newNoDocument(e,t){return new qe(e,2,t,J.min(),J.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,J.min(),J.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function np(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=z.comparator(z.fromName(o.referenceValue),t.key):n=bs(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function sp(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!En(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t="asc"){this.field=e,this.dir=t}}function P0(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{}class ge extends lb{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new j0(e,t,n):t==="array-contains"?new U0(e,n):t==="in"?new mb(e,n):t==="not-in"?new M0(e,n):t==="array-contains-any"?new F0(e,n):new ge(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new O0(e,n):new L0(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bs(t,this.value)):t!==null&&ys(this.value)===ys(t)&&this.matchesComparison(bs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends lb{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ie(e,t)}matches(e){return ni(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ni(s){return s.op==="and"}function Lu(s){return s.op==="or"}function ad(s){return cb(s)&&ni(s)}function cb(s){for(const e of s.filters)if(e instanceof Ie)return!1;return!0}function Uu(s){if(s instanceof ge)return s.field.canonicalString()+s.op.toString()+ei(s.value);if(ad(s))return s.filters.map(e=>Uu(e)).join(",");{const e=s.filters.map(t=>Uu(t)).join(",");return`${s.op}(${e})`}}function ub(s,e){return s instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.field.isEqual(r.field)&&En(n.value,r.value)}(s,e):s instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,o,l)=>i&&ub(o,r.filters[l]),!0):!1}(s,e):void K()}function hb(s,e){const t=s.filters.concat(e);return Ie.create(t,s.op)}function db(s){return s instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${ei(t.value)}`}(s):s instanceof Ie?function(t){return t.op.toString()+" {"+t.getFilters().map(db).join(" ,")+"}"}(s):"Filter"}class j0 extends ge{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class O0 extends ge{constructor(e,t){super(e,"in",t),this.keys=fb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class L0 extends ge{constructor(e,t){super(e,"not-in",t),this.keys=fb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fb(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>z.fromName(n.referenceValue))}class U0 extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&Do(t.arrayValue,this.value)}}class mb extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Do(this.value.arrayValue,t)}}class M0 extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Do(this.value.arrayValue,t)}}class F0 extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Do(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t=null,n=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Mu(s,e=null,t=[],n=[],r=null,i=null,o=null){return new B0(s,e,t,n,r,i,o)}function or(s){const e=se(s);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Uu(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ei(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ei(n)).join(",")),e.le=t}return e.le}function zo(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!P0(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!ub(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!sp(s.startAt,e.startAt)&&sp(s.endAt,e.endAt)}function xl(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function Tl(s,e){return s.filters.filter(t=>t instanceof ge&&t.field.isEqual(e))}function rp(s,e,t){let n=Ba,r=!0;for(const i of Tl(s,e)){let o=Ba,l=!0;switch(i.op){case"<":case"<=":o=C0(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ba}ep({value:n,inclusive:r},{value:o,inclusive:l})<0&&(n=o,r=l)}if(t!==null){for(let i=0;i<s.orderBy.length;++i)if(s.orderBy[i].field.isEqual(e)){const o=t.position[i];ep({value:n,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(n=o,r=t.inclusive);break}}return{value:n,inclusive:r}}function ip(s,e,t){let n=cs,r=!0;for(const i of Tl(s,e)){let o=cs,l=!0;switch(i.op){case">=":case">":o=R0(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=cs}tp({value:n,inclusive:r},{value:o,inclusive:l})>0&&(n=o,r=l)}if(t!==null){for(let i=0;i<s.orderBy.length;++i)if(s.orderBy[i].field.isEqual(e)){const o=t.position[i];tp({value:n,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(n=o,r=t.inclusive);break}}return{value:n,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t=null,n=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function X0(s,e,t,n,r,i,o,l){return new gi(s,e,t,n,r,i,o,l)}function Wo(s){return new gi(s)}function op(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function pb(s){return s.collectionGroup!==null}function io(s){const e=se(s);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new we(Fe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new ko(i,n))}),t.has(Fe.keyField().canonicalString())||e.he.push(new ko(Fe.keyField(),n))}return e.he}function Gt(s){const e=se(s);return e.Pe||(e.Pe=q0(e,io(s))),e.Pe}function q0(s,e){if(s.limitType==="F")return Mu(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ko(r.field,i)});const t=s.endAt?new ti(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new ti(s.startAt.position,s.startAt.inclusive):null;return Mu(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Fu(s,e){const t=s.filters.concat([e]);return new gi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Bu(s,e,t){return new gi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function ac(s,e){return zo(Gt(s),Gt(e))&&s.limitType===e.limitType}function gb(s){return`${or(Gt(s))}|lt:${s.limitType}`}function kr(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>db(r)).join(", ")}]`),tc(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ei(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ei(r)).join(",")),`Target(${n})`}(Gt(s))}; limitType=${s.limitType})`}function Ko(s,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(s,e)&&function(n,r){for(const i of io(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(s,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(s,e)&&function(n,r){return!(n.startAt&&!function(o,l,c){const u=np(o,l,c);return o.inclusive?u<=0:u<0}(n.startAt,io(n),r)||n.endAt&&!function(o,l,c){const u=np(o,l,c);return o.inclusive?u>=0:u>0}(n.endAt,io(n),r))}(s,e)}function G0(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function _b(s){return(e,t)=>{let n=!1;for(const r of io(s)){const i=$0(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function $0(s,e,t){const n=s.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?bs(c,u):K()}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Jy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Ue(z.comparator);function Pt(){return z0}const yb=new Ue(z.comparator);function zi(...s){let e=yb;for(const t of s)e=e.insert(t.key,t);return e}function bb(s){let e=yb;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function mn(){return oo()}function Eb(){return oo()}function oo(){return new Kn(s=>s.toString(),(s,e)=>s.isEqual(e))}const W0=new Ue(z.comparator),K0=new we(z.comparator);function le(...s){let e=K0;for(const t of s)e=e.add(t);return e}const H0=new we(ie);function Q0(){return H0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function vb(s){return{integerValue:""+s}}function Y0(s,e){return s0(e)?vb(e):ld(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._=void 0}}function J0(s,e,t){return s instanceof So?function(r,i){const o={fields:{[tb]:{stringValue:eb},[sb]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&rd(i)&&(i=ic(i)),i&&(o.fields[nb]=i),{mapValue:o}}(t,e):s instanceof si?Ib(s,e):s instanceof ri?wb(s,e):function(r,i){const o=Nb(r,i),l=ap(o)+ap(r.Ie);return Ou(o)&&Ou(r.Ie)?vb(l):ld(r.serializer,l)}(s,e)}function Z0(s,e,t){return s instanceof si?Ib(s,e):s instanceof ri?wb(s,e):t}function Nb(s,e){return s instanceof Co?function(n){return Ou(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class So extends lc{}class si extends lc{constructor(e){super(),this.elements=e}}function Ib(s,e){const t=xb(e);for(const n of s.elements)t.some(r=>En(r,n))||t.push(n);return{arrayValue:{values:t}}}class ri extends lc{constructor(e){super(),this.elements=e}}function wb(s,e){let t=xb(e);for(const n of s.elements)t=t.filter(r=>!En(r,n));return{arrayValue:{values:t}}}class Co extends lc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ap(s){return Le(s.integerValue||s.doubleValue)}function xb(s){return Ao(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.field=e,this.transform=t}}function tA(s,e){return s.field.isEqual(e.field)&&function(n,r){return n instanceof si&&r instanceof si||n instanceof ri&&r instanceof ri?Kr(n.elements,r.elements,En):n instanceof Co&&r instanceof Co?En(n.Ie,r.Ie):n instanceof So&&r instanceof So}(s.transform,e.transform)}class nA{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class cc{}function Tb(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new cd(s.key,jt.none()):new _i(s.key,s.data,jt.none());{const t=s.data,n=vt.empty();let r=new we(Fe.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new xs(s.key,n,new qt(r.toArray()),jt.none())}}function sA(s,e,t){s instanceof _i?function(r,i,o){const l=r.value.clone(),c=cp(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(s,e,t):s instanceof xs?function(r,i,o){if(!Ga(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=cp(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Db(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(s,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ao(s,e,t,n){return s instanceof _i?function(i,o,l,c){if(!Ga(i.precondition,o))return l;const u=i.value.clone(),f=up(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(s,e,t,n):s instanceof xs?function(i,o,l,c){if(!Ga(i.precondition,o))return l;const u=up(i.fieldTransforms,c,o),f=o.data;return f.setAll(Db(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(s,e,t,n):function(i,o,l){return Ga(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(s,e,t)}function rA(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=Nb(n.transform,r||null);i!=null&&(t===null&&(t=vt.empty()),t.set(n.field,i))}return t||null}function lp(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Kr(n,r,(i,o)=>tA(i,o))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class _i extends cc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xs extends cc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Db(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function cp(s,e,t){const n=new Map;H(s.length===t.length);for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,l=e.data.field(i.field);n.set(i.field,Z0(o,l,t[r]))}return n}function up(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,J0(i,o,e))}return n}class cd extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vb extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sA(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ao(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ao(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Eb();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(r.key)?null:l;const c=Tb(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(t,n)=>lp(t,n))&&Kr(this.baseMutations,e.baseMutations,(t,n)=>lp(t,n))}}class hd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){H(e.mutations.length===n.length);let r=function(){return W0}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new hd(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,_e;function oA(s){switch(s){case j.OK:return K();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return K()}}function Ab(s){if(s===void 0)return bt("GRPC error has no .code"),j.UNKNOWN;switch(s){case ze.OK:return j.OK;case ze.CANCELLED:return j.CANCELLED;case ze.UNKNOWN:return j.UNKNOWN;case ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ze.INTERNAL:return j.INTERNAL;case ze.UNAVAILABLE:return j.UNAVAILABLE;case ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ze.NOT_FOUND:return j.NOT_FOUND;case ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ze.ABORTED:return j.ABORTED;case ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ze.DATA_LOSS:return j.DATA_LOSS;default:return K()}}(_e=ze||(ze={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new fs([4294967295,4294967295],0);function hp(s){const e=aA().encode(s),t=new ky;return t.update(e),new Uint8Array(t.digest())}function dp(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fs([t,n],0),new fs([r,i],0)]}class fd{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Wi(`Invalid padding: ${t}`);if(n<0)throw new Wi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=fs.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(fs.fromNumber(n)));return r.compare(lA)===1&&(r=new fs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=hp(e),[n,r]=dp(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(n,r,i);if(!this.Re(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fd(i,r,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const t=hp(e),[n,r]=dp(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(n,r,i);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new uc(J.min(),r,new Ue(ie),Pt(),le())}}class Ho{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ho(n,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class kb{constructor(e,t){this.targetId=e,this.ge=t}}class Sb{constructor(e,t,n=We.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class fp{constructor(){this.pe=0,this.ye=mp(),this.we=We.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=le(),t=le(),n=le();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:K()}}),new Ho(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=mp()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,H(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class cA{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Pt(),this.$e=Na(),this.Ke=Na(),this.Ue=new Ue(ie)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((n,r)=>{this.Je(r)&&t(r)})}Ze(e){const t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){const i=r.target;if(xl(i))if(n===0){const o=new z(i.path);this.ze(t,o,qe.newNoDocument(o,J.min()))}else H(n===1);else{const o=this.et(t);if(o!==n){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,l;try{o=zn(n).toUint8Array()}catch(c){if(c instanceof Zy)return rr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new fd(o,r,i)}catch(c){return rr(c instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),r++)}),r}ot(e){const t=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&xl(l.target)){const c=new z(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,qe.newNoDocument(c,e))}i.ve&&(t.set(o,i.Fe()),i.Me())}});let n=le();this.Ke.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const r=new uc(e,t,this.Ue,this.Qe,n);return this.Qe=Pt(),this.$e=Na(),this.Ke=Na(),this.Ue=new Ue(ie),r}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new fp,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new we(ie),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new we(ie),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new fp),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Na(){return new Ue(z.comparator)}function mp(){return new Ue(z.comparator)}const uA={asc:"ASCENDING",desc:"DESCENDING"},hA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dA={and:"AND",or:"OR"};class fA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xu(s,e){return s.useProto3Json||tc(e)?e:{value:e}}function ii(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cb(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function mA(s,e){return ii(s,e.toTimestamp())}function Et(s){return H(!!s),J.fromTimestamp(function(t){const n=$n(t);return new Be(n.seconds,n.nanos)}(s))}function md(s,e){return qu(s,e).canonicalString()}function qu(s,e){const t=function(r){return new Ne(["projects",r.projectId,"databases",r.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Rb(s){const e=Ne.fromString(s);return H(Xb(e)),e}function Dl(s,e){return md(s.databaseId,e.path)}function Ys(s,e){const t=Rb(e);if(t.get(1)!==s.databaseId.projectId)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new $(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new z(Ob(t))}function Pb(s,e){return md(s.databaseId,e)}function jb(s){const e=Rb(s);return e.length===4?Ne.emptyPath():Ob(e)}function Gu(s){return new Ne(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Ob(s){return H(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function pp(s,e,t){return{name:Dl(s,e),fields:t.value.mapValue.fields}}function pA(s,e,t){const n=Ys(s,e.name),r=Et(e.updateTime),i=e.createTime?Et(e.createTime):J.min(),o=new vt({mapValue:{fields:e.fields}}),l=qe.newFoundDocument(n,r,i,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function gA(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(H(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(s,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?j.UNKNOWN:Ab(u.code);return new $(f,u.message||"")}(o);t=new Sb(n,r,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=Ys(s,n.document.name),i=Et(n.document.updateTime),o=n.document.createTime?Et(n.document.createTime):J.min(),l=new vt({mapValue:{fields:n.document.fields}}),c=qe.newFoundDocument(r,i,o,l),u=n.targetIds||[],f=n.removedTargetIds||[];t=new $a(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=Ys(s,n.document),i=n.readTime?Et(n.readTime):J.min(),o=qe.newNoDocument(r,i),l=n.removedTargetIds||[];t=new $a([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=Ys(s,n.document),i=n.removedTargetIds||[];t=new $a([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new iA(r,i),l=n.targetId;t=new kb(l,o)}}return t}function Vl(s,e){let t;if(e instanceof _i)t={update:pp(s,e.key,e.value)};else if(e instanceof cd)t={delete:Dl(s,e.key)};else if(e instanceof xs)t={update:pp(s,e.key,e.data),updateMask:NA(e.fieldMask)};else{if(!(e instanceof Vb))return K();t={verify:Dl(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const l=o.transform;if(l instanceof So)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw K()}(0,n))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:mA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(s,e.precondition)),t}function $u(s,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?jt.updateTime(Et(i.updateTime)):i.exists!==void 0?jt.exists(i.exists):jt.none()}(e.currentDocument):jt.none(),n=e.updateTransforms?e.updateTransforms.map(r=>function(o,l){let c=null;if("setToServerValue"in l)H(l.setToServerValue==="REQUEST_TIME"),c=new So;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];c=new si(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];c=new ri(f)}else"increment"in l?c=new Co(o,l.increment):K();const u=Fe.fromServerFormat(l.fieldPath);return new eA(u,c)}(s,r)):[];if(e.update){e.update.name;const r=Ys(s,e.update.name),i=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new qt(u.map(f=>Fe.fromServerFormat(f)))}(e.updateMask);return new xs(r,i,o,t,n)}return new _i(r,i,t,n)}if(e.delete){const r=Ys(s,e.delete);return new cd(r,t)}if(e.verify){const r=Ys(s,e.verify);return new Vb(r,t)}return K()}function _A(s,e){return s&&s.length>0?(H(e!==void 0),s.map(t=>function(r,i){let o=r.updateTime?Et(r.updateTime):Et(i);return o.isEqual(J.min())&&(o=Et(i)),new nA(o,r.transformResults||[])}(t,e))):[]}function Lb(s,e){return{documents:[Pb(s,e.path)]}}function Ub(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Pb(s,r);const i=function(u){if(u.length!==0)return Bb(Ie.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Sr(g.field),direction:bA(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Xu(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:r}}function Mb(s){let e=jb(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){H(n===1);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=Fb(p);return g instanceof Ie&&ad(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(T){return new ko(Cr(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,tc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new ti(E,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new ti(E,g)}(t.endAt)),X0(e,r,o,i,l,"F",c,u)}function yA(s,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fb(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Cr(t.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cr(t.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(s):s.fieldFilter!==void 0?function(t){return ge.create(Cr(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return Ie.create(t.compositeFilter.filters.map(n=>Fb(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(s):K()}function bA(s){return uA[s]}function EA(s){return hA[s]}function vA(s){return dA[s]}function Sr(s){return{fieldPath:s.canonicalString()}}function Cr(s){return Fe.fromServerFormat(s.fieldPath)}function Bb(s){return s instanceof ge?function(t){if(t.op==="=="){if(Zm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NAN"}};if(Jm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NAN"}};if(Jm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(t.field),op:EA(t.op),value:t.value}}}(s):s instanceof Ie?function(t){const n=t.getFilters().map(r=>Bb(r));return n.length===1?n[0]:{compositeFilter:{op:vA(t.op),filters:n}}}(s):K()}function NA(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xb(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n,r,i=J.min(),o=J.min(),l=We.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.Tt=e}}function IA(s,e){let t;if(e.document)t=pA(s.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=z.fromSegments(e.noDocument.path),r=lr(e.noDocument.readTime);t=qe.newNoDocument(n,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const n=z.fromSegments(e.unknownDocument.path),r=lr(e.unknownDocument.version);t=qe.newUnknownDocument(n,r)}}return e.readTime&&t.setReadTime(function(r){const i=new Be(r[0],r[1]);return J.fromTimestamp(i)}(e.readTime)),t}function gp(s,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Al(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Dl(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ii(i,o.version.toTimestamp()),createTime:ii(i,o.createTime.toTimestamp())}}(s.Tt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:ar(e.version)};else{if(!e.isUnknownDocument())return K();n.unknownDocument={path:t.path.toArray(),version:ar(e.version)}}return n}function Al(s){const e=s.toTimestamp();return[e.seconds,e.nanoseconds]}function ar(s){const e=s.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function lr(s){const e=new Be(s.seconds,s.nanoseconds);return J.fromTimestamp(e)}function Bs(s,e){const t=(e.baseMutations||[]).map(i=>$u(s.Tt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const l=e.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>$u(s.Tt,i)),r=Be.fromMillis(e.localWriteTimeMs);return new ud(e.batchId,r,t,n)}function Ki(s){const e=lr(s.readTime),t=s.lastLimboFreeSnapshotVersion!==void 0?lr(s.lastLimboFreeSnapshotVersion):J.min();let n;return n=function(i){return i.documents!==void 0}(s.query)?function(i){return H(i.documents.length===1),Gt(Wo(jb(i.documents[0])))}(s.query):function(i){return Gt(Mb(i))}(s.query),new Ln(n,s.targetId,"TargetPurposeListen",s.lastListenSequenceNumber,e,t,We.fromBase64String(s.resumeToken))}function Gb(s,e){const t=ar(e.snapshotVersion),n=ar(e.lastLimboFreeSnapshotVersion);let r;r=xl(e.target)?Lb(s.Tt,e.target):Ub(s.Tt,e.target).ht;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:or(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:r}}function $b(s){const e=Mb({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Bu(e,e.limit,"L"):e}function Qc(s,e){return new dd(e.largestBatchId,$u(s.Tt,e.overlayMutation))}function _p(s,e){const t=e.path.lastSegment();return[s,gt(e.path.popLast()),t]}function yp(s,e,t,n){return{indexId:s,uid:e,sequenceNumber:t,readTime:ar(n.readTime),documentKey:gt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{getBundleMetadata(e,t){return bp(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:lr(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return bp(e).put(function(r){return{bundleId:r.id,createTime:ar(Et(r.createTime)),version:r.version}}(t))}getNamedQuery(e,t){return Ep(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:$b(i.bundledQuery),readTime:lr(i.readTime)}}(n)})}saveNamedQuery(e,t){return Ep(e).put(function(r){return{name:r.name,readTime:ar(Et(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function bp(s){return Qe(s,nc)}function Ep(s){return Qe(s,sc)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const n=t.uid||"";return new hc(e,n)}getOverlay(e,t){return Mi(e).get(_p(this.userId,t)).next(n=>n?Qc(this.serializer,n):null)}getOverlays(e,t){const n=mn();return V.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&n.set(r,i)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((i,o)=>{const l=new dd(t,o);r.push(this.Et(e,l))}),V.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(o=>r.add(gt(o.getCollectionPath())));const i=[];return r.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Mi(e).J(Ru,l))}),V.waitFor(i)}getOverlaysForCollection(e,t,n){const r=mn(),i=gt(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Mi(e).G(Ru,o).next(l=>{for(const c of l){const u=Qc(this.serializer,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=mn();let o;const l=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Mi(e).Z({index:Ky,range:l},(c,u,f)=>{const p=Qc(this.serializer,u);i.size()<r||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}Et(e,t){return Mi(e).put(function(r,i,o){const[l,c,u]=_p(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Vl(r.Tt,o.mutation)}}(this.serializer,this.userId,t))}}function Mi(s){return Qe(s,rc)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{dt(e){return Qe(e,nd)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?We.fromUint8Array(n):We.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(Le(e.integerValue));else if("doubleValue"in e){const n=Le(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),No(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),typeof n=="string"&&(n=$n(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(zn(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?ib(e)?this.ft(t,Number.MAX_SAFE_INTEGER):oc(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):K()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const n=e.fields||{};this.ft(t,55);for(const r of Object.keys(n))this.wt(r,t),this.Rt(n[r],t)}vt(e,t){var n,r;const i=e.fields||{};this.ft(t,53);const o=Zr,l=((r=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.length)||0;this.ft(t,15),t.gt(Le(l)),this.wt(o,t),this.Rt(i[o],t)}Ft(e,t){const n=e.values||[];this.ft(t,50);for(const r of n)this.Rt(r,t)}Dt(e,t){this.ft(t,37),z.fromName(e).path.forEach(n=>{this.ft(t,60),this.Mt(n,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}Xs.xt=new Xs;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=255;function TA(s){if(s===0)return 8;let e=0;return s>>4||(e+=4,s<<=4),s>>6||(e+=2,s<<=2),s>>7||(e+=1),e}function vp(s){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const o=TA(255&n[i]);if(r+=o,o!==8)break}return r}(s);return Math.ceil(e/8)}class DA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Nt(n.value),n=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.kt(n.value),n=t.next();this.qt()}Qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const r=t.codePointAt(0);this.Nt(240|r>>>18),this.Nt(128|63&r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r)}}this.Bt()}$t(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const r=t.codePointAt(0);this.kt(240|r>>>18),this.kt(128|63&r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r)}}this.qt()}Kt(e){const t=this.Ut(e),n=vp(t);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Gt(e){const t=this.Ut(e),n=vp(t);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}zt(){this.jt(xr),this.jt(255)}Ht(){this.Jt(xr),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===xr?(this.jt(xr),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===xr?(this.Jt(xr),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class VA{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class AA{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class Fi{constructor(){this.Zt=new DA,this.Xt=new VA(this.Zt),this.en=new AA(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new qs(this.indexId,this.documentKey,this.arrayValue,n)}}function ts(s,e){let t=s.indexId-e.indexId;return t!==0?t:(t=Np(s.arrayValue,e.arrayValue),t!==0?t:(t=Np(s.directionalValue,e.directionalValue),t!==0?t:z.comparator(s.documentKey,e.documentKey)))}function Np(s,e){for(let t=0;t<s.length&&t<e.length;++t){const n=s[t]-e[t];if(n!==0)return n}return s.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.rn=new we((t,n)=>Fe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const n=t;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(e){if(H(e.collectionGroup===this.collectionId),this.an)return!1;const t=ku(e);if(t!==void 0&&!this.cn(t))return!1;const n=Us(e);let r=new Set,i=0,o=0;for(;i<n.length&&this.cn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const l=this.rn.getIterator().getNext();if(!r.has(l.field.canonicalString())){const c=n[i];if(!this.ln(l,c)||!this.hn(this.sn[o++],c))return!1}++i}for(;i<n.length;++i){const l=n[i];if(o>=this.sn.length||!this.hn(this.sn[o++],l))return!1}return!0}Pn(){if(this.an)return null;let e=new we(Fe.comparator);const t=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Ua(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ua(n.field,0))}for(const n of this.sn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ua(n.field,n.dir==="asc"?0:1)));return new yl(yl.UNKNOWN_ID,this.collectionId,t,vo.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(s){var e,t;if(H(s instanceof ge||s instanceof Ie),s instanceof ge){if(s instanceof mb){const r=((t=(e=s.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ge.create(s.field,"==",i)))||[];return Ie.create(r,"or")}return s}const n=s.filters.map(r=>zb(r));return Ie.create(n,s.op)}function kA(s){if(s.getFilters().length===0)return[];const e=Ku(zb(s));return H(Wb(e)),zu(e)||Wu(e)?[e]:e.getFilters()}function zu(s){return s instanceof ge}function Wu(s){return s instanceof Ie&&ad(s)}function Wb(s){return zu(s)||Wu(s)||function(t){if(t instanceof Ie&&Lu(t)){for(const n of t.getFilters())if(!zu(n)&&!Wu(n))return!1;return!0}return!1}(s)}function Ku(s){if(H(s instanceof ge||s instanceof Ie),s instanceof ge)return s;if(s.filters.length===1)return Ku(s.filters[0]);const e=s.filters.map(n=>Ku(n));let t=Ie.create(e,s.op);return t=kl(t),Wb(t)?t:(H(t instanceof Ie),H(ni(t)),H(t.filters.length>1),t.filters.reduce((n,r)=>pd(n,r)))}function pd(s,e){let t;return H(s instanceof ge||s instanceof Ie),H(e instanceof ge||e instanceof Ie),t=s instanceof ge?e instanceof ge?function(r,i){return Ie.create([r,i],"and")}(s,e):wp(s,e):e instanceof ge?wp(e,s):function(r,i){if(H(r.filters.length>0&&i.filters.length>0),ni(r)&&ni(i))return hb(r,i.getFilters());const o=Lu(r)?r:i,l=Lu(r)?i:r,c=o.filters.map(u=>pd(u,l));return Ie.create(c,"or")}(s,e),kl(t)}function wp(s,e){if(ni(e))return hb(e,s.getFilters());{const t=e.filters.map(n=>pd(s,n));return Ie.create(t,"or")}}function kl(s){if(H(s instanceof ge||s instanceof Ie),s instanceof ge)return s;const e=s.getFilters();if(e.length===1)return kl(e[0]);if(cb(s))return s;const t=e.map(r=>kl(r)),n=[];return t.forEach(r=>{r instanceof ge?n.push(r):r instanceof Ie&&(r.op===s.op?n.push(...r.filters):n.push(r))}),n.length===1?n[0]:Ie.create(n,s.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.Tn=new gd}addToCollectionParentIndex(e,t){return this.Tn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Ot.min())}updateCollectionGroup(e,t,n){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class gd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new we(Ne.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new we(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="IndexedDbIndexManager",Ia=new Uint8Array(0);class CA{constructor(e,t){this.databaseId=t,this.In=new gd,this.En=new Kn(n=>or(n),(n,r)=>zo(n,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const i={collectionId:n,parent:gt(r)};return Tp(e).put(i)}return V.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Uy(t),""],!1,!0);return Tp(e).G(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(fn(o.parent))}return n})}addFieldIndex(e,t){const n=Bi(e),r=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const o=Dr(e);return i.next(l=>{o.put(yp(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Bi(e),r=Dr(e),i=Tr(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Bi(e),n=Tr(e),r=Dr(e);return t.J().next(()=>n.J()).next(()=>r.J())}createTargetIndexes(e,t){return V.forEach(this.dn(t),n=>this.getIndexType(e,n).next(r=>{if(r===0||r===1){const i=new Ip(n).Pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Tr(e);let r=!0;const i=new Map;return V.forEach(this.dn(t),o=>this.An(e,o).next(l=>{r&&(r=!!l),i.set(o,l)})).next(()=>{if(r){let o=le();const l=[];return V.forEach(i,(c,u)=>{U(xp,`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(c)} to execute ${or(t)}`);const f=function(M,Q){const re=ku(Q);if(re===void 0)return null;for(const Y of Tl(M,re.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(u,c),p=function(M,Q){const re=new Map;for(const Y of Us(Q))for(const I of Tl(M,Y.fieldPath))switch(I.op){case"==":case"in":re.set(Y.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return re.set(Y.fieldPath.canonicalString(),I.value),Array.from(re.values())}return null}(u,c),g=function(M,Q){const re=[];let Y=!0;for(const I of Us(Q)){const y=I.kind===0?rp(M,I.fieldPath,M.startAt):ip(M,I.fieldPath,M.startAt);re.push(y.value),Y&&(Y=y.inclusive)}return new ti(re,Y)}(u,c),E=function(M,Q){const re=[];let Y=!0;for(const I of Us(Q)){const y=I.kind===0?ip(M,I.fieldPath,M.endAt):rp(M,I.fieldPath,M.endAt);re.push(y.value),Y&&(Y=y.inclusive)}return new ti(re,Y)}(u,c),T=this.Rn(c,u,g),S=this.Rn(c,u,E),k=this.Vn(c,u,p),G=this.mn(c.indexId,f,T,g.inclusive,S,E.inclusive,k);return V.forEach(G,F=>n.H(F,t.limit).next(M=>{M.forEach(Q=>{const re=z.fromSegments(Q.documentKey);o.has(re)||(o=o.add(re),l.push(re))})}))}).next(()=>l)}return V.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=kA(Ie.create(e.filters,"and")).map(n=>Mu(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,n,r,i,o,l){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),u=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const g=t?this.fn(t[p/u]):Ia,E=this.gn(e,g,n[p%u],r),T=this.pn(e,g,i[p%u],o),S=l.map(k=>this.gn(e,g,k,!0));f.push(...this.createRange(E,T,S))}return f}gn(e,t,n,r){const i=new qs(e,z.empty(),t,n);return r?i:i.nn()}pn(e,t,n,r){const i=new qs(e,z.empty(),t,n);return r?i.nn():i}An(e,t){const n=new Ip(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const l of i)n.un(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,t){let n=2;const r=this.dn(t);return V.forEach(r,i=>this.An(e,i).next(o=>{o?n!==0&&o.fields.length<function(c){let u=new we(Fe.comparator),f=!1;for(const p of c.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:u=u.add(g.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&r.length>1&&n===2?1:n)}yn(e,t){const n=new Fi;for(const r of Us(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=n.tn(r.kind);Xs.xt.At(i,o)}return n.Yt()}fn(e){const t=new Fi;return Xs.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const n=new Fi;return Xs.xt.At(Vo(this.databaseId,t),n.tn(function(i){const o=Us(i);return o.length===0?0:o[o.length-1].kind}(e))),n.Yt()}Vn(e,t,n){if(n===null)return[];let r=[];r.push(new Fi);let i=0;for(const o of Us(e)){const l=n[i++];for(const c of r)if(this.Sn(t,o.fieldPath)&&Ao(l))r=this.bn(r,o,l);else{const u=c.tn(o.kind);Xs.xt.At(l,u)}}return this.Dn(r)}Rn(e,t,n){return this.Vn(e,t,n.position)}Dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Yt();return t}bn(e,t,n){const r=[...e],i=[];for(const o of n.arrayValue.values||[])for(const l of r){const c=new Fi;c.seed(l.Yt()),Xs.xt.At(o,c.tn(t.kind)),i.push(c)}return i}Sn(e,t){return!!e.filters.find(n=>n instanceof ge&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Bi(e),r=Dr(e);return(t?n.G(Cu,IDBKeyRange.bound(t,t)):n.G()).next(i=>{const o=[];return V.forEach(i,l=>r.get([l.indexId,this.uid]).next(c=>{o.push(function(f,p){const g=p?new vo(p.sequenceNumber,new Ot(lr(p.readTime),new z(fn(p.documentKey)),p.largestBatchId)):vo.empty(),E=f.fields.map(([T,S])=>new Ua(Fe.fromServerFormat(T),S));return new yl(f.indexId,f.collectionGroup,E,g)}(l,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,r)=>{const i=n.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:ie(n.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Bi(e),i=Dr(e);return this.vn(e).next(o=>r.G(Cu,IDBKeyRange.bound(t,t)).next(l=>V.forEach(l,c=>i.put(yp(c.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return V.forEach(t,(r,i)=>{const o=n.get(r.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(l=>(n.set(r.collectionGroup,l),V.forEach(l,c=>this.Cn(e,r,c).next(u=>{const f=this.Fn(i,c);return u.isEqual(f)?V.resolve():this.Mn(e,i,c,u,f)}))))})}xn(e,t,n,r){return Tr(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.wn(n,t.key),documentKey:t.key.path.toArray()})}On(e,t,n,r){return Tr(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.wn(n,t.key),t.key.path.toArray()])}Cn(e,t,n){const r=Tr(e);let i=new we(ts);return r.Z({index:Wy,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,t)])},(o,l)=>{i=i.add(new qs(n.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>i)}Fn(e,t){let n=new we(ts);const r=this.yn(t,e);if(r==null)return n;const i=ku(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ao(o))for(const l of o.arrayValue.values||[])n=n.add(new qs(t.indexId,e.key,this.fn(l),r))}else n=n.add(new qs(t.indexId,e.key,Ia,r));return n}Mn(e,t,n,r,i){U(xp,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,f,p,g){const E=c.getIterator(),T=u.getIterator();let S=wr(E),k=wr(T);for(;S||k;){let G=!1,F=!1;if(S&&k){const M=f(S,k);M<0?F=!0:M>0&&(G=!0)}else S!=null?F=!0:G=!0;G?(p(k),k=wr(T)):F?(g(S),S=wr(E)):(S=wr(E),k=wr(T))}}(r,i,ts,l=>{o.push(this.xn(e,t,n,l))},l=>{o.push(this.On(e,t,n,l))}),V.waitFor(o)}vn(e){let t=1;return Dr(e).Z({index:zy,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,l)=>ts(o,l)).filter((o,l,c)=>!l||ts(o,c[l-1])!==0);const r=[];r.push(e);for(const o of n){const l=ts(o,e),c=ts(o,t);if(l===0)r[0]=e.nn();else if(l>0&&c<0)r.push(o),r.push(o.nn());else if(c>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2){if(this.Nn(r[o],r[o+1]))return[];const l=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,Ia,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,Ia,[]];i.push(IDBKeyRange.bound(l,c))}return i}Nn(e,t){return ts(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Dp)}getMinOffset(e,t){return V.mapArray(this.dn(t),n=>this.An(e,n).next(r=>r||K())).next(Dp)}}function Tp(s){return Qe(s,xo)}function Tr(s){return Qe(s,Il)}function Bi(s){return Qe(s,td)}function Dr(s){return Qe(s,Nl)}function Dp(s){H(s.length!==0);let e=s[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<s.length;n++){const r=s[n].indexState.offset;Jh(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Ot(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kb=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(s,e,t){const n=s.store(Yt),r=s.store(Hr),i=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=n.Z({range:o},(f,p,g)=>(l++,g.delete()));i.push(c.next(()=>{H(l===1)}));const u=[];for(const f of t.mutations){const p=qy(e,f.key.path,t.batchId);i.push(r.delete(p)),u.push(f.key)}return V.waitFor(i).next(()=>u)}function Sl(s){if(!s)return 0;let e;if(s.document)e=s.document;else if(s.unknownDocument)e=s.unknownDocument;else{if(!s.noDocument)throw K();e=s.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(Kb,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);class dc{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Bn={}}static It(e,t,n,r){H(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new dc(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).Z({index:Ws,range:n},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Rr(e),o=ns(e);return o.add({}).next(l=>{H(typeof l=="number");const c=new ud(l,t,n,r),u=function(E,T,S){const k=S.baseMutations.map(F=>Vl(E.Tt,F)),G=S.mutations.map(F=>Vl(E.Tt,F));return{userId:T,batchId:S.batchId,localWriteTimeMs:S.localWriteTime.toMillis(),baseMutations:k,mutations:G}}(this.serializer,this.userId,c),f=[];let p=new we((g,E)=>ie(g.canonicalString(),E.canonicalString()));for(const g of r){const E=qy(this.userId,g.key.path,l);p=p.add(g.key.path.popLast()),f.push(o.put(u)),f.push(i.put(E,o0))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Bn[l]=c.keys()}),V.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return ns(e).get(t).next(n=>n?(H(n.userId===this.userId),Bs(this.serializer,n)):null)}Ln(e,t){return this.Bn[t]?V.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const r=n.keys();return this.Bn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ns(e).Z({index:Ws,range:r},(o,l,c)=>{l.userId===this.userId&&(H(l.batchId>=n),i=Bs(this.serializer,l)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Hs;return ns(e).Z({index:Ws,range:t,reverse:!0},(r,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Hs],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).G(Ws,t).next(n=>n.map(r=>Bs(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ma(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Rr(e).Z({range:r},(o,l,c)=>{const[u,f,p]=o,g=fn(f);if(u===this.userId&&t.path.isEqual(g))return ns(e).get(p).next(E=>{if(!E)throw K();H(E.userId===this.userId),i.push(Bs(this.serializer,E))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new we(ie);const r=[];return t.forEach(i=>{const o=Ma(this.userId,i.path),l=IDBKeyRange.lowerBound(o),c=Rr(e).Z({range:l},(u,f,p)=>{const[g,E,T]=u,S=fn(E);g===this.userId&&i.path.isEqual(S)?n=n.add(T):p.done()});r.push(c)}),V.waitFor(r).next(()=>this.kn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ma(this.userId,n),o=IDBKeyRange.lowerBound(i);let l=new we(ie);return Rr(e).Z({range:o},(c,u,f)=>{const[p,g,E]=c,T=fn(g);p===this.userId&&n.isPrefixOf(T)?T.length===r&&(l=l.add(E)):f.done()}).next(()=>this.kn(e,l))}kn(e,t){const n=[],r=[];return t.forEach(i=>{r.push(ns(e).get(i).next(o=>{if(o===null)throw K();H(o.userId===this.userId),n.push(Bs(this.serializer,o))}))}),V.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Hb(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),V.forEach(n,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return V.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),r=[];return Rr(e).Z({range:n},(i,o,l)=>{if(i[0]===this.userId){const c=fn(i[1]);r.push(c)}else l.done()}).next(()=>{H(r.length===0)})})}containsKey(e,t){return Qb(e,this.userId,t)}Qn(e){return Yb(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Hs,lastStreamToken:""})}}function Qb(s,e,t){const n=Ma(e,t.path),r=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Rr(s).Z({range:i,Y:!0},(l,c,u)=>{const[f,p,g]=l;f===e&&p===r&&(o=!0),u.done()}).next(()=>o)}function ns(s){return Qe(s,Yt)}function Rr(s){return Qe(s,Hr)}function Yb(s){return Qe(s,Io)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new cr(0)}static Un(){return new cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const n=new cr(t.highestTargetId);return t.highestTargetId=n.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>J.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Wn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Gn(e,r)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(n=>(n.targetCount+=1,this.jn(t,n),this.Gn(e,n))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Vr(e).delete(t.targetId)).next(()=>this.Wn(e)).next(n=>(H(n.targetCount>0),n.targetCount-=1,this.Gn(e,n)))}removeTargets(e,t,n){let r=0;const i=[];return Vr(e).Z((o,l)=>{const c=Ki(l);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>V.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Vr(e).Z((n,r)=>{const i=Ki(r);t(i)})}Wn(e){return Ap(e).get(vl).next(t=>(H(t!==null),t))}Gn(e,t){return Ap(e).put(vl,t)}zn(e,t){return Vr(e).put(Gb(this.serializer,t))}jn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=or(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Vr(e).Z({range:r,index:$y},(o,l,c)=>{const u=Ki(l);zo(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=ls(e);return t.forEach(o=>{const l=gt(o.path);r.push(i.put({targetId:n,path:l})),r.push(this.referenceDelegate.addReference(e,n,o))}),V.waitFor(r)}removeMatchingKeys(e,t,n){const r=ls(e);return V.forEach(t,i=>{const o=gt(i.path);return V.waitFor([r.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=ls(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ls(e);let i=le();return r.Z({range:n,Y:!0},(o,l,c)=>{const u=fn(o[1]),f=new z(u);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=gt(t.path),r=IDBKeyRange.bound([n],[Uy(n)],!1,!0);let i=0;return ls(e).Z({index:ed,Y:!0,range:r},([o,l],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}lt(e,t){return Vr(e).get(t).next(n=>n?Ki(n):null)}}function Vr(s){return Qe(s,Qr)}function Ap(s){return Qe(s,Qs)}function ls(s){return Qe(s,Yr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="LruGarbageCollector",PA=1048576;function Sp([s,e],[t,n]){const r=ie(s,t);return r===0?ie(e,n):r}class jA{constructor(e){this.Hn=e,this.buffer=new we(Sp),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Sp(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Jb{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){U(kp,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ws(t)?U(kp,"Ignoring IndexedDB error during garbage collection: ",t):await fr(t)}await this.er(3e5)})}}class OA{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Xt.ae);const n=new jA(t);return this.tr.forEachTarget(e,r=>n.Zn(r.sequenceNumber)).next(()=>this.tr.rr(e,r=>n.Zn(r))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Vp)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vp):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(u=Date.now(),Ar()<=de.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function Zb(s,e){return new OA(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t){this.db=e,this.garbageCollector=Zb(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(n,r)=>t(r))}addReference(e,t,n){return wa(e,n)}removeReference(e,t,n){return wa(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return wa(e,t)}ar(e,t){return function(r,i){let o=!1;return Yb(r).X(l=>Qb(r,l,i).next(c=>(c&&(o=!0),V.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._r(e,(o,l)=>{if(l<=t){const c=this.ar(e,o).next(u=>{if(!u)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,J.min()),ls(e).delete(function(p){return[0,gt(p.path)]}(o))))});r.push(c)}}).next(()=>V.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return wa(e,t)}_r(e,t){const n=ls(e);let r,i=Xt.ae;return n.Z({index:ed},([o,l],{path:c,sequenceNumber:u})=>{o===0?(i!==Xt.ae&&t(new z(fn(r)),i),i=u,r=c):i=Xt.ae}).next(()=>{i!==Xt.ae&&t(new z(fn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function wa(s,e){return ls(s).put(function(n,r){return{targetId:0,path:gt(n.path),sequenceNumber:r}}(e,s.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.changes=new Kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?V.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return js(e).put(n)}removeEntry(e,t,n){return js(e).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Al(o),l[l.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.ur(e,n)))}getEntry(e,t){let n=qe.newInvalidDocument(t);return js(e).Z({index:Fa,range:IDBKeyRange.only(Xi(t))},(r,i)=>{n=this.cr(t,i)}).next(()=>n)}lr(e,t){let n={size:0,document:qe.newInvalidDocument(t)};return js(e).Z({index:Fa,range:IDBKeyRange.only(Xi(t))},(r,i)=>{n={document:this.cr(t,i),size:Sl(i)}}).next(()=>n)}getEntries(e,t){let n=Pt();return this.hr(e,t,(r,i)=>{const o=this.cr(r,i);n=n.insert(r,o)}).next(()=>n)}Pr(e,t){let n=Pt(),r=new Ue(z.comparator);return this.hr(e,t,(i,o)=>{const l=this.cr(i,o);n=n.insert(i,l),r=r.insert(i,Sl(o))}).next(()=>({documents:n,Tr:r}))}hr(e,t,n){if(t.isEmpty())return V.resolve();let r=new we(Pp);t.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(Xi(r.first()),Xi(r.last())),o=r.getIterator();let l=o.getNext();return js(e).Z({index:Fa,range:i},(c,u,f)=>{const p=z.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;l&&Pp(l,p)<0;)n(l,null),l=o.getNext();l&&l.isEqual(p)&&(n(l,u),l=o.hasNext()?o.getNext():null),l?f.W(Xi(l)):f.done()}).next(()=>{for(;l;)n(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Al(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return js(e).G(IDBKeyRange.bound(l,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let f=Pt();for(const p of u){const g=this.cr(z.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(Ko(t,g)||r.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,n,r){let i=Pt();const o=Rp(t,n),l=Rp(t,Ot.max());return js(e).Z({index:Gy,range:IDBKeyRange.bound(o,l,!0)},(c,u,f)=>{const p=this.cr(z.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===r&&f.done()}).next(()=>i)}newChangeBuffer(e){return new MA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Cp(e).get(Su).next(t=>(H(!!t),t))}ur(e,t){return Cp(e).put(Su,t)}cr(e,t){if(t){const n=IA(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(J.min())))return n}return qe.newInvalidDocument(e)}}function tE(s){return new UA(s)}class MA extends eE{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new Kn(n=>n.toString(),(n,r)=>n.isEqual(r))}applyChanges(e){const t=[];let n=0,r=new we((i,o)=>ie(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,l.readTime)),o.isValidDocument()){const c=gp(this.Ir.serializer,o);r=r.add(i.path.popLast());const u=Sl(c);n+=u-l.size,t.push(this.Ir.addEntry(e,i,c))}else if(n-=l.size,this.trackRemovals){const c=gp(this.Ir.serializer,o.convertToNoDocument(J.min()));t.push(this.Ir.addEntry(e,i,c))}}),r.forEach(i=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Ir.updateMetadata(e,n)),V.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(n=>(this.Er.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:n,Tr:r})=>(r.forEach((i,o)=>{this.Er.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Cp(s){return Qe(s,wo)}function js(s){return Qe(s,El)}function Xi(s){const e=s.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Rp(s,e){const t=e.documentKey.path.toArray();return[s,Al(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Pp(s,e){const t=s.path.toArray(),n=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(r=ie(t[i],n[i]),r)return r;return r=ie(t.length,n.length),r||(r=ie(t[t.length-2],n[n.length-2]),r||ie(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&ao(n.mutation,r,qt.empty(),Be.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,le()).next(()=>n))}getLocalViewOfDocuments(e,t,n=le()){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(i=>{let o=zi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=mn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,le()))}populateOverlays(e,t,n){const r=[];return n.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,r){let i=Pt();const o=oo(),l=function(){return oo()}();return t.forEach((c,u)=>{const f=n.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof xs)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ao(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),t.forEach((u,f)=>{var p;return l.set(u,new FA(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const n=oo();let r=new Ue((o,l)=>o-l),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let f=n.get(c)||qt.empty();f=l.applyToLocalView(u,f),n.set(c,f);const p=(r.get(l.batchId)||le()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Eb();f.forEach(g=>{if(!i.has(g)){const E=Tb(t.get(g),n.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):V.resolve(mn());let l=Eo,c=i;return o.next(u=>V.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,le())).next(f=>({batchId:l,changes:bb(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(n=>{let r=zi();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const u=function(p,g){return new gi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,qe.newInvalidDocument(f)))});let l=zi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ao(f.mutation,u,qt.empty(),Be.now()),Ko(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return V.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Et(r.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(r){return{name:r.name,query:$b(r.bundledQuery),readTime:Et(r.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.overlays=new Ue(z.comparator),this.Rr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const n=mn();return V.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&n.set(r,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,i)=>{this.Et(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Rr.get(n);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(n)),V.resolve()}getOverlaysForCollection(e,t,n){const r=mn(),i=t.length+1,o=new z(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>n&&r.set(c.getKey(),c)}return V.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ue((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let f=i.get(u.largestBatchId);f===null&&(f=mn(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=r)););return V.resolve(l)}Et(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new dd(t,n));let i=this.Rr.get(t);i===void 0&&(i=le(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.Vr=new we(Ze.mr),this.gr=new we(Ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new Ze(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.wr(new Ze(e,t))}Sr(e,t){e.forEach(n=>this.removeReference(n,t))}br(e){const t=new z(new Ne([])),n=new Ze(t,e),r=new Ze(t,e+1),i=[];return this.gr.forEachInRange([n,r],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new z(new Ne([])),n=new Ze(t,e),r=new Ze(t,e+1);let i=le();return this.gr.forEachInRange([n,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ze(e,0),n=this.Vr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ze{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return z.comparator(e.key,t.key)||ie(e.Cr,t.Cr)}static pr(e,t){return ie(e.Cr,t.Cr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new we(Ze.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ud(i,t,n,r);this.mutationQueue.push(o);for(const l of r)this.Mr=this.Mr.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Nr(n),i=r<0?0:r;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Hs:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ze(t,0),r=new Ze(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],o=>{const l=this.Or(o.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new we(ie);return t.forEach(r=>{const i=new Ze(r,0),o=new Ze(r,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{n=n.add(l.Cr)})}),V.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;z.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new z(i),0);let l=new we(ie);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(n=>{const r=this.Or(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){H(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return V.forEach(t.mutations,r=>{const i=new Ze(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){const n=new Ze(t,0),r=this.Mr.firstAfterOrEqual(n);return V.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.kr=e,this.docs=function(){return new Ue(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return V.resolve(n?n.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let n=Pt();return t.forEach(r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),V.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Pt();const o=t.path,l=new z(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jh(My(f),n)<=0||(r.has(f.key)||Ko(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,n,r){K()}qr(e,t){return V.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new zA(this)}getSize(e){return V.resolve(this.size)}}class zA extends eE{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)}),V.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.persistence=e,this.Qr=new Kn(t=>or(t),zo),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.$r=0,this.Kr=new _d,this.targetCount=0,this.Ur=cr.Kn()}forEachTarget(e,t){return this.Qr.forEach((n,r)=>t(r)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),V.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new cr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.zn(t),V.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),V.waitFor(i).next(()=>r)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return V.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),V.resolve()}removeMatchingKeys(e,t,n){this.Kr.Sr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),V.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Kr.vr(t);return V.resolve(n)}containsKey(e,t){return V.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Xt(0),this.zr=!1,this.zr=!0,this.jr=new qA,this.referenceDelegate=e(this),this.Hr=new WA(this),this.indexManager=new SA,this.remoteDocumentCache=function(r){return new $A(r)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new qb(t),this.Yr=new BA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new GA(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const r=new KA(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next(i=>this.referenceDelegate.Xr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}ei(e,t){return V.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class KA extends By{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.ti=new _d,this.ni=null}static ri(e){return new fc(e)}get ii(){if(this.ni)return this.ni;throw K()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),V.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),V.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(r=>this.ii.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ii.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,n=>{const r=z.fromPath(n);return this.si(e,r).next(i=>{i||t.removeEntry(r,J.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(n=>{n?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return V.or([()=>V.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Cl{constructor(e,t){this.persistence=e,this.oi=new Kn(n=>gt(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=Zb(this,t)}static ri(e,t){return new Cl(e,t)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}rr(e,t){return V.forEach(this.oi,(n,r)=>this.ar(e,n,r).next(i=>i?V.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,o=>this.ar(e,o,t).next(l=>{l||(n++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),V.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xa(e.data.value)),t}ar(e,t,n){return V.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.oi.get(t);return V.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.serializer=e}B(e,t,n,r){const i=new ec("createOrUpgrade",t);n<1&&r>=1&&(function(c){c.createObjectStore($o)}(e),function(c){c.createObjectStore(Io,{keyPath:i0}),c.createObjectStore(Yt,{keyPath:zm,autoIncrement:!0}).createIndex(Ws,Wm,{unique:!0}),c.createObjectStore(Hr)}(e),jp(e),function(c){c.createObjectStore(Ms)}(e));let o=V.resolve();return n<3&&r>=3&&(n!==0&&(function(c){c.deleteObjectStore(Yr),c.deleteObjectStore(Qr),c.deleteObjectStore(Qs)}(e),jp(e)),o=o.next(()=>function(c){const u=c.store(Qs),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return u.put(vl,f)}(i))),n<4&&r>=4&&(n!==0&&(o=o.next(()=>function(c,u){return u.store(Yt).G().next(p=>{c.deleteObjectStore(Yt),c.createObjectStore(Yt,{keyPath:zm,autoIncrement:!0}).createIndex(Ws,Wm,{unique:!0});const g=u.store(Yt),E=p.map(T=>g.put(T));return V.waitFor(E)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore(Jr,{keyPath:m0})})(e)})),n<5&&r>=5&&(o=o.next(()=>this._i(i))),n<6&&r>=6&&(o=o.next(()=>(function(c){c.createObjectStore(wo)}(e),this.ai(i)))),n<7&&r>=7&&(o=o.next(()=>this.ui(i))),n<8&&r>=8&&(o=o.next(()=>this.ci(e,i))),n<9&&r>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&r>=10&&(o=o.next(()=>this.li(i))),n<11&&r>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(nc,{keyPath:p0})})(e),function(c){c.createObjectStore(sc,{keyPath:g0})}(e)})),n<12&&r>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(rc,{keyPath:I0});u.createIndex(Ru,w0,{unique:!1}),u.createIndex(Ky,x0,{unique:!1})})(e)})),n<13&&r>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(El,{keyPath:a0});u.createIndex(Fa,l0),u.createIndex(Gy,c0)}(e)).next(()=>this.hi(e,i)).next(()=>e.deleteObjectStore(Ms))),n<14&&r>=14&&(o=o.next(()=>this.Pi(e,i))),n<15&&r>=15&&(o=o.next(()=>function(c){c.createObjectStore(td,{keyPath:_0,autoIncrement:!0}).createIndex(Cu,y0,{unique:!1}),c.createObjectStore(Nl,{keyPath:b0}).createIndex(zy,E0,{unique:!1}),c.createObjectStore(Il,{keyPath:v0}).createIndex(Wy,N0,{unique:!1})}(e))),n<16&&r>=16&&(o=o.next(()=>{t.objectStore(Nl).clear()}).next(()=>{t.objectStore(Il).clear()})),n<17&&r>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(nd,{keyPath:T0})})(e)})),o}ai(e){let t=0;return e.store(Ms).Z((n,r)=>{t+=Sl(r)}).next(()=>{const n={byteSize:t};return e.store(wo).put(Su,n)})}_i(e){const t=e.store(Io),n=e.store(Yt);return t.G().next(r=>V.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,Hs],[i.userId,i.lastAcknowledgedBatchId]);return n.G(Ws,o).next(l=>V.forEach(l,c=>{H(c.userId===i.userId);const u=Bs(this.serializer,c);return Hb(e,i.userId,u).next(()=>{})}))}))}ui(e){const t=e.store(Yr),n=e.store(Ms);return e.store(Qs).get(vl).next(r=>{const i=[];return n.Z((o,l)=>{const c=new Ne(o),u=function(p){return[0,gt(p)]}(c);i.push(t.get(u).next(f=>f?V.resolve():(p=>t.put({targetId:0,path:gt(p),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>V.waitFor(i))})}ci(e,t){e.createObjectStore(xo,{keyPath:f0});const n=t.store(xo),r=new gd,i=o=>{if(r.add(o)){const l=o.lastSegment(),c=o.popLast();return n.put({collectionId:l,parent:gt(c)})}};return t.store(Ms).Z({Y:!0},(o,l)=>{const c=new Ne(o);return i(c.popLast())}).next(()=>t.store(Hr).Z({Y:!0},([o,l,c],u)=>{const f=fn(l);return i(f.popLast())}))}li(e){const t=e.store(Qr);return t.Z((n,r)=>{const i=Ki(r),o=Gb(this.serializer,i);return t.put(o)})}hi(e,t){const n=t.store(Ms),r=[];return n.Z((i,o)=>{const l=t.store(El),c=function(p){return p.document?new z(Ne.fromString(p.document.name).popFirst(5)):p.noDocument?z.fromSegments(p.noDocument.path):p.unknownDocument?z.fromSegments(p.unknownDocument.path):K()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(l.put(u))}).next(()=>V.waitFor(r))}Pi(e,t){const n=t.store(Yt),r=tE(this.serializer),i=new yd(fc.ri,this.serializer.Tt);return n.G().next(o=>{const l=new Map;return o.forEach(c=>{var u;let f=(u=l.get(c.userId))!==null&&u!==void 0?u:le();Bs(this.serializer,c).keys().forEach(p=>f=f.add(p)),l.set(c.userId,f)}),V.forEach(l,(c,u)=>{const f=new it(u),p=hc.It(this.serializer,f),g=i.getIndexManager(f),E=dc.It(f,this.serializer,g,i.referenceDelegate);return new nE(r,E,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Pu(t,Xt.ae),c).next()})})}}function jp(s){s.createObjectStore(Yr,{keyPath:h0}).createIndex(ed,d0,{unique:!0}),s.createObjectStore(Qr,{keyPath:"targetId"}).createIndex($y,u0,{unique:!0}),s.createObjectStore(Qs)}const ss="IndexedDbPersistence",Yc=18e5,Jc=5e3,Zc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",QA="main";class bd{constructor(e,t,n,r,i,o,l,c,u,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ti=i,this.window=o,this.document=l,this.Ii=u,this.Ei=f,this.di=p,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=g=>Promise.resolve(),!bd.D())throw new $(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new LA(this,r),this.gi=t+QA,this.serializer=new qb(c),this.pi=new ms(this.gi,this.di,new HA(this.serializer)),this.jr=new xA,this.Hr=new RA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tE(this.serializer),this.Yr=new wA,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,f===!1&&bt(ss,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(j.FAILED_PRECONDITION,Zc);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Xt(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>xa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(ws(e))return U(ss,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(ss,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return qi(e).get(Ir).next(t=>V.resolve(this.Ni(t)))}Bi(e){return xa(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Yc)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Qe(t,Jr);return n.G().next(r=>{const i=this.qi(r,Yc),o=r.filter(l=>i.indexOf(l)===-1);return V.forEach(o,l=>n.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?V.resolve(!0):qi(e).get(Ir).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Jc)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new $(j.FAILED_PRECONDITION,Zc);return!1}}return!(!this.networkEnabled||!this.inForeground)||xa(e).G().next(n=>this.qi(n,Jc).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,l=this.networkEnabled===r.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U(ss,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[$o,Jr],e=>{const t=new Pu(e,Xt.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(n=>this.ki(n.updateTimeMs,t)&&!this.$i(n.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>xa(e).G().next(t=>this.qi(t,Yc).map(n=>n.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return dc.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CA(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return hc.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,n){U(ss,"Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?A0:c===16?V0:c===15?sd:c===14?Yy:c===13?Qy:c===12?D0:c===11?Hy:void K()}(this.di);let o;return this.pi.runTransaction(e,r,i,l=>(o=new Pu(l,this.Gr?this.Gr.next():Xt.ae),t==="readwrite-primary"?this.Fi(o).next(c=>!!c||this.Mi(o)).next(c=>{if(!c)throw bt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new $(j.FAILED_PRECONDITION,Fy);return n(o)}).next(c=>this.Oi(o).next(()=>c)):this.ji(o).next(()=>n(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}ji(e){return qi(e).get(Ir).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Jc)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new $(j.FAILED_PRECONDITION,Zc)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return qi(e).put(Ir,t)}static D(){return ms.D()}xi(e){const t=qi(e);return t.get(Ir).next(n=>this.Ni(n)?(U(ss,"Releasing primary lease."),t.delete(Ir)):V.resolve())}ki(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(bt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ki();const t=/(?:Version|Mobile)\/1[456]/;Vg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const n=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return U(ss,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return bt(ss,"Failed to get zombied client id.",n),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){bt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qi(s){return Qe(s,$o)}function xa(s){return Qe(s,Jr)}function YA(s,e){let t=s.projectId;return s.isDefaultDatabase||(t+="."+s.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=le(),r=le();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ed(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Vg()?8:Xy(He())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,t,r,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JA;return this._s(e,t,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,o,l.size)})}).next(()=>i.result)}us(e,t,n,r){return n.documentReadCount<this.es?(Ar()<=de.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Ar()<=de.DEBUG&&U("QueryEngine","Query:",kr(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(Ar()<=de.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):V.resolve())}rs(e,t){if(op(t))return V.resolve(null);let n=Gt(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Bu(t,null,"F"),n=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=le(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.cs(t,l);return this.ls(t,u,o,c.readTime)?this.rs(e,Bu(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,n,r){return op(t)||r.isEqual(J.min())?V.resolve(null):this.ns.getDocuments(e,n).next(i=>{const o=this.cs(t,i);return this.ls(t,o,n,r)?V.resolve(null):(Ar()<=de.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kr(t)),this.hs(e,o,t,JV(r,Eo)).next(l=>l))})}cs(e,t){let n=new we(_b(e));return t.forEach((r,i)=>{Ko(e,i)&&(n=n.add(i))}),n}ls(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return Ar()<=de.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",kr(t)),this.ns.getDocumentsMatchingQuery(e,t,Ot.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="LocalStore",ZA=3e8;class ek{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new Ue(ie),this.Is=new Kn(i=>or(i),zo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function rE(s,e,t,n){return new ek(s,e,t,n)}async function iE(s,e){const t=se(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,t.As(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],l=[];let c=le();for(const u of r){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function tk(s,e){const t=se(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let E=V.resolve();return g.forEach(T=>{E=E.next(()=>f.getEntry(c,T)).next(S=>{const k=u.docVersions.get(T);H(k!==null),S.version.compareTo(k)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),f.addEntry(S)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function oE(s){const e=se(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function nk(s,e){const t=se(s),n=e.snapshotVersion;let r=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});r=t.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const g=r.get(p);if(!g)return;l.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(We.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,n)),r=r.insert(p,E),function(S,k,G){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=ZA?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(g,E,f)&&l.push(t.Hr.updateTargetData(i,E))});let c=Pt(),u=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sk(i,o,e.documentUpdates).next(f=>{c=f.Vs,u=f.fs})),!n.isEqual(J.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(p=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=r,i))}function sk(s,e,t){let n=le(),r=le();return t.forEach(i=>n=n.add(i)),e.getEntries(s,n).next(i=>{let o=Pt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):U(vd,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:r}})}function rk(s,e){const t=se(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Hs),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ik(s,e){const t=se(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Hr.getTargetData(n,e).next(i=>i?(r=i,V.resolve(r)):t.Hr.allocateTargetId(n).next(o=>(r=new Ln(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Hr.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.Ts.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(n.targetId,n),t.Is.set(e,n.targetId)),n})}async function Hu(s,e,t){const n=se(s),r=n.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ws(o))throw o;U(vd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ts=n.Ts.remove(e),n.Is.delete(r.target)}function Op(s,e,t){const n=se(s);let r=J.min(),i=le();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=se(c),g=p.Is.get(f);return g!==void 0?V.resolve(p.Ts.get(g)):p.Hr.getTargetData(u,f)}(n,o,Gt(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>n.Ps.getDocumentsMatchingQuery(o,e,t?r:J.min(),t?i:le())).next(l=>(ok(n,G0(e),l),{documents:l,gs:i})))}function ok(s,e,t){let n=s.Es.get(e)||J.min();t.forEach((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),s.Es.set(e,n)}class Lp{constructor(){this.activeTargetIds=Q0()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aE{constructor(){this.ho=new Lp,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Lp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="ConnectivityMonitor";class Mp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){U(Up,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){U(Up,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta=null;function Qu(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="RestConnection",lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ck{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===wl?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){const o=Qu(),l=this.bo(e,t.toUriEncodedString());U(eu,`Sending RPC '${e}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,r,i),this.vo(e,l,c,n).then(u=>(U(eu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw rr(eu,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",n),u})}Co(e,t,n,r,i,o){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),n&&n.headers.forEach((r,i)=>e[i]=r)}bo(e,t){const n=lk[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class hk extends ck{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=Qu();return new Promise((o,l)=>{const c=new Sy;c.setWithCredentials(!0),c.listenOnce(Cy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case La.NO_ERROR:const f=c.getResponseJson();U(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case La.TIMEOUT:U(ft,`RPC '${e}' ${i} timed out`),l(new $(j.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const p=c.getStatus();if(U(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const T=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(G)>=0?G:j.UNKNOWN}(E.status);l(new $(T,E.message))}else l(new $(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(j.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(ft,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);U(ft,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,n,15)})}Wo(e,t,n){const r=Qu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jy(),l=Py(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=i.join("");U(ft,`Creating RPC '${e}' stream ${r}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,E=!1;const T=new uk({Fo:k=>{E?U(ft,`Not sending because RPC '${e}' stream ${r} is closed:`,k):(g||(U(ft,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),U(ft,`RPC '${e}' stream ${r} sending:`,k),p.send(k))},Mo:()=>p.close()}),S=(k,G,F)=>{k.listen(G,M=>{try{F(M)}catch(Q){setTimeout(()=>{throw Q},0)}})};return S(p,$i.EventType.OPEN,()=>{E||(U(ft,`RPC '${e}' stream ${r} transport opened.`),T.Qo())}),S(p,$i.EventType.CLOSE,()=>{E||(E=!0,U(ft,`RPC '${e}' stream ${r} transport closed`),T.Ko())}),S(p,$i.EventType.ERROR,k=>{E||(E=!0,rr(ft,`RPC '${e}' stream ${r} transport errored:`,k),T.Ko(new $(j.UNAVAILABLE,"The operation could not be completed")))}),S(p,$i.EventType.MESSAGE,k=>{var G;if(!E){const F=k.data[0];H(!!F);const M=F,Q=(M==null?void 0:M.error)||((G=M[0])===null||G===void 0?void 0:G.error);if(Q){U(ft,`RPC '${e}' stream ${r} received error:`,Q);const re=Q.status;let Y=function(v){const w=ze[v];if(w!==void 0)return Ab(w)}(re),I=Q.message;Y===void 0&&(Y=j.INTERNAL,I="Unknown error status: "+re+" with message "+Q.message),E=!0,T.Ko(new $(Y,I)),p.close()}else U(ft,`RPC '${e}' stream ${r} received:`,F),T.Uo(F)}}),S(l,Ry.STAT_EVENT,k=>{k.stat===Au.PROXY?U(ft,`RPC '${e}' stream ${r} detected buffering proxy`):k.stat===Au.NOPROXY&&U(ft,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{T.$o()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){return typeof window<"u"?window:null}function za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(s){return new fA(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="PersistentStream";class cE{constructor(e,t,n,r,i,o,l,c){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new lE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.i_===t&&this.V_(n,r)},n=>{e(()=>{const r=new $(j.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(r)})})}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(r=>{n(()=>this.m_(r))}),this.stream.onMessage(r=>{n(()=>++this.__==1?this.g_(r):this.onNext(r))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return U(Fp,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(U(Fp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fk extends cE{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=gA(this.serializer,e),n=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Et(o.readTime):J.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=Gu(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=xl(c)?{documents:Lb(i,c)}:{query:Ub(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cb(i,o.resumeToken);const u=Xu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ii(i,o.snapshotVersion.toTimestamp());const u=Xu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=yA(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=Gu(this.serializer),t.removeTarget=e,this.I_(t)}}class mk extends cE{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=_A(e.writeResults,e.commitTime),n=Et(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=Gu(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Vl(this.serializer,n))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{}class gk extends pk{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,qu(t,n),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(j.UNKNOWN,i.toString())})}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,qu(t,n),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(j.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class _k{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(bt(t),this.N_=!1):U("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="RemoteStore";class yk{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{n.enqueueAndForget(async()=>{pr(this)&&(U(ur,"Restarting streams for network reachability change."),await async function(c){const u=se(c);u.W_.add(4),await Qo(u),u.j_.set("Unknown"),u.W_.delete(4),await pc(u)}(this))})}),this.j_=new _k(n,r)}}async function pc(s){if(pr(s))for(const e of s.G_)await e(!0)}async function Qo(s){for(const e of s.G_)await e(!1)}function uE(s,e){const t=se(s);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),xd(t)?wd(t):yi(t).c_()&&Id(t,e))}function Nd(s,e){const t=se(s),n=yi(t);t.U_.delete(e),n.c_()&&hE(t,e),t.U_.size===0&&(n.c_()?n.P_():pr(t)&&t.j_.set("Unknown"))}function Id(s,e){if(s.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yi(s).y_(e)}function hE(s,e){s.H_.Ne(e),yi(s).w_(e)}function wd(s){s.H_=new cA({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>s.U_.get(e)||null,it:()=>s.datastore.serializer.databaseId}),yi(s).start(),s.j_.B_()}function xd(s){return pr(s)&&!yi(s).u_()&&s.U_.size>0}function pr(s){return se(s).W_.size===0}function dE(s){s.H_=void 0}async function bk(s){s.j_.set("Online")}async function Ek(s){s.U_.forEach((e,t)=>{Id(s,e)})}async function vk(s,e){dE(s),xd(s)?(s.j_.q_(e),wd(s)):s.j_.set("Unknown")}async function Nk(s,e,t){if(s.j_.set("Online"),e instanceof Sb&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.U_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.U_.delete(l),r.H_.removeTarget(l))}(s,e)}catch(n){U(ur,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rl(s,n)}else if(e instanceof $a?s.H_.We(e):e instanceof kb?s.H_.Ze(e):s.H_.je(e),!t.isEqual(J.min()))try{const n=await oE(s.localStore);t.compareTo(n)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.U_.get(u);f&&i.U_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.U_.get(c);if(!f)return;i.U_.set(c,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),hE(i,c);const p=new Ln(f.target,c,u,f.sequenceNumber);Id(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(s,t)}catch(n){U(ur,"Failed to raise snapshot:",n),await Rl(s,n)}}async function Rl(s,e,t){if(!ws(e))throw e;s.W_.add(1),await Qo(s),s.j_.set("Offline"),t||(t=()=>oE(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{U(ur,"Retrying IndexedDB access"),await t(),s.W_.delete(1),await pc(s)})}function fE(s,e){return e().catch(t=>Rl(s,t,e))}async function Yo(s){const e=se(s),t=Es(e);let n=e.K_.length>0?e.K_[e.K_.length-1].batchId:Hs;for(;Ik(e);)try{const r=await rk(e.localStore,n);if(r===null){e.K_.length===0&&t.P_();break}n=r.batchId,wk(e,r)}catch(r){await Rl(e,r)}mE(e)&&pE(e)}function Ik(s){return pr(s)&&s.K_.length<10}function wk(s,e){s.K_.push(e);const t=Es(s);t.c_()&&t.S_&&t.b_(e.mutations)}function mE(s){return pr(s)&&!Es(s).u_()&&s.K_.length>0}function pE(s){Es(s).start()}async function xk(s){Es(s).C_()}async function Tk(s){const e=Es(s);for(const t of s.K_)e.b_(t.mutations)}async function Dk(s,e,t){const n=s.K_.shift(),r=hd.from(n,e,t);await fE(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await Yo(s)}async function Vk(s,e){e&&Es(s).S_&&await async function(n,r){if(function(o){return oA(o)&&o!==j.ABORTED}(r.code)){const i=n.K_.shift();Es(n).h_(),await fE(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Yo(n)}}(s,e),mE(s)&&pE(s)}async function Bp(s,e){const t=se(s);t.asyncQueue.verifyOperationInProgress(),U(ur,"RemoteStore received new credentials");const n=pr(t);t.W_.add(3),await Qo(t),n&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await pc(t)}async function Ak(s,e){const t=se(s);e?(t.W_.delete(2),await pc(t)):e||(t.W_.add(2),await Qo(t),t.j_.set("Unknown"))}function yi(s){return s.J_||(s.J_=function(t,n,r){const i=se(t);return i.M_(),new fk(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{xo:bk.bind(null,s),No:Ek.bind(null,s),Lo:vk.bind(null,s),p_:Nk.bind(null,s)}),s.G_.push(async e=>{e?(s.J_.h_(),xd(s)?wd(s):s.j_.set("Unknown")):(await s.J_.stop(),dE(s))})),s.J_}function Es(s){return s.Y_||(s.Y_=function(t,n,r){const i=se(t);return i.M_(),new mk(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:xk.bind(null,s),Lo:Vk.bind(null,s),D_:Tk.bind(null,s),v_:Dk.bind(null,s)}),s.G_.push(async e=>{e?(s.Y_.h_(),await Yo(s)):(await s.Y_.stop(),s.K_.length>0&&(U(ur,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,l=new Td(e,t,o,r,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(s,e){if(bt("AsyncQueue",`${e}: ${s}`),ws(s))return new $(j.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(t,n)=>z.comparator(t.key,n.key),this.keyedMap=zi(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Xr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.Z_=new Ue(z.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?e.type!==0&&n.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&n.type!==1?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Z_=this.Z_.remove(t):e.type===1&&n.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):K():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class oi{constructor(e,t,n,r,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new oi(e,t,Xr.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Sk{constructor(){this.queries=qp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,n){const r=se(t),i=r.queries;r.queries=qp(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(n)})})(this,new $(j.ABORTED,"Firestore shutting down"))}}function qp(){return new Kn(s=>gb(s),ac)}async function Vd(s,e){const t=se(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.na()&&e.ra()&&(n=2):(i=new kk,n=e.ra()?0:1);try{switch(n){case 0:i.ea=await t.onListen(r,!0);break;case 1:i.ea=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=Dd(o,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&kd(t)}async function Ad(s,e){const t=se(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?r=e.ra()?0:1:!i.na()&&e.ra()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Ck(s,e){const t=se(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const l of o.ta)l.oa(r)&&(n=!0);o.ea=r}}n&&kd(t)}function Rk(s,e,t){const n=se(s),r=n.queries.get(e);if(r)for(const i of r.ta)i.onError(t);n.queries.delete(e)}function kd(s){s.ia.forEach(e=>{e.next()})}var Yu,Gp;(Gp=Yu||(Yu={}))._a="default",Gp.Cache="cache";class Sd{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new oi(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const n=t!=="Offline";return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Yu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class Pk{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=le(),this.mutatedKeys=le(),this.ya=_b(e),this.wa=new Xr(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new Xp,r=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,p)=>{const g=r.get(f),E=Ko(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),S=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?T!==S&&(n.track({type:3,doc:E}),k=!0):this.va(g,E)||(n.track({type:2,doc:E}),k=!0,(c&&this.ya(E,c)>0||u&&this.ya(E,u)<0)&&(l=!0)):!g&&E?(n.track({type:0,doc:E}),k=!0):g&&!E&&(n.track({type:1,doc:g}),k=!0,(c||u)&&(l=!0)),k&&(E?(o=o.add(E),i=S?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{wa:o,Da:n,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(E,T){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return S(E)-S(T)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(n),r=r!=null&&r;const l=t&&!r?this.Fa():[],c=this.pa.size===0&&this.current&&!r?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new oi(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Xp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=le(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const t=[];return e.forEach(n=>{this.pa.has(n)||t.push(new _E(n))}),this.pa.forEach(n=>{e.has(n)||t.push(new gE(n))}),t}Oa(e){this.fa=e.gs,this.pa=le();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return oi.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cd="SyncEngine";class jk{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ok{constructor(e){this.key=e,this.Ba=!1}}class Lk{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Kn(l=>gb(l),ac),this.qa=new Map,this.Qa=new Set,this.$a=new Ue(z.comparator),this.Ka=new Map,this.Ua=new _d,this.Wa={},this.Ga=new Map,this.za=cr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Uk(s,e,t=!0){const n=IE(s);let r;const i=n.ka.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Na()):r=await yE(n,e,t,!0),r}async function Mk(s,e){const t=IE(s);await yE(t,e,!0,!1)}async function yE(s,e,t,n){const r=await ik(s.localStore,Gt(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await Fk(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&uE(s.remoteStore,r),l}async function Fk(s,e,t,n,r){s.Ha=(p,g,E)=>async function(S,k,G,F){let M=k.view.ba(G);M.ls&&(M=await Op(S.localStore,k.query,!1).then(({documents:I})=>k.view.ba(I,M)));const Q=F&&F.targetChanges.get(k.targetId),re=F&&F.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(M,S.isPrimaryClient,Q,re);return zp(S,k.targetId,Y.Ma),Y.snapshot}(s,p,g,E);const i=await Op(s.localStore,e,!0),o=new Pk(e,i.gs),l=o.ba(i.documents),c=Ho.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(l,s.isPrimaryClient,c);zp(s,t,u.Ma);const f=new jk(e,t,o);return s.ka.set(e,f),s.qa.has(t)?s.qa.get(t).push(e):s.qa.set(t,[e]),u.snapshot}async function Bk(s,e,t){const n=se(s),r=n.ka.get(e),i=n.qa.get(r.targetId);if(i.length>1)return n.qa.set(r.targetId,i.filter(o=>!ac(o,e))),void n.ka.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Nd(n.remoteStore,r.targetId),Ju(n,r.targetId)}).catch(fr)):(Ju(n,r.targetId),await Hu(n.localStore,r.targetId,!0))}async function Xk(s,e){const t=se(s),n=t.ka.get(e),r=t.qa.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Nd(t.remoteStore,n.targetId))}async function qk(s,e,t){const n=wE(s);try{const r=await function(o,l){const c=se(o),u=Be.now(),f=l.reduce((E,T)=>E.add(T.key),le());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let T=Pt(),S=le();return c.ds.getEntries(E,f).next(k=>{T=k,T.forEach((G,F)=>{F.isValidDocument()||(S=S.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,T)).next(k=>{p=k;const G=[];for(const F of l){const M=rA(F,p.get(F.key).overlayedDocument);M!=null&&G.push(new xs(F.key,M,ab(M.value.mapValue),jt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,G,l)}).next(k=>{g=k;const G=k.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(E,k.batchId,G)})}).then(()=>({batchId:g.batchId,changes:bb(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ue(ie)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(n,r.batchId,t),await Jo(n,r.changes),await Yo(n.remoteStore)}catch(r){const i=Dd(r,"Failed to persist write");t.reject(i)}}async function bE(s,e){const t=se(s);try{const n=await nk(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Ka.get(i);o&&(H(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ba=!0:r.modifiedDocuments.size>0?H(o.Ba):r.removedDocuments.size>0&&(H(o.Ba),o.Ba=!1))}),await Jo(t,n,e)}catch(n){await fr(n)}}function $p(s,e,t){const n=se(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=se(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ta)g.sa(l)&&(u=!0)}),u&&kd(c)}(n.eventManager,e),r.length&&n.La.p_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Gk(s,e,t){const n=se(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Ka.get(e),i=r&&r.key;if(i){let o=new Ue(z.comparator);o=o.insert(i,qe.newNoDocument(i,J.min()));const l=le().add(i),c=new uc(J.min(),new Map,new Ue(ie),o,l);await bE(n,c),n.$a=n.$a.remove(i),n.Ka.delete(e),Rd(n)}else await Hu(n.localStore,e,!1).then(()=>Ju(n,e,t)).catch(fr)}async function $k(s,e){const t=se(s),n=e.batch.batchId;try{const r=await tk(t.localStore,e);vE(t,n,null),EE(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Jo(t,r)}catch(r){await fr(r)}}async function zk(s,e,t){const n=se(s);try{const r=await function(o,l){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(H(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(n.localStore,e);vE(n,e,t),EE(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Jo(n,r)}catch(r){await fr(r)}}function EE(s,e){(s.Ga.get(e)||[]).forEach(t=>{t.resolve()}),s.Ga.delete(e)}function vE(s,e,t){const n=se(s);let r=n.Wa[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Wa[n.currentUser.toKey()]=r}}function Ju(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.qa.get(e))s.ka.delete(n),t&&s.La.Ja(n,t);s.qa.delete(e),s.isPrimaryClient&&s.Ua.br(e).forEach(n=>{s.Ua.containsKey(n)||NE(s,n)})}function NE(s,e){s.Qa.delete(e.path.canonicalString());const t=s.$a.get(e);t!==null&&(Nd(s.remoteStore,t),s.$a=s.$a.remove(e),s.Ka.delete(t),Rd(s))}function zp(s,e,t){for(const n of t)n instanceof gE?(s.Ua.addReference(n.key,e),Wk(s,n)):n instanceof _E?(U(Cd,"Document no longer in limbo: "+n.key),s.Ua.removeReference(n.key,e),s.Ua.containsKey(n.key)||NE(s,n.key)):K()}function Wk(s,e){const t=e.key,n=t.path.canonicalString();s.$a.get(t)||s.Qa.has(n)||(U(Cd,"New document in limbo: "+t),s.Qa.add(n),Rd(s))}function Rd(s){for(;s.Qa.size>0&&s.$a.size<s.maxConcurrentLimboResolutions;){const e=s.Qa.values().next().value;s.Qa.delete(e);const t=new z(Ne.fromString(e)),n=s.za.next();s.Ka.set(n,new Ok(t)),s.$a=s.$a.insert(t,n),uE(s.remoteStore,new Ln(Gt(Wo(t.path)),n,"TargetPurposeLimboResolution",Xt.ae))}}async function Jo(s,e,t){const n=se(s),r=[],i=[],o=[];n.ka.isEmpty()||(n.ka.forEach((l,c)=>{o.push(n.Ha(c,e,t).then(u=>{var f;if((u||t)&&n.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){r.push(u);const p=Ed.Yi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),n.La.p_(r),await async function(c,u){const f=se(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,g=>V.forEach(g.Hi,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>V.forEach(g.Ji,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!ws(p))throw p;U(vd,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=f.Ts.get(g),T=E.snapshotVersion,S=E.withLastLimboFreeSnapshotVersion(T);f.Ts=f.Ts.insert(g,S)}}}(n.localStore,i))}async function Kk(s,e){const t=se(s);if(!t.currentUser.isEqual(e)){U(Cd,"User change. New user:",e.toKey());const n=await iE(t.localStore,e);t.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new $(j.CANCELLED,o))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Jo(t,n.Rs)}}function Hk(s,e){const t=se(s),n=t.Ka.get(e);if(n&&n.Ba)return le().add(n.key);{let r=le();const i=t.qa.get(e);if(!i)return r;for(const o of i){const l=t.ka.get(o);r=r.unionWith(l.view.Sa)}return r}}function IE(s){const e=se(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=bE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gk.bind(null,e),e.La.p_=Ck.bind(null,e.eventManager),e.La.Ja=Rk.bind(null,e.eventManager),e}function wE(s){const e=se(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$k.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zk.bind(null,e),e}class Ro{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return rE(this.persistence,new sE,e.initialUser,this.serializer)}Xa(e){return new yd(fc.ri,this.serializer)}Za(e){return new aE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ro.provider={build:()=>new Ro};class Qk extends Ro{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){H(this.persistence.referenceDelegate instanceof Cl);const n=this.persistence.referenceDelegate.garbageCollector;return new Jb(n,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new yd(n=>Cl.ri(n,t),this.serializer)}}class Yk extends Ro{constructor(e,t,n){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await wE(this.ru.syncEngine),await Yo(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return rE(this.persistence,new sE,e.initialUser,this.serializer)}tu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Jb(n,e.asyncQueue,t)}nu(e,t){const n=new n0(t,this.persistence);return new t0(e.asyncQueue,n)}Xa(e){const t=YA(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new bd(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,dk(),za(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new aE}}class Pl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>$p(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kk.bind(null,this.syncEngine),await Ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Sk}()}createDatastore(e){const t=mc(e.databaseInfo.databaseId),n=function(i){return new hk(i)}(e.databaseInfo);return function(i,o,l,c){return new gk(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,r,i,o,l){return new yk(n,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$p(this.syncEngine,t,0),function(){return Mp.D()?new Mp:new ak}())}createSyncEngine(e,t){return function(r,i,o,l,c,u,f){const p=new Lk(r,i,o,l,c,u);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=se(r);U(ur,"RemoteStore shutting down."),i.W_.add(5),await Qo(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pl.provider={build:()=>new Pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="FirestoreClient";class Jk{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Ly.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{U(vs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(U(vs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Dd(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function tu(s,e){s.asyncQueue.verifyOperationInProgress(),U(vs,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await iE(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function Wp(s,e){s.asyncQueue.verifyOperationInProgress();const t=await Zk(s);U(vs,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>Bp(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>Bp(e.remoteStore,r)),s._onlineComponents=e}async function Zk(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){U(vs,"Using user provided OfflineComponentProvider");try{await tu(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;rr("Error using user provided cache. Falling back to memory cache: "+t),await tu(s,new Ro)}}else U(vs,"Using default OfflineComponentProvider"),await tu(s,new Qk(void 0));return s._offlineComponents}async function xE(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(U(vs,"Using user provided OnlineComponentProvider"),await Wp(s,s._uninitializedComponentsProvider._online)):(U(vs,"Using default OnlineComponentProvider"),await Wp(s,new Pl))),s._onlineComponents}function eS(s){return xE(s).then(e=>e.syncEngine)}async function jl(s){const e=await xE(s),t=e.eventManager;return t.onListen=Uk.bind(null,e.syncEngine),t.onUnlisten=Bk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Mk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xk.bind(null,e.syncEngine),t}function tS(s,e,t={}){const n=new _n;return s.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Pd({next:g=>{f.su(),o.enqueueAndForget(()=>Ad(i,p));const E=g.docs.has(l);!E&&g.fromCache?u.reject(new $(j.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?u.reject(new $(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Sd(Wo(l.path),f,{includeMetadataChanges:!0,Ta:!0});return Vd(i,p)}(await jl(s),s.asyncQueue,e,t,n)),n.promise}function nS(s,e,t={}){const n=new _n;return s.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Pd({next:g=>{f.su(),o.enqueueAndForget(()=>Ad(i,p)),g.fromCache&&c.source==="server"?u.reject(new $(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Sd(l,f,{includeMetadataChanges:!0,Ta:!0});return Vd(i,p)}(await jl(s),s.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(s,e,t){if(!t)throw new $(j.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function sS(s,e,t,n){if(e===!0&&n===!0)throw new $(j.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Hp(s){if(!z.isDocumentKey(s))throw new $(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Qp(s){if(z.isDocumentKey(s))throw new $(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function gc(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":K()}function yn(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new $(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gc(s);throw new $(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firestore.googleapis.com",Yp=!0;class Jp{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VE,this.ssl=Yp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Yp;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PA)throw new $(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TE((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GV;switch(n.type){case"firstParty":return new KV(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Kp.get(t);n&&(U("ComponentProvider","Removing Datastore"),Kp.delete(t),n.terminate())}(this),Promise.resolve()}}function rS(s,e,t,n={}){var r;const i=(s=yn(s,_c))._getSettings(),o=`${e}:${t}`;if(i.host!==VE&&i.host!==o&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),s._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=it.MOCK_USER;else{l=rh(n.mockUserToken,(r=s._app)===null||r===void 0?void 0:r.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new $(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(u)}s._authCredentials=new $V(new Oy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class xt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class ps extends Ts{constructor(e,t,n){super(e,t,Wo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new z(e))}withConverter(e){return new ps(this.firestore,e,this._path)}}function Cn(s,e,...t){if(s=$e(s),DE("collection","path",e),s instanceof _c){const n=Ne.fromString(e,...t);return Qp(n),new ps(s,null,n)}{if(!(s instanceof xt||s instanceof ps))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ne.fromString(e,...t));return Qp(n),new ps(s.firestore,null,n)}}function yc(s,e,...t){if(s=$e(s),arguments.length===1&&(e=Ly.newId()),DE("doc","path",e),s instanceof _c){const n=Ne.fromString(e,...t);return Hp(n),new xt(s,null,new z(n))}{if(!(s instanceof xt||s instanceof ps))throw new $(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ne.fromString(e,...t));return Hp(n),new xt(s.firestore,s instanceof ps?s.converter:null,new z(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="AsyncQueue";class eg{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new lE(this,"async_queue_retry"),this.Su=()=>{const n=za();n&&U(Zp,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=e;const t=za();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=za();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new _n;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ws(e))throw e;U(Zp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(n=>{this.gu=n,this.pu=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw bt("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.pu=!1,n))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=Td.createAndSchedule(this,e,t,n,i=>this.Fu(i));return this.fu.push(r),r}Du(){this.gu&&K()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function tg(s){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(s,["next","error","complete"])}class hr extends _c{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new eg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eg(e),this._firestoreClient=void 0,await e}}}function iS(s,e){const t=typeof s=="object"?s:Oo(),n=typeof s=="string"?s:wl,r=ui(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Fl("firestore");i&&rS(r,...i)}return r}function bc(s){if(s._terminated)throw new $(j.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||AE(s),s._firestoreClient}function AE(s){var e,t,n;const r=s._freezeSettings(),i=function(l,c,u,f){return new S0(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,TE(f.experimentalLongPollingOptions),f.useFetchStreams)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,r);s._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),s._firestoreClient=new Jk(s._authCredentials,s._appCheckCredentials,s._queue,i,s._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(s._componentsProvider))}function oS(s,e){rr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=s._freezeSettings();return aS(s,Pl.provider,{build:n=>new Yk(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function aS(s,e,t){if((s=yn(s,hr))._firestoreClient||s._terminated)throw new $(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(s._componentsProvider||s._getSettings().localCache)throw new $(j.FAILED_PRECONDITION,"SDK cache is already specified.");s._componentsProvider={_online:e,_offline:t},AE(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(We.fromBase64String(e))}catch(t){throw new $(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ai(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^__.*__$/;class cS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new _i(e,this.data,t,this.fieldTransforms)}}function SE(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ud{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Ku(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ol(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(SE(this.Lu)&&lS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class uS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||mc(e)}ju(e,t,n,r=!1){return new Ud({Lu:e,methodName:t,zu:n,path:Fe.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CE(s){const e=s._freezeSettings(),t=mc(s._databaseId);return new uS(s._databaseId,!!e.ignoreUndefinedProperties,t)}function hS(s,e,t,n,r,i={}){const o=s.ju(i.merge||i.mergeFields?2:0,e,t,r);jE("Data must be an object, but it was:",o,n);const l=RE(n,o);let c,u;if(i.merge)c=new qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=fS(e,p,t);if(!o.contains(g))throw new $(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);pS(f,g)||f.push(g)}c=new qt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new cS(new vt(l),c,u)}function dS(s,e,t,n=!1){return Md(t,s.ju(n?4:3,e))}function Md(s,e){if(PE(s=$e(s)))return jE("Unsupported field value:",e,s),RE(s,e);if(s instanceof kE)return function(n,r){if(!SE(r.Lu))throw r.Wu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Wu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const l of n){let c=Md(l,r.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(s,e)}return function(n,r){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Y0(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Be.fromDate(n);return{timestampValue:ii(r.serializer,i)}}if(n instanceof Be){const i=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ii(r.serializer,i)}}if(n instanceof Od)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ai)return{bytesValue:Cb(r.serializer,n._byteString)};if(n instanceof xt){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:md(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Ld)return function(o,l){return{mapValue:{fields:{[id]:{stringValue:od},[Zr]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return ld(l.serializer,u)})}}}}}}(n,r);throw r.Wu(`Unsupported field value: ${gc(n)}`)}(s,e)}function RE(s,e){const t={};return Jy(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(s,(n,r)=>{const i=Md(r,e.qu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function PE(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Be||s instanceof Od||s instanceof ai||s instanceof xt||s instanceof kE||s instanceof Ld)}function jE(s,e,t){if(!PE(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const n=gc(t);throw n==="an object"?e.Wu(s+" a custom object"):e.Wu(s+" "+n)}}function fS(s,e,t){if((e=$e(e))instanceof jd)return e._internalPath;if(typeof e=="string")return OE(s,e);throw Ol("Field path arguments must be of type string or ",s,!1,void 0,t)}const mS=new RegExp("[~\\*/\\[\\]]");function OE(s,e,t){if(e.search(mS)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new jd(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ol(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new $(j.INVALID_ARGUMENT,l+s+c)}function pS(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ec("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gS extends LE{data(){return super.data()}}function Ec(s,e){return typeof e=="string"?OE(s,e):e instanceof jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new $(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fd{}class ME extends Fd{}function lo(s,e,...t){let n=[];e instanceof Fd&&n.push(e),n=n.concat(t),function(i){const o=i.filter(c=>c instanceof Bd).length,l=i.filter(c=>c instanceof vc).length;if(o>1||o>0&&l>0)throw new $(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)s=r._apply(s);return s}class vc extends ME{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new vc(e,t,n)}_apply(e){const t=this._parse(e);return FE(e._query,t),new Ts(e.firestore,e.converter,Fu(e._query,t))}_parse(e){const t=CE(e.firestore);return function(i,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){rg(p,f);const T=[];for(const S of p)T.push(sg(c,i,S));g={arrayValue:{values:T}}}else g=sg(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||rg(p,f),g=dS(l,o,p,f==="in"||f==="not-in");return ge.create(u,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Da(s,e,t){const n=e,r=Ec("where",s);return vc._create(r,n,t)}class Bd extends Fd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bd(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)FE(o,c),o=Fu(o,c)}(e._query,t),new Ts(e.firestore,e.converter,Fu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xd extends ME{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xd(e,t)}_apply(e){const t=function(r,i,o){if(r.startAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ko(i,o)}(e._query,this._field,this._direction);return new Ts(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new gi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function ng(s,e="asc"){const t=e,n=Ec("orderBy",s);return Xd._create(n,t)}function sg(s,e,t){if(typeof(t=$e(t))=="string"){if(t==="")throw new $(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pb(e)&&t.indexOf("/")!==-1)throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ne.fromString(t));if(!z.isDocumentKey(n))throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Vo(s,new z(n))}if(t instanceof xt)return Vo(s,t._key);throw new $(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(t)}.`)}function rg(s,e){if(!Array.isArray(s)||s.length===0)throw new $(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FE(s,e){const t=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(s.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _S{convertValue(e,t="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return mr(e,(r,i)=>{n[r]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,r;const i=(r=(n=(t=e.fields)===null||t===void 0?void 0:t[Zr].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>Le(o.doubleValue));return new Ld(i)}convertGeoPoint(e){return new Od(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ic(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const t=$n(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ne.fromString(e);H(Xb(n));const r=new ir(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||bt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(s,e,t){let n;return n=s?s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BE extends LE{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ec("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Wa extends BE{data(e={}){return super.data(e)}}class XE{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Hi(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Wa(this._firestore,this._userDataWriter,n.key,n,new Hi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new Wa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Hi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Wa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Hi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bS(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bS(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(s){s=yn(s,xt);const e=yn(s.firestore,hr);return tS(bc(e),s._key).then(t=>GE(e,s,t))}class qd extends _S{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function co(s){s=yn(s,Ts);const e=yn(s.firestore,hr),t=bc(e),n=new qd(e);return UE(s._query),nS(t,s._query).then(r=>new XE(e,n,s,r))}function ig(s,e){const t=yn(s.firestore,hr),n=yc(s),r=yS(s.converter,e);return vS(t,[hS(CE(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,jt.exists(!1))]).then(()=>n)}function ES(s,...e){var t,n,r;s=$e(s);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||tg(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(tg(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let c,u,f;if(s instanceof xt)u=yn(s.firestore,hr),f=Wo(s._key.path),c={next:p=>{e[o]&&e[o](GE(u,s,p))},error:e[o+1],complete:e[o+2]};else{const p=yn(s,Ts);u=yn(p.firestore,hr),f=p._query;const g=new qd(u);c={next:E=>{e[o]&&e[o](new XE(u,g,p,E))},error:e[o+1],complete:e[o+2]},UE(s._query)}return function(g,E,T,S){const k=new Pd(S),G=new Sd(E,k,T);return g.asyncQueue.enqueueAndForget(async()=>Vd(await jl(g),G)),()=>{k.su(),g.asyncQueue.enqueueAndForget(async()=>Ad(await jl(g),G))}}(bc(u),f,l,c)}function vS(s,e){return function(n,r){const i=new _n;return n.asyncQueue.enqueueAndForget(async()=>qk(await eS(n),r,i)),i.promise}(bc(s),e)}function GE(s,e,t){const n=t.docs.get(e._key),r=new qd(s);return new BE(s,r,e._key,n,new Hi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){pi=r})(Ns),Fn(new bn("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new hr(new zV(n.getProvider("auth-internal")),new HV(o,n.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(u.options.projectId,f)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),It(Um,Mm,e),It(Um,Mm,"esm2017")})();var NS="firebase",IS="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(NS,IS,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,n,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Rt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r==null||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:t,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="us-central1";class xS{constructor(e,t,n,r,i=Zu,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new wS(e,t,n,r),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Zu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function TS(s,e,t){s.emulatorOrigin=`http://${e}:${t}`}const og="@firebase/functions",ag="0.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="auth-internal",VS="app-check-internal",AS="messaging-internal";function kS(s){const e=(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider(DS),o=t.getProvider(AS),l=t.getProvider(VS);return new xS(r,i,o,l,n)};Fn(new bn($E,e,"PUBLIC").setMultipleInstances(!0)),It(og,ag,s),It(og,ag,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(s=Oo(),e=Zu){const n=ui($e(s),$E).getImmediate({identifier:e}),r=Fl("functions");return r&&CS(n,...r),n}function CS(s,e,t){TS($e(s),e,t)}kS();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="firebasestorage.googleapis.com",RS="storageBucket",PS=2*60*1e3,jS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Nn{constructor(e,t,n=0){super(nu(e),`Firebase Storage: ${t} (${nu(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vn;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vn||(vn={}));function nu(s){return"storage/"+s}function OS(){const s="An unknown error occurred, please check the error payload for server response.";return new In(vn.UNKNOWN,s)}function LS(){return new In(vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function US(){return new In(vn.CANCELED,"User canceled the upload/download.")}function MS(s){return new In(vn.INVALID_URL,"Invalid URL '"+s+"'.")}function FS(s){return new In(vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function lg(s){return new In(vn.INVALID_ARGUMENT,s)}function WE(){return new In(vn.APP_DELETED,"The Firebase app was deleted.")}function BS(s){return new In(vn.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=tn.makeFromUrl(e,t)}catch{return new tn(e,"")}if(n.path==="")return n;throw FS(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(Q){Q.path_=decodeURIComponent(Q.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${r}/o${g}`,"i"),T={bucket:1,path:3},S=t===zE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",G=new RegExp(`^https?://${S}/${r}/${k}`,"i"),M=[{regex:l,indices:c,postModify:i},{regex:E,indices:T,postModify:u},{regex:G,indices:{bucket:1,path:2},postModify:u}];for(let Q=0;Q<M.length;Q++){const re=M[Q],Y=re.regex.exec(e);if(Y){const I=Y[re.indices.bucket];let y=Y[re.indices.path];y||(y=""),n=new tn(I,y),re.postModify(n);break}}if(n==null)throw MS(e);return n}}class XS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(s,e,t){let n=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function p(k){r=setTimeout(()=>{r=null,s(E,c())},k)}function g(){i&&clearTimeout(i)}function E(k,...G){if(u){g();return}if(k){g(),f.call(null,k,...G);return}if(c()||o){g(),f.call(null,k,...G);return}n<64&&(n*=2);let M;l===1?(l=2,M=0):M=(n+Math.random())*1e3,p(M)}let T=!1;function S(k){T||(T=!0,g(),!u&&(r!==null?(k||(l=2),clearTimeout(r),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,S(!0)},t),S}function GS(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(s){return s!==void 0}function cg(s,e,t,n){if(n<e)throw lg(`Invalid value for '${s}'. Expected ${e} or greater.`);if(n>t)throw lg(`Invalid value for '${s}'. Expected ${t} or less.`)}function zS(s){const e=encodeURIComponent;let t="?";for(const n in s)if(s.hasOwnProperty(n)){const r=e(n)+"="+e(s[n]);t=t+r+"&"}return t=t.slice(0,-1),t}var Ll;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(Ll||(Ll={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(s,e){const t=s>=500&&s<600,r=[408,429].indexOf(s)!==-1,i=e.indexOf(s)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,t,n,r,i,o,l,c,u,f,p,g=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,T)=>{this.resolve_=E,this.reject_=T,this.start_()})}start_(){const e=(n,r)=>{if(r){n(!1,new Va(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ll.NO_ERROR,c=i.getStatus();if(!l||WS(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ll.ABORT;n(!1,new Va(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;n(!0,new Va(u,i))})},t=(n,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());$S(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=OS();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?WE():US();o(c)}else{const c=LS();o(c)}};this.canceled_?t(!1,new Va(!1,null,!0)):this.backoffId_=qS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Va{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function HS(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function QS(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YS(s,e){e&&(s["X-Firebase-GMPID"]=e)}function JS(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function ZS(s,e,t,n,r,i,o=!0){const l=zS(s.urlParams),c=s.url+l,u=Object.assign({},s.headers);return YS(u,e),HS(u,t),QS(u,i),JS(u,n),new KS(c,s.method,u,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function t1(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this._service=e,t instanceof tn?this._location=t:this._location=tn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ul(e,t)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return t1(this._location.path)}get storage(){return this._service}get parent(){const e=e1(this._location.path);if(e===null)return null;const t=new tn(this._location.bucket,e);return new Ul(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BS(e)}}function ug(s,e){const t=e==null?void 0:e[RS];return t==null?null:tn.makeFromBucketSpec(t,s)}function n1(s,e,t,n={}){s.host=`${e}:${t}`,s._protocol="http";const{mockUserToken:r}=n;r&&(s._overrideAuthToken=typeof r=="string"?r:rh(r,s.app.options.projectId))}class s1{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=zE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PS,this._maxUploadRetryTime=jS,this._requests=new Set,r!=null?this._bucket=tn.makeFromBucketSpec(r,this._host):this._bucket=ug(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=ug(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ul(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new XS(WE());{const o=ZS(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const hg="@firebase/storage",dg="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="storage";function r1(s=Oo(),e){s=$e(s);const n=ui(s,KE).getImmediate({identifier:e}),r=Fl("storage");return r&&i1(n,...r),n}function i1(s,e,t,n={}){n1(s,e,t,n)}function o1(s,{instanceIdentifier:e}){const t=s.getProvider("app").getImmediate(),n=s.getProvider("auth-internal"),r=s.getProvider("app-check-internal");return new s1(t,n,r,e,Ns)}function a1(){Fn(new bn(KE,o1,"PUBLIC").setMultipleInstances(!0)),It(hg,dg,""),It(hg,dg,"esm2017")}a1();const l1={BASE_URL:"/",DEV:!0,MODE:"production",PROD:!1,SSR:!1,VITE_FIREBASE_API_KEY:"your-actual-api-key",VITE_FIREBASE_APP_ID:"your-app-id",VITE_FIREBASE_AUTH_DOMAIN:"your-project.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"your-sender-id",VITE_FIREBASE_PROJECT_ID:"your-project",VITE_FIREBASE_STORAGE_BUCKET:"your-project.appspot.com",VITE_USER_NODE_ENV:"development"},fg=3,c1=1e3,u1=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID","VITE_FIREBASE_MEASUREMENT_ID"];for(const s of u1)if(!l1[s])throw new Error(`Missing required environment variable: ${s}`);const h1={apiKey:"your-actual-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project",storageBucket:"your-project.appspot.com",messagingSenderId:"your-sender-id",appId:"your-app-id",measurementId:void 0},Gs=class Gs{constructor(){Sn(this,"app");Sn(this,"_auth");Sn(this,"_db");Sn(this,"_functions");Sn(this,"connectionState","disconnected");Sn(this,"_storage");this.initializeWithRetry()}static getInstance(){return Gs.instance||(Gs.instance=new Gs),Gs.instance}async initializeWithRetry(e=0){try{this.app=Rg(h1),this._auth=Ay(this.app),this._db=iS(this.app),this._functions=SS(this.app),this._storage=r1(this.app),await oS(this._db).catch(n=>{n.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):n.code==="unimplemented"&&console.warn("The current browser does not support persistence.")}),yy(this._auth,n=>{console.log("Auth state changed:",n?"logged in":"logged out")}),yc(Cn(this._db,"_connection"),"status").onSnapshot(n=>{var r;this.connectionState=(r=n.data())!=null&&r.isConnected?"connected":"disconnected",console.log("Connection state:",this.connectionState)}),console.log("Firebase initialized successfully")}catch(t){if(console.error(`Firebase initialization attempt ${e+1} failed:`,t),e<fg)await new Promise(n=>setTimeout(n,c1*(e+1))),await this.initializeWithRetry(e+1);else throw new Error(`Failed to initialize Firebase after ${fg} attempts`)}}get auth(){return this._auth}get db(){return this._db}get functions(){return this._functions}get storage(){return this._storage}isConnected(){return this.connectionState==="connected"}};Sn(Gs,"instance");let eh=Gs;const Nc=eh.getInstance(),d1=Nc.auth,hn=Nc.db;Nc.functions;Nc.storage;let f1=class extends B.Component{constructor(){super(...arguments);Sn(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("Uncaught error:",t,n)}render(){var t;return this.state.hasError?this.props.fallback||d.jsxDEV("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:d.jsxDEV("div",{className:"max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center",children:[d.jsxDEV("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Something went wrong"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ErrorBoundary.tsx",lineNumber:33,columnNumber:15},this),d.jsxDEV("p",{className:"text-gray-600 mb-4",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ErrorBoundary.tsx",lineNumber:36,columnNumber:15},this),d.jsxDEV("button",{onClick:()=>window.location.reload(),className:"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200",children:"Refresh Page"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ErrorBoundary.tsx",lineNumber:39,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ErrorBoundary.tsx",lineNumber:32,columnNumber:13},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ErrorBoundary.tsx",lineNumber:31,columnNumber:11},this):this.props.children}};const m1=Po.memo(()=>d.jsxDEV("div",{className:"text-center space-y-4 py-8",children:[d.jsxDEV("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mx-auto"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:92,columnNumber:5},void 0),d.jsxDEV("p",{className:"text-xl text-gray-700",children:"Processing verification..."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:93,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:91,columnNumber:3},void 0)),HE=Po.memo(({message:s})=>d.jsxDEV("div",{className:"p-4 bg-red-100 bg-opacity-80 backdrop-blur-sm border border-red-200 rounded-lg text-red-700 animate-pulse",children:s},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:98,columnNumber:3},void 0));HE.displayName="ErrorMessage";const p1=({onVerificationComplete:s})=>{const[e,t]=B.useState("idle"),[n,r]=B.useState(""),[i,o]=B.useState(""),[l,c]=B.useState("voice"),[u,f]=B.useState(!1),[p,g]=B.useState({voterId:"",name:""}),[E,T]=B.useState("none"),[S,k]=B.useState(!1),[G,F]=B.useState("initial"),M=B.useRef(null),Q=B.useRef(!1),[re,Y]=B.useState(0),I=3,y=3e5,v=pg(),[w,x]=B.useState({isHumanDetected:!1,isCameraReady:!1,isPhotoTaken:!1,isFingerPrintScanned:!1,isAadhaarVerified:!1,isVoterIdConfirmed:!1,isVoterListVerified:!1,photoUrl:null,fingerPrintData:null,voterDetails:null,error:null}),D=B.useRef(null),b=B.useRef(null);B.useRef(null);const Re=P=>/^[A-Z]{3}\d{7}$/.test(P);B.useEffect(()=>("webkitSpeechRecognition"in window&&(M.current=new window.webkitSpeechRecognition,M.current.continuous=!0,M.current.interimResults=!0,M.current.lang="en-IN",M.current.onresult=P=>{const O=Array.from(P.results).map(Z=>Z[0]).map(Z=>Z.transcript).join("");o(O),lt(O.toLowerCase())},M.current.onerror=P=>{console.error("Voice recognition error:",P.error),r("Voice input error. Please try again or use text input."),f(!1)}),()=>{M.current&&M.current.stop()}),[]);const lt=P=>{const O=P.match(/[a-zA-Z]{3}\s*\d{7}/g);if(O){const Z=O[0].replace(/\s/g,"").toUpperCase();if(Re(Z)){g(oe=>({...oe,voterId:Z})),ye("Voter ID recorded. Please state your full name.");return}else ye("Invalid Voter ID format. Please try again with format ABC1234567.")}if(P.includes("my name is")||P.includes("name is")){const Z=P.match(/(?:my name is|name is) (.*)/i);if(Z&&Z[1]){const oe=Z[1].trim();g(Pe=>({...Pe,name:oe})),ye("Name recorded. Please confirm your details or say 'verify' to proceed.")}}(P.includes("verify")||P.includes("confirm"))&&Kt()},ye=P=>{if("speechSynthesis"in window&&!window.speechSynthesis.speaking){const O=new SpeechSynthesisUtterance(P);O.rate=1,O.pitch=1,window.speechSynthesis.speak(O)}};B.useEffect(()=>{Q.current||(ye("Welcome to VoteX. Please speak your Voter ID in format ABC followed by 7 digits."),Q.current=!0)},[]);const Lt=B.useCallback(P=>{const O=P.target.value.toUpperCase();O.length<=10&&(g(Z=>({...Z,voterId:O})),r(""))},[]),_t=B.useCallback(()=>{var P,O;u?(P=M.current)==null||P.stop():((O=M.current)==null||O.start(),ye("Voice input activated. Please speak your Voter ID in format ABC followed by 7 digits.")),f(!u)},[u]);B.useEffect(()=>{(async()=>{if(window.PublicKeyCredential)try{const O=await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();k(O)}catch(O){console.error("Error checking biometric support:",O),k(!1)}})()},[]);const $t=()=>crypto.getRandomValues(new Uint8Array(32)),Ye=async()=>{if(!p.voterId||!Re(p.voterId)){const P="Please enter a valid Voter ID before fingerprint verification.";r(P),ye(P);return}try{const O={challenge:$t(),rp:{name:"VoteX",id:window.location.hostname},user:{id:Uint8Array.from(p.voterId,oe=>oe.charCodeAt(0)),name:p.voterId,displayName:p.name||p.voterId},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",requireResidentKey:!1,userVerification:"required"},timeout:6e4,attestation:"direct"};await navigator.credentials.create({publicKey:O})&&(T("registered"),wn())}catch(P){console.error("Fingerprint registration error:",P);const O="Fingerprint registration failed. Please try again.";r(O),ye(O)}},wn=async()=>{try{const O={challenge:$t(),timeout:6e4,userVerification:"required",rpId:window.location.hostname};await navigator.credentials.get({publicKey:O})&&(T("verified"),ye("Fingerprint verified successfully."),Kt())}catch(P){console.error("Fingerprint verification error:",P);const O="Fingerprint verification failed. Please try again.";r(O),ye(O)}},yt=async P=>{try{const O=Cn(hn,"voters"),Z=lo(O,Da("voterId","==",P)),oe=await co(Z);if(oe.empty)throw new Error("Voter ID not found in database");return oe.docs[0].data()}catch(O){return console.error("Error verifying voter ID:",O),null}},Ve=async(P,O)=>{try{const Z=Cn(hn,`regions/${O}/registered_voters`),oe=lo(Z,Da("voterId","==",P));return!(await co(oe)).empty}catch(Z){return console.error("Error verifying voter in region:",Z),!1}},xn=async(P,O)=>.9,zt=async(P,O)=>.85,Wt=P=>.95,tt=async(P,O)=>{try{const Z=yc(hn,"voters",P),oe=await qE(Z);if(!oe.exists())return{isMatch:!1,confidence:0,error:"Voter record not found"};const Pe=oe.data().fingerprint_data,xe={minutiaeMatch:await xn(O,Pe),patternMatch:await zt(O,Pe),qualityScore:Wt(O)},Ae=sn(xe),on=.85;return{isMatch:Ae>=on,confidence:Ae,error:Ae<on?"Low confidence match":void 0}}catch(Z){return console.error("Error comparing fingerprint:",Z),{isMatch:!1,confidence:0,error:"Biometric comparison failed"}}},sn=P=>{const O={minutiaeMatch:.5,patternMatch:.3,qualityScore:.2};return P.minutiaeMatch*O.minutiaeMatch+P.patternMatch*O.patternMatch+P.qualityScore*O.qualityScore},Kt=async()=>{if(re>=I){const O=`Maximum verification attempts (${I}) reached. Please try again after 5 minutes.`;r(O),ye(O),setTimeout(()=>{Y(0),r("")},y);return}if(!p.voterId||!p.name){const O="Please provide both Voter ID and name before verification.";r(O),ye(O);return}if(!Re(p.voterId)){const O="Invalid Voter ID format. Please use format ABC1234567.";r(O),ye(O);return}t("processing"),ye("Processing your verification. Please wait.");let P=null;try{const O=await yt(p.voterId);if(!O)throw new Error("Voter ID not found in the database");if(await Dt(p.voterId))throw new Error("Suspicious activity detected");if(F("id_verified"),ye("Voter ID verified. Proceeding with biometric verification."),S){if(E!=="verified"){const Pe="Please complete fingerprint verification.";r(Pe),ye(Pe),t("idle");return}if(P=await tt(p.voterId,"current_fingerprint_data"),!P.isMatch)throw new Error("Biometric verification failed");F("biometric_verified"),ye("Biometric verification successful. Checking regional voter list.")}if(!await Ve(p.voterId,O.region))throw new Error("Voter not found in regional voter list");F("region_verified"),await ig(Cn(hn,"verification_logs"),{verification_type:"complete",voter_id:p.voterId,fingerprint_verified:E==="verified",region_verified:!0,status:"success",timestamp:new Date,steps_completed:{id_verification:!0,biometric_verification:E==="verified",region_verification:!0},security_checks:{suspicious_activity_checked:!0,rate_limit_checked:!0,biometric_confidence:(P==null?void 0:P.confidence)||null}}),t("success"),ye("All verifications successful. You may proceed to the voting booth."),Y(0),s==null||s(!0),v("/voting-booth",{state:{voterId:p.voterId}})}catch(O){console.error("Verification error:",O),t("failed"),Y(Pe=>Pe+1);const Z=O,oe=Z.message;r(oe),ye(oe),await ig(Cn(hn,"verification_logs"),{verification_type:"complete",voter_id:p.voterId,fingerprint_verified:E==="verified",status:"failed",error_type:Z.name,error_message:oe,timestamp:new Date,steps_completed:{id_verification:G==="id_verified",biometric_verification:G==="biometric_verified",region_verification:G==="region_verified"},attempts:re}),s==null||s(!1)}},Dt=async P=>{try{const O=Cn(hn,"verification_logs"),Z=new Date(Date.now()-24*60*60*1e3),oe=lo(O,Da("voter_id","==",P),Da("timestamp",">=",Z)),xe=(await co(oe)).docs.map(Ft=>Ft.data());return xe.filter(Ft=>Ft.status==="failed").length>=I||new Set(xe.map(Ft=>Ft.location).filter(Boolean)).size>2}catch(O){return console.error("Error checking suspicious activity:",O),!1}},rn=()=>d.jsxDEV("div",{className:"flex justify-center items-center space-x-4 mb-6",children:[d.jsxDEV(Ut,{step:"ID Verification",completed:G!=="initial",current:G==="initial"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:796,columnNumber:7},void 0),d.jsxDEV("div",{className:"h-px w-8 bg-white/20"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:801,columnNumber:7},void 0),d.jsxDEV(Ut,{step:"Biometric Check",completed:G==="biometric_verified"||G==="region_verified",current:G==="id_verified"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:802,columnNumber:7},void 0),d.jsxDEV("div",{className:"h-px w-8 bg-white/20"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:810,columnNumber:7},void 0),d.jsxDEV(Ut,{step:"Regional Verification",completed:G==="region_verified",current:G==="biometric_verified"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:811,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:795,columnNumber:5},void 0),Ut=({step:P,completed:O,current:Z})=>d.jsxDEV("div",{className:"flex flex-col items-center",children:[d.jsxDEV("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${O?"bg-green-500":Z?"bg-blue-500 animate-pulse":"bg-white/10"}`,children:O?d.jsxDEV(Ka,{className:"h-4 w-4 text-white"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:839,columnNumber:11},void 0):d.jsxDEV("span",{className:"text-sm text-white",children:P[0]},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:841,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:829,columnNumber:7},void 0),d.jsxDEV("span",{className:"text-xs mt-1 text-white/60",children:P},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:844,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:828,columnNumber:5},void 0),Tn=()=>d.jsxDEV("button",{onClick:Ye,disabled:!S||E==="verified",className:`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${E==="verified"?"bg-green-500/20 text-green-400":"bg-white/10 hover:bg-white/20 text-white"} ${!S&&"opacity-50 cursor-not-allowed"}`,children:[d.jsxDEV(xf,{className:"h-5 w-5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:859,columnNumber:7},void 0),d.jsxDEV("span",{children:E==="verified"?"Fingerprint Verified":"Verify Fingerprint"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:860,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:850,columnNumber:5},void 0);B.useMemo(()=>!p.voterId||!p.name||re>=I,[p.voterId,p.name,re]),B.useEffect(()=>(Dn(),Mt(),Vt(),()=>{R(),M.current&&M.current.stop()}),[]);const Dn=async()=>{try{const P=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1});D.current&&(D.current.srcObject=P,b.current=P,x(O=>({...O,isCameraReady:!0})))}catch{x(O=>({...O,error:"Camera access denied. Please allow camera access."}))}},Mt=()=>{"webkitSpeechRecognition"in window&&(M.current=new window.webkitSpeechRecognition,M.current.continuous=!1,M.current.interimResults=!1,M.current.onresult=P=>{const O=P.results[0][0].transcript.toLowerCase();Hn(O)},M.current.onend=()=>{f(!1)})},Vt=()=>{setTimeout(()=>{x(P=>({...P,isHumanDetected:!0})),ye("Please look into the camera for photo verification.")},2e3)},Vn=()=>{setTimeout(()=>{x(O=>({...O,isVoterListVerified:!0})),ye("Verification completed successfully. You are registered to vote in this constituency.")},2e3)},Hn=P=>{P.includes("yes")?(x(O=>({...O,isVoterIdConfirmed:!0})),Vn()):P.includes("no")&&(Ht(),ye("Let's try the verification process again."))},Ht=()=>{x({isHumanDetected:!1,isCameraReady:!0,isPhotoTaken:!1,isFingerPrintScanned:!1,isAadhaarVerified:!1,isVoterIdConfirmed:!1,isVoterListVerified:!1,photoUrl:null,fingerPrintData:null,voterDetails:null,error:null}),Vt()},R=()=>{b.current&&b.current.getTracks().forEach(P=>P.stop())};return d.jsxDEV(f1,{children:d.jsxDEV("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[d.jsxDEV("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:d.jsxDEV("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Voter Verification"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1088,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1087,columnNumber:9},void 0),d.jsxDEV("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:d.jsxDEV("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[e==="idle"&&d.jsxDEV("div",{className:"space-y-8",children:[l==="voice"&&d.jsxDEV("div",{className:"text-center space-y-6",children:[d.jsxDEV("button",{onClick:_t,className:`p-8 rounded-full transition-all duration-300 ${u?"glass-effect ring-2 ring-green-400 animate-pulse":"glass-effect hover:bg-white hover:bg-opacity-30"}`,children:u?d.jsxDEV(ou,{className:"h-12 w-12 text-green-600"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1109,columnNumber:25},void 0):d.jsxDEV(yg,{className:"h-12 w-12 text-gray-600"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1111,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1100,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-lg text-gray-700",children:u?"Listening... Speak clearly":"Click the microphone to start speaking"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1114,columnNumber:21},void 0),i&&d.jsxDEV("div",{className:"p-4 bg-red-100 bg-opacity-80 backdrop-blur-sm border border-red-200 rounded-lg text-red-700 animate-pulse",children:i},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1120,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1099,columnNumber:19},void 0),l==="text"&&d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxDEV("div",{className:"space-y-4",children:[d.jsxDEV("div",{className:"relative",children:[d.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Voter ID"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1132,columnNumber:25},void 0),d.jsxDEV("input",{type:"text",value:p.voterId,onChange:Lt,className:"w-full px-4 py-3 rounded-lg glass-effect text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Format: ABC1234567",maxLength:10},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1135,columnNumber:25},void 0),d.jsxDEV("p",{className:"mt-1 text-xs text-gray-600",children:"Example: ABC1234567 (3 letters followed by 7 digits)"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1143,columnNumber:25},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1131,columnNumber:23},void 0),d.jsxDEV("div",{className:"relative",children:[d.jsxDEV("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1148,columnNumber:25},void 0),d.jsxDEV("input",{type:"text",value:p.name,onChange:P=>g(O=>({...O,name:P.target.value})),className:"w-full px-4 py-3 rounded-lg glass-effect text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Enter your full name"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1151,columnNumber:25},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1147,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1130,columnNumber:21},void 0),d.jsxDEV("div",{className:"flex flex-col justify-center space-y-6",children:[d.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxDEV("div",{className:"p-6 glass-effect rounded-lg flex flex-col items-center",children:[d.jsxDEV(Tv,{className:"h-10 w-10 mb-3 text-indigo-600"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1170,columnNumber:27},void 0),d.jsxDEV("span",{className:"text-sm font-medium text-gray-700",children:"Camera Ready"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1171,columnNumber:27},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1169,columnNumber:25},void 0),d.jsxDEV("div",{className:`p-6 glass-effect rounded-lg flex flex-col items-center ${E==="verified"?"ring-2 ring-green-400":""}`,children:[d.jsxDEV(xf,{className:`h-10 w-10 mb-3 ${E==="verified"?"text-green-600":"text-purple-600"}`},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1182,columnNumber:27},void 0),d.jsxDEV("span",{className:"text-sm font-medium text-gray-700",children:E==="verified"?"Fingerprint Verified":S?"Touch ID Ready":"Touch ID Not Available"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1189,columnNumber:27},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1175,columnNumber:25},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1168,columnNumber:23},void 0),S&&d.jsxDEV(Tn,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1198,columnNumber:48},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1167,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1129,columnNumber:19},void 0),n&&d.jsxDEV(HE,{message:n},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1204,columnNumber:34},void 0),d.jsxDEV("div",{className:"text-center",children:d.jsxDEV("button",{onClick:Kt,className:"px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20",children:"Verify Identity"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1208,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1207,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1096,columnNumber:15},void 0),e==="processing"&&d.jsxDEV(m1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1219,columnNumber:41},void 0),e==="processing"&&d.jsxDEV(rn,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1222,columnNumber:41},void 0),e==="success"&&d.jsxDEV("div",{className:"text-center space-y-6 py-8",children:[d.jsxDEV(Ka,{className:"h-20 w-20 text-green-600 mx-auto animate-bounce"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1227,columnNumber:17},void 0),d.jsxDEV("div",{children:[d.jsxDEV("p",{className:"text-2xl font-semibold text-green-700 mb-2",children:"Verification Successful"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1229,columnNumber:19},void 0),d.jsxDEV("p",{className:"text-lg text-green-600",children:"You may proceed to the voting booth"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1232,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1228,columnNumber:17},void 0),d.jsxDEV("button",{onClick:()=>{t("idle"),g({voterId:"",name:""}),o("")},className:"px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20",children:"Verify Another Voter"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1236,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1226,columnNumber:15},void 0),e==="failed"&&d.jsxDEV("div",{className:"text-center space-y-6 py-8",children:[d.jsxDEV(th,{className:"h-20 w-20 text-red-600 mx-auto animate-pulse"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1252,columnNumber:17},void 0),d.jsxDEV("div",{children:[d.jsxDEV("p",{className:"text-2xl font-semibold text-red-700 mb-2",children:"Verification Failed"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1254,columnNumber:19},void 0),d.jsxDEV("p",{className:"text-lg text-red-600",children:n},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1257,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1253,columnNumber:17},void 0),d.jsxDEV("div",{className:"flex justify-center space-x-4",children:[d.jsxDEV("button",{onClick:()=>t("idle"),className:"px-6 py-3 glass-effect hover:bg-white hover:bg-opacity-30 text-gray-700 rounded-lg transition transform hover:scale-105",children:"Try Again"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1260,columnNumber:19},void 0),d.jsxDEV(kt,{to:"/staff",className:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20",children:"Contact Staff"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1266,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1259,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1251,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1094,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1093,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1086,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/VoterVerification.tsx",lineNumber:1085,columnNumber:5},void 0)},g1=Po.memo(p1),_1=()=>{const[s,e]=B.useState(!1),[t,n]=B.useState(!1),[r,i]=B.useState(null),o=async l=>{l.preventDefault(),n(!0),i(null),setTimeout(()=>n(!1),2e3)};return d.jsxDEV("div",{className:"min-h-[80vh] relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50",children:[d.jsxDEV("div",{className:"absolute inset-0 overflow-hidden",children:[d.jsxDEV("div",{className:"absolute top-0 w-full h-1/3 bg-gradient-to-b from-orange-500/10 to-transparent transform -skew-y-6 animate-soft-float"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:37,columnNumber:9},void 0),d.jsxDEV("div",{className:"absolute top-1/3 w-full h-1/3 bg-gradient-to-b from-gray-200/10 to-transparent transform skew-y-6 animate-soft-float animation-delay-200"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:40,columnNumber:9},void 0),d.jsxDEV("div",{className:"absolute top-2/3 w-full h-1/3 bg-gradient-to-b from-green-500/10 to-transparent transform -skew-y-6 animate-soft-float animation-delay-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:43,columnNumber:9},void 0),d.jsxDEV("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:d.jsxDEV("div",{className:"w-96 h-96 border-2 border-blue-500/10 rounded-full animate-spin-slow",children:[...Array(24)].map((l,c)=>d.jsxDEV("div",{className:"absolute w-1 h-8 bg-blue-500/10",style:{transformOrigin:"50% 50%",transform:`rotate(${c*15}deg) translateY(-12rem)`}},c,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:49,columnNumber:15},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:47,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:46,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:35,columnNumber:7},void 0),d.jsxDEV("div",{className:"w-full max-w-md relative",children:[d.jsxDEV(kt,{to:"/",className:"absolute top-0 left-0 -translate-y-12 inline-flex items-center text-gray-600 hover:text-primary transition-colors",children:[d.jsxDEV(_g,{className:"h-4 w-4 mr-1"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:69,columnNumber:11},void 0),"Back to Home"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:65,columnNumber:9},void 0),d.jsxDEV("div",{className:"bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden",children:[d.jsxDEV("div",{className:"px-8 pt-6 pb-4 bg-gradient-to-r from-orange-500 via-white to-green-500",children:[d.jsxDEV("div",{className:"flex justify-center mb-4",children:d.jsxDEV(bg,{className:"h-12 w-12 text-blue-900"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:78,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:77,columnNumber:13},void 0),d.jsxDEV("h2",{className:"text-center text-2xl font-bold text-gray-900",children:"ECI Staff Login"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:80,columnNumber:13},void 0),d.jsxDEV("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Election Commission of India"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:83,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:76,columnNumber:11},void 0),d.jsxDEV("form",{className:"px-8 py-6 space-y-6",onSubmit:o,children:[r&&d.jsxDEV("div",{className:"flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg",children:[d.jsxDEV(th,{className:"h-5 w-5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:92,columnNumber:17},void 0),d.jsxDEV("p",{className:"text-sm",children:r},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:93,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:91,columnNumber:15},void 0),d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"staff-id",className:"block text-sm font-medium text-gray-700",children:"Staff ID"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:98,columnNumber:15},void 0),d.jsxDEV("div",{className:"mt-1 relative",children:[d.jsxDEV("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsxDEV(Hv,{className:"h-5 w-5 text-gray-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:106,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:105,columnNumber:17},void 0),d.jsxDEV("input",{id:"staff-id",name:"staff-id",type:"text",required:!0,className:"appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",placeholder:"Enter your Staff ID"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:104,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:97,columnNumber:13},void 0),d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:120,columnNumber:15},void 0),d.jsxDEV("div",{className:"mt-1 relative",children:[d.jsxDEV("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:d.jsxDEV(jv,{className:"h-5 w-5 text-gray-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:128,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:127,columnNumber:17},void 0),d.jsxDEV("input",{id:"password",name:"password",type:s?"text":"password",required:!0,className:"appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200",placeholder:"Enter your password"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:130,columnNumber:17},void 0),d.jsxDEV("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>e(!s),children:s?d.jsxDEV(kv,{className:"h-5 w-5 text-gray-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:144,columnNumber:21},void 0):d.jsxDEV(Sv,{className:"h-5 w-5 text-gray-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:146,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:138,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:126,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:119,columnNumber:13},void 0),d.jsxDEV("div",{className:"flex items-center justify-between",children:[d.jsxDEV("div",{className:"flex items-center",children:[d.jsxDEV("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:154,columnNumber:17},void 0),d.jsxDEV("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-700",children:"Remember me"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:160,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:153,columnNumber:15},void 0),d.jsxDEV("a",{href:"#",className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:"Forgot password?"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:168,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:152,columnNumber:13},void 0),d.jsxDEV("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5",children:t?d.jsxDEV("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:182,columnNumber:17},void 0):"Sign in"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:176,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:89,columnNumber:11},void 0),d.jsxDEV("div",{className:"px-8 py-4 bg-gray-50",children:d.jsxDEV("p",{className:"text-xs text-center text-gray-600",children:["By signing in, you agree to ECI's"," ",d.jsxDEV(kt,{to:"/legal/terms",className:"text-primary hover:underline",children:"Terms of Service"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:193,columnNumber:15},void 0)," ","and"," ",d.jsxDEV(kt,{to:"/legal/privacy",className:"text-primary hover:underline",children:"Privacy Policy"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:197,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:191,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:190,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:63,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffLogin.tsx",lineNumber:33,columnNumber:5},void 0)},y1=()=>{const[s,e]=B.useState({total:0,success:0,failed:0,pending:0}),[t,n]=B.useState([]),[r,i]=B.useState(!0),[o,l]=B.useState(""),[,c]=B.useState([]);B.useEffect(()=>{u(),f()},[]),B.useEffect(()=>{const g=lo(Cn(hn,"verification_logs"),ng("createdAt","desc")),E=ES(g,T=>{const S=T.docs.map(k=>({id:k.id,...k.data()}));c(S)});return()=>E()},[]);const u=async()=>{try{const g=Cn(hn,"verification_logs"),T=(await co(g)).docs.map(F=>F.data()),S=T.length,k=T.filter(F=>F.status==="success").length,G=T.filter(F=>F.status==="failed").length;e({total:S,success:k,failed:G,pending:S-(k+G)})}catch(g){console.error("Error fetching stats:",g)}},f=async()=>{try{const g=Cn(hn,"voters"),E=lo(g,ng("created_at","desc")),S=(await co(E)).docs.map(k=>({id:k.id,...k.data()}));n(S)}catch(g){console.error("Error fetching voters:",g)}finally{i(!1)}},p=t.filter(g=>g.full_name.toLowerCase().includes(o.toLowerCase())||g.aadhaar_id.includes(o)||g.electoral_roll_number.includes(o));return d.jsxDEV("div",{className:"space-y-6",children:[d.jsxDEV("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[d.jsxDEV("h2",{className:"text-3xl font-bold mb-6",children:"Staff Dashboard"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:134,columnNumber:9},void 0),d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxDEV("div",{className:"bg-white/5 rounded-lg p-6",children:[d.jsxDEV("h3",{className:"text-xl font-semibold mb-4",children:"Recent Verifications"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:138,columnNumber:13},void 0),d.jsxDEV("div",{className:"space-y-4",children:[d.jsxDEV("div",{className:"flex items-center justify-between",children:[d.jsxDEV("div",{className:"flex items-center space-x-3",children:[d.jsxDEV(Ka,{className:"h-5 w-5 text-green-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:142,columnNumber:19},void 0),d.jsxDEV("span",{children:"Successful Verification"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:143,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:141,columnNumber:17},void 0),d.jsxDEV("span",{className:"text-sm text-white/60",children:"2 minutes ago"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:145,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:140,columnNumber:15},void 0),d.jsxDEV("div",{className:"flex items-center justify-between",children:[d.jsxDEV("div",{className:"flex items-center space-x-3",children:[d.jsxDEV(th,{className:"h-5 w-5 text-red-400"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:149,columnNumber:19},void 0),d.jsxDEV("span",{children:"Failed Verification"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:150,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:148,columnNumber:17},void 0),d.jsxDEV("span",{className:"text-sm text-white/60",children:"5 minutes ago"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:152,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:147,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:139,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:137,columnNumber:11},void 0),d.jsxDEV("div",{className:"bg-white/5 rounded-lg p-6",children:[d.jsxDEV("h3",{className:"text-xl font-semibold mb-4",children:"Statistics"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:158,columnNumber:13},void 0),d.jsxDEV("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxDEV("div",{children:[d.jsxDEV("div",{className:"text-3xl font-bold text-green-400",children:"85%"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:161,columnNumber:17},void 0),d.jsxDEV("div",{className:"text-sm text-white/60",children:"Success Rate"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:162,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:160,columnNumber:15},void 0),d.jsxDEV("div",{children:[d.jsxDEV("div",{className:"text-3xl font-bold text-blue-400",children:"150"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:165,columnNumber:17},void 0),d.jsxDEV("div",{className:"text-sm text-white/60",children:"Total Verifications"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:164,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:159,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:157,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:136,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:133,columnNumber:7},void 0),d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[d.jsxDEV(Aa,{title:"Total Voters",value:s.total,icon:d.jsxDEV(nh,{className:"h-6 w-6"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:178,columnNumber:17},void 0),className:"bg-blue-500/10 text-blue-500"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:175,columnNumber:9},void 0),d.jsxDEV(Aa,{title:"Verified",value:s.success,icon:d.jsxDEV(Ka,{className:"h-6 w-6"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:184,columnNumber:17},void 0),className:"bg-green-500/10 text-green-500"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:181,columnNumber:9},void 0),d.jsxDEV(Aa,{title:"Failed",value:s.failed,icon:d.jsxDEV(Kv,{className:"h-6 w-6"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:190,columnNumber:17},void 0),className:"bg-red-500/10 text-red-500"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:187,columnNumber:9},void 0),d.jsxDEV(Aa,{title:"Pending",value:s.pending,icon:d.jsxDEV(xv,{className:"h-6 w-6"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:196,columnNumber:17},void 0),className:"bg-yellow-500/10 text-yellow-500"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:193,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:174,columnNumber:7},void 0),d.jsxDEV("div",{className:"flex flex-col sm:flex-row gap-4 justify-between items-center",children:[d.jsxDEV("div",{className:"relative flex-1 max-w-md",children:[d.jsxDEV($v,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:204,columnNumber:11},void 0),d.jsxDEV("input",{type:"text",placeholder:"Search voters...",value:o,onChange:g=>l(g.target.value),className:"w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:205,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:203,columnNumber:9},void 0),d.jsxDEV("div",{className:"flex gap-2",children:[d.jsxDEV("button",{onClick:f,className:"px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center space-x-2 transition",children:[d.jsxDEV(qv,{className:"h-5 w-5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:218,columnNumber:13},void 0),d.jsxDEV("span",{children:"Refresh"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:219,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:214,columnNumber:11},void 0),d.jsxDEV("button",{className:"px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2 transition",children:[d.jsxDEV(Xv,{className:"h-5 w-5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:222,columnNumber:13},void 0),d.jsxDEV("span",{children:"Add Voter"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:223,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:221,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:213,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:202,columnNumber:7},void 0),d.jsxDEV("div",{className:"bg-white/5 rounded-lg overflow-hidden",children:d.jsxDEV("div",{className:"overflow-x-auto",children:d.jsxDEV("table",{className:"w-full",children:[d.jsxDEV("thead",{children:d.jsxDEV("tr",{className:"border-b border-white/10",children:[d.jsxDEV("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Name"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:234,columnNumber:17},void 0),d.jsxDEV("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Aadhaar ID"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:237,columnNumber:17},void 0),d.jsxDEV("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Electoral Roll"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:240,columnNumber:17},void 0),d.jsxDEV("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Region"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:243,columnNumber:17},void 0),d.jsxDEV("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Registered"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:246,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:233,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:232,columnNumber:13},void 0),d.jsxDEV("tbody",{className:"divide-y divide-white/10",children:r?d.jsxDEV("tr",{children:d.jsxDEV("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"Loading voters..."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:254,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:253,columnNumber:17},void 0):p.length===0?d.jsxDEV("tr",{children:d.jsxDEV("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"No voters found"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:263,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:262,columnNumber:17},void 0):p.map(g=>d.jsxDEV("tr",{className:"hover:bg-white/5 transition",children:[d.jsxDEV("td",{className:"px-6 py-4 text-white",children:g.full_name},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:273,columnNumber:21},void 0),d.jsxDEV("td",{className:"px-6 py-4 text-white/70",children:g.aadhaar_id},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:274,columnNumber:21},void 0),d.jsxDEV("td",{className:"px-6 py-4 text-white/70",children:g.electoral_roll_number},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:277,columnNumber:21},void 0),d.jsxDEV("td",{className:"px-6 py-4 text-white/70",children:g.region_code},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:280,columnNumber:21},void 0),d.jsxDEV("td",{className:"px-6 py-4 text-white/70",children:new Date(g.created_at).toLocaleDateString()},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:283,columnNumber:21},void 0)]},g.id,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:272,columnNumber:19},void 0))},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:251,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:231,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:230,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:229,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:132,columnNumber:5},void 0)};function Aa({title:s,value:e,icon:t,className:n}){return d.jsxDEV("div",{className:`p-6 rounded-lg ${n}`,children:d.jsxDEV("div",{className:"flex items-center justify-between",children:[d.jsxDEV("div",{children:[d.jsxDEV("p",{className:"text-sm font-medium opacity-70",children:s},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:312,columnNumber:11},this),d.jsxDEV("p",{className:"text-2xl font-bold mt-1",children:e},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:313,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:311,columnNumber:9},this),t]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:310,columnNumber:7},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/StaffDashboard.tsx",lineNumber:309,columnNumber:5},this)}function b1(){const[s,e]=B.useState({user:null,isLoading:!0,isAuthenticated:!1,error:null}),t=B.useCallback(async n=>{try{const r=await qE(yc(hn,"users",n));return r.exists()?r.data():null}catch(r){return console.error("Error fetching user data:",r),null}},[]);return B.useEffect(()=>{const n=yy(d1,async r=>{try{if(r){const i=await t(r.uid),o={...r,roles:(i==null?void 0:i.roles)||[],createdAt:i==null?void 0:i.createdAt,lastLogin:new Date().toISOString()};e({user:o,isLoading:!1,isAuthenticated:!0,error:null})}else e({user:null,isLoading:!1,isAuthenticated:!1,error:null})}catch(i){e(o=>({...o,isLoading:!1,error:i}))}});return()=>n()},[t]),{...s,hasRole:B.useCallback(n=>{var r,i;return((i=(r=s.user)==null?void 0:r.roles)==null?void 0:i.includes(n))||!1},[s.user]),hasAnyRole:B.useCallback(n=>n.some(r=>{var i,o;return(o=(i=s.user)==null?void 0:i.roles)==null?void 0:o.includes(r)})||!1,[s.user])}}const QE=B.memo(()=>d.jsxDEV("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",children:d.jsxDEV("div",{className:"text-center",children:[d.jsxDEV("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:24,columnNumber:7},void 0),d.jsxDEV("p",{className:"mt-4 text-white",children:"Loading..."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:25,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:23,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:22,columnNumber:3},void 0));QE.displayName="LoadingSpinner";const E1=({children:s,redirectPath:e="/staff",requiredRoles:t=[]})=>{const{isAuthenticated:n,isLoading:r,user:i}=b1(),o=mg();if(r)return d.jsxDEV(QE,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:46,columnNumber:12},void 0);if(!n){const l=encodeURIComponent(o.pathname+o.search);return d.jsxDEV(Ev,{to:`${e}?returnUrl=${l}`,replace:!0},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:53,columnNumber:12},void 0)}return t.length>0&&(i!=null&&i.roles)&&!t.some(c=>{var u;return(u=i.roles)==null?void 0:u.includes(c)})?d.jsxDEV("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",children:d.jsxDEV("div",{className:"text-center text-white",children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-2",children:"Access Denied"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:65,columnNumber:13},void 0),d.jsxDEV("p",{children:"You don't have the required permissions to access this page."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:66,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:64,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:63,columnNumber:9},void 0):d.jsxDEV(d.Fragment,{children:s},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/components/ProtectedRoute.tsx",lineNumber:74,columnNumber:10},void 0)},v1=B.memo(E1),N1=()=>d.jsxDEV("div",{className:"min-h-screen bg-gray-50",children:[d.jsxDEV("div",{className:"bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16",children:d.jsxDEV("div",{className:"container mx-auto px-4",children:[d.jsxDEV("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Election Commission of India"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:10,columnNumber:11},void 0),d.jsxDEV("p",{className:"text-xl text-blue-100",children:"Guarding India's Democratic Process Since 1950"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:13,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:9,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:8,columnNumber:7},void 0),d.jsxDEV("div",{className:"container mx-auto px-4 py-12",children:[d.jsxDEV("div",{className:"max-w-3xl mx-auto mb-12",children:d.jsxDEV("p",{className:"text-lg text-gray-700 leading-relaxed",children:"The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering Union and State election processes in India. Established on January 25, 1950, the ECI ensures free and fair elections across the nation, upholding the democratic principles of our Constitution."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:23,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:22,columnNumber:9},void 0),d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:[d.jsxDEV("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxDEV(bg,{className:"h-12 w-12 text-blue-600 mb-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:35,columnNumber:13},void 0),d.jsxDEV("h3",{className:"text-xl font-semibold mb-2",children:"Constitutional Authority"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:36,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Autonomous body under Article 324 of the Indian Constitution"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:39,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:34,columnNumber:11},void 0),d.jsxDEV("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxDEV(nh,{className:"h-12 w-12 text-blue-600 mb-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:44,columnNumber:13},void 0),d.jsxDEV("h3",{className:"text-xl font-semibold mb-2",children:"Universal Suffrage"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:45,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Ensures voting rights for all citizens above 18 years"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:46,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:43,columnNumber:11},void 0),d.jsxDEV("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxDEV(Gv,{className:"h-12 w-12 text-blue-600 mb-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:51,columnNumber:13},void 0),d.jsxDEV("h3",{className:"text-xl font-semibold mb-2",children:"Fair Elections"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:52,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Maintains integrity and transparency in electoral processes"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:53,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:50,columnNumber:11},void 0),d.jsxDEV("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[d.jsxDEV(Rv,{className:"h-12 w-12 text-blue-600 mb-4"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:58,columnNumber:13},void 0),d.jsxDEV("h3",{className:"text-xl font-semibold mb-2",children:"National Reach"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:59,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Conducts elections across all states and union territories"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:60,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:57,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:33,columnNumber:9},void 0),d.jsxDEV("div",{className:"space-y-12 max-w-4xl mx-auto",children:[d.jsxDEV("section",{children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Our Mission"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:69,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-700 leading-relaxed",children:"To conduct free, fair, and transparent elections to strengthen democracy in India. The Commission is committed to ensuring that every eligible citizen can exercise their right to vote without any discrimination or barriers."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:72,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:68,columnNumber:11},void 0),d.jsxDEV("section",{children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Key Responsibilities"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:81,columnNumber:13},void 0),d.jsxDEV("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[d.jsxDEV("li",{children:"Supervising and conducting all elections to Parliament and State Legislatures"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:85,columnNumber:15},void 0),d.jsxDEV("li",{children:"Maintaining and updating the electoral rolls"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:89,columnNumber:15},void 0),d.jsxDEV("li",{children:"Setting up polling stations and appointing polling personnel"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:90,columnNumber:15},void 0),d.jsxDEV("li",{children:"Implementing the Model Code of Conduct"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:93,columnNumber:15},void 0),d.jsxDEV("li",{children:"Regulating political parties and their funding"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:94,columnNumber:15},void 0),d.jsxDEV("li",{children:"Addressing electoral disputes and grievances"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:95,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:84,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:80,columnNumber:11},void 0),d.jsxDEV("section",{children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Technological Advancement"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:100,columnNumber:13},void 0),d.jsxDEV("p",{className:"text-gray-700 leading-relaxed",children:"The ECI has embraced modern technology to enhance the electoral process. From Electronic Voting Machines (EVMs) to Voter Verifiable Paper Audit Trail (VVPAT) systems, we continuously innovate to ensure accurate and efficient elections."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:103,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:99,columnNumber:11},void 0),d.jsxDEV("section",{children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-4 text-gray-800",children:"Contact Information"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:112,columnNumber:13},void 0),d.jsxDEV("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[d.jsxDEV("p",{className:"text-gray-700 mb-2",children:[d.jsxDEV("strong",{children:"Address:"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:117,columnNumber:17},void 0)," Election Commission of India, Nirvachan Sadan, Ashoka Road, New Delhi-110001"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:116,columnNumber:15},void 0),d.jsxDEV("p",{className:"text-gray-700 mb-2",children:[d.jsxDEV("strong",{children:"Phone:"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:121,columnNumber:17},void 0)," 011-23052205"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:120,columnNumber:15},void 0),d.jsxDEV("p",{className:"text-gray-700 mb-2",children:[d.jsxDEV("strong",{children:"Toll Free:"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:124,columnNumber:17},void 0)," 1800111950"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:123,columnNumber:15},void 0),d.jsxDEV("p",{className:"text-gray-700",children:[d.jsxDEV("strong",{children:"Email:"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:127,columnNumber:17},void 0)," support@eci.gov.in"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:126,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:115,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:111,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:67,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:20,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/About.tsx",lineNumber:6,columnNumber:5},void 0),I1=()=>{const[s,e]=B.useState({name:"",email:"",phone:"",subject:"",message:""}),[t,n]=B.useState("idle"),r=async o=>{o.preventDefault(),n("submitting");try{await new Promise(l=>setTimeout(l,1e3)),n("success"),e({name:"",email:"",phone:"",subject:"",message:""})}catch{n("error")}},i=o=>{e(l=>({...l,[o.target.name]:o.target.value}))};return d.jsxDEV("div",{className:"min-h-screen bg-gray-50",children:[d.jsxDEV("div",{className:"bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16",children:d.jsxDEV("div",{className:"container mx-auto px-4",children:[d.jsxDEV("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Contact Us"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:54,columnNumber:11},void 0),d.jsxDEV("p",{className:"text-xl text-blue-100",children:"Get in touch with the Election Commission of India"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:55,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:53,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:52,columnNumber:7},void 0),d.jsxDEV("div",{className:"container mx-auto px-4 py-12",children:d.jsxDEV("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[d.jsxDEV("div",{className:"lg:col-span-1",children:d.jsxDEV("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Contact Information"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:66,columnNumber:15},void 0),d.jsxDEV("div",{className:"space-y-6",children:[d.jsxDEV("div",{className:"flex items-start space-x-4",children:[d.jsxDEV(iu,{className:"w-6 h-6 text-blue-600 mt-1"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:72,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h3",{className:"font-semibold text-gray-800",children:"Address"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:74,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:["Election Commission of India,",d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:77,columnNumber:23},void 0),"Nirvachan Sadan, Ashoka Road,",d.jsxDEV("br",{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:79,columnNumber:23},void 0),"New Delhi-110001"]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:75,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:73,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:71,columnNumber:17},void 0),d.jsxDEV("div",{className:"flex items-start space-x-4",children:[d.jsxDEV(Fv,{className:"w-6 h-6 text-blue-600 mt-1"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:86,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h3",{className:"font-semibold text-gray-800",children:"Phone"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:88,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"011-23052205"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:89,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Toll Free: 1800111950"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:90,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:87,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:85,columnNumber:17},void 0),d.jsxDEV("div",{className:"flex items-start space-x-4",children:[d.jsxDEV(Ov,{className:"w-6 h-6 text-blue-600 mt-1"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:95,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h3",{className:"font-semibold text-gray-800",children:"Email"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:97,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"support@eci.gov.in"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:98,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:96,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:94,columnNumber:17},void 0),d.jsxDEV("div",{className:"flex items-start space-x-4",children:[d.jsxDEV(Vv,{className:"w-6 h-6 text-blue-600 mt-1"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:103,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("h3",{className:"font-semibold text-gray-800",children:"Working Hours"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:105,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Monday - Friday: 9:30 AM - 6:00 PM"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:108,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Saturday: 9:30 AM - 2:00 PM"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:111,columnNumber:21},void 0),d.jsxDEV("p",{className:"text-gray-600",children:"Sunday: Closed"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:112,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:104,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:102,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:70,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:65,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:64,columnNumber:11},void 0),d.jsxDEV("div",{className:"lg:col-span-2",children:d.jsxDEV("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[d.jsxDEV("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Send us a Message"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:122,columnNumber:15},void 0),d.jsxDEV("form",{onSubmit:r,className:"space-y-6",children:[d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name *"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:129,columnNumber:21},void 0),d.jsxDEV("input",{type:"text",id:"name",name:"name",value:s.name,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter your full name"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:135,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:128,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address *"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:148,columnNumber:21},void 0),d.jsxDEV("input",{type:"email",id:"email",name:"email",value:s.email,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter your email"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:154,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:147,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:127,columnNumber:17},void 0),d.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:169,columnNumber:21},void 0),d.jsxDEV("input",{type:"tel",id:"phone",name:"phone",value:s.phone,onChange:i,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter your phone number"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:175,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:168,columnNumber:19},void 0),d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-1",children:"Subject *"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:187,columnNumber:21},void 0),d.jsxDEV("select",{id:"subject",name:"subject",value:s.subject,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[d.jsxDEV("option",{value:"",children:"Select a subject"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:201,columnNumber:23},void 0),d.jsxDEV("option",{value:"general",children:"General Inquiry"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:202,columnNumber:23},void 0),d.jsxDEV("option",{value:"voter-registration",children:"Voter Registration"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:203,columnNumber:23},void 0),d.jsxDEV("option",{value:"complaint",children:"File a Complaint"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:206,columnNumber:23},void 0),d.jsxDEV("option",{value:"feedback",children:"Feedback"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:207,columnNumber:23},void 0),d.jsxDEV("option",{value:"other",children:"Other"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:208,columnNumber:23},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:193,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:186,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:167,columnNumber:17},void 0),d.jsxDEV("div",{children:[d.jsxDEV("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message *"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:214,columnNumber:19},void 0),d.jsxDEV("textarea",{id:"message",name:"message",value:s.message,onChange:i,required:!0,rows:6,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter your message"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:220,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:213,columnNumber:17},void 0),d.jsxDEV("div",{children:d.jsxDEV("button",{type:"submit",disabled:t==="submitting",className:"w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center space-x-2",children:[d.jsxDEV(zv,{className:"w-5 h-5"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:238,columnNumber:21},void 0),d.jsxDEV("span",{children:t==="submitting"?"Sending...":"Send Message"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:239,columnNumber:21},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:233,columnNumber:19},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:232,columnNumber:17},void 0),t==="success"&&d.jsxDEV("div",{className:"p-4 bg-green-100 text-green-700 rounded-lg",children:"Your message has been sent successfully. We'll get back to you soon."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:246,columnNumber:19},void 0),t==="error"&&d.jsxDEV("div",{className:"p-4 bg-red-100 text-red-700 rounded-lg",children:"An error occurred while sending your message. Please try again later."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:253,columnNumber:19},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:126,columnNumber:15},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:121,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:120,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:62,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:61,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/pages/Contact.tsx",lineNumber:50,columnNumber:5},void 0)},w1=()=>d.jsxDEV("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",children:d.jsxDEV("div",{className:"text-center",children:[d.jsxDEV("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:20,columnNumber:7},void 0),d.jsxDEV("p",{className:"mt-4 text-white",children:"Loading..."},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:21,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:19,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:18,columnNumber:3},void 0);function x1(){return d.jsxDEV(vv,{children:d.jsxDEV(B.Suspense,{fallback:d.jsxDEV(w1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:29,columnNumber:27},this),children:d.jsxDEV(Nv,{children:[d.jsxDEV(vr,{path:"/",element:d.jsxDEV(qV,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:32,columnNumber:36},this),children:[d.jsxDEV(vr,{index:!0,element:d.jsxDEV(g1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:34,columnNumber:35},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:34,columnNumber:13},this),d.jsxDEV(vr,{path:"about",element:d.jsxDEV(N1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:36,columnNumber:42},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:36,columnNumber:13},this),d.jsxDEV(vr,{path:"contact",element:d.jsxDEV(I1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:38,columnNumber:44},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:38,columnNumber:13},this),d.jsxDEV(vr,{path:"staff",element:d.jsxDEV(_1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:40,columnNumber:42},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:40,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:32,columnNumber:11},this),d.jsxDEV(vr,{path:"/dashboard/*",element:d.jsxDEV(v1,{children:d.jsxDEV(y1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:47,columnNumber:17},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:46,columnNumber:15},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:43,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:30,columnNumber:9},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:29,columnNumber:7},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/App.jsx",lineNumber:28,columnNumber:5},this)}class T1 extends Po.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Application Error:",e,t)}render(){var e;return this.state.hasError?d.jsxDEV("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",children:d.jsxDEV("div",{className:"text-center text-white p-8",children:[d.jsxDEV("h1",{className:"text-2xl font-bold mb-4",children:"Something went wrong"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:35,columnNumber:13},this),d.jsxDEV("p",{className:"mb-4 text-red-300",children:(e=this.state.error)==null?void 0:e.message},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:36,columnNumber:13},this),d.jsxDEV("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition",children:"Refresh Page"},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:37,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:34,columnNumber:11},this)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:33,columnNumber:9},this):this.props.children}}const YE=document.getElementById("root");if(!YE)throw new Error("Failed to find the root element");const D1=ru.createRoot(YE);D1.render(d.jsxDEV(Po.StrictMode,{children:d.jsxDEV(T1,{children:d.jsxDEV(x1,{},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:66,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:65,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/mantejsingh/Desktop/VoteX/src/main.tsx",lineNumber:64,columnNumber:3},void 0));
//# sourceMappingURL=index-BBN59H4P.js.map
