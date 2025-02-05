(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Kh={exports:{}},Sa={},Gh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function BE(){if(xm)return Se;xm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function N(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Y={};function B(V,$,le){this.props=V,this.context=$,this.refs=Y,this.updater=le||j}B.prototype.isReactComponent={},B.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function me(){}me.prototype=B.prototype;function fe(V,$,le){this.props=V,this.context=$,this.refs=Y,this.updater=le||j}var Ee=fe.prototype=new me;Ee.constructor=fe,W(Ee,B.prototype),Ee.isPureReactComponent=!0;var Te=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(V,$,le){var we,Ie={},Ne=null,Le=null;if($!=null)for(we in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(Ne=""+$.key),$)Ke.call($,we)&&!x.hasOwnProperty(we)&&(Ie[we]=$[we]);var Me=arguments.length-2;if(Me===1)Ie.children=le;else if(1<Me){for(var ze=Array(Me),gt=0;gt<Me;gt++)ze[gt]=arguments[gt+2];Ie.children=ze}if(V&&V.defaultProps)for(we in Me=V.defaultProps,Me)Ie[we]===void 0&&(Ie[we]=Me[we]);return{$$typeof:i,type:V,key:Ne,ref:Le,props:Ie,_owner:Ae.current}}function R(V,$){return{$$typeof:i,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(le){return $[le]})}var O=/\/+/g;function A(V,$){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):$.toString(36)}function et(V,$,le,we,Ie){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=we===""?"."+A(Le,0):we,Te(Ie)?(le="",V!=null&&(le=V.replace(O,"$&/")+"/"),et(Ie,$,le,"",function(gt){return gt})):Ie!=null&&(P(Ie)&&(Ie=R(Ie,le+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),$.push(Ie)),1;if(Le=0,we=we===""?".":we+":",Te(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var ze=we+A(Ne,Me);Le+=et(Ne,$,le,ze,Ie)}else if(ze=N(V),typeof ze=="function")for(V=ze.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,ze=we+A(Ne,Me++),Le+=et(Ne,$,le,ze,Ie);else if(Ne==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(V,$,le){if(V==null)return V;var we=[],Ie=0;return et(V,we,"","",function(Ne){return $.call(le,Ne,Ie++)}),we}function Nt(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(le){(V._status===0||V._status===-1)&&(V._status=1,V._result=le)},function(le){(V._status===0||V._status===-1)&&(V._status=2,V._result=le)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ae};function te(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(V,$,le){kt(V,function(){$.apply(this,arguments)},le)},count:function(V){var $=0;return kt(V,function(){$++}),$},toArray:function(V){return kt(V,function($){return $})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=B,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=fe,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=te,Se.cloneElement=function(V,$,le){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var we=W({},V.props),Ie=V.key,Ne=V.ref,Le=V._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Le=Ae.current),$.key!==void 0&&(Ie=""+$.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(ze in $)Ke.call($,ze)&&!x.hasOwnProperty(ze)&&(we[ze]=$[ze]===void 0&&Me!==void 0?Me[ze]:$[ze])}var ze=arguments.length-2;if(ze===1)we.children=le;else if(1<ze){Me=Array(ze);for(var gt=0;gt<ze;gt++)Me[gt]=arguments[gt+2];we.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:Ne,props:we,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var $=I.bind(null,V);return $.type=V,$},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=P,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Se.memo=function(V,$){return{$$typeof:_,type:V,compare:$===void 0?null:$}},Se.startTransition=function(V){var $=Z.transition;Z.transition={};try{V()}finally{Z.transition=$}},Se.unstable_act=te,Se.useCallback=function(V,$){return Ue.current.useCallback(V,$)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,$){return Ue.current.useEffect(V,$)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,$,le){return Ue.current.useImperativeHandle(V,$,le)},Se.useInsertionEffect=function(V,$){return Ue.current.useInsertionEffect(V,$)},Se.useLayoutEffect=function(V,$){return Ue.current.useLayoutEffect(V,$)},Se.useMemo=function(V,$){return Ue.current.useMemo(V,$)},Se.useReducer=function(V,$,le){return Ue.current.useReducer(V,$,le)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,$,le){return Ue.current.useSyncExternalStore(V,$,le)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var Dm;function xd(){return Dm||(Dm=1,Gh.exports=BE()),Gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function $E(){if(Vm)return Sa;Vm=1;var i=xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,S={},N=null,j=null;_!==void 0&&(N=""+_),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(S[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)S[w]===void 0&&(S[w]=g[w]);return{$$typeof:e,type:m,key:N,ref:j,props:S,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Om;function qE(){return Om||(Om=1,Kh.exports=$E()),Kh.exports}var G=qE(),ft=xd(),yu={},Qh={exports:{}},Yt={},Yh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function WE(){return Lm||(Lm=1,function(i){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var V=te-1>>>1,$=Z[V];if(0<o($,ce))Z[V]=ce,Z[te]=$,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var V=0,$=Z.length,le=$>>>1;V<le;){var we=2*(V+1)-1,Ie=Z[we],Ne=we+1,Le=Z[Ne];if(0>o(Ie,te))Ne<$&&0>o(Le,Ie)?(Z[V]=Le,Z[Ne]=te,V=Ne):(Z[V]=Ie,Z[we]=te,V=we);else if(Ne<$&&0>o(Le,te))Z[V]=Le,Z[Ne]=te,V=Ne;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,S=null,N=3,j=!1,W=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(Z){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=Z)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function Te(Z){if(Y=!1,Ee(Z),!W)if(t(g)!==null)W=!0,Nt(Ke);else{var ce=t(_);ce!==null&&Ue(Te,ce.startTime-Z)}}function Ke(Z,ce){W=!1,Y&&(Y=!1,me(I),I=-1),j=!0;var te=N;try{for(Ee(ce),S=t(g);S!==null&&(!(S.expirationTime>ce)||Z&&!D());){var V=S.callback;if(typeof V=="function"){S.callback=null,N=S.priorityLevel;var $=V(S.expirationTime<=ce);ce=i.unstable_now(),typeof $=="function"?S.callback=$:S===t(g)&&s(g),Ee(ce)}else s(g);S=t(g)}if(S!==null)var le=!0;else{var we=t(_);we!==null&&Ue(Te,we.startTime-ce),le=!1}return le}finally{S=null,N=te,j=!1}}var Ae=!1,x=null,I=-1,R=5,P=-1;function D(){return!(i.unstable_now()-P<R)}function O(){if(x!==null){var Z=i.unstable_now();P=Z;var ce=!0;try{ce=x(!0,Z)}finally{ce?A():(Ae=!1,x=null)}}else Ae=!1}var A;if(typeof fe=="function")A=function(){fe(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=O,A=function(){kt.postMessage(null)}}else A=function(){B(O,0)};function Nt(Z){x=Z,Ae||(Ae=!0,A())}function Ue(Z,ce){I=B(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){W||j||(W=!0,Nt(Ke))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(N){case 1:case 2:case 3:var ce=3;break;default:ce=N}var te=N;N=ce;try{return Z()}finally{N=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=N;N=Z;try{return ce()}finally{N=te}},i.unstable_scheduleCallback=function(Z,ce,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:w++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>V?(Z.sortIndex=te,e(_,Z),t(g)===null&&Z===t(_)&&(Y?(me(I),I=-1):Y=!0,Ue(Te,te-V))):(Z.sortIndex=$,e(g,Z),W||j||(W=!0,Nt(Ke))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var ce=N;return function(){var te=N;N=ce;try{return Z.apply(this,arguments)}finally{N=te}}}}(Xh)),Xh}var Mm;function HE(){return Mm||(Mm=1,Yh.exports=WE()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function KE(){if(bm)return Yt;bm=1;var i=xd(),e=HE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function N(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,fe);B[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,fe);B[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,fe);B[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,a,d,c)&&(a=null),c||d===null?N(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var le=!1;function we(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ie(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ae:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function sr(n){n._valueTracker||(n._valueTracker=gt(n))}function cs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ai(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function hs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function No(n,r){r=r.checked,r!=null&&Ee(n,"checked",r,!1)}function xo(n,r){No(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ds(n,r.type,a):r.hasOwnProperty("defaultValue")&&ds(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function nl(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ds(n,r,a){(r!=="number"||xr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var or=Array.isArray;function ar(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(or(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function ps(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Vo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lr,Oo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Dr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ci=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(n){Ci.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ri[r]=Ri[n]})});function Lo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ri.hasOwnProperty(n)&&Ri[n]?(""+r).trim():r+"px"}function Mo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(n,r){if(r){if(bo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Uo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function ms(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gs=null,ln=null,jn=null;function ys(n){if(n=ua(n)){if(typeof gs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Dl(r),gs(n.stateNode,n.type,r))}}function zn(n){ln?jn?jn.push(n):jn=[n]:ln=n}function jo(){if(ln){var n=ln,r=jn;if(jn=ln=null,ys(n),r)for(n=0;n<r.length;n++)ys(r[n])}}function ki(n,r){return n(r)}function zo(){}var ur=!1;function Bo(n,r,a){if(ur)return n(r,a);ur=!0;try{return ki(n,r,a)}finally{ur=!1,(ln!==null||jn!==null)&&(zo(),jo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Dl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var _s=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{_s=!1}function Ni(n,r,a,c,d,p,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var xi=!1,vs=null,Tn=!1,$o=null,wc={onError:function(n){xi=!0,vs=n}};function Es(n,r,a,c,d,p,v,T,C){xi=!1,vs=null,Ni.apply(wc,arguments)}function rl(n,r,a,c,d,p,v,T,C){if(Es.apply(this,arguments),xi){if(xi){var F=vs;xi=!1,vs=null}else throw Error(t(198));Tn||(Tn=!0,$o=F)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Di(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function il(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sn(d),n;if(p===c)return Sn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function qo(n){return n=il(n),n!==null?ws(n):null}function ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ws(n);if(r!==null)return r;n=n.sibling}return null}var Ts=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,sl=e.unstable_shouldYield,Tc=e.unstable_requestPaint,Be=e.unstable_now,ol=e.unstable_getCurrentPriorityLevel,Vi=e.unstable_ImmediatePriority,Vr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,al=e.unstable_IdlePriority,Oi=null,Zt=null;function ll(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:cl,Ko=Math.log,ul=Math.LN2;function cl(n){return n>>>=0,n===0?32:31-(Ko(n)/ul|0)|0}var Is=64,Ss=4194304;function Or(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Li(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Or(T):(p&=v,p!==0&&(c=Or(p)))}else v=a&~d,v!==0?c=Or(v):p!==0&&(c=Or(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function Ic(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Ut(p),T=1<<v,C=d[v];C===-1?(!(T&a)||T&c)&&(d[v]=Ic(T,r)):C<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mi(){var n=Is;return Is<<=1,!(Is&4194240)&&(Is=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Fr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var hl,As,dl,fl,pl,Go=!1,Bn=[],Tt=null,An=null,Rn=null,Ur=new Map,cn=new Map,$n=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ml(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ac(n,r,a,c,d){switch(r){case"focusin":return Tt=$t(Tt,n,r,a,c,d),!0;case"dragenter":return An=$t(An,n,r,a,c,d),!0;case"mouseover":return Rn=$t(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ur.set(p,$t(Ur.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,$t(cn.get(p)||null,n,r,a,c,d)),!0}return!1}function gl(n){var r=zi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=Di(a),r!==null){n.blockedOn=r,pl(n.priority,function(){dl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pi=c,a.target.dispatchEvent(c),Pi=null}else return r=ua(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function bi(n,r,a){hr(n)&&a.delete(r)}function yl(){Go=!1,Tt!==null&&hr(Tt)&&(Tt=null),An!==null&&hr(An)&&(An=null),Rn!==null&&hr(Rn)&&(Rn=null),Ur.forEach(bi),cn.forEach(bi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Go||(Go=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yl)))}function Pn(n){function r(d){return Cn(d,n)}if(0<Bn.length){Cn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Cn(Tt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Ur.forEach(r),cn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)gl(a),a.blockedOn===null&&$n.shift()}var dr=Te.ReactCurrentBatchConfig,jr=!0;function Ge(n,r,a,c){var d=Pe,p=dr.transition;dr.transition=null;try{Pe=1,Qo(n,r,a,c)}finally{Pe=d,dr.transition=p}}function Rc(n,r,a,c){var d=Pe,p=dr.transition;dr.transition=null;try{Pe=4,Qo(n,r,a,c)}finally{Pe=d,dr.transition=p}}function Qo(n,r,a,c){if(jr){var d=Rs(n,r,a,c);if(d===null)bc(n,r,c,Fi,a),ml(n,c);else if(Ac(d,n,r,a,c))c.stopPropagation();else if(ml(n,c),r&4&&-1<Sc.indexOf(n)){for(;d!==null;){var p=ua(d);if(p!==null&&hl(p),p=Rs(n,r,a,c),p===null&&bc(n,r,c,Fi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var Fi=null;function Rs(n,r,a,c){if(Fi=null,n=ms(c),n=zi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Di(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Fi=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ol()){case Vi:return 1;case Vr:return 4;case un:case Ho:return 16;case al:return 536870912;default:return 16}default:return 16}}var tn=null,Cs=null,qt=null;function Xo(){if(qt)return qt;var n,r=Cs,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function Ps(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function Jo(){return!1}function It(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?qn:Jo,this.isPropagationStopped=Jo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=It(kn),Wn=te({},kn,{view:0,detail:0}),Cc=It(Wn),Ns,fr,zr,Ui=te({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(Ns=n.screenX-zr.screenX,fr=n.screenY-zr.screenY):fr=Ns=0,zr=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:fr}}),xs=It(Ui),Zo=te({},Ui,{dataTransfer:0}),_l=It(Zo),Ds=te({},Wn,{relatedTarget:0}),Vs=It(Ds),vl=te({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),pr=It(vl),El=te({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wl=It(El),Tl=te({},kn,{data:0}),ea=It(Tl),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Il={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Il[n])?!!r[n]:!1}function Hn(){return Sl}var l=te({},Wn,{key:function(n){if(n.key){var r=Os[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ps(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?Ps(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ps(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=te({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=te({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),U=It(L),J=te({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(J),ct=te({},Ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=It(ct),yt=[9,13,27,32],it=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,ji=m&&(!it||hn&&8<hn&&11>=hn),Ls=" ",Af=!1;function Rf(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Uv(n,r){switch(n){case"compositionend":return Cf(r);case"keypress":return r.which!==32?null:(Af=!0,Ls);case"textInput":return n=r.data,n===Ls&&Af?null:n;default:return null}}function jv(n,r){if(Ms)return n==="compositionend"||!it&&Rf(n,r)?(n=Xo(),qt=Cs=tn=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ji&&r.locale!=="ko"?null:r.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!zv[n.type]:r==="textarea"}function kf(n,r,a,c){zn(c),r=kl(r,"onChange"),0<r.length&&(a=new ks("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function Bv(n){Kf(n,0)}function Al(n){var r=zs(n);if(cs(r))return n}function $v(n,r){if(n==="change")return r}var Nf=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),kc=typeof xf.oninput=="function"}Pc=kc}else Pc=!1;Nf=Pc&&(!document.documentMode||9<document.documentMode)}function Df(){ta&&(ta.detachEvent("onpropertychange",Vf),na=ta=null)}function Vf(n){if(n.propertyName==="value"&&Al(na)){var r=[];kf(r,na,n,ms(n)),Bo(Bv,r)}}function qv(n,r,a){n==="focusin"?(Df(),ta=r,na=a,ta.attachEvent("onpropertychange",Vf)):n==="focusout"&&Df()}function Wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Al(na)}function Hv(n,r){if(n==="click")return Al(r)}function Kv(n,r){if(n==="input"||n==="change")return Al(r)}function Gv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Gv;function ra(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function Of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lf(n,r){var a=Of(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Of(a)}}function Mf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function bf(){for(var n=window,r=xr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=xr(n.document)}return r}function Nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Qv(n){var r=bf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mf(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Lf(a,p);var v=Lf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=m&&"documentMode"in document&&11>=document.documentMode,bs=null,xc=null,ia=null,Dc=!1;function Ff(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||bs==null||bs!==xr(c)||(c=bs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=kl(xc,"onSelect"),0<c.length&&(r=new ks("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Rl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Vc={},Uf={};m&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Cl(n){if(Vc[n])return Vc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Uf)return Vc[n]=r[a];return n}var jf=Cl("animationend"),zf=Cl("animationiteration"),Bf=Cl("animationstart"),$f=Cl("transitionend"),qf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,r){qf.set(n,r),u(r,[n])}for(var Oc=0;Oc<Wf.length;Oc++){var Lc=Wf[Oc],Xv=Lc.toLowerCase(),Jv=Lc[0].toUpperCase()+Lc.slice(1);Br(Xv,"on"+Jv)}Br(jf,"onAnimationEnd"),Br(zf,"onAnimationIteration"),Br(Bf,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br($f,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Hf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,rl(c,r,void 0,n),n.currentTarget=null}function Kf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;Hf(d,T,F),p=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;Hf(d,T,F),p=C}}}if(Tn)throw n=$o,Tn=!1,$o=null,n}function qe(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(Gf(r,n,2,!1),a.add(c))}function Mc(n,r,a){var c=0;r&&(c|=4),Gf(a,n,c,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Pl]){n[Pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,Mc("selectionchange",!1,r))}}function Gf(n,r,a,c){switch(Yo(r)){case 1:var d=Ge;break;case 4:d=Rc;break;default:d=Qo}a=d.bind(null,r,a,n),d=void 0,!_s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=zi(T),v===null)return;if(C=v.tag,C===5||C===6){c=p=v;continue e}T=T.parentNode}}c=c.return}Bo(function(){var F=p,K=ms(a),Q=[];e:{var H=qf.get(n);if(H!==void 0){var ee=ks,se=n;switch(n){case"keypress":if(Ps(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":se="focus",ee=Vs;break;case"focusout":se="blur",ee=Vs;break;case"beforeblur":case"afterblur":ee=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=_l;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case jf:case zf:case Bf:ee=pr;break;case $f:ee=Fe;break;case"scroll":ee=Cc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=wl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var oe=(r&4)!==0,nt=!oe&&n==="scroll",M=oe?H!==null?H+"Capture":null:H;oe=[];for(var k=F,b;k!==null;){b=k;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=tt(k,M),X!=null&&oe.push(aa(k,X,b)))),nt)break;k=k.return}0<oe.length&&(H=new ee(H,se,null,a,K),Q.push({event:H,listeners:oe}))}}if(!(r&7)){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&a!==Pi&&(se=a.relatedTarget||a.fromElement)&&(zi(se)||se[mr]))break e;if((ee||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=F,se=se?zi(se):null,se!==null&&(nt=In(se),se!==nt||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(oe=xs,X="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,X="onPointerLeave",M="onPointerEnter",k="pointer"),nt=ee==null?H:zs(ee),b=se==null?H:zs(se),H=new oe(X,k+"leave",ee,a,K),H.target=nt,H.relatedTarget=b,X=null,zi(K)===F&&(oe=new oe(M,k+"enter",se,a,K),oe.target=b,oe.relatedTarget=nt,X=oe),nt=X,ee&&se)t:{for(oe=ee,M=se,k=0,b=oe;b;b=Us(b))k++;for(b=0,X=M;X;X=Us(X))b++;for(;0<k-b;)oe=Us(oe),k--;for(;0<b-k;)M=Us(M),b--;for(;k--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Us(oe),M=Us(M)}oe=null}else oe=null;ee!==null&&Qf(Q,H,ee,oe,!1),se!==null&&nt!==null&&Qf(Q,nt,se,oe,!0)}}e:{if(H=F?zs(F):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var ae=$v;else if(Pf(H))if(Nf)ae=Kv;else{ae=Wv;var he=qv}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=Hv);if(ae&&(ae=ae(n,F))){kf(Q,ae,a,K);break e}he&&he(n,H,F),n==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&ds(H,"number",H.value)}switch(he=F?zs(F):window,n){case"focusin":(Pf(he)||he.contentEditable==="true")&&(bs=he,xc=F,ia=null);break;case"focusout":ia=xc=bs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Ff(Q,a,K);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Ff(Q,a,K)}var de;if(it)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ms?Rf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(ji&&a.locale!=="ko"&&(Ms||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ms&&(de=Xo()):(tn=K,Cs="value"in tn?tn.value:tn.textContent,Ms=!0)),he=kl(F,ge),0<he.length&&(ge=new ea(ge,n,null,a,K),Q.push({event:ge,listeners:he}),de?ge.data=de:(de=Cf(a),de!==null&&(ge.data=de)))),(de=nn?Uv(n,a):jv(n,a))&&(F=kl(F,"onBeforeInput"),0<F.length&&(K=new ea("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=de))}Kf(Q,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function kl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(aa(n,p,d)),p=tt(n,r),p!=null&&c.push(aa(n,p,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=tt(a,p),C!=null&&v.unshift(aa(a,C,T))):d||(C=tt(a,p),C!=null&&v.push(aa(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var eE=/\r\n?/g,tE=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(eE,`
`).replace(tE,"")}function Nl(n,r,a){if(r=Yf(r),Yf(n)!==r&&a)throw Error(t(425))}function xl(){}var Fc=null,Uc=null;function jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(n){return Xf.resolve(null).then(n).catch(iE)}:zc;function iE(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Jf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Kn="__reactFiber$"+js,la="__reactProps$"+js,mr="__reactContainer$"+js,$c="__reactEvents$"+js,sE="__reactListeners$"+js,oE="__reactHandles$"+js;function zi(n){var r=n[Kn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Jf(n);n!==null;){if(a=n[Kn])return a;n=Jf(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[Kn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Dl(n){return n[la]||null}var qc=[],Bs=-1;function qr(n){return{current:n}}function We(n){0>Bs||(n.current=qc[Bs],qc[Bs]=null,Bs--)}function $e(n,r){Bs++,qc[Bs]=n.current,n.current=r}var Wr={},xt=qr(Wr),Wt=qr(!1),Bi=Wr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Vl(){We(Wt),We(xt)}function Zf(n,r,a){if(xt.current!==Wr)throw Error(t(168));$e(xt,r),$e(Wt,a)}function ep(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,Bi=xt.current,$e(xt,n),$e(Wt,Wt.current),!0}function tp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ep(n,r,Bi),c.__reactInternalMemoizedMergedChildContext=n,We(Wt),We(xt),$e(xt,n)):We(Wt),$e(Wt,a)}var gr=null,Ll=!1,Wc=!1;function np(n){gr===null?gr=[n]:gr.push(n)}function aE(n){Ll=!0,np(n)}function Hr(){if(!Wc&&gr!==null){Wc=!0;var n=0,r=Pe;try{var a=gr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Ll=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Ts(Vi,Hr),d}finally{Pe=r,Wc=!1}}return null}var qs=[],Ws=0,Ml=null,bl=0,dn=[],fn=0,$i=null,yr=1,_r="";function qi(n,r){qs[Ws++]=bl,qs[Ws++]=Ml,Ml=n,bl=r}function rp(n,r,a){dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=$i,$i=n;var c=yr;n=_r;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Ut(r)+d|a<<d|c,_r=p+n}else yr=1<<p|a<<d|c,_r=n}function Hc(n){n.return!==null&&(qi(n,1),rp(n,1,0))}function Kc(n){for(;n===Ml;)Ml=qs[--Ws],qs[Ws]=null,bl=qs[--Ws],qs[Ws]=null;for(;n===$i;)$i=dn[--fn],dn[fn]=null,_r=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null}var rn=null,sn=null,Qe=!1,xn=null;function ip(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function sp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=$i!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Qe){var r=sn;if(r){var a=r;if(!sp(n,r)){if(Gc(n))throw Error(t(418));r=$r(a.nextSibling);var c=rn;r&&sp(n,r)?ip(c,a):(n.flags=n.flags&-4097|2,Qe=!1,rn=n)}}else{if(Gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,rn=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Fl(n){if(n!==rn)return!1;if(!Qe)return op(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!jc(n.type,n.memoizedProps)),r&&(r=sn)){if(Gc(n))throw ap(),Error(t(418));for(;r;)ip(n,r),r=$r(r.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?$r(n.stateNode.nextSibling):null;return!0}function ap(){for(var n=sn;n;)n=$r(n.nextSibling)}function Hs(){sn=rn=null,Qe=!1}function Yc(n){xn===null?xn=[n]:xn.push(n)}var lE=Te.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function lp(n){var r=n._init;return r(n._payload)}function up(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=ei(M,k),M.index=0,M.sibling=null,M}function p(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,b,X){return k===null||k.tag!==6?(k=zh(b,M.mode,X),k.return=M,k):(k=d(k,b),k.return=M,k)}function C(M,k,b,X){var ae=b.type;return ae===x?K(M,k,b.props.children,X,b.key):k!==null&&(k.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&lp(ae)===k.type)?(X=d(k,b.props),X.ref=ca(M,k,b),X.return=M,X):(X=uu(b.type,b.key,b.props,null,M.mode,X),X.ref=ca(M,k,b),X.return=M,X)}function F(M,k,b,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=Bh(b,M.mode,X),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function K(M,k,b,X,ae){return k===null||k.tag!==7?(k=Ji(b,M.mode,X,ae),k.return=M,k):(k=d(k,b),k.return=M,k)}function Q(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=zh(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ke:return b=uu(k.type,k.key,k.props,null,M.mode,b),b.ref=ca(M,null,k),b.return=M,b;case Ae:return k=Bh(k,M.mode,b),k.return=M,k;case Nt:var X=k._init;return Q(M,X(k._payload),b)}if(or(k)||ce(k))return k=Ji(k,M.mode,b,null),k.return=M,k;Ul(M,k)}return null}function H(M,k,b,X){var ae=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:T(M,k,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return b.key===ae?C(M,k,b,X):null;case Ae:return b.key===ae?F(M,k,b,X):null;case Nt:return ae=b._init,H(M,k,ae(b._payload),X)}if(or(b)||ce(b))return ae!==null?null:K(M,k,b,X,null);Ul(M,b)}return null}function ee(M,k,b,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(k,M,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ke:return M=M.get(X.key===null?b:X.key)||null,C(k,M,X,ae);case Ae:return M=M.get(X.key===null?b:X.key)||null,F(k,M,X,ae);case Nt:var he=X._init;return ee(M,k,b,he(X._payload),ae)}if(or(X)||ce(X))return M=M.get(b)||null,K(k,M,X,ae,null);Ul(k,X)}return null}function se(M,k,b,X){for(var ae=null,he=null,de=k,ge=k=0,Et=null;de!==null&&ge<b.length;ge++){de.index>ge?(Et=de,de=null):Et=de.sibling;var Oe=H(M,de,b[ge],X);if(Oe===null){de===null&&(de=Et);break}n&&de&&Oe.alternate===null&&r(M,de),k=p(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe,de=Et}if(ge===b.length)return a(M,de),Qe&&qi(M,ge),ae;if(de===null){for(;ge<b.length;ge++)de=Q(M,b[ge],X),de!==null&&(k=p(de,k,ge),he===null?ae=de:he.sibling=de,he=de);return Qe&&qi(M,ge),ae}for(de=c(M,de);ge<b.length;ge++)Et=ee(de,M,ge,b[ge],X),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?ge:Et.key),k=p(Et,k,ge),he===null?ae=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(ti){return r(M,ti)}),Qe&&qi(M,ge),ae}function oe(M,k,b,X){var ae=ce(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var he=ae=null,de=k,ge=k=0,Et=null,Oe=b.next();de!==null&&!Oe.done;ge++,Oe=b.next()){de.index>ge?(Et=de,de=null):Et=de.sibling;var ti=H(M,de,Oe.value,X);if(ti===null){de===null&&(de=Et);break}n&&de&&ti.alternate===null&&r(M,de),k=p(ti,k,ge),he===null?ae=ti:he.sibling=ti,he=ti,de=Et}if(Oe.done)return a(M,de),Qe&&qi(M,ge),ae;if(de===null){for(;!Oe.done;ge++,Oe=b.next())Oe=Q(M,Oe.value,X),Oe!==null&&(k=p(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return Qe&&qi(M,ge),ae}for(de=c(M,de);!Oe.done;ge++,Oe=b.next())Oe=ee(de,M,ge,Oe.value,X),Oe!==null&&(n&&Oe.alternate!==null&&de.delete(Oe.key===null?ge:Oe.key),k=p(Oe,k,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return n&&de.forEach(function(zE){return r(M,zE)}),Qe&&qi(M,ge),ae}function nt(M,k,b,X){if(typeof b=="object"&&b!==null&&b.type===x&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:e:{for(var ae=b.key,he=k;he!==null;){if(he.key===ae){if(ae=b.type,ae===x){if(he.tag===7){a(M,he.sibling),k=d(he,b.props.children),k.return=M,M=k;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Nt&&lp(ae)===he.type){a(M,he.sibling),k=d(he,b.props),k.ref=ca(M,he,b),k.return=M,M=k;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===x?(k=Ji(b.props.children,M.mode,X,b.key),k.return=M,M=k):(X=uu(b.type,b.key,b.props,null,M.mode,X),X.ref=ca(M,k,b),X.return=M,M=X)}return v(M);case Ae:e:{for(he=b.key;k!==null;){if(k.key===he)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=Bh(b,M.mode,X),k.return=M,M=k}return v(M);case Nt:return he=b._init,nt(M,k,he(b._payload),X)}if(or(b))return se(M,k,b,X);if(ce(b))return oe(M,k,b,X);Ul(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=zh(b,M.mode,X),k.return=M,M=k),v(M)):a(M,k)}return nt}var Ks=up(!0),cp=up(!1),jl=qr(null),zl=null,Gs=null,Xc=null;function Jc(){Xc=Gs=zl=null}function Zc(n){var r=jl.current;We(jl),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){zl=n,Xc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Kt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(zl===null)throw Error(t(308));Gs=n,zl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var Wi=null;function th(n){Wi===null?Wi=[n]:Wi.push(n)}function hp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Kr=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Gr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function Bl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}function fp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function $l(n,r,a,c){var d=n.updateQueue;Kr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?p=F:v.next=F,v=C;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=F:T.next=F,K.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;v=0,K=F=C=null,T=p;do{var H=T.lane,ee=T.eventTime;if((c&H)===H){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,oe=T;switch(H=r,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(ee,Q,H);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(ee,Q,H):se,H==null)break e;Q=te({},Q,H);break e;case 2:Kr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else ee={eventTime:ee,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(F=K=ee,C=Q):K=K.next=ee,v|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(K===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=Q}}function pp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Gn=qr(ha),da=qr(ha),fa=qr(ha);function Hi(n){if(n===ha)throw Error(t(174));return n}function rh(n,r){switch($e(fa,r),$e(da,n),$e(Gn,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}We(Gn),$e(Gn,r)}function Ys(){We(Gn),We(da),We(fa)}function mp(n){Hi(fa.current);var r=Hi(Gn.current),a=ut(r,n.type);r!==a&&($e(da,n),$e(Gn,a))}function ih(n){da.current===n&&(We(Gn),We(da))}var Ye=qr(0);function ql(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Wl=Te.ReactCurrentDispatcher,ah=Te.ReactCurrentBatchConfig,Ki=0,Xe=null,ht=null,_t=null,Hl=!1,pa=!1,ma=0,uE=0;function Dt(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,p){if(Ki=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Wl.current=n===null||n.memoizedState===null?fE:pE,n=a(c,d),pa){p=0;do{if(pa=!1,ma=0,25<=p)throw Error(t(301));p+=1,_t=ht=null,r.updateQueue=null,Wl.current=mE,n=a(c,d)}while(pa)}if(Wl.current=Ql,r=ht!==null&&ht.next!==null,Ki=0,_t=ht=Xe=null,Hl=!1,r)throw Error(t(300));return n}function ch(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=n:_t=_t.next=n,_t}function mn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=_t===null?Xe.memoizedState:_t.next;if(r!==null)_t=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Xe.memoizedState=_t=n:_t=_t.next=n}return _t}function ga(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,C=null,F=p;do{var K=F.lane;if((Ki&K)===K)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,v=c):C=C.next=Q,Xe.lanes|=K,Gi|=K}F=F.next}while(F!==null&&F!==p);C===null?v=c:C.next=T,Nn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Gi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Nn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function gp(){}function yp(n,r){var a=Xe,c=mn(),d=r(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,fh(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ya(9,vp.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));Ki&30||_p(a,r,d)}return d}function _p(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function vp(n,r,a,c){r.value=a,r.getSnapshot=c,wp(r)&&Tp(n)}function Ep(n,r,a){return a(function(){wp(r)&&Tp(n)})}function wp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Tp(n){var r=vr(n,1);r!==null&&Ln(r,n,1,-1)}function Ip(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=dE.bind(null,Xe,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Sp(){return mn().memoizedState}function Kl(n,r,a,c){var d=Qn();Xe.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Gl(n,r,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var v=ht.memoizedState;if(p=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=ya(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ya(1|r,a,p,c)}function Ap(n,r){return Kl(8390656,8,n,r)}function fh(n,r){return Gl(2048,8,n,r)}function Rp(n,r){return Gl(4,2,n,r)}function Cp(n,r){return Gl(4,4,n,r)}function Pp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function kp(n,r,a){return a=a!=null?a.concat([n]):null,Gl(4,4,Pp.bind(null,r,n),a)}function ph(){}function Np(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function xp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Dp(n,r,a){return Ki&21?(Nn(a,r)||(a=Mi(),Xe.lanes|=a,Gi|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a)}function cE(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{Pe=a,ah.transition=c}}function Vp(){return mn().memoizedState}function hE(n,r,a){var c=Jr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))Lp(r,a);else if(a=hp(n,r,a,c),a!==null){var d=Bt();Ln(a,n,c,d),Mp(a,r,c)}}function dE(n,r,a){var c=Jr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))Lp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,v)){var C=r.interleaved;C===null?(d.next=d,th(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=hp(n,r,d,c),a!==null&&(d=Bt(),Ln(a,n,c,d),Mp(a,r,c))}}function Op(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Lp(n,r){pa=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Mp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}var Ql={readContext:pn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},fE={readContext:pn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:Ap,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Kl(4194308,4,Pp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Kl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Kl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=hE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Ip,useDebugValue:ph,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Ip(!1),r=n[0];return n=cE.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Qn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));Ki&30||_p(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Ap(Ep.bind(null,c,p,n),[n]),c.flags|=2048,ya(9,vp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=vt.identifierPrefix;if(Qe){var a=_r,c=yr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=uE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},pE={readContext:pn,useCallback:Np,useContext:pn,useEffect:fh,useImperativeHandle:kp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:xp,useReducer:hh,useRef:Sp,useState:function(){return hh(ga)},useDebugValue:ph,useDeferredValue:function(n){var r=mn();return Dp(r,ht.memoizedState,n)},useTransition:function(){var n=hh(ga)[0],r=mn().memoizedState;return[n,r]},useMutableSource:gp,useSyncExternalStore:yp,useId:Vp,unstable_isNewReconciler:!1},mE={readContext:pn,useCallback:Np,useContext:pn,useEffect:fh,useImperativeHandle:kp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:xp,useReducer:dh,useRef:Sp,useState:function(){return dh(ga)},useDebugValue:ph,useDeferredValue:function(n){var r=mn();return ht===null?r.memoizedState=n:Dp(r,ht.memoizedState,n)},useTransition:function(){var n=dh(ga)[0],r=mn().memoizedState;return[n,r]},useMutableSource:gp,useSyncExternalStore:yp,useId:Vp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Yl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Jr(n),p=Er(c,d);p.payload=r,a!=null&&(p.callback=a),r=Gr(n,p,d),r!==null&&(Ln(r,n,d,c),Bl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Jr(n),p=Er(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Gr(n,p,d),r!==null&&(Ln(r,n,d,c),Bl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Jr(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=Gr(n,d,c),r!==null&&(Ln(r,n,c,a),Bl(r,n,c))}};function bp(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,p):!0}function Fp(n,r,a){var c=!1,d=Wr,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Ht(r)?Bi:xt.current,c=r.contextTypes,p=(c=c!=null)?$s(n,d):Wr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Yl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Up(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Yl.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Ht(r)?Bi:xt.current,d.context=$s(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(mh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Yl.enqueueReplaceState(d,d.state,null),$l(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var gE=typeof WeakMap=="function"?WeakMap:Map;function jp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){ru||(ru=!0,Vh=c),_h(n,r)},a}function zp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Bp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new gE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=NE.bind(null,n,r,a),r.then(n,n))}function $p(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,Gr(a,r,1))),a.lanes|=1),n)}var yE=Te.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?cp(r,null,a,c):Ks(r,n.child,a,c)}function Wp(n,r,a,c,d){a=a.render;var p=r.ref;return Qs(r,d),c=uh(n,r,a,c,p,d),a=ch(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Qe&&a&&Hc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Hp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!jh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Kp(n,r,p,c,d)):(n=uu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ei(p,c),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ra(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Kt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return vh(n,r,a,c,d)}function Gp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Zs,on),on|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Zs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(Zs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(Zs,on),on|=c;return zt(n,r,d,a),r.child}function Qp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var p=Ht(a)?Bi:xt.current;return p=$s(r,p),Qs(r,d),a=uh(n,r,a,c,p,d),c=ch(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Qe&&c&&Hc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Yp(n,r,a,c,d){if(Ht(a)){var p=!0;Ol(r)}else p=!1;if(Qs(r,d),r.stateNode===null)Jl(n,r),Fp(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Ht(a)?Bi:xt.current,F=$s(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Up(r,v,c,F),Kr=!1;var H=r.memoizedState;v.state=H,$l(r,c,v,d),C=r.memoizedState,T!==c||H!==C||Wt.current||Kr?(typeof K=="function"&&(mh(r,a,K,c),C=r.memoizedState),(T=Kr||bp(r,a,T,c,H,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,dp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Dn(r.type,T),v.props=F,Q=r.pendingProps,H=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=pn(C):(C=Ht(a)?Bi:xt.current,C=$s(r,C));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||H!==C)&&Up(r,v,c,C),Kr=!1,H=r.memoizedState,v.state=H,$l(r,c,v,d);var se=r.memoizedState;T!==Q||H!==se||Wt.current||Kr?(typeof ee=="function"&&(mh(r,a,ee,c),se=r.memoizedState),(F=Kr||bp(r,a,F,c,H,se,C)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),v.props=c,v.state=se,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return Eh(n,r,a,c,p,d)}function Eh(n,r,a,c,d,p){Qp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&tp(r,a,!1),wr(n,r,p);c=r.stateNode,yE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Ks(r,n.child,null,p),r.child=Ks(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&tp(r,a,!0),r.child}function Xp(n){var r=n.stateNode;r.pendingContext?Zf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Zf(n,r.context,!1),rh(n,r.containerInfo)}function Jp(n,r,a,c,d){return Hs(),Yc(d),r.flags|=256,zt(n,r,a,c),r.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=cu(v,c,0,null),n=Ji(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Th(a),r.memoizedState=wh,n):Ih(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return _E(n,r,v,c,T,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ei(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ei(T,p):(p=Ji(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=wh,c}return p=n.child,n=p.sibling,c=ei(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=cu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Xl(n,r,a,c){return c!==null&&Yc(c),Ks(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _E(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),Xl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=cu({mode:"visible",children:c.children},d,0,null),p=Ji(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Ks(r,n.child,null,v),r.child.memoizedState=Th(v),r.memoizedState=wh,p);if(!(r.mode&1))return Xl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=yh(p,c,void 0),Xl(n,r,v,c)}if(T=(v&n.childLanes)!==0,Kt||T){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,vr(n,d),Ln(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),Xl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=xE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=$r(d.nextSibling),rn=r,Qe=!0,xn=null,n!==null&&(dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=$i,yr=n.id,_r=n.overflow,$i=r),r=Ih(r,c.children),r.flags|=4096,r)}function em(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function tm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&em(n,a,r);else if(n.tag===19)em(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&ql(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,p);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Jl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function vE(n,r,a){switch(r.tag){case 3:Xp(r),Hs();break;case 5:mp(r);break;case 1:Ht(r.type)&&Ol(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(jl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?Zp(n,r,a):($e(Ye,Ye.current&1),n=wr(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return tm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Gp(n,r,a)}return wr(n,r,a)}var nm,Ah,rm,im;nm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},rm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Hi(Gn.current);var p=null;switch(a){case"input":d=Ai(n,d),c=Ai(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Do(n,d),c=Do(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xl)}Fo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&qe("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},im=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function EE(n,r,a){var c=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Ht(r.type)&&Vl(),Vt(r),null;case 3:return c=r.stateNode,Ys(),We(Wt),We(xt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,xn!==null&&(Mh(xn),xn=null))),Ah(n,r),Vt(r),null;case 5:ih(r);var d=Hi(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)rm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Hi(Gn.current),Fl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Kn]=r,c[la]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)qe(sa[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":hs(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":fs(c,p),qe("invalid",c)}Fo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Nl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Nl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&qe("scroll",c)}switch(a){case"input":sr(c),nl(c,p,!0);break;case"textarea":sr(c),Vo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=xl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=r,n[la]=c,nm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Uo(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)qe(sa[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":hs(n,c),d=Ai(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":fs(n,c),d=Do(n,c),qe("invalid",n);break;default:d=c}Fo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?Mo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Oo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Dr(n,C):typeof C=="number"&&Dr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&qe("scroll",n):C!=null&&Ee(n,p,C,v))}switch(a){case"input":sr(n),nl(n,c,!1);break;case"textarea":sr(n),Vo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ar(n,!!c.multiple,p,!1):c.defaultValue!=null&&ar(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)im(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Hi(fa.current),Hi(Gn.current),Fl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Nl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Vt(r),null;case 13:if(We(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&sn!==null&&r.mode&1&&!(r.flags&128))ap(),Hs(),r.flags|=98560,p=!1;else if(p=Fl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Kn]=r}else Hs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else xn!==null&&(Mh(xn),xn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?dt===0&&(dt=3):Uh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Ys(),Ah(n,r),n===null&&oa(r.stateNode.containerInfo),Vt(r),null;case 10:return Zc(r.type._context),Vt(r),null;case 17:return Ht(r.type)&&Vl(),Vt(r),null;case 19:if(We(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)_a(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(v=ql(n),v!==null){for(r.flags|=128,_a(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>eo&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304)}else{if(!c)if(n=ql(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Qe)return Vt(r),null}else 2*Be()-p.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?on&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function wE(n,r){switch(Kc(r),r.tag){case 1:return Ht(r.type)&&Vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),We(Wt),We(xt),oh(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(We(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Hs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Ye),null;case 4:return Ys(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Zl=!1,Ot=!1,TE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Js(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function Rh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var sm=!1;function IE(n,r){if(Fc=jr,n=bf(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,K=0,Q=n,H=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==p||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)H=Q,Q=ee;for(;;){if(Q===n)break t;if(H===a&&++F===d&&(T=v),H===p&&++K===c&&(C=v),(ee=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=ee}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},jr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var se=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,nt=se.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Dn(r.type,oe),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){Ze(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return se=sm,sm=!1,se}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Rh(r,a,p)}d=d.next}while(d!==c)}}function eu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function om(n){var r=n.alternate;r!==null&&(n.alternate=null,om(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Kn],delete r[la],delete r[$c],delete r[sE],delete r[oE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function am(n){return n.tag===5||n.tag===3||n.tag===4}function lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=xl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}var St=null,Vn=!1;function Qr(n,r,a){for(a=a.child;a!==null;)um(n,r,a),a=a.sibling}function um(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Ot||Js(a,r);case 6:var c=St,d=Vn;St=null,Qr(n,r,a),St=c,Vn=d,St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Pn(n)):Bc(St,a.stateNode));break;case 4:c=St,d=Vn,St=a.stateNode.containerInfo,Vn=!0,Qr(n,r,a),St=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&Rh(a,r,v),d=d.next}while(d!==c)}Qr(n,r,a);break;case 1:if(!Ot&&(Js(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Qr(n,r,a),Ot=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function cm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new TE),r.forEach(function(c){var d=DE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Vn=!1;break e;case 3:St=T.stateNode.containerInfo,Vn=!0;break e;case 4:St=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(St===null)throw Error(t(160));um(p,v,d),St=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)hm(r,n),r=r.sibling}function hm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Yn(n),c&4){try{va(3,n,n.return),eu(3,n)}catch(oe){Ze(n,n.return,oe)}try{va(5,n,n.return)}catch(oe){Ze(n,n.return,oe)}}break;case 1:On(r,n),Yn(n),c&512&&a!==null&&Js(a,a.return);break;case 5:if(On(r,n),Yn(n),c&512&&a!==null&&Js(a,a.return),n.flags&32){var d=n.stateNode;try{Dr(d,"")}catch(oe){Ze(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&No(d,p),Uo(T,v);var F=Uo(T,p);for(v=0;v<C.length;v+=2){var K=C[v],Q=C[v+1];K==="style"?Mo(d,Q):K==="dangerouslySetInnerHTML"?Oo(d,Q):K==="children"?Dr(d,Q):Ee(d,K,Q,F)}switch(T){case"input":xo(d,p);break;case"textarea":ps(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ar(d,!!p.multiple,ee,!1):H!==!!p.multiple&&(p.defaultValue!=null?ar(d,!!p.multiple,p.defaultValue,!0):ar(d,!!p.multiple,p.multiple?[]:"",!1))}d[la]=p}catch(oe){Ze(n,n.return,oe)}}break;case 6:if(On(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){Ze(n,n.return,oe)}}break;case 3:if(On(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(oe){Ze(n,n.return,oe)}break;case 4:On(r,n),Yn(n);break;case 13:On(r,n),Yn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=Be())),c&4&&cm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||K,On(r,n),Ot=F):On(r,n),Yn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&n.mode&1)for(re=n,K=n.child;K!==null;){for(Q=re=K;re!==null;){switch(H=re,ee=H.child,H.tag){case 0:case 11:case 14:case 15:va(4,H,H.return);break;case 1:Js(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){Ze(c,a,oe)}}break;case 5:Js(H,H.return);break;case 22:if(H.memoizedState!==null){pm(Q);continue}}ee!==null?(ee.return=H,re=ee):pm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Lo("display",v))}catch(oe){Ze(n,n.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){Ze(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:On(r,n),Yn(n),c&4&&cm(n);break;case 21:break;default:On(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(am(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Dr(d,""),c.flags&=-33);var p=lm(n);kh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=lm(n);Ph(n,T,v);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function SE(n,r,a){re=n,dm(n)}function dm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Zl;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Ot;T=Zl;var F=Ot;if(Zl=v,(Ot=C)&&!F)for(re=d;re!==null;)v=re,C=v.child,v.tag===22&&v.memoizedState!==null?mm(d):C!==null?(C.return=v,re=C):mm(d);for(;p!==null;)re=p,dm(p),p=p.sibling;re=d,Zl=T,Ot=F}fm(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,re=p):fm(n)}}function fm(n){for(;re!==null;){var r=re;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||eu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&pp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}pp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&Ch(r)}catch(H){Ze(r,r.return,H)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function pm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function mm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{eu(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var p=r.return;try{Ch(r)}catch(C){Ze(r,p,C)}break;case 5:var v=r.return;try{Ch(r)}catch(C){Ze(r,v,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var AE=Math.ceil,tu=Te.ReactCurrentDispatcher,Nh=Te.ReactCurrentOwner,gn=Te.ReactCurrentBatchConfig,Ve=0,vt=null,st=null,At=0,on=0,Zs=qr(0),dt=0,Ea=null,Gi=0,nu=0,xh=0,wa=null,Gt=null,Dh=0,eo=1/0,Tr=null,ru=!1,Vh=null,Yr=null,iu=!1,Xr=null,su=0,Ta=0,Oh=null,ou=-1,au=0;function Bt(){return Ve&6?Be():ou!==-1?ou:ou=Be()}function Jr(n){return n.mode&1?Ve&2&&At!==0?At&-At:lE.transition!==null?(au===0&&(au=Mi()),au):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n):1}function Ln(n,r,a,c){if(50<Ta)throw Ta=0,Oh=null,Error(t(185));Mr(n,a,c),(!(Ve&2)||n!==vt)&&(n===vt&&(!(Ve&2)&&(nu|=a),dt===4&&Zr(n,At)),Qt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(eo=Be()+500,Ll&&Hr()))}function Qt(n,r){var a=n.callbackNode;cr(n,r);var c=Li(n,n===vt?At:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?aE(ym.bind(null,n)):np(ym.bind(null,n)),rE(function(){!(Ve&6)&&Hr()}),a=null;else{switch(Fr(c)){case 1:a=Vi;break;case 4:a=Vr;break;case 16:a=un;break;case 536870912:a=al;break;default:a=un}a=Am(a,gm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function gm(n,r){if(ou=-1,au=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=Li(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=lu(n,c);else{r=c;var d=Ve;Ve|=2;var p=vm();(vt!==n||At!==r)&&(Tr=null,eo=Be()+500,Yi(n,r));do try{PE();break}catch(T){_m(n,T)}while(!0);Jc(),tu.current=p,Ve=d,st!==null?r=0:(vt=null,At=0,r=dt)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=Ea,Yi(n,0),Zr(n,c),Qt(n,Be()),a;if(r===6)Zr(n,c);else{if(d=n.current.alternate,!(c&30)&&!RE(d)&&(r=lu(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Lh(n,p))),r===1))throw a=Ea,Yi(n,0),Zr(n,c),Qt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Xi(n,Gt,Tr);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Dh+500-Be(),10<r)){if(Li(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(Xi.bind(null,n,Gt,Tr),r);break}Xi(n,Gt,Tr);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Ut(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*AE(c/1960))-c,10<c){n.timeoutHandle=zc(Xi.bind(null,n,Gt,Tr),c);break}Xi(n,Gt,Tr);break;case 5:Xi(n,Gt,Tr);break;default:throw Error(t(329))}}}return Qt(n,Be()),n.callbackNode===a?gm.bind(null,n):null}function Lh(n,r){var a=wa;return n.current.memoizedState.isDehydrated&&(Yi(n,r).flags|=256),n=lu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Mh(r)),n}function Mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function RE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~xh,r&=~nu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function ym(n){if(Ve&6)throw Error(t(327));to();var r=Li(n,0);if(!(r&1))return Qt(n,Be()),null;var a=lu(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=Ea,Yi(n,0),Zr(n,r),Qt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Xi(n,Gt,Tr),Qt(n,Be()),null}function bh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(eo=Be()+500,Ll&&Hr())}}function Qi(n){Xr!==null&&Xr.tag===0&&!(Ve&6)&&to();var r=Ve;Ve|=1;var a=gn.transition,c=Pe;try{if(gn.transition=null,Pe=1,n)return n()}finally{Pe=c,gn.transition=a,Ve=r,!(Ve&6)&&Hr()}}function Fh(){on=Zs.current,We(Zs)}function Yi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,nE(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vl();break;case 3:Ys(),We(Wt),We(xt),oh();break;case 5:ih(c);break;case 4:Ys();break;case 13:We(Ye);break;case 19:We(Ye);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(vt=n,st=n=ei(n.current,null),At=on=r,dt=0,Ea=null,xh=nu=Gi=0,Gt=wa=null,Wi!==null){for(r=0;r<Wi.length;r++)if(a=Wi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Wi=null}return n}function _m(n,r){do{var a=st;try{if(Jc(),Wl.current=Ql,Hl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(Ki=0,_t=ht=Xe=null,pa=!1,ma=0,Nh.current=null,a===null||a.return===null){dt=1,Ea=r,st=null;break}e:{var p=n,v=a.return,T=a,C=r;if(r=At,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,K=T,Q=K.tag;if(!(K.mode&1)&&(Q===0||Q===11||Q===15)){var H=K.alternate;H?(K.updateQueue=H.updateQueue,K.memoizedState=H.memoizedState,K.lanes=H.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=$p(v);if(ee!==null){ee.flags&=-257,qp(ee,v,T,p,r),ee.mode&1&&Bp(p,F,r),r=ee,C=F;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else se.add(C);break e}else{if(!(r&1)){Bp(p,F,r),Uh();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var nt=$p(v);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),qp(nt,v,T,p,r),Yc(Xs(C,T));break e}}p=C=Xs(C,T),dt!==4&&(dt=2),wa===null?wa=[p]:wa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=jp(p,C,r);fp(p,M);break e;case 1:T=C;var k=p.type,b=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yr===null||!Yr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=zp(p,T,r);fp(p,X);break e}}p=p.return}while(p!==null)}wm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function vm(){var n=tu.current;return tu.current=Ql,n===null?Ql:n}function Uh(){(dt===0||dt===3||dt===2)&&(dt=4),vt===null||!(Gi&268435455)&&!(nu&268435455)||Zr(vt,At)}function lu(n,r){var a=Ve;Ve|=2;var c=vm();(vt!==n||At!==r)&&(Tr=null,Yi(n,r));do try{CE();break}catch(d){_m(n,d)}while(!0);if(Jc(),Ve=a,tu.current=c,st!==null)throw Error(t(261));return vt=null,At=0,dt}function CE(){for(;st!==null;)Em(st)}function PE(){for(;st!==null&&!sl();)Em(st)}function Em(n){var r=Sm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?wm(n):st=r,Nh.current=null}function wm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=wE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=EE(a,r,on),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Xi(n,r,a){var c=Pe,d=gn.transition;try{gn.transition=null,Pe=1,kE(n,r,a,c)}finally{gn.transition=d,Pe=c}return null}function kE(n,r,a,c){do to();while(Xr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===vt&&(st=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||iu||(iu=!0,Am(un,function(){return to(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=gn.transition,gn.transition=null;var v=Pe;Pe=1;var T=Ve;Ve|=4,Nh.current=null,IE(n,a),hm(a,n),Qv(Uc),jr=!!Fc,Uc=Fc=null,n.current=a,SE(a),Tc(),Ve=T,Pe=v,gn.transition=p}else n.current=a;if(iu&&(iu=!1,Xr=n,su=d),p=n.pendingLanes,p===0&&(Yr=null),ll(a.stateNode),Qt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ru)throw ru=!1,n=Vh,Vh=null,n;return su&1&&n.tag!==0&&to(),p=n.pendingLanes,p&1?n===Oh?Ta++:(Ta=0,Oh=n):Ta=0,Hr(),null}function to(){if(Xr!==null){var n=Fr(su),r=gn.transition,a=Pe;try{if(gn.transition=null,Pe=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,su=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,v=p.child;if(re.flags&16){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:va(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var H=K.sibling,ee=K.return;if(om(K),K===F){re=null;break}if(H!==null){H.return=ee,re=H;break}re=ee}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var nt=oe.sibling;oe.sibling=null,oe=nt}while(oe!==null)}}re=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,p.flags&2048)switch(p.tag){case 0:case 11:case 15:va(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var k=n.current;for(re=k;re!==null;){v=re;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,re=b;else e:for(v=k;re!==null;){if(T=re,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:eu(9,T)}}catch(ae){Ze(T,T.return,ae)}if(T===v){re=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,re=X;break e}re=T.return}}if(Ve=d,Hr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Pe=a,gn.transition=r}}return!1}function Tm(n,r,a){r=Xs(a,r),r=jp(n,r,1),n=Gr(n,r,1),r=Bt(),n!==null&&(Mr(n,1,r),Qt(n,r))}function Ze(n,r,a){if(n.tag===3)Tm(n,n,a);else for(;r!==null;){if(r.tag===3){Tm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Xs(a,n),n=zp(r,n,1),r=Gr(r,n,1),n=Bt(),r!==null&&(Mr(r,1,n),Qt(r,n));break}}r=r.return}}function NE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(dt===4||dt===3&&(At&130023424)===At&&500>Be()-Dh?Yi(n,0):xh|=a),Qt(n,r)}function Im(n,r){r===0&&(n.mode&1?(r=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):r=1);var a=Bt();n=vr(n,r),n!==null&&(Mr(n,r,a),Qt(n,a))}function xE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Im(n,a)}function DE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Im(n,a)}var Sm;Sm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Kt=!1,vE(n,r,a);Kt=!!(n.flags&131072)}else Kt=!1,Qe&&r.flags&1048576&&rp(r,bl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Jl(n,r),n=r.pendingProps;var d=$s(r,xt.current);Qs(r,a),d=uh(null,r,c,n,d,a);var p=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,Ol(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=Yl,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=Eh(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&Hc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Jl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=OE(c),n=Dn(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=Yp(null,r,c,n,a);break e;case 11:r=Wp(null,r,c,n,a);break e;case 14:r=Hp(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Yp(n,r,c,d,a);case 3:e:{if(Xp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,dp(n,r),$l(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Xs(Error(t(423)),r),r=Jp(n,r,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),r),r=Jp(n,r,c,a,d);break e}else for(sn=$r(r.stateNode.containerInfo.firstChild),rn=r,Qe=!0,xn=null,a=cp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){r=wr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return mp(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:p!==null&&jc(c,p)&&(r.flags|=32),Qp(n,r),zt(n,r,v,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return Zp(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ks(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Wp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,$e(jl,c._currentValue),c._currentValue=v,p!==null)if(Nn(p.value,v)){if(p.children===d.children&&!Wt.current){r=wr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Er(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?C.next=C:(C.next=K.next,K.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),eh(p.return,a,r),T.lanes|=a;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),eh(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=pn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Hp(n,r,c,d,a);case 15:return Kp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Jl(n,r),r.tag=1,Ht(c)?(n=!0,Ol(r)):n=!1,Qs(r,a),Fp(r,c,d),gh(r,c,d,a),Eh(null,r,c,!0,n,a);case 19:return tm(n,r,a);case 22:return Gp(n,r,a)}throw Error(t(156,r.tag))};function Am(n,r){return Ts(n,r)}function VE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new VE(n,r,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OE(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===kt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function uu(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return Ji(a.children,d,p,r);case I:v=8,d|=8;break;case R:return n=yn(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case A:return n=yn(13,a,r,d),n.elementType=A,n.lanes=p,n;case et:return n=yn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return cu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case kt:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ji(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function cu(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function LE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,p,v,T,C){return n=new LE(n,r,a,T,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(p),n}function ME(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Rm(n){if(!n)return Wr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return ep(n,a,r)}return r}function Cm(n,r,a,c,d,p,v,T,C){return n=$h(a,c,!0,n,d,p,v,T,C),n.context=Rm(null),a=n.current,c=Bt(),d=Jr(a),p=Er(c,d),p.callback=r??null,Gr(a,p,d),n.current.lanes=d,Mr(n,d,c),Qt(n,c),n}function hu(n,r,a,c){var d=r.current,p=Bt(),v=Jr(d);return a=Rm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Gr(d,r,v),n!==null&&(Ln(n,d,v,p),Bl(n,d,v)),v}function du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){Pm(n,r),(n=n.alternate)&&Pm(n,r)}function bE(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wh(n){this._internalRoot=n}fu.prototype.render=Wh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));hu(n,r,null,null)},fu.prototype.unmount=Wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){hu(null,n,null,null)}),r[mr]=null}};function fu(n){this._internalRoot=n}fu.prototype.unstable_scheduleHydration=function(n){if(n){var r=fl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&gl(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function FE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=du(v);p.call(F)}}var v=Cm(r,c,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=v,n[mr]=v.current,oa(n.nodeType===8?n.parentNode:n),Qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=du(C);T.call(F)}}var C=$h(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=C,n[mr]=C.current,oa(n.nodeType===8?n.parentNode:n),Qi(function(){hu(r,C,a,c)}),C}function mu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var C=du(v);T.call(C)}}hu(r,v,n,d)}else v=FE(a,r,n,d,c);return du(v)}hl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Or(r.pendingLanes);a!==0&&(br(r,a|1),Qt(r,Be()),!(Ve&6)&&(eo=Be()+500,Hr()))}break;case 13:Qi(function(){var c=vr(n,1);if(c!==null){var d=Bt();Ln(c,n,1,d)}}),qh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=Bt();Ln(r,n,134217728,a)}qh(n,134217728)}},dl=function(n){if(n.tag===13){var r=Jr(n),a=vr(n,r);if(a!==null){var c=Bt();Ln(a,n,r,c)}qh(n,r)}},fl=function(){return Pe},pl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},gs=function(n,r,a){switch(r){case"input":if(xo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Dl(c);if(!d)throw Error(t(90));cs(c),xo(c,d)}}}break;case"textarea":ps(n,a);break;case"select":r=a.value,r!=null&&ar(n,!!a.multiple,r,!1)}},ki=bh,zo=Qi;var UE={usingClientEntryPoint:!1,Events:[ua,zs,Dl,zn,jo,bh]},Ia={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jE={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Oi=gu.inject(jE),Zt=gu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(r))throw Error(t(200));return ME(n,r,null,a)},Yt.createRoot=function(n,r){if(!Hh(n))throw Error(t(299));var a=!1,c="",d=km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,oa(n.nodeType===8?n.parentNode:n),new Wh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Qi(n)},Yt.hydrate=function(n,r,a){if(!pu(r))throw Error(t(200));return mu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Hh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Cm(r,null,n,1,a??null,d,!1,p,v),n[mr]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new fu(r)},Yt.render=function(n,r,a){if(!pu(r))throw Error(t(200));return mu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!pu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){mu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Yt.unstable_batchedUpdates=bh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!pu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return mu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Fm;function GE(){if(Fm)return Qh.exports;Fm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=KE(),Qh.exports}var Um;function QE(){if(Um)return yu;Um=1;var i=GE();return yu.createRoot=i.createRoot,yu.hydrateRoot=i.hydrateRoot,yu}var YE=QE();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=ft.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>ft.createElement("svg",{ref:g,...JE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:uy("lucide",o),...m},[...h.map(([_,w])=>ft.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(i,e)=>{const t=ft.forwardRef(({className:s,...o},u)=>ft.createElement(ZE,{ref:u,iconNode:e,className:uy(`lucide-${XE(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],tw=Un("Camera",ew);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],rw=Un("CircleAlert",nw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],sw=Un("Fingerprint",iw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],aw=Un("Plus",ow);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],uw=Un("RefreshCw",lw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],hw=Un("Search",cw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],fw=Un("Shield",dw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mw=Un("TriangleAlert",pw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],cy=Un("UserCheck",gw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],_w=Un("UserX",yw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],hy=Un("Users",vw);var jm={};/**
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
 */const dy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ew=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,S=(u&3)<<4|m>>4;let N=(m&15)<<2|_>>6,j=_&63;g||(j=64,h||(N=64)),s.push(t[w],t[S],t[N],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(dy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ew(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||S==null)throw new ww;const N=u<<2|m>>4;if(s.push(N),_!==64){const j=m<<4&240|_>>2;if(s.push(j),S!==64){const W=_<<6&192|S;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(i){const e=dy(i);return fy.encodeByteArray(e,!0)},bu=function(i){return Tw(i).replace(/\./g,"")},py=function(i){try{return fy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Fu(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Iw(t)||(i[t]=Fu(i[t],e[t]));return i}function Iw(i){return i!=="__proto__"}/**
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
 */function my(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sw=()=>my().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof jm>"u")return;const i=jm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Rw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&py(i[1]);return e&&JSON.parse(e)},tc=()=>{try{return Sw()||Aw()||Rw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},gy=i=>{var e,t;return(t=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Cw=i=>{const e=gy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},yy=()=>{var i;return(i=tc())===null||i===void 0?void 0:i.config},_y=i=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[bu(JSON.stringify(t)),bu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function xw(){var i;const e=(i=tc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof window<"u"||vy()}function vy(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function bw(){return!xw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fw(){try{return typeof indexedDB=="object"}catch{return!1}}function Uw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const jw="FirebaseError";class ir extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jw,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?zw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new ir(o,m,s)}}function zw(i,e){return i.replace(Bw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Bw=/\{\$([^}]+)}/g;/**
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
 */function zm(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function $w(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Uu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Bm(u)&&Bm(h)){if(!Uu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Bm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Aa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ra(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Ey(i,e){const t=new qw(i,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Jh(){}/**
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
 */function Jt(i){return i&&i._delegate?i._delegate:i}class fi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Hw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(i){return i===Zi?void 0:i}function Gw(i){return i.instantiationMode==="EAGER"}/**
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
 */class wy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Dd=[];var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const Ty={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Qw=Re.INFO,Yw={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Xw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Yw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Xw,this._userLogHandler=null,Dd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ty[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}function Jw(i){Dd.forEach(e=>{e.setLogLevel(i)})}function Zw(i,e){for(const t of Dd){let s=null;e&&e.level&&(s=Ty[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(o,u,...h)=>{const m=h.map(g=>{if(g==null)return null;if(typeof g=="string")return g;if(typeof g=="number"||typeof g=="boolean")return g.toString();if(g instanceof Error)return g.message;try{return JSON.stringify(g)}catch{return null}}).filter(g=>g).join(" ");u>=(s??o.logLevel)&&i({level:Re[u].toLowerCase(),message:m,args:h,type:o.name})}}}const eT=(i,e)=>e.some(t=>i instanceof t);let $m,qm;function tT(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,ud=new WeakMap,Sy=new WeakMap,Zh=new WeakMap,Vd=new WeakMap;function rT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(li(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Iy.set(t,i)}).catch(()=>{}),Vd.set(e,i),e}function iT(i){if(ud.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ud.set(i,e)}let cd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ud.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Sy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return li(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function sT(i){cd=i(cd)}function oT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ed(this),e,...t);return Sy.set(s,e.sort?e.sort():[e]),li(s)}:nT().includes(i)?function(...e){return i.apply(ed(this),e),li(Iy.get(this))}:function(...e){return li(i.apply(ed(this),e))}}function aT(i){return typeof i=="function"?oT(i):(i instanceof IDBTransaction&&iT(i),eT(i,tT())?new Proxy(i,cd):i)}function li(i){if(i instanceof IDBRequest)return rT(i);if(Zh.has(i))return Zh.get(i);const e=aT(i);return e!==i&&(Zh.set(i,e),Vd.set(e,i)),e}const ed=i=>Vd.get(i);function lT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=li(h);return s&&h.addEventListener("upgradeneeded",g=>{s(li(h.result),g.oldVersion,g.newVersion,li(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const uT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],td=new Map;function Wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=cT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return td.set(e,u),u}sT(i=>({...i,get:(e,t,s)=>Wm(e,t)||i.get(e,t,s),has:(e,t)=>!!Wm(e,t)||i.has(e,t)}));/**
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
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",hd="0.10.18";/**
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
 */const Cr=new nc("@firebase/app"),fT="@firebase/app-compat",pT="@firebase/analytics-compat",mT="@firebase/analytics",gT="@firebase/app-check-compat",yT="@firebase/app-check",_T="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",wT="@firebase/data-connect",TT="@firebase/database-compat",IT="@firebase/functions",ST="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",CT="@firebase/messaging",PT="@firebase/messaging-compat",kT="@firebase/performance",NT="@firebase/performance-compat",xT="@firebase/remote-config",DT="@firebase/remote-config-compat",VT="@firebase/storage",OT="@firebase/storage-compat",LT="@firebase/firestore",MT="@firebase/vertexai",bT="@firebase/firestore-compat",FT="firebase",UT="11.2.0";/**
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
 */const pi="[DEFAULT]",jT={[ju]:"fire-core",[fT]:"fire-core-compat",[mT]:"fire-analytics",[pT]:"fire-analytics-compat",[yT]:"fire-app-check",[gT]:"fire-app-check-compat",[_T]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[wT]:"fire-data-connect",[TT]:"fire-rtdb-compat",[IT]:"fire-fn",[ST]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[CT]:"fire-fcm",[PT]:"fire-fcm-compat",[kT]:"fire-perf",[NT]:"fire-perf-compat",[xT]:"fire-rc",[DT]:"fire-rc-compat",[VT]:"fire-gcs",[OT]:"fire-gcs-compat",[LT]:"fire-fst",[bT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const mi=new Map,fo=new Map,po=new Map;function Ma(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ay(i,e){i.container.addOrOverwriteComponent(e)}function gi(i){const e=i.name;if(po.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,i);for(const t of mi.values())Ma(t,i);for(const t of fo.values())Ma(t,i);return!0}function Ga(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function zT(i,e,t=pi){Ga(i,e).clearInstance(t)}function Ry(i){return i.options!==void 0}function Jn(i){return i.settings!==void 0}function BT(){po.clear()}/**
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
 */const $T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new is("app","Firebase",$T);/**
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
 */let Cy=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}};/**
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
 */class qT extends Cy{constructor(e,t,s,o){const u=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,h={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,h,o);else{const m=e;super(m.options,h,o)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:u},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,En(ju,hd,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ld(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw vn.create("server-app-deleted")}}/**
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
 */const Ti=UT;function rc(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw vn.create("bad-app-name",{appName:String(o)});if(t||(t=yy()),!t)throw vn.create("no-options");const u=mi.get(o);if(u){if(Uu(t,u.options)&&Uu(s,u.config))return u;throw vn.create("duplicate-app",{appName:o})}const h=new wy(o);for(const g of po.values())h.addComponent(g);const m=new Cy(t,s,h);return mi.set(o,m),m}function WT(i,e){if(Dw()&&!vy())throw vn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Ry(i)?t=i.options:t=i;const s=Object.assign(Object.assign({},e),t);s.releaseOnDeref!==void 0&&delete s.releaseOnDeref;const o=_=>[..._].reduce((w,S)=>Math.imul(31,w)+S.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw vn.create("finalization-registry-not-supported",{});const u=""+o(JSON.stringify(s)),h=fo.get(u);if(h)return h.incRefCount(e.releaseOnDeref),h;const m=new wy(u);for(const _ of po.values())m.addComponent(_);const g=new qT(t,e,u,m);return fo.set(u,g),g}function Od(i=pi){const e=mi.get(i);if(!e&&i===pi&&yy())return rc();if(!e)throw vn.create("no-app",{appName:i});return e}function HT(){return Array.from(mi.values())}async function Ld(i){let e=!1;const t=i.name;mi.has(t)?(e=!0,mi.delete(t)):fo.has(t)&&i.decRefCount()<=0&&(fo.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function En(i,e,t){var s;let o=(s=jT[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(m.join(" "));return}gi(new fi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function Py(i,e){if(i!==null&&typeof i!="function")throw vn.create("invalid-log-argument");Zw(i,e)}function ky(i){Jw(i)}/**
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
 */const KT="firebase-heartbeat-database",GT=1,ba="firebase-heartbeat-store";let nd=null;function Ny(){return nd||(nd=lT(KT,GT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw vn.create("idb-open",{originalErrorMessage:i.message})})),nd}async function QT(i){try{const t=(await Ny()).transaction(ba),s=await t.objectStore(ba).get(xy(i));return await t.done,s}catch(e){if(e instanceof ir)Cr.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function Hm(i,e){try{const s=(await Ny()).transaction(ba,"readwrite");await s.objectStore(ba).put(e,xy(i)),await s.done}catch(t){if(t instanceof ir)Cr.warn(t.message);else{const s=vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function xy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const YT=1024,XT=30*24*60*60*1e3;class JT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Km();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=XT}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Km(),{heartbeatsToSend:s,unsentEntries:o}=ZT(this._heartbeatsCache.heartbeats),u=bu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function Km(){return new Date().toISOString().substring(0,10)}function ZT(i,e=YT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Gm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Gm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fw()?Uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await QT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Gm(i){return bu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function tI(i){gi(new fi("platform-logger",e=>new hT(e),"PRIVATE")),gi(new fi("heartbeat",e=>new JT(e),"PRIVATE")),En(ju,hd,i),En(ju,hd,"esm2017"),En("fire-js","")}tI("");const nI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ir,SDK_VERSION:Ti,_DEFAULT_ENTRY_NAME:pi,_addComponent:Ma,_addOrOverwriteComponent:Ay,_apps:mi,_clearComponents:BT,_components:po,_getProvider:Ga,_isFirebaseApp:Ry,_isFirebaseServerApp:Jn,_registerComponent:gi,_removeServiceInstance:zT,_serverApps:fo,deleteApp:Ld,getApp:Od,getApps:HT,initializeApp:rc,initializeServerApp:WT,onLog:Py,registerVersion:En,setLogLevel:ky},Symbol.toStringTag,{value:"Module"}));var Qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,Dy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function R(){}R.prototype=I.prototype,x.D=I.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,D,O){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return I.prototype[D].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=x.g[0],R=x.g[1],D=x.g[2];var O=x.g[3],A=I+(O^R&(D^O))+P[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[1]+3905402710&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[2]+606105819&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[3]+3250441966&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[5]+1200080426&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[6]+2821735955&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[7]+4249261313&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[9]+2336552879&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[10]+4294925233&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[11]+2304563134&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(O^R&(D^O))+P[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=O+(D^I&(R^D))+P[13]+4254626195&4294967295,O=I+(A<<12&4294967295|A>>>20),A=D+(R^O&(I^R))+P[14]+2792965006&4294967295,D=O+(A<<17&4294967295|A>>>15),A=R+(I^D&(O^I))+P[15]+1236535329&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(D^O&(R^D))+P[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[6]+3225465664&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[11]+643717713&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[0]+3921069994&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[10]+38016083&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[15]+3634488961&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[4]+3889429448&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[14]+3275163606&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[3]+4107603335&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[8]+1163531501&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^O&(R^D))+P[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=O+(R^D&(I^R))+P[2]+4243563512&4294967295,O=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(O^I))+P[7]+1735328473&4294967295,D=O+(A<<14&4294967295|A>>>18),A=R+(O^I&(D^O))+P[12]+2368359562&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(R^D^O)+P[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[8]+2272392833&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[11]+1839030562&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[14]+4259657740&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[4]+1272893353&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[7]+4139469664&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[10]+3200236656&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[0]+3936430074&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[3]+3572445317&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[6]+76029189&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^O)+P[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=O+(I^R^D)+P[12]+3873151461&4294967295,O=I+(A<<11&4294967295|A>>>21),A=D+(O^I^R)+P[15]+530742520&4294967295,D=O+(A<<16&4294967295|A>>>16),A=R+(D^O^I)+P[2]+3299628645&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(D^(R|~O))+P[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[7]+1126891415&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[14]+2878612391&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[5]+4237533241&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[3]+2399980690&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[10]+4293915773&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[1]+2240044497&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[15]+4264355552&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[6]+2734768916&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[13]+1309151649&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~O))+P[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=O+(R^(I|~D))+P[11]+3174756917&4294967295,O=I+(A<<10&4294967295|A>>>22),A=D+(I^(O|~R))+P[2]+718787259&4294967295,D=O+(A<<15&4294967295|A>>>17),A=R+(O^(D|~I))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var R=I-this.blockSize,P=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=R;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<I;)if(P[D++]=x.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<I;)if(P[D++]=x[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var R=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=R&255,R/=256;for(this.u(x),x=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)x[R++]=this.g[I]>>>P&255;return x};function u(x,I){var R=m;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=I(x)}function h(x,I){this.h=I;for(var R=[],P=!0,D=x.length-1;0<=D;D--){var O=x[D]|0;P&&O==I||(R[D]=O,P=!1)}this.g=R}var m={};function g(x){return-128<=x&&128>x?u(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return S;if(0>x)return B(_(-x));for(var I=[],R=1,P=0;x>=R;P++)I[P]=x/R|0,R*=4294967296;return new h(I,0)}function w(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return B(w(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),P=S,D=0;D<x.length;D+=8){var O=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+O),I);8>O?(O=_(Math.pow(I,O)),P=P.j(O).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var S=g(0),N=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Y(this))return-B(this).m();for(var x=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*I,I*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(W(this))return"0";if(Y(this))return"-"+B(this).toString(x);for(var I=_(Math.pow(x,6)),R=this,P="";;){var D=Te(R,I).g;R=me(R,D.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=D,W(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function W(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function Y(x){return x.h==-1}i.l=function(x){return x=me(this,x),Y(x)?-1:W(x)?0:1};function B(x){for(var I=x.g.length,R=[],P=0;P<I;P++)R[P]=~x.g[P];return new h(R,~x.h).add(N)}i.abs=function(){return Y(this)?B(this):this},i.add=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0,D=0;D<=I;D++){var O=P+(this.i(D)&65535)+(x.i(D)&65535),A=(O>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);P=A>>>16,O&=65535,A&=65535,R[D]=A<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function me(x,I){return x.add(B(I))}i.j=function(x){if(W(this)||W(x))return S;if(Y(this))return Y(x)?B(this).j(B(x)):B(B(this).j(x));if(Y(x))return B(this.j(B(x)));if(0>this.l(j)&&0>x.l(j))return _(this.m()*x.m());for(var I=this.g.length+x.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<x.g.length;D++){var O=this.i(P)>>>16,A=this.i(P)&65535,et=x.i(D)>>>16,kt=x.i(D)&65535;R[2*P+2*D]+=A*kt,fe(R,2*P+2*D),R[2*P+2*D+1]+=O*kt,fe(R,2*P+2*D+1),R[2*P+2*D+1]+=A*et,fe(R,2*P+2*D+1),R[2*P+2*D+2]+=O*et,fe(R,2*P+2*D+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function fe(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Ee(x,I){this.g=x,this.h=I}function Te(x,I){if(W(I))throw Error("division by zero");if(W(x))return new Ee(S,S);if(Y(x))return I=Te(B(x),I),new Ee(B(I.g),B(I.h));if(Y(I))return I=Te(x,B(I)),new Ee(B(I.g),I.h);if(30<x.g.length){if(Y(x)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=N,P=I;0>=P.l(x);)R=Ke(R),P=Ke(P);var D=Ae(R,1),O=Ae(P,1);for(P=Ae(P,2),R=Ae(R,2);!W(P);){var A=O.add(P);0>=A.l(x)&&(D=D.add(R),O=A),P=Ae(P,1),R=Ae(R,1)}return I=me(x,D.j(I)),new Ee(D,I)}for(D=S;0<=x.l(I);){for(R=Math.max(1,Math.floor(x.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(R),A=O.j(I);Y(A)||0<A.l(x);)R-=P,O=_(R),A=O.j(I);W(O)&&(O=N),D=D.add(O),x=me(x,A)}return new Ee(D,x)}i.A=function(x){return Te(this,x).h},i.and=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&x.i(P);return new h(R,this.h&x.h)},i.or=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|x.i(P);return new h(R,this.h|x.h)},i.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^x.i(P);return new h(R,this.h^x.h)};function Ke(x){for(var I=x.g.length+1,R=[],P=0;P<I;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(R,x.h)}function Ae(x,I){var R=I>>5;I%=32;for(var P=x.g.length-R,D=[],O=0;O<P;O++)D[O]=0<I?x.i(O+R)>>>I|x.i(O+R+1)<<32-I:x.i(O+R);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Dy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,ui=h}).apply(typeof Qm<"u"?Qm:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vy,Ca,Oy,Au,dd,Ly,My,by;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function S(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function N(l,f,y){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,N.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,J)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function B(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let J=0;J<U;J++)l[L+J]=E[J]}else l.push(E)}}class me{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function Ee(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var Ke=Ee().indexOf("Gecko")!=-1&&!(Ee().toLowerCase().indexOf("webkit")!=-1&&Ee().indexOf("Edge")==-1)&&!(Ee().indexOf("Trident")!=-1||Ee().indexOf("MSIE")!=-1)&&Ee().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function x(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new me(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,ce=new et,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){O(y)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ke){e:{try{Te(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}W(Ie,le);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sr(l){this.src=l,this.g={},this.h=0}sr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=xr(l,f,E,L);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new ze(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function cs(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function xr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),hs={};function No(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)No(l,f[U],y,E,L);return null}return y=Vo(y),l&&l[Le]?l.K(f,y,_(E)?!!E.capture:!1,L):xo(l,f,y,!1,E,L)}function xo(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,Fe=fs(l);if(Fe||(l[Ai]=Fe=new sr(l)),y=Fe.add(f,y,E,J,U),y.proxy)return y;if(E=nl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)we||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(ar(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function nl(){function l(y){return f.call(l.src,l.listener,y)}const f=Do;return l}function ds(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)ds(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=Vo(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=xr(U,y,E,L),-1<y&&(gt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=fs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=xr(f,y,E,L)),(y=-1<l?f[l]:null)&&or(y))}function or(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])cs(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(ar(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=fs(f))?(cs(y,l),y.h==0&&(y.src=null,f[Ai]=null)):gt(l)}}}function ar(l){return l in hs?hs[l]:hs[l]="on"+l}function Do(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&or(l),l=y.call(E,f)}return l}function fs(l){return l=l[Ai],l instanceof sr?l:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(l){return typeof l=="function"?l:(l[ps]||(l[ps]=function(f){return l.handleEvent(f)}),l[ps])}function lt(){$.call(this),this.i=new sr(this),this.M=this,this.F=null}W(lt,$),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,y,E){ds(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var L=f;f=new le(E,l),P(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=lr(J,E,!0,f)&&L}if(J=f.g=l,L=lr(J,E,!0,f)&&L,L=lr(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=lr(J,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)gt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function lr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var Fe=J.listener,ct=J.ha||J.src;J.fa&&cs(l.i,J),L=Fe.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function Oo(l,f,y){if(typeof l=="function")y&&(l=N(l,y));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Dr(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,Dr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ri extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Dr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(l){$.call(this),this.h=l,this.g={}}W(Ci,$);var Lo=[];function Mo(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&or(f)},l),l.g={}}Ci.prototype.N=function(){Ci.aa.N.call(this),Mo(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bo=m.JSON.stringify,Fo=m.JSON.parse,Uo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Pi(){}Pi.prototype.h=null;function ms(l){return l.h||(l.h=l.i())}function gs(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){le.call(this,"d")}W(jn,le);function ys(){le.call(this,"c")}W(ys,le);var zn={},jo=null;function ki(){return jo=jo||new lt}zn.La="serverreachability";function zo(l){le.call(this,zn.La,l)}W(zo,le);function ur(l){const f=ki();ut(f,new zo(f))}zn.STAT_EVENT="statevent";function Bo(l,f){le.call(this,zn.STAT_EVENT,l),this.stat=f}W(Bo,le);function tt(l){const f=ki();ut(f,new Bo(f,l))}zn.Ma="timingevent";function _s(l,f){le.call(this,zn.Ma,l),this.size=f}W(_s,le);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function xi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var J="",Fe=U.split("&"),ct=0;ct<Fe.length;ct++){var xe=Fe[ct].split("=");if(1<xe.length){var yt=xe[0];xe=xe[1];var it=yt.split("_");J=2<=it.length&&it[1]=="type"?J+(yt+"="+xe+"&"):J+(yt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function vs(l,f,y,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function Tn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+wc(l,y)+(E?" "+E:"")})}function $o(l,f){l.info(function(){return"TIMEOUT: "+f})}Ni.prototype.info=function(){};function wc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return bo(y)}catch{return f}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Di(){}W(Di,Pi),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},In=new Di;function Sn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var qo={},ws={};function Ts(l,f,y){l.L=1,l.v=br(en(f)),l.m=y,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),Be(l),l.A=en(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(y.i,"t",E),l.C=0,y=l.j.J,l.h=new il,l.g=Tl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ri(N(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Lo[0]=L.toString()),L=Lo);for(var U=0;U<L.length;U++){var J=No(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ur(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Xo(this.g)))){this.J||it!=4||f==7||(f==8||0>=hn?ur(3):ur(2)),Vi(this);var y=this.g.Z();this.X=y;t:if(sl(this)){var E=Xo(this.g);l="";var L=E.length,U=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Vr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,vs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ct=this.g;if((Fe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Fe)){var xe=Fe;break t}}xe=null}if(y=xe)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,y);else{this.o=!1,this.s=3,tt(12),un(this),Vr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<J.length;)if(nn=Tc(this,J),nn==ws){it==4&&(this.s=4,tt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==qo){this.s=4,tt(15),Tn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,nn,null),Ho(this,nn);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,J,"[Invalid Chunked Response]"),un(this),Vr(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Zo(yt),yt.M=!0,tt(11))}}else Tn(this.i,this.l,J,null),Ho(this,J);it==4&&un(this),this.o&&!this.J&&(it==4?Vs(this.j,this):(this.o=!1,Be(this)))}else Ps(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),un(this),Vr(this)}}}catch{}finally{}};function sl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ws:(y=Number(f.substring(y,E)),isNaN(y)?qo:(E+=1,E+y>f.length?ws:(f=f.slice(E,E+y),l.C=E+y,f)))}Sn.prototype.cancel=function(){this.J=!0,un(this)};function Be(l){l.S=Date.now()+l.I,ol(l,l.I)}function ol(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(N(l.ba,l),f)}function Vi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?($o(this.i,this.A),this.L!=2&&(ur(),tt(17)),un(this),this.s=2,Vr(this)):ol(this,this.S-l)};function Vr(l){l.j.G==0||l.J||Vs(l.j,l)}function un(l){Vi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Mo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ho(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ds(y),kn(y);else break e;xs(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(N(y.Za,y),6e3));if(1>=ll(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else pr(y,11)}else if((l.K||y.g==l)&&Ds(y),!fe(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let xe=L[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const yt=xe[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const it=xe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const hn=xe[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const nn=l.g;if(nn){const ji=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var U=E.h;U.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ko(U,U.h),U.h=null))}if(E.D){const Ls=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(E.ya=Ls,je(E.I,E.D,Ls))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=wl(E,E.J?E.ia:null,E.W),J.K){ul(E.h,J);var Fe=J,ct=E.L;ct&&(Fe.I=ct),Fe.B&&(Vi(Fe),Be(Fe)),E.g=J}else Ui(E);0<y.i.length&&Wn(y)}else xe[0]!="stop"&&xe[0]!="close"||pr(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?pr(y,7):It(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ur(4)}catch{}}var al=class{constructor(l,f){this.g=l,this.map=f}};function Oi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ll(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ko(l,f){l.g?l.g.add(f):l.h=f}function ul(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Oi.prototype.cancel=function(){if(this.i=cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function cl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function Is(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ss(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Or(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ss(l),E=Is(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function cr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof cr){this.h=l.h,Mi(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var f=l.i,y=new Bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Mr(this,y),this.m=l.m}else l&&(f=String(l).match(Li))?(this.h=!1,Mi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Lr(this,f[4]),this.l=Pe(f[5]||"",!0),Mr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}cr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fr(f,As,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fr(f,As,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fr(y,y.charAt(0)=="/"?fl:dl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fr(y,Go)),l.join("")};function en(l){return new cr(l)}function Mi(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Mr(l,f,y){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(y||(f=Fr(f,pl)),l.i=new Bn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function br(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,hl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function hl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var As=/[#\/\?@]/g,dl=/[#\?:]/g,fl=/[#\?]/g,pl=/[#\?@]/g,Go=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ic(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,f){Tt(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function An(l,f){Tt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return Tt(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=cn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ur(l,f,y){An(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),Y(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),l.push(L)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(An(this,E),Ur(this,L,y))},l)),l.j=f}function Sc(l,f){const y=new Ni;if(m.Image){const E=new Image;E.onload=j($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j($t,y,"TestLoadImage: error",!1,f,E),E.onabort=j($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function ml(l,f){const y=new Ni,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Ac(){this.g=new Uo}function gl(l,f,y){const E=y||"";try{Or(l,function(L,U){let J=L;_(L)&&(J=bo(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function hr(l){this.l=l.Ub||null,this.j=l.eb||!1}W(hr,Pi),hr.prototype.g=function(){return new bi(this.l,this.j)},hr.prototype.i=function(l){return function(){return l}}({});function bi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(bi,lt),i=bi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function yl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):Pn(this),this.readyState==3&&yl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function jr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=dr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Ge,lt);var Rc=/^https?$/i,Qo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?ms(this.o):ms(In),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Fi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Qo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Fi(this,U)}};function Fi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),tn(l)}function Rs(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},i.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)Oo(l.Ea,0,l);else if(ut(l,"readystatechange"),qt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(l.D).match(Li)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Rc.test(L?L.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Rs(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Cs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function Cs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Fo(f)}};function Xo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var y=D(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}x(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Jo(l){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(l&&l.concurrentRequestLimit),this.Da=new Ac,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Jo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=wl(this,null,this.W),Wn(this)};function It(l){if(ks(l),l.G==3){var f=l.U++,y=en(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),fr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=br(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Tl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}El(l)}function kn(l){l.g&&(Zo(l),l.g.cancel(),l.g=null)}function ks(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ds(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Wn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.B=0}}function Cc(l,f){return ll(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(N(l.Ga,l,f),vl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=zr(this,L,f),y=en(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),fr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(dr(U)))+"&"+f:this.m&&jr(y,this.m,U)),Ko(this.h,L),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),L.T=!0,Ts(L,y,null)):Ts(L,y,f),this.G=2}}else this.G==3&&(l?Ns(this,l):this.i.length==0||Zt(this.h)||Ns(this))};function Ns(l,f){var y;f?y=f.l:y=l.U++;const E=en(l.I);je(E,"SID",l.K),je(E,"RID",y),je(E,"AID",l.T),fr(l,E),l.m&&l.o&&jr(E,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ko(l.h,y),Ts(y,E,f)}function fr(l,f){l.H&&Ae(l.H,function(y,E){je(f,E,y)}),l.l&&Or({},function(y,E){je(f,E,y)})}function zr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?N(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let Fe=!0;for(let ct=0;ct<y;ct++){let xe=L[ct].g;const yt=L[ct].map;if(xe-=U,0>xe)U=Math.max(0,L[ct].g-100),Fe=!1;else try{gl(yt,J,"req"+xe+"_")}catch{E&&E(yt)}}if(Fe){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ui(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),ce.add(f,l),l.v=0}}function xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(N(l.Fa,l),vl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,_l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(N(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),_l(this))};function Zo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function _l(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),fr(l,f),l.m&&l.o&&jr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=br(en(f)),y.m=null,y.P=!0,Wo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),xs(this),tt(19))};function Ds(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Vs(l,f){var y=null;if(l.g==f){Ds(l),Zo(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,ul(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=ki(),ut(E,new _s(E,y)),Wn(l)}else Ui(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Cc(l,f)||E==2&&xs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function vl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function pr(l,f){if(l.j.info("Error code "+f),f==2){var y=N(l.fb,l),E=l.Xa;const L=!E;E=new cr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Mi(E,"https"),br(E),L?Sc(E.toString(),y):ml(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),El(l),ks(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function El(l){if(l.G=0,l.ka=[],l.l){const f=cl(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function wl(l,f,y){var E=y instanceof cr?en(y):new cr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Lr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new cr(null);E&&Mi(U,E),f&&(U.g=f),L&&Lr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&je(E,y,f),je(E,"VER",l.la),fr(l,E),E}function Tl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new hr({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}i=ea.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Os(){}Os.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){lt.call(this),this.g=new Jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Hn(this)}W(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){It(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=bo(l),l=y);f.i.push(new al(f.Ya++,l)),f.G==3&&Wn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,jt.aa.N.call(this)};function Il(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}W(Il,jn);function Sl(){ys.call(this),this.status=1}W(Sl,ys);function Hn(l){this.g=l}W(Hn,ea),Hn.prototype.ua=function(){ut(this.g,"a")},Hn.prototype.ta=function(l){ut(this.g,new Il(l))},Hn.prototype.sa=function(l){ut(this.g,new Sl)},Hn.prototype.ra=function(){ut(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,by=function(){return new Os},My=function(){return ki()},Ly=zn,dd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Au=Es,rl.COMPLETE="complete",Oy=rl,gs.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ca=gs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Vy=Ge}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const Ym="@firebase/firestore";/**
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
 */let Io="11.2.0";/**
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
 */const ns=new nc("@firebase/firestore");function ro(){return ns.logLevel}function ne(i,...e){if(ns.logLevel<=Re.DEBUG){const t=e.map(Md);ns.debug(`Firestore (${Io}): ${i}`,...t)}}function Pr(i,...e){if(ns.logLevel<=Re.ERROR){const t=e.map(Md);ns.error(`Firestore (${Io}): ${i}`,...t)}}function mo(i,...e){if(ns.logLevel<=Re.WARN){const t=e.map(Md);ns.warn(`Firestore (${Io}): ${i}`,...t)}}function Md(i){if(typeof i=="string")return i;try{/**
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
 */function ye(i="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+i;throw Pr(e),new Error(e)}function be(i,e){i||ye()}function ve(i,e){return i}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ci{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class iI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ci,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ci)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new Fy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Mt(e)}}class oI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class aI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new oI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new lI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Uy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=cI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function go(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(),s===void 0?s=e.length-t:s>e.length-t&&ye(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class He extends Xn{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new He(t)}static emptyPath(){return new He([])}}const hI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Xn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return hI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}function dI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new yi(o,ue.empty(),e)}function fI(i){return new yi(i.readTime,i.key,-1)}class yi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yi(_e.min(),ue.empty(),-1)}static max(){return new yi(_e.max(),ue.empty(),-1)}}function pI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */const mI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function So(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==mI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function yI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ao(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function sc(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function _I(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function vI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Xm(e)),e=EI(i.get(t),e);return Xm(e)}function EI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Xm(i){return i+""}/**
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
 */function Jm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ss(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function jy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zm(this.data.getIterator())}getIteratorFrom(e){return new Zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new zy("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const wI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(i){if(be(!!i),typeof i=="string"){let e=0;const t=wI.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function vi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */function bd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function oc(i){const e=i.mapValue.fields.__previous_value__;return bd(e)?oc(e):e}function Fa(i){const e=_i(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class TI{constructor(e,t,s,o,u,h,m,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_}}class Ua{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eu={mapValue:{}};function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?bd(i)?4:SI(i)?9007199254740991:II(i)?10:11:ye()}function rr(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Fa(i).isEqual(Fa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_i(o.timestampValue),m=_i(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return vi(o.bytesValue).isEqual(vi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?zu(h)===zu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Jm(h)!==Jm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!rr(h[g],m[g])))return!1;return!0}(i,e);default:return ye()}}function ja(i,e){return(i.values||[]).find(t=>rr(t,e))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return eg(i.timestampValue,e.timestampValue);case 4:return eg(Fa(i),Fa(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const m=vi(u),g=vi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=ke(m[_],g[_]);if(w!==0)return w}return ke(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=ke(rt(u.latitude),rt(h.latitude));return m!==0?m:ke(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return tg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,_,w;const S=u.fields||{},N=h.fields||{},j=(m=S.value)===null||m===void 0?void 0:m.arrayValue,W=(g=N.value)===null||g===void 0?void 0:g.arrayValue,Y=ke(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=W==null?void 0:W.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:tg(j,W)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===Eu.mapValue&&h===Eu.mapValue)return 0;if(u===Eu.mapValue)return 1;if(h===Eu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const N=ke(g[S],w[S]);if(N!==0)return N;const j=yo(m[g[S]],_[w[S]]);if(j!==0)return j}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw ye()}}function eg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=_i(i),s=_i(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function tg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function _o(i){return fd(i)}function fd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=_i(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return vi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ue.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=fd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${fd(t.fields[h])}`;return o+"}"}(i.mapValue):ye()}function Ru(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Ru(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return ss(s.fields,(u,h)=>{o+=u.length+Ru(h)}),o}(i.mapValue);default:throw ye()}}function ng(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function pd(i){return!!i&&"integerValue"in i}function Fd(i){return!!i&&"arrayValue"in i}function rg(i){return!!i&&"nullValue"in i}function ig(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Cu(i){return!!i&&"mapValue"in i}function II(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function xa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ss(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=xa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function SI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=xa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Cu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Cu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ss(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new _n(xa(this.value))}}function By(i){const e=[];return ss(i.fields,(t,s)=>{const o=new Ct([t]);if(Cu(s)){const u=By(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Mn(e)}/**
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
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,_e.min(),_e.min(),_e.min(),_n.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,_e.min(),_e.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,_e.min(),_e.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,t){this.position=e,this.inclusive=t}}function sg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function og(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class za{constructor(e,t="asc"){this.field=e,this.dir=t}}function AI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class $y{}class at extends $y{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new CI(e,t,s):t==="array-contains"?new NI(e,s):t==="in"?new xI(e,s):t==="not-in"?new DI(e,s):t==="array-contains-any"?new VI(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new PI(e,s):new kI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends $y{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new bn(e,t)}matches(e){return qy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qy(i){return i.op==="and"}function Wy(i){return RI(i)&&qy(i)}function RI(i){for(const e of i.filters)if(e instanceof bn)return!1;return!0}function md(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(Wy(i))return i.filters.map(e=>md(e)).join(",");{const e=i.filters.map(t=>md(t)).join(",");return`${i.op}(${e})`}}function Hy(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)}(i,e):i instanceof bn?function(s,o){return o instanceof bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Hy(h,o.filters[m]),!0):!1}(i,e):void ye()}function Ky(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`}(i):i instanceof bn?function(t){return t.op.toString()+" {"+t.getFilters().map(Ky).join(" ,")+"}"}(i):"Filter"}class CI extends at{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class PI extends at{constructor(e,t){super(e,"in",t),this.keys=Gy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kI extends at{constructor(e,t){super(e,"not-in",t),this.keys=Gy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class NI extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fd(t)&&ja(t.arrayValue,this.value)}}class xI extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ja(this.value.arrayValue,t)}}class DI extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ja(this.value.arrayValue,t)}}class VI extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ja(this.value.arrayValue,s))}}/**
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
 */class OI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function ag(i,e=null,t=[],s=[],o=null,u=null,h=null){return new OI(i,e,t,s,o,u,h)}function Ud(i){const e=ve(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>md(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>_o(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>_o(s)).join(",")),e.ue=t}return e.ue}function jd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!AI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Hy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!og(i.startAt,e.startAt)&&og(i.endAt,e.endAt)}function gd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ro{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function LI(i,e,t,s,o,u,h,m){return new Ro(i,e,t,s,o,u,h,m)}function zd(i){return new Ro(i)}function lg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Qy(i){return i.collectionGroup!==null}function Da(i){const e=ve(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new za(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new za(Ct.keyField(),s))}return e.ce}function Zn(i){const e=ve(i);return e.le||(e.le=MI(e,Da(i))),e.le}function MI(i,e){if(i.limitType==="F")return ag(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new za(o.field,u)});const t=i.endAt?new Bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Bu(i.startAt.position,i.startAt.inclusive):null;return ag(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function yd(i,e){const t=i.filters.concat([e]);return new Ro(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function _d(i,e,t){return new Ro(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return jd(Zn(i),Zn(e))&&i.limitType===e.limitType}function Yy(i){return`${Ud(Zn(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Ky(o)).join(", ")}]`),sc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>_o(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>_o(o)).join(",")),`Target(${s})`}(Zn(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=sg(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Da(s),o)||s.endAt&&!function(h,m,g){const _=sg(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Da(s),o))}(i,e)}function bI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Xy(i){return(e,t)=>{let s=!1;for(const o of Da(i)){const u=FI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function FI(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?yo(g,_):ye()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye()}}/**
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
 */class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return jy(this.inner)}size(){return this.innerSize}}/**
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
 */const UI=new Je(ue.comparator);function kr(){return UI}const Jy=new Je(ue.comparator);function Pa(...i){let e=Jy;for(const t of i)e=e.insert(t.key,t);return e}function Zy(i){let e=Jy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function es(){return Va()}function e_(){return Va()}function Va(){return new os(i=>i.toString(),(i,e)=>i.isEqual(e))}const jI=new Je(ue.comparator),zI=new mt(ue.comparator);function Ce(...i){let e=zI;for(const t of i)e=e.add(t);return e}const BI=new mt(ke);function $I(){return BI}/**
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
 */function Bd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function t_(i){return{integerValue:""+i}}function qI(i,e){return _I(e)?t_(e):Bd(i,e)}/**
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
 */class uc{constructor(){this._=void 0}}function WI(i,e,t){return i instanceof $u?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&bd(u)&&(u=oc(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Ba?r_(i,e):i instanceof $a?i_(i,e):function(o,u){const h=n_(o,u),m=ug(h)+ug(o.Pe);return pd(h)&&pd(o.Pe)?t_(m):Bd(o.serializer,m)}(i,e)}function HI(i,e,t){return i instanceof Ba?r_(i,e):i instanceof $a?i_(i,e):t}function n_(i,e){return i instanceof qu?function(s){return pd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class $u extends uc{}class Ba extends uc{constructor(e){super(),this.elements=e}}function r_(i,e){const t=s_(e);for(const s of i.elements)t.some(o=>rr(o,s))||t.push(s);return{arrayValue:{values:t}}}class $a extends uc{constructor(e){super(),this.elements=e}}function i_(i,e){let t=s_(e);for(const s of i.elements)t=t.filter(o=>!rr(o,s));return{arrayValue:{values:t}}}class qu extends uc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ug(i){return rt(i.integerValue||i.doubleValue)}function s_(i){return Fd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function KI(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Ba&&o instanceof Ba||s instanceof $a&&o instanceof $a?go(s.elements,o.elements,rr):s instanceof qu&&o instanceof qu?rr(s.Pe,o.Pe):s instanceof $u&&o instanceof $u}(i.transform,e.transform)}class GI{constructor(e,t){this.version=e,this.transformResults=t}}class Rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function o_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new l_(i.key,Rr.none()):new Qa(i.key,i.data,Rr.none());{const t=i.data,s=_n.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new as(i.key,s,new Mn(o.toArray()),Rr.none())}}function QI(i,e,t){i instanceof Qa?function(o,u,h){const m=o.value.clone(),g=hg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof as?function(o,u,h){if(!Pu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=hg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(a_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Oa(i,e,t,s){return i instanceof Qa?function(u,h,m,g){if(!Pu(u.precondition,h))return m;const _=u.value.clone(),w=dg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof as?function(u,h,m,g){if(!Pu(u.precondition,h))return m;const _=dg(u.fieldTransforms,g,h),w=h.data;return w.setAll(a_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(u,h,m){return Pu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function YI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=n_(s.transform,o||null);u!=null&&(t===null&&(t=_n.empty()),t.set(s.field,u))}return t||null}function cg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,(u,h)=>KI(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Qa extends cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class as extends cc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function a_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function hg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,HI(h,m,t[o]))}return s}function dg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,WI(u,h,e))}return s}class l_ extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XI extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&QI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=e_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=o_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,(t,s)=>cg(t,s))&&go(this.baseMutations,e.baseMutations,(t,s)=>cg(t,s))}}class $d{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return jI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new $d(e,t,s,o)}}/**
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
 */class ZI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class e0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,De;function t0(i){switch(i){default:return ye();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function u_(i){if(i===void 0)return Pr("GRPC error has no .code"),q.UNKNOWN;switch(i){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return ye()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function n0(){return new TextEncoder}/**
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
 */const r0=new ui([4294967295,4294967295],0);function fg(i){const e=n0().encode(i),t=new Dy;return t.update(e),new Uint8Array(t.digest())}function pg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class qd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(s<0)throw new ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ui.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(r0)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=fg(e),[s,o]=pg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new qd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=fg(e),[s,o]=pg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(_e.min(),o,new Je(ke),kr(),Ce())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Ce(),Ce(),Ce())}}/**
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
 */class ku{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class c_{constructor(e,t){this.targetId=e,this.me=t}}class h_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class mg{constructor(){this.fe=0,this.ge=gg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye()}}),new Ya(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=gg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class i0{constructor(e){this.Be=e,this.Le=new Map,this.ke=kr(),this.qe=wu(),this.Qe=wu(),this.Ke=new Je(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(gd(u))if(s===0){const h=new ue(u.path);this.We(t,h,bt.newNoDocument(h,_e.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),g=m?this.et(m,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=vi(s).toUint8Array()}catch(g){if(g instanceof zy)return mo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new qd(h,o,u)}catch(g){return mo(g instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Be.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&gd(m.target)){const g=new ue(m.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new hc(e,t,this.Ke,this.ke,s);return this.ke=kr(),this.qe=wu(),this.Qe=wu(),this.Ke=new Je(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new mg,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new mg),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function wu(){return new Je(ue.comparator)}function gg(){return new Je(ue.comparator)}const s0={asc:"ASCENDING",desc:"DESCENDING"},o0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a0={and:"AND",or:"OR"};class l0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vd(i,e){return i.useProto3Json||sc(e)?e:{value:e}}function Wu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function u0(i,e){return Wu(i,e.toTimestamp())}function er(i){return be(!!i),_e.fromTimestamp(function(t){const s=_i(t);return new pt(s.seconds,s.nanos)}(i))}function Wd(i,e){return Ed(i,e).canonicalString()}function Ed(i,e){const t=function(o){return new He(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function f_(i){const e=He.fromString(i);return be(__(e)),e}function wd(i,e){return Wd(i.databaseId,e.path)}function rd(i,e){const t=f_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(m_(t))}function p_(i,e){return Wd(i.databaseId,e)}function c0(i){const e=f_(i);return e.length===4?He.emptyPath():m_(e)}function Td(i){return new He(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function m_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function yg(i,e,t){return{name:wd(i,e),fields:t.value.mapValue.fields}}function h0(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?q.UNKNOWN:u_(_.code);return new ie(w,_.message||"")}(h);t=new h_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=rd(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):_e.min(),m=new _n({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new ku(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=rd(i,s.document),u=s.readTime?er(s.readTime):_e.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new ku([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=rd(i,s.document),u=s.removedTargetIds||[];t=new ku([],u,o,null)}else{if(!("filter"in e))return ye();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new e0(o,u),m=s.targetId;t=new c_(m,h)}}return t}function d0(i,e){let t;if(e instanceof Qa)t={update:yg(i,e.key,e.value)};else if(e instanceof l_)t={delete:wd(i,e.key)};else if(e instanceof as)t={update:yg(i,e.key,e.data),updateMask:w0(e.fieldMask)};else{if(!(e instanceof XI))return ye();t={verify:wd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof $u)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ye()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:u0(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye()}(i,e.precondition)),t}function f0(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(_e.min())&&(h=er(u)),new GI(h,o.transformResults||[])}(t,e))):[]}function p0(i,e){return{documents:[p_(i,e.path)]}}function m0(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=p_(i,o);const u=function(_){if(_.length!==0)return y_(bn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(N){return{field:so(N.field),direction:_0(N.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=vd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function g0(i){let e=c0(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(S){const N=g_(S);return N instanceof bn&&Wy(N)?N.getFilters():[N]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(N=>function(W){return new za(oo(W.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(N))}(t.orderBy));let m=null;t.limit&&(m=function(S){let N;return N=typeof S=="object"?S.value:S,sc(N)?null:N}(t.limit));let g=null;t.startAt&&(g=function(S){const N=!!S.before,j=S.values||[];return new Bu(j,N)}(t.startAt));let _=null;return t.endAt&&(_=function(S){const N=!S.before,j=S.values||[];return new Bu(j,N)}(t.endAt)),LI(e,o,h,u,m,"F",g,_)}function y0(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function g_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(i):i.fieldFilter!==void 0?function(t){return at.create(oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return bn.create(t.compositeFilter.filters.map(s=>g_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye()}}(t.compositeFilter.op))}(i):ye()}function _0(i){return s0[i]}function v0(i){return o0[i]}function E0(i){return a0[i]}function so(i){return{fieldPath:i.canonicalString()}}function oo(i){return Ct.fromServerFormat(i.fieldPath)}function y_(i){return i instanceof at?function(t){if(t.op==="=="){if(ig(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NAN"}};if(rg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ig(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NAN"}};if(rg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(t.field),op:v0(t.op),value:t.value}}}(i):i instanceof bn?function(t){const s=t.getFilters().map(o=>y_(o));return s.length===1?s[0]:{compositeFilter:{op:E0(t.op),filters:s}}}(i):ye()}function w0(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function __(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ai{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class T0{constructor(e){this.ht=e}}function I0(i){const e=g0({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
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
 */class S0{constructor(){this.ln=new A0}addToCollectionParentIndex(e,t){return this.ln.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(yi.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class A0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(He.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(He.comparator)).toArray()}}/**
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
 */const _g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */function vg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class R0{constructor(e){this.Gn=e,this.buffer=new mt(vg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class C0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ao(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await So(t)}await this.Yn(3e5)})}}class P0{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(ic.oe);const s=new R0(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(_g)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_g):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(_=Date.now(),ro()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function k0(i,e){return new P0(i,e)}/**
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
 */class N0{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class D0{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Oa(s.mutation,o,Mn.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Pa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=kr();const h=Va(),m=function(){return Va()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof as)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Oa(w.mutation,_,w.mutation.getFieldMask(),pt.now())):h.set(_.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var S;return m.set(_,new x0(w,(S=h.get(_))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new Je((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Mn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const S=(o.get(m.batchId)||Ce()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,S=e_();w.forEach(N=>{if(!u.has(N)){const j=o_(t.get(N),s.get(N));j!==null&&S.set(N,j),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(es());let m=-1,g=u;return h.next(_=>z.forEach(_,(w,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(N=>{g=g.insert(w,N)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ce())).next(w=>({batchId:m,changes:Zy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,u).next(m=>z.forEach(m,g=>{const _=function(S,N){return new Ro(N,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((S,N)=>{h=h.insert(S,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=Pa();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&Oa(w.mutation,_,Mn.empty(),pt.now()),lc(t,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class V0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return z.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:I0(o.bundledQuery),readTime:er(o.readTime)}}(t)),z.resolve()}}/**
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
 */class O0{constructor(){this.overlays=new Je(ue.comparator),this.dr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=es(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=es(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=es(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return z.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ZI(t,s));let u=this.dr.get(t);u===void 0&&(u=Ce(),this.dr.set(t,u)),this.dr.set(t,u.add(s.key))}}/**
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
 */class L0{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
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
 */class Hd{constructor(){this.Er=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ue(new He([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ue(new He([])),s=new wt(t,e),o=new wt(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ue.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||ue.comparator(e.key,t.key)}}/**
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
 */class M0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new JI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(ke);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ue(u),0);let m=new mt(ke);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.br)),!0)},h),z.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class b0{constructor(e){this.Nr=e,this.docs=function(){return new Je(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||pI(fI(w),s)<=0||(o.has(w.key)||lc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye()}Br(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new F0(this)}getSize(e){return z.resolve(this.size)}}class F0 extends N0{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class U0{constructor(e){this.persistence=e,this.Lr=new os(t=>Ud(t),jd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new Hd,this.targetCount=0,this.Qr=vo.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),z.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Un(t),z.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Lr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Lr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.qr.containsKey(t))}}/**
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
 */class v_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ic(0),this.Ur=!1,this.Ur=!0,this.Wr=new L0,this.referenceDelegate=e(this),this.Gr=new U0(this),this.indexManager=new S0,this.remoteDocumentCache=function(o){return new b0(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new T0(t),this.jr=new V0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new O0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new M0(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new j0(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class j0 extends gI{constructor(e){super(),this.currentSequenceNumber=e}}class Kd{constructor(e){this.persistence=e,this.Zr=new Hd,this.Xr=null}static ei(e){return new Kd(e)}get ti(){if(this.Xr)return this.Xr;throw ye()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),z.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const o=ue.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,_e.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return z.or([()=>z.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Hu{constructor(e,t){this.persistence=e,this.ri=new os(s=>vI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=k0(this,t)}static ei(e,t){return new Hu(e,t)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return z.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,_e.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}ir(e,t,s){return z.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gd(e,t.fromCache,s,o)}}/**
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
 */class z0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class B0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return bw()?8:yI(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new z0;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(ro()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(ro()<=Re.DEBUG&&ne("QueryEngine","Query:",io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(ro()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):z.resolve())}Xi(e,t){if(lg(t))return z.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=_d(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,m);return this.ss(t,_,h,g.readTime)?this.Xi(e,_d(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return lg(t)||o.isEqual(_e.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?z.resolve(null):(ro()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(t)),this.os(e,h,t,dI(o,-1)).next(m=>m))})}rs(e,t){let s=new mt(Xy(e));return t.forEach((o,u)=>{lc(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return ro()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",io(t)),this.Zi.getDocumentsMatchingQuery(e,t,yi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class $0{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(ke),this.cs=new os(u=>Ud(u),jd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function q0(i,e,t,s){return new $0(i,e,t,s)}async function E_(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:m}))})})}function W0(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const S=_.batch,N=S.keys();let j=z.resolve();return N.forEach(W=>{j=j.next(()=>w.getEntry(g,W)).next(Y=>{const B=_.docVersions.get(W);be(B!==null),Y.version.compareTo(B)<0&&(S.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ce();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function w_(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function H0(i,e){const t=ve(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,S)=>{const N=o.get(S);if(!N)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,S).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,S)));let j=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Pt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(S,j),function(Y,B,me){return Y.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0}(N,j,w)&&m.push(t.Gr.updateTargetData(u,j))});let g=kr(),_=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(K0(u,h,e.documentUpdates).next(w=>{g=w.Is,_=w.ds})),!s.isEqual(_e.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(S=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.us=o,u))}function K0(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=kr();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne("LocalStore","Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{Is:h,ds:o}})}function G0(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Q0(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ai(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Id(i,e,t){const s=ve(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Ao(h))throw h;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Eg(i,e,t){const s=ve(i);let o=_e.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const S=ve(g),N=S.cs.get(w);return N!==void 0?z.resolve(S.us.get(N)):S.Gr.getTargetData(_,w)}(s,h,Zn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:Ce())).next(m=>(Y0(s,bI(e),m),{documents:m,Es:u})))}function Y0(i,e,t){let s=i.ls.get(e)||_e.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class wg{constructor(){this.activeTargetIds=$I()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class X0{constructor(){this._o=new wg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class J0{uo(e){}shutdown(){}}/**
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
 */class Tg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tu=null;function id(){return Tu===null?Tu=function(){return 268435456+Math.round(2147483648*Math.random())}():Tu++,"0x"+Tu.toString(16)}/**
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
 */const Z0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Lt="WebChannelConnection";class tS extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=id(),g=this.No(t,s.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(_,u,h),this.Lo(t,g,_,o).then(w=>(ne("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw mo("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=Z0[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const u=id();return new Promise((h,m)=>{const g=new Vy;g.setWithCredentials(!0),g.listenOnce(Oy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Au.NO_ERROR:const w=g.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case Au.TIMEOUT:ne(Lt,`RPC '${e}' ${u} timed out`),m(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const S=g.getStatus();if(ne(Lt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const j=N==null?void 0:N.error;if(j&&j.status&&j.message){const W=function(B){const me=B.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(me)>=0?me:q.UNKNOWN}(j.status);m(new ie(W,j.message))}else m(new ie(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ie(q.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ne(Lt,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(o);ne(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=id(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=by(),m=My(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Bo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);let N=!1,j=!1;const W=new eS({Eo:B=>{j?ne(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(N||(ne(Lt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),N=!0),ne(Lt,`RPC '${e}' stream ${o} sending:`,B),S.send(B))},Ao:()=>S.close()}),Y=(B,me,fe)=>{B.listen(me,Ee=>{try{fe(Ee)}catch(Te){setTimeout(()=>{throw Te},0)}})};return Y(S,Ca.EventType.OPEN,()=>{j||(ne(Lt,`RPC '${e}' stream ${o} transport opened.`),W.So())}),Y(S,Ca.EventType.CLOSE,()=>{j||(j=!0,ne(Lt,`RPC '${e}' stream ${o} transport closed`),W.Do())}),Y(S,Ca.EventType.ERROR,B=>{j||(j=!0,mo(Lt,`RPC '${e}' stream ${o} transport errored:`,B),W.Do(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),Y(S,Ca.EventType.MESSAGE,B=>{var me;if(!j){const fe=B.data[0];be(!!fe);const Ee=fe,Te=(Ee==null?void 0:Ee.error)||((me=Ee[0])===null||me===void 0?void 0:me.error);if(Te){ne(Lt,`RPC '${e}' stream ${o} received error:`,Te);const Ke=Te.status;let Ae=function(R){const P=ot[R];if(P!==void 0)return u_(P)}(Ke),x=Te.message;Ae===void 0&&(Ae=q.INTERNAL,x="Unknown error status: "+Ke+" with message "+Te.message),j=!0,W.Do(new ie(Ae,x)),S.close()}else ne(Lt,`RPC '${e}' stream ${o} received:`,fe),W.vo(fe)}}),Y(m,Ly.STAT_EVENT,B=>{B.stat===dd.PROXY?ne(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===dd.NOPROXY&&ne(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.bo()},0),W}}function sd(){return typeof document<"u"?document:null}/**
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
 */function dc(i){return new l0(i,!0)}/**
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
 */class T_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class I_{constructor(e,t,s,o,u,h,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new T_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nS extends I_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=h0(this.serializer,e),s=function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?er(h.readTime):_e.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Td(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=gd(g)?{documents:p0(u,g)}:{query:m0(u,g).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=d_(u,h.resumeToken);const _=vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Wu(u,h.snapshotVersion.toTimestamp());const _=vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=y0(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Td(this.serializer),t.removeTarget=e,this.c_(t)}}class rS extends I_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=f0(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Td(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>d0(this.serializer,s))};this.c_(t)}}/**
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
 */class iS extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Ed(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(q.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,Ed(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(q.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Pr(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class oS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ls(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=ve(g);_.k_.add(4),await Xa(_),_.K_.set("Unknown"),_.k_.delete(4),await fc(_)}(this))})}),this.K_=new sS(s,o)}}async function fc(i){if(ls(i))for(const e of i.q_)await e(!0)}async function Xa(i){for(const e of i.q_)await e(!1)}function S_(i,e){const t=ve(i);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Jd(t)?Xd(t):Co(t).s_()&&Yd(t,e))}function Qd(i,e){const t=ve(i),s=Co(t);t.L_.delete(e),s.s_()&&A_(t,e),t.L_.size===0&&(s.s_()?s.a_():ls(t)&&t.K_.set("Unknown"))}function Yd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).V_(e)}function A_(i,e){i.U_.xe(e),Co(i).m_(e)}function Xd(i){i.U_=new i0({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.L_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.K_.F_()}function Jd(i){return ls(i)&&!Co(i).i_()&&i.L_.size>0}function ls(i){return ve(i).k_.size===0}function R_(i){i.U_=void 0}async function aS(i){i.K_.set("Online")}async function lS(i){i.L_.forEach((e,t)=>{Yd(i,e)})}async function uS(i,e){R_(i),Jd(i)?(i.K_.O_(e),Xd(i)):i.K_.set("Unknown")}async function cS(i,e,t){if(i.K_.set("Online"),e instanceof h_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.L_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.L_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ku(i,s)}else if(e instanceof ku?i.U_.$e(e):e instanceof c_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(_e.min()))try{const s=await w_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.L_.get(_);w&&u.L_.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.L_.get(g);if(!w)return;u.L_.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),A_(u,g);const S=new ai(w.target,g,_,w.sequenceNumber);Yd(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne("RemoteStore","Failed to raise snapshot:",s),await Ku(i,s)}}async function Ku(i,e,t){if(!Ao(e))throw e;i.k_.add(1),await Xa(i),i.K_.set("Offline"),t||(t=()=>w_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await fc(i)})}function C_(i,e){return e().catch(t=>Ku(i,t,e))}async function pc(i){const e=ve(i),t=wi(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;hS(e);)try{const o=await G0(e.localStore,s);if(o===null){e.B_.length===0&&t.a_();break}s=o.batchId,dS(e,o)}catch(o){await Ku(e,o)}P_(e)&&k_(e)}function hS(i){return ls(i)&&i.B_.length<10}function dS(i,e){i.B_.push(e);const t=wi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function P_(i){return ls(i)&&!wi(i).i_()&&i.B_.length>0}function k_(i){wi(i).start()}async function fS(i){wi(i).w_()}async function pS(i){const e=wi(i);for(const t of i.B_)e.g_(t.mutations)}async function mS(i,e,t){const s=i.B_.shift(),o=$d.from(s,e,t);await C_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await pc(i)}async function gS(i,e){e&&wi(i).f_&&await async function(s,o){if(function(h){return t0(h)&&h!==q.ABORTED}(o.code)){const u=s.B_.shift();wi(s).__(),await C_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await pc(s)}}(i,e),P_(i)&&k_(i)}async function Ig(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const s=ls(t);t.k_.add(3),await Xa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await fc(t)}async function yS(i,e){const t=ve(i);e?(t.k_.delete(2),await fc(t)):e||(t.k_.add(2),await Xa(t),t.K_.set("Unknown"))}function Co(i){return i.W_||(i.W_=function(t,s,o){const u=ve(t);return u.b_(),new nS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:aS.bind(null,i),mo:lS.bind(null,i),po:uS.bind(null,i),R_:cS.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Jd(i)?Xd(i):i.K_.set("Unknown")):(await i.W_.stop(),R_(i))})),i.W_}function wi(i){return i.G_||(i.G_=function(t,s,o){const u=ve(t);return u.b_(),new rS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:fS.bind(null,i),po:gS.bind(null,i),p_:pS.bind(null,i),y_:mS.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await pc(i)):(await i.G_.stop(),i.B_.length>0&&(ne("RemoteStore",`Stopping write stream with ${i.B_.length} pending writes`),i.B_=[]))})),i.G_}/**
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
 */class Zd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Zd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(i,e){if(Pr("AsyncQueue",`${e}: ${i}`),Ao(i))return new ie(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Sg{constructor(){this.z_=new Je(ue.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ye():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Eo{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new Eo(e,t,lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class _S{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class vS{constructor(){this.queries=Ag(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=Ag(),u.forEach((h,m)=>{for(const g of m.J_)g.onError(s)})})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function Ag(){return new os(i=>Yy(i),ac)}async function N_(i,e){const t=ve(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new _S,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=ef(h,`Initialization of query '${io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&tf(t)}async function x_(i,e){const t=ve(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ES(i,e){const t=ve(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&tf(t)}function wS(i,e,t){const s=ve(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function tf(i){i.X_.forEach(e=>{e.next()})}var Sd,Rg;(Rg=Sd||(Sd={})).na="default",Rg.Cache="cache";class D_{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Sd.Cache}}/**
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
 */class V_{constructor(e){this.key=e}}class O_{constructor(e){this.key=e}}class TS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=Xy(e),this.ma=new lo(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new Sg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,S)=>{const N=o.get(w),j=lc(this.query,S)?S:null,W=!!N&&this.mutatedKeys.has(N.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let B=!1;N&&j?N.data.isEqual(j.data)?W!==Y&&(s.track({type:3,doc:j}),B=!0):this.ya(N,j)||(s.track({type:2,doc:j}),B=!0,(g&&this.Va(j,g)>0||_&&this.Va(j,_)<0)&&(m=!0)):!N&&j?(s.track({type:0,doc:j}),B=!0):N&&!j&&(s.track({type:1,doc:N}),B=!0,(g||_)&&(m=!0)),B&&(j?(h=h.add(j),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,S)=>function(j,W){const Y=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return Y(j)-Y(W)}(w.type,S.type)||this.Va(w.doc,S.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new Eo(this.query,e.ma,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Sg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new O_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new V_(s))}),t}va(e){this.Ea=e.Es,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Eo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class IS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class SS{constructor(e){this.key=e,this.Fa=!1}}class AS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new os(m=>Yy(m),ac),this.Oa=new Map,this.Na=new Set,this.Ba=new Je(ue.comparator),this.La=new Map,this.ka=new Hd,this.qa={},this.Qa=new Map,this.Ka=vo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function RS(i,e,t=!0){const s=j_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await L_(s,e,t,!0),o}async function CS(i,e){const t=j_(i);await L_(t,e,!0,!1)}async function L_(i,e,t,s){const o=await Q0(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await PS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&S_(i.remoteStore,o),m}async function PS(i,e,t,s,o){i.Ua=(S,N,j)=>async function(Y,B,me,fe){let Ee=B.view.ga(me);Ee.ss&&(Ee=await Eg(Y.localStore,B.query,!1).then(({documents:x})=>B.view.ga(x,Ee)));const Te=fe&&fe.targetChanges.get(B.targetId),Ke=fe&&fe.targetMismatches.get(B.targetId)!=null,Ae=B.view.applyChanges(Ee,Y.isPrimaryClient,Te,Ke);return Pg(Y,B.targetId,Ae.ba),Ae.snapshot}(i,S,N,j);const u=await Eg(i.localStore,e,!0),h=new TS(e,u.Es),m=h.ga(u.documents),g=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);Pg(i,t,_.ba);const w=new IS(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),_.snapshot}async function kS(i,e,t){const s=ve(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!ac(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Id(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Qd(s.remoteStore,o.targetId),Ad(s,o.targetId)}).catch(So)):(Ad(s,o.targetId),await Id(s.localStore,o.targetId,!0))}async function NS(i,e){const t=ve(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Qd(t.remoteStore,s.targetId))}async function xS(i,e,t){const s=FS(i);try{const o=await function(h,m){const g=ve(h),_=pt.now(),w=m.reduce((j,W)=>j.add(W.key),Ce());let S,N;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let W=kr(),Y=Ce();return g.hs.getEntries(j,w).next(B=>{W=B,W.forEach((me,fe)=>{fe.isValidDocument()||(Y=Y.add(me))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,W)).next(B=>{S=B;const me=[];for(const fe of m){const Ee=YI(fe,S.get(fe.key).overlayedDocument);Ee!=null&&me.push(new as(fe.key,Ee,By(Ee.value.mapValue),Rr.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,me,m)}).next(B=>{N=B;const me=B.applyToLocalDocumentSet(S,Y);return g.documentOverlayCache.saveOverlays(j,B.batchId,me)})}).then(()=>({batchId:N.batchId,changes:Zy(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.qa[h.currentUser.toKey()];_||(_=new Je(ke)),_=_.insert(m,g),h.qa[h.currentUser.toKey()]=_}(s,o.batchId,t),await Ja(s,o.changes),await pc(s.remoteStore)}catch(o){const u=ef(o,"Failed to persist write");t.reject(u)}}async function M_(i,e){const t=ve(i);try{const s=await H0(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.La.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await Ja(t,s,e)}catch(s){await So(s)}}function Cg(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=ve(h);g.onlineState=m;let _=!1;g.queries.forEach((w,S)=>{for(const N of S.J_)N.ea(m)&&(_=!0)}),_&&tf(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function DS(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),u=o&&o.key;if(u){let h=new Je(ue.comparator);h=h.insert(u,bt.newNoDocument(u,_e.min()));const m=Ce().add(u),g=new hc(_e.min(),new Map,new Je(ke),h,m);await M_(s,g),s.Ba=s.Ba.remove(u),s.La.delete(e),nf(s)}else await Id(s.localStore,e,!1).then(()=>Ad(s,e,t)).catch(So)}async function VS(i,e){const t=ve(i),s=e.batch.batchId;try{const o=await W0(t.localStore,e);F_(t,s,null),b_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ja(t,o)}catch(o){await So(o)}}async function OS(i,e,t){const s=ve(i);try{const o=await function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(S=>(be(S!==null),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);F_(s,e,t),b_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ja(s,o)}catch(o){await So(o)}}function b_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function F_(i,e,t){const s=ve(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Ad(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||U_(i,s)})}function U_(i,e){i.Na.delete(e.path.canonicalString());const t=i.Ba.get(e);t!==null&&(Qd(i.remoteStore,t),i.Ba=i.Ba.remove(e),i.La.delete(t),nf(i))}function Pg(i,e,t){for(const s of t)s instanceof V_?(i.ka.addReference(s.key,e),LS(i,s)):s instanceof O_?(ne("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||U_(i,s.key)):ye()}function LS(i,e){const t=e.key,s=t.path.canonicalString();i.Ba.get(t)||i.Na.has(s)||(ne("SyncEngine","New document in limbo: "+t),i.Na.add(s),nf(i))}function nf(i){for(;i.Na.size>0&&i.Ba.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new ue(He.fromString(e)),s=i.Ka.next();i.La.set(s,new SS(t)),i.Ba=i.Ba.insert(t,s),S_(i.remoteStore,new ai(Zn(zd(t.path)),s,"TargetPurposeLimboResolution",ic.oe))}}async function Ja(i,e,t){const s=ve(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,g)=>{h.push(s.Ua(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=Gd.zi(g.targetId,_);u.push(S)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const w=ve(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>z.forEach(_,N=>z.forEach(N.Wi,j=>w.persistence.referenceDelegate.addReference(S,N.targetId,j)).next(()=>z.forEach(N.Gi,j=>w.persistence.referenceDelegate.removeReference(S,N.targetId,j)))))}catch(S){if(!Ao(S))throw S;ne("LocalStore","Failed to update sequence numbers: "+S)}for(const S of _){const N=S.targetId;if(!S.fromCache){const j=w.us.get(N),W=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(W);w.us=w.us.insert(N,Y)}}}(s.localStore,u))}async function MS(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const s=await E_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(g=>{g.reject(new ie(q.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ja(t,s.Ts)}}function bS(i,e){const t=ve(i),s=t.La.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function j_(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=M_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DS.bind(null,e),e.Ma.R_=ES.bind(null,e.eventManager),e.Ma.Wa=wS.bind(null,e.eventManager),e}function FS(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OS.bind(null,e),e}class Gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return q0(this.persistence,new B0,e.initialUser,this.serializer)}ja(e){return new v_(Kd.ei,this.serializer)}za(e){return new X0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gu.provider={build:()=>new Gu};class US extends Gu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Hu);const s=this.persistence.referenceDelegate.garbageCollector;return new C0(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new v_(s=>Hu.ei(s,t),this.serializer)}}class Rd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MS.bind(null,this.syncEngine),await yS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vS}()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=function(u){return new tS(u)}(e.databaseInfo);return function(u,h,m,g){return new iS(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new oS(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Cg(this.syncEngine,t,0),function(){return Tg.p()?new Tg:new J0}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const S=new AS(o,u,h,m,g,_);return w&&(S.$a=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ve(o);ne("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Xa(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Rd.provider={build:()=>new Rd};/**
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
 */class z_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class jS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Uy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ef(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function od(i,e){i.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await E_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function kg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await zS(i);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Ig(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Ig(e.remoteStore,o)),i._onlineComponents=e}async function zS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;mo("Error using user provided cache. Falling back to memory cache: "+t),await od(i,new Gu)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await od(i,new US(void 0));return i._offlineComponents}async function B_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await kg(i,i._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await kg(i,new Rd))),i._onlineComponents}function BS(i){return B_(i).then(e=>e.syncEngine)}async function Cd(i){const e=await B_(i),t=e.eventManager;return t.onListen=RS.bind(null,e.syncEngine),t.onUnlisten=kS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=CS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NS.bind(null,e.syncEngine),t}function $S(i,e,t={}){const s=new ci;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new z_({next:N=>{w.eu(),h.enqueueAndForget(()=>x_(u,S)),N.fromCache&&g.source==="server"?_.reject(new ie(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),S=new D_(m,w,{includeMetadataChanges:!0,ua:!0});return N_(u,S)}(await Cd(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function $_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Ng=new Map;/**
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
 */function q_(i,e,t){if(!t)throw new ie(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function qS(i,e,t,s){if(e===!0&&s===!0)throw new ie(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!ue.isDocumentKey(i))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Dg(i){if(ue.isDocumentKey(i))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function mc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye()}function ts(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(i);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class Vg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rI;switch(s.type){case"firstParty":return new aI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ng.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Ng.delete(t),s.terminate())}(this),Promise.resolve()}}function WS(i,e,t,s={}){var o;const u=(i=ts(i,gc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Mt.MOCK_USER;else{m=kw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(_)}i._authCredentials=new iI(new Fy(m,g))}}/**
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
 */class Ii{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ii(this.firestore,e,this._query)}}class an{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class hi extends Ii{constructor(e,t,s){super(e,t,zd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new ue(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Nu(i,e,...t){if(i=Jt(i),q_("collection","path",e),i instanceof gc){const s=He.fromString(e,...t);return Dg(s),new hi(i,null,s)}{if(!(i instanceof an||i instanceof hi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return Dg(s),new hi(i.firestore,null,s)}}function HS(i,e,...t){if(i=Jt(i),arguments.length===1&&(e=Uy.newId()),q_("doc","path",e),i instanceof gc){const s=He.fromString(e,...t);return xg(s),new an(i,null,new ue(s))}{if(!(i instanceof an||i instanceof hi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(He.fromString(e,...t));return xg(s),new an(i.firestore,i instanceof hi?i.converter:null,new ue(s))}}/**
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
 */class Og{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new T_(this,"async_queue_retry"),this.fu=()=>{const s=sd();s&&ne("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new ci;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ao(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Pr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Zd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&ye()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function Lg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class qa extends gc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Og,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Og(e),this._firestoreClient=void 0,await e}}}function KS(i,e){const t=typeof i=="object"?i:Od(),s=typeof i=="string"?i:"(default)",o=Ga(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Cw("firestore");u&&WS(o,...u)}return o}function rf(i){if(i._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||GS(i),i._firestoreClient}function GS(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,_,w){return new TI(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,$_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new jS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(Pt.fromBase64String(e))}catch(t){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class W_{constructor(e){this._methodName=e}}/**
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
 */class of{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class af{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const QS=/^__.*__$/;class YS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qa(e,this.data,t,this.fieldTransforms)}}function H_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class lf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Qu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(H_(this.Mu)&&QS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class XS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}$u(e,t,s,o=!1){return new lf({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K_(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new XS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function JS(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);Y_("Data must be an object, but it was:",h,s);const m=G_(s,h);let g,_;if(u.merge)g=new Mn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const S of u.mergeFields){const N=eA(e,S,t);if(!h.contains(N))throw new ie(q.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);nA(w,N)||w.push(N)}g=new Mn(w),_=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,_=h.fieldTransforms;return new YS(new _n(m),g,_)}function ZS(i,e,t,s=!1){return uf(t,i.$u(s?4:3,e))}function uf(i,e){if(Q_(i=Jt(i)))return Y_("Unsupported field value:",e,i),G_(i,e);if(i instanceof W_)return function(s,o){if(!H_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=uf(m,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Wu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wu(o.serializer,u)}}if(s instanceof of)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wo)return{bytesValue:d_(o.serializer,s._byteString)};if(s instanceof an){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof af)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return Bd(m.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${mc(s)}`)}(i,e)}function G_(i,e){const t={};return jy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(i,(s,o)=>{const u=uf(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Q_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof of||i instanceof wo||i instanceof an||i instanceof W_||i instanceof af)}function Y_(i,e,t){if(!Q_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=mc(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function eA(i,e,t){if((e=Jt(e))instanceof sf)return e._internalPath;if(typeof e=="string")return X_(i,e);throw Qu("Field path arguments must be of type string or ",i,!1,void 0,t)}const tA=new RegExp("[~\\*/\\[\\]]");function X_(i,e,t){if(e.search(tA)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new sf(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Qu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(q.INVALID_ARGUMENT,m+i+g)}function nA(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class J_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rA extends J_{data(){return super.data()}}function cf(i,e){return typeof e=="string"?X_(i,e):e instanceof sf?e._internalPath:e._delegate._internalPath}/**
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
 */function Z_(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class ev extends hf{}function Mg(i,e,...t){let s=[];e instanceof hf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof ff).length,m=u.filter(g=>g instanceof df).length;if(h>1||h>0&&m>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class df extends ev{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new df(e,t,s)}_apply(e){const t=this._parse(e);return tv(e._query,t),new Ii(e.firestore,e.converter,yd(e._query,t))}_parse(e){const t=K_(e.firestore);return function(u,h,m,g,_,w,S){let N;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Ug(S,w);const j=[];for(const W of S)j.push(Fg(g,u,W));N={arrayValue:{values:j}}}else N=Fg(g,u,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Ug(S,w),N=ZS(m,h,S,w==="in"||w==="not-in");return at.create(_,w,N)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ff extends hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ff(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)tv(h,g),h=yd(h,g)}(e._query,t),new Ii(e.firestore,e.converter,yd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pf extends ev{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new za(u,h)}(e._query,this._field,this._direction);return new Ii(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Ro(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function bg(i,e="asc"){const t=e,s=cf("orderBy",i);return pf._create(s,t)}function Fg(i,e,t){if(typeof(t=Jt(t))=="string"){if(t==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qy(e)&&t.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!ue.isDocumentKey(s))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ng(i,new ue(s))}if(t instanceof an)return ng(i,t._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function Ug(i,e){if(!Array.isArray(i)||i.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tv(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iA{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ss(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new af(u)}convertGeoPoint(e){return new of(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=oc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const t=_i(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);be(__(s));const o=new Ua(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function sA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nv extends J_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class xu extends nv{data(e={}){return super.data(e)}}class rv{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Na(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new xu(this._firestore,this._userDataWriter,s.key,s,new Na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new xu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:oA(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}class mf extends iA{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function jg(i){i=ts(i,Ii);const e=ts(i.firestore,qa),t=rf(e),s=new mf(e);return Z_(i._query),$S(t,i._query).then(o=>new rv(e,s,i,o))}function aA(i,e){const t=ts(i.firestore,qa),s=HS(i),o=sA(i.converter,e);return uA(t,[JS(K_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Rr.exists(!1))]).then(()=>s)}function lA(i,...e){var t,s,o;i=Jt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Lg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Lg(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,_,w;if(i instanceof an)_=ts(i.firestore,qa),w=zd(i._key.path),g={next:S=>{e[h]&&e[h](cA(_,i,S))},error:e[h+1],complete:e[h+2]};else{const S=ts(i,Ii);_=ts(S.firestore,qa),w=S._query;const N=new mf(_);g={next:j=>{e[h]&&e[h](new rv(_,N,S,j))},error:e[h+1],complete:e[h+2]},Z_(i._query)}return function(N,j,W,Y){const B=new z_(Y),me=new D_(j,B,W);return N.asyncQueue.enqueueAndForget(async()=>N_(await Cd(N),me)),()=>{B.eu(),N.asyncQueue.enqueueAndForget(async()=>x_(await Cd(N),me))}}(rf(_),w,m,g)}function uA(i,e){return function(s,o){const u=new ci;return s.asyncQueue.enqueueAndForget(async()=>xS(await BS(s),o,u)),u.promise}(rf(i),e)}function cA(i,e,t){const s=t.docs.get(e._key),o=new mf(i);return new nv(i,o,e._key,s,new Na(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Io=o})(Ti),gi(new fi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new qa(new sI(s.getProvider("auth-internal")),new uI(s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(_.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),En(Ym,"4.7.6",e),En(Ym,"4.7.6","esm2017")})();var hA="firebase",dA="11.2.0";/**
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
 */En(hA,dA,"app");function gf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=iv,sv=new is("auth","Firebase",iv());/**
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
 */const Yu=new nc("@firebase/auth");function pA(i,...e){Yu.logLevel<=Re.WARN&&Yu.warn(`Auth (${Ti}): ${i}`,...e)}function Du(i,...e){Yu.logLevel<=Re.ERROR&&Yu.error(`Auth (${Ti}): ${i}`,...e)}/**
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
 */function Fn(i,...e){throw yf(i,...e)}function tr(i,...e){return yf(i,...e)}function ov(i,e,t){const s=Object.assign(Object.assign({},fA()),{[e]:t});return new is("auth","Firebase",s).create(e,{appName:i.name})}function di(i){return ov(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return sv.create(i,...e)}function pe(i,e,...t){if(!i)throw yf(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Du(e),new Error(e)}function Nr(i,e){i||Ir(e)}/**
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
 */function Pd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function mA(){return zg()==="http:"||zg()==="https:"}function zg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function gA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||Ow()||"connection"in navigator)?navigator.onLine:!0}function yA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Za{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=Nw()||Lw()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(i,e){Nr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class av{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vA=new Za(3e4,6e4);function us(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Si(i,e,t,s,o={}){return lv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return Vw()||(_.referrerPolicy="no-referrer"),av.fetch()(uv(i,i.config.apiHost,t,m),_)})}async function lv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},_A),e);try{const o=new wA(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Iu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Iu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Iu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw ov(i,w,_);Fn(i,w)}}catch(o){if(o instanceof ir)throw o;Fn(i,"network-request-failed",{message:String(o)})}}async function yc(i,e,t,s,o={}){const u=await Si(i,e,t,s,o);return"mfaPendingCredential"in u&&Fn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function uv(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?_f(i.config,o):`${i.config.apiScheme}://${o}`}function EA(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),vA.get())})}}function Iu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=tr(i,e,s);return o.customData._tokenResponse=t,o}function Bg(i){return i!==void 0&&i.enterprise!==void 0}class TA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IA(i,e){return Si(i,"GET","/v2/recaptchaConfig",us(i,e))}/**
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
 */async function SA(i,e){return Si(i,"POST","/v1/accounts:delete",e)}async function cv(i,e){return Si(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AA(i,e=!1){const t=Jt(i),s=await t.getIdToken(e),o=vf(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:La(ad(o.auth_time)),issuedAtTime:La(ad(o.iat)),expirationTime:La(ad(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ad(i){return Number(i)*1e3}function vf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const o=py(t);return o?JSON.parse(o):(Du("Failed to decode base64 JWT payload"),null)}catch(o){return Du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function $g(i){const e=vf(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ir&&RA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function RA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class CA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Wa(i,cv(t,{idToken:s}));pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?hv(u.providerUserInfo):[],m=kA(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new kd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,S)}async function PA(i){const e=Jt(i);await Xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function hv(i){return i.map(e=>{var{providerId:t}=e,s=gf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function NA(i,e){const t=await lv(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=uv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",av.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xA(i,e){return Si(i,"POST","/v2/accounts:revokeToken",us(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=$g(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await NA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function ni(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new kd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Xu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(di(this.auth));const e=await this.getIdToken();return await Wa(this,SA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,fe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Ee,emailVerified:Te,isAnonymous:Ke,providerData:Ae,stsTokenManager:x}=t;pe(Ee&&x,e,"internal-error");const I=uo.fromJSON(this.name,x);pe(typeof Ee=="string",e,"internal-error"),ni(S,e.name),ni(N,e.name),pe(typeof Te=="boolean",e,"internal-error"),pe(typeof Ke=="boolean",e,"internal-error"),ni(j,e.name),ni(W,e.name),ni(Y,e.name),ni(B,e.name),ni(me,e.name),ni(fe,e.name);const R=new Sr({uid:Ee,auth:e,email:N,emailVerified:Te,displayName:S,isAnonymous:Ke,photoURL:W,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:me,lastLoginAt:fe});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(P=>Object.assign({},P))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Sr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Xu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?hv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const g=new Sr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const qg=new Map;function Ar(i){Nr(i instanceof Function,"Expected a class definition");let e=qg.get(i);return e?(Nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,qg.set(i,e),e)}/**
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
 */class dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dv.type="NONE";const Wg=dv;/**
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
 */function Vu(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Vu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Vu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ar(Wg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(Wg);const h=Vu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){const S=Sr._fromJSON(e,w);_!==u&&(m=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new co(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function Hg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_v(e))return"Blackberry";if(vv(e))return"Webos";if(pv(e))return"Safari";if((e.includes("chrome/")||mv(e))&&!e.includes("edge/"))return"Chrome";if(yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fv(i=Ft()){return/firefox\//i.test(i)}function pv(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mv(i=Ft()){return/crios\//i.test(i)}function gv(i=Ft()){return/iemobile/i.test(i)}function yv(i=Ft()){return/android/i.test(i)}function _v(i=Ft()){return/blackberry/i.test(i)}function vv(i=Ft()){return/webos/i.test(i)}function Ef(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function DA(i=Ft()){var e;return Ef(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VA(){return Mw()&&document.documentMode===10}function Ev(i=Ft()){return Ef(i)||yv(i)||vv(i)||_v(i)||/windows phone/i.test(i)||gv(i)}/**
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
 */function wv(i,e=[]){let t;switch(i){case"Browser":t=Hg(Ft());break;case"Worker":t=`${Hg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${s}`}/**
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
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function LA(i,e={}){return Si(i,"GET","/v2/passwordPolicy",us(i,e))}/**
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
 */const MA=6;class bA{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:MA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class FA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cv(this,{idToken:e}),s=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(di(this));const t=e?Jt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LA(this),t=new bA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await xA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Po(i){return Jt(i)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ey(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(i){_c=i}function Tv(i){return _c.loadJS(i)}function jA(){return _c.recaptchaEnterpriseScript}function zA(){return _c.gapiScript}function BA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class $A{constructor(){this.enterprise=new qA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const WA="recaptcha-enterprise",Iv="NO_RECAPTCHA";class HA{constructor(e){this.type=WA,this.auth=Po(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{IA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new TA(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Bg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Iv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $A().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Bg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=jA();g.length!==0&&(g+=m),Tv(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Gg(i,e,t,s=!1,o=!1){const u=new HA(i);let h;if(o)h=Iv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Qg(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Gg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Gg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function KA(i,e){const t=Ga(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Uu(u,e??{}))return o;Fn(o,"already-initialized")}return t.initialize({options:e})}function GA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QA(i,e,t){const s=Po(i);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Sv(e),{host:h,port:m}=YA(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),XA()}function Sv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function YA(i){const e=Sv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Yg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Yg(h)}}}function Yg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function XA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class wf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function JA(i,e){return Si(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ZA(i,e){return yc(i,"POST","/v1/accounts:signInWithPassword",us(i,e))}/**
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
 */async function eR(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",us(i,e))}async function tR(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",us(i,e))}/**
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
 */class Ha extends wf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ha(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ha(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,t,"signInWithPassword",ZA);case"emailLink":return eR(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,s,"signUpPassword",JA);case"emailLink":return tR(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const nR="http://localhost";class rs extends wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=gf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:nR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */function rR(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iR(i){const e=Aa(Ra(i)).link,t=e?Aa(Ra(e)).deep_link_id:null,s=Aa(Ra(i)).deep_link_id;return(s?Aa(Ra(s)).link:null)||s||t||e||i}class Tf{constructor(e){var t,s,o,u,h,m;const g=Aa(Ra(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,S=rR((o=g.mode)!==null&&o!==void 0?o:null);pe(_&&w&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=iR(e);try{return new Tf(t)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return Ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Tf.parseLink(t);return pe(s,"argument-error"),Ha._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class el extends Av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends el{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class ii extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
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
 */class si extends el{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
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
 */class oi extends el{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
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
 */class To{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Sr._fromIdTokenResponse(e,s,o),h=Xg(s);return new To({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Xg(s);return new To({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Xg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Ju extends ir{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ju(e,t,s,o)}}function Rv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(i,u,e,s):u})}async function sR(i,e,t=!1){const s=await Wa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return To._forOperation(i,"link",s)}/**
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
 */async function oR(i,e,t=!1){const{auth:s}=i;if(Jn(s.app))return Promise.reject(di(s));const o="reauthenticate";try{const u=await Wa(i,Rv(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=vf(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),To._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function Cv(i,e,t=!1){if(Jn(i.app))return Promise.reject(di(i));const s="signIn",o=await Rv(i,s,e),u=await To._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function aR(i,e){return Cv(Po(i),e)}/**
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
 */async function lR(i){const e=Po(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uR(i,e,t){return Jn(i.app)?Promise.reject(di(i)):aR(Jt(i),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&lR(i),s})}function cR(i,e,t,s){return Jt(i).onIdTokenChanged(e,t,s)}function hR(i,e,t){return Jt(i).beforeAuthStateChanged(e,t)}const Zu="__sak";/**
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
 */class Pv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zu,"1"),this.storage.removeItem(Zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dR=1e3,fR=10;class kv extends Pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);VA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,fR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const pR=kv;/**
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
 */class Nv extends Pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nv.type="SESSION";const xv=Nv;/**
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
 */function mR(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await mR(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function If(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class gR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=If("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const N=S;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(N.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function yR(i){nr().location.href=i}/**
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
 */function Dv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function _R(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vR(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ER(){return Dv()?self:null}/**
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
 */const Vv="firebaseLocalStorageDb",wR=1,ec="firebaseLocalStorage",Ov="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ec(i,e){return i.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function TR(){const i=indexedDB.deleteDatabase(Vv);return new tl(i).toPromise()}function Nd(){const i=indexedDB.open(Vv,wR);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ec,{keyPath:Ov})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ec)?e(s):(s.close(),await TR(),e(await Nd()))})})}async function Jg(i,e,t){const s=Ec(i,!0).put({[Ov]:e,value:t});return new tl(s).toPromise()}async function IR(i,e){const t=Ec(i,!1).get(e),s=await new tl(t).toPromise();return s===void 0?null:s.value}function Zg(i,e){const t=Ec(i,!0).delete(e);return new tl(t).toPromise()}const SR=800,AR=3;class Lv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(ER()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _R(),!this.activeServiceWorker)return;this.sender=new gR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Jg(e,Zu,"1"),await Zg(e,Zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>IR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ec(o,!1).getAll();return new tl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lv.type="LOCAL";const RR=Lv;new Za(3e4,6e4);/**
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
 */function CR(i,e){return e?Ar(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Sf extends wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PR(i){return Cv(i.auth,new Sf(i),i.bypassAuthState)}function kR(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),oR(t,new Sf(i),i.bypassAuthState)}async function NR(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),sR(t,new Sf(i),i.bypassAuthState)}/**
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
 */class Mv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PR;case"linkViaPopup":case"linkViaRedirect":return NR;case"reauthViaPopup":case"reauthViaRedirect":return kR;default:Fn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xR=new Za(2e3,1e4);class ao extends Mv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xR.get())};e()}}ao.currentPopupAction=null;/**
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
 */const DR="pendingRedirect",Ou=new Map;class VR extends Mv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ou.get(this.auth._key());if(!e){try{const s=await OR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ou.set(this.auth._key(),e)}return this.bypassAuthState||Ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OR(i,e){const t=bR(e),s=MR(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function LR(i,e){Ou.set(i._key(),e)}function MR(i){return Ar(i._redirectPersistence)}function bR(i){return Vu(DR,i.config.apiKey,i.name)}async function FR(i,e,t=!1){if(Jn(i.app))return Promise.reject(di(i));const s=Po(i),o=CR(s,e),h=await new VR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const UR=10*60*1e3;class jR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!bv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function bv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bv(i);default:return!1}}/**
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
 */async function BR(i,e={}){return Si(i,"GET","/v1/projects",e)}/**
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
 */const $R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qR=/^https?/;async function WR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await BR(i);for(const t of e)try{if(HR(t))return}catch{}Fn(i,"unauthorized-domain")}function HR(i){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!qR.test(t))return!1;if($R.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const KR=new Za(3e4,6e4);function ty(){const i=nr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function GR(i){return new Promise((e,t)=>{var s,o,u;function h(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),t(tr(i,"network-request-failed"))},timeout:KR.get()})}if(!((o=(s=nr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=nr().gapi)===null||u===void 0)&&u.load)h();else{const m=BA("iframefcb");return nr()[m]=()=>{gapi.load?h():t(tr(i,"network-request-failed"))},Tv(`${zA()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function QR(i){return Lu=Lu||GR(i),Lu}/**
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
 */const YR=new Za(5e3,15e3),XR="__/auth/iframe",JR="emulator/auth/iframe",ZR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tC(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?_f(e,JR):`https://${i.config.authDomain}/${XR}`,s={apiKey:e.apiKey,appName:i.name,v:Ti},o=eC.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function nC(i){const e=await QR(i),t=nr().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:tC(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(i,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},YR.get());function g(){nr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const rC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iC=500,sC=600,oC="_blank",aC="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lC(i,e,t,s=iC,o=sC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},rC),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ft().toLowerCase();t&&(m=mv(_)?oC:t),fv(_)&&(e=e||aC,g.scrollbars="yes");const w=Object.entries(g).reduce((N,[j,W])=>`${N}${j}=${W},`,"");if(DA(_)&&m!=="_self")return uC(e||"",m),new ny(null);const S=window.open(e||"",m,w);pe(S,i,"popup-blocked");try{S.focus()}catch{}return new ny(S)}function uC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cC="__/auth/handler",hC="emulator/auth/handler",dC=encodeURIComponent("fac");async function ry(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ti,eventId:o};if(e instanceof Av){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",$w(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof el){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${dC}=${encodeURIComponent(g)}`:"";return`${fC(i)}?${Ka(m).slice(1)}${_}`}function fC({config:i}){return i.emulator?_f(i,hC):`https://${i.authDomain}/${cC}`}/**
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
 */const ld="webStorageSupport";class pC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xv,this._completeRedirectFn=FR,this._overrideRedirectResult=LR}async _openPopup(e,t,s,o){var u;Nr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await ry(e,t,s,Pd(),o);return lC(e,h,If())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ry(e,t,s,Pd(),o);return yR(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nC(e),s=new jR(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ld];h!==void 0&&t(!!h),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ev()||pv()||Ef()}}const mC=pC;var iy="@firebase/auth",sy="1.8.2";/**
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
 */class gC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _C(i){gi(new fi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wv(i)},_=new FA(s,o,u,g);return GA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),gi(new fi("auth-internal",e=>{const t=Po(e.getProvider("auth").getImmediate());return(s=>new gC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(iy,sy,yC(i)),En(iy,sy,"esm2017")}/**
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
 */const vC=5*60,EC=_y("authIdTokenMaxAge")||vC;let oy=null;const wC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>EC)return;const o=t==null?void 0:t.token;oy!==o&&(oy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TC(i=Od()){const e=Ga(i,"auth");if(e.isInitialized())return e.getImmediate();const t=KA(i,{popupRedirectResolver:mC,persistence:[RR,pR,xv]}),s=_y("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=wC(u.toString());hR(t,h,()=>h(t.currentUser)),cR(t,m=>h(m))}}const o=gy("auth");return o&&QA(t,`http://${o}`),t}function IC(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}UA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=tr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",IC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_C("Browser");/**
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
 */class SC{constructor(e,t){this._delegate=e,this.firebase=t,Ma(e,new fi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ld(this._delegate)))}_getService(e,t=pi){var s;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((s=o.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:t})}_removeServiceInstance(e,t=pi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ma(this._delegate,e)}_addOrOverwriteComponent(e){Ay(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const AC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ay=new is("app-compat","Firebase",AC);/**
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
 */function RC(i){const e={},t={__esModule:!0,initializeApp:u,app:o,registerVersion:En,setLogLevel:ky,onLog:Py,apps:null,SDK_VERSION:Ti,INTERNAL:{registerComponent:m,removeApp:s,useAsService:g,modularAPIs:nI}};t.default=t,Object.defineProperty(t,"apps",{get:h});function s(_){delete e[_]}function o(_){if(_=_||pi,!zm(e,_))throw ay.create("no-app",{appName:_});return e[_]}o.App=i;function u(_,w={}){const S=rc(_,w);if(zm(e,S.name))return e[S.name];const N=new i(S,t);return e[S.name]=N,N}function h(){return Object.keys(e).map(_=>e[_])}function m(_){const w=_.name,S=w.replace("-compat","");if(gi(_)&&_.type==="PUBLIC"){const N=(j=o())=>{if(typeof j[S]!="function")throw ay.create("invalid-app-argument",{appName:w});return j[S]()};_.serviceProps!==void 0&&Fu(N,_.serviceProps),t[S]=N,i.prototype[S]=function(...j){return this._getService.bind(this,w).apply(this,_.multipleInstances?j:[])}}return _.type==="PUBLIC"?t[S]:null}function g(_,w){return w==="serverAuth"?null:w}return t}/**
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
 */function Fv(){const i=RC(SC);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:Fv,extendNamespace:e,createSubscribe:Ey,ErrorFactory:is,deepExtend:Fu});function e(t){Fu(i,t)}return i}const CC=Fv();/**
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
 */const ly=new nc("@firebase/app-compat"),PC="@firebase/app-compat",kC="0.2.48";/**
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
 */function NC(i){En(PC,kC,i)}/**
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
 */try{const i=my();if(i.firebase!==void 0){ly.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ly.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const xC=CC;NC();var DC="firebase",VC="11.2.0";/**
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
 */xC.registerVersion(DC,VC,"app-compat");var no={};const OC={apiKey:no.REACT_APP_FIREBASE_API_KEY,authDomain:no.REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:no.REACT_APP_FIREBASE_PROJECT_ID,storageBucket:no.REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:no.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:no.REACT_APP_FIREBASE_APP_ID},LC=()=>{const i=rc(OC);return{auth:TC(i),db:KS(i)}},{auth:MC,db:Mu}=LC();function bC(){const[i,e]=ft.useState({total:0,success:0,failed:0,pending:0}),[t,s]=ft.useState([]),[o,u]=ft.useState(!0),[h,m]=ft.useState(""),[,g]=ft.useState([]);ft.useEffect(()=>{_(),w()},[]),ft.useEffect(()=>{const N=Mg(Nu(Mu,"verification_logs"),bg("createdAt","desc")),j=lA(N,W=>{const Y=W.docs.map(B=>({id:B.id,...B.data()}));g(Y)});return()=>j()},[]);const _=async()=>{try{const N=Nu(Mu,"verification_logs"),W=(await jg(N)).docs.map(fe=>fe.data()),Y=W.length,B=W.filter(fe=>fe.status==="success").length,me=W.filter(fe=>fe.status==="failed").length;e({total:Y,success:B,failed:me,pending:Y-(B+me)})}catch(N){console.error("Error fetching stats:",N)}},w=async()=>{try{const N=Nu(Mu,"voters"),j=Mg(N,bg("created_at","desc")),Y=(await jg(j)).docs.map(B=>({id:B.id,...B.data()}));s(Y)}catch(N){console.error("Error fetching voters:",N)}finally{u(!1)}},S=t.filter(N=>N.full_name.toLowerCase().includes(h.toLowerCase())||N.aadhaar_id.includes(h)||N.electoral_roll_number.includes(h));return G.jsxs("div",{className:"space-y-6",children:[G.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[G.jsx(Su,{title:"Total Voters",value:i.total,icon:G.jsx(hy,{className:"h-6 w-6"}),className:"bg-blue-500/10 text-blue-500"}),G.jsx(Su,{title:"Verified",value:i.success,icon:G.jsx(cy,{className:"h-6 w-6"}),className:"bg-green-500/10 text-green-500"}),G.jsx(Su,{title:"Failed",value:i.failed,icon:G.jsx(_w,{className:"h-6 w-6"}),className:"bg-red-500/10 text-red-500"}),G.jsx(Su,{title:"Pending",value:i.pending,icon:G.jsx(mw,{className:"h-6 w-6"}),className:"bg-yellow-500/10 text-yellow-500"})]}),G.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-between items-center",children:[G.jsxs("div",{className:"relative flex-1 max-w-md",children:[G.jsx(hw,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50"}),G.jsx("input",{type:"text",placeholder:"Search voters...",value:h,onChange:N=>m(N.target.value),className:"w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),G.jsxs("div",{className:"flex gap-2",children:[G.jsxs("button",{onClick:w,className:"px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center space-x-2 transition",children:[G.jsx(uw,{className:"h-5 w-5"}),G.jsx("span",{children:"Refresh"})]}),G.jsxs("button",{className:"px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2 transition",children:[G.jsx(aw,{className:"h-5 w-5"}),G.jsx("span",{children:"Add Voter"})]})]})]}),G.jsx("div",{className:"bg-white/5 rounded-lg overflow-hidden",children:G.jsx("div",{className:"overflow-x-auto",children:G.jsxs("table",{className:"w-full",children:[G.jsx("thead",{children:G.jsxs("tr",{className:"border-b border-white/10",children:[G.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Name"}),G.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Aadhaar ID"}),G.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Electoral Roll"}),G.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Region"}),G.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold text-white/70",children:"Registered"})]})}),G.jsx("tbody",{className:"divide-y divide-white/10",children:o?G.jsx("tr",{children:G.jsx("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"Loading voters..."})}):S.length===0?G.jsx("tr",{children:G.jsx("td",{colSpan:5,className:"px-6 py-4 text-center text-white/50",children:"No voters found"})}):S.map(N=>G.jsxs("tr",{className:"hover:bg-white/5 transition",children:[G.jsx("td",{className:"px-6 py-4 text-white",children:N.full_name}),G.jsx("td",{className:"px-6 py-4 text-white/70",children:N.aadhaar_id}),G.jsx("td",{className:"px-6 py-4 text-white/70",children:N.electoral_roll_number}),G.jsx("td",{className:"px-6 py-4 text-white/70",children:N.region_code}),G.jsx("td",{className:"px-6 py-4 text-white/70",children:new Date(N.created_at).toLocaleDateString()})]},N.id))})]})})})]})}function Su({title:i,value:e,icon:t,className:s}){return G.jsx("div",{className:`p-6 rounded-lg ${s}`,children:G.jsxs("div",{className:"flex items-center justify-between",children:[G.jsxs("div",{children:[G.jsx("p",{className:"text-sm font-medium opacity-70",children:i}),G.jsx("p",{className:"text-2xl font-bold mt-1",children:e})]}),t]})})}function FC(){const[i,e]=ft.useState(!1),[t,s]=ft.useState(!1),[o,u]=ft.useState("idle"),[h,m]=ft.useState(""),g=async()=>{u("processing");try{await new Promise(Y=>setTimeout(Y,2e3));const W=Math.random()>.5;await aA(Nu(Mu,"verification_logs"),{verification_type:"face",status:W?"success":"failed",error_message:W?null:"Facial recognition failed",timestamp:new Date}),u(W?"success":"failed"),W||m("Facial recognition failed. Please try again or seek staff assistance.")}catch(W){console.error("Verification error:",W),u("failed"),m("An error occurred during verification. Please try again.")}},_=async W=>{W.preventDefault();try{(await uR(MC,w,N)).user&&s(!0)}catch(Y){console.error("Login error:",Y),alert("Invalid credentials")}},[w,S]=ft.useState(""),[N,j]=ft.useState("");return G.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900",children:[G.jsx("header",{className:"bg-white/10 backdrop-blur-sm border-b border-white/20",children:G.jsxs("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:[G.jsxs("div",{className:"flex items-center space-x-2",children:[G.jsx(fw,{className:"h-8 w-8 text-blue-400"}),G.jsx("h1",{className:"text-2xl font-bold text-white",children:"VoteX"})]}),G.jsxs("button",{onClick:()=>{e(!i),s(!1)},className:"px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center space-x-2 transition",children:[G.jsx(hy,{className:"h-5 w-5"}),G.jsx("span",{children:i?"Voter Portal":"Staff Portal"})]})]})}),G.jsx("main",{className:"container mx-auto px-4 py-8",children:i?t?G.jsx(bC,{}):G.jsx("div",{className:"max-w-md mx-auto",children:G.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[G.jsx("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Staff Login"}),G.jsxs("form",{onSubmit:_,className:"space-y-4",children:[G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium mb-1",children:"Username"}),G.jsx("input",{type:"text",value:w,onChange:W=>S(W.target.value),className:"w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your username"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium mb-1",children:"Password"}),G.jsx("input",{type:"password",value:N,onChange:W=>j(W.target.value),className:"w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter your password"})]}),G.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition",children:"Login"})]})]})}):G.jsx(UC,{status:o,errorMessage:h,onVerify:g})})]})}function UC({status:i,errorMessage:e,onVerify:t}){return G.jsx("div",{className:"max-w-2xl mx-auto",children:G.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white",children:[G.jsx("h2",{className:"text-3xl font-bold mb-6 text-center",children:"Voter Verification"}),G.jsxs("div",{className:"space-y-6",children:[i==="idle"&&G.jsxs("div",{className:"text-center space-y-4",children:[G.jsx("p",{className:"text-lg",children:"Please stand in front of the camera and place your thumb on the scanner"}),G.jsxs("div",{className:"flex justify-center space-x-4",children:[G.jsxs("div",{className:"p-4 bg-white/5 rounded-lg flex flex-col items-center",children:[G.jsx(tw,{className:"h-8 w-8 mb-2"}),G.jsx("span",{children:"Camera Ready"})]}),G.jsxs("div",{className:"p-4 bg-white/5 rounded-lg flex flex-col items-center",children:[G.jsx(sw,{className:"h-8 w-8 mb-2"}),G.jsx("span",{children:"Scanner Ready"})]})]}),G.jsx("button",{onClick:t,className:"px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition",children:"Start Verification"})]}),i==="processing"&&G.jsxs("div",{className:"text-center space-y-4",children:[G.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"}),G.jsx("p",{children:"Processing verification..."})]}),i==="success"&&G.jsxs("div",{className:"text-center space-y-4",children:[G.jsx(cy,{className:"h-16 w-16 text-green-400 mx-auto"}),G.jsx("p",{className:"text-xl font-semibold text-green-400",children:"Verification Successful"}),G.jsx("p",{children:"You may proceed to the voting booth"})]}),i==="failed"&&G.jsxs("div",{className:"text-center space-y-4",children:[G.jsx(rw,{className:"h-16 w-16 text-red-400 mx-auto"}),G.jsx("p",{className:"text-xl font-semibold text-red-400",children:"Verification Failed"}),G.jsx("p",{children:e}),G.jsx("button",{onClick:t,className:"px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition",children:"Try Again"})]})]})]})})}YE.createRoot(document.getElementById("root")).render(G.jsx(ft.StrictMode,{children:G.jsx(FC,{})}));
