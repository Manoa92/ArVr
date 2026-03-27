(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function va(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},Zi=[],Sn=()=>{},nu=()=>!1,Xs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),Mt=Object.assign,Ma=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jf=Object.prototype.hasOwnProperty,Ze=(n,e)=>jf.call(n,e),Ie=Array.isArray,Ji=n=>Wr(n)==="[object Map]",iu=n=>Wr(n)==="[object Set]",nl=n=>Wr(n)==="[object Date]",Be=n=>typeof n=="function",ht=n=>typeof n=="string",yn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",ru=n=>(tt(n)||Be(n))&&Be(n.then)&&Be(n.catch),su=Object.prototype.toString,Wr=n=>su.call(n),$f=n=>Wr(n).slice(8,-1),ou=n=>Wr(n)==="[object Object]",Sa=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zf=/-\w/g,on=qs(n=>n.replace(Zf,e=>e.slice(1).toUpperCase())),Jf=/\B([A-Z])/g,oi=qs(n=>n.replace(Jf,"-$1").toLowerCase()),au=qs(n=>n.charAt(0).toUpperCase()+n.slice(1)),lo=qs(n=>n?`on${au(n)}`:""),gn=(n,e)=>!Object.is(n,e),As=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},lu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ea=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let il;const Ys=()=>il||(il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?nh(i):ya(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||tt(n))return n}const Qf=/;(?![^(]*\))/g,eh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function nh(n){const e={};return n.replace(th,"").split(Qf).forEach(t=>{if(t){const i=t.split(eh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ta(n){let e="";if(ht(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Ta(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=va(ih);function cu(n){return!!n||n===""}function sh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ba(n[i],e[i]);return t}function ba(n,e){if(n===e)return!0;let t=nl(n),i=nl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=yn(n),i=yn(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?sh(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ba(n[a],e[a]))return!1}}return String(n)===String(e)}const uu=n=>!!(n&&n.__v_isRef===!0),fu=n=>ht(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===su||!Be(n.toString))?uu(n)?fu(n.value):JSON.stringify(n,hu,2):String(n),hu=(n,e)=>uu(e)?hu(n,e.value):Ji(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[co(i,s)+" =>"]=r,t),{})}:iu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>co(t))}:yn(e)?co(e):tt(e)&&!Ie(e)&&!ou(e)?String(e):e,co=(n,e="")=>{var t;return yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class oh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ah(){return Nt}let rt;const uo=new WeakSet;class du{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uo.has(this)&&(uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rl(this),_u(this);const e=rt,t=an;rt=this,an=!0;try{return this.fn()}finally{gu(this),rt=e,an=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ra(e);this.deps=this.depsTail=void 0,rl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zo(this)&&this.run()}get dirty(){return Zo(this)}}let pu=0,br,Ar;function mu(n,e=!1){if(n.flags|=8,e){n.next=Ar,Ar=n;return}n.next=br,br=n}function Aa(){pu++}function wa(){if(--pu>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;br;){let e=br;for(br=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function _u(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ra(i),lh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Zo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Nr)||(n.globalVersion=Nr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Zo(n))))return;n.flags|=2;const e=n.dep,t=rt,i=an;rt=n,an=!0;try{_u(n);const r=n.fn(n._value);(e.version===0||gn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,an=i,gu(n),n.flags&=-3}}function Ra(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ra(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function lh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let an=!0;const xu=[];function Gn(){xu.push(an),an=!1}function Vn(){const n=xu.pop();an=n===void 0?!0:n}function rl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Nr=0;class ch{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ca{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!an||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new ch(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,Mu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Nr++,this.notify(e)}notify(e){Aa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wa()}}}function Mu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Jo=new WeakMap,Mi=Symbol(""),Qo=Symbol(""),Fr=Symbol("");function yt(n,e,t){if(an&&rt){let i=Jo.get(n);i||Jo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ca),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const a=Jo.get(n);if(!a){Nr++;return}const o=l=>{l&&l.trigger()};if(Aa(),e==="clear")a.forEach(o);else{const l=Ie(n),c=l&&Sa(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Fr||!yn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Fr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Mi)),Ji(n)&&o(a.get(Qo)));break;case"delete":l||(o(a.get(Mi)),Ji(n)&&o(a.get(Qo)));break;case"set":Ji(n)&&o(a.get(Mi));break}}wa()}function wi(n){const e=$e(n);return e===n?e:(yt(e,"iterate",Fr),Zt(n)?e:e.map(un))}function Ks(n){return yt(n=$e(n),"iterate",Fr),n}function pn(n,e){return Wn(n)?ir(Si(n)?un(e):e):un(e)}const uh={__proto__:null,[Symbol.iterator](){return fo(this,Symbol.iterator,n=>pn(this,n))},concat(...n){return wi(this).concat(...n.map(e=>Ie(e)?wi(e):e))},entries(){return fo(this,"entries",n=>(n[1]=pn(this,n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(i=>pn(this,i)),arguments)},find(n,e){return An(this,"find",n,e,t=>pn(this,t),arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,t=>pn(this,t),arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return ho(this,"includes",n)},indexOf(...n){return ho(this,"indexOf",n)},join(n){return wi(this).join(n)},lastIndexOf(...n){return ho(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return dr(this,"pop")},push(...n){return dr(this,"push",n)},reduce(n,...e){return sl(this,"reduce",n,e)},reduceRight(n,...e){return sl(this,"reduceRight",n,e)},shift(){return dr(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return dr(this,"splice",n)},toReversed(){return wi(this).toReversed()},toSorted(n){return wi(this).toSorted(n)},toSpliced(...n){return wi(this).toSpliced(...n)},unshift(...n){return dr(this,"unshift",n)},values(){return fo(this,"values",n=>pn(this,n))}};function fo(n,e,t){const i=Ks(n),r=i[e]();return i!==n&&!Zt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fh=Array.prototype;function An(n,e,t,i,r,s){const a=Ks(n),o=a!==n&&!Zt(n),l=a[e];if(l!==fh[e]){const f=l.apply(n,s);return o?un(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,pn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function sl(n,e,t,i){const r=Ks(n),s=r!==n&&!Zt(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=pn(n,c)),t.call(this,c,pn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?pn(n,l):l}function ho(n,e,t){const i=$e(n);yt(i,"iterate",Fr);const r=i[e](...t);return(r===-1||r===!1)&&Ua(t[0])?(t[0]=$e(t[0]),i[e](...t)):r}function dr(n,e,t=[]){Gn(),Aa();const i=$e(n)[e].apply(n,t);return wa(),Vn(),i}const hh=va("__proto__,__v_isRef,__isVue"),Su=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yn));function dh(n){yn(n)||(n=String(n));const e=$e(this);return yt(e,"has",n),e.hasOwnProperty(n)}class Eu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?yh:Au:s?bu:Tu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ie(e);if(!r){let l;if(a&&(l=uh[t]))return l;if(t==="hasOwnProperty")return dh}const o=Reflect.get(e,t,Tt(e)?e:i);if((yn(t)?Su.has(t):hh(t))||(r||yt(e,"get",t),s))return o;if(Tt(o)){const l=a&&Sa(t)?o:o.value;return r&&tt(l)?ta(l):l}return tt(o)?r?ta(o):La(o):o}}class yu extends Eu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ie(e)&&Sa(t);if(!this._isShallow){const c=Wn(s);if(!Zt(i)&&!Wn(i)&&(s=$e(s),i=$e(i)),!a&&Tt(s)&&!Tt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Ze(e,t),l=Reflect.set(e,t,i,Tt(e)?e:r);return e===$e(r)&&(o?gn(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!yn(t)||!Su.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",Ie(e)?"length":Mi),Reflect.ownKeys(e)}}class ph extends Eu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mh=new yu,_h=new ph,gh=new yu(!0);const ea=n=>n,Zr=n=>Reflect.getPrototypeOf(n);function vh(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=Ji(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ea:e?ir:un;return!e&&yt(s,"iterate",l?Qo:Mi),Mt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xh(n,e){const t={get(r){const s=this.__v_raw,a=$e(s),o=$e(r);n||(gn(r,o)&&yt(a,"get",r),yt(a,"get",o));const{has:l}=Zr(a),c=e?ea:n?ir:un;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&yt($e(r),"iterate",Mi),r.size},has(r){const s=this.__v_raw,a=$e(s),o=$e(r);return n||(gn(r,o)&&yt(a,"has",r),yt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=$e(o),c=e?ea:n?ir:un;return!n&&yt(l,"iterate",Mi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Mt(t,n?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(r){const s=$e(this),a=Zr(s),o=$e(r),l=!e&&!Zt(r)&&!Wn(r)?o:r;return a.has.call(s,l)||gn(r,l)&&a.has.call(s,r)||gn(o,l)&&a.has.call(s,o)||(s.add(l),Nn(s,"add",l,l)),this},set(r,s){!e&&!Zt(s)&&!Wn(s)&&(s=$e(s));const a=$e(this),{has:o,get:l}=Zr(a);let c=o.call(a,r);c||(r=$e(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?gn(s,u)&&Nn(a,"set",r,s):Nn(a,"add",r,s),this},delete(r){const s=$e(this),{has:a,get:o}=Zr(s);let l=a.call(s,r);l||(r=$e(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Nn(s,"delete",r,void 0),c},clear(){const r=$e(this),s=r.size!==0,a=r.clear();return s&&Nn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=vh(r,n,e)}),t}function Pa(n,e){const t=xh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const Mh={get:Pa(!1,!1)},Sh={get:Pa(!1,!0)},Eh={get:Pa(!0,!1)};const Tu=new WeakMap,bu=new WeakMap,Au=new WeakMap,yh=new WeakMap;function Th(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bh(n){return n.__v_skip||!Object.isExtensible(n)?0:Th($f(n))}function La(n){return Wn(n)?n:Da(n,!1,mh,Mh,Tu)}function Ah(n){return Da(n,!1,gh,Sh,bu)}function ta(n){return Da(n,!0,_h,Eh,Au)}function Da(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=bh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Si(n){return Wn(n)?Si(n.__v_raw):!!(n&&n.__v_isReactive)}function Wn(n){return!!(n&&n.__v_isReadonly)}function Zt(n){return!!(n&&n.__v_isShallow)}function Ua(n){return n?!!n.__v_raw:!1}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function wh(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&lu(n,"__v_skip",!0),n}const un=n=>tt(n)?La(n):n,ir=n=>tt(n)?ta(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function vn(n){return Rh(n,!1)}function Rh(n,e){return Tt(n)?n:new Ch(n,e)}class Ch{constructor(e,t){this.dep=new Ca,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:$e(e),this._value=t?e:un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Zt(e)||Wn(e);e=i?e:$e(e),gn(e,t)&&(this._rawValue=e,this._value=i?e:un(e),this.dep.trigger())}}function Ph(n){return Tt(n)?n.value:n}const Lh={get:(n,e,t)=>e==="__v_raw"?n:Ph(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function wu(n){return Si(n)?n:new Proxy(n,Lh)}class Dh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ca(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return mu(this,!0),!0}get value(){const e=this.dep.track();return vu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uh(n,e,t=!1){let i,r;return Be(n)?i=n:(i=n.get,r=n.set),new Dh(i,r,t)}const Qr={},Ls=new WeakMap;let mi;function Ih(n,e=!1,t=mi){if(t){let i=Ls.get(t);i||Ls.set(t,i=[]),i.push(n)}}function Nh(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:Zt(T)||r===!1||r===0?Fn(T,1):Fn(T);let u,f,d,m,x=!1,v=!1;if(Tt(n)?(f=()=>n.value,x=Zt(n)):Si(n)?(f=()=>c(n),x=!0):Ie(n)?(v=!0,x=n.some(T=>Si(T)||Zt(T)),f=()=>n.map(T=>{if(Tt(T))return T.value;if(Si(T))return c(T);if(Be(T))return l?l(T,2):T()})):Be(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Gn();try{d()}finally{Vn()}}const T=mi;mi=u;try{return l?l(n,3,[m]):n(m)}finally{mi=T}}:f=Sn,e&&r){const T=f,w=r===!0?1/0:r;f=()=>Fn(T(),w)}const p=ah(),h=()=>{u.stop(),p&&p.active&&Ma(p.effects,u)};if(s&&e){const T=e;e=(...w)=>{T(...w),h()}}let b=v?new Array(n.length).fill(Qr):Qr;const E=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const w=u.run();if(r||x||(v?w.some((U,R)=>gn(U,b[R])):gn(w,b))){d&&d();const U=mi;mi=u;try{const R=[w,b===Qr?void 0:v&&b[0]===Qr?[]:b,m];b=w,l?l(e,3,R):e(...R)}finally{mi=U}}}else u.run()};return o&&o(E),u=new du(f),u.scheduler=a?()=>a(E,!1):E,m=T=>Ih(T,!1,u),d=u.onStop=()=>{const T=Ls.get(u);if(T){if(l)l(T,4);else for(const w of T)w();Ls.delete(u)}},e?i?E(!0):b=u.run():a?a(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Fn(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Tt(n))Fn(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)Fn(n[i],e,t);else if(iu(n)||Ji(n))n.forEach(i=>{Fn(i,e,t)});else if(ou(n)){for(const i in n)Fn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kr(n,e,t,i){try{return i?n(...i):n()}catch(r){js(r,e,t)}}function Tn(n,e,t,i){if(Be(n)){const r=kr(n,e,t,i);return r&&ru(r)&&r.catch(s=>{js(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function js(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Gn(),kr(s,null,10,[n,l,c]),Vn();return}}Fh(n,t,r,i,a)}function Fh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let dn=-1;const Qi=[];let Jn=null,Ki=0;const Ru=Promise.resolve();let Ds=null;function Oh(n){const e=Ds||Ru;return n?e.then(this?n.bind(this):n):e}function Bh(n){let e=dn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Or(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ia(n){if(!(n.flags&1)){const e=Or(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Or(t)?Lt.push(n):Lt.splice(Bh(e),0,n),n.flags|=1,Cu()}}function Cu(){Ds||(Ds=Ru.then(Lu))}function zh(n){Ie(n)?Qi.push(...n):Jn&&n.id===-1?Jn.splice(Ki+1,0,n):n.flags&1||(Qi.push(n),n.flags|=1),Cu()}function ol(n,e,t=dn+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pu(n){if(Qi.length){const e=[...new Set(Qi)].sort((t,i)=>Or(t)-Or(i));if(Qi.length=0,Jn){Jn.push(...e);return}for(Jn=e,Ki=0;Ki<Jn.length;Ki++){const t=Jn[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jn=null,Ki=0}}const Or=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Lu(n){try{for(dn=0;dn<Lt.length;dn++){const e=Lt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Lt.length;dn++){const e=Lt[dn];e&&(e.flags&=-2)}dn=-1,Lt.length=0,Pu(),Ds=null,(Lt.length||Qi.length)&&Lu()}}let $t=null,Du=null;function Us(n){const e=$t;return $t=n,Du=n&&n.type.__scopeId||null,e}function Hh(n,e=$t,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&gl(-1);const s=Us(e);let a;try{a=n(...r)}finally{Us(s),i._d&&gl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Uu(n,e){if($t===null)return n;const t=Qs($t),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=nt]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&Fn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Gn(),Tn(l,t,8,[n.el,o,n,e]),Vn())}}function Gh(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function ws(n,e,t=!1){const i=Gd();if(i||er){let r=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}const Vh=Symbol.for("v-scx"),Wh=()=>ws(Vh);function po(n,e,t){return Iu(n,e,t)}function Iu(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let c;if(zr){if(s==="sync"){const m=Wh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Sn,m.resume=Sn,m.pause=Sn,m}}const u=Ut;o.call=(m,x,v)=>Tn(m,u,x,v);let f=!1;s==="post"?o.scheduler=m=>{It(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():Ia(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Nh(n,e,o);return zr&&(c?c.push(d):l&&d()),d}function kh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Nu(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=Xr(this),o=Iu(r,s.bind(i),t);return a(),o}function Nu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xh=Symbol("_vte"),qh=n=>n.__isTeleport,Yh=Symbol("_leaveCb");function Na(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Na(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Fa(n,e){return Be(n)?Mt({name:n.name},e,{setup:n}):n}function Fu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function al(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Is=new WeakMap;function wr(n,e,t,i,r=!1){if(Ie(n)){n.forEach((v,p)=>wr(v,e&&(Ie(e)?e[p]:e),t,i,r));return}if(Rr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Qs(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState,d=$e(f),m=f===nt?nu:v=>al(u,v)?!1:Ze(d,v),x=(v,p)=>!(p&&al(u,p));if(c!=null&&c!==l){if(ll(e),ht(c))u[c]=null,m(c)&&(f[c]=null);else if(Tt(c)){const v=e;x(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Be(l))kr(l,o,12,[a,u]);else{const v=ht(l),p=Tt(l);if(v||p){const h=()=>{if(n.f){const b=v?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)Ie(b)&&Ma(b,s);else if(Ie(b))b.includes(s)||b.push(s);else if(v)u[l]=[s],m(l)&&(f[l]=u[l]);else{const E=[s];x(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else v?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{h(),Is.delete(n)};b.id=-1,Is.set(n,b),It(b,t)}else ll(n),h()}}}function ll(n){const e=Is.get(n);e&&(e.flags|=8,Is.delete(n))}Ys().requestIdleCallback;Ys().cancelIdleCallback;const Rr=n=>!!n.type.__asyncLoader,Ou=n=>n.type.__isKeepAlive;function Kh(n,e){Bu(n,"a",e)}function jh(n,e){Bu(n,"da",e)}function Bu(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if($s(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ou(r.parent.vnode)&&$h(i,e,t,r),r=r.parent}}function $h(n,e,t,i){const r=$s(e,n,i,!0);zu(()=>{Ma(i[e],r)},t)}function $s(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Gn();const o=Xr(t),l=Tn(e,t,n,a);return o(),Vn(),l});return i?r.unshift(s):r.push(s),s}}const Xn=n=>(e,t=Ut)=>{(!zr||n==="sp")&&$s(n,(...i)=>e(...i),t)},Zh=Xn("bm"),Oa=Xn("m"),Jh=Xn("bu"),Qh=Xn("u"),ed=Xn("bum"),zu=Xn("um"),td=Xn("sp"),nd=Xn("rtg"),id=Xn("rtc");function rd(n,e=Ut){$s("ec",n,e)}const sd=Symbol.for("v-ndc");function od(n,e,t,i){let r;const s=t,a=Ie(n);if(a||ht(n)){const o=a&&Si(n);let l=!1,c=!1;o&&(l=!Zt(n),c=Wn(n),n=Ks(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ir(un(n[u])):un(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const na=n=>n?lf(n)?Qs(n):na(n.parent):null,Cr=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>na(n.parent),$root:n=>na(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gu(n),$forceUpdate:n=>n.f||(n.f=()=>{Ia(n.update)}),$nextTick:n=>n.n||(n.n=Oh.bind(n.proxy)),$watch:n=>kh.bind(n)}),mo=(n,e)=>n!==nt&&!n.__isScriptSetup&&Ze(n,e),ad={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(mo(i,e))return a[e]=1,i[e];if(r!==nt&&Ze(r,e))return a[e]=2,r[e];if(Ze(s,e))return a[e]=3,s[e];if(t!==nt&&Ze(t,e))return a[e]=4,t[e];ia&&(a[e]=0)}}const c=Cr[e];let u,f;if(c)return e==="$attrs"&&yt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==nt&&Ze(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return mo(r,e)?(r[e]=t,!0):i!==nt&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==nt&&o[0]!=="$"&&Ze(n,o)||mo(e,o)||Ze(s,o)||Ze(i,o)||Ze(Cr,o)||Ze(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cl(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ia=!0;function ld(n){const e=Gu(n),t=n.proxy,i=n.ctx;ia=!1,e.beforeCreate&&ul(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:E,unmounted:T,render:w,renderTracked:U,renderTriggered:R,errorCaptured:Q,serverPrefetch:y,expose:A,inheritAttrs:se,components:ae,directives:le,filters:N}=e;if(c&&cd(c,i,null),a)for(const F in a){const Y=a[F];Be(Y)&&(i[F]=Y.bind(t))}if(r){const F=r.call(t,t);tt(F)&&(n.data=La(F))}if(ia=!0,s)for(const F in s){const Y=s[F],K=Be(Y)?Y.bind(t,t):Be(Y.get)?Y.get.bind(t,t):Sn,j=!Be(Y)&&Be(Y.set)?Y.set.bind(t):Sn,P=Yd({get:K,set:j});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>P.value,set:z=>P.value=z})}if(o)for(const F in o)Hu(o[F],i,t,F);if(l){const F=Be(l)?l.call(t):l;Reflect.ownKeys(F).forEach(Y=>{Gh(Y,F[Y])})}u&&ul(u,n,"c");function V(F,Y){Ie(Y)?Y.forEach(K=>F(K.bind(t))):Y&&F(Y.bind(t))}if(V(Zh,f),V(Oa,d),V(Jh,m),V(Qh,x),V(Kh,v),V(jh,p),V(rd,Q),V(id,U),V(nd,R),V(ed,b),V(zu,T),V(td,y),Ie(A))if(A.length){const F=n.exposed||(n.exposed={});A.forEach(Y=>{Object.defineProperty(F,Y,{get:()=>t[Y],set:K=>t[Y]=K,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Sn&&(n.render=w),se!=null&&(n.inheritAttrs=se),ae&&(n.components=ae),le&&(n.directives=le),y&&Fu(n)}function cd(n,e,t=Sn){Ie(n)&&(n=ra(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=ws(r.from||i,r.default,!0):s=ws(r.from||i):s=ws(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ul(n,e,t){Tn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Hu(n,e,t,i){let r=i.includes(".")?Nu(t,i):()=>t[i];if(ht(n)){const s=e[n];Be(s)&&po(r,s)}else if(Be(n))po(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>Hu(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&po(r,s,n)}}function Gu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ns(l,c,a,!0)),Ns(l,e,a)),tt(e)&&s.set(e,l),l}function Ns(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ns(n,s,t,!0),r&&r.forEach(a=>Ns(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=ud[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const ud={data:fl,props:hl,emits:hl,methods:Er,computed:Er,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Er,directives:Er,watch:hd,provide:fl,inject:fd};function fl(n,e){return e?n?function(){return Mt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function fd(n,e){return Er(ra(n),ra(e))}function ra(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function Er(n,e){return n?Mt(Object.create(null),n,e):e}function hl(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:Mt(Object.create(null),cl(n),cl(e??{})):e}function hd(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function Vu(){return{app:null,config:{isNativeTag:nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dd=0;function pd(n,e){return function(i,r=null){Be(i)||(i=Mt({},i)),r!=null&&!tt(r)&&(r=null);const s=Vu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:dd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Kd,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Be(u.install)?(a.add(u),u.install(c,...f)):Be(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||ln(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Qs(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=er;er=c;try{return u()}finally{er=f}}};return c}}let er=null;const md=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${oi(e)}Modifiers`];function _d(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&md(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=t.map(Ea)));let o,l=i[o=lo(e)]||i[o=lo(on(e))];!l&&s&&(l=i[o=lo(oi(e))]),l&&Tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,r)}}const gd=new WeakMap;function Wu(n,e,t=!1){const i=t?gd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=Wu(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):Mt(a,s),tt(n)&&i.set(n,a),a)}function Zs(n,e){return!n||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,oi(e))||Ze(n,e))}function dl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=n,p=Us(n);let h,b;try{if(t.shapeFlag&4){const T=r||i,w=T;h=mn(c.call(w,T,u,f,m,d,x)),b=o}else{const T=e;h=mn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),b=e.props?o:vd(o)}}catch(T){Pr.length=0,js(T,n,1),h=ln(ri)}let E=h;if(b&&v!==!1){const T=Object.keys(b),{shapeFlag:w}=E;T.length&&w&7&&(s&&T.some(xa)&&(b=xd(b,s)),E=rr(E,b,!1,!0))}return t.dirs&&(E=rr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Na(E,t.transition),h=E,Us(p),h}const vd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xs(t))&&((e||(e={}))[t]=n[t]);return e},xd=(n,e)=>{const t={};for(const i in n)(!xa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Md(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(ku(a,i,d)&&!Zs(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?pl(i,a,c):!0:!!a;return!1}function pl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ku(e,n,s)&&!Zs(t,s))return!0}return!1}function ku(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!ba(i,r):i!==r}function Sd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Xu={},qu=()=>Object.create(Xu),Yu=n=>Object.getPrototypeOf(n)===Xu;function Ed(n,e,t,i=!1){const r={},s=qu();n.propsDefaults=Object.create(null),Ku(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ah(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function yd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zs(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ze(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=on(d);r[x]=sa(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Ku(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ze(e,f)&&((u=oi(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=sa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Nn(n.attrs,"set","")}function Ku(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Tr(l))continue;const c=e[l];let u;r&&Ze(r,u=on(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Zs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$e(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=sa(r,l,f,c[f],n,!Ze(c,f))}}return a}function sa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ze(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Xr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===oi(t))&&(i=!0))}return i}const Td=new WeakMap;function ju(n,e,t=!1){const i=t?Td:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[d,m]=ju(f,e,!0);Mt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Zi),Zi;if(Ie(s))for(let u=0;u<s.length;u++){const f=on(s[u]);ml(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=on(u);if(ml(f)){const d=s[u],m=a[f]=Ie(d)||Be(d)?{type:d}:Mt({},d),x=m.type;let v=!1,p=!0;if(Ie(x))for(let h=0;h<x.length;++h){const b=x[h],E=Be(b)&&b.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(p=!1)}else v=Be(x)&&x.name==="Boolean";m[0]=v,m[1]=p,(v||Ze(m,"default"))&&o.push(f)}}const c=[a,o];return tt(n)&&i.set(n,c),c}function ml(n){return n[0]!=="$"&&!Tr(n)}const Ba=n=>n==="_"||n==="_ctx"||n==="$stable",za=n=>Ie(n)?n.map(mn):[mn(n)],bd=(n,e,t)=>{if(e._n)return e;const i=Hh((...r)=>za(e(...r)),t);return i._c=!1,i},$u=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ba(r))continue;const s=n[r];if(Be(s))e[r]=bd(r,s,i);else if(s!=null){const a=za(s);e[r]=()=>a}}},Zu=(n,e)=>{const t=za(e);n.slots.default=()=>t},Ju=(n,e,t)=>{for(const i in e)(t||!Ba(i))&&(n[i]=e[i])},Ad=(n,e,t)=>{const i=n.slots=qu();if(n.vnode.shapeFlag&32){const r=e._;r?(Ju(i,e,t),t&&lu(i,"_",r,!0)):$u(e,i)}else e&&Zu(n,e)},wd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Ju(r,e,t):(s=!e.$stable,$u(e,r)),a=e}else e&&(Zu(n,e),a={default:1});if(s)for(const o in r)!Ba(o)&&a[o]==null&&delete r[o]},It=Dd;function Rd(n){return Cd(n)}function Cd(n,e){const t=Ys();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Sn,insertStaticContent:x}=n,v=(_,C,I,W=null,G=null,$=null,re=void 0,ne=null,oe=!!C.dynamicChildren)=>{if(_===C)return;_&&!pr(_,C)&&(W=Ne(_),z(_,G,$,!0),_=null),C.patchFlag===-2&&(oe=!1,C.dynamicChildren=null);const{type:ee,ref:Me,shapeFlag:M}=C;switch(ee){case Js:p(_,C,I,W);break;case ri:h(_,C,I,W);break;case go:_==null&&b(C,I,W,re);break;case tn:ae(_,C,I,W,G,$,re,ne,oe);break;default:M&1?w(_,C,I,W,G,$,re,ne,oe):M&6?le(_,C,I,W,G,$,re,ne,oe):(M&64||M&128)&&ee.process(_,C,I,W,G,$,re,ne,oe,Ke)}Me!=null&&G?wr(Me,_&&_.ref,$,C||_,!C):Me==null&&_&&_.ref!=null&&wr(_.ref,null,$,_,!0)},p=(_,C,I,W)=>{if(_==null)i(C.el=o(C.children),I,W);else{const G=C.el=_.el;C.children!==_.children&&c(G,C.children)}},h=(_,C,I,W)=>{_==null?i(C.el=l(C.children||""),I,W):C.el=_.el},b=(_,C,I,W)=>{[_.el,_.anchor]=x(_.children,C,I,W,_.el,_.anchor)},E=({el:_,anchor:C},I,W)=>{let G;for(;_&&_!==C;)G=d(_),i(_,I,W),_=G;i(C,I,W)},T=({el:_,anchor:C})=>{let I;for(;_&&_!==C;)I=d(_),r(_),_=I;r(C)},w=(_,C,I,W,G,$,re,ne,oe)=>{if(C.type==="svg"?re="svg":C.type==="math"&&(re="mathml"),_==null)U(C,I,W,G,$,re,ne,oe);else{const ee=_.el&&_.el._isVueCE?_.el:null;try{ee&&ee._beginPatch(),y(_,C,G,$,re,ne,oe)}finally{ee&&ee._endPatch()}}},U=(_,C,I,W,G,$,re,ne)=>{let oe,ee;const{props:Me,shapeFlag:M,transition:g,dirs:D}=_;if(oe=_.el=a(_.type,$,Me&&Me.is,Me),M&8?u(oe,_.children):M&16&&Q(_.children,oe,null,W,G,_o(_,$),re,ne),D&&ci(_,null,W,"created"),R(oe,_,_.scopeId,re,W),Me){for(const J in Me)J!=="value"&&!Tr(J)&&s(oe,J,null,Me[J],$,W);"value"in Me&&s(oe,"value",null,Me.value,$),(ee=Me.onVnodeBeforeMount)&&hn(ee,W,_)}D&&ci(_,null,W,"beforeMount");const Z=Pd(G,g);Z&&g.beforeEnter(oe),i(oe,C,I),((ee=Me&&Me.onVnodeMounted)||Z||D)&&It(()=>{ee&&hn(ee,W,_),Z&&g.enter(oe),D&&ci(_,null,W,"mounted")},G)},R=(_,C,I,W,G)=>{if(I&&m(_,I),W)for(let $=0;$<W.length;$++)m(_,W[$]);if(G){let $=G.subTree;if(C===$||nf($.type)&&($.ssContent===C||$.ssFallback===C)){const re=G.vnode;R(_,re,re.scopeId,re.slotScopeIds,G.parent)}}},Q=(_,C,I,W,G,$,re,ne,oe=0)=>{for(let ee=oe;ee<_.length;ee++){const Me=_[ee]=ne?In(_[ee]):mn(_[ee]);v(null,Me,C,I,W,G,$,re,ne)}},y=(_,C,I,W,G,$,re)=>{const ne=C.el=_.el;let{patchFlag:oe,dynamicChildren:ee,dirs:Me}=C;oe|=_.patchFlag&16;const M=_.props||nt,g=C.props||nt;let D;if(I&&ui(I,!1),(D=g.onVnodeBeforeUpdate)&&hn(D,I,C,_),Me&&ci(C,_,I,"beforeUpdate"),I&&ui(I,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(ne,""),ee?A(_.dynamicChildren,ee,ne,I,W,_o(C,G),$):re||Y(_,C,ne,null,I,W,_o(C,G),$,!1),oe>0){if(oe&16)se(ne,M,g,I,G);else if(oe&2&&M.class!==g.class&&s(ne,"class",null,g.class,G),oe&4&&s(ne,"style",M.style,g.style,G),oe&8){const Z=C.dynamicProps;for(let J=0;J<Z.length;J++){const ie=Z[J],ve=M[ie],ce=g[ie];(ce!==ve||ie==="value")&&s(ne,ie,ve,ce,G,I)}}oe&1&&_.children!==C.children&&u(ne,C.children)}else!re&&ee==null&&se(ne,M,g,I,G);((D=g.onVnodeUpdated)||Me)&&It(()=>{D&&hn(D,I,C,_),Me&&ci(C,_,I,"updated")},W)},A=(_,C,I,W,G,$,re)=>{for(let ne=0;ne<C.length;ne++){const oe=_[ne],ee=C[ne],Me=oe.el&&(oe.type===tn||!pr(oe,ee)||oe.shapeFlag&198)?f(oe.el):I;v(oe,ee,Me,null,W,G,$,re,!0)}},se=(_,C,I,W,G)=>{if(C!==I){if(C!==nt)for(const $ in C)!Tr($)&&!($ in I)&&s(_,$,C[$],null,G,W);for(const $ in I){if(Tr($))continue;const re=I[$],ne=C[$];re!==ne&&$!=="value"&&s(_,$,ne,re,G,W)}"value"in I&&s(_,"value",C.value,I.value,G)}},ae=(_,C,I,W,G,$,re,ne,oe)=>{const ee=C.el=_?_.el:o(""),Me=C.anchor=_?_.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:D}=C;D&&(ne=ne?ne.concat(D):D),_==null?(i(ee,I,W),i(Me,I,W),Q(C.children||[],I,Me,G,$,re,ne,oe)):M>0&&M&64&&g&&_.dynamicChildren&&_.dynamicChildren.length===g.length?(A(_.dynamicChildren,g,I,G,$,re,ne),(C.key!=null||G&&C===G.subTree)&&Qu(_,C,!0)):Y(_,C,I,Me,G,$,re,ne,oe)},le=(_,C,I,W,G,$,re,ne,oe)=>{C.slotScopeIds=ne,_==null?C.shapeFlag&512?G.ctx.activate(C,I,W,re,oe):N(C,I,W,G,$,re,oe):H(_,C,oe)},N=(_,C,I,W,G,$,re)=>{const ne=_.component=Hd(_,W,G);if(Ou(_)&&(ne.ctx.renderer=Ke),Vd(ne,!1,re),ne.asyncDep){if(G&&G.registerDep(ne,V,re),!_.el){const oe=ne.subTree=ln(ri);h(null,oe,C,I),_.placeholder=oe.el}}else V(ne,_,C,I,G,$,re)},H=(_,C,I)=>{const W=C.component=_.component;if(Md(_,C,I))if(W.asyncDep&&!W.asyncResolved){F(W,C,I);return}else W.next=C,W.update();else C.el=_.el,W.vnode=C},V=(_,C,I,W,G,$,re)=>{const ne=()=>{if(_.isMounted){let{next:M,bu:g,u:D,parent:Z,vnode:J}=_;{const be=ef(_);if(be){M&&(M.el=J.el,F(_,M,re)),be.asyncDep.then(()=>{It(()=>{_.isUnmounted||ee()},G)});return}}let ie=M,ve;ui(_,!1),M?(M.el=J.el,F(_,M,re)):M=J,g&&As(g),(ve=M.props&&M.props.onVnodeBeforeUpdate)&&hn(ve,Z,M,J),ui(_,!0);const ce=dl(_),de=_.subTree;_.subTree=ce,v(de,ce,f(de.el),Ne(de),_,G,$),M.el=ce.el,ie===null&&Sd(_,ce.el),D&&It(D,G),(ve=M.props&&M.props.onVnodeUpdated)&&It(()=>hn(ve,Z,M,J),G)}else{let M;const{el:g,props:D}=C,{bm:Z,m:J,parent:ie,root:ve,type:ce}=_,de=Rr(C);ui(_,!1),Z&&As(Z),!de&&(M=D&&D.onVnodeBeforeMount)&&hn(M,ie,C),ui(_,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(ce,_.parent?_.parent.type:void 0);const be=_.subTree=dl(_);v(null,be,I,W,_,G,$),C.el=be.el}if(J&&It(J,G),!de&&(M=D&&D.onVnodeMounted)){const be=C;It(()=>hn(M,ie,be),G)}(C.shapeFlag&256||ie&&Rr(ie.vnode)&&ie.vnode.shapeFlag&256)&&_.a&&It(_.a,G),_.isMounted=!0,C=I=W=null}};_.scope.on();const oe=_.effect=new du(ne);_.scope.off();const ee=_.update=oe.run.bind(oe),Me=_.job=oe.runIfDirty.bind(oe);Me.i=_,Me.id=_.uid,oe.scheduler=()=>Ia(Me),ui(_,!0),ee()},F=(_,C,I)=>{C.component=_;const W=_.vnode.props;_.vnode=C,_.next=null,yd(_,C.props,W,I),wd(_,C.children,I),Gn(),ol(_),Vn()},Y=(_,C,I,W,G,$,re,ne,oe=!1)=>{const ee=_&&_.children,Me=_?_.shapeFlag:0,M=C.children,{patchFlag:g,shapeFlag:D}=C;if(g>0){if(g&128){j(ee,M,I,W,G,$,re,ne,oe);return}else if(g&256){K(ee,M,I,W,G,$,re,ne,oe);return}}D&8?(Me&16&&Te(ee,G,$),M!==ee&&u(I,M)):Me&16?D&16?j(ee,M,I,W,G,$,re,ne,oe):Te(ee,G,$,!0):(Me&8&&u(I,""),D&16&&Q(M,I,W,G,$,re,ne,oe))},K=(_,C,I,W,G,$,re,ne,oe)=>{_=_||Zi,C=C||Zi;const ee=_.length,Me=C.length,M=Math.min(ee,Me);let g;for(g=0;g<M;g++){const D=C[g]=oe?In(C[g]):mn(C[g]);v(_[g],D,I,null,G,$,re,ne,oe)}ee>Me?Te(_,G,$,!0,!1,M):Q(C,I,W,G,$,re,ne,oe,M)},j=(_,C,I,W,G,$,re,ne,oe)=>{let ee=0;const Me=C.length;let M=_.length-1,g=Me-1;for(;ee<=M&&ee<=g;){const D=_[ee],Z=C[ee]=oe?In(C[ee]):mn(C[ee]);if(pr(D,Z))v(D,Z,I,null,G,$,re,ne,oe);else break;ee++}for(;ee<=M&&ee<=g;){const D=_[M],Z=C[g]=oe?In(C[g]):mn(C[g]);if(pr(D,Z))v(D,Z,I,null,G,$,re,ne,oe);else break;M--,g--}if(ee>M){if(ee<=g){const D=g+1,Z=D<Me?C[D].el:W;for(;ee<=g;)v(null,C[ee]=oe?In(C[ee]):mn(C[ee]),I,Z,G,$,re,ne,oe),ee++}}else if(ee>g)for(;ee<=M;)z(_[ee],G,$,!0),ee++;else{const D=ee,Z=ee,J=new Map;for(ee=Z;ee<=g;ee++){const Fe=C[ee]=oe?In(C[ee]):mn(C[ee]);Fe.key!=null&&J.set(Fe.key,ee)}let ie,ve=0;const ce=g-Z+1;let de=!1,be=0;const ke=new Array(ce);for(ee=0;ee<ce;ee++)ke[ee]=0;for(ee=D;ee<=M;ee++){const Fe=_[ee];if(ve>=ce){z(Fe,G,$,!0);continue}let we;if(Fe.key!=null)we=J.get(Fe.key);else for(ie=Z;ie<=g;ie++)if(ke[ie-Z]===0&&pr(Fe,C[ie])){we=ie;break}we===void 0?z(Fe,G,$,!0):(ke[we-Z]=ee+1,we>=be?be=we:de=!0,v(Fe,C[we],I,null,G,$,re,ne,oe),ve++)}const ue=de?Ld(ke):Zi;for(ie=ue.length-1,ee=ce-1;ee>=0;ee--){const Fe=Z+ee,we=C[Fe],Pe=C[Fe+1],Re=Fe+1<Me?Pe.el||tf(Pe):W;ke[ee]===0?v(null,we,I,Re,G,$,re,ne,oe):de&&(ie<0||ee!==ue[ie]?P(we,I,Re,2):ie--)}}},P=(_,C,I,W,G=null)=>{const{el:$,type:re,transition:ne,children:oe,shapeFlag:ee}=_;if(ee&6){P(_.component.subTree,C,I,W);return}if(ee&128){_.suspense.move(C,I,W);return}if(ee&64){re.move(_,C,I,Ke);return}if(re===tn){i($,C,I);for(let M=0;M<oe.length;M++)P(oe[M],C,I,W);i(_.anchor,C,I);return}if(re===go){E(_,C,I);return}if(W!==2&&ee&1&&ne)if(W===0)ne.beforeEnter($),i($,C,I),It(()=>ne.enter($),G);else{const{leave:M,delayLeave:g,afterLeave:D}=ne,Z=()=>{_.ctx.isUnmounted?r($):i($,C,I)},J=()=>{$._isLeaving&&$[Yh](!0),M($,()=>{Z(),D&&D()})};g?g($,Z,J):J()}else i($,C,I)},z=(_,C,I,W=!1,G=!1)=>{const{type:$,props:re,ref:ne,children:oe,dynamicChildren:ee,shapeFlag:Me,patchFlag:M,dirs:g,cacheIndex:D}=_;if(M===-2&&(G=!1),ne!=null&&(Gn(),wr(ne,null,I,_,!0),Vn()),D!=null&&(C.renderCache[D]=void 0),Me&256){C.ctx.deactivate(_);return}const Z=Me&1&&g,J=!Rr(_);let ie;if(J&&(ie=re&&re.onVnodeBeforeUnmount)&&hn(ie,C,_),Me&6)ge(_.component,I,W);else{if(Me&128){_.suspense.unmount(I,W);return}Z&&ci(_,null,C,"beforeUnmount"),Me&64?_.type.remove(_,C,I,Ke,W):ee&&!ee.hasOnce&&($!==tn||M>0&&M&64)?Te(ee,C,I,!1,!0):($===tn&&M&384||!G&&Me&16)&&Te(oe,C,I),W&&me(_)}(J&&(ie=re&&re.onVnodeUnmounted)||Z)&&It(()=>{ie&&hn(ie,C,_),Z&&ci(_,null,C,"unmounted")},I)},me=_=>{const{type:C,el:I,anchor:W,transition:G}=_;if(C===tn){_e(I,W);return}if(C===go){T(_);return}const $=()=>{r(I),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(_.shapeFlag&1&&G&&!G.persisted){const{leave:re,delayLeave:ne}=G,oe=()=>re(I,$);ne?ne(_.el,$,oe):oe()}else $()},_e=(_,C)=>{let I;for(;_!==C;)I=d(_),r(_),_=I;r(C)},ge=(_,C,I)=>{const{bum:W,scope:G,job:$,subTree:re,um:ne,m:oe,a:ee}=_;_l(oe),_l(ee),W&&As(W),G.stop(),$&&($.flags|=8,z(re,_,C,I)),ne&&It(ne,C),It(()=>{_.isUnmounted=!0},C)},Te=(_,C,I,W=!1,G=!1,$=0)=>{for(let re=$;re<_.length;re++)z(_[re],C,I,W,G)},Ne=_=>{if(_.shapeFlag&6)return Ne(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const C=d(_.anchor||_.el),I=C&&C[Xh];return I?d(I):C};let ye=!1;const Ce=(_,C,I)=>{let W;_==null?C._vnode&&(z(C._vnode,null,null,!0),W=C._vnode.component):v(C._vnode||null,_,C,null,null,null,I),C._vnode=_,ye||(ye=!0,ol(W),Pu(),ye=!1)},Ke={p:v,um:z,m:P,r:me,mt:N,mc:Q,pc:Y,pbc:A,n:Ne,o:n};return{render:Ce,hydrate:void 0,createApp:pd(Ce)}}function _o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qu(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=In(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Qu(a,o)),o.type===Js&&(o.patchFlag===-1&&(o=r[s]=In(o)),o.el=a.el),o.type===ri&&!o.el&&(o.el=a.el)}}function Ld(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function ef(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ef(e)}function _l(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tf(e.subTree):null}const nf=n=>n.__isSuspense;function Dd(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):zh(n)}const tn=Symbol.for("v-fgt"),Js=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),Pr=[];let Wt=null;function sn(n=!1){Pr.push(Wt=n?null:[])}function Ud(){Pr.pop(),Wt=Pr[Pr.length-1]||null}let Br=1;function gl(n,e=!1){Br+=n,n<0&&Wt&&e&&(Wt.hasOnce=!0)}function rf(n){return n.dynamicChildren=Br>0?Wt||Zi:null,Ud(),Br>0&&Wt&&Wt.push(n),n}function Mn(n,e,t,i,r,s){return rf(gt(n,e,t,i,r,s,!0))}function Id(n,e,t,i,r){return rf(ln(n,e,t,i,r,!0))}function sf(n){return n?n.__v_isVNode===!0:!1}function pr(n,e){return n.type===e.type&&n.key===e.key}const of=({key:n})=>n??null,Rs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Tt(n)||Be(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function gt(n,e=null,t=null,i=0,r=null,s=n===tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&of(e),ref:e&&Rs(e),scopeId:Du,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return o?(Ha(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Br>0&&!a&&Wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wt.push(l),l}const ln=Nd;function Nd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===sd)&&(n=ri),sf(n)){const o=rr(n,e,!0);return t&&Ha(o,t),Br>0&&!s&&Wt&&(o.shapeFlag&6?Wt[Wt.indexOf(n)]=o:Wt.push(o)),o.patchFlag=-2,o}if(qd(n)&&(n=n.__vccOpts),e){e=Fd(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Ta(o)),tt(l)&&(Ua(l)&&!Ie(l)&&(l=Mt({},l)),e.style=ya(l))}const a=ht(n)?1:nf(n)?128:qh(n)?64:tt(n)?4:Be(n)?2:0;return gt(n,e,t,i,r,a,s,!0)}function Fd(n){return n?Ua(n)||Yu(n)?Mt({},n):n:null}function rr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Od(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&of(c),ref:e&&e.ref?t&&s?Ie(s)?s.concat(Rs(e)):[s,Rs(e)]:Rs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Na(u,l.clone(u)),u}function af(n=" ",e=0){return ln(Js,null,n,e)}function Lr(n="",e=!1){return e?(sn(),Id(ri,null,n)):ln(ri,null,n)}function mn(n){return n==null||typeof n=="boolean"?ln(ri):Ie(n)?ln(tn,null,n.slice()):sf(n)?In(n):ln(Js,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function Ha(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ha(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Yu(e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),i&64?(t=16,e=[af(e)]):t=8);n.children=e,n.shapeFlag|=t}function Od(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ta([e.class,i.class]));else if(r==="style")e.style=ya([e.style,i.style]);else if(Xs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){Tn(n,e,7,[t,i])}const Bd=Vu();let zd=0;function Hd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bd,s={uid:zd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ju(i,r),emitsOptions:Wu(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_d.bind(null,s),n.ce&&n.ce(s),s}let Ut=null;const Gd=()=>Ut||$t;let Fs,oa;{const n=Ys(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Fs=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),oa=e("__VUE_SSR_SETTERS__",t=>zr=t)}const Xr=n=>{const e=Ut;return Fs(n),n.scope.on(),()=>{n.scope.off(),Fs(e)}},vl=()=>{Ut&&Ut.scope.off(),Fs(null)};function lf(n){return n.vnode.shapeFlag&4}let zr=!1;function Vd(n,e=!1,t=!1){e&&oa(e);const{props:i,children:r}=n.vnode,s=lf(n);Ed(n,i,s,e),Ad(n,r,t||e);const a=s?Wd(n,e):void 0;return e&&oa(!1),a}function Wd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ad);const{setup:i}=t;if(i){Gn();const r=n.setupContext=i.length>1?Xd(n):null,s=Xr(n),a=kr(i,n,0,[n.props,r]),o=ru(a);if(Vn(),s(),(o||n.sp)&&!Rr(n)&&Fu(n),o){if(a.then(vl,vl),e)return a.then(l=>{xl(n,l)}).catch(l=>{js(l,n,0)});n.asyncDep=a}else xl(n,a)}else cf(n)}function xl(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=wu(e)),cf(n)}function cf(n,e,t){const i=n.type;n.render||(n.render=i.render||Sn);{const r=Xr(n);Gn();try{ld(n)}finally{Vn(),r()}}}const kd={get(n,e){return yt(n,"get",""),n[e]}};function Xd(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,kd),slots:n.slots,emit:n.emit,expose:e}}function Qs(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wu(wh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cr)return Cr[t](n)},has(e,t){return t in e||t in Cr}})):n.proxy}function qd(n){return Be(n)&&"__vccOpts"in n}const Yd=(n,e)=>Uh(n,e,zr),Kd="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let aa;const Ml=typeof window<"u"&&window.trustedTypes;if(Ml)try{aa=Ml.createPolicy("vue",{createHTML:n=>n})}catch{}const uf=aa?n=>aa.createHTML(n):n=>n,jd="http://www.w3.org/2000/svg",$d="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,Sl=Un&&Un.createElement("template"),Zd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS(jd,n):e==="mathml"?Un.createElementNS($d,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Sl.innerHTML=uf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Sl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jd=Symbol("_vtc");function Qd(n,e,t){const i=n[Jd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const El=Symbol("_vod"),ep=Symbol("_vsh"),tp=Symbol(""),np=/(?:^|;)\s*display\s*:/;function ip(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Cs(i,o,"")}else for(const a in e)t[a]==null&&Cs(i,a,"");for(const a in t)a==="display"&&(s=!0),Cs(i,a,t[a])}else if(r){if(e!==t){const a=i[tp];a&&(t+=";"+a),i.cssText=t,s=np.test(t)}}else e&&n.removeAttribute("style");El in n&&(n[El]=s?i.display:"",n[ep]&&(i.display="none"))}const yl=/\s*!important$/;function Cs(n,e,t){if(Ie(t))t.forEach(i=>Cs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rp(n,e);yl.test(t)?n.setProperty(oi(i),t.replace(yl,""),"important"):n[i]=t}}const Tl=["Webkit","Moz","ms"],vo={};function rp(n,e){const t=vo[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return vo[e]=i;i=au(i);for(let r=0;r<Tl.length;r++){const s=Tl[r]+i;if(s in n)return vo[e]=s}return e}const bl="http://www.w3.org/1999/xlink";function Al(n,e,t,i,r,s=rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bl,e.slice(6,e.length)):n.setAttributeNS(bl,e,t):t==null||s&&!cu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":yn(t)?String(t):t)}function wl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?uf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=cu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ji(n,e,t,i){n.addEventListener(e,t,i)}function sp(n,e,t,i){n.removeEventListener(e,t,i)}const Rl=Symbol("_vei");function op(n,e,t,i,r=null){const s=n[Rl]||(n[Rl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ap(e);if(i){const c=s[e]=up(i,r);ji(n,o,c,l)}else a&&(sp(n,o,a,l),s[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function ap(n){let e;if(Cl.test(n)){e={};let i;for(;i=n.match(Cl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):oi(n.slice(2)),e]}let xo=0;const lp=Promise.resolve(),cp=()=>xo||(lp.then(()=>xo=0),xo=Date.now());function up(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(fp(i,t.value),e,5,[i])};return t.value=n,t.attached=cp(),t}function fp(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Qd(n,i,a):e==="style"?ip(n,t,i):Xs(e)?xa(e)||op(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dp(n,e,i,a))?(wl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Al(n,e,i,a,s,e!=="value")):n._isVueCE&&(pp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(i)))?wl(n,on(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Al(n,e,i,a))};function dp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pl(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pl(e)&&ht(t)?!1:e in n}function pp(n,e){const t=n._def.props;if(!t)return!1;const i=on(e);return Array.isArray(t)?t.some(r=>on(r)===i):Object.keys(t).some(r=>on(r)===i)}const Ll=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>As(e,t):e};function mp(n){n.target.composing=!0}function Dl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mo=Symbol("_assign");function Ul(n,e,t){return e&&(n=n.trim()),t&&(n=Ea(n)),n}const ff={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Mo]=Ll(r);const s=i||r.props&&r.props.type==="number";ji(n,e?"change":"input",a=>{a.target.composing||n[Mo](Ul(n.value,t,s))}),(t||s)&&ji(n,"change",()=>{n.value=Ul(n.value,t,s)}),e||(ji(n,"compositionstart",mp),ji(n,"compositionend",Dl),ji(n,"change",Dl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Mo]=Ll(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ea(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},_p=["ctrl","shift","alt","meta"],gp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>_p.some(t=>n[`${t}Key`]&&!e.includes(t))},vp=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=gp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},xp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=oi(r.key);if(e.some(a=>a===s||xp[a]===s))return n(r)})},Mp=Mt({patchProp:hp},Zd);let Il;function Sp(){return Il||(Il=Rd(Mp))}const Ep=(...n)=>{const e=Sp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Tp(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,yp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function yp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tp(n){return ht(n)?document.querySelector(n):n}const bp={class:"room-manager"},Ap={key:0,class:"add-room-form"},wp={class:"room-list"},Rp=["onClick"],Cp=["onClick"],Pp=Fa({__name:"RoomManager",emits:["selectRoom"],setup(n,{emit:e}){const t=vn([]),i=vn(!1),r=vn(""),s=e,a=()=>{sessionStorage.setItem("rooms",JSON.stringify(t.value))},o=()=>{const m=sessionStorage.getItem("rooms");if(m)try{t.value=JSON.parse(m)}catch(x){console.error("Failed to load rooms:",x)}},l=()=>{i.value=!0,r.value=""},c=()=>{const m=r.value.trim();if(m){const x=Date.now().toString();t.value.push({id:x,name:m}),a(),i.value=!1,r.value=""}},u=()=>{i.value=!1,r.value=""},f=m=>{s("selectRoom",m)},d=m=>{t.value=t.value.filter(x=>x.id!==m),a(),sessionStorage.removeItem(`arTags_${m}`)};return Oa(()=>{o()}),(m,x)=>(sn(),Mn("div",bp,[x[1]||(x[1]=gt("h1",null,"Gestion des Pièces",-1)),gt("button",{onClick:l,class:"add-room-btn"},"Ajouter une Pièce"),i.value?(sn(),Mn("div",Ap,[Uu(gt("input",{"onUpdate:modelValue":x[0]||(x[0]=v=>r.value=v),onKeydown:hf(c,["enter"]),placeholder:"Nom de la pièce"},null,544),[[ff,r.value]]),gt("button",{onClick:c},"Confirmer"),gt("button",{onClick:u},"Annuler")])):Lr("",!0),gt("ul",wp,[(sn(!0),Mn(tn,null,od(t.value,v=>(sn(),Mn("li",{key:v.id,class:"room-item"},[gt("span",null,fu(v.name),1),gt("button",{onClick:p=>f(v.id),class:"select-btn"},"Sélectionner",8,Rp),gt("button",{onClick:p=>d(v.id),class:"delete-btn"},"Supprimer",8,Cp)]))),128))])]))}}),df=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Lp=df(Pp,[["__scopeId","data-v-719611e3"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="158",Dp=0,Nl=1,Up=2,pf=1,Ip=2,Dn=3,si=0,Ft=1,On=2,ti=0,tr=1,Fl=2,Ol=3,Bl=4,Np=5,vi=100,Fp=101,Op=102,zl=103,Hl=104,Bp=200,zp=201,Hp=202,Gp=203,la=204,ca=205,Vp=206,Wp=207,kp=208,Xp=209,qp=210,Yp=211,Kp=212,jp=213,$p=214,Zp=0,Jp=1,Qp=2,Os=3,em=4,tm=5,nm=6,im=7,mf=0,rm=1,sm=2,ni=0,om=1,am=2,lm=3,cm=4,um=5,_f=300,sr=301,or=302,ua=303,fa=304,eo=306,ha=1e3,nn=1001,da=1002,Pt=1003,Gl=1004,So=1005,qt=1006,fm=1007,Hr=1008,ii=1009,hm=1010,dm=1011,Va=1012,gf=1013,Qn=1014,ei=1015,Gr=1016,vf=1017,xf=1018,Ei=1020,pm=1021,rn=1023,mm=1024,_m=1025,yi=1026,ar=1027,gm=1028,Mf=1029,vm=1030,Sf=1031,Ef=1033,Eo=33776,yo=33777,To=33778,bo=33779,Vl=35840,Wl=35841,kl=35842,Xl=35843,xm=36196,ql=37492,Yl=37496,Kl=37808,jl=37809,$l=37810,Zl=37811,Jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,sc=37819,oc=37820,ac=37821,Ao=36492,lc=36494,cc=36495,Mm=36283,uc=36284,fc=36285,hc=36286,yf=3e3,Ti=3001,Sm=3200,Em=3201,ym=0,Tm=1,jt="",vt="srgb",kn="srgb-linear",Wa="display-p3",to="display-p3-linear",Bs="linear",st="srgb",zs="rec709",Hs="p3",Ri=7680,dc=519,bm=512,Am=513,wm=514,Rm=515,Cm=516,Pm=517,Lm=518,Dm=519,pa=35044,pc="300 es",ma=1035,Bn=2e3,Gs=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mc=1234567;const Dr=Math.PI/180,Vr=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function ka(n,e){return(n%e+e)%e}function Um(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Im(n,e,t){return n!==e?(t-n)/(e-n):0}function Ur(n,e,t){return(1-t)*n+t*e}function Nm(n,e,t,i){return Ur(n,e,1-Math.exp(-t*i))}function Fm(n,e=1){return e-Math.abs(ka(n,e*2)-e)}function Om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hm(n,e){return n+Math.random()*(e-n)}function Gm(n){return n*(.5-Math.random())}function Vm(n){n!==void 0&&(mc=n);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wm(n){return n*Dr}function km(n){return n*Vr}function _a(n){return(n&n-1)===0&&n!==0}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ym={DEG2RAD:Dr,RAD2DEG:Vr,generateUUID:Hn,clamp:Dt,euclideanModulo:ka,mapLinear:Um,inverseLerp:Im,lerp:Ur,damp:Nm,pingpong:Fm,smoothstep:Om,smootherstep:Bm,randInt:zm,randFloat:Hm,randFloatSpread:Gm,seededRandom:Vm,degToRad:Wm,radToDeg:km,isPowerOfTwo:_a,ceilPowerOfTwo:Xm,floorPowerOfTwo:Vs,setQuaternionFromProperEuler:qm,normalize:Qe,denormalize:xn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],h=r[6],b=r[1],E=r[4],T=r[7],w=r[2],U=r[5],R=r[8];return s[0]=a*v+o*b+l*w,s[3]=a*p+o*E+l*U,s[6]=a*h+o*T+l*R,s[1]=c*v+u*b+f*w,s[4]=c*p+u*E+f*U,s[7]=c*h+u*T+f*R,s[2]=d*v+m*b+x*w,s[5]=d*p+m*E+x*U,s[8]=d*h+m*T+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new We;function Tf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Km(){const n=Ws("canvas");return n.style.display="block",n}const _c={};function Ir(n){n in _c||(_c[n]=!0,console.warn(n))}const gc=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vc=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[kn]:{transfer:Bs,primaries:zs,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:st,primaries:zs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[to]:{transfer:Bs,primaries:Hs,toReference:n=>n.applyMatrix3(vc),fromReference:n=>n.applyMatrix3(gc)},[Wa]:{transfer:st,primaries:Hs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(vc),fromReference:n=>n.applyMatrix3(gc).convertLinearToSRGB()}},jm=new Set([kn,to]),et={enabled:!0,_workingColorSpace:kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!jm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=es[e].toReference,r=es[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return es[n].primaries},getTransfer:function(n){return n===jt?Bs:es[n].transfer}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ro(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ci;class bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Ws("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $m=0;class Af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Co(r[a].image)):s.push(Co(r[a]))}else s=Co(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class Ot extends cr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=nn,r=nn,s=qt,a=Hr,o=rn,l=ii,c=Ot.DEFAULT_ANISOTROPY,u=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Hn(),this.name="",this.source=new Af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?vt:jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Ti:yf}set encoding(e){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?vt:jt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=_f;Ot.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,w=(h+1)/2,U=(u+d)/4,R=(f+v)/4,Q=(x+p)/4;return E>T&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=U/i,s=R/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=U/r,s=Q/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=Q/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jm extends cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ti?vt:jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Af(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Jm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wf extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qm extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*v,b=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const w=Math.sqrt(E),U=Math.atan2(w,h*b);p=Math.sin(p*U)/w,o=Math.sin(o*U)/w}const T=o*b;if(l=l*p+d*T,c=c*p+m*T,u=u*p+x*T,f=f*p+v*T,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new B,xc=new ur;class qr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(s,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ns.subVectors(this.max,mr),Pi.subVectors(e.a,mr),Li.subVectors(e.b,mr),Di.subVectors(e.c,mr),Yn.subVectors(Li,Pi),Kn.subVectors(Di,Li),fi.subVectors(Pi,Di);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!Lo(t,Pi,Li,Di,ns)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Pi,Li,Di,ns))?!1:(is.crossVectors(Yn,Kn),t=[is.x,is.y,is.z],Lo(t,Pi,Li,Di,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new B,new B,new B,new B,new B,new B,new B,new B],Jt=new B,ts=new qr,Pi=new B,Li=new B,Di=new B,Yn=new B,Kn=new B,fi=new B,mr=new B,ns=new B,is=new B,hi=new B;function Lo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const e_=new qr,_r=new B,Do=new B;class Xa{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Do)),this.expandByPoint(_r.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new B,Uo=new B,rs=new B,jn=new B,Io=new B,ss=new B,No=new B;class t_{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uo.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rs),o=jn.dot(this.direction),l=-jn.dot(rs),c=jn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uo).addScaledVector(rs,d),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,r,s){Io.subVectors(t,e),ss.subVectors(i,e),No.crossVectors(Io,ss);let a=this.direction.dot(No),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(ss.crossVectors(jn,ss));if(l<0)return null;const c=o*this.direction.dot(Io.cross(jn));if(c<0||l+c>a)return null;const u=-o*jn.dot(No);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n_,e,i_)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),$n.crossVectors(i,Gt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),$n.crossVectors(i,Gt)),$n.normalize(),os.crossVectors(Gt,$n),r[0]=$n.x,r[4]=os.x,r[8]=Gt.x,r[1]=$n.y,r[5]=os.y,r[9]=Gt.y,r[2]=$n.z,r[6]=os.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],h=i[14],b=i[3],E=i[7],T=i[11],w=i[15],U=r[0],R=r[4],Q=r[8],y=r[12],A=r[1],se=r[5],ae=r[9],le=r[13],N=r[2],H=r[6],V=r[10],F=r[14],Y=r[3],K=r[7],j=r[11],P=r[15];return s[0]=a*U+o*A+l*N+c*Y,s[4]=a*R+o*se+l*H+c*K,s[8]=a*Q+o*ae+l*V+c*j,s[12]=a*y+o*le+l*F+c*P,s[1]=u*U+f*A+d*N+m*Y,s[5]=u*R+f*se+d*H+m*K,s[9]=u*Q+f*ae+d*V+m*j,s[13]=u*y+f*le+d*F+m*P,s[2]=x*U+v*A+p*N+h*Y,s[6]=x*R+v*se+p*H+h*K,s[10]=x*Q+v*ae+p*V+h*j,s[14]=x*y+v*le+p*F+h*P,s[3]=b*U+E*A+T*N+w*Y,s[7]=b*R+E*se+T*H+w*K,s[11]=b*Q+E*ae+T*V+w*j,s[15]=b*y+E*le+T*F+w*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],h=e[15],b=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,E=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,T=u*v*c-x*f*c+x*o*m-a*v*m-u*o*h+a*f*h,w=x*f*l-u*v*l-x*o*d+a*v*d+u*o*p-a*f*p,U=t*b+i*E+r*T+s*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/U;return e[0]=b*R,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*R,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=E*R,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*R,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=T*R,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*h-t*f*h)*R,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*R,e[12]=w*R,e[13]=(u*v*r-x*f*r+x*i*d-t*v*d-u*i*p+t*f*p)*R,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,p=a*f,h=o*f,b=l*c,E=l*u,T=l*f,w=i.x,U=i.y,R=i.z;return r[0]=(1-(v+h))*w,r[1]=(m+T)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(m-T)*U,r[5]=(1-(d+h))*U,r[6]=(p+b)*U,r[7]=0,r[8]=(x+E)*R,r[9]=(p-b)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,u=1/a,f=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Bn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Gs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Bn)x=(a+s)*f,v=-2*f;else if(o===Gs)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new B,Qt=new ot,n_=new B(0,0,0),i_=new B(1,1,1),$n=new B,os=new B,Gt=new B,Mc=new ot,Sc=new ur;class no{constructor(e=0,t=0,i=0,r=no.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}no.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r_=0;const Ec=new B,Ii=new ur,Cn=new ot,as=new B,gr=new B,s_=new B,o_=new ur,yc=new B(1,0,0),Tc=new B(0,1,0),bc=new B(0,0,1),a_={type:"added"},l_={type:"removed"};class Bt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,t=new no,i=new ur,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?as.copy(e):as.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gr,as,this.up):Cn.lookAt(as,gr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new B,Pn=new B,Fo=new B,Ln=new B,Ni=new B,Fi=new B,Ac=new B,Oo=new B,Bo=new B,zo=new B;let ls=!1;class Yt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){en.subVectors(r,t),Pn.subVectors(i,t),Fo.subVectors(e,t);const a=en.dot(en),o=en.dot(Pn),l=en.dot(Fo),c=Pn.dot(Pn),u=Pn.dot(Fo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,r,s,a,o,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(e,t,i,r){return en.subVectors(i,t),Pn.subVectors(e,t),en.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),en.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,i),Fi.subVectors(s,i),Oo.subVectors(e,i);const l=Ni.dot(Oo),c=Fi.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Bo.subVectors(e,r);const u=Ni.dot(Bo),f=Fi.dot(Bo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ni,a);zo.subVectors(e,s);const m=Ni.dot(zo),x=Fi.dot(zo);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Fi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Ac.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Ac,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=ka(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return et.fromWorkingColorSpace(Et.copy(this),e),Math.round(Dt(Et.r*255,0,255))*65536+Math.round(Dt(Et.g*255,0,255))*256+Math.round(Dt(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){et.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(cs);const i=Ur(Zn.h,cs.h,t),r=Ur(Zn.s,cs.s,t),s=Ur(Zn.l,cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Je;Je.NAMES=Cf;let c_=0;class Yr extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=tr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qa extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,us=new qe;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pa,this.updateRange={offset:0,count:-1},this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Pf extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lf extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let u_=0;const Xt=new ot,Go=new Bt,Oi=new B,Vt=new qr,vr=new qr,_t=new B;class qn extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?Lf:Pf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Vt.min,vr.min),Vt.expandByPoint(_t),_t.addVectors(Vt.max,vr.max),Vt.expandByPoint(_t)):(Vt.expandByPoint(vr.min),Vt.expandByPoint(vr.max))}Vt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),_t.add(Oi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new B,u[A]=new B;const f=new B,d=new B,m=new B,x=new qe,v=new qe,p=new qe,h=new B,b=new B;function E(A,se,ae){f.fromArray(r,A*3),d.fromArray(r,se*3),m.fromArray(r,ae*3),x.fromArray(a,A*2),v.fromArray(a,se*2),p.fromArray(a,ae*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const le=1/(v.x*p.y-p.x*v.y);isFinite(le)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(le),b.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(le),c[A].add(h),c[se].add(h),c[ae].add(h),u[A].add(b),u[se].add(b),u[ae].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,se=T.length;A<se;++A){const ae=T[A],le=ae.start,N=ae.count;for(let H=le,V=le+N;H<V;H+=3)E(i[H+0],i[H+1],i[H+2])}const w=new B,U=new B,R=new B,Q=new B;function y(A){R.fromArray(s,A*3),Q.copy(R);const se=c[A];w.copy(se),w.sub(R.multiplyScalar(R.dot(se))).normalize(),U.crossVectors(Q,se);const le=U.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=le}for(let A=0,se=T.length;A<se;++A){const ae=T[A],le=ae.start,N=ae.count;for(let H=le,V=le+N;H<V;H+=3)y(i[H+0]),y(i[H+1]),y(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new cn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ot,di=new t_,fs=new Xa,Rc=new B,Bi=new B,zi=new B,Hi=new B,Vo=new B,hs=new B,ds=new qe,ps=new qe,ms=new qe,Cc=new B,Pc=new B,Lc=new B,_s=new B,gs=new B;class zn extends Bt{constructor(e=new qn,t=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Vo.fromBufferAttribute(f,e),a?hs.addScaledVector(Vo,u):hs.addScaledVector(Vo.sub(t),u))}t.add(hs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(fs.containsPoint(di.origin)===!1&&(di.intersectSphere(fs,Rc)===null||di.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(wc.copy(s).invert(),di.copy(e.ray).applyMatrix4(wc),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=E;T<w;T+=3){const U=o.getX(T),R=o.getX(T+1),Q=o.getX(T+2);r=vs(this,h,e,i,c,u,f,U,R,Q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=o.getX(p),E=o.getX(p+1),T=o.getX(p+2);r=vs(this,a,e,i,c,u,f,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,w=E;T<w;T+=3){const U=T,R=T+1,Q=T+2;r=vs(this,h,e,i,c,u,f,U,R,Q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=p,E=p+1,T=p+2;r=vs(this,a,e,i,c,u,f,b,E,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function f_(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;gs.copy(o),gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:n}}function vs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Bi),n.getVertexPosition(l,zi),n.getVertexPosition(c,Hi);const u=f_(n,e,t,i,Bi,zi,Hi,_s);if(u){r&&(ds.fromBufferAttribute(r,o),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,c),u.uv=Yt.getInterpolation(_s,Bi,zi,Hi,ds,ps,ms,new qe)),s&&(ds.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),u.uv1=Yt.getInterpolation(_s,Bi,zi,Hi,ds,ps,ms,new qe),u.uv2=u.uv1),a&&(Cc.fromBufferAttribute(a,o),Pc.fromBufferAttribute(a,l),Lc.fromBufferAttribute(a,c),u.normal=Yt.getInterpolation(_s,Bi,zi,Hi,Cc,Pc,Lc,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Yt.getNormal(Bi,zi,Hi,f.normal),u.face=f}return u}class Kr extends qn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function x(v,p,h,b,E,T,w,U,R,Q,y){const A=T/R,se=w/Q,ae=T/2,le=w/2,N=U/2,H=R+1,V=Q+1;let F=0,Y=0;const K=new B;for(let j=0;j<V;j++){const P=j*se-le;for(let z=0;z<H;z++){const me=z*A-ae;K[v]=me*b,K[p]=P*E,K[h]=N,c.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[h]=U>0?1:-1,u.push(K.x,K.y,K.z),f.push(z/R),f.push(1-j/Q),F+=1}}for(let j=0;j<Q;j++)for(let P=0;P<R;P++){const z=d+P+H*j,me=d+P+H*(j+1),_e=d+(P+1)+H*(j+1),ge=d+(P+1)+H*j;l.push(z,me,ge),l.push(me,_e,ge),Y+=6}o.addGroup(m,Y,y),m+=Y,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const r in i)e[r]=i[r]}return e}function h_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Df(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const d_={clone:lr,merge:Ct};var p_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p_,this.fragmentShader=m_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Uf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class __ extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new Kt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const a=new Kt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class If extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g_ extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?vt:jt),this.texture=new If(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kr(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ti});s.uniforms.tEquirect.value=t;const a=new zn(r,s),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=qt),new __(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wo=new B,v_=new B,x_=new We;class _i{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(v_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||x_.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Xa,xs=new B;class Nf{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],h=r[12],b=r[13],E=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+x,T+b).normalize(),i[3].setComponents(l-a,d-u,p-x,T-b).normalize(),i[4].setComponents(l-o,d-f,p-v,T-E).normalize(),t===Bn)i[5].setComponents(l+o,d+f,p+v,T+E).normalize();else if(t===Gs)i[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ff(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function M_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ya extends qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let E=0;E<c;E++){const T=E*f-s;x.push(T,-b,0),v.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const E=b+c*h,T=b+c*(h+1),w=b+1+c*(h+1),U=b+1+c*h;m.push(E,T,U),m.push(T,w,U)}this.setIndex(m),this.setAttribute("position",new En(x,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
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
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D_=`#ifdef USE_IRIDESCENCE
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
#endif`,U_=`#ifdef USE_BUMPMAP
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,V_=`#define PI 3.141592653589793
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
} // validated`,W_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k_=`vec3 transformedNormal = objectNormal;
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
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`
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
}`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gg=`PhysicalMaterial material;
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
#endif`,vg=`struct PhysicalMaterial {
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
}`,xg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cg=`#if defined( USE_POINTS_UV )
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
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ug=`#ifdef USE_MORPHNORMALS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iv=`float getShadowMask() {
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
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,Av=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`uniform float scale;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Nv=`#define LAMBERT
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define MATCAP
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
}`,Bv=`#define NORMAL
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
}`,zv=`#define NORMAL
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
}`,Hv=`#define PHONG
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
}`,Gv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,Wv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,Xv=`#define TOON
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
}`,qv=`uniform float size;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,$v=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:S_,alphahash_pars_fragment:E_,alphamap_fragment:y_,alphamap_pars_fragment:T_,alphatest_fragment:b_,alphatest_pars_fragment:A_,aomap_fragment:w_,aomap_pars_fragment:R_,begin_vertex:C_,beginnormal_vertex:P_,bsdfs:L_,iridescence_fragment:D_,bumpmap_pars_fragment:U_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:N_,clipping_planes_pars_vertex:F_,clipping_planes_vertex:O_,color_fragment:B_,color_pars_fragment:z_,color_pars_vertex:H_,color_vertex:G_,common:V_,cube_uv_reflection_fragment:W_,defaultnormal_vertex:k_,displacementmap_pars_vertex:X_,displacementmap_vertex:q_,emissivemap_fragment:Y_,emissivemap_pars_fragment:K_,colorspace_fragment:j_,colorspace_pars_fragment:$_,envmap_fragment:Z_,envmap_common_pars_fragment:J_,envmap_pars_fragment:Q_,envmap_pars_vertex:eg,envmap_physical_pars_fragment:hg,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:rg,fog_pars_fragment:sg,gradientmap_pars_fragment:og,lightmap_fragment:ag,lightmap_pars_fragment:lg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:ug,lights_pars_begin:fg,lights_toon_fragment:dg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:_g,lights_physical_fragment:gg,lights_physical_pars_fragment:vg,lights_fragment_begin:xg,lights_fragment_maps:Mg,lights_fragment_end:Sg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:bg,map_fragment:Ag,map_pars_fragment:wg,map_particle_fragment:Rg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Lg,morphcolor_vertex:Dg,morphnormal_vertex:Ug,morphtarget_pars_vertex:Ig,morphtarget_vertex:Ng,normal_fragment_begin:Fg,normal_fragment_maps:Og,normal_pars_fragment:Bg,normal_pars_vertex:zg,normal_vertex:Hg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:Kg,project_vertex:jg,dithering_fragment:$g,dithering_pars_fragment:Zg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:rv,skinning_pars_vertex:sv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:uv,tonemapping_pars_fragment:fv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:_v,worldpos_vertex:gv,background_vert:vv,background_frag:xv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:Ev,cube_frag:yv,depth_vert:Tv,depth_frag:bv,distanceRGBA_vert:Av,distanceRGBA_frag:wv,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Pv,linedashed_frag:Lv,meshbasic_vert:Dv,meshbasic_frag:Uv,meshlambert_vert:Iv,meshlambert_frag:Nv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:Bv,meshnormal_frag:zv,meshphong_vert:Hv,meshphong_frag:Gv,meshphysical_vert:Vv,meshphysical_frag:Wv,meshtoon_vert:kv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:Kv,shadow_frag:jv,sprite_vert:$v,sprite_frag:Zv},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_n={basic:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};_n.physical={uniforms:Ct([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ms={r:0,b:0,g:0};function Jv(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,E=h.isScene===!0?h.background:null;E&&E.isTexture&&(E=(h.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===eo)?(u===void 0&&(u=new zn(new Kr(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:lr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,U,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(E.colorSpace)!==st,(f!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zn(new Ya(2,2),new Ai({name:"BackgroundMaterial",uniforms:lr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(Ms,Df(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function Qv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(N,H,V,F,Y){let K=!1;if(a){const j=v(F,V,H);c!==j&&(c=j,m(c.object)),K=h(N,F,V,Y),K&&b(N,F,V,Y)}else{const j=H.wireframe===!0;(c.geometry!==F.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=F.id,c.program=V.id,c.wireframe=j,K=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,Q(N,H,V,F),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,H,V){const F=V.wireframe===!0;let Y=o[N.id];Y===void 0&&(Y={},o[N.id]=Y);let K=Y[H.id];K===void 0&&(K={},Y[H.id]=K);let j=K[F];return j===void 0&&(j=p(d()),K[F]=j),j}function p(N){const H=[],V=[],F=[];for(let Y=0;Y<r;Y++)H[Y]=0,V[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:F,object:N,attributes:{},index:null}}function h(N,H,V,F){const Y=c.attributes,K=H.attributes;let j=0;const P=V.getAttributes();for(const z in P)if(P[z].location>=0){const _e=Y[z];let ge=K[z];if(ge===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),_e===void 0||_e.attribute!==ge||ge&&_e.data!==ge.data)return!0;j++}return c.attributesNum!==j||c.index!==F}function b(N,H,V,F){const Y={},K=H.attributes;let j=0;const P=V.getAttributes();for(const z in P)if(P[z].location>=0){let _e=K[z];_e===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const ge={};ge.attribute=_e,_e&&_e.data&&(ge.data=_e.data),Y[z]=ge,j++}c.attributes=Y,c.attributesNum=j,c.index=F}function E(){const N=c.newAttributes;for(let H=0,V=N.length;H<V;H++)N[H]=0}function T(N){w(N,0)}function w(N,H){const V=c.newAttributes,F=c.enabledAttributes,Y=c.attributeDivisors;V[N]=1,F[N]===0&&(n.enableVertexAttribArray(N),F[N]=1),Y[N]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),Y[N]=H)}function U(){const N=c.newAttributes,H=c.enabledAttributes;for(let V=0,F=H.length;V<F;V++)H[V]!==N[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function R(N,H,V,F,Y,K,j){j===!0?n.vertexAttribIPointer(N,H,V,Y,K):n.vertexAttribPointer(N,H,V,F,Y,K)}function Q(N,H,V,F){if(i.isWebGL2===!1&&(N.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const Y=F.attributes,K=V.getAttributes(),j=H.defaultAttributeValues;for(const P in K){const z=K[P];if(z.location>=0){let me=Y[P];if(me===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),me!==void 0){const _e=me.normalized,ge=me.itemSize,Te=t.get(me);if(Te===void 0)continue;const Ne=Te.buffer,ye=Te.type,Ce=Te.bytesPerElement,Ke=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||me.gpuType===gf);if(me.isInterleavedBufferAttribute){const ze=me.data,_=ze.stride,C=me.offset;if(ze.isInstancedInterleavedBuffer){for(let I=0;I<z.locationSize;I++)w(z.location+I,ze.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let I=0;I<z.locationSize;I++)T(z.location+I);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let I=0;I<z.locationSize;I++)R(z.location+I,ge/z.locationSize,ye,_e,_*Ce,(C+ge/z.locationSize*I)*Ce,Ke)}else{if(me.isInstancedBufferAttribute){for(let ze=0;ze<z.locationSize;ze++)w(z.location+ze,me.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ze=0;ze<z.locationSize;ze++)T(z.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ze=0;ze<z.locationSize;ze++)R(z.location+ze,ge/z.locationSize,ye,_e,ge*Ce,ge/z.locationSize*ze*Ce,Ke)}}else if(j!==void 0){const _e=j[P];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(z.location,_e);break;case 3:n.vertexAttrib3fv(z.location,_e);break;case 4:n.vertexAttrib4fv(z.location,_e);break;default:n.vertexAttrib1fv(z.location,_e)}}}}U()}function y(){ae();for(const N in o){const H=o[N];for(const V in H){const F=H[V];for(const Y in F)x(F[Y].object),delete F[Y];delete H[V]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;const H=o[N.id];for(const V in H){const F=H[V];for(const Y in F)x(F[Y].object),delete F[Y];delete H[V]}delete o[N.id]}function se(N){for(const H in o){const V=o[H];if(V[N.id]===void 0)continue;const F=V[N.id];for(const Y in F)x(F[Y].object),delete F[Y];delete V[N.id]}}function ae(){le(),u=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:le,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:se,initAttributes:E,enableAttribute:T,disableUnusedAttributes:U}}function ex(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function tx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,T=a||e.has("OES_texture_float"),w=E&&T,U=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:U}}function nx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,E=b*4;let T=h.clippingState||null;l.value=T,T=u(x,d,E,m);for(let w=0;w!==E;++w)T[w]=t[w];h.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,T=m;E!==v;++E,T+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function ix(n){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=sr:o===fa&&(a.mapping=or),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ua||o===fa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new g_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rx extends Uf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Dc=[.125,.215,.35,.446,.526,.582],xi=20,ko=new rx,Uc=new Je;let Xo=null,qo=0,Yo=0;const gi=(1+Math.sqrt(5))/2,Wi=1/gi,Ic=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,gi,Wi),new B(0,gi,-Wi),new B(Wi,0,gi),new B(-Wi,0,gi),new B(gi,Wi,0),new B(-gi,Wi,0)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,qo,Yo),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Gr,format:rn,colorSpace:kn,depthBuffer:!1},r=Fc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=ox(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,r){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=ni,u.autoClear=!1;const m=new qa({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new zn(new Kr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Uc),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;Ss(r,b*E,h>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ic[(r-1)%Ic.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):xi;p>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const h=[];let b=0;for(let R=0;R<xi;++R){const Q=R/v,y=Math.exp(-Q*Q/2);h.push(y),R===0?b+=y:R<p&&(b+=2*y)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const T=this._sizeLods[r],w=3*T*(r>E-$i?r-E+$i:0),U=4*(this._cubeSize-T);Ss(t,w,U,3*T,2*T),l.setRenderTarget(t),l.render(f,ko)}}function sx(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+Dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-$i?l=Dc[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,h=1,b=new Float32Array(v*x*m),E=new Float32Array(p*x*m),T=new Float32Array(h*x*m);for(let U=0;U<m;U++){const R=U%3*2/3-1,Q=U>2?0:-1,y=[R,Q,0,R+2/3,Q,0,R+2/3,Q+1,0,R,Q,0,R+2/3,Q+1,0,R,Q+1,0];b.set(y,v*x*U),E.set(d,p*x*U);const A=[U,U,U,U,U,U];T.set(A,h*x*U)}const w=new qn;w.setAttribute("position",new cn(b,v)),w.setAttribute("uv",new cn(E,p)),w.setAttribute("faceIndex",new cn(T,h)),e.push(w),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fc(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ox(n,e,t){const i=new Float32Array(xi),r=new B(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Bc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function ax(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===fa,u=l===sr||l===or;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Nc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Nc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cx(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let E=0,T=b.length;E<T;E+=3){const w=b[E+0],U=b[E+1],R=b[E+2];d.push(w,U,U,R,R,w)}}else if(x!==void 0){const b=x.array;v=x.version;for(let E=0,T=b.length/3-1;E<T;E+=3){const w=E+0,U=E+1,R=E+2;d.push(w,U,U,R,R,w)}}else return;const p=new(Tf(d)?Lf:Pf)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ux(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function fx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hx(n,e){return n[0]-e[0]}function dx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function px(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let H=function(){le.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],Q=u.morphAttributes.color||[];let y=0;E===!0&&(y=1),T===!0&&(y=2),w===!0&&(y=3);let A=u.attributes.position.count*y,se=1;A>e.maxTextureSize&&(se=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ae=new Float32Array(A*se*4*v),le=new wf(ae,A,se,v);le.type=ei,le.needsUpdate=!0;const N=y*4;for(let V=0;V<v;V++){const F=U[V],Y=R[V],K=Q[V],j=A*se*4*V;for(let P=0;P<F.count;P++){const z=P*N;E===!0&&(a.fromBufferAttribute(F,P),ae[j+z+0]=a.x,ae[j+z+1]=a.y,ae[j+z+2]=a.z,ae[j+z+3]=0),T===!0&&(a.fromBufferAttribute(Y,P),ae[j+z+4]=a.x,ae[j+z+5]=a.y,ae[j+z+6]=a.z,ae[j+z+7]=0),w===!0&&(a.fromBufferAttribute(K,P),ae[j+z+8]=a.x,ae[j+z+9]=a.y,ae[j+z+10]=a.z,ae[j+z+11]=K.itemSize===4?a.w:1)}}p={count:v,texture:le,size:new qe(A,se)},s.set(u,p),u.addEventListener("dispose",H)}let h=0;for(let E=0;E<d.length;E++)h+=d[E];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let T=0;T<x;T++)v[T]=[T,0];i[u.id]=v}for(let T=0;T<x;T++){const w=v[T];w[0]=T,w[1]=d[T]}v.sort(dx);for(let T=0;T<8;T++)T<x&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(hx);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const w=o[T],U=w[0],R=w[1];U!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+T)!==p[U]&&u.setAttribute("morphTarget"+T,p[U]),h&&u.getAttribute("morphNormal"+T)!==h[U]&&u.setAttribute("morphNormal"+T,h[U]),r[T]=R,b+=R):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function mx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Of=new Ot,Bf=new wf,zf=new Qm,Hf=new If,zc=[],Hc=[],Gc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),pt(t,i)}}function Sx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),pt(t,i)}}function Ex(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Gc.set(i),n.uniformMatrix4fv(this.addr,!1,Gc),pt(t,i)}}function yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Of,r)}function Dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zf,r)}function Ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hf,r)}function Ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Bf,r)}function Nx(n){switch(n){case 5126:return _x;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return Mx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return yx;case 35667:case 35671:return Tx;case 35668:case 35672:return bx;case 35669:case 35673:return Ax;case 5125:return wx;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ix}}function Fx(n,e){n.uniform1fv(this.addr,e)}function Ox(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Bx(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function zx(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Hx(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gx(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vx(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wx(n,e){n.uniform1iv(this.addr,e)}function kx(n,e){n.uniform2iv(this.addr,e)}function Xx(n,e){n.uniform3iv(this.addr,e)}function qx(n,e){n.uniform4iv(this.addr,e)}function Yx(n,e){n.uniform1uiv(this.addr,e)}function Kx(n,e){n.uniform2uiv(this.addr,e)}function jx(n,e){n.uniform3uiv(this.addr,e)}function $x(n,e){n.uniform4uiv(this.addr,e)}function Zx(n,e,t){const i=this.cache,r=e.length,s=io(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Of,s[a])}function Jx(n,e,t){const i=this.cache,r=e.length,s=io(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zf,s[a])}function Qx(n,e,t){const i=this.cache,r=e.length,s=io(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hf,s[a])}function e0(n,e,t){const i=this.cache,r=e.length,s=io(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bf,s[a])}function t0(n){switch(n){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Hx;case 35675:return Gx;case 35676:return Vx;case 5124:case 35670:return Wx;case 35667:case 35671:return kx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Kx;case 36295:return jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return e0}}class n0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Nx(t.type)}}class i0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=t0(t.type)}}class r0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function kc(n,e){n.seq.push(e),n.map[e.id]=e}function s0(n,e,t){const i=n.name,r=i.length;for(Ko.lastIndex=0;;){const s=Ko.exec(i),a=Ko.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){kc(t,c===void 0?new n0(o,n,e):new i0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new r0(o),kc(t,f)),t=f}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);s0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o0=37297;let a0=0;function l0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function c0(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Hs&&t===zs?i="LinearDisplayP3ToLinearSRGB":e===zs&&t===Hs&&(i="LinearSRGBToLinearDisplayP3"),n){case kn:case to:return[i,"LinearTransferOETF"];case vt:case Wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+l0(n.getShaderSource(e),a)}else return r}function u0(n,e){const t=c0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function f0(n,e){let t;switch(e){case om:t="Linear";break;case am:t="Reinhard";break;case lm:t="OptimizedCineon";break;case cm:t="ACESFilmic";break;case um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function d0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yr(n){return n!==""}function Yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(n){return n.replace(m0,g0)}const _0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g0(n,e){let t=Ge[e];if(t===void 0){const i=_0.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(n){return n.replace(v0,x0)}function x0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mf:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case sm:e="ENVMAP_BLENDING_ADD";break}return e}function T0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function b0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=M0(t),c=S0(t),u=E0(t),f=y0(t),d=T0(t),m=t.isWebGL2?"":h0(t),x=d0(s),v=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yr).join(`
`),h.length>0&&(h+=`
`)):(p=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),h=[m,$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ni?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=ga(a),a=Yc(a,t),a=Kc(a,t),o=ga(o),o=Yc(o,t),o=Kc(o,t),a=jc(a),o=jc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=b+p+a,T=b+h+o,w=Xc(r,r.VERTEX_SHADER,E),U=Xc(r,r.FRAGMENT_SHADER,T);r.attachShader(v,w),r.attachShader(v,U),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(se){if(n.debug.checkShaderErrors){const ae=r.getProgramInfoLog(v).trim(),le=r.getShaderInfoLog(w).trim(),N=r.getShaderInfoLog(U).trim();let H=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,U);else{const F=qc(r,w,"vertex"),Y=qc(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+F+`
`+Y)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(le===""||N==="")&&(V=!1);V&&(se.diagnostics={runnable:H,programLog:ae,vertexShader:{log:le,prefix:p},fragmentShader:{log:N,prefix:h}})}r.deleteShader(w),r.deleteShader(U),Q=new Ps(r,v),y=p0(r,v)}let Q;this.getUniforms=function(){return Q===void 0&&R(this),Q};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,o0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=U,this}let A0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R0(e),t.set(e,i)),i}}class R0{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}}function C0(n,e,t,i,r,s,a){const o=new Rf,l=new w0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function p(y,A,se,ae,le){const N=ae.fog,H=le.geometry,V=y.isMeshStandardMaterial?ae.environment:null,F=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),Y=F&&F.mapping===eo?F.image.height:null,K=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,P=j!==void 0?j.length:0;let z=0;H.morphAttributes.position!==void 0&&(z=1),H.morphAttributes.normal!==void 0&&(z=2),H.morphAttributes.color!==void 0&&(z=3);let me,_e,ge,Te;if(K){const ct=_n[K];me=ct.vertexShader,_e=ct.fragmentShader}else me=y.vertexShader,_e=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const Ne=n.getRenderTarget(),ye=le.isInstancedMesh===!0,Ce=!!y.map,Ke=!!y.matcap,ze=!!F,_=!!y.aoMap,C=!!y.lightMap,I=!!y.bumpMap,W=!!y.normalMap,G=!!y.displacementMap,$=!!y.emissiveMap,re=!!y.metalnessMap,ne=!!y.roughnessMap,oe=y.anisotropy>0,ee=y.clearcoat>0,Me=y.iridescence>0,M=y.sheen>0,g=y.transmission>0,D=oe&&!!y.anisotropyMap,Z=ee&&!!y.clearcoatMap,J=ee&&!!y.clearcoatNormalMap,ie=ee&&!!y.clearcoatRoughnessMap,ve=Me&&!!y.iridescenceMap,ce=Me&&!!y.iridescenceThicknessMap,de=M&&!!y.sheenColorMap,be=M&&!!y.sheenRoughnessMap,ke=!!y.specularMap,ue=!!y.specularColorMap,Fe=!!y.specularIntensityMap,we=g&&!!y.transmissionMap,Pe=g&&!!y.thicknessMap,Re=!!y.gradientMap,Ee=!!y.alphaMap,Ye=y.alphaTest>0,L=!!y.alphaHash,xe=!!y.extensions,fe=!!H.attributes.uv1,te=!!H.attributes.uv2,he=!!H.attributes.uv3;let Le=ni;return y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Le=n.toneMapping),{isWebGL2:u,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:_e,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:ye,instancingColor:ye&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:kn,map:Ce,matcap:Ke,envMap:ze,envMapMode:ze&&F.mapping,envMapCubeUVHeight:Y,aoMap:_,lightMap:C,bumpMap:I,normalMap:W,displacementMap:d&&G,emissiveMap:$,normalMapObjectSpace:W&&y.normalMapType===Tm,normalMapTangentSpace:W&&y.normalMapType===ym,metalnessMap:re,roughnessMap:ne,anisotropy:oe,anisotropyMap:D,clearcoat:ee,clearcoatMap:Z,clearcoatNormalMap:J,clearcoatRoughnessMap:ie,iridescence:Me,iridescenceMap:ve,iridescenceThicknessMap:ce,sheen:M,sheenColorMap:de,sheenRoughnessMap:be,specularMap:ke,specularColorMap:ue,specularIntensityMap:Fe,transmission:g,transmissionMap:we,thicknessMap:Pe,gradientMap:Re,opaque:y.transparent===!1&&y.blending===tr,alphaMap:Ee,alphaTest:Ye,alphaHash:L,combine:y.combine,mapUv:Ce&&v(y.map.channel),aoMapUv:_&&v(y.aoMap.channel),lightMapUv:C&&v(y.lightMap.channel),bumpMapUv:I&&v(y.bumpMap.channel),normalMapUv:W&&v(y.normalMap.channel),displacementMapUv:G&&v(y.displacementMap.channel),emissiveMapUv:$&&v(y.emissiveMap.channel),metalnessMapUv:re&&v(y.metalnessMap.channel),roughnessMapUv:ne&&v(y.roughnessMap.channel),anisotropyMapUv:D&&v(y.anisotropyMap.channel),clearcoatMapUv:Z&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(y.sheenRoughnessMap.channel),specularMapUv:ke&&v(y.specularMap.channel),specularColorMapUv:ue&&v(y.specularColorMap.channel),specularIntensityMapUv:Fe&&v(y.specularIntensityMap.channel),transmissionMapUv:we&&v(y.transmissionMap.channel),thicknessMapUv:Pe&&v(y.thicknessMap.channel),alphaMapUv:Ee&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(W||oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:te,vertexUv3s:he,pointsUvs:le.isPoints===!0&&!!H.attributes.uv&&(Ce||Ee),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:xe&&y.extensions.derivatives===!0,extensionFragDepth:xe&&y.extensions.fragDepth===!0,extensionDrawBuffers:xe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const se in y.defines)A.push(se),A.push(y.defines[se]);return y.isRawShaderMaterial===!1&&(b(A,y),E(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function b(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function E(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function T(y){const A=x[y.type];let se;if(A){const ae=_n[A];se=d_.clone(ae.uniforms)}else se=y.uniforms;return se}function w(y,A){let se;for(let ae=0,le=c.length;ae<le;ae++){const N=c[ae];if(N.cacheKey===A){se=N,++se.usedTimes;break}}return se===void 0&&(se=new b0(n,A,y,s),c.push(se)),se}function U(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function Q(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:w,releaseProgram:U,releaseShaderCache:R,programs:c,dispose:Q}}function P0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||L0),i.length>1&&i.sort(d||Zc),r.length>1&&r.sort(d||Zc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function D0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Jc,n.set(i,[a])):r>=s.length?(a=new Jc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function U0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function I0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N0=0;function F0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O0(n,e){const t=new U0,i=I0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new ot,o=new ot;function l(u,f){let d=0,m=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let v=0,p=0,h=0,b=0,E=0,T=0,w=0,U=0,R=0,Q=0,y=0;u.sort(F0);const A=f===!0?Math.PI:1;for(let ae=0,le=u.length;ae<le;ae++){const N=u[ae],H=N.color,V=N.intensity,F=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*V*A,m+=H.g*V*A,x+=H.b*V*A;else if(N.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(N.sh.coefficients[K],V);y++}else if(N.isDirectionalLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const j=N.shadow,P=i.get(N);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.directionalShadow[v]=P,r.directionalShadowMap[v]=Y,r.directionalShadowMatrix[v]=N.shadow.matrix,T++}r.directional[v]=K,v++}else if(N.isSpotLight){const K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(H).multiplyScalar(V*A),K.distance=F,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,r.spot[h]=K;const j=N.shadow;if(N.map&&(r.spotLightMap[R]=N.map,R++,j.updateMatrices(N),N.castShadow&&Q++),r.spotLightMatrix[h]=j.matrix,N.castShadow){const P=i.get(N);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.spotShadow[h]=P,r.spotShadowMap[h]=Y,U++}h++}else if(N.isRectAreaLight){const K=t.get(N);K.color.copy(H).multiplyScalar(V),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=K,b++}else if(N.isPointLight){const K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity*A),K.distance=N.distance,K.decay=N.decay,N.castShadow){const j=N.shadow,P=i.get(N);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,P.shadowCameraNear=j.camera.near,P.shadowCameraFar=j.camera.far,r.pointShadow[p]=P,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=N.shadow.matrix,w++}r.point[p]=K,p++}else if(N.isHemisphereLight){const K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(V*A),K.groundColor.copy(N.groundColor).multiplyScalar(V*A),r.hemi[E]=K,E++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const se=r.hash;(se.directionalLength!==v||se.pointLength!==p||se.spotLength!==h||se.rectAreaLength!==b||se.hemiLength!==E||se.numDirectionalShadows!==T||se.numPointShadows!==w||se.numSpotShadows!==U||se.numSpotMaps!==R||se.numLightProbes!==y)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=U+R-Q,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=Q,r.numLightProbes=y,se.directionalLength=v,se.pointLength=p,se.spotLength=h,se.rectAreaLength=b,se.hemiLength=E,se.numDirectionalShadows=T,se.numPointShadows=w,se.numSpotShadows=U,se.numSpotMaps=R,se.numLightProbes=y,r.version=N0++)}function c(u,f){let d=0,m=0,x=0,v=0,p=0;const h=f.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const T=u[b];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(T.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),x++}else if(T.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Qc(n,e){const t=new O0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function B0(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Qc(n,e),t.set(s,[l])):a>=o.length?(l=new Qc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class z0 extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H0 extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function W0(n,e,t){let i=new Nf;const r=new qe,s=new qe,a=new xt,o=new z0({depthPacking:Em}),l=new H0,c={},u=t.maxTextureSize,f={[si]:Ft,[Ft]:si,[On]:On},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:G0,fragmentShader:V0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new qn;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf;let h=this.type;this.render=function(w,U,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const Q=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),se=n.state;se.setBlending(ti),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=h!==Dn&&this.type===Dn,le=h===Dn&&this.type!==Dn;for(let N=0,H=w.length;N<H;N++){const V=w[N],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Y=F.getFrameExtents();if(r.multiply(Y),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y)),F.map===null||ae===!0||le===!0){const j=this.type!==Dn?{minFilter:Pt,magFilter:Pt}:{};F.map!==null&&F.map.dispose(),F.map=new bi(r.x,r.y,j),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const K=F.getViewportCount();for(let j=0;j<K;j++){const P=F.getViewport(j);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),se.viewport(a),F.updateMatrices(V,j),i=F.getFrustum(),T(U,R,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Dn&&b(F,R),F.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(Q,y,A)};function b(w,U){const R=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(U,null,R,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(U,null,R,m,v,null)}function E(w,U,R,Q){let y=null;const A=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)y=A;else if(y=R.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const se=y.uuid,ae=U.uuid;let le=c[se];le===void 0&&(le={},c[se]=le);let N=le[ae];N===void 0&&(N=y.clone(),le[ae]=N),y=N}if(y.visible=U.visible,y.wireframe=U.wireframe,Q===Dn?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:f[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const se=n.properties.get(y);se.light=R}return y}function T(w,U,R,Q,y){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Dn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const ae=e.update(w),le=w.material;if(Array.isArray(le)){const N=ae.groups;for(let H=0,V=N.length;H<V;H++){const F=N[H],Y=le[F.materialIndex];if(Y&&Y.visible){const K=E(w,Y,Q,y);n.renderBufferDirect(R,null,ae,K,w,F)}}}else if(le.visible){const N=E(w,le,Q,y);n.renderBufferDirect(R,null,ae,N,w,null)}}const se=w.children;for(let ae=0,le=se.length;ae<le;ae++)T(se[ae],U,R,Q,y)}}function k0(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const xe=new xt;let fe=null;const te=new xt(0,0,0,0);return{setMask:function(he){fe!==he&&!L&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){L=he},setClear:function(he,Le,je,ct,kt){kt===!0&&(he*=ct,Le*=ct,je*=ct),xe.set(he,Le,je,ct),te.equals(xe)===!1&&(n.clearColor(he,Le,je,ct),te.copy(xe))},reset:function(){L=!1,fe=null,te.set(-1,0,0,0)}}}function s(){let L=!1,xe=null,fe=null,te=null;return{setTest:function(he){he?Ce(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(he){xe!==he&&!L&&(n.depthMask(he),xe=he)},setFunc:function(he){if(fe!==he){switch(he){case Zp:n.depthFunc(n.NEVER);break;case Jp:n.depthFunc(n.ALWAYS);break;case Qp:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case em:n.depthFunc(n.EQUAL);break;case tm:n.depthFunc(n.GEQUAL);break;case nm:n.depthFunc(n.GREATER);break;case im:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=he}},setLocked:function(he){L=he},setClear:function(he){te!==he&&(n.clearDepth(he),te=he)},reset:function(){L=!1,xe=null,fe=null,te=null}}}function a(){let L=!1,xe=null,fe=null,te=null,he=null,Le=null,je=null,ct=null,kt=null;return{setTest:function(it){L||(it?Ce(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(it){xe!==it&&!L&&(n.stencilMask(it),xe=it)},setFunc:function(it,bt,fn){(fe!==it||te!==bt||he!==fn)&&(n.stencilFunc(it,bt,fn),fe=it,te=bt,he=fn)},setOp:function(it,bt,fn){(Le!==it||je!==bt||ct!==fn)&&(n.stencilOp(it,bt,fn),Le=it,je=bt,ct=fn)},setLocked:function(it){L=it},setClear:function(it){kt!==it&&(n.clearStencil(it),kt=it)},reset:function(){L=!1,xe=null,fe=null,te=null,he=null,Le=null,je=null,ct=null,kt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,E=null,T=null,w=null,U=null,R=null,Q=null,y=new Je(0,0,0),A=0,se=!1,ae=null,le=null,N=null,H=null,V=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=K>=2);let P=null,z={};const me=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ge=new xt().fromArray(me),Te=new xt().fromArray(_e);function Ne(L,xe,fe,te){const he=new Uint8Array(4),Le=n.createTexture();n.bindTexture(L,Le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<fe;je++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(xe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Le}const ye={};ye[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Os),re(!1),ne(Nl),Ce(n.CULL_FACE),G(ti);function Ce(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ke(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function ze(L,xe){return m[L]!==xe?(n.bindFramebuffer(L,xe),m[L]=xe,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function _(L,xe){let fe=v,te=!1;if(L)if(fe=x.get(xe),fe===void 0&&(fe=[],x.set(xe,fe)),L.isWebGLMultipleRenderTargets){const he=L.texture;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,je=he.length;Le<je;Le++)fe[Le]=n.COLOR_ATTACHMENT0+Le;fe.length=he.length,te=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,te=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,te=!0);te&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function C(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const I={[vi]:n.FUNC_ADD,[Fp]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};if(i)I[zl]=n.MIN,I[Hl]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[zl]=L.MIN_EXT,I[Hl]=L.MAX_EXT)}const W={[Bp]:n.ZERO,[zp]:n.ONE,[Hp]:n.SRC_COLOR,[la]:n.SRC_ALPHA,[qp]:n.SRC_ALPHA_SATURATE,[kp]:n.DST_COLOR,[Vp]:n.DST_ALPHA,[Gp]:n.ONE_MINUS_SRC_COLOR,[ca]:n.ONE_MINUS_SRC_ALPHA,[Xp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[Kp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[$p]:n.ONE_MINUS_CONSTANT_ALPHA};function G(L,xe,fe,te,he,Le,je,ct,kt,it){if(L===ti){h===!0&&(Ke(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),L!==Np){if(L!==b||it!==se){if((E!==vi||U!==vi)&&(n.blendEquation(n.FUNC_ADD),E=vi,U=vi),it)switch(L){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,w=null,R=null,Q=null,y.set(0,0,0),A=0,b=L,se=it}return}he=he||xe,Le=Le||fe,je=je||te,(xe!==E||he!==U)&&(n.blendEquationSeparate(I[xe],I[he]),E=xe,U=he),(fe!==T||te!==w||Le!==R||je!==Q)&&(n.blendFuncSeparate(W[fe],W[te],W[Le],W[je]),T=fe,w=te,R=Le,Q=je),(ct.equals(y)===!1||kt!==A)&&(n.blendColor(ct.r,ct.g,ct.b,kt),y.copy(ct),A=kt),b=L,se=!1}function $(L,xe){L.side===On?Ke(n.CULL_FACE):Ce(n.CULL_FACE);let fe=L.side===Ft;xe&&(fe=!fe),re(fe),L.blending===tr&&L.transparent===!1?G(ti):G(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const te=L.stencilWrite;c.setTest(te),te&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){ae!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),ae=L)}function ne(L){L!==Dp?(Ce(n.CULL_FACE),L!==le&&(L===Nl?n.cullFace(n.BACK):L===Up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),le=L}function oe(L){L!==N&&(Y&&n.lineWidth(L),N=L)}function ee(L,xe,fe){L?(Ce(n.POLYGON_OFFSET_FILL),(H!==xe||V!==fe)&&(n.polygonOffset(xe,fe),H=xe,V=fe)):Ke(n.POLYGON_OFFSET_FILL)}function Me(L){L?Ce(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function M(L){L===void 0&&(L=n.TEXTURE0+F-1),P!==L&&(n.activeTexture(L),P=L)}function g(L,xe,fe){fe===void 0&&(P===null?fe=n.TEXTURE0+F-1:fe=P);let te=z[fe];te===void 0&&(te={type:void 0,texture:void 0},z[fe]=te),(te.type!==L||te.texture!==xe)&&(P!==fe&&(n.activeTexture(fe),P=fe),n.bindTexture(L,xe||ye[L]),te.type=L,te.texture=xe)}function D(){const L=z[P];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){ge.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Pe(L){Te.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Te.copy(L))}function Re(L,xe){let fe=f.get(xe);fe===void 0&&(fe=new WeakMap,f.set(xe,fe));let te=fe.get(L);te===void 0&&(te=n.getUniformBlockIndex(xe,L.name),fe.set(L,te))}function Ee(L,xe){const te=f.get(xe).get(L);u.get(xe)!==te&&(n.uniformBlockBinding(xe,te,L.__bindingPointIndex),u.set(xe,te))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},P=null,z={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,E=null,T=null,w=null,U=null,R=null,Q=null,y=new Je(0,0,0),A=0,se=!1,ae=null,le=null,N=null,H=null,V=null,ge.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Ke,bindFramebuffer:ze,drawBuffers:_,useProgram:C,setBlending:G,setMaterial:$,setFlipSided:re,setCullFace:ne,setLineWidth:oe,setPolygonOffset:ee,setScissorTest:Me,activeTexture:M,bindTexture:g,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ue,texImage3D:Fe,updateUBOMapping:Re,uniformBlockBinding:Ee,texStorage2D:be,texStorage3D:ke,texSubImage2D:ie,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:de,scissor:we,viewport:Pe,reset:Ye}}function X0(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,g){return h?new OffscreenCanvas(M,g):Ws("canvas")}function E(M,g,D,Z){let J=1;if((M.width>Z||M.height>Z)&&(J=Z/Math.max(M.width,M.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ie=g?Vs:Math.floor,ve=ie(J*M.width),ce=ie(J*M.height);v===void 0&&(v=b(ve,ce));const de=D?b(ve,ce):v;return de.width=ve,de.height=ce,de.getContext("2d").drawImage(M,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ve+"x"+ce+")."),de}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return _a(M.width)&&_a(M.height)}function w(M){return o?!1:M.wrapS!==nn||M.wrapT!==nn||M.minFilter!==Pt&&M.minFilter!==qt}function U(M,g){return M.generateMipmaps&&g&&M.minFilter!==Pt&&M.minFilter!==qt}function R(M){n.generateMipmap(M)}function Q(M,g,D,Z,J=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ie=g;if(g===n.RED&&(D===n.FLOAT&&(ie=n.R32F),D===n.HALF_FLOAT&&(ie=n.R16F),D===n.UNSIGNED_BYTE&&(ie=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(ie=n.R8UI),D===n.UNSIGNED_SHORT&&(ie=n.R16UI),D===n.UNSIGNED_INT&&(ie=n.R32UI),D===n.BYTE&&(ie=n.R8I),D===n.SHORT&&(ie=n.R16I),D===n.INT&&(ie=n.R32I)),g===n.RG&&(D===n.FLOAT&&(ie=n.RG32F),D===n.HALF_FLOAT&&(ie=n.RG16F),D===n.UNSIGNED_BYTE&&(ie=n.RG8)),g===n.RGBA){const ve=J?Bs:et.getTransfer(Z);D===n.FLOAT&&(ie=n.RGBA32F),D===n.HALF_FLOAT&&(ie=n.RGBA16F),D===n.UNSIGNED_BYTE&&(ie=ve===st?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(M,g,D){return U(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==qt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function A(M){return M===Pt||M===Gl||M===So?n.NEAREST:n.LINEAR}function se(M){const g=M.target;g.removeEventListener("dispose",se),le(g),g.isVideoTexture&&x.delete(g)}function ae(M){const g=M.target;g.removeEventListener("dispose",ae),H(g)}function le(M){const g=i.get(M);if(g.__webglInit===void 0)return;const D=M.source,Z=p.get(D);if(Z){const J=Z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(M),Object.keys(Z).length===0&&p.delete(D)}i.remove(M)}function N(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const D=M.source,Z=p.get(D);delete Z[g.__cacheKey],a.memory.textures--}function H(M){const g=M.texture,D=i.get(M),Z=i.get(g);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(D.__webglFramebuffer[J]))for(let ie=0;ie<D.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(D.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(D.__webglFramebuffer[J]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[J])}else{if(Array.isArray(D.__webglFramebuffer))for(let J=0;J<D.__webglFramebuffer.length;J++)n.deleteFramebuffer(D.__webglFramebuffer[J]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let J=0;J<D.__webglColorRenderbuffer.length;J++)D.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[J]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,ie=g.length;J<ie;J++){const ve=i.get(g[J]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(g[J])}i.remove(g),i.remove(M)}let V=0;function F(){V=0}function Y(){const M=V;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),V+=1,M}function K(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function j(M,g){const D=i.get(M);if(M.isVideoTexture&&ee(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(D,M,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function P(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ce(D,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function z(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ce(D,M,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function me(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ke(D,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const _e={[ha]:n.REPEAT,[nn]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},ge={[Pt]:n.NEAREST,[Gl]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[fm]:n.LINEAR_MIPMAP_NEAREST,[Hr]:n.LINEAR_MIPMAP_LINEAR},Te={[bm]:n.NEVER,[Dm]:n.ALWAYS,[Am]:n.LESS,[Rm]:n.LEQUAL,[wm]:n.EQUAL,[Lm]:n.GEQUAL,[Cm]:n.GREATER,[Pm]:n.NOTEQUAL};function Ne(M,g,D){if(D?(n.texParameteri(M,n.TEXTURE_WRAP_S,_e[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,_e[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,_e[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ge[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==nn||g.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(g.minFilter)),g.minFilter!==Pt&&g.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Pt||g.minFilter!==So&&g.minFilter!==Hr||g.type===ei&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function ye(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",se));const Z=g.source;let J=p.get(Z);J===void 0&&(J={},p.set(Z,J));const ie=K(g);if(ie!==M.__cacheKey){J[ie]===void 0&&(J[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[ie].usedTimes++;const ve=J[M.__cacheKey];ve!==void 0&&(J[M.__cacheKey].usedTimes--,ve.usedTimes===0&&N(g)),M.__cacheKey=ie,M.__webglTexture=J[ie].texture}return D}function Ce(M,g,D){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const J=ye(M,g),ie=g.source;t.bindTexture(Z,M.__webglTexture,n.TEXTURE0+D);const ve=i.get(ie);if(ie.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const ce=et.getPrimaries(et.workingColorSpace),de=g.colorSpace===jt?null:et.getPrimaries(g.colorSpace),be=g.colorSpace===jt||ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=w(g)&&T(g.image)===!1;let ue=E(g.image,ke,!1,u);ue=Me(g,ue);const Fe=T(ue)||o,we=s.convert(g.format,g.colorSpace);let Pe=s.convert(g.type),Re=Q(g.internalFormat,we,Pe,g.colorSpace,g.isVideoTexture);Ne(Z,g,Fe);let Ee;const Ye=g.mipmaps,L=o&&g.isVideoTexture!==!0,xe=ve.__version===void 0||J===!0,fe=y(g,ue,Fe);if(g.isDepthTexture)Re=n.DEPTH_COMPONENT,o?g.type===ei?Re=n.DEPTH_COMPONENT32F:g.type===Qn?Re=n.DEPTH_COMPONENT24:g.type===Ei?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:g.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===yi&&Re===n.DEPTH_COMPONENT&&g.type!==Va&&g.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Qn,Pe=s.convert(g.type)),g.format===ar&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,g.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ei,Pe=s.convert(g.type))),xe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Re,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Re,ue.width,ue.height,0,we,Pe,null));else if(g.isDataTexture)if(Ye.length>0&&Fe){L&&xe&&t.texStorage2D(n.TEXTURE_2D,fe,Re,Ye[0].width,Ye[0].height);for(let te=0,he=Ye.length;te<he;te++)Ee=Ye[te],L?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,te,Re,Ee.width,Ee.height,0,we,Pe,Ee.data);g.generateMipmaps=!1}else L?(xe&&t.texStorage2D(n.TEXTURE_2D,fe,Re,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,we,Pe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ue.width,ue.height,0,we,Pe,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Re,Ye[0].width,Ye[0].height,ue.depth);for(let te=0,he=Ye.length;te<he;te++)Ee=Ye[te],g.format!==rn?we!==null?L?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,ue.depth,we,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Re,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ee.width,Ee.height,ue.depth,we,Pe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Re,Ee.width,Ee.height,ue.depth,0,we,Pe,Ee.data)}else{L&&xe&&t.texStorage2D(n.TEXTURE_2D,fe,Re,Ye[0].width,Ye[0].height);for(let te=0,he=Ye.length;te<he;te++)Ee=Ye[te],g.format!==rn?we!==null?L?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ee.width,Ee.height,we,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,te,Re,Ee.width,Ee.height,0,we,Pe,Ee.data)}else if(g.isDataArrayTexture)L?(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Re,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,Pe,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,we,Pe,ue.data);else if(g.isData3DTexture)L?(xe&&t.texStorage3D(n.TEXTURE_3D,fe,Re,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,Pe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,we,Pe,ue.data);else if(g.isFramebufferTexture){if(xe)if(L)t.texStorage2D(n.TEXTURE_2D,fe,Re,ue.width,ue.height);else{let te=ue.width,he=ue.height;for(let Le=0;Le<fe;Le++)t.texImage2D(n.TEXTURE_2D,Le,Re,te,he,0,we,Pe,null),te>>=1,he>>=1}}else if(Ye.length>0&&Fe){L&&xe&&t.texStorage2D(n.TEXTURE_2D,fe,Re,Ye[0].width,Ye[0].height);for(let te=0,he=Ye.length;te<he;te++)Ee=Ye[te],L?t.texSubImage2D(n.TEXTURE_2D,te,0,0,we,Pe,Ee):t.texImage2D(n.TEXTURE_2D,te,Re,we,Pe,Ee);g.generateMipmaps=!1}else L?(xe&&t.texStorage2D(n.TEXTURE_2D,fe,Re,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Pe,ue)):t.texImage2D(n.TEXTURE_2D,0,Re,we,Pe,ue);U(g,Fe)&&R(Z),ve.__version=ie.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ke(M,g,D){if(g.image.length!==6)return;const Z=ye(M,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const ie=i.get(J);if(J.version!==ie.__version||Z===!0){t.activeTexture(n.TEXTURE0+D);const ve=et.getPrimaries(et.workingColorSpace),ce=g.colorSpace===jt?null:et.getPrimaries(g.colorSpace),de=g.colorSpace===jt||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!be&&!ke?ue[te]=E(g.image[te],!1,!0,c):ue[te]=ke?g.image[te].image:g.image[te],ue[te]=Me(g,ue[te]);const Fe=ue[0],we=T(Fe)||o,Pe=s.convert(g.format,g.colorSpace),Re=s.convert(g.type),Ee=Q(g.internalFormat,Pe,Re,g.colorSpace),Ye=o&&g.isVideoTexture!==!0,L=ie.__version===void 0||Z===!0;let xe=y(g,Fe,we);Ne(n.TEXTURE_CUBE_MAP,g,we);let fe;if(be){Ye&&L&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ee,Fe.width,Fe.height);for(let te=0;te<6;te++){fe=ue[te].mipmaps;for(let he=0;he<fe.length;he++){const Le=fe[he];g.format!==rn?Pe!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ee,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Le.width,Le.height,Pe,Re,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ee,Le.width,Le.height,0,Pe,Re,Le.data)}}}else{fe=g.mipmaps,Ye&&L&&(fe.length>0&&xe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ee,ue[0].width,ue[0].height));for(let te=0;te<6;te++)if(ke){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Pe,Re,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ee,ue[te].width,ue[te].height,0,Pe,Re,ue[te].data);for(let he=0;he<fe.length;he++){const je=fe[he].image[te].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,je.width,je.height,Pe,Re,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ee,je.width,je.height,0,Pe,Re,je.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Re,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ee,Pe,Re,ue[te]);for(let he=0;he<fe.length;he++){const Le=fe[he];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Pe,Re,Le.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ee,Pe,Re,Le.image[te])}}}U(g,we)&&R(n.TEXTURE_CUBE_MAP),ie.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ze(M,g,D,Z,J,ie){const ve=s.convert(D.format,D.colorSpace),ce=s.convert(D.type),de=Q(D.internalFormat,ve,ce,D.colorSpace);if(!i.get(g).__hasExternalTextures){const ke=Math.max(1,g.width>>ie),ue=Math.max(1,g.height>>ie);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,de,ke,ue,g.depth,0,ve,ce,null):t.texImage2D(J,ie,de,ke,ue,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,i.get(D).__webglTexture,0,ne(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,i.get(D).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(M,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Z=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||oe(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===ei?Z=n.DEPTH_COMPONENT32F:J.type===Qn&&(Z=n.DEPTH_COMPONENT24));const ie=ne(g);oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,Z,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,Z,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Z=ne(g);D&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<Z.length;J++){const ie=Z[J],ve=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),de=Q(ie.internalFormat,ve,ce,ie.colorSpace),be=ne(g);D&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,de,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,de,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,de,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const Z=i.get(g.depthTexture).__webglTexture,J=ne(g);if(g.depthTexture.format===yi)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===ar)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function I(M){const g=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");C(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=n.createRenderbuffer(),_(g.__webglDepthbuffer[Z],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(M,g,D){const Z=i.get(M);g!==void 0&&ze(Z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&I(M)}function G(M){const g=M.texture,D=i.get(M),Z=i.get(g);M.addEventListener("dispose",ae),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,a.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,ie=M.isWebGLMultipleRenderTargets===!0,ve=T(M)||o;if(J){D.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ce]=[];for(let de=0;de<g.mipmaps.length;de++)D.__webglFramebuffer[ce][de]=n.createFramebuffer()}else D.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)D.__webglFramebuffer[ce]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const ce=M.texture;for(let de=0,be=ce.length;de<be;de++){const ke=i.get(ce[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&oe(M)===!1){const ce=ie?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const be=ce[de];D.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const ke=s.convert(be.format,be.colorSpace),ue=s.convert(be.type),Fe=Q(be.internalFormat,ke,ue,be.colorSpace,M.isXRRenderTarget===!0),we=ne(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Fe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,D.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g,ve);for(let ce=0;ce<6;ce++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ze(D.__webglFramebuffer[ce][de],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else ze(D.__webglFramebuffer[ce],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);U(g,ve)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=M.texture;for(let de=0,be=ce.length;de<be;de++){const ke=ce[de],ue=i.get(ke);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Ne(n.TEXTURE_2D,ke,ve),ze(D.__webglFramebuffer,M,ke,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),U(ke,ve)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Z.__webglTexture),Ne(ce,g,ve),o&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)ze(D.__webglFramebuffer[de],M,g,n.COLOR_ATTACHMENT0,ce,de);else ze(D.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ce,0);U(g,ve)&&R(ce),t.unbindTexture()}M.depthBuffer&&I(M)}function $(M){const g=T(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,J=D.length;Z<J;Z++){const ie=D[Z];if(U(ie,g)){const ve=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ie).__webglTexture;t.bindTexture(ve,ce),R(ve),t.unbindTexture()}}}function re(M){if(o&&M.samples>0&&oe(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,Z=M.height;let J=n.COLOR_BUFFER_BIT;const ie=[],ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(M),de=M.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<g.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<g.length;be++){ie.push(n.COLOR_ATTACHMENT0+be),M.depthBuffer&&ie.push(ve);const ke=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ke===!1&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),de){const ue=i.get(g[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,Z,0,0,D,Z,J,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<g.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const ke=i.get(g[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ne(M){return Math.min(f,M.samples)}function oe(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ee(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function Me(M,g){const D=M.colorSpace,Z=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ma||D!==kn&&D!==jt&&(et.getTransfer(D)===st?o===!1?e.has("EXT_sRGB")===!0&&Z===rn?(M.format=ma,M.minFilter=qt,M.generateMipmaps=!1):g=bf.sRGBToLinear(g):(Z!==rn||J!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=Y,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=me,this.rebindTextures=W,this.setupRenderTarget=G,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=oe}function q0(n,e,t){const i=t.isWebGL2;function r(s,a=jt){let o;const l=et.getTransfer(a);if(s===ii)return n.UNSIGNED_BYTE;if(s===vf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===xf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===hm)return n.BYTE;if(s===dm)return n.SHORT;if(s===Va)return n.UNSIGNED_SHORT;if(s===gf)return n.INT;if(s===Qn)return n.UNSIGNED_INT;if(s===ei)return n.FLOAT;if(s===Gr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pm)return n.ALPHA;if(s===rn)return n.RGBA;if(s===mm)return n.LUMINANCE;if(s===_m)return n.LUMINANCE_ALPHA;if(s===yi)return n.DEPTH_COMPONENT;if(s===ar)return n.DEPTH_STENCIL;if(s===ma)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===gm)return n.RED;if(s===Mf)return n.RED_INTEGER;if(s===vm)return n.RG;if(s===Sf)return n.RG_INTEGER;if(s===Ef)return n.RGBA_INTEGER;if(s===Eo||s===yo||s===To||s===bo)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vl||s===Wl||s===kl||s===Xl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ql||s===Yl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ql)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Yl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kl||s===jl||s===$l||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Kl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$l)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ql)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ec)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ic)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oc)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ac)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ao||s===lc||s===cc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ao)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mm||s===uc||s===fc||s===hc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ao)return o.COMPRESSED_RED_RGTC1_EXT;if(s===uc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Y0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class j0 extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:yi,u!==yi&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yi&&(i=Qn),i===void 0&&u===ar&&(i=Ei),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $0 extends cr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,h=null;const b=[],E=[],T=new Kt;T.layers.enable(1),T.viewport=new xt;const w=new Kt;w.layers.enable(2),w.viewport=new xt;const U=[T,w],R=new Y0;R.layers.enable(1),R.layers.enable(2);let Q=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let z=b[P];return z===void 0&&(z=new jo,b[P]=z),z.getTargetRaySpace()},this.getControllerGrip=function(P){let z=b[P];return z===void 0&&(z=new jo,b[P]=z),z.getGripSpace()},this.getHand=function(P){let z=b[P];return z===void 0&&(z=new jo,b[P]=z),z.getHandSpace()};function A(P){const z=E.indexOf(P.inputSource);if(z===-1)return;const me=b[z];me!==void 0&&(me.update(P.inputSource,P.frame,c||a),me.dispatchEvent({type:P.type,data:P.inputSource}))}function se(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ae);for(let P=0;P<b.length;P++){const z=E[P];z!==null&&(E[P]=null,b[P].disconnect(z))}Q=null,y=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:m}),h=new bi(m.framebufferWidth,m.framebufferHeight,{format:rn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let z=null,me=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=v.stencil?ar:yi,me=v.stencil?Ei:Qn);const ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),h=new bi(d.textureWidth,d.textureHeight,{format:rn,type:ii,depthTexture:new j0(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(h);Te.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ae(P){for(let z=0;z<P.removed.length;z++){const me=P.removed[z],_e=E.indexOf(me);_e>=0&&(E[_e]=null,b[_e].disconnect(me))}for(let z=0;z<P.added.length;z++){const me=P.added[z];let _e=E.indexOf(me);if(_e===-1){for(let Te=0;Te<b.length;Te++)if(Te>=E.length){E.push(me),_e=Te;break}else if(E[Te]===null){E[Te]=me,_e=Te;break}if(_e===-1)break}const ge=b[_e];ge&&ge.connect(me)}}const le=new B,N=new B;function H(P,z,me){le.setFromMatrixPosition(z.matrixWorld),N.setFromMatrixPosition(me.matrixWorld);const _e=le.distanceTo(N),ge=z.projectionMatrix.elements,Te=me.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),ye=ge[14]/(ge[10]+1),Ce=(ge[9]+1)/ge[5],Ke=(ge[9]-1)/ge[5],ze=(ge[8]-1)/ge[0],_=(Te[8]+1)/Te[0],C=Ne*ze,I=Ne*_,W=_e/(-ze+_),G=W*-ze;z.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(G),P.translateZ(W),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const $=Ne+W,re=ye+W,ne=C-G,oe=I+(_e-G),ee=Ce*ye/re*$,Me=Ke*ye/re*$;P.projectionMatrix.makePerspective(ne,oe,ee,Me,$,re),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function V(P,z){z===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(z.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;R.near=w.near=T.near=P.near,R.far=w.far=T.far=P.far,(Q!==R.near||y!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),Q=R.near,y=R.far);const z=P.parent,me=R.cameras;V(R,z);for(let _e=0;_e<me.length;_e++)V(me[_e],z);me.length===2?H(R,T,w):R.projectionMatrix.copy(T.projectionMatrix),F(P,R,z)};function F(P,z,me){me===null?P.matrix.copy(z.matrixWorld):(P.matrix.copy(me.matrixWorld),P.matrix.invert(),P.matrix.multiply(z.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(z.projectionMatrix),P.projectionMatrixInverse.copy(z.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Vr*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let Y=null;function K(P,z){if(u=z.getViewerPose(c||a),x=z,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let _e=!1;me.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let ge=0;ge<me.length;ge++){const Te=me[ge];let Ne=null;if(m!==null)Ne=m.getViewport(Te);else{const Ce=f.getViewSubImage(d,Te);Ne=Ce.viewport,ge===0&&(e.setRenderTargetTextures(h,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(h))}let ye=U[ge];ye===void 0&&(ye=new Kt,ye.layers.enable(ge),ye.viewport=new xt,U[ge]=ye),ye.matrix.fromArray(Te.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Te.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(ye)}}for(let me=0;me<b.length;me++){const _e=E[me],ge=b[me];_e!==null&&ge!==void 0&&ge.update(_e,z,c||a)}Y&&Y(P,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),x=null}const j=new Ff;j.setAnimationLoop(K),this.setAnimationLoop=function(P){Y=P},this.dispose=function(){}}}function Z0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Df(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,E,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ft&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ft&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ft&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function J0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,E){const T=E.program;i.uniformBlockBinding(b,T)}function c(b,E){let T=r[b.id];T===void 0&&(x(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(b,w);const U=e.render.frame;s[b.id]!==U&&(d(b),s[b.id]=U)}function u(b){const E=f();b.__bindingPointIndex=E;const T=n.createBuffer(),w=b.__size,U=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],T=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let U=0,R=T.length;U<R;U++){const Q=T[U];if(m(Q,U,w)===!0){const y=Q.__offset,A=Array.isArray(Q.value)?Q.value:[Q.value];let se=0;for(let ae=0;ae<A.length;ae++){const le=A[ae],N=v(le);typeof le=="number"?(Q.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,y+se,Q.__data)):le.isMatrix3?(Q.__data[0]=le.elements[0],Q.__data[1]=le.elements[1],Q.__data[2]=le.elements[2],Q.__data[3]=le.elements[0],Q.__data[4]=le.elements[3],Q.__data[5]=le.elements[4],Q.__data[6]=le.elements[5],Q.__data[7]=le.elements[0],Q.__data[8]=le.elements[6],Q.__data[9]=le.elements[7],Q.__data[10]=le.elements[8],Q.__data[11]=le.elements[0]):(le.toArray(Q.__data,se),se+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,Q.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,T){const w=b.value;if(T[E]===void 0){if(typeof w=="number")T[E]=w;else{const U=Array.isArray(w)?w:[w],R=[];for(let Q=0;Q<U.length;Q++)R.push(U[Q].clone());T[E]=R}return!0}else if(typeof w=="number"){if(T[E]!==w)return T[E]=w,!0}else{const U=Array.isArray(T[E])?T[E]:[T[E]],R=Array.isArray(w)?w:[w];for(let Q=0;Q<U.length;Q++){const y=U[Q];if(y.equals(R[Q])===!1)return y.copy(R[Q]),!0}}return!1}function x(b){const E=b.uniforms;let T=0;const w=16;let U=0;for(let R=0,Q=E.length;R<Q;R++){const y=E[R],A={boundary:0,storage:0},se=Array.isArray(y.value)?y.value:[y.value];for(let ae=0,le=se.length;ae<le;ae++){const N=se[ae],H=v(N);A.boundary+=H.boundary,A.storage+=H.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,R>0){U=T%w;const ae=w-U;U!==0&&ae-A.boundary<0&&(T+=w-U,y.__offset=T)}T+=A.storage}return U=T%w,U>0&&(T+=w-U),b.__size=T,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Gf{constructor(e={}){const{canvas:t=Km(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const E=this;let T=!1,w=0,U=0,R=null,Q=-1,y=null;const A=new xt,se=new xt;let ae=null;const le=new Je(0);let N=0,H=t.width,V=t.height,F=1,Y=null,K=null;const j=new xt(0,0,H,V),P=new xt(0,0,H,V);let z=!1;const me=new Nf;let _e=!1,ge=!1,Te=null;const Ne=new ot,ye=new qe,Ce=new B,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return R===null?F:1}let _=i;function C(S,O){for(let k=0;k<S.length;k++){const X=S[k],q=t.getContext(X,O);if(q!==null)return q}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",xe,!1),_===null){const O=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&O.shift(),_=C(O,S),_===null)throw C(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let I,W,G,$,re,ne,oe,ee,Me,M,g,D,Z,J,ie,ve,ce,de,be,ke,ue,Fe,we,Pe;function Re(){I=new lx(_),W=new tx(_,I,e),I.init(W),Fe=new q0(_,I,W),G=new k0(_,I,W),$=new fx(_),re=new P0,ne=new X0(_,I,G,re,W,Fe,$),oe=new ix(E),ee=new ax(E),Me=new M_(_,W),we=new Qv(_,I,Me,W),M=new cx(_,Me,$,we),g=new mx(_,M,Me,$),be=new px(_,W,ne),ve=new nx(re),D=new C0(E,oe,ee,I,W,we,ve),Z=new Z0(E,re),J=new D0,ie=new B0(I,W),de=new Jv(E,oe,ee,G,g,d,l),ce=new W0(E,g,W),Pe=new J0(_,$,W,G),ke=new ex(_,I,$,W),ue=new ux(_,I,$,W),$.programs=D.programs,E.capabilities=W,E.extensions=I,E.properties=re,E.renderLists=J,E.shadowMap=ce,E.state=G,E.info=$}Re();const Ee=new $0(E,_);this.xr=Ee,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=I.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=I.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(H,V,!1))},this.getSize=function(S){return S.set(H,V)},this.setSize=function(S,O,k=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,V=O,t.width=Math.floor(S*F),t.height=Math.floor(O*F),k===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(H*F,V*F).floor()},this.setDrawingBufferSize=function(S,O,k){H=S,V=O,F=k,t.width=Math.floor(S*k),t.height=Math.floor(O*k),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,O,k,X){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,O,k,X),G.viewport(A.copy(j).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(P)},this.setScissor=function(S,O,k,X){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,O,k,X),G.scissor(se.copy(P).multiplyScalar(F).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(S){G.setScissorTest(z=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(S=!0,O=!0,k=!0){let X=0;if(S){let q=!1;if(R!==null){const Se=R.texture.format;q=Se===Ef||Se===Sf||Se===Mf}if(q){const Se=R.texture.type,Ae=Se===ii||Se===Qn||Se===Va||Se===Ei||Se===vf||Se===xf,De=de.getClearColor(),Ue=de.getClearAlpha(),Ve=De.r,Oe=De.g,He=De.b;Ae?(m[0]=Ve,m[1]=Oe,m[2]=He,m[3]=Ue,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=Ve,x[1]=Oe,x[2]=He,x[3]=Ue,_.clearBufferiv(_.COLOR,0,x))}else X|=_.COLOR_BUFFER_BIT}O&&(X|=_.DEPTH_BUFFER_BIT),k&&(X|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),J.dispose(),ie.dispose(),re.dispose(),oe.dispose(),ee.dispose(),g.dispose(),we.dispose(),Pe.dispose(),D.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",kt),Ee.removeEventListener("sessionend",it),Te&&(Te.dispose(),Te=null),bt.stop()};function Ye(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=$.autoReset,O=ce.enabled,k=ce.autoUpdate,X=ce.needsUpdate,q=ce.type;Re(),$.autoReset=S,ce.enabled=O,ce.autoUpdate=k,ce.needsUpdate=X,ce.type=q}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const O=S.target;O.removeEventListener("dispose",fe),te(O)}function te(S){he(S),re.remove(S)}function he(S){const O=re.get(S).programs;O!==void 0&&(O.forEach(function(k){D.releaseProgram(k)}),S.isShaderMaterial&&D.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,k,X,q,Se){O===null&&(O=Ke);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,De=Xf(S,O,k,X,q);G.setMaterial(X,Ae);let Ue=k.index,Ve=1;if(X.wireframe===!0){if(Ue=M.getWireframeAttribute(k),Ue===void 0)return;Ve=2}const Oe=k.drawRange,He=k.attributes.position;let lt=Oe.start*Ve,zt=(Oe.start+Oe.count)*Ve;Se!==null&&(lt=Math.max(lt,Se.start*Ve),zt=Math.min(zt,(Se.start+Se.count)*Ve)),Ue!==null?(lt=Math.max(lt,0),zt=Math.min(zt,Ue.count)):He!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,He.count));const mt=zt-lt;if(mt<0||mt===1/0)return;we.setup(q,X,De,k,Ue);let bn,at=ke;if(Ue!==null&&(bn=Me.get(Ue),at=ue,at.setIndex(bn)),q.isMesh)X.wireframe===!0?(G.setLineWidth(X.wireframeLinewidth*ze()),at.setMode(_.LINES)):at.setMode(_.TRIANGLES);else if(q.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),G.setLineWidth(Xe*ze()),q.isLineSegments?at.setMode(_.LINES):q.isLineLoop?at.setMode(_.LINE_LOOP):at.setMode(_.LINE_STRIP)}else q.isPoints?at.setMode(_.POINTS):q.isSprite&&at.setMode(_.TRIANGLES);if(q.isInstancedMesh)at.renderInstances(lt,mt,q.count);else if(k.isInstancedBufferGeometry){const Xe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ro=Math.min(k.instanceCount,Xe);at.renderInstances(lt,mt,ro)}else at.render(lt,mt)};function Le(S,O,k){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,$r(S,O,k),S.side=si,S.needsUpdate=!0,$r(S,O,k),S.side=On):$r(S,O,k)}this.compile=function(S,O,k=null){k===null&&(k=S),p=ie.get(k),p.init(),b.push(p),k.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),S!==k&&S.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(E._useLegacyLights);const X=new Set;return S.traverse(function(q){const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const De=Se[Ae];Le(De,k,q),X.add(De)}else Le(Se,k,q),X.add(Se)}),b.pop(),p=null,X},this.compileAsync=function(S,O,k=null){const X=this.compile(S,O,k);return new Promise(q=>{function Se(){if(X.forEach(function(Ae){re.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){q(S);return}setTimeout(Se,10)}I.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let je=null;function ct(S){je&&je(S)}function kt(){bt.stop()}function it(){bt.start()}const bt=new Ff;bt.setAnimationLoop(ct),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(S){je=S,Ee.setAnimationLoop(S),S===null?bt.stop():bt.start()},Ee.addEventListener("sessionstart",kt),Ee.addEventListener("sessionend",it),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(O),O=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,O,R),p=ie.get(S,b.length),p.init(),b.push(p),Ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),me.setFromProjectionMatrix(Ne),ge=this.localClippingEnabled,_e=ve.init(this.clippingPlanes,ge),v=J.get(S,h.length),v.init(),h.push(v),fn(S,O,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(Y,K),this.info.render.frame++,_e===!0&&ve.beginShadows();const k=p.state.shadowsArray;if(ce.render(k,S,O),_e===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(v,S),p.setupLights(E._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let q=0,Se=X.length;q<Se;q++){const Ae=X[q];$a(v,S,Ae,Ae.viewport)}}else $a(v,S,O);R!==null&&(ne.updateMultisampleRenderTarget(R),ne.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(E,S,O),we.resetDefaultState(),Q=-1,y=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function fn(S,O,k,X){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){X&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const Ae=g.update(S),De=S.material;De.visible&&v.push(S,Ae,De,k,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){const Ae=g.update(S),De=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ce.copy(Ae.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){const Ue=Ae.groups;for(let Ve=0,Oe=Ue.length;Ve<Oe;Ve++){const He=Ue[Ve],lt=De[He.materialIndex];lt&&lt.visible&&v.push(S,Ae,lt,k,Ce.z,He)}}else De.visible&&v.push(S,Ae,De,k,Ce.z,null)}}const Se=S.children;for(let Ae=0,De=Se.length;Ae<De;Ae++)fn(Se[Ae],O,k,X)}function $a(S,O,k,X){const q=S.opaque,Se=S.transmissive,Ae=S.transparent;p.setupLightsView(k),_e===!0&&ve.setGlobalState(E.clippingPlanes,k),Se.length>0&&kf(q,Se,O,k),X&&G.viewport(A.copy(X)),q.length>0&&jr(q,O,k),Se.length>0&&jr(Se,O,k),Ae.length>0&&jr(Ae,O,k),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function kf(S,O,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Se=W.isWebGL2;Te===null&&(Te=new bi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")?Gr:ii,minFilter:Hr,samples:Se?4:0})),E.getDrawingBufferSize(ye),Se?Te.setSize(ye.x,ye.y):Te.setSize(Vs(ye.x),Vs(ye.y));const Ae=E.getRenderTarget();E.setRenderTarget(Te),E.getClearColor(le),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear();const De=E.toneMapping;E.toneMapping=ni,jr(S,k,X),ne.updateMultisampleRenderTarget(Te),ne.updateRenderTargetMipmap(Te);let Ue=!1;for(let Ve=0,Oe=O.length;Ve<Oe;Ve++){const He=O[Ve],lt=He.object,zt=He.geometry,mt=He.material,bn=He.group;if(mt.side===On&&lt.layers.test(X.layers)){const at=mt.side;mt.side=Ft,mt.needsUpdate=!0,Za(lt,k,X,zt,mt,bn),mt.side=at,mt.needsUpdate=!0,Ue=!0}}Ue===!0&&(ne.updateMultisampleRenderTarget(Te),ne.updateRenderTargetMipmap(Te)),E.setRenderTarget(Ae),E.setClearColor(le,N),E.toneMapping=De}function jr(S,O,k){const X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Se=S.length;q<Se;q++){const Ae=S[q],De=Ae.object,Ue=Ae.geometry,Ve=X===null?Ae.material:X,Oe=Ae.group;De.layers.test(k.layers)&&Za(De,O,k,Ue,Ve,Oe)}}function Za(S,O,k,X,q,Se){S.onBeforeRender(E,O,k,X,q,Se),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(E,O,k,X,S,Se),q.transparent===!0&&q.side===On&&q.forceSinglePass===!1?(q.side=Ft,q.needsUpdate=!0,E.renderBufferDirect(k,O,X,q,S,Se),q.side=si,q.needsUpdate=!0,E.renderBufferDirect(k,O,X,q,S,Se),q.side=On):E.renderBufferDirect(k,O,X,q,S,Se),S.onAfterRender(E,O,k,X,q,Se)}function $r(S,O,k){O.isScene!==!0&&(O=Ke);const X=re.get(S),q=p.state.lights,Se=p.state.shadowsArray,Ae=q.state.version,De=D.getParameters(S,q.state,Se,O,k),Ue=D.getProgramCacheKey(De);let Ve=X.programs;X.environment=S.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(S.isMeshStandardMaterial?ee:oe).get(S.envMap||X.environment),Ve===void 0&&(S.addEventListener("dispose",fe),Ve=new Map,X.programs=Ve);let Oe=Ve.get(Ue);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===Ae)return Qa(S,De),Oe}else De.uniforms=D.getUniforms(S),S.onBuild(k,De,E),S.onBeforeCompile(De,E),Oe=D.acquireProgram(De,Ue),Ve.set(Ue,Oe),X.uniforms=De.uniforms;const He=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=ve.uniform),Qa(S,De),X.needsLights=Yf(S),X.lightsStateVersion=Ae,X.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Ja(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ps.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Qa(S,O){const k=re.get(S);k.outputColorSpace=O.outputColorSpace,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Xf(S,O,k,X,q){O.isScene!==!0&&(O=Ke),ne.resetTextureUnits();const Se=O.fog,Ae=X.isMeshStandardMaterial?O.environment:null,De=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:kn,Ue=(X.isMeshStandardMaterial?ee:oe).get(X.envMap||Ae),Ve=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),He=!!k.morphAttributes.position,lt=!!k.morphAttributes.normal,zt=!!k.morphAttributes.color;let mt=ni;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=E.toneMapping);const bn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,at=bn!==void 0?bn.length:0,Xe=re.get(X),ro=p.state.lights;if(_e===!0&&(ge===!0||S!==y)){const Ht=S===y&&X.id===Q;ve.setState(X,S,Ht)}let ut=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ro.state.version||Xe.outputColorSpace!==De||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||Xe.envMap!==Ue||X.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ve.numPlanes||Xe.numIntersection!==ve.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==Oe||Xe.morphTargets!==He||Xe.morphNormals!==lt||Xe.morphColors!==zt||Xe.toneMapping!==mt||W.isWebGL2===!0&&Xe.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Xe.__version=X.version);let ai=Xe.currentProgram;ut===!0&&(ai=$r(X,O,q));let el=!1,hr=!1,so=!1;const At=ai.getUniforms(),li=Xe.uniforms;if(G.useProgram(ai.program)&&(el=!0,hr=!0,so=!0),X.id!==Q&&(Q=X.id,hr=!0),el||y!==S){At.setValue(_,"projectionMatrix",S.projectionMatrix),At.setValue(_,"viewMatrix",S.matrixWorldInverse);const Ht=At.map.cameraPosition;Ht!==void 0&&Ht.setValue(_,Ce.setFromMatrixPosition(S.matrixWorld)),W.logarithmicDepthBuffer&&At.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,hr=!0,so=!0)}if(q.isSkinnedMesh){At.setOptional(_,q,"bindMatrix"),At.setOptional(_,q,"bindMatrixInverse");const Ht=q.skeleton;Ht&&(W.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),At.setValue(_,"boneTexture",Ht.boneTexture,ne),At.setValue(_,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oo=k.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&W.isWebGL2===!0)&&be.update(q,k,ai),(hr||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,At.setValue(_,"receiveShadow",q.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=Ue,li.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),hr&&(At.setValue(_,"toneMappingExposure",E.toneMappingExposure),Xe.needsLights&&qf(li,so),Se&&X.fog===!0&&Z.refreshFogUniforms(li,Se),Z.refreshMaterialUniforms(li,X,F,V,Te),Ps.upload(_,Ja(Xe),li,ne)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ps.upload(_,Ja(Xe),li,ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(_,"center",q.center),At.setValue(_,"modelViewMatrix",q.modelViewMatrix),At.setValue(_,"normalMatrix",q.normalMatrix),At.setValue(_,"modelMatrix",q.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ht=X.uniformsGroups;for(let ao=0,Kf=Ht.length;ao<Kf;ao++)if(W.isWebGL2){const tl=Ht[ao];Pe.update(tl,ai),Pe.bind(tl,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function qf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Yf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,O,k){re.get(S.texture).__webglTexture=O,re.get(S.depthTexture).__webglTexture=k;const X=re.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){const k=re.get(S);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,k=0){R=S,w=O,U=k;let X=!0,q=null,Se=!1,Ae=!1;if(S){const Ue=re.get(S);Ue.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(_.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?ne.setupRenderTarget(S):Ue.__hasExternalTextures&&ne.rebindTextures(S,re.get(S.texture).__webglTexture,re.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Oe=re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?q=Oe[O][k]:q=Oe[O],Se=!0):W.isWebGL2&&S.samples>0&&ne.useMultisampledRTT(S)===!1?q=re.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[k]:q=Oe,A.copy(S.viewport),se.copy(S.scissor),ae=S.scissorTest}else A.copy(j).multiplyScalar(F).floor(),se.copy(P).multiplyScalar(F).floor(),ae=z;if(G.bindFramebuffer(_.FRAMEBUFFER,q)&&W.drawBuffers&&X&&G.drawBuffers(S,q),G.viewport(A),G.scissor(se),G.setScissorTest(ae),Se){const Ue=re.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,k)}else if(Ae){const Ue=re.get(S.texture),Ve=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ue.__webglTexture,k||0,Ve)}Q=-1},this.readRenderTargetPixels=function(S,O,k,X,q,Se,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){G.bindFramebuffer(_.FRAMEBUFFER,De);try{const Ue=S.texture,Ve=Ue.format,Oe=Ue.type;if(Ve!==rn&&Fe.convert(Ve)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Oe===Gr&&(I.has("EXT_color_buffer_half_float")||W.isWebGL2&&I.has("EXT_color_buffer_float"));if(Oe!==ii&&Fe.convert(Oe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===ei&&(W.isWebGL2||I.has("OES_texture_float")||I.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-X&&k>=0&&k<=S.height-q&&_.readPixels(O,k,X,q,Fe.convert(Ve),Fe.convert(Oe),Se)}finally{const Ue=R!==null?re.get(R).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,O,k=0){const X=Math.pow(2,-k),q=Math.floor(O.image.width*X),Se=Math.floor(O.image.height*X);ne.setTexture2D(O,0),_.copyTexSubImage2D(_.TEXTURE_2D,k,0,0,S.x,S.y,q,Se),G.unbindTexture()},this.copyTextureToTexture=function(S,O,k,X=0){const q=O.image.width,Se=O.image.height,Ae=Fe.convert(k.format),De=Fe.convert(k.type);ne.setTexture2D(k,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,X,S.x,S.y,q,Se,Ae,De,O.image.data):O.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,X,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,X,S.x,S.y,Ae,De,O.image),X===0&&k.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(S,O,k,X,q=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=S.max.x-S.min.x+1,Ae=S.max.y-S.min.y+1,De=S.max.z-S.min.z+1,Ue=Fe.convert(X.format),Ve=Fe.convert(X.type);let Oe;if(X.isData3DTexture)ne.setTexture3D(X,0),Oe=_.TEXTURE_3D;else if(X.isDataArrayTexture)ne.setTexture2DArray(X,0),Oe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,X.unpackAlignment);const He=_.getParameter(_.UNPACK_ROW_LENGTH),lt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),zt=_.getParameter(_.UNPACK_SKIP_PIXELS),mt=_.getParameter(_.UNPACK_SKIP_ROWS),bn=_.getParameter(_.UNPACK_SKIP_IMAGES),at=k.isCompressedTexture?k.mipmaps[0]:k.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,at.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,at.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,S.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,S.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?_.texSubImage3D(Oe,q,O.x,O.y,O.z,Se,Ae,De,Ue,Ve,at.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Oe,q,O.x,O.y,O.z,Se,Ae,De,Ue,at.data)):_.texSubImage3D(Oe,q,O.x,O.y,O.z,Se,Ae,De,Ue,Ve,at),_.pixelStorei(_.UNPACK_ROW_LENGTH,He),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,zt),_.pixelStorei(_.UNPACK_SKIP_ROWS,mt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,bn),q===0&&X.generateMipmaps&&_.generateMipmap(Oe),G.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),G.unbindTexture()},this.resetState=function(){w=0,U=0,R=null,G.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wa?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===to?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Ti:yf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?vt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Q0 extends Gf{}Q0.prototype.isWebGL1Renderer=!0;class eM extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class tM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new B;class ks{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vf extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const xr=new B,Xi=new B,qi=new B,Yi=new qe,Mr=new qe,Wf=new ot,ys=new B,Sr=new B,Ts=new B,eu=new qe,$o=new qe,tu=new qe;class nM extends Bt{constructor(e=new Vf){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new qn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tM(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new ks(i,3,0,!1)),ki.setAttribute("uv",new ks(i,2,3,!1))}this.geometry=ki,this.material=e,this.center=new qe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;bs(ys.set(-.5,-.5,0),qi,a,Xi,r,s),bs(Sr.set(.5,-.5,0),qi,a,Xi,r,s),bs(Ts.set(.5,.5,0),qi,a,Xi,r,s),eu.set(0,0),$o.set(1,0),tu.set(1,1);let o=e.ray.intersectTriangle(ys,Sr,Ts,!1,xr);if(o===null&&(bs(Sr.set(-.5,.5,0),qi,a,Xi,r,s),$o.set(0,1),o=e.ray.intersectTriangle(ys,Ts,Sr,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:Yt.getInterpolation(xr,ys,Sr,Ts,eu,$o,tu,new qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bs(n,e,t,i,r,s){Yi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Mr.x=s*Yi.x-r*Yi.y,Mr.y=r*Yi.x+s*Yi.y):Mr.copy(Yi),n.copy(e),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(Wf)}class iM extends Ot{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ja extends qn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,m=new B,x=new qe;for(let v=0;v<=r;v++){for(let p=0;p<=i;p++){const h=s+p/i*a;m.x=f*Math.cos(h),m.y=f*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}f+=d}for(let v=0;v<r;v++){const p=v*(i+1);for(let h=0;h<i;h++){const b=h+p,E=b,T=b+i+1,w=b+i+2,U=b+1;o.push(E,T,U),o.push(T,w,U)}}this.setIndex(o),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(c,3)),this.setAttribute("uv",new En(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const rM={key:1},sM={key:2,class:"tag-input-overlay"},oM={class:"tag-input-box"},aM={class:"tag-input-div"},lM=["onKeydown"],cM=5,uM=.1,fM=Fa({__name:"ARComponent",props:{roomId:{}},setup(n){const e=n,t=vn(),i=vn(!1),r=vn(null),s=vn(!1),a=vn("");let o,l,c,u,f,d,m=null,x=null,v=null,p=[],h=new ot,b=new ot,E=.1,T=[];const w=()=>{const H=p.map(V=>{var F;return{name:V.sprite.userData.text||"",position:V.sprite.position,baseMatrix:(F=V.baseMatrix)==null?void 0:F.elements}});sessionStorage.setItem(`arTags_${e.roomId}`,JSON.stringify(H))},U=()=>{const H=sessionStorage.getItem(`arTags_${e.roomId}`);if(!H)return[];try{return JSON.parse(H)}catch(V){return console.error("Failed to load tags from sessionStorage:",V),[]}},R=H=>{for(const V of p){const F=new B;if(F.setFromMatrixPosition(V.sprite.matrixWorld),F.distanceTo(H)<uM)return!0}return!1};Oa(()=>{Q()});const Q=async()=>{if("xr"in navigator){const H=await navigator.xr.isSessionSupported("immersive-ar");r.value=H}else r.value=!1},y=async()=>{var K;if(!r.value)return;const H=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}});c=new Gf({antialias:!0,alpha:!0}),c.setSize(window.innerWidth,window.innerHeight),c.xr.enabled=!0,c.xr.setReferenceSpaceType("local"),c.xr.setSession(H),(K=t.value)==null||K.appendChild(c.domElement);const V=()=>{var j;c.setAnimationLoop(null),i.value=!1,s.value=!1,m!=null&&m.cancel&&m.cancel(),m=null,x=null,(j=t.value)!=null&&j.contains(c.domElement)&&t.value.removeChild(c.domElement);for(const P of p){if(P.anchor&&P.anchor.delete)try{P.anchor.delete()}catch{}o.remove(P.sprite)}p=[],c.dispose()};H.addEventListener("end",V),o=new eM,l=new Kt(70,window.innerWidth/window.innerHeight,.01,20);const F=U();for(const j of F){const P=A(j.name);j.position&&P.position.copy(j.position);const z=j.baseMatrix?new ot().fromArray(j.baseMatrix):new ot().setPosition(j.position);o.add(P),p.push({sprite:P,baseMatrix:z})}const Y=new ja(.15,.2,32).rotateX(-Math.PI/2);d=new qa({color:16777215}),f=new zn(Y,d),f.matrixAutoUpdate=!1,f.visible=!1,o.add(f),b.identity(),u=c.xr.getController(0),u.addEventListener("select",se),o.add(u),H.requestReferenceSpace("viewer").then(j=>{H.requestHitTestSource({space:j}).then(P=>{m=P})}),H.requestReferenceSpace("local").then(j=>{x=j}),c.setAnimationLoop(N),i.value=!0},A=H=>{const Y=document.createElement("canvas"),K=Y.getContext("2d");K.font="64px Arial";const j=K.measureText(H),P=Math.ceil(j.width),z=64;Y.width=P+20*2,Y.height=z+20*2,K.font="64px Arial",K.textAlign="center",K.textBaseline="middle",K.fillStyle="rgba(0, 0, 0, 0.6)",K.fillRect(0,0,Y.width,Y.height),K.fillStyle="white",K.fillText(H,Y.width/2,Y.height/2);const me=new iM(Y);me.needsUpdate=!0;const _e=new Vf({map:me,transparent:!0}),ge=new nM(_e);ge.userData.text=H;const Te=.001;return ge.scale.set(Y.width*Te,Y.height*Te,1),ge},se=()=>{f.visible&&(h.copy(f.matrix),a.value="",s.value=!0)},ae=()=>{const H=a.value.trim();if(!H){le();return}const V=new B;if(V.setFromMatrixPosition(h),R(V)){alert("Position trop proche d'un tag existant. Veuillez choisir un autre emplacement."),le();return}const F=(K,j)=>{const P=A(H);P.position.setFromMatrixPosition(K),o.add(P),p.push({sprite:P,anchor:j,baseMatrix:K.clone()}),w()};(async()=>{if(v!=null&&v.createAnchor)try{const K=await v.createAnchor();F(h,K);return}catch(K){console.warn("WebXR anchor creation failed, fallback on position only",K)}F(h)})().catch(()=>F(h)),s.value=!1,a.value=""},le=()=>{s.value=!1,a.value=""},N=(H,V)=>{if(V){if(m&&x){const F=V.getHitTestResults(m);if(F.length){const Y=F[0];v=Y;const K=Y.getPose(x);if(K){f.visible=!0;const j=new ot().fromArray(K.transform.matrix);if(T.push(j),T.length>cM&&T.shift(),T.length>0){const P=[],z=[];T.forEach(ye=>{const Ce=new B,Ke=new ur,ze=new B;ye.decompose(Ce,Ke,ze),P.push(Ce),z.push(Ke)});const me=P.reduce((ye,Ce)=>ye.add(Ce),new B).divideScalar(P.length);let _e=z[0].clone();for(let ye=1;ye<z.length;ye++)_e.slerp(z[ye],.5);const ge=new ot;ge.compose(me,_e,new B(1,1,1));const Te=E;for(let ye=0;ye<16;ye++)b.elements[ye]=Ym.lerp(b.elements[ye],ge.elements[ye],Te);f.matrix.copy(b);const Ne=new B;Ne.setFromMatrixPosition(b),R(Ne)?d.color.setHex(16711680):d.color.setHex(16777215)}}}else f.visible=!1,T=[]}for(const F of p)if(F.anchor&&x){const Y=F.anchor.anchorSpace||F.anchor,K=V.getPose(Y,x);if(K){const j=new ot().fromArray(K.transform.matrix);F.sprite.position.setFromMatrixPosition(j)}}else F.baseMatrix&&F.sprite.position.setFromMatrixPosition(F.baseMatrix)}c.render(o,l)};return(H,V)=>(sn(),Mn(tn,null,[gt("div",{id:"ar-container",ref_key:"container",ref:t},null,512),i.value?Lr("",!0):(sn(),Mn("button",{key:0,class:"btnStart",onClick:y},"Démarrer AR")),r.value===!1?(sn(),Mn("p",rM,"Votre navigateur ne supporte pas WebXR AR.")):Lr("",!0),s.value?(sn(),Mn("div",sM,[gt("div",oM,[gt("label",null,[gt("div",aM,[V[1]||(V[1]=af(" Nom : ",-1)),Uu(gt("input",{"onUpdate:modelValue":V[0]||(V[0]=F=>a.value=F),onKeydown:hf(vp(ae,["prevent"]),["enter"]),placeholder:"Entrez le nom...",autofocus:""},null,40,lM),[[ff,a.value]])])])])])):Lr("",!0)],64))}}),hM=df(fM,[["__scopeId","data-v-ee233416"]]),dM={key:0},pM={key:1},mM=Fa({__name:"App",setup(n){const e=vn("rooms"),t=vn(null),i=s=>{t.value=s,e.value="ar"},r=()=>{e.value="rooms",t.value=null};return(s,a)=>e.value==="rooms"?(sn(),Mn("div",dM,[ln(Lp,{onSelectRoom:i})])):e.value==="ar"&&t.value?(sn(),Mn("div",pM,[gt("button",{onClick:r,class:"back-btn"},"Retour aux Pièces"),ln(hM,{roomId:t.value},null,8,["roomId"])])):Lr("",!0)}});Ep(mM).mount("#app");
