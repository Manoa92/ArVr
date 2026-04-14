(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ha(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const rt={},ji=[],_n=()=>{},iu=()=>!1,Ns=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),da=n=>n.startsWith("onUpdate:"),St=Object.assign,pa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},eh=Object.prototype.hasOwnProperty,Qe=(n,e)=>eh.call(n,e),ze=Array.isArray,Ki=n=>Ur(n)==="[object Map]",ru=n=>Ur(n)==="[object Set]",Ya=n=>Ur(n)==="[object Date]",ke=n=>typeof n=="function",ht=n=>typeof n=="string",xn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",su=n=>(tt(n)||ke(n))&&ke(n.then)&&ke(n.catch),ou=Object.prototype.toString,Ur=n=>ou.call(n),th=n=>Ur(n).slice(8,-1),au=n=>Ur(n)==="[object Object]",ma=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vr=ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Os=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nh=/-\w/g,rn=Os(n=>n.replace(nh,e=>e.slice(1).toUpperCase())),ih=/\B([A-Z])/g,Ti=Os(n=>n.replace(ih,"-$1").toLowerCase()),lu=Os(n=>n.charAt(0).toUpperCase()+n.slice(1)),Js=Os(n=>n?`on${lu(n)}`:""),mn=(n,e)=>!Object.is(n,e),Qs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ja;const Fs=()=>ja||(ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?lh(i):ga(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||tt(n))return n}const sh=/;(?![^(]*\))/g,oh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function lh(n){const e={};return n.replace(ah,"").split(sh).forEach(t=>{if(t){const i=t.split(oh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _a(n){let e="";if(ht(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=_a(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ch="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uh=ha(ch);function uu(n){return!!n||n===""}function fh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=va(n[i],e[i]);return t}function va(n,e){if(n===e)return!0;let t=Ya(n),i=Ya(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=xn(n),i=xn(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?fh(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!va(n[a],e[a]))return!1}}return String(n)===String(e)}const fu=n=>!!(n&&n.__v_isRef===!0),qn=n=>ht(n)?n:n==null?"":ze(n)||tt(n)&&(n.toString===ou||!ke(n.toString))?fu(n)?qn(n.value):JSON.stringify(n,hu,2):String(n),hu=(n,e)=>fu(e)?hu(n,e.value):Ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[eo(i,s)+" =>"]=r,t),{})}:ru(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>eo(t))}:xn(e)?eo(e):tt(e)&&!ze(e)&&!au(e)?String(e):e,eo=(n,e="")=>{var t;return xn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class hh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dh(){return Ot}let it;const to=new WeakSet;class du{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,to.has(this)&&(to.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ka(this),gu(this);const e=it,t=sn;it=this,sn=!0;try{return this.fn()}finally{_u(this),it=e,sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sa(e);this.deps=this.depsTail=void 0,Ka(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?to.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wo(this)&&this.run()}get dirty(){return Wo(this)}}let pu=0,xr,Mr;function mu(n,e=!1){if(n.flags|=8,e){n.next=Mr,Mr=n;return}n.next=xr,xr=n}function xa(){pu++}function Ma(){if(--pu>0)return;if(Mr){let e=Mr;for(Mr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xr;){let e=xr;for(xr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function gu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _u(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Sa(i),ph(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Wo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ar)||(n.globalVersion=Ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Wo(n))))return;n.flags|=2;const e=n.dep,t=it,i=sn;it=n,sn=!0;try{gu(n);const r=n.fn(n._value);(e.version===0||mn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,sn=i,_u(n),n.flags&=-3}}function Sa(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Sa(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ph(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let sn=!0;const xu=[];function On(){xu.push(sn),sn=!1}function Fn(){const n=xu.pop();sn=n===void 0?!0:n}function Ka(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Ar=0;class mh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ea{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!sn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new mh(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Mu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){xa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ma()}}}function Mu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xo=new WeakMap,gi=Symbol(""),qo=Symbol(""),wr=Symbol("");function Tt(n,e,t){if(sn&&it){let i=Xo.get(n);i||Xo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ea),r.map=i,r.key=t),r.track()}}function Ln(n,e,t,i,r,s){const a=Xo.get(n);if(!a){Ar++;return}const o=l=>{l&&l.trigger()};if(xa(),e==="clear")a.forEach(o);else{const l=ze(n),c=l&&ma(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===wr||!xn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(wr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(gi)),Ki(n)&&o(a.get(qo)));break;case"delete":l||(o(a.get(gi)),Ki(n)&&o(a.get(qo)));break;case"set":Ki(n)&&o(a.get(gi));break}}Ma()}function wi(n){const e=Je(n);return e===n?e:(Tt(e,"iterate",wr),$t(n)?e:e.map(on))}function Bs(n){return Tt(n=Je(n),"iterate",wr),n}function fn(n,e){return Bn(n)?er(_i(n)?on(e):e):on(e)}const gh={__proto__:null,[Symbol.iterator](){return no(this,Symbol.iterator,n=>fn(this,n))},concat(...n){return wi(this).concat(...n.map(e=>ze(e)?wi(e):e))},entries(){return no(this,"entries",n=>(n[1]=fn(this,n[1]),n))},every(n,e){return En(this,"every",n,e,void 0,arguments)},filter(n,e){return En(this,"filter",n,e,t=>t.map(i=>fn(this,i)),arguments)},find(n,e){return En(this,"find",n,e,t=>fn(this,t),arguments)},findIndex(n,e){return En(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return En(this,"findLast",n,e,t=>fn(this,t),arguments)},findLastIndex(n,e){return En(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return En(this,"forEach",n,e,void 0,arguments)},includes(...n){return io(this,"includes",n)},indexOf(...n){return io(this,"indexOf",n)},join(n){return wi(this).join(n)},lastIndexOf(...n){return io(this,"lastIndexOf",n)},map(n,e){return En(this,"map",n,e,void 0,arguments)},pop(){return lr(this,"pop")},push(...n){return lr(this,"push",n)},reduce(n,...e){return $a(this,"reduce",n,e)},reduceRight(n,...e){return $a(this,"reduceRight",n,e)},shift(){return lr(this,"shift")},some(n,e){return En(this,"some",n,e,void 0,arguments)},splice(...n){return lr(this,"splice",n)},toReversed(){return wi(this).toReversed()},toSorted(n){return wi(this).toSorted(n)},toSpliced(...n){return wi(this).toSpliced(...n)},unshift(...n){return lr(this,"unshift",n)},values(){return no(this,"values",n=>fn(this,n))}};function no(n,e,t){const i=Bs(n),r=i[e]();return i!==n&&!$t(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const _h=Array.prototype;function En(n,e,t,i,r,s){const a=Bs(n),o=a!==n&&!$t(n),l=a[e];if(l!==_h[e]){const f=l.apply(n,s);return o?on(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,fn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function $a(n,e,t,i){const r=Bs(n),s=r!==n&&!$t(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=fn(n,c)),t.call(this,c,fn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?fn(n,l):l}function io(n,e,t){const i=Je(n);Tt(i,"iterate",wr);const r=i[e](...t);return(r===-1||r===!1)&&Aa(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function lr(n,e,t=[]){On(),xa();const i=Je(n)[e].apply(n,t);return Ma(),Fn(),i}const vh=ha("__proto__,__v_isRef,__isVue"),Su=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xn));function xh(n){xn(n)||(n=String(n));const e=Je(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Eu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ch:Au:s?bu:Tu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!r){let l;if(a&&(l=gh[t]))return l;if(t==="hasOwnProperty")return xh}const o=Reflect.get(e,t,bt(e)?e:i);if((xn(t)?Su.has(t):vh(t))||(r||Tt(e,"get",t),s))return o;if(bt(o)){const l=a&&ma(t)?o:o.value;return r&&tt(l)?jo(l):l}return tt(o)?r?jo(o):Ta(o):o}}class yu extends Eu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=ze(e)&&ma(t);if(!this._isShallow){const c=Bn(s);if(!$t(i)&&!Bn(i)&&(s=Je(s),i=Je(i)),!a&&bt(s)&&!bt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,bt(e)?e:r);return e===Je(r)&&(o?mn(i,s)&&Ln(e,"set",t,i):Ln(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ln(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!xn(t)||!Su.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",ze(e)?"length":gi),Reflect.ownKeys(e)}}class Mh extends Eu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Sh=new yu,Eh=new Mh,yh=new yu(!0);const Yo=n=>n,Vr=n=>Reflect.getPrototypeOf(n);function Th(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=Ki(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Yo:e?er:on;return!e&&Tt(s,"iterate",l?qo:gi),St(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function kr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bh(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(mn(r,o)&&Tt(a,"get",r),Tt(a,"get",o));const{has:l}=Vr(a),c=e?Yo:n?er:on;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Tt(Je(r),"iterate",gi),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(mn(r,o)&&Tt(a,"has",r),Tt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?Yo:n?er:on;return!n&&Tt(l,"iterate",gi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return St(t,n?{add:kr("add"),set:kr("set"),delete:kr("delete"),clear:kr("clear")}:{add(r){const s=Je(this),a=Vr(s),o=Je(r),l=!e&&!$t(r)&&!Bn(r)?o:r;return a.has.call(s,l)||mn(r,l)&&a.has.call(s,r)||mn(o,l)&&a.has.call(s,o)||(s.add(l),Ln(s,"add",l,l)),this},set(r,s){!e&&!$t(s)&&!Bn(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=Vr(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?mn(s,u)&&Ln(a,"set",r,s):Ln(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=Vr(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ln(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Ln(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Th(r,n,e)}),t}function ya(n,e){const t=bh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const Ah={get:ya(!1,!1)},wh={get:ya(!1,!0)},Rh={get:ya(!0,!1)};const Tu=new WeakMap,bu=new WeakMap,Au=new WeakMap,Ch=new WeakMap;function Ph(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lh(n){return n.__v_skip||!Object.isExtensible(n)?0:Ph(th(n))}function Ta(n){return Bn(n)?n:ba(n,!1,Sh,Ah,Tu)}function Dh(n){return ba(n,!1,yh,wh,bu)}function jo(n){return ba(n,!0,Eh,Rh,Au)}function ba(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Lh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function _i(n){return Bn(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function Bn(n){return!!(n&&n.__v_isReadonly)}function $t(n){return!!(n&&n.__v_isShallow)}function Aa(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Uh(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&cu(n,"__v_skip",!0),n}const on=n=>tt(n)?Ta(n):n,er=n=>tt(n)?jo(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function ln(n){return wu(n,!1)}function Ih(n){return wu(n,!0)}function wu(n,e){return bt(n)?n:new Nh(n,e)}class Nh{constructor(e,t){this.dep=new Ea,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:on(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||$t(e)||Bn(e);e=i?e:Je(e),mn(e,t)&&(this._rawValue=e,this._value=i?e:on(e),this.dep.trigger())}}function Oh(n){return bt(n)?n.value:n}const Fh={get:(n,e,t)=>e==="__v_raw"?n:Oh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ru(n){return _i(n)?n:new Proxy(n,Fh)}class Bh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ea(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return mu(this,!0),!0}get value(){const e=this.dep.track();return vu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zh(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new Bh(i,r,t)}const Wr={},ys=new WeakMap;let fi;function Hh(n,e=!1,t=fi){if(t){let i=ys.get(t);i||ys.set(t,i=[]),i.push(n)}}function Gh(n,e,t=rt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:$t(y)||r===!1||r===0?Kn(y,1):Kn(y);let u,f,d,m,x=!1,v=!1;if(bt(n)?(f=()=>n.value,x=$t(n)):_i(n)?(f=()=>c(n),x=!0):ze(n)?(v=!0,x=n.some(y=>_i(y)||$t(y)),f=()=>n.map(y=>{if(bt(y))return y.value;if(_i(y))return c(y);if(ke(y))return l?l(y,2):y()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){On();try{d()}finally{Fn()}}const y=fi;fi=u;try{return l?l(n,3,[m]):n(m)}finally{fi=y}}:f=_n,e&&r){const y=f,A=r===!0?1/0:r;f=()=>Kn(y(),A)}const p=dh(),h=()=>{u.stop(),p&&p.active&&pa(p.effects,u)};if(s&&e){const y=e;e=(...A)=>{y(...A),h()}}let b=v?new Array(n.length).fill(Wr):Wr;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(r||x||(v?A.some((D,R)=>mn(D,b[R])):mn(A,b))){d&&d();const D=fi;fi=u;try{const R=[A,b===Wr?void 0:v&&b[0]===Wr?[]:b,m];b=A,l?l(e,3,R):e(...R)}finally{fi=D}}}else u.run()};return o&&o(S),u=new du(f),u.scheduler=a?()=>a(S,!1):S,m=y=>Hh(y,!1,u),d=u.onStop=()=>{const y=ys.get(u);if(y){if(l)l(y,4);else for(const A of y)A();ys.delete(u)}},e?i?S(!0):b=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Kn(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Kn(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Kn(n[i],e,t);else if(ru(n)||Ki(n))n.forEach(i=>{Kn(i,e,t)});else if(au(n)){for(const i in n)Kn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ir(n,e,t,i){try{return i?n(...i):n()}catch(r){zs(r,e,t)}}function Mn(n,e,t,i){if(ke(n)){const r=Ir(n,e,t,i);return r&&su(r)&&r.catch(s=>{zs(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Mn(n[s],e,t,i));return r}}function zs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||rt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){On(),Ir(s,null,10,[n,l,c]),Fn();return}}Vh(n,t,r,i,a)}function Vh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let un=-1;const $i=[];let Yn=null,qi=0;const Cu=Promise.resolve();let Ts=null;function Pu(n){const e=Ts||Cu;return n?e.then(this?n.bind(this):n):e}function kh(n){let e=un+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Rr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function wa(n){if(!(n.flags&1)){const e=Rr(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Rr(t)?Lt.push(n):Lt.splice(kh(e),0,n),n.flags|=1,Lu()}}function Lu(){Ts||(Ts=Cu.then(Uu))}function Wh(n){ze(n)?$i.push(...n):Yn&&n.id===-1?Yn.splice(qi+1,0,n):n.flags&1||($i.push(n),n.flags|=1),Lu()}function Za(n,e,t=un+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Du(n){if($i.length){const e=[...new Set($i)].sort((t,i)=>Rr(t)-Rr(i));if($i.length=0,Yn){Yn.push(...e);return}for(Yn=e,qi=0;qi<Yn.length;qi++){const t=Yn[qi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,qi=0}}const Rr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uu(n){try{for(un=0;un<Lt.length;un++){const e=Lt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Lt.length;un++){const e=Lt[un];e&&(e.flags&=-2)}un=-1,Lt.length=0,Du(),Ts=null,(Lt.length||$i.length)&&Uu()}}let gn=null,Iu=null;function bs(n){const e=gn;return gn=n,Iu=n&&n.type.__scopeId||null,e}function Xh(n,e=gn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ll(-1);const s=bs(e);let a;try{a=n(...r)}finally{bs(s),i._d&&ll(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function si(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(On(),Mn(l,t,8,[n.el,o,n,e]),Fn())}}function qh(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function vs(n,e,t=!1){const i=Xd();if(i||Zi){let r=Zi?Zi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Yh=Symbol.for("v-scx"),jh=()=>vs(Yh);function ro(n,e,t){return Nu(n,e,t)}function Nu(n,e,t=rt){const{immediate:i,deep:r,flush:s,once:a}=t,o=St({},t),l=e&&i||!e&&s!=="post";let c;if(Pr){if(s==="sync"){const m=jh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=_n,m.resume=_n,m.pause=_n,m}}const u=Ut;o.call=(m,x,v)=>Mn(m,u,x,v);let f=!1;s==="post"?o.scheduler=m=>{Nt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():wa(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Gh(n,e,o);return Pr&&(c?c.push(d):l&&d()),d}function Kh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Ou(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=Nr(this),o=Nu(r,s.bind(i),t);return a(),o}function Ou(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const $h=Symbol("_vte"),Zh=n=>n.__isTeleport,Jh=Symbol("_leaveCb");function Ra(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ra(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Fu(n,e){return ke(n)?St({name:n.name},e,{setup:n}):n}function Bu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ja(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const As=new WeakMap;function Sr(n,e,t,i,r=!1){if(ze(n)){n.forEach((v,p)=>Sr(v,e&&(ze(e)?e[p]:e),t,i,r));return}if(Er(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Sr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Da(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===rt?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===rt?iu:v=>Ja(u,v)?!1:Qe(d,v),x=(v,p)=>!(p&&Ja(u,p));if(c!=null&&c!==l){if(Qa(e),ht(c))u[c]=null,m(c)&&(f[c]=null);else if(bt(c)){const v=e;x(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ke(l))Ir(l,o,12,[a,u]);else{const v=ht(l),p=bt(l);if(v||p){const h=()=>{if(n.f){const b=v?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)ze(b)&&pa(b,s);else if(ze(b))b.includes(s)||b.push(s);else if(v)u[l]=[s],m(l)&&(f[l]=u[l]);else{const S=[s];x(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else v?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{h(),As.delete(n)};b.id=-1,As.set(n,b),Nt(b,t)}else Qa(n),h()}}}function Qa(n){const e=As.get(n);e&&(e.flags|=8,As.delete(n))}Fs().requestIdleCallback;Fs().cancelIdleCallback;const Er=n=>!!n.type.__asyncLoader,zu=n=>n.type.__isKeepAlive;function Qh(n,e){Hu(n,"a",e)}function ed(n,e){Hu(n,"da",e)}function Hu(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Hs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zu(r.parent.vnode)&&td(i,e,t,r),r=r.parent}}function td(n,e,t,i){const r=Hs(e,n,i,!0);ku(()=>{pa(i[e],r)},t)}function Hs(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{On();const o=Nr(t),l=Mn(e,t,n,a);return o(),Fn(),l});return i?r.unshift(s):r.push(s),s}}const Hn=n=>(e,t=Ut)=>{(!Pr||n==="sp")&&Hs(n,(...i)=>e(...i),t)},nd=Hn("bm"),Gu=Hn("m"),id=Hn("bu"),rd=Hn("u"),Vu=Hn("bum"),ku=Hn("um"),sd=Hn("sp"),od=Hn("rtg"),ad=Hn("rtc");function ld(n,e=Ut){Hs("ec",n,e)}const cd=Symbol.for("v-ndc");function ud(n,e,t,i){let r;const s=t,a=ze(n);if(a||ht(n)){const o=a&&_i(n);let l=!1,c=!1;o&&(l=!$t(n),c=Bn(n),n=Bs(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?er(on(n[u])):on(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ko=n=>n?hf(n)?Da(n):Ko(n.parent):null,yr=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ko(n.parent),$root:n=>Ko(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Xu(n),$forceUpdate:n=>n.f||(n.f=()=>{wa(n.update)}),$nextTick:n=>n.n||(n.n=Pu.bind(n.proxy)),$watch:n=>Kh.bind(n)}),so=(n,e)=>n!==rt&&!n.__isScriptSetup&&Qe(n,e),fd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(so(i,e))return a[e]=1,i[e];if(r!==rt&&Qe(r,e))return a[e]=2,r[e];if(Qe(s,e))return a[e]=3,s[e];if(t!==rt&&Qe(t,e))return a[e]=4,t[e];$o&&(a[e]=0)}}const c=yr[e];let u,f;if(c)return e==="$attrs"&&Tt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==rt&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return so(r,e)?(r[e]=t,!0):i!==rt&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==rt&&o[0]!=="$"&&Qe(n,o)||so(e,o)||Qe(s,o)||Qe(i,o)||Qe(yr,o)||Qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function el(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $o=!0;function hd(n){const e=Xu(n),t=n.proxy,i=n.ctx;$o=!1,e.beforeCreate&&tl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:S,unmounted:y,render:A,renderTracked:D,renderTriggered:R,errorCaptured:J,serverPrefetch:T,expose:w,inheritAttrs:ae,components:ce,directives:fe,filters:F}=e;if(c&&dd(c,i,null),a)for(const X in a){const z=a[X];ke(z)&&(i[X]=z.bind(t))}if(r){const X=r.call(t,t);tt(X)&&(n.data=Ta(X))}if($o=!0,s)for(const X in s){const z=s[X],B=ke(z)?z.bind(t,t):ke(z.get)?z.get.bind(t,t):_n,k=!ke(z)&&ke(z.set)?z.set.bind(t):_n,L=pf({get:B,set:k});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>L.value,set:U=>L.value=U})}if(o)for(const X in o)Wu(o[X],i,t,X);if(l){const X=ke(l)?l.call(t):l;Reflect.ownKeys(X).forEach(z=>{qh(z,X[z])})}u&&tl(u,n,"c");function ee(X,z){ze(z)?z.forEach(B=>X(B.bind(t))):z&&X(z.bind(t))}if(ee(nd,f),ee(Gu,d),ee(id,m),ee(rd,x),ee(Qh,v),ee(ed,p),ee(ld,J),ee(ad,D),ee(od,R),ee(Vu,b),ee(ku,y),ee(sd,T),ze(w))if(w.length){const X=n.exposed||(n.exposed={});w.forEach(z=>{Object.defineProperty(X,z,{get:()=>t[z],set:B=>t[z]=B,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===_n&&(n.render=A),ae!=null&&(n.inheritAttrs=ae),ce&&(n.components=ce),fe&&(n.directives=fe),T&&Bu(n)}function dd(n,e,t=_n){ze(n)&&(n=Zo(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=vs(r.from||i,r.default,!0):s=vs(r.from||i):s=vs(r),bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function tl(n,e,t){Mn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Wu(n,e,t,i){let r=i.includes(".")?Ou(t,i):()=>t[i];if(ht(n)){const s=e[n];ke(s)&&ro(r,s)}else if(ke(n))ro(r,n.bind(t));else if(tt(n))if(ze(n))n.forEach(s=>Wu(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&ro(r,s,n)}}function Xu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ws(l,c,a,!0)),ws(l,e,a)),tt(e)&&s.set(e,l),l}function ws(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ws(n,s,t,!0),r&&r.forEach(a=>ws(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=pd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const pd={data:nl,props:il,emits:il,methods:gr,computed:gr,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:gr,directives:gr,watch:gd,provide:nl,inject:md};function nl(n,e){return e?n?function(){return St(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function md(n,e){return gr(Zo(n),Zo(e))}function Zo(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function gr(n,e){return n?St(Object.create(null),n,e):e}function il(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:St(Object.create(null),el(n),el(e??{})):e}function gd(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function qu(){return{app:null,config:{isNativeTag:iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _d=0;function vd(n,e){return function(i,r=null){ke(i)||(i=St({},i)),r!=null&&!tt(r)&&(r=null);const s=qu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:_d++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zd,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(c,...f)):ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||Nn(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Da(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Mn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Zi;Zi=c;try{return u()}finally{Zi=f}}};return c}}let Zi=null;const xd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${rn(e)}Modifiers`]||n[`${Ti(e)}Modifiers`];function Md(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let r=t;const s=e.startsWith("update:"),a=s&&xd(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=t.map(rh)));let o,l=i[o=Js(e)]||i[o=Js(rn(e))];!l&&s&&(l=i[o=Js(Ti(e))]),l&&Mn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Mn(c,n,6,r)}}const Sd=new WeakMap;function Yu(n,e,t=!1){const i=t?Sd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=c=>{const u=Yu(c,e,!0);u&&(o=!0,St(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>a[l]=null):St(a,s),tt(n)&&i.set(n,a),a)}function Gs(n,e){return!n||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ti(e))||Qe(n,e))}function rl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=n,p=bs(n);let h,b;try{if(t.shapeFlag&4){const y=r||i,A=y;h=dn(c.call(A,y,u,f,m,d,x)),b=o}else{const y=e;h=dn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),b=e.props?o:Ed(o)}}catch(y){Tr.length=0,zs(y,n,1),h=Nn(ti)}let S=h;if(b&&v!==!1){const y=Object.keys(b),{shapeFlag:A}=S;y.length&&A&7&&(s&&y.some(da)&&(b=yd(b,s)),S=tr(S,b,!1,!0))}return t.dirs&&(S=tr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ra(S,t.transition),h=S,bs(p),h}const Ed=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ns(t))&&((e||(e={}))[t]=n[t]);return e},yd=(n,e)=>{const t={};for(const i in n)(!da(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Td(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?sl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(ju(a,i,d)&&!Gs(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?sl(i,a,c):!0:!!a;return!1}function sl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ju(e,n,s)&&!Gs(t,s))return!0}return!1}function ju(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!va(i,r):i!==r}function bd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ku={},$u=()=>Object.create(Ku),Zu=n=>Object.getPrototypeOf(n)===Ku;function Ad(n,e,t,i=!1){const r={},s=$u();n.propsDefaults=Object.create(null),Ju(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Dh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Gs(n.emitsOptions,d))continue;const m=e[d];if(l)if(Qe(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=rn(d);r[x]=Jo(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Ju(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Ti(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Jo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Ln(n.attrs,"set","")}function Ju(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(vr(l))continue;const c=e[l];let u;r&&Qe(r,u=rn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Gs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||rt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Jo(r,l,f,c[f],n,!Qe(c,f))}}return a}function Jo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Nr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ti(t))&&(i=!0))}return i}const Rd=new WeakMap;function Qu(n,e,t=!1){const i=t?Rd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[d,m]=Qu(f,e,!0);St(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,ji),ji;if(ze(s))for(let u=0;u<s.length;u++){const f=rn(s[u]);ol(f)&&(a[f]=rt)}else if(s)for(const u in s){const f=rn(u);if(ol(f)){const d=s[u],m=a[f]=ze(d)||ke(d)?{type:d}:St({},d),x=m.type;let v=!1,p=!0;if(ze(x))for(let h=0;h<x.length;++h){const b=x[h],S=ke(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=ke(x)&&x.name==="Boolean";m[0]=v,m[1]=p,(v||Qe(m,"default"))&&o.push(f)}}const c=[a,o];return tt(n)&&i.set(n,c),c}function ol(n){return n[0]!=="$"&&!vr(n)}const Ca=n=>n==="_"||n==="_ctx"||n==="$stable",Pa=n=>ze(n)?n.map(dn):[dn(n)],Cd=(n,e,t)=>{if(e._n)return e;const i=Xh((...r)=>Pa(e(...r)),t);return i._c=!1,i},ef=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ca(r))continue;const s=n[r];if(ke(s))e[r]=Cd(r,s,i);else if(s!=null){const a=Pa(s);e[r]=()=>a}}},tf=(n,e)=>{const t=Pa(e);n.slots.default=()=>t},nf=(n,e,t)=>{for(const i in e)(t||!Ca(i))&&(n[i]=e[i])},Pd=(n,e,t)=>{const i=n.slots=$u();if(n.vnode.shapeFlag&32){const r=e._;r?(nf(i,e,t),t&&cu(i,"_",r,!0)):ef(e,i)}else e&&tf(n,e)},Ld=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=rt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:nf(r,e,t):(s=!e.$stable,ef(e,r)),a=e}else e&&(tf(n,e),a={default:1});if(s)for(const o in r)!Ca(o)&&a[o]==null&&delete r[o]},Nt=Od;function Dd(n){return Ud(n)}function Ud(n,e){const t=Fs();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=_n,insertStaticContent:x}=n,v=(g,P,O,W=null,V=null,$=null,se=void 0,Z=null,ie=!!P.dynamicChildren)=>{if(g===P)return;g&&!ur(g,P)&&(W=Ne(g),U(g,V,$,!0),g=null),P.patchFlag===-2&&(ie=!1,P.dynamicChildren=null);const{type:te,ref:Ee,shapeFlag:M}=P;switch(te){case Vs:p(g,P,O,W);break;case ti:h(g,P,O,W);break;case ao:g==null&&b(P,O,W,se);break;case hn:ce(g,P,O,W,V,$,se,Z,ie);break;default:M&1?A(g,P,O,W,V,$,se,Z,ie):M&6?fe(g,P,O,W,V,$,se,Z,ie):(M&64||M&128)&&te.process(g,P,O,W,V,$,se,Z,ie,De)}Ee!=null&&V?Sr(Ee,g&&g.ref,$,P||g,!P):Ee==null&&g&&g.ref!=null&&Sr(g.ref,null,$,g,!0)},p=(g,P,O,W)=>{if(g==null)i(P.el=o(P.children),O,W);else{const V=P.el=g.el;P.children!==g.children&&c(V,P.children)}},h=(g,P,O,W)=>{g==null?i(P.el=l(P.children||""),O,W):P.el=g.el},b=(g,P,O,W)=>{[g.el,g.anchor]=x(g.children,P,O,W,g.el,g.anchor)},S=({el:g,anchor:P},O,W)=>{let V;for(;g&&g!==P;)V=d(g),i(g,O,W),g=V;i(P,O,W)},y=({el:g,anchor:P})=>{let O;for(;g&&g!==P;)O=d(g),r(g),g=O;r(P)},A=(g,P,O,W,V,$,se,Z,ie)=>{if(P.type==="svg"?se="svg":P.type==="math"&&(se="mathml"),g==null)D(P,O,W,V,$,se,Z,ie);else{const te=g.el&&g.el._isVueCE?g.el:null;try{te&&te._beginPatch(),T(g,P,V,$,se,Z,ie)}finally{te&&te._endPatch()}}},D=(g,P,O,W,V,$,se,Z)=>{let ie,te;const{props:Ee,shapeFlag:M,transition:_,dirs:I}=g;if(ie=g.el=a(g.type,$,Ee&&Ee.is,Ee),M&8?u(ie,g.children):M&16&&J(g.children,ie,null,W,V,oo(g,$),se,Z),I&&si(g,null,W,"created"),R(ie,g,g.scopeId,se,W),Ee){for(const ne in Ee)ne!=="value"&&!vr(ne)&&s(ie,ne,null,Ee[ne],$,W);"value"in Ee&&s(ie,"value",null,Ee.value,$),(te=Ee.onVnodeBeforeMount)&&cn(te,W,g)}I&&si(g,null,W,"beforeMount");const Q=Id(V,_);Q&&_.beforeEnter(ie),i(ie,P,O),((te=Ee&&Ee.onVnodeMounted)||Q||I)&&Nt(()=>{te&&cn(te,W,g),Q&&_.enter(ie),I&&si(g,null,W,"mounted")},V)},R=(g,P,O,W,V)=>{if(O&&m(g,O),W)for(let $=0;$<W.length;$++)m(g,W[$]);if(V){let $=V.subTree;if(P===$||af($.type)&&($.ssContent===P||$.ssFallback===P)){const se=V.vnode;R(g,se,se.scopeId,se.slotScopeIds,V.parent)}}},J=(g,P,O,W,V,$,se,Z,ie=0)=>{for(let te=ie;te<g.length;te++){const Ee=g[te]=Z?Pn(g[te]):dn(g[te]);v(null,Ee,P,O,W,V,$,se,Z)}},T=(g,P,O,W,V,$,se)=>{const Z=P.el=g.el;let{patchFlag:ie,dynamicChildren:te,dirs:Ee}=P;ie|=g.patchFlag&16;const M=g.props||rt,_=P.props||rt;let I;if(O&&oi(O,!1),(I=_.onVnodeBeforeUpdate)&&cn(I,O,P,g),Ee&&si(P,g,O,"beforeUpdate"),O&&oi(O,!0),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(Z,""),te?w(g.dynamicChildren,te,Z,O,W,oo(P,V),$):se||z(g,P,Z,null,O,W,oo(P,V),$,!1),ie>0){if(ie&16)ae(Z,M,_,O,V);else if(ie&2&&M.class!==_.class&&s(Z,"class",null,_.class,V),ie&4&&s(Z,"style",M.style,_.style,V),ie&8){const Q=P.dynamicProps;for(let ne=0;ne<Q.length;ne++){const oe=Q[ne],ye=M[oe],ue=_[oe];(ue!==ye||oe==="value")&&s(Z,oe,ye,ue,V,O)}}ie&1&&g.children!==P.children&&u(Z,P.children)}else!se&&te==null&&ae(Z,M,_,O,V);((I=_.onVnodeUpdated)||Ee)&&Nt(()=>{I&&cn(I,O,P,g),Ee&&si(P,g,O,"updated")},W)},w=(g,P,O,W,V,$,se)=>{for(let Z=0;Z<P.length;Z++){const ie=g[Z],te=P[Z],Ee=ie.el&&(ie.type===hn||!ur(ie,te)||ie.shapeFlag&198)?f(ie.el):O;v(ie,te,Ee,null,W,V,$,se,!0)}},ae=(g,P,O,W,V)=>{if(P!==O){if(P!==rt)for(const $ in P)!vr($)&&!($ in O)&&s(g,$,P[$],null,V,W);for(const $ in O){if(vr($))continue;const se=O[$],Z=P[$];se!==Z&&$!=="value"&&s(g,$,Z,se,V,W)}"value"in O&&s(g,"value",P.value,O.value,V)}},ce=(g,P,O,W,V,$,se,Z,ie)=>{const te=P.el=g?g.el:o(""),Ee=P.anchor=g?g.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:I}=P;I&&(Z=Z?Z.concat(I):I),g==null?(i(te,O,W),i(Ee,O,W),J(P.children||[],O,Ee,V,$,se,Z,ie)):M>0&&M&64&&_&&g.dynamicChildren&&g.dynamicChildren.length===_.length?(w(g.dynamicChildren,_,O,V,$,se,Z),(P.key!=null||V&&P===V.subTree)&&rf(g,P,!0)):z(g,P,O,Ee,V,$,se,Z,ie)},fe=(g,P,O,W,V,$,se,Z,ie)=>{P.slotScopeIds=Z,g==null?P.shapeFlag&512?V.ctx.activate(P,O,W,se,ie):F(P,O,W,V,$,se,ie):K(g,P,ie)},F=(g,P,O,W,V,$,se)=>{const Z=g.component=Wd(g,W,V);if(zu(g)&&(Z.ctx.renderer=De),qd(Z,!1,se),Z.asyncDep){if(V&&V.registerDep(Z,ee,se),!g.el){const ie=Z.subTree=Nn(ti);h(null,ie,P,O),g.placeholder=ie.el}}else ee(Z,g,P,O,V,$,se)},K=(g,P,O)=>{const W=P.component=g.component;if(Td(g,P,O))if(W.asyncDep&&!W.asyncResolved){X(W,P,O);return}else W.next=P,W.update();else P.el=g.el,W.vnode=P},ee=(g,P,O,W,V,$,se)=>{const Z=()=>{if(g.isMounted){let{next:M,bu:_,u:I,parent:Q,vnode:ne}=g;{const C=sf(g);if(C){M&&(M.el=ne.el,X(g,M,se)),C.asyncDep.then(()=>{Nt(()=>{g.isUnmounted||te()},V)});return}}let oe=M,ye;oi(g,!1),M?(M.el=ne.el,X(g,M,se)):M=ne,_&&Qs(_),(ye=M.props&&M.props.onVnodeBeforeUpdate)&&cn(ye,Q,M,ne),oi(g,!0);const ue=rl(g),ge=g.subTree;g.subTree=ue,v(ge,ue,f(ge.el),Ne(ge),g,V,$),M.el=ue.el,oe===null&&bd(g,ue.el),I&&Nt(I,V),(ye=M.props&&M.props.onVnodeUpdated)&&Nt(()=>cn(ye,Q,M,ne),V)}else{let M;const{el:_,props:I}=P,{bm:Q,m:ne,parent:oe,root:ye,type:ue}=g,ge=Er(P);oi(g,!1),Q&&Qs(Q),!ge&&(M=I&&I.onVnodeBeforeMount)&&cn(M,oe,P),oi(g,!0);{ye.ce&&ye.ce._hasShadowRoot()&&ye.ce._injectChildStyle(ue,g.parent?g.parent.type:void 0);const C=g.subTree=rl(g);v(null,C,O,W,g,V,$),P.el=C.el}if(ne&&Nt(ne,V),!ge&&(M=I&&I.onVnodeMounted)){const C=P;Nt(()=>cn(M,oe,C),V)}(P.shapeFlag&256||oe&&Er(oe.vnode)&&oe.vnode.shapeFlag&256)&&g.a&&Nt(g.a,V),g.isMounted=!0,P=O=W=null}};g.scope.on();const ie=g.effect=new du(Z);g.scope.off();const te=g.update=ie.run.bind(ie),Ee=g.job=ie.runIfDirty.bind(ie);Ee.i=g,Ee.id=g.uid,ie.scheduler=()=>wa(Ee),oi(g,!0),te()},X=(g,P,O)=>{P.component=g;const W=g.vnode.props;g.vnode=P,g.next=null,wd(g,P.props,W,O),Ld(g,P.children,O),On(),Za(g),Fn()},z=(g,P,O,W,V,$,se,Z,ie=!1)=>{const te=g&&g.children,Ee=g?g.shapeFlag:0,M=P.children,{patchFlag:_,shapeFlag:I}=P;if(_>0){if(_&128){k(te,M,O,W,V,$,se,Z,ie);return}else if(_&256){B(te,M,O,W,V,$,se,Z,ie);return}}I&8?(Ee&16&&Ce(te,V,$),M!==te&&u(O,M)):Ee&16?I&16?k(te,M,O,W,V,$,se,Z,ie):Ce(te,V,$,!0):(Ee&8&&u(O,""),I&16&&J(M,O,W,V,$,se,Z,ie))},B=(g,P,O,W,V,$,se,Z,ie)=>{g=g||ji,P=P||ji;const te=g.length,Ee=P.length,M=Math.min(te,Ee);let _;for(_=0;_<M;_++){const I=P[_]=ie?Pn(P[_]):dn(P[_]);v(g[_],I,O,null,V,$,se,Z,ie)}te>Ee?Ce(g,V,$,!0,!1,M):J(P,O,W,V,$,se,Z,ie,M)},k=(g,P,O,W,V,$,se,Z,ie)=>{let te=0;const Ee=P.length;let M=g.length-1,_=Ee-1;for(;te<=M&&te<=_;){const I=g[te],Q=P[te]=ie?Pn(P[te]):dn(P[te]);if(ur(I,Q))v(I,Q,O,null,V,$,se,Z,ie);else break;te++}for(;te<=M&&te<=_;){const I=g[M],Q=P[_]=ie?Pn(P[_]):dn(P[_]);if(ur(I,Q))v(I,Q,O,null,V,$,se,Z,ie);else break;M--,_--}if(te>M){if(te<=_){const I=_+1,Q=I<Ee?P[I].el:W;for(;te<=_;)v(null,P[te]=ie?Pn(P[te]):dn(P[te]),O,Q,V,$,se,Z,ie),te++}}else if(te>_)for(;te<=M;)U(g[te],V,$,!0),te++;else{const I=te,Q=te,ne=new Map;for(te=Q;te<=_;te++){const Pe=P[te]=ie?Pn(P[te]):dn(P[te]);Pe.key!=null&&ne.set(Pe.key,te)}let oe,ye=0;const ue=_-Q+1;let ge=!1,C=0;const de=new Array(ue);for(te=0;te<ue;te++)de[te]=0;for(te=I;te<=M;te++){const Pe=g[te];if(ye>=ue){U(Pe,V,$,!0);continue}let Ae;if(Pe.key!=null)Ae=ne.get(Pe.key);else for(oe=Q;oe<=_;oe++)if(de[oe-Q]===0&&ur(Pe,P[oe])){Ae=oe;break}Ae===void 0?U(Pe,V,$,!0):(de[Ae-Q]=te+1,Ae>=C?C=Ae:ge=!0,v(Pe,P[Ae],O,null,V,$,se,Z,ie),ye++)}const le=ge?Nd(de):ji;for(oe=le.length-1,te=ue-1;te>=0;te--){const Pe=Q+te,Ae=P[Pe],Ue=P[Pe+1],Le=Pe+1<Ee?Ue.el||of(Ue):W;de[te]===0?v(null,Ae,O,Le,V,$,se,Z,ie):ge&&(oe<0||te!==le[oe]?L(Ae,O,Le,2):oe--)}}},L=(g,P,O,W,V=null)=>{const{el:$,type:se,transition:Z,children:ie,shapeFlag:te}=g;if(te&6){L(g.component.subTree,P,O,W);return}if(te&128){g.suspense.move(P,O,W);return}if(te&64){se.move(g,P,O,De);return}if(se===hn){i($,P,O);for(let M=0;M<ie.length;M++)L(ie[M],P,O,W);i(g.anchor,P,O);return}if(se===ao){S(g,P,O);return}if(W!==2&&te&1&&Z)if(W===0)Z.beforeEnter($),i($,P,O),Nt(()=>Z.enter($),V);else{const{leave:M,delayLeave:_,afterLeave:I}=Z,Q=()=>{g.ctx.isUnmounted?r($):i($,P,O)},ne=()=>{$._isLeaving&&$[Jh](!0),M($,()=>{Q(),I&&I()})};_?_($,Q,ne):ne()}else i($,P,O)},U=(g,P,O,W=!1,V=!1)=>{const{type:$,props:se,ref:Z,children:ie,dynamicChildren:te,shapeFlag:Ee,patchFlag:M,dirs:_,cacheIndex:I}=g;if(M===-2&&(V=!1),Z!=null&&(On(),Sr(Z,null,O,g,!0),Fn()),I!=null&&(P.renderCache[I]=void 0),Ee&256){P.ctx.deactivate(g);return}const Q=Ee&1&&_,ne=!Er(g);let oe;if(ne&&(oe=se&&se.onVnodeBeforeUnmount)&&cn(oe,P,g),Ee&6)Me(g.component,O,W);else{if(Ee&128){g.suspense.unmount(O,W);return}Q&&si(g,null,P,"beforeUnmount"),Ee&64?g.type.remove(g,P,O,De,W):te&&!te.hasOnce&&($!==hn||M>0&&M&64)?Ce(te,P,O,!1,!0):($===hn&&M&384||!V&&Ee&16)&&Ce(ie,P,O),W&&_e(g)}(ne&&(oe=se&&se.onVnodeUnmounted)||Q)&&Nt(()=>{oe&&cn(oe,P,g),Q&&si(g,null,P,"unmounted")},O)},_e=g=>{const{type:P,el:O,anchor:W,transition:V}=g;if(P===hn){pe(O,W);return}if(P===ao){y(g);return}const $=()=>{r(O),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(g.shapeFlag&1&&V&&!V.persisted){const{leave:se,delayLeave:Z}=V,ie=()=>se(O,$);Z?Z(g.el,$,ie):ie()}else $()},pe=(g,P)=>{let O;for(;g!==P;)O=d(g),r(g),g=O;r(P)},Me=(g,P,O)=>{const{bum:W,scope:V,job:$,subTree:se,um:Z,m:ie,a:te}=g;al(ie),al(te),W&&Qs(W),V.stop(),$&&($.flags|=8,U(se,g,P,O)),Z&&Nt(Z,P),Nt(()=>{g.isUnmounted=!0},P)},Ce=(g,P,O,W=!1,V=!1,$=0)=>{for(let se=$;se<g.length;se++)U(g[se],P,O,W,V)},Ne=g=>{if(g.shapeFlag&6)return Ne(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const P=d(g.anchor||g.el),O=P&&P[$h];return O?d(O):P};let xe=!1;const Te=(g,P,O)=>{let W;g==null?P._vnode&&(U(P._vnode,null,null,!0),W=P._vnode.component):v(P._vnode||null,g,P,null,null,null,O),P._vnode=g,xe||(xe=!0,Za(W),Du(),xe=!1)},De={p:v,um:U,m:L,r:_e,mt:F,mc:J,pc:z,pbc:w,n:Ne,o:n};return{render:Te,hydrate:void 0,createApp:vd(Te)}}function oo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Id(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function rf(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Pn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&rf(a,o)),o.type===Vs&&(o.patchFlag===-1&&(o=r[s]=Pn(o)),o.el=a.el),o.type===ti&&!o.el&&(o.el=a.el)}}function Nd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function sf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sf(e)}function al(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function of(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?of(e.subTree):null}const af=n=>n.__isSuspense;function Od(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Wh(n)}const hn=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),Tr=[];let Vt=null;function di(n=!1){Tr.push(Vt=n?null:[])}function Fd(){Tr.pop(),Vt=Tr[Tr.length-1]||null}let Cr=1;function ll(n,e=!1){Cr+=n,n<0&&Vt&&e&&(Vt.hasOnce=!0)}function lf(n){return n.dynamicChildren=Cr>0?Vt||ji:null,Fd(),Cr>0&&Vt&&Vt.push(n),n}function cr(n,e,t,i,r,s){return lf(Ze(n,e,t,i,r,s,!0))}function cf(n,e,t,i,r){return lf(Nn(n,e,t,i,r,!0))}function uf(n){return n?n.__v_isVNode===!0:!1}function ur(n,e){return n.type===e.type&&n.key===e.key}const ff=({key:n})=>n??null,xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||bt(n)||ke(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function Ze(n,e=null,t=null,i=0,r=null,s=n===hn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ff(e),ref:e&&xs(e),scopeId:Iu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gn};return o?(La(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Cr>0&&!a&&Vt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vt.push(l),l}const Nn=Bd;function Bd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===cd)&&(n=ti),uf(n)){const o=tr(n,e,!0);return t&&La(o,t),Cr>0&&!s&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(n)]=o:Vt.push(o)),o.patchFlag=-2,o}if($d(n)&&(n=n.__vccOpts),e){e=zd(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=_a(o)),tt(l)&&(Aa(l)&&!ze(l)&&(l=St({},l)),e.style=ga(l))}const a=ht(n)?1:af(n)?128:Zh(n)?64:tt(n)?4:ke(n)?2:0;return Ze(n,e,t,i,r,a,s,!0)}function zd(n){return n?Aa(n)||Zu(n)?St({},n):n:null}function tr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Gd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ff(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(xs(e)):[s,xs(e)]:xs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==hn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tr(n.ssContent),ssFallback:n.ssFallback&&tr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ra(u,l.clone(u)),u}function Hd(n=" ",e=0){return Nn(Vs,null,n,e)}function cl(n="",e=!1){return e?(di(),cf(ti,null,n)):Nn(ti,null,n)}function dn(n){return n==null||typeof n=="boolean"?Nn(ti):ze(n)?Nn(hn,null,n.slice()):uf(n)?Pn(n):Nn(Vs,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tr(n)}function La(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),La(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Zu(e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[Hd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Gd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=_a([e.class,i.class]));else if(r==="style")e.style=ga([e.style,i.style]);else if(Ns(r)){const s=e[r],a=i[r];a&&s!==a&&!(ze(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){Mn(n,e,7,[t,i])}const Vd=qu();let kd=0;function Wd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Vd,s={uid:kd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qu(i,r),emitsOptions:Yu(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Md.bind(null,s),n.ce&&n.ce(s),s}let Ut=null;const Xd=()=>Ut||gn;let Rs,Qo;{const n=Fs(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Rs=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Qo=e("__VUE_SSR_SETTERS__",t=>Pr=t)}const Nr=n=>{const e=Ut;return Rs(n),n.scope.on(),()=>{n.scope.off(),Rs(e)}},ul=()=>{Ut&&Ut.scope.off(),Rs(null)};function hf(n){return n.vnode.shapeFlag&4}let Pr=!1;function qd(n,e=!1,t=!1){e&&Qo(e);const{props:i,children:r}=n.vnode,s=hf(n);Ad(n,i,s,e),Pd(n,r,t||e);const a=s?Yd(n,e):void 0;return e&&Qo(!1),a}function Yd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fd);const{setup:i}=t;if(i){On();const r=n.setupContext=i.length>1?Kd(n):null,s=Nr(n),a=Ir(i,n,0,[n.props,r]),o=su(a);if(Fn(),s(),(o||n.sp)&&!Er(n)&&Bu(n),o){if(a.then(ul,ul),e)return a.then(l=>{fl(n,l)}).catch(l=>{zs(l,n,0)});n.asyncDep=a}else fl(n,a)}else df(n)}function fl(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Ru(e)),df(n)}function df(n,e,t){const i=n.type;n.render||(n.render=i.render||_n);{const r=Nr(n);On();try{hd(n)}finally{Fn(),r()}}}const jd={get(n,e){return Tt(n,"get",""),n[e]}};function Kd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jd),slots:n.slots,emit:n.emit,expose:e}}function Da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ru(Uh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yr)return yr[t](n)},has(e,t){return t in e||t in yr}})):n.proxy}function $d(n){return ke(n)&&"__vccOpts"in n}const pf=(n,e)=>zh(n,e,Pr),Zd="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ea;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{ea=hl.createPolicy("vue",{createHTML:n=>n})}catch{}const mf=ea?n=>ea.createHTML(n):n=>n,Jd="http://www.w3.org/2000/svg",Qd="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,dl=Cn&&Cn.createElement("template"),ep={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Cn.createElementNS(Jd,n):e==="mathml"?Cn.createElementNS(Qd,n):t?Cn.createElement(n,{is:t}):Cn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Cn.createTextNode(n),createComment:n=>Cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{dl.innerHTML=mf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=dl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tp=Symbol("_vtc");function np(n,e,t){const i=n[tp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const pl=Symbol("_vod"),ip=Symbol("_vsh"),rp=Symbol(""),sp=/(?:^|;)\s*display\s*:/;function op(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ms(i,o,"")}else for(const a in e)t[a]==null&&Ms(i,a,"");for(const a in t)a==="display"&&(s=!0),Ms(i,a,t[a])}else if(r){if(e!==t){const a=i[rp];a&&(t+=";"+a),i.cssText=t,s=sp.test(t)}}else e&&n.removeAttribute("style");pl in n&&(n[pl]=s?i.display:"",n[ip]&&(i.display="none"))}const ml=/\s*!important$/;function Ms(n,e,t){if(ze(t))t.forEach(i=>Ms(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ap(n,e);ml.test(t)?n.setProperty(Ti(i),t.replace(ml,""),"important"):n[i]=t}}const gl=["Webkit","Moz","ms"],lo={};function ap(n,e){const t=lo[e];if(t)return t;let i=rn(e);if(i!=="filter"&&i in n)return lo[e]=i;i=lu(i);for(let r=0;r<gl.length;r++){const s=gl[r]+i;if(s in n)return lo[e]=s}return e}const _l="http://www.w3.org/1999/xlink";function vl(n,e,t,i,r,s=uh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(_l,e.slice(6,e.length)):n.setAttributeNS(_l,e,t):t==null||s&&!uu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":xn(t)?String(t):t)}function xl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=uu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function lp(n,e,t,i){n.addEventListener(e,t,i)}function cp(n,e,t,i){n.removeEventListener(e,t,i)}const Ml=Symbol("_vei");function up(n,e,t,i,r=null){const s=n[Ml]||(n[Ml]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=fp(e);if(i){const c=s[e]=pp(i,r);lp(n,o,c,l)}else a&&(cp(n,o,a,l),s[e]=void 0)}}const Sl=/(?:Once|Passive|Capture)$/;function fp(n){let e;if(Sl.test(n)){e={};let i;for(;i=n.match(Sl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ti(n.slice(2)),e]}let co=0;const hp=Promise.resolve(),dp=()=>co||(hp.then(()=>co=0),co=Date.now());function pp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Mn(mp(i,t.value),e,5,[i])};return t.value=n,t.attached=dp(),t}function mp(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const El=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?np(n,i,a):e==="style"?op(n,t,i):Ns(e)?da(e)||up(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_p(n,e,i,a))?(xl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vl(n,e,i,a,s,e!=="value")):n._isVueCE&&(vp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?xl(n,rn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),vl(n,e,i,a))};function _p(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&El(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return El(e)&&ht(t)?!1:e in n}function vp(n,e){const t=n._def.props;if(!t)return!1;const i=rn(e);return Array.isArray(t)?t.some(r=>rn(r)===i):Object.keys(t).some(r=>rn(r)===i)}const xp=St({patchProp:gp},ep);let yl;function Mp(){return yl||(yl=Dd(xp))}const Sp=(...n)=>{const e=Mp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yp(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Ep(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ep(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function yp(n){return ht(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="158",Ri={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tp=0,Tl=1,bp=2,gf=1,Ap=2,Rn=3,ni=0,Ft=1,Dn=2,Jn=0,Ji=1,bl=2,Al=3,wl=4,wp=5,pi=100,Rp=101,Cp=102,Rl=103,Cl=104,Pp=200,Lp=201,Dp=202,Up=203,ta=204,na=205,Ip=206,Np=207,Op=208,Fp=209,Bp=210,zp=211,Hp=212,Gp=213,Vp=214,kp=0,Wp=1,Xp=2,Cs=3,qp=4,Yp=5,jp=6,Kp=7,_f=0,$p=1,Zp=2,Qn=0,Jp=1,Qp=2,em=3,tm=4,nm=5,vf=300,nr=301,ir=302,ia=303,ra=304,ks=306,sa=1e3,tn=1001,oa=1002,Pt=1003,Pl=1004,uo=1005,Yt=1006,im=1007,Lr=1008,ei=1009,rm=1010,sm=1011,Ia=1012,xf=1013,$n=1014,Zn=1015,Dr=1016,Mf=1017,Sf=1018,vi=1020,om=1021,nn=1023,am=1024,lm=1025,xi=1026,rr=1027,cm=1028,Ef=1029,um=1030,yf=1031,Tf=1033,fo=33776,ho=33777,po=33778,mo=33779,Ll=35840,Dl=35841,Ul=35842,Il=35843,fm=36196,Nl=37492,Ol=37496,Fl=37808,Bl=37809,zl=37810,Hl=37811,Gl=37812,Vl=37813,kl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,jl=37819,Kl=37820,$l=37821,go=36492,Zl=36494,Jl=36495,hm=36283,Ql=36284,ec=36285,tc=36286,bf=3e3,Mi=3001,dm=3200,pm=3201,Af=0,mm=1,Kt="",Mt="srgb",zn="srgb-linear",Na="display-p3",Ws="display-p3-linear",Ps="linear",st="srgb",Ls="rec709",Ds="p3",Pi=7680,nc=519,gm=512,_m=513,vm=514,xm=515,Mm=516,Sm=517,Em=518,ym=519,ic=35044,rc="300 es",aa=1035,Un=2e3,Us=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,la=180/Math.PI;function Or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Tm(n,e){return(n%e+e)%e}function _o(n,e,t){return(1-t)*n+t*e}function sc(n){return(n&n-1)===0&&n!==0}function ca(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bm={DEG2RAD:Ss};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],h=r[6],b=r[1],S=r[4],y=r[7],A=r[2],D=r[5],R=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*p+o*S+l*D,s[6]=a*h+o*y+l*R,s[1]=c*v+u*b+f*A,s[4]=c*p+u*S+f*D,s[7]=c*h+u*y+f*R,s[2]=d*v+m*b+x*A,s[5]=d*p+m*S+x*D,s[8]=d*h+m*y+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new qe;function wf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Am(){const n=Is("canvas");return n.style.display="block",n}const oc={};function br(n){n in oc||(oc[n]=!0,console.warn(n))}const ac=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lc=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[zn]:{transfer:Ps,primaries:Ls,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:st,primaries:Ls,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ws]:{transfer:Ps,primaries:Ds,toReference:n=>n.applyMatrix3(lc),fromReference:n=>n.applyMatrix3(ac)},[Na]:{transfer:st,primaries:Ds,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lc),fromReference:n=>n.applyMatrix3(ac).convertLinearToSRGB()}},wm=new Set([zn,Ws]),et={enabled:!0,_workingColorSpace:zn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xr[e].toReference,r=Xr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xr[n].primaries},getTransfer:function(n){return n===Kt?Ps:Xr[n].transfer}};function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Is("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class Cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mo(r[a].image)):s.push(Mo(r[a]))}else s=Mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cm=0;class kt extends bi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=tn,r=tn,s=Yt,a=Lr,o=nn,l=ei,c=kt.DEFAULT_ANISOTROPY,u=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Or(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?Mt:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Mi:bf}set encoding(e){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?Mt:Kt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=vf;kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,A=(h+1)/2,D=(u+d)/4,R=(f+v)/4,J=(x+p)/4;return S>y&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=R/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=D/r,s=J/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=J/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pm extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mi?Mt:Kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Pm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pf extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lm extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*v,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const A=Math.sqrt(S),D=Math.atan2(A,h*b);p=Math.sin(p*D)/A,o=Math.sin(o*D)/A}const y=o*b;if(l=l*p+d*y,c=c*p+m*y,u=u*p+x*y,f=f*p+v*y,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new H,cc=new Ei;class Fr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Yr.subVectors(this.max,hr),Di.subVectors(e.a,hr),Ui.subVectors(e.b,hr),Ii.subVectors(e.c,hr),Gn.subVectors(Ui,Di),Vn.subVectors(Ii,Ui),ai.subVectors(Di,Ii);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!Eo(t,Di,Ui,Ii,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,Di,Ui,Ii,Yr))?!1:(jr.crossVectors(Gn,Vn),t=[jr.x,jr.y,jr.z],Eo(t,Di,Ui,Ii,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new H,new H,new H,new H,new H,new H,new H,new H],Zt=new H,qr=new Fr,Di=new H,Ui=new H,Ii=new H,Gn=new H,Vn=new H,ai=new H,hr=new H,Yr=new H,jr=new H,li=new H;function Eo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){li.fromArray(n,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dm=new Fr,dr=new H,yo=new H;class Br{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(yo)),this.expandByPoint(dr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new H,To=new H,Kr=new H,kn=new H,bo=new H,$r=new H,Ao=new H;class Xs{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){To.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(To);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=kn.dot(this.direction),l=-kn.dot(Kr),c=kn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(To).addScaledVector(Kr,d),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),$r.subVectors(i,e),Ao.crossVectors(bo,$r);let a=this.direction.dot(Ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot($r.crossVectors(kn,$r));if(l<0)return null;const c=o*this.direction.dot(bo.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Ao);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Im)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Wn.crossVectors(i,Ht),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Wn.crossVectors(i,Ht)),Wn.normalize(),Zr.crossVectors(Ht,Wn),r[0]=Wn.x,r[4]=Zr.x,r[8]=Ht.x,r[1]=Wn.y,r[5]=Zr.y,r[9]=Ht.y,r[2]=Wn.z,r[6]=Zr.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],h=i[14],b=i[3],S=i[7],y=i[11],A=i[15],D=r[0],R=r[4],J=r[8],T=r[12],w=r[1],ae=r[5],ce=r[9],fe=r[13],F=r[2],K=r[6],ee=r[10],X=r[14],z=r[3],B=r[7],k=r[11],L=r[15];return s[0]=a*D+o*w+l*F+c*z,s[4]=a*R+o*ae+l*K+c*B,s[8]=a*J+o*ce+l*ee+c*k,s[12]=a*T+o*fe+l*X+c*L,s[1]=u*D+f*w+d*F+m*z,s[5]=u*R+f*ae+d*K+m*B,s[9]=u*J+f*ce+d*ee+m*k,s[13]=u*T+f*fe+d*X+m*L,s[2]=x*D+v*w+p*F+h*z,s[6]=x*R+v*ae+p*K+h*B,s[10]=x*J+v*ce+p*ee+h*k,s[14]=x*T+v*fe+p*X+h*L,s[3]=b*D+S*w+y*F+A*z,s[7]=b*R+S*ae+y*K+A*B,s[11]=b*J+S*ce+y*ee+A*k,s[15]=b*T+S*fe+y*X+A*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],h=e[15],b=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,S=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,y=u*v*c-x*f*c+x*o*m-a*v*m-u*o*h+a*f*h,A=x*f*l-u*v*l-x*o*d+a*v*d+u*o*p-a*f*p,D=t*b+i*S+r*y+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=b*R,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=S*R,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=y*R,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*h-t*f*h)*R,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=A*R,e[13]=(u*v*r-x*f*r+x*i*d-t*v*d-u*i*p+t*f*p)*R,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,p=a*f,h=o*f,b=l*c,S=l*u,y=l*f,A=i.x,D=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(m+y)*A,r[2]=(x-S)*A,r[3]=0,r[4]=(m-y)*D,r[5]=(1-(d+h))*D,r[6]=(p+b)*D,r[7]=0,r[8]=(x+S)*R,r[9]=(p-b)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,f=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Un){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Un)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Us)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Un){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Un)x=(a+s)*f,v=-2*f;else if(o===Us)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new H,Jt=new lt,Um=new H(0,0,0),Im=new H(1,1,1),Wn=new H,Zr=new H,Ht=new H,uc=new lt,fc=new Ei;class qs{constructor(e=0,t=0,i=0,r=qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qs.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const hc=new H,Oi=new Ei,bn=new lt,Jr=new H,pr=new H,Om=new H,Fm=new Ei,dc=new H(1,0,0),pc=new H(0,1,0),mc=new H(0,0,1),Bm={type:"added"},zm={type:"removed"};class vt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new qs,i=new Ei,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return hc.copy(e).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(pr,Jr,this.up):bn.lookAt(Jr,pr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(bn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new H,An=new H,wo=new H,wn=new H,Fi=new H,Bi=new H,gc=new H,Ro=new H,Co=new H,Po=new H;let Qr=!1;class en{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),An.subVectors(i,t),wo.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(An),l=Qt.dot(wo),c=An.dot(An),u=An.dot(wo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,wn),l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),An.subVectors(e,t),Qt.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Qt.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,i),Bi.subVectors(s,i),Ro.subVectors(e,i);const l=Fi.dot(Ro),c=Bi.dot(Ro);if(l<=0&&c<=0)return t.copy(i);Co.subVectors(e,r);const u=Fi.dot(Co),f=Bi.dot(Co);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Fi,a);Po.subVectors(e,s);const m=Fi.dot(Po),x=Bi.dot(Po);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Bi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return gc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(gc,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(Fi,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Tm(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Lo(a,s,e+1/3),this.g=Lo(a,s,e),this.b=Lo(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return et.fromWorkingColorSpace(yt.copy(this),e),Math.round(Dt(yt.r*255,0,255))*65536+Math.round(Dt(yt.g*255,0,255))*256+Math.round(Dt(yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Mt){et.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(es);const i=_o(Xn.h,es.h,t),r=_o(Xn.s,es.s,t),s=_o(Xn.l,es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ye;Ye.NAMES=Df;let Hm=0;class Ai extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Ji,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==na&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uf extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new H,ts=new Ve;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ic,this.updateRange={offset:0,count:-1},this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class If extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nf extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gm=0;const qt=new lt,Do=new vt,zi=new H,Gt=new Fr,mr=new Fr,gt=new H;class Wt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?Nf:If)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Gt.min,mr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,mr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(mr.min),Gt.expandByPoint(mr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),gt.add(zi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new H,u[w]=new H;const f=new H,d=new H,m=new H,x=new Ve,v=new Ve,p=new Ve,h=new H,b=new H;function S(w,ae,ce){f.fromArray(r,w*3),d.fromArray(r,ae*3),m.fromArray(r,ce*3),x.fromArray(a,w*2),v.fromArray(a,ae*2),p.fromArray(a,ce*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const fe=1/(v.x*p.y-p.x*v.y);isFinite(fe)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(fe),b.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(fe),c[w].add(h),c[ae].add(h),c[ce].add(h),u[w].add(b),u[ae].add(b),u[ce].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,ae=y.length;w<ae;++w){const ce=y[w],fe=ce.start,F=ce.count;for(let K=fe,ee=fe+F;K<ee;K+=3)S(i[K+0],i[K+1],i[K+2])}const A=new H,D=new H,R=new H,J=new H;function T(w){R.fromArray(s,w*3),J.copy(R);const ae=c[w];A.copy(ae),A.sub(R.multiplyScalar(R.dot(ae))).normalize(),D.crossVectors(J,ae);const fe=D.dot(u[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=fe}for(let w=0,ae=y.length;w<ae;++w){const ce=y[w],fe=ce.start,F=ce.count;for(let K=fe,ee=fe+F;K<ee;K+=3)T(i[K+0]),T(i[K+1]),T(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _c=new lt,ci=new Xs,ns=new Br,vc=new H,Hi=new H,Gi=new H,Vi=new H,Uo=new H,is=new H,rs=new Ve,ss=new Ve,os=new Ve,xc=new H,Mc=new H,Sc=new H,as=new H,ls=new H;class In extends vt{constructor(e=new Wt,t=new Uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Uo.fromBufferAttribute(f,e),a?is.addScaledVector(Uo,u):is.addScaledVector(Uo.sub(t),u))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(ns.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ns,vc)===null||ci.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(_c.copy(s).invert(),ci.copy(e.ray).applyMatrix4(_c),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,A=S;y<A;y+=3){const D=o.getX(y),R=o.getX(y+1),J=o.getX(y+2);r=cs(this,h,e,i,c,u,f,D,R,J),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);r=cs(this,a,e,i,c,u,f,b,S,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,A=S;y<A;y+=3){const D=y,R=y+1,J=y+2;r=cs(this,h,e,i,c,u,f,D,R,J),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=p,S=p+1,y=p+2;r=cs(this,a,e,i,c,u,f,b,S,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Vm(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ni,o),l===null)return null;ls.copy(o),ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Hi),n.getVertexPosition(l,Gi),n.getVertexPosition(c,Vi);const u=Vm(n,e,t,i,Hi,Gi,Vi,as);if(u){r&&(rs.fromBufferAttribute(r,o),ss.fromBufferAttribute(r,l),os.fromBufferAttribute(r,c),u.uv=en.getInterpolation(as,Hi,Gi,Vi,rs,ss,os,new Ve)),s&&(rs.fromBufferAttribute(s,o),ss.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),u.uv1=en.getInterpolation(as,Hi,Gi,Vi,rs,ss,os,new Ve),u.uv2=u.uv1),a&&(xc.fromBufferAttribute(a,o),Mc.fromBufferAttribute(a,l),Sc.fromBufferAttribute(a,c),u.normal=en.getInterpolation(as,Hi,Gi,Vi,xc,Mc,Sc,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};en.getNormal(Hi,Gi,Vi,f.normal),u.face=f}return u}class zr extends Wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function x(v,p,h,b,S,y,A,D,R,J,T){const w=y/R,ae=A/J,ce=y/2,fe=A/2,F=D/2,K=R+1,ee=J+1;let X=0,z=0;const B=new H;for(let k=0;k<ee;k++){const L=k*ae-fe;for(let U=0;U<K;U++){const _e=U*w-ce;B[v]=_e*b,B[p]=L*S,B[h]=F,c.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[h]=D>0?1:-1,u.push(B.x,B.y,B.z),f.push(U/R),f.push(1-k/J),X+=1}}for(let k=0;k<J;k++)for(let L=0;L<R;L++){const U=d+L+K*k,_e=d+L+K*(k+1),pe=d+(L+1)+K*(k+1),Me=d+(L+1)+K*k;l.push(U,_e,Me),l.push(_e,pe,Me),z+=6}o.addGroup(m,z,T),m+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const r in i)e[r]=i[r]}return e}function km(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Of(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Wm={clone:sr,merge:Ct};var Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ff extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends Ff{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Wi=1;class Ym extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(ki,Wi,e,t);r.layers=this.layers,this.add(r);const s=new jt(ki,Wi,e,t);s.layers=this.layers,this.add(s);const a=new jt(ki,Wi,e,t);a.layers=this.layers,this.add(a);const o=new jt(ki,Wi,e,t);o.layers=this.layers,this.add(o);const l=new jt(ki,Wi,e,t);l.layers=this.layers,this.add(l);const c=new jt(ki,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Bf extends kt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jm extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?Mt:Kt),this.texture=new Bf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Jn});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Yt),new Ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Io=new H,Km=new H,$m=new qe;class jn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Io.subVectors(i,t).cross(Km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$m.getNormalMatrix(e),r=this.coplanarPoint(Io).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Br,us=new H;class Oa{constructor(e=new jn,t=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],h=r[12],b=r[13],S=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,p-m,y-h).normalize(),i[1].setComponents(l+s,d+c,p+m,y+h).normalize(),i[2].setComponents(l+a,d+u,p+x,y+b).normalize(),i[3].setComponents(l-a,d-u,p-x,y-b).normalize(),i[4].setComponents(l-o,d-f,p-v,y-S).normalize(),t===Un)i[5].setComponents(l+o,d+f,p+v,y+S).normalize();else if(t===Us)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Fa extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let S=0;S<c;S++){const y=S*f-s;x.push(y,-b,0),v.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const S=b+c*h,y=b+c*(h+1),A=b+1+c*(h+1),D=b+1+c*h;m.push(S,y,D),m.push(y,A,D)}this.setIndex(m),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`
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
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,$g=`
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u_=`#ifdef USE_MORPHNORMALS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$_=`uniform sampler2D t2D;
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,dv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,vv=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,Sv=`#define TOON
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
}`,Ev=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,Av=`uniform vec3 color;
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
}`,wv=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:ug,clipping_planes_fragment:fg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:vg,common:xg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:Eg,displacementmap_vertex:yg,emissivemap_fragment:Tg,emissivemap_pars_fragment:bg,colorspace_fragment:Ag,colorspace_pars_fragment:wg,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:kg,envmap_vertex:Dg,fog_vertex:Ug,fog_pars_vertex:Ig,fog_fragment:Ng,fog_pars_fragment:Og,gradientmap_pars_fragment:Fg,lightmap_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:$g,lights_fragment_maps:Zg,lights_fragment_end:Jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:r_,map_particle_fragment:s_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphcolor_vertex:c_,morphnormal_vertex:u_,morphtarget_pars_vertex:f_,morphtarget_vertex:h_,normal_fragment_begin:d_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:__,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:E_,opaque_fragment:y_,packing:T_,premultiplied_alpha_fragment:b_,project_vertex:A_,dithering_fragment:w_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:D_,shadowmap_vertex:U_,shadowmask_pars_fragment:I_,skinbase_vertex:N_,skinning_pars_vertex:O_,skinning_vertex:F_,skinnormal_vertex:B_,specularmap_fragment:z_,specularmap_pars_fragment:H_,tonemapping_fragment:G_,tonemapping_pars_fragment:V_,transmission_fragment:k_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:q_,uv_vertex:Y_,worldpos_vertex:j_,background_vert:K_,background_frag:$_,backgroundCube_vert:Z_,backgroundCube_frag:J_,cube_vert:Q_,cube_frag:ev,depth_vert:tv,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:lv,meshbasic_vert:cv,meshbasic_frag:uv,meshlambert_vert:fv,meshlambert_frag:hv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:vv,meshphysical_vert:xv,meshphysical_frag:Mv,meshtoon_vert:Sv,meshtoon_frag:Ev,points_vert:yv,points_frag:Tv,shadow_vert:bv,shadow_frag:Av,sprite_vert:wv,sprite_frag:Rv},Se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},pn={basic:{uniforms:Ct([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ct([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ct([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ct([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ct([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ct([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ct([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ct([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ct([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ct([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ct([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ct([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ct([Se.lights,Se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};pn.physical={uniforms:Ct([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const fs={r:0,b:0,g:0};function Cv(n,e,t,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),b=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ks)?(u===void 0&&(u=new In(new zr(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:sr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(S.colorSpace)!==st,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new In(new Fa(2,2),new yi({name:"BackgroundMaterial",uniforms:sr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(fs,Of(n)),i.buffers.color.setClear(fs.r,fs.g,fs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function Pv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(F,K,ee,X,z){let B=!1;if(a){const k=v(X,ee,K);c!==k&&(c=k,m(c.object)),B=h(F,X,ee,z),B&&b(F,X,ee,z)}else{const k=K.wireframe===!0;(c.geometry!==X.id||c.program!==ee.id||c.wireframe!==k)&&(c.geometry=X.id,c.program=ee.id,c.wireframe=k,B=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,J(F,K,ee,X),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,K,ee){const X=ee.wireframe===!0;let z=o[F.id];z===void 0&&(z={},o[F.id]=z);let B=z[K.id];B===void 0&&(B={},z[K.id]=B);let k=B[X];return k===void 0&&(k=p(d()),B[X]=k),k}function p(F){const K=[],ee=[],X=[];for(let z=0;z<r;z++)K[z]=0,ee[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ee,attributeDivisors:X,object:F,attributes:{},index:null}}function h(F,K,ee,X){const z=c.attributes,B=K.attributes;let k=0;const L=ee.getAttributes();for(const U in L)if(L[U].location>=0){const pe=z[U];let Me=B[U];if(Me===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(Me=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(Me=F.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;k++}return c.attributesNum!==k||c.index!==X}function b(F,K,ee,X){const z={},B=K.attributes;let k=0;const L=ee.getAttributes();for(const U in L)if(L[U].location>=0){let pe=B[U];pe===void 0&&(U==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),U==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),z[U]=Me,k++}c.attributes=z,c.attributesNum=k,c.index=X}function S(){const F=c.newAttributes;for(let K=0,ee=F.length;K<ee;K++)F[K]=0}function y(F){A(F,0)}function A(F,K){const ee=c.newAttributes,X=c.enabledAttributes,z=c.attributeDivisors;ee[F]=1,X[F]===0&&(n.enableVertexAttribArray(F),X[F]=1),z[F]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,K),z[F]=K)}function D(){const F=c.newAttributes,K=c.enabledAttributes;for(let ee=0,X=K.length;ee<X;ee++)K[ee]!==F[ee]&&(n.disableVertexAttribArray(ee),K[ee]=0)}function R(F,K,ee,X,z,B,k){k===!0?n.vertexAttribIPointer(F,K,ee,z,B):n.vertexAttribPointer(F,K,ee,X,z,B)}function J(F,K,ee,X){if(i.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const z=X.attributes,B=ee.getAttributes(),k=K.defaultAttributeValues;for(const L in B){const U=B[L];if(U.location>=0){let _e=z[L];if(_e===void 0&&(L==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),L==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor)),_e!==void 0){const pe=_e.normalized,Me=_e.itemSize,Ce=t.get(_e);if(Ce===void 0)continue;const Ne=Ce.buffer,xe=Ce.type,Te=Ce.bytesPerElement,De=i.isWebGL2===!0&&(xe===n.INT||xe===n.UNSIGNED_INT||_e.gpuType===xf);if(_e.isInterleavedBufferAttribute){const be=_e.data,g=be.stride,P=_e.offset;if(be.isInstancedInterleavedBuffer){for(let O=0;O<U.locationSize;O++)A(U.location+O,be.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let O=0;O<U.locationSize;O++)y(U.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let O=0;O<U.locationSize;O++)R(U.location+O,Me/U.locationSize,xe,pe,g*Te,(P+Me/U.locationSize*O)*Te,De)}else{if(_e.isInstancedBufferAttribute){for(let be=0;be<U.locationSize;be++)A(U.location+be,_e.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let be=0;be<U.locationSize;be++)y(U.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let be=0;be<U.locationSize;be++)R(U.location+be,Me/U.locationSize,xe,pe,Me*Te,Me/U.locationSize*be*Te,De)}}else if(k!==void 0){const pe=k[L];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(U.location,pe);break;case 3:n.vertexAttrib3fv(U.location,pe);break;case 4:n.vertexAttrib4fv(U.location,pe);break;default:n.vertexAttrib1fv(U.location,pe)}}}}D()}function T(){ce();for(const F in o){const K=o[F];for(const ee in K){const X=K[ee];for(const z in X)x(X[z].object),delete X[z];delete K[ee]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const K=o[F.id];for(const ee in K){const X=K[ee];for(const z in X)x(X[z].object),delete X[z];delete K[ee]}delete o[F.id]}function ae(F){for(const K in o){const ee=o[K];if(ee[F.id]===void 0)continue;const X=ee[F.id];for(const z in X)x(X[z].object),delete X[z];delete ee[F.id]}}function ce(){fe(),u=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:fe,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:ae,initAttributes:S,enableAttribute:y,disableUnusedAttributes:D}}function Lv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Dv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,y=a||e.has("OES_texture_float"),A=S&&y,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:D}}function Uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new jn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,S=b*4;let y=h.clippingState||null;l.value=y,y=u(x,d,S,m);for(let A=0;A!==S;++A)y[A]=t[A];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,y=m;S!==v;++S,y+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Iv(n){let e=new WeakMap;function t(a,o){return o===ia?a.mapping=nr:o===ra&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ia||o===ra)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hf extends Ff{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Ec=[.125,.215,.35,.446,.526,.582],mi=20,No=new Hf,yc=new Ye;let Oo=null,Fo=0,Bo=0;const hi=(1+Math.sqrt(5))/2,Xi=1/hi,Tc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,hi,Xi),new H(0,hi,-Xi),new H(Xi,0,hi),new H(-Xi,0,hi),new H(hi,Xi,0),new H(-hi,Xi,0)];class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Fo,Bo),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Dr,format:nn,colorSpace:zn,depthBuffer:!1},r=Ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nv(s)),this._blurMaterial=Ov(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,r){const o=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yc),u.toneMapping=Qn,u.autoClear=!1;const m=new Uf({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new In(new zr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(yc),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;hs(r,b*S,h>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===nr||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tc[(r-1)%Tc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mi-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const h=[];let b=0;for(let R=0;R<mi;++R){const J=R/v,T=Math.exp(-J*J/2);h.push(T),R===0?b+=T:R<p&&(b+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;const y=this._sizeLods[r],A=3*y*(r>S-Yi?r-S+Yi:0),D=4*(this._cubeSize-y);hs(t,A,D,3*y,2*y),l.setRenderTarget(t),l.render(f,No)}}function Nv(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Yi?l=Ec[a-n+Yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,h=1,b=new Float32Array(v*x*m),S=new Float32Array(p*x*m),y=new Float32Array(h*x*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,J=D>2?0:-1,T=[R,J,0,R+2/3,J,0,R+2/3,J+1,0,R,J,0,R+2/3,J+1,0,R,J+1,0];b.set(T,v*x*D),S.set(d,p*x*D);const w=[D,D,D,D,D,D];y.set(w,h*x*D)}const A=new Wt;A.setAttribute("position",new vn(b,v)),A.setAttribute("uv",new vn(S,p)),A.setAttribute("faceIndex",new vn(y,h)),e.push(A),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ac(n,e,t){const i=new Si(n,e,t);return i.texture.mapping=ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ov(n,e,t){const i=new Float32Array(mi),r=new H(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function wc(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Rc(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Fv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===ra,u=l===nr||l===ir;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new bc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Bv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let S=0,y=b.length;S<y;S+=3){const A=b[S+0],D=b[S+1],R=b[S+2];d.push(A,D,D,R,R,A)}}else if(x!==void 0){const b=x.array;v=x.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const A=S+0,D=S+1,R=S+2;d.push(A,D,D,R,R,A)}}else return;const p=new(wf(d)?Nf:If)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Hv(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Gv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Vv(n,e){return n[0]-e[0]}function kv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let K=function(){fe.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var m=K;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],J=u.morphAttributes.color||[];let T=0;S===!0&&(T=1),y===!0&&(T=2),A===!0&&(T=3);let w=u.attributes.position.count*T,ae=1;w>e.maxTextureSize&&(ae=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ce=new Float32Array(w*ae*4*v),fe=new Pf(ce,w,ae,v);fe.type=Zn,fe.needsUpdate=!0;const F=T*4;for(let ee=0;ee<v;ee++){const X=D[ee],z=R[ee],B=J[ee],k=w*ae*4*ee;for(let L=0;L<X.count;L++){const U=L*F;S===!0&&(a.fromBufferAttribute(X,L),ce[k+U+0]=a.x,ce[k+U+1]=a.y,ce[k+U+2]=a.z,ce[k+U+3]=0),y===!0&&(a.fromBufferAttribute(z,L),ce[k+U+4]=a.x,ce[k+U+5]=a.y,ce[k+U+6]=a.z,ce[k+U+7]=0),A===!0&&(a.fromBufferAttribute(B,L),ce[k+U+8]=a.x,ce[k+U+9]=a.y,ce[k+U+10]=a.z,ce[k+U+11]=B.itemSize===4?a.w:1)}}p={count:v,texture:fe,size:new Ve(w,ae)},s.set(u,p),u.addEventListener("dispose",K)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<x;y++){const A=v[y];A[0]=y,A[1]=d[y]}v.sort(kv);for(let y=0;y<8;y++)y<x&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Vv);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const A=o[y],D=A[0],R=A[1];D!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+y)!==p[D]&&u.setAttribute("morphTarget"+y,p[D]),h&&u.getAttribute("morphNormal"+y)!==h[D]&&u.setAttribute("morphNormal"+y,h[D]),r[y]=R,b+=R):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Xv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Gf=new kt,Vf=new Pf,kf=new Lm,Wf=new Bf,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function $v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Uc.set(i),n.uniformMatrix2fv(this.addr,!1,Uc),pt(t,i)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),pt(t,i)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Lc.set(i),n.uniformMatrix4fv(this.addr,!1,Lc),pt(t,i)}}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Gf,r)}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kf,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wf,r)}function u0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vf,r)}function f0(n){switch(n){case 5126:return qv;case 35664:return Yv;case 35665:return jv;case 35666:return Kv;case 35674:return $v;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function h0(n,e){n.uniform1fv(this.addr,e)}function d0(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _0(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v0(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x0(n,e){n.uniform1iv(this.addr,e)}function M0(n,e){n.uniform2iv(this.addr,e)}function S0(n,e){n.uniform3iv(this.addr,e)}function E0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function T0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function A0(n,e){n.uniform4uiv(this.addr,e)}function w0(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Gf,s[a])}function R0(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kf,s[a])}function C0(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wf,s[a])}function P0(n,e,t){const i=this.cache,r=e.length,s=Ys(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vf,s[a])}function L0(n){switch(n){case 5126:return h0;case 35664:return d0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return x0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return y0;case 36294:return T0;case 36295:return b0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=f0(t.type)}}class U0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=L0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function N0(n,e,t){const i=n.name,r=i.length;for(zo.lastIndex=0;;){const s=zo.exec(i),a=zo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ic(t,c===void 0?new D0(o,n,e):new U0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new I0(o),Ic(t,f)),t=f}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);N0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Nc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const O0=37297;let F0=0;function B0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function z0(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Ds&&t===Ls?i="LinearDisplayP3ToLinearSRGB":e===Ls&&t===Ds&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Ws:return[i,"LinearTransferOETF"];case Mt:case Na:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+B0(n.getShaderSource(e),a)}else return r}function H0(n,e){const t=z0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function G0(n,e){let t;switch(e){case Jp:t="Linear";break;case Qp:t="Reinhard";break;case em:t="OptimizedCineon";break;case tm:t="ACESFilmic";break;case nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function k0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _r(n){return n!==""}function Fc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(n){return n.replace(X0,Y0)}const q0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Y0(n,e){let t=We[e];if(t===void 0){const i=q0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ua(t)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(n){return n.replace(j0,K0)}function K0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Q0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _f:e="ENVMAP_BLENDING_MULTIPLY";break;case $p:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function ex(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$0(t),c=Z0(t),u=J0(t),f=Q0(t),d=ex(t),m=t.isWebGL2?"":V0(t),x=k0(s),v=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_r).join(`
`),h.length>0&&(h+=`
`)):(p=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),h=[m,Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?We.tonemapping_pars_fragment:"",t.toneMapping!==Qn?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,H0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=ua(a),a=Fc(a,t),a=Bc(a,t),o=ua(o),o=Fc(o,t),o=Bc(o,t),a=zc(a),o=zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=b+p+a,y=b+h+o,A=Nc(r,r.VERTEX_SHADER,S),D=Nc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,A),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(ae){if(n.debug.checkShaderErrors){const ce=r.getProgramInfoLog(v).trim(),fe=r.getShaderInfoLog(A).trim(),F=r.getShaderInfoLog(D).trim();let K=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,D);else{const X=Oc(r,A,"vertex"),z=Oc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+X+`
`+z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(fe===""||F==="")&&(ee=!1);ee&&(ae.diagnostics={runnable:K,programLog:ce,vertexShader:{log:fe,prefix:p},fragmentShader:{log:F,prefix:h}})}r.deleteShader(A),r.deleteShader(D),J=new Es(r,v),T=W0(r,v)}let J;this.getUniforms=function(){return J===void 0&&R(this),J};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,O0)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=D,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rx(e),t.set(e,i)),i}}class rx{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}}function sx(n,e,t,i,r,s,a){const o=new Lf,l=new ix,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return T===0?"uv":`uv${T}`}function p(T,w,ae,ce,fe){const F=ce.fog,K=fe.geometry,ee=T.isMeshStandardMaterial?ce.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),z=X&&X.mapping===ks?X.image.height:null,B=x[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const k=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,L=k!==void 0?k.length:0;let U=0;K.morphAttributes.position!==void 0&&(U=1),K.morphAttributes.normal!==void 0&&(U=2),K.morphAttributes.color!==void 0&&(U=3);let _e,pe,Me,Ce;if(B){const ct=pn[B];_e=ct.vertexShader,pe=ct.fragmentShader}else _e=T.vertexShader,pe=T.fragmentShader,l.update(T),Me=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);const Ne=n.getRenderTarget(),xe=fe.isInstancedMesh===!0,Te=!!T.map,De=!!T.matcap,be=!!X,g=!!T.aoMap,P=!!T.lightMap,O=!!T.bumpMap,W=!!T.normalMap,V=!!T.displacementMap,$=!!T.emissiveMap,se=!!T.metalnessMap,Z=!!T.roughnessMap,ie=T.anisotropy>0,te=T.clearcoat>0,Ee=T.iridescence>0,M=T.sheen>0,_=T.transmission>0,I=ie&&!!T.anisotropyMap,Q=te&&!!T.clearcoatMap,ne=te&&!!T.clearcoatNormalMap,oe=te&&!!T.clearcoatRoughnessMap,ye=Ee&&!!T.iridescenceMap,ue=Ee&&!!T.iridescenceThicknessMap,ge=M&&!!T.sheenColorMap,C=M&&!!T.sheenRoughnessMap,de=!!T.specularMap,le=!!T.specularColorMap,Pe=!!T.specularIntensityMap,Ae=_&&!!T.transmissionMap,Ue=_&&!!T.thicknessMap,Le=!!T.gradientMap,Re=!!T.alphaMap,je=T.alphaTest>0,N=!!T.alphaHash,ve=!!T.extensions,he=!!K.attributes.uv1,re=!!K.attributes.uv2,me=!!K.attributes.uv3;let Oe=Qn;return T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Oe=n.toneMapping),{isWebGL2:u,shaderID:B,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:pe,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:xe,instancingColor:xe&&fe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:zn,map:Te,matcap:De,envMap:be,envMapMode:be&&X.mapping,envMapCubeUVHeight:z,aoMap:g,lightMap:P,bumpMap:O,normalMap:W,displacementMap:d&&V,emissiveMap:$,normalMapObjectSpace:W&&T.normalMapType===mm,normalMapTangentSpace:W&&T.normalMapType===Af,metalnessMap:se,roughnessMap:Z,anisotropy:ie,anisotropyMap:I,clearcoat:te,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:Ee,iridescenceMap:ye,iridescenceThicknessMap:ue,sheen:M,sheenColorMap:ge,sheenRoughnessMap:C,specularMap:de,specularColorMap:le,specularIntensityMap:Pe,transmission:_,transmissionMap:Ae,thicknessMap:Ue,gradientMap:Le,opaque:T.transparent===!1&&T.blending===Ji,alphaMap:Re,alphaTest:je,alphaHash:N,combine:T.combine,mapUv:Te&&v(T.map.channel),aoMapUv:g&&v(T.aoMap.channel),lightMapUv:P&&v(T.lightMap.channel),bumpMapUv:O&&v(T.bumpMap.channel),normalMapUv:W&&v(T.normalMap.channel),displacementMapUv:V&&v(T.displacementMap.channel),emissiveMapUv:$&&v(T.emissiveMap.channel),metalnessMapUv:se&&v(T.metalnessMap.channel),roughnessMapUv:Z&&v(T.roughnessMap.channel),anisotropyMapUv:I&&v(T.anisotropyMap.channel),clearcoatMapUv:Q&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:C&&v(T.sheenRoughnessMap.channel),specularMapUv:de&&v(T.specularMap.channel),specularColorMapUv:le&&v(T.specularColorMap.channel),specularIntensityMapUv:Pe&&v(T.specularIntensityMap.channel),transmissionMapUv:Ae&&v(T.transmissionMap.channel),thicknessMapUv:Ue&&v(T.thicknessMap.channel),alphaMapUv:Re&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(W||ie),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:re,vertexUv3s:me,pointsUvs:fe.isPoints===!0&&!!K.attributes.uv&&(Te||Re),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:fe.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Dn,flipSided:T.side===Ft,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ve&&T.extensions.derivatives===!0,extensionFragDepth:ve&&T.extensions.fragDepth===!0,extensionDrawBuffers:ve&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ae in T.defines)w.push(ae),w.push(T.defines[ae]);return T.isRawShaderMaterial===!1&&(b(w,T),S(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function b(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function S(T,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function y(T){const w=x[T.type];let ae;if(w){const ce=pn[w];ae=Wm.clone(ce.uniforms)}else ae=T.uniforms;return ae}function A(T,w){let ae;for(let ce=0,fe=c.length;ce<fe;ce++){const F=c[ce];if(F.cacheKey===w){ae=F,++ae.usedTimes;break}}return ae===void 0&&(ae=new tx(n,w,T,s),c.push(ae)),ae}function D(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function R(T){l.remove(T)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:J}}function ox(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ax(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||ax),i.length>1&&i.sort(d||Gc),r.length>1&&r.sort(d||Gc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function lx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vc,n.set(i,[a])):r>=s.length?(a=new Vc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ye};break;case"SpotLight":t={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fx=0;function hx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dx(n,e){const t=new cx,i=ux(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new lt,o=new lt;function l(u,f){let d=0,m=0,x=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let v=0,p=0,h=0,b=0,S=0,y=0,A=0,D=0,R=0,J=0,T=0;u.sort(hx);const w=f===!0?Math.PI:1;for(let ce=0,fe=u.length;ce<fe;ce++){const F=u[ce],K=F.color,ee=F.intensity,X=F.distance,z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=K.r*ee*w,m+=K.g*ee*w,x+=K.b*ee*w;else if(F.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(F.sh.coefficients[B],ee);T++}else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const k=F.shadow,L=i.get(F);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,r.directionalShadow[v]=L,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=F.shadow.matrix,y++}r.directional[v]=B,v++}else if(F.isSpotLight){const B=t.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(K).multiplyScalar(ee*w),B.distance=X,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,r.spot[h]=B;const k=F.shadow;if(F.map&&(r.spotLightMap[R]=F.map,R++,k.updateMatrices(F),F.castShadow&&J++),r.spotLightMatrix[h]=k.matrix,F.castShadow){const L=i.get(F);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,r.spotShadow[h]=L,r.spotShadowMap[h]=z,D++}h++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy(K).multiplyScalar(ee),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=B,b++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*w),B.distance=F.distance,B.decay=F.decay,F.castShadow){const k=F.shadow,L=i.get(F);L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,L.shadowCameraNear=k.camera.near,L.shadowCameraFar=k.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=F.shadow.matrix,A++}r.point[p]=B,p++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(ee*w),B.groundColor.copy(F.groundColor).multiplyScalar(ee*w),r.hemi[S]=B,S++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const ae=r.hash;(ae.directionalLength!==v||ae.pointLength!==p||ae.spotLength!==h||ae.rectAreaLength!==b||ae.hemiLength!==S||ae.numDirectionalShadows!==y||ae.numPointShadows!==A||ae.numSpotShadows!==D||ae.numSpotMaps!==R||ae.numLightProbes!==T)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=D+R-J,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=T,ae.directionalLength=v,ae.pointLength=p,ae.spotLength=h,ae.rectAreaLength=b,ae.hemiLength=S,ae.numDirectionalShadows=y,ae.numPointShadows=A,ae.numSpotShadows=D,ae.numSpotMaps=R,ae.numLightProbes=T,r.version=fx++)}function c(u,f){let d=0,m=0,x=0,v=0,p=0;const h=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const y=u[b];if(y.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(y.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),x++}else if(y.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),o.identity(),a.copy(y.matrixWorld),a.premultiply(h),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function kc(n,e){const t=new dx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function px(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new kc(n,e),t.set(s,[l])):a>=o.length?(l=new kc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mx extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gx extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`;function xx(n,e,t){let i=new Oa;const r=new Ve,s=new Ve,a=new _t,o=new mx({depthPacking:pm}),l=new gx,c={},u=t.maxTextureSize,f={[ni]:Ft,[Ft]:ni,[Dn]:Dn},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_x,fragmentShader:vx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Wt;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new In(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let h=this.type;this.render=function(A,D,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const J=n.getRenderTarget(),T=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Jn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ce=h!==Rn&&this.type===Rn,fe=h===Rn&&this.type!==Rn;for(let F=0,K=A.length;F<K;F++){const ee=A[F],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const z=X.getFrameExtents();if(r.multiply(z),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,X.mapSize.y=s.y)),X.map===null||ce===!0||fe===!0){const k=this.type!==Rn?{minFilter:Pt,magFilter:Pt}:{};X.map!==null&&X.map.dispose(),X.map=new Si(r.x,r.y,k),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const B=X.getViewportCount();for(let k=0;k<B;k++){const L=X.getViewport(k);a.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),ae.viewport(a),X.updateMatrices(ee,k),i=X.getFrustum(),y(D,R,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===Rn&&b(X,R),X.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(J,T,w)};function b(A,D){const R=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,R,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,R,m,v,null)}function S(A,D,R,J){let T=null;const w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)T=w;else if(T=R.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ae=T.uuid,ce=D.uuid;let fe=c[ae];fe===void 0&&(fe={},c[ae]=fe);let F=fe[ce];F===void 0&&(F=T.clone(),fe[ce]=F),T=F}if(T.visible=D.visible,T.wireframe=D.wireframe,J===Rn?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:f[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ae=n.properties.get(T);ae.light=R}return T}function y(A,D,R,J,T){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Rn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const ce=e.update(A),fe=A.material;if(Array.isArray(fe)){const F=ce.groups;for(let K=0,ee=F.length;K<ee;K++){const X=F[K],z=fe[X.materialIndex];if(z&&z.visible){const B=S(A,z,J,T);n.renderBufferDirect(R,null,ce,B,A,X)}}}else if(fe.visible){const F=S(A,fe,J,T);n.renderBufferDirect(R,null,ce,F,A,null)}}const ae=A.children;for(let ce=0,fe=ae.length;ce<fe;ce++)y(ae[ce],D,R,J,T)}}function Mx(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const ve=new _t;let he=null;const re=new _t(0,0,0,0);return{setMask:function(me){he!==me&&!N&&(n.colorMask(me,me,me,me),he=me)},setLocked:function(me){N=me},setClear:function(me,Oe,Ke,ct,Xt){Xt===!0&&(me*=ct,Oe*=ct,Ke*=ct),ve.set(me,Oe,Ke,ct),re.equals(ve)===!1&&(n.clearColor(me,Oe,Ke,ct),re.copy(ve))},reset:function(){N=!1,he=null,re.set(-1,0,0,0)}}}function s(){let N=!1,ve=null,he=null,re=null;return{setTest:function(me){me?Te(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(me){ve!==me&&!N&&(n.depthMask(me),ve=me)},setFunc:function(me){if(he!==me){switch(me){case kp:n.depthFunc(n.NEVER);break;case Wp:n.depthFunc(n.ALWAYS);break;case Xp:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case qp:n.depthFunc(n.EQUAL);break;case Yp:n.depthFunc(n.GEQUAL);break;case jp:n.depthFunc(n.GREATER);break;case Kp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=me}},setLocked:function(me){N=me},setClear:function(me){re!==me&&(n.clearDepth(me),re=me)},reset:function(){N=!1,ve=null,he=null,re=null}}}function a(){let N=!1,ve=null,he=null,re=null,me=null,Oe=null,Ke=null,ct=null,Xt=null;return{setTest:function(nt){N||(nt?Te(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!N&&(n.stencilMask(nt),ve=nt)},setFunc:function(nt,At,an){(he!==nt||re!==At||me!==an)&&(n.stencilFunc(nt,At,an),he=nt,re=At,me=an)},setOp:function(nt,At,an){(Oe!==nt||Ke!==At||ct!==an)&&(n.stencilOp(nt,At,an),Oe=nt,Ke=At,ct=an)},setLocked:function(nt){N=nt},setClear:function(nt){Xt!==nt&&(n.clearStencil(nt),Xt=nt)},reset:function(){N=!1,ve=null,he=null,re=null,me=null,Oe=null,Ke=null,ct=null,Xt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,S=null,y=null,A=null,D=null,R=null,J=null,T=new Ye(0,0,0),w=0,ae=!1,ce=null,fe=null,F=null,K=null,ee=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=B>=2);let L=null,U={};const _e=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Me=new _t().fromArray(_e),Ce=new _t().fromArray(pe);function Ne(N,ve,he,re){const me=new Uint8Array(4),Oe=n.createTexture();n.bindTexture(N,Oe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<he;Ke++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ve+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Oe}const xe={};xe[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(n.DEPTH_TEST),l.setFunc(Cs),se(!1),Z(Tl),Te(n.CULL_FACE),V(Jn);function Te(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function De(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function be(N,ve){return m[N]!==ve?(n.bindFramebuffer(N,ve),m[N]=ve,i&&(N===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),N===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function g(N,ve){let he=v,re=!1;if(N)if(he=x.get(ve),he===void 0&&(he=[],x.set(ve,he)),N.isWebGLMultipleRenderTargets){const me=N.texture;if(he.length!==me.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Oe=0,Ke=me.length;Oe<Ke;Oe++)he[Oe]=n.COLOR_ATTACHMENT0+Oe;he.length=me.length,re=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,re=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,re=!0);re&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function P(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const O={[pi]:n.FUNC_ADD,[Rp]:n.FUNC_SUBTRACT,[Cp]:n.FUNC_REVERSE_SUBTRACT};if(i)O[Rl]=n.MIN,O[Cl]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(O[Rl]=N.MIN_EXT,O[Cl]=N.MAX_EXT)}const W={[Pp]:n.ZERO,[Lp]:n.ONE,[Dp]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[Bp]:n.SRC_ALPHA_SATURATE,[Op]:n.DST_COLOR,[Ip]:n.DST_ALPHA,[Up]:n.ONE_MINUS_SRC_COLOR,[na]:n.ONE_MINUS_SRC_ALPHA,[Fp]:n.ONE_MINUS_DST_COLOR,[Np]:n.ONE_MINUS_DST_ALPHA,[zp]:n.CONSTANT_COLOR,[Hp]:n.ONE_MINUS_CONSTANT_COLOR,[Gp]:n.CONSTANT_ALPHA,[Vp]:n.ONE_MINUS_CONSTANT_ALPHA};function V(N,ve,he,re,me,Oe,Ke,ct,Xt,nt){if(N===Jn){h===!0&&(De(n.BLEND),h=!1);return}if(h===!1&&(Te(n.BLEND),h=!0),N!==wp){if(N!==b||nt!==ae){if((S!==pi||D!==pi)&&(n.blendEquation(n.FUNC_ADD),S=pi,D=pi),nt)switch(N){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bl:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,A=null,R=null,J=null,T.set(0,0,0),w=0,b=N,ae=nt}return}me=me||ve,Oe=Oe||he,Ke=Ke||re,(ve!==S||me!==D)&&(n.blendEquationSeparate(O[ve],O[me]),S=ve,D=me),(he!==y||re!==A||Oe!==R||Ke!==J)&&(n.blendFuncSeparate(W[he],W[re],W[Oe],W[Ke]),y=he,A=re,R=Oe,J=Ke),(ct.equals(T)===!1||Xt!==w)&&(n.blendColor(ct.r,ct.g,ct.b,Xt),T.copy(ct),w=Xt),b=N,ae=!1}function $(N,ve){N.side===Dn?De(n.CULL_FACE):Te(n.CULL_FACE);let he=N.side===Ft;ve&&(he=!he),se(he),N.blending===Ji&&N.transparent===!1?V(Jn):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const re=N.stencilWrite;c.setTest(re),re&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){ce!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),ce=N)}function Z(N){N!==Tp?(Te(n.CULL_FACE),N!==fe&&(N===Tl?n.cullFace(n.BACK):N===bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),fe=N}function ie(N){N!==F&&(z&&n.lineWidth(N),F=N)}function te(N,ve,he){N?(Te(n.POLYGON_OFFSET_FILL),(K!==ve||ee!==he)&&(n.polygonOffset(ve,he),K=ve,ee=he)):De(n.POLYGON_OFFSET_FILL)}function Ee(N){N?Te(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function M(N){N===void 0&&(N=n.TEXTURE0+X-1),L!==N&&(n.activeTexture(N),L=N)}function _(N,ve,he){he===void 0&&(L===null?he=n.TEXTURE0+X-1:he=L);let re=U[he];re===void 0&&(re={type:void 0,texture:void 0},U[he]=re),(re.type!==N||re.texture!==ve)&&(L!==he&&(n.activeTexture(he),L=he),n.bindTexture(N,ve||xe[N]),re.type=N,re.texture=ve)}function I(){const N=U[L];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){Me.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function Ue(N){Ce.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function Le(N,ve){let he=f.get(ve);he===void 0&&(he=new WeakMap,f.set(ve,he));let re=he.get(N);re===void 0&&(re=n.getUniformBlockIndex(ve,N.name),he.set(N,re))}function Re(N,ve){const re=f.get(ve).get(N);u.get(ve)!==re&&(n.uniformBlockBinding(ve,re,N.__bindingPointIndex),u.set(ve,re))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},L=null,U={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,S=null,y=null,A=null,D=null,R=null,J=null,T=new Ye(0,0,0),w=0,ae=!1,ce=null,fe=null,F=null,K=null,ee=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:De,bindFramebuffer:be,drawBuffers:g,useProgram:P,setBlending:V,setMaterial:$,setFlipSided:se,setCullFace:Z,setLineWidth:ie,setPolygonOffset:te,setScissorTest:Ee,activeTexture:M,bindTexture:_,unbindTexture:I,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:le,texImage3D:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:C,texStorage3D:de,texSubImage2D:oe,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ae,viewport:Ue,reset:je}}function Sx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,_){return h?new OffscreenCanvas(M,_):Is("canvas")}function S(M,_,I,Q){let ne=1;if((M.width>Q||M.height>Q)&&(ne=Q/Math.max(M.width,M.height)),ne<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const oe=_?ca:Math.floor,ye=oe(ne*M.width),ue=oe(ne*M.height);v===void 0&&(v=b(ye,ue));const ge=I?b(ye,ue):v;return ge.width=ye,ge.height=ue,ge.getContext("2d").drawImage(M,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+ue+")."),ge}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return sc(M.width)&&sc(M.height)}function A(M){return o?!1:M.wrapS!==tn||M.wrapT!==tn||M.minFilter!==Pt&&M.minFilter!==Yt}function D(M,_){return M.generateMipmaps&&_&&M.minFilter!==Pt&&M.minFilter!==Yt}function R(M){n.generateMipmap(M)}function J(M,_,I,Q,ne=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=_;if(_===n.RED&&(I===n.FLOAT&&(oe=n.R32F),I===n.HALF_FLOAT&&(oe=n.R16F),I===n.UNSIGNED_BYTE&&(oe=n.R8)),_===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(oe=n.R8UI),I===n.UNSIGNED_SHORT&&(oe=n.R16UI),I===n.UNSIGNED_INT&&(oe=n.R32UI),I===n.BYTE&&(oe=n.R8I),I===n.SHORT&&(oe=n.R16I),I===n.INT&&(oe=n.R32I)),_===n.RG&&(I===n.FLOAT&&(oe=n.RG32F),I===n.HALF_FLOAT&&(oe=n.RG16F),I===n.UNSIGNED_BYTE&&(oe=n.RG8)),_===n.RGBA){const ye=ne?Ps:et.getTransfer(Q);I===n.FLOAT&&(oe=n.RGBA32F),I===n.HALF_FLOAT&&(oe=n.RGBA16F),I===n.UNSIGNED_BYTE&&(oe=ye===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function T(M,_,I){return D(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function w(M){return M===Pt||M===Pl||M===uo?n.NEAREST:n.LINEAR}function ae(M){const _=M.target;_.removeEventListener("dispose",ae),fe(_),_.isVideoTexture&&x.delete(_)}function ce(M){const _=M.target;_.removeEventListener("dispose",ce),K(_)}function fe(M){const _=i.get(M);if(_.__webglInit===void 0)return;const I=M.source,Q=p.get(I);if(Q){const ne=Q[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(M),Object.keys(Q).length===0&&p.delete(I)}i.remove(M)}function F(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const I=M.source,Q=p.get(I);delete Q[_.__cacheKey],a.memory.textures--}function K(M){const _=M.texture,I=i.get(M),Q=i.get(_);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(I.__webglFramebuffer[ne]))for(let oe=0;oe<I.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(I.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(I.__webglFramebuffer[ne]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ne])}else{if(Array.isArray(I.__webglFramebuffer))for(let ne=0;ne<I.__webglFramebuffer.length;ne++)n.deleteFramebuffer(I.__webglFramebuffer[ne]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ne=0;ne<I.__webglColorRenderbuffer.length;ne++)I.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ne]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ne=0,oe=_.length;ne<oe;ne++){const ye=i.get(_[ne]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(_[ne])}i.remove(_),i.remove(M)}let ee=0;function X(){ee=0}function z(){const M=ee;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ee+=1,M}function B(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function k(M,_){const I=i.get(M);if(M.isVideoTexture&&te(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(I,M,_);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+_)}function L(M,_){const I=i.get(M);if(M.version>0&&I.__version!==M.version){Te(I,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+_)}function U(M,_){const I=i.get(M);if(M.version>0&&I.__version!==M.version){Te(I,M,_);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+_)}function _e(M,_){const I=i.get(M);if(M.version>0&&I.__version!==M.version){De(I,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+_)}const pe={[sa]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},Me={[Pt]:n.NEAREST,[Pl]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[im]:n.LINEAR_MIPMAP_NEAREST,[Lr]:n.LINEAR_MIPMAP_LINEAR},Ce={[gm]:n.NEVER,[ym]:n.ALWAYS,[_m]:n.LESS,[xm]:n.LEQUAL,[vm]:n.EQUAL,[Em]:n.GEQUAL,[Mm]:n.GREATER,[Sm]:n.NOTEQUAL};function Ne(M,_,I){if(I?(n.texParameteri(M,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,pe[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Me[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Me[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==tn||_.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,w(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==Pt&&_.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Pt||_.minFilter!==uo&&_.minFilter!==Lr||_.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Dr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function xe(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",ae));const Q=_.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const oe=B(_);if(oe!==M.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ne[oe].usedTimes++;const ye=ne[M.__cacheKey];ye!==void 0&&(ne[M.__cacheKey].usedTimes--,ye.usedTimes===0&&F(_)),M.__cacheKey=oe,M.__webglTexture=ne[oe].texture}return I}function Te(M,_,I){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=xe(M,_),oe=_.source;t.bindTexture(Q,M.__webglTexture,n.TEXTURE0+I);const ye=i.get(oe);if(oe.version!==ye.__version||ne===!0){t.activeTexture(n.TEXTURE0+I);const ue=et.getPrimaries(et.workingColorSpace),ge=_.colorSpace===Kt?null:et.getPrimaries(_.colorSpace),C=_.colorSpace===Kt||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const de=A(_)&&y(_.image)===!1;let le=S(_.image,de,!1,u);le=Ee(_,le);const Pe=y(le)||o,Ae=s.convert(_.format,_.colorSpace);let Ue=s.convert(_.type),Le=J(_.internalFormat,Ae,Ue,_.colorSpace,_.isVideoTexture);Ne(Q,_,Pe);let Re;const je=_.mipmaps,N=o&&_.isVideoTexture!==!0,ve=ye.__version===void 0||ne===!0,he=T(_,le,Pe);if(_.isDepthTexture)Le=n.DEPTH_COMPONENT,o?_.type===Zn?Le=n.DEPTH_COMPONENT32F:_.type===$n?Le=n.DEPTH_COMPONENT24:_.type===vi?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:_.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===xi&&Le===n.DEPTH_COMPONENT&&_.type!==Ia&&_.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=$n,Ue=s.convert(_.type)),_.format===rr&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,_.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=vi,Ue=s.convert(_.type))),ve&&(N?t.texStorage2D(n.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,Ae,Ue,null));else if(_.isDataTexture)if(je.length>0&&Pe){N&&ve&&t.texStorage2D(n.TEXTURE_2D,he,Le,je[0].width,je[0].height);for(let re=0,me=je.length;re<me;re++)Re=je[re],N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Re.width,Re.height,Ae,Ue,Re.data):t.texImage2D(n.TEXTURE_2D,re,Le,Re.width,Re.height,0,Ae,Ue,Re.data);_.generateMipmaps=!1}else N?(ve&&t.texStorage2D(n.TEXTURE_2D,he,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Ue,le.data)):t.texImage2D(n.TEXTURE_2D,0,Le,le.width,le.height,0,Ae,Ue,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,je[0].width,je[0].height,le.depth);for(let re=0,me=je.length;re<me;re++)Re=je[re],_.format!==nn?Ae!==null?N?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Re.width,Re.height,le.depth,Ae,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Le,Re.width,Re.height,le.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Re.width,Re.height,le.depth,Ae,Ue,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Le,Re.width,Re.height,le.depth,0,Ae,Ue,Re.data)}else{N&&ve&&t.texStorage2D(n.TEXTURE_2D,he,Le,je[0].width,je[0].height);for(let re=0,me=je.length;re<me;re++)Re=je[re],_.format!==nn?Ae!==null?N?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Re.width,Re.height,Ae,Ue,Re.data):t.texImage2D(n.TEXTURE_2D,re,Le,Re.width,Re.height,0,Ae,Ue,Re.data)}else if(_.isDataArrayTexture)N?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Ue,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,Ae,Ue,le.data);else if(_.isData3DTexture)N?(ve&&t.texStorage3D(n.TEXTURE_3D,he,Le,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Ue,le.data)):t.texImage3D(n.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,Ae,Ue,le.data);else if(_.isFramebufferTexture){if(ve)if(N)t.texStorage2D(n.TEXTURE_2D,he,Le,le.width,le.height);else{let re=le.width,me=le.height;for(let Oe=0;Oe<he;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Le,re,me,0,Ae,Ue,null),re>>=1,me>>=1}}else if(je.length>0&&Pe){N&&ve&&t.texStorage2D(n.TEXTURE_2D,he,Le,je[0].width,je[0].height);for(let re=0,me=je.length;re<me;re++)Re=je[re],N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ae,Ue,Re):t.texImage2D(n.TEXTURE_2D,re,Le,Ae,Ue,Re);_.generateMipmaps=!1}else N?(ve&&t.texStorage2D(n.TEXTURE_2D,he,Le,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ue,le)):t.texImage2D(n.TEXTURE_2D,0,Le,Ae,Ue,le);D(_,Pe)&&R(Q),ye.__version=oe.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function De(M,_,I){if(_.image.length!==6)return;const Q=xe(M,_),ne=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const oe=i.get(ne);if(ne.version!==oe.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const ye=et.getPrimaries(et.workingColorSpace),ue=_.colorSpace===Kt?null:et.getPrimaries(_.colorSpace),ge=_.colorSpace===Kt||ye===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const C=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,le=[];for(let re=0;re<6;re++)!C&&!de?le[re]=S(_.image[re],!1,!0,c):le[re]=de?_.image[re].image:_.image[re],le[re]=Ee(_,le[re]);const Pe=le[0],Ae=y(Pe)||o,Ue=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Re=J(_.internalFormat,Ue,Le,_.colorSpace),je=o&&_.isVideoTexture!==!0,N=oe.__version===void 0||Q===!0;let ve=T(_,Pe,Ae);Ne(n.TEXTURE_CUBE_MAP,_,Ae);let he;if(C){je&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Re,Pe.width,Pe.height);for(let re=0;re<6;re++){he=le[re].mipmaps;for(let me=0;me<he.length;me++){const Oe=he[me];_.format!==nn?Ue!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Re,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,Oe.width,Oe.height,Ue,Le,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,Re,Oe.width,Oe.height,0,Ue,Le,Oe.data)}}}else{he=_.mipmaps,je&&N&&(he.length>0&&ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Re,le[0].width,le[0].height));for(let re=0;re<6;re++)if(de){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,le[re].width,le[re].height,Ue,Le,le[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,le[re].width,le[re].height,0,Ue,Le,le[re].data);for(let me=0;me<he.length;me++){const Ke=he[me].image[re].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Ke.width,Ke.height,Ue,Le,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Re,Ke.width,Ke.height,0,Ue,Le,Ke.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue,Le,le[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Re,Ue,Le,le[re]);for(let me=0;me<he.length;me++){const Oe=he[me];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Ue,Le,Oe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,Re,Ue,Le,Oe.image[re])}}}D(_,Ae)&&R(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function be(M,_,I,Q,ne,oe){const ye=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),ge=J(I.internalFormat,ye,ue,I.colorSpace);if(!i.get(_).__hasExternalTextures){const de=Math.max(1,_.width>>oe),le=Math.max(1,_.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,ge,de,le,_.depth,0,ye,ue,null):t.texImage2D(ne,oe,ge,de,le,0,ye,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ie(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,i.get(I).__webglTexture,0,Z(_)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,i.get(I).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(M,_,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let Q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||ie(_)){const ne=_.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zn?Q=n.DEPTH_COMPONENT32F:ne.type===$n&&(Q=n.DEPTH_COMPONENT24));const oe=Z(_);ie(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Q,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Q,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const Q=Z(_);I&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,_.width,_.height):ie(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ne=0;ne<Q.length;ne++){const oe=Q[ne],ye=s.convert(oe.format,oe.colorSpace),ue=s.convert(oe.type),ge=J(oe.internalFormat,ye,ue,oe.colorSpace),C=Z(_);I&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,ge,_.width,_.height):ie(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,ge,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ge,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const Q=i.get(_.depthTexture).__webglTexture,ne=Z(_);if(_.depthTexture.format===xi)ie(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===rr)ie(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function O(M){const _=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");P(_.__webglFramebuffer,M)}else if(I){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=n.createRenderbuffer(),g(_.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),g(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(M,_,I){const Q=i.get(M);_!==void 0&&be(Q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&O(M)}function V(M){const _=M.texture,I=i.get(M),Q=i.get(_);M.addEventListener("dispose",ce),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,a.memory.textures++);const ne=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,ye=y(M)||o;if(ne){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let ge=0;ge<_.mipmaps.length;ge++)I.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){const ue=M.texture;for(let ge=0,C=ue.length;ge<C;ge++){const de=i.get(ue[ge]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ie(M)===!1){const ue=oe?_:[_];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ge=0;ge<ue.length;ge++){const C=ue[ge];I.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ge]);const de=s.convert(C.format,C.colorSpace),le=s.convert(C.type),Pe=J(C.internalFormat,de,le,C.colorSpace,M.isXRRenderTarget===!0),Ae=Z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,I.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),g(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_,ye);for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)be(I.__webglFramebuffer[ue][ge],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else be(I.__webglFramebuffer[ue],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);D(_,ye)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ue=M.texture;for(let ge=0,C=ue.length;ge<C;ge++){const de=ue[ge],le=i.get(de);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ne(n.TEXTURE_2D,de,ye),be(I.__webglFramebuffer,M,de,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),D(de,ye)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,Q.__webglTexture),Ne(ue,_,ye),o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)be(I.__webglFramebuffer[ge],M,_,n.COLOR_ATTACHMENT0,ue,ge);else be(I.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ue,0);D(_,ye)&&R(ue),t.unbindTexture()}M.depthBuffer&&O(M)}function $(M){const _=y(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,ne=I.length;Q<ne;Q++){const oe=I[Q];if(D(oe,_)){const ye=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(oe).__webglTexture;t.bindTexture(ye,ue),R(ye),t.unbindTexture()}}}function se(M){if(o&&M.samples>0&&ie(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,Q=M.height;let ne=n.COLOR_BUFFER_BIT;const oe=[],ye=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(M),ge=M.isWebGLMultipleRenderTargets===!0;if(ge)for(let C=0;C<_.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let C=0;C<_.length;C++){oe.push(n.COLOR_ATTACHMENT0+C),M.depthBuffer&&oe.push(ye);const de=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(de===!1&&(M.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[C]),de===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),ge){const le=i.get(_[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,I,Q,0,0,I,Q,ne,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let C=0;C<_.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,ue.__webglColorRenderbuffer[C]);const de=i.get(_[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Z(M){return Math.min(f,M.samples)}function ie(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(M){const _=a.render.frame;x.get(M)!==_&&(x.set(M,_),M.update())}function Ee(M,_){const I=M.colorSpace,Q=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===aa||I!==zn&&I!==Kt&&(et.getTransfer(I)===st?o===!1?e.has("EXT_sRGB")===!0&&Q===nn?(M.format=aa,M.minFilter=Yt,M.generateMipmaps=!1):_=Rf.sRGBToLinear(_):(Q!==nn||ne!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=_e,this.rebindTextures=W,this.setupRenderTarget=V,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ie}function Ex(n,e,t){const i=t.isWebGL2;function r(s,a=Kt){let o;const l=et.getTransfer(a);if(s===ei)return n.UNSIGNED_BYTE;if(s===Mf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Sf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===rm)return n.BYTE;if(s===sm)return n.SHORT;if(s===Ia)return n.UNSIGNED_SHORT;if(s===xf)return n.INT;if(s===$n)return n.UNSIGNED_INT;if(s===Zn)return n.FLOAT;if(s===Dr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===om)return n.ALPHA;if(s===nn)return n.RGBA;if(s===am)return n.LUMINANCE;if(s===lm)return n.LUMINANCE_ALPHA;if(s===xi)return n.DEPTH_COMPONENT;if(s===rr)return n.DEPTH_STENCIL;if(s===aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===cm)return n.RED;if(s===Ef)return n.RED_INTEGER;if(s===um)return n.RG;if(s===yf)return n.RG_INTEGER;if(s===Tf)return n.RGBA_INTEGER;if(s===fo||s===ho||s===po||s===mo)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ll||s===Dl||s===Ul||s===Il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nl||s===Ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Nl)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ol)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fl||s===Bl||s===zl||s===Hl||s===Gl||s===Vl||s===kl||s===Wl||s===Xl||s===ql||s===Yl||s===jl||s===Kl||s===$l)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Fl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ql)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$l)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===go||s===Zl||s===Jl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===go)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hm||s===Ql||s===ec||s===tc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===go)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ec)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class yx extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bx extends kt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xi&&(i=$n),i===void 0&&u===rr&&(i=vi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ax extends bi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,h=null;const b=[],S=[],y=new jt;y.layers.enable(1),y.viewport=new _t;const A=new jt;A.layers.enable(2),A.viewport=new _t;const D=[y,A],R=new yx;R.layers.enable(1),R.layers.enable(2);let J=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let U=b[L];return U===void 0&&(U=new Ho,b[L]=U),U.getTargetRaySpace()},this.getControllerGrip=function(L){let U=b[L];return U===void 0&&(U=new Ho,b[L]=U),U.getGripSpace()},this.getHand=function(L){let U=b[L];return U===void 0&&(U=new Ho,b[L]=U),U.getHandSpace()};function w(L){const U=S.indexOf(L.inputSource);if(U===-1)return;const _e=b[U];_e!==void 0&&(_e.update(L.inputSource,L.frame,c||a),_e.dispatchEvent({type:L.type,data:L.inputSource}))}function ae(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",ce);for(let L=0;L<b.length;L++){const U=S[L];U!==null&&(S[L]=null,b[L].disconnect(U))}J=null,T=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:m}),h=new Si(m.framebufferWidth,m.framebufferHeight,{format:nn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,_e=null,pe=null;v.depth&&(pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=v.stencil?rr:xi,_e=v.stencil?vi:$n);const Me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),h=new Si(d.textureWidth,d.textureHeight,{format:nn,type:ei,depthTexture:new bx(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ce(L){for(let U=0;U<L.removed.length;U++){const _e=L.removed[U],pe=S.indexOf(_e);pe>=0&&(S[pe]=null,b[pe].disconnect(_e))}for(let U=0;U<L.added.length;U++){const _e=L.added[U];let pe=S.indexOf(_e);if(pe===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=S.length){S.push(_e),pe=Ce;break}else if(S[Ce]===null){S[Ce]=_e,pe=Ce;break}if(pe===-1)break}const Me=b[pe];Me&&Me.connect(_e)}}const fe=new H,F=new H;function K(L,U,_e){fe.setFromMatrixPosition(U.matrixWorld),F.setFromMatrixPosition(_e.matrixWorld);const pe=fe.distanceTo(F),Me=U.projectionMatrix.elements,Ce=_e.projectionMatrix.elements,Ne=Me[14]/(Me[10]-1),xe=Me[14]/(Me[10]+1),Te=(Me[9]+1)/Me[5],De=(Me[9]-1)/Me[5],be=(Me[8]-1)/Me[0],g=(Ce[8]+1)/Ce[0],P=Ne*be,O=Ne*g,W=pe/(-be+g),V=W*-be;U.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(V),L.translateZ(W),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const $=Ne+W,se=xe+W,Z=P-V,ie=O+(pe-V),te=Te*xe/se*$,Ee=De*xe/se*$;L.projectionMatrix.makePerspective(Z,ie,te,Ee,$,se),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function ee(L,U){U===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(U.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;R.near=A.near=y.near=L.near,R.far=A.far=y.far=L.far,(J!==R.near||T!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),J=R.near,T=R.far);const U=L.parent,_e=R.cameras;ee(R,U);for(let pe=0;pe<_e.length;pe++)ee(_e[pe],U);_e.length===2?K(R,y,A):R.projectionMatrix.copy(y.projectionMatrix),X(L,R,U)};function X(L,U,_e){_e===null?L.matrix.copy(U.matrixWorld):(L.matrix.copy(_e.matrixWorld),L.matrix.invert(),L.matrix.multiply(U.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(U.projectionMatrix),L.projectionMatrixInverse.copy(U.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=la*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let z=null;function B(L,U){if(u=U.getViewerPose(c||a),x=U,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let pe=!1;_e.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let Me=0;Me<_e.length;Me++){const Ce=_e[Me];let Ne=null;if(m!==null)Ne=m.getViewport(Ce);else{const Te=f.getViewSubImage(d,Ce);Ne=Te.viewport,Me===0&&(e.setRenderTargetTextures(h,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let xe=D[Me];xe===void 0&&(xe=new jt,xe.layers.enable(Me),xe.viewport=new _t,D[Me]=xe),xe.matrix.fromArray(Ce.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ce.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Me===0&&(R.matrix.copy(xe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(xe)}}for(let _e=0;_e<b.length;_e++){const pe=S[_e],Me=b[_e];pe!==null&&Me!==void 0&&Me.update(pe,U,c||a)}z&&z(L,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const k=new zf;k.setAnimationLoop(B),this.setAnimationLoop=function(L){z=L},this.dispose=function(){}}}function wx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Of(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,S,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ft&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ft&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const y=S.program;i.uniformBlockBinding(b,y)}function c(b,S){let y=r[b.id];y===void 0&&(x(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",p));const A=S.program;i.updateUBOMapping(b,A);const D=e.render.frame;s[b.id]!==D&&(d(b),s[b.id]=D)}function u(b){const S=f();b.__bindingPointIndex=S;const y=n.createBuffer(),A=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],y=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,R=y.length;D<R;D++){const J=y[D];if(m(J,D,A)===!0){const T=J.__offset,w=Array.isArray(J.value)?J.value:[J.value];let ae=0;for(let ce=0;ce<w.length;ce++){const fe=w[ce],F=v(fe);typeof fe=="number"?(J.__data[0]=fe,n.bufferSubData(n.UNIFORM_BUFFER,T+ae,J.__data)):fe.isMatrix3?(J.__data[0]=fe.elements[0],J.__data[1]=fe.elements[1],J.__data[2]=fe.elements[2],J.__data[3]=fe.elements[0],J.__data[4]=fe.elements[3],J.__data[5]=fe.elements[4],J.__data[6]=fe.elements[5],J.__data[7]=fe.elements[0],J.__data[8]=fe.elements[6],J.__data[9]=fe.elements[7],J.__data[10]=fe.elements[8],J.__data[11]=fe.elements[0]):(fe.toArray(J.__data,ae),ae+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,J.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,y){const A=b.value;if(y[S]===void 0){if(typeof A=="number")y[S]=A;else{const D=Array.isArray(A)?A:[A],R=[];for(let J=0;J<D.length;J++)R.push(D[J].clone());y[S]=R}return!0}else if(typeof A=="number"){if(y[S]!==A)return y[S]=A,!0}else{const D=Array.isArray(y[S])?y[S]:[y[S]],R=Array.isArray(A)?A:[A];for(let J=0;J<D.length;J++){const T=D[J];if(T.equals(R[J])===!1)return T.copy(R[J]),!0}}return!1}function x(b){const S=b.uniforms;let y=0;const A=16;let D=0;for(let R=0,J=S.length;R<J;R++){const T=S[R],w={boundary:0,storage:0},ae=Array.isArray(T.value)?T.value:[T.value];for(let ce=0,fe=ae.length;ce<fe;ce++){const F=ae[ce],K=v(F);w.boundary+=K.boundary,w.storage+=K.storage}if(T.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,R>0){D=y%A;const ce=A-D;D!==0&&ce-w.boundary<0&&(y+=A-D,T.__offset=y)}y+=w.storage}return D=y%A,D>0&&(y+=A-D),b.__size=y,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Xf{constructor(e={}){const{canvas:t=Am(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const S=this;let y=!1,A=0,D=0,R=null,J=-1,T=null;const w=new _t,ae=new _t;let ce=null;const fe=new Ye(0);let F=0,K=t.width,ee=t.height,X=1,z=null,B=null;const k=new _t(0,0,K,ee),L=new _t(0,0,K,ee);let U=!1;const _e=new Oa;let pe=!1,Me=!1,Ce=null;const Ne=new lt,xe=new Ve,Te=new H,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return R===null?X:1}let g=i;function P(E,G){for(let q=0;q<E.length;q++){const Y=E[q],j=t.getContext(Y,G);if(j!==null)return j}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ve,!1),g===null){const G=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&G.shift(),g=P(G,E),g===null)throw P(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let O,W,V,$,se,Z,ie,te,Ee,M,_,I,Q,ne,oe,ye,ue,ge,C,de,le,Pe,Ae,Ue;function Le(){O=new Bv(g),W=new Dv(g,O,e),O.init(W),Pe=new Ex(g,O,W),V=new Mx(g,O,W),$=new Gv(g),se=new ox,Z=new Sx(g,O,V,se,W,Pe,$),ie=new Iv(S),te=new Fv(S),Ee=new Zm(g,W),Ae=new Pv(g,O,Ee,W),M=new zv(g,Ee,$,Ae),_=new Xv(g,M,Ee,$),C=new Wv(g,W,Z),ye=new Uv(se),I=new sx(S,ie,te,O,W,Ae,ye),Q=new wx(S,se),ne=new lx,oe=new px(O,W),ge=new Cv(S,ie,te,V,_,d,l),ue=new xx(S,_,W),Ue=new Rx(g,$,W,V),de=new Lv(g,O,$,W),le=new Hv(g,O,$,W),$.programs=I.programs,S.capabilities=W,S.extensions=O,S.properties=se,S.renderLists=ne,S.shadowMap=ue,S.state=V,S.info=$}Le();const Re=new Ax(S,g);this.xr=Re,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const E=O.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=O.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(K,ee,!1))},this.getSize=function(E){return E.set(K,ee)},this.setSize=function(E,G,q=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,ee=G,t.width=Math.floor(E*X),t.height=Math.floor(G*X),q===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(K*X,ee*X).floor()},this.setDrawingBufferSize=function(E,G,q){K=E,ee=G,X=q,t.width=Math.floor(E*q),t.height=Math.floor(G*q),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,G,q,Y){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,G,q,Y),V.viewport(w.copy(k).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(L)},this.setScissor=function(E,G,q,Y){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,G,q,Y),V.scissor(ae.copy(L).multiplyScalar(X).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){V.setScissorTest(U=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(E=!0,G=!0,q=!0){let Y=0;if(E){let j=!1;if(R!==null){const we=R.texture.format;j=we===Tf||we===yf||we===Ef}if(j){const we=R.texture.type,Ie=we===ei||we===$n||we===Ia||we===vi||we===Mf||we===Sf,Fe=ge.getClearColor(),Be=ge.getClearAlpha(),Xe=Fe.r,He=Fe.g,Ge=Fe.b;Ie?(m[0]=Xe,m[1]=He,m[2]=Ge,m[3]=Be,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=Xe,x[1]=He,x[2]=Ge,x[3]=Be,g.clearBufferiv(g.COLOR,0,x))}else Y|=g.COLOR_BUFFER_BIT}G&&(Y|=g.DEPTH_BUFFER_BIT),q&&(Y|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ne.dispose(),oe.dispose(),se.dispose(),ie.dispose(),te.dispose(),_.dispose(),Ae.dispose(),Ue.dispose(),I.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Xt),Re.removeEventListener("sessionend",nt),Ce&&(Ce.dispose(),Ce=null),At.stop()};function je(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=$.autoReset,G=ue.enabled,q=ue.autoUpdate,Y=ue.needsUpdate,j=ue.type;Le(),$.autoReset=E,ue.enabled=G,ue.autoUpdate=q,ue.needsUpdate=Y,ue.type=j}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const G=E.target;G.removeEventListener("dispose",he),re(G)}function re(E){me(E),se.remove(E)}function me(E){const G=se.get(E).programs;G!==void 0&&(G.forEach(function(q){I.releaseProgram(q)}),E.isShaderMaterial&&I.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,q,Y,j,we){G===null&&(G=De);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,Fe=$f(E,G,q,Y,j);V.setMaterial(Y,Ie);let Be=q.index,Xe=1;if(Y.wireframe===!0){if(Be=M.getWireframeAttribute(q),Be===void 0)return;Xe=2}const He=q.drawRange,Ge=q.attributes.position;let at=He.start*Xe,Bt=(He.start+He.count)*Xe;we!==null&&(at=Math.max(at,we.start*Xe),Bt=Math.min(Bt,(we.start+we.count)*Xe)),Be!==null?(at=Math.max(at,0),Bt=Math.min(Bt,Be.count)):Ge!=null&&(at=Math.max(at,0),Bt=Math.min(Bt,Ge.count));const mt=Bt-at;if(mt<0||mt===1/0)return;Ae.setup(j,Y,Fe,q,Be);let Sn,ot=de;if(Be!==null&&(Sn=Ee.get(Be),ot=le,ot.setIndex(Sn)),j.isMesh)Y.wireframe===!0?(V.setLineWidth(Y.wireframeLinewidth*be()),ot.setMode(g.LINES)):ot.setMode(g.TRIANGLES);else if(j.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),V.setLineWidth($e*be()),j.isLineSegments?ot.setMode(g.LINES):j.isLineLoop?ot.setMode(g.LINE_LOOP):ot.setMode(g.LINE_STRIP)}else j.isPoints?ot.setMode(g.POINTS):j.isSprite&&ot.setMode(g.TRIANGLES);if(j.isInstancedMesh)ot.renderInstances(at,mt,j.count);else if(q.isInstancedBufferGeometry){const $e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,js=Math.min(q.instanceCount,$e);ot.renderInstances(at,mt,js)}else ot.render(at,mt)};function Oe(E,G,q){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,Gr(E,G,q),E.side=ni,E.needsUpdate=!0,Gr(E,G,q),E.side=Dn):Gr(E,G,q)}this.compile=function(E,G,q=null){q===null&&(q=E),p=oe.get(q),p.init(),b.push(p),q.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),E!==q&&E.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(S._useLegacyLights);const Y=new Set;return E.traverse(function(j){const we=j.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Fe=we[Ie];Oe(Fe,q,j),Y.add(Fe)}else Oe(we,q,j),Y.add(we)}),b.pop(),p=null,Y},this.compileAsync=function(E,G,q=null){const Y=this.compile(E,G,q);return new Promise(j=>{function we(){if(Y.forEach(function(Ie){se.get(Ie).currentProgram.isReady()&&Y.delete(Ie)}),Y.size===0){j(E);return}setTimeout(we,10)}O.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ke=null;function ct(E){Ke&&Ke(E)}function Xt(){At.stop()}function nt(){At.start()}const At=new zf;At.setAnimationLoop(ct),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(E){Ke=E,Re.setAnimationLoop(E),E===null?At.stop():At.start()},Re.addEventListener("sessionstart",Xt),Re.addEventListener("sessionend",nt),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,G,R),p=oe.get(E,b.length),p.init(),b.push(p),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),_e.setFromProjectionMatrix(Ne),Me=this.localClippingEnabled,pe=ye.init(this.clippingPlanes,Me),v=ne.get(E,h.length),v.init(),h.push(v),an(E,G,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(z,B),this.info.render.frame++,pe===!0&&ye.beginShadows();const q=p.state.shadowsArray;if(ue.render(q,E,G),pe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(v,E),p.setupLights(S._useLegacyLights),G.isArrayCamera){const Y=G.cameras;for(let j=0,we=Y.length;j<we;j++){const Ie=Y[j];Ga(v,E,Ie,Ie.viewport)}}else Ga(v,E,G);R!==null&&(Z.updateMultisampleRenderTarget(R),Z.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(S,E,G),Ae.resetDefaultState(),J=-1,T=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function an(E,G,q,Y){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){Y&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const Ie=_.update(E),Fe=E.material;Fe.visible&&v.push(E,Ie,Fe,q,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const Ie=_.update(E),Fe=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Te.copy(Ie.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Fe)){const Be=Ie.groups;for(let Xe=0,He=Be.length;Xe<He;Xe++){const Ge=Be[Xe],at=Fe[Ge.materialIndex];at&&at.visible&&v.push(E,Ie,at,q,Te.z,Ge)}}else Fe.visible&&v.push(E,Ie,Fe,q,Te.z,null)}}const we=E.children;for(let Ie=0,Fe=we.length;Ie<Fe;Ie++)an(we[Ie],G,q,Y)}function Ga(E,G,q,Y){const j=E.opaque,we=E.transmissive,Ie=E.transparent;p.setupLightsView(q),pe===!0&&ye.setGlobalState(S.clippingPlanes,q),we.length>0&&Kf(j,we,G,q),Y&&V.viewport(w.copy(Y)),j.length>0&&Hr(j,G,q),we.length>0&&Hr(we,G,q),Ie.length>0&&Hr(Ie,G,q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Kf(E,G,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const we=W.isWebGL2;Ce===null&&(Ce=new Si(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Dr:ei,minFilter:Lr,samples:we?4:0})),S.getDrawingBufferSize(xe),we?Ce.setSize(xe.x,xe.y):Ce.setSize(ca(xe.x),ca(xe.y));const Ie=S.getRenderTarget();S.setRenderTarget(Ce),S.getClearColor(fe),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear();const Fe=S.toneMapping;S.toneMapping=Qn,Hr(E,q,Y),Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce);let Be=!1;for(let Xe=0,He=G.length;Xe<He;Xe++){const Ge=G[Xe],at=Ge.object,Bt=Ge.geometry,mt=Ge.material,Sn=Ge.group;if(mt.side===Dn&&at.layers.test(Y.layers)){const ot=mt.side;mt.side=Ft,mt.needsUpdate=!0,Va(at,q,Y,Bt,mt,Sn),mt.side=ot,mt.needsUpdate=!0,Be=!0}}Be===!0&&(Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce)),S.setRenderTarget(Ie),S.setClearColor(fe,F),S.toneMapping=Fe}function Hr(E,G,q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let j=0,we=E.length;j<we;j++){const Ie=E[j],Fe=Ie.object,Be=Ie.geometry,Xe=Y===null?Ie.material:Y,He=Ie.group;Fe.layers.test(q.layers)&&Va(Fe,G,q,Be,Xe,He)}}function Va(E,G,q,Y,j,we){E.onBeforeRender(S,G,q,Y,j,we),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(S,G,q,Y,E,we),j.transparent===!0&&j.side===Dn&&j.forceSinglePass===!1?(j.side=Ft,j.needsUpdate=!0,S.renderBufferDirect(q,G,Y,j,E,we),j.side=ni,j.needsUpdate=!0,S.renderBufferDirect(q,G,Y,j,E,we),j.side=Dn):S.renderBufferDirect(q,G,Y,j,E,we),E.onAfterRender(S,G,q,Y,j,we)}function Gr(E,G,q){G.isScene!==!0&&(G=De);const Y=se.get(E),j=p.state.lights,we=p.state.shadowsArray,Ie=j.state.version,Fe=I.getParameters(E,j.state,we,G,q),Be=I.getProgramCacheKey(Fe);let Xe=Y.programs;Y.environment=E.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(E.isMeshStandardMaterial?te:ie).get(E.envMap||Y.environment),Xe===void 0&&(E.addEventListener("dispose",he),Xe=new Map,Y.programs=Xe);let He=Xe.get(Be);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===Ie)return Wa(E,Fe),He}else Fe.uniforms=I.getUniforms(E),E.onBuild(q,Fe,S),E.onBeforeCompile(Fe,S),He=I.acquireProgram(Fe,Be),Xe.set(Be,He),Y.uniforms=Fe.uniforms;const Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),Wa(E,Fe),Y.needsLights=Jf(E),Y.lightsStateVersion=Ie,Y.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}function ka(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Es.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Wa(E,G){const q=se.get(E);q.outputColorSpace=G.outputColorSpace,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function $f(E,G,q,Y,j){G.isScene!==!0&&(G=De),Z.resetTextureUnits();const we=G.fog,Ie=Y.isMeshStandardMaterial?G.environment:null,Fe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zn,Be=(Y.isMeshStandardMaterial?te:ie).get(Y.envMap||Ie),Xe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,Bt=!!q.morphAttributes.color;let mt=Qn;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=S.toneMapping);const Sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=Sn!==void 0?Sn.length:0,$e=se.get(Y),js=p.state.lights;if(pe===!0&&(Me===!0||E!==T)){const zt=E===T&&Y.id===J;ye.setState(Y,E,zt)}let ut=!1;Y.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==js.state.version||$e.outputColorSpace!==Fe||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||$e.envMap!==Be||Y.fog===!0&&$e.fog!==we||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ye.numPlanes||$e.numIntersection!==ye.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==He||$e.morphTargets!==Ge||$e.morphNormals!==at||$e.morphColors!==Bt||$e.toneMapping!==mt||W.isWebGL2===!0&&$e.morphTargetsCount!==ot)&&(ut=!0):(ut=!0,$e.__version=Y.version);let ii=$e.currentProgram;ut===!0&&(ii=Gr(Y,G,j));let Xa=!1,ar=!1,Ks=!1;const wt=ii.getUniforms(),ri=$e.uniforms;if(V.useProgram(ii.program)&&(Xa=!0,ar=!0,Ks=!0),Y.id!==J&&(J=Y.id,ar=!0),Xa||T!==E){wt.setValue(g,"projectionMatrix",E.projectionMatrix),wt.setValue(g,"viewMatrix",E.matrixWorldInverse);const zt=wt.map.cameraPosition;zt!==void 0&&zt.setValue(g,Te.setFromMatrixPosition(E.matrixWorld)),W.logarithmicDepthBuffer&&wt.setValue(g,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(g,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,ar=!0,Ks=!0)}if(j.isSkinnedMesh){wt.setOptional(g,j,"bindMatrix"),wt.setOptional(g,j,"bindMatrixInverse");const zt=j.skeleton;zt&&(W.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),wt.setValue(g,"boneTexture",zt.boneTexture,Z),wt.setValue(g,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=q.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&W.isWebGL2===!0)&&C.update(j,q,ii),(ar||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,wt.setValue(g,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ri.envMap.value=Be,ri.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ar&&(wt.setValue(g,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&Zf(ri,Ks),we&&Y.fog===!0&&Q.refreshFogUniforms(ri,we),Q.refreshMaterialUniforms(ri,Y,X,ee,Ce),Es.upload(g,ka($e),ri,Z)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Es.upload(g,ka($e),ri,Z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(g,"center",j.center),wt.setValue(g,"modelViewMatrix",j.modelViewMatrix),wt.setValue(g,"normalMatrix",j.normalMatrix),wt.setValue(g,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const zt=Y.uniformsGroups;for(let Zs=0,Qf=zt.length;Zs<Qf;Zs++)if(W.isWebGL2){const qa=zt[Zs];Ue.update(qa,ii),Ue.bind(qa,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Zf(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Jf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,G,q){se.get(E.texture).__webglTexture=G,se.get(E.depthTexture).__webglTexture=q;const Y=se.get(E);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const q=se.get(E);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,q=0){R=E,A=G,D=q;let Y=!0,j=null,we=!1,Ie=!1;if(E){const Be=se.get(E);Be.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(g.FRAMEBUFFER,null),Y=!1):Be.__webglFramebuffer===void 0?Z.setupRenderTarget(E):Be.__hasExternalTextures&&Z.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const He=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[G])?j=He[G][q]:j=He[G],we=!0):W.isWebGL2&&E.samples>0&&Z.useMultisampledRTT(E)===!1?j=se.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?j=He[q]:j=He,w.copy(E.viewport),ae.copy(E.scissor),ce=E.scissorTest}else w.copy(k).multiplyScalar(X).floor(),ae.copy(L).multiplyScalar(X).floor(),ce=U;if(V.bindFramebuffer(g.FRAMEBUFFER,j)&&W.drawBuffers&&Y&&V.drawBuffers(E,j),V.viewport(w),V.scissor(ae),V.setScissorTest(ce),we){const Be=se.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,q)}else if(Ie){const Be=se.get(E.texture),Xe=G||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,Xe)}J=-1},this.readRenderTargetPixels=function(E,G,q,Y,j,we,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){V.bindFramebuffer(g.FRAMEBUFFER,Fe);try{const Be=E.texture,Xe=Be.format,He=Be.type;if(Xe!==nn&&Pe.convert(Xe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===Dr&&(O.has("EXT_color_buffer_half_float")||W.isWebGL2&&O.has("EXT_color_buffer_float"));if(He!==ei&&Pe.convert(He)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Zn&&(W.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-Y&&q>=0&&q<=E.height-j&&g.readPixels(G,q,Y,j,Pe.convert(Xe),Pe.convert(He),we)}finally{const Be=R!==null?se.get(R).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(E,G,q=0){const Y=Math.pow(2,-q),j=Math.floor(G.image.width*Y),we=Math.floor(G.image.height*Y);Z.setTexture2D(G,0),g.copyTexSubImage2D(g.TEXTURE_2D,q,0,0,E.x,E.y,j,we),V.unbindTexture()},this.copyTextureToTexture=function(E,G,q,Y=0){const j=G.image.width,we=G.image.height,Ie=Pe.convert(q.format),Fe=Pe.convert(q.type);Z.setTexture2D(q,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment),G.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Y,E.x,E.y,j,we,Ie,Fe,G.image.data):G.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Y,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,Y,E.x,E.y,Ie,Fe,G.image),Y===0&&q.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(E,G,q,Y,j=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Be=Pe.convert(Y.format),Xe=Pe.convert(Y.type);let He;if(Y.isData3DTexture)Z.setTexture3D(Y,0),He=g.TEXTURE_3D;else if(Y.isDataArrayTexture)Z.setTexture2DArray(Y,0),He=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,Y.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ge=g.getParameter(g.UNPACK_ROW_LENGTH),at=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Bt=g.getParameter(g.UNPACK_SKIP_PIXELS),mt=g.getParameter(g.UNPACK_SKIP_ROWS),Sn=g.getParameter(g.UNPACK_SKIP_IMAGES),ot=q.isCompressedTexture?q.mipmaps[0]:q.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,E.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,E.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?g.texSubImage3D(He,j,G.x,G.y,G.z,we,Ie,Fe,Be,Xe,ot.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(He,j,G.x,G.y,G.z,we,Ie,Fe,Be,ot.data)):g.texSubImage3D(He,j,G.x,G.y,G.z,we,Ie,Fe,Be,Xe,ot),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(g.UNPACK_SKIP_ROWS,mt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Sn),j===0&&Y.generateMipmaps&&g.generateMipmap(He),V.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){A=0,D=0,R=null,V.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Na?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ws?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Mi:bf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?Mt:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cx extends Xf{}Cx.prototype.isWebGL1Renderer=!0;class Px extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class za extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wc=new H,Xc=new H,qc=new lt,Go=new Xs,ps=new Br;class Lx extends vt{constructor(e=new Wt,t=new za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wc.fromBufferAttribute(t,r-1),Xc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wc.distanceTo(Xc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;qc.copy(r).invert(),Go.copy(e.ray).applyMatrix4(qc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const h=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let S=h,y=b-1;S<y;S+=m){const A=x.getX(S),D=x.getX(S+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,D),Go.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(d);J<e.near||J>e.far||t.push({distance:J,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let S=h,y=b-1;S<y;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Go.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Yc=new H,jc=new H;class qf extends Lx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Yc.fromBufferAttribute(t,r),jc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yc.distanceTo(jc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yf extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kc=new lt,fa=new Xs,ms=new Br,gs=new H;class Dx extends vt{constructor(e=new Wt,t=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),ms.radius+=s,e.ray.intersectsSphere(ms)===!1)return;Kc.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,v=m;x<v;x++){const p=c.getX(x);gs.fromBufferAttribute(f,p),$c(gs,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,v=m;x<v;x++)gs.fromBufferAttribute(f,x),$c(gs,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $c(n,e,t,i,r,s,a){const o=fa.distanceSqToPoint(n);if(o<t){const l=new H;fa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ha extends Wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,d=new H,m=[],x=[],v=[],p=[];for(let h=0;h<=i;h++){const b=[],S=h/i;let y=0;h===0&&a===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const D=A/t;f.x=-e*Math.cos(r+D*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+D*s)*Math.sin(a+S*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(D+y,1-S),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<t;b++){const S=u[h][b+1],y=u[h][b],A=u[h+1][b],D=u[h+1][b+1];(h!==0||a>0)&&m.push(S,y,D),(h!==i-1||l<Math.PI)&&m.push(y,A,D)}this.setIndex(m),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ux extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vo=new lt,Zc=new H,Jc=new H;class Ix{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nx extends Ix{constructor(){super(new Hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ox extends jf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fx extends jf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bx extends qf{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,x=-o;d<=t;d++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=d===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Wt;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(c,3));const f=new za({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zx extends qf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Wt;r.setAttribute("position",new xt(t,3)),r.setAttribute("color",new xt(i,3));const s=new za({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const eu={type:"change"},ko={type:"start"},tu={type:"end"},_s=new Xs,nu=new jn,Hx=Math.cos(70*bm.DEG2RAD);class Gx extends bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",_),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(eu),i.update(),s=r.NONE},this.update=function(){const C=new H,de=new Ei().setFromUnitVectors(e.up,new H(0,1,0)),le=de.clone().invert(),Pe=new H,Ae=new Ei,Ue=new H,Le=2*Math.PI;return function(je=null){const N=i.object.position;C.copy(N).sub(i.target),C.applyQuaternion(de),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&ae(T(je)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ve=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(ve)&&isFinite(he)&&(ve<-Math.PI?ve+=Le:ve>Math.PI&&(ve-=Le),he<-Math.PI?he+=Le:he>Math.PI&&(he-=Le),ve<=he?o.theta=Math.max(ve,Math.min(he,o.theta)):o.theta=o.theta>(ve+he)/2?Math.max(ve,o.theta):Math.min(he,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&D||i.object.isOrthographicCamera?o.radius=B(o.radius):o.radius=B(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(le),N.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let re=!1;if(i.zoomToCursor&&D){let me=null;if(i.object.isPerspectiveCamera){const Oe=C.length();me=B(Oe*c);const Ke=Oe-me;i.object.position.addScaledVector(y,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Oe=new H(A.x,A.y,0);Oe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0;const Ke=new H(A.x,A.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(Oe),i.object.updateMatrixWorld(),me=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(_s.origin.copy(i.object.position),_s.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(_s.direction))<Hx?e.lookAt(i.target):(nu.setFromNormalAndCoplanarPoint(i.object.up,i.target),_s.intersectPlane(nu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0);return c=1,D=!1,re||Pe.distanceToSquared(i.object.position)>a||8*(1-Ae.dot(i.object.quaternion))>a||Ue.distanceToSquared(i.target)>0?(i.dispatchEvent(eu),Pe.copy(i.object.position),Ae.copy(i.object.quaternion),Ue.copy(i.target),re=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",se),i.domElement.removeEventListener("pointercancel",ie),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",Z),i.domElement.removeEventListener("pointerup",ie),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Qc,l=new Qc;let c=1;const u=new H,f=new Ve,d=new Ve,m=new Ve,x=new Ve,v=new Ve,p=new Ve,h=new Ve,b=new Ve,S=new Ve,y=new H,A=new Ve;let D=!1;const R=[],J={};function T(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function ae(C){l.theta-=C}function ce(C){l.phi-=C}const fe=function(){const C=new H;return function(le,Pe){C.setFromMatrixColumn(Pe,0),C.multiplyScalar(-le),u.add(C)}}(),F=function(){const C=new H;return function(le,Pe){i.screenSpacePanning===!0?C.setFromMatrixColumn(Pe,1):(C.setFromMatrixColumn(Pe,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(le),u.add(C)}}(),K=function(){const C=new H;return function(le,Pe){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const Ue=i.object.position;C.copy(Ue).sub(i.target);let Le=C.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),fe(2*le*Le/Ae.clientHeight,i.object.matrix),F(2*Pe*Le/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(fe(le*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),F(Pe*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(C){if(!i.zoomToCursor)return;D=!0;const de=i.domElement.getBoundingClientRect(),le=C.clientX-de.left,Pe=C.clientY-de.top,Ae=de.width,Ue=de.height;A.x=le/Ae*2-1,A.y=-(Pe/Ue)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function k(C){f.set(C.clientX,C.clientY)}function L(C){z(C),h.set(C.clientX,C.clientY)}function U(C){x.set(C.clientX,C.clientY)}function _e(C){d.set(C.clientX,C.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const de=i.domElement;ae(2*Math.PI*m.x/de.clientHeight),ce(2*Math.PI*m.y/de.clientHeight),f.copy(d),i.update()}function pe(C){b.set(C.clientX,C.clientY),S.subVectors(b,h),S.y>0?ee(w()):S.y<0&&X(w()),h.copy(b),i.update()}function Me(C){v.set(C.clientX,C.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),K(p.x,p.y),x.copy(v),i.update()}function Ce(C){z(C),C.deltaY<0?X(w()):C.deltaY>0&&ee(w()),i.update()}function Ne(C){let de=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),de=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),de=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),de=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),de=!0;break}de&&(C.preventDefault(),i.update())}function xe(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),de=.5*(R[0].pageY+R[1].pageY);f.set(C,de)}}function Te(){if(R.length===1)x.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),de=.5*(R[0].pageY+R[1].pageY);x.set(C,de)}}function De(){const C=R[0].pageX-R[1].pageX,de=R[0].pageY-R[1].pageY,le=Math.sqrt(C*C+de*de);h.set(0,le)}function be(){i.enableZoom&&De(),i.enablePan&&Te()}function g(){i.enableZoom&&De(),i.enableRotate&&xe()}function P(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const le=ge(C),Pe=.5*(C.pageX+le.x),Ae=.5*(C.pageY+le.y);d.set(Pe,Ae)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const de=i.domElement;ae(2*Math.PI*m.x/de.clientHeight),ce(2*Math.PI*m.y/de.clientHeight),f.copy(d)}function O(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const de=ge(C),le=.5*(C.pageX+de.x),Pe=.5*(C.pageY+de.y);v.set(le,Pe)}p.subVectors(v,x).multiplyScalar(i.panSpeed),K(p.x,p.y),x.copy(v)}function W(C){const de=ge(C),le=C.pageX-de.x,Pe=C.pageY-de.y,Ae=Math.sqrt(le*le+Pe*Pe);b.set(0,Ae),S.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),ee(S.y),h.copy(b)}function V(C){i.enableZoom&&W(C),i.enablePan&&O(C)}function $(C){i.enableZoom&&W(C),i.enableRotate&&P(C)}function se(C){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Z),i.domElement.addEventListener("pointerup",ie)),oe(C),C.pointerType==="touch"?I(C):te(C))}function Z(C){i.enabled!==!1&&(C.pointerType==="touch"?Q(C):Ee(C))}function ie(C){ye(C),R.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Z),i.domElement.removeEventListener("pointerup",ie)),i.dispatchEvent(tu),s=r.NONE}function te(C){let de;switch(C.button){case 0:de=i.mouseButtons.LEFT;break;case 1:de=i.mouseButtons.MIDDLE;break;case 2:de=i.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Ri.DOLLY:if(i.enableZoom===!1)return;L(C),s=r.DOLLY;break;case Ri.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;U(C),s=r.PAN}else{if(i.enableRotate===!1)return;k(C),s=r.ROTATE}break;case Ri.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;k(C),s=r.ROTATE}else{if(i.enablePan===!1)return;U(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ko)}function Ee(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;_e(C);break;case r.DOLLY:if(i.enableZoom===!1)return;pe(C);break;case r.PAN:if(i.enablePan===!1)return;Me(C);break}}function M(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(ko),Ce(C),i.dispatchEvent(tu))}function _(C){i.enabled===!1||i.enablePan===!1||Ne(C)}function I(C){switch(ue(C),R.length){case 1:switch(i.touches.ONE){case Ci.ROTATE:if(i.enableRotate===!1)return;xe(),s=r.TOUCH_ROTATE;break;case Ci.PAN:if(i.enablePan===!1)return;Te(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(),s=r.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;g(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ko)}function Q(C){switch(ue(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;O(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$(C),i.update();break;default:s=r.NONE}}function ne(C){i.enabled!==!1&&C.preventDefault()}function oe(C){R.push(C)}function ye(C){delete J[C.pointerId];for(let de=0;de<R.length;de++)if(R[de].pointerId==C.pointerId){R.splice(de,1);return}}function ue(C){let de=J[C.pointerId];de===void 0&&(de=new Ve,J[C.pointerId]=de),de.set(C.pageX,C.pageY)}function ge(C){const de=C.pointerId===R[0].pointerId?R[1]:R[0];return J[de.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",se),i.domElement.addEventListener("pointercancel",ie),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}const Vx={class:"scanner-page"},kx={class:"panel controls"},Wx={class:"actions"},Xx=["disabled"],qx=["disabled"],Yx=["disabled"],jx=["disabled"],Kx=["disabled"],$x={class:"status-grid"},Zx={key:0,class:"marker-list"},Jx={class:"marker-label"},Qx={class:"marker-coords"},eM=["onClick"],tM={class:"panel viewer"},nM={class:"panel overlay-panel"},iM={class:"overlay-host"},rM={key:0,class:"overlay-placeholder"},sM=Fu({__name:"RoomScanner",setup(n){const e=ln(null),t=ln(null),i=ln(null),r=ln(null),s=ln(!1),a=ln(!1),o=ln("Camera is off"),l=ln(0),c=ln(0),u=ln([]);let f=1,d=null,m=0,x=0,v=[],p=[];const h=Ih(null),b=pf(()=>s.value);function S(){const z=r.value;if(!z)return;const B=new Px;B.background=new Ye("#0b0f16");const k=new jt(55,z.clientWidth/z.clientHeight,.1,200);k.position.set(0,1.4,5);const L=new Xf({antialias:!0});L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setSize(z.clientWidth,z.clientHeight),z.innerHTML="",z.appendChild(L.domElement);const U=new Gx(k,L.domElement);U.enableDamping=!0,U.maxDistance=30,U.minDistance=.8;const _e=new Fx(16777215,.45);B.add(_e);const pe=new Ox(10142975,1.15);pe.position.set(2,6,3),B.add(pe),B.add(new Bx(14,14,5206408,1979718)),B.add(new zx(2.2));const Me=new Wt,Ce=new Yf({size:.04,vertexColors:!0}),Ne=new Dx(Me,Ce);B.add(Ne),h.value={scene:B,camera:k,renderer:L,controls:U,pointGeometry:Me,pointMaterial:Ce,pointMesh:Ne};const xe=()=>{const Te=h.value;Te&&(Te.controls.update(),Te.renderer.render(Te.scene,Te.camera),x=requestAnimationFrame(xe))};xe()}function y(){const z=h.value,B=r.value;if(!z||!B)return;const k=Math.max(B.clientWidth,320),L=Math.max(B.clientHeight,240);z.camera.aspect=k/L,z.camera.updateProjectionMatrix(),z.renderer.setSize(k,L)}function A(z,B){const k=h.value;k&&(k.pointGeometry.setAttribute("position",new xt(z,3)),k.pointGeometry.setAttribute("color",new xt(B,3)),k.pointGeometry.computeBoundingSphere(),l.value=z.length/3)}function D(){const z=e.value,B=t.value;if(!z||!B||z.videoWidth===0||z.videoHeight===0)return;const k=160,L=120;B.width=k,B.height=L;const U=B.getContext("2d",{willReadFrequently:!0});if(!U)return;U.drawImage(z,0,0,k,L);const pe=U.getImageData(0,0,k,L).data,Me=[],Ce=[],Ne=[],xe=3;c.value+=1;const Te=Math.sin(c.value*.09)*.18;for(let De=0;De<L;De+=xe)for(let be=0;be<k;be+=xe){const g=(De*k+be)*4,P=pe[g],O=pe[g+1],W=pe[g+2],V=.2126*P+.7152*O+.0722*W,$=Math.min(be+1,k-1),se=Math.min(De+1,L-1),Z=(De*k+$)*4,ie=(se*k+be)*4,te=.2126*pe[Z]+.7152*pe[Z+1]+.0722*pe[Z+2],Ee=.2126*pe[ie]+.7152*pe[ie+1]+.0722*pe[ie+2],M=Math.min(Math.abs(te-V)+Math.abs(Ee-V),255),_=be/k-.5,I=.5-De/L,Q=(255-V)/255,ne=M/255,oe=Q*3.4+ne*1.2+Te;Me.push(_*6.4,I*3.6,oe);const ue=1-Q,ge=.35+ne*.45,C=Q;Ce.push(ue,ge,C),Ne.push({x:be,y:De,r:ue,g:ge,b:C,depth:Q})}p=Ne,A(Me,Ce),o.value=`Scanning in progress (${l.value} xyz points)`}function R(){const z=e.value,B=i.value;if(!z||!B||z.videoWidth===0)return;const k=B.clientWidth,L=B.clientHeight;(B.width!==k||B.height!==L)&&(B.width=k,B.height=L);const U=B.getContext("2d");if(!U)return;U.drawImage(z,0,0,k,L);const _e=160,pe=120,Me=k/_e,Ce=L/pe,Ne=Math.max(2,Math.min(Me,Ce)*1.6);for(const xe of p){const Te=xe.x*Me,De=xe.y*Ce,be=.35+xe.depth*.55,g=Math.round(xe.r*255),P=Math.round(xe.g*255),O=Math.round(xe.b*255);U.fillStyle=`rgba(${g},${P},${O},${be.toFixed(2)})`,U.beginPath(),U.arc(Te,De,Ne,0,Math.PI*2),U.fill()}for(const xe of u.value){const Te=xe.sx*Me,De=xe.sy*Ce,be=Math.max(8,Ne*4);U.strokeStyle="#ffffff",U.lineWidth=2.5,U.beginPath(),U.arc(Te,De,be,0,Math.PI*2),U.stroke(),U.fillStyle="#ff3055",U.beginPath(),U.arc(Te,De,be*.45,0,Math.PI*2),U.fill(),U.strokeStyle="rgba(255,255,255,0.6)",U.lineWidth=1,U.beginPath(),U.moveTo(Te-be*1.5,De),U.lineTo(Te-be*.7,De),U.moveTo(Te+be*.7,De),U.lineTo(Te+be*1.5,De),U.moveTo(Te,De-be*1.5),U.lineTo(Te,De-be*.7),U.moveTo(Te,De+be*.7),U.lineTo(Te,De+be*1.5),U.stroke(),U.font=`bold ${Math.max(12,be*.9)}px sans-serif`,U.fillStyle="#ffffff",U.fillText(xe.label,Te+be+4,De-be*.3),U.font=`${Math.max(10,be*.7)}px monospace`,U.fillStyle="#b0d0e8",U.fillText(`(${xe.x3d.toFixed(2)}, ${xe.y3d.toFixed(2)}, ${xe.z3d.toFixed(2)})`,Te+be+4,De+be*.6)}}function J(){a.value&&(D(),R(),m=requestAnimationFrame(J))}async function T(){if(!s.value)try{o.value="Requesting camera access...",d=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});const z=e.value;if(!z)throw new Error("Video element is unavailable");z.srcObject=d,await z.play(),s.value=!0,o.value="Camera is ready"}catch(z){const B=z instanceof Error?z.message:"Unknown camera error";o.value=`Camera error: ${B}`,s.value=!1}}function w(){m&&(cancelAnimationFrame(m),m=0),a.value=!1,d&&(d.getTracks().forEach(B=>B.stop()),d=null);const z=e.value;z&&(z.pause(),z.srcObject=null),s.value=!1,o.value="Camera is off"}function ae(){!s.value||a.value||(a.value=!0,o.value="Preparing room scan...",J())}function ce(){a.value=!1,m&&(cancelAnimationFrame(m),m=0),o.value="Scan paused"}function fe(z){const B=i.value;if(!B||p.length===0)return;const k=B.getBoundingClientRect(),L=z.clientX-k.left,U=z.clientY-k.top,_e=160,pe=120,Me=B.clientWidth/_e,Ce=B.clientHeight/pe;let Ne=1/0,xe=p[0];for(const Z of p){const ie=Z.x*Me-L,te=Z.y*Ce-U,Ee=ie*ie+te*te;Ee<Ne&&(Ne=Ee,xe=Z)}const Te=xe.x/_e-.5,De=.5-xe.y/pe,be=xe.depth,g=(xe.g-.35)/.45,P=Math.sin(c.value*.09)*.18,O=be*3.4+Math.max(0,g)*1.2+P,W=Te*6.4,V=De*3.6,$=f++,se={id:$,sx:xe.x,sy:xe.y,x3d:W,y3d:V,z3d:O,label:`M${$}`};u.value.push(se),F(se),o.value=`Marker ${se.label} placed at (${W.toFixed(2)}, ${V.toFixed(2)}, ${O.toFixed(2)})`}function F(z){const B=h.value;if(!B)return;const k=new Ha(.09,16,16),L=new Ux({color:16724053,emissive:16715824,emissiveIntensity:.5}),U=new In(k,L);U.position.set(z.x3d,z.y3d,z.z3d),U.name=`marker-${z.id}`,B.scene.add(U),v.push(U)}function K(z){u.value=u.value.filter(L=>L.id!==z);const B=h.value;if(!B)return;const k=v.findIndex(L=>L.name===`marker-${z}`);if(k!==-1){const L=v[k];B.scene.remove(L),L.geometry.dispose(),L.material.dispose(),v.splice(k,1)}}function ee(){const z=h.value;for(const B of v)z&&z.scene.remove(B),B.geometry.dispose(),B.material.dispose();v=[],u.value=[],f=1}function X(){A([],[]),c.value=0,ee(),o.value=s.value?"Point cloud reset":"Camera is off"}return Gu(async()=>{await Pu(),S(),y(),window.addEventListener("resize",y)}),Vu(()=>{window.removeEventListener("resize",y),w(),x&&(cancelAnimationFrame(x),x=0);const z=h.value;z&&(z.controls.dispose(),z.pointGeometry.dispose(),z.pointMaterial.dispose(),z.renderer.dispose(),h.value=null)}),(z,B)=>(di(),cr("main",Vx,[Ze("section",kx,[B[6]||(B[6]=Ze("h1",null,"RoomScanner",-1)),B[7]||(B[7]=Ze("p",null," Open camera, scan your room, and generate an estimated 3D xyz point cloud. ",-1)),Ze("div",Wx,[Ze("button",{class:"btn primary",type:"button",onClick:T,disabled:s.value}," Open Camera ",8,Xx),Ze("button",{class:"btn",type:"button",onClick:w,disabled:!s.value}," Close Camera ",8,qx),Ze("button",{class:"btn success",type:"button",onClick:ae,disabled:!b.value||a.value}," Start Scan ",8,Yx),Ze("button",{class:"btn",type:"button",onClick:ce,disabled:!a.value}," Stop Scan ",8,jx),Ze("button",{class:"btn",type:"button",onClick:X}," Reset Cloud "),Ze("button",{class:"btn warn",type:"button",onClick:ee,disabled:u.value.length===0}," Clear Markers ",8,Kx)]),Ze("div",$x,[B[0]||(B[0]=Ze("span",null,"Status",-1)),Ze("strong",null,qn(o.value),1),B[1]||(B[1]=Ze("span",null,"Points",-1)),Ze("strong",null,qn(l.value),1),B[2]||(B[2]=Ze("span",null,"Markers",-1)),Ze("strong",null,qn(u.value.length),1),B[3]||(B[3]=Ze("span",null,"Axes",-1)),B[4]||(B[4]=Ze("strong",null,"X (red), Y (green), Z (blue)",-1))]),u.value.length?(di(),cr("div",Zx,[(di(!0),cr(hn,null,ud(u.value,k=>(di(),cr("div",{key:k.id,class:"marker-item"},[B[5]||(B[5]=Ze("span",{class:"marker-dot"},null,-1)),Ze("span",Jx,qn(k.label),1),Ze("span",Qx," ("+qn(k.x3d.toFixed(2))+", "+qn(k.y3d.toFixed(2))+", "+qn(k.z3d.toFixed(2))+") ",1),Ze("button",{class:"marker-remove",type:"button",onClick:L=>K(k.id),title:"Remove marker"},"×",8,eM)]))),128))])):cl("",!0),Ze("video",{ref_key:"videoRef",ref:e,autoplay:"",muted:"",playsinline:""},null,512),Ze("canvas",{ref_key:"scannerCanvasRef",ref:t,class:"hidden-canvas"},null,512)]),Ze("section",tM,[Ze("div",{ref_key:"sceneContainerRef",ref:r,class:"scene-host"},null,512),B[8]||(B[8]=Ze("small",null," XYZ output is an estimated monocular depth map, useful as a lightweight room reconstruction preview. ",-1))]),Ze("section",nM,[B[9]||(B[9]=Ze("h2",null,"AR Overlay",-1)),Ze("div",iM,[Ze("canvas",{ref_key:"overlayCanvasRef",ref:i,class:"overlay-canvas",onClick:fe},null,512),a.value?cl("",!0):(di(),cr("div",rM," Start scanning to see points overlaid on camera "))]),B[10]||(B[10]=Ze("small",null," Click on the overlay to place a marker. Points are drawn on top of the camera feed. ",-1))])]))}}),oM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},aM=oM(sM,[["__scopeId","data-v-d9e25ea3"]]),lM=Fu({__name:"App",setup(n){return(e,t)=>(di(),cf(aM))}});Sp(lM).mount("#app");
