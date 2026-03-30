(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ea(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const rt={},er=[],Sn=()=>{},ru=()=>!1,Ks=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ya=n=>n.startsWith("onUpdate:"),Mt=Object.assign,Ta=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jf=Object.prototype.hasOwnProperty,Je=(n,e)=>Jf.call(n,e),Fe=Array.isArray,tr=n=>Xr(n)==="[object Map]",su=n=>Xr(n)==="[object Set]",rl=n=>Xr(n)==="[object Date]",He=n=>typeof n=="function",dt=n=>typeof n=="string",yn=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",ou=n=>(nt(n)||He(n))&&He(n.then)&&He(n.catch),au=Object.prototype.toString,Xr=n=>au.call(n),Qf=n=>Xr(n).slice(8,-1),lu=n=>Xr(n)==="[object Object]",ba=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,wr=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},eh=/-\w/g,ln=$s(n=>n.replace(eh,e=>e.slice(1).toUpperCase())),th=/\B([A-Z])/g,oi=$s(n=>n.replace(th,"-$1").toLowerCase()),cu=$s(n=>n.charAt(0).toUpperCase()+n.slice(1)),po=$s(n=>n?`on${cu(n)}`:""),xn=(n,e)=>!Object.is(n,e),Rs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},uu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Aa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sl;const Zs=()=>sl||(sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?sh(i):wa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||nt(n))return n}const nh=/;(?![^(]*\))/g,ih=/:([^]+)/,rh=/\/\*[^]*?\*\//g;function sh(n){const e={};return n.replace(rh,"").split(nh).forEach(t=>{if(t){const i=t.split(ih);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Js(n){let e="";if(dt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Js(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=Ea(oh);function fu(n){return!!n||n===""}function lh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ra(n[i],e[i]);return t}function Ra(n,e){if(n===e)return!0;let t=rl(n),i=rl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=yn(n),i=yn(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?lh(n,e):!1;if(t=nt(n),i=nt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ra(n[a],e[a]))return!1}}return String(n)===String(e)}const hu=n=>!!(n&&n.__v_isRef===!0),vi=n=>dt(n)?n:n==null?"":Fe(n)||nt(n)&&(n.toString===au||!He(n.toString))?hu(n)?vi(n.value):JSON.stringify(n,du,2):String(n),du=(n,e)=>hu(e)?du(n,e.value):tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[mo(i,s)+" =>"]=r,t),{})}:su(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>mo(t))}:yn(e)?mo(e):nt(e)&&!Fe(e)&&!lu(e)?String(e):e,mo=(n,e="")=>{var t;return yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class ch{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ft;try{return Ft=this,e()}finally{Ft=t}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function uh(){return Ft}let ot;const _o=new WeakSet;class pu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_o.has(this)&&(_o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_u(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ol(this),gu(this);const e=ot,t=cn;ot=this,cn=!0;try{return this.fn()}finally{vu(this),ot=e,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)La(e);this.deps=this.depsTail=void 0,ol(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ta(this)&&this.run()}get dirty(){return ta(this)}}let mu=0,Rr,Cr;function _u(n,e=!1){if(n.flags|=8,e){n.next=Cr,Cr=n;return}n.next=Rr,Rr=n}function Ca(){mu++}function Pa(){if(--mu>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rr;){let e=Rr;for(Rr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function gu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),La(i),fh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ta(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function xu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Or)||(n.globalVersion=Or,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ta(n))))return;n.flags|=2;const e=n.dep,t=ot,i=cn;ot=n,cn=!0;try{gu(n);const r=n.fn(n._value);(e.version===0||xn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,cn=i,vu(n),n.flags&=-3}}function La(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)La(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cn=!0;const Mu=[];function Gn(){Mu.push(cn),cn=!1}function Vn(){const n=Mu.pop();cn=n===void 0?!0:n}function ol(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let Or=0;class hh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Da{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ot||!cn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new hh(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,Su(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,Or++,this.notify(e)}notify(e){Ca();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Pa()}}}function Su(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Su(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const na=new WeakMap,Ei=Symbol(""),ia=Symbol(""),Br=Symbol("");function yt(n,e,t){if(cn&&ot){let i=na.get(n);i||na.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Da),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const a=na.get(n);if(!a){Or++;return}const o=l=>{l&&l.trigger()};if(Ca(),e==="clear")a.forEach(o);else{const l=Fe(n),c=l&&ba(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Br||!yn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Br)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ei)),tr(n)&&o(a.get(ia)));break;case"delete":l||(o(a.get(Ei)),tr(n)&&o(a.get(ia)));break;case"set":tr(n)&&o(a.get(Ei));break}}Pa()}function Pi(n){const e=Ze(n);return e===n?e:(yt(e,"iterate",Br),tn(n)?e:e.map(hn))}function Qs(n){return yt(n=Ze(n),"iterate",Br),n}function _n(n,e){return kn(n)?or(yi(n)?hn(e):e):hn(e)}const dh={__proto__:null,[Symbol.iterator](){return go(this,Symbol.iterator,n=>_n(this,n))},concat(...n){return Pi(this).concat(...n.map(e=>Fe(e)?Pi(e):e))},entries(){return go(this,"entries",n=>(n[1]=_n(this,n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(i=>_n(this,i)),arguments)},find(n,e){return An(this,"find",n,e,t=>_n(this,t),arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,t=>_n(this,t),arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return vo(this,"includes",n)},indexOf(...n){return vo(this,"indexOf",n)},join(n){return Pi(this).join(n)},lastIndexOf(...n){return vo(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...e){return al(this,"reduce",n,e)},reduceRight(n,...e){return al(this,"reduceRight",n,e)},shift(){return _r(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return Pi(this).toReversed()},toSorted(n){return Pi(this).toSorted(n)},toSpliced(...n){return Pi(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return go(this,"values",n=>_n(this,n))}};function go(n,e,t){const i=Qs(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ph=Array.prototype;function An(n,e,t,i,r,s){const a=Qs(n),o=a!==n&&!tn(n),l=a[e];if(l!==ph[e]){const f=l.apply(n,s);return o?hn(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,_n(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function al(n,e,t,i){const r=Qs(n),s=r!==n&&!tn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=_n(n,c)),t.call(this,c,_n(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?_n(n,l):l}function vo(n,e,t){const i=Ze(n);yt(i,"iterate",Br);const r=i[e](...t);return(r===-1||r===!1)&&Fa(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function _r(n,e,t=[]){Gn(),Ca();const i=Ze(n)[e].apply(n,t);return Pa(),Vn(),i}const mh=Ea("__proto__,__v_isRef,__isVue"),Eu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yn));function _h(n){yn(n)||(n=String(n));const e=Ze(this);return yt(e,"has",n),e.hasOwnProperty(n)}class yu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ah:wu:s?Au:bu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!r){let l;if(a&&(l=dh[t]))return l;if(t==="hasOwnProperty")return _h}const o=Reflect.get(e,t,Tt(e)?e:i);if((yn(t)?Eu.has(t):mh(t))||(r||yt(e,"get",t),s))return o;if(Tt(o)){const l=a&&ba(t)?o:o.value;return r&&nt(l)?sa(l):l}return nt(o)?r?sa(o):Ia(o):o}}class Tu extends yu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Fe(e)&&ba(t);if(!this._isShallow){const c=kn(s);if(!tn(i)&&!kn(i)&&(s=Ze(s),i=Ze(i)),!a&&Tt(s)&&!Tt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Je(e,t),l=Reflect.set(e,t,i,Tt(e)?e:r);return e===Ze(r)&&(o?xn(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),l}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!yn(t)||!Eu.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",Fe(e)?"length":Ei),Reflect.ownKeys(e)}}class gh extends yu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vh=new Tu,xh=new gh,Mh=new Tu(!0);const ra=n=>n,Qr=n=>Reflect.getPrototypeOf(n);function Sh(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=tr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ra:e?or:hn;return!e&&yt(s,"iterate",l?ia:Ei),Mt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function es(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Eh(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(xn(r,o)&&yt(a,"get",r),yt(a,"get",o));const{has:l}=Qr(a),c=e?ra:n?or:hn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&yt(Ze(r),"iterate",Ei),r.size},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(xn(r,o)&&yt(a,"has",r),yt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?ra:n?or:hn;return!n&&yt(l,"iterate",Ei),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Mt(t,n?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){const s=Ze(this),a=Qr(s),o=Ze(r),l=!e&&!tn(r)&&!kn(r)?o:r;return a.has.call(s,l)||xn(r,l)&&a.has.call(s,r)||xn(o,l)&&a.has.call(s,o)||(s.add(l),Nn(s,"add",l,l)),this},set(r,s){!e&&!tn(s)&&!kn(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=Qr(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?xn(s,u)&&Nn(a,"set",r,s):Nn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=Qr(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Nn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&Nn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sh(r,n,e)}),t}function Ua(n,e){const t=Eh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const yh={get:Ua(!1,!1)},Th={get:Ua(!1,!0)},bh={get:Ua(!0,!1)};const bu=new WeakMap,Au=new WeakMap,wu=new WeakMap,Ah=new WeakMap;function wh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rh(n){return n.__v_skip||!Object.isExtensible(n)?0:wh(Qf(n))}function Ia(n){return kn(n)?n:Na(n,!1,vh,yh,bu)}function Ch(n){return Na(n,!1,Mh,Th,Au)}function sa(n){return Na(n,!0,xh,bh,wu)}function Na(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Rh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function yi(n){return kn(n)?yi(n.__v_raw):!!(n&&n.__v_isReactive)}function kn(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function Fa(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Ph(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&uu(n,"__v_skip",!0),n}const hn=n=>nt(n)?Ia(n):n,or=n=>nt(n)?sa(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function jt(n){return Lh(n,!1)}function Lh(n,e){return Tt(n)?n:new Dh(n,e)}class Dh{constructor(e,t){this.dep=new Da,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||kn(e);e=i?e:Ze(e),xn(e,t)&&(this._rawValue=e,this._value=i?e:hn(e),this.dep.trigger())}}function Uh(n){return Tt(n)?n.value:n}const Ih={get:(n,e,t)=>e==="__v_raw"?n:Uh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ru(n){return yi(n)?n:new Proxy(n,Ih)}class Nh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Da(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Or-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return _u(this,!0),!0}get value(){const e=this.dep.track();return xu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fh(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new Nh(i,r,t)}const ts={},Is=new WeakMap;let mi;function Oh(n,e=!1,t=mi){if(t){let i=Is.get(t);i||Is.set(t,i=[]),i.push(n)}}function Bh(n,e,t=rt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:tn(T)||r===!1||r===0?Fn(T,1):Fn(T);let u,f,d,m,x=!1,g=!1;if(Tt(n)?(f=()=>n.value,x=tn(n)):yi(n)?(f=()=>c(n),x=!0):Fe(n)?(g=!0,x=n.some(T=>yi(T)||tn(T)),f=()=>n.map(T=>{if(Tt(T))return T.value;if(yi(T))return c(T);if(He(T))return l?l(T,2):T()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Gn();try{d()}finally{Vn()}}const T=mi;mi=u;try{return l?l(n,3,[m]):n(m)}finally{mi=T}}:f=Sn,e&&r){const T=f,w=r===!0?1/0:r;f=()=>Fn(T(),w)}const p=uh(),h=()=>{u.stop(),p&&p.active&&Ta(p.effects,u)};if(s&&e){const T=e;e=(...w)=>{T(...w),h()}}let b=g?new Array(n.length).fill(ts):ts;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const w=u.run();if(r||x||(g?w.some((P,C)=>xn(P,b[C])):xn(w,b))){d&&d();const P=mi;mi=u;try{const C=[w,b===ts?void 0:g&&b[0]===ts?[]:b,m];b=w,l?l(e,3,C):e(...C)}finally{mi=P}}}else u.run()};return o&&o(E),u=new pu(f),u.scheduler=a?()=>a(E,!1):E,m=T=>Oh(T,!1,u),d=u.onStop=()=>{const T=Is.get(u);if(T){if(l)l(T,4);else for(const w of T)w();Is.delete(u)}},e?i?E(!0):b=u.run():a?a(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Fn(n,e=1/0,t){if(e<=0||!nt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Tt(n))Fn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Fn(n[i],e,t);else if(su(n)||tr(n))n.forEach(i=>{Fn(i,e,t)});else if(lu(n)){for(const i in n)Fn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(n,e,t,i){try{return i?n(...i):n()}catch(r){eo(r,e,t)}}function Tn(n,e,t,i){if(He(n)){const r=qr(n,e,t,i);return r&&ou(r)&&r.catch(s=>{eo(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function eo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||rt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Gn(),qr(s,null,10,[n,l,c]),Vn();return}}zh(n,t,r,i,a)}function zh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let mn=-1;const nr=[];let Jn=null,Zi=0;const Cu=Promise.resolve();let Ns=null;function Pu(n){const e=Ns||Cu;return n?e.then(this?n.bind(this):n):e}function Hh(n){let e=mn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Oa(n){if(!(n.flags&1)){const e=zr(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=zr(t)?Lt.push(n):Lt.splice(Hh(e),0,n),n.flags|=1,Lu()}}function Lu(){Ns||(Ns=Cu.then(Uu))}function Gh(n){Fe(n)?nr.push(...n):Jn&&n.id===-1?Jn.splice(Zi+1,0,n):n.flags&1||(nr.push(n),n.flags|=1),Lu()}function ll(n,e,t=mn+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Du(n){if(nr.length){const e=[...new Set(nr)].sort((t,i)=>zr(t)-zr(i));if(nr.length=0,Jn){Jn.push(...e);return}for(Jn=e,Zi=0;Zi<Jn.length;Zi++){const t=Jn[Zi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jn=null,Zi=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uu(n){try{for(mn=0;mn<Lt.length;mn++){const e=Lt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<Lt.length;mn++){const e=Lt[mn];e&&(e.flags&=-2)}mn=-1,Lt.length=0,Du(),Ns=null,(Lt.length||nr.length)&&Uu()}}let en=null,Iu=null;function Fs(n){const e=en;return en=n,Iu=n&&n.type.__scopeId||null,e}function Vh(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&xl(-1);const s=Fs(e);let a;try{a=n(...r)}finally{Fs(s),i._d&&xl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Nu(n,e){if(en===null)return n;const t=ro(en),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=rt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&Fn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Gn(),Tn(l,t,8,[n.el,o,n,e]),Vn())}}function kh(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function Cs(n,e,t=!1){const i=Vd();if(i||ir){let r=ir?ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const Wh=Symbol.for("v-scx"),Xh=()=>Cs(Wh);function Ps(n,e,t){return Fu(n,e,t)}function Fu(n,e,t=rt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let c;if(Gr){if(s==="sync"){const m=Xh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Sn,m.resume=Sn,m.pause=Sn,m}}const u=It;o.call=(m,x,g)=>Tn(m,u,x,g);let f=!1;s==="post"?o.scheduler=m=>{Nt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():Oa(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Bh(n,e,o);return Gr&&(c?c.push(d):l&&d()),d}function qh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Ou(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const a=Yr(this),o=Fu(r,s.bind(i),t);return a(),o}function Ou(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Yh=Symbol("_vte"),jh=n=>n.__isTeleport,Kh=Symbol("_leaveCb");function Ba(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ba(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function za(n,e){return He(n)?Mt({name:n.name},e,{setup:n}):n}function Bu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function cl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Os=new WeakMap;function Pr(n,e,t,i,r=!1){if(Fe(n)){n.forEach((g,p)=>Pr(g,e&&(Fe(e)?e[p]:e),t,i,r));return}if(Lr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Pr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ro(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===rt?o.refs={}:o.refs,f=o.setupState,d=Ze(f),m=f===rt?ru:g=>cl(u,g)?!1:Je(d,g),x=(g,p)=>!(p&&cl(u,p));if(c!=null&&c!==l){if(ul(e),dt(c))u[c]=null,m(c)&&(f[c]=null);else if(Tt(c)){const g=e;x(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(He(l))qr(l,o,12,[a,u]);else{const g=dt(l),p=Tt(l);if(g||p){const h=()=>{if(n.f){const b=g?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)Fe(b)&&Ta(b,s);else if(Fe(b))b.includes(s)||b.push(s);else if(g)u[l]=[s],m(l)&&(f[l]=u[l]);else{const E=[s];x(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else g?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{h(),Os.delete(n)};b.id=-1,Os.set(n,b),Nt(b,t)}else ul(n),h()}}}function ul(n){const e=Os.get(n);e&&(e.flags|=8,Os.delete(n))}Zs().requestIdleCallback;Zs().cancelIdleCallback;const Lr=n=>!!n.type.__asyncLoader,zu=n=>n.type.__isKeepAlive;function $h(n,e){Hu(n,"a",e)}function Zh(n,e){Hu(n,"da",e)}function Hu(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(to(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zu(r.parent.vnode)&&Jh(i,e,t,r),r=r.parent}}function Jh(n,e,t,i){const r=to(e,n,i,!0);Gu(()=>{Ta(i[e],r)},t)}function to(n,e,t=It,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Gn();const o=Yr(t),l=Tn(e,t,n,a);return o(),Vn(),l});return i?r.unshift(s):r.push(s),s}}const Xn=n=>(e,t=It)=>{(!Gr||n==="sp")&&to(n,(...i)=>e(...i),t)},Qh=Xn("bm"),Bs=Xn("m"),ed=Xn("bu"),td=Xn("u"),nd=Xn("bum"),Gu=Xn("um"),id=Xn("sp"),rd=Xn("rtg"),sd=Xn("rtc");function od(n,e=It){to("ec",n,e)}const ad=Symbol.for("v-ndc");function Vu(n,e,t,i){let r;const s=t,a=Fe(n);if(a||dt(n)){const o=a&&yi(n);let l=!1,c=!1;o&&(l=!tn(n),c=kn(n),n=Qs(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?or(hn(n[u])):hn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const oa=n=>n?uf(n)?ro(n):oa(n.parent):null,Dr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>oa(n.parent),$root:n=>oa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wu(n),$forceUpdate:n=>n.f||(n.f=()=>{Oa(n.update)}),$nextTick:n=>n.n||(n.n=Pu.bind(n.proxy)),$watch:n=>qh.bind(n)}),xo=(n,e)=>n!==rt&&!n.__isScriptSetup&&Je(n,e),ld={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(xo(i,e))return a[e]=1,i[e];if(r!==rt&&Je(r,e))return a[e]=2,r[e];if(Je(s,e))return a[e]=3,s[e];if(t!==rt&&Je(t,e))return a[e]=4,t[e];aa&&(a[e]=0)}}const c=Dr[e];let u,f;if(c)return e==="$attrs"&&yt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==rt&&Je(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return xo(r,e)?(r[e]=t,!0):i!==rt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==rt&&o[0]!=="$"&&Je(n,o)||xo(e,o)||Je(s,o)||Je(i,o)||Je(Dr,o)||Je(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function fl(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let aa=!0;function cd(n){const e=Wu(n),t=n.proxy,i=n.ctx;aa=!1,e.beforeCreate&&hl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:g,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:E,unmounted:T,render:w,renderTracked:P,renderTriggered:C,errorCaptured:$,serverPrefetch:y,expose:A,inheritAttrs:ie,components:ce,directives:fe,filters:N}=e;if(c&&ud(c,i,null),a)for(const V in a){const re=a[V];He(re)&&(i[V]=re.bind(t))}if(r){const V=r.call(t,t);nt(V)&&(n.data=Ia(V))}if(aa=!0,s)for(const V in s){const re=s[V],le=He(re)?re.bind(t,t):He(re.get)?re.get.bind(t,t):Sn,ae=!He(re)&&He(re.set)?re.set.bind(t):Sn,F=hf({get:le,set:ae});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>F.value,set:I=>F.value=I})}if(o)for(const V in o)ku(o[V],i,t,V);if(l){const V=He(l)?l.call(t):l;Reflect.ownKeys(V).forEach(re=>{kh(re,V[re])})}u&&hl(u,n,"c");function Y(V,re){Fe(re)?re.forEach(le=>V(le.bind(t))):re&&V(re.bind(t))}if(Y(Qh,f),Y(Bs,d),Y(ed,m),Y(td,x),Y($h,g),Y(Zh,p),Y(od,$),Y(sd,P),Y(rd,C),Y(nd,b),Y(Gu,T),Y(id,y),Fe(A))if(A.length){const V=n.exposed||(n.exposed={});A.forEach(re=>{Object.defineProperty(V,re,{get:()=>t[re],set:le=>t[re]=le,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Sn&&(n.render=w),ie!=null&&(n.inheritAttrs=ie),ce&&(n.components=ce),fe&&(n.directives=fe),y&&Bu(n)}function ud(n,e,t=Sn){Fe(n)&&(n=la(n));for(const i in n){const r=n[i];let s;nt(r)?"default"in r?s=Cs(r.from||i,r.default,!0):s=Cs(r.from||i):s=Cs(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function hl(n,e,t){Tn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ku(n,e,t,i){let r=i.includes(".")?Ou(t,i):()=>t[i];if(dt(n)){const s=e[n];He(s)&&Ps(r,s)}else if(He(n))Ps(r,n.bind(t));else if(nt(n))if(Fe(n))n.forEach(s=>ku(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Ps(r,s,n)}}function Wu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>zs(l,c,a,!0)),zs(l,e,a)),nt(e)&&s.set(e,l),l}function zs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&zs(n,s,t,!0),r&&r.forEach(a=>zs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=fd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const fd={data:dl,props:pl,emits:pl,methods:br,computed:br,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:br,directives:br,watch:dd,provide:dl,inject:hd};function dl(n,e){return e?n?function(){return Mt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function hd(n,e){return br(la(n),la(e))}function la(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function br(n,e){return n?Mt(Object.create(null),n,e):e}function pl(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Mt(Object.create(null),fl(n),fl(e??{})):e}function dd(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function Xu(){return{app:null,config:{isNativeTag:ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pd=0;function md(n,e){return function(i,r=null){He(i)||(i=Mt({},i)),r!=null&&!nt(r)&&(r=null);const s=Xu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:pd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jd,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&He(u.install)?(a.add(u),u.install(c,...f)):He(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||un(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,ro(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ir;ir=c;try{return u()}finally{ir=f}}};return c}}let ir=null;const _d=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${oi(e)}Modifiers`];function gd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let r=t;const s=e.startsWith("update:"),a=s&&_d(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>dt(u)?u.trim():u)),a.number&&(r=t.map(Aa)));let o,l=i[o=po(e)]||i[o=po(ln(e))];!l&&s&&(l=i[o=po(oi(e))]),l&&Tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,r)}}const vd=new WeakMap;function qu(n,e,t=!1){const i=t?vd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!He(n)){const l=c=>{const u=qu(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(nt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):Mt(a,s),nt(n)&&i.set(n,a),a)}function no(n,e){return!n||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,oi(e))||Je(n,e))}function ml(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:g}=n,p=Fs(n);let h,b;try{if(t.shapeFlag&4){const T=r||i,w=T;h=gn(c.call(w,T,u,f,m,d,x)),b=o}else{const T=e;h=gn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),b=e.props?o:xd(o)}}catch(T){Ur.length=0,eo(T,n,1),h=un(ri)}let E=h;if(b&&g!==!1){const T=Object.keys(b),{shapeFlag:w}=E;T.length&&w&7&&(s&&T.some(ya)&&(b=Md(b,s)),E=ar(E,b,!1,!0))}return t.dirs&&(E=ar(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Ba(E,t.transition),h=E,Fs(p),h}const xd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ks(t))&&((e||(e={}))[t]=n[t]);return e},Md=(n,e)=>{const t={};for(const i in n)(!ya(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Sd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_l(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Yu(a,i,d)&&!no(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?_l(i,a,c):!0:!!a;return!1}function _l(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Yu(e,n,s)&&!no(t,s))return!0}return!1}function Yu(n,e,t){const i=n[t],r=e[t];return t==="style"&&nt(i)&&nt(r)?!Ra(i,r):i!==r}function Ed({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ju={},Ku=()=>Object.create(ju),$u=n=>Object.getPrototypeOf(n)===ju;function yd(n,e,t,i=!1){const r={},s=Ku();n.propsDefaults=Object.create(null),Zu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ch(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Td(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(no(n.emitsOptions,d))continue;const m=e[d];if(l)if(Je(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=ln(d);r[x]=ca(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Zu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Je(e,f)&&((u=oi(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ca(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&Nn(n.attrs,"set","")}function Zu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(wr(l))continue;const c=e[l];let u;r&&Je(r,u=ln(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:no(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||rt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ca(r,l,f,c[f],n,!Je(c,f))}}return a}function ca(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Yr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===oi(t))&&(i=!0))}return i}const bd=new WeakMap;function Ju(n,e,t=!1){const i=t?bd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[d,m]=Ju(f,e,!0);Mt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,er),er;if(Fe(s))for(let u=0;u<s.length;u++){const f=ln(s[u]);gl(f)&&(a[f]=rt)}else if(s)for(const u in s){const f=ln(u);if(gl(f)){const d=s[u],m=a[f]=Fe(d)||He(d)?{type:d}:Mt({},d),x=m.type;let g=!1,p=!0;if(Fe(x))for(let h=0;h<x.length;++h){const b=x[h],E=He(b)&&b.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(p=!1)}else g=He(x)&&x.name==="Boolean";m[0]=g,m[1]=p,(g||Je(m,"default"))&&o.push(f)}}const c=[a,o];return nt(n)&&i.set(n,c),c}function gl(n){return n[0]!=="$"&&!wr(n)}const Ha=n=>n==="_"||n==="_ctx"||n==="$stable",Ga=n=>Fe(n)?n.map(gn):[gn(n)],Ad=(n,e,t)=>{if(e._n)return e;const i=Vh((...r)=>Ga(e(...r)),t);return i._c=!1,i},Qu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ha(r))continue;const s=n[r];if(He(s))e[r]=Ad(r,s,i);else if(s!=null){const a=Ga(s);e[r]=()=>a}}},ef=(n,e)=>{const t=Ga(e);n.slots.default=()=>t},tf=(n,e,t)=>{for(const i in e)(t||!Ha(i))&&(n[i]=e[i])},wd=(n,e,t)=>{const i=n.slots=Ku();if(n.vnode.shapeFlag&32){const r=e._;r?(tf(i,e,t),t&&uu(i,"_",r,!0)):Qu(e,i)}else e&&ef(n,e)},Rd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=rt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:tf(r,e,t):(s=!e.$stable,Qu(e,r)),a=e}else e&&(ef(n,e),a={default:1});if(s)for(const o in r)!Ha(o)&&a[o]==null&&delete r[o]},Nt=Ud;function Cd(n){return Pd(n)}function Pd(n,e){const t=Zs();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Sn,insertStaticContent:x}=n,g=(_,R,U,B=null,H=null,X=null,ee=void 0,Q=null,oe=!!R.dynamicChildren)=>{if(_===R)return;_&&!gr(_,R)&&(B=be(_),I(_,H,X,!0),_=null),R.patchFlag===-2&&(oe=!1,R.dynamicChildren=null);const{type:Z,ref:Ee,shapeFlag:M}=R;switch(Z){case io:p(_,R,U,B);break;case ri:h(_,R,U,B);break;case So:_==null&&b(R,U,B,ee);break;case Kt:ce(_,R,U,B,H,X,ee,Q,oe);break;default:M&1?w(_,R,U,B,H,X,ee,Q,oe):M&6?fe(_,R,U,B,H,X,ee,Q,oe):(M&64||M&128)&&Z.process(_,R,U,B,H,X,ee,Q,oe,Ke)}Ee!=null&&H?Pr(Ee,_&&_.ref,X,R||_,!R):Ee==null&&_&&_.ref!=null&&Pr(_.ref,null,X,_,!0)},p=(_,R,U,B)=>{if(_==null)i(R.el=o(R.children),U,B);else{const H=R.el=_.el;R.children!==_.children&&c(H,R.children)}},h=(_,R,U,B)=>{_==null?i(R.el=l(R.children||""),U,B):R.el=_.el},b=(_,R,U,B)=>{[_.el,_.anchor]=x(_.children,R,U,B,_.el,_.anchor)},E=({el:_,anchor:R},U,B)=>{let H;for(;_&&_!==R;)H=d(_),i(_,U,B),_=H;i(R,U,B)},T=({el:_,anchor:R})=>{let U;for(;_&&_!==R;)U=d(_),r(_),_=U;r(R)},w=(_,R,U,B,H,X,ee,Q,oe)=>{if(R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),_==null)P(R,U,B,H,X,ee,Q,oe);else{const Z=_.el&&_.el._isVueCE?_.el:null;try{Z&&Z._beginPatch(),y(_,R,H,X,ee,Q,oe)}finally{Z&&Z._endPatch()}}},P=(_,R,U,B,H,X,ee,Q)=>{let oe,Z;const{props:Ee,shapeFlag:M,transition:v,dirs:D}=_;if(oe=_.el=a(_.type,X,Ee&&Ee.is,Ee),M&8?u(oe,_.children):M&16&&$(_.children,oe,null,B,H,Mo(_,X),ee,Q),D&&ci(_,null,B,"created"),C(oe,_,_.scopeId,ee,B),Ee){for(const K in Ee)K!=="value"&&!wr(K)&&s(oe,K,null,Ee[K],X,B);"value"in Ee&&s(oe,"value",null,Ee.value,X),(Z=Ee.onVnodeBeforeMount)&&pn(Z,B,_)}D&&ci(_,null,B,"beforeMount");const j=Ld(H,v);j&&v.beforeEnter(oe),i(oe,R,U),((Z=Ee&&Ee.onVnodeMounted)||j||D)&&Nt(()=>{Z&&pn(Z,B,_),j&&v.enter(oe),D&&ci(_,null,B,"mounted")},H)},C=(_,R,U,B,H)=>{if(U&&m(_,U),B)for(let X=0;X<B.length;X++)m(_,B[X]);if(H){let X=H.subTree;if(R===X||of(X.type)&&(X.ssContent===R||X.ssFallback===R)){const ee=H.vnode;C(_,ee,ee.scopeId,ee.slotScopeIds,H.parent)}}},$=(_,R,U,B,H,X,ee,Q,oe=0)=>{for(let Z=oe;Z<_.length;Z++){const Ee=_[Z]=Q?In(_[Z]):gn(_[Z]);g(null,Ee,R,U,B,H,X,ee,Q)}},y=(_,R,U,B,H,X,ee)=>{const Q=R.el=_.el;let{patchFlag:oe,dynamicChildren:Z,dirs:Ee}=R;oe|=_.patchFlag&16;const M=_.props||rt,v=R.props||rt;let D;if(U&&ui(U,!1),(D=v.onVnodeBeforeUpdate)&&pn(D,U,R,_),Ee&&ci(R,_,U,"beforeUpdate"),U&&ui(U,!0),(M.innerHTML&&v.innerHTML==null||M.textContent&&v.textContent==null)&&u(Q,""),Z?A(_.dynamicChildren,Z,Q,U,B,Mo(R,H),X):ee||re(_,R,Q,null,U,B,Mo(R,H),X,!1),oe>0){if(oe&16)ie(Q,M,v,U,H);else if(oe&2&&M.class!==v.class&&s(Q,"class",null,v.class,H),oe&4&&s(Q,"style",M.style,v.style,H),oe&8){const j=R.dynamicProps;for(let K=0;K<j.length;K++){const te=j[K],xe=M[te],ue=v[te];(ue!==xe||te==="value")&&s(Q,te,xe,ue,H,U)}}oe&1&&_.children!==R.children&&u(Q,R.children)}else!ee&&Z==null&&ie(Q,M,v,U,H);((D=v.onVnodeUpdated)||Ee)&&Nt(()=>{D&&pn(D,U,R,_),Ee&&ci(R,_,U,"updated")},B)},A=(_,R,U,B,H,X,ee)=>{for(let Q=0;Q<R.length;Q++){const oe=_[Q],Z=R[Q],Ee=oe.el&&(oe.type===Kt||!gr(oe,Z)||oe.shapeFlag&198)?f(oe.el):U;g(oe,Z,Ee,null,B,H,X,ee,!0)}},ie=(_,R,U,B,H)=>{if(R!==U){if(R!==rt)for(const X in R)!wr(X)&&!(X in U)&&s(_,X,R[X],null,H,B);for(const X in U){if(wr(X))continue;const ee=U[X],Q=R[X];ee!==Q&&X!=="value"&&s(_,X,Q,ee,H,B)}"value"in U&&s(_,"value",R.value,U.value,H)}},ce=(_,R,U,B,H,X,ee,Q,oe)=>{const Z=R.el=_?_.el:o(""),Ee=R.anchor=_?_.anchor:o("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:D}=R;D&&(Q=Q?Q.concat(D):D),_==null?(i(Z,U,B),i(Ee,U,B),$(R.children||[],U,Ee,H,X,ee,Q,oe)):M>0&&M&64&&v&&_.dynamicChildren&&_.dynamicChildren.length===v.length?(A(_.dynamicChildren,v,U,H,X,ee,Q),(R.key!=null||H&&R===H.subTree)&&nf(_,R,!0)):re(_,R,U,Ee,H,X,ee,Q,oe)},fe=(_,R,U,B,H,X,ee,Q,oe)=>{R.slotScopeIds=Q,_==null?R.shapeFlag&512?H.ctx.activate(R,U,B,ee,oe):N(R,U,B,H,X,ee,oe):q(_,R,oe)},N=(_,R,U,B,H,X,ee)=>{const Q=_.component=Gd(_,B,H);if(zu(_)&&(Q.ctx.renderer=Ke),kd(Q,!1,ee),Q.asyncDep){if(H&&H.registerDep(Q,Y,ee),!_.el){const oe=Q.subTree=un(ri);h(null,oe,R,U),_.placeholder=oe.el}}else Y(Q,_,R,U,H,X,ee)},q=(_,R,U)=>{const B=R.component=_.component;if(Sd(_,R,U))if(B.asyncDep&&!B.asyncResolved){V(B,R,U);return}else B.next=R,B.update();else R.el=_.el,B.vnode=R},Y=(_,R,U,B,H,X,ee)=>{const Q=()=>{if(_.isMounted){let{next:M,bu:v,u:D,parent:j,vnode:K}=_;{const Ae=rf(_);if(Ae){M&&(M.el=K.el,V(_,M,ee)),Ae.asyncDep.then(()=>{Nt(()=>{_.isUnmounted||Z()},H)});return}}let te=M,xe;ui(_,!1),M?(M.el=K.el,V(_,M,ee)):M=K,v&&Rs(v),(xe=M.props&&M.props.onVnodeBeforeUpdate)&&pn(xe,j,M,K),ui(_,!0);const ue=ml(_),ge=_.subTree;_.subTree=ue,g(ge,ue,f(ge.el),be(ge),_,H,X),M.el=ue.el,te===null&&Ed(_,ue.el),D&&Nt(D,H),(xe=M.props&&M.props.onVnodeUpdated)&&Nt(()=>pn(xe,j,M,K),H)}else{let M;const{el:v,props:D}=R,{bm:j,m:K,parent:te,root:xe,type:ue}=_,ge=Lr(R);ui(_,!1),j&&Rs(j),!ge&&(M=D&&D.onVnodeBeforeMount)&&pn(M,te,R),ui(_,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(ue,_.parent?_.parent.type:void 0);const Ae=_.subTree=ml(_);g(null,Ae,U,B,_,H,X),R.el=Ae.el}if(K&&Nt(K,H),!ge&&(M=D&&D.onVnodeMounted)){const Ae=R;Nt(()=>pn(M,te,Ae),H)}(R.shapeFlag&256||te&&Lr(te.vnode)&&te.vnode.shapeFlag&256)&&_.a&&Nt(_.a,H),_.isMounted=!0,R=U=B=null}};_.scope.on();const oe=_.effect=new pu(Q);_.scope.off();const Z=_.update=oe.run.bind(oe),Ee=_.job=oe.runIfDirty.bind(oe);Ee.i=_,Ee.id=_.uid,oe.scheduler=()=>Oa(Ee),ui(_,!0),Z()},V=(_,R,U)=>{R.component=_;const B=_.vnode.props;_.vnode=R,_.next=null,Td(_,R.props,B,U),Rd(_,R.children,U),Gn(),ll(_),Vn()},re=(_,R,U,B,H,X,ee,Q,oe=!1)=>{const Z=_&&_.children,Ee=_?_.shapeFlag:0,M=R.children,{patchFlag:v,shapeFlag:D}=R;if(v>0){if(v&128){ae(Z,M,U,B,H,X,ee,Q,oe);return}else if(v&256){le(Z,M,U,B,H,X,ee,Q,oe);return}}D&8?(Ee&16&&me(Z,H,X),M!==Z&&u(U,M)):Ee&16?D&16?ae(Z,M,U,B,H,X,ee,Q,oe):me(Z,H,X,!0):(Ee&8&&u(U,""),D&16&&$(M,U,B,H,X,ee,Q,oe))},le=(_,R,U,B,H,X,ee,Q,oe)=>{_=_||er,R=R||er;const Z=_.length,Ee=R.length,M=Math.min(Z,Ee);let v;for(v=0;v<M;v++){const D=R[v]=oe?In(R[v]):gn(R[v]);g(_[v],D,U,null,H,X,ee,Q,oe)}Z>Ee?me(_,H,X,!0,!1,M):$(R,U,B,H,X,ee,Q,oe,M)},ae=(_,R,U,B,H,X,ee,Q,oe)=>{let Z=0;const Ee=R.length;let M=_.length-1,v=Ee-1;for(;Z<=M&&Z<=v;){const D=_[Z],j=R[Z]=oe?In(R[Z]):gn(R[Z]);if(gr(D,j))g(D,j,U,null,H,X,ee,Q,oe);else break;Z++}for(;Z<=M&&Z<=v;){const D=_[M],j=R[v]=oe?In(R[v]):gn(R[v]);if(gr(D,j))g(D,j,U,null,H,X,ee,Q,oe);else break;M--,v--}if(Z>M){if(Z<=v){const D=v+1,j=D<Ee?R[D].el:B;for(;Z<=v;)g(null,R[Z]=oe?In(R[Z]):gn(R[Z]),U,j,H,X,ee,Q,oe),Z++}}else if(Z>v)for(;Z<=M;)I(_[Z],H,X,!0),Z++;else{const D=Z,j=Z,K=new Map;for(Z=j;Z<=v;Z++){const Be=R[Z]=oe?In(R[Z]):gn(R[Z]);Be.key!=null&&K.set(Be.key,Z)}let te,xe=0;const ue=v-j+1;let ge=!1,Ae=0;const Xe=new Array(ue);for(Z=0;Z<ue;Z++)Xe[Z]=0;for(Z=D;Z<=M;Z++){const Be=_[Z];if(xe>=ue){I(Be,H,X,!0);continue}let Re;if(Be.key!=null)Re=K.get(Be.key);else for(te=j;te<=v;te++)if(Xe[te-j]===0&&gr(Be,R[te])){Re=te;break}Re===void 0?I(Be,H,X,!0):(Xe[Re-j]=Z+1,Re>=Ae?Ae=Re:ge=!0,g(Be,R[Re],U,null,H,X,ee,Q,oe),xe++)}const de=ge?Dd(Xe):er;for(te=de.length-1,Z=ue-1;Z>=0;Z--){const Be=j+Z,Re=R[Be],Le=R[Be+1],Pe=Be+1<Ee?Le.el||sf(Le):B;Xe[Z]===0?g(null,Re,U,Pe,H,X,ee,Q,oe):ge&&(te<0||Z!==de[te]?F(Re,U,Pe,2):te--)}}},F=(_,R,U,B,H=null)=>{const{el:X,type:ee,transition:Q,children:oe,shapeFlag:Z}=_;if(Z&6){F(_.component.subTree,R,U,B);return}if(Z&128){_.suspense.move(R,U,B);return}if(Z&64){ee.move(_,R,U,Ke);return}if(ee===Kt){i(X,R,U);for(let M=0;M<oe.length;M++)F(oe[M],R,U,B);i(_.anchor,R,U);return}if(ee===So){E(_,R,U);return}if(B!==2&&Z&1&&Q)if(B===0)Q.beforeEnter(X),i(X,R,U),Nt(()=>Q.enter(X),H);else{const{leave:M,delayLeave:v,afterLeave:D}=Q,j=()=>{_.ctx.isUnmounted?r(X):i(X,R,U)},K=()=>{X._isLeaving&&X[Kh](!0),M(X,()=>{j(),D&&D()})};v?v(X,j,K):K()}else i(X,R,U)},I=(_,R,U,B=!1,H=!1)=>{const{type:X,props:ee,ref:Q,children:oe,dynamicChildren:Z,shapeFlag:Ee,patchFlag:M,dirs:v,cacheIndex:D}=_;if(M===-2&&(H=!1),Q!=null&&(Gn(),Pr(Q,null,U,_,!0),Vn()),D!=null&&(R.renderCache[D]=void 0),Ee&256){R.ctx.deactivate(_);return}const j=Ee&1&&v,K=!Lr(_);let te;if(K&&(te=ee&&ee.onVnodeBeforeUnmount)&&pn(te,R,_),Ee&6)he(_.component,U,B);else{if(Ee&128){_.suspense.unmount(U,B);return}j&&ci(_,null,R,"beforeUnmount"),Ee&64?_.type.remove(_,R,U,Ke,B):Z&&!Z.hasOnce&&(X!==Kt||M>0&&M&64)?me(Z,R,U,!1,!0):(X===Kt&&M&384||!H&&Ee&16)&&me(oe,R,U),B&&se(_)}(K&&(te=ee&&ee.onVnodeUnmounted)||j)&&Nt(()=>{te&&pn(te,R,_),j&&ci(_,null,R,"unmounted")},U)},se=_=>{const{type:R,el:U,anchor:B,transition:H}=_;if(R===Kt){ne(U,B);return}if(R===So){T(_);return}const X=()=>{r(U),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(_.shapeFlag&1&&H&&!H.persisted){const{leave:ee,delayLeave:Q}=H,oe=()=>ee(U,X);Q?Q(_.el,X,oe):oe()}else X()},ne=(_,R)=>{let U;for(;_!==R;)U=d(_),r(_),_=U;r(R)},he=(_,R,U)=>{const{bum:B,scope:H,job:X,subTree:ee,um:Q,m:oe,a:Z}=_;vl(oe),vl(Z),B&&Rs(B),H.stop(),X&&(X.flags|=8,I(ee,_,R,U)),Q&&Nt(Q,R),Nt(()=>{_.isUnmounted=!0},R)},me=(_,R,U,B=!1,H=!1,X=0)=>{for(let ee=X;ee<_.length;ee++)I(_[ee],R,U,B,H)},be=_=>{if(_.shapeFlag&6)return be(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const R=d(_.anchor||_.el),U=R&&R[Yh];return U?d(U):R};let Se=!1;const Ce=(_,R,U)=>{let B;_==null?R._vnode&&(I(R._vnode,null,null,!0),B=R._vnode.component):g(R._vnode||null,_,R,null,null,null,U),R._vnode=_,Se||(Se=!0,ll(B),Du(),Se=!1)},Ke={p:g,um:I,m:F,r:se,mt:N,mc:$,pc:re,pbc:A,n:be,o:n};return{render:Ce,hydrate:void 0,createApp:md(Ce)}}function Mo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ld(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function nf(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=In(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&nf(a,o)),o.type===io&&(o.patchFlag===-1&&(o=r[s]=In(o)),o.el=a.el),o.type===ri&&!o.el&&(o.el=a.el)}}function Dd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function rf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rf(e)}function vl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function sf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?sf(e.subTree):null}const of=n=>n.__isSuspense;function Ud(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Gh(n)}const Kt=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Ur=[];let Xt=null;function Dt(n=!1){Ur.push(Xt=n?null:[])}function Id(){Ur.pop(),Xt=Ur[Ur.length-1]||null}let Hr=1;function xl(n,e=!1){Hr+=n,n<0&&Xt&&e&&(Xt.hasOnce=!0)}function af(n){return n.dynamicChildren=Hr>0?Xt||er:null,Id(),Hr>0&&Xt&&Xt.push(n),n}function Ot(n,e,t,i,r,s){return af(Ie(n,e,t,i,r,s,!0))}function Nd(n,e,t,i,r){return af(un(n,e,t,i,r,!0))}function lf(n){return n?n.__v_isVNode===!0:!1}function gr(n,e){return n.type===e.type&&n.key===e.key}const cf=({key:n})=>n??null,Ls=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||Tt(n)||He(n)?{i:en,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,r=null,s=n===Kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&cf(e),ref:e&&Ls(e),scopeId:Iu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return o?(Va(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Hr>0&&!a&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const un=Fd;function Fd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ad)&&(n=ri),lf(n)){const o=ar(n,e,!0);return t&&Va(o,t),Hr>0&&!s&&Xt&&(o.shapeFlag&6?Xt[Xt.indexOf(n)]=o:Xt.push(o)),o.patchFlag=-2,o}if(Yd(n)&&(n=n.__vccOpts),e){e=Od(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=Js(o)),nt(l)&&(Fa(l)&&!Fe(l)&&(l=Mt({},l)),e.style=wa(l))}const a=dt(n)?1:of(n)?128:jh(n)?64:nt(n)?4:He(n)?2:0;return Ie(n,e,t,i,r,a,s,!0)}function Od(n){return n?Fa(n)||$u(n)?Mt({},n):n:null}function ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Bd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cf(c),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Ls(e)):[s,Ls(e)]:Ls(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ar(n.ssContent),ssFallback:n.ssFallback&&ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ba(u,l.clone(u)),u}function xi(n=" ",e=0){return un(io,null,n,e)}function Ti(n="",e=!1){return e?(Dt(),Nd(ri,null,n)):un(ri,null,n)}function gn(n){return n==null||typeof n=="boolean"?un(ri):Fe(n)?un(Kt,null,n.slice()):lf(n)?In(n):un(io,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ar(n)}function Va(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Va(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!$u(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[xi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Js([e.class,i.class]));else if(r==="style")e.style=wa([e.style,i.style]);else if(Ks(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function pn(n,e,t,i=null){Tn(n,e,7,[t,i])}const zd=Xu();let Hd=0;function Gd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zd,s={uid:Hd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ju(i,r),emitsOptions:qu(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gd.bind(null,s),n.ce&&n.ce(s),s}let It=null;const Vd=()=>It||en;let Hs,ua;{const n=Zs(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Hs=e("__VUE_INSTANCE_SETTERS__",t=>It=t),ua=e("__VUE_SSR_SETTERS__",t=>Gr=t)}const Yr=n=>{const e=It;return Hs(n),n.scope.on(),()=>{n.scope.off(),Hs(e)}},Ml=()=>{It&&It.scope.off(),Hs(null)};function uf(n){return n.vnode.shapeFlag&4}let Gr=!1;function kd(n,e=!1,t=!1){e&&ua(e);const{props:i,children:r}=n.vnode,s=uf(n);yd(n,i,s,e),wd(n,r,t||e);const a=s?Wd(n,e):void 0;return e&&ua(!1),a}function Wd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ld);const{setup:i}=t;if(i){Gn();const r=n.setupContext=i.length>1?qd(n):null,s=Yr(n),a=qr(i,n,0,[n.props,r]),o=ou(a);if(Vn(),s(),(o||n.sp)&&!Lr(n)&&Bu(n),o){if(a.then(Ml,Ml),e)return a.then(l=>{Sl(n,l)}).catch(l=>{eo(l,n,0)});n.asyncDep=a}else Sl(n,a)}else ff(n)}function Sl(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=Ru(e)),ff(n)}function ff(n,e,t){const i=n.type;n.render||(n.render=i.render||Sn);{const r=Yr(n);Gn();try{cd(n)}finally{Vn(),r()}}}const Xd={get(n,e){return yt(n,"get",""),n[e]}};function qd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xd),slots:n.slots,emit:n.emit,expose:e}}function ro(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ru(Ph(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dr)return Dr[t](n)},has(e,t){return t in e||t in Dr}})):n.proxy}function Yd(n){return He(n)&&"__vccOpts"in n}const hf=(n,e)=>Fh(n,e,Gr),jd="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fa;const El=typeof window<"u"&&window.trustedTypes;if(El)try{fa=El.createPolicy("vue",{createHTML:n=>n})}catch{}const df=fa?n=>fa.createHTML(n):n=>n,Kd="http://www.w3.org/2000/svg",$d="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,yl=Un&&Un.createElement("template"),Zd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS(Kd,n):e==="mathml"?Un.createElementNS($d,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yl.innerHTML=df(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=yl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jd=Symbol("_vtc");function Qd(n,e,t){const i=n[Jd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Tl=Symbol("_vod"),ep=Symbol("_vsh"),tp=Symbol(""),np=/(?:^|;)\s*display\s*:/;function ip(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ds(i,o,"")}else for(const a in e)t[a]==null&&Ds(i,a,"");for(const a in t)a==="display"&&(s=!0),Ds(i,a,t[a])}else if(r){if(e!==t){const a=i[tp];a&&(t+=";"+a),i.cssText=t,s=np.test(t)}}else e&&n.removeAttribute("style");Tl in n&&(n[Tl]=s?i.display:"",n[ep]&&(i.display="none"))}const bl=/\s*!important$/;function Ds(n,e,t){if(Fe(t))t.forEach(i=>Ds(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rp(n,e);bl.test(t)?n.setProperty(oi(i),t.replace(bl,""),"important"):n[i]=t}}const Al=["Webkit","Moz","ms"],Eo={};function rp(n,e){const t=Eo[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return Eo[e]=i;i=cu(i);for(let r=0;r<Al.length;r++){const s=Al[r]+i;if(s in n)return Eo[e]=s}return e}const wl="http://www.w3.org/1999/xlink";function Rl(n,e,t,i,r,s=ah(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wl,e.slice(6,e.length)):n.setAttributeNS(wl,e,t):t==null||s&&!fu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":yn(t)?String(t):t)}function Cl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?df(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=fu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Ji(n,e,t,i){n.addEventListener(e,t,i)}function sp(n,e,t,i){n.removeEventListener(e,t,i)}const Pl=Symbol("_vei");function op(n,e,t,i,r=null){const s=n[Pl]||(n[Pl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ap(e);if(i){const c=s[e]=up(i,r);Ji(n,o,c,l)}else a&&(sp(n,o,a,l),s[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function ap(n){let e;if(Ll.test(n)){e={};let i;for(;i=n.match(Ll);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):oi(n.slice(2)),e]}let yo=0;const lp=Promise.resolve(),cp=()=>yo||(lp.then(()=>yo=0),yo=Date.now());function up(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(fp(i,t.value),e,5,[i])};return t.value=n,t.attached=cp(),t}function fp(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Dl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Qd(n,i,a):e==="style"?ip(n,t,i):Ks(e)?ya(e)||op(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dp(n,e,i,a))?(Cl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rl(n,e,i,a,s,e!=="value")):n._isVueCE&&(pp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!dt(i)))?Cl(n,ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Rl(n,e,i,a))};function dp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Dl(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Dl(e)&&dt(t)?!1:e in n}function pp(n,e){const t=n._def.props;if(!t)return!1;const i=ln(e);return Array.isArray(t)?t.some(r=>ln(r)===i):Object.keys(t).some(r=>ln(r)===i)}const Ul=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>Rs(e,t):e};function mp(n){n.target.composing=!0}function Il(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const To=Symbol("_assign");function Nl(n,e,t){return e&&(n=n.trim()),t&&(n=Aa(n)),n}const pf={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[To]=Ul(r);const s=i||r.props&&r.props.type==="number";Ji(n,e?"change":"input",a=>{a.target.composing||n[To](Nl(n.value,t,s))}),(t||s)&&Ji(n,"change",()=>{n.value=Nl(n.value,t,s)}),e||(Ji(n,"compositionstart",mp),Ji(n,"compositionend",Il),Ji(n,"change",Il))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[To]=Ul(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Aa(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},_p=["ctrl","shift","alt","meta"],gp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>_p.some(t=>n[`${t}Key`]&&!e.includes(t))},vp=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=gp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},xp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=oi(r.key);if(e.some(a=>a===s||xp[a]===s))return n(r)})},Mp=Mt({patchProp:hp},Zd);let Fl;function Sp(){return Fl||(Fl=Cd(Mp))}const Ep=(...n)=>{const e=Sp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Tp(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,yp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function yp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tp(n){return dt(n)?document.querySelector(n):n}const bp={class:"room-manager"},Ap={class:"add-section"},wp={key:0,class:"add-room-form"},Rp={class:"form-card"},Cp={class:"input-group"},Pp={class:"rooms-section"},Lp={key:0},Dp={key:1,class:"empty-state"},Up={class:"room-grid"},Ip={class:"room-header"},Np={class:"room-name"},Fp={class:"room-actions"},Op=["onClick"],Bp=["onClick"],zp=za({__name:"RoomManager",emits:["selectRoom"],setup(n,{emit:e}){const t=jt([]),i=jt(!1),r=jt(""),s=jt(),a=e,o=()=>{sessionStorage.setItem("rooms",JSON.stringify(t.value))},l=()=>{const x=sessionStorage.getItem("rooms");if(x)try{t.value=JSON.parse(x)}catch(g){console.error("Failed to load rooms:",g)}},c=()=>{i.value=!0,r.value="",Pu(()=>{var x;(x=s.value)==null||x.focus()})},u=()=>{const x=r.value.trim();if(x){const g=Date.now().toString();t.value.push({id:g,name:x}),o(),i.value=!1,r.value=""}},f=()=>{i.value=!1,r.value=""},d=x=>{a("selectRoom",x)},m=x=>{t.value=t.value.filter(g=>g.id!==x),o(),sessionStorage.removeItem(`arTags_${x}`)};return Bs(()=>{l()}),(x,g)=>(Dt(),Ot("div",bp,[g[9]||(g[9]=Ie("div",{class:"header"},[Ie("h1",null,"🏠 Gestion des Pièces"),Ie("p",null,"Gérez vos espaces AR/VR")],-1)),Ie("div",Ap,[Ie("button",{onClick:c,class:"add-room-btn"},[...g[1]||(g[1]=[Ie("span",{class:"btn-icon"},"➕",-1),xi(" Ajouter une Pièce ",-1)])]),i.value?(Dt(),Ot("div",wp,[Ie("div",Rp,[g[4]||(g[4]=Ie("h3",null,"Nouvelle Pièce",-1)),Ie("div",Cp,[Nu(Ie("input",{"onUpdate:modelValue":g[0]||(g[0]=p=>r.value=p),onKeydown:mf(u,["enter"]),placeholder:"Entrez le nom de la pièce",class:"room-input",ref_key:"roomInput",ref:s,autofocus:""},null,544),[[pf,r.value]])]),Ie("div",{class:"form-actions"},[Ie("button",{onClick:u,class:"confirm-btn"},[...g[2]||(g[2]=[Ie("span",{class:"btn-icon"},"✅",-1),xi(" Créer ",-1)])]),Ie("button",{onClick:f,class:"cancel-btn"},[...g[3]||(g[3]=[Ie("span",{class:"btn-icon"},"❌",-1),xi(" Annuler ",-1)])])])])])):Ti("",!0)]),Ie("div",Pp,[t.value.length>0?(Dt(),Ot("h2",Lp,"Vos Pièces")):Ti("",!0),t.value.length===0?(Dt(),Ot("div",Dp,[...g[5]||(g[5]=[Ie("div",{class:"empty-icon"},"🏢",-1),Ie("h3",null,"Aucune pièce créée",-1),Ie("p",null,"Commencez par ajouter votre première pièce pour explorer l'AR/VR",-1)])])):Ti("",!0),Ie("div",Up,[(Dt(!0),Ot(Kt,null,Vu(t.value,p=>(Dt(),Ot("div",{key:p.id,class:"room-card"},[Ie("div",Ip,[g[6]||(g[6]=Ie("div",{class:"room-icon"},"🏠",-1)),Ie("h3",Np,vi(p.name),1)]),Ie("div",Fp,[Ie("button",{onClick:h=>d(p.id),class:"select-btn"},[...g[7]||(g[7]=[Ie("span",{class:"btn-icon"},"🎯",-1),xi(" Explorer en AR ",-1)])],8,Op),Ie("button",{onClick:h=>m(p.id),class:"delete-btn"},[...g[8]||(g[8]=[Ie("span",{class:"btn-icon"},"🗑️",-1),xi(" Supprimer ",-1)])],8,Bp)])]))),128))])])]))}}),_f=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hp=_f(zp,[["__scopeId","data-v-722e0be6"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="158",Gp=0,Ol=1,Vp=2,gf=1,kp=2,Dn=3,si=0,Bt=1,On=2,ti=0,rr=1,Bl=2,zl=3,Hl=4,Wp=5,Mi=100,Xp=101,qp=102,Gl=103,Vl=104,Yp=200,jp=201,Kp=202,$p=203,ha=204,da=205,Zp=206,Jp=207,Qp=208,em=209,tm=210,nm=211,im=212,rm=213,sm=214,om=0,am=1,lm=2,Gs=3,cm=4,um=5,fm=6,hm=7,vf=0,dm=1,pm=2,ni=0,mm=1,_m=2,gm=3,vm=4,xm=5,xf=300,lr=301,cr=302,pa=303,ma=304,so=306,_a=1e3,on=1001,ga=1002,Pt=1003,kl=1004,bo=1005,$t=1006,Mm=1007,Vr=1008,ii=1009,Sm=1010,Em=1011,Wa=1012,Mf=1013,Qn=1014,ei=1015,kr=1016,Sf=1017,Ef=1018,bi=1020,ym=1021,an=1023,Tm=1024,bm=1025,Ai=1026,ur=1027,Am=1028,yf=1029,wm=1030,Tf=1031,bf=1033,Ao=33776,wo=33777,Ro=33778,Co=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Rm=36196,jl=37492,Kl=37496,$l=37808,Zl=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,Po=36492,uc=36494,fc=36495,Cm=36283,hc=36284,dc=36285,pc=36286,Af=3e3,wi=3001,Pm=3200,Lm=3201,Dm=0,Um=1,Qt="",vt="srgb",Wn="srgb-linear",Xa="display-p3",oo="display-p3-linear",Vs="linear",at="srgb",ks="rec709",Ws="p3",Li=7680,mc=519,Im=512,Nm=513,Fm=514,Om=515,Bm=516,zm=517,Hm=518,Gm=519,va=35044,_c="300 es",xa=1035,Bn=2e3,Xs=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const Ir=Math.PI/180,Wr=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function qa(n,e){return(n%e+e)%e}function Vm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function km(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function Wm(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function Xm(n,e=1){return e-Math.abs(qa(n,e*2)-e)}function qm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ym(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Km(n,e){return n+Math.random()*(e-n)}function $m(n){return n*(.5-Math.random())}function Zm(n){n!==void 0&&(gc=n);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jm(n){return n*Ir}function Qm(n){return n*Wr}function Ma(n){return(n&n-1)===0&&n!==0}function e_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function t_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const n_={DEG2RAD:Ir,RAD2DEG:Wr,generateUUID:Hn,clamp:Ut,euclideanModulo:qa,mapLinear:Vm,inverseLerp:km,lerp:Nr,damp:Wm,pingpong:Xm,smoothstep:qm,smootherstep:Ym,randInt:jm,randFloat:Km,randFloatSpread:$m,seededRandom:Zm,degToRad:Jm,radToDeg:Qm,isPowerOfTwo:Ma,ceilPowerOfTwo:e_,floorPowerOfTwo:qs,setQuaternionFromProperEuler:t_,normalize:et,denormalize:Mn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],g=r[0],p=r[3],h=r[6],b=r[1],E=r[4],T=r[7],w=r[2],P=r[5],C=r[8];return s[0]=a*g+o*b+l*w,s[3]=a*p+o*E+l*P,s[6]=a*h+o*T+l*C,s[1]=c*g+u*b+f*w,s[4]=c*p+u*E+f*P,s[7]=c*h+u*T+f*C,s[2]=d*g+m*b+x*w,s[5]=d*p+m*E+x*P,s[8]=d*h+m*T+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new We;function wf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i_(){const n=Ys("canvas");return n.style.display="block",n}const vc={};function Fr(n){n in vc||(vc[n]=!0,console.warn(n))}const xc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Wn]:{transfer:Vs,primaries:ks,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:at,primaries:ks,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[oo]:{transfer:Vs,primaries:Ws,toReference:n=>n.applyMatrix3(Mc),fromReference:n=>n.applyMatrix3(xc)},[Xa]:{transfer:at,primaries:Ws,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Mc),fromReference:n=>n.applyMatrix3(xc).convertLinearToSRGB()}},r_=new Set([Wn,oo]),tt={enabled:!0,_workingColorSpace:Wn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ns[e].toReference,r=ns[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ns[n].primaries},getTransfer:function(n){return n===Qt?Vs:ns[n].transfer}};function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=Ys("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uo(r[a].image)):s.push(Uo(r[a]))}else s=Uo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o_=0;class zt extends hr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=on,r=on,s=$t,a=Vr,o=an,l=ii,c=zt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Hn(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?vt:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?wi:Af}set encoding(e){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?vt:Qt}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=xf;zt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,w=(h+1)/2,P=(u+d)/4,C=(f+g)/4,$=(x+p)/4;return E>T&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=C/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=P/r,s=$/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=$/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?vt:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends a_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pf extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l_ extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*g,b=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const w=Math.sqrt(E),P=Math.atan2(w,h*b);p=Math.sin(p*P)/w,o=Math.sin(o*P)/w}const T=o*b;if(l=l*p+d*T,c=c*p+m*T,u=u*p+x*T,f=f*p+g*T,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new z,Sc=new dr;class jr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),rs.subVectors(this.max,vr),Ui.subVectors(e.a,vr),Ii.subVectors(e.b,vr),Ni.subVectors(e.c,vr),Yn.subVectors(Ii,Ui),jn.subVectors(Ni,Ii),fi.subVectors(Ui,Ni);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!No(t,Ui,Ii,Ni,rs)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Ui,Ii,Ni,rs))?!1:(ss.crossVectors(Yn,jn),t=[ss.x,ss.y,ss.z],No(t,Ui,Ii,Ni,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new z,new z,new z,new z,new z,new z,new z,new z],nn=new z,is=new jr,Ui=new z,Ii=new z,Ni=new z,Yn=new z,jn=new z,fi=new z,vr=new z,rs=new z,ss=new z,hi=new z;function No(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const c_=new jr,xr=new z,Fo=new z;class Ya{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):c_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Fo)),this.expandByPoint(xr.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new z,Oo=new z,os=new z,Kn=new z,Bo=new z,as=new z,zo=new z;class u_{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oo.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=Kn.dot(this.direction),l=-Kn.dot(os),c=Kn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oo).addScaledVector(os,d),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,r,s){Bo.subVectors(t,e),as.subVectors(i,e),zo.crossVectors(Bo,as);let a=this.direction.dot(zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(as.crossVectors(Kn,as));if(l<0)return null;const c=o*this.direction.dot(Bo.cross(Kn));if(c<0||l+c>a)return null;const u=-o*Kn.dot(zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,g,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,g,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,g=c*f;t[0]=d+g*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,g=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,h_)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),$n.crossVectors(i,kt),$n.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),$n.crossVectors(i,kt)),$n.normalize(),ls.crossVectors(kt,$n),r[0]=$n.x,r[4]=ls.x,r[8]=kt.x,r[1]=$n.y,r[5]=ls.y,r[9]=kt.y,r[2]=$n.z,r[6]=ls.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],g=i[6],p=i[10],h=i[14],b=i[3],E=i[7],T=i[11],w=i[15],P=r[0],C=r[4],$=r[8],y=r[12],A=r[1],ie=r[5],ce=r[9],fe=r[13],N=r[2],q=r[6],Y=r[10],V=r[14],re=r[3],le=r[7],ae=r[11],F=r[15];return s[0]=a*P+o*A+l*N+c*re,s[4]=a*C+o*ie+l*q+c*le,s[8]=a*$+o*ce+l*Y+c*ae,s[12]=a*y+o*fe+l*V+c*F,s[1]=u*P+f*A+d*N+m*re,s[5]=u*C+f*ie+d*q+m*le,s[9]=u*$+f*ce+d*Y+m*ae,s[13]=u*y+f*fe+d*V+m*F,s[2]=x*P+g*A+p*N+h*re,s[6]=x*C+g*ie+p*q+h*le,s[10]=x*$+g*ce+p*Y+h*ae,s[14]=x*y+g*fe+p*V+h*F,s[3]=b*P+E*A+T*N+w*re,s[7]=b*C+E*ie+T*q+w*le,s[11]=b*$+E*ce+T*Y+w*ae,s[15]=b*y+E*fe+T*V+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],g=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+g*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],g=e[13],p=e[14],h=e[15],b=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,E=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,T=u*g*c-x*f*c+x*o*m-a*g*m-u*o*h+a*f*h,w=x*f*l-u*g*l-x*o*d+a*g*d+u*o*p-a*f*p,P=t*b+i*E+r*T+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=b*C,e[1]=(g*d*s-f*p*s-g*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*C,e[4]=E*C,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*C,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*C,e[8]=T*C,e[9]=(x*f*s-u*g*s-x*i*m+t*g*m+u*i*h-t*f*h)*C,e[10]=(a*g*s-x*o*s+x*i*c-t*g*c-a*i*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*C,e[12]=w*C,e[13]=(u*g*r-x*f*r+x*i*d-t*g*d-u*i*p+t*f*p)*C,e[14]=(x*o*r-a*g*r-x*i*l+t*g*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,g=a*u,p=a*f,h=o*f,b=l*c,E=l*u,T=l*f,w=i.x,P=i.y,C=i.z;return r[0]=(1-(g+h))*w,r[1]=(m+T)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(m-T)*P,r[5]=(1-(d+h))*P,r[6]=(p+b)*P,r[7]=0,r[8]=(x+E)*C,r[9]=(p-b)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const a=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/a,f=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Bn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Xs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,g;if(o===Bn)x=(a+s)*f,g=-2*f;else if(o===Xs)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new z,rn=new it,f_=new z(0,0,0),h_=new z(1,1,1),$n=new z,ls=new z,kt=new z,Ec=new it,yc=new dr;class ao{constructor(e=0,t=0,i=0,r=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Tc=new z,Oi=new dr,Cn=new it,cs=new z,Mr=new z,p_=new z,m_=new dr,bc=new z(1,0,0),Ac=new z(0,1,0),wc=new z(0,0,1),__={type:"added"},g_={type:"removed"};class Ht extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,t=new ao,i=new dr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Mr,cs,this.up):Cn.lookAt(cs,Mr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(__)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new z,Pn=new z,Ho=new z,Ln=new z,Bi=new z,zi=new z,Rc=new z,Go=new z,Vo=new z,ko=new z;let us=!1;class Zt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){sn.subVectors(r,t),Pn.subVectors(i,t),Ho.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Pn),l=sn.dot(Ho),c=Pn.dot(Pn),u=Pn.dot(Ho),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,r,s,a,o,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(e,t,i,r){return sn.subVectors(i,t),Pn.subVectors(e,t),sn.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),sn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,i),zi.subVectors(s,i),Go.subVectors(e,i);const l=Bi.dot(Go),c=zi.dot(Go);if(l<=0&&c<=0)return t.copy(i);Vo.subVectors(e,r);const u=Bi.dot(Vo),f=zi.dot(Vo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Bi,a);ko.subVectors(e,s);const m=Bi.dot(ko),x=zi.dot(ko);if(x>=0&&m<=x)return t.copy(s);const g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(zi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Rc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Rc,o);const h=1/(p+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=qa(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wo(a,s,e+1/3),this.g=Wo(a,s,e),this.b=Wo(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return tt.fromWorkingColorSpace(Et.copy(this),e),Math.round(Ut(Et.r*255,0,255))*65536+Math.round(Ut(Et.g*255,0,255))*256+Math.round(Ut(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){tt.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(fs);const i=Nr(Zn.h,fs.h,t),r=Nr(Zn.s,fs.s,t),s=Nr(Zn.l,fs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Qe;Qe.NAMES=Df;let v_=0;class Kr extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=rr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=da,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ha&&(i.blendSrc=this.blendSrc),this.blendDst!==da&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ja extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,hs=new Ye;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=va,this.updateRange={offset:0,count:-1},this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uf extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class If extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const Yt=new it,Xo=new Ht,Hi=new z,Wt=new jr,Sr=new jr,gt=new z;class qn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?If:Uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Wt.min,Sr.min),Wt.expandByPoint(gt),gt.addVectors(Wt.max,Sr.max),Wt.expandByPoint(gt)):(Wt.expandByPoint(Sr.min),Wt.expandByPoint(Sr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),gt.add(Hi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new z,u[A]=new z;const f=new z,d=new z,m=new z,x=new Ye,g=new Ye,p=new Ye,h=new z,b=new z;function E(A,ie,ce){f.fromArray(r,A*3),d.fromArray(r,ie*3),m.fromArray(r,ce*3),x.fromArray(a,A*2),g.fromArray(a,ie*2),p.fromArray(a,ce*2),d.sub(f),m.sub(f),g.sub(x),p.sub(x);const fe=1/(g.x*p.y-p.x*g.y);isFinite(fe)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(fe),b.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(fe),c[A].add(h),c[ie].add(h),c[ce].add(h),u[A].add(b),u[ie].add(b),u[ce].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,ie=T.length;A<ie;++A){const ce=T[A],fe=ce.start,N=ce.count;for(let q=fe,Y=fe+N;q<Y;q+=3)E(i[q+0],i[q+1],i[q+2])}const w=new z,P=new z,C=new z,$=new z;function y(A){C.fromArray(s,A*3),$.copy(C);const ie=c[A];w.copy(ie),w.sub(C.multiplyScalar(C.dot(ie))).normalize(),P.crossVectors($,ie);const fe=P.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=fe}for(let A=0,ie=T.length;A<ie;++A){const ce=T[A],fe=ce.start,N=ce.count;for(let q=fe,Y=fe+N;q<Y;q+=3)y(i[q+0]),y(i[q+1]),y(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new fn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new it,di=new u_,ds=new Ya,Pc=new z,Gi=new z,Vi=new z,ki=new z,qo=new z,ps=new z,ms=new Ye,_s=new Ye,gs=new Ye,Lc=new z,Dc=new z,Uc=new z,vs=new z,xs=new z;class zn extends Ht{constructor(e=new qn,t=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(qo.fromBufferAttribute(f,e),a?ps.addScaledVector(qo,u):ps.addScaledVector(qo.sub(t),u))}t.add(ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ds.containsPoint(di.origin)===!1&&(di.intersectSphere(ds,Pc)===null||di.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(s).invert(),di.copy(e.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=E;T<w;T+=3){const P=o.getX(T),C=o.getX(T+1),$=o.getX(T+2);r=Ms(this,h,e,i,c,u,f,P,C,$),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,h=g;p<h;p+=3){const b=o.getX(p),E=o.getX(p+1),T=o.getX(p+2);r=Ms(this,a,e,i,c,u,f,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=E;T<w;T+=3){const P=T,C=T+1,$=T+2;r=Ms(this,h,e,i,c,u,f,P,C,$),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,h=g;p<h;p+=3){const b=p,E=p+1,T=p+2;r=Ms(this,a,e,i,c,u,f,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function M_(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;xs.copy(o),xs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:n}}function Ms(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Gi),n.getVertexPosition(l,Vi),n.getVertexPosition(c,ki);const u=M_(n,e,t,i,Gi,Vi,ki,vs);if(u){r&&(ms.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,c),u.uv=Zt.getInterpolation(vs,Gi,Vi,ki,ms,_s,gs,new Ye)),s&&(ms.fromBufferAttribute(s,o),_s.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),u.uv1=Zt.getInterpolation(vs,Gi,Vi,ki,ms,_s,gs,new Ye),u.uv2=u.uv1),a&&(Lc.fromBufferAttribute(a,o),Dc.fromBufferAttribute(a,l),Uc.fromBufferAttribute(a,c),u.normal=Zt.getInterpolation(vs,Gi,Vi,ki,Lc,Dc,Uc,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};Zt.getNormal(Gi,Vi,ki,f.normal),u.face=f}return u}class $r extends qn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function x(g,p,h,b,E,T,w,P,C,$,y){const A=T/C,ie=w/$,ce=T/2,fe=w/2,N=P/2,q=C+1,Y=$+1;let V=0,re=0;const le=new z;for(let ae=0;ae<Y;ae++){const F=ae*ie-fe;for(let I=0;I<q;I++){const se=I*A-ce;le[g]=se*b,le[p]=F*E,le[h]=N,c.push(le.x,le.y,le.z),le[g]=0,le[p]=0,le[h]=P>0?1:-1,u.push(le.x,le.y,le.z),f.push(I/C),f.push(1-ae/$),V+=1}}for(let ae=0;ae<$;ae++)for(let F=0;F<C;F++){const I=d+F+q*ae,se=d+F+q*(ae+1),ne=d+(F+1)+q*(ae+1),he=d+(F+1)+q*ae;l.push(I,se,he),l.push(se,ne,he),re+=6}o.addGroup(m,re,y),m+=re,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const r in i)e[r]=i[r]}return e}function S_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nf(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const E_={clone:fr,merge:Ct};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ff extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Ff{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class b_ extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Of extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?vt:Qt),this.texture=new Of(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $r(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ti});s.uniforms.tEquirect.value=t;const a=new zn(r,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=$t),new b_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Yo=new z,w_=new z,R_=new We;class _i{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yo.subVectors(i,t).cross(w_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||R_.getNormalMatrix(e),r=this.coplanarPoint(Yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ya,Ss=new z;class Bf{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],h=r[12],b=r[13],E=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+x,T+b).normalize(),i[3].setComponents(l-a,d-u,p-x,T-b).normalize(),i[4].setComponents(l-o,d-f,p-g,T-E).normalize(),t===Bn)i[5].setComponents(l+o,d+f,p+g,T+E).normalize();else if(t===Xs)i[5].setComponents(o,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function C_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ka extends qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],g=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let E=0;E<c;E++){const T=E*f-s;x.push(T,-b,0),g.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const E=b+c*h,T=b+c*(h+1),w=b+1+c*(h+1),P=b+1+c*h;m.push(E,T,P),m.push(T,w,P)}this.setIndex(m),this.setAttribute("position",new En(x,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:U_,alphatest_fragment:I_,alphatest_pars_fragment:N_,aomap_fragment:F_,aomap_pars_fragment:O_,begin_vertex:B_,beginnormal_vertex:z_,bsdfs:H_,iridescence_fragment:G_,bumpmap_pars_fragment:V_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:j_,color_pars_vertex:K_,color_vertex:$_,common:Z_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:rg,colorspace_pars_fragment:sg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:Sg,envmap_vertex:ug,fog_vertex:fg,fog_pars_vertex:hg,fog_fragment:dg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_fragment:_g,lightmap_pars_fragment:gg,lights_lambert_fragment:vg,lights_lambert_pars_fragment:xg,lights_pars_begin:Mg,lights_toon_fragment:Eg,lights_toon_pars_fragment:yg,lights_phong_fragment:Tg,lights_phong_pars_fragment:bg,lights_physical_fragment:Ag,lights_physical_pars_fragment:wg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ig,map_fragment:Ng,map_pars_fragment:Fg,map_particle_fragment:Og,map_particle_pars_fragment:Bg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Hg,morphcolor_vertex:Gg,morphnormal_vertex:Vg,morphtarget_pars_vertex:kg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:jg,normal_vertex:Kg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:rv,dithering_fragment:sv,dithering_pars_fragment:ov,roughnessmap_fragment:av,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:uv,shadowmap_vertex:fv,shadowmask_pars_fragment:hv,skinbase_vertex:dv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:_v,specularmap_fragment:gv,specularmap_pars_fragment:vv,tonemapping_fragment:xv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:Ev,uv_pars_fragment:yv,uv_pars_vertex:Tv,uv_vertex:bv,worldpos_vertex:Av,background_vert:wv,background_frag:Rv,backgroundCube_vert:Cv,backgroundCube_frag:Pv,cube_vert:Lv,cube_frag:Dv,depth_vert:Uv,depth_frag:Iv,distanceRGBA_vert:Nv,distanceRGBA_frag:Fv,equirect_vert:Ov,equirect_frag:Bv,linedashed_vert:zv,linedashed_frag:Hv,meshbasic_vert:Gv,meshbasic_frag:Vv,meshlambert_vert:kv,meshlambert_frag:Wv,meshmatcap_vert:Xv,meshmatcap_frag:qv,meshnormal_vert:Yv,meshnormal_frag:jv,meshphong_vert:Kv,meshphong_frag:$v,meshphysical_vert:Zv,meshphysical_frag:Jv,meshtoon_vert:Qv,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:rx,sprite_vert:sx,sprite_frag:ox},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:Ct([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ct([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ct([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ct([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ct([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ct([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ct([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ct([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ct([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ct([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ct([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ct([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ct([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};vn.physical={uniforms:Ct([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Es={r:0,b:0,g:0};function ax(n,e,t,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,E=h.isScene===!0?h.background:null;E&&E.isTexture&&(E=(h.backgroundBlurriness>0?t:e).get(E)),E===null?g(o,l):E&&E.isColor&&(g(E,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===so)?(u===void 0&&(u=new zn(new $r(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:fr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=tt.getTransfer(E.colorSpace)!==at,(f!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zn(new Ka(2,2),new Ci({name:"BackgroundMaterial",uniforms:fr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=tt.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(Es,Nf(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:x}}function lx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(N,q,Y,V,re){let le=!1;if(a){const ae=g(V,Y,q);c!==ae&&(c=ae,m(c.object)),le=h(N,V,Y,re),le&&b(N,V,Y,re)}else{const ae=q.wireframe===!0;(c.geometry!==V.id||c.program!==Y.id||c.wireframe!==ae)&&(c.geometry=V.id,c.program=Y.id,c.wireframe=ae,le=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,$(N,q,Y,V),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,q,Y){const V=Y.wireframe===!0;let re=o[N.id];re===void 0&&(re={},o[N.id]=re);let le=re[q.id];le===void 0&&(le={},re[q.id]=le);let ae=le[V];return ae===void 0&&(ae=p(d()),le[V]=ae),ae}function p(N){const q=[],Y=[],V=[];for(let re=0;re<r;re++)q[re]=0,Y[re]=0,V[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:V,object:N,attributes:{},index:null}}function h(N,q,Y,V){const re=c.attributes,le=q.attributes;let ae=0;const F=Y.getAttributes();for(const I in F)if(F[I].location>=0){const ne=re[I];let he=le[I];if(he===void 0&&(I==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),I==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;ae++}return c.attributesNum!==ae||c.index!==V}function b(N,q,Y,V){const re={},le=q.attributes;let ae=0;const F=Y.getAttributes();for(const I in F)if(F[I].location>=0){let ne=le[I];ne===void 0&&(I==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),I==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),re[I]=he,ae++}c.attributes=re,c.attributesNum=ae,c.index=V}function E(){const N=c.newAttributes;for(let q=0,Y=N.length;q<Y;q++)N[q]=0}function T(N){w(N,0)}function w(N,q){const Y=c.newAttributes,V=c.enabledAttributes,re=c.attributeDivisors;Y[N]=1,V[N]===0&&(n.enableVertexAttribArray(N),V[N]=1),re[N]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),re[N]=q)}function P(){const N=c.newAttributes,q=c.enabledAttributes;for(let Y=0,V=q.length;Y<V;Y++)q[Y]!==N[Y]&&(n.disableVertexAttribArray(Y),q[Y]=0)}function C(N,q,Y,V,re,le,ae){ae===!0?n.vertexAttribIPointer(N,q,Y,re,le):n.vertexAttribPointer(N,q,Y,V,re,le)}function $(N,q,Y,V){if(i.isWebGL2===!1&&(N.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const re=V.attributes,le=Y.getAttributes(),ae=q.defaultAttributeValues;for(const F in le){const I=le[F];if(I.location>=0){let se=re[F];if(se===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),se!==void 0){const ne=se.normalized,he=se.itemSize,me=t.get(se);if(me===void 0)continue;const be=me.buffer,Se=me.type,Ce=me.bytesPerElement,Ke=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||se.gpuType===Mf);if(se.isInterleavedBufferAttribute){const Oe=se.data,_=Oe.stride,R=se.offset;if(Oe.isInstancedInterleavedBuffer){for(let U=0;U<I.locationSize;U++)w(I.location+U,Oe.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let U=0;U<I.locationSize;U++)T(I.location+U);n.bindBuffer(n.ARRAY_BUFFER,be);for(let U=0;U<I.locationSize;U++)C(I.location+U,he/I.locationSize,Se,ne,_*Ce,(R+he/I.locationSize*U)*Ce,Ke)}else{if(se.isInstancedBufferAttribute){for(let Oe=0;Oe<I.locationSize;Oe++)w(I.location+Oe,se.meshPerAttribute);N.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<I.locationSize;Oe++)T(I.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Oe=0;Oe<I.locationSize;Oe++)C(I.location+Oe,he/I.locationSize,Se,ne,he*Ce,he/I.locationSize*Oe*Ce,Ke)}}else if(ae!==void 0){const ne=ae[F];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(I.location,ne);break;case 3:n.vertexAttrib3fv(I.location,ne);break;case 4:n.vertexAttrib4fv(I.location,ne);break;default:n.vertexAttrib1fv(I.location,ne)}}}}P()}function y(){ce();for(const N in o){const q=o[N];for(const Y in q){const V=q[Y];for(const re in V)x(V[re].object),delete V[re];delete q[Y]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;const q=o[N.id];for(const Y in q){const V=q[Y];for(const re in V)x(V[re].object),delete V[re];delete q[Y]}delete o[N.id]}function ie(N){for(const q in o){const Y=o[q];if(Y[N.id]===void 0)continue;const V=Y[N.id];for(const re in V)x(V[re].object),delete V[re];delete Y[N.id]}}function ce(){fe(),u=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:fe,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:ie,initAttributes:E,enableAttribute:T,disableUnusedAttributes:P}}function cx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function ux(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,T=a||e.has("OES_texture_float"),w=E&&T,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:P}}function fx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,E=b*4;let T=h.clippingState||null;l.value=T,T=u(x,d,E,m);for(let w=0;w!==E;++w)T[w]=t[w];h.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,x!==!0||p===null){const h=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,T=m;E!==g;++E,T+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function hx(n){let e=new WeakMap;function t(a,o){return o===pa?a.mapping=lr:o===ma&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pa||o===ma)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new A_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dx extends Ff{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,Ic=[.125,.215,.35,.446,.526,.582],Si=20,jo=new dx,Nc=new Qe;let Ko=null,$o=0,Zo=0;const gi=(1+Math.sqrt(5))/2,qi=1/gi,Fc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,gi,qi),new z(0,gi,-qi),new z(qi,0,gi),new z(-qi,0,gi),new z(gi,qi,0),new z(-gi,qi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,$o,Zo),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:kr,format:an,colorSpace:Wn,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(s)),this._blurMaterial=mx(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nc),u.toneMapping=ni,u.autoClear=!1;const m=new ja({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),x=new zn(new $r,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Nc),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;ys(r,b*E,h>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),g=s/x,p=isFinite(s)?1+Math.floor(u*g):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const h=[];let b=0;for(let C=0;C<Si;++C){const $=C/g,y=Math.exp(-$*$/2);h.push(y),C===0?b+=y:C<p&&(b+=2*y)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const T=this._sizeLods[r],w=3*T*(r>E-Qi?r-E+Qi:0),P=4*(this._cubeSize-T);ys(t,w,P,3*T,2*T),l.setRenderTarget(t),l.render(f,jo)}}function px(n){const e=[],t=[],i=[];let r=n;const s=n-Qi+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Qi?l=Ic[a-n+Qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,g=3,p=2,h=1,b=new Float32Array(g*x*m),E=new Float32Array(p*x*m),T=new Float32Array(h*x*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,$=P>2?0:-1,y=[C,$,0,C+2/3,$,0,C+2/3,$+1,0,C,$,0,C+2/3,$+1,0,C,$+1,0];b.set(y,g*x*P),E.set(d,p*x*P);const A=[P,P,P,P,P,P];T.set(A,h*x*P)}const w=new qn;w.setAttribute("position",new fn(b,g)),w.setAttribute("uv",new fn(E,p)),w.setAttribute("faceIndex",new fn(T,h)),e.push(w),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mx(n,e,t){const i=new Float32Array(Si),r=new z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Hc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _x(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,u=l===lr||l===cr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Oc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Oc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vx(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const g=d.morphAttributes[x];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const g=m[x];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let E=0,T=b.length;E<T;E+=3){const w=b[E+0],P=b[E+1],C=b[E+2];d.push(w,P,P,C,C,w)}}else if(x!==void 0){const b=x.array;g=x.version;for(let E=0,T=b.length/3-1;E<T;E+=3){const w=E+0,P=E+1,C=E+2;d.push(w,P,P,C,C,w)}}else return;const p=new(wf(d)?If:Uf)(d,1);p.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xx(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sx(n,e){return n[0]-e[0]}function Ex(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let q=function(){fe.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],$=u.morphAttributes.color||[];let y=0;E===!0&&(y=1),T===!0&&(y=2),w===!0&&(y=3);let A=u.attributes.position.count*y,ie=1;A>e.maxTextureSize&&(ie=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ce=new Float32Array(A*ie*4*g),fe=new Pf(ce,A,ie,g);fe.type=ei,fe.needsUpdate=!0;const N=y*4;for(let Y=0;Y<g;Y++){const V=P[Y],re=C[Y],le=$[Y],ae=A*ie*4*Y;for(let F=0;F<V.count;F++){const I=F*N;E===!0&&(a.fromBufferAttribute(V,F),ce[ae+I+0]=a.x,ce[ae+I+1]=a.y,ce[ae+I+2]=a.z,ce[ae+I+3]=0),T===!0&&(a.fromBufferAttribute(re,F),ce[ae+I+4]=a.x,ce[ae+I+5]=a.y,ce[ae+I+6]=a.z,ce[ae+I+7]=0),w===!0&&(a.fromBufferAttribute(le,F),ce[ae+I+8]=a.x,ce[ae+I+9]=a.y,ce[ae+I+10]=a.z,ce[ae+I+11]=le.itemSize===4?a.w:1)}}p={count:g,texture:fe,size:new Ye(A,ie)},s.set(u,p),u.addEventListener("dispose",q)}let h=0;for(let E=0;E<d.length;E++)h+=d[E];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==x){g=[];for(let T=0;T<x;T++)g[T]=[T,0];i[u.id]=g}for(let T=0;T<x;T++){const w=g[T];w[0]=T,w[1]=d[T]}g.sort(Ex);for(let T=0;T<8;T++)T<x&&g[T][1]?(o[T][0]=g[T][0],o[T][1]=g[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Sx);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const w=o[T],P=w[0],C=w[1];P!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+T)!==p[P]&&u.setAttribute("morphTarget"+T,p[P]),h&&u.getAttribute("morphNormal"+T)!==h[P]&&u.setAttribute("morphNormal"+T,h[P]),r[T]=C,b+=C):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Tx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Hf=new zt,Gf=new Pf,Vf=new l_,kf=new Of,Gc=[],Vc=[],kc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),mt(t,i)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),mt(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),mt(t,i)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Hf,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vf,r)}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kf,r)}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gf,r)}function Wx(n){switch(n){case 5126:return bx;case 35664:return Ax;case 35665:return wx;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ux;case 35668:case 35672:return Ix;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return kx}}function Xx(n,e){n.uniform1fv(this.addr,e)}function qx(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Yx(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function jx(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Kx(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $x(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zx(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jx(n,e){n.uniform1iv(this.addr,e)}function Qx(n,e){n.uniform2iv(this.addr,e)}function e0(n,e){n.uniform3iv(this.addr,e)}function t0(n,e){n.uniform4iv(this.addr,e)}function n0(n,e){n.uniform1uiv(this.addr,e)}function i0(n,e){n.uniform2uiv(this.addr,e)}function r0(n,e){n.uniform3uiv(this.addr,e)}function s0(n,e){n.uniform4uiv(this.addr,e)}function o0(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Hf,s[a])}function a0(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vf,s[a])}function l0(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kf,s[a])}function c0(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gf,s[a])}function u0(n){switch(n){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return jx;case 35674:return Kx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class f0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Wx(t.type)}}class h0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=u0(t.type)}}class d0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function qc(n,e){n.seq.push(e),n.map[e.id]=e}function p0(n,e,t){const i=n.name,r=i.length;for(Jo.lastIndex=0;;){const s=Jo.exec(i),a=Jo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qc(t,c===void 0?new f0(o,n,e):new h0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new d0(o),qc(t,f)),t=f}}}class Us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);p0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const m0=37297;let _0=0;function g0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function v0(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Ws&&t===ks?i="LinearDisplayP3ToLinearSRGB":e===ks&&t===Ws&&(i="LinearSRGBToLinearDisplayP3"),n){case Wn:case oo:return[i,"LinearTransferOETF"];case vt:case Xa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g0(n.getShaderSource(e),a)}else return r}function x0(n,e){const t=v0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function M0(n,e){let t;switch(e){case mm:t="Linear";break;case _m:t="Reinhard";break;case gm:t="OptimizedCineon";break;case vm:t="ACESFilmic";break;case xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function S0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function E0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ar(n){return n!==""}function Kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(n){return n.replace(T0,A0)}const b0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function A0(n,e){let t=Ve[e];if(t===void 0){const i=b0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(w0,R0)}function R0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vf:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case pm:e="ENVMAP_BLENDING_ADD";break}return e}function U0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function I0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=C0(t),c=P0(t),u=L0(t),f=D0(t),d=U0(t),m=t.isWebGL2?"":S0(t),x=E0(s),g=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ar).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ar).join(`
`),h.length>0&&(h+=`
`)):(p=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),h=[m,Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ni?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Sa(a),a=Kc(a,t),a=$c(a,t),o=Sa(o),o=Kc(o,t),o=$c(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=b+p+a,T=b+h+o,w=Yc(r,r.VERTEX_SHADER,E),P=Yc(r,r.FRAGMENT_SHADER,T);r.attachShader(g,w),r.attachShader(g,P),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(ie){if(n.debug.checkShaderErrors){const ce=r.getProgramInfoLog(g).trim(),fe=r.getShaderInfoLog(w).trim(),N=r.getShaderInfoLog(P).trim();let q=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,P);else{const V=jc(r,w,"vertex"),re=jc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+V+`
`+re)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(fe===""||N==="")&&(Y=!1);Y&&(ie.diagnostics={runnable:q,programLog:ce,vertexShader:{log:fe,prefix:p},fragmentShader:{log:N,prefix:h}})}r.deleteShader(w),r.deleteShader(P),$=new Us(r,g),y=y0(r,g)}let $;this.getUniforms=function(){return $===void 0&&C(this),$};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(g,m0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=P,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O0(e),t.set(e,i)),i}}class O0{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}}function B0(n,e,t,i,r,s,a){const o=new Lf,l=new F0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,A,ie,ce,fe){const N=ce.fog,q=fe.geometry,Y=y.isMeshStandardMaterial?ce.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),re=V&&V.mapping===so?V.image.height:null,le=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,F=ae!==void 0?ae.length:0;let I=0;q.morphAttributes.position!==void 0&&(I=1),q.morphAttributes.normal!==void 0&&(I=2),q.morphAttributes.color!==void 0&&(I=3);let se,ne,he,me;if(le){const ut=vn[le];se=ut.vertexShader,ne=ut.fragmentShader}else se=y.vertexShader,ne=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const be=n.getRenderTarget(),Se=fe.isInstancedMesh===!0,Ce=!!y.map,Ke=!!y.matcap,Oe=!!V,_=!!y.aoMap,R=!!y.lightMap,U=!!y.bumpMap,B=!!y.normalMap,H=!!y.displacementMap,X=!!y.emissiveMap,ee=!!y.metalnessMap,Q=!!y.roughnessMap,oe=y.anisotropy>0,Z=y.clearcoat>0,Ee=y.iridescence>0,M=y.sheen>0,v=y.transmission>0,D=oe&&!!y.anisotropyMap,j=Z&&!!y.clearcoatMap,K=Z&&!!y.clearcoatNormalMap,te=Z&&!!y.clearcoatRoughnessMap,xe=Ee&&!!y.iridescenceMap,ue=Ee&&!!y.iridescenceThicknessMap,ge=M&&!!y.sheenColorMap,Ae=M&&!!y.sheenRoughnessMap,Xe=!!y.specularMap,de=!!y.specularColorMap,Be=!!y.specularIntensityMap,Re=v&&!!y.transmissionMap,Le=v&&!!y.thicknessMap,Pe=!!y.gradientMap,Te=!!y.alphaMap,je=y.alphaTest>0,L=!!y.alphaHash,Me=!!y.extensions,pe=!!q.attributes.uv1,J=!!q.attributes.uv2,_e=!!q.attributes.uv3;let De=ni;return y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(De=n.toneMapping),{isWebGL2:u,shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:ne,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Se,instancingColor:Se&&fe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Wn,map:Ce,matcap:Ke,envMap:Oe,envMapMode:Oe&&V.mapping,envMapCubeUVHeight:re,aoMap:_,lightMap:R,bumpMap:U,normalMap:B,displacementMap:d&&H,emissiveMap:X,normalMapObjectSpace:B&&y.normalMapType===Um,normalMapTangentSpace:B&&y.normalMapType===Dm,metalnessMap:ee,roughnessMap:Q,anisotropy:oe,anisotropyMap:D,clearcoat:Z,clearcoatMap:j,clearcoatNormalMap:K,clearcoatRoughnessMap:te,iridescence:Ee,iridescenceMap:xe,iridescenceThicknessMap:ue,sheen:M,sheenColorMap:ge,sheenRoughnessMap:Ae,specularMap:Xe,specularColorMap:de,specularIntensityMap:Be,transmission:v,transmissionMap:Re,thicknessMap:Le,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===rr,alphaMap:Te,alphaTest:je,alphaHash:L,combine:y.combine,mapUv:Ce&&g(y.map.channel),aoMapUv:_&&g(y.aoMap.channel),lightMapUv:R&&g(y.lightMap.channel),bumpMapUv:U&&g(y.bumpMap.channel),normalMapUv:B&&g(y.normalMap.channel),displacementMapUv:H&&g(y.displacementMap.channel),emissiveMapUv:X&&g(y.emissiveMap.channel),metalnessMapUv:ee&&g(y.metalnessMap.channel),roughnessMapUv:Q&&g(y.roughnessMap.channel),anisotropyMapUv:D&&g(y.anisotropyMap.channel),clearcoatMapUv:j&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(y.sheenRoughnessMap.channel),specularMapUv:Xe&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:Be&&g(y.specularIntensityMap.channel),transmissionMapUv:Re&&g(y.transmissionMap.channel),thicknessMapUv:Le&&g(y.thicknessMap.channel),alphaMapUv:Te&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(B||oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:J,vertexUv3s:_e,pointsUvs:fe.isPoints===!0&&!!q.attributes.uv&&(Ce||Te),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:fe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:I,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&ie.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Me&&y.extensions.derivatives===!0,extensionFragDepth:Me&&y.extensions.fragDepth===!0,extensionDrawBuffers:Me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const ie in y.defines)A.push(ie),A.push(y.defines[ie]);return y.isRawShaderMaterial===!1&&(b(A,y),E(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function b(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function E(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function T(y){const A=x[y.type];let ie;if(A){const ce=vn[A];ie=E_.clone(ce.uniforms)}else ie=y.uniforms;return ie}function w(y,A){let ie;for(let ce=0,fe=c.length;ce<fe;ce++){const N=c[ce];if(N.cacheKey===A){ie=N,++ie.usedTimes;break}}return ie===void 0&&(ie=new I0(n,A,y,s),c.push(ie)),ie}function P(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function $(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:w,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:$}}function z0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function H0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,g,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function o(f,d,m,x,g,p){const h=a(f,d,m,x,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,g,p){const h=a(f,d,m,x,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||H0),i.length>1&&i.sort(d||Qc),r.length>1&&r.sort(d||Qc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function G0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new eu,n.set(i,[a])):r>=s.length?(a=new eu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function k0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W0=0;function X0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q0(n,e){const t=new V0,i=k0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new it,o=new it;function l(u,f){let d=0,m=0,x=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let g=0,p=0,h=0,b=0,E=0,T=0,w=0,P=0,C=0,$=0,y=0;u.sort(X0);const A=f===!0?Math.PI:1;for(let ce=0,fe=u.length;ce<fe;ce++){const N=u[ce],q=N.color,Y=N.intensity,V=N.distance,re=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=q.r*Y*A,m+=q.g*Y*A,x+=q.b*Y*A;else if(N.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(N.sh.coefficients[le],Y);y++}else if(N.isDirectionalLight){const le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const ae=N.shadow,F=i.get(N);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,r.directionalShadow[g]=F,r.directionalShadowMap[g]=re,r.directionalShadowMatrix[g]=N.shadow.matrix,T++}r.directional[g]=le,g++}else if(N.isSpotLight){const le=t.get(N);le.position.setFromMatrixPosition(N.matrixWorld),le.color.copy(q).multiplyScalar(Y*A),le.distance=V,le.coneCos=Math.cos(N.angle),le.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),le.decay=N.decay,r.spot[h]=le;const ae=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,ae.updateMatrices(N),N.castShadow&&$++),r.spotLightMatrix[h]=ae.matrix,N.castShadow){const F=i.get(N);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,r.spotShadow[h]=F,r.spotShadowMap[h]=re,P++}h++}else if(N.isRectAreaLight){const le=t.get(N);le.color.copy(q).multiplyScalar(Y),le.halfWidth.set(N.width*.5,0,0),le.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=le,b++}else if(N.isPointLight){const le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*A),le.distance=N.distance,le.decay=N.decay,N.castShadow){const ae=N.shadow,F=i.get(N);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,F.shadowCameraNear=ae.camera.near,F.shadowCameraFar=ae.camera.far,r.pointShadow[p]=F,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=N.shadow.matrix,w++}r.point[p]=le,p++}else if(N.isHemisphereLight){const le=t.get(N);le.skyColor.copy(N.color).multiplyScalar(Y*A),le.groundColor.copy(N.groundColor).multiplyScalar(Y*A),r.hemi[E]=le,E++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const ie=r.hash;(ie.directionalLength!==g||ie.pointLength!==p||ie.spotLength!==h||ie.rectAreaLength!==b||ie.hemiLength!==E||ie.numDirectionalShadows!==T||ie.numPointShadows!==w||ie.numSpotShadows!==P||ie.numSpotMaps!==C||ie.numLightProbes!==y)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+C-$,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=$,r.numLightProbes=y,ie.directionalLength=g,ie.pointLength=p,ie.spotLength=h,ie.rectAreaLength=b,ie.hemiLength=E,ie.numDirectionalShadows=T,ie.numPointShadows=w,ie.numSpotShadows=P,ie.numSpotMaps=C,ie.numLightProbes=y,r.version=W0++)}function c(u,f){let d=0,m=0,x=0,g=0,p=0;const h=f.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const T=u[b];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(T.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),x++}else if(T.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function tu(n,e){const t=new q0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y0(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new tu(n,e),t.set(s,[l])):a>=o.length?(l=new tu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class j0 extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J0(n,e,t){let i=new Bf;const r=new Ye,s=new Ye,a=new xt,o=new j0({depthPacking:Lm}),l=new K0,c={},u=t.maxTextureSize,f={[si]:Bt,[Bt]:si,[On]:On},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:$0,fragmentShader:Z0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new qn;x.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let h=this.type;this.render=function(w,P,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const $=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(ti),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ce=h!==Dn&&this.type===Dn,fe=h===Dn&&this.type!==Dn;for(let N=0,q=w.length;N<q;N++){const Y=w[N],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||ce===!0||fe===!0){const ae=this.type!==Dn?{minFilter:Pt,magFilter:Pt}:{};V.map!==null&&V.map.dispose(),V.map=new Ri(r.x,r.y,ae),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const le=V.getViewportCount();for(let ae=0;ae<le;ae++){const F=V.getViewport(ae);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),ie.viewport(a),V.updateMatrices(Y,ae),i=V.getFrustum(),T(P,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Dn&&b(V,C),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget($,y,A)};function b(w,P){const C=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,C,d,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,C,m,g,null)}function E(w,P,C,$){let y=null;const A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ie=y.uuid,ce=P.uuid;let fe=c[ie];fe===void 0&&(fe={},c[ie]=fe);let N=fe[ce];N===void 0&&(N=y.clone(),fe[ce]=N),y=N}if(y.visible=P.visible,y.wireframe=P.wireframe,$===Dn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ie=n.properties.get(y);ie.light=C}return y}function T(w,P,C,$,y){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Dn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const ce=e.update(w),fe=w.material;if(Array.isArray(fe)){const N=ce.groups;for(let q=0,Y=N.length;q<Y;q++){const V=N[q],re=fe[V.materialIndex];if(re&&re.visible){const le=E(w,re,$,y);n.renderBufferDirect(C,null,ce,le,w,V)}}}else if(fe.visible){const N=E(w,fe,$,y);n.renderBufferDirect(C,null,ce,N,w,null)}}const ie=w.children;for(let ce=0,fe=ie.length;ce<fe;ce++)T(ie[ce],P,C,$,y)}}function Q0(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const Me=new xt;let pe=null;const J=new xt(0,0,0,0);return{setMask:function(_e){pe!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),pe=_e)},setLocked:function(_e){L=_e},setClear:function(_e,De,$e,ut,qt){qt===!0&&(_e*=ut,De*=ut,$e*=ut),Me.set(_e,De,$e,ut),J.equals(Me)===!1&&(n.clearColor(_e,De,$e,ut),J.copy(Me))},reset:function(){L=!1,pe=null,J.set(-1,0,0,0)}}}function s(){let L=!1,Me=null,pe=null,J=null;return{setTest:function(_e){_e?Ce(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(_e){Me!==_e&&!L&&(n.depthMask(_e),Me=_e)},setFunc:function(_e){if(pe!==_e){switch(_e){case om:n.depthFunc(n.NEVER);break;case am:n.depthFunc(n.ALWAYS);break;case lm:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case cm:n.depthFunc(n.EQUAL);break;case um:n.depthFunc(n.GEQUAL);break;case fm:n.depthFunc(n.GREATER);break;case hm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=_e}},setLocked:function(_e){L=_e},setClear:function(_e){J!==_e&&(n.clearDepth(_e),J=_e)},reset:function(){L=!1,Me=null,pe=null,J=null}}}function a(){let L=!1,Me=null,pe=null,J=null,_e=null,De=null,$e=null,ut=null,qt=null;return{setTest:function(st){L||(st?Ce(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(st){Me!==st&&!L&&(n.stencilMask(st),Me=st)},setFunc:function(st,bt,dn){(pe!==st||J!==bt||_e!==dn)&&(n.stencilFunc(st,bt,dn),pe=st,J=bt,_e=dn)},setOp:function(st,bt,dn){(De!==st||$e!==bt||ut!==dn)&&(n.stencilOp(st,bt,dn),De=st,$e=bt,ut=dn)},setLocked:function(st){L=st},setClear:function(st){qt!==st&&(n.clearStencil(st),qt=st)},reset:function(){L=!1,Me=null,pe=null,J=null,_e=null,De=null,$e=null,ut=null,qt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,g=[],p=null,h=!1,b=null,E=null,T=null,w=null,P=null,C=null,$=null,y=new Qe(0,0,0),A=0,ie=!1,ce=null,fe=null,N=null,q=null,Y=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=le>=1):ae.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=le>=2);let F=null,I={};const se=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),he=new xt().fromArray(se),me=new xt().fromArray(ne);function be(L,Me,pe,J){const _e=new Uint8Array(4),De=n.createTexture();n.bindTexture(L,De),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<pe;$e++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(Me+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return De}const Se={};Se[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Gs),ee(!1),Q(Ol),Ce(n.CULL_FACE),H(ti);function Ce(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ke(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Oe(L,Me){return m[L]!==Me?(n.bindFramebuffer(L,Me),m[L]=Me,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function _(L,Me){let pe=g,J=!1;if(L)if(pe=x.get(Me),pe===void 0&&(pe=[],x.set(Me,pe)),L.isWebGLMultipleRenderTargets){const _e=L.texture;if(pe.length!==_e.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let De=0,$e=_e.length;De<$e;De++)pe[De]=n.COLOR_ATTACHMENT0+De;pe.length=_e.length,J=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,J=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function R(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const U={[Mi]:n.FUNC_ADD,[Xp]:n.FUNC_SUBTRACT,[qp]:n.FUNC_REVERSE_SUBTRACT};if(i)U[Gl]=n.MIN,U[Vl]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(U[Gl]=L.MIN_EXT,U[Vl]=L.MAX_EXT)}const B={[Yp]:n.ZERO,[jp]:n.ONE,[Kp]:n.SRC_COLOR,[ha]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[Zp]:n.DST_ALPHA,[$p]:n.ONE_MINUS_SRC_COLOR,[da]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[rm]:n.CONSTANT_ALPHA,[sm]:n.ONE_MINUS_CONSTANT_ALPHA};function H(L,Me,pe,J,_e,De,$e,ut,qt,st){if(L===ti){h===!0&&(Ke(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),L!==Wp){if(L!==b||st!==ie){if((E!==Mi||P!==Mi)&&(n.blendEquation(n.FUNC_ADD),E=Mi,P=Mi),st)switch(L){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.ONE,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,w=null,C=null,$=null,y.set(0,0,0),A=0,b=L,ie=st}return}_e=_e||Me,De=De||pe,$e=$e||J,(Me!==E||_e!==P)&&(n.blendEquationSeparate(U[Me],U[_e]),E=Me,P=_e),(pe!==T||J!==w||De!==C||$e!==$)&&(n.blendFuncSeparate(B[pe],B[J],B[De],B[$e]),T=pe,w=J,C=De,$=$e),(ut.equals(y)===!1||qt!==A)&&(n.blendColor(ut.r,ut.g,ut.b,qt),y.copy(ut),A=qt),b=L,ie=!1}function X(L,Me){L.side===On?Ke(n.CULL_FACE):Ce(n.CULL_FACE);let pe=L.side===Bt;Me&&(pe=!pe),ee(pe),L.blending===rr&&L.transparent===!1?H(ti):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const J=L.stencilWrite;c.setTest(J),J&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){ce!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),ce=L)}function Q(L){L!==Gp?(Ce(n.CULL_FACE),L!==fe&&(L===Ol?n.cullFace(n.BACK):L===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),fe=L}function oe(L){L!==N&&(re&&n.lineWidth(L),N=L)}function Z(L,Me,pe){L?(Ce(n.POLYGON_OFFSET_FILL),(q!==Me||Y!==pe)&&(n.polygonOffset(Me,pe),q=Me,Y=pe)):Ke(n.POLYGON_OFFSET_FILL)}function Ee(L){L?Ce(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function M(L){L===void 0&&(L=n.TEXTURE0+V-1),F!==L&&(n.activeTexture(L),F=L)}function v(L,Me,pe){pe===void 0&&(F===null?pe=n.TEXTURE0+V-1:pe=F);let J=I[pe];J===void 0&&(J={type:void 0,texture:void 0},I[pe]=J),(J.type!==L||J.texture!==Me)&&(F!==pe&&(n.activeTexture(pe),F=pe),n.bindTexture(L,Me||Se[L]),J.type=L,J.texture=Me)}function D(){const L=I[F];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){he.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function Le(L){me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function Pe(L,Me){let pe=f.get(Me);pe===void 0&&(pe=new WeakMap,f.set(Me,pe));let J=pe.get(L);J===void 0&&(J=n.getUniformBlockIndex(Me,L.name),pe.set(L,J))}function Te(L,Me){const J=f.get(Me).get(L);u.get(Me)!==J&&(n.uniformBlockBinding(Me,J,L.__bindingPointIndex),u.set(Me,J))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},F=null,I={},m={},x=new WeakMap,g=[],p=null,h=!1,b=null,E=null,T=null,w=null,P=null,C=null,$=null,y=new Qe(0,0,0),A=0,ie=!1,ce=null,fe=null,N=null,q=null,Y=null,he.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Ke,bindFramebuffer:Oe,drawBuffers:_,useProgram:R,setBlending:H,setMaterial:X,setFlipSided:ee,setCullFace:Q,setLineWidth:oe,setPolygonOffset:Z,setScissorTest:Ee,activeTexture:M,bindTexture:v,unbindTexture:D,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:de,texImage3D:Be,updateUBOMapping:Pe,uniformBlockBinding:Te,texStorage2D:Ae,texStorage3D:Xe,texSubImage2D:te,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Re,viewport:Le,reset:je}}function eM(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,v){return h?new OffscreenCanvas(M,v):Ys("canvas")}function E(M,v,D,j){let K=1;if((M.width>j||M.height>j)&&(K=j/Math.max(M.width,M.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const te=v?qs:Math.floor,xe=te(K*M.width),ue=te(K*M.height);g===void 0&&(g=b(xe,ue));const ge=D?b(xe,ue):g;return ge.width=xe,ge.height=ue,ge.getContext("2d").drawImage(M,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+xe+"x"+ue+")."),ge}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return Ma(M.width)&&Ma(M.height)}function w(M){return o?!1:M.wrapS!==on||M.wrapT!==on||M.minFilter!==Pt&&M.minFilter!==$t}function P(M,v){return M.generateMipmaps&&v&&M.minFilter!==Pt&&M.minFilter!==$t}function C(M){n.generateMipmap(M)}function $(M,v,D,j,K=!1){if(o===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let te=v;if(v===n.RED&&(D===n.FLOAT&&(te=n.R32F),D===n.HALF_FLOAT&&(te=n.R16F),D===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(te=n.R8UI),D===n.UNSIGNED_SHORT&&(te=n.R16UI),D===n.UNSIGNED_INT&&(te=n.R32UI),D===n.BYTE&&(te=n.R8I),D===n.SHORT&&(te=n.R16I),D===n.INT&&(te=n.R32I)),v===n.RG&&(D===n.FLOAT&&(te=n.RG32F),D===n.HALF_FLOAT&&(te=n.RG16F),D===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const xe=K?Vs:tt.getTransfer(j);D===n.FLOAT&&(te=n.RGBA32F),D===n.HALF_FLOAT&&(te=n.RGBA16F),D===n.UNSIGNED_BYTE&&(te=xe===at?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(M,v,D){return P(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){return M===Pt||M===kl||M===bo?n.NEAREST:n.LINEAR}function ie(M){const v=M.target;v.removeEventListener("dispose",ie),fe(v),v.isVideoTexture&&x.delete(v)}function ce(M){const v=M.target;v.removeEventListener("dispose",ce),q(v)}function fe(M){const v=i.get(M);if(v.__webglInit===void 0)return;const D=M.source,j=p.get(D);if(j){const K=j[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(M),Object.keys(j).length===0&&p.delete(D)}i.remove(M)}function N(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const D=M.source,j=p.get(D);delete j[v.__cacheKey],a.memory.textures--}function q(M){const v=M.texture,D=i.get(M),j=i.get(v);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(D.__webglFramebuffer[K]))for(let te=0;te<D.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(D.__webglFramebuffer[K][te]);else n.deleteFramebuffer(D.__webglFramebuffer[K]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[K])}else{if(Array.isArray(D.__webglFramebuffer))for(let K=0;K<D.__webglFramebuffer.length;K++)n.deleteFramebuffer(D.__webglFramebuffer[K]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,te=v.length;K<te;K++){const xe=i.get(v[K]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(v[K])}i.remove(v),i.remove(M)}let Y=0;function V(){Y=0}function re(){const M=Y;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Y+=1,M}function le(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ae(M,v){const D=i.get(M);if(M.isVideoTexture&&Z(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(D,M,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function F(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ce(D,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function I(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ce(D,M,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function se(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ke(D,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const ne={[_a]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[ga]:n.MIRRORED_REPEAT},he={[Pt]:n.NEAREST,[kl]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Mm]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},me={[Im]:n.NEVER,[Gm]:n.ALWAYS,[Nm]:n.LESS,[Om]:n.LEQUAL,[Fm]:n.EQUAL,[Hm]:n.GEQUAL,[Bm]:n.GREATER,[zm]:n.NOTEQUAL};function be(M,v,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,ne[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ne[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ne[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,he[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,he[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==on||v.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Pt&&v.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Pt||v.minFilter!==bo&&v.minFilter!==Vr||v.type===ei&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===kr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Se(M,v){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",ie));const j=v.source;let K=p.get(j);K===void 0&&(K={},p.set(j,K));const te=le(v);if(te!==M.__cacheKey){K[te]===void 0&&(K[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[te].usedTimes++;const xe=K[M.__cacheKey];xe!==void 0&&(K[M.__cacheKey].usedTimes--,xe.usedTimes===0&&N(v)),M.__cacheKey=te,M.__webglTexture=K[te].texture}return D}function Ce(M,v,D){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const K=Se(M,v),te=v.source;t.bindTexture(j,M.__webglTexture,n.TEXTURE0+D);const xe=i.get(te);if(te.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const ue=tt.getPrimaries(tt.workingColorSpace),ge=v.colorSpace===Qt?null:tt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Qt||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Xe=w(v)&&T(v.image)===!1;let de=E(v.image,Xe,!1,u);de=Ee(v,de);const Be=T(de)||o,Re=s.convert(v.format,v.colorSpace);let Le=s.convert(v.type),Pe=$(v.internalFormat,Re,Le,v.colorSpace,v.isVideoTexture);be(j,v,Be);let Te;const je=v.mipmaps,L=o&&v.isVideoTexture!==!0,Me=xe.__version===void 0||K===!0,pe=y(v,de,Be);if(v.isDepthTexture)Pe=n.DEPTH_COMPONENT,o?v.type===ei?Pe=n.DEPTH_COMPONENT32F:v.type===Qn?Pe=n.DEPTH_COMPONENT24:v.type===bi?Pe=n.DEPTH24_STENCIL8:Pe=n.DEPTH_COMPONENT16:v.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ai&&Pe===n.DEPTH_COMPONENT&&v.type!==Wa&&v.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Qn,Le=s.convert(v.type)),v.format===ur&&Pe===n.DEPTH_COMPONENT&&(Pe=n.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,Le=s.convert(v.type))),Me&&(L?t.texStorage2D(n.TEXTURE_2D,1,Pe,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Pe,de.width,de.height,0,Re,Le,null));else if(v.isDataTexture)if(je.length>0&&Be){L&&Me&&t.texStorage2D(n.TEXTURE_2D,pe,Pe,je[0].width,je[0].height);for(let J=0,_e=je.length;J<_e;J++)Te=je[J],L?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Re,Le,Te.data):t.texImage2D(n.TEXTURE_2D,J,Pe,Te.width,Te.height,0,Re,Le,Te.data);v.generateMipmaps=!1}else L?(Me&&t.texStorage2D(n.TEXTURE_2D,pe,Pe,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Re,Le,de.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,de.width,de.height,0,Re,Le,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Pe,je[0].width,je[0].height,de.depth);for(let J=0,_e=je.length;J<_e;J++)Te=je[J],v.format!==an?Re!==null?L?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,de.depth,Re,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Pe,Te.width,Te.height,de.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,de.depth,Re,Le,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Pe,Te.width,Te.height,de.depth,0,Re,Le,Te.data)}else{L&&Me&&t.texStorage2D(n.TEXTURE_2D,pe,Pe,je[0].width,je[0].height);for(let J=0,_e=je.length;J<_e;J++)Te=je[J],v.format!==an?Re!==null?L?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Te.width,Te.height,Re,Le,Te.data):t.texImage2D(n.TEXTURE_2D,J,Pe,Te.width,Te.height,0,Re,Le,Te.data)}else if(v.isDataArrayTexture)L?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Pe,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Le,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,Re,Le,de.data);else if(v.isData3DTexture)L?(Me&&t.texStorage3D(n.TEXTURE_3D,pe,Pe,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Le,de.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,Re,Le,de.data);else if(v.isFramebufferTexture){if(Me)if(L)t.texStorage2D(n.TEXTURE_2D,pe,Pe,de.width,de.height);else{let J=de.width,_e=de.height;for(let De=0;De<pe;De++)t.texImage2D(n.TEXTURE_2D,De,Pe,J,_e,0,Re,Le,null),J>>=1,_e>>=1}}else if(je.length>0&&Be){L&&Me&&t.texStorage2D(n.TEXTURE_2D,pe,Pe,je[0].width,je[0].height);for(let J=0,_e=je.length;J<_e;J++)Te=je[J],L?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Re,Le,Te):t.texImage2D(n.TEXTURE_2D,J,Pe,Re,Le,Te);v.generateMipmaps=!1}else L?(Me&&t.texStorage2D(n.TEXTURE_2D,pe,Pe,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Le,de)):t.texImage2D(n.TEXTURE_2D,0,Pe,Re,Le,de);P(v,Be)&&C(j),xe.__version=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Ke(M,v,D){if(v.image.length!==6)return;const j=Se(M,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const te=i.get(K);if(K.version!==te.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const xe=tt.getPrimaries(tt.workingColorSpace),ue=v.colorSpace===Qt?null:tt.getPrimaries(v.colorSpace),ge=v.colorSpace===Qt||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Xe=v.image[0]&&v.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!Ae&&!Xe?de[J]=E(v.image[J],!1,!0,c):de[J]=Xe?v.image[J].image:v.image[J],de[J]=Ee(v,de[J]);const Be=de[0],Re=T(Be)||o,Le=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Te=$(v.internalFormat,Le,Pe,v.colorSpace),je=o&&v.isVideoTexture!==!0,L=te.__version===void 0||j===!0;let Me=y(v,Be,Re);be(n.TEXTURE_CUBE_MAP,v,Re);let pe;if(Ae){je&&L&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,Be.width,Be.height);for(let J=0;J<6;J++){pe=de[J].mipmaps;for(let _e=0;_e<pe.length;_e++){const De=pe[_e];v.format!==an?Le!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Te,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,De.width,De.height,Le,Pe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Te,De.width,De.height,0,Le,Pe,De.data)}}}else{pe=v.mipmaps,je&&L&&(pe.length>0&&Me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,de[0].width,de[0].height));for(let J=0;J<6;J++)if(Xe){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Le,Pe,de[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Te,de[J].width,de[J].height,0,Le,Pe,de[J].data);for(let _e=0;_e<pe.length;_e++){const $e=pe[_e].image[J].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,$e.width,$e.height,Le,Pe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Te,$e.width,$e.height,0,Le,Pe,$e.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Pe,de[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Te,Le,Pe,de[J]);for(let _e=0;_e<pe.length;_e++){const De=pe[_e];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Le,Pe,De.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Te,Le,Pe,De.image[J])}}}P(v,Re)&&C(n.TEXTURE_CUBE_MAP),te.__version=K.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Oe(M,v,D,j,K,te){const xe=s.convert(D.format,D.colorSpace),ue=s.convert(D.type),ge=$(D.internalFormat,xe,ue,D.colorSpace);if(!i.get(v).__hasExternalTextures){const Xe=Math.max(1,v.width>>te),de=Math.max(1,v.height>>te);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,te,ge,Xe,de,v.depth,0,xe,ue,null):t.texImage2D(K,te,ge,Xe,de,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),oe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,i.get(D).__webglTexture,0,Q(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,i.get(D).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(M,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let j=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||oe(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===ei?j=n.DEPTH_COMPONENT32F:K.type===Qn&&(j=n.DEPTH_COMPONENT24));const te=Q(v);oe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,j,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,j,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const j=Q(v);D&&oe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):oe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const j=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<j.length;K++){const te=j[K],xe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ge=$(te.internalFormat,xe,ue,te.colorSpace),Ae=Q(v);D&&oe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,v.width,v.height):oe(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function R(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ae(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,K=Q(v);if(v.depthTexture.format===Ai)oe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===ur)oe(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function U(M){const v=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");R(v.__webglFramebuffer,M)}else if(D){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=n.createRenderbuffer(),_(v.__webglDepthbuffer[j],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),_(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(M,v,D){const j=i.get(M);v!==void 0&&Oe(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&U(M)}function H(M){const v=M.texture,D=i.get(M),j=i.get(v);M.addEventListener("dispose",ce),M.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,te=M.isWebGLMultipleRenderTargets===!0,xe=T(M)||o;if(K){D.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ue]=[];for(let ge=0;ge<v.mipmaps.length;ge++)D.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else D.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)D.__webglFramebuffer[ue]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const ue=M.texture;for(let ge=0,Ae=ue.length;ge<Ae;ge++){const Xe=i.get(ue[ge]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&oe(M)===!1){const ue=te?v:[v];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ge=0;ge<ue.length;ge++){const Ae=ue[ge];D.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ge]);const Xe=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),Be=$(Ae.internalFormat,Xe,de,Ae.colorSpace,M.isXRRenderTarget===!0),Re=Q(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Be,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,D.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),be(n.TEXTURE_CUBE_MAP,v,xe);for(let ue=0;ue<6;ue++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Oe(D.__webglFramebuffer[ue][ge],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else Oe(D.__webglFramebuffer[ue],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);P(v,xe)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=M.texture;for(let ge=0,Ae=ue.length;ge<Ae;ge++){const Xe=ue[ge],de=i.get(Xe);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),be(n.TEXTURE_2D,Xe,xe),Oe(D.__webglFramebuffer,M,Xe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),P(Xe,xe)&&C(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,j.__webglTexture),be(ue,v,xe),o&&v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Oe(D.__webglFramebuffer[ge],M,v,n.COLOR_ATTACHMENT0,ue,ge);else Oe(D.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ue,0);P(v,xe)&&C(ue),t.unbindTexture()}M.depthBuffer&&U(M)}function X(M){const v=T(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0,K=D.length;j<K;j++){const te=D[j];if(P(te,v)){const xe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(te).__webglTexture;t.bindTexture(xe,ue),C(xe),t.unbindTexture()}}}function ee(M){if(o&&M.samples>0&&oe(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,j=M.height;let K=n.COLOR_BUFFER_BIT;const te=[],xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(M),ge=M.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){te.push(n.COLOR_ATTACHMENT0+Ae),M.depthBuffer&&te.push(xe);const Xe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Xe===!1&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),ge){const de=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,K,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Xe=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Q(M){return Math.min(f,M.samples)}function oe(M){const v=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(M){const v=a.render.frame;x.get(M)!==v&&(x.set(M,v),M.update())}function Ee(M,v){const D=M.colorSpace,j=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===xa||D!==Wn&&D!==Qt&&(tt.getTransfer(D)===at?o===!1?e.has("EXT_sRGB")===!0&&j===an?(M.format=xa,M.minFilter=$t,M.generateMipmaps=!1):v=Rf.sRGBToLinear(v):(j!==an||K!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=re,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=se,this.rebindTextures=B,this.setupRenderTarget=H,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=oe}function tM(n,e,t){const i=t.isWebGL2;function r(s,a=Qt){let o;const l=tt.getTransfer(a);if(s===ii)return n.UNSIGNED_BYTE;if(s===Sf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ef)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Sm)return n.BYTE;if(s===Em)return n.SHORT;if(s===Wa)return n.UNSIGNED_SHORT;if(s===Mf)return n.INT;if(s===Qn)return n.UNSIGNED_INT;if(s===ei)return n.FLOAT;if(s===kr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ym)return n.ALPHA;if(s===an)return n.RGBA;if(s===Tm)return n.LUMINANCE;if(s===bm)return n.LUMINANCE_ALPHA;if(s===Ai)return n.DEPTH_COMPONENT;if(s===ur)return n.DEPTH_STENCIL;if(s===xa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Am)return n.RED;if(s===yf)return n.RED_INTEGER;if(s===wm)return n.RG;if(s===Tf)return n.RG_INTEGER;if(s===bf)return n.RGBA_INTEGER;if(s===Ao||s===wo||s===Ro||s===Co)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wl||s===Xl||s===ql||s===Yl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jl||s===Kl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===jl)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Kl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$l||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===$l)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ql)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ec)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ic)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ac)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Po||s===uc||s===fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Po)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cm||s===hc||s===dc||s===pc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Po)return o.COMPRESSED_RED_RGTC1_EXT;if(s===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class nM extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ts extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rM extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ai&&(i=Qn),i===void 0&&u===ur&&(i=bi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sM extends hr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const g=t.getContextAttributes();let p=null,h=null;const b=[],E=[],T=new Jt;T.layers.enable(1),T.viewport=new xt;const w=new Jt;w.layers.enable(2),w.viewport=new xt;const P=[T,w],C=new nM;C.layers.enable(1),C.layers.enable(2);let $=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let I=b[F];return I===void 0&&(I=new Qo,b[F]=I),I.getTargetRaySpace()},this.getControllerGrip=function(F){let I=b[F];return I===void 0&&(I=new Qo,b[F]=I),I.getGripSpace()},this.getHand=function(F){let I=b[F];return I===void 0&&(I=new Qo,b[F]=I),I.getHandSpace()};function A(F){const I=E.indexOf(F.inputSource);if(I===-1)return;const se=b[I];se!==void 0&&(se.update(F.inputSource,F.frame,c||a),se.dispatchEvent({type:F.type,data:F.inputSource}))}function ie(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ce);for(let F=0;F<b.length;F++){const I=E[F];I!==null&&(E[F]=null,b[F].disconnect(I))}$=null,y=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,I),r.updateRenderState({baseLayer:m}),h=new Ri(m.framebufferWidth,m.framebufferHeight,{format:an,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let I=null,se=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,I=g.stencil?ur:Ai,se=g.stencil?bi:Qn);const he={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),h=new Ri(d.textureWidth,d.textureHeight,{format:an,type:ii,depthTexture:new rM(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const me=e.properties.get(h);me.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ce(F){for(let I=0;I<F.removed.length;I++){const se=F.removed[I],ne=E.indexOf(se);ne>=0&&(E[ne]=null,b[ne].disconnect(se))}for(let I=0;I<F.added.length;I++){const se=F.added[I];let ne=E.indexOf(se);if(ne===-1){for(let me=0;me<b.length;me++)if(me>=E.length){E.push(se),ne=me;break}else if(E[me]===null){E[me]=se,ne=me;break}if(ne===-1)break}const he=b[ne];he&&he.connect(se)}}const fe=new z,N=new z;function q(F,I,se){fe.setFromMatrixPosition(I.matrixWorld),N.setFromMatrixPosition(se.matrixWorld);const ne=fe.distanceTo(N),he=I.projectionMatrix.elements,me=se.projectionMatrix.elements,be=he[14]/(he[10]-1),Se=he[14]/(he[10]+1),Ce=(he[9]+1)/he[5],Ke=(he[9]-1)/he[5],Oe=(he[8]-1)/he[0],_=(me[8]+1)/me[0],R=be*Oe,U=be*_,B=ne/(-Oe+_),H=B*-Oe;I.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(H),F.translateZ(B),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const X=be+B,ee=Se+B,Q=R-H,oe=U+(ne-H),Z=Ce*Se/ee*X,Ee=Ke*Se/ee*X;F.projectionMatrix.makePerspective(Q,oe,Z,Ee,X,ee),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Y(F,I){I===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(I.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;C.near=w.near=T.near=F.near,C.far=w.far=T.far=F.far,($!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),$=C.near,y=C.far);const I=F.parent,se=C.cameras;Y(C,I);for(let ne=0;ne<se.length;ne++)Y(se[ne],I);se.length===2?q(C,T,w):C.projectionMatrix.copy(T.projectionMatrix),V(F,C,I)};function V(F,I,se){se===null?F.matrix.copy(I.matrixWorld):(F.matrix.copy(se.matrixWorld),F.matrix.invert(),F.matrix.multiply(I.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(I.projectionMatrix),F.projectionMatrixInverse.copy(I.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Wr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let re=null;function le(F,I){if(u=I.getViewerPose(c||a),x=I,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ne=!1;se.length!==C.cameras.length&&(C.cameras.length=0,ne=!0);for(let he=0;he<se.length;he++){const me=se[he];let be=null;if(m!==null)be=m.getViewport(me);else{const Ce=f.getViewSubImage(d,me);be=Ce.viewport,he===0&&(e.setRenderTargetTextures(h,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(h))}let Se=P[he];Se===void 0&&(Se=new Jt,Se.layers.enable(he),Se.viewport=new xt,P[he]=Se),Se.matrix.fromArray(me.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(me.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(be.x,be.y,be.width,be.height),he===0&&(C.matrix.copy(Se.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ne===!0&&C.cameras.push(Se)}}for(let se=0;se<b.length;se++){const ne=E[se],he=b[se];ne!==null&&he!==void 0&&he.update(ne,I,c||a)}re&&re(F,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),x=null}const ae=new zf;ae.setAnimationLoop(le),this.setAnimationLoop=function(F){re=F},this.dispose=function(){}}}function oM(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Nf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,E,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,E){const T=E.program;i.uniformBlockBinding(b,T)}function c(b,E){let T=r[b.id];T===void 0&&(x(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(b,w);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const E=f();b.__bindingPointIndex=E;const T=n.createBuffer(),w=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],T=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,C=T.length;P<C;P++){const $=T[P];if(m($,P,w)===!0){const y=$.__offset,A=Array.isArray($.value)?$.value:[$.value];let ie=0;for(let ce=0;ce<A.length;ce++){const fe=A[ce],N=g(fe);typeof fe=="number"?($.__data[0]=fe,n.bufferSubData(n.UNIFORM_BUFFER,y+ie,$.__data)):fe.isMatrix3?($.__data[0]=fe.elements[0],$.__data[1]=fe.elements[1],$.__data[2]=fe.elements[2],$.__data[3]=fe.elements[0],$.__data[4]=fe.elements[3],$.__data[5]=fe.elements[4],$.__data[6]=fe.elements[5],$.__data[7]=fe.elements[0],$.__data[8]=fe.elements[6],$.__data[9]=fe.elements[7],$.__data[10]=fe.elements[8],$.__data[11]=fe.elements[0]):(fe.toArray($.__data,ie),ie+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,$.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,T){const w=b.value;if(T[E]===void 0){if(typeof w=="number")T[E]=w;else{const P=Array.isArray(w)?w:[w],C=[];for(let $=0;$<P.length;$++)C.push(P[$].clone());T[E]=C}return!0}else if(typeof w=="number"){if(T[E]!==w)return T[E]=w,!0}else{const P=Array.isArray(T[E])?T[E]:[T[E]],C=Array.isArray(w)?w:[w];for(let $=0;$<P.length;$++){const y=P[$];if(y.equals(C[$])===!1)return y.copy(C[$]),!0}}return!1}function x(b){const E=b.uniforms;let T=0;const w=16;let P=0;for(let C=0,$=E.length;C<$;C++){const y=E[C],A={boundary:0,storage:0},ie=Array.isArray(y.value)?y.value:[y.value];for(let ce=0,fe=ie.length;ce<fe;ce++){const N=ie[ce],q=g(N);A.boundary+=q.boundary,A.storage+=q.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,C>0){P=T%w;const ce=w-P;P!==0&&ce-A.boundary<0&&(T+=w-P,y.__offset=T)}T+=A.storage}return P=T%w,P>0&&(T+=w-P),b.__size=T,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Wf{constructor(e={}){const{canvas:t=i_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const E=this;let T=!1,w=0,P=0,C=null,$=-1,y=null;const A=new xt,ie=new xt;let ce=null;const fe=new Qe(0);let N=0,q=t.width,Y=t.height,V=1,re=null,le=null;const ae=new xt(0,0,q,Y),F=new xt(0,0,q,Y);let I=!1;const se=new Bf;let ne=!1,he=!1,me=null;const be=new it,Se=new Ye,Ce=new z,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return C===null?V:1}let _=i;function R(S,O){for(let G=0;G<S.length;G++){const k=S[G],W=t.getContext(k,O);if(W!==null)return W}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",Me,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&O.shift(),_=R(O,S),_===null)throw R(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let U,B,H,X,ee,Q,oe,Z,Ee,M,v,D,j,K,te,xe,ue,ge,Ae,Xe,de,Be,Re,Le;function Pe(){U=new gx(_),B=new ux(_,U,e),U.init(B),Be=new tM(_,U,B),H=new Q0(_,U,B),X=new Mx(_),ee=new z0,Q=new eM(_,U,H,ee,B,Be,X),oe=new hx(E),Z=new _x(E),Ee=new C_(_,B),Re=new lx(_,U,Ee,B),M=new vx(_,Ee,X,Re),v=new Tx(_,M,Ee,X),Ae=new yx(_,B,Q),xe=new fx(ee),D=new B0(E,oe,Z,U,B,Re,xe),j=new oM(E,ee),K=new G0,te=new Y0(U,B),ge=new ax(E,oe,Z,H,v,d,l),ue=new J0(E,v,B),Le=new aM(_,X,B,H),Xe=new cx(_,U,X,B),de=new xx(_,U,X,B),X.programs=D.programs,E.capabilities=B,E.extensions=U,E.properties=ee,E.renderLists=K,E.shadowMap=ue,E.state=H,E.info=X}Pe();const Te=new sM(E,_);this.xr=Te,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=U.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=U.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(q,Y,!1))},this.getSize=function(S){return S.set(q,Y)},this.setSize=function(S,O,G=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,Y=O,t.width=Math.floor(S*V),t.height=Math.floor(O*V),G===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(S,O,G){q=S,Y=O,V=G,t.width=Math.floor(S*G),t.height=Math.floor(O*G),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(ae)},this.setViewport=function(S,O,G,k){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,O,G,k),H.viewport(A.copy(ae).multiplyScalar(V).floor())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,O,G,k){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,O,G,k),H.scissor(ie.copy(F).multiplyScalar(V).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(S){H.setScissorTest(I=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(S=!0,O=!0,G=!0){let k=0;if(S){let W=!1;if(C!==null){const ye=C.texture.format;W=ye===bf||ye===Tf||ye===yf}if(W){const ye=C.texture.type,we=ye===ii||ye===Qn||ye===Wa||ye===bi||ye===Sf||ye===Ef,Ue=ge.getClearColor(),Ne=ge.getClearAlpha(),ke=Ue.r,ze=Ue.g,Ge=Ue.b;we?(m[0]=ke,m[1]=ze,m[2]=Ge,m[3]=Ne,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=ke,x[1]=ze,x[2]=Ge,x[3]=Ne,_.clearBufferiv(_.COLOR,0,x))}else k|=_.COLOR_BUFFER_BIT}O&&(k|=_.DEPTH_BUFFER_BIT),G&&(k|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),K.dispose(),te.dispose(),ee.dispose(),oe.dispose(),Z.dispose(),v.dispose(),Re.dispose(),Le.dispose(),D.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",qt),Te.removeEventListener("sessionend",st),me&&(me.dispose(),me=null),bt.stop()};function je(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=X.autoReset,O=ue.enabled,G=ue.autoUpdate,k=ue.needsUpdate,W=ue.type;Pe(),X.autoReset=S,ue.enabled=O,ue.autoUpdate=G,ue.needsUpdate=k,ue.type=W}function Me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const O=S.target;O.removeEventListener("dispose",pe),J(O)}function J(S){_e(S),ee.remove(S)}function _e(S){const O=ee.get(S).programs;O!==void 0&&(O.forEach(function(G){D.releaseProgram(G)}),S.isShaderMaterial&&D.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,G,k,W,ye){O===null&&(O=Ke);const we=W.isMesh&&W.matrixWorld.determinant()<0,Ue=jf(S,O,G,k,W);H.setMaterial(k,we);let Ne=G.index,ke=1;if(k.wireframe===!0){if(Ne=M.getWireframeAttribute(G),Ne===void 0)return;ke=2}const ze=G.drawRange,Ge=G.attributes.position;let ct=ze.start*ke,Gt=(ze.start+ze.count)*ke;ye!==null&&(ct=Math.max(ct,ye.start*ke),Gt=Math.min(Gt,(ye.start+ye.count)*ke)),Ne!==null?(ct=Math.max(ct,0),Gt=Math.min(Gt,Ne.count)):Ge!=null&&(ct=Math.max(ct,0),Gt=Math.min(Gt,Ge.count));const _t=Gt-ct;if(_t<0||_t===1/0)return;Re.setup(W,k,Ue,G,Ne);let bn,lt=Xe;if(Ne!==null&&(bn=Ee.get(Ne),lt=de,lt.setIndex(bn)),W.isMesh)k.wireframe===!0?(H.setLineWidth(k.wireframeLinewidth*Oe()),lt.setMode(_.LINES)):lt.setMode(_.TRIANGLES);else if(W.isLine){let qe=k.linewidth;qe===void 0&&(qe=1),H.setLineWidth(qe*Oe()),W.isLineSegments?lt.setMode(_.LINES):W.isLineLoop?lt.setMode(_.LINE_LOOP):lt.setMode(_.LINE_STRIP)}else W.isPoints?lt.setMode(_.POINTS):W.isSprite&&lt.setMode(_.TRIANGLES);if(W.isInstancedMesh)lt.renderInstances(ct,_t,W.count);else if(G.isInstancedBufferGeometry){const qe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,co=Math.min(G.instanceCount,qe);lt.renderInstances(ct,_t,co)}else lt.render(ct,_t)};function De(S,O,G){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Jr(S,O,G),S.side=si,S.needsUpdate=!0,Jr(S,O,G),S.side=On):Jr(S,O,G)}this.compile=function(S,O,G=null){G===null&&(G=S),p=te.get(G),p.init(),b.push(p),G.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==G&&S.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(E._useLegacyLights);const k=new Set;return S.traverse(function(W){const ye=W.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const Ue=ye[we];De(Ue,G,W),k.add(Ue)}else De(ye,G,W),k.add(ye)}),b.pop(),p=null,k},this.compileAsync=function(S,O,G=null){const k=this.compile(S,O,G);return new Promise(W=>{function ye(){if(k.forEach(function(we){ee.get(we).currentProgram.isReady()&&k.delete(we)}),k.size===0){W(S);return}setTimeout(ye,10)}U.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $e=null;function ut(S){$e&&$e(S)}function qt(){bt.stop()}function st(){bt.start()}const bt=new zf;bt.setAnimationLoop(ut),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(S){$e=S,Te.setAnimationLoop(S),S===null?bt.stop():bt.start()},Te.addEventListener("sessionstart",qt),Te.addEventListener("sessionend",st),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(O),O=Te.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,O,C),p=te.get(S,b.length),p.init(),b.push(p),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(be),he=this.localClippingEnabled,ne=xe.init(this.clippingPlanes,he),g=K.get(S,h.length),g.init(),h.push(g),dn(S,O,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(re,le),this.info.render.frame++,ne===!0&&xe.beginShadows();const G=p.state.shadowsArray;if(ue.render(G,S,O),ne===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(g,S),p.setupLights(E._useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let W=0,ye=k.length;W<ye;W++){const we=k[W];Ja(g,S,we,we.viewport)}}else Ja(g,S,O);C!==null&&(Q.updateMultisampleRenderTarget(C),Q.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(E,S,O),Re.resetDefaultState(),$=-1,y=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function dn(S,O,G,k){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||se.intersectsSprite(S)){k&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);const we=v.update(S),Ue=S.material;Ue.visible&&g.push(S,we,Ue,G,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||se.intersectsObject(S))){const we=v.update(S),Ue=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(Ue)){const Ne=we.groups;for(let ke=0,ze=Ne.length;ke<ze;ke++){const Ge=Ne[ke],ct=Ue[Ge.materialIndex];ct&&ct.visible&&g.push(S,we,ct,G,Ce.z,Ge)}}else Ue.visible&&g.push(S,we,Ue,G,Ce.z,null)}}const ye=S.children;for(let we=0,Ue=ye.length;we<Ue;we++)dn(ye[we],O,G,k)}function Ja(S,O,G,k){const W=S.opaque,ye=S.transmissive,we=S.transparent;p.setupLightsView(G),ne===!0&&xe.setGlobalState(E.clippingPlanes,G),ye.length>0&&Yf(W,ye,O,G),k&&H.viewport(A.copy(k)),W.length>0&&Zr(W,O,G),ye.length>0&&Zr(ye,O,G),we.length>0&&Zr(we,O,G),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Yf(S,O,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ye=B.isWebGL2;me===null&&(me=new Ri(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?kr:ii,minFilter:Vr,samples:ye?4:0})),E.getDrawingBufferSize(Se),ye?me.setSize(Se.x,Se.y):me.setSize(qs(Se.x),qs(Se.y));const we=E.getRenderTarget();E.setRenderTarget(me),E.getClearColor(fe),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear();const Ue=E.toneMapping;E.toneMapping=ni,Zr(S,G,k),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me);let Ne=!1;for(let ke=0,ze=O.length;ke<ze;ke++){const Ge=O[ke],ct=Ge.object,Gt=Ge.geometry,_t=Ge.material,bn=Ge.group;if(_t.side===On&&ct.layers.test(k.layers)){const lt=_t.side;_t.side=Bt,_t.needsUpdate=!0,Qa(ct,G,k,Gt,_t,bn),_t.side=lt,_t.needsUpdate=!0,Ne=!0}}Ne===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me)),E.setRenderTarget(we),E.setClearColor(fe,N),E.toneMapping=Ue}function Zr(S,O,G){const k=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ye=S.length;W<ye;W++){const we=S[W],Ue=we.object,Ne=we.geometry,ke=k===null?we.material:k,ze=we.group;Ue.layers.test(G.layers)&&Qa(Ue,O,G,Ne,ke,ze)}}function Qa(S,O,G,k,W,ye){S.onBeforeRender(E,O,G,k,W,ye),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(E,O,G,k,S,ye),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=Bt,W.needsUpdate=!0,E.renderBufferDirect(G,O,k,W,S,ye),W.side=si,W.needsUpdate=!0,E.renderBufferDirect(G,O,k,W,S,ye),W.side=On):E.renderBufferDirect(G,O,k,W,S,ye),S.onAfterRender(E,O,G,k,W,ye)}function Jr(S,O,G){O.isScene!==!0&&(O=Ke);const k=ee.get(S),W=p.state.lights,ye=p.state.shadowsArray,we=W.state.version,Ue=D.getParameters(S,W.state,ye,O,G),Ne=D.getProgramCacheKey(Ue);let ke=k.programs;k.environment=S.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(S.isMeshStandardMaterial?Z:oe).get(S.envMap||k.environment),ke===void 0&&(S.addEventListener("dispose",pe),ke=new Map,k.programs=ke);let ze=ke.get(Ne);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===we)return tl(S,Ue),ze}else Ue.uniforms=D.getUniforms(S),S.onBuild(G,Ue,E),S.onBeforeCompile(Ue,E),ze=D.acquireProgram(Ue,Ne),ke.set(Ne,ze),k.uniforms=Ue.uniforms;const Ge=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=xe.uniform),tl(S,Ue),k.needsLights=$f(S),k.lightsStateVersion=we,k.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),k.currentProgram=ze,k.uniformsList=null,ze}function el(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function tl(S,O){const G=ee.get(S);G.outputColorSpace=O.outputColorSpace,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function jf(S,O,G,k,W){O.isScene!==!0&&(O=Ke),Q.resetTextureUnits();const ye=O.fog,we=k.isMeshStandardMaterial?O.environment:null,Ue=C===null?E.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wn,Ne=(k.isMeshStandardMaterial?Z:oe).get(k.envMap||we),ke=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ge=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Gt=!!G.morphAttributes.color;let _t=ni;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=E.toneMapping);const bn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=bn!==void 0?bn.length:0,qe=ee.get(k),co=p.state.lights;if(ne===!0&&(he===!0||S!==y)){const Vt=S===y&&k.id===$;xe.setState(k,S,Vt)}let ft=!1;k.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==co.state.version||qe.outputColorSpace!==Ue||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Ne||k.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==xe.numPlanes||qe.numIntersection!==xe.numIntersection)||qe.vertexAlphas!==ke||qe.vertexTangents!==ze||qe.morphTargets!==Ge||qe.morphNormals!==ct||qe.morphColors!==Gt||qe.toneMapping!==_t||B.isWebGL2===!0&&qe.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,qe.__version=k.version);let ai=qe.currentProgram;ft===!0&&(ai=Jr(k,O,W));let nl=!1,mr=!1,uo=!1;const At=ai.getUniforms(),li=qe.uniforms;if(H.useProgram(ai.program)&&(nl=!0,mr=!0,uo=!0),k.id!==$&&($=k.id,mr=!0),nl||y!==S){At.setValue(_,"projectionMatrix",S.projectionMatrix),At.setValue(_,"viewMatrix",S.matrixWorldInverse);const Vt=At.map.cameraPosition;Vt!==void 0&&Vt.setValue(_,Ce.setFromMatrixPosition(S.matrixWorld)),B.logarithmicDepthBuffer&&At.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,mr=!0,uo=!0)}if(W.isSkinnedMesh){At.setOptional(_,W,"bindMatrix"),At.setOptional(_,W,"bindMatrixInverse");const Vt=W.skeleton;Vt&&(B.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(_,"boneTexture",Vt.boneTexture,Q),At.setValue(_,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fo=G.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&B.isWebGL2===!0)&&Ae.update(W,G,ai),(mr||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,At.setValue(_,"receiveShadow",W.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(li.envMap.value=Ne,li.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),mr&&(At.setValue(_,"toneMappingExposure",E.toneMappingExposure),qe.needsLights&&Kf(li,uo),ye&&k.fog===!0&&j.refreshFogUniforms(li,ye),j.refreshMaterialUniforms(li,k,V,Y,me),Us.upload(_,el(qe),li,Q)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(_,el(qe),li,Q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue(_,"center",W.center),At.setValue(_,"modelViewMatrix",W.modelViewMatrix),At.setValue(_,"normalMatrix",W.normalMatrix),At.setValue(_,"modelMatrix",W.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vt=k.uniformsGroups;for(let ho=0,Zf=Vt.length;ho<Zf;ho++)if(B.isWebGL2){const il=Vt[ho];Le.update(il,ai),Le.bind(il,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Kf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function $f(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,G){ee.get(S.texture).__webglTexture=O,ee.get(S.depthTexture).__webglTexture=G;const k=ee.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const G=ee.get(S);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,G=0){C=S,w=O,P=G;let k=!0,W=null,ye=!1,we=!1;if(S){const Ne=ee.get(S);Ne.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(_.FRAMEBUFFER,null),k=!1):Ne.__webglFramebuffer===void 0?Q.setupRenderTarget(S):Ne.__hasExternalTextures&&Q.rebindTextures(S,ee.get(S.texture).__webglTexture,ee.get(S.depthTexture).__webglTexture);const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?W=ze[O][G]:W=ze[O],ye=!0):B.isWebGL2&&S.samples>0&&Q.useMultisampledRTT(S)===!1?W=ee.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[G]:W=ze,A.copy(S.viewport),ie.copy(S.scissor),ce=S.scissorTest}else A.copy(ae).multiplyScalar(V).floor(),ie.copy(F).multiplyScalar(V).floor(),ce=I;if(H.bindFramebuffer(_.FRAMEBUFFER,W)&&B.drawBuffers&&k&&H.drawBuffers(S,W),H.viewport(A),H.scissor(ie),H.setScissorTest(ce),ye){const Ne=ee.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,G)}else if(we){const Ne=ee.get(S.texture),ke=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,ke)}$=-1},this.readRenderTargetPixels=function(S,O,G,k,W,ye,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){H.bindFramebuffer(_.FRAMEBUFFER,Ue);try{const Ne=S.texture,ke=Ne.format,ze=Ne.type;if(ke!==an&&Be.convert(ke)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===kr&&(U.has("EXT_color_buffer_half_float")||B.isWebGL2&&U.has("EXT_color_buffer_float"));if(ze!==ii&&Be.convert(ze)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ei&&(B.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-k&&G>=0&&G<=S.height-W&&_.readPixels(O,G,k,W,Be.convert(ke),Be.convert(ze),ye)}finally{const Ne=C!==null?ee.get(C).__webglFramebuffer:null;H.bindFramebuffer(_.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(S,O,G=0){const k=Math.pow(2,-G),W=Math.floor(O.image.width*k),ye=Math.floor(O.image.height*k);Q.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,G,0,0,S.x,S.y,W,ye),H.unbindTexture()},this.copyTextureToTexture=function(S,O,G,k=0){const W=O.image.width,ye=O.image.height,we=Be.convert(G.format),Ue=Be.convert(G.type);Q.setTexture2D(G,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,G.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,k,S.x,S.y,W,ye,we,Ue,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,k,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,k,S.x,S.y,we,Ue,O.image),k===0&&G.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(S,O,G,k,W=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Ue=S.max.z-S.min.z+1,Ne=Be.convert(k.format),ke=Be.convert(k.type);let ze;if(k.isData3DTexture)Q.setTexture3D(k,0),ze=_.TEXTURE_3D;else if(k.isDataArrayTexture)Q.setTexture2DArray(k,0),ze=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,k.unpackAlignment);const Ge=_.getParameter(_.UNPACK_ROW_LENGTH),ct=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Gt=_.getParameter(_.UNPACK_SKIP_PIXELS),_t=_.getParameter(_.UNPACK_SKIP_ROWS),bn=_.getParameter(_.UNPACK_SKIP_IMAGES),lt=G.isCompressedTexture?G.mipmaps[0]:G.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,lt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,lt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,S.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,S.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,S.min.z),G.isDataTexture||G.isData3DTexture?_.texSubImage3D(ze,W,O.x,O.y,O.z,ye,we,Ue,Ne,ke,lt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(ze,W,O.x,O.y,O.z,ye,we,Ue,Ne,lt.data)):_.texSubImage3D(ze,W,O.x,O.y,O.z,ye,we,Ue,Ne,ke,lt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Ge),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Gt),_.pixelStorei(_.UNPACK_SKIP_ROWS,_t),_.pixelStorei(_.UNPACK_SKIP_IMAGES,bn),W===0&&k.generateMipmaps&&_.generateMipmap(ze),H.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),H.unbindTexture()},this.resetState=function(){w=0,P=0,C=null,H.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xa?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===oo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?wi:Af}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?vt:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lM extends Wf{}lM.prototype.isWebGL1Renderer=!0;class cM extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=va,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new z;class js{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xf extends Kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const Er=new z,ji=new z,Ki=new z,$i=new Ye,yr=new Ye,qf=new it,bs=new z,Tr=new z,As=new z,nu=new Ye,ea=new Ye,iu=new Ye;class fM extends Ht{constructor(e=new Xf){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new qn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uM(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new js(i,3,0,!1)),Yi.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ws(bs.set(-.5,-.5,0),Ki,a,ji,r,s),ws(Tr.set(.5,-.5,0),Ki,a,ji,r,s),ws(As.set(.5,.5,0),Ki,a,ji,r,s),nu.set(0,0),ea.set(1,0),iu.set(1,1);let o=e.ray.intersectTriangle(bs,Tr,As,!1,Er);if(o===null&&(ws(Tr.set(-.5,.5,0),Ki,a,ji,r,s),ea.set(0,1),o=e.ray.intersectTriangle(bs,As,Tr,!1,Er),o===null))return;const l=e.ray.origin.distanceTo(Er);l<e.near||l>e.far||t.push({distance:l,point:Er.clone(),uv:Zt.getInterpolation(Er,bs,Tr,As,nu,ea,iu,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ws(n,e,t,i,r,s){$i.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(yr.x=s*$i.x-r*$i.y,yr.y=r*$i.x+s*$i.y):yr.copy($i),n.copy(e),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(qf)}class hM extends zt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Za extends qn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,m=new z,x=new Ye;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){const h=s+p/i*a;m.x=f*Math.cos(h),m.y=f*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}f+=d}for(let g=0;g<r;g++){const p=g*(i+1);for(let h=0;h<i;h++){const b=h+p,E=b,T=b+i+1,w=b+i+2,P=b+1;o.push(E,T,P),o.push(T,w,P)}}this.setIndex(o),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(c,3)),this.setAttribute("uv",new En(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);const dM=["disabled"],pM={key:0,class:"empty-list"},mM={class:"object-info"},_M=["onClick"],gM={key:0},vM={key:1,class:"tag-input-overlay"},xM={class:"tag-input-box"},MM={class:"tag-input-div"},SM=["onKeydown"],EM=5,yM=.1,TM=za({__name:"ARComponent",props:{roomId:{}},setup(n){const e=n,t=jt(),i=jt(!1),r=jt(null),s=jt(!1),a=jt(""),o=jt(!1),l=hf(()=>b.map(I=>({name:I.sprite.userData.text||"Sans nom",position:I.sprite.position.clone()})));let c,u,f,d,m,x,g=null,p=null,h=null,b=[],E=new it,T=new it,w=.1,P=[];const C=()=>{const I=b.map(se=>{var ne;return{name:se.sprite.userData.text||"",position:se.sprite.position,baseMatrix:(ne=se.baseMatrix)==null?void 0:ne.elements}});sessionStorage.setItem(`arTags_${e.roomId}`,JSON.stringify(I))},$=()=>{const I=sessionStorage.getItem(`arTags_${e.roomId}`);if(!I)return[];try{return JSON.parse(I)}catch(se){return console.error("Failed to load tags from sessionStorage:",se),[]}},y=I=>{for(const se of b){const ne=new z;if(ne.setFromMatrixPosition(se.sprite.matrixWorld),ne.distanceTo(I)<yM)return!0}return!1},A=()=>{o.value=!o.value},ie=I=>{const se=b[I];if(se){if(c.remove(se.sprite),se.anchor&&se.anchor.delete)try{se.anchor.delete()}catch{}b.splice(I,1),C()}},ce=I=>{for(const ne of b)if(c.remove(ne.sprite),ne.anchor&&ne.anchor.delete)try{ne.anchor.delete()}catch{}b=[];const se=fe(I);for(const ne of se){const he=Y(ne.name);ne.position&&he.position.copy(ne.position);const me=ne.baseMatrix?new it().fromArray(ne.baseMatrix):new it().setPosition(ne.position);c.add(he),b.push({sprite:he,baseMatrix:me})}},fe=I=>{const se=sessionStorage.getItem(`arTags_${I}`);if(!se)return[];try{return JSON.parse(se)}catch(ne){return console.error("Failed to load tags from sessionStorage:",ne),[]}};Bs(()=>{N()});const N=async()=>{if("xr"in navigator){const I=await navigator.xr.isSessionSupported("immersive-ar");r.value=I}else r.value=!1},q=async()=>{var me;if(!r.value)return;const I=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}});f=new Wf({antialias:!0,alpha:!0}),f.setSize(window.innerWidth,window.innerHeight),f.xr.enabled=!0,f.xr.setReferenceSpaceType("local"),f.xr.setSession(I),(me=t.value)==null||me.appendChild(f.domElement);const se=()=>{var be;f.setAnimationLoop(null),i.value=!1,s.value=!1,g!=null&&g.cancel&&g.cancel(),g=null,p=null,(be=t.value)!=null&&be.contains(f.domElement)&&t.value.removeChild(f.domElement);for(const Se of b){if(Se.anchor&&Se.anchor.delete)try{Se.anchor.delete()}catch{}c.remove(Se.sprite)}b=[],f.dispose()};I.addEventListener("end",se),c=new cM,u=new Jt(70,window.innerWidth/window.innerHeight,.01,20);const ne=$();for(const be of ne){const Se=Y(be.name);be.position&&Se.position.copy(be.position);const Ce=be.baseMatrix?new it().fromArray(be.baseMatrix):new it().setPosition(be.position);c.add(Se),b.push({sprite:Se,baseMatrix:Ce})}const he=new Za(.15,.2,32).rotateX(-Math.PI/2);x=new ja({color:16777215}),m=new zn(he,x),m.matrixAutoUpdate=!1,m.visible=!1,c.add(m),T.identity(),d=f.xr.getController(0),d.addEventListener("select",V),c.add(d),I.requestReferenceSpace("viewer").then(be=>{I.requestHitTestSource({space:be}).then(Se=>{g=Se})}),I.requestReferenceSpace("local").then(be=>{p=be}),f.setAnimationLoop(F),i.value=!0},Y=I=>{const he=document.createElement("canvas"),me=he.getContext("2d");me.font="64px Arial";const be=me.measureText(I),Se=Math.ceil(be.width),Ce=64;he.width=Se+20*2,he.height=Ce+20*2,me.font="64px Arial",me.textAlign="center",me.textBaseline="middle",me.fillStyle="rgba(0, 0, 0, 0.6)",me.fillRect(0,0,he.width,he.height),me.fillStyle="white",me.fillText(I,he.width/2,he.height/2);const Ke=new hM(he);Ke.needsUpdate=!0;const Oe=new Xf({map:Ke,transparent:!0}),_=new fM(Oe);_.userData.text=I;const R=.001;return _.scale.set(he.width*R,he.height*R,1),_},V=()=>{m.visible&&(E.copy(m.matrix),a.value="",s.value=!0)},re=()=>{if(!i.value){alert("L’AR n’est pas encore démarré.");return}if(!m||!m.visible){alert("Aucune surface détectée actuellement. Veuillez attendre que le réticule apparaisse.");return}E.copy(m.matrix),a.value="",s.value=!0},le=()=>{const I=a.value.trim();if(!I){ae();return}const se=new z;if(se.setFromMatrixPosition(E),y(se)){alert("Position trop proche d'un tag existant. Veuillez choisir un autre emplacement."),ae();return}const ne=(me,be)=>{const Se=Y(I);Se.position.setFromMatrixPosition(me),c.add(Se),b.push({sprite:Se,anchor:be,baseMatrix:me.clone()}),C()};(async()=>{if(h!=null&&h.createAnchor)try{const me=await h.createAnchor();ne(E,me);return}catch(me){console.warn("WebXR anchor creation failed, fallback on position only",me)}ne(E)})().catch(()=>ne(E)),s.value=!1,a.value=""},ae=()=>{s.value=!1,a.value=""},F=(I,se)=>{if(se){if(g&&p){const ne=se.getHitTestResults(g);if(ne.length){const he=ne[0];h=he;const me=he.getPose(p);if(me){m.visible=!0;const be=new it().fromArray(me.transform.matrix);if(P.push(be),P.length>EM&&P.shift(),P.length>0){const Se=[],Ce=[];P.forEach(B=>{const H=new z,X=new dr,ee=new z;B.decompose(H,X,ee),Se.push(H),Ce.push(X)});const Ke=Se.reduce((B,H)=>B.add(H),new z).divideScalar(Se.length);let Oe=Ce[0].clone();for(let B=1;B<Ce.length;B++)Oe.slerp(Ce[B],.5);const _=new it;_.compose(Ke,Oe,new z(1,1,1));const R=w;for(let B=0;B<16;B++)T.elements[B]=n_.lerp(T.elements[B],_.elements[B],R);m.matrix.copy(T);const U=new z;U.setFromMatrixPosition(T),y(U)?x.color.setHex(16711680):x.color.setHex(16777215)}}}else m.visible=!1,P=[]}for(const ne of b)if(ne.anchor&&p){const he=ne.anchor.anchorSpace||ne.anchor,me=se.getPose(he,p);if(me){const be=new it().fromArray(me.transform.matrix);ne.sprite.position.setFromMatrixPosition(be)}}else ne.baseMatrix&&ne.sprite.position.setFromMatrixPosition(ne.baseMatrix)}f.render(c,u)};return Bs(()=>{setTimeout(()=>{q()},500)}),Ps(()=>e.roomId,(I,se)=>{I!==se&&i.value&&ce(I)}),(I,se)=>(Dt(),Ot(Kt,null,[Ie("div",{id:"ar-container",ref_key:"container",ref:t},null,512),Ie("button",{class:"panel-toggle btn-panel",onClick:A},vi(o.value?"Fermer la liste":"Liste des objets"),1),Ie("button",{class:"add-tag-btn btn-panel",onClick:re,disabled:!i.value}," Ajouter un objet ",8,dM),Ie("aside",{class:Js(["objects-panel",{open:o.value}]),"aria-label":"Liste des objets AR"},[Ie("div",{class:"panel-header"},[se[1]||(se[1]=Ie("h3",null,"Objets AR",-1)),Ie("button",{class:"close-panel",onClick:A},"✕")]),l.value.length===0?(Dt(),Ot("div",pM,"Aucun objet placé")):Ti("",!0),Ie("ul",null,[(Dt(!0),Ot(Kt,null,Vu(l.value,(ne,he)=>(Dt(),Ot("li",{key:he},[Ie("div",mM,[Ie("strong",null,vi(ne.name),1),Ie("small",null,"("+vi(ne.position.x.toFixed(2))+", "+vi(ne.position.y.toFixed(2))+", "+vi(ne.position.z.toFixed(2))+")",1)]),Ie("button",{class:"delete-object-btn",onClick:me=>ie(he)},"Supprimer",8,_M)]))),128))])],2),r.value===!1?(Dt(),Ot("p",gM,"Votre navigateur ne supporte pas WebXR AR.")):Ti("",!0),s.value?(Dt(),Ot("div",vM,[Ie("div",xM,[Ie("label",null,[Ie("div",MM,[se[2]||(se[2]=xi(" Nom : ",-1)),Nu(Ie("input",{"onUpdate:modelValue":se[0]||(se[0]=ne=>a.value=ne),onKeydown:mf(vp(le,["prevent"]),["enter"]),placeholder:"Entrez le nom...",autofocus:""},null,40,SM),[[pf,a.value]])])])])])):Ti("",!0)],64))}}),bM=_f(TM,[["__scopeId","data-v-c3b433e9"]]),AM={key:0},wM={key:1},RM=za({__name:"App",setup(n){const e=jt("rooms"),t=jt(null),i=s=>{t.value=s,e.value="ar"},r=()=>{e.value="rooms",t.value=null};return(s,a)=>e.value==="rooms"?(Dt(),Ot("div",AM,[un(Hp,{onSelectRoom:i})])):e.value==="ar"&&t.value?(Dt(),Ot("div",wM,[Ie("button",{onClick:r,class:"back-btn"},"Retour aux Pièces"),un(bM,{roomId:t.value},null,8,["roomId"])])):Ti("",!0)}});Ep(RM).mount("#app");
