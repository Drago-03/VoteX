(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Kh={exports:{}},Aa={},Gh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function XE(){if(Om)return Se;Om=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function N(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Y={};function $(V,q,le){this.props=V,this.context=q,this.refs=Y,this.updater=le||j}$.prototype.isReactComponent={},$.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function me(){}me.prototype=$.prototype;function fe(V,q,le){this.props=V,this.context=q,this.refs=Y,this.updater=le||j}var Ee=fe.prototype=new me;Ee.constructor=fe,W(Ee,$.prototype),Ee.isPureReactComponent=!0;var Te=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(V,q,le){var we,Ie={},Ne=null,Le=null;if(q!=null)for(we in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Ke.call(q,we)&&!x.hasOwnProperty(we)&&(Ie[we]=q[we]);var Me=arguments.length-2;if(Me===1)Ie.children=le;else if(1<Me){for(var ze=Array(Me),gt=0;gt<Me;gt++)ze[gt]=arguments[gt+2];Ie.children=ze}if(V&&V.defaultProps)for(we in Me=V.defaultProps,Me)Ie[we]===void 0&&(Ie[we]=Me[we]);return{$$typeof:i,type:V,key:Ne,ref:Le,props:Ie,_owner:Ae.current}}function R(V,q){return{$$typeof:i,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(le){return q[le]})}var O=/\/+/g;function A(V,q){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):q.toString(36)}function et(V,q,le,we,Ie){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=we===""?"."+A(Le,0):we,Te(Ie)?(le="",V!=null&&(le=V.replace(O,"$&/")+"/"),et(Ie,q,le,"",function(gt){return gt})):Ie!=null&&(P(Ie)&&(Ie=R(Ie,le+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),q.push(Ie)),1;if(Le=0,we=we===""?".":we+":",Te(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var ze=we+A(Ne,Me);Le+=et(Ne,q,le,ze,Ie)}else if(ze=N(V),typeof ze=="function")for(V=ze.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,ze=we+A(Ne,Me++),Le+=et(Ne,q,le,ze,Ie);else if(Ne==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(V,q,le){if(V==null)return V;var we=[],Ie=0;return et(V,we,"","",function(Ne){return q.call(le,Ne,Ie++)}),we}function Nt(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(le){(V._status===0||V._status===-1)&&(V._status=1,V._result=le)},function(le){(V._status===0||V._status===-1)&&(V._status=2,V._result=le)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ae};function te(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(V,q,le){kt(V,function(){q.apply(this,arguments)},le)},count:function(V){var q=0;return kt(V,function(){q++}),q},toArray:function(V){return kt(V,function(q){return q})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=$,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=fe,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=te,Se.cloneElement=function(V,q,le){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var we=W({},V.props),Ie=V.key,Ne=V.ref,Le=V._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Le=Ae.current),q.key!==void 0&&(Ie=""+q.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(ze in q)Ke.call(q,ze)&&!x.hasOwnProperty(ze)&&(we[ze]=q[ze]===void 0&&Me!==void 0?Me[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)we.children=le;else if(1<ze){Me=Array(ze);for(var gt=0;gt<ze;gt++)Me[gt]=arguments[gt+2];we.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:Ne,props:we,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var q=I.bind(null,V);return q.type=V,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:p,render:V}},Se.isValidElement=P,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Se.memo=function(V,q){return{$$typeof:_,type:V,compare:q===void 0?null:q}},Se.startTransition=function(V){var q=Z.transition;Z.transition={};try{V()}finally{Z.transition=q}},Se.unstable_act=te,Se.useCallback=function(V,q){return Ue.current.useCallback(V,q)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,q){return Ue.current.useEffect(V,q)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,q,le){return Ue.current.useImperativeHandle(V,q,le)},Se.useInsertionEffect=function(V,q){return Ue.current.useInsertionEffect(V,q)},Se.useLayoutEffect=function(V,q){return Ue.current.useLayoutEffect(V,q)},Se.useMemo=function(V,q){return Ue.current.useMemo(V,q)},Se.useReducer=function(V,q,le){return Ue.current.useReducer(V,q,le)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,q,le){return Ue.current.useSyncExternalStore(V,q,le)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var Lm;function Od(){return Lm||(Lm=1,Gh.exports=XE()),Gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function JE(){if(Mm)return Aa;Mm=1;var i=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var w,S={},N=null,j=null;_!==void 0&&(N=""+_),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(S[w]=g[w]);if(p&&p.defaultProps)for(w in g=p.defaultProps,g)S[w]===void 0&&(S[w]=g[w]);return{$$typeof:e,type:p,key:N,ref:j,props:S,_owner:o.current}}return Aa.Fragment=t,Aa.jsx=h,Aa.jsxs=h,Aa}var bm;function ZE(){return bm||(bm=1,Kh.exports=JE()),Kh.exports}var z=ZE(),ft=Od(),_u={},Qh={exports:{}},Xt={},Yh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function ew(){return Fm||(Fm=1,function(i){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var V=te-1>>>1,q=Z[V];if(0<o(q,ce))Z[V]=ce,Z[te]=q,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var V=0,q=Z.length,le=q>>>1;V<le;){var we=2*(V+1)-1,Ie=Z[we],Ne=we+1,Le=Z[Ne];if(0>o(Ie,te))Ne<q&&0>o(Le,Ie)?(Z[V]=Le,Z[Ne]=te,V=Ne):(Z[V]=Ie,Z[we]=te,V=we);else if(Ne<q&&0>o(Le,te))Z[V]=Le,Z[Ne]=te,V=Ne;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var g=[],_=[],w=1,S=null,N=3,j=!1,W=!1,Y=!1,$=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(Z){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=Z)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function Te(Z){if(Y=!1,Ee(Z),!W)if(t(g)!==null)W=!0,Nt(Ke);else{var ce=t(_);ce!==null&&Ue(Te,ce.startTime-Z)}}function Ke(Z,ce){W=!1,Y&&(Y=!1,me(I),I=-1),j=!0;var te=N;try{for(Ee(ce),S=t(g);S!==null&&(!(S.expirationTime>ce)||Z&&!D());){var V=S.callback;if(typeof V=="function"){S.callback=null,N=S.priorityLevel;var q=V(S.expirationTime<=ce);ce=i.unstable_now(),typeof q=="function"?S.callback=q:S===t(g)&&s(g),Ee(ce)}else s(g);S=t(g)}if(S!==null)var le=!0;else{var we=t(_);we!==null&&Ue(Te,we.startTime-ce),le=!1}return le}finally{S=null,N=te,j=!1}}var Ae=!1,x=null,I=-1,R=5,P=-1;function D(){return!(i.unstable_now()-P<R)}function O(){if(x!==null){var Z=i.unstable_now();P=Z;var ce=!0;try{ce=x(!0,Z)}finally{ce?A():(Ae=!1,x=null)}}else Ae=!1}var A;if(typeof fe=="function")A=function(){fe(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=O,A=function(){kt.postMessage(null)}}else A=function(){$(O,0)};function Nt(Z){x=Z,Ae||(Ae=!0,A())}function Ue(Z,ce){I=$(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){W||j||(W=!0,Nt(Ke))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(N){case 1:case 2:case 3:var ce=3;break;default:ce=N}var te=N;N=ce;try{return Z()}finally{N=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=N;N=Z;try{return ce()}finally{N=te}},i.unstable_scheduleCallback=function(Z,ce,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=te+q,Z={id:w++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:q,sortIndex:-1},te>V?(Z.sortIndex=te,e(_,Z),t(g)===null&&Z===t(_)&&(Y?(me(I),I=-1):Y=!0,Ue(Te,te-V))):(Z.sortIndex=q,e(g,Z),W||j||(W=!0,Nt(Ke))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var ce=N;return function(){var te=N;N=ce;try{return Z.apply(this,arguments)}finally{N=te}}}}(Xh)),Xh}var Um;function tw(){return Um||(Um=1,Yh.exports=ew()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function nw(){if(jm)return Xt;jm=1;var i=Od(),e=tw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function N(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,m,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=m,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];$[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,fe);$[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,fe);$[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,fe);$[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,r,a,c){var d=$.hasOwnProperty(r)?$[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,a,d,c)&&(a=null),c||d===null?N(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var le=!1;function we(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ie(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ae:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function sr(n){n._valueTracker||(n._valueTracker=gt(n))}function cs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ai(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function hs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xo(n,r){r=r.checked,r!=null&&Ee(n,"checked",r,!1)}function Do(n,r){xo(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ds(n,r.type,a):r.hasOwnProperty("defaultValue")&&ds(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function rl(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ds(n,r,a){(r!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var or=Array.isArray;function ar(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Vo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(or(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function ps(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Oo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,Lo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Or(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ci=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(n){Ci.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ri[r]=Ri[n]})});function Mo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ri.hasOwnProperty(n)&&Ri[n]?(""+r).trim():r+"px"}function bo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Mo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(n,r){if(r){if(Fo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function jo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function ms(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gs=null,un=null,jn=null;function ys(n){if(n=ca(n)){if(typeof gs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vl(r),gs(n.stateNode,n.type,r))}}function zn(n){un?jn?jn.push(n):jn=[n]:un=n}function zo(){if(un){var n=un,r=jn;if(jn=un=null,ys(n),r)for(n=0;n<r.length;n++)ys(r[n])}}function ki(n,r){return n(r)}function Bo(){}var ur=!1;function $o(n,r,a){if(ur)return n(r,a);ur=!0;try{return ki(n,r,a)}finally{ur=!1,(un!==null||jn!==null)&&(Bo(),zo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var _s=!1;if(p)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{_s=!1}function Ni(n,r,a,c,d,m,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(G){this.onError(G)}}var xi=!1,vs=null,Tn=!1,qo=null,wc={onError:function(n){xi=!0,vs=n}};function Es(n,r,a,c,d,m,v,T,C){xi=!1,vs=null,Ni.apply(wc,arguments)}function il(n,r,a,c,d,m,v,T,C){if(Es.apply(this,arguments),xi){if(xi){var F=vs;xi=!1,vs=null}else throw Error(t(198));Tn||(Tn=!0,qo=F)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Di(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function sl(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Sn(d),n;if(m===c)return Sn(d),r;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ho(n){return n=sl(n),n!==null?ws(n):null}function ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ws(n);if(r!==null)return r;n=n.sibling}return null}var Ts=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,ol=e.unstable_shouldYield,Tc=e.unstable_requestPaint,Be=e.unstable_now,al=e.unstable_getCurrentPriorityLevel,Vi=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Ko=e.unstable_LowPriority,ll=e.unstable_IdlePriority,Oi=null,en=null;function ul(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:hl,Go=Math.log,cl=Math.LN2;function hl(n){return n>>>=0,n===0?32:31-(Go(n)/cl|0)|0}var Is=64,Ss=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Li(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Mr(T):(m&=v,m!==0&&(c=Mr(m)))}else v=a&~d,v!==0?c=Mr(v):m!==0&&(c=Mr(m));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,m=r&-r,d>=m||d===16&&(m&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),d=1<<a,c|=n[a],r&=~d;return c}function Ic(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-jt(m),T=1<<v,C=d[v];C===-1?(!(T&a)||T&c)&&(d[v]=Ic(T,r)):C<=r&&(n.expiredLanes|=T),m&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mi(){var n=Is;return Is<<=1,!(Is&4194240)&&(Is=64),n}function br(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Fr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),m=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Ur(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function jr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var dl,As,fl,pl,ml,Qo=!1,Bn=[],Tt=null,An=null,Rn=null,zr=new Map,hn=new Map,$n=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":zr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function qt(n,r,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ac(n,r,a,c,d){switch(r){case"focusin":return Tt=qt(Tt,n,r,a,c,d),!0;case"dragenter":return An=qt(An,n,r,a,c,d),!0;case"mouseover":return Rn=qt(Rn,n,r,a,c,d),!0;case"pointerover":var m=d.pointerId;return zr.set(m,qt(zr.get(m)||null,n,r,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,hn.set(m,qt(hn.get(m)||null,n,r,a,c,d)),!0}return!1}function yl(n){var r=zi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=Di(a),r!==null){n.blockedOn=r,ml(n.priority,function(){fl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pi=c,a.target.dispatchEvent(c),Pi=null}else return r=ca(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function bi(n,r,a){hr(n)&&a.delete(r)}function _l(){Qo=!1,Tt!==null&&hr(Tt)&&(Tt=null),An!==null&&hr(An)&&(An=null),Rn!==null&&hr(Rn)&&(Rn=null),zr.forEach(bi),hn.forEach(bi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Qo||(Qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_l)))}function Pn(n){function r(d){return Cn(d,n)}if(0<Bn.length){Cn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Cn(Tt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),zr.forEach(r),hn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)yl(a),a.blockedOn===null&&$n.shift()}var dr=Te.ReactCurrentBatchConfig,Br=!0;function Ge(n,r,a,c){var d=Pe,m=dr.transition;dr.transition=null;try{Pe=1,Yo(n,r,a,c)}finally{Pe=d,dr.transition=m}}function Rc(n,r,a,c){var d=Pe,m=dr.transition;dr.transition=null;try{Pe=4,Yo(n,r,a,c)}finally{Pe=d,dr.transition=m}}function Yo(n,r,a,c){if(Br){var d=Rs(n,r,a,c);if(d===null)bc(n,r,c,Fi,a),gl(n,c);else if(Ac(d,n,r,a,c))c.stopPropagation();else if(gl(n,c),r&4&&-1<Sc.indexOf(n)){for(;d!==null;){var m=ca(d);if(m!==null&&dl(m),m=Rs(n,r,a,c),m===null&&bc(n,r,c,Fi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var Fi=null;function Rs(n,r,a,c){if(Fi=null,n=ms(c),n=zi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Di(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Fi=n,null}function Xo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(al()){case Vi:return 1;case Lr:return 4;case cn:case Ko:return 16;case ll:return 536870912;default:return 16}default:return 16}}var nn=null,Cs=null,Ht=null;function Jo(){if(Ht)return Ht;var n,r=Cs,a=r.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Ps(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function Zo(){return!1}function It(n){function r(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qn:Zo,this.isPropagationStopped=Zo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=It(kn),Hn=te({},kn,{view:0,detail:0}),Cc=It(Hn),Ns,fr,$r,Ui=te({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$r&&($r&&n.type==="mousemove"?(Ns=n.screenX-$r.screenX,fr=n.screenY-$r.screenY):fr=Ns=0,$r=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),xs=It(Ui),ea=te({},Ui,{dataTransfer:0}),vl=It(ea),Ds=te({},Hn,{relatedTarget:0}),Vs=It(Ds),El=te({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=It(El),wl=te({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tl=It(wl),Il=te({},kn,{data:0}),ta=It(Il),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Al(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Sl[n])?!!r[n]:!1}function Wn(){return Al}var l=te({},Hn,{key:function(n){if(n.key){var r=Os[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ps(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?Ps(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ps(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=te({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=te({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),U=It(L),J=te({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(J),ct=te({},Ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=It(ct),yt=[9,13,27,32],it=p&&"CompositionEvent"in window,dn=null;p&&"documentMode"in document&&(dn=document.documentMode);var rn=p&&"TextEvent"in window&&!dn,ji=p&&(!it||dn&&8<dn&&11>=dn),Ls=" ",Pf=!1;function kf(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Gv(n,r){switch(n){case"compositionend":return Nf(r);case"keypress":return r.which!==32?null:(Pf=!0,Ls);case"textInput":return n=r.data,n===Ls&&Pf?null:n;default:return null}}function Qv(n,r){if(Ms)return n==="compositionend"||!it&&kf(n,r)?(n=Jo(),Ht=Cs=nn=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ji&&r.locale!=="ko"?null:r.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yv[n.type]:r==="textarea"}function Df(n,r,a,c){zn(c),r=Nl(r,"onChange"),0<r.length&&(a=new ks("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function Xv(n){Yf(n,0)}function Rl(n){var r=zs(n);if(cs(r))return n}function Jv(n,r){if(n==="change")return r}var Vf=!1;if(p){var Pc;if(p){var kc="oninput"in document;if(!kc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),kc=typeof Of.oninput=="function"}Pc=kc}else Pc=!1;Vf=Pc&&(!document.documentMode||9<document.documentMode)}function Lf(){na&&(na.detachEvent("onpropertychange",Mf),ra=na=null)}function Mf(n){if(n.propertyName==="value"&&Rl(ra)){var r=[];Df(r,ra,n,ms(n)),$o(Xv,r)}}function Zv(n,r,a){n==="focusin"?(Lf(),na=r,ra=a,na.attachEvent("onpropertychange",Mf)):n==="focusout"&&Lf()}function eE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(ra)}function tE(n,r){if(n==="click")return Rl(r)}function nE(n,r){if(n==="input"||n==="change")return Rl(r)}function rE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:rE;function ia(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ff(n,r){var a=bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bf(a)}}function Uf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Uf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Vr(n.document)}return r}function Nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function iE(n){var r=jf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Uf(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Ff(a,m);var v=Ff(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sE=p&&"documentMode"in document&&11>=document.documentMode,bs=null,xc=null,sa=null,Dc=!1;function zf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||bs==null||bs!==Vr(c)||(c=bs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Nl(xc,"onSelect"),0<c.length&&(r=new ks("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Cl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Vc={},Bf={};p&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Pl(n){if(Vc[n])return Vc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Bf)return Vc[n]=r[a];return n}var $f=Pl("animationend"),qf=Pl("animationiteration"),Hf=Pl("animationstart"),Wf=Pl("transitionend"),Kf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){Kf.set(n,r),u(r,[n])}for(var Oc=0;Oc<Gf.length;Oc++){var Lc=Gf[Oc],oE=Lc.toLowerCase(),aE=Lc[0].toUpperCase()+Lc.slice(1);qr(oE,"on"+aE)}qr($f,"onAnimationEnd"),qr(qf,"onAnimationIteration"),qr(Hf,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Wf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lE=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Qf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,il(c,r,void 0,n),n.currentTarget=null}function Yf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==m&&d.isPropagationStopped())break e;Qf(d,T,F),m=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==m&&d.isPropagationStopped())break e;Qf(d,T,F),m=C}}}if(Tn)throw n=qo,Tn=!1,qo=null,n}function qe(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(Xf(r,n,2,!1),a.add(c))}function Mc(n,r,a){var c=0;r&&(c|=4),Xf(a,n,c,r)}var kl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(lE.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[kl]||(r[kl]=!0,Mc("selectionchange",!1,r))}}function Xf(n,r,a,c){switch(Xo(r)){case 1:var d=Ge;break;case 4:d=Rc;break;default:d=Yo}a=d.bind(null,r,a,n),d=void 0,!_s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var m=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=zi(T),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}T=T.parentNode}}c=c.return}$o(function(){var F=m,G=ms(a),Q=[];e:{var K=Kf.get(n);if(K!==void 0){var ee=ks,se=n;switch(n){case"keypress":if(Ps(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":se="focus",ee=Vs;break;case"focusout":se="blur",ee=Vs;break;case"beforeblur":case"afterblur":ee=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=vl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case $f:case qf:case Hf:ee=pr;break;case Wf:ee=Fe;break;case"scroll":ee=Cc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=Tl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var oe=(r&4)!==0,nt=!oe&&n==="scroll",M=oe?K!==null?K+"Capture":null:K;oe=[];for(var k=F,b;k!==null;){b=k;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=tt(k,M),X!=null&&oe.push(la(k,X,b)))),nt)break;k=k.return}0<oe.length&&(K=new ee(K,se,null,a,G),Q.push({event:K,listeners:oe}))}}if(!(r&7)){e:{if(K=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",K&&a!==Pi&&(se=a.relatedTarget||a.fromElement)&&(zi(se)||se[mr]))break e;if((ee||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=F,se=se?zi(se):null,se!==null&&(nt=In(se),se!==nt||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(oe=xs,X="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,X="onPointerLeave",M="onPointerEnter",k="pointer"),nt=ee==null?K:zs(ee),b=se==null?K:zs(se),K=new oe(X,k+"leave",ee,a,G),K.target=nt,K.relatedTarget=b,X=null,zi(G)===F&&(oe=new oe(M,k+"enter",se,a,G),oe.target=b,oe.relatedTarget=nt,X=oe),nt=X,ee&&se)t:{for(oe=ee,M=se,k=0,b=oe;b;b=Us(b))k++;for(b=0,X=M;X;X=Us(X))b++;for(;0<k-b;)oe=Us(oe),k--;for(;0<b-k;)M=Us(M),b--;for(;k--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Us(oe),M=Us(M)}oe=null}else oe=null;ee!==null&&Jf(Q,K,ee,oe,!1),se!==null&&nt!==null&&Jf(Q,nt,se,oe,!0)}}e:{if(K=F?zs(F):window,ee=K.nodeName&&K.nodeName.toLowerCase(),ee==="select"||ee==="input"&&K.type==="file")var ae=Jv;else if(xf(K))if(Vf)ae=nE;else{ae=eE;var he=Zv}else(ee=K.nodeName)&&ee.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ae=tE);if(ae&&(ae=ae(n,F))){Df(Q,ae,a,G);break e}he&&he(n,K,F),n==="focusout"&&(he=K._wrapperState)&&he.controlled&&K.type==="number"&&ds(K,"number",K.value)}switch(he=F?zs(F):window,n){case"focusin":(xf(he)||he.contentEditable==="true")&&(bs=he,xc=F,sa=null);break;case"focusout":sa=xc=bs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,zf(Q,a,G);break;case"selectionchange":if(sE)break;case"keydown":case"keyup":zf(Q,a,G)}var de;if(it)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ms?kf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(ji&&a.locale!=="ko"&&(Ms||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ms&&(de=Jo()):(nn=G,Cs="value"in nn?nn.value:nn.textContent,Ms=!0)),he=Nl(F,ge),0<he.length&&(ge=new ta(ge,n,null,a,G),Q.push({event:ge,listeners:he}),de?ge.data=de:(de=Nf(a),de!==null&&(ge.data=de)))),(de=rn?Gv(n,a):Qv(n,a))&&(F=Nl(F,"onBeforeInput"),0<F.length&&(G=new ta("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=de))}Yf(Q,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=tt(n,a),m!=null&&c.unshift(la(n,m,d)),m=tt(n,r),m!=null&&c.push(la(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jf(n,r,a,c,d){for(var m=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=tt(a,m),C!=null&&v.unshift(la(a,C,T))):d||(C=tt(a,m),C!=null&&v.push(la(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var uE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(uE,`
`).replace(cE,"")}function xl(n,r,a){if(r=Zf(r),Zf(n)!==r&&a)throw Error(t(425))}function Dl(){}var Fc=null,Uc=null;function jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,hE=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,dE=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(fE)}:zc;function fE(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function Hr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Kn="__reactFiber$"+js,ua="__reactProps$"+js,mr="__reactContainer$"+js,$c="__reactEvents$"+js,pE="__reactListeners$"+js,mE="__reactHandles$"+js;function zi(n){var r=n[Kn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Kn])return a;n=tp(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[Kn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[ua]||null}var qc=[],Bs=-1;function Wr(n){return{current:n}}function He(n){0>Bs||(n.current=qc[Bs],qc[Bs]=null,Bs--)}function $e(n,r){Bs++,qc[Bs]=n.current,n.current=r}var Kr={},xt=Wr(Kr),Wt=Wr(!1),Bi=Kr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=r[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Ol(){He(Wt),He(xt)}function np(n,r,a){if(xt.current!==Kr)throw Error(t(168));$e(xt,r),$e(Wt,a)}function rp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Bi=xt.current,$e(xt,n),$e(Wt,Wt.current),!0}function ip(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=rp(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,He(Wt),He(xt),$e(xt,n)):He(Wt),$e(Wt,a)}var gr=null,Ml=!1,Hc=!1;function sp(n){gr===null?gr=[n]:gr.push(n)}function gE(n){Ml=!0,sp(n)}function Gr(){if(!Hc&&gr!==null){Hc=!0;var n=0,r=Pe;try{var a=gr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Ml=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Ts(Vi,Gr),d}finally{Pe=r,Hc=!1}}return null}var qs=[],Hs=0,bl=null,Fl=0,fn=[],pn=0,$i=null,yr=1,_r="";function qi(n,r){qs[Hs++]=Fl,qs[Hs++]=bl,bl=n,Fl=r}function op(n,r,a){fn[pn++]=yr,fn[pn++]=_r,fn[pn++]=$i,$i=n;var c=yr;n=_r;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var m=32-jt(r)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-jt(r)+d|a<<d|c,_r=m+n}else yr=1<<m|a<<d|c,_r=n}function Wc(n){n.return!==null&&(qi(n,1),op(n,1,0))}function Kc(n){for(;n===bl;)bl=qs[--Hs],qs[Hs]=null,Fl=qs[--Hs],qs[Hs]=null;for(;n===$i;)$i=fn[--pn],fn[pn]=null,_r=fn[--pn],fn[pn]=null,yr=fn[--pn],fn[pn]=null}var sn=null,on=null,Qe=!1,xn=null;function ap(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function lp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Hr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Qe){var r=on;if(r){var a=r;if(!lp(n,r)){if(Gc(n))throw Error(t(418));r=Hr(a.nextSibling);var c=sn;r&&lp(n,r)?ap(c,a):(n.flags=n.flags&-4097|2,Qe=!1,sn=n)}}else{if(Gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,sn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ul(n){if(n!==sn)return!1;if(!Qe)return up(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!jc(n.type,n.memoizedProps)),r&&(r=on)){if(Gc(n))throw cp(),Error(t(418));for(;r;)ap(n,r),r=Hr(r.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Hr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Hr(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=on;n;)n=Hr(n.nextSibling)}function Ws(){on=sn=null,Qe=!1}function Yc(n){xn===null?xn=[n]:xn.push(n)}var yE=Te.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(v){var T=d.refs;v===null?delete T[m]:T[m]=v},r._stringRef=m,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function hp(n){var r=n._init;return r(n._payload)}function dp(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=ni(M,k),M.index=0,M.sibling=null,M}function m(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,b,X){return k===null||k.tag!==6?(k=zh(b,M.mode,X),k.return=M,k):(k=d(k,b),k.return=M,k)}function C(M,k,b,X){var ae=b.type;return ae===x?G(M,k,b.props.children,X,b.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&hp(ae)===k.type)?(X=d(k,b.props),X.ref=ha(M,k,b),X.return=M,X):(X=cu(b.type,b.key,b.props,null,M.mode,X),X.ref=ha(M,k,b),X.return=M,X)}function F(M,k,b,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=Bh(b,M.mode,X),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function G(M,k,b,X,ae){return k===null||k.tag!==7?(k=Ji(b,M.mode,X,ae),k.return=M,k):(k=d(k,b),k.return=M,k)}function Q(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=zh(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ke:return b=cu(k.type,k.key,k.props,null,M.mode,b),b.ref=ha(M,null,k),b.return=M,b;case Ae:return k=Bh(k,M.mode,b),k.return=M,k;case Nt:var X=k._init;return Q(M,X(k._payload),b)}if(or(k)||ce(k))return k=Ji(k,M.mode,b,null),k.return=M,k;jl(M,k)}return null}function K(M,k,b,X){var ae=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(M,k,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return b.key===ae?C(M,k,b,X):null;case Ae:return b.key===ae?F(M,k,b,X):null;case Nt:return ae=b._init,K(M,k,ae(b._payload),X)}if(or(b)||ce(b))return ae!==null?null:G(M,k,b,X,null);jl(M,b)}return null}function ee(M,k,b,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(k,M,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ke:return M=M.get(X.key===null?b:X.key)||null,C(k,M,X,ae);case Ae:return M=M.get(X.key===null?b:X.key)||null,F(k,M,X,ae);case Nt:var he=X._init;return ee(M,k,b,he(X._payload),ae)}if(or(X)||ce(X))return M=M.get(b)||null,G(k,M,X,ae,null);jl(k,X)}return null}function se(M,k,b,X){for(var ae=null,he=null,de=k,ge=k=0,Et=null;de!==null&&ge<b.length;ge++){de.index>ge?(Et=de,de=null):Et=de.sibling;var Oe=K(M,de,b[ge],X);if(Oe===null){de===null&&(de=Et);break}n&&de&&Oe.alternate===null&&r(M,de),k=m(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe,de=Et}if(ge===b.length)return a(M,de),Qe&&qi(M,ge),ae;if(de===null){for(;ge<b.length;ge++)de=Q(M,b[ge],X),de!==null&&(k=m(de,k,ge),he===null?ae=de:he.sibling=de,he=de);return Qe&&qi(M,ge),ae}for(de=c(M,de);ge<b.length;ge++)Et=ee(de,M,ge,b[ge],X),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?ge:Et.key),k=m(Et,k,ge),he===null?ae=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(ri){return r(M,ri)}),Qe&&qi(M,ge),ae}function oe(M,k,b,X){var ae=ce(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,de=k,ge=k=0,Et=null,Oe=b.next();de!==null&&!Oe.done;ge++,Oe=b.next()){de.index>ge?(Et=de,de=null):Et=de.sibling;var ri=K(M,de,Oe.value,X);if(ri===null){de===null&&(de=Et);break}n&&de&&ri.alternate===null&&r(M,de),k=m(ri,k,ge),he===null?ae=ri:he.sibling=ri,he=ri,de=Et}if(Oe.done)return a(M,de),Qe&&qi(M,ge),ae;if(de===null){for(;!Oe.done;ge++,Oe=b.next())Oe=Q(M,Oe.value,X),Oe!==null&&(k=m(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return Qe&&qi(M,ge),ae}for(de=c(M,de);!Oe.done;ge++,Oe=b.next())Oe=ee(de,M,ge,Oe.value,X),Oe!==null&&(n&&Oe.alternate!==null&&de.delete(Oe.key===null?ge:Oe.key),k=m(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return n&&de.forEach(function(YE){return r(M,YE)}),Qe&&qi(M,ge),ae}function nt(M,k,b,X){if(typeof b=="object"&&b!==null&&b.type===x&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:e:{for(var ae=b.key,he=k;he!==null;){if(he.key===ae){if(ae=b.type,ae===x){if(he.tag===7){a(M,he.sibling),k=d(he,b.props.children),k.return=M,M=k;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&hp(ae)===he.type){a(M,he.sibling),k=d(he,b.props),k.ref=ha(M,he,b),k.return=M,M=k;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===x?(k=Ji(b.props.children,M.mode,X,b.key),k.return=M,M=k):(X=cu(b.type,b.key,b.props,null,M.mode,X),X.ref=ha(M,k,b),X.return=M,M=X)}return v(M);case Ae:e:{for(he=b.key;k!==null;){if(k.key===he)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=Bh(b,M.mode,X),k.return=M,M=k}return v(M);case Nt:return he=b._init,nt(M,k,he(b._payload),X)}if(or(b))return se(M,k,b,X);if(ce(b))return oe(M,k,b,X);jl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=zh(b,M.mode,X),k.return=M,M=k),v(M)):a(M,k)}return nt}var Ks=dp(!0),fp=dp(!1),zl=Wr(null),Bl=null,Gs=null,Xc=null;function Jc(){Xc=Gs=Bl=null}function Zc(n){var r=zl.current;He(zl),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){Bl=n,Xc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(Bl===null)throw Error(t(308));Gs=n,Bl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var Hi=null;function th(n){Hi===null?Hi=[n]:Hi.push(n)}function pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Qr=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function $l(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ur(n,a)}}function gp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=r:m=m.next=r}else d=m=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ql(n,r,a,c){var d=n.updateQueue;Qr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?m=F:v.next=F,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(m!==null){var Q=d.baseState;v=0,G=F=C=null,T=m;do{var K=T.lane,ee=T.eventTime;if((c&K)===K){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(K=r,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(ee,Q,K);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,K=typeof se=="function"?se.call(ee,Q,K):se,K==null)break e;Q=te({},Q,K);break e;case 2:Qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else ee={eventTime:ee,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=ee,C=Q):G=G.next=ee,v|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else m===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=Q}}function yp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Gn=Wr(da),fa=Wr(da),pa=Wr(da);function Wi(n){if(n===da)throw Error(t(174));return n}function rh(n,r){switch($e(pa,r),$e(fa,n),$e(Gn,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}He(Gn),$e(Gn,r)}function Ys(){He(Gn),He(fa),He(pa)}function _p(n){Wi(pa.current);var r=Wi(Gn.current),a=ut(r,n.type);r!==a&&($e(fa,n),$e(Gn,a))}function ih(n){fa.current===n&&(He(Gn),He(fa))}var Ye=Wr(0);function Hl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Wl=Te.ReactCurrentDispatcher,ah=Te.ReactCurrentBatchConfig,Ki=0,Xe=null,ht=null,_t=null,Kl=!1,ma=!1,ga=0,_E=0;function Dt(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,m){if(Ki=m,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Wl.current=n===null||n.memoizedState===null?TE:IE,n=a(c,d),ma){m=0;do{if(ma=!1,ga=0,25<=m)throw Error(t(301));m+=1,_t=ht=null,r.updateQueue=null,Wl.current=SE,n=a(c,d)}while(ma)}if(Wl.current=Yl,r=ht!==null&&ht.next!==null,Ki=0,_t=ht=Xe=null,Kl=!1,r)throw Error(t(300));return n}function ch(){var n=ga!==0;return ga=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=n:_t=_t.next=n,_t}function gn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=_t===null?Xe.memoizedState:_t.next;if(r!==null)_t=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Xe.memoizedState=_t=n:_t=_t.next=n}return _t}function ya(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,C=null,F=m;do{var G=F.lane;if((Ki&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,v=c):C=C.next=Q,Xe.lanes|=G,Gi|=G}F=F.next}while(F!==null&&F!==m);C===null?v=c:C.next=T,Nn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Xe.lanes|=m,Gi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Nn(m,r.memoizedState)||(Gt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function vp(){}function Ep(n,r){var a=Xe,c=gn(),d=r(),m=!Nn(c.memoizedState,d);if(m&&(c.memoizedState=d,Gt=!0),c=c.queue,fh(Ip.bind(null,a,c,n),[n]),c.getSnapshot!==r||m||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,_a(9,Tp.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));Ki&30||wp(a,r,d)}return d}function wp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Tp(n,r,a,c){r.value=a,r.getSnapshot=c,Sp(r)&&Ap(n)}function Ip(n,r,a){return a(function(){Sp(r)&&Ap(n)})}function Sp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Ap(n){var r=vr(n,1);r!==null&&Ln(r,n,1,-1)}function Rp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=wE.bind(null,Xe,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Cp(){return gn().memoizedState}function Gl(n,r,a,c){var d=Qn();Xe.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function Ql(n,r,a,c){var d=gn();c=c===void 0?null:c;var m=void 0;if(ht!==null){var v=ht.memoizedState;if(m=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=_a(r,a,m,c);return}}Xe.flags|=n,d.memoizedState=_a(1|r,a,m,c)}function Pp(n,r){return Gl(8390656,8,n,r)}function fh(n,r){return Ql(2048,8,n,r)}function kp(n,r){return Ql(4,2,n,r)}function Np(n,r){return Ql(4,4,n,r)}function xp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Dp(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4,4,xp.bind(null,r,n),a)}function ph(){}function Vp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Op(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Lp(n,r,a){return Ki&21?(Nn(a,r)||(a=Mi(),Xe.lanes|=a,Gi|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function vE(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{Pe=a,ah.transition=c}}function Mp(){return gn().memoizedState}function EE(n,r,a){var c=ei(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Fp(r,a);else if(a=pp(n,r,a,c),a!==null){var d=$t();Ln(a,n,c,d),Up(a,r,c)}}function wE(n,r,a){var c=ei(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Fp(r,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var v=r.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,v)){var C=r.interleaved;C===null?(d.next=d,th(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=pp(n,r,d,c),a!==null&&(d=$t(),Ln(a,n,c,d),Up(a,r,c))}}function bp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Fp(n,r){ma=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Up(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ur(n,a)}}var Yl={readContext:mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},TE={readContext:mn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Pp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Gl(4194308,4,xp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Gl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Gl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=EE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Rp,useDebugValue:ph,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Rp(!1),r=n[0];return n=vE.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Qn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));Ki&30||wp(c,r,a)}d.memoizedState=a;var m={value:a,getSnapshot:r};return d.queue=m,Pp(Ip.bind(null,c,m,n),[n]),c.flags|=2048,_a(9,Tp.bind(null,c,m,a,r),void 0,null),a},useId:function(){var n=Qn(),r=vt.identifierPrefix;if(Qe){var a=_r,c=yr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=_E++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},IE={readContext:mn,useCallback:Vp,useContext:mn,useEffect:fh,useImperativeHandle:Dp,useInsertionEffect:kp,useLayoutEffect:Np,useMemo:Op,useReducer:hh,useRef:Cp,useState:function(){return hh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=gn();return Lp(r,ht.memoizedState,n)},useTransition:function(){var n=hh(ya)[0],r=gn().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:Ep,useId:Mp,unstable_isNewReconciler:!1},SE={readContext:mn,useCallback:Vp,useContext:mn,useEffect:fh,useImperativeHandle:Dp,useInsertionEffect:kp,useLayoutEffect:Np,useMemo:Op,useReducer:dh,useRef:Cp,useState:function(){return dh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=gn();return ht===null?r.memoizedState=n:Lp(r,ht.memoizedState,n)},useTransition:function(){var n=dh(ya)[0],r=gn().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:Ep,useId:Mp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=ei(n),m=Er(c,d);m.payload=r,a!=null&&(m.callback=a),r=Yr(n,m,d),r!==null&&(Ln(r,n,d,c),$l(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=ei(n),m=Er(c,d);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Yr(n,m,d),r!==null&&(Ln(r,n,d,c),$l(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=ei(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=Yr(n,d,c),r!==null&&(Ln(r,n,c,a),$l(r,n,c))}};function jp(n,r,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,m):!0}function zp(n,r,a){var c=!1,d=Kr,m=r.contextType;return typeof m=="object"&&m!==null?m=mn(m):(d=Kt(r)?Bi:xt.current,c=r.contextTypes,m=(c=c!=null)?$s(n,d):Kr),r=new r(a,m),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),r}function Bp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var m=r.contextType;typeof m=="object"&&m!==null?d.context=mn(m):(m=Kt(r)?Bi:xt.current,d.context=$s(n,m)),d.state=n.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(mh(n,r,m,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function $p(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){iu||(iu=!0,Vh=c),_h(n,r)},a}function qp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Hp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new AE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=UE.bind(null,n,r,a),r.then(n,n))}function Wp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Kp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,Yr(a,r,1))),a.lanes|=1),n)}var RE=Te.ReactCurrentOwner,Gt=!1;function Bt(n,r,a,c){r.child=n===null?fp(r,null,a,c):Ks(r,n.child,a,c)}function Gp(n,r,a,c,d){a=a.render;var m=r.ref;return Qs(r,d),c=uh(n,r,a,c,m,d),a=ch(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Qe&&a&&Wc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Qp(n,r,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!jh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,Yp(n,r,m,c,d)):(n=cu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ni(m,c),n.ref=r.ref,n.return=r,r.child=n}function Yp(n,r,a,c,d){if(n!==null){var m=n.memoizedProps;if(ia(m,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return vh(n,r,a,c,d)}function Xp(n,r,a){var c=r.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Zs,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Zs,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,$e(Zs,an),an|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,$e(Zs,an),an|=c;return Bt(n,r,d,a),r.child}function Jp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var m=Kt(a)?Bi:xt.current;return m=$s(r,m),Qs(r,d),a=uh(n,r,a,c,m,d),c=ch(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Qe&&c&&Wc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function Zp(n,r,a,c,d){if(Kt(a)){var m=!0;Ll(r)}else m=!1;if(Qs(r,d),r.stateNode===null)Zl(n,r),zp(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Kt(a)?Bi:xt.current,F=$s(r,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Bp(r,v,c,F),Qr=!1;var K=r.memoizedState;v.state=K,ql(r,c,v,d),C=r.memoizedState,T!==c||K!==C||Wt.current||Qr?(typeof G=="function"&&(mh(r,a,G,c),C=r.memoizedState),(T=Qr||jp(r,a,T,c,K,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,mp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Dn(r.type,T),v.props=F,Q=r.pendingProps,K=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Kt(a)?Bi:xt.current,C=$s(r,C));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||K!==C)&&Bp(r,v,c,C),Qr=!1,K=r.memoizedState,v.state=K,ql(r,c,v,d);var se=r.memoizedState;T!==Q||K!==se||Wt.current||Qr?(typeof ee=="function"&&(mh(r,a,ee,c),se=r.memoizedState),(F=Qr||jp(r,a,F,c,K,se,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),c=!1)}return Eh(n,r,a,c,m,d)}function Eh(n,r,a,c,d,m){Jp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&ip(r,a,!1),wr(n,r,m);c=r.stateNode,RE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Ks(r,n.child,null,m),r.child=Ks(r,null,T,m)):Bt(n,r,T,m),r.memoizedState=c.state,d&&ip(r,a,!0),r.child}function em(n){var r=n.stateNode;r.pendingContext?np(n,r.pendingContext,r.pendingContext!==r.context):r.context&&np(n,r.context,!1),rh(n,r.containerInfo)}function tm(n,r,a,c,d){return Ws(),Yc(d),r.flags|=256,Bt(n,r,a,c),r.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,r,a){var c=r.pendingProps,d=Ye.current,m=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=c.children,n=c.fallback,m?(c=r.mode,m=r.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=hu(v,c,0,null),n=Ji(n,c,a,null),m.return=r,n.return=r,m.sibling=n,r.child=m,r.child.memoizedState=Th(a),r.memoizedState=wh,n):Ih(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return CE(n,r,v,c,T,d,a);if(m){m=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ni(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=ni(T,m):(m=Ji(m,v,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,r.memoizedState=wh,c}return m=n.child,n=m.sibling,c=ni(m,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=hu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Jl(n,r,a,c){return c!==null&&Yc(c),Ks(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function CE(n,r,a,c,d,m,v){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),Jl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(m=c.fallback,d=r.mode,c=hu({mode:"visible",children:c.children},d,0,null),m=Ji(m,d,v,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,r.mode&1&&Ks(r,n.child,null,v),r.child.memoizedState=Th(v),r.memoizedState=wh,m);if(!(r.mode&1))return Jl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=yh(m,c,void 0),Jl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Gt||T){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,vr(n,d),Ln(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),Jl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=jE.bind(null,n),d._reactRetry=r,null):(n=m.treeContext,on=Hr(d.nextSibling),sn=r,Qe=!0,xn=null,n!==null&&(fn[pn++]=yr,fn[pn++]=_r,fn[pn++]=$i,yr=n.id,_r=n.overflow,$i=r),r=Ih(r,c.children),r.flags|=4096,r)}function rm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function im(n,r,a){var c=r.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rm(n,a,r);else if(n.tag===19)rm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Hl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,m);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Hl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,m);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Zl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ni(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ni(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function PE(n,r,a){switch(r.tag){case 3:em(r),Ws();break;case 5:_p(r);break;case 1:Kt(r.type)&&Ll(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(zl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?nm(n,r,a):($e(Ye,Ye.current&1),n=wr(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return im(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Xp(n,r,a)}return wr(n,r,a)}var sm,Ah,om,am;sm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},om=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Gn.current);var m=null;switch(a){case"input":d=Ai(n,d),c=Ai(n,c),m=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),m=[];break;case"textarea":d=Vo(n,d),c=Vo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Dl)}Uo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(m=m||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&qe("scroll",n),m||T===C||(m=[])):(m=m||[]).push(F,C))}a&&(m=m||[]).push("style",a);var F=m;(r.updateQueue=F)&&(r.flags|=4)}},am=function(n,r,a,c){a!==c&&(r.flags|=4)};function va(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function kE(n,r,a){var c=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Kt(r.type)&&Ol(),Vt(r),null;case 3:return c=r.stateNode,Ys(),He(Wt),He(xt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,xn!==null&&(Mh(xn),xn=null))),Ah(n,r),Vt(r),null;case 5:ih(r);var d=Wi(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)om(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Wi(Gn.current),Ul(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[Kn]=r,c[ua]=m,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)qe(oa[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":hs(c,m),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qe("invalid",c);break;case"textarea":fs(c,m),qe("invalid",c)}Uo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&qe("scroll",c)}switch(a){case"input":sr(c),rl(c,m,!0);break;case"textarea":sr(c),Oo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=r,n[ua]=c,sm(n,r,!1,!1),r.stateNode=n;e:{switch(v=jo(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)qe(oa[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":hs(n,c),d=Ai(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":fs(n,c),d=Vo(n,c),qe("invalid",n);break;default:d=c}Uo(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var C=T[m];m==="style"?bo(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Lo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Or(n,C):typeof C=="number"&&Or(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&qe("scroll",n):C!=null&&Ee(n,m,C,v))}switch(a){case"input":sr(n),rl(n,c,!1);break;case"textarea":sr(n),Oo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ar(n,!!c.multiple,m,!1):c.defaultValue!=null&&ar(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)am(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(pa.current),Wi(Gn.current),Ul(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(c.nodeValue,a,(n.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Vt(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&on!==null&&r.mode&1&&!(r.flags&128))cp(),Ws(),r.flags|=98560,m=!1;else if(m=Ul(r),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Kn]=r}else Ws(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),m=!1}else xn!==null&&(Mh(xn),xn=null),m=!0;if(!m)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?dt===0&&(dt=3):Uh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Ys(),Ah(n,r),n===null&&aa(r.stateNode.containerInfo),Vt(r),null;case 10:return Zc(r.type._context),Vt(r),null;case 17:return Kt(r.type)&&Ol(),Vt(r),null;case 19:if(He(Ye),m=r.memoizedState,m===null)return Vt(r),null;if(c=(r.flags&128)!==0,v=m.rendering,v===null)if(c)va(m,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(v=Hl(n),v!==null){for(r.flags|=128,va(m,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}m.tail!==null&&Be()>eo&&(r.flags|=128,c=!0,va(m,!1),r.lanes=4194304)}else{if(!c)if(n=Hl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Qe)return Vt(r),null}else 2*Be()-m.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,va(m,!1),r.lanes=4194304);m.isBackwards?(v.sibling=r.child,r.child=v):(a=m.last,a!==null?a.sibling=v:r.child=v,m.last=v)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Be(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?an&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function NE(n,r){switch(Kc(r),r.tag){case 1:return Kt(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),He(Wt),He(xt),oh(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return Ys(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var eu=!1,Ot=!1,xE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Js(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function Rh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var lm=!1;function DE(n,r){if(Fc=Br,n=jf(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,G=0,Q=n,K=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==m||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)K=Q,Q=ee;for(;;){if(Q===n)break t;if(K===a&&++F===d&&(T=v),K===m&&++G===c&&(C=v),(ee=Q.nextSibling)!==null)break;Q=K,K=Q.parentNode}Q=ee}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},Br=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var se=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,nt=se.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Dn(r.type,oe),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){Ze(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return se=lm,lm=!1,se}function Ea(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Rh(r,a,m)}d=d.next}while(d!==c)}}function tu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function um(n){var r=n.alternate;r!==null&&(n.alternate=null,um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Kn],delete r[ua],delete r[$c],delete r[pE],delete r[mE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Dl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}var St=null,Vn=!1;function Xr(n,r,a){for(a=a.child;a!==null;)dm(n,r,a),a=a.sibling}function dm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Ot||Js(a,r);case 6:var c=St,d=Vn;St=null,Xr(n,r,a),St=c,Vn=d,St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Pn(n)):Bc(St,a.stateNode));break;case 4:c=St,d=Vn,St=a.stateNode.containerInfo,Vn=!0,Xr(n,r,a),St=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&Rh(a,r,v),d=d.next}while(d!==c)}Xr(n,r,a);break;case 1:if(!Ot&&(Js(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Xr(n,r,a);break;case 21:Xr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Xr(n,r,a),Ot=c):Xr(n,r,a);break;default:Xr(n,r,a)}}function fm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new xE),r.forEach(function(c){var d=zE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Vn=!1;break e;case 3:St=T.stateNode.containerInfo,Vn=!0;break e;case 4:St=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(St===null)throw Error(t(160));dm(m,v,d),St=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)pm(r,n),r=r.sibling}function pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Yn(n),c&4){try{Ea(3,n,n.return),tu(3,n)}catch(oe){Ze(n,n.return,oe)}try{Ea(5,n,n.return)}catch(oe){Ze(n,n.return,oe)}}break;case 1:On(r,n),Yn(n),c&512&&a!==null&&Js(a,a.return);break;case 5:if(On(r,n),Yn(n),c&512&&a!==null&&Js(a,a.return),n.flags&32){var d=n.stateNode;try{Or(d,"")}catch(oe){Ze(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&xo(d,m),jo(T,v);var F=jo(T,m);for(v=0;v<C.length;v+=2){var G=C[v],Q=C[v+1];G==="style"?bo(d,Q):G==="dangerouslySetInnerHTML"?Lo(d,Q):G==="children"?Or(d,Q):Ee(d,G,Q,F)}switch(T){case"input":Do(d,m);break;case"textarea":ps(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ee=m.value;ee!=null?ar(d,!!m.multiple,ee,!1):K!==!!m.multiple&&(m.defaultValue!=null?ar(d,!!m.multiple,m.defaultValue,!0):ar(d,!!m.multiple,m.multiple?[]:"",!1))}d[ua]=m}catch(oe){Ze(n,n.return,oe)}}break;case 6:if(On(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){Ze(n,n.return,oe)}}break;case 3:if(On(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(oe){Ze(n,n.return,oe)}break;case 4:On(r,n),Yn(n);break;case 13:On(r,n),Yn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=Be())),c&4&&fm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||G,On(r,n),Ot=F):On(r,n),Yn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&n.mode&1)for(re=n,G=n.child;G!==null;){for(Q=re=G;re!==null;){switch(K=re,ee=K.child,K.tag){case 0:case 11:case 14:case 15:Ea(4,K,K.return);break;case 1:Js(K,K.return);var se=K.stateNode;if(typeof se.componentWillUnmount=="function"){c=K,a=K.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){Ze(c,a,oe)}}break;case 5:Js(K,K.return);break;case 22:if(K.memoizedState!==null){ym(Q);continue}}ee!==null?(ee.return=K,re=ee):ym(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Mo("display",v))}catch(oe){Ze(n,n.return,oe)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){Ze(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:On(r,n),Yn(n),c&4&&fm(n);break;case 21:break;default:On(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Or(d,""),c.flags&=-33);var m=hm(n);kh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=hm(n);Ph(n,T,v);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function VE(n,r,a){re=n,mm(n)}function mm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||eu;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Ot;T=eu;var F=Ot;if(eu=v,(Ot=C)&&!F)for(re=d;re!==null;)v=re,C=v.child,v.tag===22&&v.memoizedState!==null?_m(d):C!==null?(C.return=v,re=C):_m(d);for(;m!==null;)re=m,mm(m),m=m.sibling;re=d,eu=T,Ot=F}gm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,re=m):gm(n)}}function gm(n){for(;re!==null;){var r=re;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||tu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&yp(r,m,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}yp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&Ch(r)}catch(K){Ze(r,r.return,K)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function ym(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function _m(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{tu(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var m=r.return;try{Ch(r)}catch(C){Ze(r,m,C)}break;case 5:var v=r.return;try{Ch(r)}catch(C){Ze(r,v,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var OE=Math.ceil,nu=Te.ReactCurrentDispatcher,Nh=Te.ReactCurrentOwner,yn=Te.ReactCurrentBatchConfig,Ve=0,vt=null,st=null,At=0,an=0,Zs=Wr(0),dt=0,wa=null,Gi=0,ru=0,xh=0,Ta=null,Qt=null,Dh=0,eo=1/0,Tr=null,iu=!1,Vh=null,Jr=null,su=!1,Zr=null,ou=0,Ia=0,Oh=null,au=-1,lu=0;function $t(){return Ve&6?Be():au!==-1?au:au=Be()}function ei(n){return n.mode&1?Ve&2&&At!==0?At&-At:yE.transition!==null?(lu===0&&(lu=Mi()),lu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Xo(n.type)),n):1}function Ln(n,r,a,c){if(50<Ia)throw Ia=0,Oh=null,Error(t(185));Fr(n,a,c),(!(Ve&2)||n!==vt)&&(n===vt&&(!(Ve&2)&&(ru|=a),dt===4&&ti(n,At)),Yt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(eo=Be()+500,Ml&&Gr()))}function Yt(n,r){var a=n.callbackNode;cr(n,r);var c=Li(n,n===vt?At:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?gE(Em.bind(null,n)):sp(Em.bind(null,n)),dE(function(){!(Ve&6)&&Gr()}),a=null;else{switch(jr(c)){case 1:a=Vi;break;case 4:a=Lr;break;case 16:a=cn;break;case 536870912:a=ll;break;default:a=cn}a=Pm(a,vm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function vm(n,r){if(au=-1,lu=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=Li(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=uu(n,c);else{r=c;var d=Ve;Ve|=2;var m=Tm();(vt!==n||At!==r)&&(Tr=null,eo=Be()+500,Yi(n,r));do try{bE();break}catch(T){wm(n,T)}while(!0);Jc(),nu.current=m,Ve=d,st!==null?r=0:(vt=null,At=0,r=dt)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=wa,Yi(n,0),ti(n,c),Yt(n,Be()),a;if(r===6)ti(n,c);else{if(d=n.current.alternate,!(c&30)&&!LE(d)&&(r=uu(n,c),r===2&&(m=tn(n),m!==0&&(c=m,r=Lh(n,m))),r===1))throw a=wa,Yi(n,0),ti(n,c),Yt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Xi(n,Qt,Tr);break;case 3:if(ti(n,c),(c&130023424)===c&&(r=Dh+500-Be(),10<r)){if(Li(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(Xi.bind(null,n,Qt,Tr),r);break}Xi(n,Qt,Tr);break;case 4:if(ti(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-jt(c);m=1<<v,v=r[v],v>d&&(d=v),c&=~m}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*OE(c/1960))-c,10<c){n.timeoutHandle=zc(Xi.bind(null,n,Qt,Tr),c);break}Xi(n,Qt,Tr);break;case 5:Xi(n,Qt,Tr);break;default:throw Error(t(329))}}}return Yt(n,Be()),n.callbackNode===a?vm.bind(null,n):null}function Lh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(Yi(n,r).flags|=256),n=uu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Mh(r)),n}function Mh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function LE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Nn(m(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ti(n,r){for(r&=~xh,r&=~ru,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function Em(n){if(Ve&6)throw Error(t(327));to();var r=Li(n,0);if(!(r&1))return Yt(n,Be()),null;var a=uu(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=wa,Yi(n,0),ti(n,r),Yt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Xi(n,Qt,Tr),Yt(n,Be()),null}function bh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(eo=Be()+500,Ml&&Gr())}}function Qi(n){Zr!==null&&Zr.tag===0&&!(Ve&6)&&to();var r=Ve;Ve|=1;var a=yn.transition,c=Pe;try{if(yn.transition=null,Pe=1,n)return n()}finally{Pe=c,yn.transition=a,Ve=r,!(Ve&6)&&Gr()}}function Fh(){an=Zs.current,He(Zs)}function Yi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,hE(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ol();break;case 3:Ys(),He(Wt),He(xt),oh();break;case 5:ih(c);break;case 4:Ys();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(vt=n,st=n=ni(n.current,null),At=an=r,dt=0,wa=null,xh=ru=Gi=0,Qt=Ta=null,Hi!==null){for(r=0;r<Hi.length;r++)if(a=Hi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Hi=null}return n}function wm(n,r){do{var a=st;try{if(Jc(),Wl.current=Yl,Kl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(Ki=0,_t=ht=Xe=null,ma=!1,ga=0,Nh.current=null,a===null||a.return===null){dt=1,wa=r,st=null;break}e:{var m=n,v=a.return,T=a,C=r;if(r=At,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if(!(G.mode&1)&&(Q===0||Q===11||Q===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=Wp(v);if(ee!==null){ee.flags&=-257,Kp(ee,v,T,m,r),ee.mode&1&&Hp(m,F,r),r=ee,C=F;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else se.add(C);break e}else{if(!(r&1)){Hp(m,F,r),Uh();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var nt=Wp(v);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Kp(nt,v,T,m,r),Yc(Xs(C,T));break e}}m=C=Xs(C,T),dt!==4&&(dt=2),Ta===null?Ta=[m]:Ta.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var M=$p(m,C,r);gp(m,M);break e;case 1:T=C;var k=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Jr===null||!Jr.has(b)))){m.flags|=65536,r&=-r,m.lanes|=r;var X=qp(m,T,r);gp(m,X);break e}}m=m.return}while(m!==null)}Sm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Tm(){var n=nu.current;return nu.current=Yl,n===null?Yl:n}function Uh(){(dt===0||dt===3||dt===2)&&(dt=4),vt===null||!(Gi&268435455)&&!(ru&268435455)||ti(vt,At)}function uu(n,r){var a=Ve;Ve|=2;var c=Tm();(vt!==n||At!==r)&&(Tr=null,Yi(n,r));do try{ME();break}catch(d){wm(n,d)}while(!0);if(Jc(),Ve=a,nu.current=c,st!==null)throw Error(t(261));return vt=null,At=0,dt}function ME(){for(;st!==null;)Im(st)}function bE(){for(;st!==null&&!ol();)Im(st)}function Im(n){var r=Cm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?Sm(n):st=r,Nh.current=null}function Sm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=NE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=kE(a,r,an),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Xi(n,r,a){var c=Pe,d=yn.transition;try{yn.transition=null,Pe=1,FE(n,r,a,c)}finally{yn.transition=d,Pe=c}return null}function FE(n,r,a,c){do to();while(Zr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(n,m),n===vt&&(st=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||su||(su=!0,Pm(cn,function(){return to(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=yn.transition,yn.transition=null;var v=Pe;Pe=1;var T=Ve;Ve|=4,Nh.current=null,DE(n,a),pm(a,n),iE(Uc),Br=!!Fc,Uc=Fc=null,n.current=a,VE(a),Tc(),Ve=T,Pe=v,yn.transition=m}else n.current=a;if(su&&(su=!1,Zr=n,ou=d),m=n.pendingLanes,m===0&&(Jr=null),ul(a.stateNode),Yt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(iu)throw iu=!1,n=Vh,Vh=null,n;return ou&1&&n.tag!==0&&to(),m=n.pendingLanes,m&1?n===Oh?Ia++:(Ia=0,Oh=n):Ia=0,Gr(),null}function to(){if(Zr!==null){var n=jr(ou),r=yn.transition,a=Pe;try{if(yn.transition=null,Pe=16>n?16:n,Zr===null)var c=!1;else{if(n=Zr,Zr=null,ou=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var m=re,v=m.child;if(re.flags&16){var T=m.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:Ea(8,G,m)}var Q=G.child;if(Q!==null)Q.return=G,re=Q;else for(;re!==null;){G=re;var K=G.sibling,ee=G.return;if(um(G),G===F){re=null;break}if(K!==null){K.return=ee,re=K;break}re=ee}}}var se=m.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var nt=oe.sibling;oe.sibling=null,oe=nt}while(oe!==null)}}re=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,re=v;else e:for(;re!==null;){if(m=re,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Ea(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,re=M;break e}re=m.return}}var k=n.current;for(re=k;re!==null;){v=re;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,re=b;else e:for(v=k;re!==null;){if(T=re,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:tu(9,T)}}catch(ae){Ze(T,T.return,ae)}if(T===v){re=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,re=X;break e}re=T.return}}if(Ve=d,Gr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Pe=a,yn.transition=r}}return!1}function Am(n,r,a){r=Xs(a,r),r=$p(n,r,1),n=Yr(n,r,1),r=$t(),n!==null&&(Fr(n,1,r),Yt(n,r))}function Ze(n,r,a){if(n.tag===3)Am(n,n,a);else for(;r!==null;){if(r.tag===3){Am(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Jr===null||!Jr.has(c))){n=Xs(a,n),n=qp(r,n,1),r=Yr(r,n,1),n=$t(),r!==null&&(Fr(r,1,n),Yt(r,n));break}}r=r.return}}function UE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(dt===4||dt===3&&(At&130023424)===At&&500>Be()-Dh?Yi(n,0):xh|=a),Yt(n,r)}function Rm(n,r){r===0&&(n.mode&1?(r=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):r=1);var a=$t();n=vr(n,r),n!==null&&(Fr(n,r,a),Yt(n,a))}function jE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Rm(n,a)}function zE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Rm(n,a)}var Cm;Cm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Gt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Gt=!1,PE(n,r,a);Gt=!!(n.flags&131072)}else Gt=!1,Qe&&r.flags&1048576&&op(r,Fl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Zl(n,r),n=r.pendingProps;var d=$s(r,xt.current);Qs(r,a),d=uh(null,r,c,n,d,a);var m=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(m=!0,Ll(r)):m=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=Eh(null,r,c,!0,m,a)):(r.tag=0,Qe&&m&&Wc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Zl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=$E(c),n=Dn(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=Zp(null,r,c,n,a);break e;case 11:r=Gp(null,r,c,n,a);break e;case 14:r=Qp(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Zp(n,r,c,d,a);case 3:e:{if(em(r),n===null)throw Error(t(387));c=r.pendingProps,m=r.memoizedState,d=m.element,mp(n,r),ql(r,c,null,a);var v=r.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){d=Xs(Error(t(423)),r),r=tm(n,r,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),r),r=tm(n,r,c,a,d);break e}else for(on=Hr(r.stateNode.containerInfo.firstChild),sn=r,Qe=!0,xn=null,a=fp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=wr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return _p(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:m!==null&&jc(c,m)&&(r.flags|=32),Jp(n,r),Bt(n,r,v,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return nm(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ks(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Gp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,m=r.memoizedProps,v=d.value,$e(zl,c._currentValue),c._currentValue=v,m!==null)if(Nn(m.value,v)){if(m.children===d.children&&!Wt.current){r=wr(n,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Er(-1,a&-a),C.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),eh(m.return,a,r),T.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===r.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),eh(v,a,r),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===r){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=mn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Qp(n,r,c,d,a);case 15:return Yp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Zl(n,r),r.tag=1,Kt(c)?(n=!0,Ll(r)):n=!1,Qs(r,a),zp(r,c,d),gh(r,c,d,a),Eh(null,r,c,!0,n,a);case 19:return im(n,r,a);case 22:return Xp(n,r,a)}throw Error(t(156,r.tag))};function Pm(n,r){return Ts(n,r)}function BE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new BE(n,r,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $E(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===kt)return 14}return 2}function ni(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cu(n,r,a,c,d,m){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return Ji(a.children,d,m,r);case I:v=8,d|=8;break;case R:return n=_n(12,a,r,d|2),n.elementType=R,n.lanes=m,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=m,n;case et:return n=_n(19,a,r,d),n.elementType=et,n.lanes=m,n;case Ue:return hu(a,d,m,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case kt:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=m,r}function Ji(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function hu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function qE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,m,v,T,C){return n=new qE(n,r,a,T,C),r===1?(r=1,m===!0&&(r|=8)):r=0,m=_n(3,null,null,r),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(m),n}function HE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function km(n){if(!n)return Kr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return rp(n,a,r)}return r}function Nm(n,r,a,c,d,m,v,T,C){return n=$h(a,c,!0,n,d,m,v,T,C),n.context=km(null),a=n.current,c=$t(),d=ei(a),m=Er(c,d),m.callback=r??null,Yr(a,m,d),n.current.lanes=d,Fr(n,d,c),Yt(n,c),n}function du(n,r,a,c){var d=r.current,m=$t(),v=ei(d);return a=km(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(m,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Yr(d,r,v),n!==null&&(Ln(n,d,v,m),$l(n,d,v)),v}function fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){xm(n,r),(n=n.alternate)&&xm(n,r)}function WE(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}pu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));du(n,r,null,null)},pu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){du(null,n,null,null)}),r[mr]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var r=pl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&yl(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function KE(n,r,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=fu(v);m.call(F)}}var v=Nm(r,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=v,n[mr]=v.current,aa(n.nodeType===8?n.parentNode:n),Qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=fu(C);T.call(F)}}var C=$h(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=C,n[mr]=C.current,aa(n.nodeType===8?n.parentNode:n),Qi(function(){du(r,C,a,c)}),C}function gu(n,r,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var C=fu(v);T.call(C)}}du(r,v,n,d)}else v=KE(a,r,n,d,c);return fu(v)}dl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Mr(r.pendingLanes);a!==0&&(Ur(r,a|1),Yt(r,Be()),!(Ve&6)&&(eo=Be()+500,Gr()))}break;case 13:Qi(function(){var c=vr(n,1);if(c!==null){var d=$t();Ln(c,n,1,d)}}),qh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=$t();Ln(r,n,134217728,a)}qh(n,134217728)}},fl=function(n){if(n.tag===13){var r=ei(n),a=vr(n,r);if(a!==null){var c=$t();Ln(a,n,r,c)}qh(n,r)}},pl=function(){return Pe},ml=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},gs=function(n,r,a){switch(r){case"input":if(Do(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Vl(c);if(!d)throw Error(t(90));cs(c),Do(c,d)}}}break;case"textarea":ps(n,a);break;case"select":r=a.value,r!=null&&ar(n,!!a.multiple,r,!1)}},ki=bh,Bo=Qi;var GE={usingClientEntryPoint:!1,Events:[ca,zs,Vl,zn,zo,bh]},Sa={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QE={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||WE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Oi=yu.inject(QE),en=yu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return HE(n,r,null,a)},Xt.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=Dm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,aa(n.nodeType===8?n.parentNode:n),new Hh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Qi(n)},Xt.hydrate=function(n,r,a){if(!mu(r))throw Error(t(200));return gu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Nm(r,null,n,1,a??null,d,!1,m,v),n[mr]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new pu(r)},Xt.render=function(n,r,a){if(!mu(r))throw Error(t(200));return gu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!mu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Xt.unstable_batchedUpdates=bh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var zm;function rw(){if(zm)return Qh.exports;zm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=nw(),Qh.exports}var Bm;function iw(){if(Bm)return _u;Bm=1;var i=rw();return _u.createRoot=i.createRoot,_u.hydrateRoot=i.hydrateRoot,_u}var sw=iw();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),py=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=ft.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...p},g)=>ft.createElement("svg",{ref:g,...aw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:py("lucide",o),...p},[...h.map(([_,w])=>ft.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(i,e)=>{const t=ft.forwardRef(({className:s,...o},u)=>ft.createElement(lw,{ref:u,iconNode:e,className:py(`lucide-${ow(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],cw=Un("Camera",uw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],my=Un("CircleAlert",hw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],fw=Un("Fingerprint",dw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],mw=Un("Plus",pw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],yw=Un("RefreshCw",gw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],vw=Un("Search",_w);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ww=Un("Shield",Ew);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Iw=Un("TriangleAlert",Tw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],cd=Un("UserCheck",Sw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],Rw=Un("UserX",Aw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],gy=Un("Users",Cw);var $m={};/**
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
 */const yy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Pw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],p=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,p=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,S=(u&3)<<4|p>>4;let N=(p&15)<<2|_>>6,j=_&63;g||(j=64,h||(N=64)),s.push(t[w],t[S],t[N],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(yy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Pw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],p=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||p==null||_==null||S==null)throw new kw;const N=u<<2|p>>4;if(s.push(N),_!==64){const j=p<<4&240|_>>2;if(s.push(j),S!==64){const W=_<<6&192|S;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nw=function(i){const e=yy(i);return _y.encodeByteArray(e,!0)},bu=function(i){return Nw(i).replace(/\./g,"")},vy=function(i){try{return _y.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Fu(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xw(t)||(i[t]=Fu(i[t],e[t]));return i}function xw(i){return i!=="__proto__"}/**
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
 */function Ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dw=()=>Ey().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof $m>"u")return;const i=$m.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ow=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vy(i[1]);return e&&JSON.parse(e)},tc=()=>{try{return Dw()||Vw()||Ow()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},wy=i=>{var e,t;return(t=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Ty=i=>{const e=wy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Iy=()=>{var i;return(i=tc())===null||i===void 0?void 0:i.config},Sy=i=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Mw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[bu(JSON.stringify(t)),bu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Fw(){var i;const e=(i=tc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uw(){return typeof window<"u"||Ay()}function Ay(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Bw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $w(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function qw(){return!Fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ww(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Kw="FirebaseError";class ir extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Kw,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Gw(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new ir(o,p,s)}}function Gw(i,e){return i.replace(Qw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Qw=/\{\$([^}]+)}/g;/**
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
 */function qm(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Yw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Uu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Hm(u)&&Hm(h)){if(!Uu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ga(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ra(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ca(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Ry(i,e){const t=new Xw(i,e);return t.subscribe.bind(t)}class Xw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Jw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Jh(){}/**
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
 */function Ut(i){return i&&i._delegate?i._delegate:i}class Cr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zi="[DEFAULT]";/**
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
 */class Zw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tT(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eT(i){return i===Zi?void 0:i}function tT(i){return i.instantiationMode==="EAGER"}/**
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
 */class Cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ld=[];var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const Py={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},nT=Re.INFO,rT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},iT=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=rT[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=nT,this._logHandler=iT,this._userLogHandler=null,Ld.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Py[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}function sT(i){Ld.forEach(e=>{e.setLogLevel(i)})}function oT(i,e){for(const t of Ld){let s=null;e&&e.level&&(s=Py[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(o,u,...h)=>{const p=h.map(g=>{if(g==null)return null;if(typeof g=="string")return g;if(typeof g=="number"||typeof g=="boolean")return g.toString();if(g instanceof Error)return g.message;try{return JSON.stringify(g)}catch{return null}}).filter(g=>g).join(" ");u>=(s??o.logLevel)&&i({level:Re[u].toLowerCase(),message:p,args:h,type:o.name})}}}const aT=(i,e)=>e.some(t=>i instanceof t);let Wm,Km;function lT(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,hd=new WeakMap,Ny=new WeakMap,Zh=new WeakMap,Md=new WeakMap;function cT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ci(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,i)}).catch(()=>{}),Md.set(e,i),e}function hT(i){if(hd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});hd.set(i,e)}let dd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return hd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ny.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function dT(i){dd=i(dd)}function fT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ed(this),e,...t);return Ny.set(s,e.sort?e.sort():[e]),ci(s)}:uT().includes(i)?function(...e){return i.apply(ed(this),e),ci(ky.get(this))}:function(...e){return ci(i.apply(ed(this),e))}}function pT(i){return typeof i=="function"?fT(i):(i instanceof IDBTransaction&&hT(i),aT(i,lT())?new Proxy(i,dd):i)}function ci(i){if(i instanceof IDBRequest)return cT(i);if(Zh.has(i))return Zh.get(i);const e=pT(i);return e!==i&&(Zh.set(i,e),Md.set(e,i)),e}const ed=i=>Md.get(i);function mT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),p=ci(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ci(h.result),g.oldVersion,g.newVersion,ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const gT=["get","getKey","getAll","getAllKeys","count"],yT=["put","add","delete","clear"],td=new Map;function Gm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=yT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gT.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return td.set(e,u),u}dT(i=>({...i,get:(e,t,s)=>Gm(e,t)||i.get(e,t,s),has:(e,t)=>!!Gm(e,t)||i.has(e,t)}));/**
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
 */class _T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",fd="0.10.18";/**
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
 */const Pr=new nc("@firebase/app"),ET="@firebase/app-compat",wT="@firebase/analytics-compat",TT="@firebase/analytics",IT="@firebase/app-check-compat",ST="@firebase/app-check",AT="@firebase/auth",RT="@firebase/auth-compat",CT="@firebase/database",PT="@firebase/data-connect",kT="@firebase/database-compat",NT="@firebase/functions",xT="@firebase/functions-compat",DT="@firebase/installations",VT="@firebase/installations-compat",OT="@firebase/messaging",LT="@firebase/messaging-compat",MT="@firebase/performance",bT="@firebase/performance-compat",FT="@firebase/remote-config",UT="@firebase/remote-config-compat",jT="@firebase/storage",zT="@firebase/storage-compat",BT="@firebase/firestore",$T="@firebase/vertexai",qT="@firebase/firestore-compat",HT="firebase",WT="11.2.0";/**
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
 */const mi="[DEFAULT]",KT={[ju]:"fire-core",[ET]:"fire-core-compat",[TT]:"fire-analytics",[wT]:"fire-analytics-compat",[ST]:"fire-app-check",[IT]:"fire-app-check-compat",[AT]:"fire-auth",[RT]:"fire-auth-compat",[CT]:"fire-rtdb",[PT]:"fire-data-connect",[kT]:"fire-rtdb-compat",[NT]:"fire-fn",[xT]:"fire-fn-compat",[DT]:"fire-iid",[VT]:"fire-iid-compat",[OT]:"fire-fcm",[LT]:"fire-fcm-compat",[MT]:"fire-perf",[bT]:"fire-perf-compat",[FT]:"fire-rc",[UT]:"fire-rc-compat",[jT]:"fire-gcs",[zT]:"fire-gcs-compat",[BT]:"fire-fst",[qT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[HT]:"fire-js-all"};/**
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
 */const gi=new Map,fo=new Map,po=new Map;function ba(i,e){try{i.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function xy(i,e){i.container.addOrOverwriteComponent(e)}function kr(i){const e=i.name;if(po.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,i);for(const t of gi.values())ba(t,i);for(const t of fo.values())ba(t,i);return!0}function Io(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function GT(i,e,t=mi){Io(i,e).clearInstance(t)}function Dy(i){return i.options!==void 0}function Jn(i){return i.settings!==void 0}function QT(){po.clear()}/**
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
 */const YT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new is("app","Firebase",YT);/**
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
 */let Vy=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}};/**
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
 */class XT extends Vy{constructor(e,t,s,o){const u=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,h={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,h,o);else{const p=e;super(p.options,h,o)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:u},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Zt(ju,fd,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){bd(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw En.create("server-app-deleted")}}/**
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
 */const Ti=WT;function Qa(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mi,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw En.create("bad-app-name",{appName:String(o)});if(t||(t=Iy()),!t)throw En.create("no-options");const u=gi.get(o);if(u){if(Uu(t,u.options)&&Uu(s,u.config))return u;throw En.create("duplicate-app",{appName:o})}const h=new Cy(o);for(const g of po.values())h.addComponent(g);const p=new Vy(t,s,h);return gi.set(o,p),p}function JT(i,e){if(Uw()&&!Ay())throw En.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Dy(i)?t=i.options:t=i;const s=Object.assign(Object.assign({},e),t);s.releaseOnDeref!==void 0&&delete s.releaseOnDeref;const o=_=>[..._].reduce((w,S)=>Math.imul(31,w)+S.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw En.create("finalization-registry-not-supported",{});const u=""+o(JSON.stringify(s)),h=fo.get(u);if(h)return h.incRefCount(e.releaseOnDeref),h;const p=new Cy(u);for(const _ of po.values())p.addComponent(_);const g=new XT(t,e,u,p);return fo.set(u,g),g}function rc(i=mi){const e=gi.get(i);if(!e&&i===mi&&Iy())return Qa();if(!e)throw En.create("no-app",{appName:i});return e}function ZT(){return Array.from(gi.values())}async function bd(i){let e=!1;const t=i.name;gi.has(t)?(e=!0,gi.delete(t)):fo.has(t)&&i.decRefCount()<=0&&(fo.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function Zt(i,e,t){var s;let o=(s=KT[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(p.join(" "));return}kr(new Cr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function Oy(i,e){if(i!==null&&typeof i!="function")throw En.create("invalid-log-argument");oT(i,e)}function Ly(i){sT(i)}/**
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
 */const eI="firebase-heartbeat-database",tI=1,Fa="firebase-heartbeat-store";let nd=null;function My(){return nd||(nd=mT(eI,tI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(i=>{throw En.create("idb-open",{originalErrorMessage:i.message})})),nd}async function nI(i){try{const t=(await My()).transaction(Fa),s=await t.objectStore(Fa).get(by(i));return await t.done,s}catch(e){if(e instanceof ir)Pr.warn(e.message);else{const t=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function Qm(i,e){try{const s=(await My()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,by(i)),await s.done}catch(t){if(t instanceof ir)Pr.warn(t.message);else{const s=En.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function by(i){return`${i.name}!${i.options.appId}`}/**
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
 */const rI=1024,iI=30*24*60*60*1e3;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new aI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=iI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ym(),{heartbeatsToSend:s,unsentEntries:o}=oI(this._heartbeatsCache.heartbeats),u=bu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Pr.warn(t),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function oI(i,e=rI){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class aI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hw()?Ww().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Xm(i){return bu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function lI(i){kr(new Cr("platform-logger",e=>new _T(e),"PRIVATE")),kr(new Cr("heartbeat",e=>new sI(e),"PRIVATE")),Zt(ju,fd,i),Zt(ju,fd,"esm2017"),Zt("fire-js","")}lI("");const uI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ir,SDK_VERSION:Ti,_DEFAULT_ENTRY_NAME:mi,_addComponent:ba,_addOrOverwriteComponent:xy,_apps:gi,_clearComponents:QT,_components:po,_getProvider:Io,_isFirebaseApp:Dy,_isFirebaseServerApp:Jn,_registerComponent:kr,_removeServiceInstance:GT,_serverApps:fo,deleteApp:bd,getApp:rc,getApps:ZT,initializeApp:Qa,initializeServerApp:JT,onLog:Oy,registerVersion:Zt,setLogLevel:Ly},Symbol.toStringTag,{value:"Module"}));var Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,Fy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function R(){}R.prototype=I.prototype,x.D=I.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,D,O){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return I.prototype[D].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=x.g[0],R=x.g[1],D=x.g[2];var O=x.g[3],A=I+(O^R&(D^O))+P[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[1]+3905402710&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[2]+606105819&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[3]+3250441966&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[5]+1200080426&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[6]+2821735955&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[7]+4249261313&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[9]+2336552879&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[10]+4294925233&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[11]+2304563134&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[13]+4254626195&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[14]+2792965006&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[15]+1236535329&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(D^O&(R^D))+P[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[6]+3225465664&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[11]+643717713&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[0]+3921069994&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[10]+38016083&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[15]+3634488961&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[4]+3889429448&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[14]+3275163606&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[3]+4107603335&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[8]+1163531501&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[2]+4243563512&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[7]+1735328473&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[12]+2368359562&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(R^D^O)+P[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[8]+2272392833&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[11]+1839030562&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[14]+4259657740&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[4]+1272893353&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[7]+4139469664&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[10]+3200236656&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[0]+3936430074&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[3]+3572445317&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[6]+76029189&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[12]+3873151461&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[15]+530742520&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[2]+3299628645&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(D^(R|~O))+P[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[7]+1126891415&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[14]+2878612391&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[5]+4237533241&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[3]+2399980690&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[10]+4293915773&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[1]+2240044497&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[15]+4264355552&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[6]+2734768916&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[13]+1309151649&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[11]+3174756917&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[2]+718787259&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var R=I-this.blockSize,P=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=R;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<I;)if(P[D++]=x.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<I;)if(P[D++]=x[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var R=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=R&255,R/=256;for(this.u(x),x=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)x[R++]=this.g[I]>>>P&255;return x};function u(x,I){var R=p;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=I(x)}function h(x,I){this.h=I;for(var R=[],P=!0,D=x.length-1;0<=D;D--){var O=x[D]|0;P&&O==I||(R[D]=O,P=!1)}this.g=R}var p={};function g(x){return-128<=x&&128>x?u(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return S;if(0>x)return $(_(-x));for(var I=[],R=1,P=0;x>=R;P++)I[P]=x/R|0,R*=4294967296;return new h(I,0)}function w(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return $(w(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),P=S,D=0;D<x.length;D+=8){var O=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+O),I);8>O?(O=_(Math.pow(I,O)),P=P.j(O).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var S=g(0),N=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Y(this))return-$(this).m();for(var x=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*I,I*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(W(this))return"0";if(Y(this))return"-"+$(this).toString(x);for(var I=_(Math.pow(x,6)),R=this,P="";;){var D=Te(R,I).g;R=me(R,D.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=D,W(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function W(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function Y(x){return x.h==-1}i.l=function(x){return x=me(this,x),Y(x)?-1:W(x)?0:1};function $(x){for(var I=x.g.length,R=[],P=0;P<I;P++)R[P]=~x.g[P];return new h(R,~x.h).add(N)}i.abs=function(){return Y(this)?$(this):this},i.add=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0,D=0;D<=I;D++){var O=P+(this.i(D)&65535)+(x.i(D)&65535),A=(O>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);P=A>>>16,O&=65535,A&=65535,R[D]=A<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function me(x,I){return x.add($(I))}i.j=function(x){if(W(this)||W(x))return S;if(Y(this))return Y(x)?$(this).j($(x)):$($(this).j(x));if(Y(x))return $(this.j($(x)));if(0>this.l(j)&&0>x.l(j))return _(this.m()*x.m());for(var I=this.g.length+x.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<x.g.length;D++){var O=this.i(P)>>>16,A=this.i(P)&65535,et=x.i(D)>>>16,kt=x.i(D)&65535;R[2*P+2*D]+=A*kt,fe(R,2*P+2*D),R[2*P+2*D+1]+=O*kt,fe(R,2*P+2*D+1),R[2*P+2*D+1]+=A*et,fe(R,2*P+2*D+1),R[2*P+2*D+2]+=O*et,fe(R,2*P+2*D+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function fe(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Ee(x,I){this.g=x,this.h=I}function Te(x,I){if(W(I))throw Error("division by zero");if(W(x))return new Ee(S,S);if(Y(x))return I=Te($(x),I),new Ee($(I.g),$(I.h));if(Y(I))return I=Te(x,$(I)),new Ee($(I.g),I.h);if(30<x.g.length){if(Y(x)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=N,P=I;0>=P.l(x);)R=Ke(R),P=Ke(P);var D=Ae(R,1),O=Ae(P,1);for(P=Ae(P,2),R=Ae(R,2);!W(P);){var A=O.add(P);0>=A.l(x)&&(D=D.add(R),O=A),P=Ae(P,1),R=Ae(R,1)}return I=me(x,D.j(I)),new Ee(D,I)}for(D=S;0<=x.l(I);){for(R=Math.max(1,Math.floor(x.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(R),A=O.j(I);Y(A)||0<A.l(x);)R-=P,O=_(R),A=O.j(I);W(O)&&(O=N),D=D.add(O),x=me(x,A)}return new Ee(D,x)}i.A=function(x){return Te(this,x).h},i.and=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&x.i(P);return new h(R,this.h&x.h)},i.or=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|x.i(P);return new h(R,this.h|x.h)},i.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^x.i(P);return new h(R,this.h^x.h)};function Ke(x){for(var I=x.g.length+1,R=[],P=0;P<I;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(R,x.h)}function Ae(x,I){var R=I>>5;I%=32;for(var P=x.g.length-R,D=[],O=0;O<P;O++)D[O]=0<I?x.i(O+R)>>>I|x.i(O+R+1)<<32-I:x.i(O+R);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,hi=h}).apply(typeof Jm<"u"?Jm:typeof self<"u"?self:typeof window<"u"?window:{});var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uy,Pa,jy,Ru,pd,zy,By,$y;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof vu=="object"&&vu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function S(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function N(l,f,y){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,N.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,J)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function $(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let J=0;J<U;J++)l[L+J]=E[J]}else l.push(E)}}class me{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function Ee(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var Ke=Ee().indexOf("Gecko")!=-1&&!(Ee().toLowerCase().indexOf("webkit")!=-1&&Ee().indexOf("Edge")==-1)&&!(Ee().indexOf("Trident")!=-1||Ee().indexOf("MSIE")!=-1)&&Ee().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function x(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){p.setTimeout(()=>{throw l},0)}function A(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new me(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,ce=new et,te=()=>{const l=p.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){O(y)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ke){e:{try{Te(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}W(Ie,le);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sr(l){this.src=l,this.g={},this.h=0}sr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Vr(l,f,E,L);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function cs(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Vr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),hs={};function xo(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)xo(l,f[U],y,E,L);return null}return y=Oo(y),l&&l[Le]?l.K(f,y,_(E)?!!E.capture:!1,L):Do(l,f,y,!1,E,L)}function Do(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,Fe=fs(l);if(Fe||(l[Ai]=Fe=new sr(l)),y=Fe.add(f,y,E,J,U),y.proxy)return y;if(E=rl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)we||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(ar(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function rl(){function l(y){return f.call(l.src,l.listener,y)}const f=Vo;return l}function ds(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)ds(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=Oo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Vr(U,y,E,L),-1<y&&(gt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=fs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Vr(f,y,E,L)),(y=-1<l?f[l]:null)&&or(y))}function or(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])cs(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(ar(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=fs(f))?(cs(y,l),y.h==0&&(y.src=null,f[Ai]=null)):gt(l)}}}function ar(l){return l in hs?hs[l]:hs[l]="on"+l}function Vo(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&or(l),l=y.call(E,f)}return l}function fs(l){return l=l[Ai],l instanceof sr?l:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oo(l){return typeof l=="function"?l:(l[ps]||(l[ps]=function(f){return l.handleEvent(f)}),l[ps])}function lt(){q.call(this),this.i=new sr(this),this.M=this,this.F=null}W(lt,q),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,y,E){ds(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var L=f;f=new le(E,l),P(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=lr(J,E,!0,f)&&L}if(J=f.g=l,L=lr(J,E,!0,f)&&L,L=lr(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=lr(J,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)gt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function lr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var Fe=J.listener,ct=J.ha||J.src;J.fa&&cs(l.i,J),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function Lo(l,f,y){if(typeof l=="function")y&&(l=N(l,y));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function Or(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,Or(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ri extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Or(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(l){q.call(this),this.h=l,this.g={}}W(Ci,q);var Mo=[];function bo(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&or(f)},l),l.g={}}Ci.prototype.N=function(){Ci.aa.N.call(this),bo(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=p.JSON.stringify,Uo=p.JSON.parse,jo=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Pi(){}Pi.prototype.h=null;function ms(l){return l.h||(l.h=l.i())}function gs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){le.call(this,"d")}W(jn,le);function ys(){le.call(this,"c")}W(ys,le);var zn={},zo=null;function ki(){return zo=zo||new lt}zn.La="serverreachability";function Bo(l){le.call(this,zn.La,l)}W(Bo,le);function ur(l){const f=ki();ut(f,new Bo(f))}zn.STAT_EVENT="statevent";function $o(l,f){le.call(this,zn.STAT_EVENT,l),this.stat=f}W($o,le);function tt(l){const f=ki();ut(f,new $o(f,l))}zn.Ma="timingevent";function _s(l,f){le.call(this,zn.Ma,l),this.size=f}W(_s,le);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function xi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var J="",Fe=U.split("&"),ct=0;ct<Fe.length;ct++){var xe=Fe[ct].split("=");if(1<xe.length){var yt=xe[0];xe=xe[1];var it=yt.split("_");J=2<=it.length&&it[1]=="type"?J+(yt+"="+xe+"&"):J+(yt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function vs(l,f,y,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function Tn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+wc(l,y)+(E?" "+E:"")})}function qo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ni.prototype.info=function(){};function wc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Fo(y)}catch{return f}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},il={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Di(){}W(Di,Pi),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},In=new Di;function Sn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sl}function sl(){this.i=null,this.g="",this.h=!1}var Ho={},ws={};function Ts(l,f,y){l.L=1,l.v=Ur(tn(f)),l.m=y,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),Be(l),l.A=tn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),zr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new sl,l.g=Il(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ri(N(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Mo[0]=L.toString()),L=Mo);for(var U=0;U<L.length;U++){var J=xo(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ur(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Jo(this.g)))){this.J||it!=4||f==7||(f==8||0>=dn?ur(3):ur(2)),Vi(this);var y=this.g.Z();this.X=y;t:if(ol(this)){var E=Jo(this.g);l="";var L=E.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Lr(this);var J="";break t}this.h.i=new p.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,vs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Fe)){var xe=Fe;break t}}xe=null}if(y=xe)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,y);else{this.o=!1,this.s=3,tt(12),cn(this),Lr(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<J.length;)if(rn=Tc(this,J),rn==ws){it==4&&(this.s=4,tt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Ho){this.s=4,tt(15),Tn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,rn,null),Ko(this,rn);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,J,"[Invalid Chunked Response]"),cn(this),Lr(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ea(yt),yt.M=!0,tt(11))}}else Tn(this.i,this.l,J,null),Ko(this,J);it==4&&cn(this),this.o&&!this.J&&(it==4?Vs(this.j,this):(this.o=!1,Be(this)))}else Ps(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),cn(this),Lr(this)}}}catch{}finally{}};function ol(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ws:(y=Number(f.substring(y,E)),isNaN(y)?Ho:(E+=1,E+y>f.length?ws:(f=f.slice(E,E+y),l.C=E+y,f)))}Sn.prototype.cancel=function(){this.J=!0,cn(this)};function Be(l){l.S=Date.now()+l.I,al(l,l.I)}function al(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(N(l.ba,l),f)}function Vi(l){l.B&&(p.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(qo(this.i,this.A),this.L!=2&&(ur(),tt(17)),cn(this),this.s=2,Lr(this)):al(this,this.S-l)};function Lr(l){l.j.G==0||l.J||Vs(l.j,l)}function cn(l){Vi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,bo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ko(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ds(y),kn(y);else break e;xs(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(N(y.Za,y),6e3));if(1>=ul(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else pr(y,11)}else if((l.K||y.g==l)&&Ds(y),!fe(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let xe=L[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const yt=xe[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const it=xe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const dn=xe[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rn=l.g;if(rn){const ji=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var U=E.h;U.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Go(U,U.h),U.h=null))}if(E.D){const Ls=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(E.ya=Ls,je(E.I,E.D,Ls))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=Tl(E,E.J?E.ia:null,E.W),J.K){cl(E.h,J);var Fe=J,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(Vi(Fe),Be(Fe)),E.g=J}else Ui(E);0<y.i.length&&Hn(y)}else xe[0]!="stop"&&xe[0]!="close"||pr(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?pr(y,7):It(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ur(4)}catch{}}var ll=class{constructor(l,f){this.g=l,this.map=f}};function Oi(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ul(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Go(l,f){l.g?l.g.add(f):l.h=f}function cl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Oi.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function hl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function Is(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ss(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Mr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ss(l),E=Is(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof cr){this.h=l.h,Mi(this,l.j),this.o=l.o,this.g=l.g,br(this,l.s),this.l=l.l;var f=l.i,y=new Bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Fr(this,y),this.m=l.m}else l&&(f=String(l).match(Li))?(this.h=!1,Mi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),br(this,f[4]),this.l=Pe(f[5]||"",!0),Fr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}cr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(jr(f,As,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(jr(f,As,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(jr(y,y.charAt(0)=="/"?pl:fl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",jr(y,Qo)),l.join("")};function tn(l){return new cr(l)}function Mi(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function br(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Fr(l,f,y){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(y||(f=jr(f,ml)),l.i=new Bn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function Ur(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,dl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function dl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var As=/[#\/\?@]/g,fl=/[#\?:]/g,pl=/[#\?]/g,ml=/[#\?@]/g,Qo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ic(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,f){Tt(this),this.i=null,l=hn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function An(l,f){Tt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return Tt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=hn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function zr(l,f,y){An(l,f),0<y.length&&(l.i=null,l.g.set(hn(l,f),Y(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),l.push(L)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(An(this,E),zr(this,L,y))},l)),l.j=f}function Sc(l,f){const y=new Ni;if(p.Image){const E=new Image;E.onload=j(qt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(qt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(qt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(qt,y,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function gl(l,f){const y=new Ni,E=new AbortController,L=setTimeout(()=>{E.abort(),qt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?qt(y,"TestPingServer: ok",!0,f):qt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,f)})}function qt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Ac(){this.g=new jo}function yl(l,f,y){const E=y||"";try{Mr(l,function(L,U){let J=L;_(L)&&(J=Fo(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function hr(l){this.l=l.Ub||null,this.j=l.eb||!1}W(hr,Pi),hr.prototype.g=function(){return new bi(this.l,this.j)},hr.prototype.i=function(l){return function(){return l}}({});function bi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(bi,lt),i=bi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_l(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):Pn(this),this.readyState==3&&_l(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Br(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=dr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Ge,lt);var Rc=/^https?$/i,Yo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?ms(this.o):ms(In),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Fi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Yo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Fi(this,U)}};function Fi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),nn(l)}function Rs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Xo(this):this.bb())},i.bb=function(){Xo(this)};function Xo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Lo(l.Ea,0,l);else if(ut(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(l.D).match(Li)[1]||null;!L&&p.self&&p.self.location&&(L=p.self.location.protocol.slice(0,-1)),E=!Rc.test(L?L.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Rs(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Cs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function Cs(l){l.I&&(p.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Uo(f)}};function Jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var y=D(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}x(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Zo(l){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(l&&l.concurrentRequestLimit),this.Da=new Ac,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Tl(this,null,this.W),Hn(this)};function It(l){if(ks(l),l.G==3){var f=l.U++,y=tn(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),fr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=Ur(tn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=Il(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}wl(l)}function kn(l){l.g&&(ea(l),l.g.cancel(),l.g=null)}function ks(l){kn(l),l.u&&(p.clearTimeout(l.u),l.u=null),Ds(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Hn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.B=0}}function Cc(l,f){return ul(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(N(l.Ga,l,f),El(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=$r(this,L,f),y=tn(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),fr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(dr(U)))+"&"+f:this.m&&Br(y,this.m,U)),Go(this.h,L),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),L.T=!0,Ts(L,y,null)):Ts(L,y,f),this.G=2}}else this.G==3&&(l?Ns(this,l):this.i.length==0||en(this.h)||Ns(this))};function Ns(l,f){var y;f?y=f.l:y=l.U++;const E=tn(l.I);je(E,"SID",l.K),je(E,"RID",y),je(E,"AID",l.T),fr(l,E),l.m&&l.o&&Br(E,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=$r(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Go(l.h,y),Ts(y,E,f)}function fr(l,f){l.H&&Ae(l.H,function(y,E){je(f,E,y)}),l.l&&Mr({},function(y,E){je(f,E,y)})}function $r(l,f,y){y=Math.min(l.i.length,y);var E=l.l?N(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let Fe=!0;for(let ct=0;ct<y;ct++){let xe=L[ct].g;const yt=L[ct].map;if(xe-=U,0>xe)U=Math.max(0,L[ct].g-100),Fe=!1;else try{yl(yt,J,"req"+xe+"_")}catch{E&&E(yt)}}if(Fe){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ui(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.v=0}}function xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(N(l.Fa,l),El(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,vl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(N(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),vl(this))};function ea(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function vl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),fr(l,f),l.m&&l.o&&Br(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Ur(tn(f)),y.m=null,y.P=!0,Wo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),xs(this),tt(19))};function Ds(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Vs(l,f){var y=null;if(l.g==f){Ds(l),ea(l),l.g=null;var E=2}else if(jt(l.h,f))y=f.D,cl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=ki(),ut(E,new _s(E,y)),Hn(l)}else Ui(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Cc(l,f)||E==2&&xs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function El(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function pr(l,f){if(l.j.info("Error code "+f),f==2){var y=N(l.fb,l),E=l.Xa;const L=!E;E=new cr(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Mi(E,"https"),Ur(E),L?Sc(E.toString(),y):gl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),wl(l),ks(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function wl(l){if(l.G=0,l.ka=[],l.l){const f=hl(l.h);(f.length!=0||l.i.length!=0)&&($(l.ka,f),$(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Tl(l,f,y){var E=y instanceof cr?tn(y):new cr(y);if(E.g!="")f&&(E.g=f+"."+E.g),br(E,E.s);else{var L=p.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new cr(null);E&&Mi(U,E),f&&(U.g=f),L&&br(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&je(E,y,f),je(E,"VER",l.la),fr(l,E),E}function Il(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new hr({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}i=ta.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Os(){}Os.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){lt.call(this),this.g=new Zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}W(zt,lt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){It(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Fo(l),l=y);f.i.push(new ll(f.Ya++,l)),f.G==3&&Hn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,zt.aa.N.call(this)};function Sl(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}W(Sl,jn);function Al(){ys.call(this),this.status=1}W(Al,ys);function Wn(l){this.g=l}W(Wn,ta),Wn.prototype.ua=function(){ut(this.g,"a")},Wn.prototype.ta=function(l){ut(this.g,new Sl(l))},Wn.prototype.sa=function(l){ut(this.g,new Al)},Wn.prototype.ra=function(){ut(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,$y=function(){return new Os},By=function(){return ki()},zy=zn,pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Ru=Es,il.COMPLETE="complete",jy=il,gs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Pa=gs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Uy=Ge}).apply(typeof vu<"u"?vu:typeof self<"u"?self:typeof window<"u"?window:{});const Zm="@firebase/firestore";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let So="11.2.0";/**
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
 */const ns=new nc("@firebase/firestore");function ro(){return ns.logLevel}function ne(i,...e){if(ns.logLevel<=Re.DEBUG){const t=e.map(Fd);ns.debug(`Firestore (${So}): ${i}`,...t)}}function Nr(i,...e){if(ns.logLevel<=Re.ERROR){const t=e.map(Fd);ns.error(`Firestore (${So}): ${i}`,...t)}}function mo(i,...e){if(ns.logLevel<=Re.WARN){const t=e.map(Fd);ns.warn(`Firestore (${So}): ${i}`,...t)}}function Fd(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function ye(i="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+i;throw Nr(e),new Error(e)}function be(i,e){i||ye()}function ve(i,e){return i}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class di{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class qy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new di;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new di,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new di)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new qy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Mt(e)}}class fI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class pI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new fI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new mI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Hy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=yI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function go(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new pt(0,0))}static max(){return new _e(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(),s===void 0?s=e.length-t:s>e.length-t&&ye(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hi.fromString(e.substring(4,e.length-2))}}class We extends Xn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new We(t)}static emptyPath(){return new We([])}}const _I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Xn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return _I.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}function vI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new yi(o,ue.empty(),e)}function EI(i){return new yi(i.readTime,i.key,-1)}class yi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yi(_e.min(),ue.empty(),-1)}static max(){return new yi(_e.max(),ue.empty(),-1)}}function wI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */const TI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class II{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==TI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++p,p===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function SI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function sc(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function AI(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function RI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=eg(e)),e=CI(i.get(t),e);return eg(e)}function CI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function eg(i){return i+""}/**
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
 */function tg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ss(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Wy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Ky extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Ky("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(i){if(be(!!i),typeof i=="string"){let e=0;const t=PI.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function vi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */function Ud(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function oc(i){const e=i.mapValue.fields.__previous_value__;return Ud(e)?oc(e):e}function Ua(i){const e=_i(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class kI{constructor(e,t,s,o,u,h,p,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_}}class ja{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wu={mapValue:{}};function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ud(i)?4:xI(i)?9007199254740991:NI(i)?10:11:ye()}function rr(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ua(i).isEqual(Ua(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_i(o.timestampValue),p=_i(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return vi(o.bytesValue).isEqual(vi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),p=rt(u.doubleValue);return h===p?zu(h)===zu(p):isNaN(h)&&isNaN(p)}return!1}(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(tg(h)!==tg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!rr(h[g],p[g])))return!1;return!0}(i,e);default:return ye()}}function za(i,e){return(i.values||[]).find(t=>rr(t,e))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const p=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(i,e);case 3:return rg(i.timestampValue,e.timestampValue);case 4:return rg(Ua(i),Ua(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const p=vi(u),g=vi(h);return p.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const w=ke(p[_],g[_]);if(w!==0)return w}return ke(p.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const p=ke(rt(u.latitude),rt(h.latitude));return p!==0?p:ke(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ig(i.arrayValue,e.arrayValue);case 10:return function(u,h){var p,g,_,w;const S=u.fields||{},N=h.fields||{},j=(p=S.value)===null||p===void 0?void 0:p.arrayValue,W=(g=N.value)===null||g===void 0?void 0:g.arrayValue,Y=ke(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=W==null?void 0:W.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:ig(j,W)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===wu.mapValue&&h===wu.mapValue)return 0;if(u===wu.mapValue)return 1;if(h===wu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const N=ke(g[S],w[S]);if(N!==0)return N;const j=yo(p[g[S]],_[w[S]]);if(j!==0)return j}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw ye()}}function rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=_i(i),s=_i(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function ig(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function _o(i){return md(i)}function md(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=_i(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return vi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ue.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=md(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${md(t.fields[h])}`;return o+"}"}(i.mapValue):ye()}function Cu(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(i);return e?16+Cu(e):16;case 5:return 2*i.stringValue.length;case 6:return vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Cu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return ss(s.fields,(u,h)=>{o+=u.length+Cu(h)}),o}(i.mapValue);default:throw ye()}}function sg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function gd(i){return!!i&&"integerValue"in i}function jd(i){return!!i&&"arrayValue"in i}function og(i){return!!i&&"nullValue"in i}function ag(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Pu(i){return!!i&&"mapValue"in i}function NI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Da(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ss(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Da(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(i.arrayValue.values[t]);return e}return Object.assign({},i)}function xI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Da(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ss(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new vn(Da(this.value))}}function Gy(i){const e=[];return ss(i.fields,(t,s)=>{const o=new Ct([t]);if(Pu(s)){const u=Gy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Mn(e)}/**
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
 */class bt{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new bt(e,0,_e.min(),_e.min(),_e.min(),vn.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,_e.min(),_e.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,_e.min(),_e.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,t){this.position=e,this.inclusive=t}}function lg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ug(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ba{constructor(e,t="asc"){this.field=e,this.dir=t}}function DI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Qy{}class at extends Qy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new OI(e,t,s):t==="array-contains"?new bI(e,s):t==="in"?new FI(e,s):t==="not-in"?new UI(e,s):t==="array-contains-any"?new jI(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new LI(e,s):new MI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends Qy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new bn(e,t)}matches(e){return Yy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yy(i){return i.op==="and"}function Xy(i){return VI(i)&&Yy(i)}function VI(i){for(const e of i.filters)if(e instanceof bn)return!1;return!0}function yd(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(Xy(i))return i.filters.map(e=>yd(e)).join(",");{const e=i.filters.map(t=>yd(t)).join(",");return`${i.op}(${e})`}}function Jy(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)}(i,e):i instanceof bn?function(s,o){return o instanceof bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&Jy(h,o.filters[p]),!0):!1}(i,e):void ye()}function Zy(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`}(i):i instanceof bn?function(t){return t.op.toString()+" {"+t.getFilters().map(Zy).join(" ,")+"}"}(i):"Filter"}class OI extends at{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class LI extends at{constructor(e,t){super(e,"in",t),this.keys=e_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class MI extends at{constructor(e,t){super(e,"not-in",t),this.keys=e_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class bI extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jd(t)&&za(t.arrayValue,this.value)}}class FI extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&za(this.value.arrayValue,t)}}class UI extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!za(this.value.arrayValue,t)}}class jI extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>za(this.value.arrayValue,s))}}/**
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
 */class zI{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.ue=null}}function cg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new zI(i,e,t,s,o,u,h)}function zd(i){const e=ve(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>yd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>_o(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>_o(s)).join(",")),e.ue=t}return e.ue}function Bd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!DI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Jy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ug(i.startAt,e.startAt)&&ug(i.endAt,e.endAt)}function _d(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Co{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function BI(i,e,t,s,o,u,h,p){return new Co(i,e,t,s,o,u,h,p)}function $d(i){return new Co(i)}function hg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function t_(i){return i.collectionGroup!==null}function Va(i){const e=ve(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Ba(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new Ba(Ct.keyField(),s))}return e.ce}function Zn(i){const e=ve(i);return e.le||(e.le=$I(e,Va(i))),e.le}function $I(i,e){if(i.limitType==="F")return cg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ba(o.field,u)});const t=i.endAt?new Bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Bu(i.startAt.position,i.startAt.inclusive):null;return cg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function vd(i,e){const t=i.filters.concat([e]);return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Ed(i,e,t){return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return Bd(Zn(i),Zn(e))&&i.limitType===e.limitType}function n_(i){return`${zd(Zn(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Zy(o)).join(", ")}]`),sc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>_o(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>_o(o)).join(",")),`Target(${s})`}(Zn(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const _=lg(h,p,g);return h.inclusive?_<=0:_<0}(s.startAt,Va(s),o)||s.endAt&&!function(h,p,g){const _=lg(h,p,g);return h.inclusive?_>=0:_>0}(s.endAt,Va(s),o))}(i,e)}function qI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function r_(i){return(e,t)=>{let s=!1;for(const o of Va(i)){const u=HI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function HI(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,p){const g=h.data.field(u),_=p.data.field(u);return g!==null&&_!==null?yo(g,_):ye()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye()}}/**
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
 */class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Wy(this.inner)}size(){return this.innerSize}}/**
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
 */const WI=new Je(ue.comparator);function xr(){return WI}const i_=new Je(ue.comparator);function ka(...i){let e=i_;for(const t of i)e=e.insert(t.key,t);return e}function s_(i){let e=i_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function es(){return Oa()}function o_(){return Oa()}function Oa(){return new os(i=>i.toString(),(i,e)=>i.isEqual(e))}const KI=new Je(ue.comparator),GI=new mt(ue.comparator);function Ce(...i){let e=GI;for(const t of i)e=e.add(t);return e}const QI=new mt(ke);function YI(){return QI}/**
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
 */function qd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function a_(i){return{integerValue:""+i}}function XI(i,e){return AI(e)?a_(e):qd(i,e)}/**
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
 */class uc{constructor(){this._=void 0}}function JI(i,e,t){return i instanceof $u?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ud(u)&&(u=oc(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof $a?u_(i,e):i instanceof qa?c_(i,e):function(o,u){const h=l_(o,u),p=dg(h)+dg(o.Pe);return gd(h)&&gd(o.Pe)?a_(p):qd(o.serializer,p)}(i,e)}function ZI(i,e,t){return i instanceof $a?u_(i,e):i instanceof qa?c_(i,e):t}function l_(i,e){return i instanceof qu?function(s){return gd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class $u extends uc{}class $a extends uc{constructor(e){super(),this.elements=e}}function u_(i,e){const t=h_(e);for(const s of i.elements)t.some(o=>rr(o,s))||t.push(s);return{arrayValue:{values:t}}}class qa extends uc{constructor(e){super(),this.elements=e}}function c_(i,e){let t=h_(e);for(const s of i.elements)t=t.filter(o=>!rr(o,s));return{arrayValue:{values:t}}}class qu extends uc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dg(i){return rt(i.integerValue||i.doubleValue)}function h_(i){return jd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function e0(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof $a&&o instanceof $a||s instanceof qa&&o instanceof qa?go(s.elements,o.elements,rr):s instanceof qu&&o instanceof qu?rr(s.Pe,o.Pe):s instanceof $u&&o instanceof $u}(i.transform,e.transform)}class t0{constructor(e,t){this.version=e,this.transformResults=t}}class Rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function d_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new p_(i.key,Rr.none()):new Ya(i.key,i.data,Rr.none());{const t=i.data,s=vn.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new as(i.key,s,new Mn(o.toArray()),Rr.none())}}function n0(i,e,t){i instanceof Ya?function(o,u,h){const p=o.value.clone(),g=pg(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):i instanceof as?function(o,u,h){if(!ku(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=pg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(f_(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function La(i,e,t,s){return i instanceof Ya?function(u,h,p,g){if(!ku(u.precondition,h))return p;const _=u.value.clone(),w=mg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof as?function(u,h,p,g){if(!ku(u.precondition,h))return p;const _=mg(u.fieldTransforms,g,h),w=h.data;return w.setAll(f_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(u,h,p){return ku(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(i,e,t)}function r0(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=l_(s.transform,o||null);u!=null&&(t===null&&(t=vn.empty()),t.set(s.field,u))}return t||null}function fg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,(u,h)=>e0(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ya extends cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class as extends cc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function f_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function pg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,ZI(h,p,t[o]))}return s}function mg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,JI(u,h,e))}return s}class p_ extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i0 extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s0{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&n0(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=o_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=d_(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(t,s)=>fg(t,s))&&go(this.baseMutations,e.baseMutations,(t,s)=>fg(t,s))}}class Hd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return KI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Hd(e,t,s,o)}}/**
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
 */class o0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class a0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,De;function l0(i){switch(i){default:return ye();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function m_(i){if(i===void 0)return Nr("GRPC error has no .code"),H.UNKNOWN;switch(i){case ot.OK:return H.OK;case ot.CANCELLED:return H.CANCELLED;case ot.UNKNOWN:return H.UNKNOWN;case ot.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ot.INTERNAL:return H.INTERNAL;case ot.UNAVAILABLE:return H.UNAVAILABLE;case ot.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ot.NOT_FOUND:return H.NOT_FOUND;case ot.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ot.ABORTED:return H.ABORTED;case ot.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ot.DATA_LOSS:return H.DATA_LOSS;default:return ye()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u0(){return new TextEncoder}/**
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
 */const c0=new hi([4294967295,4294967295],0);function gg(i){const e=u0().encode(i),t=new Fy;return t.update(e),new Uint8Array(t.digest())}function yg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new hi([t,s],0),new hi([o,u],0)]}class Wd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=hi.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(hi.fromNumber(s)));return o.compare(c0)===1&&(o=new hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=gg(e),[s,o]=yg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Wd(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.Te===0)return;const t=gg(e),[s,o]=yg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(_e.min(),o,new Je(ke),xr(),Ce())}}class Xa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xa(s,t,Ce(),Ce(),Ce())}}/**
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
 */class Nu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class g_{constructor(e,t){this.targetId=e,this.me=t}}class y_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class _g{constructor(){this.fe=0,this.ge=vg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye()}}),new Xa(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=vg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class h0{constructor(e){this.Be=e,this.Le=new Map,this.ke=xr(),this.qe=Tu(),this.Qe=Tu(),this.Ke=new Je(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(_d(u))if(s===0){const h=new ue(u.path);this.We(t,h,bt.newNoDocument(h,_e.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const p=this.Xe(e),g=p?this.et(p,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=vi(s).toUint8Array()}catch(g){if(g instanceof Ky)return mo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Wd(h,o,u)}catch(g){return mo(g instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.Te===0?null:p}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Be.nt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((u,h)=>{const p=this.Ye(h);if(p){if(u.current&&_d(p.target)){const g=new ue(p.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let p=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new hc(e,t,this.Ke,this.ke,s);return this.ke=xr(),this.qe=Tu(),this.Qe=Tu(),this.Ke=new Je(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new _g,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new _g),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Tu(){return new Je(ue.comparator)}function vg(){return new Je(ue.comparator)}const d0={asc:"ASCENDING",desc:"DESCENDING"},f0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},p0={and:"AND",or:"OR"};class m0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wd(i,e){return i.useProto3Json||sc(e)?e:{value:e}}function Hu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function __(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function g0(i,e){return Hu(i,e.toTimestamp())}function er(i){return be(!!i),_e.fromTimestamp(function(t){const s=_i(t);return new pt(s.seconds,s.nanos)}(i))}function Kd(i,e){return Td(i,e).canonicalString()}function Td(i,e){const t=function(o){return new We(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function v_(i){const e=We.fromString(i);return be(S_(e)),e}function Id(i,e){return Kd(i.databaseId,e.path)}function rd(i,e){const t=v_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(w_(t))}function E_(i,e){return Kd(i.databaseId,e)}function y0(i){const e=v_(i);return e.length===4?We.emptyPath():w_(e)}function Sd(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function w_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Eg(i,e,t){return{name:Id(i,e),fields:t.value.mapValue.fields}}function _0(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(_){const w=_.code===void 0?H.UNKNOWN:m_(_.code);return new ie(w,_.message||"")}(h);t=new y_(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=rd(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):_e.min(),p=new vn({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,p),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Nu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=rd(i,s.document),u=s.readTime?er(s.readTime):_e.min(),h=bt.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Nu([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=rd(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return ye();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new a0(o,u),p=s.targetId;t=new g_(p,h)}}return t}function v0(i,e){let t;if(e instanceof Ya)t={update:Eg(i,e.key,e.value)};else if(e instanceof p_)t={delete:Id(i,e.key)};else if(e instanceof as)t={update:Eg(i,e.key,e.data),updateMask:P0(e.fieldMask)};else{if(!(e instanceof i0))return ye();t={verify:Id(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof $u)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof qu)return{fieldPath:h.field.canonicalString(),increment:p.Pe};throw ye()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:g0(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye()}(i,e.precondition)),t}function E0(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(_e.min())&&(h=er(u)),new t0(h,o.transformResults||[])}(t,e))):[]}function w0(i,e){return{documents:[E_(i,e.path)]}}function T0(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=E_(i,o);const u=function(_){if(_.length!==0)return I_(bn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(N){return{field:so(N.field),direction:A0(N.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=wd(i,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function I0(i){let e=y0(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(S){const N=T_(S);return N instanceof bn&&Xy(N)?N.getFilters():[N]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(N=>function(W){return new Ba(oo(W.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(N))}(t.orderBy));let p=null;t.limit&&(p=function(S){let N;return N=typeof S=="object"?S.value:S,sc(N)?null:N}(t.limit));let g=null;t.startAt&&(g=function(S){const N=!!S.before,j=S.values||[];return new Bu(j,N)}(t.startAt));let _=null;return t.endAt&&(_=function(S){const N=!S.before,j=S.values||[];return new Bu(j,N)}(t.endAt)),BI(e,o,h,u,p,"F",g,_)}function S0(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function T_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(i):i.fieldFilter!==void 0?function(t){return at.create(oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return bn.create(t.compositeFilter.filters.map(s=>T_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye()}}(t.compositeFilter.op))}(i):ye()}function A0(i){return d0[i]}function R0(i){return f0[i]}function C0(i){return p0[i]}function so(i){return{fieldPath:i.canonicalString()}}function oo(i){return Ct.fromServerFormat(i.fieldPath)}function I_(i){return i instanceof at?function(t){if(t.op==="=="){if(ag(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NAN"}};if(og(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ag(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NAN"}};if(og(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(t.field),op:R0(t.op),value:t.value}}}(i):i instanceof bn?function(t){const s=t.getFilters().map(o=>I_(o));return s.length===1?s[0]:{compositeFilter:{op:C0(t.op),filters:s}}}(i):ye()}function P0(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function S_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ui{constructor(e,t,s,o,u=_e.min(),h=_e.min(),p=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class k0{constructor(e){this.ht=e}}function N0(i){const e=I0({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class x0{constructor(){this.ln=new D0}addToCollectionParentIndex(e,t){return this.ln.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(yi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class D0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(We.comparator)).toArray()}}/**
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
 */const wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class vo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new vo(0)}static Qn(){return new vo(-1)}}/**
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
 */function Tg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class V0{constructor(e){this.Gn=e,this.buffer=new mt(Tg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Tg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class O0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Yn(3e5)})}}class L0{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(ic.oe);const s=new V0(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(wg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,p,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(_=Date.now(),ro()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function M0(i,e){return new L0(i,e)}/**
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
 */class b0{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class F0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class U0{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&La(s.mutation,o,Mn.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ka();return u.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=xr();const h=Oa(),p=function(){return Oa()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof as)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),La(w.mutation,_,w.mutation.getFieldMask(),pt.now())):h.set(_.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var S;return p.set(_,new F0(w,(S=h.get(_))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Oa();let o=new Je((h,p)=>h-p),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Mn.empty();w=p.applyToLocalView(_,w),s.set(g,w);const S=(o.get(p.batchId)||Ce()).add(g);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,w=g.value,S=o_();w.forEach(N=>{if(!u.has(N)){const j=d_(t.get(N),s.get(N));j!==null&&S.set(N,j),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):t_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(es());let p=-1,g=u;return h.next(_=>B.forEach(_,(w,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(N=>{g=g.insert(w,N)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ce())).next(w=>({batchId:p,changes:s_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=ka();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ka();return this.indexManager.getCollectionParents(e,u).next(p=>B.forEach(p,g=>{const _=function(S,N){return new Co(N,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((S,N)=>{h=h.insert(S,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let p=ka();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&La(w.mutation,_,Mn.empty(),pt.now()),lc(t,_)&&(p=p.insert(g,_))}),p})}}/**
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
 */class j0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return B.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:N0(o.bundledQuery),readTime:er(o.readTime)}}(t)),B.resolve()}}/**
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
 */class z0{constructor(){this.overlays=new Je(ue.comparator),this.dr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=es(),u=t.length+1,h=new ue(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=es(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const p=es(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>p.set(_,w)),!(p.size()>=o)););return B.resolve(p)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new o0(t,s));let u=this.dr.get(t);u===void 0&&(u=Ce(),this.dr.set(t,u)),this.dr.set(t,u.add(s.key))}}/**
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
 */class B0{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Gd{constructor(){this.Er=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ue(new We([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ue(new We([])),s=new wt(t,e),o=new wt(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ue.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||ue.comparator(e.key,t.key)}}/**
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
 */class $0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new s0(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.vr=this.vr.add(new wt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const p=this.Cr(h.br);u.push(p)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(ke);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],p=>{s=s.add(p.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ue(u),0);let p=new mt(ke);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.br)),!0)},h),B.resolve(this.Mr(p))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class q0{constructor(e){this.Nr=e,this.docs=function(){return new Je(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=xr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=xr();const h=t.path,p=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||wI(EI(w),s)<=0||(o.has(w.key)||lc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye()}Br(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new H0(this)}getSize(e){return B.resolve(this.size)}}class H0 extends b0{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class W0{constructor(e){this.persistence=e,this.Lr=new os(t=>zd(t),Bd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Gd,this.targetCount=0,this.Qr=vo.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),B.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Un(t),B.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Lr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Lr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.qr.containsKey(t))}}/**
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
 */class A_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ic(0),this.Ur=!1,this.Ur=!0,this.Wr=new B0,this.referenceDelegate=e(this),this.Gr=new W0(this),this.indexManager=new x0,this.remoteDocumentCache=function(o){return new q0(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new k0(t),this.jr=new j0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new $0(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new K0(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class K0 extends II{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.Zr=new Gd,this.Xr=null}static ei(e){return new Qd(e)}get ti(){if(this.Xr)return this.Xr;throw ye()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),B.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const o=ue.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,_e.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return B.or([()=>B.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Wu{constructor(e,t){this.persistence=e,this.ri=new os(s=>RI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=M0(this,t)}static ei(e,t){return new Wu(e,t)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return B.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(p=>{p||(s++,u.removeEntry(h,_e.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),B.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cu(e.data.value)),t}ir(e,t,s){return B.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Yd(e,t.fromCache,s,o)}}/**
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
 */class G0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return qw()?8:SI(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new G0;return this.ts(e,t,h).next(p=>{if(u.result=p,this.Hi)return this.ns(e,t,h,p.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(ro()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(ro()<=Re.DEBUG&&ne("QueryEngine","Query:",io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(ro()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):B.resolve())}Xi(e,t){if(hg(t))return B.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Ed(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,p);return this.ss(t,_,h,g.readTime)?this.Xi(e,Ed(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return hg(t)||o.isEqual(_e.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?B.resolve(null):(ro()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(t)),this.os(e,h,t,vI(o,-1)).next(p=>p))})}rs(e,t){let s=new mt(r_(e));return t.forEach((o,u)=>{lc(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return ro()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",io(t)),this.Zi.getDocumentsMatchingQuery(e,t,yi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class Y0{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(ke),this.cs=new os(u=>zd(u),Bd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function X0(i,e,t,s){return new Y0(i,e,t,s)}async function R_(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){p.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:p}))})})}function J0(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(p,g,_,w){const S=_.batch,N=S.keys();let j=B.resolve();return N.forEach(W=>{j=j.next(()=>w.getEntry(g,W)).next(Y=>{const $=_.docVersions.get(W);be($!==null),Y.version.compareTo($)<0&&(S.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))})}),j.next(()=>p.mutationQueue.removeMutationBatch(g,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Ce();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function C_(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Z0(i,e){const t=ve(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const p=[];e.targetChanges.forEach((w,S)=>{const N=o.get(S);if(!N)return;p.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,S).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,S)));let j=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Pt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(S,j),function(Y,$,me){return Y.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0}(N,j,w)&&p.push(t.Gr.updateTargetData(u,j))});let g=xr(),_=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),p.push(eS(u,h,e.documentUpdates).next(w=>{g=w.Is,_=w.ds})),!s.isEqual(_e.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(S=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(w)}return B.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.us=o,u))}function eS(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=xr();return t.forEach((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ne("LocalStore","Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)}),{Is:h,ds:o}})}function tS(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nS(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ui(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Ad(i,e,t){const s=ve(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Ro(h))throw h;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Ig(i,e,t){const s=ve(i);let o=_e.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const S=ve(g),N=S.cs.get(w);return N!==void 0?B.resolve(S.us.get(N)):S.Gr.getTargetData(_,w)}(s,h,Zn(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,p.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:Ce())).next(p=>(rS(s,qI(e),p),{documents:p,Es:u})))}function rS(i,e,t){let s=i.ls.get(e)||_e.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Sg{constructor(){this.activeTargetIds=YI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iS{constructor(){this._o=new Sg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Sg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sS{uo(e){}shutdown(){}}/**
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
 */class Ag{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function id(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
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
 */const oS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Lt="WebChannelConnection";class lS extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const p=id(),g=this.No(t,s.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${p}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(_,u,h),this.Lo(t,g,_,o).then(w=>(ne("RestConnection",`Received RPC '${t}' ${p}: `,w),w),w=>{throw mo("RestConnection",`RPC '${t}' ${p} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,p){return this.Oo(t,s,o,u,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=oS[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const u=id();return new Promise((h,p)=>{const g=new Uy;g.setWithCredentials(!0),g.listenOnce(jy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Ru.NO_ERROR:const w=g.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case Ru.TIMEOUT:ne(Lt,`RPC '${e}' ${u} timed out`),p(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const S=g.getStatus();if(ne(Lt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const j=N==null?void 0:N.error;if(j&&j.status&&j.message){const W=function($){const me=$.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(me)>=0?me:H.UNKNOWN}(j.status);p(new ie(W,j.message))}else p(new ie(H.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ne(Lt,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(o);ne(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=id(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=$y(),p=By(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Bo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);let N=!1,j=!1;const W=new aS({Eo:$=>{j?ne(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(N||(ne(Lt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),N=!0),ne(Lt,`RPC '${e}' stream ${o} sending:`,$),S.send($))},Ao:()=>S.close()}),Y=($,me,fe)=>{$.listen(me,Ee=>{try{fe(Ee)}catch(Te){setTimeout(()=>{throw Te},0)}})};return Y(S,Pa.EventType.OPEN,()=>{j||(ne(Lt,`RPC '${e}' stream ${o} transport opened.`),W.So())}),Y(S,Pa.EventType.CLOSE,()=>{j||(j=!0,ne(Lt,`RPC '${e}' stream ${o} transport closed`),W.Do())}),Y(S,Pa.EventType.ERROR,$=>{j||(j=!0,mo(Lt,`RPC '${e}' stream ${o} transport errored:`,$),W.Do(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),Y(S,Pa.EventType.MESSAGE,$=>{var me;if(!j){const fe=$.data[0];be(!!fe);const Ee=fe,Te=(Ee==null?void 0:Ee.error)||((me=Ee[0])===null||me===void 0?void 0:me.error);if(Te){ne(Lt,`RPC '${e}' stream ${o} received error:`,Te);const Ke=Te.status;let Ae=function(R){const P=ot[R];if(P!==void 0)return m_(P)}(Ke),x=Te.message;Ae===void 0&&(Ae=H.INTERNAL,x="Unknown error status: "+Ke+" with message "+Te.message),j=!0,W.Do(new ie(Ae,x)),S.close()}else ne(Lt,`RPC '${e}' stream ${o} received:`,fe),W.vo(fe)}}),Y(p,zy.STAT_EVENT,$=>{$.stat===pd.PROXY?ne(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===pd.NOPROXY&&ne(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.bo()},0),W}}function sd(){return typeof document<"u"?document:null}/**
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
 */function dc(i){return new m0(i,!0)}/**
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
 */class P_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class k_{constructor(e,t,s,o,u,h,p,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new P_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uS extends k_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=_0(this.serializer,e),s=function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?er(h.readTime):_e.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Sd(this.serializer),t.addTarget=function(u,h){let p;const g=h.target;if(p=_d(g)?{documents:w0(u,g)}:{query:T0(u,g).ct},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=__(u,h.resumeToken);const _=wd(u,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){p.readTime=Hu(u,h.snapshotVersion.toTimestamp());const _=wd(u,h.expectedCount);_!==null&&(p.expectedCount=_)}return p}(this.serializer,e);const s=S0(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Sd(this.serializer),t.removeTarget=e,this.c_(t)}}class cS extends k_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=E0(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Sd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>v0(this.serializer,s))};this.c_(t)}}/**
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
 */class hS extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Td(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(H.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.ko(e,Td(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class dS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Nr(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class fS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ls(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=ve(g);_.k_.add(4),await Ja(_),_.K_.set("Unknown"),_.k_.delete(4),await fc(_)}(this))})}),this.K_=new dS(s,o)}}async function fc(i){if(ls(i))for(const e of i.q_)await e(!0)}async function Ja(i){for(const e of i.q_)await e(!1)}function N_(i,e){const t=ve(i);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),ef(t)?Zd(t):Po(t).s_()&&Jd(t,e))}function Xd(i,e){const t=ve(i),s=Po(t);t.L_.delete(e),s.s_()&&x_(t,e),t.L_.size===0&&(s.s_()?s.a_():ls(t)&&t.K_.set("Unknown"))}function Jd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(i).V_(e)}function x_(i,e){i.U_.xe(e),Po(i).m_(e)}function Zd(i){i.U_=new h0({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.L_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),Po(i).start(),i.K_.F_()}function ef(i){return ls(i)&&!Po(i).i_()&&i.L_.size>0}function ls(i){return ve(i).k_.size===0}function D_(i){i.U_=void 0}async function pS(i){i.K_.set("Online")}async function mS(i){i.L_.forEach((e,t)=>{Jd(i,e)})}async function gS(i,e){D_(i),ef(i)?(i.K_.O_(e),Zd(i)):i.K_.set("Unknown")}async function yS(i,e,t){if(i.K_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.L_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.L_.delete(p),o.U_.removeTarget(p))}(i,e)}catch(s){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ku(i,s)}else if(e instanceof Nu?i.U_.$e(e):e instanceof g_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(_e.min()))try{const s=await C_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.U_.it(h);return p.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.L_.get(_);w&&u.L_.set(_,w.withResumeToken(g.resumeToken,h))}}),p.targetMismatches.forEach((g,_)=>{const w=u.L_.get(g);if(!w)return;u.L_.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),x_(u,g);const S=new ui(w.target,g,_,w.sequenceNumber);Jd(u,S)}),u.remoteSyncer.applyRemoteEvent(p)}(i,t)}catch(s){ne("RemoteStore","Failed to raise snapshot:",s),await Ku(i,s)}}async function Ku(i,e,t){if(!Ro(e))throw e;i.k_.add(1),await Ja(i),i.K_.set("Offline"),t||(t=()=>C_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await fc(i)})}function V_(i,e){return e().catch(t=>Ku(i,t,e))}async function pc(i){const e=ve(i),t=wi(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;_S(e);)try{const o=await tS(e.localStore,s);if(o===null){e.B_.length===0&&t.a_();break}s=o.batchId,vS(e,o)}catch(o){await Ku(e,o)}O_(e)&&L_(e)}function _S(i){return ls(i)&&i.B_.length<10}function vS(i,e){i.B_.push(e);const t=wi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function O_(i){return ls(i)&&!wi(i).i_()&&i.B_.length>0}function L_(i){wi(i).start()}async function ES(i){wi(i).w_()}async function wS(i){const e=wi(i);for(const t of i.B_)e.g_(t.mutations)}async function TS(i,e,t){const s=i.B_.shift(),o=Hd.from(s,e,t);await V_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await pc(i)}async function IS(i,e){e&&wi(i).f_&&await async function(s,o){if(function(h){return l0(h)&&h!==H.ABORTED}(o.code)){const u=s.B_.shift();wi(s).__(),await V_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await pc(s)}}(i,e),O_(i)&&L_(i)}async function Rg(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const s=ls(t);t.k_.add(3),await Ja(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await fc(t)}async function SS(i,e){const t=ve(i);e?(t.k_.delete(2),await fc(t)):e||(t.k_.add(2),await Ja(t),t.K_.set("Unknown"))}function Po(i){return i.W_||(i.W_=function(t,s,o){const u=ve(t);return u.b_(),new uS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:pS.bind(null,i),mo:mS.bind(null,i),po:gS.bind(null,i),R_:yS.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),ef(i)?Zd(i):i.K_.set("Unknown")):(await i.W_.stop(),D_(i))})),i.W_}function wi(i){return i.G_||(i.G_=function(t,s,o){const u=ve(t);return u.b_(),new cS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:ES.bind(null,i),po:IS.bind(null,i),p_:wS.bind(null,i),y_:TS.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await pc(i)):(await i.G_.stop(),i.B_.length>0&&(ne("RemoteStore",`Stopping write stream with ${i.B_.length} pending writes`),i.B_=[]))})),i.G_}/**
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
 */class tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new tf(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(i,e){if(Nr("AsyncQueue",`${e}: ${i}`),Ro(i))return new ie(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=ka(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Cg{constructor(){this.z_=new Je(ue.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ye():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Eo{constructor(e,t,s,o,u,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Eo(e,t,lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class AS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class RS{constructor(){this.queries=Pg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=Pg(),u.forEach((h,p)=>{for(const g of p.J_)g.onError(s)})})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Pg(){return new os(i=>n_(i),ac)}async function M_(i,e){const t=ve(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new AS,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=nf(h,`Initialization of query '${io(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&rf(t)}async function b_(i,e){const t=ve(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CS(i,e){const t=ve(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.J_)p.ta(o)&&(s=!0);h.H_=o}}s&&rf(t)}function PS(i,e,t){const s=ve(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function rf(i){i.X_.forEach(e=>{e.next()})}var Rd,kg;(kg=Rd||(Rd={})).na="default",kg.Cache="cache";class F_{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rd.Cache}}/**
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
 */class U_{constructor(e){this.key=e}}class j_{constructor(e){this.key=e}}class kS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=r_(e),this.ma=new lo(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new Cg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,S)=>{const N=o.get(w),j=lc(this.query,S)?S:null,W=!!N&&this.mutatedKeys.has(N.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;N&&j?N.data.isEqual(j.data)?W!==Y&&(s.track({type:3,doc:j}),$=!0):this.ya(N,j)||(s.track({type:2,doc:j}),$=!0,(g&&this.Va(j,g)>0||_&&this.Va(j,_)<0)&&(p=!0)):!N&&j?(s.track({type:0,doc:j}),$=!0):N&&!j&&(s.track({type:1,doc:N}),$=!0,(g||_)&&(p=!0)),$&&(j?(h=h.add(j),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:p,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,S)=>function(j,W){const Y=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return Y(j)-Y(W)}(w.type,S.type)||this.Va(w.doc,S.doc)),this.wa(s),o=o!=null&&o;const p=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new Eo(this.query,e.ma,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:p}:{ba:p}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Cg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new j_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new U_(s))}),t}va(e){this.Ea=e.Es,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Eo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class xS{constructor(e){this.key=e,this.Fa=!1}}class DS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new os(p=>n_(p),ac),this.Oa=new Map,this.Na=new Set,this.Ba=new Je(ue.comparator),this.La=new Map,this.ka=new Gd,this.qa={},this.Qa=new Map,this.Ka=vo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VS(i,e,t=!0){const s=W_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await z_(s,e,t,!0),o}async function OS(i,e){const t=W_(i);await z_(t,e,!0,!1)}async function z_(i,e,t,s){const o=await nS(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await LS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&N_(i.remoteStore,o),p}async function LS(i,e,t,s,o){i.Ua=(S,N,j)=>async function(Y,$,me,fe){let Ee=$.view.ga(me);Ee.ss&&(Ee=await Ig(Y.localStore,$.query,!1).then(({documents:x})=>$.view.ga(x,Ee)));const Te=fe&&fe.targetChanges.get($.targetId),Ke=fe&&fe.targetMismatches.get($.targetId)!=null,Ae=$.view.applyChanges(Ee,Y.isPrimaryClient,Te,Ke);return xg(Y,$.targetId,Ae.ba),Ae.snapshot}(i,S,N,j);const u=await Ig(i.localStore,e,!0),h=new kS(e,u.Es),p=h.ga(u.documents),g=Xa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(p,i.isPrimaryClient,g);xg(i,t,_.ba);const w=new NS(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),_.snapshot}async function MS(i,e,t){const s=ve(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!ac(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ad(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Xd(s.remoteStore,o.targetId),Cd(s,o.targetId)}).catch(Ao)):(Cd(s,o.targetId),await Ad(s.localStore,o.targetId,!0))}async function bS(i,e){const t=ve(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xd(t.remoteStore,s.targetId))}async function FS(i,e,t){const s=HS(i);try{const o=await function(h,p){const g=ve(h),_=pt.now(),w=p.reduce((j,W)=>j.add(W.key),Ce());let S,N;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let W=xr(),Y=Ce();return g.hs.getEntries(j,w).next($=>{W=$,W.forEach((me,fe)=>{fe.isValidDocument()||(Y=Y.add(me))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,W)).next($=>{S=$;const me=[];for(const fe of p){const Ee=r0(fe,S.get(fe.key).overlayedDocument);Ee!=null&&me.push(new as(fe.key,Ee,Gy(Ee.value.mapValue),Rr.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,me,p)}).next($=>{N=$;const me=$.applyToLocalDocumentSet(S,Y);return g.documentOverlayCache.saveOverlays(j,$.batchId,me)})}).then(()=>({batchId:N.batchId,changes:s_(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let _=h.qa[h.currentUser.toKey()];_||(_=new Je(ke)),_=_.insert(p,g),h.qa[h.currentUser.toKey()]=_}(s,o.batchId,t),await Za(s,o.changes),await pc(s.remoteStore)}catch(o){const u=nf(o,"Failed to persist write");t.reject(u)}}async function B_(i,e){const t=ve(i);try{const s=await Z0(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.La.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await Za(t,s,e)}catch(s){await Ao(s)}}function Ng(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const p=h.view.ea(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=ve(h);g.onlineState=p;let _=!1;g.queries.forEach((w,S)=>{for(const N of S.J_)N.ea(p)&&(_=!0)}),_&&rf(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function US(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),u=o&&o.key;if(u){let h=new Je(ue.comparator);h=h.insert(u,bt.newNoDocument(u,_e.min()));const p=Ce().add(u),g=new hc(_e.min(),new Map,new Je(ke),h,p);await B_(s,g),s.Ba=s.Ba.remove(u),s.La.delete(e),sf(s)}else await Ad(s.localStore,e,!1).then(()=>Cd(s,e,t)).catch(Ao)}async function jS(i,e){const t=ve(i),s=e.batch.batchId;try{const o=await J0(t.localStore,e);q_(t,s,null),$_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Ao(o)}}async function zS(i,e,t){const s=ve(i);try{const o=await function(h,p){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,p).next(S=>(be(S!==null),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);q_(s,e,t),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Ao(o)}}function $_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function q_(i,e,t){const s=ve(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||H_(i,s)})}function H_(i,e){i.Na.delete(e.path.canonicalString());const t=i.Ba.get(e);t!==null&&(Xd(i.remoteStore,t),i.Ba=i.Ba.remove(e),i.La.delete(t),sf(i))}function xg(i,e,t){for(const s of t)s instanceof U_?(i.ka.addReference(s.key,e),BS(i,s)):s instanceof j_?(ne("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||H_(i,s.key)):ye()}function BS(i,e){const t=e.key,s=t.path.canonicalString();i.Ba.get(t)||i.Na.has(s)||(ne("SyncEngine","New document in limbo: "+t),i.Na.add(s),sf(i))}function sf(i){for(;i.Na.size>0&&i.Ba.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new ue(We.fromString(e)),s=i.Ka.next();i.La.set(s,new xS(t)),i.Ba=i.Ba.insert(t,s),N_(i.remoteStore,new ui(Zn($d(t.path)),s,"TargetPurposeLimboResolution",ic.oe))}}async function Za(i,e,t){const s=ve(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((p,g)=>{h.push(s.Ua(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=Yd.zi(g.targetId,_);u.push(S)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const w=ve(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>B.forEach(_,N=>B.forEach(N.Wi,j=>w.persistence.referenceDelegate.addReference(S,N.targetId,j)).next(()=>B.forEach(N.Gi,j=>w.persistence.referenceDelegate.removeReference(S,N.targetId,j)))))}catch(S){if(!Ro(S))throw S;ne("LocalStore","Failed to update sequence numbers: "+S)}for(const S of _){const N=S.targetId;if(!S.fromCache){const j=w.us.get(N),W=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(W);w.us=w.us.insert(N,Y)}}}(s.localStore,u))}async function $S(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const s=await R_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(p=>{p.forEach(g=>{g.reject(new ie(H.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Ts)}}function qS(i,e){const t=ve(i),s=t.La.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const p=t.xa.get(h);o=o.unionWith(p.view.fa)}return o}}function W_(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=US.bind(null,e),e.Ma.R_=CS.bind(null,e.eventManager),e.Ma.Wa=PS.bind(null,e.eventManager),e}function HS(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zS.bind(null,e),e}class Gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}ja(e){return new A_(Qd.ei,this.serializer)}za(e){return new iS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gu.provider={build:()=>new Gu};class WS extends Gu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Wu);const s=this.persistence.referenceDelegate.garbageCollector;return new O0(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new A_(s=>Wu.ei(s,t),this.serializer)}}class Pd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ng(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$S.bind(null,this.syncEngine),await SS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RS}()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=function(u){return new lS(u)}(e.databaseInfo);return function(u,h,p,g){return new hS(u,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new fS(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>Ng(this.syncEngine,t,0),function(){return Ag.p()?new Ag:new sS}())}createSyncEngine(e,t){return function(o,u,h,p,g,_,w){const S=new DS(o,u,h,p,g,_);return w&&(S.$a=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ve(o);ne("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ja(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pd.provider={build:()=>new Pd};/**
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
 */class K_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class KS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Hy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function od(i,e){i.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await R_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Dg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await GS(i);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Rg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Rg(e.remoteStore,o)),i._onlineComponents=e}async function GS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;mo("Error using user provided cache. Falling back to memory cache: "+t),await od(i,new Gu)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await od(i,new WS(void 0));return i._offlineComponents}async function G_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Dg(i,i._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Dg(i,new Pd))),i._onlineComponents}function QS(i){return G_(i).then(e=>e.syncEngine)}async function kd(i){const e=await G_(i),t=e.eventManager;return t.onListen=VS.bind(null,e.syncEngine),t.onUnlisten=MS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bS.bind(null,e.syncEngine),t}function YS(i,e,t={}){const s=new di;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,p,g,_){const w=new K_({next:N=>{w.eu(),h.enqueueAndForget(()=>b_(u,S)),N.fromCache&&g.source==="server"?_.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),S=new F_(p,w,{includeMetadataChanges:!0,ua:!0});return M_(u,S)}(await kd(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Q_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Vg=new Map;/**
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
 */function Y_(i,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function XS(i,e,t,s){if(e===!0&&s===!0)throw new ie(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Og(i){if(!ue.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Lg(i){if(ue.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function mc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye()}function ts(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(i);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class Mg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cI;switch(s.type){case"firstParty":return new pI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Vg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Vg.delete(t),s.terminate())}(this),Promise.resolve()}}function JS(i,e,t,s={}){var o;const u=(i=ts(i,gc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Mt.MOCK_USER;else{p=Mw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(_)}i._authCredentials=new hI(new qy(p,g))}}/**
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
 */class Ii{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ii(this.firestore,e,this._query)}}class ln{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class fi extends Ii{constructor(e,t,s){super(e,t,$d(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new ue(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function xu(i,e,...t){if(i=Ut(i),Y_("collection","path",e),i instanceof gc){const s=We.fromString(e,...t);return Lg(s),new fi(i,null,s)}{if(!(i instanceof ln||i instanceof fi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Lg(s),new fi(i.firestore,null,s)}}function ZS(i,e,...t){if(i=Ut(i),arguments.length===1&&(e=Hy.newId()),Y_("doc","path",e),i instanceof gc){const s=We.fromString(e,...t);return Og(s),new ln(i,null,new ue(s))}{if(!(i instanceof ln||i instanceof fi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Og(s),new ln(i.firestore,i instanceof fi?i.converter:null,new ue(s))}}/**
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
 */class bg{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new P_(this,"async_queue_retry"),this.fu=()=>{const s=sd();s&&ne("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new di;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ro(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw Nr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=tf.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&ye()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function Fg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class Ha extends gc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new bg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bg(e),this._firestoreClient=void 0,await e}}}function X_(i,e){const t=typeof i=="object"?i:rc(),s=typeof i=="string"?i:"(default)",o=Io(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Ty("firestore");u&&JS(o,...u)}return o}function of(i){if(i._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||eA(i),i._firestoreClient}function eA(i){var e,t,s;const o=i._freezeSettings(),u=function(p,g,_,w){return new kI(p,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Q_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new KS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(Pt.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class af{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class J_{constructor(e){this._methodName=e}}/**
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
 */class lf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class uf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const tA=/^__.*__$/;class nA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}function Z_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class cf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Qu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Z_(this.Mu)&&tA.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class rA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}$u(e,t,s,o=!1){return new cf({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new rA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function iA(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);rv("Data must be an object, but it was:",h,s);const p=tv(s,h);let g,_;if(u.merge)g=new Mn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const S of u.mergeFields){const N=oA(e,S,t);if(!h.contains(N))throw new ie(H.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);lA(w,N)||w.push(N)}g=new Mn(w),_=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,_=h.fieldTransforms;return new nA(new vn(p),g,_)}function sA(i,e,t,s=!1){return hf(t,i.$u(s?4:3,e))}function hf(i,e){if(nv(i=Ut(i)))return rv("Unsupported field value:",e,i),tv(i,e);if(i instanceof J_)return function(s,o){if(!Z_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let g=hf(p,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return XI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Hu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hu(o.serializer,u)}}if(s instanceof lf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wo)return{bytesValue:__(o.serializer,s._byteString)};if(s instanceof ln){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Kd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof uf)return function(h,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.qu("VectorValues must only contain numeric values.");return qd(p.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${mc(s)}`)}(i,e)}function tv(i,e){const t={};return Wy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(i,(s,o)=>{const u=hf(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function nv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof lf||i instanceof wo||i instanceof ln||i instanceof J_||i instanceof uf)}function rv(i,e,t){if(!nv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=mc(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function oA(i,e,t){if((e=Ut(e))instanceof af)return e._internalPath;if(typeof e=="string")return iv(i,e);throw Qu("Field path arguments must be of type string or ",i,!1,void 0,t)}const aA=new RegExp("[~\\*/\\[\\]]");function iv(i,e,t){if(e.search(aA)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new af(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Qu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(H.INVALID_ARGUMENT,p+i+g)}function lA(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class sv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uA extends sv{data(){return super.data()}}function df(i,e){return typeof e=="string"?iv(i,e):e instanceof af?e._internalPath:e._delegate._internalPath}/**
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
 */function ov(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ff{}class av extends ff{}function Ug(i,e,...t){let s=[];e instanceof ff&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof mf).length,p=u.filter(g=>g instanceof pf).length;if(h>1||h>0&&p>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class pf extends av{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new pf(e,t,s)}_apply(e){const t=this._parse(e);return lv(e._query,t),new Ii(e.firestore,e.converter,vd(e._query,t))}_parse(e){const t=ev(e.firestore);return function(u,h,p,g,_,w,S){let N;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Bg(S,w);const j=[];for(const W of S)j.push(zg(g,u,W));N={arrayValue:{values:j}}}else N=zg(g,u,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Bg(S,w),N=sA(p,h,S,w==="in"||w==="not-in");return at.create(_,w,N)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mf extends ff{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const g of p)lv(h,g),h=vd(h,g)}(e._query,t),new Ii(e.firestore,e.converter,vd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gf extends av{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ba(u,h)}(e._query,this._field,this._direction);return new Ii(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Co(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function jg(i,e="asc"){const t=e,s=df("orderBy",i);return gf._create(s,t)}function zg(i,e,t){if(typeof(t=Ut(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t_(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!ue.isDocumentKey(s))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sg(i,new ue(s))}if(t instanceof ln)return sg(i,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function Bg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lv(i,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class cA{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ss(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new uf(u)}convertGeoPoint(e){return new lf(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=oc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const t=_i(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);be(S_(s));const o=new ja(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function hA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uv extends sv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Du extends uv{data(e={}){return super.data(e)}}class cv{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new xa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new xa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const g=new Du(o._firestore,o._userDataWriter,p.doc.key,p.doc,new xa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new Du(o._firestore,o._userDataWriter,p.doc.key,p.doc,new xa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:dA(p.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}class yf extends cA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,t)}}function $g(i){i=ts(i,Ii);const e=ts(i.firestore,Ha),t=of(e),s=new yf(e);return ov(i._query),YS(t,i._query).then(o=>new cv(e,s,i,o))}function fA(i,e){const t=ts(i.firestore,Ha),s=ZS(i),o=hA(i.converter,e);return mA(t,[iA(ev(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Rr.exists(!1))]).then(()=>s)}function pA(i,...e){var t,s,o;i=Ut(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Fg(e[h])||(u=e[h],h++);const p={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Fg(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,_,w;if(i instanceof ln)_=ts(i.firestore,Ha),w=$d(i._key.path),g={next:S=>{e[h]&&e[h](gA(_,i,S))},error:e[h+1],complete:e[h+2]};else{const S=ts(i,Ii);_=ts(S.firestore,Ha),w=S._query;const N=new yf(_);g={next:j=>{e[h]&&e[h](new cv(_,N,S,j))},error:e[h+1],complete:e[h+2]},ov(i._query)}return function(N,j,W,Y){const $=new K_(Y),me=new F_(j,$,W);return N.asyncQueue.enqueueAndForget(async()=>M_(await kd(N),me)),()=>{$.eu(),N.asyncQueue.enqueueAndForget(async()=>b_(await kd(N),me))}}(of(_),w,p,g)}function mA(i,e){return function(s,o){const u=new di;return s.asyncQueue.enqueueAndForget(async()=>FS(await QS(s),o,u)),u.promise}(of(i),e)}function gA(i,e,t){const s=t.docs.get(e._key),o=new yf(i);return new uv(i,o,e._key,s,new xa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(Ti),kr(new Cr("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Ha(new dI(s.getProvider("auth-internal")),new gI(s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Zt(Zm,"4.7.6",e),Zt(Zm,"4.7.6","esm2017")})();var yA="firebase",_A="11.2.0";/**
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
 */Zt(yA,_A,"app");function _f(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vA=hv,dv=new is("auth","Firebase",hv());/**
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
 */const Yu=new nc("@firebase/auth");function EA(i,...e){Yu.logLevel<=Re.WARN&&Yu.warn(`Auth (${Ti}): ${i}`,...e)}function Vu(i,...e){Yu.logLevel<=Re.ERROR&&Yu.error(`Auth (${Ti}): ${i}`,...e)}/**
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
 */function Fn(i,...e){throw vf(i,...e)}function tr(i,...e){return vf(i,...e)}function fv(i,e,t){const s=Object.assign(Object.assign({},vA()),{[e]:t});return new is("auth","Firebase",s).create(e,{appName:i.name})}function pi(i){return fv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return dv.create(i,...e)}function pe(i,e,...t){if(!i)throw vf(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Vu(e),new Error(e)}function Dr(i,e){i||Ir(e)}/**
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
 */function Nd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wA(){return qg()==="http:"||qg()==="https:"}function qg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function TA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wA()||zw()||"connection"in navigator)?navigator.onLine:!0}function IA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class el{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=bw()||Bw()}get(){return TA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(i,e){Dr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class pv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AA=new el(3e4,6e4);function us(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Si(i,e,t,s,o={}){return mv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Ga(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return jw()||(_.referrerPolicy="no-referrer"),pv.fetch()(gv(i,i.config.apiHost,t,p),_)})}async function mv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},SA),e);try{const o=new CA(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Su(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Su(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Su(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw fv(i,w,_);Fn(i,w)}}catch(o){if(o instanceof ir)throw o;Fn(i,"network-request-failed",{message:String(o)})}}async function yc(i,e,t,s,o={}){const u=await Si(i,e,t,s,o);return"mfaPendingCredential"in u&&Fn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function gv(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Ef(i.config,o):`${i.config.apiScheme}://${o}`}function RA(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),AA.get())})}}function Su(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=tr(i,e,s);return o.customData._tokenResponse=t,o}function Hg(i){return i!==void 0&&i.enterprise!==void 0}class PA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kA(i,e){return Si(i,"GET","/v2/recaptchaConfig",us(i,e))}/**
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
 */async function NA(i,e){return Si(i,"POST","/v1/accounts:delete",e)}async function yv(i,e){return Si(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(i,e=!1){const t=Ut(i),s=await t.getIdToken(e),o=wf(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(ad(o.auth_time)),issuedAtTime:Ma(ad(o.iat)),expirationTime:Ma(ad(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ad(i){return Number(i)*1e3}function wf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=vy(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wg(i){const e=wf(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ir&&DA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function DA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class VA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Wa(i,yv(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?_v(u.providerUserInfo):[],p=LA(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(p!=null&&p.length),w=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new xd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,S)}async function OA(i){const e=Ut(i);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function _v(i){return i.map(e=>{var{providerId:t}=e,s=_f(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function MA(i,e){const t=await mv(i,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=gv(i,o,"/v1/token",`key=${u}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",pv.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bA(i,e){return Si(i,"POST","/v2/accounts:revokeToken",us(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Wg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await MA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function ii(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new xd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xA(this,e)}reload(){return OA(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Xu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(pi(this.auth));const e=await this.getIdToken();return await Wa(this,NA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,_,w;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(p=t.tenantId)!==null&&p!==void 0?p:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,fe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Ee,emailVerified:Te,isAnonymous:Ke,providerData:Ae,stsTokenManager:x}=t;pe(Ee&&x,e,"internal-error");const I=uo.fromJSON(this.name,x);pe(typeof Ee=="string",e,"internal-error"),ii(S,e.name),ii(N,e.name),pe(typeof Te=="boolean",e,"internal-error"),pe(typeof Ke=="boolean",e,"internal-error"),ii(j,e.name),ii(W,e.name),ii(Y,e.name),ii($,e.name),ii(me,e.name),ii(fe,e.name);const R=new Sr({uid:Ee,auth:e,email:N,emailVerified:Te,displayName:S,isAnonymous:Ke,photoURL:W,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:me,lastLoginAt:fe});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(P=>Object.assign({},P))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Sr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Xu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_v(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new uo;p.updateFromIdToken(s);const g=new Sr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Kg=new Map;function Ar(i){Dr(i instanceof Function,"Expected a class definition");let e=Kg.get(i);return e?(Dr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Kg.set(i,e),e)}/**
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
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vv.type="NONE";const Gg=vv;/**
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
 */function Ou(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ar(Gg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(Gg);const h=Ou(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const w=await _._get(h);if(w){const S=Sr._fromJSON(e,w);_!==u&&(p=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new co(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function Qg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(Rv(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Sv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ev(i=Ft()){return/firefox\//i.test(i)}function wv(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(i=Ft()){return/crios\//i.test(i)}function Iv(i=Ft()){return/iemobile/i.test(i)}function Sv(i=Ft()){return/android/i.test(i)}function Av(i=Ft()){return/blackberry/i.test(i)}function Rv(i=Ft()){return/webos/i.test(i)}function Tf(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function FA(i=Ft()){var e;return Tf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UA(){return $w()&&document.documentMode===10}function Cv(i=Ft()){return Tf(i)||Sv(i)||Rv(i)||Av(i)||/windows phone/i.test(i)||Iv(i)}/**
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
 */function Pv(i,e=[]){let t;switch(i){case"Browser":t=Qg(Ft());break;case"Worker":t=`${Qg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${s}`}/**
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
 */class jA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function zA(i,e={}){return Si(i,"GET","/v2/passwordPolicy",us(i,e))}/**
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
 */const BA=6;class $A{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:BA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class qA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new jA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yv(this,{idToken:e}),s=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(pi(this));const t=e?Ut(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zA(this),t=new $A(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await bA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&EA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ko(i){return Ut(i)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ry(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HA(i){_c=i}function kv(i){return _c.loadJS(i)}function WA(){return _c.recaptchaEnterpriseScript}function KA(){return _c.gapiScript}function GA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class QA{constructor(){this.enterprise=new YA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class YA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const XA="recaptcha-enterprise",Nv="NO_RECAPTCHA";class JA{constructor(e){this.type=XA,this.auth=ko(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{kA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new PA(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,h,p){const g=window.grecaptcha;Hg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Nv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&Hg(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=WA();g.length!==0&&(g+=p),kv(g).then(()=>{o(p,u,h)}).catch(_=>{h(_)})}}).catch(p=>{h(p)})})}}async function Xg(i,e,t,s=!1,o=!1){const u=new JA(i);let h;if(o)h=Nv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Jg(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Xg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Xg(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(h)})}/**
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
 */function ZA(i,e){const t=Io(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Uu(u,e??{}))return o;Fn(o,"already-initialized")}return t.initialize({options:e})}function eR(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tR(i,e,t){const s=ko(i);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=xv(e),{host:h,port:p}=nR(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),rR()}function xv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nR(i){const e=xv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Zg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Zg(h)}}}function Zg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function rR(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class If{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function iR(i,e){return Si(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sR(i,e){return yc(i,"POST","/v1/accounts:signInWithPassword",us(i,e))}/**
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
 */async function oR(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",us(i,e))}async function aR(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",us(i,e))}/**
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
 */class Ka extends If{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ka(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,t,"signInWithPassword",sR);case"emailLink":return oR(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,s,"signUpPassword",iR);case"emailLink":return aR(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ho(i,e){return yc(i,"POST","/v1/accounts:signInWithIdp",us(i,e))}/**
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
 */const lR="http://localhost";class rs extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=_f(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:lR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
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
 */function uR(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cR(i){const e=Ra(Ca(i)).link,t=e?Ra(Ca(e)).deep_link_id:null,s=Ra(Ca(i)).deep_link_id;return(s?Ra(Ca(s)).link:null)||s||t||e||i}class Sf{constructor(e){var t,s,o,u,h,p;const g=Ra(Ca(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,S=uR((o=g.mode)!==null&&o!==void 0?o:null);pe(_&&w&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=cR(e);try{return new Sf(t)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Sf.parseLink(t);return pe(s,"argument-error"),Ka._fromEmailAndCode(e,s.code,s.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends Dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class si extends tl{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
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
 */class oi extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
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
 */class ai extends tl{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
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
 */class li extends tl{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return li.credential(t,s)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
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
 */class To{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Sr._fromIdTokenResponse(e,s,o),h=ey(s);return new To({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ey(s);return new To({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ey(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Ju extends ir{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ju(e,t,s,o)}}function Vv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(i,u,e,s):u})}async function hR(i,e,t=!1){const s=await Wa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return To._forOperation(i,"link",s)}/**
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
 */async function dR(i,e,t=!1){const{auth:s}=i;if(Jn(s.app))return Promise.reject(pi(s));const o="reauthenticate";try{const u=await Wa(i,Vv(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=wf(u.idToken);pe(h,s,"internal-error");const{sub:p}=h;return pe(i.uid===p,s,"user-mismatch"),To._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function Ov(i,e,t=!1){if(Jn(i.app))return Promise.reject(pi(i));const s="signIn",o=await Vv(i,s,e),u=await To._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function fR(i,e){return Ov(ko(i),e)}/**
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
 */async function pR(i){const e=ko(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function mR(i,e,t){return Jn(i.app)?Promise.reject(pi(i)):fR(Ut(i),No.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&pR(i),s})}function gR(i,e,t,s){return Ut(i).onIdTokenChanged(e,t,s)}function yR(i,e,t){return Ut(i).beforeAuthStateChanged(e,t)}const Zu="__sak";/**
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
 */class Lv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _R=1e3,vR=10;class Mv extends Lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);UA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,vR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mv.type="LOCAL";const ER=Mv;/**
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
 */class bv extends Lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bv.type="SESSION";const Fv=bv;/**
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
 */function wR(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,u)),g=await wR(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function Af(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class TR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const _=Af("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const N=S;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function IR(i){nr().location.href=i}/**
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
 */function Uv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AR(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function RR(){return Uv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",CR=1,ec="firebaseLocalStorage",zv="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ec(i,e){return i.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function PR(){const i=indexedDB.deleteDatabase(jv);return new nl(i).toPromise()}function Dd(){const i=indexedDB.open(jv,CR);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ec,{keyPath:zv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ec)?e(s):(s.close(),await PR(),e(await Dd()))})})}async function ty(i,e,t){const s=Ec(i,!0).put({[zv]:e,value:t});return new nl(s).toPromise()}async function kR(i,e){const t=Ec(i,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function ny(i,e){const t=Ec(i,!0).delete(e);return new nl(t).toPromise()}const NR=800,xR=3;class Bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>xR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new TR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await ty(e,Zu,"1"),await ny(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ty(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ec(o,!1).getAll();return new nl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bv.type="LOCAL";const DR=Bv;new el(3e4,6e4);/**
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
 */function VR(i,e){return e?Ar(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Rf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OR(i){return Ov(i.auth,new Rf(i),i.bypassAuthState)}function LR(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),dR(t,new Rf(i),i.bypassAuthState)}async function MR(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),hR(t,new Rf(i),i.bypassAuthState)}/**
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
 */class $v{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return LR;default:Fn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bR=new el(2e3,1e4);class ao extends $v{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bR.get())};e()}}ao.currentPopupAction=null;/**
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
 */const FR="pendingRedirect",Lu=new Map;class UR extends $v{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await jR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jR(i,e){const t=$R(e),s=BR(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function zR(i,e){Lu.set(i._key(),e)}function BR(i){return Ar(i._redirectPersistence)}function $R(i){return Ou(FR,i.config.apiKey,i.name)}async function qR(i,e,t=!1){if(Jn(i.app))return Promise.reject(pi(i));const s=ko(i),o=VR(s,e),h=await new UR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const HR=10*60*1e3;class WR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ry(e))}saveEventToCache(e){this.cachedEventUids.add(ry(e)),this.lastProcessedEventTime=Date.now()}}function ry(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function qv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(i);default:return!1}}/**
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
 */async function GR(i,e={}){return Si(i,"GET","/v1/projects",e)}/**
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
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function XR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await GR(i);for(const t of e)try{if(JR(t))return}catch{}Fn(i,"unauthorized-domain")}function JR(i){const e=Nd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!YR.test(t))return!1;if(QR.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const ZR=new el(3e4,6e4);function iy(){const i=nr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function eC(i){return new Promise((e,t)=>{var s,o,u;function h(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),t(tr(i,"network-request-failed"))},timeout:ZR.get()})}if(!((o=(s=nr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=nr().gapi)===null||u===void 0)&&u.load)h();else{const p=GA("iframefcb");return nr()[p]=()=>{gapi.load?h():t(tr(i,"network-request-failed"))},kv(`${KA()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function tC(i){return Mu=Mu||eC(i),Mu}/**
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
 */const nC=new el(5e3,15e3),rC="__/auth/iframe",iC="emulator/auth/iframe",sC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aC(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ef(e,iC):`https://${i.config.authDomain}/${rC}`,s={apiKey:e.apiKey,appName:i.name,v:Ti},o=oC.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ga(s).slice(1)}`}async function lC(i){const e=await tC(i),t=nr().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:aC(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(i,"network-request-failed"),p=nr().setTimeout(()=>{u(h)},nC.get());function g(){nr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const uC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cC=500,hC=600,dC="_blank",fC="http://localhost";class sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pC(i,e,t,s=cC,o=hC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},uC),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ft().toLowerCase();t&&(p=Tv(_)?dC:t),Ev(_)&&(e=e||fC,g.scrollbars="yes");const w=Object.entries(g).reduce((N,[j,W])=>`${N}${j}=${W},`,"");if(FA(_)&&p!=="_self")return mC(e||"",p),new sy(null);const S=window.open(e||"",p,w);pe(S,i,"popup-blocked");try{S.focus()}catch{}return new sy(S)}function mC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const gC="__/auth/handler",yC="emulator/auth/handler",_C=encodeURIComponent("fac");async function oy(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ti,eventId:o};if(e instanceof Dv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Yw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof tl){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await i._getAppCheckToken(),_=g?`#${_C}=${encodeURIComponent(g)}`:"";return`${vC(i)}?${Ga(p).slice(1)}${_}`}function vC({config:i}){return i.emulator?Ef(i,yC):`https://${i.authDomain}/${gC}`}/**
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
 */const ld="webStorageSupport";class EC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=qR,this._overrideRedirectResult=zR}async _openPopup(e,t,s,o){var u;Dr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await oy(e,t,s,Nd(),o);return pC(e,h,Af())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await oy(e,t,s,Nd(),o);return IR(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lC(e),s=new WR(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ld];h!==void 0&&t(!!h),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cv()||wv()||Tf()}}const wC=EC;var ay="@firebase/auth",ly="1.8.2";/**
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
 */class TC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SC(i){kr(new Cr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pv(i)},_=new qA(s,o,u,g);return eR(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),kr(new Cr("auth-internal",e=>{const t=ko(e.getProvider("auth").getImmediate());return(s=>new TC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(ay,ly,IC(i)),Zt(ay,ly,"esm2017")}/**
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
 */const AC=5*60,RC=Sy("authIdTokenMaxAge")||AC;let uy=null;const CC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RC)return;const o=t==null?void 0:t.token;uy!==o&&(uy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Hv(i=rc()){const e=Io(i,"auth");if(e.isInitialized())return e.getImmediate();const t=ZA(i,{popupRedirectResolver:wC,persistence:[DR,ER,Fv]}),s=Sy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=CC(u.toString());yR(t,h,()=>h(t.currentUser)),gR(t,p=>h(p))}}const o=wy("auth");return o&&tR(t,`http://${o}`),t}function PC(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}HA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=tr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",PC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SC("Browser");/**
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
 */class kC{constructor(e,t){this._delegate=e,this.firebase=t,ba(e,new Cr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),bd(this._delegate)))}_getService(e,t=mi){var s;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((s=o.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:t})}_removeServiceInstance(e,t=mi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ba(this._delegate,e)}_addOrOverwriteComponent(e){xy(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const NC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},cy=new is("app-compat","Firebase",NC);/**
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
 */function xC(i){const e={},t={__esModule:!0,initializeApp:u,app:o,registerVersion:Zt,setLogLevel:Ly,onLog:Oy,apps:null,SDK_VERSION:Ti,INTERNAL:{registerComponent:p,removeApp:s,useAsService:g,modularAPIs:uI}};t.default=t,Object.defineProperty(t,"apps",{get:h});function s(_){delete e[_]}function o(_){if(_=_||mi,!qm(e,_))throw cy.create("no-app",{appName:_});return e[_]}o.App=i;function u(_,w={}){const S=Qa(_,w);if(qm(e,S.name))return e[S.name];const N=new i(S,t);return e[S.name]=N,N}function h(){return Object.keys(e).map(_=>e[_])}function p(_){const w=_.name,S=w.replace("-compat","");if(kr(_)&&_.type==="PUBLIC"){const N=(j=o())=>{if(typeof j[S]!="function")throw cy.create("invalid-app-argument",{appName:w});return j[S]()};_.serviceProps!==void 0&&Fu(N,_.serviceProps),t[S]=N,i.prototype[S]=function(...j){return this._getService.bind(this,w).apply(this,_.multipleInstances?j:[])}}return _.type==="PUBLIC"?t[S]:null}function g(_,w){return w==="serverAuth"?null:w}return t}/**
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
 */function Wv(){const i=xC(kC);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:Wv,extendNamespace:e,createSubscribe:Ry,ErrorFactory:is,deepExtend:Fu});function e(t){Fu(i,t)}return i}const DC=Wv();/**
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
 */const hy=new nc("@firebase/app-compat"),VC="@firebase/app-compat",OC="0.2.48";/**
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
 */function LC(i){Zt(VC,OC,i)}/**
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
 */try{const i=Ey();if(i.firebase!==void 0){hy.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&hy.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const MC=DC;LC();var bC="firebase",FC="11.2.0";/**
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
 */MC.registerVersion(bC,FC,"app-compat");var no={};const UC={apiKey:no.REACT_APP_FIREBASE_API_KEY,authDomain:no.REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:no.REACT_APP_FIREBASE_PROJECT_ID,storageBucket:no.REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:no.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:no.REACT_APP_FIREBASE_APP_ID},jC=()=>{const i=Qa(UC);return{auth:Hv(i),db:X_(i)}},{db:ud}=jC();function zC(){const[i,e]=ft.useState({total:0,success:0,failed:0,pending:0}),[t,s]=ft.useState([]),[o,u]=ft.useState(!0),[h,p]=ft.useState(""),[,g]=ft.useState([]);ft.useEffect(()=>{_(),w()},[]),ft.useEffect(()=>{const N=Ug(xu(ud,"verification_logs"),jg("createdAt","desc")),j=pA(N,W=>{const Y=W.docs.map($=>({id:$.id,...$.data()}));g(Y)});return()=>j()},[]);const _=async()=>{try{const N=xu(ud,"verification_logs"),W=(await $g(N)).docs.map(fe=>fe.data()),Y=W.length,$=W.filter(fe=>fe.status==="success").length,me=W.filter(fe=>fe.status==="failed").length;e({total:Y,success:$,failed:me,pending:Y-($+me)})}catch(N){console.error("Error fetching stats:",N)}},w=async()=>{try{const N=xu(ud,"voters"),j=Ug(N,jg("created_at","desc")),Y=(await $g(j)).docs.map($=>({id:$.id,...$.data()}));s(Y)}catch(N){console.error("Error fetching voters:",N)}finally{u(!1)}},S=t.filter(N=>N.full_name.toLowerCase().includes(h.toLowerCase())||N.aadhaar_id.includes(h)||N.electoral_roll_number.includes(h));return z.jsxs("div",{className:"space-y-6",children:[z.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[z.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Staff Dashboard"}),z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[z.jsxs("div",{className:"bg-white/5 rounded-lg p-6",children:[z.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Recent Verifications"}),z.jsxs("div",{className:"space-y-4",children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center space-x-3",children:[z.jsx(cd,{className:"h-5 w-5 text-green-400"}),z.jsx("span",{children:"Successful Verification"})]}),z.jsx("span",{className:"text-sm text-white/60",children:"2 minutes ago"})]}),z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center space-x-3",children:[z.jsx(my,{className:"h-5 w-5 text-red-400"}),z.jsx("span",{children:"Failed Verification"})]}),z.jsx("span",{className:"text-sm text-white/60",children:"5 minutes ago"})]})]})]}),z.jsxs("div",{className:"bg-white/5 rounded-lg p-6",children:[z.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Statistics"}),z.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[z.jsxs("div",{children:[z.jsx("div",{className:"text-3xl font-bold text-green-400",children:"85%"}),z.jsx("div",{className:"text-sm text-white/60",children:"Success Rate"})]}),z.jsxs("div",{children:[z.jsx("div",{className:"text-3xl font-bold text-blue-400",children:"150"}),z.jsx("div",{className:"text-sm text-white/60",children:"Total Verifications"})]})]})]})]})]}),z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[z.jsx(Au,{title:"Total Voters",value:i.total,icon:z.jsx(gy,{className:"h-6 w-6"}),className:"bg-blue-500/10 text-blue-500"}),z.jsx(Au,{title:"Verified",value:i.success,icon:z.jsx(cd,{className:"h-6 w-6"}),className:"bg-green-500/10 text-green-500"}),z.jsx(Au,{title:"Failed",value:i.failed,icon:z.jsx(Rw,{className:"h-6 w-6"}),className:"bg-red-500/10 text-red-500"}),z.jsx(Au,{title:"Pending",value:i.pending,icon:z.jsx(Iw,{className:"h-6 w-6"}),className:"bg-yellow-500/10 text-yellow-500"})]}),z.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-between items-center",children:[z.jsxs("div",{className:"relative flex-1 max-w-md",children:[z.jsx(vw,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50"}),z.jsx("input",{type:"text",placeholder:"Search voters...",value:h,onChange:N=>p(N.target.value),className:"w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),z.jsxs("div",{className:"flex gap-2",children:[z.jsxs("button",{onClick:w,className:"px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center space-x-2 transition",children:[z.jsx(yw,{className:"h-5 w-5"}),z.jsx("span",{children:"Refresh"})]}),z.jsxs("button",{className:"px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2 transition",children:[z.jsx(mw,{className:"h-5 w-5"}),z.jsx("span",{children:"Add Voter"})]})]})]}),z.jsx("div",{className:"bg-white/5 rounded-lg overflow-hidden",children:z.jsx("div",{className:"overflow-x-auto",children:z.jsxs("table",{className:"w-full",children:[z.jsx("thead",{children:z.jsxs("tr",{className:"border-b border-white/10",children:[z.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Name"}),z.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Aadhaar ID"}),z.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Electoral Roll"}),z.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Region"}),z.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Registered"})]})}),z.jsx("tbody",{className:"divide-y divide-white/10",children:o?z.jsx("tr",{children:z.jsx("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"Loading voters..."})}):S.length===0?z.jsx("tr",{children:z.jsx("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"No voters found"})}):S.map(N=>z.jsxs("tr",{className:"hover:bg-white/5 transition",children:[z.jsx("td",{className:"px-6 py-4 text-white",children:N.full_name}),z.jsx("td",{className:"px-6 py-4 text-white/70",children:N.aadhaar_id}),z.jsx("td",{className:"px-6 py-4 text-white/70",children:N.electoral_roll_number}),z.jsx("td",{className:"px-6 py-4 text-white/70",children:N.region_code}),z.jsx("td",{className:"px-6 py-4 text-white/70",children:new Date(N.created_at).toLocaleDateString()})]},N.id))})]})})})]})}function Au({title:i,value:e,icon:t,className:s}){return z.jsx("div",{className:`p-6 rounded-lg ${s}`,children:z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-medium opacity-70",children:i}),z.jsx("p",{className:"text-2xl font-bold mt-1",children:e})]}),t]})})}/**
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
 */const Kv="functions";/**
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
 */class BC{constructor(e,t,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(o=>this.auth=o,()=>{}),this.messaging||t.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
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
 */const Vd="us-central1";class $C{constructor(e,t,s,o,u=Vd,h=(...p)=>fetch(...p)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new BC(t,s,o),this.cancelAllRequests=new Promise(p=>{this.deleteService=()=>Promise.resolve(p())});try{const p=new URL(u);this.customDomain=p.origin+(p.pathname==="/"?"":p.pathname),this.region=Vd}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function qC(i,e,t){i.emulatorOrigin=`http://${e}:${t}`}const dy="@firebase/functions",fy="0.12.1";/**
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
 */const HC="auth-internal",WC="app-check-internal",KC="messaging-internal";function GC(i){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),u=t.getProvider(HC),h=t.getProvider(KC),p=t.getProvider(WC);return new $C(o,u,h,p,s)};kr(new Cr(Kv,e,"PUBLIC").setMultipleInstances(!0)),Zt(dy,fy,i),Zt(dy,fy,"esm2017")}/**
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
 */function QC(i=rc(),e=Vd){const s=Io(Ut(i),Kv).getImmediate({identifier:e}),o=Ty("functions");return o&&YC(s,...o),s}function YC(i,e,t){qC(Ut(i),e,t)}GC();const XC={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},Cf=Qa(XC),JC=Hv(Cf),ZC=X_(Cf);QC(Cf);function eP(){const[i,e]=ft.useState(!1),[t,s]=ft.useState(!1),[o,u]=ft.useState("idle"),[h,p]=ft.useState(""),g=async()=>{u("processing");try{await new Promise(Y=>setTimeout(Y,2e3));const W=Math.random()>.5;await fA(xu(ZC,"verification_logs"),{verification_type:"face",status:W?"success":"failed",error_message:W?null:"Facial recognition failed",timestamp:new Date}),u(W?"success":"failed"),W||p("Facial recognition failed. Please try again or seek staff assistance.")}catch(W){console.error("Verification error:",W),u("failed"),p("An error occurred during verification. Please try again.")}},_=async W=>{W.preventDefault();try{(await mR(JC,w,N)).user&&s(!0)}catch(Y){console.error("Login error:",Y),alert("Invalid credentials")}},[w,S]=ft.useState(""),[N,j]=ft.useState("");return z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900",children:[z.jsx("header",{className:"bg-white/10 backdrop-blur-sm border-b border-white/20",children:z.jsxs("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center space-x-2",children:[z.jsx(ww,{className:"h-8 w-8 text-blue-400"}),z.jsx("h1",{className:"text-2xl font-bold text-white",children:"VoteX"})]}),z.jsxs("button",{onClick:()=>{e(!i),s(!1)},className:"px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center space-x-2 transition",children:[z.jsx(gy,{className:"h-5 w-5"}),z.jsx("span",{children:i?"Voter Portal":"Staff Portal"})]})]})}),z.jsx("main",{className:"container mx-auto px-4 py-8",children:i?t?z.jsx(zC,{}):z.jsx("div",{className:"max-w-md mx-auto",children:z.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[z.jsx("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Staff Login"}),z.jsxs("form",{onSubmit:_,className:"space-y-4",children:[z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium mb-1",children:"Username"}),z.jsx("input",{type:"text",value:w,onChange:W=>S(W.target.value),className:"w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your username"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium mb-1",children:"Password"}),z.jsx("input",{type:"password",value:N,onChange:W=>j(W.target.value),className:"w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your password"})]}),z.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition",children:"Login"})]})]})}):z.jsx(tP,{status:o,errorMessage:h,onVerify:g})})]})}function tP({status:i,errorMessage:e,onVerify:t}){return z.jsx("div",{className:"max-w-2xl mx-auto",children:z.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[z.jsx("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Voter Verification"}),z.jsxs("div",{className:"space-y-6",children:[i==="idle"&&z.jsxs("div",{className:"text-center space-y-4",children:[z.jsx("p",{className:"text-lg",children:"Please stand in front of the camera and place your thumb on the scanner"}),z.jsxs("div",{className:"flex justify-center space-x-4",children:[z.jsxs("div",{className:"p-4 bg-white/5 rounded-lg flex flex-col items-center",children:[z.jsx(cw,{className:"h-8 w-8 mb-2"}),z.jsx("span",{children:"Camera Ready"})]}),z.jsxs("div",{className:"p-4 bg-white/5 rounded-lg flex flex-col items-center",children:[z.jsx(fw,{className:"h-8 w-8 mb-2"}),z.jsx("span",{children:"Scanner Ready"})]})]}),z.jsx("button",{onClick:t,className:"px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition",children:"Start Verification"})]}),i==="processing"&&z.jsxs("div",{className:"text-center space-y-4",children:[z.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"}),z.jsx("p",{children:"Processing verification..."})]}),i==="success"&&z.jsxs("div",{className:"text-center space-y-4",children:[z.jsx(cd,{className:"h-16 w-16 text-green-400 mx-auto"}),z.jsx("p",{className:"text-xl font-semibold text-green-400",children:"Verification Successful"}),z.jsx("p",{children:"You may proceed to the voting booth"})]}),i==="failed"&&z.jsxs("div",{className:"text-center space-y-4",children:[z.jsx(my,{className:"h-16 w-16 text-red-400 mx-auto"}),z.jsx("p",{className:"text-xl font-semibold text-red-400",children:"Verification Failed"}),z.jsx("p",{children:e}),z.jsx("button",{onClick:t,className:"px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition",children:"Try Again"})]})]})]})})}sw.createRoot(document.getElementById("root")).render(z.jsx(ft.StrictMode,{children:z.jsx(eP,{})}));
