(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ca(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},ki=[],pn=()=>{},Qc=()=>!1,Ds=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ua=n=>n.startsWith("onUpdate:"),Mt=Object.assign,fa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kf=Object.prototype.hasOwnProperty,Je=(n,e)=>Kf.call(n,e),Be=Array.isArray,Wi=n=>Pr(n)==="[object Map]",eu=n=>Pr(n)==="[object Set]",Wa=n=>Pr(n)==="[object Date]",Ge=n=>typeof n=="function",ht=n=>typeof n=="string",gn=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",tu=n=>(et(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),nu=Object.prototype.toString,Pr=n=>nu.call(n),$f=n=>Pr(n).slice(8,-1),iu=n=>Pr(n)==="[object Object]",ha=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pr=ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zf=/-\w/g,nn=Us(n=>n.replace(Zf,e=>e.slice(1).toUpperCase())),Jf=/\B([A-Z])/g,Mi=Us(n=>n.replace(Jf,"-$1").toLowerCase()),ru=Us(n=>n.charAt(0).toUpperCase()+n.slice(1)),js=Us(n=>n?`on${ru(n)}`:""),hn=(n,e)=>!Object.is(n,e),Ks=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},su=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Qf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Xa;const Is=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?ih(i):da(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||et(n))return n}const eh=/;(?![^(]*\))/g,th=/:([^]+)/,nh=/\/\*[^]*?\*\//g;function ih(n){const e={};return n.replace(nh,"").split(eh).forEach(t=>{if(t){const i=t.split(th);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pa(n){let e="";if(ht(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=pa(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sh=ca(rh);function ou(n){return!!n||n===""}function oh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ma(n[i],e[i]);return t}function ma(n,e){if(n===e)return!0;let t=Wa(n),i=Wa(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=gn(n),i=gn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?oh(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ma(n[a],e[a]))return!1}}return String(n)===String(e)}const au=n=>!!(n&&n.__v_isRef===!0),zo=n=>ht(n)?n:n==null?"":Be(n)||et(n)&&(n.toString===nu||!Ge(n.toString))?au(n)?zo(n.value):JSON.stringify(n,lu,2):String(n),lu=(n,e)=>au(e)?lu(n,e.value):Wi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$s(i,s)+" =>"]=r,t),{})}:eu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$s(t))}:gn(e)?$s(e):et(e)&&!Be(e)&&!iu(e)?String(e):e,$s=(n,e="")=>{var t;return gn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class ah{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function lh(){return Ot}let nt;const Zs=new WeakSet;class cu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zs.has(this)&&(Zs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qa(this),hu(this);const e=nt,t=rn;nt=this,rn=!0;try{return this.fn()}finally{du(this),nt=e,rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)va(e);this.deps=this.depsTail=void 0,qa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Go(this)&&this.run()}get dirty(){return Go(this)}}let uu=0,mr,gr;function fu(n,e=!1){if(n.flags|=8,e){n.next=gr,gr=n;return}n.next=mr,mr=n}function ga(){uu++}function _a(){if(--uu>0)return;if(gr){let e=gr;for(gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;mr;){let e=mr;for(mr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function hu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function du(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),va(i),ch(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Go(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Er)||(n.globalVersion=Er,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Go(n))))return;n.flags|=2;const e=n.dep,t=nt,i=rn;nt=n,rn=!0;try{hu(n);const r=n.fn(n._value);(e.version===0||hn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{nt=t,rn=i,du(n),n.flags&=-3}}function va(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)va(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ch(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let rn=!0;const mu=[];function Dn(){mu.push(rn),rn=!1}function Un(){const n=mu.pop();rn=n===void 0?!0:n}function qa(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=nt;nt=void 0;try{e()}finally{nt=t}}}let Er=0;class uh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!nt||!rn||nt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==nt)t=this.activeLink=new uh(nt,this),nt.deps?(t.prevDep=nt.depsTail,nt.depsTail.nextDep=t,nt.depsTail=t):nt.deps=nt.depsTail=t,gu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=nt.depsTail,t.nextDep=void 0,nt.depsTail.nextDep=t,nt.depsTail=t,nt.deps===t&&(nt.deps=i)}return t}trigger(e){this.version++,Er++,this.notify(e)}notify(e){ga();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_a()}}}function gu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Vo=new WeakMap,di=Symbol(""),ko=Symbol(""),yr=Symbol("");function yt(n,e,t){if(rn&&nt){let i=Vo.get(n);i||Vo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new xa),r.map=i,r.key=t),r.track()}}function Cn(n,e,t,i,r,s){const a=Vo.get(n);if(!a){Er++;return}const o=l=>{l&&l.trigger()};if(ga(),e==="clear")a.forEach(o);else{const l=Be(n),c=l&&ha(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===yr||!gn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(yr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(di)),Wi(n)&&o(a.get(ko)));break;case"delete":l||(o(a.get(di)),Wi(n)&&o(a.get(ko)));break;case"set":Wi(n)&&o(a.get(di));break}}_a()}function Ei(n){const e=Ze(n);return e===n?e:(yt(e,"iterate",yr),sn(n)?e:e.map(In))}function Ma(n){return yt(n=Ze(n),"iterate",yr),n}function cn(n,e){return Qn(n)?Tr(Xi(n)?In(e):e):In(e)}const fh={__proto__:null,[Symbol.iterator](){return Js(this,Symbol.iterator,n=>cn(this,n))},concat(...n){return Ei(this).concat(...n.map(e=>Be(e)?Ei(e):e))},entries(){return Js(this,"entries",n=>(n[1]=cn(this,n[1]),n))},every(n,e){return xn(this,"every",n,e,void 0,arguments)},filter(n,e){return xn(this,"filter",n,e,t=>t.map(i=>cn(this,i)),arguments)},find(n,e){return xn(this,"find",n,e,t=>cn(this,t),arguments)},findIndex(n,e){return xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xn(this,"findLast",n,e,t=>cn(this,t),arguments)},findLastIndex(n,e){return xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Qs(this,"includes",n)},indexOf(...n){return Qs(this,"indexOf",n)},join(n){return Ei(this).join(n)},lastIndexOf(...n){return Qs(this,"lastIndexOf",n)},map(n,e){return xn(this,"map",n,e,void 0,arguments)},pop(){return sr(this,"pop")},push(...n){return sr(this,"push",n)},reduce(n,...e){return Ya(this,"reduce",n,e)},reduceRight(n,...e){return Ya(this,"reduceRight",n,e)},shift(){return sr(this,"shift")},some(n,e){return xn(this,"some",n,e,void 0,arguments)},splice(...n){return sr(this,"splice",n)},toReversed(){return Ei(this).toReversed()},toSorted(n){return Ei(this).toSorted(n)},toSpliced(...n){return Ei(this).toSpliced(...n)},unshift(...n){return sr(this,"unshift",n)},values(){return Js(this,"values",n=>cn(this,n))}};function Js(n,e,t){const i=Ma(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const hh=Array.prototype;function xn(n,e,t,i,r,s){const a=Ma(n),o=a!==n&&!sn(n),l=a[e];if(l!==hh[e]){const f=l.apply(n,s);return o?In(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,cn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ya(n,e,t,i){const r=Ma(n),s=r!==n&&!sn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=cn(n,c)),t.call(this,c,cn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?cn(n,l):l}function Qs(n,e,t){const i=Ze(n);yt(i,"iterate",yr);const r=i[e](...t);return(r===-1||r===!1)&&Ta(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function sr(n,e,t=[]){Dn(),ga();const i=Ze(n)[e].apply(n,t);return _a(),Un(),i}const dh=ca("__proto__,__v_isRef,__isVue"),_u=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gn));function ph(n){gn(n)||(n=String(n));const e=Ze(this);return yt(e,"has",n),e.hasOwnProperty(n)}class vu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Th:Eu:s?Su:Mu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Be(e);if(!r){let l;if(a&&(l=fh[t]))return l;if(t==="hasOwnProperty")return ph}const o=Reflect.get(e,t,Tt(e)?e:i);if((gn(t)?_u.has(t):dh(t))||(r||yt(e,"get",t),s))return o;if(Tt(o)){const l=a&&ha(t)?o:o.value;return r&&et(l)?Xo(l):l}return et(o)?r?Xo(o):Ea(o):o}}class xu extends vu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Be(e)&&ha(t);if(!this._isShallow){const c=Qn(s);if(!sn(i)&&!Qn(i)&&(s=Ze(s),i=Ze(i)),!a&&Tt(s)&&!Tt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Je(e,t),l=Reflect.set(e,t,i,Tt(e)?e:r);return e===Ze(r)&&(o?hn(i,s)&&Cn(e,"set",t,i):Cn(e,"add",t,i)),l}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Cn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!gn(t)||!_u.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",Be(e)?"length":di),Reflect.ownKeys(e)}}class mh extends vu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gh=new xu,_h=new mh,vh=new xu(!0);const Wo=n=>n,Hr=n=>Reflect.getPrototypeOf(n);function xh(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=Wi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Wo:e?Tr:In;return!e&&yt(s,"iterate",l?ko:di),Mt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mh(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(hn(r,o)&&yt(a,"get",r),yt(a,"get",o));const{has:l}=Hr(a),c=e?Wo:n?Tr:In;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&yt(Ze(r),"iterate",di),r.size},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(hn(r,o)&&yt(a,"has",r),yt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?Wo:n?Tr:In;return!n&&yt(l,"iterate",di),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Mt(t,n?{add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear")}:{add(r){const s=Ze(this),a=Hr(s),o=Ze(r),l=!e&&!sn(r)&&!Qn(r)?o:r;return a.has.call(s,l)||hn(r,l)&&a.has.call(s,r)||hn(o,l)&&a.has.call(s,o)||(s.add(l),Cn(s,"add",l,l)),this},set(r,s){!e&&!sn(s)&&!Qn(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=Hr(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?hn(s,u)&&Cn(a,"set",r,s):Cn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=Hr(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Cn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&Cn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=xh(r,n,e)}),t}function Sa(n,e){const t=Mh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Sh={get:Sa(!1,!1)},Eh={get:Sa(!1,!0)},yh={get:Sa(!0,!1)};const Mu=new WeakMap,Su=new WeakMap,Eu=new WeakMap,Th=new WeakMap;function bh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ah(n){return n.__v_skip||!Object.isExtensible(n)?0:bh($f(n))}function Ea(n){return Qn(n)?n:ya(n,!1,gh,Sh,Mu)}function wh(n){return ya(n,!1,vh,Eh,Su)}function Xo(n){return ya(n,!0,_h,yh,Eu)}function ya(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Ah(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Xi(n){return Qn(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Qn(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Ta(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Rh(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&su(n,"__v_skip",!0),n}const In=n=>et(n)?Ea(n):n,Tr=n=>et(n)?Xo(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function Fn(n){return yu(n,!1)}function Ch(n){return yu(n,!0)}function yu(n,e){return Tt(n)?n:new Ph(n,e)}class Ph{constructor(e,t){this.dep=new xa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||Qn(e);e=i?e:Ze(e),hn(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function Lh(n){return Tt(n)?n.value:n}const Dh={get:(n,e,t)=>e==="__v_raw"?n:Lh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Tu(n){return Xi(n)?n:new Proxy(n,Dh)}class Uh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new xa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return fu(this,!0),!0}get value(){const e=this.dep.track();return pu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ih(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new Uh(i,r,t)}const Gr={},Ms=new WeakMap;let ci;function Nh(n,e=!1,t=ci){if(t){let i=Ms.get(t);i||Ms.set(t,i=[]),i.push(n)}}function Oh(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:sn(T)||r===!1||r===0?Xn(T,1):Xn(T);let u,f,h,m,x=!1,v=!1;if(Tt(n)?(f=()=>n.value,x=sn(n)):Xi(n)?(f=()=>c(n),x=!0):Be(n)?(v=!0,x=n.some(T=>Xi(T)||sn(T)),f=()=>n.map(T=>{if(Tt(T))return T.value;if(Xi(T))return c(T);if(Ge(T))return l?l(T,2):T()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Dn();try{h()}finally{Un()}}const T=ci;ci=u;try{return l?l(n,3,[m]):n(m)}finally{ci=T}}:f=pn,e&&r){const T=f,w=r===!0?1/0:r;f=()=>Xn(T(),w)}const p=lh(),d=()=>{u.stop(),p&&p.active&&fa(p.effects,u)};if(s&&e){const T=e;e=(...w)=>{T(...w),d()}}let A=v?new Array(n.length).fill(Gr):Gr;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const w=u.run();if(r||x||(v?w.some((L,R)=>hn(L,A[R])):hn(w,A))){h&&h();const L=ci;ci=u;try{const R=[w,A===Gr?void 0:v&&A[0]===Gr?[]:A,m];A=w,l?l(e,3,R):e(...R)}finally{ci=L}}}else u.run()};return o&&o(E),u=new cu(f),u.scheduler=a?()=>a(E,!1):E,m=T=>Nh(T,!1,u),h=u.onStop=()=>{const T=Ms.get(u);if(T){if(l)l(T,4);else for(const w of T)w();Ms.delete(u)}},e?i?E(!0):A=u.run():a?a(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Xn(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Tt(n))Xn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Xn(n[i],e,t);else if(eu(n)||Wi(n))n.forEach(i=>{Xn(i,e,t)});else if(iu(n)){for(const i in n)Xn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(n,e,t,i){try{return i?n(...i):n()}catch(r){Ns(r,e,t)}}function _n(n,e,t,i){if(Ge(n)){const r=Lr(n,e,t,i);return r&&tu(r)&&r.catch(s=>{Ns(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(_n(n[s],e,t,i));return r}}function Ns(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Dn(),Lr(s,null,10,[n,l,c]),Un();return}}Fh(n,t,r,i,a)}function Fh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Pt=[];let ln=-1;const qi=[];let kn=null,Gi=0;const bu=Promise.resolve();let Ss=null;function Au(n){const e=Ss||bu;return n?e.then(this?n.bind(this):n):e}function Bh(n){let e=ln+1,t=Pt.length;for(;e<t;){const i=e+t>>>1,r=Pt[i],s=br(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ba(n){if(!(n.flags&1)){const e=br(n),t=Pt[Pt.length-1];!t||!(n.flags&2)&&e>=br(t)?Pt.push(n):Pt.splice(Bh(e),0,n),n.flags|=1,wu()}}function wu(){Ss||(Ss=bu.then(Cu))}function Hh(n){Be(n)?qi.push(...n):kn&&n.id===-1?kn.splice(Gi+1,0,n):n.flags&1||(qi.push(n),n.flags|=1),wu()}function ja(n,e,t=ln+1){for(;t<Pt.length;t++){const i=Pt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Pt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ru(n){if(qi.length){const e=[...new Set(qi)].sort((t,i)=>br(t)-br(i));if(qi.length=0,kn){kn.push(...e);return}for(kn=e,Gi=0;Gi<kn.length;Gi++){const t=kn[Gi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}kn=null,Gi=0}}const br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cu(n){try{for(ln=0;ln<Pt.length;ln++){const e=Pt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Lr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Pt.length;ln++){const e=Pt[ln];e&&(e.flags&=-2)}ln=-1,Pt.length=0,Ru(),Ss=null,(Pt.length||qi.length)&&Cu()}}let dn=null,Pu=null;function Es(n){const e=dn;return dn=n,Pu=n&&n.type.__scopeId||null,e}function zh(n,e=dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&sl(-1);const s=Es(e);let a;try{a=n(...r)}finally{Es(s),i._d&&sl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ii(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Dn(),_n(l,t,8,[n.el,o,n,e]),Un())}}function Gh(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function ms(n,e,t=!1){const i=Gd();if(i||Yi){let r=Yi?Yi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Vh=Symbol.for("v-scx"),kh=()=>ms(Vh);function eo(n,e,t){return Lu(n,e,t)}function Lu(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let c;if(wr){if(s==="sync"){const m=kh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=pn,m.resume=pn,m.pause=pn,m}}const u=Dt;o.call=(m,x,v)=>_n(m,u,x,v);let f=!1;s==="post"?o.scheduler=m=>{Nt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():ba(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Oh(n,e,o);return wr&&(c?c.push(h):l&&h()),h}function Wh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Du(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=Dr(this),o=Lu(r,s.bind(i),t);return a(),o}function Du(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xh=Symbol("_vte"),qh=n=>n.__isTeleport,Yh=Symbol("_leaveCb");function Aa(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Aa(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Uu(n,e){return Ge(n)?Mt({name:n.name},e,{setup:n}):n}function Iu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ka(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ys=new WeakMap;function _r(n,e,t,i,r=!1){if(Be(n)){n.forEach((v,p)=>_r(v,e&&(Be(e)?e[p]:e),t,i,r));return}if(vr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Pa(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=Ze(f),m=f===it?Qc:v=>Ka(u,v)?!1:Je(h,v),x=(v,p)=>!(p&&Ka(u,p));if(c!=null&&c!==l){if($a(e),ht(c))u[c]=null,m(c)&&(f[c]=null);else if(Tt(c)){const v=e;x(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ge(l))Lr(l,o,12,[a,u]);else{const v=ht(l),p=Tt(l);if(v||p){const d=()=>{if(n.f){const A=v?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)Be(A)&&fa(A,s);else if(Be(A))A.includes(s)||A.push(s);else if(v)u[l]=[s],m(l)&&(f[l]=u[l]);else{const E=[s];x(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else v?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{d(),ys.delete(n)};A.id=-1,ys.set(n,A),Nt(A,t)}else $a(n),d()}}}function $a(n){const e=ys.get(n);e&&(e.flags|=8,ys.delete(n))}Is().requestIdleCallback;Is().cancelIdleCallback;const vr=n=>!!n.type.__asyncLoader,Nu=n=>n.type.__isKeepAlive;function jh(n,e){Ou(n,"a",e)}function Kh(n,e){Ou(n,"da",e)}function Ou(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Os(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Nu(r.parent.vnode)&&$h(i,e,t,r),r=r.parent}}function $h(n,e,t,i){const r=Os(e,n,i,!0);Hu(()=>{fa(i[e],r)},t)}function Os(n,e,t=Dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Dn();const o=Dr(t),l=_n(e,t,n,a);return o(),Un(),l});return i?r.unshift(s):r.push(s),s}}const On=n=>(e,t=Dt)=>{(!wr||n==="sp")&&Os(n,(...i)=>e(...i),t)},Zh=On("bm"),Fu=On("m"),Jh=On("bu"),Qh=On("u"),Bu=On("bum"),Hu=On("um"),ed=On("sp"),td=On("rtg"),nd=On("rtc");function id(n,e=Dt){Os("ec",n,e)}const rd=Symbol.for("v-ndc"),qo=n=>n?lf(n)?Pa(n):qo(n.parent):null,xr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qo(n.parent),$root:n=>qo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gu(n),$forceUpdate:n=>n.f||(n.f=()=>{ba(n.update)}),$nextTick:n=>n.n||(n.n=Au.bind(n.proxy)),$watch:n=>Wh.bind(n)}),to=(n,e)=>n!==it&&!n.__isScriptSetup&&Je(n,e),sd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(to(i,e))return a[e]=1,i[e];if(r!==it&&Je(r,e))return a[e]=2,r[e];if(Je(s,e))return a[e]=3,s[e];if(t!==it&&Je(t,e))return a[e]=4,t[e];Yo&&(a[e]=0)}}const c=xr[e];let u,f;if(c)return e==="$attrs"&&yt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==it&&Je(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return to(r,e)?(r[e]=t,!0):i!==it&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==it&&o[0]!=="$"&&Je(n,o)||to(e,o)||Je(s,o)||Je(i,o)||Je(xr,o)||Je(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Za(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Yo=!0;function od(n){const e=Gu(n),t=n.proxy,i=n.ctx;Yo=!1,e.beforeCreate&&Ja(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:A,destroyed:E,unmounted:T,render:w,renderTracked:L,renderTriggered:R,errorCaptured:F,serverPrefetch:S,expose:b,inheritAttrs:Y,components:le,directives:ue,filters:I}=e;if(c&&ad(c,i,null),a)for(const V in a){const ne=a[V];Ge(ne)&&(i[V]=ne.bind(t))}if(r){const V=r.call(t,t);et(V)&&(n.data=Ea(V))}if(Yo=!0,s)for(const V in s){const ne=s[V],ie=Ge(ne)?ne.bind(t,t):Ge(ne.get)?ne.get.bind(t,t):pn,ae=!Ge(ne)&&Ge(ne.set)?ne.set.bind(t):pn,O=uf({get:ie,set:ae});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>O.value,set:k=>O.value=k})}if(o)for(const V in o)zu(o[V],i,t,V);if(l){const V=Ge(l)?l.call(t):l;Reflect.ownKeys(V).forEach(ne=>{Gh(ne,V[ne])})}u&&Ja(u,n,"c");function K(V,ne){Be(ne)?ne.forEach(ie=>V(ie.bind(t))):ne&&V(ne.bind(t))}if(K(Zh,f),K(Fu,h),K(Jh,m),K(Qh,x),K(jh,v),K(Kh,p),K(id,F),K(nd,L),K(td,R),K(Bu,A),K(Hu,T),K(ed,S),Be(b))if(b.length){const V=n.exposed||(n.exposed={});b.forEach(ne=>{Object.defineProperty(V,ne,{get:()=>t[ne],set:ie=>t[ne]=ie,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===pn&&(n.render=w),Y!=null&&(n.inheritAttrs=Y),le&&(n.components=le),ue&&(n.directives=ue),S&&Iu(n)}function ad(n,e,t=pn){Be(n)&&(n=jo(n));for(const i in n){const r=n[i];let s;et(r)?"default"in r?s=ms(r.from||i,r.default,!0):s=ms(r.from||i):s=ms(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ja(n,e,t){_n(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zu(n,e,t,i){let r=i.includes(".")?Du(t,i):()=>t[i];if(ht(n)){const s=e[n];Ge(s)&&eo(r,s)}else if(Ge(n))eo(r,n.bind(t));else if(et(n))if(Be(n))n.forEach(s=>zu(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&eo(r,s,n)}}function Gu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ts(l,c,a,!0)),Ts(l,e,a)),et(e)&&s.set(e,l),l}function Ts(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ts(n,s,t,!0),r&&r.forEach(a=>Ts(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=ld[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const ld={data:Qa,props:el,emits:el,methods:hr,computed:hr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:hr,directives:hr,watch:ud,provide:Qa,inject:cd};function Qa(n,e){return e?n?function(){return Mt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function cd(n,e){return hr(jo(n),jo(e))}function jo(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function hr(n,e){return n?Mt(Object.create(null),n,e):e}function el(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Mt(Object.create(null),Za(n),Za(e??{})):e}function ud(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function Vu(){return{app:null,config:{isNativeTag:Qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fd=0;function hd(n,e){return function(i,r=null){Ge(i)||(i=Mt({},i)),r!=null&&!et(r)&&(r=null);const s=Vu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:fd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yd,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ge(u.install)?(a.add(u),u.install(c,...f)):Ge(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Kn(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,Pa(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(_n(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yi;Yi=c;try{return u()}finally{Yi=f}}};return c}}let Yi=null;const dd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${nn(e)}Modifiers`]||n[`${Mi(e)}Modifiers`];function pd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&dd(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=t.map(Qf)));let o,l=i[o=js(e)]||i[o=js(nn(e))];!l&&s&&(l=i[o=js(Mi(e))]),l&&_n(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(c,n,6,r)}}const md=new WeakMap;function ku(n,e,t=!1){const i=t?md:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=ku(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>a[l]=null):Mt(a,s),et(n)&&i.set(n,a),a)}function Fs(n,e){return!n||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Mi(e))||Je(n,e))}function tl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:x,inheritAttrs:v}=n,p=Es(n);let d,A;try{if(t.shapeFlag&4){const T=r||i,w=T;d=un(c.call(w,T,u,f,m,h,x)),A=o}else{const T=e;d=un(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),A=e.props?o:gd(o)}}catch(T){Mr.length=0,Ns(T,n,1),d=Kn($i)}let E=d;if(A&&v!==!1){const T=Object.keys(A),{shapeFlag:w}=E;T.length&&w&7&&(s&&T.some(ua)&&(A=_d(A,s)),E=Zi(E,A,!1,!0))}return t.dirs&&(E=Zi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Aa(E,t.transition),d=E,Es(p),d}const gd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ds(t))&&((e||(e={}))[t]=n[t]);return e},_d=(n,e)=>{const t={};for(const i in n)(!ua(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?nl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Wu(a,i,h)&&!Fs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?nl(i,a,c):!0:!!a;return!1}function nl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Wu(e,n,s)&&!Fs(t,s))return!0}return!1}function Wu(n,e,t){const i=n[t],r=e[t];return t==="style"&&et(i)&&et(r)?!ma(i,r):i!==r}function xd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xu={},qu=()=>Object.create(Xu),Yu=n=>Object.getPrototypeOf(n)===Xu;function Md(n,e,t,i=!1){const r={},s=qu();n.propsDefaults=Object.create(null),ju(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:wh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Sd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Je(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=nn(h);r[x]=Ko(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{ju(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Je(e,f)&&((u=Mi(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ko(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&Cn(n.attrs,"set","")}function ju(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;r&&Je(r,u=nn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Fs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ko(r,l,f,c[f],n,!Je(c,f))}}return a}function Ko(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Dr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Mi(t))&&(i=!0))}return i}const Ed=new WeakMap;function Ku(n,e,t=!1){const i=t?Ed:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,m]=Ku(f,e,!0);Mt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,ki),ki;if(Be(s))for(let u=0;u<s.length;u++){const f=nn(s[u]);il(f)&&(a[f]=it)}else if(s)for(const u in s){const f=nn(u);if(il(f)){const h=s[u],m=a[f]=Be(h)||Ge(h)?{type:h}:Mt({},h),x=m.type;let v=!1,p=!0;if(Be(x))for(let d=0;d<x.length;++d){const A=x[d],E=Ge(A)&&A.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(p=!1)}else v=Ge(x)&&x.name==="Boolean";m[0]=v,m[1]=p,(v||Je(m,"default"))&&o.push(f)}}const c=[a,o];return et(n)&&i.set(n,c),c}function il(n){return n[0]!=="$"&&!pr(n)}const wa=n=>n==="_"||n==="_ctx"||n==="$stable",Ra=n=>Be(n)?n.map(un):[un(n)],yd=(n,e,t)=>{if(e._n)return e;const i=zh((...r)=>Ra(e(...r)),t);return i._c=!1,i},$u=(n,e,t)=>{const i=n._ctx;for(const r in n){if(wa(r))continue;const s=n[r];if(Ge(s))e[r]=yd(r,s,i);else if(s!=null){const a=Ra(s);e[r]=()=>a}}},Zu=(n,e)=>{const t=Ra(e);n.slots.default=()=>t},Ju=(n,e,t)=>{for(const i in e)(t||!wa(i))&&(n[i]=e[i])},Td=(n,e,t)=>{const i=n.slots=qu();if(n.vnode.shapeFlag&32){const r=e._;r?(Ju(i,e,t),t&&su(i,"_",r,!0)):$u(e,i)}else e&&Zu(n,e)},bd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Ju(r,e,t):(s=!e.$stable,$u(e,r)),a=e}else e&&(Zu(n,e),a={default:1});if(s)for(const o in r)!wa(o)&&a[o]==null&&delete r[o]},Nt=Pd;function Ad(n){return wd(n)}function wd(n,e){const t=Is();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=pn,insertStaticContent:x}=n,v=(g,P,N,G=null,z=null,$=null,re=void 0,ee=null,oe=!!P.dynamicChildren)=>{if(g===P)return;g&&!or(g,P)&&(G=Oe(g),k(g,z,$,!0),g=null),P.patchFlag===-2&&(oe=!1,P.dynamicChildren=null);const{type:te,ref:Ee,shapeFlag:M}=P;switch(te){case Bs:p(g,P,N,G);break;case $i:d(g,P,N,G);break;case io:g==null&&A(P,N,G,re);break;case wn:le(g,P,N,G,z,$,re,ee,oe);break;default:M&1?w(g,P,N,G,z,$,re,ee,oe):M&6?ue(g,P,N,G,z,$,re,ee,oe):(M&64||M&128)&&te.process(g,P,N,G,z,$,re,ee,oe,$e)}Ee!=null&&z?_r(Ee,g&&g.ref,$,P||g,!P):Ee==null&&g&&g.ref!=null&&_r(g.ref,null,$,g,!0)},p=(g,P,N,G)=>{if(g==null)i(P.el=o(P.children),N,G);else{const z=P.el=g.el;P.children!==g.children&&c(z,P.children)}},d=(g,P,N,G)=>{g==null?i(P.el=l(P.children||""),N,G):P.el=g.el},A=(g,P,N,G)=>{[g.el,g.anchor]=x(g.children,P,N,G,g.el,g.anchor)},E=({el:g,anchor:P},N,G)=>{let z;for(;g&&g!==P;)z=h(g),i(g,N,G),g=z;i(P,N,G)},T=({el:g,anchor:P})=>{let N;for(;g&&g!==P;)N=h(g),r(g),g=N;r(P)},w=(g,P,N,G,z,$,re,ee,oe)=>{if(P.type==="svg"?re="svg":P.type==="math"&&(re="mathml"),g==null)L(P,N,G,z,$,re,ee,oe);else{const te=g.el&&g.el._isVueCE?g.el:null;try{te&&te._beginPatch(),S(g,P,z,$,re,ee,oe)}finally{te&&te._endPatch()}}},L=(g,P,N,G,z,$,re,ee)=>{let oe,te;const{props:Ee,shapeFlag:M,transition:_,dirs:U}=g;if(oe=g.el=a(g.type,$,Ee&&Ee.is,Ee),M&8?u(oe,g.children):M&16&&F(g.children,oe,null,G,z,no(g,$),re,ee),U&&ii(g,null,G,"created"),R(oe,g,g.scopeId,re,G),Ee){for(const Q in Ee)Q!=="value"&&!pr(Q)&&s(oe,Q,null,Ee[Q],$,G);"value"in Ee&&s(oe,"value",null,Ee.value,$),(te=Ee.onVnodeBeforeMount)&&an(te,G,g)}U&&ii(g,null,G,"beforeMount");const J=Rd(z,_);J&&_.beforeEnter(oe),i(oe,P,N),((te=Ee&&Ee.onVnodeMounted)||J||U)&&Nt(()=>{te&&an(te,G,g),J&&_.enter(oe),U&&ii(g,null,G,"mounted")},z)},R=(g,P,N,G,z)=>{if(N&&m(g,N),G)for(let $=0;$<G.length;$++)m(g,G[$]);if(z){let $=z.subTree;if(P===$||nf($.type)&&($.ssContent===P||$.ssFallback===P)){const re=z.vnode;R(g,re,re.scopeId,re.slotScopeIds,z.parent)}}},F=(g,P,N,G,z,$,re,ee,oe=0)=>{for(let te=oe;te<g.length;te++){const Ee=g[te]=ee?Rn(g[te]):un(g[te]);v(null,Ee,P,N,G,z,$,re,ee)}},S=(g,P,N,G,z,$,re)=>{const ee=P.el=g.el;let{patchFlag:oe,dynamicChildren:te,dirs:Ee}=P;oe|=g.patchFlag&16;const M=g.props||it,_=P.props||it;let U;if(N&&ri(N,!1),(U=_.onVnodeBeforeUpdate)&&an(U,N,P,g),Ee&&ii(P,g,N,"beforeUpdate"),N&&ri(N,!0),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(ee,""),te?b(g.dynamicChildren,te,ee,N,G,no(P,z),$):re||ne(g,P,ee,null,N,G,no(P,z),$,!1),oe>0){if(oe&16)Y(ee,M,_,N,z);else if(oe&2&&M.class!==_.class&&s(ee,"class",null,_.class,z),oe&4&&s(ee,"style",M.style,_.style,z),oe&8){const J=P.dynamicProps;for(let Q=0;Q<J.length;Q++){const se=J[Q],xe=M[se],fe=_[se];(fe!==xe||se==="value")&&s(ee,se,xe,fe,z,N)}}oe&1&&g.children!==P.children&&u(ee,P.children)}else!re&&te==null&&Y(ee,M,_,N,z);((U=_.onVnodeUpdated)||Ee)&&Nt(()=>{U&&an(U,N,P,g),Ee&&ii(P,g,N,"updated")},G)},b=(g,P,N,G,z,$,re)=>{for(let ee=0;ee<P.length;ee++){const oe=g[ee],te=P[ee],Ee=oe.el&&(oe.type===wn||!or(oe,te)||oe.shapeFlag&198)?f(oe.el):N;v(oe,te,Ee,null,G,z,$,re,!0)}},Y=(g,P,N,G,z)=>{if(P!==N){if(P!==it)for(const $ in P)!pr($)&&!($ in N)&&s(g,$,P[$],null,z,G);for(const $ in N){if(pr($))continue;const re=N[$],ee=P[$];re!==ee&&$!=="value"&&s(g,$,ee,re,z,G)}"value"in N&&s(g,"value",P.value,N.value,z)}},le=(g,P,N,G,z,$,re,ee,oe)=>{const te=P.el=g?g.el:o(""),Ee=P.anchor=g?g.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:U}=P;U&&(ee=ee?ee.concat(U):U),g==null?(i(te,N,G),i(Ee,N,G),F(P.children||[],N,Ee,z,$,re,ee,oe)):M>0&&M&64&&_&&g.dynamicChildren&&g.dynamicChildren.length===_.length?(b(g.dynamicChildren,_,N,z,$,re,ee),(P.key!=null||z&&P===z.subTree)&&Qu(g,P,!0)):ne(g,P,N,Ee,z,$,re,ee,oe)},ue=(g,P,N,G,z,$,re,ee,oe)=>{P.slotScopeIds=ee,g==null?P.shapeFlag&512?z.ctx.activate(P,N,G,re,oe):I(P,N,G,z,$,re,oe):X(g,P,oe)},I=(g,P,N,G,z,$,re)=>{const ee=g.component=zd(g,G,z);if(Nu(g)&&(ee.ctx.renderer=$e),Vd(ee,!1,re),ee.asyncDep){if(z&&z.registerDep(ee,K,re),!g.el){const oe=ee.subTree=Kn($i);d(null,oe,P,N),g.placeholder=oe.el}}else K(ee,g,P,N,z,$,re)},X=(g,P,N)=>{const G=P.component=g.component;if(vd(g,P,N))if(G.asyncDep&&!G.asyncResolved){V(G,P,N);return}else G.next=P,G.update();else P.el=g.el,G.vnode=P},K=(g,P,N,G,z,$,re)=>{const ee=()=>{if(g.isMounted){let{next:M,bu:_,u:U,parent:J,vnode:Q}=g;{const C=ef(g);if(C){M&&(M.el=Q.el,V(g,M,re)),C.asyncDep.then(()=>{Nt(()=>{g.isUnmounted||te()},z)});return}}let se=M,xe;ri(g,!1),M?(M.el=Q.el,V(g,M,re)):M=Q,_&&Ks(_),(xe=M.props&&M.props.onVnodeBeforeUpdate)&&an(xe,J,M,Q),ri(g,!0);const fe=tl(g),me=g.subTree;g.subTree=fe,v(me,fe,f(me.el),Oe(me),g,z,$),M.el=fe.el,se===null&&xd(g,fe.el),U&&Nt(U,z),(xe=M.props&&M.props.onVnodeUpdated)&&Nt(()=>an(xe,J,M,Q),z)}else{let M;const{el:_,props:U}=P,{bm:J,m:Q,parent:se,root:xe,type:fe}=g,me=vr(P);ri(g,!1),J&&Ks(J),!me&&(M=U&&U.onVnodeBeforeMount)&&an(M,se,P),ri(g,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(fe,g.parent?g.parent.type:void 0);const C=g.subTree=tl(g);v(null,C,N,G,g,z,$),P.el=C.el}if(Q&&Nt(Q,z),!me&&(M=U&&U.onVnodeMounted)){const C=P;Nt(()=>an(M,se,C),z)}(P.shapeFlag&256||se&&vr(se.vnode)&&se.vnode.shapeFlag&256)&&g.a&&Nt(g.a,z),g.isMounted=!0,P=N=G=null}};g.scope.on();const oe=g.effect=new cu(ee);g.scope.off();const te=g.update=oe.run.bind(oe),Ee=g.job=oe.runIfDirty.bind(oe);Ee.i=g,Ee.id=g.uid,oe.scheduler=()=>ba(Ee),ri(g,!0),te()},V=(g,P,N)=>{P.component=g;const G=g.vnode.props;g.vnode=P,g.next=null,Sd(g,P.props,G,N),bd(g,P.children,N),Dn(),ja(g),Un()},ne=(g,P,N,G,z,$,re,ee,oe=!1)=>{const te=g&&g.children,Ee=g?g.shapeFlag:0,M=P.children,{patchFlag:_,shapeFlag:U}=P;if(_>0){if(_&128){ae(te,M,N,G,z,$,re,ee,oe);return}else if(_&256){ie(te,M,N,G,z,$,re,ee,oe);return}}U&8?(Ee&16&&Re(te,z,$),M!==te&&u(N,M)):Ee&16?U&16?ae(te,M,N,G,z,$,re,ee,oe):Re(te,z,$,!0):(Ee&8&&u(N,""),U&16&&F(M,N,G,z,$,re,ee,oe))},ie=(g,P,N,G,z,$,re,ee,oe)=>{g=g||ki,P=P||ki;const te=g.length,Ee=P.length,M=Math.min(te,Ee);let _;for(_=0;_<M;_++){const U=P[_]=oe?Rn(P[_]):un(P[_]);v(g[_],U,N,null,z,$,re,ee,oe)}te>Ee?Re(g,z,$,!0,!1,M):F(P,N,G,z,$,re,ee,oe,M)},ae=(g,P,N,G,z,$,re,ee,oe)=>{let te=0;const Ee=P.length;let M=g.length-1,_=Ee-1;for(;te<=M&&te<=_;){const U=g[te],J=P[te]=oe?Rn(P[te]):un(P[te]);if(or(U,J))v(U,J,N,null,z,$,re,ee,oe);else break;te++}for(;te<=M&&te<=_;){const U=g[M],J=P[_]=oe?Rn(P[_]):un(P[_]);if(or(U,J))v(U,J,N,null,z,$,re,ee,oe);else break;M--,_--}if(te>M){if(te<=_){const U=_+1,J=U<Ee?P[U].el:G;for(;te<=_;)v(null,P[te]=oe?Rn(P[te]):un(P[te]),N,J,z,$,re,ee,oe),te++}}else if(te>_)for(;te<=M;)k(g[te],z,$,!0),te++;else{const U=te,J=te,Q=new Map;for(te=J;te<=_;te++){const Ae=P[te]=oe?Rn(P[te]):un(P[te]);Ae.key!=null&&Q.set(Ae.key,te)}let se,xe=0;const fe=_-J+1;let me=!1,C=0;const de=new Array(fe);for(te=0;te<fe;te++)de[te]=0;for(te=U;te<=M;te++){const Ae=g[te];if(xe>=fe){k(Ae,z,$,!0);continue}let ye;if(Ae.key!=null)ye=Q.get(Ae.key);else for(se=J;se<=_;se++)if(de[se-J]===0&&or(Ae,P[se])){ye=se;break}ye===void 0?k(Ae,z,$,!0):(de[ye-J]=te+1,ye>=C?C=ye:me=!0,v(Ae,P[ye],N,null,z,$,re,ee,oe),xe++)}const ce=me?Cd(de):ki;for(se=ce.length-1,te=fe-1;te>=0;te--){const Ae=J+te,ye=P[Ae],Ce=P[Ae+1],we=Ae+1<Ee?Ce.el||tf(Ce):G;de[te]===0?v(null,ye,N,we,z,$,re,ee,oe):me&&(se<0||te!==ce[se]?O(ye,N,we,2):se--)}}},O=(g,P,N,G,z=null)=>{const{el:$,type:re,transition:ee,children:oe,shapeFlag:te}=g;if(te&6){O(g.component.subTree,P,N,G);return}if(te&128){g.suspense.move(P,N,G);return}if(te&64){re.move(g,P,N,$e);return}if(re===wn){i($,P,N);for(let M=0;M<oe.length;M++)O(oe[M],P,N,G);i(g.anchor,P,N);return}if(re===io){E(g,P,N);return}if(G!==2&&te&1&&ee)if(G===0)ee.beforeEnter($),i($,P,N),Nt(()=>ee.enter($),z);else{const{leave:M,delayLeave:_,afterLeave:U}=ee,J=()=>{g.ctx.isUnmounted?r($):i($,P,N)},Q=()=>{$._isLeaving&&$[Yh](!0),M($,()=>{J(),U&&U()})};_?_($,J,Q):Q()}else i($,P,N)},k=(g,P,N,G=!1,z=!1)=>{const{type:$,props:re,ref:ee,children:oe,dynamicChildren:te,shapeFlag:Ee,patchFlag:M,dirs:_,cacheIndex:U}=g;if(M===-2&&(z=!1),ee!=null&&(Dn(),_r(ee,null,N,g,!0),Un()),U!=null&&(P.renderCache[U]=void 0),Ee&256){P.ctx.deactivate(g);return}const J=Ee&1&&_,Q=!vr(g);let se;if(Q&&(se=re&&re.onVnodeBeforeUnmount)&&an(se,P,g),Ee&6)Se(g.component,N,G);else{if(Ee&128){g.suspense.unmount(N,G);return}J&&ii(g,null,P,"beforeUnmount"),Ee&64?g.type.remove(g,P,N,$e,G):te&&!te.hasOnce&&($!==wn||M>0&&M&64)?Re(te,P,N,!1,!0):($===wn&&M&384||!z&&Ee&16)&&Re(oe,P,N),G&&ve(g)}(Q&&(se=re&&re.onVnodeUnmounted)||J)&&Nt(()=>{se&&an(se,P,g),J&&ii(g,null,P,"unmounted")},N)},ve=g=>{const{type:P,el:N,anchor:G,transition:z}=g;if(P===wn){Me(N,G);return}if(P===io){T(g);return}const $=()=>{r(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(g.shapeFlag&1&&z&&!z.persisted){const{leave:re,delayLeave:ee}=z,oe=()=>re(N,$);ee?ee(g.el,$,oe):oe()}else $()},Me=(g,P)=>{let N;for(;g!==P;)N=h(g),r(g),g=N;r(P)},Se=(g,P,N)=>{const{bum:G,scope:z,job:$,subTree:re,um:ee,m:oe,a:te}=g;rl(oe),rl(te),G&&Ks(G),z.stop(),$&&($.flags|=8,k(re,g,P,N)),ee&&Nt(ee,P),Nt(()=>{g.isUnmounted=!0},P)},Re=(g,P,N,G=!1,z=!1,$=0)=>{for(let re=$;re<g.length;re++)k(g[re],P,N,G,z)},Oe=g=>{if(g.shapeFlag&6)return Oe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const P=h(g.anchor||g.el),N=P&&P[Xh];return N?h(N):P};let Le=!1;const Ue=(g,P,N)=>{let G;g==null?P._vnode&&(k(P._vnode,null,null,!0),G=P._vnode.component):v(P._vnode||null,g,P,null,null,null,N),P._vnode=g,Le||(Le=!0,ja(G),Ru(),Le=!1)},$e={p:v,um:k,m:O,r:ve,mt:I,mc:F,pc:ne,pbc:b,n:Oe,o:n};return{render:Ue,hydrate:void 0,createApp:hd(Ue)}}function no({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Rd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qu(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Rn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Qu(a,o)),o.type===Bs&&(o.patchFlag===-1&&(o=r[s]=Rn(o)),o.el=a.el),o.type===$i&&!o.el&&(o.el=a.el)}}function Cd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function ef(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ef(e)}function rl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tf(e.subTree):null}const nf=n=>n.__isSuspense;function Pd(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Hh(n)}const wn=Symbol.for("v-fgt"),Bs=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),Mr=[];let Vt=null;function rf(n=!1){Mr.push(Vt=n?null:[])}function Ld(){Mr.pop(),Vt=Mr[Mr.length-1]||null}let Ar=1;function sl(n,e=!1){Ar+=n,n<0&&Vt&&e&&(Vt.hasOnce=!0)}function sf(n){return n.dynamicChildren=Ar>0?Vt||ki:null,Ld(),Ar>0&&Vt&&Vt.push(n),n}function Dd(n,e,t,i,r,s){return sf(st(n,e,t,i,r,s,!0))}function Ud(n,e,t,i,r){return sf(Kn(n,e,t,i,r,!0))}function of(n){return n?n.__v_isVNode===!0:!1}function or(n,e){return n.type===e.type&&n.key===e.key}const af=({key:n})=>n??null,gs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Tt(n)||Ge(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function st(n,e=null,t=null,i=0,r=null,s=n===wn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&af(e),ref:e&&gs(e),scopeId:Pu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return o?(Ca(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Ar>0&&!a&&Vt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vt.push(l),l}const Kn=Id;function Id(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===rd)&&(n=$i),of(n)){const o=Zi(n,e,!0);return t&&Ca(o,t),Ar>0&&!s&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(n)]=o:Vt.push(o)),o.patchFlag=-2,o}if(qd(n)&&(n=n.__vccOpts),e){e=Nd(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=pa(o)),et(l)&&(Ta(l)&&!Be(l)&&(l=Mt({},l)),e.style=da(l))}const a=ht(n)?1:nf(n)?128:qh(n)?64:et(n)?4:Ge(n)?2:0;return st(n,e,t,i,r,a,s,!0)}function Nd(n){return n?Ta(n)||Yu(n)?Mt({},n):n:null}function Zi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Fd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&af(c),ref:e&&e.ref?t&&s?Be(s)?s.concat(gs(e)):[s,gs(e)]:gs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zi(n.ssContent),ssFallback:n.ssFallback&&Zi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Aa(u,l.clone(u)),u}function Od(n=" ",e=0){return Kn(Bs,null,n,e)}function un(n){return n==null||typeof n=="boolean"?Kn($i):Be(n)?Kn(wn,null,n.slice()):of(n)?Rn(n):Kn(Bs,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zi(n)}function Ca(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ca(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Yu(e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[Od(e)]):t=8);n.children=e,n.shapeFlag|=t}function Fd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pa([e.class,i.class]));else if(r==="style")e.style=da([e.style,i.style]);else if(Ds(r)){const s=e[r],a=i[r];a&&s!==a&&!(Be(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function an(n,e,t,i=null){_n(n,e,7,[t,i])}const Bd=Vu();let Hd=0;function zd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bd,s={uid:Hd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ku(i,r),emitsOptions:ku(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=pd.bind(null,s),n.ce&&n.ce(s),s}let Dt=null;const Gd=()=>Dt||dn;let bs,$o;{const n=Is(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};bs=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),$o=e("__VUE_SSR_SETTERS__",t=>wr=t)}const Dr=n=>{const e=Dt;return bs(n),n.scope.on(),()=>{n.scope.off(),bs(e)}},ol=()=>{Dt&&Dt.scope.off(),bs(null)};function lf(n){return n.vnode.shapeFlag&4}let wr=!1;function Vd(n,e=!1,t=!1){e&&$o(e);const{props:i,children:r}=n.vnode,s=lf(n);Md(n,i,s,e),Td(n,r,t||e);const a=s?kd(n,e):void 0;return e&&$o(!1),a}function kd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sd);const{setup:i}=t;if(i){Dn();const r=n.setupContext=i.length>1?Xd(n):null,s=Dr(n),a=Lr(i,n,0,[n.props,r]),o=tu(a);if(Un(),s(),(o||n.sp)&&!vr(n)&&Iu(n),o){if(a.then(ol,ol),e)return a.then(l=>{al(n,l)}).catch(l=>{Ns(l,n,0)});n.asyncDep=a}else al(n,a)}else cf(n)}function al(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Tu(e)),cf(n)}function cf(n,e,t){const i=n.type;n.render||(n.render=i.render||pn);{const r=Dr(n);Dn();try{od(n)}finally{Un(),r()}}}const Wd={get(n,e){return yt(n,"get",""),n[e]}};function Xd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wd),slots:n.slots,emit:n.emit,expose:e}}function Pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Tu(Rh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xr)return xr[t](n)},has(e,t){return t in e||t in xr}})):n.proxy}function qd(n){return Ge(n)&&"__vccOpts"in n}const uf=(n,e)=>Ih(n,e,wr),Yd="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zo;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{Zo=ll.createPolicy("vue",{createHTML:n=>n})}catch{}const ff=Zo?n=>Zo.createHTML(n):n=>n,jd="http://www.w3.org/2000/svg",Kd="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,cl=An&&An.createElement("template"),$d={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?An.createElementNS(jd,n):e==="mathml"?An.createElementNS(Kd,n):t?An.createElement(n,{is:t}):An.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>An.createTextNode(n),createComment:n=>An.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>An.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cl.innerHTML=ff(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=cl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zd=Symbol("_vtc");function Jd(n,e,t){const i=n[Zd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ul=Symbol("_vod"),Qd=Symbol("_vsh"),ep=Symbol(""),tp=/(?:^|;)\s*display\s*:/;function np(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&_s(i,o,"")}else for(const a in e)t[a]==null&&_s(i,a,"");for(const a in t)a==="display"&&(s=!0),_s(i,a,t[a])}else if(r){if(e!==t){const a=i[ep];a&&(t+=";"+a),i.cssText=t,s=tp.test(t)}}else e&&n.removeAttribute("style");ul in n&&(n[ul]=s?i.display:"",n[Qd]&&(i.display="none"))}const fl=/\s*!important$/;function _s(n,e,t){if(Be(t))t.forEach(i=>_s(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ip(n,e);fl.test(t)?n.setProperty(Mi(i),t.replace(fl,""),"important"):n[i]=t}}const hl=["Webkit","Moz","ms"],ro={};function ip(n,e){const t=ro[e];if(t)return t;let i=nn(e);if(i!=="filter"&&i in n)return ro[e]=i;i=ru(i);for(let r=0;r<hl.length;r++){const s=hl[r]+i;if(s in n)return ro[e]=s}return e}const dl="http://www.w3.org/1999/xlink";function pl(n,e,t,i,r,s=sh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(dl,e.slice(6,e.length)):n.setAttributeNS(dl,e,t):t==null||s&&!ou(t)?n.removeAttribute(e):n.setAttribute(e,s?"":gn(t)?String(t):t)}function ml(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ff(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ou(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function rp(n,e,t,i){n.addEventListener(e,t,i)}function sp(n,e,t,i){n.removeEventListener(e,t,i)}const gl=Symbol("_vei");function op(n,e,t,i,r=null){const s=n[gl]||(n[gl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ap(e);if(i){const c=s[e]=up(i,r);rp(n,o,c,l)}else a&&(sp(n,o,a,l),s[e]=void 0)}}const _l=/(?:Once|Passive|Capture)$/;function ap(n){let e;if(_l.test(n)){e={};let i;for(;i=n.match(_l);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Mi(n.slice(2)),e]}let so=0;const lp=Promise.resolve(),cp=()=>so||(lp.then(()=>so=0),so=Date.now());function up(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(fp(i,t.value),e,5,[i])};return t.value=n,t.attached=cp(),t}function fp(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const vl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Jd(n,i,a):e==="style"?np(n,t,i):Ds(e)?ua(e)||op(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dp(n,e,i,a))?(ml(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pl(n,e,i,a,s,e!=="value")):n._isVueCE&&(pp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?ml(n,nn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pl(n,e,i,a))};function dp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&vl(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vl(e)&&ht(t)?!1:e in n}function pp(n,e){const t=n._def.props;if(!t)return!1;const i=nn(e);return Array.isArray(t)?t.some(r=>nn(r)===i):Object.keys(t).some(r=>nn(r)===i)}const mp=Mt({patchProp:hp},$d);let xl;function gp(){return xl||(xl=Ad(mp))}const _p=(...n)=>{const e=gp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=xp(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,vp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function vp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function xp(n){return ht(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="158",yi={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mp=0,Ml=1,Sp=2,hf=1,Ep=2,bn=3,ei=0,Ft=1,Pn=2,$n=0,ji=1,Sl=2,El=3,yl=4,yp=5,fi=100,Tp=101,bp=102,Tl=103,bl=104,Ap=200,wp=201,Rp=202,Cp=203,Jo=204,Qo=205,Pp=206,Lp=207,Dp=208,Up=209,Ip=210,Np=211,Op=212,Fp=213,Bp=214,Hp=0,zp=1,Gp=2,As=3,Vp=4,kp=5,Wp=6,Xp=7,df=0,qp=1,Yp=2,Zn=0,jp=1,Kp=2,$p=3,Zp=4,Jp=5,pf=300,Ji=301,Qi=302,ea=303,ta=304,Hs=306,na=1e3,en=1001,ia=1002,Ct=1003,Al=1004,oo=1005,qt=1006,Qp=1007,Rr=1008,Jn=1009,em=1010,tm=1011,Da=1012,mf=1013,qn=1014,Yn=1015,Cr=1016,gf=1017,_f=1018,pi=1020,nm=1021,tn=1023,im=1024,rm=1025,mi=1026,er=1027,sm=1028,vf=1029,om=1030,xf=1031,Mf=1033,ao=33776,lo=33777,co=33778,uo=33779,wl=35840,Rl=35841,Cl=35842,Pl=35843,am=36196,Ll=37492,Dl=37496,Ul=37808,Il=37809,Nl=37810,Ol=37811,Fl=37812,Bl=37813,Hl=37814,zl=37815,Gl=37816,Vl=37817,kl=37818,Wl=37819,Xl=37820,ql=37821,fo=36492,Yl=36494,jl=36495,lm=36283,Kl=36284,$l=36285,Zl=36286,Sf=3e3,gi=3001,cm=3200,um=3201,fm=0,hm=1,jt="",xt="srgb",Nn="srgb-linear",Ua="display-p3",zs="display-p3-linear",ws="linear",rt="srgb",Rs="rec709",Cs="p3",bi=7680,Jl=519,dm=512,pm=513,mm=514,gm=515,_m=516,vm=517,xm=518,Mm=519,Ql=35044,ec="300 es",ra=1035,Ln=2e3,Ps=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,sa=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Sm(n,e){return(n%e+e)%e}function ho(n,e,t){return(1-t)*n+t*e}function tc(n){return(n&n-1)===0&&n!==0}function oa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Em={DEG2RAD:vs};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],v=r[0],p=r[3],d=r[6],A=r[1],E=r[4],T=r[7],w=r[2],L=r[5],R=r[8];return s[0]=a*v+o*A+l*w,s[3]=a*p+o*E+l*L,s[6]=a*d+o*T+l*R,s[1]=c*v+u*A+f*w,s[4]=c*p+u*E+f*L,s[7]=c*d+u*T+f*R,s[2]=h*v+m*A+x*w,s[5]=h*p+m*E+x*L,s[8]=h*d+m*T+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Xe;function Ef(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ym(){const n=Ls("canvas");return n.style.display="block",n}const nc={};function Sr(n){n in nc||(nc[n]=!0,console.warn(n))}const ic=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rc=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Nn]:{transfer:ws,primaries:Rs,toReference:n=>n,fromReference:n=>n},[xt]:{transfer:rt,primaries:Rs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zs]:{transfer:ws,primaries:Cs,toReference:n=>n.applyMatrix3(rc),fromReference:n=>n.applyMatrix3(ic)},[Ua]:{transfer:rt,primaries:Cs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(rc),fromReference:n=>n.applyMatrix3(ic).convertLinearToSRGB()}},Tm=new Set([Nn,zs]),Qe={enabled:!0,_workingColorSpace:Nn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Tm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Vr[e].toReference,r=Vr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vr[n].primaries},getTransfer:function(n){return n===jt?ws:Vr[n].transfer}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ls("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bm=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(go(r[a].image)):s.push(go(r[a]))}else s=go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Am=0;class kt extends Si{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=en,r=en,s=qt,a=Rr,o=tn,l=Jn,c=kt.DEFAULT_ANISOTROPY,u=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ur(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===gi?xt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?gi:Sf}set encoding(e){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gi?xt:jt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=pf;kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,w=(d+1)/2,L=(u+h)/4,R=(f+v)/4,F=(x+p)/4;return E>T&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=R/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=L/r,s=F/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=F/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-x)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gi?xt:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends wm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bf extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rm extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==x){let p=1-o;const d=l*h+c*m+u*x+f*v,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const w=Math.sqrt(E),L=Math.atan2(w,d*A);p=Math.sin(p*L)/w,o=Math.sin(o*L)/w}const T=o*A;if(l=l*p+h*T,c=c*p+m*T,u=u*p+x*T,f=f*p+v*T,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new B,sc=new vi;class Ir{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Wr.subVectors(this.max,lr),wi.subVectors(e.a,lr),Ri.subVectors(e.b,lr),Ci.subVectors(e.c,lr),Bn.subVectors(Ri,wi),Hn.subVectors(Ci,Ri),si.subVectors(wi,Ci);let t=[0,-Bn.z,Bn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,Bn.z,0,-Bn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-Bn.y,Bn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!vo(t,wi,Ri,Ci,Wr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,wi,Ri,Ci,Wr))?!1:(Xr.crossVectors(Bn,Hn),t=[Xr.x,Xr.y,Xr.z],vo(t,wi,Ri,Ci,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new B,new B,new B,new B,new B,new B,new B,new B],$t=new B,kr=new Ir,wi=new B,Ri=new B,Ci=new B,Bn=new B,Hn=new B,si=new B,lr=new B,Wr=new B,Xr=new B,oi=new B;function vo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Cm=new Ir,cr=new B,xo=new B;class Nr{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(xo)),this.expandByPoint(cr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new B,Mo=new B,qr=new B,zn=new B,So=new B,Yr=new B,Eo=new B;class Gs{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Mo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=zn.dot(this.direction),l=-zn.dot(qr),c=zn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const v=1/u;f*=v,h*=v,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mo).addScaledVector(qr,h),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){So.subVectors(t,e),Yr.subVectors(i,e),Eo.crossVectors(So,Yr);let a=this.direction.dot(Eo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(zn,Yr));if(l<0)return null;const c=o*this.direction.dot(So.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(Eo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,x,v,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,v=c*f;t[0]=h+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Lm)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gn.crossVectors(i,zt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gn.crossVectors(i,zt)),Gn.normalize(),jr.crossVectors(zt,Gn),r[0]=Gn.x,r[4]=jr.x,r[8]=zt.x,r[1]=Gn.y,r[5]=jr.y,r[9]=zt.y,r[2]=Gn.z,r[6]=jr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],v=i[6],p=i[10],d=i[14],A=i[3],E=i[7],T=i[11],w=i[15],L=r[0],R=r[4],F=r[8],S=r[12],b=r[1],Y=r[5],le=r[9],ue=r[13],I=r[2],X=r[6],K=r[10],V=r[14],ne=r[3],ie=r[7],ae=r[11],O=r[15];return s[0]=a*L+o*b+l*I+c*ne,s[4]=a*R+o*Y+l*X+c*ie,s[8]=a*F+o*le+l*K+c*ae,s[12]=a*S+o*ue+l*V+c*O,s[1]=u*L+f*b+h*I+m*ne,s[5]=u*R+f*Y+h*X+m*ie,s[9]=u*F+f*le+h*K+m*ae,s[13]=u*S+f*ue+h*V+m*O,s[2]=x*L+v*b+p*I+d*ne,s[6]=x*R+v*Y+p*X+d*ie,s[10]=x*F+v*le+p*K+d*ae,s[14]=x*S+v*ue+p*V+d*O,s[3]=A*L+E*b+T*I+w*ne,s[7]=A*R+E*Y+T*X+w*ie,s[11]=A*F+E*le+T*K+w*ae,s[15]=A*S+E*ue+T*V+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],v=e[7],p=e[11],d=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],v=e[13],p=e[14],d=e[15],A=f*p*c-v*h*c+v*l*m-o*p*m-f*l*d+o*h*d,E=x*h*c-u*p*c-x*l*m+a*p*m+u*l*d-a*h*d,T=u*v*c-x*f*c+x*o*m-a*v*m-u*o*d+a*f*d,w=x*f*l-u*v*l-x*o*h+a*v*h+u*o*p-a*f*p,L=t*A+i*E+r*T+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=A*R,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*d+i*l*d)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*R,e[4]=E*R,e[5]=(u*p*s-x*h*s+x*r*m-t*p*m-u*r*d+t*h*d)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*d-t*l*d)*R,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*R,e[8]=T*R,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*d-t*f*d)*R,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*d+t*o*d)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=w*R,e[13]=(u*v*r-x*f*r+x*i*h-t*v*h-u*i*p+t*f*p)*R,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,v=a*u,p=a*f,d=o*f,A=l*c,E=l*u,T=l*f,w=i.x,L=i.y,R=i.z;return r[0]=(1-(v+d))*w,r[1]=(m+T)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(m-T)*L,r[5]=(1-(h+d))*L,r[6]=(p+A)*L,r[7]=0,r[8]=(x+E)*R,r[9]=(p-A)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const a=Pi.set(r[4],r[5],r[6]).length(),o=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/a,f=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ln){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,x;if(o===Ln)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ps)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let x,v;if(o===Ln)x=(a+s)*f,v=-2*f;else if(o===Ps)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new B,Zt=new lt,Pm=new B(0,0,0),Lm=new B(1,1,1),Gn=new B,jr=new B,zt=new B,oc=new lt,ac=new vi;class Vs{constructor(e=0,t=0,i=0,r=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const lc=new B,Li=new vi,En=new lt,Kr=new B,ur=new B,Um=new B,Im=new vi,cc=new B(1,0,0),uc=new B(0,1,0),fc=new B(0,0,1),Nm={type:"added"},Om={type:"removed"};class vt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new B,t=new Vs,i=new vi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Xe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ur,Kr,this.up):En.lookAt(Kr,ur,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(En),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new B(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new B,yn=new B,yo=new B,Tn=new B,Di=new B,Ui=new B,hc=new B,To=new B,bo=new B,Ao=new B;let $r=!1;class Qt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),yn.subVectors(i,t),yo.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(yn),l=Jt.dot(yo),c=yn.dot(yn),u=yn.dot(yo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,i,r,s,a,o,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Tn),l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),yn.subVectors(e,t),Jt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Jt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ui.subVectors(s,i),To.subVectors(e,i);const l=Di.dot(To),c=Ui.dot(To);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,r);const u=Di.dot(bo),f=Ui.dot(bo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Di,a);Ao.subVectors(e,s);const m=Di.dot(Ao),x=Ui.dot(Ao);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ui,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return hc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(hc,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Sm(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wo(a,s,e+1/3),this.g=wo(a,s,e),this.b=wo(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=wf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Qe.fromWorkingColorSpace(Et.copy(this),e),Math.round(Lt(Et.r*255,0,255))*65536+Math.round(Lt(Et.g*255,0,255))*256+Math.round(Lt(Et.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=xt){Qe.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Zr);const i=ho(Vn.h,Zr.h,t),r=ho(Vn.s,Zr.s,t),s=ho(Vn.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ke;Ke.NAMES=wf;let Fm=0;class nr extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rf extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,Jr=new ke;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRange={offset:0,count:-1},this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Cf extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pf extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ut extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bm=0;const Xt=new lt,Ro=new vt,Ii=new B,Gt=new Ir,fr=new Ir,gt=new B;class Kt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?Pf:Cf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Gt.min,fr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,fr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(fr.min),Gt.expandByPoint(fr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),gt.add(Ii)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new B,u[b]=new B;const f=new B,h=new B,m=new B,x=new ke,v=new ke,p=new ke,d=new B,A=new B;function E(b,Y,le){f.fromArray(r,b*3),h.fromArray(r,Y*3),m.fromArray(r,le*3),x.fromArray(a,b*2),v.fromArray(a,Y*2),p.fromArray(a,le*2),h.sub(f),m.sub(f),v.sub(x),p.sub(x);const ue=1/(v.x*p.y-p.x*v.y);isFinite(ue)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ue),A.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(ue),c[b].add(d),c[Y].add(d),c[le].add(d),u[b].add(A),u[Y].add(A),u[le].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,Y=T.length;b<Y;++b){const le=T[b],ue=le.start,I=le.count;for(let X=ue,K=ue+I;X<K;X+=3)E(i[X+0],i[X+1],i[X+2])}const w=new B,L=new B,R=new B,F=new B;function S(b){R.fromArray(s,b*3),F.copy(R);const Y=c[b];w.copy(Y),w.sub(R.multiplyScalar(R.dot(Y))).normalize(),L.crossVectors(F,Y);const ue=L.dot(u[b])<0?-1:1;l[b*4]=w.x,l[b*4+1]=w.y,l[b*4+2]=w.z,l[b*4+3]=ue}for(let b=0,Y=T.length;b<Y;++b){const le=T[b],ue=le.start,I=le.count;for(let X=ue,K=ue+I;X<K;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new lt,ai=new Gs,Qr=new Nr,pc=new B,Ni=new B,Oi=new B,Fi=new B,Co=new B,es=new B,ts=new ke,ns=new ke,is=new ke,mc=new B,gc=new B,_c=new B,rs=new B,ss=new B;class jn extends vt{constructor(e=new Kt,t=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Co.fromBufferAttribute(f,e),a?es.addScaledVector(Co,u):es.addScaledVector(Co.sub(t),u))}t.add(es)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(Qr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Qr,pc)===null||ai.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),ai.copy(e.ray).applyMatrix4(dc),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const p=h[x],d=a[p.materialIndex],A=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,w=E;T<w;T+=3){const L=o.getX(T),R=o.getX(T+1),F=o.getX(T+2);r=os(this,d,e,i,c,u,f,L,R,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,d=v;p<d;p+=3){const A=o.getX(p),E=o.getX(p+1),T=o.getX(p+2);r=os(this,a,e,i,c,u,f,A,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const p=h[x],d=a[p.materialIndex],A=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,w=E;T<w;T+=3){const L=T,R=T+1,F=T+2;r=os(this,d,e,i,c,u,f,L,R,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,d=v;p<d;p+=3){const A=p,E=p+1,T=p+2;r=os(this,a,e,i,c,u,f,A,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Hm(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ei,o),l===null)return null;ss.copy(o),ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:n}}function os(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ni),n.getVertexPosition(l,Oi),n.getVertexPosition(c,Fi);const u=Hm(n,e,t,i,Ni,Oi,Fi,rs);if(u){r&&(ts.fromBufferAttribute(r,o),ns.fromBufferAttribute(r,l),is.fromBufferAttribute(r,c),u.uv=Qt.getInterpolation(rs,Ni,Oi,Fi,ts,ns,is,new ke)),s&&(ts.fromBufferAttribute(s,o),ns.fromBufferAttribute(s,l),is.fromBufferAttribute(s,c),u.uv1=Qt.getInterpolation(rs,Ni,Oi,Fi,ts,ns,is,new ke),u.uv2=u.uv1),a&&(mc.fromBufferAttribute(a,o),gc.fromBufferAttribute(a,l),_c.fromBufferAttribute(a,c),u.normal=Qt.getInterpolation(rs,Ni,Oi,Fi,mc,gc,_c,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Qt.getNormal(Ni,Oi,Fi,f.normal),u.face=f}return u}class Or extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(f,2));function x(v,p,d,A,E,T,w,L,R,F,S){const b=T/R,Y=w/F,le=T/2,ue=w/2,I=L/2,X=R+1,K=F+1;let V=0,ne=0;const ie=new B;for(let ae=0;ae<K;ae++){const O=ae*Y-ue;for(let k=0;k<X;k++){const ve=k*b-le;ie[v]=ve*A,ie[p]=O*E,ie[d]=I,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[d]=L>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(k/R),f.push(1-ae/F),V+=1}}for(let ae=0;ae<F;ae++)for(let O=0;O<R;O++){const k=h+O+X*ae,ve=h+O+X*(ae+1),Me=h+(O+1)+X*(ae+1),Se=h+(O+1)+X*ae;l.push(k,ve,Se),l.push(ve,Me,Se),ne+=6}o.addGroup(m,ne,S),m+=ne,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function zm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lf(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const Gm={clone:tr,merge:Rt};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Df extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Df{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,Hi=1;class Wm extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Bi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new Yt(Bi,Hi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(Bi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Bi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Bi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Bi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Uf extends kt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gi?xt:jt),this.texture=new Uf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:$n});s.uniforms.tEquirect.value=t;const a=new jn(r,s),o=t.minFilter;return t.minFilter===Rr&&(t.minFilter=qt),new Wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Po=new B,qm=new B,Ym=new Xe;class Wn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Po.subVectors(i,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ym.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Nr,as=new B;class Ia{constructor(e=new Wn,t=new Wn,i=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],x=r[9],v=r[10],p=r[11],d=r[12],A=r[13],E=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,p-m,T-d).normalize(),i[1].setComponents(l+s,h+c,p+m,T+d).normalize(),i[2].setComponents(l+a,h+u,p+x,T+A).normalize(),i[3].setComponents(l-a,h-u,p-x,T-A).normalize(),i[4].setComponents(l-o,h-f,p-v,T-E).normalize(),t===Ln)i[5].setComponents(l+o,h+f,p+v,T+E).normalize();else if(t===Ps)i[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function If(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Na extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],v=[],p=[];for(let d=0;d<u;d++){const A=d*h-a;for(let E=0;E<c;E++){const T=E*f-s;x.push(T,-A,0),v.push(0,0,1),p.push(E/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const E=A+c*d,T=A+c*(d+1),w=A+1+c*(d+1),L=A+1+c*d;m.push(E,T,L),m.push(T,w,L)}this.setIndex(m),this.setAttribute("position",new Ut(x,3)),this.setAttribute("normal",new Ut(v,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vg=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`
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
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
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
#endif`,qg=`struct PhysicalMaterial {
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
}`,Yg=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,xv=`#define TOON
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
}`,Mv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Km,alphahash_pars_fragment:$m,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:Qm,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,begin_vertex:ig,beginnormal_vertex:rg,bsdfs:sg,iridescence_fragment:og,bumpmap_pars_fragment:ag,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:fg,color_fragment:hg,color_pars_fragment:dg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:vg,displacementmap_pars_vertex:xg,displacementmap_vertex:Mg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Eg,colorspace_fragment:yg,colorspace_pars_fragment:Tg,envmap_fragment:bg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:wg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:zg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Lg,fog_fragment:Dg,fog_pars_fragment:Ug,gradientmap_pars_fragment:Ig,lightmap_fragment:Ng,lightmap_pars_fragment:Og,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Bg,lights_pars_begin:Hg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Vg,lights_phong_fragment:kg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Xg,lights_physical_pars_fragment:qg,lights_fragment_begin:Yg,lights_fragment_maps:jg,lights_fragment_end:Kg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:Qg,map_fragment:e_,map_pars_fragment:t_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:s_,morphcolor_vertex:o_,morphnormal_vertex:a_,morphtarget_pars_vertex:l_,morphtarget_vertex:c_,normal_fragment_begin:u_,normal_fragment_maps:f_,normal_pars_fragment:h_,normal_pars_vertex:d_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:v_,iridescence_pars_fragment:x_,opaque_fragment:M_,packing:S_,premultiplied_alpha_fragment:E_,project_vertex:y_,dithering_fragment:T_,dithering_pars_fragment:b_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:D_,skinning_pars_vertex:U_,skinning_vertex:I_,skinnormal_vertex:N_,specularmap_fragment:O_,specularmap_pars_fragment:F_,tonemapping_fragment:B_,tonemapping_pars_fragment:H_,transmission_fragment:z_,transmission_pars_fragment:G_,uv_pars_fragment:V_,uv_pars_vertex:k_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:j_,backgroundCube_frag:K_,cube_vert:$_,cube_frag:Z_,depth_vert:J_,depth_frag:Q_,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:rv,linedashed_frag:sv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:uv,meshmatcap_frag:fv,meshnormal_vert:hv,meshnormal_frag:dv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:vv,meshtoon_frag:xv,points_vert:Mv,points_frag:Sv,shadow_vert:Ev,shadow_frag:yv,sprite_vert:Tv,sprite_frag:bv},_e={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},fn={basic:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([_e.common,_e.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([_e.lights,_e.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fn.physical={uniforms:Rt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ls={r:0,b:0,g:0};function Av(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(p,d){let A=!1,E=d.isScene===!0?d.background:null;E&&E.isTexture&&(E=(d.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),A=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Hs)?(u===void 0&&(u=new jn(new Or(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:tr(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,(f!==E||h!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new jn(new Na(2,2),new xi({name:"BackgroundMaterial",uniforms:tr(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(ls,Lf(n)),i.buffers.color.setClear(ls.r,ls.g,ls.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function wv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(I,X,K,V,ne){let ie=!1;if(a){const ae=v(V,K,X);c!==ae&&(c=ae,m(c.object)),ie=d(I,V,K,ne),ie&&A(I,V,K,ne)}else{const ae=X.wireframe===!0;(c.geometry!==V.id||c.program!==K.id||c.wireframe!==ae)&&(c.geometry=V.id,c.program=K.id,c.wireframe=ae,ie=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,F(I,X,K,V),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,X,K){const V=K.wireframe===!0;let ne=o[I.id];ne===void 0&&(ne={},o[I.id]=ne);let ie=ne[X.id];ie===void 0&&(ie={},ne[X.id]=ie);let ae=ie[V];return ae===void 0&&(ae=p(h()),ie[V]=ae),ae}function p(I){const X=[],K=[],V=[];for(let ne=0;ne<r;ne++)X[ne]=0,K[ne]=0,V[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:K,attributeDivisors:V,object:I,attributes:{},index:null}}function d(I,X,K,V){const ne=c.attributes,ie=X.attributes;let ae=0;const O=K.getAttributes();for(const k in O)if(O[k].location>=0){const Me=ne[k];let Se=ie[k];if(Se===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),Me===void 0||Me.attribute!==Se||Se&&Me.data!==Se.data)return!0;ae++}return c.attributesNum!==ae||c.index!==V}function A(I,X,K,V){const ne={},ie=X.attributes;let ae=0;const O=K.getAttributes();for(const k in O)if(O[k].location>=0){let Me=ie[k];Me===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor));const Se={};Se.attribute=Me,Me&&Me.data&&(Se.data=Me.data),ne[k]=Se,ae++}c.attributes=ne,c.attributesNum=ae,c.index=V}function E(){const I=c.newAttributes;for(let X=0,K=I.length;X<K;X++)I[X]=0}function T(I){w(I,0)}function w(I,X){const K=c.newAttributes,V=c.enabledAttributes,ne=c.attributeDivisors;K[I]=1,V[I]===0&&(n.enableVertexAttribArray(I),V[I]=1),ne[I]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,X),ne[I]=X)}function L(){const I=c.newAttributes,X=c.enabledAttributes;for(let K=0,V=X.length;K<V;K++)X[K]!==I[K]&&(n.disableVertexAttribArray(K),X[K]=0)}function R(I,X,K,V,ne,ie,ae){ae===!0?n.vertexAttribIPointer(I,X,K,ne,ie):n.vertexAttribPointer(I,X,K,V,ne,ie)}function F(I,X,K,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const ne=V.attributes,ie=K.getAttributes(),ae=X.defaultAttributeValues;for(const O in ie){const k=ie[O];if(k.location>=0){let ve=ne[O];if(ve===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),ve!==void 0){const Me=ve.normalized,Se=ve.itemSize,Re=t.get(ve);if(Re===void 0)continue;const Oe=Re.buffer,Le=Re.type,Ue=Re.bytesPerElement,$e=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||ve.gpuType===mf);if(ve.isInterleavedBufferAttribute){const Fe=ve.data,g=Fe.stride,P=ve.offset;if(Fe.isInstancedInterleavedBuffer){for(let N=0;N<k.locationSize;N++)w(k.location+N,Fe.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let N=0;N<k.locationSize;N++)T(k.location+N);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let N=0;N<k.locationSize;N++)R(k.location+N,Se/k.locationSize,Le,Me,g*Ue,(P+Se/k.locationSize*N)*Ue,$e)}else{if(ve.isInstancedBufferAttribute){for(let Fe=0;Fe<k.locationSize;Fe++)w(k.location+Fe,ve.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)T(k.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<k.locationSize;Fe++)R(k.location+Fe,Se/k.locationSize,Le,Me,Se*Ue,Se/k.locationSize*Fe*Ue,$e)}}else if(ae!==void 0){const Me=ae[O];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(k.location,Me);break;case 3:n.vertexAttrib3fv(k.location,Me);break;case 4:n.vertexAttrib4fv(k.location,Me);break;default:n.vertexAttrib1fv(k.location,Me)}}}}L()}function S(){le();for(const I in o){const X=o[I];for(const K in X){const V=X[K];for(const ne in V)x(V[ne].object),delete V[ne];delete X[K]}delete o[I]}}function b(I){if(o[I.id]===void 0)return;const X=o[I.id];for(const K in X){const V=X[K];for(const ne in V)x(V[ne].object),delete V[ne];delete X[K]}delete o[I.id]}function Y(I){for(const X in o){const K=o[X];if(K[I.id]===void 0)continue;const V=K[I.id];for(const ne in V)x(V[ne].object),delete V[ne];delete K[I.id]}}function le(){ue(),u=!0,c!==l&&(c=l,m(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:le,resetDefaultState:ue,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:Y,initAttributes:E,enableAttribute:T,disableUnusedAttributes:L}}function Rv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Cv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,T=a||e.has("OES_texture_float"),w=E&&T,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:L}}function Pv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Wn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,E=A*4;let T=d.clippingState||null;l.value=T,T=u(x,h,E,m);for(let w=0;w!==E;++w)T[w]=t[w];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const d=m+v*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,T=m;E!==v;++E,T+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Lv(n){let e=new WeakMap;function t(a,o){return o===ea?a.mapping=Ji:o===ta&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ea||o===ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nf extends Df{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,vc=[.125,.215,.35,.446,.526,.582],hi=20,Lo=new Nf,xc=new Ke;let Do=null,Uo=0,Io=0;const ui=(1+Math.sqrt(5))/2,zi=1/ui,Mc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ui,zi),new B(0,ui,-zi),new B(zi,0,ui),new B(-zi,0,ui),new B(ui,zi,0),new B(-ui,zi,0)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,Io),e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Cr,format:tn,colorSpace:Nn,depthBuffer:!1},r=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dv(s)),this._blurMaterial=Uv(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,r){const o=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xc),u.toneMapping=Zn,u.autoClear=!1;const m=new Rf({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new jn(new Or,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(xc),v=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;cs(r,A*E,d>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mc[(r-1)%Mc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hi-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let A=0;for(let R=0;R<hi;++R){const F=R/v,S=Math.exp(-F*F/2);d.push(S),R===0?A+=S:R<p&&(A+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=x,h.mipInt.value=E-i;const T=this._sizeLods[r],w=3*T*(r>E-Vi?r-E+Vi:0),L=4*(this._cubeSize-T);cs(t,w,L,3*T,2*T),l.setRenderTarget(t),l.render(f,Lo)}}function Dv(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vi?l=vc[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,d=1,A=new Float32Array(v*x*m),E=new Float32Array(p*x*m),T=new Float32Array(d*x*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,F=L>2?0:-1,S=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];A.set(S,v*x*L),E.set(h,p*x*L);const b=[L,L,L,L,L,L];T.set(b,d*x*L)}const w=new Kt;w.setAttribute("position",new mn(A,v)),w.setAttribute("uv",new mn(E,p)),w.setAttribute("faceIndex",new mn(T,d)),e.push(w),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ec(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Uv(n,e,t){const i=new Float32Array(hi),r=new B(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function yc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Tc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function Iv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ea||l===ta,u=l===Ji||l===Qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Sc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Sc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Nv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ov(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let E=0,T=A.length;E<T;E+=3){const w=A[E+0],L=A[E+1],R=A[E+2];h.push(w,L,L,R,R,w)}}else if(x!==void 0){const A=x.array;v=x.version;for(let E=0,T=A.length/3-1;E<T;E+=3){const w=E+0,L=E+1,R=E+2;h.push(w,L,L,R,R,w)}}else return;const p=new(Ef(h)?Pf:Cf)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Fv(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Bv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hv(n,e){return n[0]-e[0]}function zv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let X=function(){ue.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let S=0;E===!0&&(S=1),T===!0&&(S=2),w===!0&&(S=3);let b=u.attributes.position.count*S,Y=1;b>e.maxTextureSize&&(Y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const le=new Float32Array(b*Y*4*v),ue=new bf(le,b,Y,v);ue.type=Yn,ue.needsUpdate=!0;const I=S*4;for(let K=0;K<v;K++){const V=L[K],ne=R[K],ie=F[K],ae=b*Y*4*K;for(let O=0;O<V.count;O++){const k=O*I;E===!0&&(a.fromBufferAttribute(V,O),le[ae+k+0]=a.x,le[ae+k+1]=a.y,le[ae+k+2]=a.z,le[ae+k+3]=0),T===!0&&(a.fromBufferAttribute(ne,O),le[ae+k+4]=a.x,le[ae+k+5]=a.y,le[ae+k+6]=a.z,le[ae+k+7]=0),w===!0&&(a.fromBufferAttribute(ie,O),le[ae+k+8]=a.x,le[ae+k+9]=a.y,le[ae+k+10]=a.z,le[ae+k+11]=ie.itemSize===4?a.w:1)}}p={count:v,texture:ue,size:new ke(b,Y)},s.set(u,p),u.addEventListener("dispose",X)}let d=0;for(let E=0;E<h.length;E++)d+=h[E];const A=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let T=0;T<x;T++)v[T]=[T,0];i[u.id]=v}for(let T=0;T<x;T++){const w=v[T];w[0]=T,w[1]=h[T]}v.sort(zv);for(let T=0;T<8;T++)T<x&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Hv);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let A=0;for(let T=0;T<8;T++){const w=o[T],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+T)!==p[L]&&u.setAttribute("morphTarget"+T,p[L]),d&&u.getAttribute("morphNormal"+T)!==d[L]&&u.setAttribute("morphNormal"+T,d[L]),r[T]=R,A+=R):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const E=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Vv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Of=new kt,Ff=new bf,Bf=new Rm,Hf=new Uf,bc=[],Ac=[],wc=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Cc.set(i),n.uniformMatrix2fv(this.addr,!1,Cc),pt(t,i)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),pt(t,i)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;wc.set(i),n.uniformMatrix4fv(this.addr,!1,wc),pt(t,i)}}function $v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function e0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Of,r)}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bf,r)}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hf,r)}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ff,r)}function l0(n){switch(n){case 5126:return kv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(n,e){n.uniform1fv(this.addr,e)}function u0(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function f0(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function h0(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p0(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m0(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function g0(n,e){n.uniform1iv(this.addr,e)}function _0(n,e){n.uniform2iv(this.addr,e)}function v0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function M0(n,e){n.uniform1uiv(this.addr,e)}function S0(n,e){n.uniform2uiv(this.addr,e)}function E0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function T0(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Of,s[a])}function b0(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bf,s[a])}function A0(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hf,s[a])}function w0(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ff,s[a])}function R0(n){switch(n){case 5126:return c0;case 35664:return u0;case 35665:return f0;case 35666:return h0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return M0;case 36294:return S0;case 36295:return E0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=l0(t.type)}}class P0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=R0(t.type)}}class L0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Pc(n,e){n.seq.push(e),n.map[e.id]=e}function D0(n,e,t){const i=n.name,r=i.length;for(No.lastIndex=0;;){const s=No.exec(i),a=No.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pc(t,c===void 0?new C0(o,n,e):new P0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new L0(o),Pc(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);D0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const U0=37297;let I0=0;function N0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function O0(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Cs&&t===Rs?i="LinearDisplayP3ToLinearSRGB":e===Rs&&t===Cs&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case zs:return[i,"LinearTransferOETF"];case xt:case Ua:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+N0(n.getShaderSource(e),a)}else return r}function F0(n,e){const t=O0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B0(n,e){let t;switch(e){case jp:t="Linear";break;case Kp:t="Reinhard";break;case $p:t="OptimizedCineon";break;case Zp:t="ACESFilmic";break;case Jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function H0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function z0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function Uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(n){return n.replace(V0,W0)}const k0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W0(n,e){let t=Ve[e];if(t===void 0){const i=k0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(n){return n.replace(X0,q0)}function q0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function j0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case df:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function J0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Y0(t),c=j0(t),u=K0(t),f=$0(t),h=Z0(t),m=t.isWebGL2?"":H0(t),x=z0(s),v=r.createProgram();let p,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(p=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[m,Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Zn?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,F0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=aa(a),a=Uc(a,t),a=Ic(a,t),o=aa(o),o=Uc(o,t),o=Ic(o,t),a=Nc(a),o=Nc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+p+a,T=A+d+o,w=Lc(r,r.VERTEX_SHADER,E),L=Lc(r,r.FRAGMENT_SHADER,T);r.attachShader(v,w),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(Y){if(n.debug.checkShaderErrors){const le=r.getProgramInfoLog(v).trim(),ue=r.getShaderInfoLog(w).trim(),I=r.getShaderInfoLog(L).trim();let X=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,L);else{const V=Dc(r,w,"vertex"),ne=Dc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+V+`
`+ne)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ue===""||I==="")&&(K=!1);K&&(Y.diagnostics={runnable:X,programLog:le,vertexShader:{log:ue,prefix:p},fragmentShader:{log:I,prefix:d}})}r.deleteShader(w),r.deleteShader(L),F=new xs(r,v),S=G0(r,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,U0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=L,this}let Q0=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tx(e),t.set(e,i)),i}}class tx{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function nx(n,e,t,i,r,s,a){const o=new Af,l=new ex,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,b,Y,le,ue){const I=le.fog,X=ue.geometry,K=S.isMeshStandardMaterial?le.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),ne=V&&V.mapping===Hs?V.image.height:null,ie=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,O=ae!==void 0?ae.length:0;let k=0;X.morphAttributes.position!==void 0&&(k=1),X.morphAttributes.normal!==void 0&&(k=2),X.morphAttributes.color!==void 0&&(k=3);let ve,Me,Se,Re;if(ie){const ct=fn[ie];ve=ct.vertexShader,Me=ct.fragmentShader}else ve=S.vertexShader,Me=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),Re=l.getFragmentShaderID(S);const Oe=n.getRenderTarget(),Le=ue.isInstancedMesh===!0,Ue=!!S.map,$e=!!S.matcap,Fe=!!V,g=!!S.aoMap,P=!!S.lightMap,N=!!S.bumpMap,G=!!S.normalMap,z=!!S.displacementMap,$=!!S.emissiveMap,re=!!S.metalnessMap,ee=!!S.roughnessMap,oe=S.anisotropy>0,te=S.clearcoat>0,Ee=S.iridescence>0,M=S.sheen>0,_=S.transmission>0,U=oe&&!!S.anisotropyMap,J=te&&!!S.clearcoatMap,Q=te&&!!S.clearcoatNormalMap,se=te&&!!S.clearcoatRoughnessMap,xe=Ee&&!!S.iridescenceMap,fe=Ee&&!!S.iridescenceThicknessMap,me=M&&!!S.sheenColorMap,C=M&&!!S.sheenRoughnessMap,de=!!S.specularMap,ce=!!S.specularColorMap,Ae=!!S.specularIntensityMap,ye=_&&!!S.transmissionMap,Ce=_&&!!S.thicknessMap,we=!!S.gradientMap,be=!!S.alphaMap,qe=S.alphaTest>0,D=!!S.alphaHash,ge=!!S.extensions,he=!!X.attributes.uv1,Z=!!X.attributes.uv2,pe=!!X.attributes.uv3;let De=Zn;return S.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(De=n.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:Me,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Le,instancingColor:Le&&ue.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Nn,map:Ue,matcap:$e,envMap:Fe,envMapMode:Fe&&V.mapping,envMapCubeUVHeight:ne,aoMap:g,lightMap:P,bumpMap:N,normalMap:G,displacementMap:h&&z,emissiveMap:$,normalMapObjectSpace:G&&S.normalMapType===hm,normalMapTangentSpace:G&&S.normalMapType===fm,metalnessMap:re,roughnessMap:ee,anisotropy:oe,anisotropyMap:U,clearcoat:te,clearcoatMap:J,clearcoatNormalMap:Q,clearcoatRoughnessMap:se,iridescence:Ee,iridescenceMap:xe,iridescenceThicknessMap:fe,sheen:M,sheenColorMap:me,sheenRoughnessMap:C,specularMap:de,specularColorMap:ce,specularIntensityMap:Ae,transmission:_,transmissionMap:ye,thicknessMap:Ce,gradientMap:we,opaque:S.transparent===!1&&S.blending===ji,alphaMap:be,alphaTest:qe,alphaHash:D,combine:S.combine,mapUv:Ue&&v(S.map.channel),aoMapUv:g&&v(S.aoMap.channel),lightMapUv:P&&v(S.lightMap.channel),bumpMapUv:N&&v(S.bumpMap.channel),normalMapUv:G&&v(S.normalMap.channel),displacementMapUv:z&&v(S.displacementMap.channel),emissiveMapUv:$&&v(S.emissiveMap.channel),metalnessMapUv:re&&v(S.metalnessMap.channel),roughnessMapUv:ee&&v(S.roughnessMap.channel),anisotropyMapUv:U&&v(S.anisotropyMap.channel),clearcoatMapUv:J&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:C&&v(S.sheenRoughnessMap.channel),specularMapUv:de&&v(S.specularMap.channel),specularColorMapUv:ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Ae&&v(S.specularIntensityMap.channel),transmissionMapUv:ye&&v(S.transmissionMap.channel),thicknessMapUv:Ce&&v(S.thicknessMap.channel),alphaMapUv:be&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(G||oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:Z,vertexUv3s:pe,pointsUvs:ue.isPoints===!0&&!!X.attributes.uv&&(Ue||be),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pn,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)b.push(Y),b.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(A(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){const b=x[S.type];let Y;if(b){const le=fn[b];Y=Gm.clone(le.uniforms)}else Y=S.uniforms;return Y}function w(S,b){let Y;for(let le=0,ue=c.length;le<ue;le++){const I=c[le];if(I.cacheKey===b){Y=I,++Y.usedTimes;break}}return Y===void 0&&(Y=new J0(n,b,S,s),c.push(Y)),Y}function L(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:w,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:F}}function ix(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function rx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function o(f,h,m,x,v,p){const d=a(f,h,m,x,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,x,v,p){const d=a(f,h,m,x,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||rx),i.length>1&&i.sort(h||Fc),r.length>1&&r.sort(h||Fc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function sx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Bc,n.set(i,[a])):r>=s.length?(a=new Bc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function ax(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lx=0;function cx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ux(n,e){const t=new ox,i=ax(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new lt,o=new lt;function l(u,f){let h=0,m=0,x=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let v=0,p=0,d=0,A=0,E=0,T=0,w=0,L=0,R=0,F=0,S=0;u.sort(cx);const b=f===!0?Math.PI:1;for(let le=0,ue=u.length;le<ue;le++){const I=u[le],X=I.color,K=I.intensity,V=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=X.r*K*b,m+=X.g*K*b,x+=X.b*K*b;else if(I.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(I.sh.coefficients[ie],K);S++}else if(I.isDirectionalLight){const ie=t.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const ae=I.shadow,O=i.get(I);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=ne,r.directionalShadowMatrix[v]=I.shadow.matrix,T++}r.directional[v]=ie,v++}else if(I.isSpotLight){const ie=t.get(I);ie.position.setFromMatrixPosition(I.matrixWorld),ie.color.copy(X).multiplyScalar(K*b),ie.distance=V,ie.coneCos=Math.cos(I.angle),ie.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ie.decay=I.decay,r.spot[d]=ie;const ae=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ae.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[d]=ae.matrix,I.castShadow){const O=i.get(I);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.spotShadow[d]=O,r.spotShadowMap[d]=ne,L++}d++}else if(I.isRectAreaLight){const ie=t.get(I);ie.color.copy(X).multiplyScalar(K),ie.halfWidth.set(I.width*.5,0,0),ie.halfHeight.set(0,I.height*.5,0),r.rectArea[A]=ie,A++}else if(I.isPointLight){const ie=t.get(I);if(ie.color.copy(I.color).multiplyScalar(I.intensity*b),ie.distance=I.distance,ie.decay=I.decay,I.castShadow){const ae=I.shadow,O=i.get(I);O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,O.shadowCameraNear=ae.camera.near,O.shadowCameraFar=ae.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=I.shadow.matrix,w++}r.point[p]=ie,p++}else if(I.isHemisphereLight){const ie=t.get(I);ie.skyColor.copy(I.color).multiplyScalar(K*b),ie.groundColor.copy(I.groundColor).multiplyScalar(K*b),r.hemi[E]=ie,E++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==v||Y.pointLength!==p||Y.spotLength!==d||Y.rectAreaLength!==A||Y.hemiLength!==E||Y.numDirectionalShadows!==T||Y.numPointShadows!==w||Y.numSpotShadows!==L||Y.numSpotMaps!==R||Y.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=A,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=L+R-F,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=S,Y.directionalLength=v,Y.pointLength=p,Y.spotLength=d,Y.rectAreaLength=A,Y.hemiLength=E,Y.numDirectionalShadows=T,Y.numPointShadows=w,Y.numSpotShadows=L,Y.numSpotMaps=R,Y.numLightProbes=S,r.version=lx++)}function c(u,f){let h=0,m=0,x=0,v=0,p=0;const d=f.matrixWorldInverse;for(let A=0,E=u.length;A<E;A++){const T=u[A];if(T.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(T.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),x++}else if(T.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Hc(n,e){const t=new ux(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Hc(n,e),t.set(s,[l])):a>=o.length?(l=new Hc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class hx extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(n,e,t){let i=new Ia;const r=new ke,s=new ke,a=new _t,o=new hx({depthPacking:um}),l=new dx,c={},u=t.maxTextureSize,f={[ei]:Ft,[Ft]:ei,[Pn]:Pn},h=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:px,fragmentShader:mx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Kt;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let d=this.type;this.render=function(w,L,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const F=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending($n),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=d!==bn&&this.type===bn,ue=d===bn&&this.type!==bn;for(let I=0,X=w.length;I<X;I++){const K=w[I],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ne=V.getFrameExtents();if(r.multiply(ne),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||le===!0||ue===!0){const ae=this.type!==bn?{minFilter:Ct,magFilter:Ct}:{};V.map!==null&&V.map.dispose(),V.map=new _i(r.x,r.y,ae),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ie=V.getViewportCount();for(let ae=0;ae<ie;ae++){const O=V.getViewport(ae);a.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),Y.viewport(a),V.updateMatrices(K,ae),i=V.getFrustum(),T(L,R,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&A(V,R),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(F,S,b)};function A(w,L){const R=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _i(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(L,null,R,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(L,null,R,m,v,null)}function E(w,L,R,F){let S=null;const b=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=R.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Y=S.uuid,le=L.uuid;let ue=c[Y];ue===void 0&&(ue={},c[Y]=ue);let I=ue[le];I===void 0&&(I=S.clone(),ue[le]=I),S=I}if(S.visible=L.visible,S.wireframe=L.wireframe,F===bn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=n.properties.get(S);Y.light=R}return S}function T(w,L,R,F,S){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const le=e.update(w),ue=w.material;if(Array.isArray(ue)){const I=le.groups;for(let X=0,K=I.length;X<K;X++){const V=I[X],ne=ue[V.materialIndex];if(ne&&ne.visible){const ie=E(w,ne,F,S);n.renderBufferDirect(R,null,le,ie,w,V)}}}else if(ue.visible){const I=E(w,ue,F,S);n.renderBufferDirect(R,null,le,I,w,null)}}const Y=w.children;for(let le=0,ue=Y.length;le<ue;le++)T(Y[le],L,R,F,S)}}function _x(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ge=new _t;let he=null;const Z=new _t(0,0,0,0);return{setMask:function(pe){he!==pe&&!D&&(n.colorMask(pe,pe,pe,pe),he=pe)},setLocked:function(pe){D=pe},setClear:function(pe,De,Ye,ct,Wt){Wt===!0&&(pe*=ct,De*=ct,Ye*=ct),ge.set(pe,De,Ye,ct),Z.equals(ge)===!1&&(n.clearColor(pe,De,Ye,ct),Z.copy(ge))},reset:function(){D=!1,he=null,Z.set(-1,0,0,0)}}}function s(){let D=!1,ge=null,he=null,Z=null;return{setTest:function(pe){pe?Ue(n.DEPTH_TEST):$e(n.DEPTH_TEST)},setMask:function(pe){ge!==pe&&!D&&(n.depthMask(pe),ge=pe)},setFunc:function(pe){if(he!==pe){switch(pe){case Hp:n.depthFunc(n.NEVER);break;case zp:n.depthFunc(n.ALWAYS);break;case Gp:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Vp:n.depthFunc(n.EQUAL);break;case kp:n.depthFunc(n.GEQUAL);break;case Wp:n.depthFunc(n.GREATER);break;case Xp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=pe}},setLocked:function(pe){D=pe},setClear:function(pe){Z!==pe&&(n.clearDepth(pe),Z=pe)},reset:function(){D=!1,ge=null,he=null,Z=null}}}function a(){let D=!1,ge=null,he=null,Z=null,pe=null,De=null,Ye=null,ct=null,Wt=null;return{setTest:function(tt){D||(tt?Ue(n.STENCIL_TEST):$e(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!D&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,bt,on){(he!==tt||Z!==bt||pe!==on)&&(n.stencilFunc(tt,bt,on),he=tt,Z=bt,pe=on)},setOp:function(tt,bt,on){(De!==tt||Ye!==bt||ct!==on)&&(n.stencilOp(tt,bt,on),De=tt,Ye=bt,ct=on)},setLocked:function(tt){D=tt},setClear:function(tt){Wt!==tt&&(n.clearStencil(tt),Wt=tt)},reset:function(){D=!1,ge=null,he=null,Z=null,pe=null,De=null,Ye=null,ct=null,Wt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,v=[],p=null,d=!1,A=null,E=null,T=null,w=null,L=null,R=null,F=null,S=new Ke(0,0,0),b=0,Y=!1,le=null,ue=null,I=null,X=null,K=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ie=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ne=ie>=1):ae.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ne=ie>=2);let O=null,k={};const ve=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Se=new _t().fromArray(ve),Re=new _t().fromArray(Me);function Oe(D,ge,he,Z){const pe=new Uint8Array(4),De=n.createTexture();n.bindTexture(D,De),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<he;Ye++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ge+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return De}const Le={};Le[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(As),re(!1),ee(Ml),Ue(n.CULL_FACE),z($n);function Ue(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function $e(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Fe(D,ge){return m[D]!==ge?(n.bindFramebuffer(D,ge),m[D]=ge,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ge),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function g(D,ge){let he=v,Z=!1;if(D)if(he=x.get(ge),he===void 0&&(he=[],x.set(ge,he)),D.isWebGLMultipleRenderTargets){const pe=D.texture;if(he.length!==pe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Ye=pe.length;De<Ye;De++)he[De]=n.COLOR_ATTACHMENT0+De;he.length=pe.length,Z=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Z=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Z=!0);Z&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function P(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const N={[fi]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[bp]:n.FUNC_REVERSE_SUBTRACT};if(i)N[Tl]=n.MIN,N[bl]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(N[Tl]=D.MIN_EXT,N[bl]=D.MAX_EXT)}const G={[Ap]:n.ZERO,[wp]:n.ONE,[Rp]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[Up]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA,[Np]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function z(D,ge,he,Z,pe,De,Ye,ct,Wt,tt){if(D===$n){d===!0&&($e(n.BLEND),d=!1);return}if(d===!1&&(Ue(n.BLEND),d=!0),D!==yp){if(D!==A||tt!==Y){if((E!==fi||L!==fi)&&(n.blendEquation(n.FUNC_ADD),E=fi,L=fi),tt)switch(D){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFunc(n.ONE,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,w=null,R=null,F=null,S.set(0,0,0),b=0,A=D,Y=tt}return}pe=pe||ge,De=De||he,Ye=Ye||Z,(ge!==E||pe!==L)&&(n.blendEquationSeparate(N[ge],N[pe]),E=ge,L=pe),(he!==T||Z!==w||De!==R||Ye!==F)&&(n.blendFuncSeparate(G[he],G[Z],G[De],G[Ye]),T=he,w=Z,R=De,F=Ye),(ct.equals(S)===!1||Wt!==b)&&(n.blendColor(ct.r,ct.g,ct.b,Wt),S.copy(ct),b=Wt),A=D,Y=!1}function $(D,ge){D.side===Pn?$e(n.CULL_FACE):Ue(n.CULL_FACE);let he=D.side===Ft;ge&&(he=!he),re(he),D.blending===ji&&D.transparent===!1?z($n):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Z=D.stencilWrite;c.setTest(Z),Z&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):$e(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(D){le!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),le=D)}function ee(D){D!==Mp?(Ue(n.CULL_FACE),D!==ue&&(D===Ml?n.cullFace(n.BACK):D===Sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$e(n.CULL_FACE),ue=D}function oe(D){D!==I&&(ne&&n.lineWidth(D),I=D)}function te(D,ge,he){D?(Ue(n.POLYGON_OFFSET_FILL),(X!==ge||K!==he)&&(n.polygonOffset(ge,he),X=ge,K=he)):$e(n.POLYGON_OFFSET_FILL)}function Ee(D){D?Ue(n.SCISSOR_TEST):$e(n.SCISSOR_TEST)}function M(D){D===void 0&&(D=n.TEXTURE0+V-1),O!==D&&(n.activeTexture(D),O=D)}function _(D,ge,he){he===void 0&&(O===null?he=n.TEXTURE0+V-1:he=O);let Z=k[he];Z===void 0&&(Z={type:void 0,texture:void 0},k[he]=Z),(Z.type!==D||Z.texture!==ge)&&(O!==he&&(n.activeTexture(he),O=he),n.bindTexture(D,ge||Le[D]),Z.type=D,Z.texture=ge)}function U(){const D=k[O];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){Se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function Ce(D){Re.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function we(D,ge){let he=f.get(ge);he===void 0&&(he=new WeakMap,f.set(ge,he));let Z=he.get(D);Z===void 0&&(Z=n.getUniformBlockIndex(ge,D.name),he.set(D,Z))}function be(D,ge){const Z=f.get(ge).get(D);u.get(ge)!==Z&&(n.uniformBlockBinding(ge,Z,D.__bindingPointIndex),u.set(ge,Z))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},O=null,k={},m={},x=new WeakMap,v=[],p=null,d=!1,A=null,E=null,T=null,w=null,L=null,R=null,F=null,S=new Ke(0,0,0),b=0,Y=!1,le=null,ue=null,I=null,X=null,K=null,Se.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:$e,bindFramebuffer:Fe,drawBuffers:g,useProgram:P,setBlending:z,setMaterial:$,setFlipSided:re,setCullFace:ee,setLineWidth:oe,setPolygonOffset:te,setScissorTest:Ee,activeTexture:M,bindTexture:_,unbindTexture:U,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ce,texImage3D:Ae,updateUBOMapping:we,uniformBlockBinding:be,texStorage2D:C,texStorage3D:de,texSubImage2D:se,texSubImage3D:xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:ye,viewport:Ce,reset:qe}}function vx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(M,_){return d?new OffscreenCanvas(M,_):Ls("canvas")}function E(M,_,U,J){let Q=1;if((M.width>J||M.height>J)&&(Q=J/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const se=_?oa:Math.floor,xe=se(Q*M.width),fe=se(Q*M.height);v===void 0&&(v=A(xe,fe));const me=U?A(xe,fe):v;return me.width=xe,me.height=fe,me.getContext("2d").drawImage(M,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+xe+"x"+fe+")."),me}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return tc(M.width)&&tc(M.height)}function w(M){return o?!1:M.wrapS!==en||M.wrapT!==en||M.minFilter!==Ct&&M.minFilter!==qt}function L(M,_){return M.generateMipmaps&&_&&M.minFilter!==Ct&&M.minFilter!==qt}function R(M){n.generateMipmap(M)}function F(M,_,U,J,Q=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let se=_;if(_===n.RED&&(U===n.FLOAT&&(se=n.R32F),U===n.HALF_FLOAT&&(se=n.R16F),U===n.UNSIGNED_BYTE&&(se=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(se=n.R8UI),U===n.UNSIGNED_SHORT&&(se=n.R16UI),U===n.UNSIGNED_INT&&(se=n.R32UI),U===n.BYTE&&(se=n.R8I),U===n.SHORT&&(se=n.R16I),U===n.INT&&(se=n.R32I)),_===n.RG&&(U===n.FLOAT&&(se=n.RG32F),U===n.HALF_FLOAT&&(se=n.RG16F),U===n.UNSIGNED_BYTE&&(se=n.RG8)),_===n.RGBA){const xe=Q?ws:Qe.getTransfer(J);U===n.FLOAT&&(se=n.RGBA32F),U===n.HALF_FLOAT&&(se=n.RGBA16F),U===n.UNSIGNED_BYTE&&(se=xe===rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(M,_,U){return L(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function b(M){return M===Ct||M===Al||M===oo?n.NEAREST:n.LINEAR}function Y(M){const _=M.target;_.removeEventListener("dispose",Y),ue(_),_.isVideoTexture&&x.delete(_)}function le(M){const _=M.target;_.removeEventListener("dispose",le),X(_)}function ue(M){const _=i.get(M);if(_.__webglInit===void 0)return;const U=M.source,J=p.get(U);if(J){const Q=J[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(M),Object.keys(J).length===0&&p.delete(U)}i.remove(M)}function I(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const U=M.source,J=p.get(U);delete J[_.__cacheKey],a.memory.textures--}function X(M){const _=M.texture,U=i.get(M),J=i.get(_);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let se=0;se<U.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(U.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)n.deleteFramebuffer(U.__webglFramebuffer[Q]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,se=_.length;Q<se;Q++){const xe=i.get(_[Q]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(M)}let K=0;function V(){K=0}function ne(){const M=K;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),K+=1,M}function ie(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function ae(M,_){const U=i.get(M);if(M.isVideoTexture&&te(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(U,M,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function O(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Ue(U,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function k(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Ue(U,M,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function ve(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){$e(U,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const Me={[na]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},Se={[Ct]:n.NEAREST,[Al]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Qp]:n.LINEAR_MIPMAP_NEAREST,[Rr]:n.LINEAR_MIPMAP_LINEAR},Re={[dm]:n.NEVER,[Mm]:n.ALWAYS,[pm]:n.LESS,[gm]:n.LEQUAL,[mm]:n.EQUAL,[xm]:n.GEQUAL,[_m]:n.GREATER,[vm]:n.NOTEQUAL};function Oe(M,_,U){if(U?(n.texParameteri(M,n.TEXTURE_WRAP_S,Me[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Me[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Me[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Se[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Se[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==en||_.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,b(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,b(_.minFilter)),_.minFilter!==Ct&&_.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ct||_.minFilter!==oo&&_.minFilter!==Rr||_.type===Yn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Le(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",Y));const J=_.source;let Q=p.get(J);Q===void 0&&(Q={},p.set(J,Q));const se=ie(_);if(se!==M.__cacheKey){Q[se]===void 0&&(Q[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[se].usedTimes++;const xe=Q[M.__cacheKey];xe!==void 0&&(Q[M.__cacheKey].usedTimes--,xe.usedTimes===0&&I(_)),M.__cacheKey=se,M.__webglTexture=Q[se].texture}return U}function Ue(M,_,U){let J=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=n.TEXTURE_3D);const Q=Le(M,_),se=_.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+U);const xe=i.get(se);if(se.version!==xe.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const fe=Qe.getPrimaries(Qe.workingColorSpace),me=_.colorSpace===jt?null:Qe.getPrimaries(_.colorSpace),C=_.colorSpace===jt||fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const de=w(_)&&T(_.image)===!1;let ce=E(_.image,de,!1,u);ce=Ee(_,ce);const Ae=T(ce)||o,ye=s.convert(_.format,_.colorSpace);let Ce=s.convert(_.type),we=F(_.internalFormat,ye,Ce,_.colorSpace,_.isVideoTexture);Oe(J,_,Ae);let be;const qe=_.mipmaps,D=o&&_.isVideoTexture!==!0,ge=xe.__version===void 0||Q===!0,he=S(_,ce,Ae);if(_.isDepthTexture)we=n.DEPTH_COMPONENT,o?_.type===Yn?we=n.DEPTH_COMPONENT32F:_.type===qn?we=n.DEPTH_COMPONENT24:_.type===pi?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:_.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===mi&&we===n.DEPTH_COMPONENT&&_.type!==Da&&_.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=qn,Ce=s.convert(_.type)),_.format===er&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,_.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=pi,Ce=s.convert(_.type))),ge&&(D?t.texStorage2D(n.TEXTURE_2D,1,we,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Ce,null));else if(_.isDataTexture)if(qe.length>0&&Ae){D&&ge&&t.texStorage2D(n.TEXTURE_2D,he,we,qe[0].width,qe[0].height);for(let Z=0,pe=qe.length;Z<pe;Z++)be=qe[Z],D?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,ye,Ce,be.data):t.texImage2D(n.TEXTURE_2D,Z,we,be.width,be.height,0,ye,Ce,be.data);_.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,he,we,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Ce,ce.data)):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Ce,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,qe[0].width,qe[0].height,ce.depth);for(let Z=0,pe=qe.length;Z<pe;Z++)be=qe[Z],_.format!==tn?ye!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,ce.depth,ye,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,we,be.width,be.height,ce.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,ce.depth,ye,Ce,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,we,be.width,be.height,ce.depth,0,ye,Ce,be.data)}else{D&&ge&&t.texStorage2D(n.TEXTURE_2D,he,we,qe[0].width,qe[0].height);for(let Z=0,pe=qe.length;Z<pe;Z++)be=qe[Z],_.format!==tn?ye!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,be.width,be.height,ye,Ce,be.data):t.texImage2D(n.TEXTURE_2D,Z,we,be.width,be.height,0,ye,Ce,be.data)}else if(_.isDataArrayTexture)D?(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ce,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ce.width,ce.height,ce.depth,0,ye,Ce,ce.data);else if(_.isData3DTexture)D?(ge&&t.texStorage3D(n.TEXTURE_3D,he,we,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ce,ce.data)):t.texImage3D(n.TEXTURE_3D,0,we,ce.width,ce.height,ce.depth,0,ye,Ce,ce.data);else if(_.isFramebufferTexture){if(ge)if(D)t.texStorage2D(n.TEXTURE_2D,he,we,ce.width,ce.height);else{let Z=ce.width,pe=ce.height;for(let De=0;De<he;De++)t.texImage2D(n.TEXTURE_2D,De,we,Z,pe,0,ye,Ce,null),Z>>=1,pe>>=1}}else if(qe.length>0&&Ae){D&&ge&&t.texStorage2D(n.TEXTURE_2D,he,we,qe[0].width,qe[0].height);for(let Z=0,pe=qe.length;Z<pe;Z++)be=qe[Z],D?t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ye,Ce,be):t.texImage2D(n.TEXTURE_2D,Z,we,ye,Ce,be);_.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,he,we,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ce,ce)):t.texImage2D(n.TEXTURE_2D,0,we,ye,Ce,ce);L(_,Ae)&&R(J),xe.__version=se.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function $e(M,_,U){if(_.image.length!==6)return;const J=Le(M,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const se=i.get(Q);if(Q.version!==se.__version||J===!0){t.activeTexture(n.TEXTURE0+U);const xe=Qe.getPrimaries(Qe.workingColorSpace),fe=_.colorSpace===jt?null:Qe.getPrimaries(_.colorSpace),me=_.colorSpace===jt||xe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const C=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!C&&!de?ce[Z]=E(_.image[Z],!1,!0,c):ce[Z]=de?_.image[Z].image:_.image[Z],ce[Z]=Ee(_,ce[Z]);const Ae=ce[0],ye=T(Ae)||o,Ce=s.convert(_.format,_.colorSpace),we=s.convert(_.type),be=F(_.internalFormat,Ce,we,_.colorSpace),qe=o&&_.isVideoTexture!==!0,D=se.__version===void 0||J===!0;let ge=S(_,Ae,ye);Oe(n.TEXTURE_CUBE_MAP,_,ye);let he;if(C){qe&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,be,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){he=ce[Z].mipmaps;for(let pe=0;pe<he.length;pe++){const De=he[pe];_.format!==tn?Ce!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,De.width,De.height,Ce,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,be,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,De.width,De.height,Ce,we,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,be,De.width,De.height,0,Ce,we,De.data)}}}else{he=_.mipmaps,qe&&D&&(he.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,be,ce[0].width,ce[0].height));for(let Z=0;Z<6;Z++)if(de){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Ce,we,ce[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,ce[Z].width,ce[Z].height,0,Ce,we,ce[Z].data);for(let pe=0;pe<he.length;pe++){const Ye=he[pe].image[Z].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ye.width,Ye.height,Ce,we,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,be,Ye.width,Ye.height,0,Ce,we,Ye.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,we,ce[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,Ce,we,ce[Z]);for(let pe=0;pe<he.length;pe++){const De=he[pe];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ce,we,De.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,be,Ce,we,De.image[Z])}}}L(_,ye)&&R(n.TEXTURE_CUBE_MAP),se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Fe(M,_,U,J,Q,se){const xe=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),me=F(U.internalFormat,xe,fe,U.colorSpace);if(!i.get(_).__hasExternalTextures){const de=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,me,de,ce,_.depth,0,xe,fe,null):t.texImage2D(Q,se,me,de,ce,0,xe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),oe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,i.get(U).__webglTexture,0,ee(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,i.get(U).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(M,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let J=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||oe(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Yn?J=n.DEPTH_COMPONENT32F:Q.type===qn&&(J=n.DEPTH_COMPONENT24));const se=ee(_);oe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,J,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,J,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const J=ee(_);U&&oe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,_.width,_.height):oe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const J=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<J.length;Q++){const se=J[Q],xe=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),me=F(se.internalFormat,xe,fe,se.colorSpace),C=ee(_);U&&oe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,me,_.width,_.height):oe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function P(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const J=i.get(_.depthTexture).__webglTexture,Q=ee(_);if(_.depthTexture.format===mi)oe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(_.depthTexture.format===er)oe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function N(M){const _=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");P(_.__webglFramebuffer,M)}else if(U){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]=n.createRenderbuffer(),g(_.__webglDepthbuffer[J],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),g(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(M,_,U){const J=i.get(M);_!==void 0&&Fe(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&N(M)}function z(M){const _=M.texture,U=i.get(M),J=i.get(_);M.addEventListener("dispose",le),M.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=_.version,a.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,se=M.isWebGLMultipleRenderTargets===!0,xe=T(M)||o;if(Q){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let me=0;me<_.mipmaps.length;me++)U.__webglFramebuffer[fe][me]=n.createFramebuffer()}else U.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)U.__webglFramebuffer[fe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const fe=M.texture;for(let me=0,C=fe.length;me<C;me++){const de=i.get(fe[me]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&oe(M)===!1){const fe=se?_:[_];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<fe.length;me++){const C=fe[me];U.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[me]);const de=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),Ae=F(C.internalFormat,de,ce,C.colorSpace,M.isXRRenderTarget===!0),ye=ee(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,U.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),g(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,_,xe);for(let fe=0;fe<6;fe++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Fe(U.__webglFramebuffer[fe][me],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Fe(U.__webglFramebuffer[fe],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);L(_,xe)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const fe=M.texture;for(let me=0,C=fe.length;me<C;me++){const de=fe[me],ce=i.get(de);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Oe(n.TEXTURE_2D,de,xe),Fe(U.__webglFramebuffer,M,de,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),L(de,xe)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?fe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,J.__webglTexture),Oe(fe,_,xe),o&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Fe(U.__webglFramebuffer[me],M,_,n.COLOR_ATTACHMENT0,fe,me);else Fe(U.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,fe,0);L(_,xe)&&R(fe),t.unbindTexture()}M.depthBuffer&&N(M)}function $(M){const _=T(M)||o,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0,Q=U.length;J<Q;J++){const se=U[J];if(L(se,_)){const xe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(se).__webglTexture;t.bindTexture(xe,fe),R(xe),t.unbindTexture()}}}function re(M){if(o&&M.samples>0&&oe(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,J=M.height;let Q=n.COLOR_BUFFER_BIT;const se=[],xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(M),me=M.isWebGLMultipleRenderTargets===!0;if(me)for(let C=0;C<_.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let C=0;C<_.length;C++){se.push(n.COLOR_ATTACHMENT0+C),M.depthBuffer&&se.push(xe);const de=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(de===!1&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[C]),de===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),me){const ce=i.get(_[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,U,J,0,0,U,J,Q,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let C=0;C<_.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,fe.__webglColorRenderbuffer[C]);const de=i.get(_[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ee(M){return Math.min(f,M.samples)}function oe(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(M){const _=a.render.frame;x.get(M)!==_&&(x.set(M,_),M.update())}function Ee(M,_){const U=M.colorSpace,J=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ra||U!==Nn&&U!==jt&&(Qe.getTransfer(U)===rt?o===!1?e.has("EXT_sRGB")===!0&&J===tn?(M.format=ra,M.minFilter=qt,M.generateMipmaps=!1):_=yf.sRGBToLinear(_):(J!==tn||Q!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=ne,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=ve,this.rebindTextures=G,this.setupRenderTarget=z,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=oe}function xx(n,e,t){const i=t.isWebGL2;function r(s,a=jt){let o;const l=Qe.getTransfer(a);if(s===Jn)return n.UNSIGNED_BYTE;if(s===gf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===_f)return n.UNSIGNED_SHORT_5_5_5_1;if(s===em)return n.BYTE;if(s===tm)return n.SHORT;if(s===Da)return n.UNSIGNED_SHORT;if(s===mf)return n.INT;if(s===qn)return n.UNSIGNED_INT;if(s===Yn)return n.FLOAT;if(s===Cr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===nm)return n.ALPHA;if(s===tn)return n.RGBA;if(s===im)return n.LUMINANCE;if(s===rm)return n.LUMINANCE_ALPHA;if(s===mi)return n.DEPTH_COMPONENT;if(s===er)return n.DEPTH_STENCIL;if(s===ra)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sm)return n.RED;if(s===vf)return n.RED_INTEGER;if(s===om)return n.RG;if(s===xf)return n.RG_INTEGER;if(s===Mf)return n.RGBA_INTEGER;if(s===ao||s===lo||s===co||s===uo)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wl||s===Rl||s===Cl||s===Pl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===am)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ll||s===Dl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ll)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Dl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ul||s===Il||s===Nl||s===Ol||s===Fl||s===Bl||s===Hl||s===zl||s===Gl||s===Vl||s===kl||s===Wl||s===Xl||s===ql)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ul)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Il)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ol)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xl)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fo||s===Yl||s===jl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===fo)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lm||s===Kl||s===$l||s===Zl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===fo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Kl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Mx extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ex extends kt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mi&&(i=qn),i===void 0&&u===er&&(i=pi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yx extends Si{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const v=t.getContextAttributes();let p=null,d=null;const A=[],E=[],T=new Yt;T.layers.enable(1),T.viewport=new _t;const w=new Yt;w.layers.enable(2),w.viewport=new _t;const L=[T,w],R=new Mx;R.layers.enable(1),R.layers.enable(2);let F=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=A[O];return k===void 0&&(k=new Oo,A[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=A[O];return k===void 0&&(k=new Oo,A[O]=k),k.getGripSpace()},this.getHand=function(O){let k=A[O];return k===void 0&&(k=new Oo,A[O]=k),k.getHandSpace()};function b(O){const k=E.indexOf(O.inputSource);if(k===-1)return;const ve=A[k];ve!==void 0&&(ve.update(O.inputSource,O.frame,c||a),ve.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",le);for(let O=0;O<A.length;O++){const k=E[O];k!==null&&(E[O]=null,A[O].disconnect(k))}F=null,S=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:m}),d=new _i(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,ve=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?er:mi,ve=v.stencil?pi:qn);const Se={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),d=new _i(h.textureWidth,h.textureHeight,{format:tn,type:Jn,depthTexture:new Ex(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function le(O){for(let k=0;k<O.removed.length;k++){const ve=O.removed[k],Me=E.indexOf(ve);Me>=0&&(E[Me]=null,A[Me].disconnect(ve))}for(let k=0;k<O.added.length;k++){const ve=O.added[k];let Me=E.indexOf(ve);if(Me===-1){for(let Re=0;Re<A.length;Re++)if(Re>=E.length){E.push(ve),Me=Re;break}else if(E[Re]===null){E[Re]=ve,Me=Re;break}if(Me===-1)break}const Se=A[Me];Se&&Se.connect(ve)}}const ue=new B,I=new B;function X(O,k,ve){ue.setFromMatrixPosition(k.matrixWorld),I.setFromMatrixPosition(ve.matrixWorld);const Me=ue.distanceTo(I),Se=k.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),Le=Se[14]/(Se[10]+1),Ue=(Se[9]+1)/Se[5],$e=(Se[9]-1)/Se[5],Fe=(Se[8]-1)/Se[0],g=(Re[8]+1)/Re[0],P=Oe*Fe,N=Oe*g,G=Me/(-Fe+g),z=G*-Fe;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(z),O.translateZ(G),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const $=Oe+G,re=Le+G,ee=P-z,oe=N+(Me-z),te=Ue*Le/re*$,Ee=$e*Le/re*$;O.projectionMatrix.makePerspective(ee,oe,te,Ee,$,re),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function K(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;R.near=w.near=T.near=O.near,R.far=w.far=T.far=O.far,(F!==R.near||S!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,S=R.far);const k=O.parent,ve=R.cameras;K(R,k);for(let Me=0;Me<ve.length;Me++)K(ve[Me],k);ve.length===2?X(R,T,w):R.projectionMatrix.copy(T.projectionMatrix),V(O,R,k)};function V(O,k,ve){ve===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(ve.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=sa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let ne=null;function ie(O,k){if(u=k.getViewerPose(c||a),x=k,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Me=!1;ve.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let Se=0;Se<ve.length;Se++){const Re=ve[Se];let Oe=null;if(m!==null)Oe=m.getViewport(Re);else{const Ue=f.getViewSubImage(h,Re);Oe=Ue.viewport,Se===0&&(e.setRenderTargetTextures(d,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(d))}let Le=L[Se];Le===void 0&&(Le=new Yt,Le.layers.enable(Se),Le.viewport=new _t,L[Se]=Le),Le.matrix.fromArray(Re.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Re.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Se===0&&(R.matrix.copy(Le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(Le)}}for(let ve=0;ve<A.length;ve++){const Me=E[ve],Se=A[ve];Me!==null&&Se!==void 0&&Se.update(Me,k,c||a)}ne&&ne(O,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),x=null}const ae=new If;ae.setAnimationLoop(ie),this.setAnimationLoop=function(O){ne=O},this.dispose=function(){}}}function Tx(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Lf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,E,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,A,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ft&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ft&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,E){const T=E.program;i.uniformBlockBinding(A,T)}function c(A,E){let T=r[A.id];T===void 0&&(x(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(A,w);const L=e.render.frame;s[A.id]!==L&&(h(A),s[A.id]=L)}function u(A){const E=f();A.__bindingPointIndex=E;const T=n.createBuffer(),w=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=r[A.id],T=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,R=T.length;L<R;L++){const F=T[L];if(m(F,L,w)===!0){const S=F.__offset,b=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let le=0;le<b.length;le++){const ue=b[le],I=v(ue);typeof ue=="number"?(F.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,S+Y,F.__data)):ue.isMatrix3?(F.__data[0]=ue.elements[0],F.__data[1]=ue.elements[1],F.__data[2]=ue.elements[2],F.__data[3]=ue.elements[0],F.__data[4]=ue.elements[3],F.__data[5]=ue.elements[4],F.__data[6]=ue.elements[5],F.__data[7]=ue.elements[0],F.__data[8]=ue.elements[6],F.__data[9]=ue.elements[7],F.__data[10]=ue.elements[8],F.__data[11]=ue.elements[0]):(ue.toArray(F.__data,Y),Y+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,E,T){const w=A.value;if(T[E]===void 0){if(typeof w=="number")T[E]=w;else{const L=Array.isArray(w)?w:[w],R=[];for(let F=0;F<L.length;F++)R.push(L[F].clone());T[E]=R}return!0}else if(typeof w=="number"){if(T[E]!==w)return T[E]=w,!0}else{const L=Array.isArray(T[E])?T[E]:[T[E]],R=Array.isArray(w)?w:[w];for(let F=0;F<L.length;F++){const S=L[F];if(S.equals(R[F])===!1)return S.copy(R[F]),!0}}return!1}function x(A){const E=A.uniforms;let T=0;const w=16;let L=0;for(let R=0,F=E.length;R<F;R++){const S=E[R],b={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let le=0,ue=Y.length;le<ue;le++){const I=Y[le],X=v(I);b.boundary+=X.boundary,b.storage+=X.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,R>0){L=T%w;const le=w-L;L!==0&&le-b.boundary<0&&(T+=w-L,S.__offset=T)}T+=b.storage}return L=T%w,L>0&&(T+=w-L),A.__size=T,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function p(A){const E=A.target;E.removeEventListener("dispose",p);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class zf{constructor(e={}){const{canvas:t=ym(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const E=this;let T=!1,w=0,L=0,R=null,F=-1,S=null;const b=new _t,Y=new _t;let le=null;const ue=new Ke(0);let I=0,X=t.width,K=t.height,V=1,ne=null,ie=null;const ae=new _t(0,0,X,K),O=new _t(0,0,X,K);let k=!1;const ve=new Ia;let Me=!1,Se=!1,Re=null;const Oe=new lt,Le=new ke,Ue=new B,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return R===null?V:1}let g=i;function P(y,H){for(let W=0;W<y.length;W++){const q=y[W],j=t.getContext(q,H);if(j!==null)return j}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ge,!1),g===null){const H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),g=P(H,y),g===null)throw P(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let N,G,z,$,re,ee,oe,te,Ee,M,_,U,J,Q,se,xe,fe,me,C,de,ce,Ae,ye,Ce;function we(){N=new Nv(g),G=new Cv(g,N,e),N.init(G),Ae=new xx(g,N,G),z=new _x(g,N,G),$=new Bv(g),re=new ix,ee=new vx(g,N,z,re,G,Ae,$),oe=new Lv(E),te=new Iv(E),Ee=new jm(g,G),ye=new wv(g,N,Ee,G),M=new Ov(g,Ee,$,ye),_=new Vv(g,M,Ee,$),C=new Gv(g,G,ee),xe=new Pv(re),U=new nx(E,oe,te,N,G,ye,xe),J=new Tx(E,re),Q=new sx,se=new fx(N,G),me=new Av(E,oe,te,z,_,h,l),fe=new gx(E,_,G),Ce=new bx(g,$,G,z),de=new Rv(g,N,$,G),ce=new Fv(g,N,$,G),$.programs=U.programs,E.capabilities=G,E.extensions=N,E.properties=re,E.renderLists=Q,E.shadowMap=fe,E.state=z,E.info=$}we();const be=new yx(E,g);this.xr=be,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const y=N.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=N.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,H,W=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=H,t.width=Math.floor(y*V),t.height=Math.floor(H*V),W===!0&&(t.style.width=y+"px",t.style.height=H+"px"),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(X*V,K*V).floor()},this.setDrawingBufferSize=function(y,H,W){X=y,K=H,V=W,t.width=Math.floor(y*W),t.height=Math.floor(H*W),this.setViewport(0,0,y,H)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,H,W,q){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,H,W,q),z.viewport(b.copy(ae).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy(O)},this.setScissor=function(y,H,W,q){y.isVector4?O.set(y.x,y.y,y.z,y.w):O.set(y,H,W,q),z.scissor(Y.copy(O).multiplyScalar(V).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(y){z.setScissorTest(k=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){ie=y},this.getClearColor=function(y){return y.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(y=!0,H=!0,W=!0){let q=0;if(y){let j=!1;if(R!==null){const Te=R.texture.format;j=Te===Mf||Te===xf||Te===vf}if(j){const Te=R.texture.type,Pe=Te===Jn||Te===qn||Te===Da||Te===pi||Te===gf||Te===_f,Ie=me.getClearColor(),Ne=me.getClearAlpha(),We=Ie.r,He=Ie.g,ze=Ie.b;Pe?(m[0]=We,m[1]=He,m[2]=ze,m[3]=Ne,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=We,x[1]=He,x[2]=ze,x[3]=Ne,g.clearBufferiv(g.COLOR,0,x))}else q|=g.COLOR_BUFFER_BIT}H&&(q|=g.DEPTH_BUFFER_BIT),W&&(q|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Q.dispose(),se.dispose(),re.dispose(),oe.dispose(),te.dispose(),_.dispose(),ye.dispose(),Ce.dispose(),U.dispose(),be.dispose(),be.removeEventListener("sessionstart",Wt),be.removeEventListener("sessionend",tt),Re&&(Re.dispose(),Re=null),bt.stop()};function qe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=$.autoReset,H=fe.enabled,W=fe.autoUpdate,q=fe.needsUpdate,j=fe.type;we(),$.autoReset=y,fe.enabled=H,fe.autoUpdate=W,fe.needsUpdate=q,fe.type=j}function ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function he(y){const H=y.target;H.removeEventListener("dispose",he),Z(H)}function Z(y){pe(y),re.remove(y)}function pe(y){const H=re.get(y).programs;H!==void 0&&(H.forEach(function(W){U.releaseProgram(W)}),y.isShaderMaterial&&U.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,W,q,j,Te){H===null&&(H=$e);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Xf(y,H,W,q,j);z.setMaterial(q,Pe);let Ne=W.index,We=1;if(q.wireframe===!0){if(Ne=M.getWireframeAttribute(W),Ne===void 0)return;We=2}const He=W.drawRange,ze=W.attributes.position;let at=He.start*We,Bt=(He.start+He.count)*We;Te!==null&&(at=Math.max(at,Te.start*We),Bt=Math.min(Bt,(Te.start+Te.count)*We)),Ne!==null?(at=Math.max(at,0),Bt=Math.min(Bt,Ne.count)):ze!=null&&(at=Math.max(at,0),Bt=Math.min(Bt,ze.count));const mt=Bt-at;if(mt<0||mt===1/0)return;ye.setup(j,q,Ie,W,Ne);let vn,ot=de;if(Ne!==null&&(vn=Ee.get(Ne),ot=ce,ot.setIndex(vn)),j.isMesh)q.wireframe===!0?(z.setLineWidth(q.wireframeLinewidth*Fe()),ot.setMode(g.LINES)):ot.setMode(g.TRIANGLES);else if(j.isLine){let je=q.linewidth;je===void 0&&(je=1),z.setLineWidth(je*Fe()),j.isLineSegments?ot.setMode(g.LINES):j.isLineLoop?ot.setMode(g.LINE_LOOP):ot.setMode(g.LINE_STRIP)}else j.isPoints?ot.setMode(g.POINTS):j.isSprite&&ot.setMode(g.TRIANGLES);if(j.isInstancedMesh)ot.renderInstances(at,mt,j.count);else if(W.isInstancedBufferGeometry){const je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ws=Math.min(W.instanceCount,je);ot.renderInstances(at,mt,Ws)}else ot.render(at,mt)};function De(y,H,W){y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=Ft,y.needsUpdate=!0,Br(y,H,W),y.side=ei,y.needsUpdate=!0,Br(y,H,W),y.side=Pn):Br(y,H,W)}this.compile=function(y,H,W=null){W===null&&(W=y),p=se.get(W),p.init(),A.push(p),W.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),y!==W&&y.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(E._useLegacyLights);const q=new Set;return y.traverse(function(j){const Te=j.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ie=Te[Pe];De(Ie,W,j),q.add(Ie)}else De(Te,W,j),q.add(Te)}),A.pop(),p=null,q},this.compileAsync=function(y,H,W=null){const q=this.compile(y,H,W);return new Promise(j=>{function Te(){if(q.forEach(function(Pe){re.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){j(y);return}setTimeout(Te,10)}N.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ye=null;function ct(y){Ye&&Ye(y)}function Wt(){bt.stop()}function tt(){bt.start()}const bt=new If;bt.setAnimationLoop(ct),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(y){Ye=y,be.setAnimationLoop(y),y===null?bt.stop():bt.start()},be.addEventListener("sessionstart",Wt),be.addEventListener("sessionend",tt),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(H),H=be.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,H,R),p=se.get(y,A.length),p.init(),A.push(p),Oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ve.setFromProjectionMatrix(Oe),Se=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,Se),v=Q.get(y,d.length),v.init(),d.push(v),on(y,H,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(ne,ie),this.info.render.frame++,Me===!0&&xe.beginShadows();const W=p.state.shadowsArray;if(fe.render(W,y,H),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(v,y),p.setupLights(E._useLegacyLights),H.isArrayCamera){const q=H.cameras;for(let j=0,Te=q.length;j<Te;j++){const Pe=q[j];Ba(v,y,Pe,Pe.viewport)}}else Ba(v,y,H);R!==null&&(ee.updateMultisampleRenderTarget(R),ee.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(E,y,H),ye.resetDefaultState(),F=-1,S=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function on(y,H,W,q){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ve.intersectsSprite(y)){q&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const Pe=_.update(y),Ie=y.material;Ie.visible&&v.push(y,Pe,Ie,W,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ve.intersectsObject(y))){const Pe=_.update(y),Ie=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ue.copy(Pe.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ie)){const Ne=Pe.groups;for(let We=0,He=Ne.length;We<He;We++){const ze=Ne[We],at=Ie[ze.materialIndex];at&&at.visible&&v.push(y,Pe,at,W,Ue.z,ze)}}else Ie.visible&&v.push(y,Pe,Ie,W,Ue.z,null)}}const Te=y.children;for(let Pe=0,Ie=Te.length;Pe<Ie;Pe++)on(Te[Pe],H,W,q)}function Ba(y,H,W,q){const j=y.opaque,Te=y.transmissive,Pe=y.transparent;p.setupLightsView(W),Me===!0&&xe.setGlobalState(E.clippingPlanes,W),Te.length>0&&Wf(j,Te,H,W),q&&z.viewport(b.copy(q)),j.length>0&&Fr(j,H,W),Te.length>0&&Fr(Te,H,W),Pe.length>0&&Fr(Pe,H,W),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Wf(y,H,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Te=G.isWebGL2;Re===null&&(Re=new _i(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Cr:Jn,minFilter:Rr,samples:Te?4:0})),E.getDrawingBufferSize(Le),Te?Re.setSize(Le.x,Le.y):Re.setSize(oa(Le.x),oa(Le.y));const Pe=E.getRenderTarget();E.setRenderTarget(Re),E.getClearColor(ue),I=E.getClearAlpha(),I<1&&E.setClearColor(16777215,.5),E.clear();const Ie=E.toneMapping;E.toneMapping=Zn,Fr(y,W,q),ee.updateMultisampleRenderTarget(Re),ee.updateRenderTargetMipmap(Re);let Ne=!1;for(let We=0,He=H.length;We<He;We++){const ze=H[We],at=ze.object,Bt=ze.geometry,mt=ze.material,vn=ze.group;if(mt.side===Pn&&at.layers.test(q.layers)){const ot=mt.side;mt.side=Ft,mt.needsUpdate=!0,Ha(at,W,q,Bt,mt,vn),mt.side=ot,mt.needsUpdate=!0,Ne=!0}}Ne===!0&&(ee.updateMultisampleRenderTarget(Re),ee.updateRenderTargetMipmap(Re)),E.setRenderTarget(Pe),E.setClearColor(ue,I),E.toneMapping=Ie}function Fr(y,H,W){const q=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Te=y.length;j<Te;j++){const Pe=y[j],Ie=Pe.object,Ne=Pe.geometry,We=q===null?Pe.material:q,He=Pe.group;Ie.layers.test(W.layers)&&Ha(Ie,H,W,Ne,We,He)}}function Ha(y,H,W,q,j,Te){y.onBeforeRender(E,H,W,q,j,Te),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(E,H,W,q,y,Te),j.transparent===!0&&j.side===Pn&&j.forceSinglePass===!1?(j.side=Ft,j.needsUpdate=!0,E.renderBufferDirect(W,H,q,j,y,Te),j.side=ei,j.needsUpdate=!0,E.renderBufferDirect(W,H,q,j,y,Te),j.side=Pn):E.renderBufferDirect(W,H,q,j,y,Te),y.onAfterRender(E,H,W,q,j,Te)}function Br(y,H,W){H.isScene!==!0&&(H=$e);const q=re.get(y),j=p.state.lights,Te=p.state.shadowsArray,Pe=j.state.version,Ie=U.getParameters(y,j.state,Te,H,W),Ne=U.getProgramCacheKey(Ie);let We=q.programs;q.environment=y.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(y.isMeshStandardMaterial?te:oe).get(y.envMap||q.environment),We===void 0&&(y.addEventListener("dispose",he),We=new Map,q.programs=We);let He=We.get(Ne);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Pe)return Ga(y,Ie),He}else Ie.uniforms=U.getUniforms(y),y.onBuild(W,Ie,E),y.onBeforeCompile(Ie,E),He=U.acquireProgram(Ie,Ne),We.set(Ne,He),q.uniforms=Ie.uniforms;const ze=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=xe.uniform),Ga(y,Ie),q.needsLights=Yf(y),q.lightsStateVersion=Pe,q.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function za(y){if(y.uniformsList===null){const H=y.currentProgram.getUniforms();y.uniformsList=xs.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function Ga(y,H){const W=re.get(y);W.outputColorSpace=H.outputColorSpace,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function Xf(y,H,W,q,j){H.isScene!==!0&&(H=$e),ee.resetTextureUnits();const Te=H.fog,Pe=q.isMeshStandardMaterial?H.environment:null,Ie=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nn,Ne=(q.isMeshStandardMaterial?te:oe).get(q.envMap||Pe),We=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Bt=!!W.morphAttributes.color;let mt=Zn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=E.toneMapping);const vn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=vn!==void 0?vn.length:0,je=re.get(q),Ws=p.state.lights;if(Me===!0&&(Se===!0||y!==S)){const Ht=y===S&&q.id===F;xe.setState(q,y,Ht)}let ut=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ws.state.version||je.outputColorSpace!==Ie||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==Ne||q.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==He||je.morphTargets!==ze||je.morphNormals!==at||je.morphColors!==Bt||je.toneMapping!==mt||G.isWebGL2===!0&&je.morphTargetsCount!==ot)&&(ut=!0):(ut=!0,je.__version=q.version);let ti=je.currentProgram;ut===!0&&(ti=Br(q,H,j));let Va=!1,rr=!1,Xs=!1;const At=ti.getUniforms(),ni=je.uniforms;if(z.useProgram(ti.program)&&(Va=!0,rr=!0,Xs=!0),q.id!==F&&(F=q.id,rr=!0),Va||S!==y){At.setValue(g,"projectionMatrix",y.projectionMatrix),At.setValue(g,"viewMatrix",y.matrixWorldInverse);const Ht=At.map.cameraPosition;Ht!==void 0&&Ht.setValue(g,Ue.setFromMatrixPosition(y.matrixWorld)),G.logarithmicDepthBuffer&&At.setValue(g,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(g,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,rr=!0,Xs=!0)}if(j.isSkinnedMesh){At.setOptional(g,j,"bindMatrix"),At.setOptional(g,j,"bindMatrixInverse");const Ht=j.skeleton;Ht&&(G.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),At.setValue(g,"boneTexture",Ht.boneTexture,ee),At.setValue(g,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=W.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&G.isWebGL2===!0)&&C.update(j,W,ti),(rr||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,At.setValue(g,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ni.envMap.value=Ne,ni.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),rr&&(At.setValue(g,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&qf(ni,Xs),Te&&q.fog===!0&&J.refreshFogUniforms(ni,Te),J.refreshMaterialUniforms(ni,q,V,K,Re),xs.upload(g,za(je),ni,ee)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(xs.upload(g,za(je),ni,ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(g,"center",j.center),At.setValue(g,"modelViewMatrix",j.modelViewMatrix),At.setValue(g,"normalMatrix",j.normalMatrix),At.setValue(g,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let Ys=0,jf=Ht.length;Ys<jf;Ys++)if(G.isWebGL2){const ka=Ht[Ys];Ce.update(ka,ti),Ce.bind(ka,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function qf(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function Yf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,H,W){re.get(y.texture).__webglTexture=H,re.get(y.depthTexture).__webglTexture=W;const q=re.get(y);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,H){const W=re.get(y);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,W=0){R=y,w=H,L=W;let q=!0,j=null,Te=!1,Pe=!1;if(y){const Ne=re.get(y);Ne.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(g.FRAMEBUFFER,null),q=!1):Ne.__webglFramebuffer===void 0?ee.setupRenderTarget(y):Ne.__hasExternalTextures&&ee.rebindTextures(y,re.get(y.texture).__webglTexture,re.get(y.depthTexture).__webglTexture);const We=y.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const He=re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[H])?j=He[H][W]:j=He[H],Te=!0):G.isWebGL2&&y.samples>0&&ee.useMultisampledRTT(y)===!1?j=re.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?j=He[W]:j=He,b.copy(y.viewport),Y.copy(y.scissor),le=y.scissorTest}else b.copy(ae).multiplyScalar(V).floor(),Y.copy(O).multiplyScalar(V).floor(),le=k;if(z.bindFramebuffer(g.FRAMEBUFFER,j)&&G.drawBuffers&&q&&z.drawBuffers(y,j),z.viewport(b),z.scissor(Y),z.setScissorTest(le),Te){const Ne=re.get(y.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,W)}else if(Pe){const Ne=re.get(y.texture),We=H||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,We)}F=-1},this.readRenderTargetPixels=function(y,H,W,q,j,Te,Pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){z.bindFramebuffer(g.FRAMEBUFFER,Ie);try{const Ne=y.texture,We=Ne.format,He=Ne.type;if(We!==tn&&Ae.convert(We)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=He===Cr&&(N.has("EXT_color_buffer_half_float")||G.isWebGL2&&N.has("EXT_color_buffer_float"));if(He!==Jn&&Ae.convert(He)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Yn&&(G.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-q&&W>=0&&W<=y.height-j&&g.readPixels(H,W,q,j,Ae.convert(We),Ae.convert(He),Te)}finally{const Ne=R!==null?re.get(R).__webglFramebuffer:null;z.bindFramebuffer(g.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(y,H,W=0){const q=Math.pow(2,-W),j=Math.floor(H.image.width*q),Te=Math.floor(H.image.height*q);ee.setTexture2D(H,0),g.copyTexSubImage2D(g.TEXTURE_2D,W,0,0,y.x,y.y,j,Te),z.unbindTexture()},this.copyTextureToTexture=function(y,H,W,q=0){const j=H.image.width,Te=H.image.height,Pe=Ae.convert(W.format),Ie=Ae.convert(W.type);ee.setTexture2D(W,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment),H.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,q,y.x,y.y,j,Te,Pe,Ie,H.image.data):H.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,q,y.x,y.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,q,y.x,y.y,Pe,Ie,H.image),q===0&&W.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(y,H,W,q,j=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=y.max.x-y.min.x+1,Pe=y.max.y-y.min.y+1,Ie=y.max.z-y.min.z+1,Ne=Ae.convert(q.format),We=Ae.convert(q.type);let He;if(q.isData3DTexture)ee.setTexture3D(q,0),He=g.TEXTURE_3D;else if(q.isDataArrayTexture)ee.setTexture2DArray(q,0),He=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const ze=g.getParameter(g.UNPACK_ROW_LENGTH),at=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Bt=g.getParameter(g.UNPACK_SKIP_PIXELS),mt=g.getParameter(g.UNPACK_SKIP_ROWS),vn=g.getParameter(g.UNPACK_SKIP_IMAGES),ot=W.isCompressedTexture?W.mipmaps[0]:W.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,y.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,y.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?g.texSubImage3D(He,j,H.x,H.y,H.z,Te,Pe,Ie,Ne,We,ot.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(He,j,H.x,H.y,H.z,Te,Pe,Ie,Ne,ot.data)):g.texSubImage3D(He,j,H.x,H.y,H.z,Te,Pe,Ie,Ne,We,ot),g.pixelStorei(g.UNPACK_ROW_LENGTH,ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,at),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(g.UNPACK_SKIP_ROWS,mt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,vn),j===0&&q.generateMipmaps&&g.generateMipmap(He),z.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ee.setTextureCube(y,0):y.isData3DTexture?ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ee.setTexture2DArray(y,0):ee.setTexture2D(y,0),z.unbindTexture()},this.resetState=function(){w=0,L=0,R=null,z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ua?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===zs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?gi:Sf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gi?xt:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ax extends zf{}Ax.prototype.isWebGL1Renderer=!0;class wx extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fa extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new B,Gc=new B,Vc=new lt,Fo=new Gs,fs=new Nr;class Rx extends vt{constructor(e=new Kt,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zc.fromBufferAttribute(t,r-1),Gc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zc.distanceTo(Gc);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,e.ray.intersectsSphere(fs)===!1)return;Vc.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(Vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,u=new B,f=new B,h=new B,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const d=Math.max(0,a.start),A=Math.min(x.count,a.start+a.count);for(let E=d,T=A-1;E<T;E+=m){const w=x.getX(E),L=x.getX(E+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,L),Fo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),A=Math.min(p.count,a.start+a.count);for(let E=d,T=A-1;E<T;E+=m){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),Fo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const kc=new B,Wc=new B;class Gf extends Rx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kc.fromBufferAttribute(t,r),Wc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kc.distanceTo(Wc);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vf extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xc=new lt,la=new Gs,hs=new Nr,ds=new B;class Cx extends vt{constructor(e=new Kt,t=new Vf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,e.ray.intersectsSphere(hs)===!1)return;Xc.copy(r).invert(),la.copy(e.ray).applyMatrix4(Xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=h,v=m;x<v;x++){const p=c.getX(x);ds.fromBufferAttribute(f,p),qc(ds,p,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=h,v=m;x<v;x++)ds.fromBufferAttribute(f,x),qc(ds,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qc(n,e,t,i,r,s,a){const o=la.distanceSqToPoint(n);if(o<t){const l=new B;la.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class kf extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bo=new lt,Yc=new B,jc=new B;class Px{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lx extends Px{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dx extends kf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Lx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ux extends kf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ix extends Gf{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ke(i),r=new Ke(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,m=0,x=-o;h<=t;h++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=h===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Kt;u.setAttribute("position",new Ut(l,3)),u.setAttribute("color",new Ut(c,3));const f=new Fa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nx extends Gf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Kt;r.setAttribute("position",new Ut(t,3)),r.setAttribute("color",new Ut(i,3));const s=new Fa({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);const $c={type:"change"},Ho={type:"start"},Zc={type:"end"},ps=new Gs,Jc=new Wn,Ox=Math.cos(70*Em.DEG2RAD);class Fx extends Si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",_),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($c),i.update(),s=r.NONE},this.update=function(){const C=new B,de=new vi().setFromUnitVectors(e.up,new B(0,1,0)),ce=de.clone().invert(),Ae=new B,ye=new vi,Ce=new B,we=2*Math.PI;return function(qe=null){const D=i.object.position;C.copy(D).sub(i.target),C.applyQuaternion(de),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&Y(S(qe)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ge=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(ge)&&isFinite(he)&&(ge<-Math.PI?ge+=we:ge>Math.PI&&(ge-=we),he<-Math.PI?he+=we:he>Math.PI&&(he-=we),ge<=he?o.theta=Math.max(ge,Math.min(he,o.theta)):o.theta=o.theta>(ge+he)/2?Math.max(ge,o.theta):Math.min(he,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&L||i.object.isOrthographicCamera?o.radius=ie(o.radius):o.radius=ie(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(ce),D.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Z=!1;if(i.zoomToCursor&&L){let pe=null;if(i.object.isPerspectiveCamera){const De=C.length();pe=ie(De*c);const Ye=De-pe;i.object.position.addScaledVector(T,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const De=new B(w.x,w.y,0);De.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0;const Ye=new B(w.x,w.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(De),i.object.updateMatrixWorld(),pe=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;pe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(pe).add(i.object.position):(ps.origin.copy(i.object.position),ps.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ps.direction))<Ox?e.lookAt(i.target):(Jc.setFromNormalAndCoplanarPoint(i.object.up,i.target),ps.intersectPlane(Jc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Z=!0);return c=1,L=!1,Z||Ae.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a||Ce.distanceToSquared(i.target)>0?(i.dispatchEvent($c),Ae.copy(i.object.position),ye.copy(i.object.quaternion),Ce.copy(i.target),Z=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",re),i.domElement.removeEventListener("pointercancel",oe),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",oe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Kc,l=new Kc;let c=1;const u=new B,f=new ke,h=new ke,m=new ke,x=new ke,v=new ke,p=new ke,d=new ke,A=new ke,E=new ke,T=new B,w=new ke;let L=!1;const R=[],F={};function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function Y(C){l.theta-=C}function le(C){l.phi-=C}const ue=function(){const C=new B;return function(ce,Ae){C.setFromMatrixColumn(Ae,0),C.multiplyScalar(-ce),u.add(C)}}(),I=function(){const C=new B;return function(ce,Ae){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ae,1):(C.setFromMatrixColumn(Ae,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ce),u.add(C)}}(),X=function(){const C=new B;return function(ce,Ae){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;C.copy(Ce).sub(i.target);let we=C.length();we*=Math.tan(i.object.fov/2*Math.PI/180),ue(2*ce*we/ye.clientHeight,i.object.matrix),I(2*Ae*we/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ue(ce*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),I(Ae*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(C){if(!i.zoomToCursor)return;L=!0;const de=i.domElement.getBoundingClientRect(),ce=C.clientX-de.left,Ae=C.clientY-de.top,ye=de.width,Ce=de.height;w.x=ce/ye*2-1,w.y=-(Ae/Ce)*2+1,T.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function ie(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function ae(C){f.set(C.clientX,C.clientY)}function O(C){ne(C),d.set(C.clientX,C.clientY)}function k(C){x.set(C.clientX,C.clientY)}function ve(C){h.set(C.clientX,C.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const de=i.domElement;Y(2*Math.PI*m.x/de.clientHeight),le(2*Math.PI*m.y/de.clientHeight),f.copy(h),i.update()}function Me(C){A.set(C.clientX,C.clientY),E.subVectors(A,d),E.y>0?K(b()):E.y<0&&V(b()),d.copy(A),i.update()}function Se(C){v.set(C.clientX,C.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),X(p.x,p.y),x.copy(v),i.update()}function Re(C){ne(C),C.deltaY<0?V(b()):C.deltaY>0&&K(b()),i.update()}function Oe(C){let de=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),de=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),de=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),de=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),de=!0;break}de&&(C.preventDefault(),i.update())}function Le(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),de=.5*(R[0].pageY+R[1].pageY);f.set(C,de)}}function Ue(){if(R.length===1)x.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),de=.5*(R[0].pageY+R[1].pageY);x.set(C,de)}}function $e(){const C=R[0].pageX-R[1].pageX,de=R[0].pageY-R[1].pageY,ce=Math.sqrt(C*C+de*de);d.set(0,ce)}function Fe(){i.enableZoom&&$e(),i.enablePan&&Ue()}function g(){i.enableZoom&&$e(),i.enableRotate&&Le()}function P(C){if(R.length==1)h.set(C.pageX,C.pageY);else{const ce=me(C),Ae=.5*(C.pageX+ce.x),ye=.5*(C.pageY+ce.y);h.set(Ae,ye)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const de=i.domElement;Y(2*Math.PI*m.x/de.clientHeight),le(2*Math.PI*m.y/de.clientHeight),f.copy(h)}function N(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const de=me(C),ce=.5*(C.pageX+de.x),Ae=.5*(C.pageY+de.y);v.set(ce,Ae)}p.subVectors(v,x).multiplyScalar(i.panSpeed),X(p.x,p.y),x.copy(v)}function G(C){const de=me(C),ce=C.pageX-de.x,Ae=C.pageY-de.y,ye=Math.sqrt(ce*ce+Ae*Ae);A.set(0,ye),E.set(0,Math.pow(A.y/d.y,i.zoomSpeed)),K(E.y),d.copy(A)}function z(C){i.enableZoom&&G(C),i.enablePan&&N(C)}function $(C){i.enableZoom&&G(C),i.enableRotate&&P(C)}function re(C){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",ee),i.domElement.addEventListener("pointerup",oe)),se(C),C.pointerType==="touch"?U(C):te(C))}function ee(C){i.enabled!==!1&&(C.pointerType==="touch"?J(C):Ee(C))}function oe(C){xe(C),R.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",oe)),i.dispatchEvent(Zc),s=r.NONE}function te(C){let de;switch(C.button){case 0:de=i.mouseButtons.LEFT;break;case 1:de=i.mouseButtons.MIDDLE;break;case 2:de=i.mouseButtons.RIGHT;break;default:de=-1}switch(de){case yi.DOLLY:if(i.enableZoom===!1)return;O(C),s=r.DOLLY;break;case yi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;k(C),s=r.PAN}else{if(i.enableRotate===!1)return;ae(C),s=r.ROTATE}break;case yi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;ae(C),s=r.ROTATE}else{if(i.enablePan===!1)return;k(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ho)}function Ee(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ve(C);break;case r.DOLLY:if(i.enableZoom===!1)return;Me(C);break;case r.PAN:if(i.enablePan===!1)return;Se(C);break}}function M(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ho),Re(C),i.dispatchEvent(Zc))}function _(C){i.enabled===!1||i.enablePan===!1||Oe(C)}function U(C){switch(fe(C),R.length){case 1:switch(i.touches.ONE){case Ti.ROTATE:if(i.enableRotate===!1)return;Le(),s=r.TOUCH_ROTATE;break;case Ti.PAN:if(i.enablePan===!1)return;Ue(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ti.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),s=r.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;g(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ho)}function J(C){switch(fe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;N(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$(C),i.update();break;default:s=r.NONE}}function Q(C){i.enabled!==!1&&C.preventDefault()}function se(C){R.push(C)}function xe(C){delete F[C.pointerId];for(let de=0;de<R.length;de++)if(R[de].pointerId==C.pointerId){R.splice(de,1);return}}function fe(C){let de=F[C.pointerId];de===void 0&&(de=new ke,F[C.pointerId]=de),de.set(C.pageX,C.pageY)}function me(C){const de=C.pointerId===R[0].pointerId?R[1]:R[0];return F[de.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",re),i.domElement.addEventListener("pointercancel",oe),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}const Bx={class:"scanner-page"},Hx={class:"panel controls"},zx={class:"actions"},Gx=["disabled"],Vx=["disabled"],kx=["disabled"],Wx=["disabled"],Xx={class:"status-grid"},qx={class:"panel viewer"},Yx=Uu({__name:"RoomScanner",setup(n){const e=Fn(null),t=Fn(null),i=Fn(null),r=Fn(!1),s=Fn(!1),a=Fn("Camera is off"),o=Fn(0),l=Fn(0);let c=null,u=0,f=0;const h=Ch(null),m=uf(()=>r.value);function x(){const F=i.value;if(!F)return;const S=new wx;S.background=new Ke("#0b0f16");const b=new Yt(55,F.clientWidth/F.clientHeight,.1,200);b.position.set(0,1.4,5);const Y=new zf({antialias:!0});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setSize(F.clientWidth,F.clientHeight),F.innerHTML="",F.appendChild(Y.domElement);const le=new Fx(b,Y.domElement);le.enableDamping=!0,le.maxDistance=30,le.minDistance=.8;const ue=new Ux(16777215,.45);S.add(ue);const I=new Dx(10142975,1.15);I.position.set(2,6,3),S.add(I),S.add(new Ix(14,14,5206408,1979718)),S.add(new Nx(2.2));const X=new Kt,K=new Vf({size:.04,vertexColors:!0}),V=new Cx(X,K);S.add(V),h.value={scene:S,camera:b,renderer:Y,controls:le,pointGeometry:X,pointMaterial:K,pointMesh:V};const ne=()=>{const ie=h.value;ie&&(ie.controls.update(),ie.renderer.render(ie.scene,ie.camera),f=requestAnimationFrame(ne))};ne()}function v(){const F=h.value,S=i.value;if(!F||!S)return;const b=Math.max(S.clientWidth,320),Y=Math.max(S.clientHeight,240);F.camera.aspect=b/Y,F.camera.updateProjectionMatrix(),F.renderer.setSize(b,Y)}function p(F,S){const b=h.value;b&&(b.pointGeometry.setAttribute("position",new Ut(F,3)),b.pointGeometry.setAttribute("color",new Ut(S,3)),b.pointGeometry.computeBoundingSphere(),o.value=F.length/3)}function d(){const F=e.value,S=t.value;if(!F||!S||F.videoWidth===0||F.videoHeight===0)return;const b=160,Y=120;S.width=b,S.height=Y;const le=S.getContext("2d",{willReadFrequently:!0});if(!le)return;le.drawImage(F,0,0,b,Y);const I=le.getImageData(0,0,b,Y).data,X=[],K=[],V=3;l.value+=1;const ne=Math.sin(l.value*.09)*.18;for(let ie=0;ie<Y;ie+=V)for(let ae=0;ae<b;ae+=V){const O=(ie*b+ae)*4,k=I[O],ve=I[O+1],Me=I[O+2],Se=.2126*k+.7152*ve+.0722*Me,Re=Math.min(ae+1,b-1),Oe=Math.min(ie+1,Y-1),Le=(ie*b+Re)*4,Ue=(Oe*b+ae)*4,$e=.2126*I[Le]+.7152*I[Le+1]+.0722*I[Le+2],Fe=.2126*I[Ue]+.7152*I[Ue+1]+.0722*I[Ue+2],g=Math.min(Math.abs($e-Se)+Math.abs(Fe-Se),255),P=ae/b-.5,N=.5-ie/Y,G=(255-Se)/255,z=g/255,$=G*3.4+z*1.2+ne;X.push(P*6.4,N*3.6,$);const re=1-G;K.push(re,.35+z*.45,G)}p(X,K),a.value=`Scanning in progress (${o.value} xyz points)`}function A(){s.value&&(d(),u=requestAnimationFrame(A))}async function E(){if(!r.value)try{a.value="Requesting camera access...",c=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});const F=e.value;if(!F)throw new Error("Video element is unavailable");F.srcObject=c,await F.play(),r.value=!0,a.value="Camera is ready"}catch(F){const S=F instanceof Error?F.message:"Unknown camera error";a.value=`Camera error: ${S}`,r.value=!1}}function T(){u&&(cancelAnimationFrame(u),u=0),s.value=!1,c&&(c.getTracks().forEach(S=>S.stop()),c=null);const F=e.value;F&&(F.pause(),F.srcObject=null),r.value=!1,a.value="Camera is off"}function w(){!r.value||s.value||(s.value=!0,a.value="Preparing room scan...",A())}function L(){s.value=!1,u&&(cancelAnimationFrame(u),u=0),a.value="Scan paused"}function R(){p([],[]),l.value=0,a.value=r.value?"Point cloud reset":"Camera is off"}return Fu(async()=>{await Au(),x(),v(),window.addEventListener("resize",v)}),Bu(()=>{window.removeEventListener("resize",v),T(),f&&(cancelAnimationFrame(f),f=0);const F=h.value;F&&(F.controls.dispose(),F.pointGeometry.dispose(),F.pointMaterial.dispose(),F.renderer.dispose(),h.value=null)}),(F,S)=>(rf(),Dd("main",Bx,[st("section",Hx,[S[4]||(S[4]=st("h1",null,"RoomScanner",-1)),S[5]||(S[5]=st("p",null," Open camera, scan your room, and generate an estimated 3D xyz point cloud. ",-1)),st("div",zx,[st("button",{class:"btn primary",type:"button",onClick:E,disabled:r.value}," Open Camera ",8,Gx),st("button",{class:"btn",type:"button",onClick:T,disabled:!r.value}," Close Camera ",8,Vx),st("button",{class:"btn success",type:"button",onClick:w,disabled:!m.value||s.value}," Start Scan ",8,kx),st("button",{class:"btn",type:"button",onClick:L,disabled:!s.value}," Stop Scan ",8,Wx),st("button",{class:"btn",type:"button",onClick:R}," Reset Cloud ")]),st("div",Xx,[S[0]||(S[0]=st("span",null,"Status",-1)),st("strong",null,zo(a.value),1),S[1]||(S[1]=st("span",null,"Points",-1)),st("strong",null,zo(o.value),1),S[2]||(S[2]=st("span",null,"Axes",-1)),S[3]||(S[3]=st("strong",null,"X (red), Y (green), Z (blue)",-1))]),st("video",{ref_key:"videoRef",ref:e,autoplay:"",muted:"",playsinline:""},null,512),st("canvas",{ref_key:"scannerCanvasRef",ref:t,class:"hidden-canvas"},null,512)]),st("section",qx,[st("div",{ref_key:"sceneContainerRef",ref:i,class:"scene-host"},null,512),S[6]||(S[6]=st("small",null," XYZ output is an estimated monocular depth map, useful as a lightweight room reconstruction preview. ",-1))])]))}}),jx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Kx=jx(Yx,[["__scopeId","data-v-adb30792"]]),$x=Uu({__name:"App",setup(n){return(e,t)=>(rf(),Ud(Kx))}});_p($x).mount("#app");
