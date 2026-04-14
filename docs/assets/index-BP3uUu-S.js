(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function va(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},Ji=[],xn=()=>{},hu=()=>!1,Hs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),St=Object.assign,Ma=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ch=Object.prototype.hasOwnProperty,Qe=(n,e)=>ch.call(n,e),Fe=Array.isArray,Qi=n=>Or(n)==="[object Map]",du=n=>Or(n)==="[object Set]",Qa=n=>Or(n)==="[object Date]",Ge=n=>typeof n=="function",ht=n=>typeof n=="string",Sn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",pu=n=>(tt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),mu=Object.prototype.toString,Or=n=>mu.call(n),uh=n=>Or(n).slice(8,-1),gu=n=>Or(n)==="[object Object]",Sa=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},fh=/-\w/g,ln=Gs(n=>n.replace(fh,e=>e.slice(1).toUpperCase())),hh=/\B([A-Z])/g,Ai=Gs(n=>n.replace(hh,"-$1").toLowerCase()),_u=Gs(n=>n.charAt(0).toUpperCase()+n.slice(1)),io=Gs(n=>n?`on${_u(n)}`:""),vn=(n,e)=>!Object.is(n,e),Es=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ea=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let el;const Vs=()=>el||(el=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?gh(i):ya(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||tt(n))return n}const dh=/;(?![^(]*\))/g,ph=/:([^]+)/,mh=/\/\*[^]*?\*\//g;function gh(n){const e={};return n.replace(mh,"").split(dh).forEach(t=>{if(t){const i=t.split(ph);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ta(n){let e="";if(ht(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Ta(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vh=va(_h);function xu(n){return!!n||n===""}function xh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ba(n[i],e[i]);return t}function ba(n,e){if(n===e)return!0;let t=Qa(n),i=Qa(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Sn(n),i=Sn(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?xh(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ba(n[a],e[a]))return!1}}return String(n)===String(e)}const Mu=n=>!!(n&&n.__v_isRef===!0),rn=n=>ht(n)?n:n==null?"":Fe(n)||tt(n)&&(n.toString===mu||!Ge(n.toString))?Mu(n)?rn(n.value):JSON.stringify(n,Su,2):String(n),Su=(n,e)=>Mu(e)?Su(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ro(i,s)+" =>"]=r,t),{})}:du(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ro(t))}:Sn(e)?ro(e):tt(e)&&!Fe(e)&&!gu(e)?String(e):e,ro=(n,e="")=>{var t;return Sn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Mh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Sh(){return Ot}let rt;const so=new WeakSet;class Eu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,so.has(this)&&(so.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tl(this),bu(this);const e=rt,t=cn;rt=this,cn=!0;try{return this.fn()}finally{Au(this),rt=e,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ra(e);this.deps=this.depsTail=void 0,tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?so.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let yu=0,Er,yr;function Tu(n,e=!1){if(n.flags|=8,e){n.next=yr,yr=n;return}n.next=Er,Er=n}function Aa(){yu++}function wa(){if(--yu>0)return;if(yr){let e=yr;for(yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Er;){let e=Er;for(Er=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function bu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Au(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ra(i),Eh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function $o(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function wu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cr)||(n.globalVersion=Cr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$o(n))))return;n.flags|=2;const e=n.dep,t=rt,i=cn;rt=n,cn=!0;try{bu(n);const r=n.fn(n._value);(e.version===0||vn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,cn=i,Au(n),n.flags&=-3}}function Ra(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ra(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Eh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cn=!0;const Ru=[];function Hn(){Ru.push(cn),cn=!1}function Gn(){const n=Ru.pop();cn=n===void 0?!0:n}function tl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Cr=0;class yh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ca{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!cn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new yh(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,Cu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Cr++,this.notify(e)}notify(e){Aa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wa()}}}function Cu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Zo=new WeakMap,vi=Symbol(""),Jo=Symbol(""),Pr=Symbol("");function Tt(n,e,t){if(cn&&rt){let i=Zo.get(n);i||Zo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ca),r.map=i,r.key=t),r.track()}}function In(n,e,t,i,r,s){const a=Zo.get(n);if(!a){Cr++;return}const o=l=>{l&&l.trigger()};if(Aa(),e==="clear")a.forEach(o);else{const l=Fe(n),c=l&&Sa(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Pr||!Sn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Pr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(vi)),Qi(n)&&o(a.get(Jo)));break;case"delete":l||(o(a.get(vi)),Qi(n)&&o(a.get(Jo)));break;case"set":Qi(n)&&o(a.get(vi));break}}wa()}function Ci(n){const e=Je(n);return e===n?e:(Tt(e,"iterate",Pr),Qt(n)?e:e.map(un))}function ks(n){return Tt(n=Je(n),"iterate",Pr),n}function pn(n,e){return Vn(n)?rr(xi(n)?un(e):e):un(e)}const Th={__proto__:null,[Symbol.iterator](){return oo(this,Symbol.iterator,n=>pn(this,n))},concat(...n){return Ci(this).concat(...n.map(e=>Fe(e)?Ci(e):e))},entries(){return oo(this,"entries",n=>(n[1]=pn(this,n[1]),n))},every(n,e){return Tn(this,"every",n,e,void 0,arguments)},filter(n,e){return Tn(this,"filter",n,e,t=>t.map(i=>pn(this,i)),arguments)},find(n,e){return Tn(this,"find",n,e,t=>pn(this,t),arguments)},findIndex(n,e){return Tn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Tn(this,"findLast",n,e,t=>pn(this,t),arguments)},findLastIndex(n,e){return Tn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Tn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ao(this,"includes",n)},indexOf(...n){return ao(this,"indexOf",n)},join(n){return Ci(this).join(n)},lastIndexOf(...n){return ao(this,"lastIndexOf",n)},map(n,e){return Tn(this,"map",n,e,void 0,arguments)},pop(){return hr(this,"pop")},push(...n){return hr(this,"push",n)},reduce(n,...e){return nl(this,"reduce",n,e)},reduceRight(n,...e){return nl(this,"reduceRight",n,e)},shift(){return hr(this,"shift")},some(n,e){return Tn(this,"some",n,e,void 0,arguments)},splice(...n){return hr(this,"splice",n)},toReversed(){return Ci(this).toReversed()},toSorted(n){return Ci(this).toSorted(n)},toSpliced(...n){return Ci(this).toSpliced(...n)},unshift(...n){return hr(this,"unshift",n)},values(){return oo(this,"values",n=>pn(this,n))}};function oo(n,e,t){const i=ks(n),r=i[e]();return i!==n&&!Qt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const bh=Array.prototype;function Tn(n,e,t,i,r,s){const a=ks(n),o=a!==n&&!Qt(n),l=a[e];if(l!==bh[e]){const f=l.apply(n,s);return o?un(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,pn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function nl(n,e,t,i){const r=ks(n),s=r!==n&&!Qt(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=pn(n,c)),t.call(this,c,pn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?pn(n,l):l}function ao(n,e,t){const i=Je(n);Tt(i,"iterate",Pr);const r=i[e](...t);return(r===-1||r===!1)&&Ua(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function hr(n,e,t=[]){Hn(),Aa();const i=Je(n)[e].apply(n,t);return wa(),Gn(),i}const Ah=va("__proto__,__v_isRef,__isVue"),Pu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sn));function wh(n){Sn(n)||(n=String(n));const e=Je(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Lu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Fh:Nu:s?Iu:Uu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!r){let l;if(a&&(l=Th[t]))return l;if(t==="hasOwnProperty")return wh}const o=Reflect.get(e,t,bt(e)?e:i);if((Sn(t)?Pu.has(t):Ah(t))||(r||Tt(e,"get",t),s))return o;if(bt(o)){const l=a&&Sa(t)?o:o.value;return r&&tt(l)?ea(l):l}return tt(o)?r?ea(o):La(o):o}}class Du extends Lu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Fe(e)&&Sa(t);if(!this._isShallow){const c=Vn(s);if(!Qt(i)&&!Vn(i)&&(s=Je(s),i=Je(i)),!a&&bt(s)&&!bt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,bt(e)?e:r);return e===Je(r)&&(o?vn(i,s)&&In(e,"set",t,i):In(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&In(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Sn(t)||!Pu.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",Fe(e)?"length":vi),Reflect.ownKeys(e)}}class Rh extends Lu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ch=new Du,Ph=new Rh,Lh=new Du(!0);const Qo=n=>n,qr=n=>Reflect.getPrototypeOf(n);function Dh(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=Qi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Qo:e?rr:un;return!e&&Tt(s,"iterate",l?Jo:vi),St(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Yr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Uh(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(vn(r,o)&&Tt(a,"get",r),Tt(a,"get",o));const{has:l}=qr(a),c=e?Qo:n?rr:un;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Tt(Je(r),"iterate",vi),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(vn(r,o)&&Tt(a,"has",r),Tt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?Qo:n?rr:un;return!n&&Tt(l,"iterate",vi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return St(t,n?{add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear")}:{add(r){const s=Je(this),a=qr(s),o=Je(r),l=!e&&!Qt(r)&&!Vn(r)?o:r;return a.has.call(s,l)||vn(r,l)&&a.has.call(s,r)||vn(o,l)&&a.has.call(s,o)||(s.add(l),In(s,"add",l,l)),this},set(r,s){!e&&!Qt(s)&&!Vn(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=qr(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?vn(s,u)&&In(a,"set",r,s):In(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=qr(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&In(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&In(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Dh(r,n,e)}),t}function Pa(n,e){const t=Uh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const Ih={get:Pa(!1,!1)},Nh={get:Pa(!1,!0)},Oh={get:Pa(!0,!1)};const Uu=new WeakMap,Iu=new WeakMap,Nu=new WeakMap,Fh=new WeakMap;function Bh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zh(n){return n.__v_skip||!Object.isExtensible(n)?0:Bh(uh(n))}function La(n){return Vn(n)?n:Da(n,!1,Ch,Ih,Uu)}function Hh(n){return Da(n,!1,Lh,Nh,Iu)}function ea(n){return Da(n,!0,Ph,Oh,Nu)}function Da(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=zh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function xi(n){return Vn(n)?xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Vn(n){return!!(n&&n.__v_isReadonly)}function Qt(n){return!!(n&&n.__v_isShallow)}function Ua(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Gh(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&vu(n,"__v_skip",!0),n}const un=n=>tt(n)?La(n):n,rr=n=>tt(n)?ea(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function qt(n){return Ou(n,!1)}function Vh(n){return Ou(n,!0)}function Ou(n,e){return bt(n)?n:new kh(n,e)}class kh{constructor(e,t){this.dep=new Ca,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Qt(e)||Vn(e);e=i?e:Je(e),vn(e,t)&&(this._rawValue=e,this._value=i?e:un(e),this.dep.trigger())}}function Wh(n){return bt(n)?n.value:n}const Xh={get:(n,e,t)=>e==="__v_raw"?n:Wh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Fu(n){return xi(n)?n:new Proxy(n,Xh)}class qh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ca(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Tu(this,!0),!0}get value(){const e=this.dep.track();return wu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yh(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new qh(i,r,t)}const jr={},Rs=new WeakMap;let pi;function jh(n,e=!1,t=pi){if(t){let i=Rs.get(t);i||Rs.set(t,i=[]),i.push(n)}}function Kh(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=E=>r?E:Qt(E)||r===!1||r===0?Nn(E,1):Nn(E);let u,f,d,m,x=!1,v=!1;if(bt(n)?(f=()=>n.value,x=Qt(n)):xi(n)?(f=()=>c(n),x=!0):Fe(n)?(v=!0,x=n.some(E=>xi(E)||Qt(E)),f=()=>n.map(E=>{if(bt(E))return E.value;if(xi(E))return c(E);if(Ge(E))return l?l(E,2):E()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Hn();try{d()}finally{Gn()}}const E=pi;pi=u;try{return l?l(n,3,[m]):n(m)}finally{pi=E}}:f=xn,e&&r){const E=f,A=r===!0?1/0:r;f=()=>Nn(E(),A)}const p=Sh(),h=()=>{u.stop(),p&&p.active&&Ma(p.effects,u)};if(s&&e){const E=e;e=(...A)=>{E(...A),h()}}let b=v?new Array(n.length).fill(jr):jr;const S=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const A=u.run();if(r||x||(v?A.some((P,R)=>vn(P,b[R])):vn(A,b))){d&&d();const P=pi;pi=u;try{const R=[A,b===jr?void 0:v&&b[0]===jr?[]:b,m];b=A,l?l(e,3,R):e(...R)}finally{pi=P}}}else u.run()};return o&&o(S),u=new Eu(f),u.scheduler=a?()=>a(S,!1):S,m=E=>jh(E,!1,u),d=u.onStop=()=>{const E=Rs.get(u);if(E){if(l)l(E,4);else for(const A of E)A();Rs.delete(u)}},e?i?S(!0):b=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Nn(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Nn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Nn(n[i],e,t);else if(du(n)||Qi(n))n.forEach(i=>{Nn(i,e,t)});else if(gu(n)){for(const i in n)Nn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Nn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(n,e,t,i){try{return i?n(...i):n()}catch(r){Ws(r,e,t)}}function En(n,e,t,i){if(Ge(n)){const r=Fr(n,e,t,i);return r&&pu(r)&&r.catch(s=>{Ws(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function Ws(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Hn(),Fr(s,null,10,[n,l,c]),Gn();return}}$h(n,t,r,i,a)}function $h(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let dn=-1;const er=[];let $n=null,Ki=0;const Bu=Promise.resolve();let Cs=null;function zu(n){const e=Cs||Bu;return n?e.then(this?n.bind(this):n):e}function Zh(n){let e=dn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Lr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ia(n){if(!(n.flags&1)){const e=Lr(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Lr(t)?Lt.push(n):Lt.splice(Zh(e),0,n),n.flags|=1,Hu()}}function Hu(){Cs||(Cs=Bu.then(Vu))}function Jh(n){Fe(n)?er.push(...n):$n&&n.id===-1?$n.splice(Ki+1,0,n):n.flags&1||(er.push(n),n.flags|=1),Hu()}function il(n,e,t=dn+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gu(n){if(er.length){const e=[...new Set(er)].sort((t,i)=>Lr(t)-Lr(i));if(er.length=0,$n){$n.push(...e);return}for($n=e,Ki=0;Ki<$n.length;Ki++){const t=$n[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$n=null,Ki=0}}const Lr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Vu(n){try{for(dn=0;dn<Lt.length;dn++){const e=Lt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Lt.length;dn++){const e=Lt[dn];e&&(e.flags&=-2)}dn=-1,Lt.length=0,Gu(),Cs=null,(Lt.length||er.length)&&Vu()}}let Jt=null,ku=null;function Ps(n){const e=Jt;return Jt=n,ku=n&&n.type.__scopeId||null,e}function Qh(n,e=Jt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&pl(-1);const s=Ps(e);let a;try{a=n(...r)}finally{Ps(s),i._d&&pl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ed(n,e){if(Jt===null)return n;const t=js(Jt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=nt]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&Nn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function li(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Hn(),En(l,t,8,[n.el,o,n,e]),Gn())}}function td(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function ys(n,e,t=!1){const i=ep();if(i||tr){let r=tr?tr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const nd=Symbol.for("v-scx"),id=()=>ys(nd);function lo(n,e,t){return Wu(n,e,t)}function Wu(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=St({},t),l=e&&i||!e&&s!=="post";let c;if(Ur){if(s==="sync"){const m=id();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=xn,m.resume=xn,m.pause=xn,m}}const u=Ut;o.call=(m,x,v)=>En(m,u,x,v);let f=!1;s==="post"?o.scheduler=m=>{Nt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():Ia(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Kh(n,e,o);return Ur&&(c?c.push(d):l&&d()),d}function rd(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Xu(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=Br(this),o=Wu(r,s.bind(i),t);return a(),o}function Xu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const sd=Symbol("_vte"),od=n=>n.__isTeleport,ad=Symbol("_leaveCb");function Na(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Na(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function qu(n,e){return Ge(n)?St({name:n.name},e,{setup:n}):n}function Yu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ls=new WeakMap;function Tr(n,e,t,i,r=!1){if(Fe(n)){n.forEach((v,p)=>Tr(v,e&&(Fe(e)?e[p]:e),t,i,r));return}if(br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Tr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?js(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===nt?hu:v=>rl(u,v)?!1:Qe(d,v),x=(v,p)=>!(p&&rl(u,p));if(c!=null&&c!==l){if(sl(e),ht(c))u[c]=null,m(c)&&(f[c]=null);else if(bt(c)){const v=e;x(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ge(l))Fr(l,o,12,[a,u]);else{const v=ht(l),p=bt(l);if(v||p){const h=()=>{if(n.f){const b=v?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)Fe(b)&&Ma(b,s);else if(Fe(b))b.includes(s)||b.push(s);else if(v)u[l]=[s],m(l)&&(f[l]=u[l]);else{const S=[s];x(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else v?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{h(),Ls.delete(n)};b.id=-1,Ls.set(n,b),Nt(b,t)}else sl(n),h()}}}function sl(n){const e=Ls.get(n);e&&(e.flags|=8,Ls.delete(n))}Vs().requestIdleCallback;Vs().cancelIdleCallback;const br=n=>!!n.type.__asyncLoader,ju=n=>n.type.__isKeepAlive;function ld(n,e){Ku(n,"a",e)}function cd(n,e){Ku(n,"da",e)}function Ku(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ju(r.parent.vnode)&&ud(i,e,t,r),r=r.parent}}function ud(n,e,t,i){const r=Xs(e,n,i,!0);Ju(()=>{Ma(i[e],r)},t)}function Xs(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Hn();const o=Br(t),l=En(e,t,n,a);return o(),Gn(),l});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(e,t=Ut)=>{(!Ur||n==="sp")&&Xs(n,(...i)=>e(...i),t)},fd=Wn("bm"),$u=Wn("m"),hd=Wn("bu"),dd=Wn("u"),Zu=Wn("bum"),Ju=Wn("um"),pd=Wn("sp"),md=Wn("rtg"),gd=Wn("rtc");function _d(n,e=Ut){Xs("ec",n,e)}const vd=Symbol.for("v-ndc");function xd(n,e,t,i){let r;const s=t,a=Fe(n);if(a||ht(n)){const o=a&&xi(n);let l=!1,c=!1;o&&(l=!Qt(n),c=Vn(n),n=ks(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?rr(un(n[u])):un(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ta=n=>n?Sf(n)?js(n):ta(n.parent):null,Ar=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ta(n.parent),$root:n=>ta(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ef(n),$forceUpdate:n=>n.f||(n.f=()=>{Ia(n.update)}),$nextTick:n=>n.n||(n.n=zu.bind(n.proxy)),$watch:n=>rd.bind(n)}),co=(n,e)=>n!==nt&&!n.__isScriptSetup&&Qe(n,e),Md={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(co(i,e))return a[e]=1,i[e];if(r!==nt&&Qe(r,e))return a[e]=2,r[e];if(Qe(s,e))return a[e]=3,s[e];if(t!==nt&&Qe(t,e))return a[e]=4,t[e];na&&(a[e]=0)}}const c=Ar[e];let u,f;if(c)return e==="$attrs"&&Tt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==nt&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return co(r,e)?(r[e]=t,!0):i!==nt&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==nt&&o[0]!=="$"&&Qe(n,o)||co(e,o)||Qe(s,o)||Qe(i,o)||Qe(Ar,o)||Qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ol(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let na=!0;function Sd(n){const e=ef(n),t=n.proxy,i=n.ctx;na=!1,e.beforeCreate&&al(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:S,unmounted:E,render:A,renderTracked:P,renderTriggered:R,errorCaptured:ee,serverPrefetch:T,expose:w,inheritAttrs:oe,components:ae,directives:de,filters:F}=e;if(c&&Ed(c,i,null),a)for(const Y in a){const le=a[Y];Ge(le)&&(i[Y]=le.bind(t))}if(r){const Y=r.call(t,t);tt(Y)&&(n.data=La(Y))}if(na=!0,s)for(const Y in s){const le=s[Y],fe=Ge(le)?le.bind(t,t):Ge(le.get)?le.get.bind(t,t):xn,ue=!Ge(le)&&Ge(le.set)?le.set.bind(t):xn,B=yf({get:fe,set:ue});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>B.value,set:j=>B.value=j})}if(o)for(const Y in o)Qu(o[Y],i,t,Y);if(l){const Y=Ge(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(le=>{td(le,Y[le])})}u&&al(u,n,"c");function ne(Y,le){Fe(le)?le.forEach(fe=>Y(fe.bind(t))):le&&Y(le.bind(t))}if(ne(fd,f),ne($u,d),ne(hd,m),ne(dd,x),ne(ld,v),ne(cd,p),ne(_d,ee),ne(gd,P),ne(md,R),ne(Zu,b),ne(Ju,E),ne(pd,T),Fe(w))if(w.length){const Y=n.exposed||(n.exposed={});w.forEach(le=>{Object.defineProperty(Y,le,{get:()=>t[le],set:fe=>t[le]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===xn&&(n.render=A),oe!=null&&(n.inheritAttrs=oe),ae&&(n.components=ae),de&&(n.directives=de),T&&Yu(n)}function Ed(n,e,t=xn){Fe(n)&&(n=ia(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=ys(r.from||i,r.default,!0):s=ys(r.from||i):s=ys(r),bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function al(n,e,t){En(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qu(n,e,t,i){let r=i.includes(".")?Xu(t,i):()=>t[i];if(ht(n)){const s=e[n];Ge(s)&&lo(r,s)}else if(Ge(n))lo(r,n.bind(t));else if(tt(n))if(Fe(n))n.forEach(s=>Qu(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&lo(r,s,n)}}function ef(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,a,!0)),Ds(l,e,a)),tt(e)&&s.set(e,l),l}function Ds(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ds(n,s,t,!0),r&&r.forEach(a=>Ds(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=yd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const yd={data:ll,props:cl,emits:cl,methods:xr,computed:xr,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:xr,directives:xr,watch:bd,provide:ll,inject:Td};function ll(n,e){return e?n?function(){return St(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Td(n,e){return xr(ia(n),ia(e))}function ia(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function xr(n,e){return n?St(Object.create(null),n,e):e}function cl(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:St(Object.create(null),ol(n),ol(e??{})):e}function bd(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function tf(){return{app:null,config:{isNativeTag:hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ad=0;function wd(n,e){return function(i,r=null){Ge(i)||(i=St({},i)),r!=null&&!tt(r)&&(r=null);const s=tf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Ad++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:op,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ge(u.install)?(a.add(u),u.install(c,...f)):Ge(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||zn(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,js(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=tr;tr=c;try{return u()}finally{tr=f}}};return c}}let tr=null;const Rd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${Ai(e)}Modifiers`];function Cd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&Rd(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=t.map(Ea)));let o,l=i[o=io(e)]||i[o=io(ln(e))];!l&&s&&(l=i[o=io(Ai(e))]),l&&En(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,r)}}const Pd=new WeakMap;function nf(n,e,t=!1){const i=t?Pd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=nf(c,e,!0);u&&(o=!0,St(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):St(a,s),tt(n)&&i.set(n,a),a)}function qs(n,e){return!n||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ai(e))||Qe(n,e))}function ul(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=n,p=Ps(n);let h,b;try{if(t.shapeFlag&4){const E=r||i,A=E;h=gn(c.call(A,E,u,f,m,d,x)),b=o}else{const E=e;h=gn(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),b=e.props?o:Ld(o)}}catch(E){wr.length=0,Ws(E,n,1),h=zn(ri)}let S=h;if(b&&v!==!1){const E=Object.keys(b),{shapeFlag:A}=S;E.length&&A&7&&(s&&E.some(xa)&&(b=Dd(b,s)),S=sr(S,b,!1,!0))}return t.dirs&&(S=sr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Na(S,t.transition),h=S,Ps(p),h}const Ld=n=>{let e;for(const t in n)(t==="class"||t==="style"||Hs(t))&&((e||(e={}))[t]=n[t]);return e},Dd=(n,e)=>{const t={};for(const i in n)(!xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ud(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?fl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(rf(a,i,d)&&!qs(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?fl(i,a,c):!0:!!a;return!1}function fl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(rf(e,n,s)&&!qs(t,s))return!0}return!1}function rf(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!ba(i,r):i!==r}function Id({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const sf={},of=()=>Object.create(sf),af=n=>Object.getPrototypeOf(n)===sf;function Nd(n,e,t,i=!1){const r={},s=of();n.propsDefaults=Object.create(null),lf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Hh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Od(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(qs(n.emitsOptions,d))continue;const m=e[d];if(l)if(Qe(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=ln(d);r[x]=ra(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{lf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Ai(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ra(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&In(n.attrs,"set","")}function lf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let u;r&&Qe(r,u=ln(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:qs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ra(r,l,f,c[f],n,!Qe(c,f))}}return a}function ra(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Br(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ai(t))&&(i=!0))}return i}const Fd=new WeakMap;function cf(n,e,t=!1){const i=t?Fd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[d,m]=cf(f,e,!0);St(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Ji),Ji;if(Fe(s))for(let u=0;u<s.length;u++){const f=ln(s[u]);hl(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=ln(u);if(hl(f)){const d=s[u],m=a[f]=Fe(d)||Ge(d)?{type:d}:St({},d),x=m.type;let v=!1,p=!0;if(Fe(x))for(let h=0;h<x.length;++h){const b=x[h],S=Ge(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=Ge(x)&&x.name==="Boolean";m[0]=v,m[1]=p,(v||Qe(m,"default"))&&o.push(f)}}const c=[a,o];return tt(n)&&i.set(n,c),c}function hl(n){return n[0]!=="$"&&!Sr(n)}const Oa=n=>n==="_"||n==="_ctx"||n==="$stable",Fa=n=>Fe(n)?n.map(gn):[gn(n)],Bd=(n,e,t)=>{if(e._n)return e;const i=Qh((...r)=>Fa(e(...r)),t);return i._c=!1,i},uf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Oa(r))continue;const s=n[r];if(Ge(s))e[r]=Bd(r,s,i);else if(s!=null){const a=Fa(s);e[r]=()=>a}}},ff=(n,e)=>{const t=Fa(e);n.slots.default=()=>t},hf=(n,e,t)=>{for(const i in e)(t||!Oa(i))&&(n[i]=e[i])},zd=(n,e,t)=>{const i=n.slots=of();if(n.vnode.shapeFlag&32){const r=e._;r?(hf(i,e,t),t&&vu(i,"_",r,!0)):uf(e,i)}else e&&ff(n,e)},Hd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:hf(r,e,t):(s=!e.$stable,uf(e,r)),a=e}else e&&(ff(n,e),a={default:1});if(s)for(const o in r)!Oa(o)&&a[o]==null&&delete r[o]},Nt=Xd;function Gd(n){return Vd(n)}function Vd(n,e){const t=Vs();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=xn,insertStaticContent:x}=n,v=(_,U,O,q=null,W=null,te=null,I=void 0,L=null,V=!!U.dynamicChildren)=>{if(_===U)return;_&&!dr(_,U)&&(q=Ne(_),j(_,W,te,!0),_=null),U.patchFlag===-2&&(V=!1,U.dynamicChildren=null);const{type:z,ref:se,shapeFlag:M}=U;switch(z){case Ys:p(_,U,O,q);break;case ri:h(_,U,O,q);break;case fo:_==null&&b(U,O,q,I);break;case mn:ae(_,U,O,q,W,te,I,L,V);break;default:M&1?A(_,U,O,q,W,te,I,L,V):M&6?de(_,U,O,q,W,te,I,L,V):(M&64||M&128)&&z.process(_,U,O,q,W,te,I,L,V,Ze)}se!=null&&W?Tr(se,_&&_.ref,te,U||_,!U):se==null&&_&&_.ref!=null&&Tr(_.ref,null,te,_,!0)},p=(_,U,O,q)=>{if(_==null)i(U.el=o(U.children),O,q);else{const W=U.el=_.el;U.children!==_.children&&c(W,U.children)}},h=(_,U,O,q)=>{_==null?i(U.el=l(U.children||""),O,q):U.el=_.el},b=(_,U,O,q)=>{[_.el,_.anchor]=x(_.children,U,O,q,_.el,_.anchor)},S=({el:_,anchor:U},O,q)=>{let W;for(;_&&_!==U;)W=d(_),i(_,O,q),_=W;i(U,O,q)},E=({el:_,anchor:U})=>{let O;for(;_&&_!==U;)O=d(_),r(_),_=O;r(U)},A=(_,U,O,q,W,te,I,L,V)=>{if(U.type==="svg"?I="svg":U.type==="math"&&(I="mathml"),_==null)P(U,O,q,W,te,I,L,V);else{const z=_.el&&_.el._isVueCE?_.el:null;try{z&&z._beginPatch(),T(_,U,W,te,I,L,V)}finally{z&&z._endPatch()}}},P=(_,U,O,q,W,te,I,L)=>{let V,z;const{props:se,shapeFlag:M,transition:g,dirs:D}=_;if(V=_.el=a(_.type,te,se&&se.is,se),M&8?u(V,_.children):M&16&&ee(_.children,V,null,q,W,uo(_,te),I,L),D&&li(_,null,q,"created"),R(V,_,_.scopeId,I,q),se){for(const K in se)K!=="value"&&!Sr(K)&&s(V,K,null,se[K],te,q);"value"in se&&s(V,"value",null,se.value,te),(z=se.onVnodeBeforeMount)&&hn(z,q,_)}D&&li(_,null,q,"beforeMount");const k=kd(W,g);k&&g.beforeEnter(V),i(V,U,O),((z=se&&se.onVnodeMounted)||k||D)&&Nt(()=>{z&&hn(z,q,_),k&&g.enter(V),D&&li(_,null,q,"mounted")},W)},R=(_,U,O,q,W)=>{if(O&&m(_,O),q)for(let te=0;te<q.length;te++)m(_,q[te]);if(W){let te=W.subTree;if(U===te||gf(te.type)&&(te.ssContent===U||te.ssFallback===U)){const I=W.vnode;R(_,I,I.scopeId,I.slotScopeIds,W.parent)}}},ee=(_,U,O,q,W,te,I,L,V=0)=>{for(let z=V;z<_.length;z++){const se=_[z]=L?Un(_[z]):gn(_[z]);v(null,se,U,O,q,W,te,I,L)}},T=(_,U,O,q,W,te,I)=>{const L=U.el=_.el;let{patchFlag:V,dynamicChildren:z,dirs:se}=U;V|=_.patchFlag&16;const M=_.props||nt,g=U.props||nt;let D;if(O&&ci(O,!1),(D=g.onVnodeBeforeUpdate)&&hn(D,O,U,_),se&&li(U,_,O,"beforeUpdate"),O&&ci(O,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(L,""),z?w(_.dynamicChildren,z,L,O,q,uo(U,W),te):I||le(_,U,L,null,O,q,uo(U,W),te,!1),V>0){if(V&16)oe(L,M,g,O,W);else if(V&2&&M.class!==g.class&&s(L,"class",null,g.class,W),V&4&&s(L,"style",M.style,g.style,W),V&8){const k=U.dynamicProps;for(let K=0;K<k.length;K++){const X=k[K],he=M[X],ie=g[X];(ie!==he||X==="value")&&s(L,X,he,ie,W,O)}}V&1&&_.children!==U.children&&u(L,U.children)}else!I&&z==null&&oe(L,M,g,O,W);((D=g.onVnodeUpdated)||se)&&Nt(()=>{D&&hn(D,O,U,_),se&&li(U,_,O,"updated")},q)},w=(_,U,O,q,W,te,I)=>{for(let L=0;L<U.length;L++){const V=_[L],z=U[L],se=V.el&&(V.type===mn||!dr(V,z)||V.shapeFlag&198)?f(V.el):O;v(V,z,se,null,q,W,te,I,!0)}},oe=(_,U,O,q,W)=>{if(U!==O){if(U!==nt)for(const te in U)!Sr(te)&&!(te in O)&&s(_,te,U[te],null,W,q);for(const te in O){if(Sr(te))continue;const I=O[te],L=U[te];I!==L&&te!=="value"&&s(_,te,L,I,W,q)}"value"in O&&s(_,"value",U.value,O.value,W)}},ae=(_,U,O,q,W,te,I,L,V)=>{const z=U.el=_?_.el:o(""),se=U.anchor=_?_.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:D}=U;D&&(L=L?L.concat(D):D),_==null?(i(z,O,q),i(se,O,q),ee(U.children||[],O,se,W,te,I,L,V)):M>0&&M&64&&g&&_.dynamicChildren&&_.dynamicChildren.length===g.length?(w(_.dynamicChildren,g,O,W,te,I,L),(U.key!=null||W&&U===W.subTree)&&df(_,U,!0)):le(_,U,O,se,W,te,I,L,V)},de=(_,U,O,q,W,te,I,L,V)=>{U.slotScopeIds=L,_==null?U.shapeFlag&512?W.ctx.activate(U,O,q,I,V):F(U,O,q,W,te,I,V):J(_,U,V)},F=(_,U,O,q,W,te,I)=>{const L=_.component=Qd(_,q,W);if(ju(_)&&(L.ctx.renderer=Ze),tp(L,!1,I),L.asyncDep){if(W&&W.registerDep(L,ne,I),!_.el){const V=L.subTree=zn(ri);h(null,V,U,O),_.placeholder=V.el}}else ne(L,_,U,O,W,te,I)},J=(_,U,O)=>{const q=U.component=_.component;if(Ud(_,U,O))if(q.asyncDep&&!q.asyncResolved){Y(q,U,O);return}else q.next=U,q.update();else U.el=_.el,q.vnode=U},ne=(_,U,O,q,W,te,I)=>{const L=()=>{if(_.isMounted){let{next:M,bu:g,u:D,parent:k,vnode:K}=_;{const C=pf(_);if(C){M&&(M.el=K.el,Y(_,M,I)),C.asyncDep.then(()=>{Nt(()=>{_.isUnmounted||z()},W)});return}}let X=M,he;ci(_,!1),M?(M.el=K.el,Y(_,M,I)):M=K,g&&Es(g),(he=M.props&&M.props.onVnodeBeforeUpdate)&&hn(he,k,M,K),ci(_,!0);const ie=ul(_),ge=_.subTree;_.subTree=ie,v(ge,ie,f(ge.el),Ne(ge),_,W,te),M.el=ie.el,X===null&&Id(_,ie.el),D&&Nt(D,W),(he=M.props&&M.props.onVnodeUpdated)&&Nt(()=>hn(he,k,M,K),W)}else{let M;const{el:g,props:D}=U,{bm:k,m:K,parent:X,root:he,type:ie}=_,ge=br(U);ci(_,!1),k&&Es(k),!ge&&(M=D&&D.onVnodeBeforeMount)&&hn(M,X,U),ci(_,!0);{he.ce&&he.ce._hasShadowRoot()&&he.ce._injectChildStyle(ie,_.parent?_.parent.type:void 0);const C=_.subTree=ul(_);v(null,C,O,q,_,W,te),U.el=C.el}if(K&&Nt(K,W),!ge&&(M=D&&D.onVnodeMounted)){const C=U;Nt(()=>hn(M,X,C),W)}(U.shapeFlag&256||X&&br(X.vnode)&&X.vnode.shapeFlag&256)&&_.a&&Nt(_.a,W),_.isMounted=!0,U=O=q=null}};_.scope.on();const V=_.effect=new Eu(L);_.scope.off();const z=_.update=V.run.bind(V),se=_.job=V.runIfDirty.bind(V);se.i=_,se.id=_.uid,V.scheduler=()=>Ia(se),ci(_,!0),z()},Y=(_,U,O)=>{U.component=_;const q=_.vnode.props;_.vnode=U,_.next=null,Od(_,U.props,q,O),Hd(_,U.children,O),Hn(),il(_),Gn()},le=(_,U,O,q,W,te,I,L,V=!1)=>{const z=_&&_.children,se=_?_.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:D}=U;if(g>0){if(g&128){ue(z,M,O,q,W,te,I,L,V);return}else if(g&256){fe(z,M,O,q,W,te,I,L,V);return}}D&8?(se&16&&Ce(z,W,te),M!==z&&u(O,M)):se&16?D&16?ue(z,M,O,q,W,te,I,L,V):Ce(z,W,te,!0):(se&8&&u(O,""),D&16&&ee(M,O,q,W,te,I,L,V))},fe=(_,U,O,q,W,te,I,L,V)=>{_=_||Ji,U=U||Ji;const z=_.length,se=U.length,M=Math.min(z,se);let g;for(g=0;g<M;g++){const D=U[g]=V?Un(U[g]):gn(U[g]);v(_[g],D,O,null,W,te,I,L,V)}z>se?Ce(_,W,te,!0,!1,M):ee(U,O,q,W,te,I,L,V,M)},ue=(_,U,O,q,W,te,I,L,V)=>{let z=0;const se=U.length;let M=_.length-1,g=se-1;for(;z<=M&&z<=g;){const D=_[z],k=U[z]=V?Un(U[z]):gn(U[z]);if(dr(D,k))v(D,k,O,null,W,te,I,L,V);else break;z++}for(;z<=M&&z<=g;){const D=_[M],k=U[g]=V?Un(U[g]):gn(U[g]);if(dr(D,k))v(D,k,O,null,W,te,I,L,V);else break;M--,g--}if(z>M){if(z<=g){const D=g+1,k=D<se?U[D].el:q;for(;z<=g;)v(null,U[z]=V?Un(U[z]):gn(U[z]),O,k,W,te,I,L,V),z++}}else if(z>g)for(;z<=M;)j(_[z],W,te,!0),z++;else{const D=z,k=z,K=new Map;for(z=k;z<=g;z++){const Ae=U[z]=V?Un(U[z]):gn(U[z]);Ae.key!=null&&K.set(Ae.key,z)}let X,he=0;const ie=g-k+1;let ge=!1,C=0;const pe=new Array(ie);for(z=0;z<ie;z++)pe[z]=0;for(z=D;z<=M;z++){const Ae=_[z];if(he>=ie){j(Ae,W,te,!0);continue}let ye;if(Ae.key!=null)ye=K.get(Ae.key);else for(X=k;X<=g;X++)if(pe[X-k]===0&&dr(Ae,U[X])){ye=X;break}ye===void 0?j(Ae,W,te,!0):(pe[ye-k]=z+1,ye>=C?C=ye:ge=!0,v(Ae,U[ye],O,null,W,te,I,L,V),he++)}const ce=ge?Wd(pe):Ji;for(X=ce.length-1,z=ie-1;z>=0;z--){const Ae=k+z,ye=U[Ae],Re=U[Ae+1],we=Ae+1<se?Re.el||mf(Re):q;pe[z]===0?v(null,ye,O,we,W,te,I,L,V):ge&&(X<0||z!==ce[X]?B(ye,O,we,2):X--)}}},B=(_,U,O,q,W=null)=>{const{el:te,type:I,transition:L,children:V,shapeFlag:z}=_;if(z&6){B(_.component.subTree,U,O,q);return}if(z&128){_.suspense.move(U,O,q);return}if(z&64){I.move(_,U,O,Ze);return}if(I===mn){i(te,U,O);for(let M=0;M<V.length;M++)B(V[M],U,O,q);i(_.anchor,U,O);return}if(I===fo){S(_,U,O);return}if(q!==2&&z&1&&L)if(q===0)L.beforeEnter(te),i(te,U,O),Nt(()=>L.enter(te),W);else{const{leave:M,delayLeave:g,afterLeave:D}=L,k=()=>{_.ctx.isUnmounted?r(te):i(te,U,O)},K=()=>{te._isLeaving&&te[ad](!0),M(te,()=>{k(),D&&D()})};g?g(te,k,K):K()}else i(te,U,O)},j=(_,U,O,q=!1,W=!1)=>{const{type:te,props:I,ref:L,children:V,dynamicChildren:z,shapeFlag:se,patchFlag:M,dirs:g,cacheIndex:D}=_;if(M===-2&&(W=!1),L!=null&&(Hn(),Tr(L,null,O,_,!0),Gn()),D!=null&&(U.renderCache[D]=void 0),se&256){U.ctx.deactivate(_);return}const k=se&1&&g,K=!br(_);let X;if(K&&(X=I&&I.onVnodeBeforeUnmount)&&hn(X,U,_),se&6)Te(_.component,O,q);else{if(se&128){_.suspense.unmount(O,q);return}k&&li(_,null,U,"beforeUnmount"),se&64?_.type.remove(_,U,O,Ze,q):z&&!z.hasOnce&&(te!==mn||M>0&&M&64)?Ce(z,U,O,!1,!0):(te===mn&&M&384||!W&&se&16)&&Ce(V,U,O),q&&Me(_)}(K&&(X=I&&I.onVnodeUnmounted)||k)&&Nt(()=>{X&&hn(X,U,_),k&&li(_,null,U,"unmounted")},O)},Me=_=>{const{type:U,el:O,anchor:q,transition:W}=_;if(U===mn){Se(O,q);return}if(U===fo){E(_);return}const te=()=>{r(O),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(_.shapeFlag&1&&W&&!W.persisted){const{leave:I,delayLeave:L}=W,V=()=>I(O,te);L?L(_.el,te,V):V()}else te()},Se=(_,U)=>{let O;for(;_!==U;)O=d(_),r(_),_=O;r(U)},Te=(_,U,O)=>{const{bum:q,scope:W,job:te,subTree:I,um:L,m:V,a:z}=_;dl(V),dl(z),q&&Es(q),W.stop(),te&&(te.flags|=8,j(I,_,U,O)),L&&Nt(L,U),Nt(()=>{_.isUnmounted=!0},U)},Ce=(_,U,O,q=!1,W=!1,te=0)=>{for(let I=te;I<_.length;I++)j(_[I],U,O,q,W)},Ne=_=>{if(_.shapeFlag&6)return Ne(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const U=d(_.anchor||_.el),O=U&&U[sd];return O?d(O):U};let De=!1;const Ue=(_,U,O)=>{let q;_==null?U._vnode&&(j(U._vnode,null,null,!0),q=U._vnode.component):v(U._vnode||null,_,U,null,null,null,O),U._vnode=_,De||(De=!0,il(q),Gu(),De=!1)},Ze={p:v,um:j,m:B,r:Me,mt:F,mc:ee,pc:le,pbc:w,n:Ne,o:n};return{render:Ue,hydrate:void 0,createApp:wd(Ue)}}function uo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function df(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Un(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&df(a,o)),o.type===Ys&&(o.patchFlag===-1&&(o=r[s]=Un(o)),o.el=a.el),o.type===ri&&!o.el&&(o.el=a.el)}}function Wd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pf(e)}function dl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function mf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?mf(e.subTree):null}const gf=n=>n.__isSuspense;function Xd(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Jh(n)}const mn=Symbol.for("v-fgt"),Ys=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),wr=[];let Vt=null;function Zn(n=!1){wr.push(Vt=n?null:[])}function qd(){wr.pop(),Vt=wr[wr.length-1]||null}let Dr=1;function pl(n,e=!1){Dr+=n,n<0&&Vt&&e&&(Vt.hasOnce=!0)}function _f(n){return n.dynamicChildren=Dr>0?Vt||Ji:null,qd(),Dr>0&&Vt&&Vt.push(n),n}function Pi(n,e,t,i,r,s){return _f(ze(n,e,t,i,r,s,!0))}function vf(n,e,t,i,r){return _f(zn(n,e,t,i,r,!0))}function xf(n){return n?n.__v_isVNode===!0:!1}function dr(n,e){return n.type===e.type&&n.key===e.key}const Mf=({key:n})=>n??null,Ts=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||bt(n)||Ge(n)?{i:Jt,r:n,k:e,f:!!t}:n:null);function ze(n,e=null,t=null,i=0,r=null,s=n===mn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Mf(e),ref:e&&Ts(e),scopeId:ku,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return o?(Ba(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Dr>0&&!a&&Vt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vt.push(l),l}const zn=Yd;function Yd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===vd)&&(n=ri),xf(n)){const o=sr(n,e,!0);return t&&Ba(o,t),Dr>0&&!s&&Vt&&(o.shapeFlag&6?Vt[Vt.indexOf(n)]=o:Vt.push(o)),o.patchFlag=-2,o}if(sp(n)&&(n=n.__vccOpts),e){e=jd(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Ta(o)),tt(l)&&(Ua(l)&&!Fe(l)&&(l=St({},l)),e.style=ya(l))}const a=ht(n)?1:gf(n)?128:od(n)?64:tt(n)?4:Ge(n)?2:0;return ze(n,e,t,i,r,a,s,!0)}function jd(n){return n?Ua(n)||af(n)?St({},n):n:null}function sr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?$d(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Mf(c),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Ts(e)):[s,Ts(e)]:Ts(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&sr(n.ssContent),ssFallback:n.ssFallback&&sr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Na(u,l.clone(u)),u}function Kd(n=" ",e=0){return zn(Ys,null,n,e)}function ho(n="",e=!1){return e?(Zn(),vf(ri,null,n)):zn(ri,null,n)}function gn(n){return n==null||typeof n=="boolean"?zn(ri):Fe(n)?zn(mn,null,n.slice()):xf(n)?Un(n):zn(Ys,null,String(n))}function Un(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:sr(n)}function Ba(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ba(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!af(e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),i&64?(t=16,e=[Kd(e)]):t=8);n.children=e,n.shapeFlag|=t}function $d(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ta([e.class,i.class]));else if(r==="style")e.style=ya([e.style,i.style]);else if(Hs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){En(n,e,7,[t,i])}const Zd=tf();let Jd=0;function Qd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Zd,s={uid:Jd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cf(i,r),emitsOptions:nf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Cd.bind(null,s),n.ce&&n.ce(s),s}let Ut=null;const ep=()=>Ut||Jt;let Us,sa;{const n=Vs(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Us=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),sa=e("__VUE_SSR_SETTERS__",t=>Ur=t)}const Br=n=>{const e=Ut;return Us(n),n.scope.on(),()=>{n.scope.off(),Us(e)}},ml=()=>{Ut&&Ut.scope.off(),Us(null)};function Sf(n){return n.vnode.shapeFlag&4}let Ur=!1;function tp(n,e=!1,t=!1){e&&sa(e);const{props:i,children:r}=n.vnode,s=Sf(n);Nd(n,i,s,e),zd(n,r,t||e);const a=s?np(n,e):void 0;return e&&sa(!1),a}function np(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Md);const{setup:i}=t;if(i){Hn();const r=n.setupContext=i.length>1?rp(n):null,s=Br(n),a=Fr(i,n,0,[n.props,r]),o=pu(a);if(Gn(),s(),(o||n.sp)&&!br(n)&&Yu(n),o){if(a.then(ml,ml),e)return a.then(l=>{gl(n,l)}).catch(l=>{Ws(l,n,0)});n.asyncDep=a}else gl(n,a)}else Ef(n)}function gl(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Fu(e)),Ef(n)}function Ef(n,e,t){const i=n.type;n.render||(n.render=i.render||xn);{const r=Br(n);Hn();try{Sd(n)}finally{Gn(),r()}}}const ip={get(n,e){return Tt(n,"get",""),n[e]}};function rp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ip),slots:n.slots,emit:n.emit,expose:e}}function js(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fu(Gh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ar)return Ar[t](n)},has(e,t){return t in e||t in Ar}})):n.proxy}function sp(n){return Ge(n)&&"__vccOpts"in n}const yf=(n,e)=>Yh(n,e,Ur),op="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oa;const _l=typeof window<"u"&&window.trustedTypes;if(_l)try{oa=_l.createPolicy("vue",{createHTML:n=>n})}catch{}const Tf=oa?n=>oa.createHTML(n):n=>n,ap="http://www.w3.org/2000/svg",lp="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,vl=Dn&&Dn.createElement("template"),cp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Dn.createElementNS(ap,n):e==="mathml"?Dn.createElementNS(lp,n):t?Dn.createElement(n,{is:t}):Dn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Dn.createTextNode(n),createComment:n=>Dn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Dn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{vl.innerHTML=Tf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=vl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},up=Symbol("_vtc");function fp(n,e,t){const i=n[up];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xl=Symbol("_vod"),hp=Symbol("_vsh"),dp=Symbol(""),pp=/(?:^|;)\s*display\s*:/;function mp(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&bs(i,o,"")}else for(const a in e)t[a]==null&&bs(i,a,"");for(const a in t)a==="display"&&(s=!0),bs(i,a,t[a])}else if(r){if(e!==t){const a=i[dp];a&&(t+=";"+a),i.cssText=t,s=pp.test(t)}}else e&&n.removeAttribute("style");xl in n&&(n[xl]=s?i.display:"",n[hp]&&(i.display="none"))}const Ml=/\s*!important$/;function bs(n,e,t){if(Fe(t))t.forEach(i=>bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=gp(n,e);Ml.test(t)?n.setProperty(Ai(i),t.replace(Ml,""),"important"):n[i]=t}}const Sl=["Webkit","Moz","ms"],po={};function gp(n,e){const t=po[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return po[e]=i;i=_u(i);for(let r=0;r<Sl.length;r++){const s=Sl[r]+i;if(s in n)return po[e]=s}return e}const El="http://www.w3.org/1999/xlink";function yl(n,e,t,i,r,s=vh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(El,e.slice(6,e.length)):n.setAttributeNS(El,e,t):t==null||s&&!xu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Sn(t)?String(t):t)}function Tl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Tf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=xu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function $i(n,e,t,i){n.addEventListener(e,t,i)}function _p(n,e,t,i){n.removeEventListener(e,t,i)}const bl=Symbol("_vei");function vp(n,e,t,i,r=null){const s=n[bl]||(n[bl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=xp(e);if(i){const c=s[e]=Ep(i,r);$i(n,o,c,l)}else a&&(_p(n,o,a,l),s[e]=void 0)}}const Al=/(?:Once|Passive|Capture)$/;function xp(n){let e;if(Al.test(n)){e={};let i;for(;i=n.match(Al);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ai(n.slice(2)),e]}let mo=0;const Mp=Promise.resolve(),Sp=()=>mo||(Mp.then(()=>mo=0),mo=Date.now());function Ep(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(yp(i,t.value),e,5,[i])};return t.value=n,t.attached=Sp(),t}function yp(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const wl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?fp(n,i,a):e==="style"?mp(n,t,i):Hs(e)?xa(e)||vp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bp(n,e,i,a))?(Tl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yl(n,e,i,a,s,e!=="value")):n._isVueCE&&(Ap(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?Tl(n,ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),yl(n,e,i,a))};function bp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wl(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wl(e)&&ht(t)?!1:e in n}function Ap(n,e){const t=n._def.props;if(!t)return!1;const i=ln(e);return Array.isArray(t)?t.some(r=>ln(r)===i):Object.keys(t).some(r=>ln(r)===i)}const Rl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>Es(e,t):e};function wp(n){n.target.composing=!0}function Cl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const go=Symbol("_assign");function Pl(n,e,t){return e&&(n=n.trim()),t&&(n=Ea(n)),n}const Rp={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[go]=Rl(r);const s=i||r.props&&r.props.type==="number";$i(n,e?"change":"input",a=>{a.target.composing||n[go](Pl(n.value,t,s))}),(t||s)&&$i(n,"change",()=>{n.value=Pl(n.value,t,s)}),e||($i(n,"compositionstart",wp),$i(n,"compositionend",Cl),$i(n,"change",Cl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[go]=Rl(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ea(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Cp=St({patchProp:Tp},cp);let Ll;function Pp(){return Ll||(Ll=Gd(Cp))}const Lp=(...n)=>{const e=Pp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Up(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Dp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Dp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Up(n){return ht(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="158",Li={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ip=0,Dl=1,Np=2,bf=1,Op=2,Ln=3,si=0,Ft=1,On=2,ti=0,nr=1,Ul=2,Il=3,Nl=4,Fp=5,gi=100,Bp=101,zp=102,Ol=103,Fl=104,Hp=200,Gp=201,Vp=202,kp=203,aa=204,la=205,Wp=206,Xp=207,qp=208,Yp=209,jp=210,Kp=211,$p=212,Zp=213,Jp=214,Qp=0,em=1,tm=2,Is=3,nm=4,im=5,rm=6,sm=7,Af=0,om=1,am=2,ni=0,lm=1,cm=2,um=3,fm=4,hm=5,wf=300,or=301,ar=302,ca=303,ua=304,Ks=306,fa=1e3,on=1001,ha=1002,Pt=1003,Bl=1004,_o=1005,Kt=1006,dm=1007,Ir=1008,ii=1009,pm=1010,mm=1011,Ha=1012,Rf=1013,Qn=1014,ei=1015,Nr=1016,Cf=1017,Pf=1018,Mi=1020,gm=1021,an=1023,_m=1024,vm=1025,Si=1026,lr=1027,xm=1028,Lf=1029,Mm=1030,Df=1031,Uf=1033,vo=33776,xo=33777,Mo=33778,So=33779,zl=35840,Hl=35841,Gl=35842,Vl=35843,Sm=36196,kl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,Kl=37812,$l=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,Eo=36492,sc=36494,oc=36495,Em=36283,ac=36284,lc=36285,cc=36286,If=3e3,Ei=3001,ym=3200,Tm=3201,Nf=0,bm=1,Zt="",Mt="srgb",kn="srgb-linear",Ga="display-p3",$s="display-p3-linear",Ns="linear",st="srgb",Os="rec709",Fs="p3",Ui=7680,uc=519,Am=512,wm=513,Rm=514,Cm=515,Pm=516,Lm=517,Dm=518,Um=519,fc=35044,hc="300 es",da=1035,Fn=2e3,Bs=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],As=Math.PI/180,pa=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function Im(n,e){return(n%e+e)%e}function yo(n,e,t){return(1-t)*n+t*e}function dc(n){return(n&n-1)===0&&n!==0}function ma(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nm={DEG2RAD:As};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],h=r[6],b=r[1],S=r[4],E=r[7],A=r[2],P=r[5],R=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*p+o*S+l*P,s[6]=a*h+o*E+l*R,s[1]=c*v+u*b+f*A,s[4]=c*p+u*S+f*P,s[7]=c*h+u*E+f*R,s[2]=d*v+m*b+x*A,s[5]=d*p+m*S+x*P,s[8]=d*h+m*E+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ye;function Of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=zs("canvas");return n.style.display="block",n}const pc={};function Rr(n){n in pc||(pc[n]=!0,console.warn(n))}const mc=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[kn]:{transfer:Ns,primaries:Os,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:st,primaries:Os,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$s]:{transfer:Ns,primaries:Fs,toReference:n=>n.applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc)},[Ga]:{transfer:st,primaries:Fs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc).convertLinearToSRGB()}},Fm=new Set([kn,$s]),et={enabled:!0,_workingColorSpace:kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kr[e].toReference,r=Kr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Kr[n].primaries},getTransfer:function(n){return n===Zt?Ns:Kr[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=zs("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0;class kt extends wi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=on,r=on,s=Kt,a=Ir,o=an,l=ii,c=kt.DEFAULT_ANISOTROPY,u=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=zr(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ei?Mt:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Ei:If}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ei?Mt:Zt}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=wf;kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,A=(h+1)/2,P=(u+d)/4,R=(f+v)/4,ee=(x+p)/4;return S>E&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=R/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=ee/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=ee/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hm extends wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ei?Mt:Zt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zf extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gm extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*v,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const A=Math.sqrt(S),P=Math.atan2(A,h*b);p=Math.sin(p*P)/A,o=Math.sin(o*P)/A}const E=o*b;if(l=l*p+d*E,c=c*p+m*E,u=u*p+x*E,f=f*p+v*E,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new H,_c=new Ti;class Hr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Zr.subVectors(this.max,mr),Ni.subVectors(e.a,mr),Oi.subVectors(e.b,mr),Fi.subVectors(e.c,mr),Xn.subVectors(Oi,Ni),qn.subVectors(Fi,Oi),ui.subVectors(Ni,Fi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Ro(t,Ni,Oi,Fi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Ni,Oi,Fi,Zr))?!1:(Jr.crossVectors(Xn,qn),t=[Jr.x,Jr.y,Jr.z],Ro(t,Ni,Oi,Fi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new H,new H,new H,new H,new H,new H,new H,new H],en=new H,$r=new Hr,Ni=new H,Oi=new H,Fi=new H,Xn=new H,qn=new H,ui=new H,mr=new H,Zr=new H,Jr=new H,fi=new H;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){fi.fromArray(n,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vm=new Hr,gr=new H,Co=new H;class Gr{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Co)),this.expandByPoint(gr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new H,Po=new H,Qr=new H,Yn=new H,Lo=new H,es=new H,Do=new H;class Zs{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=Yn.dot(this.direction),l=-Yn.dot(Qr),c=Yn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(Qr,d),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),es.subVectors(i,e),Do.crossVectors(Lo,es);let a=this.direction.dot(Do),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(Yn,es));if(l<0)return null;const c=o*this.direction.dot(Lo.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(Do);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(km,e,Wm)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),jn.crossVectors(i,Ht),jn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),jn.crossVectors(i,Ht)),jn.normalize(),ts.crossVectors(Ht,jn),r[0]=jn.x,r[4]=ts.x,r[8]=Ht.x,r[1]=jn.y,r[5]=ts.y,r[9]=Ht.y,r[2]=jn.z,r[6]=ts.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],h=i[14],b=i[3],S=i[7],E=i[11],A=i[15],P=r[0],R=r[4],ee=r[8],T=r[12],w=r[1],oe=r[5],ae=r[9],de=r[13],F=r[2],J=r[6],ne=r[10],Y=r[14],le=r[3],fe=r[7],ue=r[11],B=r[15];return s[0]=a*P+o*w+l*F+c*le,s[4]=a*R+o*oe+l*J+c*fe,s[8]=a*ee+o*ae+l*ne+c*ue,s[12]=a*T+o*de+l*Y+c*B,s[1]=u*P+f*w+d*F+m*le,s[5]=u*R+f*oe+d*J+m*fe,s[9]=u*ee+f*ae+d*ne+m*ue,s[13]=u*T+f*de+d*Y+m*B,s[2]=x*P+v*w+p*F+h*le,s[6]=x*R+v*oe+p*J+h*fe,s[10]=x*ee+v*ae+p*ne+h*ue,s[14]=x*T+v*de+p*Y+h*B,s[3]=b*P+S*w+E*F+A*le,s[7]=b*R+S*oe+E*J+A*fe,s[11]=b*ee+S*ae+E*ne+A*ue,s[15]=b*T+S*de+E*Y+A*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],h=e[15],b=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,S=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,E=u*v*c-x*f*c+x*o*m-a*v*m-u*o*h+a*f*h,A=x*f*l-u*v*l-x*o*d+a*v*d+u*o*p-a*f*p,P=t*b+i*S+r*E+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=S*R,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=E*R,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*h-t*f*h)*R,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=A*R,e[13]=(u*v*r-x*f*r+x*i*d-t*v*d-u*i*p+t*f*p)*R,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,p=a*f,h=o*f,b=l*c,S=l*u,E=l*f,A=i.x,P=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(m+E)*A,r[2]=(x-S)*A,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(d+h))*P,r[6]=(p+b)*P,r[7]=0,r[8]=(x+S)*R,r[9]=(p-b)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/a,f=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Fn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Fn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Bs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Fn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Fn)x=(a+s)*f,v=-2*f;else if(o===Bs)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new H,tn=new at,km=new H(0,0,0),Wm=new H(1,1,1),jn=new H,ts=new H,Ht=new H,vc=new at,xc=new Ti;class Vr{constructor(e=0,t=0,i=0,r=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class Hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const Mc=new H,zi=new Ti,wn=new at,ns=new H,_r=new H,qm=new H,Ym=new Ti,Sc=new H(1,0,0),Ec=new H(0,1,0),yc=new H(0,0,1),jm={type:"added"},Km={type:"removed"};class vt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new Vr,i=new Ti,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ye}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(_r,ns,this.up):wn.lookAt(ns,_r,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new H,Rn=new H,Uo=new H,Cn=new H,Hi=new H,Gi=new H,Tc=new H,Io=new H,No=new H,Oo=new H;let is=!1;class sn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Rn.subVectors(i,t),Uo.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Rn),l=nn.dot(Uo),c=Rn.dot(Rn),u=Rn.dot(Uo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,r,s,a,o,l){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn),l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Rn.subVectors(e,t),nn.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),nn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Gi.subVectors(s,i),Io.subVectors(e,i);const l=Hi.dot(Io),c=Gi.dot(Io);if(l<=0&&c<=0)return t.copy(i);No.subVectors(e,r);const u=Hi.dot(No),f=Gi.dot(No);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);Oo.subVectors(e,s);const m=Hi.dot(Oo),x=Gi.dot(Oo);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Gi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Tc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Tc,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Im(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Fo(a,s,e+1/3),this.g=Fo(a,s,e),this.b=Fo(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return et.fromWorkingColorSpace(yt.copy(this),e),Math.round(Dt(yt.r*255,0,255))*65536+Math.round(Dt(yt.g*255,0,255))*256+Math.round(Dt(yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Mt){et.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(rs);const i=yo(Kn.h,rs.h,t),r=yo(Kn.s,rs.s,t),s=yo(Kn.l,rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new je;je.NAMES=Gf;let $m=0;class Ri extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=nr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==aa&&(i.blendSrc=this.blendSrc),this.blendDst!==la&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vf extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new H,ss=new ke;class Mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fc,this.updateRange={offset:0,count:-1},this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class kf extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wf extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zm=0;const Yt=new at,Bo=new vt,Vi=new H,Gt=new Hr,vr=new Hr,gt=new H;class Wt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Wf:kf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Gt.min,vr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,vr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(vr.min),Gt.expandByPoint(vr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),gt.add(Vi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new H,u[w]=new H;const f=new H,d=new H,m=new H,x=new ke,v=new ke,p=new ke,h=new H,b=new H;function S(w,oe,ae){f.fromArray(r,w*3),d.fromArray(r,oe*3),m.fromArray(r,ae*3),x.fromArray(a,w*2),v.fromArray(a,oe*2),p.fromArray(a,ae*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const de=1/(v.x*p.y-p.x*v.y);isFinite(de)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(de),b.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(de),c[w].add(h),c[oe].add(h),c[ae].add(h),u[w].add(b),u[oe].add(b),u[ae].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,oe=E.length;w<oe;++w){const ae=E[w],de=ae.start,F=ae.count;for(let J=de,ne=de+F;J<ne;J+=3)S(i[J+0],i[J+1],i[J+2])}const A=new H,P=new H,R=new H,ee=new H;function T(w){R.fromArray(s,w*3),ee.copy(R);const oe=c[w];A.copy(oe),A.sub(R.multiplyScalar(R.dot(oe))).normalize(),P.crossVectors(ee,oe);const de=P.dot(u[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=de}for(let w=0,oe=E.length;w<oe;++w){const ae=E[w],de=ae.start,F=ae.count;for(let J=de,ne=de+F;J<ne;J+=3)T(i[J+0]),T(i[J+1]),T(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new Mn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new at,hi=new Zs,os=new Gr,Ac=new H,ki=new H,Wi=new H,Xi=new H,zo=new H,as=new H,ls=new ke,cs=new ke,us=new ke,wc=new H,Rc=new H,Cc=new H,fs=new H,hs=new H;class Bn extends vt{constructor(e=new Wt,t=new Vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(zo.fromBufferAttribute(f,e),a?as.addScaledVector(zo,u):as.addScaledVector(zo.sub(t),u))}t.add(as)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(os.containsPoint(hi.origin)===!1&&(hi.intersectSphere(os,Ac)===null||hi.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(bc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(bc),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=S;E<A;E+=3){const P=o.getX(E),R=o.getX(E+1),ee=o.getX(E+2);r=ds(this,h,e,i,c,u,f,P,R,ee),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);r=ds(this,a,e,i,c,u,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,A=S;E<A;E+=3){const P=E,R=E+1,ee=E+2;r=ds(this,h,e,i,c,u,f,P,R,ee),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=p,S=p+1,E=p+2;r=ds(this,a,e,i,c,u,f,b,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jm(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;hs.copy(o),hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:n}}function ds(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ki),n.getVertexPosition(l,Wi),n.getVertexPosition(c,Xi);const u=Jm(n,e,t,i,ki,Wi,Xi,fs);if(u){r&&(ls.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,c),u.uv=sn.getInterpolation(fs,ki,Wi,Xi,ls,cs,us,new ke)),s&&(ls.fromBufferAttribute(s,o),cs.fromBufferAttribute(s,l),us.fromBufferAttribute(s,c),u.uv1=sn.getInterpolation(fs,ki,Wi,Xi,ls,cs,us,new ke),u.uv2=u.uv1),a&&(wc.fromBufferAttribute(a,o),Rc.fromBufferAttribute(a,l),Cc.fromBufferAttribute(a,c),u.normal=sn.getInterpolation(fs,ki,Wi,Xi,wc,Rc,Cc,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};sn.getNormal(ki,Wi,Xi,f.normal),u.face=f}return u}class kr extends Wt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function x(v,p,h,b,S,E,A,P,R,ee,T){const w=E/R,oe=A/ee,ae=E/2,de=A/2,F=P/2,J=R+1,ne=ee+1;let Y=0,le=0;const fe=new H;for(let ue=0;ue<ne;ue++){const B=ue*oe-de;for(let j=0;j<J;j++){const Me=j*w-ae;fe[v]=Me*b,fe[p]=B*S,fe[h]=F,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[p]=0,fe[h]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(j/R),f.push(1-ue/ee),Y+=1}}for(let ue=0;ue<ee;ue++)for(let B=0;B<R;B++){const j=d+B+J*ue,Me=d+B+J*(ue+1),Se=d+(B+1)+J*(ue+1),Te=d+(B+1)+J*ue;l.push(j,Me,Te),l.push(Me,Se,Te),le+=6}o.addGroup(m,le,T),m+=le,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function Qm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xf(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const eg={clone:cr,merge:Ct};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qf extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends qf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class ig extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new $t(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new $t(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new $t(qi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new $t(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new $t(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Yf extends kt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ei?Mt:Zt),this.texture=new Yf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kr(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ti});s.uniforms.tEquirect.value=t;const a=new Bn(r,s),o=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Kt),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ho=new H,sg=new H,og=new Ye;class Jn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||og.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Gr,ps=new H;class Va{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],h=r[12],b=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-h).normalize(),i[1].setComponents(l+s,d+c,p+m,E+h).normalize(),i[2].setComponents(l+a,d+u,p+x,E+b).normalize(),i[3].setComponents(l-a,d-u,p-x,E-b).normalize(),i[4].setComponents(l-o,d-f,p-v,E-S).normalize(),t===Fn)i[5].setComponents(l+o,d+f,p+v,E+S).normalize();else if(t===Bs)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ps.x=r.normal.x>0?e.max.x:e.min.x,ps.y=r.normal.y>0?e.max.y:e.min.y,ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ag(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ka extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let S=0;S<c;S++){const E=S*f-s;x.push(E,-b,0),v.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const S=b+c*h,E=b+c*(h+1),A=b+1+c*(h+1),P=b+1+c*h;m.push(S,E,P),m.push(E,A,P)}this.setIndex(m),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`
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
}`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,jg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,s_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,dv=`#define DISTANCE
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
}`,pv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,yv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,Fv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:ug,alphamap_pars_fragment:fg,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:xg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Tg,color_fragment:bg,color_pars_fragment:Ag,color_pars_vertex:wg,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ug,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:kg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_fragment:jg,lightmap_pars_fragment:Kg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:r_,lights_physical_pars_fragment:s_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:h_,map_fragment:d_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphcolor_vertex:x_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:y_,normal_fragment_maps:T_,normal_pars_fragment:b_,normal_pars_vertex:A_,normal_vertex:w_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:D_,opaque_fragment:U_,packing:I_,premultiplied_alpha_fragment:N_,project_vertex:O_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:k_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:j_,specularmap_fragment:K_,specularmap_pars_fragment:$_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:rv,background_vert:sv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:fv,depth_frag:hv,distanceRGBA_vert:dv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:_v,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:yv,meshmatcap_frag:Tv,meshnormal_vert:bv,meshnormal_frag:Av,meshphong_vert:wv,meshphong_frag:Rv,meshphysical_vert:Cv,meshphysical_frag:Pv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Iv,shadow_vert:Nv,shadow_frag:Ov,sprite_vert:Fv,sprite_frag:Bv},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},_n={basic:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ct([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ct([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ct([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ct([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ct([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ct([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ct([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ct([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};_n.physical={uniforms:Ct([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ms={r:0,b:0,g:0};function zv(n,e,t,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ks)?(u===void 0&&(u=new Bn(new kr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:cr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(S.colorSpace)!==st,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Bn(new ka(2,2),new bi({name:"BackgroundMaterial",uniforms:cr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(ms,Xf(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function Hv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(F,J,ne,Y,le){let fe=!1;if(a){const ue=v(Y,ne,J);c!==ue&&(c=ue,m(c.object)),fe=h(F,Y,ne,le),fe&&b(F,Y,ne,le)}else{const ue=J.wireframe===!0;(c.geometry!==Y.id||c.program!==ne.id||c.wireframe!==ue)&&(c.geometry=Y.id,c.program=ne.id,c.wireframe=ue,fe=!0)}le!==null&&t.update(le,n.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,ee(F,J,ne,Y),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function v(F,J,ne){const Y=ne.wireframe===!0;let le=o[F.id];le===void 0&&(le={},o[F.id]=le);let fe=le[J.id];fe===void 0&&(fe={},le[J.id]=fe);let ue=fe[Y];return ue===void 0&&(ue=p(d()),fe[Y]=ue),ue}function p(F){const J=[],ne=[],Y=[];for(let le=0;le<r;le++)J[le]=0,ne[le]=0,Y[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:Y,object:F,attributes:{},index:null}}function h(F,J,ne,Y){const le=c.attributes,fe=J.attributes;let ue=0;const B=ne.getAttributes();for(const j in B)if(B[j].location>=0){const Se=le[j];let Te=fe[j];if(Te===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),Se===void 0||Se.attribute!==Te||Te&&Se.data!==Te.data)return!0;ue++}return c.attributesNum!==ue||c.index!==Y}function b(F,J,ne,Y){const le={},fe=J.attributes;let ue=0;const B=ne.getAttributes();for(const j in B)if(B[j].location>=0){let Se=fe[j];Se===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor));const Te={};Te.attribute=Se,Se&&Se.data&&(Te.data=Se.data),le[j]=Te,ue++}c.attributes=le,c.attributesNum=ue,c.index=Y}function S(){const F=c.newAttributes;for(let J=0,ne=F.length;J<ne;J++)F[J]=0}function E(F){A(F,0)}function A(F,J){const ne=c.newAttributes,Y=c.enabledAttributes,le=c.attributeDivisors;ne[F]=1,Y[F]===0&&(n.enableVertexAttribArray(F),Y[F]=1),le[F]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),le[F]=J)}function P(){const F=c.newAttributes,J=c.enabledAttributes;for(let ne=0,Y=J.length;ne<Y;ne++)J[ne]!==F[ne]&&(n.disableVertexAttribArray(ne),J[ne]=0)}function R(F,J,ne,Y,le,fe,ue){ue===!0?n.vertexAttribIPointer(F,J,ne,le,fe):n.vertexAttribPointer(F,J,ne,Y,le,fe)}function ee(F,J,ne,Y){if(i.isWebGL2===!1&&(F.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const le=Y.attributes,fe=ne.getAttributes(),ue=J.defaultAttributeValues;for(const B in fe){const j=fe[B];if(j.location>=0){let Me=le[B];if(Me===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(Me=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(Me=F.instanceColor)),Me!==void 0){const Se=Me.normalized,Te=Me.itemSize,Ce=t.get(Me);if(Ce===void 0)continue;const Ne=Ce.buffer,De=Ce.type,Ue=Ce.bytesPerElement,Ze=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||Me.gpuType===Rf);if(Me.isInterleavedBufferAttribute){const Be=Me.data,_=Be.stride,U=Me.offset;if(Be.isInstancedInterleavedBuffer){for(let O=0;O<j.locationSize;O++)A(j.location+O,Be.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let O=0;O<j.locationSize;O++)E(j.location+O);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let O=0;O<j.locationSize;O++)R(j.location+O,Te/j.locationSize,De,Se,_*Ue,(U+Te/j.locationSize*O)*Ue,Ze)}else{if(Me.isInstancedBufferAttribute){for(let Be=0;Be<j.locationSize;Be++)A(j.location+Be,Me.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Be=0;Be<j.locationSize;Be++)E(j.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Be=0;Be<j.locationSize;Be++)R(j.location+Be,Te/j.locationSize,De,Se,Te*Ue,Te/j.locationSize*Be*Ue,Ze)}}else if(ue!==void 0){const Se=ue[B];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(j.location,Se);break;case 3:n.vertexAttrib3fv(j.location,Se);break;case 4:n.vertexAttrib4fv(j.location,Se);break;default:n.vertexAttrib1fv(j.location,Se)}}}}P()}function T(){ae();for(const F in o){const J=o[F];for(const ne in J){const Y=J[ne];for(const le in Y)x(Y[le].object),delete Y[le];delete J[ne]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const J=o[F.id];for(const ne in J){const Y=J[ne];for(const le in Y)x(Y[le].object),delete Y[le];delete J[ne]}delete o[F.id]}function oe(F){for(const J in o){const ne=o[J];if(ne[F.id]===void 0)continue;const Y=ne[F.id];for(const le in Y)x(Y[le].object),delete Y[le];delete ne[F.id]}}function ae(){de(),u=!0,c!==l&&(c=l,m(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:de,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:oe,initAttributes:S,enableAttribute:E,disableUnusedAttributes:P}}function Gv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Vv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,E=a||e.has("OES_texture_float"),A=S&&E,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:P}}function kv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Jn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,S=b*4;let E=h.clippingState||null;l.value=E,E=u(x,d,S,m);for(let A=0;A!==S;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,E=m;S!==v;++S,E+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Wv(n){let e=new WeakMap;function t(a,o){return o===ca?a.mapping=or:o===ua&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ca||o===ua)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kf extends qf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,Pc=[.125,.215,.35,.446,.526,.582],_i=20,Go=new Kf,Lc=new je;let Vo=null,ko=0,Wo=0;const mi=(1+Math.sqrt(5))/2,ji=1/mi,Dc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,mi,ji),new H(0,mi,-ji),new H(ji,0,mi),new H(-ji,0,mi),new H(mi,ji,0),new H(-mi,ji,0)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,ko,Wo),e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Nr,format:an,colorSpace:kn,depthBuffer:!1},r=Ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xv(s)),this._blurMaterial=qv(s,e,t)}return r}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lc),u.toneMapping=ni,u.autoClear=!1;const m=new Vf({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new Bn(new kr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Lc),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;gs(r,b*S,h>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Bn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Go)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(r-1)%Dc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*_i-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):_i;p>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const h=[];let b=0;for(let R=0;R<_i;++R){const ee=R/v,T=Math.exp(-ee*ee/2);h.push(T),R===0?b+=T:R<p&&(b+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;const E=this._sizeLods[r],A=3*E*(r>S-Zi?r-S+Zi:0),P=4*(this._cubeSize-E);gs(t,A,P,3*E,2*E),l.setRenderTarget(t),l.render(f,Go)}}function Xv(n){const e=[],t=[],i=[];let r=n;const s=n-Zi+1+Pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Zi?l=Pc[a-n+Zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,h=1,b=new Float32Array(v*x*m),S=new Float32Array(p*x*m),E=new Float32Array(h*x*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,ee=P>2?0:-1,T=[R,ee,0,R+2/3,ee,0,R+2/3,ee+1,0,R,ee,0,R+2/3,ee+1,0,R,ee+1,0];b.set(T,v*x*P),S.set(d,p*x*P);const w=[P,P,P,P,P,P];E.set(w,h*x*P)}const A=new Wt;A.setAttribute("position",new Mn(b,v)),A.setAttribute("uv",new Mn(S,p)),A.setAttribute("faceIndex",new Mn(E,h)),e.push(A),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ic(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qv(n,e,t){const i=new Float32Array(_i),r=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Nc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}function Yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ua,u=l===or||l===ar;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Uc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Uc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Kv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let S=0,E=b.length;S<E;S+=3){const A=b[S+0],P=b[S+1],R=b[S+2];d.push(A,P,P,R,R,A)}}else if(x!==void 0){const b=x.array;v=x.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const A=S+0,P=S+1,R=S+2;d.push(A,P,P,R,R,A)}}else return;const p=new(Of(d)?Wf:kf)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function $v(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Zv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Jv(n,e){return n[0]-e[0]}function Qv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function e0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let J=function(){de.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],ee=u.morphAttributes.color||[];let T=0;S===!0&&(T=1),E===!0&&(T=2),A===!0&&(T=3);let w=u.attributes.position.count*T,oe=1;w>e.maxTextureSize&&(oe=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const ae=new Float32Array(w*oe*4*v),de=new zf(ae,w,oe,v);de.type=ei,de.needsUpdate=!0;const F=T*4;for(let ne=0;ne<v;ne++){const Y=P[ne],le=R[ne],fe=ee[ne],ue=w*oe*4*ne;for(let B=0;B<Y.count;B++){const j=B*F;S===!0&&(a.fromBufferAttribute(Y,B),ae[ue+j+0]=a.x,ae[ue+j+1]=a.y,ae[ue+j+2]=a.z,ae[ue+j+3]=0),E===!0&&(a.fromBufferAttribute(le,B),ae[ue+j+4]=a.x,ae[ue+j+5]=a.y,ae[ue+j+6]=a.z,ae[ue+j+7]=0),A===!0&&(a.fromBufferAttribute(fe,B),ae[ue+j+8]=a.x,ae[ue+j+9]=a.y,ae[ue+j+10]=a.z,ae[ue+j+11]=fe.itemSize===4?a.w:1)}}p={count:v,texture:de,size:new ke(w,oe)},s.set(u,p),u.addEventListener("dispose",J)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let E=0;E<x;E++)v[E]=[E,0];i[u.id]=v}for(let E=0;E<x;E++){const A=v[E];A[0]=E,A[1]=d[E]}v.sort(Qv);for(let E=0;E<8;E++)E<x&&v[E][1]?(o[E][0]=v[E][0],o[E][1]=v[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Jv);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const A=o[E],P=A[0],R=A[1];P!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+E)!==p[P]&&u.setAttribute("morphTarget"+E,p[P]),h&&u.getAttribute("morphNormal"+E)!==h[P]&&u.setAttribute("morphNormal"+E,h[P]),r[E]=R,b+=R):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function t0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const $f=new kt,Zf=new zf,Jf=new Gm,Qf=new Yf,Fc=[],Bc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fc[r];if(s===void 0&&(s=new Float32Array(r),Fc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Js(n,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Gc.set(i),n.uniformMatrix2fv(this.addr,!1,Gc),pt(t,i)}}function a0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Hc.set(i),n.uniformMatrix3fv(this.addr,!1,Hc),pt(t,i)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;zc.set(i),n.uniformMatrix4fv(this.addr,!1,zc),pt(t,i)}}function c0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function d0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function _0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||$f,r)}function v0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jf,r)}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qf,r)}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zf,r)}function S0(n){switch(n){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(n,e){n.uniform1fv(this.addr,e)}function y0(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function T0(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function b0(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w0(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R0(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C0(n,e){n.uniform1iv(this.addr,e)}function P0(n,e){n.uniform2iv(this.addr,e)}function L0(n,e){n.uniform3iv(this.addr,e)}function D0(n,e){n.uniform4iv(this.addr,e)}function U0(n,e){n.uniform1uiv(this.addr,e)}function I0(n,e){n.uniform2uiv(this.addr,e)}function N0(n,e){n.uniform3uiv(this.addr,e)}function O0(n,e){n.uniform4uiv(this.addr,e)}function F0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||$f,s[a])}function B0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jf,s[a])}function z0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qf,s[a])}function H0(n,e,t){const i=this.cache,r=e.length,s=Js(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zf,s[a])}function G0(n){switch(n){case 5126:return E0;case 35664:return y0;case 35665:return T0;case 35666:return b0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return I0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}class V0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=S0(t.type)}}class k0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=G0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Vc(n,e){n.seq.push(e),n.map[e.id]=e}function X0(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const s=Xo.exec(i),a=Xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vc(t,c===void 0?new V0(o,n,e):new k0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new W0(o),Vc(t,f)),t=f}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);X0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function kc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q0=37297;let Y0=0;function j0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function K0(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Fs&&t===Os?i="LinearDisplayP3ToLinearSRGB":e===Os&&t===Fs&&(i="LinearSRGBToLinearDisplayP3"),n){case kn:case $s:return[i,"LinearTransferOETF"];case Mt:case Ga:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+j0(n.getShaderSource(e),a)}else return r}function $0(n,e){const t=K0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z0(n,e){let t;switch(e){case lm:t="Linear";break;case cm:t="Reinhard";break;case um:t="OptimizedCineon";break;case fm:t="ACESFilmic";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Q0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ex(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Mr(n){return n!==""}function Xc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(n){return n.replace(tx,ix)}const nx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ix(n,e){let t=Xe[e];if(t===void 0){const i=nx.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(n){return n.replace(rx,sx)}function sx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Af:e="ENVMAP_BLENDING_MULTIPLY";break;case om:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=ax(t),u=lx(t),f=cx(t),d=ux(t),m=t.isWebGL2?"":J0(t),x=Q0(s),v=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),h.length>0&&(h+=`
`)):(p=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),h=[m,jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ni?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=ga(a),a=Xc(a,t),a=qc(a,t),o=ga(o),o=Xc(o,t),o=qc(o,t),a=Yc(a),o=Yc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=b+p+a,E=b+h+o,A=kc(r,r.VERTEX_SHADER,S),P=kc(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(oe){if(n.debug.checkShaderErrors){const ae=r.getProgramInfoLog(v).trim(),de=r.getShaderInfoLog(A).trim(),F=r.getShaderInfoLog(P).trim();let J=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,P);else{const Y=Wc(r,A,"vertex"),le=Wc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+Y+`
`+le)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(de===""||F==="")&&(ne=!1);ne&&(oe.diagnostics={runnable:J,programLog:ae,vertexShader:{log:de,prefix:p},fragmentShader:{log:F,prefix:h}})}r.deleteShader(A),r.deleteShader(P),ee=new ws(r,v),T=ex(r,v)}let ee;this.getUniforms=function(){return ee===void 0&&R(this),ee};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,q0)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=P,this}let hx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new px(e),t.set(e,i)),i}}class px{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function mx(n,e,t,i,r,s,a){const o=new Hf,l=new dx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return T===0?"uv":`uv${T}`}function p(T,w,oe,ae,de){const F=ae.fog,J=de.geometry,ne=T.isMeshStandardMaterial?ae.environment:null,Y=(T.isMeshStandardMaterial?t:e).get(T.envMap||ne),le=Y&&Y.mapping===Ks?Y.image.height:null,fe=x[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=ue!==void 0?ue.length:0;let j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let Me,Se,Te,Ce;if(fe){const ct=_n[fe];Me=ct.vertexShader,Se=ct.fragmentShader}else Me=T.vertexShader,Se=T.fragmentShader,l.update(T),Te=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);const Ne=n.getRenderTarget(),De=de.isInstancedMesh===!0,Ue=!!T.map,Ze=!!T.matcap,Be=!!Y,_=!!T.aoMap,U=!!T.lightMap,O=!!T.bumpMap,q=!!T.normalMap,W=!!T.displacementMap,te=!!T.emissiveMap,I=!!T.metalnessMap,L=!!T.roughnessMap,V=T.anisotropy>0,z=T.clearcoat>0,se=T.iridescence>0,M=T.sheen>0,g=T.transmission>0,D=V&&!!T.anisotropyMap,k=z&&!!T.clearcoatMap,K=z&&!!T.clearcoatNormalMap,X=z&&!!T.clearcoatRoughnessMap,he=se&&!!T.iridescenceMap,ie=se&&!!T.iridescenceThicknessMap,ge=M&&!!T.sheenColorMap,C=M&&!!T.sheenRoughnessMap,pe=!!T.specularMap,ce=!!T.specularColorMap,Ae=!!T.specularIntensityMap,ye=g&&!!T.transmissionMap,Re=g&&!!T.thicknessMap,we=!!T.gradientMap,Ee=!!T.alphaMap,We=T.alphaTest>0,N=!!T.alphaHash,ve=!!T.extensions,me=!!J.attributes.uv1,re=!!J.attributes.uv2,_e=!!J.attributes.uv3;let Le=ni;return T.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Le=n.toneMapping),{isWebGL2:u,shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Se,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:De,instancingColor:De&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:kn,map:Ue,matcap:Ze,envMap:Be,envMapMode:Be&&Y.mapping,envMapCubeUVHeight:le,aoMap:_,lightMap:U,bumpMap:O,normalMap:q,displacementMap:d&&W,emissiveMap:te,normalMapObjectSpace:q&&T.normalMapType===bm,normalMapTangentSpace:q&&T.normalMapType===Nf,metalnessMap:I,roughnessMap:L,anisotropy:V,anisotropyMap:D,clearcoat:z,clearcoatMap:k,clearcoatNormalMap:K,clearcoatRoughnessMap:X,iridescence:se,iridescenceMap:he,iridescenceThicknessMap:ie,sheen:M,sheenColorMap:ge,sheenRoughnessMap:C,specularMap:pe,specularColorMap:ce,specularIntensityMap:Ae,transmission:g,transmissionMap:ye,thicknessMap:Re,gradientMap:we,opaque:T.transparent===!1&&T.blending===nr,alphaMap:Ee,alphaTest:We,alphaHash:N,combine:T.combine,mapUv:Ue&&v(T.map.channel),aoMapUv:_&&v(T.aoMap.channel),lightMapUv:U&&v(T.lightMap.channel),bumpMapUv:O&&v(T.bumpMap.channel),normalMapUv:q&&v(T.normalMap.channel),displacementMapUv:W&&v(T.displacementMap.channel),emissiveMapUv:te&&v(T.emissiveMap.channel),metalnessMapUv:I&&v(T.metalnessMap.channel),roughnessMapUv:L&&v(T.roughnessMap.channel),anisotropyMapUv:D&&v(T.anisotropyMap.channel),clearcoatMapUv:k&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:K&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:C&&v(T.sheenRoughnessMap.channel),specularMapUv:pe&&v(T.specularMap.channel),specularColorMapUv:ce&&v(T.specularColorMap.channel),specularIntensityMapUv:Ae&&v(T.specularIntensityMap.channel),transmissionMapUv:ye&&v(T.transmissionMap.channel),thicknessMapUv:Re&&v(T.thicknessMap.channel),alphaMapUv:Ee&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(q||V),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:re,vertexUv3s:_e,pointsUvs:de.isPoints===!0&&!!J.attributes.uv&&(Ue||Ee),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===On,flipSided:T.side===Ft,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ve&&T.extensions.derivatives===!0,extensionFragDepth:ve&&T.extensions.fragDepth===!0,extensionDrawBuffers:ve&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const oe in T.defines)w.push(oe),w.push(T.defines[oe]);return T.isRawShaderMaterial===!1&&(b(w,T),S(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function b(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function S(T,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function E(T){const w=x[T.type];let oe;if(w){const ae=_n[w];oe=eg.clone(ae.uniforms)}else oe=T.uniforms;return oe}function A(T,w){let oe;for(let ae=0,de=c.length;ae<de;ae++){const F=c[ae];if(F.cacheKey===w){oe=F,++oe.usedTimes;break}}return oe===void 0&&(oe=new fx(n,w,T,s),c.push(oe)),oe}function P(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function R(T){l.remove(T)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:ee}}function gx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $c(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||_x),i.length>1&&i.sort(d||Kc),r.length>1&&r.sort(d||Kc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function vx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new $c,n.set(i,[a])):r>=s.length?(a=new $c,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new je};break;case"SpotLight":t={position:new H,direction:new H,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Mx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yx(n,e){const t=new xx,i=Mx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new at,o=new at;function l(u,f){let d=0,m=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let v=0,p=0,h=0,b=0,S=0,E=0,A=0,P=0,R=0,ee=0,T=0;u.sort(Ex);const w=f===!0?Math.PI:1;for(let ae=0,de=u.length;ae<de;ae++){const F=u[ae],J=F.color,ne=F.intensity,Y=F.distance,le=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=J.r*ne*w,m+=J.g*ne*w,x+=J.b*ne*w;else if(F.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(F.sh.coefficients[fe],ne);T++}else if(F.isDirectionalLight){const fe=t.get(F);if(fe.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const ue=F.shadow,B=i.get(F);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=le,r.directionalShadowMatrix[v]=F.shadow.matrix,E++}r.directional[v]=fe,v++}else if(F.isSpotLight){const fe=t.get(F);fe.position.setFromMatrixPosition(F.matrixWorld),fe.color.copy(J).multiplyScalar(ne*w),fe.distance=Y,fe.coneCos=Math.cos(F.angle),fe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),fe.decay=F.decay,r.spot[h]=fe;const ue=F.shadow;if(F.map&&(r.spotLightMap[R]=F.map,R++,ue.updateMatrices(F),F.castShadow&&ee++),r.spotLightMatrix[h]=ue.matrix,F.castShadow){const B=i.get(F);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[h]=B,r.spotShadowMap[h]=le,P++}h++}else if(F.isRectAreaLight){const fe=t.get(F);fe.color.copy(J).multiplyScalar(ne),fe.halfWidth.set(F.width*.5,0,0),fe.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=fe,b++}else if(F.isPointLight){const fe=t.get(F);if(fe.color.copy(F.color).multiplyScalar(F.intensity*w),fe.distance=F.distance,fe.decay=F.decay,F.castShadow){const ue=F.shadow,B=i.get(F);B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=le,r.pointShadowMatrix[p]=F.shadow.matrix,A++}r.point[p]=fe,p++}else if(F.isHemisphereLight){const fe=t.get(F);fe.skyColor.copy(F.color).multiplyScalar(ne*w),fe.groundColor.copy(F.groundColor).multiplyScalar(ne*w),r.hemi[S]=fe,S++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const oe=r.hash;(oe.directionalLength!==v||oe.pointLength!==p||oe.spotLength!==h||oe.rectAreaLength!==b||oe.hemiLength!==S||oe.numDirectionalShadows!==E||oe.numPointShadows!==A||oe.numSpotShadows!==P||oe.numSpotMaps!==R||oe.numLightProbes!==T)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+R-ee,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=ee,r.numLightProbes=T,oe.directionalLength=v,oe.pointLength=p,oe.spotLength=h,oe.rectAreaLength=b,oe.hemiLength=S,oe.numDirectionalShadows=E,oe.numPointShadows=A,oe.numSpotShadows=P,oe.numSpotMaps=R,oe.numLightProbes=T,r.version=Sx++)}function c(u,f){let d=0,m=0,x=0,v=0,p=0;const h=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const E=u[b];if(E.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(E.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),x++}else if(E.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),o.identity(),a.copy(E.matrixWorld),a.premultiply(h),o.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Zc(n,e){const t=new yx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Zc(n,e),t.set(s,[l])):a>=o.length?(l=new Zc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class bx extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ax extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`;function Cx(n,e,t){let i=new Va;const r=new ke,s=new ke,a=new _t,o=new bx({depthPacking:Tm}),l=new Ax,c={},u=t.maxTextureSize,f={[si]:Ft,[Ft]:si,[On]:On},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:wx,fragmentShader:Rx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Wt;x.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let h=this.type;this.render=function(A,P,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const ee=n.getRenderTarget(),T=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(ti),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ae=h!==Ln&&this.type===Ln,de=h===Ln&&this.type!==Ln;for(let F=0,J=A.length;F<J;F++){const ne=A[F],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const le=Y.getFrameExtents();if(r.multiply(le),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,Y.mapSize.y=s.y)),Y.map===null||ae===!0||de===!0){const ue=this.type!==Ln?{minFilter:Pt,magFilter:Pt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yi(r.x,r.y,ue),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const fe=Y.getViewportCount();for(let ue=0;ue<fe;ue++){const B=Y.getViewport(ue);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),oe.viewport(a),Y.updateMatrices(ne,ue),i=Y.getFrustum(),E(P,R,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Ln&&b(Y,R),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(ee,T,w)};function b(A,P){const R=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,R,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,R,m,v,null)}function S(A,P,R,ee){let T=null;const w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)T=w;else if(T=R.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const oe=T.uuid,ae=P.uuid;let de=c[oe];de===void 0&&(de={},c[oe]=de);let F=de[ae];F===void 0&&(F=T.clone(),de[ae]=F),T=F}if(T.visible=P.visible,T.wireframe=P.wireframe,ee===Ln?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const oe=n.properties.get(T);oe.light=R}return T}function E(A,P,R,ee,T){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Ln)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const ae=e.update(A),de=A.material;if(Array.isArray(de)){const F=ae.groups;for(let J=0,ne=F.length;J<ne;J++){const Y=F[J],le=de[Y.materialIndex];if(le&&le.visible){const fe=S(A,le,ee,T);n.renderBufferDirect(R,null,ae,fe,A,Y)}}}else if(de.visible){const F=S(A,de,ee,T);n.renderBufferDirect(R,null,ae,F,A,null)}}const oe=A.children;for(let ae=0,de=oe.length;ae<de;ae++)E(oe[ae],P,R,ee,T)}}function Px(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const ve=new _t;let me=null;const re=new _t(0,0,0,0);return{setMask:function(_e){me!==_e&&!N&&(n.colorMask(_e,_e,_e,_e),me=_e)},setLocked:function(_e){N=_e},setClear:function(_e,Le,Ke,ct,Xt){Xt===!0&&(_e*=ct,Le*=ct,Ke*=ct),ve.set(_e,Le,Ke,ct),re.equals(ve)===!1&&(n.clearColor(_e,Le,Ke,ct),re.copy(ve))},reset:function(){N=!1,me=null,re.set(-1,0,0,0)}}}function s(){let N=!1,ve=null,me=null,re=null;return{setTest:function(_e){_e?Ue(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(_e){ve!==_e&&!N&&(n.depthMask(_e),ve=_e)},setFunc:function(_e){if(me!==_e){switch(_e){case Qp:n.depthFunc(n.NEVER);break;case em:n.depthFunc(n.ALWAYS);break;case tm:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case nm:n.depthFunc(n.EQUAL);break;case im:n.depthFunc(n.GEQUAL);break;case rm:n.depthFunc(n.GREATER);break;case sm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=_e}},setLocked:function(_e){N=_e},setClear:function(_e){re!==_e&&(n.clearDepth(_e),re=_e)},reset:function(){N=!1,ve=null,me=null,re=null}}}function a(){let N=!1,ve=null,me=null,re=null,_e=null,Le=null,Ke=null,ct=null,Xt=null;return{setTest:function(it){N||(it?Ue(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(it){ve!==it&&!N&&(n.stencilMask(it),ve=it)},setFunc:function(it,At,fn){(me!==it||re!==At||_e!==fn)&&(n.stencilFunc(it,At,fn),me=it,re=At,_e=fn)},setOp:function(it,At,fn){(Le!==it||Ke!==At||ct!==fn)&&(n.stencilOp(it,At,fn),Le=it,Ke=At,ct=fn)},setLocked:function(it){N=it},setClear:function(it){Xt!==it&&(n.clearStencil(it),Xt=it)},reset:function(){N=!1,ve=null,me=null,re=null,_e=null,Le=null,Ke=null,ct=null,Xt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,S=null,E=null,A=null,P=null,R=null,ee=null,T=new je(0,0,0),w=0,oe=!1,ae=null,de=null,F=null,J=null,ne=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,fe=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(ue)[1]),le=fe>=1):ue.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),le=fe>=2);let B=null,j={};const Me=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Te=new _t().fromArray(Me),Ce=new _t().fromArray(Se);function Ne(N,ve,me,re){const _e=new Uint8Array(4),Le=n.createTexture();n.bindTexture(N,Le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<me;Ke++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ve+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Le}const De={};De[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(Is),I(!1),L(Dl),Ue(n.CULL_FACE),W(ti);function Ue(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Ze(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Be(N,ve){return m[N]!==ve?(n.bindFramebuffer(N,ve),m[N]=ve,i&&(N===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),N===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function _(N,ve){let me=v,re=!1;if(N)if(me=x.get(ve),me===void 0&&(me=[],x.set(ve,me)),N.isWebGLMultipleRenderTargets){const _e=N.texture;if(me.length!==_e.length||me[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Ke=_e.length;Le<Ke;Le++)me[Le]=n.COLOR_ATTACHMENT0+Le;me.length=_e.length,re=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,re=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,re=!0);re&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function U(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const O={[gi]:n.FUNC_ADD,[Bp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};if(i)O[Ol]=n.MIN,O[Fl]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(O[Ol]=N.MIN_EXT,O[Fl]=N.MAX_EXT)}const q={[Hp]:n.ZERO,[Gp]:n.ONE,[Vp]:n.SRC_COLOR,[aa]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[qp]:n.DST_COLOR,[Wp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[la]:n.ONE_MINUS_SRC_ALPHA,[Yp]:n.ONE_MINUS_DST_COLOR,[Xp]:n.ONE_MINUS_DST_ALPHA,[Kp]:n.CONSTANT_COLOR,[$p]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Jp]:n.ONE_MINUS_CONSTANT_ALPHA};function W(N,ve,me,re,_e,Le,Ke,ct,Xt,it){if(N===ti){h===!0&&(Ze(n.BLEND),h=!1);return}if(h===!1&&(Ue(n.BLEND),h=!0),N!==Fp){if(N!==b||it!==oe){if((S!==gi||P!==gi)&&(n.blendEquation(n.FUNC_ADD),S=gi,P=gi),it)switch(N){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.ONE,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,A=null,R=null,ee=null,T.set(0,0,0),w=0,b=N,oe=it}return}_e=_e||ve,Le=Le||me,Ke=Ke||re,(ve!==S||_e!==P)&&(n.blendEquationSeparate(O[ve],O[_e]),S=ve,P=_e),(me!==E||re!==A||Le!==R||Ke!==ee)&&(n.blendFuncSeparate(q[me],q[re],q[Le],q[Ke]),E=me,A=re,R=Le,ee=Ke),(ct.equals(T)===!1||Xt!==w)&&(n.blendColor(ct.r,ct.g,ct.b,Xt),T.copy(ct),w=Xt),b=N,oe=!1}function te(N,ve){N.side===On?Ze(n.CULL_FACE):Ue(n.CULL_FACE);let me=N.side===Ft;ve&&(me=!me),I(me),N.blending===nr&&N.transparent===!1?W(ti):W(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const re=N.stencilWrite;c.setTest(re),re&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function I(N){ae!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),ae=N)}function L(N){N!==Ip?(Ue(n.CULL_FACE),N!==de&&(N===Dl?n.cullFace(n.BACK):N===Np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),de=N}function V(N){N!==F&&(le&&n.lineWidth(N),F=N)}function z(N,ve,me){N?(Ue(n.POLYGON_OFFSET_FILL),(J!==ve||ne!==me)&&(n.polygonOffset(ve,me),J=ve,ne=me)):Ze(n.POLYGON_OFFSET_FILL)}function se(N){N?Ue(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function M(N){N===void 0&&(N=n.TEXTURE0+Y-1),B!==N&&(n.activeTexture(N),B=N)}function g(N,ve,me){me===void 0&&(B===null?me=n.TEXTURE0+Y-1:me=B);let re=j[me];re===void 0&&(re={type:void 0,texture:void 0},j[me]=re),(re.type!==N||re.texture!==ve)&&(B!==me&&(n.activeTexture(me),B=me),n.bindTexture(N,ve||De[N]),re.type=N,re.texture=ve)}function D(){const N=j[B];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){Te.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Te.copy(N))}function Re(N){Ce.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function we(N,ve){let me=f.get(ve);me===void 0&&(me=new WeakMap,f.set(ve,me));let re=me.get(N);re===void 0&&(re=n.getUniformBlockIndex(ve,N.name),me.set(N,re))}function Ee(N,ve){const re=f.get(ve).get(N);u.get(ve)!==re&&(n.uniformBlockBinding(ve,re,N.__bindingPointIndex),u.set(ve,re))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},B=null,j={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,S=null,E=null,A=null,P=null,R=null,ee=null,T=new je(0,0,0),w=0,oe=!1,ae=null,de=null,F=null,J=null,ne=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:Ze,bindFramebuffer:Be,drawBuffers:_,useProgram:U,setBlending:W,setMaterial:te,setFlipSided:I,setCullFace:L,setLineWidth:V,setPolygonOffset:z,setScissorTest:se,activeTexture:M,bindTexture:g,unbindTexture:D,compressedTexImage2D:k,compressedTexImage3D:K,texImage2D:ce,texImage3D:Ae,updateUBOMapping:we,uniformBlockBinding:Ee,texStorage2D:C,texStorage3D:pe,texSubImage2D:X,texSubImage3D:he,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:ye,viewport:Re,reset:We}}function Lx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,g){return h?new OffscreenCanvas(M,g):zs("canvas")}function S(M,g,D,k){let K=1;if((M.width>k||M.height>k)&&(K=k/Math.max(M.width,M.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const X=g?ma:Math.floor,he=X(K*M.width),ie=X(K*M.height);v===void 0&&(v=b(he,ie));const ge=D?b(he,ie):v;return ge.width=he,ge.height=ie,ge.getContext("2d").drawImage(M,0,0,he,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+he+"x"+ie+")."),ge}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return dc(M.width)&&dc(M.height)}function A(M){return o?!1:M.wrapS!==on||M.wrapT!==on||M.minFilter!==Pt&&M.minFilter!==Kt}function P(M,g){return M.generateMipmaps&&g&&M.minFilter!==Pt&&M.minFilter!==Kt}function R(M){n.generateMipmap(M)}function ee(M,g,D,k,K=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(D===n.FLOAT&&(X=n.R32F),D===n.HALF_FLOAT&&(X=n.R16F),D===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(X=n.R8UI),D===n.UNSIGNED_SHORT&&(X=n.R16UI),D===n.UNSIGNED_INT&&(X=n.R32UI),D===n.BYTE&&(X=n.R8I),D===n.SHORT&&(X=n.R16I),D===n.INT&&(X=n.R32I)),g===n.RG&&(D===n.FLOAT&&(X=n.RG32F),D===n.HALF_FLOAT&&(X=n.RG16F),D===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RGBA){const he=K?Ns:et.getTransfer(k);D===n.FLOAT&&(X=n.RGBA32F),D===n.HALF_FLOAT&&(X=n.RGBA16F),D===n.UNSIGNED_BYTE&&(X=he===st?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function T(M,g,D){return P(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==Kt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){return M===Pt||M===Bl||M===_o?n.NEAREST:n.LINEAR}function oe(M){const g=M.target;g.removeEventListener("dispose",oe),de(g),g.isVideoTexture&&x.delete(g)}function ae(M){const g=M.target;g.removeEventListener("dispose",ae),J(g)}function de(M){const g=i.get(M);if(g.__webglInit===void 0)return;const D=M.source,k=p.get(D);if(k){const K=k[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(M),Object.keys(k).length===0&&p.delete(D)}i.remove(M)}function F(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const D=M.source,k=p.get(D);delete k[g.__cacheKey],a.memory.textures--}function J(M){const g=M.texture,D=i.get(M),k=i.get(g);if(k.__webglTexture!==void 0&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(D.__webglFramebuffer[K]))for(let X=0;X<D.__webglFramebuffer[K].length;X++)n.deleteFramebuffer(D.__webglFramebuffer[K][X]);else n.deleteFramebuffer(D.__webglFramebuffer[K]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[K])}else{if(Array.isArray(D.__webglFramebuffer))for(let K=0;K<D.__webglFramebuffer.length;K++)n.deleteFramebuffer(D.__webglFramebuffer[K]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let K=0;K<D.__webglColorRenderbuffer.length;K++)D.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[K]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,X=g.length;K<X;K++){const he=i.get(g[K]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(M)}let ne=0;function Y(){ne=0}function le(){const M=ne;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ne+=1,M}function fe(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ue(M,g){const D=i.get(M);if(M.isVideoTexture&&z(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(D,M,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function B(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ue(D,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function j(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ue(D,M,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function Me(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ze(D,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const Se={[fa]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[ha]:n.MIRRORED_REPEAT},Te={[Pt]:n.NEAREST,[Bl]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[dm]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},Ce={[Am]:n.NEVER,[Um]:n.ALWAYS,[wm]:n.LESS,[Cm]:n.LEQUAL,[Rm]:n.EQUAL,[Dm]:n.GEQUAL,[Pm]:n.GREATER,[Lm]:n.NOTEQUAL};function Ne(M,g,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,Se[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Se[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Se[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Te[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Te[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==on||g.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,w(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==Pt&&g.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Pt||g.minFilter!==_o&&g.minFilter!==Ir||g.type===ei&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function De(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",oe));const k=g.source;let K=p.get(k);K===void 0&&(K={},p.set(k,K));const X=fe(g);if(X!==M.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[X].usedTimes++;const he=K[M.__cacheKey];he!==void 0&&(K[M.__cacheKey].usedTimes--,he.usedTimes===0&&F(g)),M.__cacheKey=X,M.__webglTexture=K[X].texture}return D}function Ue(M,g,D){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const K=De(M,g),X=g.source;t.bindTexture(k,M.__webglTexture,n.TEXTURE0+D);const he=i.get(X);if(X.version!==he.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const ie=et.getPrimaries(et.workingColorSpace),ge=g.colorSpace===Zt?null:et.getPrimaries(g.colorSpace),C=g.colorSpace===Zt||ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const pe=A(g)&&E(g.image)===!1;let ce=S(g.image,pe,!1,u);ce=se(g,ce);const Ae=E(ce)||o,ye=s.convert(g.format,g.colorSpace);let Re=s.convert(g.type),we=ee(g.internalFormat,ye,Re,g.colorSpace,g.isVideoTexture);Ne(k,g,Ae);let Ee;const We=g.mipmaps,N=o&&g.isVideoTexture!==!0,ve=he.__version===void 0||K===!0,me=T(g,ce,Ae);if(g.isDepthTexture)we=n.DEPTH_COMPONENT,o?g.type===ei?we=n.DEPTH_COMPONENT32F:g.type===Qn?we=n.DEPTH_COMPONENT24:g.type===Mi?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:g.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Si&&we===n.DEPTH_COMPONENT&&g.type!==Ha&&g.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Qn,Re=s.convert(g.type)),g.format===lr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,g.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Mi,Re=s.convert(g.type))),ve&&(N?t.texStorage2D(n.TEXTURE_2D,1,we,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Re,null));else if(g.isDataTexture)if(We.length>0&&Ae){N&&ve&&t.texStorage2D(n.TEXTURE_2D,me,we,We[0].width,We[0].height);for(let re=0,_e=We.length;re<_e;re++)Ee=We[re],N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,ye,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,re,we,Ee.width,Ee.height,0,ye,Re,Ee.data);g.generateMipmaps=!1}else N?(ve&&t.texStorage2D(n.TEXTURE_2D,me,we,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Re,ce.data)):t.texImage2D(n.TEXTURE_2D,0,we,ce.width,ce.height,0,ye,Re,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,we,We[0].width,We[0].height,ce.depth);for(let re=0,_e=We.length;re<_e;re++)Ee=We[re],g.format!==an?ye!==null?N?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,ce.depth,ye,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,we,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,ce.depth,ye,Re,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,we,Ee.width,Ee.height,ce.depth,0,ye,Re,Ee.data)}else{N&&ve&&t.texStorage2D(n.TEXTURE_2D,me,we,We[0].width,We[0].height);for(let re=0,_e=We.length;re<_e;re++)Ee=We[re],g.format!==an?ye!==null?N?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,re,we,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ee.width,Ee.height,ye,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,re,we,Ee.width,Ee.height,0,ye,Re,Ee.data)}else if(g.isDataArrayTexture)N?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,we,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Re,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ce.width,ce.height,ce.depth,0,ye,Re,ce.data);else if(g.isData3DTexture)N?(ve&&t.texStorage3D(n.TEXTURE_3D,me,we,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Re,ce.data)):t.texImage3D(n.TEXTURE_3D,0,we,ce.width,ce.height,ce.depth,0,ye,Re,ce.data);else if(g.isFramebufferTexture){if(ve)if(N)t.texStorage2D(n.TEXTURE_2D,me,we,ce.width,ce.height);else{let re=ce.width,_e=ce.height;for(let Le=0;Le<me;Le++)t.texImage2D(n.TEXTURE_2D,Le,we,re,_e,0,ye,Re,null),re>>=1,_e>>=1}}else if(We.length>0&&Ae){N&&ve&&t.texStorage2D(n.TEXTURE_2D,me,we,We[0].width,We[0].height);for(let re=0,_e=We.length;re<_e;re++)Ee=We[re],N?t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye,Re,Ee):t.texImage2D(n.TEXTURE_2D,re,we,ye,Re,Ee);g.generateMipmaps=!1}else N?(ve&&t.texStorage2D(n.TEXTURE_2D,me,we,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Re,ce)):t.texImage2D(n.TEXTURE_2D,0,we,ye,Re,ce);P(g,Ae)&&R(k),he.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ze(M,g,D){if(g.image.length!==6)return;const k=De(M,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const X=i.get(K);if(K.version!==X.__version||k===!0){t.activeTexture(n.TEXTURE0+D);const he=et.getPrimaries(et.workingColorSpace),ie=g.colorSpace===Zt?null:et.getPrimaries(g.colorSpace),ge=g.colorSpace===Zt||he===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const C=g.isCompressedTexture||g.image[0].isCompressedTexture,pe=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let re=0;re<6;re++)!C&&!pe?ce[re]=S(g.image[re],!1,!0,c):ce[re]=pe?g.image[re].image:g.image[re],ce[re]=se(g,ce[re]);const Ae=ce[0],ye=E(Ae)||o,Re=s.convert(g.format,g.colorSpace),we=s.convert(g.type),Ee=ee(g.internalFormat,Re,we,g.colorSpace),We=o&&g.isVideoTexture!==!0,N=X.__version===void 0||k===!0;let ve=T(g,Ae,ye);Ne(n.TEXTURE_CUBE_MAP,g,ye);let me;if(C){We&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ee,Ae.width,Ae.height);for(let re=0;re<6;re++){me=ce[re].mipmaps;for(let _e=0;_e<me.length;_e++){const Le=me[_e];g.format!==an?Re!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ee,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Le.width,Le.height,Re,we,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ee,Le.width,Le.height,0,Re,we,Le.data)}}}else{me=g.mipmaps,We&&N&&(me.length>0&&ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ee,ce[0].width,ce[0].height));for(let re=0;re<6;re++)if(pe){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce[re].width,ce[re].height,Re,we,ce[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ee,ce[re].width,ce[re].height,0,Re,we,ce[re].data);for(let _e=0;_e<me.length;_e++){const Ke=me[_e].image[re].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Ke.width,Ke.height,Re,we,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ee,Ke.width,Ke.height,0,Re,we,Ke.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,we,ce[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ee,Re,we,ce[re]);for(let _e=0;_e<me.length;_e++){const Le=me[_e];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Re,we,Le.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ee,Re,we,Le.image[re])}}}P(g,ye)&&R(n.TEXTURE_CUBE_MAP),X.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Be(M,g,D,k,K,X){const he=s.convert(D.format,D.colorSpace),ie=s.convert(D.type),ge=ee(D.internalFormat,he,ie,D.colorSpace);if(!i.get(g).__hasExternalTextures){const pe=Math.max(1,g.width>>X),ce=Math.max(1,g.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,ge,pe,ce,g.depth,0,he,ie,null):t.texImage2D(K,X,ge,pe,ce,0,he,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),V(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,K,i.get(D).__webglTexture,0,L(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,K,i.get(D).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(M,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let k=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||V(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===ei?k=n.DEPTH_COMPONENT32F:K.type===Qn&&(k=n.DEPTH_COMPONENT24));const X=L(g);V(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,k,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,k,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const k=L(g);D&&V(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,g.width,g.height):V(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const k=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<k.length;K++){const X=k[K],he=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),ge=ee(X.internalFormat,he,ie,X.colorSpace),C=L(g);D&&V(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,ge,g.width,g.height):V(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,ge,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ge,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const k=i.get(g.depthTexture).__webglTexture,K=L(g);if(g.depthTexture.format===Si)V(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===lr)V(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function O(M){const g=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");U(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]=n.createRenderbuffer(),_(g.__webglDepthbuffer[k],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(M,g,D){const k=i.get(M);g!==void 0&&Be(k.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&O(M)}function W(M){const g=M.texture,D=i.get(M),k=i.get(g);M.addEventListener("dispose",ae),M.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,X=M.isWebGLMultipleRenderTargets===!0,he=E(M)||o;if(K){D.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ie]=[];for(let ge=0;ge<g.mipmaps.length;ge++)D.__webglFramebuffer[ie][ge]=n.createFramebuffer()}else D.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)D.__webglFramebuffer[ie]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const ie=M.texture;for(let ge=0,C=ie.length;ge<C;ge++){const pe=i.get(ie[ge]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&V(M)===!1){const ie=X?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const C=ie[ge];D.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ge]);const pe=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),Ae=ee(C.internalFormat,pe,ce,C.colorSpace,M.isXRRenderTarget===!0),ye=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,D.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g,he);for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Be(D.__webglFramebuffer[ie][ge],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge);else Be(D.__webglFramebuffer[ie],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);P(g,he)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const ie=M.texture;for(let ge=0,C=ie.length;ge<C;ge++){const pe=ie[ge],ce=i.get(pe);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Ne(n.TEXTURE_2D,pe,he),Be(D.__webglFramebuffer,M,pe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),P(pe,he)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ie=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,k.__webglTexture),Ne(ie,g,he),o&&g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Be(D.__webglFramebuffer[ge],M,g,n.COLOR_ATTACHMENT0,ie,ge);else Be(D.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ie,0);P(g,he)&&R(ie),t.unbindTexture()}M.depthBuffer&&O(M)}function te(M){const g=E(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let k=0,K=D.length;k<K;k++){const X=D[k];if(P(X,g)){const he=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ie=i.get(X).__webglTexture;t.bindTexture(he,ie),R(he),t.unbindTexture()}}}function I(M){if(o&&M.samples>0&&V(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,k=M.height;let K=n.COLOR_BUFFER_BIT;const X=[],he=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(M),ge=M.isWebGLMultipleRenderTargets===!0;if(ge)for(let C=0;C<g.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let C=0;C<g.length;C++){X.push(n.COLOR_ATTACHMENT0+C),M.depthBuffer&&X.push(he);const pe=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(pe===!1&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[C]),pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ge){const ce=i.get(g[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,D,k,0,0,D,k,K,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let C=0;C<g.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,ie.__webglColorRenderbuffer[C]);const pe=i.get(g[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function L(M){return Math.min(f,M.samples)}function V(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function se(M,g){const D=M.colorSpace,k=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===da||D!==kn&&D!==Zt&&(et.getTransfer(D)===st?o===!1?e.has("EXT_sRGB")===!0&&k===an?(M.format=da,M.minFilter=Kt,M.generateMipmaps=!1):g=Ff.sRGBToLinear(g):(k!==an||K!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=le,this.resetTextureUnits=Y,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=Me,this.rebindTextures=q,this.setupRenderTarget=W,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=V}function Dx(n,e,t){const i=t.isWebGL2;function r(s,a=Zt){let o;const l=et.getTransfer(a);if(s===ii)return n.UNSIGNED_BYTE;if(s===Cf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Pf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===pm)return n.BYTE;if(s===mm)return n.SHORT;if(s===Ha)return n.UNSIGNED_SHORT;if(s===Rf)return n.INT;if(s===Qn)return n.UNSIGNED_INT;if(s===ei)return n.FLOAT;if(s===Nr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gm)return n.ALPHA;if(s===an)return n.RGBA;if(s===_m)return n.LUMINANCE;if(s===vm)return n.LUMINANCE_ALPHA;if(s===Si)return n.DEPTH_COMPONENT;if(s===lr)return n.DEPTH_STENCIL;if(s===da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xm)return n.RED;if(s===Lf)return n.RED_INTEGER;if(s===Mm)return n.RG;if(s===Df)return n.RG_INTEGER;if(s===Uf)return n.RGBA_INTEGER;if(s===vo||s===xo||s===Mo||s===So)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===So)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zl||s===Hl||s===Gl||s===Vl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kl||s===Wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kl)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===ql||s===Yl||s===jl||s===Kl||s===$l||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ql)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$l)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ic)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eo||s===sc||s===oc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Eo)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===oc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Em||s===ac||s===lc||s===cc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Eo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ux extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nx extends kt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=Qn),i===void 0&&u===lr&&(i=Mi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ox extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,h=null;const b=[],S=[],E=new $t;E.layers.enable(1),E.viewport=new _t;const A=new $t;A.layers.enable(2),A.viewport=new _t;const P=[E,A],R=new Ux;R.layers.enable(1),R.layers.enable(2);let ee=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=b[B];return j===void 0&&(j=new qo,b[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=b[B];return j===void 0&&(j=new qo,b[B]=j),j.getGripSpace()},this.getHand=function(B){let j=b[B];return j===void 0&&(j=new qo,b[B]=j),j.getHandSpace()};function w(B){const j=S.indexOf(B.inputSource);if(j===-1)return;const Me=b[j];Me!==void 0&&(Me.update(B.inputSource,B.frame,c||a),Me.dispatchEvent({type:B.type,data:B.inputSource}))}function oe(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",ae);for(let B=0;B<b.length;B++){const j=S[B];j!==null&&(S[B]=null,b[B].disconnect(j))}ee=null,T=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),h=new yi(m.framebufferWidth,m.framebufferHeight,{format:an,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,Me=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?lr:Si,Me=v.stencil?Mi:Qn);const Te={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),h=new yi(d.textureWidth,d.textureHeight,{format:an,type:ii,depthTexture:new Nx(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ae(B){for(let j=0;j<B.removed.length;j++){const Me=B.removed[j],Se=S.indexOf(Me);Se>=0&&(S[Se]=null,b[Se].disconnect(Me))}for(let j=0;j<B.added.length;j++){const Me=B.added[j];let Se=S.indexOf(Me);if(Se===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=S.length){S.push(Me),Se=Ce;break}else if(S[Ce]===null){S[Ce]=Me,Se=Ce;break}if(Se===-1)break}const Te=b[Se];Te&&Te.connect(Me)}}const de=new H,F=new H;function J(B,j,Me){de.setFromMatrixPosition(j.matrixWorld),F.setFromMatrixPosition(Me.matrixWorld);const Se=de.distanceTo(F),Te=j.projectionMatrix.elements,Ce=Me.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),Ue=(Te[9]+1)/Te[5],Ze=(Te[9]-1)/Te[5],Be=(Te[8]-1)/Te[0],_=(Ce[8]+1)/Ce[0],U=Ne*Be,O=Ne*_,q=Se/(-Be+_),W=q*-Be;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(W),B.translateZ(q),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const te=Ne+q,I=De+q,L=U-W,V=O+(Se-W),z=Ue*De/I*te,se=Ze*De/I*te;B.projectionMatrix.makePerspective(L,V,z,se,te,I),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ne(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;R.near=A.near=E.near=B.near,R.far=A.far=E.far=B.far,(ee!==R.near||T!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),ee=R.near,T=R.far);const j=B.parent,Me=R.cameras;ne(R,j);for(let Se=0;Se<Me.length;Se++)ne(Me[Se],j);Me.length===2?J(R,E,A):R.projectionMatrix.copy(E.projectionMatrix),Y(B,R,j)};function Y(B,j,Me){Me===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(Me.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=pa*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let le=null;function fe(B,j){if(u=j.getViewerPose(c||a),x=j,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Se=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Te=0;Te<Me.length;Te++){const Ce=Me[Te];let Ne=null;if(m!==null)Ne=m.getViewport(Ce);else{const Ue=f.getViewSubImage(d,Ce);Ne=Ue.viewport,Te===0&&(e.setRenderTargetTextures(h,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(h))}let De=P[Te];De===void 0&&(De=new $t,De.layers.enable(Te),De.viewport=new _t,P[Te]=De),De.matrix.fromArray(Ce.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ce.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Te===0&&(R.matrix.copy(De.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(De)}}for(let Me=0;Me<b.length;Me++){const Se=S[Me],Te=b[Me];Se!==null&&Te!==void 0&&Te.update(Se,j,c||a)}le&&le(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}const ue=new jf;ue.setAnimationLoop(fe),this.setAnimationLoop=function(B){le=B},this.dispose=function(){}}}function Fx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Xf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ft&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ft&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const E=S.program;i.uniformBlockBinding(b,E)}function c(b,S){let E=r[b.id];E===void 0&&(x(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",p));const A=S.program;i.updateUBOMapping(b,A);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const S=f();b.__bindingPointIndex=S;const E=n.createBuffer(),A=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,R=E.length;P<R;P++){const ee=E[P];if(m(ee,P,A)===!0){const T=ee.__offset,w=Array.isArray(ee.value)?ee.value:[ee.value];let oe=0;for(let ae=0;ae<w.length;ae++){const de=w[ae],F=v(de);typeof de=="number"?(ee.__data[0]=de,n.bufferSubData(n.UNIFORM_BUFFER,T+oe,ee.__data)):de.isMatrix3?(ee.__data[0]=de.elements[0],ee.__data[1]=de.elements[1],ee.__data[2]=de.elements[2],ee.__data[3]=de.elements[0],ee.__data[4]=de.elements[3],ee.__data[5]=de.elements[4],ee.__data[6]=de.elements[5],ee.__data[7]=de.elements[0],ee.__data[8]=de.elements[6],ee.__data[9]=de.elements[7],ee.__data[10]=de.elements[8],ee.__data[11]=de.elements[0]):(de.toArray(ee.__data,oe),oe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,ee.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,E){const A=b.value;if(E[S]===void 0){if(typeof A=="number")E[S]=A;else{const P=Array.isArray(A)?A:[A],R=[];for(let ee=0;ee<P.length;ee++)R.push(P[ee].clone());E[S]=R}return!0}else if(typeof A=="number"){if(E[S]!==A)return E[S]=A,!0}else{const P=Array.isArray(E[S])?E[S]:[E[S]],R=Array.isArray(A)?A:[A];for(let ee=0;ee<P.length;ee++){const T=P[ee];if(T.equals(R[ee])===!1)return T.copy(R[ee]),!0}}return!1}function x(b){const S=b.uniforms;let E=0;const A=16;let P=0;for(let R=0,ee=S.length;R<ee;R++){const T=S[R],w={boundary:0,storage:0},oe=Array.isArray(T.value)?T.value:[T.value];for(let ae=0,de=oe.length;ae<de;ae++){const F=oe[ae],J=v(F);w.boundary+=J.boundary,w.storage+=J.storage}if(T.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,R>0){P=E%A;const ae=A-P;P!==0&&ae-w.boundary<0&&(E+=A-P,T.__offset=E)}E+=w.storage}return P=E%A,P>0&&(E+=A-P),b.__size=E,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class eh{constructor(e={}){const{canvas:t=Om(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const S=this;let E=!1,A=0,P=0,R=null,ee=-1,T=null;const w=new _t,oe=new _t;let ae=null;const de=new je(0);let F=0,J=t.width,ne=t.height,Y=1,le=null,fe=null;const ue=new _t(0,0,J,ne),B=new _t(0,0,J,ne);let j=!1;const Me=new Va;let Se=!1,Te=!1,Ce=null;const Ne=new at,De=new ke,Ue=new H,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return R===null?Y:1}let _=i;function U(y,G){for(let $=0;$<y.length;$++){const Z=y[$],Q=t.getContext(Z,G);if(Q!==null)return Q}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ve,!1),_===null){const G=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&G.shift(),_=U(G,y),_===null)throw U(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let O,q,W,te,I,L,V,z,se,M,g,D,k,K,X,he,ie,ge,C,pe,ce,Ae,ye,Re;function we(){O=new jv(_),q=new Vv(_,O,e),O.init(q),Ae=new Dx(_,O,q),W=new Px(_,O,q),te=new Zv(_),I=new gx,L=new Lx(_,O,W,I,q,Ae,te),V=new Wv(S),z=new Yv(S),se=new ag(_,q),ye=new Hv(_,O,se,q),M=new Kv(_,se,te,ye),g=new t0(_,M,se,te),C=new e0(_,q,L),he=new kv(I),D=new mx(S,V,z,O,q,ye,he),k=new Fx(S,I),K=new vx,X=new Tx(O,q),ge=new zv(S,V,z,W,g,d,l),ie=new Cx(S,g,q),Re=new Bx(_,te,q,W),pe=new Gv(_,O,te,q),ce=new $v(_,O,te,q),te.programs=D.programs,S.capabilities=q,S.extensions=O,S.properties=I,S.renderLists=K,S.shadowMap=ie,S.state=W,S.info=te}we();const Ee=new Ox(S,_);this.xr=Ee,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const y=O.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=O.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(J,ne,!1))},this.getSize=function(y){return y.set(J,ne)},this.setSize=function(y,G,$=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,ne=G,t.width=Math.floor(y*Y),t.height=Math.floor(G*Y),$===!0&&(t.style.width=y+"px",t.style.height=G+"px"),this.setViewport(0,0,y,G)},this.getDrawingBufferSize=function(y){return y.set(J*Y,ne*Y).floor()},this.setDrawingBufferSize=function(y,G,$){J=y,ne=G,Y=$,t.width=Math.floor(y*$),t.height=Math.floor(G*$),this.setViewport(0,0,y,G)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,G,$,Z){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,G,$,Z),W.viewport(w.copy(ue).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(B)},this.setScissor=function(y,G,$,Z){y.isVector4?B.set(y.x,y.y,y.z,y.w):B.set(y,G,$,Z),W.scissor(oe.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(y){W.setScissorTest(j=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(y=!0,G=!0,$=!0){let Z=0;if(y){let Q=!1;if(R!==null){const be=R.texture.format;Q=be===Uf||be===Df||be===Lf}if(Q){const be=R.texture.type,Pe=be===ii||be===Qn||be===Ha||be===Mi||be===Cf||be===Pf,Ie=ge.getClearColor(),Oe=ge.getClearAlpha(),qe=Ie.r,He=Ie.g,Ve=Ie.b;Pe?(m[0]=qe,m[1]=He,m[2]=Ve,m[3]=Oe,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=qe,x[1]=He,x[2]=Ve,x[3]=Oe,_.clearBufferiv(_.COLOR,0,x))}else Z|=_.COLOR_BUFFER_BIT}G&&(Z|=_.DEPTH_BUFFER_BIT),$&&(Z|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),K.dispose(),X.dispose(),I.dispose(),V.dispose(),z.dispose(),g.dispose(),ye.dispose(),Re.dispose(),D.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Xt),Ee.removeEventListener("sessionend",it),Ce&&(Ce.dispose(),Ce=null),At.stop()};function We(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=te.autoReset,G=ie.enabled,$=ie.autoUpdate,Z=ie.needsUpdate,Q=ie.type;we(),te.autoReset=y,ie.enabled=G,ie.autoUpdate=$,ie.needsUpdate=Z,ie.type=Q}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function me(y){const G=y.target;G.removeEventListener("dispose",me),re(G)}function re(y){_e(y),I.remove(y)}function _e(y){const G=I.get(y).programs;G!==void 0&&(G.forEach(function($){D.releaseProgram($)}),y.isShaderMaterial&&D.releaseShaderCache(y))}this.renderBufferDirect=function(y,G,$,Z,Q,be){G===null&&(G=Ze);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ie=sh(y,G,$,Z,Q);W.setMaterial(Z,Pe);let Oe=$.index,qe=1;if(Z.wireframe===!0){if(Oe=M.getWireframeAttribute($),Oe===void 0)return;qe=2}const He=$.drawRange,Ve=$.attributes.position;let lt=He.start*qe,Bt=(He.start+He.count)*qe;be!==null&&(lt=Math.max(lt,be.start*qe),Bt=Math.min(Bt,(be.start+be.count)*qe)),Oe!==null?(lt=Math.max(lt,0),Bt=Math.min(Bt,Oe.count)):Ve!=null&&(lt=Math.max(lt,0),Bt=Math.min(Bt,Ve.count));const mt=Bt-lt;if(mt<0||mt===1/0)return;ye.setup(Q,Z,Ie,$,Oe);let yn,ot=pe;if(Oe!==null&&(yn=se.get(Oe),ot=ce,ot.setIndex(yn)),Q.isMesh)Z.wireframe===!0?(W.setLineWidth(Z.wireframeLinewidth*Be()),ot.setMode(_.LINES)):ot.setMode(_.TRIANGLES);else if(Q.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),W.setLineWidth($e*Be()),Q.isLineSegments?ot.setMode(_.LINES):Q.isLineLoop?ot.setMode(_.LINE_LOOP):ot.setMode(_.LINE_STRIP)}else Q.isPoints?ot.setMode(_.POINTS):Q.isSprite&&ot.setMode(_.TRIANGLES);if(Q.isInstancedMesh)ot.renderInstances(lt,mt,Q.count);else if($.isInstancedBufferGeometry){const $e=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qs=Math.min($.instanceCount,$e);ot.renderInstances(lt,mt,Qs)}else ot.render(lt,mt)};function Le(y,G,$){y.transparent===!0&&y.side===On&&y.forceSinglePass===!1?(y.side=Ft,y.needsUpdate=!0,Xr(y,G,$),y.side=si,y.needsUpdate=!0,Xr(y,G,$),y.side=On):Xr(y,G,$)}this.compile=function(y,G,$=null){$===null&&($=y),p=X.get($),p.init(),b.push(p),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),y!==$&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(S._useLegacyLights);const Z=new Set;return y.traverse(function(Q){const be=Q.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const Ie=be[Pe];Le(Ie,$,Q),Z.add(Ie)}else Le(be,$,Q),Z.add(be)}),b.pop(),p=null,Z},this.compileAsync=function(y,G,$=null){const Z=this.compile(y,G,$);return new Promise(Q=>{function be(){if(Z.forEach(function(Pe){I.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){Q(y);return}setTimeout(be,10)}O.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ke=null;function ct(y){Ke&&Ke(y)}function Xt(){At.stop()}function it(){At.start()}const At=new jf;At.setAnimationLoop(ct),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(y){Ke=y,Ee.setAnimationLoop(y),y===null?At.stop():At.start()},Ee.addEventListener("sessionstart",Xt),Ee.addEventListener("sessionend",it),this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(G),G=Ee.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,G,R),p=X.get(y,b.length),p.init(),b.push(p),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Me.setFromProjectionMatrix(Ne),Te=this.localClippingEnabled,Se=he.init(this.clippingPlanes,Te),v=K.get(y,h.length),v.init(),h.push(v),fn(y,G,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(le,fe),this.info.render.frame++,Se===!0&&he.beginShadows();const $=p.state.shadowsArray;if(ie.render($,y,G),Se===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(v,y),p.setupLights(S._useLegacyLights),G.isArrayCamera){const Z=G.cameras;for(let Q=0,be=Z.length;Q<be;Q++){const Pe=Z[Q];Ya(v,y,Pe,Pe.viewport)}}else Ya(v,y,G);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,G),ye.resetDefaultState(),ee=-1,T=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function fn(y,G,$,Z){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(G);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Me.intersectsSprite(y)){Z&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ne);const Pe=g.update(y),Ie=y.material;Ie.visible&&v.push(y,Pe,Ie,$,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Me.intersectsObject(y))){const Pe=g.update(y),Ie=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ue.copy(Pe.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ie)){const Oe=Pe.groups;for(let qe=0,He=Oe.length;qe<He;qe++){const Ve=Oe[qe],lt=Ie[Ve.materialIndex];lt&&lt.visible&&v.push(y,Pe,lt,$,Ue.z,Ve)}}else Ie.visible&&v.push(y,Pe,Ie,$,Ue.z,null)}}const be=y.children;for(let Pe=0,Ie=be.length;Pe<Ie;Pe++)fn(be[Pe],G,$,Z)}function Ya(y,G,$,Z){const Q=y.opaque,be=y.transmissive,Pe=y.transparent;p.setupLightsView($),Se===!0&&he.setGlobalState(S.clippingPlanes,$),be.length>0&&rh(Q,be,G,$),Z&&W.viewport(w.copy(Z)),Q.length>0&&Wr(Q,G,$),be.length>0&&Wr(be,G,$),Pe.length>0&&Wr(Pe,G,$),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function rh(y,G,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const be=q.isWebGL2;Ce===null&&(Ce=new yi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Nr:ii,minFilter:Ir,samples:be?4:0})),S.getDrawingBufferSize(De),be?Ce.setSize(De.x,De.y):Ce.setSize(ma(De.x),ma(De.y));const Pe=S.getRenderTarget();S.setRenderTarget(Ce),S.getClearColor(de),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear();const Ie=S.toneMapping;S.toneMapping=ni,Wr(y,$,Z),L.updateMultisampleRenderTarget(Ce),L.updateRenderTargetMipmap(Ce);let Oe=!1;for(let qe=0,He=G.length;qe<He;qe++){const Ve=G[qe],lt=Ve.object,Bt=Ve.geometry,mt=Ve.material,yn=Ve.group;if(mt.side===On&&lt.layers.test(Z.layers)){const ot=mt.side;mt.side=Ft,mt.needsUpdate=!0,ja(lt,$,Z,Bt,mt,yn),mt.side=ot,mt.needsUpdate=!0,Oe=!0}}Oe===!0&&(L.updateMultisampleRenderTarget(Ce),L.updateRenderTargetMipmap(Ce)),S.setRenderTarget(Pe),S.setClearColor(de,F),S.toneMapping=Ie}function Wr(y,G,$){const Z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,be=y.length;Q<be;Q++){const Pe=y[Q],Ie=Pe.object,Oe=Pe.geometry,qe=Z===null?Pe.material:Z,He=Pe.group;Ie.layers.test($.layers)&&ja(Ie,G,$,Oe,qe,He)}}function ja(y,G,$,Z,Q,be){y.onBeforeRender(S,G,$,Z,Q,be),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(S,G,$,Z,y,be),Q.transparent===!0&&Q.side===On&&Q.forceSinglePass===!1?(Q.side=Ft,Q.needsUpdate=!0,S.renderBufferDirect($,G,Z,Q,y,be),Q.side=si,Q.needsUpdate=!0,S.renderBufferDirect($,G,Z,Q,y,be),Q.side=On):S.renderBufferDirect($,G,Z,Q,y,be),y.onAfterRender(S,G,$,Z,Q,be)}function Xr(y,G,$){G.isScene!==!0&&(G=Ze);const Z=I.get(y),Q=p.state.lights,be=p.state.shadowsArray,Pe=Q.state.version,Ie=D.getParameters(y,Q.state,be,G,$),Oe=D.getProgramCacheKey(Ie);let qe=Z.programs;Z.environment=y.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(y.isMeshStandardMaterial?z:V).get(y.envMap||Z.environment),qe===void 0&&(y.addEventListener("dispose",me),qe=new Map,Z.programs=qe);let He=qe.get(Oe);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===Pe)return $a(y,Ie),He}else Ie.uniforms=D.getUniforms(y),y.onBuild($,Ie,S),y.onBeforeCompile(Ie,S),He=D.acquireProgram(Ie,Oe),qe.set(Oe,He),Z.uniforms=Ie.uniforms;const Ve=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=he.uniform),$a(y,Ie),Z.needsLights=ah(y),Z.lightsStateVersion=Pe,Z.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMap.value=Q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotShadowMap.value=Q.state.spotShadowMap,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMap.value=Q.state.pointShadowMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function Ka(y){if(y.uniformsList===null){const G=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(G.seq,y.uniforms)}return y.uniformsList}function $a(y,G){const $=I.get(y);$.outputColorSpace=G.outputColorSpace,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function sh(y,G,$,Z,Q){G.isScene!==!0&&(G=Ze),L.resetTextureUnits();const be=G.fog,Pe=Z.isMeshStandardMaterial?G.environment:null,Ie=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,Oe=(Z.isMeshStandardMaterial?z:V).get(Z.envMap||Pe),qe=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Bt=!!$.morphAttributes.color;let mt=ni;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=S.toneMapping);const yn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ot=yn!==void 0?yn.length:0,$e=I.get(Z),Qs=p.state.lights;if(Se===!0&&(Te===!0||y!==T)){const zt=y===T&&Z.id===ee;he.setState(Z,y,zt)}let ut=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Qs.state.version||$e.outputColorSpace!==Ie||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||$e.envMap!==Oe||Z.fog===!0&&$e.fog!==be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==he.numPlanes||$e.numIntersection!==he.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==He||$e.morphTargets!==Ve||$e.morphNormals!==lt||$e.morphColors!==Bt||$e.toneMapping!==mt||q.isWebGL2===!0&&$e.morphTargetsCount!==ot)&&(ut=!0):(ut=!0,$e.__version=Z.version);let oi=$e.currentProgram;ut===!0&&(oi=Xr(Z,G,Q));let Za=!1,fr=!1,eo=!1;const wt=oi.getUniforms(),ai=$e.uniforms;if(W.useProgram(oi.program)&&(Za=!0,fr=!0,eo=!0),Z.id!==ee&&(ee=Z.id,fr=!0),Za||T!==y){wt.setValue(_,"projectionMatrix",y.projectionMatrix),wt.setValue(_,"viewMatrix",y.matrixWorldInverse);const zt=wt.map.cameraPosition;zt!==void 0&&zt.setValue(_,Ue.setFromMatrixPosition(y.matrixWorld)),q.logarithmicDepthBuffer&&wt.setValue(_,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(_,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,fr=!0,eo=!0)}if(Q.isSkinnedMesh){wt.setOptional(_,Q,"bindMatrix"),wt.setOptional(_,Q,"bindMatrixInverse");const zt=Q.skeleton;zt&&(q.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),wt.setValue(_,"boneTexture",zt.boneTexture,L),wt.setValue(_,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=$.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&q.isWebGL2===!0)&&C.update(Q,$,oi),(fr||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,wt.setValue(_,"receiveShadow",Q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ai.envMap.value=Oe,ai.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),fr&&(wt.setValue(_,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&oh(ai,eo),be&&Z.fog===!0&&k.refreshFogUniforms(ai,be),k.refreshMaterialUniforms(ai,Z,Y,ne,Ce),ws.upload(_,Ka($e),ai,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ws.upload(_,Ka($e),ai,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(_,"center",Q.center),wt.setValue(_,"modelViewMatrix",Q.modelViewMatrix),wt.setValue(_,"normalMatrix",Q.normalMatrix),wt.setValue(_,"modelMatrix",Q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const zt=Z.uniformsGroups;for(let no=0,lh=zt.length;no<lh;no++)if(q.isWebGL2){const Ja=zt[no];Re.update(Ja,oi),Re.bind(Ja,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function oh(y,G){y.ambientLightColor.needsUpdate=G,y.lightProbe.needsUpdate=G,y.directionalLights.needsUpdate=G,y.directionalLightShadows.needsUpdate=G,y.pointLights.needsUpdate=G,y.pointLightShadows.needsUpdate=G,y.spotLights.needsUpdate=G,y.spotLightShadows.needsUpdate=G,y.rectAreaLights.needsUpdate=G,y.hemisphereLights.needsUpdate=G}function ah(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,G,$){I.get(y.texture).__webglTexture=G,I.get(y.depthTexture).__webglTexture=$;const Z=I.get(y);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,G){const $=I.get(y);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(y,G=0,$=0){R=y,A=G,P=$;let Z=!0,Q=null,be=!1,Pe=!1;if(y){const Oe=I.get(y);Oe.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(_.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?L.setupRenderTarget(y):Oe.__hasExternalTextures&&L.rebindTextures(y,I.get(y.texture).__webglTexture,I.get(y.depthTexture).__webglTexture);const qe=y.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const He=I.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[G])?Q=He[G][$]:Q=He[G],be=!0):q.isWebGL2&&y.samples>0&&L.useMultisampledRTT(y)===!1?Q=I.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?Q=He[$]:Q=He,w.copy(y.viewport),oe.copy(y.scissor),ae=y.scissorTest}else w.copy(ue).multiplyScalar(Y).floor(),oe.copy(B).multiplyScalar(Y).floor(),ae=j;if(W.bindFramebuffer(_.FRAMEBUFFER,Q)&&q.drawBuffers&&Z&&W.drawBuffers(y,Q),W.viewport(w),W.scissor(oe),W.setScissorTest(ae),be){const Oe=I.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,$)}else if(Pe){const Oe=I.get(y.texture),qe=G||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,qe)}ee=-1},this.readRenderTargetPixels=function(y,G,$,Z,Q,be,Pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=I.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){W.bindFramebuffer(_.FRAMEBUFFER,Ie);try{const Oe=y.texture,qe=Oe.format,He=Oe.type;if(qe!==an&&Ae.convert(qe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===Nr&&(O.has("EXT_color_buffer_half_float")||q.isWebGL2&&O.has("EXT_color_buffer_float"));if(He!==ii&&Ae.convert(He)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ei&&(q.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=y.width-Z&&$>=0&&$<=y.height-Q&&_.readPixels(G,$,Z,Q,Ae.convert(qe),Ae.convert(He),be)}finally{const Oe=R!==null?I.get(R).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(y,G,$=0){const Z=Math.pow(2,-$),Q=Math.floor(G.image.width*Z),be=Math.floor(G.image.height*Z);L.setTexture2D(G,0),_.copyTexSubImage2D(_.TEXTURE_2D,$,0,0,y.x,y.y,Q,be),W.unbindTexture()},this.copyTextureToTexture=function(y,G,$,Z=0){const Q=G.image.width,be=G.image.height,Pe=Ae.convert($.format),Ie=Ae.convert($.type);L.setTexture2D($,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Z,y.x,y.y,Q,be,Pe,Ie,G.image.data):G.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Z,y.x,y.y,G.mipmaps[0].width,G.mipmaps[0].height,Pe,G.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,Z,y.x,y.y,Pe,Ie,G.image),Z===0&&$.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(y,G,$,Z,Q=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=y.max.x-y.min.x+1,Pe=y.max.y-y.min.y+1,Ie=y.max.z-y.min.z+1,Oe=Ae.convert(Z.format),qe=Ae.convert(Z.type);let He;if(Z.isData3DTexture)L.setTexture3D(Z,0),He=_.TEXTURE_3D;else if(Z.isDataArrayTexture)L.setTexture2DArray(Z,0),He=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Z.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ve=_.getParameter(_.UNPACK_ROW_LENGTH),lt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Bt=_.getParameter(_.UNPACK_SKIP_PIXELS),mt=_.getParameter(_.UNPACK_SKIP_ROWS),yn=_.getParameter(_.UNPACK_SKIP_IMAGES),ot=$.isCompressedTexture?$.mipmaps[0]:$.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ot.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ot.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,y.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,y.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,y.min.z),$.isDataTexture||$.isData3DTexture?_.texSubImage3D(He,Q,G.x,G.y,G.z,be,Pe,Ie,Oe,qe,ot.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(He,Q,G.x,G.y,G.z,be,Pe,Ie,Oe,ot.data)):_.texSubImage3D(He,Q,G.x,G.y,G.z,be,Pe,Ie,Oe,qe,ot),_.pixelStorei(_.UNPACK_ROW_LENGTH,Ve),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(_.UNPACK_SKIP_ROWS,mt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,yn),Q===0&&Z.generateMipmaps&&_.generateMipmap(He),W.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?L.setTextureCube(y,0):y.isData3DTexture?L.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?L.setTexture2DArray(y,0):L.setTexture2D(y,0),W.unbindTexture()},this.resetState=function(){A=0,P=0,R=null,W.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ga?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===$s?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Ei:If}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ei?Mt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zx extends eh{}zx.prototype.isWebGL1Renderer=!0;class Hx extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xa extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new H,Qc=new H,eu=new at,Yo=new Zs,vs=new Gr;class Gx extends vt{constructor(e=new Wt,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jc.fromBufferAttribute(t,r-1),Qc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jc.distanceTo(Qc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;eu.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(eu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const h=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let S=h,E=b-1;S<E;S+=m){const A=x.getX(S),P=x.getX(S+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,P),Yo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const ee=e.ray.origin.distanceTo(d);ee<e.near||ee>e.far||t.push({distance:ee,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let S=h,E=b-1;S<E;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Yo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const tu=new H,nu=new H;class th extends Gx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)tu.fromBufferAttribute(t,r),nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tu.distanceTo(nu);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nh extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iu=new at,_a=new Zs,xs=new Gr,Ms=new H;class Vx extends vt{constructor(e=new Wt,t=new nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;iu.copy(r).invert(),_a.copy(e.ray).applyMatrix4(iu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,v=m;x<v;x++){const p=c.getX(x);Ms.fromBufferAttribute(f,p),ru(Ms,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,v=m;x<v;x++)Ms.fromBufferAttribute(f,x),ru(Ms,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ru(n,e,t,i,r,s,a){const o=_a.distanceSqToPoint(n);if(o<t){const l=new H;_a.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class qa extends Wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,d=new H,m=[],x=[],v=[],p=[];for(let h=0;h<=i;h++){const b=[],S=h/i;let E=0;h===0&&a===0?E=.5/t:h===i&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const P=A/t;f.x=-e*Math.cos(r+P*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+S*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(P+E,1-S),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<t;b++){const S=u[h][b+1],E=u[h][b],A=u[h+1][b],P=u[h+1][b+1];(h!==0||a>0)&&m.push(S,E,P),(h!==i-1||l<Math.PI)&&m.push(E,A,P)}this.setIndex(m),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kx extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ih extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jo=new at,su=new H,ou=new H;class Wx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xx extends Wx{constructor(){super(new Kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Xx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yx extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class au{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jx extends th{constructor(e=10,t=10,i=4473924,r=8947848){i=new je(i),r=new je(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,x=-o;d<=t;d++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=d===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Wt;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(c,3));const f=new Xa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kx extends th{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Wt;r.setAttribute("position",new xt(t,3)),r.setAttribute("color",new xt(i,3));const s=new Xa({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new je,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);const lu={type:"change"},Ko={type:"start"},cu={type:"end"},Ss=new Zs,uu=new Jn,$x=Math.cos(70*Nm.DEG2RAD);class Zx extends wi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",g),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(lu),i.update(),s=r.NONE},this.update=function(){const C=new H,pe=new Ti().setFromUnitVectors(e.up,new H(0,1,0)),ce=pe.clone().invert(),Ae=new H,ye=new Ti,Re=new H,we=2*Math.PI;return function(We=null){const N=i.object.position;C.copy(N).sub(i.target),C.applyQuaternion(pe),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&oe(T(We)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ve=i.minAzimuthAngle,me=i.maxAzimuthAngle;isFinite(ve)&&isFinite(me)&&(ve<-Math.PI?ve+=we:ve>Math.PI&&(ve-=we),me<-Math.PI?me+=we:me>Math.PI&&(me-=we),ve<=me?o.theta=Math.max(ve,Math.min(me,o.theta)):o.theta=o.theta>(ve+me)/2?Math.max(ve,o.theta):Math.min(me,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&P||i.object.isOrthographicCamera?o.radius=fe(o.radius):o.radius=fe(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(ce),N.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let re=!1;if(i.zoomToCursor&&P){let _e=null;if(i.object.isPerspectiveCamera){const Le=C.length();_e=fe(Le*c);const Ke=Le-_e;i.object.position.addScaledVector(E,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Le=new H(A.x,A.y,0);Le.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0;const Ke=new H(A.x,A.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(Le),i.object.updateMatrixWorld(),_e=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;_e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(_e).add(i.object.position):(Ss.origin.copy(i.object.position),Ss.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ss.direction))<$x?e.lookAt(i.target):(uu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ss.intersectPlane(uu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),re=!0);return c=1,P=!1,re||Ae.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(lu),Ae.copy(i.object.position),ye.copy(i.object.quaternion),Re.copy(i.target),re=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",K),i.domElement.removeEventListener("pointerdown",I),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",g),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new au,l=new au;let c=1;const u=new H,f=new ke,d=new ke,m=new ke,x=new ke,v=new ke,p=new ke,h=new ke,b=new ke,S=new ke,E=new H,A=new ke;let P=!1;const R=[],ee={};function T(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function oe(C){l.theta-=C}function ae(C){l.phi-=C}const de=function(){const C=new H;return function(ce,Ae){C.setFromMatrixColumn(Ae,0),C.multiplyScalar(-ce),u.add(C)}}(),F=function(){const C=new H;return function(ce,Ae){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ae,1):(C.setFromMatrixColumn(Ae,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ce),u.add(C)}}(),J=function(){const C=new H;return function(ce,Ae){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;C.copy(Re).sub(i.target);let we=C.length();we*=Math.tan(i.object.fov/2*Math.PI/180),de(2*ce*we/ye.clientHeight,i.object.matrix),F(2*Ae*we/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(de(ce*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),F(Ae*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(C){if(!i.zoomToCursor)return;P=!0;const pe=i.domElement.getBoundingClientRect(),ce=C.clientX-pe.left,Ae=C.clientY-pe.top,ye=pe.width,Re=pe.height;A.x=ce/ye*2-1,A.y=-(Ae/Re)*2+1,E.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function fe(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function ue(C){f.set(C.clientX,C.clientY)}function B(C){le(C),h.set(C.clientX,C.clientY)}function j(C){x.set(C.clientX,C.clientY)}function Me(C){d.set(C.clientX,C.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;oe(2*Math.PI*m.x/pe.clientHeight),ae(2*Math.PI*m.y/pe.clientHeight),f.copy(d),i.update()}function Se(C){b.set(C.clientX,C.clientY),S.subVectors(b,h),S.y>0?ne(w()):S.y<0&&Y(w()),h.copy(b),i.update()}function Te(C){v.set(C.clientX,C.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),J(p.x,p.y),x.copy(v),i.update()}function Ce(C){le(C),C.deltaY<0?Y(w()):C.deltaY>0&&ne(w()),i.update()}function Ne(C){let pe=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,i.keyPanSpeed),pe=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,-i.keyPanSpeed),pe=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(i.keyPanSpeed,0),pe=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(-i.keyPanSpeed,0),pe=!0;break}pe&&(C.preventDefault(),i.update())}function De(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),pe=.5*(R[0].pageY+R[1].pageY);f.set(C,pe)}}function Ue(){if(R.length===1)x.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),pe=.5*(R[0].pageY+R[1].pageY);x.set(C,pe)}}function Ze(){const C=R[0].pageX-R[1].pageX,pe=R[0].pageY-R[1].pageY,ce=Math.sqrt(C*C+pe*pe);h.set(0,ce)}function Be(){i.enableZoom&&Ze(),i.enablePan&&Ue()}function _(){i.enableZoom&&Ze(),i.enableRotate&&De()}function U(C){if(R.length==1)d.set(C.pageX,C.pageY);else{const ce=ge(C),Ae=.5*(C.pageX+ce.x),ye=.5*(C.pageY+ce.y);d.set(Ae,ye)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const pe=i.domElement;oe(2*Math.PI*m.x/pe.clientHeight),ae(2*Math.PI*m.y/pe.clientHeight),f.copy(d)}function O(C){if(R.length===1)v.set(C.pageX,C.pageY);else{const pe=ge(C),ce=.5*(C.pageX+pe.x),Ae=.5*(C.pageY+pe.y);v.set(ce,Ae)}p.subVectors(v,x).multiplyScalar(i.panSpeed),J(p.x,p.y),x.copy(v)}function q(C){const pe=ge(C),ce=C.pageX-pe.x,Ae=C.pageY-pe.y,ye=Math.sqrt(ce*ce+Ae*Ae);b.set(0,ye),S.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),ne(S.y),h.copy(b)}function W(C){i.enableZoom&&q(C),i.enablePan&&O(C)}function te(C){i.enableZoom&&q(C),i.enableRotate&&U(C)}function I(C){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",V)),X(C),C.pointerType==="touch"?D(C):z(C))}function L(C){i.enabled!==!1&&(C.pointerType==="touch"?k(C):se(C))}function V(C){he(C),R.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(cu),s=r.NONE}function z(C){let pe;switch(C.button){case 0:pe=i.mouseButtons.LEFT;break;case 1:pe=i.mouseButtons.MIDDLE;break;case 2:pe=i.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Li.DOLLY:if(i.enableZoom===!1)return;B(C),s=r.DOLLY;break;case Li.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;j(C),s=r.PAN}else{if(i.enableRotate===!1)return;ue(C),s=r.ROTATE}break;case Li.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;ue(C),s=r.ROTATE}else{if(i.enablePan===!1)return;j(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ko)}function se(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Me(C);break;case r.DOLLY:if(i.enableZoom===!1)return;Se(C);break;case r.PAN:if(i.enablePan===!1)return;Te(C);break}}function M(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ko),Ce(C),i.dispatchEvent(cu))}function g(C){i.enabled===!1||i.enablePan===!1||Ne(C)}function D(C){switch(ie(C),R.length){case 1:switch(i.touches.ONE){case Di.ROTATE:if(i.enableRotate===!1)return;De(),s=r.TOUCH_ROTATE;break;case Di.PAN:if(i.enablePan===!1)return;Ue(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Di.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(),s=r.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ko)}function k(C){switch(ie(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;U(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;O(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(C),i.update();break;default:s=r.NONE}}function K(C){i.enabled!==!1&&C.preventDefault()}function X(C){R.push(C)}function he(C){delete ee[C.pointerId];for(let pe=0;pe<R.length;pe++)if(R[pe].pointerId==C.pointerId){R.splice(pe,1);return}}function ie(C){let pe=ee[C.pointerId];pe===void 0&&(pe=new ke,ee[C.pointerId]=pe),pe.set(C.pageX,C.pageY)}function ge(C){const pe=C.pointerId===R[0].pointerId?R[1]:R[0];return ee[pe.pointerId]}i.domElement.addEventListener("contextmenu",K),i.domElement.addEventListener("pointerdown",I),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}const Jx={class:"scanner-page"},Qx={class:"panel controls"},eM={class:"actions"},tM=["disabled"],nM=["disabled"],iM=["disabled"],rM=["disabled"],sM=["disabled"],oM=["disabled"],aM={key:0,class:"yaw-control"},lM={class:"status-grid"},cM={key:1,class:"marker-list"},uM={class:"marker-label"},fM={class:"marker-coords"},hM=["onClick"],dM={class:"panel viewer"},pM={class:"panel overlay-panel"},mM={class:"overlay-host"},gM={key:0,class:"overlay-placeholder"},jt=160,Pn=120,fu=25e4,_M=qu({__name:"RoomScanner",setup(n){const e=qt(null),t=qt(null),i=qt(null),r=qt(null),s=qt(!1),a=qt(!1),o=qt("Camera is off"),l=qt(0),c=qt(0),u=qt(!1),f=qt(0),d=qt([]);let m=1,x=null,v=0,p=0,h=[],b=0,S=0,E=[],A=[],P=[],R=-999;const ee=8*Math.PI/180,T=55*Math.PI/180,w=Math.tan(T/2),oe=w*(Pn/jt),ae=Vh(null),de=yf(()=>s.value);function F(){const I=r.value;if(!I)return;const L=new Hx;L.background=new je("#0b0f16");const V=new $t(55,I.clientWidth/I.clientHeight,.1,200);V.position.set(0,1.4,5);const z=new eh({antialias:!0});z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.setSize(I.clientWidth,I.clientHeight),I.innerHTML="",I.appendChild(z.domElement);const se=new Zx(V,z.domElement);se.enableDamping=!0,se.maxDistance=30,se.minDistance=.8;const M=new Yx(16777215,.45);L.add(M);const g=new qx(10142975,1.15);g.position.set(2,6,3),L.add(g),L.add(new jx(14,14,5206408,1979718)),L.add(new Kx(2.2));const D=new Wt,k=new nh({size:.04,vertexColors:!0}),K=new Vx(D,k);L.add(K),ae.value={scene:L,camera:V,renderer:z,controls:se,pointGeometry:D,pointMaterial:k,pointMesh:K};const X=()=>{const he=ae.value;he&&(he.controls.update(),he.renderer.render(he.scene,he.camera),p=requestAnimationFrame(X))};X()}function J(){const I=ae.value,L=r.value;if(!I||!L)return;const V=Math.max(L.clientWidth,320),z=Math.max(L.clientHeight,240);I.camera.aspect=V/z,I.camera.updateProjectionMatrix(),I.renderer.setSize(V,z)}function ne(){const I=ae.value;I&&(I.pointGeometry.setAttribute("position",new xt(E,3)),I.pointGeometry.setAttribute("color",new xt(A,3)),I.pointGeometry.computeBoundingSphere(),l.value=E.length/3)}function Y(I){I.alpha==null||I.beta==null||(u.value=!0,b=I.alpha*Math.PI/180,S=(I.beta??0)*Math.PI/180)}async function le(){const I=DeviceOrientationEvent;if(typeof I.requestPermission=="function")try{await I.requestPermission()==="granted"&&window.addEventListener("deviceorientation",Y,!0)}catch{}else window.addEventListener("deviceorientation",Y,!0)}function fe(){return u.value?b:f.value*Math.PI/180}function ue(){return u.value?S:0}function B(){const I=new at;return I.makeRotationFromEuler(new Vr(-ue(),fe(),0,"YXZ")),I}function j(){return B().clone().invert()}function Me(I,L,V,z,se){const M=j(),g=new H(I,L,V);if(g.applyMatrix4(M),g.z>=-.05)return{sx:0,sy:0,visible:!1};const D=-g.z,k=g.x/(2*w*D),K=g.y/(2*oe*D),X=k>=-.5&&k<=.5&&K>=-.5&&K<=.5;return{sx:(k+.5)*z,sy:(.5-K)*se,visible:X}}function Se(){const I=e.value,L=t.value;if(!I||!L||I.videoWidth===0)return;L.width=jt,L.height=Pn;const V=L.getContext("2d",{willReadFrequently:!0});if(!V)return;V.drawImage(I,0,0,jt,Pn);const z=V.getImageData(0,0,jt,Pn).data;P=[];const se=3;for(let M=0;M<Pn;M+=se)for(let g=0;g<jt;g+=se){const D=(M*jt+g)*4,k=z[D],K=z[D+1],X=z[D+2],he=.2126*k+.7152*K+.0722*X,ie=(255-he)/255,ge=1+ie*3.5,C=g/jt-.5,pe=.5-M/Pn,ce=C*2*w*ge,Ae=pe*2*oe*ge,ye=-ge,Re=Math.min(g+1,jt-1),we=Math.min(M+1,Pn-1),Ee=(M*jt+Re)*4,We=(we*jt+g)*4,N=.2126*z[Ee]+.7152*z[Ee+1]+.0722*z[Ee+2],ve=.2126*z[We]+.7152*z[We+1]+.0722*z[We+2],me=Math.min(Math.abs(N-he)+Math.abs(ve-he),255)/255;P.push({px:g,py:M,vx:ce,vy:Ae,vz:ye,cr:1-ie,cg:.35+me*.45,cb:ie,depth:ie})}}function Te(){if(P.length===0)return;const I=B(),L=new H,V=E.length/3;if(V+P.length>fu){const z=Math.min(V,Math.floor(fu*.15))*3;E.splice(0,z),A.splice(0,z)}for(const z of P)L.set(z.vx,z.vy,z.vz),L.applyMatrix4(I),E.push(L.x,L.y,L.z),A.push(z.cr,z.cg,z.cb);c.value++,R=fe(),ne(),o.value=`Capture #${c.value} — ${l.value} world points`}function Ce(){const I=e.value,L=i.value;if(!I||!L||I.videoWidth===0)return;const V=L.clientWidth,z=L.clientHeight;(L.width!==V||L.height!==z)&&(L.width=V,L.height=z);const se=L.getContext("2d");if(!se)return;se.drawImage(I,0,0,V,z);const M=V/jt,g=z/Pn,D=Math.max(2,Math.min(M,g)*1.6);for(const k of P){const K=k.px*M,X=k.py*g,he=.3+k.depth*.5;se.fillStyle=`rgba(${Math.round(k.cr*255)},${Math.round(k.cg*255)},${Math.round(k.cb*255)},${he.toFixed(2)})`,se.beginPath(),se.arc(K,X,D,0,Math.PI*2),se.fill()}for(const k of d.value){const K=Me(k.wx,k.wy,k.wz,V,z),X=Math.max(8,D*4);if(!K.visible)continue;const he=K.sx,ie=K.sy;se.strokeStyle="#ffffff",se.lineWidth=2.5,se.beginPath(),se.arc(he,ie,X,0,Math.PI*2),se.stroke(),se.fillStyle="#ff3055",se.beginPath(),se.arc(he,ie,X*.45,0,Math.PI*2),se.fill(),se.strokeStyle="rgba(255,255,255,0.6)",se.lineWidth=1,se.beginPath(),se.moveTo(he-X*1.5,ie),se.lineTo(he-X*.7,ie),se.moveTo(he+X*.7,ie),se.lineTo(he+X*1.5,ie),se.moveTo(he,ie-X*1.5),se.lineTo(he,ie-X*.7),se.moveTo(he,ie+X*.7),se.lineTo(he,ie+X*1.5),se.stroke(),se.font=`bold ${Math.max(12,X*.9)}px sans-serif`,se.fillStyle="#ffffff",se.fillText(k.label,he+X+4,ie-X*.3),se.font=`${Math.max(10,X*.7)}px monospace`,se.fillStyle="#b0d0e8",se.fillText(`(${k.wx.toFixed(2)}, ${k.wy.toFixed(2)}, ${k.wz.toFixed(2)})`,he+X+4,ie+X*.6)}}function Ne(){if(!a.value)return;Se();const I=Math.abs(fe()-R);(Math.min(I,2*Math.PI-I)>=ee||R===-999)&&Te(),Ce(),v=requestAnimationFrame(Ne)}async function De(){if(!s.value)try{o.value="Requesting camera access...",x=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});const I=e.value;if(!I)throw new Error("Video element is unavailable");I.srcObject=x,await I.play(),s.value=!0,o.value="Camera is ready"}catch(I){const L=I instanceof Error?I.message:"Unknown camera error";o.value=`Camera error: ${L}`,s.value=!1}}function Ue(){v&&(cancelAnimationFrame(v),v=0),a.value=!1,x&&(x.getTracks().forEach(L=>L.stop()),x=null);const I=e.value;I&&(I.pause(),I.srcObject=null),s.value=!1,o.value="Camera is off"}function Ze(){!s.value||a.value||(a.value=!0,R=-999,o.value="Scanning — rotate slowly around you...",Ne())}function Be(){a.value=!1,v&&(cancelAnimationFrame(v),v=0),o.value=`Scan paused — ${c.value} captures, ${l.value} points`}function _(I){const L=i.value;if(!L||P.length===0)return;const V=L.getBoundingClientRect(),z=I.clientX-V.left,se=I.clientY-V.top,M=L.clientWidth/jt,g=L.clientHeight/Pn;let D=1/0,k=P[0];for(const ge of P){const C=ge.px*M-z,pe=ge.py*g-se,ce=C*C+pe*pe;ce<D&&(D=ce,k=ge)}const K=B(),X=new H(k.vx,k.vy,k.vz).applyMatrix4(K),he=m++,ie={id:he,wx:X.x,wy:X.y,wz:X.z,label:`M${he}`};d.value.push(ie),U(ie),o.value=`Marker ${ie.label} placed at (${ie.wx.toFixed(2)}, ${ie.wy.toFixed(2)}, ${ie.wz.toFixed(2)})`}function U(I){const L=ae.value;if(!L)return;const V=new qa(.09,16,16),z=new kx({color:16724053,emissive:16715824,emissiveIntensity:.5}),se=new Bn(V,z);se.position.set(I.wx,I.wy,I.wz),se.name=`marker-${I.id}`,L.scene.add(se),h.push(se)}function O(I){d.value=d.value.filter(z=>z.id!==I);const L=ae.value;if(!L)return;const V=h.findIndex(z=>z.name===`marker-${I}`);if(V!==-1){const z=h[V];L.scene.remove(z),z.geometry.dispose(),z.material.dispose(),h.splice(V,1)}}function q(){const I=ae.value;for(const L of h)I&&I.scene.remove(L),L.geometry.dispose(),L.material.dispose();h=[],d.value=[],m=1}function W(){P.length!==0&&Te()}function te(){E=[],A=[],ne(),c.value=0,R=-999,q(),o.value=s.value?"Cloud reset — ready to scan again":"Camera is off"}return $u(async()=>{await zu(),F(),J(),window.addEventListener("resize",J),le()}),Zu(()=>{window.removeEventListener("resize",J),window.removeEventListener("deviceorientation",Y,!0),Ue(),p&&(cancelAnimationFrame(p),p=0);const I=ae.value;I&&(I.controls.dispose(),I.pointGeometry.dispose(),I.pointMaterial.dispose(),I.renderer.dispose(),ae.value=null)}),(I,L)=>(Zn(),Pi("main",Jx,[ze("section",Qx,[L[10]||(L[10]=ze("h1",null,"RoomScanner",-1)),L[11]||(L[11]=ze("p",null," Open camera, rotate slowly to build a 3D room model, and place markers on objects. ",-1)),ze("div",eM,[ze("button",{class:"btn primary",type:"button",onClick:De,disabled:s.value}," Open Camera ",8,tM),ze("button",{class:"btn",type:"button",onClick:Ue,disabled:!s.value}," Close Camera ",8,nM),ze("button",{class:"btn success",type:"button",onClick:Ze,disabled:!de.value||a.value}," Start Scan ",8,iM),ze("button",{class:"btn",type:"button",onClick:Be,disabled:!a.value}," Stop Scan ",8,rM),ze("button",{class:"btn primary",type:"button",onClick:W,disabled:!a.value}," Capture ",8,sM),ze("button",{class:"btn",type:"button",onClick:te}," Reset Cloud "),ze("button",{class:"btn warn",type:"button",onClick:q,disabled:d.value.length===0}," Clear Markers ",8,oM)]),!u.value&&a.value?(Zn(),Pi("div",aM,[ze("label",null,"Manual Yaw (rotation): "+rn(f.value)+"°",1),ed(ze("input",{type:"range",min:"0",max:"360",step:"1","onUpdate:modelValue":L[0]||(L[0]=V=>f.value=V)},null,512),[[Rp,f.value,void 0,{number:!0}]]),L[1]||(L[1]=ze("small",null,"No gyroscope detected. Use this slider to simulate rotation.",-1))])):ho("",!0),ze("div",lM,[L[2]||(L[2]=ze("span",null,"Status",-1)),ze("strong",null,rn(o.value),1),L[3]||(L[3]=ze("span",null,"Points",-1)),ze("strong",null,rn(l.value),1),L[4]||(L[4]=ze("span",null,"Captures",-1)),ze("strong",null,rn(c.value),1),L[5]||(L[5]=ze("span",null,"Markers",-1)),ze("strong",null,rn(d.value.length),1),L[6]||(L[6]=ze("span",null,"Gyro",-1)),ze("strong",null,rn(u.value?"Active":"Manual"),1),L[7]||(L[7]=ze("span",null,"Axes",-1)),L[8]||(L[8]=ze("strong",null,"X (red), Y (green), Z (blue)",-1))]),d.value.length?(Zn(),Pi("div",cM,[(Zn(!0),Pi(mn,null,xd(d.value,V=>(Zn(),Pi("div",{key:V.id,class:"marker-item"},[L[9]||(L[9]=ze("span",{class:"marker-dot"},null,-1)),ze("span",uM,rn(V.label),1),ze("span",fM," ("+rn(V.wx.toFixed(2))+", "+rn(V.wy.toFixed(2))+", "+rn(V.wz.toFixed(2))+") ",1),ze("button",{class:"marker-remove",type:"button",onClick:z=>O(V.id),title:"Remove marker"},"×",8,hM)]))),128))])):ho("",!0),ze("video",{ref_key:"videoRef",ref:e,autoplay:"",muted:"",playsinline:""},null,512),ze("canvas",{ref_key:"scannerCanvasRef",ref:t,class:"hidden-canvas"},null,512)]),ze("section",dM,[ze("div",{ref_key:"sceneContainerRef",ref:r,class:"scene-host"},null,512),L[12]||(L[12]=ze("small",null," Accumulated 3D room reconstruction. Rotate slowly to build the model. ",-1))]),ze("section",pM,[L[13]||(L[13]=ze("h2",null,"AR Overlay",-1)),ze("div",mM,[ze("canvas",{ref_key:"overlayCanvasRef",ref:i,class:"overlay-canvas",onClick:_},null,512),a.value?ho("",!0):(Zn(),Pi("div",gM," Start scanning to see points overlaid on camera "))]),L[14]||(L[14]=ze("small",null," Click to place a marker. Markers stay fixed in world space as you move. ",-1))])]))}}),vM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},xM=vM(_M,[["__scopeId","data-v-90c6e950"]]),MM=qu({__name:"App",setup(n){return(e,t)=>(Zn(),vf(xM))}});Lp(MM).mount("#app");
