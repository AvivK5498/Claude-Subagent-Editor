(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const m of y)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&g(v)}).observe(document,{childList:!0,subtree:!0});function u(y){const m={};return y.integrity&&(m.integrity=y.integrity),y.referrerPolicy&&(m.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?m.credentials="include":y.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function g(y){if(y.ep)return;y.ep=!0;const m=u(y);fetch(y.href,m)}})();function Dc(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var zi={exports:{}},Bo={},Oi={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function Ef(){if(fc)return xe;fc=1;var a=Symbol.for("react.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),L=Symbol.iterator;function $(_){return _===null||typeof _!="object"?null:(_=L&&_[L]||_["@@iterator"],typeof _=="function"?_:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,U={};function Q(_,f,E){this.props=_,this.context=f,this.refs=U,this.updater=E||z}Q.prototype.isReactComponent={},Q.prototype.setState=function(_,f){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,f,"setState")},Q.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function D(){}D.prototype=Q.prototype;function fe(_,f,E){this.props=_,this.context=f,this.refs=U,this.updater=E||z}var pe=fe.prototype=new D;pe.constructor=fe,B(pe,Q.prototype),pe.isPureReactComponent=!0;var be=Array.isArray,Ie=Object.prototype.hasOwnProperty,se={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function Ae(_,f,E){var G,ee={},ve=null,Oe=null;if(f!=null)for(G in f.ref!==void 0&&(Oe=f.ref),f.key!==void 0&&(ve=""+f.key),f)Ie.call(f,G)&&!me.hasOwnProperty(G)&&(ee[G]=f[G]);var Ne=arguments.length-2;if(Ne===1)ee.children=E;else if(1<Ne){for(var K=Array(Ne),tt=0;tt<Ne;tt++)K[tt]=arguments[tt+2];ee.children=K}if(_&&_.defaultProps)for(G in Ne=_.defaultProps,Ne)ee[G]===void 0&&(ee[G]=Ne[G]);return{$$typeof:a,type:_,key:ve,ref:Oe,props:ee,_owner:se.current}}function $e(_,f){return{$$typeof:a,type:_.type,key:f,ref:_.ref,props:_.props,_owner:_._owner}}function De(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function et(_){var f={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(E){return f[E]})}var ue=/\/+/g;function _e(_,f){return typeof _=="object"&&_!==null&&_.key!=null?et(""+_.key):f.toString(36)}function Fe(_,f,E,G,ee){var ve=typeof _;(ve==="undefined"||ve==="boolean")&&(_=null);var Oe=!1;if(_===null)Oe=!0;else switch(ve){case"string":case"number":Oe=!0;break;case"object":switch(_.$$typeof){case a:case d:Oe=!0}}if(Oe)return Oe=_,ee=ee(Oe),_=G===""?"."+_e(Oe,0):G,be(ee)?(E="",_!=null&&(E=_.replace(ue,"$&/")+"/"),Fe(ee,f,E,"",function(tt){return tt})):ee!=null&&(De(ee)&&(ee=$e(ee,E+(!ee.key||Oe&&Oe.key===ee.key?"":(""+ee.key).replace(ue,"$&/")+"/")+_)),f.push(ee)),1;if(Oe=0,G=G===""?".":G+":",be(_))for(var Ne=0;Ne<_.length;Ne++){ve=_[Ne];var K=G+_e(ve,Ne);Oe+=Fe(ve,f,E,K,ee)}else if(K=$(_),typeof K=="function")for(_=K.call(_),Ne=0;!(ve=_.next()).done;)ve=ve.value,K=G+_e(ve,Ne++),Oe+=Fe(ve,f,E,K,ee);else if(ve==="object")throw f=String(_),Error("Objects are not valid as a React child (found: "+(f==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.");return Oe}function re(_,f,E){if(_==null)return _;var G=[],ee=0;return Fe(_,G,"","",function(ve){return f.call(E,ve,ee++)}),G}function ze(_){if(_._status===-1){var f=_._result;f=f(),f.then(function(E){(_._status===0||_._status===-1)&&(_._status=1,_._result=E)},function(E){(_._status===0||_._status===-1)&&(_._status=2,_._result=E)}),_._status===-1&&(_._status=0,_._result=f)}if(_._status===1)return _._result.default;throw _._result}var Se={current:null},A={transition:null},V={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:A,ReactCurrentOwner:se};function F(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:re,forEach:function(_,f,E){re(_,function(){f.apply(this,arguments)},E)},count:function(_){var f=0;return re(_,function(){f++}),f},toArray:function(_){return re(_,function(f){return f})||[]},only:function(_){if(!De(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},xe.Component=Q,xe.Fragment=u,xe.Profiler=y,xe.PureComponent=fe,xe.StrictMode=g,xe.Suspense=S,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,xe.act=F,xe.cloneElement=function(_,f,E){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var G=B({},_.props),ee=_.key,ve=_.ref,Oe=_._owner;if(f!=null){if(f.ref!==void 0&&(ve=f.ref,Oe=se.current),f.key!==void 0&&(ee=""+f.key),_.type&&_.type.defaultProps)var Ne=_.type.defaultProps;for(K in f)Ie.call(f,K)&&!me.hasOwnProperty(K)&&(G[K]=f[K]===void 0&&Ne!==void 0?Ne[K]:f[K])}var K=arguments.length-2;if(K===1)G.children=E;else if(1<K){Ne=Array(K);for(var tt=0;tt<K;tt++)Ne[tt]=arguments[tt+2];G.children=Ne}return{$$typeof:a,type:_.type,key:ee,ref:ve,props:G,_owner:Oe}},xe.createContext=function(_){return _={$$typeof:v,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:m,_context:_},_.Consumer=_},xe.createElement=Ae,xe.createFactory=function(_){var f=Ae.bind(null,_);return f.type=_,f},xe.createRef=function(){return{current:null}},xe.forwardRef=function(_){return{$$typeof:N,render:_}},xe.isValidElement=De,xe.lazy=function(_){return{$$typeof:Z,_payload:{_status:-1,_result:_},_init:ze}},xe.memo=function(_,f){return{$$typeof:R,type:_,compare:f===void 0?null:f}},xe.startTransition=function(_){var f=A.transition;A.transition={};try{_()}finally{A.transition=f}},xe.unstable_act=F,xe.useCallback=function(_,f){return Se.current.useCallback(_,f)},xe.useContext=function(_){return Se.current.useContext(_)},xe.useDebugValue=function(){},xe.useDeferredValue=function(_){return Se.current.useDeferredValue(_)},xe.useEffect=function(_,f){return Se.current.useEffect(_,f)},xe.useId=function(){return Se.current.useId()},xe.useImperativeHandle=function(_,f,E){return Se.current.useImperativeHandle(_,f,E)},xe.useInsertionEffect=function(_,f){return Se.current.useInsertionEffect(_,f)},xe.useLayoutEffect=function(_,f){return Se.current.useLayoutEffect(_,f)},xe.useMemo=function(_,f){return Se.current.useMemo(_,f)},xe.useReducer=function(_,f,E){return Se.current.useReducer(_,f,E)},xe.useRef=function(_){return Se.current.useRef(_)},xe.useState=function(_){return Se.current.useState(_)},xe.useSyncExternalStore=function(_,f,E){return Se.current.useSyncExternalStore(_,f,E)},xe.useTransition=function(){return Se.current.useTransition()},xe.version="18.3.1",xe}var pc;function Bi(){return pc||(pc=1,Oi.exports=Ef()),Oi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Lf(){if(mc)return Bo;mc=1;var a=Bi(),d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(N,S,R){var Z,L={},$=null,z=null;R!==void 0&&($=""+R),S.key!==void 0&&($=""+S.key),S.ref!==void 0&&(z=S.ref);for(Z in S)g.call(S,Z)&&!m.hasOwnProperty(Z)&&(L[Z]=S[Z]);if(N&&N.defaultProps)for(Z in S=N.defaultProps,S)L[Z]===void 0&&(L[Z]=S[Z]);return{$$typeof:d,type:N,key:$,ref:z,props:L,_owner:y.current}}return Bo.Fragment=u,Bo.jsx=v,Bo.jsxs=v,Bo}var _c;function Tf(){return _c||(_c=1,zi.exports=Lf()),zi.exports}var s=Tf(),j=Bi();const Pf=Dc(j);var Kl={},Ii={exports:{}},bt={},Ai={exports:{}},Di={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Mf(){return hc||(hc=1,(function(a){function d(A,V){var F=A.length;A.push(V);e:for(;0<F;){var _=F-1>>>1,f=A[_];if(0<y(f,V))A[_]=V,A[F]=f,F=_;else break e}}function u(A){return A.length===0?null:A[0]}function g(A){if(A.length===0)return null;var V=A[0],F=A.pop();if(F!==V){A[0]=F;e:for(var _=0,f=A.length,E=f>>>1;_<E;){var G=2*(_+1)-1,ee=A[G],ve=G+1,Oe=A[ve];if(0>y(ee,F))ve<f&&0>y(Oe,ee)?(A[_]=Oe,A[ve]=F,_=ve):(A[_]=ee,A[G]=F,_=G);else if(ve<f&&0>y(Oe,F))A[_]=Oe,A[ve]=F,_=ve;else break e}}return V}function y(A,V){var F=A.sortIndex-V.sortIndex;return F!==0?F:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var v=Date,N=v.now();a.unstable_now=function(){return v.now()-N}}var S=[],R=[],Z=1,L=null,$=3,z=!1,B=!1,U=!1,Q=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(A){for(var V=u(R);V!==null;){if(V.callback===null)g(R);else if(V.startTime<=A)g(R),V.sortIndex=V.expirationTime,d(S,V);else break;V=u(R)}}function be(A){if(U=!1,pe(A),!B)if(u(S)!==null)B=!0,ze(Ie);else{var V=u(R);V!==null&&Se(be,V.startTime-A)}}function Ie(A,V){B=!1,U&&(U=!1,D(Ae),Ae=-1),z=!0;var F=$;try{for(pe(V),L=u(S);L!==null&&(!(L.expirationTime>V)||A&&!et());){var _=L.callback;if(typeof _=="function"){L.callback=null,$=L.priorityLevel;var f=_(L.expirationTime<=V);V=a.unstable_now(),typeof f=="function"?L.callback=f:L===u(S)&&g(S),pe(V)}else g(S);L=u(S)}if(L!==null)var E=!0;else{var G=u(R);G!==null&&Se(be,G.startTime-V),E=!1}return E}finally{L=null,$=F,z=!1}}var se=!1,me=null,Ae=-1,$e=5,De=-1;function et(){return!(a.unstable_now()-De<$e)}function ue(){if(me!==null){var A=a.unstable_now();De=A;var V=!0;try{V=me(!0,A)}finally{V?_e():(se=!1,me=null)}}else se=!1}var _e;if(typeof fe=="function")_e=function(){fe(ue)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,re=Fe.port2;Fe.port1.onmessage=ue,_e=function(){re.postMessage(null)}}else _e=function(){Q(ue,0)};function ze(A){me=A,se||(se=!0,_e())}function Se(A,V){Ae=Q(function(){A(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(A){A.callback=null},a.unstable_continueExecution=function(){B||z||(B=!0,ze(Ie))},a.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<A?Math.floor(1e3/A):5},a.unstable_getCurrentPriorityLevel=function(){return $},a.unstable_getFirstCallbackNode=function(){return u(S)},a.unstable_next=function(A){switch($){case 1:case 2:case 3:var V=3;break;default:V=$}var F=$;$=V;try{return A()}finally{$=F}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=$;$=A;try{return V()}finally{$=F}},a.unstable_scheduleCallback=function(A,V,F){var _=a.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?_+F:_):F=_,A){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=F+f,A={id:Z++,callback:V,priorityLevel:A,startTime:F,expirationTime:f,sortIndex:-1},F>_?(A.sortIndex=F,d(R,A),u(S)===null&&A===u(R)&&(U?(D(Ae),Ae=-1):U=!0,Se(be,F-_))):(A.sortIndex=f,d(S,A),B||z||(B=!0,ze(Ie))),A},a.unstable_shouldYield=et,a.unstable_wrapCallback=function(A){var V=$;return function(){var F=$;$=V;try{return A.apply(this,arguments)}finally{$=F}}}})(Di)),Di}var gc;function zf(){return gc||(gc=1,Ai.exports=Mf()),Ai.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc;function Of(){if(yc)return bt;yc=1;var a=Bi(),d=zf();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(y[e]=t,e=0;e<t.length;e++)g.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z={},L={};function $(e){return S.call(L,e)?!0:S.call(Z,e)?!1:R.test(e)?L[e]=!0:(Z[e]=!0,!1)}function z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function fe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,fe);Q[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,fe);Q[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,fe);Q[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function pe(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,o,r)&&(n=null),r||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),se=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),De=Symbol.for("react.provider"),et=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),A=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,_;function f(e){if(_===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return`
`+_+e}var E=!1;function G(e,t){if(!e||E)return"";E=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var r=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){r=b}e.call(t.prototype)}else{try{throw Error()}catch(b){r=b}e()}}catch(b){if(b&&r&&typeof b.stack=="string"){for(var o=b.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,c=l.length-1;1<=i&&0<=c&&o[i]!==l[c];)c--;for(;1<=i&&0<=c;i--,c--)if(o[i]!==l[c]){if(i!==1||c!==1)do if(i--,c--,0>c||o[i]!==l[c]){var p=`
`+o[i].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=i&&0<=c);break}}}finally{E=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?f(e):""}function ee(e){switch(e.tag){case 5:return f(e.type);case 16:return f("Lazy");case 13:return f("Suspense");case 19:return f("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case se:return"Portal";case $e:return"Profiler";case Ae:return"StrictMode";case _e:return"Suspense";case Fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case et:return(e.displayName||"Context")+".Consumer";case De:return(e._context.displayName||"Context")+".Provider";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function Oe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===Ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pe(e){e._valueTracker||(e._valueTracker=tt(e))}function Jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hr(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Je(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ne(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zr(e,t){t=t.checked,t!=null&&pe(e,"checked",t,!1)}function Vt(e,t){Zr(e,t);var n=Ne(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gt(e,t.type,Ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gt(e,t,n){(t!=="number"||Qn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ne(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(gn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ne(n)}}function to(e,t){var n=Ne(t.value),r=Ne(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?no(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xn,Gn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xn=xn||document.createElement("div"),xn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ft=["Webkit","ms","Moz","O"];Object.keys(Kt).forEach(function(e){Ft.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kt[t]=Kt[e]})});function ro(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kt.hasOwnProperty(e)&&Kt[e]?(""+t).trim():t+"px"}function rn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ro(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Lt=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function on(e,t){if(t){if(Lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ln(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vn=null;function xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kn=null,Jt=null,wn=null;function oo(e){if(e=No(e)){if(typeof kn!="function")throw Error(u(280));var t=e.stateNode;t&&(t=dl(t),kn(e.stateNode,e.type,t))}}function lo(e){Jt?wn?wn.push(e):wn=[e]:Jt=e}function bn(){if(Jt){var e=Jt,t=wn;if(wn=Jt=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function Tt(e,t){return e(t)}function so(){}var vr=!1;function Jn(e,t,n){if(vr)return e(t,n);vr=!0;try{return Tt(e,t,n)}finally{vr=!1,(Jt!==null||wn!==null)&&(so(),bn())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var io=!1;if(N)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){io=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{io=!1}function Qo(e,t,n,r,o,l,i,c,p){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(M){this.onError(M)}}var Sn=!1,kr=null,wr=!1,er=null,es={onError:function(e){Sn=!0,kr=e}};function ts(e,t,n,r,o,l,i,c,p){Sn=!1,kr=null,Qo.apply(es,arguments)}function br(e,t,n,r,o,l,i,c,p){if(ts.apply(this,arguments),Sn){if(Sn){var b=kr;Sn=!1,kr=null}else throw Error(u(198));wr||(wr=!0,er=b)}}function Pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ao(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uo(e){if(Pt(e)!==e)throw Error(u(188))}function Vo(e){var t=e.alternate;if(!t){if(t=Pt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return uo(o),e;if(l===r)return uo(o),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,c=o.child;c;){if(c===n){i=!0,n=o,r=l;break}if(c===r){i=!0,r=o,n=l;break}c=c.sibling}if(!i){for(c=l.child;c;){if(c===n){i=!0,n=l,r=o;break}if(c===r){i=!0,r=l,n=o;break}c=c.sibling}if(!i)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){return e=Vo(e),e!==null?T(e):null}function T(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=T(e);if(t!==null)return t;e=e.sibling}return null}var H=d.unstable_scheduleCallback,ie=d.unstable_cancelCallback,ce=d.unstable_shouldYield,ae=d.unstable_requestPaint,oe=d.unstable_now,Ce=d.unstable_getCurrentPriorityLevel,Ye=d.unstable_ImmediatePriority,we=d.unstable_UserBlockingPriority,he=d.unstable_NormalPriority,Ee=d.unstable_LowPriority,ot=d.unstable_IdlePriority,Le=null,ke=null;function Mt(e){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Le,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:zt,tr=Math.log,Zt=Math.LN2;function zt(e){return e>>>=0,e===0?32:31-(tr(e)/Zt|0)|0}var ge=64,ye=4194304;function lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function He(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var c=i&~o;c!==0?r=lt(c):(l&=i,l!==0&&(r=lt(l)))}else i=n&~o,i!==0?r=lt(i):l!==0&&(r=lt(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Cn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qe(l),c=1<<i,p=o[i];p===-1?((c&n)===0||(c&r)!==0)&&(o[i]=Cn(c,t)):p<=t&&(e.expiredLanes|=c),l&=~c}}function Sr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Go(){var e=ge;return ge<<=1,(ge&4194240)===0&&(ge=64),e}function Cr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Vc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ns(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Me=0;function Wi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hi,rs,Xi,Qi,Vi,os=!1,Ko=[],jn=null,Nn=null,En=null,co=new Map,fo=new Map,Ln=[],Gc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function po(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=No(t),t!==null&&rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kc(e,t,n,r,o){switch(t){case"focusin":return jn=po(jn,e,t,n,r,o),!0;case"dragenter":return Nn=po(Nn,e,t,n,r,o),!0;case"mouseover":return En=po(En,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return co.set(l,po(co.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,fo.set(l,po(fo.get(l)||null,e,t,n,r,o)),!0}return!1}function Ki(e){var t=rr(e.target);if(t!==null){var n=Pt(t);if(n!==null){if(t=n.tag,t===13){if(t=ao(n),t!==null){e.blockedOn=t,Vi(e.priority,function(){Xi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vn=r,n.target.dispatchEvent(r),vn=null}else return t=No(n),t!==null&&rs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ji(e,t,n){Jo(e)&&n.delete(t)}function Jc(){os=!1,jn!==null&&Jo(jn)&&(jn=null),Nn!==null&&Jo(Nn)&&(Nn=null),En!==null&&Jo(En)&&(En=null),co.forEach(Ji),fo.forEach(Ji)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,os||(os=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Jc)))}function _o(e){function t(o){return mo(o,e)}if(0<Ko.length){mo(Ko[0],e);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&mo(jn,e),Nn!==null&&mo(Nn,e),En!==null&&mo(En,e),co.forEach(t),fo.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Ki(n),n.blockedOn===null&&Ln.shift()}var jr=be.ReactCurrentBatchConfig,Zo=!0;function Zc(e,t,n,r){var o=Me,l=jr.transition;jr.transition=null;try{Me=1,ls(e,t,n,r)}finally{Me=o,jr.transition=l}}function qc(e,t,n,r){var o=Me,l=jr.transition;jr.transition=null;try{Me=4,ls(e,t,n,r)}finally{Me=o,jr.transition=l}}function ls(e,t,n,r){if(Zo){var o=ss(e,t,n,r);if(o===null)bs(e,t,r,qo,n),Gi(e,r);else if(Kc(o,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<Gc.indexOf(e)){for(;o!==null;){var l=No(o);if(l!==null&&Hi(l),l=ss(e,t,n,r),l===null&&bs(e,t,r,qo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else bs(e,t,r,null,n)}}var qo=null;function ss(e,t,n,r){if(qo=null,e=xr(r),e=rr(e),e!==null)if(t=Pt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ao(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Zi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ce()){case Ye:return 1;case we:return 4;case he:case Ee:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Tn=null,is=null,el=null;function qi(){if(el)return el;var e,t=is,n=t.length,r,o="value"in Tn?Tn.value:Tn.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return el=o.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function ea(){return!1}function Ct(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?nl:ea,this.isPropagationStopped=ea,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Ct(Nr),ho=F({},Nr,{view:0,detail:0}),ed=Ct(ho),us,cs,go,rl=F({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(us=e.screenX-go.screenX,cs=e.screenY-go.screenY):cs=us=0,go=e),us)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),ta=Ct(rl),td=F({},rl,{dataTransfer:0}),nd=Ct(td),rd=F({},ho,{relatedTarget:0}),ds=Ct(rd),od=F({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),ld=Ct(od),sd=F({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),id=Ct(sd),ad=F({},Nr,{data:0}),na=Ct(ad),ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dd[e])?!!t[e]:!1}function fs(){return fd}var pd=F({},ho,{key:function(e){if(e.key){var t=ud[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),md=Ct(pd),_d=F({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ra=Ct(_d),hd=F({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),gd=Ct(hd),yd=F({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Ct(yd),vd=F({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=Ct(vd),wd=[9,13,27,32],ps=N&&"CompositionEvent"in window,yo=null;N&&"documentMode"in document&&(yo=document.documentMode);var bd=N&&"TextEvent"in window&&!yo,oa=N&&(!ps||yo&&8<yo&&11>=yo),la=" ",sa=!1;function ia(e,t){switch(e){case"keyup":return wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Sd(e,t){switch(e){case"compositionend":return aa(t);case"keypress":return t.which!==32?null:(sa=!0,la);case"textInput":return e=t.data,e===la&&sa?null:e;default:return null}}function Cd(e,t){if(Er)return e==="compositionend"||!ps&&ia(e,t)?(e=qi(),el=is=Tn=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oa&&t.locale!=="ko"?null:t.data;default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jd[e.type]:t==="textarea"}function ca(e,t,n,r){lo(r),t=al(t,"onChange"),0<t.length&&(n=new as("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xo=null,vo=null;function Nd(e){Ea(e,0)}function ol(e){var t=zr(e);if(Jr(t))return e}function Ed(e,t){if(e==="change")return t}var da=!1;if(N){var ms;if(N){var _s="oninput"in document;if(!_s){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),_s=typeof fa.oninput=="function"}ms=_s}else ms=!1;da=ms&&(!document.documentMode||9<document.documentMode)}function pa(){xo&&(xo.detachEvent("onpropertychange",ma),vo=xo=null)}function ma(e){if(e.propertyName==="value"&&ol(vo)){var t=[];ca(t,vo,e,xr(e)),Jn(Nd,t)}}function Ld(e,t,n){e==="focusin"?(pa(),xo=t,vo=n,xo.attachEvent("onpropertychange",ma)):e==="focusout"&&pa()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(vo)}function Pd(e,t){if(e==="click")return ol(t)}function Md(e,t){if(e==="input"||e==="change")return ol(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:zd;function ko(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!S.call(t,o)||!Bt(e[o],t[o]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,t){var n=_a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_a(n)}}function ga(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ga(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ya(){for(var e=window,t=Qn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qn(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=ya(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ga(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ha(n,l);var i=ha(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Id=N&&"documentMode"in document&&11>=document.documentMode,Lr=null,gs=null,wo=null,ys=!1;function xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||Lr==null||Lr!==Qn(r)||(r=Lr,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&ko(wo,r)||(wo=r,r=al(gs,"onSelect"),0<r.length&&(t=new as("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},xs={},va={};N&&(va=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function sl(e){if(xs[e])return xs[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in va)return xs[e]=t[n];return e}var ka=sl("animationend"),wa=sl("animationiteration"),ba=sl("animationstart"),Sa=sl("transitionend"),Ca=new Map,ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Ca.set(e,t),m(t,[e])}for(var vs=0;vs<ja.length;vs++){var ks=ja[vs],Ad=ks.toLowerCase(),Dd=ks[0].toUpperCase()+ks.slice(1);Pn(Ad,"on"+Dd)}Pn(ka,"onAnimationEnd"),Pn(wa,"onAnimationIteration"),Pn(ba,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(Sa,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Na(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,br(r,t,void 0,e),e.currentTarget=null}function Ea(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var c=r[i],p=c.instance,b=c.currentTarget;if(c=c.listener,p!==l&&o.isPropagationStopped())break e;Na(o,c,b),l=p}else for(i=0;i<r.length;i++){if(c=r[i],p=c.instance,b=c.currentTarget,c=c.listener,p!==l&&o.isPropagationStopped())break e;Na(o,c,b),l=p}}}if(wr)throw e=er,wr=!1,er=null,e}function Be(e,t){var n=t[Ls];n===void 0&&(n=t[Ls]=new Set);var r=e+"__bubble";n.has(r)||(La(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),La(n,e,r,t)}var il="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[il]){e[il]=!0,g.forEach(function(n){n!=="selectionchange"&&(Rd.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[il]||(t[il]=!0,ws("selectionchange",!1,t))}}function La(e,t,n,r){switch(Zi(t)){case 1:var o=Zc;break;case 4:o=qc;break;default:o=ls}n=o.bind(null,t,n,e),o=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bs(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;i=i.return}for(;c!==null;){if(i=rr(c),i===null)return;if(p=i.tag,p===5||p===6){r=l=i;continue e}c=c.parentNode}}r=r.return}Jn(function(){var b=l,M=xr(n),O=[];e:{var P=Ca.get(e);if(P!==void 0){var Y=as,X=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":Y=md;break;case"focusin":X="focus",Y=ds;break;case"focusout":X="blur",Y=ds;break;case"beforeblur":case"afterblur":Y=ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=gd;break;case ka:case wa:case ba:Y=ld;break;case Sa:Y=xd;break;case"scroll":Y=ed;break;case"wheel":Y=kd;break;case"copy":case"cut":case"paste":Y=id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=ra}var J=(t&4)!==0,Ze=!J&&e==="scroll",k=J?P!==null?P+"Capture":null:P;J=[];for(var h=b,w;h!==null;){w=h;var I=w.stateNode;if(w.tag===5&&I!==null&&(w=I,k!==null&&(I=Zn(h,k),I!=null&&J.push(Co(h,I,w)))),Ze)break;h=h.return}0<J.length&&(P=new Y(P,X,null,n,M),O.push({event:P,listeners:J}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",P&&n!==vn&&(X=n.relatedTarget||n.fromElement)&&(rr(X)||X[sn]))break e;if((Y||P)&&(P=M.window===M?M:(P=M.ownerDocument)?P.defaultView||P.parentWindow:window,Y?(X=n.relatedTarget||n.toElement,Y=b,X=X?rr(X):null,X!==null&&(Ze=Pt(X),X!==Ze||X.tag!==5&&X.tag!==6)&&(X=null)):(Y=null,X=b),Y!==X)){if(J=ta,I="onMouseLeave",k="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(J=ra,I="onPointerLeave",k="onPointerEnter",h="pointer"),Ze=Y==null?P:zr(Y),w=X==null?P:zr(X),P=new J(I,h+"leave",Y,n,M),P.target=Ze,P.relatedTarget=w,I=null,rr(M)===b&&(J=new J(k,h+"enter",X,n,M),J.target=w,J.relatedTarget=Ze,I=J),Ze=I,Y&&X)t:{for(J=Y,k=X,h=0,w=J;w;w=Pr(w))h++;for(w=0,I=k;I;I=Pr(I))w++;for(;0<h-w;)J=Pr(J),h--;for(;0<w-h;)k=Pr(k),w--;for(;h--;){if(J===k||k!==null&&J===k.alternate)break t;J=Pr(J),k=Pr(k)}J=null}else J=null;Y!==null&&Ta(O,P,Y,J,!1),X!==null&&Ze!==null&&Ta(O,Ze,X,J,!0)}}e:{if(P=b?zr(b):window,Y=P.nodeName&&P.nodeName.toLowerCase(),Y==="select"||Y==="input"&&P.type==="file")var q=Ed;else if(ua(P))if(da)q=Md;else{q=Td;var te=Ld}else(Y=P.nodeName)&&Y.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(q=Pd);if(q&&(q=q(e,b))){ca(O,q,n,M);break e}te&&te(e,P,b),e==="focusout"&&(te=P._wrapperState)&&te.controlled&&P.type==="number"&&Gt(P,"number",P.value)}switch(te=b?zr(b):window,e){case"focusin":(ua(te)||te.contentEditable==="true")&&(Lr=te,gs=b,wo=null);break;case"focusout":wo=gs=Lr=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,xa(O,n,M);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":xa(O,n,M)}var ne;if(ps)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Er?ia(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(oa&&n.locale!=="ko"&&(Er||le!=="onCompositionStart"?le==="onCompositionEnd"&&Er&&(ne=qi()):(Tn=M,is="value"in Tn?Tn.value:Tn.textContent,Er=!0)),te=al(b,le),0<te.length&&(le=new na(le,e,null,n,M),O.push({event:le,listeners:te}),ne?le.data=ne:(ne=aa(n),ne!==null&&(le.data=ne)))),(ne=bd?Sd(e,n):Cd(e,n))&&(b=al(b,"onBeforeInput"),0<b.length&&(M=new na("onBeforeInput","beforeinput",null,n,M),O.push({event:M,listeners:b}),M.data=ne))}Ea(O,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Zn(e,n),l!=null&&r.unshift(Co(e,l,o)),l=Zn(e,t),l!=null&&r.push(Co(e,l,o))),e=e.return}return r}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var c=n,p=c.alternate,b=c.stateNode;if(p!==null&&p===r)break;c.tag===5&&b!==null&&(c=b,o?(p=Zn(n,l),p!=null&&i.unshift(Co(n,p,c))):o||(p=Zn(n,l),p!=null&&i.push(Co(n,p,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $d=/\r\n?/g,Fd=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Fd,"")}function ul(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(u(425))}function cl(){}var Ss=null,Cs=null;function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,Ma=typeof Promise=="function"?Promise:void 0,Bd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ma<"u"?function(e){return Ma.resolve(null).then(e).catch(Ud)}:Ns;function Ud(e){setTimeout(function(){throw e})}function Es(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),_o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);_o(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function za(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),qt="__reactFiber$"+Mr,jo="__reactProps$"+Mr,sn="__reactContainer$"+Mr,Ls="__reactEvents$"+Mr,Wd="__reactListeners$"+Mr,Hd="__reactHandles$"+Mr;function rr(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=za(e);e!==null;){if(n=e[qt])return n;e=za(e)}return t}e=n,n=e.parentNode}return null}function No(e){return e=e[qt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function dl(e){return e[jo]||null}var Ts=[],Or=-1;function zn(e){return{current:e}}function Ue(e){0>Or||(e.current=Ts[Or],Ts[Or]=null,Or--)}function Re(e,t){Or++,Ts[Or]=e.current,e.current=t}var On={},dt=zn(On),yt=zn(!1),or=On;function Ir(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function xt(e){return e=e.childContextTypes,e!=null}function fl(){Ue(yt),Ue(dt)}function Oa(e,t,n){if(dt.current!==On)throw Error(u(168));Re(dt,t),Re(yt,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,Oe(e)||"Unknown",o));return F({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,or=dt.current,Re(dt,e),Re(yt,yt.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Ia(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,Ue(yt),Ue(dt),Re(dt,e)):Ue(yt),Re(yt,n)}var an=null,ml=!1,Ps=!1;function Da(e){an===null?an=[e]:an.push(e)}function Xd(e){ml=!0,Da(e)}function In(){if(!Ps&&an!==null){Ps=!0;var e=0,t=Me;try{var n=an;for(Me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}an=null,ml=!1}catch(o){throw an!==null&&(an=an.slice(e+1)),H(Ye,In),o}finally{Me=t,Ps=!1}}return null}var Ar=[],Dr=0,_l=null,hl=0,Ot=[],It=0,lr=null,un=1,cn="";function sr(e,t){Ar[Dr++]=hl,Ar[Dr++]=_l,_l=e,hl=t}function Ra(e,t,n){Ot[It++]=un,Ot[It++]=cn,Ot[It++]=lr,lr=e;var r=un;e=cn;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var l=32-Qe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,un=1<<32-Qe(t)+o|n<<o|r,cn=l+e}else un=1<<l|n<<o|r,cn=e}function Ms(e){e.return!==null&&(sr(e,1),Ra(e,1,0))}function zs(e){for(;e===_l;)_l=Ar[--Dr],Ar[Dr]=null,hl=Ar[--Dr],Ar[Dr]=null;for(;e===lr;)lr=Ot[--It],Ot[It]=null,cn=Ot[--It],Ot[It]=null,un=Ot[--It],Ot[It]=null}var jt=null,Nt=null,Xe=!1,Ut=null;function $a(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Nt=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lr!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Nt=null,!0):!1;default:return!1}}function Os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Is(e){if(Xe){var t=Nt;if(t){var n=t;if(!Fa(e,t)){if(Os(e))throw Error(u(418));t=Mn(n.nextSibling);var r=jt;t&&Fa(e,t)?$a(r,n):(e.flags=e.flags&-4097|2,Xe=!1,jt=e)}}else{if(Os(e))throw Error(u(418));e.flags=e.flags&-4097|2,Xe=!1,jt=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function gl(e){if(e!==jt)return!1;if(!Xe)return Ya(e),Xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!js(e.type,e.memoizedProps)),t&&(t=Nt)){if(Os(e))throw Ba(),Error(u(418));for(;t;)$a(e,t),t=Mn(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=jt?Mn(e.stateNode.nextSibling):null;return!0}function Ba(){for(var e=Nt;e;)e=Mn(e.nextSibling)}function Rr(){Nt=jt=null,Xe=!1}function As(e){Ut===null?Ut=[e]:Ut.push(e)}var Qd=be.ReactCurrentBatchConfig;function Eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var c=o.refs;i===null?delete c[l]:c[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function yl(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Wa(e){function t(k,h){if(e){var w=k.deletions;w===null?(k.deletions=[h],k.flags|=16):w.push(h)}}function n(k,h){if(!e)return null;for(;h!==null;)t(k,h),h=h.sibling;return null}function r(k,h){for(k=new Map;h!==null;)h.key!==null?k.set(h.key,h):k.set(h.index,h),h=h.sibling;return k}function o(k,h){return k=Un(k,h),k.index=0,k.sibling=null,k}function l(k,h,w){return k.index=w,e?(w=k.alternate,w!==null?(w=w.index,w<h?(k.flags|=2,h):w):(k.flags|=2,h)):(k.flags|=1048576,h)}function i(k){return e&&k.alternate===null&&(k.flags|=2),k}function c(k,h,w,I){return h===null||h.tag!==6?(h=Ni(w,k.mode,I),h.return=k,h):(h=o(h,w),h.return=k,h)}function p(k,h,w,I){var q=w.type;return q===me?M(k,h,w.props.children,I,w.key):h!==null&&(h.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ze&&Ua(q)===h.type)?(I=o(h,w.props),I.ref=Eo(k,h,w),I.return=k,I):(I=Bl(w.type,w.key,w.props,null,k.mode,I),I.ref=Eo(k,h,w),I.return=k,I)}function b(k,h,w,I){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=Ei(w,k.mode,I),h.return=k,h):(h=o(h,w.children||[]),h.return=k,h)}function M(k,h,w,I,q){return h===null||h.tag!==7?(h=mr(w,k.mode,I,q),h.return=k,h):(h=o(h,w),h.return=k,h)}function O(k,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ni(""+h,k.mode,w),h.return=k,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ie:return w=Bl(h.type,h.key,h.props,null,k.mode,w),w.ref=Eo(k,null,h),w.return=k,w;case se:return h=Ei(h,k.mode,w),h.return=k,h;case ze:var I=h._init;return O(k,I(h._payload),w)}if(gn(h)||V(h))return h=mr(h,k.mode,w,null),h.return=k,h;yl(k,h)}return null}function P(k,h,w,I){var q=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return q!==null?null:c(k,h,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ie:return w.key===q?p(k,h,w,I):null;case se:return w.key===q?b(k,h,w,I):null;case ze:return q=w._init,P(k,h,q(w._payload),I)}if(gn(w)||V(w))return q!==null?null:M(k,h,w,I,null);yl(k,w)}return null}function Y(k,h,w,I,q){if(typeof I=="string"&&I!==""||typeof I=="number")return k=k.get(w)||null,c(h,k,""+I,q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ie:return k=k.get(I.key===null?w:I.key)||null,p(h,k,I,q);case se:return k=k.get(I.key===null?w:I.key)||null,b(h,k,I,q);case ze:var te=I._init;return Y(k,h,w,te(I._payload),q)}if(gn(I)||V(I))return k=k.get(w)||null,M(h,k,I,q,null);yl(h,I)}return null}function X(k,h,w,I){for(var q=null,te=null,ne=h,le=h=0,at=null;ne!==null&&le<w.length;le++){ne.index>le?(at=ne,ne=null):at=ne.sibling;var Te=P(k,ne,w[le],I);if(Te===null){ne===null&&(ne=at);break}e&&ne&&Te.alternate===null&&t(k,ne),h=l(Te,h,le),te===null?q=Te:te.sibling=Te,te=Te,ne=at}if(le===w.length)return n(k,ne),Xe&&sr(k,le),q;if(ne===null){for(;le<w.length;le++)ne=O(k,w[le],I),ne!==null&&(h=l(ne,h,le),te===null?q=ne:te.sibling=ne,te=ne);return Xe&&sr(k,le),q}for(ne=r(k,ne);le<w.length;le++)at=Y(ne,k,le,w[le],I),at!==null&&(e&&at.alternate!==null&&ne.delete(at.key===null?le:at.key),h=l(at,h,le),te===null?q=at:te.sibling=at,te=at);return e&&ne.forEach(function(Wn){return t(k,Wn)}),Xe&&sr(k,le),q}function J(k,h,w,I){var q=V(w);if(typeof q!="function")throw Error(u(150));if(w=q.call(w),w==null)throw Error(u(151));for(var te=q=null,ne=h,le=h=0,at=null,Te=w.next();ne!==null&&!Te.done;le++,Te=w.next()){ne.index>le?(at=ne,ne=null):at=ne.sibling;var Wn=P(k,ne,Te.value,I);if(Wn===null){ne===null&&(ne=at);break}e&&ne&&Wn.alternate===null&&t(k,ne),h=l(Wn,h,le),te===null?q=Wn:te.sibling=Wn,te=Wn,ne=at}if(Te.done)return n(k,ne),Xe&&sr(k,le),q;if(ne===null){for(;!Te.done;le++,Te=w.next())Te=O(k,Te.value,I),Te!==null&&(h=l(Te,h,le),te===null?q=Te:te.sibling=Te,te=Te);return Xe&&sr(k,le),q}for(ne=r(k,ne);!Te.done;le++,Te=w.next())Te=Y(ne,k,le,Te.value,I),Te!==null&&(e&&Te.alternate!==null&&ne.delete(Te.key===null?le:Te.key),h=l(Te,h,le),te===null?q=Te:te.sibling=Te,te=Te);return e&&ne.forEach(function(Nf){return t(k,Nf)}),Xe&&sr(k,le),q}function Ze(k,h,w,I){if(typeof w=="object"&&w!==null&&w.type===me&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ie:e:{for(var q=w.key,te=h;te!==null;){if(te.key===q){if(q=w.type,q===me){if(te.tag===7){n(k,te.sibling),h=o(te,w.props.children),h.return=k,k=h;break e}}else if(te.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ze&&Ua(q)===te.type){n(k,te.sibling),h=o(te,w.props),h.ref=Eo(k,te,w),h.return=k,k=h;break e}n(k,te);break}else t(k,te);te=te.sibling}w.type===me?(h=mr(w.props.children,k.mode,I,w.key),h.return=k,k=h):(I=Bl(w.type,w.key,w.props,null,k.mode,I),I.ref=Eo(k,h,w),I.return=k,k=I)}return i(k);case se:e:{for(te=w.key;h!==null;){if(h.key===te)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(k,h.sibling),h=o(h,w.children||[]),h.return=k,k=h;break e}else{n(k,h);break}else t(k,h);h=h.sibling}h=Ei(w,k.mode,I),h.return=k,k=h}return i(k);case ze:return te=w._init,Ze(k,h,te(w._payload),I)}if(gn(w))return X(k,h,w,I);if(V(w))return J(k,h,w,I);yl(k,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(k,h.sibling),h=o(h,w),h.return=k,k=h):(n(k,h),h=Ni(w,k.mode,I),h.return=k,k=h),i(k)):n(k,h)}return Ze}var $r=Wa(!0),Ha=Wa(!1),xl=zn(null),vl=null,Fr=null,Ds=null;function Rs(){Ds=Fr=vl=null}function $s(e){var t=xl.current;Ue(xl),e._currentValue=t}function Fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){vl=e,Ds=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(vt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},Fr===null){if(vl===null)throw Error(u(308));Fr=e,vl.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return t}var ir=null;function Ys(e){ir===null?ir=[e]:ir.push(e)}function Xa(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ys(t)):(n.next=o.next,o.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(je&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dn(e,n)}return o=r.interleaved,o===null?(t.next=t,Ys(r)):(t.next=o.next,o.next=t),r.interleaved=t,dn(e,n)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var o=e.updateQueue;An=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var p=c,b=p.next;p.next=null,i===null?l=b:i.next=b,i=p;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==i&&(c===null?M.firstBaseUpdate=b:c.next=b,M.lastBaseUpdate=p))}if(l!==null){var O=o.baseState;i=0,M=b=p=null,c=l;do{var P=c.lane,Y=c.eventTime;if((r&P)===P){M!==null&&(M=M.next={eventTime:Y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var X=e,J=c;switch(P=t,Y=n,J.tag){case 1:if(X=J.payload,typeof X=="function"){O=X.call(Y,O,P);break e}O=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,P=typeof X=="function"?X.call(Y,O,P):X,P==null)break e;O=F({},O,P);break e;case 2:An=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,P=o.effects,P===null?o.effects=[c]:P.push(c))}else Y={eventTime:Y,lane:P,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(b=M=Y,p=O):M=M.next=Y,i|=P;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;P=c,c=P.next,P.next=null,o.lastBaseUpdate=P,o.shared.pending=null}}while(!0);if(M===null&&(p=O),o.baseState=p,o.firstBaseUpdate=b,o.lastBaseUpdate=M,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);cr|=i,e.lanes=i,e.memoizedState=O}}function Ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var Lo={},en=zn(Lo),To=zn(Lo),Po=zn(Lo);function ar(e){if(e===Lo)throw Error(u(174));return e}function Us(e,t){switch(Re(Po,t),Re(To,e),Re(en,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yr(t,e)}Ue(en),Re(en,t)}function Br(){Ue(en),Ue(To),Ue(Po)}function Ka(e){ar(Po.current);var t=ar(en.current),n=yr(t,e.type);t!==n&&(Re(To,e),Re(en,n))}function Ws(e){To.current===e&&(Ue(en),Ue(To))}var Ve=zn(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hs=[];function Xs(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Sl=be.ReactCurrentDispatcher,Qs=be.ReactCurrentBatchConfig,ur=0,Ge=null,nt=null,st=null,Cl=!1,Mo=!1,zo=0,Vd=0;function ft(){throw Error(u(321))}function Vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Gs(e,t,n,r,o,l){if(ur=l,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sl.current=e===null||e.memoizedState===null?Zd:qd,e=n(r,o),Mo){l=0;do{if(Mo=!1,zo=0,25<=l)throw Error(u(301));l+=1,st=nt=null,t.updateQueue=null,Sl.current=ef,e=n(r,o)}while(Mo)}if(Sl.current=El,t=nt!==null&&nt.next!==null,ur=0,st=nt=Ge=null,Cl=!1,t)throw Error(u(300));return e}function Ks(){var e=zo!==0;return zo=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ge.memoizedState=st=e:st=st.next=e,st}function Dt(){if(nt===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=st===null?Ge.memoizedState:st.next;if(t!==null)st=t,nt=e;else{if(e===null)throw Error(u(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},st===null?Ge.memoizedState=st=e:st=st.next=e}return st}function Oo(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=Dt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=nt,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var c=i=null,p=null,b=l;do{var M=b.lane;if((ur&M)===M)p!==null&&(p=p.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),r=b.hasEagerState?b.eagerState:e(r,b.action);else{var O={lane:M,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};p===null?(c=p=O,i=r):p=p.next=O,Ge.lanes|=M,cr|=M}b=b.next}while(b!==null&&b!==l);p===null?i=r:p.next=c,Bt(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Ge.lanes|=l,cr|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zs(e){var t=Dt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Bt(l,t.memoizedState)||(vt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ja(){}function Za(e,t){var n=Ge,r=Dt(),o=t(),l=!Bt(r.memoizedState,o);if(l&&(r.memoizedState=o,vt=!0),r=r.queue,qs(tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Io(9,eu.bind(null,n,r,o,t),void 0,null),it===null)throw Error(u(349));(ur&30)!==0||qa(n,t,o)}return o}function qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eu(e,t,n,r){t.value=n,t.getSnapshot=r,nu(t)&&ru(e)}function tu(e,t,n){return n(function(){nu(t)&&ru(e)})}function nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function ru(e){var t=dn(e,1);t!==null&&Qt(t,e,1,-1)}function ou(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=Jd.bind(null,Ge,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lu(){return Dt().memoizedState}function jl(e,t,n,r){var o=tn();Ge.flags|=e,o.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var o=Dt();r=r===void 0?null:r;var l=void 0;if(nt!==null){var i=nt.memoizedState;if(l=i.destroy,r!==null&&Vs(r,i.deps)){o.memoizedState=Io(t,n,l,r);return}}Ge.flags|=e,o.memoizedState=Io(1|t,n,l,r)}function su(e,t){return jl(8390656,8,e,t)}function qs(e,t){return Nl(2048,8,e,t)}function iu(e,t){return Nl(4,2,e,t)}function au(e,t){return Nl(4,4,e,t)}function uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cu(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,uu.bind(null,t,e),n)}function ei(){}function du(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fu(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pu(e,t,n){return(ur&21)===0?(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n):(Bt(n,t)||(n=Go(),Ge.lanes|=n,cr|=n,e.baseState=!0),t)}function Gd(e,t){var n=Me;Me=n!==0&&4>n?n:4,e(!0);var r=Qs.transition;Qs.transition={};try{e(!1),t()}finally{Me=n,Qs.transition=r}}function mu(){return Dt().memoizedState}function Kd(e,t,n){var r=Yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))hu(t,n);else if(n=Xa(e,t,n,r),n!==null){var o=gt();Qt(n,e,r,o),gu(n,t,r)}}function Jd(e,t,n){var r=Yn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))hu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,c=l(i,n);if(o.hasEagerState=!0,o.eagerState=c,Bt(c,i)){var p=t.interleaved;p===null?(o.next=o,Ys(t)):(o.next=p.next,p.next=o),t.interleaved=o;return}}catch{}finally{}n=Xa(e,t,o,r),n!==null&&(o=gt(),Qt(n,e,r,o),gu(n,t,r))}}function _u(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function hu(e,t){Mo=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}var El={readContext:At,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},Zd={readContext:At,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jl(4194308,4,uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return jl(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kd.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:ei,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=Gd.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,o=tn();if(Xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),it===null)throw Error(u(349));(ur&30)!==0||qa(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,su(tu.bind(null,r,l,e),[e]),r.flags|=2048,Io(9,eu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=tn(),t=it.identifierPrefix;if(Xe){var n=cn,r=un;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qd={readContext:At,useCallback:du,useContext:At,useEffect:qs,useImperativeHandle:cu,useInsertionEffect:iu,useLayoutEffect:au,useMemo:fu,useReducer:Js,useRef:lu,useState:function(){return Js(Oo)},useDebugValue:ei,useDeferredValue:function(e){var t=Dt();return pu(t,nt.memoizedState,e)},useTransition:function(){var e=Js(Oo)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Ja,useSyncExternalStore:Za,useId:mu,unstable_isNewReconciler:!1},ef={readContext:At,useCallback:du,useContext:At,useEffect:qs,useImperativeHandle:cu,useInsertionEffect:iu,useLayoutEffect:au,useMemo:fu,useReducer:Zs,useRef:lu,useState:function(){return Zs(Oo)},useDebugValue:ei,useDeferredValue:function(e){var t=Dt();return nt===null?t.memoizedState=e:pu(t,nt.memoizedState,e)},useTransition:function(){var e=Zs(Oo)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Ja,useSyncExternalStore:Za,useId:mu,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),o=Yn(e),l=fn(r,o);l.payload=t,n!=null&&(l.callback=n),t=Dn(e,l,o),t!==null&&(Qt(t,e,o,r),kl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),o=Yn(e),l=fn(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dn(e,l,o),t!==null&&(Qt(t,e,o,r),kl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Yn(e),o=fn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dn(e,o,r),t!==null&&(Qt(t,e,r,n),kl(t,e,r))}};function yu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ko(n,r)||!ko(o,l):!0}function xu(e,t,n){var r=!1,o=On,l=t.contextType;return typeof l=="object"&&l!==null?l=At(l):(o=xt(t)?or:dt.current,r=t.contextTypes,l=(r=r!=null)?Ir(e,o):On),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function ni(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=At(l):(l=xt(t)?or:dt.current,o.context=Ir(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ti(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ll.enqueueReplaceState(o,o.state,null),wl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=ee(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function ku(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Al||(Al=!0,xi=r),oi(e,t)},n}function wu(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){oi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){oi(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var nf=be.ReactCurrentOwner,vt=!1;function ht(e,t,n,r){t.child=e===null?Ha(t,null,n,r):$r(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var l=t.ref;return Yr(t,o),r=Gs(e,t,n,r,l,o),n=Ks(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(Xe&&n&&Ms(t),t.flags|=1,ht(e,t,r,o),t.child)}function Nu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ji(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Eu(e,t,l,r,o)):(e=Bl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(i,r)&&e.ref===t.ref)return pn(e,t,o)}return t.flags|=1,e=Un(l,r),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ko(l,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(vt=!0);else return t.lanes=e.lanes,pn(e,t,o)}return li(e,t,n,r,o)}function Lu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Hr,Et),Et|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(Hr,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Re(Hr,Et),Et|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Re(Hr,Et),Et|=r;return ht(e,t,o,n),t.child}function Tu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function li(e,t,n,r,o){var l=xt(n)?or:dt.current;return l=Ir(t,l),Yr(t,o),n=Gs(e,t,n,r,l,o),r=Ks(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pn(e,t,o)):(Xe&&r&&Ms(t),t.flags|=1,ht(e,t,n,o),t.child)}function Pu(e,t,n,r,o){if(xt(n)){var l=!0;pl(t)}else l=!1;if(Yr(t,o),t.stateNode===null)Pl(e,t),xu(t,n,r),ni(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,c=t.memoizedProps;i.props=c;var p=i.context,b=n.contextType;typeof b=="object"&&b!==null?b=At(b):(b=xt(n)?or:dt.current,b=Ir(t,b));var M=n.getDerivedStateFromProps,O=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function";O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==r||p!==b)&&vu(t,i,r,b),An=!1;var P=t.memoizedState;i.state=P,wl(t,r,i,o),p=t.memoizedState,c!==r||P!==p||yt.current||An?(typeof M=="function"&&(ti(t,n,M,r),p=t.memoizedState),(c=An||yu(t,n,c,r,P,p,b))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=b,r=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Qa(e,t),c=t.memoizedProps,b=t.type===t.elementType?c:Wt(t.type,c),i.props=b,O=t.pendingProps,P=i.context,p=n.contextType,typeof p=="object"&&p!==null?p=At(p):(p=xt(n)?or:dt.current,p=Ir(t,p));var Y=n.getDerivedStateFromProps;(M=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==O||P!==p)&&vu(t,i,r,p),An=!1,P=t.memoizedState,i.state=P,wl(t,r,i,o);var X=t.memoizedState;c!==O||P!==X||yt.current||An?(typeof Y=="function"&&(ti(t,n,Y,r),X=t.memoizedState),(b=An||yu(t,n,b,r,P,X,p)||!1)?(M||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,X,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,X,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=X),i.props=r,i.state=X,i.context=p,r=b):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),r=!1)}return si(e,t,n,r,l,o)}function si(e,t,n,r,o,l){Tu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Aa(t,n,!1),pn(e,t,l);r=t.stateNode,nf.current=t;var c=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=$r(t,e.child,null,l),t.child=$r(t,null,c,l)):ht(e,t,c,l),t.memoizedState=r.state,o&&Aa(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Us(e,t.containerInfo)}function zu(e,t,n,r,o){return Rr(),As(o),t.flags|=256,ht(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,o=Ve.current,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Re(Ve,o&1),e===null)return Is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ul(i,r,0,null),e=mr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ai(n),t.memoizedState=ii,e):ui(t,i));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return rf(e,t,i,r,c,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,c=o.sibling;var p={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=Un(o,p),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=Un(c,l):(l=mr(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ii,r}return l=e.child,e=l.sibling,r=Un(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ui(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tl(e,t,n,r){return r!==null&&As(r),$r(t,e.child,null,n),e=ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(u(422))),Tl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ul({mode:"visible",children:r.children},o,0,null),l=mr(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&$r(t,e.child,null,i),t.child.memoizedState=ai(i),t.memoizedState=ii,l);if((t.mode&1)===0)return Tl(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(u(419)),r=ri(l,r,void 0),Tl(e,t,i,r)}if(c=(i&e.childLanes)!==0,vt||c){if(r=it,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,dn(e,o),Qt(r,e,o,-1))}return Ci(),r=ri(Error(u(421))),Tl(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Nt=Mn(o.nextSibling),jt=t,Xe=!0,Ut=null,e!==null&&(Ot[It++]=un,Ot[It++]=cn,Ot[It++]=lr,un=e.id,cn=e.overflow,lr=t),t=ui(t,r.children),t.flags|=4096,t)}function Iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fs(e.return,t,n)}function ci(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Au(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ht(e,t,r.children,n),r=Ve.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,n,t);else if(e.tag===19)Iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(Ve,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ci(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ci(t,!0,n,null,l);break;case"together":ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function of(e,t,n){switch(t.tag){case 3:Mu(t),Rr();break;case 5:Ka(t);break;case 1:xt(t.type)&&pl(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Re(xl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ou(e,t,n):(Re(Ve,Ve.current&1),e=pn(e,t,n),e!==null?e.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Au(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return pn(e,t,n)}var Du,di,Ru,$u;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},di=function(){},Ru=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ar(en.current);var l=null;switch(n){case"input":o=hr(e,o),r=hr(e,r),l=[];break;case"select":o=F({},o,{value:void 0}),r=F({},r,{value:void 0}),l=[];break;case"textarea":o=eo(e,o),r=eo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}on(n,r);var i;n=null;for(b in o)if(!r.hasOwnProperty(b)&&o.hasOwnProperty(b)&&o[b]!=null)if(b==="style"){var c=o[b];for(i in c)c.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(y.hasOwnProperty(b)?l||(l=[]):(l=l||[]).push(b,null));for(b in r){var p=r[b];if(c=o!=null?o[b]:void 0,r.hasOwnProperty(b)&&p!==c&&(p!=null||c!=null))if(b==="style")if(c){for(i in c)!c.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in p)p.hasOwnProperty(i)&&c[i]!==p[i]&&(n||(n={}),n[i]=p[i])}else n||(l||(l=[]),l.push(b,n)),n=p;else b==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,c=c?c.__html:void 0,p!=null&&c!==p&&(l=l||[]).push(b,p)):b==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(b,""+p):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(y.hasOwnProperty(b)?(p!=null&&b==="onScroll"&&Be("scroll",e),l||c===p||(l=[])):(l=l||[]).push(b,p))}n&&(l=l||[]).push("style",n);var b=l;(t.updateQueue=b)&&(t.flags|=4)}},$u=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ao(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lf(e,t,n){var r=t.pendingProps;switch(zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return xt(t.type)&&fl(),pt(t),null;case 3:return r=t.stateNode,Br(),Ue(yt),Ue(dt),Xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ut!==null&&(wi(Ut),Ut=null))),di(e,t),pt(t),null;case 5:Ws(t);var o=ar(Po.current);if(n=t.type,e!==null&&t.stateNode!=null)Ru(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return pt(t),null}if(e=ar(en.current),gl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[qt]=t,r[jo]=l,e=(t.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(o=0;o<bo.length;o++)Be(bo[o],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Je(r,l),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Be("invalid",r);break;case"textarea":gr(r,l),Be("invalid",r)}on(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&ul(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&ul(r.textContent,c,e),o=["children",""+c]):y.hasOwnProperty(i)&&c!=null&&i==="onScroll"&&Be("scroll",r)}switch(n){case"input":Pe(r),qr(r,l,!0);break;case"textarea":Pe(r),Vn(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=cl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=no(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[qt]=t,e[jo]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(i=ln(n,r),n){case"dialog":Be("cancel",e),Be("close",e),o=r;break;case"iframe":case"object":case"embed":Be("load",e),o=r;break;case"video":case"audio":for(o=0;o<bo.length;o++)Be(bo[o],e);o=r;break;case"source":Be("error",e),o=r;break;case"img":case"image":case"link":Be("error",e),Be("load",e),o=r;break;case"details":Be("toggle",e),o=r;break;case"input":Je(e,r),o=hr(e,r),Be("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=F({},r,{value:void 0}),Be("invalid",e);break;case"textarea":gr(e,r),o=eo(e,r),Be("invalid",e);break;default:o=r}on(n,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var p=c[l];l==="style"?rn(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Gn(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Kn(e,p):typeof p=="number"&&Kn(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(y.hasOwnProperty(l)?p!=null&&l==="onScroll"&&Be("scroll",e):p!=null&&pe(e,l,p,i))}switch(n){case"input":Pe(e),qr(e,r,!1);break;case"textarea":Pe(e),Vn(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ne(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?yn(e,!!r.multiple,l,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=ar(Po.current),ar(en.current),gl(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(l=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return pt(t),null;case 13:if(Ue(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&Nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ba(),Rr(),t.flags|=98560,l=!1;else if(l=gl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[qt]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pt(t),l=!1}else Ut!==null&&(wi(Ut),Ut=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ve.current&1)!==0?rt===0&&(rt=3):Ci())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Br(),di(e,t),e===null&&So(t.stateNode.containerInfo),pt(t),null;case 10:return $s(t.type._context),pt(t),null;case 17:return xt(t.type)&&fl(),pt(t),null;case 19:if(Ue(Ve),l=t.memoizedState,l===null)return pt(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Ao(l,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bl(e),i!==null){for(t.flags|=128,Ao(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>Xr&&(t.flags|=128,r=!0,Ao(l,!1),t.lanes=4194304)}else{if(!r)if(e=bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ao(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Xe)return pt(t),null}else 2*oe()-l.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,Ao(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Si(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Et&1073741824)!==0&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function sf(e,t){switch(zs(t),t.tag){case 1:return xt(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),Ue(yt),Ue(dt),Xs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ws(t),null;case 13:if(Ue(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ve),null;case 4:return Br(),null;case 10:return $s(t.type._context),null;case 22:case 23:return Si(),null;case 24:return null;default:return null}}var Ml=!1,mt=!1,af=typeof WeakSet=="function"?WeakSet:Set,W=null;function Wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){Ke(e,t,r)}}var Fu=!1;function uf(e,t){if(Ss=Zo,e=ya(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,c=-1,p=-1,b=0,M=0,O=e,P=null;t:for(;;){for(var Y;O!==n||o!==0&&O.nodeType!==3||(c=i+o),O!==l||r!==0&&O.nodeType!==3||(p=i+r),O.nodeType===3&&(i+=O.nodeValue.length),(Y=O.firstChild)!==null;)P=O,O=Y;for(;;){if(O===e)break t;if(P===n&&++b===o&&(c=i),P===l&&++M===r&&(p=i),(Y=O.nextSibling)!==null)break;O=P,P=O.parentNode}O=Y}n=c===-1||p===-1?null:{start:c,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cs={focusedElem:e,selectionRange:n},Zo=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var X=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var J=X.memoizedProps,Ze=X.memoizedState,k=t.stateNode,h=k.getSnapshotBeforeUpdate(t.elementType===t.type?J:Wt(t.type,J),Ze);k.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(I){Ke(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return X=Fu,Fu=!1,X}function Do(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&fi(t,n,l)}o=o.next}while(o!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[jo],delete t[Ls],delete t[Wd],delete t[Hd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function _i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_i(e,t,n),e=e.sibling;e!==null;)_i(e,t,n),e=e.sibling}var ut=null,Ht=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Wu(e,t,n),n=n.sibling}function Wu(e,t,n){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 5:mt||Wr(n,t);case 6:var r=ut,o=Ht;ut=null,Rn(e,t,n),ut=r,Ht=o,ut!==null&&(Ht?(e=ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(Ht?(e=ut,n=n.stateNode,e.nodeType===8?Es(e.parentNode,n):e.nodeType===1&&Es(e,n),_o(e)):Es(ut,n.stateNode));break;case 4:r=ut,o=Ht,ut=n.stateNode.containerInfo,Ht=!0,Rn(e,t,n),ut=r,Ht=o;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&fi(n,t,i),o=o.next}while(o!==r)}Rn(e,t,n);break;case 1:if(!mt&&(Wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ke(n,t,c)}Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,Rn(e,t,n),mt=r):Rn(e,t,n);break;default:Rn(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new af),t.forEach(function(r){var o=yf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 5:ut=c.stateNode,Ht=!1;break e;case 3:ut=c.stateNode.containerInfo,Ht=!0;break e;case 4:ut=c.stateNode.containerInfo,Ht=!0;break e}c=c.return}if(ut===null)throw Error(u(160));Wu(l,i,o),ut=null,Ht=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(b){Ke(o,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),nn(e),r&4){try{Do(3,e,e.return),zl(3,e)}catch(J){Ke(e,e.return,J)}try{Do(5,e,e.return)}catch(J){Ke(e,e.return,J)}}break;case 1:Xt(t,e),nn(e),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(Xt(t,e),nn(e),r&512&&n!==null&&Wr(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(J){Ke(e,e.return,J)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,c=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&Zr(o,l),ln(c,i);var b=ln(c,l);for(i=0;i<p.length;i+=2){var M=p[i],O=p[i+1];M==="style"?rn(o,O):M==="dangerouslySetInnerHTML"?Gn(o,O):M==="children"?Kn(o,O):pe(o,M,O,b)}switch(c){case"input":Vt(o,l);break;case"textarea":to(o,l);break;case"select":var P=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var Y=l.value;Y!=null?yn(o,!!l.multiple,Y,!1):P!==!!l.multiple&&(l.defaultValue!=null?yn(o,!!l.multiple,l.defaultValue,!0):yn(o,!!l.multiple,l.multiple?[]:"",!1))}o[jo]=l}catch(J){Ke(e,e.return,J)}}break;case 6:if(Xt(t,e),nn(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(J){Ke(e,e.return,J)}}break;case 3:if(Xt(t,e),nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(J){Ke(e,e.return,J)}break;case 4:Xt(t,e),nn(e);break;case 13:Xt(t,e),nn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(yi=oe())),r&4&&Hu(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(b=mt)||M,Xt(t,e),mt=b):Xt(t,e),nn(e),r&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!M&&(e.mode&1)!==0)for(W=e,M=e.child;M!==null;){for(O=W=M;W!==null;){switch(P=W,Y=P.child,P.tag){case 0:case 11:case 14:case 15:Do(4,P,P.return);break;case 1:Wr(P,P.return);var X=P.stateNode;if(typeof X.componentWillUnmount=="function"){r=P,n=P.return;try{t=r,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(J){Ke(r,n,J)}}break;case 5:Wr(P,P.return);break;case 22:if(P.memoizedState!==null){Gu(O);continue}}Y!==null?(Y.return=P,W=Y):Gu(O)}M=M.sibling}e:for(M=null,O=e;;){if(O.tag===5){if(M===null){M=O;try{o=O.stateNode,b?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=O.stateNode,p=O.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,c.style.display=ro("display",i))}catch(J){Ke(e,e.return,J)}}}else if(O.tag===6){if(M===null)try{O.stateNode.nodeValue=b?"":O.memoizedProps}catch(J){Ke(e,e.return,J)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;M===O&&(M=null),O=O.return}M===O&&(M=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Xt(t,e),nn(e),r&4&&Hu(e);break;case 21:break;default:Xt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var l=Uu(e);_i(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,c=Uu(e);mi(e,c,i);break;default:throw Error(u(161))}}catch(p){Ke(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,n){W=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var o=W,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ml;if(!i){var c=o.alternate,p=c!==null&&c.memoizedState!==null||mt;c=Ml;var b=mt;if(Ml=i,(mt=p)&&!b)for(W=o;W!==null;)i=W,p=i.child,i.tag===22&&i.memoizedState!==null?Ku(o):p!==null?(p.return=i,W=p):Ku(o);for(;l!==null;)W=l,Qu(l),l=l.sibling;W=o,Ml=c,mt=b}Vu(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,W=l):Vu(e)}}function Vu(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:mt||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ga(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ga(t,i,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var M=b.memoizedState;if(M!==null){var O=M.dehydrated;O!==null&&_o(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}mt||t.flags&512&&pi(t)}catch(P){Ke(t,t.return,P)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Gu(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Ku(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(p){Ke(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(p){Ke(t,o,p)}}var l=t.return;try{pi(t)}catch(p){Ke(t,l,p)}break;case 5:var i=t.return;try{pi(t)}catch(p){Ke(t,i,p)}}}catch(p){Ke(t,t.return,p)}if(t===e){W=null;break}var c=t.sibling;if(c!==null){c.return=t.return,W=c;break}W=t.return}}var df=Math.ceil,Ol=be.ReactCurrentDispatcher,hi=be.ReactCurrentOwner,Rt=be.ReactCurrentBatchConfig,je=0,it=null,qe=null,ct=0,Et=0,Hr=zn(0),rt=0,Ro=null,cr=0,Il=0,gi=0,$o=null,kt=null,yi=0,Xr=1/0,mn=null,Al=!1,xi=null,$n=null,Dl=!1,Fn=null,Rl=0,Fo=0,vi=null,$l=-1,Fl=0;function gt(){return(je&6)!==0?oe():$l!==-1?$l:$l=oe()}function Yn(e){return(e.mode&1)===0?1:(je&2)!==0&&ct!==0?ct&-ct:Qd.transition!==null?(Fl===0&&(Fl=Go()),Fl):(e=Me,e!==0||(e=window.event,e=e===void 0?16:Zi(e.type)),e)}function Qt(e,t,n,r){if(50<Fo)throw Fo=0,vi=null,Error(u(185));nr(e,n,r),((je&2)===0||e!==it)&&(e===it&&((je&2)===0&&(Il|=n),rt===4&&Bn(e,ct)),wt(e,r),n===1&&je===0&&(t.mode&1)===0&&(Xr=oe()+500,ml&&In()))}function wt(e,t){var n=e.callbackNode;Yt(e,t);var r=He(e,e===it?ct:0);if(r===0)n!==null&&ie(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ie(n),t===1)e.tag===0?Xd(Zu.bind(null,e)):Da(Zu.bind(null,e)),Bd(function(){(je&6)===0&&In()}),n=null;else{switch(Wi(r)){case 1:n=Ye;break;case 4:n=we;break;case 16:n=he;break;case 536870912:n=ot;break;default:n=he}n=sc(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if($l=-1,Fl=0,(je&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var r=He(e,e===it?ct:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yl(e,r);else{t=r;var o=je;je|=2;var l=ec();(it!==e||ct!==t)&&(mn=null,Xr=oe()+500,fr(e,t));do try{mf();break}catch(c){qu(e,c)}while(!0);Rs(),Ol.current=l,je=o,qe!==null?t=0:(it=null,ct=0,t=rt)}if(t!==0){if(t===2&&(o=Sr(e),o!==0&&(r=o,t=ki(e,o))),t===1)throw n=Ro,fr(e,0),Bn(e,r),wt(e,oe()),n;if(t===6)Bn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!ff(o)&&(t=Yl(e,r),t===2&&(l=Sr(e),l!==0&&(r=l,t=ki(e,l))),t===1))throw n=Ro,fr(e,0),Bn(e,r),wt(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:pr(e,kt,mn);break;case 3:if(Bn(e,r),(r&130023424)===r&&(t=yi+500-oe(),10<t)){if(He(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ns(pr.bind(null,e,kt,mn),t);break}pr(e,kt,mn);break;case 4:if(Bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Qe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*df(r/1960))-r,10<r){e.timeoutHandle=Ns(pr.bind(null,e,kt,mn),r);break}pr(e,kt,mn);break;case 5:pr(e,kt,mn);break;default:throw Error(u(329))}}}return wt(e,oe()),e.callbackNode===n?Ju.bind(null,e):null}function ki(e,t){var n=$o;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Yl(e,t),e!==2&&(t=kt,kt=n,t!==null&&wi(t)),e}function wi(e){kt===null?kt=e:kt.push.apply(kt,e)}function ff(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Bt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bn(e,t){for(t&=~gi,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if((je&6)!==0)throw Error(u(327));Qr();var t=He(e,0);if((t&1)===0)return wt(e,oe()),null;var n=Yl(e,t);if(e.tag!==0&&n===2){var r=Sr(e);r!==0&&(t=r,n=ki(e,r))}if(n===1)throw n=Ro,fr(e,0),Bn(e,t),wt(e,oe()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,kt,mn),wt(e,oe()),null}function bi(e,t){var n=je;je|=1;try{return e(t)}finally{je=n,je===0&&(Xr=oe()+500,ml&&In())}}function dr(e){Fn!==null&&Fn.tag===0&&(je&6)===0&&Qr();var t=je;je|=1;var n=Rt.transition,r=Me;try{if(Rt.transition=null,Me=1,e)return e()}finally{Me=r,Rt.transition=n,je=t,(je&6)===0&&In()}}function Si(){Et=Hr.current,Ue(Hr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Br(),Ue(yt),Ue(dt),Xs();break;case 5:Ws(r);break;case 4:Br();break;case 13:Ue(Ve);break;case 19:Ue(Ve);break;case 10:$s(r.type._context);break;case 22:case 23:Si()}n=n.return}if(it=e,qe=e=Un(e.current,null),ct=Et=t,rt=0,Ro=null,gi=Il=cr=0,kt=$o=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}ir=null}return e}function qu(e,t){do{var n=qe;try{if(Rs(),Sl.current=El,Cl){for(var r=Ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Cl=!1}if(ur=0,st=nt=Ge=null,Mo=!1,zo=0,hi.current=null,n===null||n.return===null){rt=1,Ro=t,qe=null;break}e:{var l=e,i=n.return,c=n,p=t;if(t=ct,c.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var b=p,M=c,O=M.tag;if((M.mode&1)===0&&(O===0||O===11||O===15)){var P=M.alternate;P?(M.updateQueue=P.updateQueue,M.memoizedState=P.memoizedState,M.lanes=P.lanes):(M.updateQueue=null,M.memoizedState=null)}var Y=Su(i);if(Y!==null){Y.flags&=-257,Cu(Y,i,c,l,t),Y.mode&1&&bu(l,b,t),t=Y,p=b;var X=t.updateQueue;if(X===null){var J=new Set;J.add(p),t.updateQueue=J}else X.add(p);break e}else{if((t&1)===0){bu(l,b,t),Ci();break e}p=Error(u(426))}}else if(Xe&&c.mode&1){var Ze=Su(i);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),Cu(Ze,i,c,l,t),As(Ur(p,c));break e}}l=p=Ur(p,c),rt!==4&&(rt=2),$o===null?$o=[l]:$o.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var k=ku(l,p,t);Va(l,k);break e;case 1:c=p;var h=l.type,w=l.stateNode;if((l.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($n===null||!$n.has(w)))){l.flags|=65536,t&=-t,l.lanes|=t;var I=wu(l,c,t);Va(l,I);break e}}l=l.return}while(l!==null)}nc(n)}catch(q){t=q,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function ec(){var e=Ol.current;return Ol.current=El,e===null?El:e}function Ci(){(rt===0||rt===3||rt===2)&&(rt=4),it===null||(cr&268435455)===0&&(Il&268435455)===0||Bn(it,ct)}function Yl(e,t){var n=je;je|=2;var r=ec();(it!==e||ct!==t)&&(mn=null,fr(e,t));do try{pf();break}catch(o){qu(e,o)}while(!0);if(Rs(),je=n,Ol.current=r,qe!==null)throw Error(u(261));return it=null,ct=0,rt}function pf(){for(;qe!==null;)tc(qe)}function mf(){for(;qe!==null&&!ce();)tc(qe)}function tc(e){var t=lc(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?nc(e):qe=t,hi.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=lf(n,t,Et),n!==null){qe=n;return}}else{if(n=sf(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);rt===0&&(rt=5)}function pr(e,t,n){var r=Me,o=Rt.transition;try{Rt.transition=null,Me=1,_f(e,t,n,r)}finally{Rt.transition=o,Me=r}return null}function _f(e,t,n,r){do Qr();while(Fn!==null);if((je&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Vc(e,l),e===it&&(qe=it=null,ct=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Dl||(Dl=!0,sc(he,function(){return Qr(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Rt.transition,Rt.transition=null;var i=Me;Me=1;var c=je;je|=4,hi.current=null,uf(e,n),Xu(n,e),Od(Cs),Zo=!!Ss,Cs=Ss=null,e.current=n,cf(n),ae(),je=c,Me=i,Rt.transition=l}else e.current=n;if(Dl&&(Dl=!1,Fn=e,Rl=o),l=e.pendingLanes,l===0&&($n=null),Mt(n.stateNode),wt(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Al)throw Al=!1,e=xi,xi=null,e;return(Rl&1)!==0&&e.tag!==0&&Qr(),l=e.pendingLanes,(l&1)!==0?e===vi?Fo++:(Fo=0,vi=e):Fo=0,In(),null}function Qr(){if(Fn!==null){var e=Wi(Rl),t=Rt.transition,n=Me;try{if(Rt.transition=null,Me=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,Rl=0,(je&6)!==0)throw Error(u(331));var o=je;for(je|=4,W=e.current;W!==null;){var l=W,i=l.child;if((W.flags&16)!==0){var c=l.deletions;if(c!==null){for(var p=0;p<c.length;p++){var b=c[p];for(W=b;W!==null;){var M=W;switch(M.tag){case 0:case 11:case 15:Do(8,M,l)}var O=M.child;if(O!==null)O.return=M,W=O;else for(;W!==null;){M=W;var P=M.sibling,Y=M.return;if(Yu(M),M===b){W=null;break}if(P!==null){P.return=Y,W=P;break}W=Y}}}var X=l.alternate;if(X!==null){var J=X.child;if(J!==null){X.child=null;do{var Ze=J.sibling;J.sibling=null,J=Ze}while(J!==null)}}W=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,W=i;else e:for(;W!==null;){if(l=W,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Do(9,l,l.return)}var k=l.sibling;if(k!==null){k.return=l.return,W=k;break e}W=l.return}}var h=e.current;for(W=h;W!==null;){i=W;var w=i.child;if((i.subtreeFlags&2064)!==0&&w!==null)w.return=i,W=w;else e:for(i=h;W!==null;){if(c=W,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:zl(9,c)}}catch(q){Ke(c,c.return,q)}if(c===i){W=null;break e}var I=c.sibling;if(I!==null){I.return=c.return,W=I;break e}W=c.return}}if(je=o,In(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Le,e)}catch{}r=!0}return r}finally{Me=n,Rt.transition=t}}return!1}function rc(e,t,n){t=Ur(n,t),t=ku(e,t,1),e=Dn(e,t,1),t=gt(),e!==null&&(nr(e,1,t),wt(e,t))}function Ke(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Ur(n,e),e=wu(t,e,1),t=Dn(t,e,1),e=gt(),t!==null&&(nr(t,1,e),wt(t,e));break}}t=t.return}}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,it===e&&(ct&n)===n&&(rt===4||rt===3&&(ct&130023424)===ct&&500>oe()-yi?fr(e,0):gi|=n),wt(e,t)}function oc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ye,ye<<=1,(ye&130023424)===0&&(ye=4194304)));var n=gt();e=dn(e,t),e!==null&&(nr(e,t,n),wt(e,n))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oc(e,n)}function yf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),oc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return vt=!1,of(e,t,n);vt=(e.flags&131072)!==0}else vt=!1,Xe&&(t.flags&1048576)!==0&&Ra(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pl(e,t),e=t.pendingProps;var o=Ir(t,dt.current);Yr(t,n),o=Gs(null,t,r,e,o,n);var l=Ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(l=!0,pl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bs(t),o.updater=Ll,t.stateNode=o,o._reactInternals=t,ni(t,r,e,n),t=si(null,t,r,!0,l,n)):(t.tag=0,Xe&&l&&Ms(t),ht(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=vf(r),e=Wt(r,e),o){case 0:t=li(null,t,r,e,n);break e;case 1:t=Pu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Wt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Wt(r,o),li(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Wt(r,o),Pu(e,t,r,o,n);case 3:e:{if(Mu(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Qa(e,t),wl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Ur(Error(u(423)),t),t=zu(e,t,r,n,o);break e}else if(r!==o){o=Ur(Error(u(424)),t),t=zu(e,t,r,n,o);break e}else for(Nt=Mn(t.stateNode.containerInfo.firstChild),jt=t,Xe=!0,Ut=null,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===o){t=pn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Ka(t),e===null&&Is(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,js(r,o)?i=null:l!==null&&js(r,l)&&(t.flags|=32),Tu(e,t),ht(e,t,i,n),t.child;case 6:return e===null&&Is(t),null;case 13:return Ou(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Wt(r,o),ju(e,t,r,o,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Re(xl,r._currentValue),r._currentValue=i,l!==null)if(Bt(l.value,i)){if(l.children===o.children&&!yt.current){t=pn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){i=l.child;for(var p=c.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=fn(-1,n&-n),p.tag=2;var b=l.updateQueue;if(b!==null){b=b.shared;var M=b.pending;M===null?p.next=p:(p.next=M.next,M.next=p),b.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),Fs(l.return,n,t),c.lanes|=n;break}p=p.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(u(341));i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Fs(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ht(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yr(t,n),o=At(o),r=r(o),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,o=Wt(r,t.pendingProps),o=Wt(r.type,o),Nu(e,t,r,o,n);case 15:return Eu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Wt(r,o),Pl(e,t),t.tag=1,xt(r)?(e=!0,pl(t)):e=!1,Yr(t,n),xu(t,r,o),ni(t,r,o,n),si(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Lu(e,t,n)}throw Error(u(156,t.tag))};function sc(e,t){return H(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new xf(e,t,n,r)}function ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vf(e){if(typeof e=="function")return ji(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ue)return 11;if(e===re)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ji(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case me:return mr(n.children,o,l,t);case Ae:i=8,o|=8;break;case $e:return e=$t(12,n,t,o|2),e.elementType=$e,e.lanes=l,e;case _e:return e=$t(13,n,t,o),e.elementType=_e,e.lanes=l,e;case Fe:return e=$t(19,n,t,o),e.elementType=Fe,e.lanes=l,e;case Se:return Ul(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:i=10;break e;case et:i=9;break e;case ue:i=11;break e;case re:i=14;break e;case ze:i=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=$t(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function mr(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=$t(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Ni(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function Ei(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cr(0),this.expirationTimes=Cr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Li(e,t,n,r,o,l,i,c,p){return e=new kf(e,t,n,c,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=$t(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(l),e}function wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return On;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(xt(n))return Ia(e,n,t)}return t}function ac(e,t,n,r,o,l,i,c,p){return e=Li(n,r,!0,e,o,l,i,c,p),e.context=ic(null),n=e.current,r=gt(),o=Yn(n),l=fn(r,o),l.callback=t??null,Dn(n,l,o),e.current.lanes=o,nr(e,o,r),wt(e,r),e}function Wl(e,t,n,r){var o=t.current,l=gt(),i=Yn(o);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(o,t,i),e!==null&&(Qt(e,o,i,l),kl(e,o,i)),i}function Hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ti(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function bf(){return null}var cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pi(e){this._internalRoot=e}Xl.prototype.render=Pi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Wl(e,t,null,null)},Xl.prototype.unmount=Pi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){Wl(null,e,null,null)}),t[sn]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&Ki(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dc(){}function Sf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var b=Hl(i);l.call(b)}}var i=ac(t,r,e,0,null,!1,!1,"",dc);return e._reactRootContainer=i,e[sn]=i.current,So(e.nodeType===8?e.parentNode:e),dr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var b=Hl(p);c.call(b)}}var p=Li(e,0,!1,null,null,!1,!1,"",dc);return e._reactRootContainer=p,e[sn]=p.current,So(e.nodeType===8?e.parentNode:e),dr(function(){Wl(t,p,n,r)}),p}function Vl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var c=o;o=function(){var p=Hl(i);c.call(p)}}Wl(t,i,e,o)}else i=Sf(n,t,e,o,r);return Hl(i)}Hi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lt(t.pendingLanes);n!==0&&(ns(t,n|1),wt(t,oe()),(je&6)===0&&(Xr=oe()+500,In()))}break;case 13:dr(function(){var r=dn(e,1);if(r!==null){var o=gt();Qt(r,e,1,o)}}),Ti(e,1)}},rs=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=gt();Qt(t,e,134217728,n)}Ti(e,134217728)}},Xi=function(e){if(e.tag===13){var t=Yn(e),n=dn(e,t);if(n!==null){var r=gt();Qt(n,e,t,r)}Ti(e,t)}},Qi=function(){return Me},Vi=function(e,t){var n=Me;try{return Me=e,t()}finally{Me=n}},kn=function(e,t,n){switch(t){case"input":if(Vt(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=dl(r);if(!o)throw Error(u(90));Jr(r),Vt(r,o)}}}break;case"textarea":to(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},Tt=bi,so=dr;var Cf={usingClientEntryPoint:!1,Events:[No,zr,dl,lo,bn,bi]},Yo={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=x(e),e===null?null:e.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Le=Gl.inject(jf),ke=Gl}catch{}}return bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf,bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(u(200));return wf(e,t,null,n)},bt.createRoot=function(e,t){if(!Mi(e))throw Error(u(299));var n=!1,r="",o=cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Li(e,1,!1,null,null,n,!1,r,o),e[sn]=t.current,So(e.nodeType===8?e.parentNode:e),new Pi(t)},bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e===null?null:e.stateNode,e},bt.flushSync=function(e){return dr(e)},bt.hydrate=function(e,t,n){if(!Ql(t))throw Error(u(200));return Vl(null,e,t,!0,n)},bt.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=cc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ac(t,null,e,1,n??null,o,!1,l,i),e[sn]=t.current,So(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xl(t)},bt.render=function(e,t,n){if(!Ql(t))throw Error(u(200));return Vl(null,e,t,!1,n)},bt.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(u(40));return e._reactRootContainer?(dr(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1},bt.unstable_batchedUpdates=bi,bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Vl(e,t,n,!1,r)},bt.version="18.3.1-next-f1338f8080-20240426",bt}var xc;function Rc(){if(xc)return Ii.exports;xc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(d){console.error(d)}}return a(),Ii.exports=Of(),Ii.exports}var vc;function If(){if(vc)return Kl;vc=1;var a=Rc();return Kl.createRoot=a.createRoot,Kl.hydrateRoot=a.hydrateRoot,Kl}var Af=If();const Df=Dc(Af);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$c=(...a)=>a.filter((d,u,g)=>!!d&&d.trim()!==""&&g.indexOf(d)===u).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=j.forwardRef(({color:a="currentColor",size:d=24,strokeWidth:u=2,absoluteStrokeWidth:g,className:y="",children:m,iconNode:v,...N},S)=>j.createElement("svg",{ref:S,...$f,width:d,height:d,stroke:a,strokeWidth:g?Number(u)*24/Number(d):u,className:$c("lucide",y),...N},[...v.map(([R,Z])=>j.createElement(R,Z)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=(a,d)=>{const u=j.forwardRef(({className:g,...y},m)=>j.createElement(Ff,{ref:m,iconNode:d,className:$c(`lucide-${Rf(a)}`,g),...y}));return u.displayName=`${a}`,u};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=_r("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=_r("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=_r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=_r("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=_r("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=_r("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=_r("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Yc(a){var d,u,g="";if(typeof a=="string"||typeof a=="number")g+=a;else if(typeof a=="object")if(Array.isArray(a)){var y=a.length;for(d=0;d<y;d++)a[d]&&(u=Yc(a[d]))&&(g&&(g+=" "),g+=u)}else for(u in a)a[u]&&(g&&(g+=" "),g+=u);return g}function Wf(){for(var a,d,u=0,g="",y=arguments.length;u<y;u++)(a=arguments[u])&&(d=Yc(a))&&(g&&(g+=" "),g+=d);return g}const Ui="-",Hf=a=>{const d=Qf(a),{conflictingClassGroups:u,conflictingClassGroupModifiers:g}=a;return{getClassGroupId:v=>{const N=v.split(Ui);return N[0]===""&&N.length!==1&&N.shift(),Bc(N,d)||Xf(v)},getConflictingClassGroupIds:(v,N)=>{const S=u[v]||[];return N&&g[v]?[...S,...g[v]]:S}}},Bc=(a,d)=>{var v;if(a.length===0)return d.classGroupId;const u=a[0],g=d.nextPart.get(u),y=g?Bc(a.slice(1),g):void 0;if(y)return y;if(d.validators.length===0)return;const m=a.join(Ui);return(v=d.validators.find(({validator:N})=>N(m)))==null?void 0:v.classGroupId},bc=/^\[(.+)\]$/,Xf=a=>{if(bc.test(a)){const d=bc.exec(a)[1],u=d==null?void 0:d.substring(0,d.indexOf(":"));if(u)return"arbitrary.."+u}},Qf=a=>{const{theme:d,prefix:u}=a,g={nextPart:new Map,validators:[]};return Gf(Object.entries(a.classGroups),u).forEach(([m,v])=>{Yi(v,g,m,d)}),g},Yi=(a,d,u,g)=>{a.forEach(y=>{if(typeof y=="string"){const m=y===""?d:Sc(d,y);m.classGroupId=u;return}if(typeof y=="function"){if(Vf(y)){Yi(y(g),d,u,g);return}d.validators.push({validator:y,classGroupId:u});return}Object.entries(y).forEach(([m,v])=>{Yi(v,Sc(d,m),u,g)})})},Sc=(a,d)=>{let u=a;return d.split(Ui).forEach(g=>{u.nextPart.has(g)||u.nextPart.set(g,{nextPart:new Map,validators:[]}),u=u.nextPart.get(g)}),u},Vf=a=>a.isThemeGetter,Gf=(a,d)=>d?a.map(([u,g])=>{const y=g.map(m=>typeof m=="string"?d+m:typeof m=="object"?Object.fromEntries(Object.entries(m).map(([v,N])=>[d+v,N])):m);return[u,y]}):a,Kf=a=>{if(a<1)return{get:()=>{},set:()=>{}};let d=0,u=new Map,g=new Map;const y=(m,v)=>{u.set(m,v),d++,d>a&&(d=0,g=u,u=new Map)};return{get(m){let v=u.get(m);if(v!==void 0)return v;if((v=g.get(m))!==void 0)return y(m,v),v},set(m,v){u.has(m)?u.set(m,v):y(m,v)}}},Uc="!",Jf=a=>{const{separator:d,experimentalParseClassName:u}=a,g=d.length===1,y=d[0],m=d.length,v=N=>{const S=[];let R=0,Z=0,L;for(let Q=0;Q<N.length;Q++){let D=N[Q];if(R===0){if(D===y&&(g||N.slice(Q,Q+m)===d)){S.push(N.slice(Z,Q)),Z=Q+m;continue}if(D==="/"){L=Q;continue}}D==="["?R++:D==="]"&&R--}const $=S.length===0?N:N.substring(Z),z=$.startsWith(Uc),B=z?$.substring(1):$,U=L&&L>Z?L-Z:void 0;return{modifiers:S,hasImportantModifier:z,baseClassName:B,maybePostfixModifierPosition:U}};return u?N=>u({className:N,parseClassName:v}):v},Zf=a=>{if(a.length<=1)return a;const d=[];let u=[];return a.forEach(g=>{g[0]==="["?(d.push(...u.sort(),g),u=[]):u.push(g)}),d.push(...u.sort()),d},qf=a=>({cache:Kf(a.cacheSize),parseClassName:Jf(a),...Hf(a)}),ep=/\s+/,tp=(a,d)=>{const{parseClassName:u,getClassGroupId:g,getConflictingClassGroupIds:y}=d,m=[],v=a.trim().split(ep);let N="";for(let S=v.length-1;S>=0;S-=1){const R=v[S],{modifiers:Z,hasImportantModifier:L,baseClassName:$,maybePostfixModifierPosition:z}=u(R);let B=!!z,U=g(B?$.substring(0,z):$);if(!U){if(!B){N=R+(N.length>0?" "+N:N);continue}if(U=g($),!U){N=R+(N.length>0?" "+N:N);continue}B=!1}const Q=Zf(Z).join(":"),D=L?Q+Uc:Q,fe=D+U;if(m.includes(fe))continue;m.push(fe);const pe=y(U,B);for(let be=0;be<pe.length;++be){const Ie=pe[be];m.push(D+Ie)}N=R+(N.length>0?" "+N:N)}return N};function np(){let a=0,d,u,g="";for(;a<arguments.length;)(d=arguments[a++])&&(u=Wc(d))&&(g&&(g+=" "),g+=u);return g}const Wc=a=>{if(typeof a=="string")return a;let d,u="";for(let g=0;g<a.length;g++)a[g]&&(d=Wc(a[g]))&&(u&&(u+=" "),u+=d);return u};function rp(a,...d){let u,g,y,m=v;function v(S){const R=d.reduce((Z,L)=>L(Z),a());return u=qf(R),g=u.cache.get,y=u.cache.set,m=N,N(S)}function N(S){const R=g(S);if(R)return R;const Z=tp(S,u);return y(S,Z),Z}return function(){return m(np.apply(null,arguments))}}const We=a=>{const d=u=>u[a]||[];return d.isThemeGetter=!0,d},Hc=/^\[(?:([a-z-]+):)?(.+)\]$/i,op=/^\d+\/\d+$/,lp=new Set(["px","full","screen"]),sp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ip=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ap=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,up=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,cp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_n=a=>Gr(a)||lp.has(a)||op.test(a),Hn=a=>Kr(a,"length",yp),Gr=a=>!!a&&!Number.isNaN(Number(a)),Ri=a=>Kr(a,"number",Gr),Uo=a=>!!a&&Number.isInteger(Number(a)),dp=a=>a.endsWith("%")&&Gr(a.slice(0,-1)),de=a=>Hc.test(a),Xn=a=>sp.test(a),fp=new Set(["length","size","percentage"]),pp=a=>Kr(a,fp,Xc),mp=a=>Kr(a,"position",Xc),_p=new Set(["image","url"]),hp=a=>Kr(a,_p,vp),gp=a=>Kr(a,"",xp),Wo=()=>!0,Kr=(a,d,u)=>{const g=Hc.exec(a);return g?g[1]?typeof d=="string"?g[1]===d:d.has(g[1]):u(g[2]):!1},yp=a=>ip.test(a)&&!ap.test(a),Xc=()=>!1,xp=a=>up.test(a),vp=a=>cp.test(a),kp=()=>{const a=We("colors"),d=We("spacing"),u=We("blur"),g=We("brightness"),y=We("borderColor"),m=We("borderRadius"),v=We("borderSpacing"),N=We("borderWidth"),S=We("contrast"),R=We("grayscale"),Z=We("hueRotate"),L=We("invert"),$=We("gap"),z=We("gradientColorStops"),B=We("gradientColorStopPositions"),U=We("inset"),Q=We("margin"),D=We("opacity"),fe=We("padding"),pe=We("saturate"),be=We("scale"),Ie=We("sepia"),se=We("skew"),me=We("space"),Ae=We("translate"),$e=()=>["auto","contain","none"],De=()=>["auto","hidden","clip","visible","scroll"],et=()=>["auto",de,d],ue=()=>[de,d],_e=()=>["",_n,Hn],Fe=()=>["auto",Gr,de],re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ze=()=>["solid","dashed","dotted","double","none"],Se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],A=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",de],F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>[Gr,de];return{cacheSize:500,separator:":",theme:{colors:[Wo],spacing:[_n,Hn],blur:["none","",Xn,de],brightness:_(),borderColor:[a],borderRadius:["none","","full",Xn,de],borderSpacing:ue(),borderWidth:_e(),contrast:_(),grayscale:V(),hueRotate:_(),invert:V(),gap:ue(),gradientColorStops:[a],gradientColorStopPositions:[dp,Hn],inset:et(),margin:et(),opacity:_(),padding:ue(),saturate:_(),scale:_(),sepia:V(),skew:_(),space:ue(),translate:ue()},classGroups:{aspect:[{aspect:["auto","square","video",de]}],container:["container"],columns:[{columns:[Xn]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...re(),de]}],overflow:[{overflow:De()}],"overflow-x":[{"overflow-x":De()}],"overflow-y":[{"overflow-y":De()}],overscroll:[{overscroll:$e()}],"overscroll-x":[{"overscroll-x":$e()}],"overscroll-y":[{"overscroll-y":$e()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[U]}],"inset-x":[{"inset-x":[U]}],"inset-y":[{"inset-y":[U]}],start:[{start:[U]}],end:[{end:[U]}],top:[{top:[U]}],right:[{right:[U]}],bottom:[{bottom:[U]}],left:[{left:[U]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Uo,de]}],basis:[{basis:et()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",de]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",Uo,de]}],"grid-cols":[{"grid-cols":[Wo]}],"col-start-end":[{col:["auto",{span:["full",Uo,de]},de]}],"col-start":[{"col-start":Fe()}],"col-end":[{"col-end":Fe()}],"grid-rows":[{"grid-rows":[Wo]}],"row-start-end":[{row:["auto",{span:[Uo,de]},de]}],"row-start":[{"row-start":Fe()}],"row-end":[{"row-end":Fe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",de]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",de]}],gap:[{gap:[$]}],"gap-x":[{"gap-x":[$]}],"gap-y":[{"gap-y":[$]}],"justify-content":[{justify:["normal",...A()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...A(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...A(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[fe]}],px:[{px:[fe]}],py:[{py:[fe]}],ps:[{ps:[fe]}],pe:[{pe:[fe]}],pt:[{pt:[fe]}],pr:[{pr:[fe]}],pb:[{pb:[fe]}],pl:[{pl:[fe]}],m:[{m:[Q]}],mx:[{mx:[Q]}],my:[{my:[Q]}],ms:[{ms:[Q]}],me:[{me:[Q]}],mt:[{mt:[Q]}],mr:[{mr:[Q]}],mb:[{mb:[Q]}],ml:[{ml:[Q]}],"space-x":[{"space-x":[me]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[me]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",de,d]}],"min-w":[{"min-w":[de,d,"min","max","fit"]}],"max-w":[{"max-w":[de,d,"none","full","min","max","fit","prose",{screen:[Xn]},Xn]}],h:[{h:[de,d,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[de,d,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[de,d,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[de,d,"auto","min","max","fit"]}],"font-size":[{text:["base",Xn,Hn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ri]}],"font-family":[{font:[Wo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",de]}],"line-clamp":[{"line-clamp":["none",Gr,Ri]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_n,de]}],"list-image":[{"list-image":["none",de]}],"list-style-type":[{list:["none","disc","decimal",de]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[D]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ze(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_n,Hn]}],"underline-offset":[{"underline-offset":["auto",_n,de]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ue()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",de]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",de]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[D]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...re(),mp]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",pp]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},hp]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[B]}],"gradient-via-pos":[{via:[B]}],"gradient-to-pos":[{to:[B]}],"gradient-from":[{from:[z]}],"gradient-via":[{via:[z]}],"gradient-to":[{to:[z]}],rounded:[{rounded:[m]}],"rounded-s":[{"rounded-s":[m]}],"rounded-e":[{"rounded-e":[m]}],"rounded-t":[{"rounded-t":[m]}],"rounded-r":[{"rounded-r":[m]}],"rounded-b":[{"rounded-b":[m]}],"rounded-l":[{"rounded-l":[m]}],"rounded-ss":[{"rounded-ss":[m]}],"rounded-se":[{"rounded-se":[m]}],"rounded-ee":[{"rounded-ee":[m]}],"rounded-es":[{"rounded-es":[m]}],"rounded-tl":[{"rounded-tl":[m]}],"rounded-tr":[{"rounded-tr":[m]}],"rounded-br":[{"rounded-br":[m]}],"rounded-bl":[{"rounded-bl":[m]}],"border-w":[{border:[N]}],"border-w-x":[{"border-x":[N]}],"border-w-y":[{"border-y":[N]}],"border-w-s":[{"border-s":[N]}],"border-w-e":[{"border-e":[N]}],"border-w-t":[{"border-t":[N]}],"border-w-r":[{"border-r":[N]}],"border-w-b":[{"border-b":[N]}],"border-w-l":[{"border-l":[N]}],"border-opacity":[{"border-opacity":[D]}],"border-style":[{border:[...ze(),"hidden"]}],"divide-x":[{"divide-x":[N]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[N]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[D]}],"divide-style":[{divide:ze()}],"border-color":[{border:[y]}],"border-color-x":[{"border-x":[y]}],"border-color-y":[{"border-y":[y]}],"border-color-s":[{"border-s":[y]}],"border-color-e":[{"border-e":[y]}],"border-color-t":[{"border-t":[y]}],"border-color-r":[{"border-r":[y]}],"border-color-b":[{"border-b":[y]}],"border-color-l":[{"border-l":[y]}],"divide-color":[{divide:[y]}],"outline-style":[{outline:["",...ze()]}],"outline-offset":[{"outline-offset":[_n,de]}],"outline-w":[{outline:[_n,Hn]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[D]}],"ring-offset-w":[{"ring-offset":[_n,Hn]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",Xn,gp]}],"shadow-color":[{shadow:[Wo]}],opacity:[{opacity:[D]}],"mix-blend":[{"mix-blend":[...Se(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Se()}],filter:[{filter:["","none"]}],blur:[{blur:[u]}],brightness:[{brightness:[g]}],contrast:[{contrast:[S]}],"drop-shadow":[{"drop-shadow":["","none",Xn,de]}],grayscale:[{grayscale:[R]}],"hue-rotate":[{"hue-rotate":[Z]}],invert:[{invert:[L]}],saturate:[{saturate:[pe]}],sepia:[{sepia:[Ie]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[u]}],"backdrop-brightness":[{"backdrop-brightness":[g]}],"backdrop-contrast":[{"backdrop-contrast":[S]}],"backdrop-grayscale":[{"backdrop-grayscale":[R]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Z]}],"backdrop-invert":[{"backdrop-invert":[L]}],"backdrop-opacity":[{"backdrop-opacity":[D]}],"backdrop-saturate":[{"backdrop-saturate":[pe]}],"backdrop-sepia":[{"backdrop-sepia":[Ie]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[v]}],"border-spacing-x":[{"border-spacing-x":[v]}],"border-spacing-y":[{"border-spacing-y":[v]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",de]}],duration:[{duration:_()}],ease:[{ease:["linear","in","out","in-out",de]}],delay:[{delay:_()}],animate:[{animate:["none","spin","ping","pulse","bounce",de]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[be]}],"scale-x":[{"scale-x":[be]}],"scale-y":[{"scale-y":[be]}],rotate:[{rotate:[Uo,de]}],"translate-x":[{"translate-x":[Ae]}],"translate-y":[{"translate-y":[Ae]}],"skew-x":[{"skew-x":[se]}],"skew-y":[{"skew-y":[se]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",de]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",de]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ue()}],"scroll-mx":[{"scroll-mx":ue()}],"scroll-my":[{"scroll-my":ue()}],"scroll-ms":[{"scroll-ms":ue()}],"scroll-me":[{"scroll-me":ue()}],"scroll-mt":[{"scroll-mt":ue()}],"scroll-mr":[{"scroll-mr":ue()}],"scroll-mb":[{"scroll-mb":ue()}],"scroll-ml":[{"scroll-ml":ue()}],"scroll-p":[{"scroll-p":ue()}],"scroll-px":[{"scroll-px":ue()}],"scroll-py":[{"scroll-py":ue()}],"scroll-ps":[{"scroll-ps":ue()}],"scroll-pe":[{"scroll-pe":ue()}],"scroll-pt":[{"scroll-pt":ue()}],"scroll-pr":[{"scroll-pr":ue()}],"scroll-pb":[{"scroll-pb":ue()}],"scroll-pl":[{"scroll-pl":ue()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",de]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[_n,Hn,Ri]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},wp=rp(kp);function _t(...a){return wp(Wf(a))}const Qc=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("rounded-xl border bg-card text-card-foreground shadow",a),...d}));Qc.displayName="Card";const bp=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("flex flex-col space-y-1.5 p-6",a),...d}));bp.displayName="CardHeader";const Sp=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("font-semibold leading-none tracking-tight",a),...d}));Sp.displayName="CardTitle";const Cp=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("text-sm text-muted-foreground",a),...d}));Cp.displayName="CardDescription";const jp=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("p-6 pt-0",a),...d}));jp.displayName="CardContent";const Np=j.forwardRef(({className:a,...d},u)=>s.jsx("div",{ref:u,className:_t("flex items-center p-6 pt-0",a),...d}));Np.displayName="CardFooter";const Cc="claude-subagent-editor-projects";function Ep({onSelectProject:a}){const[d,u]=j.useState([]),[g,y]=j.useState(""),[m,v]=j.useState(!1);j.useEffect(()=>{N()},[]);const N=()=>{try{const z=localStorage.getItem(Cc);z&&u(JSON.parse(z))}catch(z){console.error("Failed to load projects:",z)}},S=z=>{try{localStorage.setItem(Cc,JSON.stringify(z)),u(z)}catch(B){console.error("Failed to save projects:",B)}},R=()=>{if(!g.trim())return;const z=g.trim().split("/"),B=z[z.length-1]||"Unknown",U={path:g.trim(),name:B,lastOpened:new Date().toISOString()},Q=[...d,U];S(Q),y(""),v(!1)},Z=z=>{const B=d.filter(U=>U.path!==z);S(B)},L=z=>{const B=d.map(U=>U.path===z.path?{...U,lastOpened:new Date().toISOString()}:U);S(B),a(z.path)},$=[...d].sort((z,B)=>{const U=z.lastOpened?new Date(z.lastOpened).getTime():0;return(B.lastOpened?new Date(B.lastOpened).getTime():0)-U});return s.jsxs("div",{className:"h-dvh flex flex-col bg-background",children:[s.jsxs("header",{className:"border-b border-border bg-background-elevated px-6 py-4",children:[s.jsx("h1",{className:"text-xl font-semibold",children:"Claude Subagent Editor"}),s.jsx("p",{className:"text-sm text-foreground-secondary mt-1",children:"Select a project to get started"})]}),s.jsx("main",{className:"flex-1 overflow-y-auto p-6",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h2",{className:"text-lg font-semibold",children:"Your Projects"}),s.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-2 px-4 py-2 bg-tool text-white rounded font-medium hover:bg-tool/90 transition-colors",children:[s.jsx(wc,{className:"w-4 h-4"}),"Add Project"]})]}),m&&s.jsxs("div",{className:"mb-6 p-4 border border-border rounded-lg bg-background-elevated",children:[s.jsx("h3",{className:"text-sm font-medium mb-3",children:"Add New Project"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{type:"text",value:g,onChange:z=>y(z.target.value),onKeyDown:z=>z.key==="Enter"&&R(),placeholder:"/path/to/project",className:"flex-1 px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-tool/50","aria-label":"Project path",autoFocus:!0}),s.jsx("button",{onClick:R,disabled:!g.trim(),className:"px-4 py-2 bg-tool text-white rounded text-sm font-medium hover:bg-tool/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Add"}),s.jsx("button",{onClick:()=>{v(!1),y("")},className:"px-4 py-2 bg-background border border-border rounded text-sm font-medium hover:bg-background-hover transition-colors",children:"Cancel"})]})]}),$.length===0?s.jsxs("div",{className:"text-center py-16",children:[s.jsx(kc,{className:"w-16 h-16 text-foreground-muted mx-auto mb-4"}),s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No projects yet"}),s.jsx("p",{className:"text-foreground-secondary mb-4",children:"Add your first project to get started"}),!m&&s.jsxs("button",{onClick:()=>v(!0),className:"inline-flex items-center gap-2 px-4 py-2 bg-tool text-white rounded font-medium hover:bg-tool/90 transition-colors",children:[s.jsx(wc,{className:"w-4 h-4"}),"Add Project"]})]}):s.jsx("div",{className:"space-y-2",children:$.map(z=>s.jsxs(Qc,{className:"group flex items-center justify-between p-4 hover:bg-background-hover transition-colors cursor-pointer",role:"button",tabIndex:0,onClick:()=>L(z),onKeyDown:B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),L(z))},"aria-label":`Open project ${z.name}`,children:[s.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[s.jsx(kc,{className:"w-5 h-5 text-tool flex-shrink-0"}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("h3",{className:"font-medium text-base",children:z.name}),s.jsx("p",{className:"text-sm text-foreground-secondary truncate",children:z.path}),z.lastOpened&&s.jsxs("p",{className:"text-xs text-foreground-muted mt-1",children:["Last opened: ",new Date(z.lastOpened).toLocaleDateString()]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),Z(z.path)},className:"p-2 text-foreground-muted hover:text-foreground hover:bg-background rounded opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all",title:"Remove project","aria-label":"Remove project",children:s.jsx(Jl,{className:"w-4 h-4"})}),s.jsx(Fc,{className:"w-5 h-5 text-foreground-muted"})]})]},z.path))})]})})]})}const Lp={opus:"text-opus",sonnet:"text-sonnet",haiku:"text-haiku"},Zl=["Read","Write","Edit","Bash","Glob","Grep","Task","WebFetch","WebSearch","NotebookEdit","TodoWrite","AskUserQuestion","Skill","LSP"];function Vr({items:a,type:d,colorClass:u,bgClass:g,onRemove:y,dropActive:m,onDragOver:v,onDragLeave:N,onDrop:S,label:R,dragStartHandler:Z}){const L=()=>u.includes("red")?m?"border-red-500 bg-red-500/10":"border-border bg-background-elevated":m?`border-${d} bg-${d}/10`:"border-border bg-background-elevated",$=()=>u.includes("red")?"border-red-700":`border-${d}/20`;return s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-xs font-medium text-foreground-secondary mb-2",children:R}),s.jsxs("div",{onDrop:S,onDragOver:v,onDragLeave:N,className:_t("min-h-[200px] max-h-[200px] overflow-y-auto p-3 rounded border-2 border-dashed transition-colors",L(),"flex flex-wrap gap-2 content-start"),children:[a.length===0&&s.jsx("span",{className:"text-xs text-foreground-muted italic",children:R==="Available"?"No more items available":"Drag items here"}),a.map(z=>s.jsxs("span",{draggable:!0,onDragStart:B=>Z(B,z),className:_t("px-2 py-1 text-xs rounded border flex items-center gap-1.5 h-fit cursor-grab active:cursor-grabbing",g,u,$()),children:[z,R==="Assigned"&&s.jsx("button",{onClick:()=>y(z),className:"hover:text-foreground transition-colors",children:s.jsx(Jl,{className:"w-3 h-3"})})]},z))]})]})}function Tp({agent:a,onClose:d,onSave:u,globalResources:g,mcpTools:y,projectSkills:m=[]}){const[v,N]=j.useState({...a,disallowedTools:a.disallowedTools||[]}),[S,R]=j.useState("tools"),[Z,L]=j.useState(!1),[$,z]=j.useState(!1),[B,U]=j.useState({}),[Q,D]=j.useState(""),fe=[...g.skills,...m],pe=v.tools==="*",be=pe?[]:v.tools.filter(f=>!f.startsWith("mcp__")),Ie=pe?[]:v.tools.filter(f=>f.startsWith("mcp__")),se=fe.map(f=>f.name).filter(f=>!v.skills.includes(f)),me=Zl.filter(f=>!be.includes(f)&&!v.disallowedTools.includes(f)),Ae=async()=>{try{const f={name:v.name,description:v.description,model:v.model,tools:v.tools,disallowedTools:v.disallowedTools,skills:v.skills,body:v.body},E=await fetch(`/api/agent/${a.filename}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(!E.ok)throw new Error(`Failed to save: ${E.statusText}`);u(v),d()}catch(f){console.error("Failed to save agent:",f),alert("Failed to save agent. The backend endpoint may not be implemented yet.")}},$e=f=>{if(pe)return;const E=v.tools;if(!E.includes(f)){const G=v.disallowedTools.filter(ee=>ee!==f);N({...v,tools:[...E,f],disallowedTools:G})}},De=f=>{pe||N({...v,tools:v.tools.filter(E=>E!==f)})},et=f=>{if(pe)return;const E=v.tools;if(!E.includes(f)){const G=v.disallowedTools.filter(ee=>ee!==f);N({...v,tools:[...E,f],disallowedTools:G})}},ue=f=>{pe||N({...v,tools:v.tools.filter(E=>E!==f)})},_e=f=>{if(v.disallowedTools.includes(f))return;const G=(v.tools==="*"?[]:v.tools).filter(ee=>ee!==f);N({...v,tools:v.tools==="*"?"*":G,disallowedTools:[...v.disallowedTools,f]})},Fe=f=>{N({...v,disallowedTools:v.disallowedTools.filter(E=>E!==f)})},re=f=>{U(E=>({...E,[f]:!E[f]}))},ze=f=>{v.skills.includes(f)||N({...v,skills:[...v.skills,f]})},Se=f=>{N({...v,skills:v.skills.filter(E=>E!==f)})},A=(f,E,G,ee)=>{f.dataTransfer.effectAllowed="move",f.dataTransfer.setData("text/plain",JSON.stringify({type:E,name:G,source:ee}))},V=f=>{f.preventDefault(),L(!1);try{const E=JSON.parse(f.dataTransfer.getData("text/plain"));E.source==="assigned"&&(S==="skills"&&E.type==="skill"?Se(E.name):S==="tools"&&E.type==="tool"?De(E.name):S==="mcp"&&E.type==="mcp"?ue(E.name):S==="disallowed"&&E.type==="disallowed"&&Fe(E.name))}catch(E){console.error("Invalid drag data:",E)}},F=f=>{f.preventDefault(),z(!1);try{const E=JSON.parse(f.dataTransfer.getData("text/plain"));E.source==="available"&&(S==="skills"&&E.type==="skill"?ze(E.name):S==="tools"&&E.type==="tool"?$e(E.name):S==="mcp"&&E.type==="mcp"?et(E.name):S==="disallowed"&&E.type==="disallowed"&&_e(E.name))}catch(E){console.error("Invalid drag data:",E)}},_=f=>{f.preventDefault()};return s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-background border border-border rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border",children:[s.jsxs("h2",{className:"text-lg font-semibold",children:["Edit: ",v.name||"Untitled"]}),s.jsx("button",{onClick:d,className:"text-foreground-secondary hover:text-foreground transition-colors",children:s.jsx(Jl,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"Name"}),s.jsx("input",{type:"text",value:v.name,onChange:f=>N({...v,name:f.target.value}),className:"w-full px-3 py-2 bg-background-elevated border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-tool/50"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"Model"}),s.jsxs("select",{value:v.model,onChange:f=>N({...v,model:f.target.value}),className:"w-full px-3 py-2 bg-background-elevated border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-tool/50",children:[s.jsx("option",{value:"opus",children:"Opus"}),s.jsx("option",{value:"sonnet",children:"Sonnet"}),s.jsx("option",{value:"haiku",children:"Haiku"})]})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"Description"}),s.jsx("textarea",{value:v.description,onChange:f=>N({...v,description:f.target.value}),rows:2,className:"w-full px-3 py-2 bg-background-elevated border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-tool/50 resize-none"})]}),s.jsxs("div",{className:"border-t border-border pt-4",children:[s.jsxs("div",{className:"flex gap-4 mb-4",children:[s.jsx("button",{onClick:()=>R("tools"),className:_t("px-4 py-2 text-sm font-medium transition-colors border-b-2",S==="tools"?"border-tool text-tool":"border-transparent text-foreground-secondary hover:text-foreground"),children:"Tools"}),s.jsx("button",{onClick:()=>R("skills"),className:_t("px-4 py-2 text-sm font-medium transition-colors border-b-2",S==="skills"?"border-skill text-skill":"border-transparent text-foreground-secondary hover:text-foreground"),children:"Skills"}),s.jsx("button",{onClick:()=>R("mcp"),className:_t("px-4 py-2 text-sm font-medium transition-colors border-b-2",S==="mcp"?"border-mcp text-mcp":"border-transparent text-foreground-secondary hover:text-foreground"),children:"MCP"}),s.jsx("button",{onClick:()=>R("disallowed"),className:_t("px-4 py-2 text-sm font-medium transition-colors border-b-2",S==="disallowed"?"border-red-500 text-red-500":"border-transparent text-foreground-secondary hover:text-foreground"),children:"Disallowed"})]}),S==="tools"&&s.jsx("div",{className:"flex items-center gap-2 mb-4 p-3 bg-background-elevated rounded border border-border",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[s.jsx("input",{type:"checkbox",checked:pe,onChange:f=>{f.target.checked?N({...v,tools:"*"}):N({...v,tools:[]})},className:"w-4 h-4"}),s.jsx("span",{className:"text-sm font-medium",children:"ALL TOOLS"}),s.jsx("span",{className:"text-xs text-foreground-muted",children:"(sets tools: *)"})]})}),s.jsxs("div",{className:"flex gap-4",children:[S==="tools"&&s.jsx(s.Fragment,{children:pe?s.jsx("div",{className:"flex-1 flex items-center justify-center p-8 rounded border-2 border-dashed border-border bg-background-elevated",children:s.jsxs("p",{className:"text-sm text-foreground-secondary text-center",children:["Agent has access to all tools.",s.jsx("br",{}),'Uncheck "ALL TOOLS" to customize tool selection.']})}):s.jsxs(s.Fragment,{children:[s.jsx(Vr,{items:me,type:"tool",colorClass:"text-tool",bgClass:"bg-tool-bg",onAdd:$e,onRemove:De,dropActive:Z,onDragOver:f=>{_(f),L(!0)},onDragLeave:()=>L(!1),onDrop:V,label:"Available",dragStartHandler:(f,E)=>A(f,"tool",E,"available")}),s.jsx(Vr,{items:be,type:"tool",colorClass:"text-tool",bgClass:"bg-tool-bg",onAdd:$e,onRemove:De,dropActive:$,onDragOver:f=>{_(f),z(!0)},onDragLeave:()=>z(!1),onDrop:F,label:"Assigned",dragStartHandler:(f,E)=>A(f,"tool",E,"assigned")})]})}),S==="skills"&&s.jsxs(s.Fragment,{children:[s.jsx(Vr,{items:se,type:"skill",colorClass:"text-skill",bgClass:"bg-skill-bg",onAdd:ze,onRemove:Se,dropActive:Z,onDragOver:f=>{_(f),L(!0)},onDragLeave:()=>L(!1),onDrop:V,label:"Available",dragStartHandler:(f,E)=>A(f,"skill",E,"available")}),s.jsxs("div",{className:"flex-1",children:[s.jsx(Vr,{items:v.skills,type:"skill",colorClass:"text-skill",bgClass:"bg-skill-bg",onAdd:ze,onRemove:Se,dropActive:$,onDragOver:f=>{_(f),z(!0)},onDragLeave:()=>z(!1),onDrop:F,label:"Assigned",dragStartHandler:(f,E)=>A(f,"skill",E,"assigned")}),v.skills.length>0&&v.tools!=="*"&&(Array.isArray(v.tools)?!v.tools.includes("Skill"):!0)&&s.jsxs("div",{className:"text-amber-500 text-sm mt-2 flex items-center gap-1.5",children:[s.jsx("span",{children:"⚠"}),s.jsx("span",{children:'The "Skill" base tool is required to invoke skills'})]})]})]}),S==="mcp"&&s.jsx(s.Fragment,{children:pe?s.jsx("div",{className:"flex-1 flex items-center justify-center p-8 rounded border-2 border-dashed border-border bg-background-elevated",children:s.jsxs("div",{className:"bg-blue-900/30 border border-blue-700 rounded p-4 text-blue-300 text-sm max-w-md",children:[s.jsx("strong",{children:"ALL TOOLS"})," selected — SubAgent will have access to all MCP servers in global and project scope."]})}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-xs font-medium text-foreground-secondary mb-2",children:"Available"}),s.jsxs("div",{onDrop:V,onDragOver:f=>{_(f),L(!0)},onDragLeave:()=>L(!1),className:_t("min-h-[200px] max-h-[200px] overflow-y-auto p-3 rounded border-2 border-dashed transition-colors",Z?"border-mcp bg-mcp/10":"border-border bg-background-elevated"),children:[y.length===0&&s.jsx("span",{className:"text-xs text-foreground-muted italic",children:"Loading MCP tools..."}),y.map(f=>{const E=f.tools.filter(G=>!Ie.includes(G.full_name)&&!v.disallowedTools.includes(G.full_name));return E.length===0&&f.connected?null:s.jsxs("div",{className:"mb-3 last:mb-0",children:[s.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[s.jsxs("button",{onClick:()=>re(f.name),className:"flex items-center gap-1.5 text-xs font-medium text-foreground-secondary hover:text-foreground transition-colors",children:[B[f.name]?s.jsx(Bf,{className:"w-3 h-3"}):s.jsx(Fc,{className:"w-3 h-3"}),s.jsx("span",{children:f.name}),f.connected?s.jsx("span",{className:"text-green-500",children:"✓"}):s.jsx("span",{className:"text-amber-500",title:f.error||"Not connected",children:s.jsx(Uf,{className:"w-3 h-3"})})]}),f.connected&&E.length>0&&s.jsx("button",{onClick:()=>{const G=E.map(ee=>ee.full_name).filter(ee=>!Ie.includes(ee));G.length>0&&N({...v,tools:[...Array.isArray(v.tools)?v.tools:[],...G]})},className:"text-xs px-2 py-0.5 bg-blue-600 hover:bg-blue-700 rounded transition-colors",children:"Add All"})]}),B[f.name]&&s.jsxs("div",{className:"pl-4 space-y-1",children:[!f.connected&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"text-xs text-foreground-muted italic",children:f.error||"No tools available"}),s.jsxs("div",{className:"text-amber-500 text-xs mt-1",children:["Couldn't retrieve actions for ",f.name,". Consider adding manually by running ",s.jsx("code",{className:"bg-zinc-800 px-1 py-0.5 rounded",children:"/mcp"})," in Claude Code."]})]}),E.map(G=>s.jsx("span",{draggable:!0,onDragStart:ee=>A(ee,"mcp",G.full_name,"available"),className:"px-2 py-1 text-xs rounded border flex items-center gap-1.5 cursor-grab active:cursor-grabbing bg-mcp-bg text-mcp border-mcp/20",title:G.description||G.name,children:G.name},G.full_name))]})]},f.name)})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-xs font-medium text-foreground-secondary mb-2",children:"Assigned"}),s.jsxs("div",{onDrop:F,onDragOver:f=>{_(f),z(!0)},onDragLeave:()=>z(!1),className:_t("min-h-[200px] max-h-[200px] overflow-y-auto p-3 rounded border-2 border-dashed transition-colors",$?"border-mcp bg-mcp/10":"border-border bg-background-elevated","flex flex-wrap gap-2 content-start"),children:[Ie.length===0&&s.jsx("span",{className:"text-xs text-foreground-muted italic",children:"Drag tools here"}),Ie.map(f=>{const E=f.split("__"),G=E.length>=3?E[2]:f;return s.jsxs("span",{draggable:!0,onDragStart:ee=>A(ee,"mcp",f,"assigned"),className:"px-2 py-1 text-xs rounded border flex items-center gap-1.5 h-fit cursor-grab active:cursor-grabbing bg-mcp-bg text-mcp border-mcp/20",title:f,children:[G,s.jsx("button",{onClick:()=>ue(f),className:"hover:text-foreground transition-colors",children:s.jsx(Jl,{className:"w-3 h-3"})})]},f)})]})]})]})}),S==="disallowed"&&s.jsx(s.Fragment,{children:pe?s.jsx("div",{className:"flex-1 flex items-center justify-center p-8 rounded border-2 border-dashed border-border bg-background-elevated",children:s.jsxs("div",{className:"bg-blue-900/30 border border-blue-700 rounded p-4 text-blue-300 text-sm max-w-md",children:[s.jsx("strong",{children:"ALL TOOLS"})," selected — Disallowed tools are not applicable when all tools are enabled."]})}):s.jsxs(s.Fragment,{children:[s.jsx(Vr,{items:(()=>{const f=Zl,E=y.flatMap(ee=>ee.tools.map(ve=>ve.full_name));return[...f,...E].filter(ee=>!v.disallowedTools.includes(ee)&&!(Array.isArray(v.tools)&&v.tools.includes(ee)))})(),type:"tool",colorClass:"text-red-400",bgClass:"bg-red-900/30",onAdd:_e,onRemove:Fe,dropActive:Z,onDragOver:f=>{_(f),L(!0)},onDragLeave:()=>L(!1),onDrop:V,label:"Available",dragStartHandler:(f,E)=>A(f,"disallowed",E,"available")}),s.jsx(Vr,{items:v.disallowedTools,type:"tool",colorClass:"text-red-400",bgClass:"bg-red-900/30",onAdd:_e,onRemove:Fe,dropActive:$,onDragOver:f=>{_(f),z(!0)},onDragLeave:()=>z(!1),onDrop:F,label:"Assigned",dragStartHandler:(f,E)=>A(f,"disallowed",E,"assigned")})]})})]}),S==="mcp"&&!pe&&s.jsxs("div",{className:"mt-4 border-t border-zinc-700 pt-4",children:[s.jsx("h4",{className:"text-sm font-medium mb-2",children:"Add MCP Action Manually"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{type:"text",placeholder:"mcp__servername__action",value:Q,onChange:f=>D(f.target.value),className:"flex-1 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-sm"}),s.jsx("button",{onClick:()=>{Q.trim()&&(et(Q.trim()),D(""))},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm",children:"Add"})]}),s.jsx("p",{className:"text-xs text-zinc-500 mt-1",children:"Format: mcp__servername__actionname (e.g., mcp__context7__query-docs)"})]})]}),s.jsxs("div",{className:"border-t border-border pt-4",children:[s.jsx("label",{className:"block text-sm font-medium mb-1.5",children:"Body (Markdown)"}),s.jsx("textarea",{value:v.body,onChange:f=>N({...v,body:f.target.value}),rows:8,className:"w-full px-3 py-2 bg-background-elevated border border-border rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-tool/50 resize-none",placeholder:"Agent instructions in markdown..."})]})]}),s.jsxs("div",{className:"flex items-center justify-end gap-3 p-4 border-t border-border",children:[s.jsx("button",{onClick:d,className:"px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors",children:"Cancel"}),s.jsx("button",{onClick:Ae,className:"px-4 py-2 bg-tool text-white rounded text-sm font-medium hover:bg-tool/90 transition-colors",children:"Save"})]})]})})}const hn=10;function Pp({agent:a,onEdit:d}){const u=a.tools==="*"?[]:a.tools.filter(y=>!y.startsWith("mcp__")),g=a.tools==="*"?[]:a.tools.filter(y=>y.startsWith("mcp__"));return s.jsxs("div",{className:"border border-border rounded-lg p-4 bg-background-elevated hover:bg-background-hover transition-colors flex flex-col h-full",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-mono text-base font-medium",children:a.name}),a.nickname&&s.jsxs("p",{className:"text-sm text-foreground-secondary",children:['"',a.nickname,'"']})]}),s.jsx("span",{className:_t("text-xs font-medium uppercase",Lp[a.model]),children:a.model})]}),s.jsx("p",{className:"text-sm text-foreground-secondary mb-4 line-clamp-2",children:a.description}),(a.tools==="*"||u.length>0)&&s.jsxs("div",{className:"mb-3",children:[s.jsx("div",{className:"text-xs text-foreground-muted mb-1.5",children:"Tools:"}),s.jsx("div",{className:"flex flex-wrap gap-1.5",children:a.tools==="*"?s.jsx("span",{className:"px-2 py-1 text-xs rounded bg-tool-bg text-tool border border-tool/20 font-medium",children:"* (ALL TOOLS)"}):s.jsxs(s.Fragment,{children:[u.slice(0,hn).map(y=>s.jsx("span",{className:"px-2 py-1 text-xs rounded bg-tool-bg text-tool border border-tool/20",children:y},y)),u.length>hn&&s.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-zinc-700 text-zinc-400 border border-zinc-600",children:["+",u.length-hn," more"]})]})})]}),(()=>{const y={};return g.forEach(m=>{const v=m.split("__");if(v.length>=2){const N=v[1];y[N]||(y[N]=[]),y[N].push(m)}}),Object.keys(y).length>0&&s.jsxs("div",{className:"mb-3",children:[s.jsx("div",{className:"text-xs text-foreground-muted mb-1.5",children:"MCP:"}),s.jsx("div",{className:"flex flex-wrap gap-1.5",children:Object.entries(y).map(([m,v])=>s.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-mcp-bg text-mcp border border-mcp/20",title:v.join(`
`),children:[m," (",v.length,")"]},m))})]})})(),a.skills.length>0&&s.jsxs("div",{className:"mb-3",children:[s.jsx("div",{className:"text-xs text-foreground-muted mb-1.5",children:"Skills:"}),s.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[a.skills.slice(0,hn).map(y=>s.jsx("span",{className:"px-2 py-1 text-xs rounded bg-skill-bg text-skill border border-skill/20",children:y},y)),a.skills.length>hn&&s.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-zinc-700 text-zinc-400 border border-zinc-600",children:["+",a.skills.length-hn," more"]})]})]}),a.disallowedTools&&a.disallowedTools.length>0&&s.jsxs("div",{className:"mb-3",children:[s.jsx("div",{className:"text-xs text-foreground-muted mb-1.5",children:"Disallowed:"}),s.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[a.disallowedTools.slice(0,hn).map(y=>s.jsx("span",{className:"px-2 py-1 text-xs rounded bg-red-900/30 text-red-400 border border-red-800/50",children:y},y)),a.disallowedTools.length>hn&&s.jsxs("span",{className:"px-2 py-1 text-xs rounded bg-zinc-700 text-zinc-400 border border-zinc-600",children:["+",a.disallowedTools.length-hn," more"]})]})]}),s.jsx("div",{className:"flex gap-2 mt-auto pt-3 border-t border-border-subtle",children:s.jsx("button",{onClick:()=>d(a),className:"text-xs text-foreground-secondary hover:text-foreground transition-colors",children:"Edit"})})]})}function Mp({skills:a,mcpServers:d,projectSkills:u=[]}){const g=[...a,...u],[y,m]=j.useState({baseTools:!0,skills:!1,mcp:!1}),v=S=>{m(R=>({...R,[S]:!R[S]}))},N=(S,R,Z)=>{S.dataTransfer.effectAllowed="copy",S.dataTransfer.setData("text/plain",JSON.stringify({type:R,name:Z}))};return s.jsxs("div",{className:"w-64 border-r border-border bg-background-elevated p-4 overflow-y-auto",children:[s.jsx("h2",{className:"text-sm font-semibold mb-4",children:"Available Resources"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>v("baseTools"),className:"flex items-center justify-between w-full text-sm font-medium mb-2 hover:text-foreground transition-colors",children:[s.jsxs("span",{children:["Base Tools (",Zl.length,")"]}),s.jsx("span",{className:"text-xs",children:y.baseTools?"▼":"▸"})]}),y.baseTools&&s.jsx("div",{className:"space-y-1 pl-2",children:Zl.map(S=>s.jsx("div",{className:"text-xs px-2 py-1.5 rounded text-tool",title:S,children:S},S))})]}),s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>v("skills"),className:"flex items-center justify-between w-full text-sm font-medium mb-2 hover:text-foreground transition-colors",children:[s.jsxs("span",{children:["Skills (",g.length,")"]}),s.jsx("span",{className:"text-xs",children:y.skills?"▼":"▸"})]}),y.skills&&s.jsx("div",{className:"space-y-1 pl-2",children:g.map(S=>s.jsx("div",{draggable:!0,onDragStart:R=>N(R,"skill",S.name),className:"text-xs px-2 py-1.5 rounded hover:bg-background-hover cursor-grab active:cursor-grabbing text-skill",title:S.description||S.path,children:S.name},S.name))})]}),s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>v("mcp"),className:"flex items-center justify-between w-full text-sm font-medium mb-2 hover:text-foreground transition-colors",children:[s.jsxs("span",{children:["MCP Servers (",d.length,")"]}),s.jsx("span",{className:"text-xs",children:y.mcp?"▼":"▸"})]}),y.mcp&&s.jsx("div",{className:"space-y-1 pl-2",children:d.map(S=>s.jsxs("div",{draggable:!0,onDragStart:R=>N(R,"mcp",S.name),className:"text-xs px-2 py-1.5 rounded hover:bg-background-hover cursor-grab active:cursor-grabbing text-mcp flex items-center gap-2",title:S.command||S.url||"",children:[s.jsx("span",{className:_t("w-2 h-2 rounded-full",S.connected?"bg-green-500":"bg-gray-500")}),S.name]},S.name))})]})]})]})}function zp(){const[a,d]=j.useState("projects"),[u,g]=j.useState(""),[y,m]=j.useState(!1),[v,N]=j.useState(null),[S,R]=j.useState(null),[Z,L]=j.useState(null),[$,z]=j.useState({skills:[],mcp_servers:[]}),[B,U]=j.useState([]),[Q,D]=j.useState(!1);j.useEffect(()=>{(async()=>{try{const me=await fetch("/api/resources/global");if(me.ok){const Ae=await me.json();z(Ae)}}catch(me){console.error("Failed to fetch global resources:",me)}})()},[]),j.useEffect(()=>{S&&!Q&&fetch("/api/mcp/tools").then(se=>se.json()).then(se=>{U(se.servers||[]),D(!0)}).catch(se=>{console.error("Failed to fetch MCP tools:",se),D(!0)})},[S,Q]),j.useEffect(()=>{D(!1),U([])},[u]);const fe=async se=>{g(se),m(!0),N(null),d("agents");try{const me=await fetch("/api/project/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:se})});if(!me.ok)throw new Error(`Scan failed: ${me.statusText}`);const Ae=await me.json();R(Ae)}catch(me){N(me instanceof Error?me.message:"Failed to scan project"),d("projects")}finally{m(!1)}},pe=()=>{d("projects"),R(null),g(""),N(null)},be=se=>{L(se)},Ie=se=>{S&&R({...S,agents:S.agents.map(me=>me.filename===se.filename?se:me)})};return a==="projects"?s.jsx(Ep,{onSelectProject:fe}):s.jsxs("div",{className:"h-screen flex flex-col pb-12",children:[s.jsxs("header",{className:"border-b border-border bg-background-elevated px-6 py-4",children:[s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:pe,className:"p-2 hover:bg-background-hover rounded transition-colors",title:"Back to projects",children:s.jsx(Yf,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-semibold",children:"Claude Subagent Editor"}),u&&s.jsx("p",{className:"text-sm text-foreground-secondary",children:u})]})]})}),v&&s.jsx("div",{className:"mt-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded px-3 py-2",children:v})]}),s.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[S&&!y&&s.jsxs(s.Fragment,{children:[s.jsx(Mp,{skills:$.skills,mcpServers:$.mcp_servers,projectSkills:S.project_skills}),s.jsx("main",{className:"flex-1 overflow-y-auto p-6",children:s.jsxs("div",{className:"max-w-7xl mx-auto",children:[s.jsx("div",{className:"flex items-center justify-between mb-6",children:s.jsxs("div",{children:[s.jsx("h2",{className:"text-lg font-semibold",children:"Agents"}),s.jsxs("p",{className:"text-sm text-foreground-secondary",children:[S.agents.length," agent",S.agents.length!==1?"s":""," ","found"]})]})}),S.agents.length===0?s.jsxs("div",{className:"text-center py-12 text-foreground-muted",children:[s.jsxs("p",{children:["No agents found in ",S.path,"/.claude/agents/"]}),s.jsx("p",{className:"text-sm mt-2",children:"Create your first agent to get started"})]}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch",children:S.agents.map(se=>s.jsx(Pp,{agent:se,onEdit:be},se.filename))})]})})]}),y&&s.jsx("div",{className:"flex-1 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-tool mx-auto mb-4"}),s.jsx("p",{className:"text-foreground-secondary",children:"Scanning project..."})]})})]}),Z&&s.jsx(Tp,{agent:Z,onClose:()=>L(null),onSave:Ie,globalResources:$,mcpTools:B,projectSkills:S==null?void 0:S.project_skills}),s.jsx("footer",{className:"fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 py-2 px-4 text-center text-sm text-zinc-400",children:s.jsxs("div",{className:"flex items-center justify-center gap-2",children:[s.jsx("span",{children:"Created by"}),s.jsxs("a",{href:"https://github.com/AvivK5498",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-200 hover:text-white flex items-center gap-1",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"Aviv Kaplan"]}),s.jsx("span",{className:"mx-2",children:"•"}),s.jsx("a",{href:"https://github.com/AvivK5498/Claude-Subagent-Editor",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-200 hover:text-white",children:"Star & contribute on GitHub"})]})})]})}var Op=Rc(),Ip=`@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  contain: layout style;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 0.6875rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34C759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}`,Ap={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-annotation-popup-css-styles",a.textContent=Ip,document.head.appendChild(a))}var St=Ap,jc=j.forwardRef(function({element:d,timestamp:u,selectedText:g,placeholder:y="What should change?",initialValue:m="",submitLabel:v="Add",onSubmit:N,onCancel:S,style:R,accentColor:Z="#3c82f7",isExiting:L=!1,lightMode:$=!1},z){const[B,U]=j.useState(m),[Q,D]=j.useState(!1),[fe,pe]=j.useState("initial"),[be,Ie]=j.useState(!1),se=j.useRef(null),me=j.useRef(null);j.useEffect(()=>{L&&fe!=="exit"&&pe("exit")},[L,fe]),j.useEffect(()=>{requestAnimationFrame(()=>{pe("enter")});const _e=setTimeout(()=>{pe("entered")},200),Fe=setTimeout(()=>{const re=se.current;re&&(re.focus(),re.selectionStart=re.selectionEnd=re.value.length,re.scrollTop=re.scrollHeight)},50);return()=>{clearTimeout(_e),clearTimeout(Fe)}},[]);const Ae=j.useCallback(()=>{D(!0),setTimeout(()=>{var _e;D(!1),(_e=se.current)==null||_e.focus()},250)},[]);j.useImperativeHandle(z,()=>({shake:Ae}),[Ae]);const $e=j.useCallback(()=>{pe("exit"),setTimeout(()=>{S()},150)},[S]),De=j.useCallback(()=>{B.trim()&&N(B.trim())},[B,N]),et=j.useCallback(_e=>{_e.key==="Enter"&&!_e.shiftKey&&(_e.preventDefault(),De()),_e.key==="Escape"&&$e()},[De,$e]),ue=[St.popup,$?St.light:"",fe==="enter"?St.enter:"",fe==="entered"?St.entered:"",fe==="exit"?St.exit:"",Q?St.shake:""].filter(Boolean).join(" ");return s.jsxs("div",{ref:me,className:ue,"data-annotation-popup":!0,style:R,onClick:_e=>_e.stopPropagation(),children:[s.jsxs("div",{className:St.header,children:[s.jsx("span",{className:St.element,children:d}),u&&s.jsx("span",{className:St.timestamp,children:u})]}),g&&s.jsxs("div",{className:St.quote,children:["“",g.slice(0,80),g.length>80?"...":"","”"]}),s.jsx("textarea",{ref:se,className:St.textarea,style:{borderColor:be?Z:void 0},placeholder:y,value:B,onChange:_e=>U(_e.target.value),onFocus:()=>Ie(!0),onBlur:()=>Ie(!1),rows:2,onKeyDown:et}),s.jsxs("div",{className:St.actions,children:[s.jsx("button",{className:St.cancel,onClick:$e,children:"Cancel"}),s.jsx("button",{className:St.submit,style:{backgroundColor:Z,opacity:B.trim()?1:.4},onClick:De,disabled:!B.trim(),children:v})]})]})}),Nc=({size:a=16})=>s.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Dp=({size:a=16})=>s.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Rp=({size:a=24,style:d={}})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",style:d,children:[s.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[s.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_list_sparkle",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Ec=({size:a=20})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",children:[s.jsx("path",{d:"M10 16.0417C6.66328 16.0417 3.95834 13.3367 3.95834 10C3.95834 6.66328 6.66328 3.95833 10 3.95833C13.3367 3.95833 16.0417 6.66328 16.0417 10C16.0417 13.3367 13.3367 16.0417 10 16.0417Z",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M8.24188 8.18736C8.38392 7.78357 8.66429 7.44309 9.03331 7.22621C9.40234 7.00933 9.83621 6.93005 10.2581 7.00241C10.68 7.07477 11.0626 7.29411 11.3383 7.62157C11.6139 7.94903 11.7648 8.36348 11.7642 8.79152C11.7642 9.99986 10 10.604 10 10.604V10.8333",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 13.0208H10.006",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Lc=({size:a=14})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 14 14",fill:"none",children:[s.jsx("style",{children:`
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `}),s.jsx("path",{className:"check-path-animated",d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),$p=({size:a=24,copied:d=!1})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("style",{children:`
      .copy-icon, .check-icon {
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
    `}),s.jsxs("g",{className:"copy-icon",style:{opacity:d?0:1,transform:d?"scale(0.8)":"scale(1)",transformOrigin:"center"},children:[s.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsxs("g",{className:"check-icon",style:{opacity:d?1:0,transform:d?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Fp=({size:a=24,isOpen:d=!0})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("style",{children:`
      .eye-open, .eye-closed {
        transition: opacity 0.2s ease;
      }
    `}),s.jsxs("g",{className:"eye-open",style:{opacity:d?1:0},children:[s.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:"eye-closed",style:{opacity:d?0:1},children:[s.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),s.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Yp=({size:a=24,isPaused:d=!1})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("style",{children:`
      .pause-bar, .play-triangle {
        transition: opacity 0.15s ease;
      }
    `}),s.jsx("path",{className:"pause-bar",d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:d?0:1}}),s.jsx("path",{className:"pause-bar",d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:d?0:1}}),s.jsx("path",{className:"play-triangle",d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5",style:{opacity:d?1:0}})]}),Bp=({size:a=16})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Up=({size:a=16})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10 11.5L10.125 15.5",stroke:"currentColor",strokeOpacity:"1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14 11.5L13.87 15.5",stroke:"currentColor",strokeOpacity:"1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9 7.5V6.25C9 5.42157 9.67157 4.75 10.5 4.75H13.5C14.3284 4.75 15 5.42157 15 6.25V7.5",stroke:"currentColor",strokeOpacity:"1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.5 7.75H18.5",stroke:"currentColor",strokeOpacity:"1",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M6.75 7.75L7.11691 16.189C7.16369 17.2649 7.18708 17.8028 7.41136 18.2118C7.60875 18.5717 7.91211 18.8621 8.28026 19.0437C8.69854 19.25 9.23699 19.25 10.3139 19.25H13.6861C14.763 19.25 15.3015 19.25 15.7197 19.0437C16.0879 18.8621 16.3912 18.5717 16.5886 18.2118C16.8129 17.8028 16.8363 17.2649 16.8831 16.189L17.25 7.75",stroke:"currentColor",strokeOpacity:"1",strokeWidth:"1.5",strokeLinecap:"round"})]}),Tc=({size:a=16})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[s.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_2_53",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Wp=({size:a=24})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_1_660)",children:[s.jsx("path",{d:"M17.25 17.25L6.75 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.75 17.25L17.25 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_1_660",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Hp=({size:a=16})=>s.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M12 5V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M12 21V19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16.95 7.05L18.36 5.64",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M5.64 18.36L7.05 16.95",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M19 12H21",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M3 12H5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16.95 16.95L18.36 18.36",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M5.64 5.64L7.05 7.05",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Xp=({size:a=16})=>s.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});function Qp(a,d=4){const u=[];let g=a,y=0;for(;g&&y<d;){const m=g.tagName.toLowerCase();if(m==="html"||m==="body")break;let v=m;if(g.id)v=`#${g.id}`;else if(g.className&&typeof g.className=="string"){const N=g.className.split(/\s+/).find(S=>S.length>2&&!S.match(/^[a-z]{1,2}$/)&&!S.match(/[A-Z0-9]{5,}/));N&&(v=`.${N.split("_")[0]}`)}u.unshift(v),g=g.parentElement,y++}return u.join(" > ")}function Xo(a){var g,y,m,v,N,S,R,Z;const d=Qp(a);if(a.dataset.element)return{name:a.dataset.element,path:d};const u=a.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(u)){const L=a.closest("svg");if(L){const $=L.parentElement;if($)return{name:`graphic in ${Xo($).name}`,path:d}}return{name:"graphic element",path:d}}if(u==="svg"){const L=a.parentElement;if((L==null?void 0:L.tagName.toLowerCase())==="button"){const $=(g=L.textContent)==null?void 0:g.trim();return{name:$?`icon in "${$}" button`:"button icon",path:d}}return{name:"icon",path:d}}if(u==="button"){const L=(y=a.textContent)==null?void 0:y.trim(),$=a.getAttribute("aria-label");return $?{name:`button [${$}]`,path:d}:{name:L?`button "${L.slice(0,25)}"`:"button",path:d}}if(u==="a"){const L=(m=a.textContent)==null?void 0:m.trim(),$=a.getAttribute("href");return L?{name:`link "${L.slice(0,25)}"`,path:d}:$?{name:`link to ${$.slice(0,30)}`,path:d}:{name:"link",path:d}}if(u==="input"){const L=a.getAttribute("type")||"text",$=a.getAttribute("placeholder"),z=a.getAttribute("name");return $?{name:`input "${$}"`,path:d}:z?{name:`input [${z}]`,path:d}:{name:`${L} input`,path:d}}if(["h1","h2","h3","h4","h5","h6"].includes(u)){const L=(v=a.textContent)==null?void 0:v.trim();return{name:L?`${u} "${L.slice(0,35)}"`:u,path:d}}if(u==="p"){const L=(N=a.textContent)==null?void 0:N.trim();return L?{name:`paragraph: "${L.slice(0,40)}${L.length>40?"...":""}"`,path:d}:{name:"paragraph",path:d}}if(u==="span"||u==="label"){const L=(S=a.textContent)==null?void 0:S.trim();return L&&L.length<40?{name:`"${L}"`,path:d}:{name:u,path:d}}if(u==="li"){const L=(R=a.textContent)==null?void 0:R.trim();return L&&L.length<40?{name:`list item: "${L.slice(0,35)}"`,path:d}:{name:"list item",path:d}}if(u==="blockquote")return{name:"blockquote",path:d};if(u==="code"){const L=(Z=a.textContent)==null?void 0:Z.trim();return L&&L.length<30?{name:`code: \`${L}\``,path:d}:{name:"code",path:d}}if(u==="pre")return{name:"code block",path:d};if(u==="img"){const L=a.getAttribute("alt");return{name:L?`image "${L.slice(0,30)}"`:"image",path:d}}if(u==="video")return{name:"video",path:d};if(["div","section","article","nav","header","footer","aside","main"].includes(u)){const L=a.className,$=a.getAttribute("role"),z=a.getAttribute("aria-label");if(z)return{name:`${u} [${z}]`,path:d};if($)return{name:`${$}`,path:d};if(typeof L=="string"&&L){const B=L.split(/[\s_-]+/).map(U=>U.replace(/[A-Z0-9]{5,}.*$/,"")).filter(U=>U.length>2&&!/^[a-z]{1,2}$/.test(U)).slice(0,2);if(B.length>0)return{name:B.join(" "),path:d}}return{name:u==="div"?"container":u,path:d}}return{name:u,path:d}}function $i(a){var m,v,N;const d=[],u=(m=a.textContent)==null?void 0:m.trim();u&&u.length<100&&d.push(u);const g=a.previousElementSibling;if(g){const S=(v=g.textContent)==null?void 0:v.trim();S&&S.length<50&&d.unshift(`[before: "${S.slice(0,40)}"]`)}const y=a.nextElementSibling;if(y){const S=(N=y.textContent)==null?void 0:N.trim();S&&S.length<50&&d.push(`[after: "${S.slice(0,40)}"]`)}return d.join(" ")}function Pc(a){const d=a.parentElement;if(!d)return"";const u=Array.from(d.children).filter(S=>S!==a&&S instanceof HTMLElement);if(u.length===0)return"";const g=u.slice(0,4).map(S=>{var $;const R=S.tagName.toLowerCase(),Z=S.className;let L="";if(typeof Z=="string"&&Z){const z=Z.split(/\s+/).map(B=>B.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(B=>B.length>2&&!/^[a-z]{1,2}$/.test(B));z&&(L=`.${z}`)}if(R==="button"||R==="a"){const z=($=S.textContent)==null?void 0:$.trim().slice(0,15);if(z)return`${R}${L} "${z}"`}return`${R}${L}`});let m=d.tagName.toLowerCase();if(typeof d.className=="string"&&d.className){const S=d.className.split(/\s+/).map(R=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(R=>R.length>2&&!/^[a-z]{1,2}$/.test(R));S&&(m=`.${S}`)}const v=d.children.length,N=v>g.length+1?` (${v} total in ${m})`:"";return g.join(", ")+N}function Fi(a){const d=a.className;return typeof d!="string"||!d?"":d.split(/\s+/).filter(g=>g.length>0).map(g=>{const y=g.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return y?y[1]:g}).filter((g,y,m)=>m.indexOf(g)===y).join(", ")}function Mc(a){if(typeof window>"u")return{};const d=window.getComputedStyle(a),u={},g=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];for(const y of g){const m=d.getPropertyValue(y.replace(/([A-Z])/g,"-$1").toLowerCase());m&&m!=="none"&&m!=="normal"&&m!=="auto"&&m!=="0px"&&m!=="rgba(0, 0, 0, 0)"&&(u[y]=m)}return u}function zc(a){const d=[],u=a.getAttribute("role"),g=a.getAttribute("aria-label"),y=a.getAttribute("aria-describedby"),m=a.getAttribute("tabindex"),v=a.getAttribute("aria-hidden");return u&&d.push(`role="${u}"`),g&&d.push(`aria-label="${g}"`),y&&d.push(`aria-describedby="${y}"`),m&&d.push(`tabindex=${m}`),v==="true"&&d.push("aria-hidden"),a.matches("a, button, input, select, textarea, [tabindex]")&&d.push("focusable"),d.join(", ")}function Oc(a){const d=[];let u=a;for(;u&&u.tagName.toLowerCase()!=="html";){const g=u.tagName.toLowerCase();let y=g;if(u.id)y=`${g}#${u.id}`;else if(u.className&&typeof u.className=="string"){const m=u.className.split(/\s+/).map(v=>v.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(v=>v.length>2);m&&(y=`${g}.${m}`)}d.unshift(y),u=u.parentElement}return d.join(" > ")}var Vp="feedback-annotations-",Gp=7;function ql(a){return`${Vp}${a}`}function Kp(a){if(typeof window>"u")return[];try{const d=localStorage.getItem(ql(a));if(!d)return[];const u=JSON.parse(d),g=Date.now()-Gp*24*60*60*1e3;return u.filter(y=>!y.timestamp||y.timestamp>g)}catch{return[]}}function Jp(a,d){if(!(typeof window>"u"))try{localStorage.setItem(ql(a),JSON.stringify(d))}catch{}}var Zp=`@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 257px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  width: calc-size(auto, size);
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
}
@supports not (width: calc-size(auto, size)) {
  .styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
    width: 257px;
  }
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
  pointer-events: none;
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -16px;
  right: -16px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100002;
  background: #1a1a1a;
  padding: 0.625rem 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 0.6875rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.375rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 0.75rem;
  font-weight: 450;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  background: white;
  border-radius: 1rem;
  padding: 13px 1rem 16px;
  min-width: 205px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: calc(0.5rem + 2px);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__helpIcon___xQg56::after {
  content: attr(data-tooltip);
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 10px;
  background: #383838;
  color: rgba(255, 255, 255, 0.7);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 10px;
  white-space: normal;
  width: 152px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
  pointer-events: none;
  z-index: 100;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.28);
}
.styles-module__helpIcon___xQg56:hover::after {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}`,qp={toolbar:"styles-module__toolbar___wNsdK",toolbarContainer:"styles-module__toolbarContainer___dIhma",dragging:"styles-module__dragging___xrolZ",entrance:"styles-module__entrance___sgHd8",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",controlsContent:"styles-module__controlsContent___9GJWU",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",controlButton:"styles-module__controlButton___8Q0jc",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",markerTooltip:"styles-module__markerTooltip___aLJID",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",helpIcon:"styles-module__helpIcon___xQg56",themeToggle:"styles-module__themeToggle___2rUjA",dark:"styles-module__dark___ILIQf",selected:"styles-module__selected___OwRqP",settingsRow:"styles-module__settingsRow___3sdhc",light:"styles-module__light___r6n4Y",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleDots:"styles-module__cycleDots___LWuoQ",active:"styles-module__active___-zoN6",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",checked:"styles-module__checked___mnZLo",dragSelection:"styles-module__dragSelection___kZLq2",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-page-toolbar-css-styles",a.textContent=Zp,document.head.appendChild(a))}var C=qp,Ic=!1,Ac={outputDetail:"standard",autoClearAfterCopy:!1,annotationColor:"#3c82f7",blockInteractions:!1},Ho=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}],em=[{value:"#AF52DE",label:"Purple"},{value:"#3c82f7",label:"Blue"},{value:"#5AC8FA",label:"Cyan"},{value:"#34C759",label:"Green"},{value:"#FFD60A",label:"Yellow"},{value:"#FF9500",label:"Orange"},{value:"#FF3B30",label:"Red"}];function tm(a){let d=a;for(;d&&d!==document.body;){const g=window.getComputedStyle(d).position;if(g==="fixed"||g==="sticky")return!0;d=d.parentElement}return!1}function nm(a,d,u="standard"){if(a.length===0)return"";const g=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let y=`## Page Feedback: ${d}
`;return u==="forensic"?(y+=`
**Environment:**
`,y+=`- Viewport: ${g}
`,typeof window<"u"&&(y+=`- URL: ${window.location.href}
`,y+=`- User Agent: ${navigator.userAgent}
`,y+=`- Timestamp: ${new Date().toISOString()}
`,y+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),y+=`
---
`):u!=="compact"&&(y+=`**Viewport:** ${g}
`),y+=`
`,a.forEach((m,v)=>{u==="compact"?(y+=`${v+1}. **${m.element}**: ${m.comment}`,m.selectedText&&(y+=` (re: "${m.selectedText.slice(0,30)}${m.selectedText.length>30?"...":""}")`),y+=`
`):u==="forensic"?(y+=`### ${v+1}. ${m.element}
`,m.isMultiSelect&&m.fullPath&&(y+=`*Forensic data shown for first element of selection*
`),m.fullPath&&(y+=`**Full DOM Path:** ${m.fullPath}
`),m.cssClasses&&(y+=`**CSS Classes:** ${m.cssClasses}
`),m.boundingBox&&(y+=`**Position:** x:${Math.round(m.boundingBox.x)}, y:${Math.round(m.boundingBox.y)} (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`),y+=`**Annotation at:** ${m.x.toFixed(1)}% from left, ${Math.round(m.y)}px from top
`,m.selectedText&&(y+=`**Selected text:** "${m.selectedText}"
`),m.nearbyText&&!m.selectedText&&(y+=`**Context:** ${m.nearbyText.slice(0,100)}
`),m.computedStyles&&(y+=`**Computed Styles:** ${m.computedStyles}
`),m.accessibility&&(y+=`**Accessibility:** ${m.accessibility}
`),m.nearbyElements&&(y+=`**Nearby Elements:** ${m.nearbyElements}
`),y+=`**Feedback:** ${m.comment}

`):(y+=`### ${v+1}. ${m.element}
`,y+=`**Location:** ${m.elementPath}
`,u==="detailed"&&(m.cssClasses&&(y+=`**Classes:** ${m.cssClasses}
`),m.boundingBox&&(y+=`**Position:** ${Math.round(m.boundingBox.x)}px, ${Math.round(m.boundingBox.y)}px (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`)),m.selectedText&&(y+=`**Selected text:** "${m.selectedText}"
`),u==="detailed"&&m.nearbyText&&!m.selectedText&&(y+=`**Context:** ${m.nearbyText.slice(0,100)}
`),y+=`**Feedback:** ${m.comment}

`)}),y.trim()}function rm({demoAnnotations:a,demoDelay:d=1e3,enableDemoMode:u=!1}={}){var Vo;const[g,y]=j.useState(!1),[m,v]=j.useState([]),[N,S]=j.useState(!0),[R,Z]=j.useState(!1),[L,$]=j.useState(!1),[z,B]=j.useState(null),[U,Q]=j.useState({x:0,y:0}),[D,fe]=j.useState(null),[pe,be]=j.useState(!1),[Ie,se]=j.useState(!1),[me,Ae]=j.useState(!1),[$e,De]=j.useState(null),[et,ue]=j.useState(null),[_e,Fe]=j.useState(null),[re,ze]=j.useState(null),[Se,A]=j.useState(0),[V,F]=j.useState(!1),[_,f]=j.useState(!1),[E,G]=j.useState(!1),[ee,ve]=j.useState(!1),[Oe,Ne]=j.useState(!1),[K,tt]=j.useState(Ac),[Pe,Jr]=j.useState(!0),[Qn,hr]=j.useState(!1),[Je,Zr]=j.useState(null),[Vt,qr]=j.useState(!1),[Gt,gn]=j.useState(null),[yn,eo]=j.useState(0),gr=j.useRef(!1),[to,Vn]=j.useState(new Set),[no,yr]=j.useState(new Set),[xn,Gn]=j.useState(!1),[Kn,Kt]=j.useState(!1),[Ft,ro]=j.useState(!1),rn=j.useRef(null),Lt=j.useRef(null),on=j.useRef(null),ln=j.useRef(null),vn=j.useRef(!1),xr=j.useRef(0),kn=j.useRef(null),Jt=8,wn=50,oo=j.useRef(null),lo=j.useRef(null),bn=j.useRef(null),Tt=typeof window<"u"?window.location.pathname:"/";j.useEffect(()=>{if(ee)Ne(!0);else{const x=setTimeout(()=>Ne(!1),0);return()=>clearTimeout(x)}},[ee]);const so=g&&N;j.useEffect(()=>{if(so){$(!1),Z(!0),Vn(new Set);const x=setTimeout(()=>{Vn(T=>{const H=new Set(T);return m.forEach(ie=>H.add(ie.id)),H})},350);return()=>clearTimeout(x)}else if(R){$(!0);const x=setTimeout(()=>{Z(!1),$(!1)},250);return()=>clearTimeout(x)}},[so]),j.useEffect(()=>{f(!0),A(window.scrollY);const x=Kp(Tt);v(x),Ic||(hr(!0),Ic=!0,setTimeout(()=>hr(!1),750));try{const T=localStorage.getItem("feedback-toolbar-settings");T&&tt({...Ac,...JSON.parse(T)})}catch{}try{const T=localStorage.getItem("feedback-toolbar-theme");T!==null&&Jr(T==="dark")}catch{}},[Tt]),j.useEffect(()=>{_&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(K))},[K,_]),j.useEffect(()=>{_&&localStorage.setItem("feedback-toolbar-theme",Pe?"dark":"light")},[Pe,_]),j.useEffect(()=>{if(!u||!_||!a||a.length===0||m.length>0)return;const x=[];return x.push(setTimeout(()=>{y(!0)},d-200)),a.forEach((T,H)=>{const ie=d+H*300;x.push(setTimeout(()=>{const ce=document.querySelector(T.selector);if(!ce)return;const ae=ce.getBoundingClientRect(),{name:oe,path:Ce}=Xo(ce),Ye={id:`demo-${Date.now()}-${H}`,x:(ae.left+ae.width/2)/window.innerWidth*100,y:ae.top+ae.height/2+window.scrollY,comment:T.comment,element:oe,elementPath:Ce,timestamp:Date.now(),selectedText:T.selectedText,boundingBox:{x:ae.left,y:ae.top+window.scrollY,width:ae.width,height:ae.height},nearbyText:$i(ce),cssClasses:Fi(ce)};v(we=>[...we,Ye])},ie))}),()=>{x.forEach(clearTimeout)}},[u,_,a,d]),j.useEffect(()=>{const x=()=>{A(window.scrollY),F(!0),bn.current&&clearTimeout(bn.current),bn.current=setTimeout(()=>{F(!1)},150)};return window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("scroll",x),bn.current&&clearTimeout(bn.current)}},[]),j.useEffect(()=>{_&&m.length>0?Jp(Tt,m):_&&m.length===0&&localStorage.removeItem(ql(Tt))},[m,Tt,_]);const vr=j.useCallback(()=>{if(E)return;const x=document.createElement("style");x.id="feedback-freeze-styles",x.textContent=`
      *:not([data-feedback-toolbar]):not([data-feedback-toolbar] *):not([data-annotation-popup]):not([data-annotation-popup] *):not([data-annotation-marker]):not([data-annotation-marker] *),
      *:not([data-feedback-toolbar]):not([data-feedback-toolbar] *):not([data-annotation-popup]):not([data-annotation-popup] *):not([data-annotation-marker]):not([data-annotation-marker] *)::before,
      *:not([data-feedback-toolbar]):not([data-feedback-toolbar] *):not([data-annotation-popup]):not([data-annotation-popup] *):not([data-annotation-marker]):not([data-annotation-marker] *)::after {
        animation-play-state: paused !important;
        transition: none !important;
      }
    `,document.head.appendChild(x),document.querySelectorAll("video").forEach(T=>{T.paused||(T.dataset.wasPaused="false",T.pause())}),G(!0)},[E]),Jn=j.useCallback(()=>{if(!E)return;const x=document.getElementById("feedback-freeze-styles");x&&x.remove(),document.querySelectorAll("video").forEach(T=>{T.dataset.wasPaused==="false"&&(T.play(),delete T.dataset.wasPaused)}),G(!1)},[E]),Zn=j.useCallback(()=>{E?Jn():vr()},[E,vr,Jn]);j.useEffect(()=>{g||(fe(null),ze(null),B(null),ve(!1),E&&Jn())},[g,E,Jn]),j.useEffect(()=>{if(!g)return;const x=document.createElement("style");return x.id="feedback-cursor-styles",x.textContent=`
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: default !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `,document.head.appendChild(x),()=>{const T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[g]),j.useEffect(()=>{if(!g||D)return;const x=T=>{if(T.target.closest("[data-feedback-toolbar]")){B(null);return}const H=document.elementFromPoint(T.clientX,T.clientY);if(!H||H.closest("[data-feedback-toolbar]")){B(null);return}const{name:ie,path:ce}=Xo(H),ae=H.getBoundingClientRect();B({element:ie,elementPath:ce,rect:ae}),Q({x:T.clientX,y:T.clientY})};return document.addEventListener("mousemove",x),()=>document.removeEventListener("mousemove",x)},[g,D]),j.useEffect(()=>{if(!g)return;const x=T=>{var Mt,Qe;if(vn.current){vn.current=!1;return}const H=T.target;if(H.closest("[data-feedback-toolbar]")||H.closest("[data-annotation-popup]")||H.closest("[data-annotation-marker]"))return;const ie=H.closest("button, a, input, select, textarea, [role='button'], [onclick]");if(K.blockInteractions&&ie&&(T.preventDefault(),T.stopPropagation()),D){if(ie&&!K.blockInteractions)return;T.preventDefault(),(Mt=oo.current)==null||Mt.shake();return}if(re){if(ie&&!K.blockInteractions)return;T.preventDefault(),(Qe=lo.current)==null||Qe.shake();return}T.preventDefault();const ce=document.elementFromPoint(T.clientX,T.clientY);if(!ce)return;const{name:ae,path:oe}=Xo(ce),Ce=ce.getBoundingClientRect(),Ye=T.clientX/window.innerWidth*100,we=tm(ce),he=we?T.clientY:T.clientY+window.scrollY,Ee=window.getSelection();let ot;Ee&&Ee.toString().trim().length>0&&(ot=Ee.toString().trim().slice(0,500));const Le=Mc(ce),ke=Object.entries(Le).map(([tr,Zt])=>`${tr}: ${Zt}`).join("; ");fe({x:Ye,y:he,clientY:T.clientY,element:ae,elementPath:oe,selectedText:ot,boundingBox:{x:Ce.left,y:we?Ce.top:Ce.top+window.scrollY,width:Ce.width,height:Ce.height},nearbyText:$i(ce),cssClasses:Fi(ce),isFixed:we,fullPath:Oc(ce),accessibility:zc(ce),computedStyles:ke,nearbyElements:Pc(ce)}),B(null)};return document.addEventListener("click",x,!0),()=>document.removeEventListener("click",x,!0)},[g,D,re,K.blockInteractions]),j.useEffect(()=>{if(!g||D)return;const x=T=>{const H=T.target;H.closest("[data-feedback-toolbar]")||H.closest("[data-annotation-marker]")||H.closest("[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(H.tagName)||H.isContentEditable||(rn.current={x:T.clientX,y:T.clientY})};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[g,D]),j.useEffect(()=>{if(!g||D)return;const x=T=>{if(!rn.current)return;const H=T.clientX-rn.current.x,ie=T.clientY-rn.current.y,ce=H*H+ie*ie,ae=Jt*Jt;if(!Ft&&ce>=ae&&(Lt.current=rn.current,ro(!0)),(Ft||ce>=ae)&&Lt.current){if(on.current){const ge=Math.min(Lt.current.x,T.clientX),ye=Math.min(Lt.current.y,T.clientY),lt=Math.abs(T.clientX-Lt.current.x),He=Math.abs(T.clientY-Lt.current.y);on.current.style.transform=`translate(${ge}px, ${ye}px)`,on.current.style.width=`${lt}px`,on.current.style.height=`${He}px`}const oe=Date.now();if(oe-xr.current<wn)return;xr.current=oe;const Ce=Lt.current.x,Ye=Lt.current.y,we=Math.min(Ce,T.clientX),he=Math.min(Ye,T.clientY),Ee=Math.max(Ce,T.clientX),ot=Math.max(Ye,T.clientY),Le=(we+Ee)/2,ke=(he+ot)/2,Mt=new Set,Qe=[[we,he],[Ee,he],[we,ot],[Ee,ot],[Le,ke],[Le,he],[Le,ot],[we,ke],[Ee,ke]];for(const[ge,ye]of Qe){const lt=document.elementsFromPoint(ge,ye);for(const He of lt)He instanceof HTMLElement&&Mt.add(He)}const tr=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ge of tr)if(ge instanceof HTMLElement){const ye=ge.getBoundingClientRect(),lt=ye.left+ye.width/2,He=ye.top+ye.height/2,Cn=lt>=we&&lt<=Ee&&He>=he&&He<=ot,Yt=Math.min(ye.right,Ee)-Math.max(ye.left,we),Sr=Math.min(ye.bottom,ot)-Math.max(ye.top,he),Go=Yt>0&&Sr>0?Yt*Sr:0,Cr=ye.width*ye.height,nr=Cr>0?Go/Cr:0;(Cn||nr>.5)&&Mt.add(ge)}const Zt=[],zt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ge of Mt){if(ge.closest("[data-feedback-toolbar]")||ge.closest("[data-annotation-marker]"))continue;const ye=ge.getBoundingClientRect();if(!(ye.width>window.innerWidth*.8&&ye.height>window.innerHeight*.5)&&!(ye.width<10||ye.height<10)&&ye.left<Ee&&ye.right>we&&ye.top<ot&&ye.bottom>he){const lt=ge.tagName;let He=zt.has(lt);if(!He&&(lt==="DIV"||lt==="SPAN")){const Cn=ge.textContent&&ge.textContent.trim().length>0,Yt=ge.onclick!==null||ge.getAttribute("role")==="button"||ge.getAttribute("role")==="link"||ge.classList.contains("clickable")||ge.hasAttribute("data-clickable");(Cn||Yt)&&!ge.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(He=!0)}if(He){let Cn=!1;for(const Yt of Zt)if(Yt.left<=ye.left&&Yt.right>=ye.right&&Yt.top<=ye.top&&Yt.bottom>=ye.bottom){Cn=!0;break}Cn||Zt.push(ye)}}}if(ln.current){const ge=ln.current;for(;ge.children.length>Zt.length;)ge.removeChild(ge.lastChild);Zt.forEach((ye,lt)=>{let He=ge.children[lt];He||(He=document.createElement("div"),He.className=C.selectedElementHighlight,ge.appendChild(He)),He.style.transform=`translate(${ye.left}px, ${ye.top}px)`,He.style.width=`${ye.width}px`,He.style.height=`${ye.height}px`})}}};return document.addEventListener("mousemove",x,{passive:!0}),()=>document.removeEventListener("mousemove",x)},[g,D,Ft,Jt]),j.useEffect(()=>{if(!g)return;const x=T=>{const H=Ft,ie=Lt.current;if(Ft&&ie){vn.current=!0;const ce=Math.min(ie.x,T.clientX),ae=Math.min(ie.y,T.clientY),oe=Math.max(ie.x,T.clientX),Ce=Math.max(ie.y,T.clientY),Ye=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Le=>{if(!(Le instanceof HTMLElement)||Le.closest("[data-feedback-toolbar]")||Le.closest("[data-annotation-marker]"))return;const ke=Le.getBoundingClientRect();ke.width>window.innerWidth*.8&&ke.height>window.innerHeight*.5||ke.width<10||ke.height<10||ke.left<oe&&ke.right>ce&&ke.top<Ce&&ke.bottom>ae&&Ye.push({element:Le,rect:ke})});const he=Ye.filter(({element:Le})=>!Ye.some(({element:ke})=>ke!==Le&&Le.contains(ke))),Ee=T.clientX/window.innerWidth*100,ot=T.clientY+window.scrollY;if(he.length>0){const Le=he.reduce((zt,{rect:ge})=>({left:Math.min(zt.left,ge.left),top:Math.min(zt.top,ge.top),right:Math.max(zt.right,ge.right),bottom:Math.max(zt.bottom,ge.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ke=he.slice(0,5).map(({element:zt})=>Xo(zt).name).join(", "),Mt=he.length>5?` +${he.length-5} more`:"",Qe=he[0].element,tr=Mc(Qe),Zt=Object.entries(tr).map(([zt,ge])=>`${zt}: ${ge}`).join("; ");fe({x:Ee,y:ot,clientY:T.clientY,element:`${he.length} elements: ${ke}${Mt}`,elementPath:"multi-select",boundingBox:{x:Le.left,y:Le.top+window.scrollY,width:Le.right-Le.left,height:Le.bottom-Le.top},isMultiSelect:!0,fullPath:Oc(Qe),accessibility:zc(Qe),computedStyles:Zt,nearbyElements:Pc(Qe),cssClasses:Fi(Qe),nearbyText:$i(Qe)})}else{const Le=Math.abs(oe-ce),ke=Math.abs(Ce-ae);Le>20&&ke>20&&fe({x:Ee,y:ot,clientY:T.clientY,element:"Area selection",elementPath:`region at (${Math.round(ce)}, ${Math.round(ae)})`,boundingBox:{x:ce,y:ae+window.scrollY,width:Le,height:ke},isMultiSelect:!0})}B(null)}else H&&(vn.current=!0);rn.current=null,Lt.current=null,ro(!1),ln.current&&(ln.current.innerHTML="")};return document.addEventListener("mouseup",x),()=>document.removeEventListener("mouseup",x)},[g,Ft]);const io=j.useCallback(x=>{var H;if(!D)return;const T={id:Date.now().toString(),x:D.x,y:D.y,comment:x,element:D.element,elementPath:D.elementPath,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:D.boundingBox,nearbyText:D.nearbyText,cssClasses:D.cssClasses,isMultiSelect:D.isMultiSelect,isFixed:D.isFixed,fullPath:D.fullPath,accessibility:D.accessibility,computedStyles:D.computedStyles,nearbyElements:D.nearbyElements};v(ie=>[...ie,T]),kn.current=T.id,setTimeout(()=>{kn.current=null},300),setTimeout(()=>{Vn(ie=>new Set(ie).add(T.id))},250),Gn(!0),setTimeout(()=>{fe(null),Gn(!1)},150),(H=window.getSelection())==null||H.removeAllRanges()},[D]),qn=j.useCallback(()=>{Gn(!0),setTimeout(()=>{fe(null),Gn(!1)},150)},[]),Qo=j.useCallback(x=>{const T=m.findIndex(H=>H.id===x);ue(x),yr(H=>new Set(H).add(x)),setTimeout(()=>{v(H=>H.filter(ie=>ie.id!==x)),yr(H=>{const ie=new Set(H);return ie.delete(x),ie}),ue(null),T<m.length-1&&(Fe(T),setTimeout(()=>Fe(null),200))},150)},[m]),Sn=j.useCallback(x=>{ze(x),De(null)},[]),kr=j.useCallback(x=>{re&&(v(T=>T.map(H=>H.id===re.id?{...H,comment:x}:H)),Kt(!0),setTimeout(()=>{ze(null),Kt(!1)},150))},[re]),wr=j.useCallback(()=>{Kt(!0),setTimeout(()=>{ze(null),Kt(!1)},150)},[]),er=j.useCallback(()=>{const x=m.length;if(x===0)return;Ae(!0),se(!0);const T=x*30+200;setTimeout(()=>{v([]),Vn(new Set),localStorage.removeItem(ql(Tt)),Ae(!1)},T),setTimeout(()=>se(!1),1500)},[Tt,m.length]),es=j.useCallback(async()=>{const x=nm(m,Tt,K.outputDetail);x&&(await navigator.clipboard.writeText(x),be(!0),setTimeout(()=>be(!1),2e3),K.autoClearAfterCopy&&setTimeout(()=>er(),500))},[m,Tt,K.outputDetail,K.autoClearAfterCopy,er]);j.useEffect(()=>{if(!Gt)return;const x=5,T=ie=>{const ce=ie.clientX-Gt.x,ae=ie.clientY-Gt.y,oe=Math.sqrt(ce*ce+ae*ae);if(!Vt&&oe>x&&qr(!0),Vt||oe>x){let Ce=Gt.toolbarX+ce,Ye=Gt.toolbarY+ae;const we=20,he=257,Ee=44,ot=44;if(g)Ce=Math.max(we,Math.min(window.innerWidth-he-we,Ce));else{const Le=he-Ee,ke=we-Le,Mt=window.innerWidth-we-Le-Ee;Ce=Math.max(ke,Math.min(Mt,Ce))}Ye=Math.max(we,Math.min(window.innerHeight-ot-we,Ye)),Zr({x:Ce,y:Ye})}},H=()=>{Vt&&(gr.current=!0,setTimeout(()=>{gr.current=!1},50)),qr(!1),gn(null)};return document.addEventListener("mousemove",T),document.addEventListener("mouseup",H),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)}},[Gt,Vt,g]);const ts=j.useCallback(x=>{if(x.target.closest("button")||x.target.closest(`.${C.settingsPanel}`))return;const T=x.currentTarget.parentElement;if(!T)return;const H=T.getBoundingClientRect(),ie=(Je==null?void 0:Je.x)??H.left,ce=(Je==null?void 0:Je.y)??H.top,ae=(Math.random()-.5)*10;eo(ae),gn({x:x.clientX,y:x.clientY,toolbarX:ie,toolbarY:ce})},[Je]);if(j.useEffect(()=>{if(!Je)return;const x=()=>{let ae=Je.x,oe=Je.y;if(g)ae=Math.max(20,Math.min(window.innerWidth-257-20,ae));else{const we=window.innerWidth-20-213-44;ae=Math.max(-193,Math.min(we,ae))}oe=Math.max(20,Math.min(window.innerHeight-44-20,oe)),(ae!==Je.x||oe!==Je.y)&&Zr({x:ae,y:oe})};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[Je,g]),j.useEffect(()=>{const x=T=>{T.key==="Escape"&&(D||g&&y(!1))};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[g,D]),!_)return null;const br=m.length>0,Pt=m.filter(x=>!no.has(x.id)),ao=m.filter(x=>no.has(x.id)),uo=x=>{const ae=x.x/100*window.innerWidth,oe=typeof x.y=="string"?parseFloat(x.y):x.y,Ce={};window.innerHeight-oe-22-10<80&&(Ce.top="auto",Ce.bottom="calc(100% + 10px)");const we=ae-200/2,he=10;if(we<he){const Ee=he-we;Ce.left=`calc(50% + ${Ee}px)`}else if(we+200>window.innerWidth-he){const Ee=we+200-(window.innerWidth-he);Ce.left=`calc(50% - ${Ee}px)`}return Ce};return Op.createPortal(s.jsxs(s.Fragment,{children:[s.jsx("div",{className:C.toolbar,"data-feedback-toolbar":!0,style:Je?{left:Je.x,top:Je.y,right:"auto",bottom:"auto"}:void 0,children:s.jsxs("div",{className:`${C.toolbarContainer} ${Pe?"":C.light} ${g?C.expanded:C.collapsed} ${Qn?C.entrance:""} ${Vt?C.dragging:""}`,onClick:g?void 0:x=>{if(gr.current){x.preventDefault();return}y(!0)},onMouseDown:ts,role:g?void 0:"button",tabIndex:g?-1:0,title:g?void 0:"Start feedback mode",style:Vt?{transform:`scale(1.05) rotate(${yn}deg)`,cursor:"grabbing"}:void 0,children:[s.jsxs("div",{className:`${C.toggleContent} ${g?C.hidden:C.visible}`,children:[s.jsx(Rp,{size:24}),br&&s.jsx("span",{className:`${C.badge} ${g?C.fadeOut:""} ${Qn?C.entrance:""}`,style:{backgroundColor:K.annotationColor},children:m.length})]}),s.jsxs("div",{className:`${C.controlsContent} ${g?C.visible:C.hidden}`,children:[s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),Zn()},title:E?"Resume animations":"Pause animations","data-active":E,children:s.jsx(Yp,{size:24,isPaused:E})}),s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),S(!N)},disabled:!br,title:N?"Hide markers":"Show markers",children:s.jsx(Fp,{size:24,isOpen:N})}),s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),es()},disabled:!br,title:"Copy feedback","data-active":pe,children:s.jsx($p,{size:24,copied:pe})}),s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),er()},disabled:!br,title:"Clear all","data-danger":!0,children:s.jsx(Up,{size:24})}),s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),ve(!ee)},title:"Settings",children:s.jsx(Bp,{size:24})}),s.jsx("div",{className:`${C.divider} ${Pe?"":C.light}`}),s.jsx("button",{className:`${C.controlButton} ${Pe?"":C.light}`,onClick:x=>{x.stopPropagation(),y(!1)},title:"Exit feedback mode",children:s.jsx(Wp,{size:24})})]}),s.jsxs("div",{className:`${C.settingsPanel} ${Pe?C.dark:C.light} ${Oe?C.enter:C.exit}`,onClick:x=>x.stopPropagation(),style:Je&&Je.y<230?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,children:[s.jsxs("div",{className:C.settingsHeader,children:[s.jsxs("span",{className:C.settingsBrand,children:[s.jsx("span",{className:C.settingsBrandSlash,style:{color:K.annotationColor,transition:"color 0.2s ease"},children:"/"}),"agentation"]}),s.jsxs("span",{className:C.settingsVersion,children:["v","1.1.1"]}),s.jsx("button",{className:C.themeToggle,onClick:()=>Jr(!Pe),title:Pe?"Switch to light mode":"Switch to dark mode",children:Pe?s.jsx(Hp,{size:14}):s.jsx(Xp,{size:14})})]}),s.jsx("div",{className:C.settingsSection,children:s.jsxs("div",{className:C.settingsRow,children:[s.jsxs("div",{className:`${C.settingsLabel} ${Pe?"":C.light}`,children:["Output Detail",s.jsx("span",{className:C.helpIcon,"data-tooltip":"Controls how much detail is included in the copied output",children:s.jsx(Ec,{size:20})})]}),s.jsxs("button",{className:`${C.cycleButton} ${Pe?"":C.light}`,onClick:()=>{const T=(Ho.findIndex(H=>H.value===K.outputDetail)+1)%Ho.length;tt(H=>({...H,outputDetail:Ho[T].value}))},children:[s.jsx("span",{className:C.cycleButtonText,children:(Vo=Ho.find(x=>x.value===K.outputDetail))==null?void 0:Vo.label},K.outputDetail),s.jsx("span",{className:C.cycleDots,children:Ho.map((x,T)=>s.jsx("span",{className:`${C.cycleDot} ${Pe?"":C.light} ${K.outputDetail===x.value?C.active:""}`},x.value))})]})]})}),s.jsxs("div",{className:C.settingsSection,children:[s.jsx("div",{className:`${C.settingsLabel} ${C.settingsLabelMarker} ${Pe?"":C.light}`,children:"Marker Colour"}),s.jsx("div",{className:C.colorOptions,children:em.map(x=>s.jsx("div",{onClick:()=>tt(T=>({...T,annotationColor:x.value})),style:{borderColor:K.annotationColor===x.value?x.value:"transparent"},className:`${C.colorOptionRing} ${K.annotationColor===x.value?C.selected:""}`,children:s.jsx("div",{className:`${C.colorOption} ${K.annotationColor===x.value?C.selected:""}`,style:{backgroundColor:x.value},title:x.label})},x.value))})]}),s.jsxs("div",{className:C.settingsSection,children:[s.jsxs("label",{className:C.settingsToggle,children:[s.jsx("input",{type:"checkbox",id:"autoClearAfterCopy",checked:K.autoClearAfterCopy,onChange:x=>tt(T=>({...T,autoClearAfterCopy:x.target.checked}))}),s.jsx("label",{className:`${C.customCheckbox} ${K.autoClearAfterCopy?C.checked:""}`,htmlFor:"autoClearAfterCopy",children:K.autoClearAfterCopy&&s.jsx(Lc,{size:14})}),s.jsxs("span",{className:`${C.toggleLabel} ${Pe?"":C.light}`,children:["Clear after output",s.jsx("span",{className:C.helpIcon,"data-tooltip":"Automatically clear annotations after copying",children:s.jsx(Ec,{size:20})})]})]}),s.jsxs("label",{className:C.settingsToggle,children:[s.jsx("input",{type:"checkbox",id:"blockInteractions",checked:K.blockInteractions,onChange:x=>tt(T=>({...T,blockInteractions:x.target.checked}))}),s.jsx("label",{className:`${C.customCheckbox} ${K.blockInteractions?C.checked:""}`,htmlFor:"blockInteractions",children:K.blockInteractions&&s.jsx(Lc,{size:14})}),s.jsx("span",{className:`${C.toggleLabel} ${Pe?"":C.light}`,children:"Block page interactions"})]})]})]})]})}),s.jsxs("div",{className:C.markersLayer,"data-feedback-toolbar":!0,children:[R&&Pt.filter(x=>!x.isFixed).map((x,T)=>{const H=!L&&$e===x.id,ie=et===x.id,ce=H||ie,ae=x.isMultiSelect,oe=ae?"#34C759":K.annotationColor,Ce=m.findIndex(he=>he.id===x.id),Ye=!to.has(x.id),we=L?C.exit:me?C.clearing:Ye?C.enter:"";return s.jsxs("div",{className:`${C.marker} ${ce?C.hovered:""} ${ae?C.multiSelect:""} ${we}`,"data-annotation-marker":!0,style:{left:`${x.x}%`,top:x.y,backgroundColor:ce?void 0:oe,animationDelay:L?`${(Pt.length-1-T)*20}ms`:`${T*20}ms`},onMouseEnter:()=>!L&&x.id!==kn.current&&De(x.id),onMouseLeave:()=>De(null),onClick:he=>{he.stopPropagation(),L||Qo(x.id)},onContextMenu:he=>{he.preventDefault(),he.stopPropagation(),L||Sn(x)},children:[ce?s.jsx(Tc,{size:ae?18:16}):s.jsx("span",{className:_e!==null&&Ce>=_e?C.renumber:void 0,children:Ce+1}),H&&!re&&s.jsxs("div",{className:`${C.markerTooltip} ${Pe?"":C.light} ${C.enter}`,style:uo(x),children:[s.jsxs("span",{className:C.markerQuote,children:[x.element,x.selectedText&&` "${x.selectedText.slice(0,30)}${x.selectedText.length>30?"...":""}"`]}),s.jsx("span",{className:C.markerNote,children:x.comment})]})]},x.id)}),R&&!L&&ao.filter(x=>!x.isFixed).map(x=>{const T=x.isMultiSelect;return s.jsx("div",{className:`${C.marker} ${C.hovered} ${T?C.multiSelect:""} ${C.exit}`,"data-annotation-marker":!0,style:{left:`${x.x}%`,top:x.y},children:s.jsx(Tc,{size:T?12:10})},x.id)})]}),s.jsxs("div",{className:C.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[R&&Pt.filter(x=>x.isFixed).map((x,T)=>{const H=Pt.filter(Ee=>Ee.isFixed),ie=!L&&$e===x.id,ce=et===x.id,ae=ie||ce,oe=x.isMultiSelect,Ce=oe?"#34C759":K.annotationColor,Ye=m.findIndex(Ee=>Ee.id===x.id),we=!to.has(x.id),he=L?C.exit:me?C.clearing:we?C.enter:"";return s.jsxs("div",{className:`${C.marker} ${C.fixed} ${ae?C.hovered:""} ${oe?C.multiSelect:""} ${he}`,"data-annotation-marker":!0,style:{left:`${x.x}%`,top:x.y,backgroundColor:ae?void 0:Ce,animationDelay:L?`${(H.length-1-T)*20}ms`:`${T*20}ms`},onMouseEnter:()=>!L&&x.id!==kn.current&&De(x.id),onMouseLeave:()=>De(null),onClick:Ee=>{Ee.stopPropagation(),L||Qo(x.id)},onContextMenu:Ee=>{Ee.preventDefault(),Ee.stopPropagation(),L||Sn(x)},children:[ae?s.jsx(Nc,{size:oe?12:10}):s.jsx("span",{className:_e!==null&&Ye>=_e?C.renumber:void 0,children:Ye+1}),ie&&!re&&s.jsxs("div",{className:`${C.markerTooltip} ${Pe?"":C.light} ${C.enter}`,style:uo(x),children:[s.jsxs("span",{className:C.markerQuote,children:[x.element,x.selectedText&&` "${x.selectedText.slice(0,30)}${x.selectedText.length>30?"...":""}"`]}),s.jsx("span",{className:C.markerNote,children:x.comment})]})]},x.id)}),R&&!L&&ao.filter(x=>x.isFixed).map(x=>{const T=x.isMultiSelect;return s.jsx("div",{className:`${C.marker} ${C.fixed} ${C.hovered} ${T?C.multiSelect:""} ${C.exit}`,"data-annotation-marker":!0,style:{left:`${x.x}%`,top:x.y},children:s.jsx(Nc,{size:T?12:10})},x.id)})]}),g&&s.jsxs("div",{className:C.overlay,"data-feedback-toolbar":!0,style:D||re?{zIndex:99999}:void 0,children:[(z==null?void 0:z.rect)&&!D&&!V&&!Ft&&s.jsx("div",{className:`${C.hoverHighlight} ${C.enter}`,style:{left:z.rect.left,top:z.rect.top,width:z.rect.width,height:z.rect.height,borderColor:`${K.annotationColor}80`,backgroundColor:`${K.annotationColor}0A`}}),$e&&!D&&(()=>{const x=m.find(ie=>ie.id===$e);if(!(x!=null&&x.boundingBox))return null;const T=x.boundingBox,H=x.isMultiSelect;return s.jsx("div",{className:`${H?C.multiSelectOutline:C.singleSelectOutline} ${C.enter}`,style:{left:T.x,top:T.y-Se,width:T.width,height:T.height,...H?{}:{borderColor:`${K.annotationColor}99`,backgroundColor:`${K.annotationColor}0D`}}})})(),z&&!D&&!V&&!Ft&&s.jsx("div",{className:`${C.hoverTooltip} ${C.enter}`,style:{left:Math.max(8,Math.min(U.x,window.innerWidth-100)),top:Math.max(U.y-32,8)},children:z.element}),D&&s.jsxs(s.Fragment,{children:[D.boundingBox&&s.jsx("div",{className:`${D.isMultiSelect?C.multiSelectOutline:C.singleSelectOutline} ${xn?C.exit:C.enter}`,style:{left:D.boundingBox.x,top:D.boundingBox.y-Se,width:D.boundingBox.width,height:D.boundingBox.height,...D.isMultiSelect?{}:{borderColor:`${K.annotationColor}99`,backgroundColor:`${K.annotationColor}0D`}}}),s.jsx("div",{className:`${C.marker} ${C.pending} ${D.isMultiSelect?C.multiSelect:""} ${xn?C.exit:C.enter}`,style:{left:`${D.x}%`,top:D.clientY,backgroundColor:D.isMultiSelect?"#34C759":K.annotationColor},children:s.jsx(Dp,{size:12})}),s.jsx(jc,{ref:oo,element:D.element,selectedText:D.selectedText,placeholder:D.element==="Area selection"?"What should change in this area?":D.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:io,onCancel:qn,isExiting:xn,lightMode:!Pe,accentColor:D.isMultiSelect?"#34C759":K.annotationColor,style:{left:Math.max(160,Math.min(window.innerWidth-160,D.x/100*window.innerWidth)),top:Math.max(20,Math.min(D.clientY+20,window.innerHeight-180))}})]}),re&&s.jsxs(s.Fragment,{children:[re.boundingBox&&s.jsx("div",{className:`${re.isMultiSelect?C.multiSelectOutline:C.singleSelectOutline} ${C.enter}`,style:{left:re.boundingBox.x,top:re.boundingBox.y-Se,width:re.boundingBox.width,height:re.boundingBox.height,...re.isMultiSelect?{}:{borderColor:`${K.annotationColor}99`,backgroundColor:`${K.annotationColor}0D`}}}),s.jsx(jc,{ref:lo,element:re.element,selectedText:re.selectedText,placeholder:"Edit your feedback...",initialValue:re.comment,submitLabel:"Save",onSubmit:kr,onCancel:wr,isExiting:Kn,lightMode:!Pe,accentColor:re.isMultiSelect?"#34C759":K.annotationColor,style:{left:Math.max(160,Math.min(window.innerWidth-160,re.x/100*window.innerWidth)),top:Math.max(20,Math.min((re.isFixed?re.y:re.y-Se)+20,window.innerHeight-180))}})]}),Ft&&s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:on,className:C.dragSelection}),s.jsx("div",{ref:ln,className:C.highlightsContainer})]})]})]}),document.body)}Df.createRoot(document.getElementById("root")).render(s.jsxs(Pf.StrictMode,{children:[s.jsx(zp,{}),s.jsx(rm,{})]}));
