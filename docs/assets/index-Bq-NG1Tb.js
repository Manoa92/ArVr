(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const it={},_r=[],In=()=>{},Af=()=>!1,po=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ul=t=>t.startsWith("onUpdate:"),xt=Object.assign,fl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vd=Object.prototype.hasOwnProperty,et=(t,e)=>Vd.call(t,e),Ue=Array.isArray,vr=t=>cs(t)==="[object Map]",Rf=t=>cs(t)==="[object Set]",Ql=t=>cs(t)==="[object Date]",Be=t=>typeof t=="function",pt=t=>typeof t=="string",On=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",wf=t=>(tt(t)||Be(t))&&Be(t.then)&&Be(t.catch),Cf=Object.prototype.toString,cs=t=>Cf.call(t),kd=t=>cs(t).slice(8,-1),Pf=t=>cs(t)==="[object Object]",mo=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kr=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wd=/-\w/g,Gt=go(t=>t.replace(Wd,e=>e.slice(1).toUpperCase())),Xd=/\B([A-Z])/g,Ei=go(t=>t.replace(Xd,"-$1").toLowerCase()),_o=go(t=>t.charAt(0).toUpperCase()+t.slice(1)),zo=go(t=>t?`on${_o(t)}`:""),Ln=(t,e)=>!Object.is(t,e),qs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lf=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},hl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qd=t=>{const e=pt(t)?Number(t):NaN;return isNaN(e)?t:e};let ec;const vo=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dl(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=pt(i)?Kd(i):dl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(pt(t)||tt(t))return t}const $d=/;(?![^(]*\))/g,Yd=/:([^]+)/,jd=/\/\*[^]*?\*\//g;function Kd(t){const e={};return t.replace(jd,"").split($d).forEach(n=>{if(n){const i=n.split(Yd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pl(t){let e="";if(pt(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=pl(t[n]);i&&(e+=i+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jd=cl(Zd);function Df(t){return!!t||t===""}function Qd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ml(t[i],e[i]);return n}function ml(t,e){if(t===e)return!0;let n=Ql(t),i=Ql(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=On(t),i=On(e),n||i)return t===e;if(n=Ue(t),i=Ue(e),n||i)return n&&i?Qd(t,e):!1;if(n=tt(t),i=tt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ml(t[a],e[a]))return!1}}return String(t)===String(e)}const Uf=t=>!!(t&&t.__v_isRef===!0),Jt=t=>pt(t)?t:t==null?"":Ue(t)||tt(t)&&(t.toString===Cf||!Be(t.toString))?Uf(t)?Jt(t.value):JSON.stringify(t,If,2):String(t),If=(t,e)=>Uf(e)?If(t,e.value):vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Go(i,s)+" =>"]=r,n),{})}:Rf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Go(n))}:On(e)?Go(e):tt(e)&&!Ue(e)&&!Pf(e)?String(e):e,Go=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Nf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Of(t){return new Nf(t)}function Ff(){return Ct}function ep(t,e=!1){Ct&&Ct.cleanups.push(t)}let st;const Vo=new WeakSet;class Bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vo.has(this)&&(Vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tc(this),Gf(this);const e=st,n=Sn;st=this,Sn=!0;try{return this.fn()}finally{Vf(this),st=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vl(e);this.deps=this.depsTail=void 0,tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let Hf=0,Wr,Xr;function zf(t,e=!1){if(t.flags|=8,e){t.next=Xr,Xr=t;return}t.next=Wr,Wr=t}function gl(){Hf++}function _l(){if(--Hf>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Gf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vf(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),vl(i),tp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Oa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===es)||(t.globalVersion=es,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Oa(t))))return;t.flags|=2;const e=t.dep,n=st,i=Sn;st=t,Sn=!0;try{Gf(t);const r=t.fn(t._value);(e.version===0||Ln(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=n,Sn=i,Vf(t),t.flags&=-3}}function vl(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)vl(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function tp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const Wf=[];function Qn(){Wf.push(Sn),Sn=!1}function ei(){const t=Wf.pop();Sn=t===void 0?!0:t}function tc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=st;st=void 0;try{e()}finally{st=n}}}let es=0;class np{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!st||!Sn||st===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==st)n=this.activeLink=new np(st,this),st.deps?(n.prevDep=st.depsTail,st.depsTail.nextDep=n,st.depsTail=n):st.deps=st.depsTail=n,Xf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=st.depsTail,n.nextDep=void 0,st.depsTail.nextDep=n,st.depsTail=n,st.deps===n&&(st.deps=i)}return n}trigger(e){this.version++,es++,this.notify(e)}notify(e){gl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_l()}}}function Xf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xf(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Zs=new WeakMap,zi=Symbol(""),Fa=Symbol(""),ts=Symbol("");function Pt(t,e,n){if(Sn&&st){let i=Zs.get(t);i||Zs.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new xl),r.map=i,r.key=n),r.track()}}function jn(t,e,n,i,r,s){const a=Zs.get(t);if(!a){es++;return}const o=l=>{l&&l.trigger()};if(gl(),e==="clear")a.forEach(o);else{const l=Ue(t),c=l&&mo(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ts||!On(h)&&h>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(ts)),e){case"add":l?c&&o(a.get("length")):(o(a.get(zi)),vr(t)&&o(a.get(Fa)));break;case"delete":l||(o(a.get(zi)),vr(t)&&o(a.get(Fa)));break;case"set":vr(t)&&o(a.get(zi));break}}_l()}function ip(t,e){const n=Zs.get(t);return n&&n.get(e)}function Yi(t){const e=je(t);return e===t?e:(Pt(e,"iterate",ts),tn(t)?e:e.map(Mn))}function xo(t){return Pt(t=je(t),"iterate",ts),t}function wn(t,e){return ti(t)?Er(Jn(t)?Mn(e):e):Mn(e)}const rp={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,t=>wn(this,t))},concat(...t){return Yi(this).concat(...t.map(e=>Ue(e)?Yi(e):e))},entries(){return ko(this,"entries",t=>(t[1]=wn(this,t[1]),t))},every(t,e){return Bn(this,"every",t,e,void 0,arguments)},filter(t,e){return Bn(this,"filter",t,e,n=>n.map(i=>wn(this,i)),arguments)},find(t,e){return Bn(this,"find",t,e,n=>wn(this,n),arguments)},findIndex(t,e){return Bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bn(this,"findLast",t,e,n=>wn(this,n),arguments)},findLastIndex(t,e){return Bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wo(this,"includes",t)},indexOf(...t){return Wo(this,"indexOf",t)},join(t){return Yi(this).join(t)},lastIndexOf(...t){return Wo(this,"lastIndexOf",t)},map(t,e){return Bn(this,"map",t,e,void 0,arguments)},pop(){return Dr(this,"pop")},push(...t){return Dr(this,"push",t)},reduce(t,...e){return nc(this,"reduce",t,e)},reduceRight(t,...e){return nc(this,"reduceRight",t,e)},shift(){return Dr(this,"shift")},some(t,e){return Bn(this,"some",t,e,void 0,arguments)},splice(...t){return Dr(this,"splice",t)},toReversed(){return Yi(this).toReversed()},toSorted(t){return Yi(this).toSorted(t)},toSpliced(...t){return Yi(this).toSpliced(...t)},unshift(...t){return Dr(this,"unshift",t)},values(){return ko(this,"values",t=>wn(this,t))}};function ko(t,e,n){const i=xo(t),r=i[e]();return i!==t&&!tn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const sp=Array.prototype;function Bn(t,e,n,i,r,s){const a=xo(t),o=a!==t&&!tn(t),l=a[e];if(l!==sp[e]){const f=l.apply(t,s);return o?Mn(f):f}let c=n;a!==t&&(o?c=function(f,h){return n.call(this,wn(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function nc(t,e,n,i){const r=xo(t),s=r!==t&&!tn(t);let a=n,o=!1;r!==t&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=wn(t,c)),n.call(this,c,wn(t,u),f,t)}):n.length>3&&(a=function(c,u,f){return n.call(this,c,u,f,t)}));const l=r[e](a,...i);return o?wn(t,l):l}function Wo(t,e,n){const i=je(t);Pt(i,"iterate",ts);const r=i[e](...n);return(r===-1||r===!1)&&So(n[0])?(n[0]=je(n[0]),i[e](...n)):r}function Dr(t,e,n=[]){Qn(),gl();const i=je(t)[e].apply(t,n);return _l(),ei(),i}const op=cl("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function ap(t){On(t)||(t=String(t));const e=je(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class $f{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?_p:Zf:s?Kf:jf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ue(e);if(!r){let l;if(a&&(l=rp[n]))return l;if(n==="hasOwnProperty")return ap}const o=Reflect.get(e,n,ft(e)?e:i);if((On(n)?qf.has(n):op(n))||(r||Pt(e,"get",n),s))return o;if(ft(o)){const l=a&&mo(n)?o:o.value;return r&&tt(l)?Ha(l):l}return tt(o)?r?Ha(o):us(o):o}}class Yf extends $f{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=Ue(e)&&mo(n);if(!this._isShallow){const c=ti(s);if(!tn(i)&&!ti(i)&&(s=je(s),i=je(i)),!a&&ft(s)&&!ft(i))return c||(s.value=i),!0}const o=a?Number(n)<e.length:et(e,n),l=Reflect.set(e,n,i,ft(e)?e:r);return e===je(r)&&(o?Ln(i,s)&&jn(e,"set",n,i):jn(e,"add",n,i)),l}deleteProperty(e,n){const i=et(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&jn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!On(n)||!qf.has(n))&&Pt(e,"has",n),i}ownKeys(e){return Pt(e,"iterate",Ue(e)?"length":zi),Reflect.ownKeys(e)}}class lp extends $f{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cp=new Yf,up=new lp,fp=new Yf(!0);const Ba=t=>t,Ss=t=>Reflect.getPrototypeOf(t);function hp(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),a=vr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Ba:e?Er:Mn;return!e&&Pt(s,"iterate",l?Fa:zi),xt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dp(t,e){const n={get(r){const s=this.__v_raw,a=je(s),o=je(r);t||(Ln(r,o)&&Pt(a,"get",r),Pt(a,"get",o));const{has:l}=Ss(a),c=e?Ba:t?Er:Mn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Pt(je(r),"iterate",zi),r.size},has(r){const s=this.__v_raw,a=je(s),o=je(r);return t||(Ln(r,o)&&Pt(a,"has",r),Pt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=je(o),c=e?Ba:t?Er:Mn;return!t&&Pt(l,"iterate",zi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return xt(n,t?{add:Ms("add"),set:Ms("set"),delete:Ms("delete"),clear:Ms("clear")}:{add(r){const s=je(this),a=Ss(s),o=je(r),l=!e&&!tn(r)&&!ti(r)?o:r;return a.has.call(s,l)||Ln(r,l)&&a.has.call(s,r)||Ln(o,l)&&a.has.call(s,o)||(s.add(l),jn(s,"add",l,l)),this},set(r,s){!e&&!tn(s)&&!ti(s)&&(s=je(s));const a=je(this),{has:o,get:l}=Ss(a);let c=o.call(a,r);c||(r=je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ln(s,u)&&jn(a,"set",r,s):jn(a,"add",r,s),this},delete(r){const s=je(this),{has:a,get:o}=Ss(s);let l=a.call(s,r);l||(r=je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&jn(s,"delete",r,void 0),c},clear(){const r=je(this),s=r.size!==0,a=r.clear();return s&&jn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hp(r,t,e)}),n}function Sl(t,e){const n=dp(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(et(n,r)&&r in i?n:i,r,s)}const pp={get:Sl(!1,!1)},mp={get:Sl(!1,!0)},gp={get:Sl(!0,!1)};const jf=new WeakMap,Kf=new WeakMap,Zf=new WeakMap,_p=new WeakMap;function vp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xp(t){return t.__v_skip||!Object.isExtensible(t)?0:vp(kd(t))}function us(t){return ti(t)?t:Ml(t,!1,cp,pp,jf)}function Jf(t){return Ml(t,!1,fp,mp,Kf)}function Ha(t){return Ml(t,!0,up,gp,Zf)}function Ml(t,e,n,i,r){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=xp(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Jn(t){return ti(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function ti(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function So(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function El(t){return!et(t,"__v_skip")&&Object.isExtensible(t)&&Lf(t,"__v_skip",!0),t}const Mn=t=>tt(t)?us(t):t,Er=t=>tt(t)?Ha(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function _n(t){return Qf(t,!1)}function Sp(t){return Qf(t,!0)}function Qf(t,e){return ft(t)?t:new Mp(t,e)}class Mp{constructor(e,n){this.dep=new xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:Mn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||tn(e)||ti(e);e=i?e:je(e),Ln(e,n)&&(this._rawValue=e,this._value=i?e:Mn(e),this.dep.trigger())}}function nn(t){return ft(t)?t.value:t}const Ep={get:(t,e,n)=>e==="__v_raw"?t:nn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ft(r)&&!ft(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function eh(t){return Jn(t)?t:new Proxy(t,Ep)}function yp(t){const e=Ue(t)?new Array(t.length):{};for(const n in t)e[n]=bp(t,n);return e}class Tp{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=je(e);let r=!0,s=e;if(!Ue(e)||!mo(String(n)))do r=!So(s)||tn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=nn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ft(this._raw[this._key])){const n=this._object[this._key];if(ft(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return ip(this._raw,this._key)}}function bp(t,e,n){return new Tp(t,e,n)}class Ap{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return zf(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rp(t,e,n=!1){let i,r;return Be(t)?i=t:(i=t.get,r=t.set),new Ap(i,r,n)}const Es={},Js=new WeakMap;let Ui;function wp(t,e=!1,n=Ui){if(n){let i=Js.get(n);i||Js.set(n,i=[]),i.push(t)}}function Cp(t,e,n=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=y=>r?y:tn(y)||r===!1||r===0?Kn(y,1):Kn(y);let u,f,h,p,v=!1,_=!1;if(ft(t)?(f=()=>t.value,v=tn(t)):Jn(t)?(f=()=>c(t),v=!0):Ue(t)?(_=!0,v=t.some(y=>Jn(y)||tn(y)),f=()=>t.map(y=>{if(ft(y))return y.value;if(Jn(y))return c(y);if(Be(y))return l?l(y,2):y()})):Be(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Qn();try{h()}finally{ei()}}const y=Ui;Ui=u;try{return l?l(t,3,[p]):t(p)}finally{Ui=y}}:f=In,e&&r){const y=f,R=r===!0?1/0:r;f=()=>Kn(y(),R)}const m=Ff(),d=()=>{u.stop(),m&&m.active&&fl(m.effects,u)};if(s&&e){const y=e;e=(...R)=>{y(...R),d()}}let T=_?new Array(t.length).fill(Es):Es;const M=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const R=u.run();if(r||v||(_?R.some((P,C)=>Ln(P,T[C])):Ln(R,T))){h&&h();const P=Ui;Ui=u;try{const C=[R,T===Es?void 0:_&&T[0]===Es?[]:T,p];T=R,l?l(e,3,C):e(...C)}finally{Ui=P}}}else u.run()};return o&&o(M),u=new Bf(f),u.scheduler=a?()=>a(M,!1):M,p=y=>wp(y,!1,u),h=u.onStop=()=>{const y=Js.get(u);if(y){if(l)l(y,4);else for(const R of y)R();Js.delete(u)}},e?i?M(!0):T=u.run():a?a(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Kn(t,e=1/0,n){if(e<=0||!tt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))Kn(t.value,e,n);else if(Ue(t))for(let i=0;i<t.length;i++)Kn(t[i],e,n);else if(Rf(t)||vr(t))t.forEach(i=>{Kn(i,e,n)});else if(Pf(t)){for(const i in t)Kn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Kn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fs(t,e,n,i){try{return i?t(...i):t()}catch(r){Mo(r,e,n)}}function En(t,e,n,i){if(Be(t)){const r=fs(t,e,n,i);return r&&wf(r)&&r.catch(s=>{Mo(s,e,n)}),r}if(Ue(t)){const r=[];for(let s=0;s<t.length;s++)r.push(En(t[s],e,n,i));return r}}function Mo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){Qn(),fs(s,null,10,[t,l,c]),ei();return}}Pp(t,n,r,i,a)}function Pp(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Ht=[];let An=-1;const xr=[];let di=null,hr=0;const th=Promise.resolve();let Qs=null;function yl(t){const e=Qs||th;return t?e.then(this?t.bind(this):t):e}function Lp(t){let e=An+1,n=Ht.length;for(;e<n;){const i=e+n>>>1,r=Ht[i],s=ns(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Tl(t){if(!(t.flags&1)){const e=ns(t),n=Ht[Ht.length-1];!n||!(t.flags&2)&&e>=ns(n)?Ht.push(t):Ht.splice(Lp(e),0,t),t.flags|=1,nh()}}function nh(){Qs||(Qs=th.then(rh))}function Dp(t){Ue(t)?xr.push(...t):di&&t.id===-1?di.splice(hr+1,0,t):t.flags&1||(xr.push(t),t.flags|=1),nh()}function ic(t,e,n=An+1){for(;n<Ht.length;n++){const i=Ht[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ht.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ih(t){if(xr.length){const e=[...new Set(xr)].sort((n,i)=>ns(n)-ns(i));if(xr.length=0,di){di.push(...e);return}for(di=e,hr=0;hr<di.length;hr++){const n=di[hr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}di=null,hr=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rh(t){try{for(An=0;An<Ht.length;An++){const e=Ht[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Ht.length;An++){const e=Ht[An];e&&(e.flags&=-2)}An=-1,Ht.length=0,ih(),Qs=null,(Ht.length||xr.length)&&rh()}}let Qt=null,sh=null;function eo(t){const e=Qt;return Qt=t,sh=t&&t.type.__scopeId||null,e}function oh(t,e=Qt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&io(-1);const s=eo(e);let a;try{a=t(...r)}finally{eo(s),i._d&&io(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Up(t,e){if(Qt===null)return t;const n=Ro(Qt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=it]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&Kn(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function bi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Qn(),En(l,n,8,[t.el,o,t,e]),ei())}}function $s(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function hn(t,e,n=!1){const i=Pl();if(i||Gi){let r=Gi?Gi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Be(e)?e.call(i&&i.proxy):e}}function Ip(){return!!(Pl()||Gi)}const Np=Symbol.for("v-scx"),Op=()=>hn(Np);function qr(t,e,n){return ah(t,e,n)}function ah(t,e,n=it){const{immediate:i,deep:r,flush:s,once:a}=n,o=xt({},n),l=e&&i||!e&&s!=="post";let c;if(ss){if(s==="sync"){const p=Op();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=In,p.resume=In,p.pause=In,p}}const u=Lt;o.call=(p,v,_)=>En(p,u,v,_);let f=!1;s==="post"?o.scheduler=p=>{kt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():Tl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Cp(t,e,o);return ss&&(c?c.push(h):l&&h()),h}function Fp(t,e,n){const i=this.proxy,r=pt(t)?t.includes(".")?lh(i,t):()=>i[t]:t.bind(i,i);let s;Be(e)?s=e:(s=e.handler,n=e);const a=ds(this),o=ah(r,s.bind(i),n);return a(),o}function lh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Bp=Symbol("_vte"),ch=t=>t.__isTeleport,Rn=Symbol("_leaveCb"),Ur=Symbol("_enterCb");function Hp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return To(()=>{t.isMounted=!0}),_h(()=>{t.isUnmounting=!0}),t}const an=[Function,Array],uh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},fh=t=>{const e=t.subTree;return e.component?fh(e.component):e},zp={name:"BaseTransition",props:uh,setup(t,{slots:e}){const n=Pl(),i=Hp();return()=>{const r=e.default&&ph(e.default(),!0);if(!r||!r.length)return;const s=hh(r),a=je(t),{mode:o}=a;if(i.isLeaving)return Xo(s);const l=rc(s);if(!l)return Xo(s);let c=za(l,a,i,n,f=>c=f);l.type!==zt&&is(l,c);let u=n.subTree&&rc(n.subTree);if(u&&u.type!==zt&&!Oi(u,l)&&fh(n).type!==zt){let f=za(u,a,i,n);if(is(u,f),o==="out-in"&&l.type!==zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Xo(s);o==="in-out"&&l.type!==zt?f.delayLeave=(h,p,v)=>{const _=dh(i,u);_[String(u.key)]=u,h[Rn]=()=>{p(),h[Rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function hh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==zt){e=n;break}}return e}const Gp=zp;function dh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function za(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:m,onAppear:d,onAfterAppear:T,onAppearCancelled:M}=e,y=String(t.key),R=dh(n,t),P=(S,A)=>{S&&En(S,i,9,A)},C=(S,A)=>{const X=A[1];P(S,A),Ue(S)?S.every(F=>F.length<=1)&&X():S.length<=1&&X()},V={mode:a,persisted:o,beforeEnter(S){let A=l;if(!n.isMounted)if(s)A=m||l;else return;S[Rn]&&S[Rn](!0);const X=R[y];X&&Oi(t,X)&&X.el[Rn]&&X.el[Rn](),P(A,[S])},enter(S){if(R[y]===t)return;let A=c,X=u,F=f;if(!n.isMounted)if(s)A=d||c,X=T||u,F=M||f;else return;let J=!1;S[Ur]=$=>{J||(J=!0,$?P(F,[S]):P(X,[S]),V.delayedLeave&&V.delayedLeave(),S[Ur]=void 0)};const D=S[Ur].bind(null,!1);A?C(A,[S,D]):D()},leave(S,A){const X=String(t.key);if(S[Ur]&&S[Ur](!0),n.isUnmounting)return A();P(h,[S]);let F=!1;S[Rn]=D=>{F||(F=!0,A(),D?P(_,[S]):P(v,[S]),S[Rn]=void 0,R[X]===t&&delete R[X])};const J=S[Rn].bind(null,!1);R[X]=t,p?C(p,[S,J]):J()},clone(S){const A=za(S,e,n,i,r);return r&&r(A),A}};return V}function Xo(t){if(Eo(t))return t=Si(t),t.children=null,t}function rc(t){if(!Eo(t))return ch(t.type)&&t.children?hh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Be(n.default))return n.default()}}function is(t,e){t.shapeFlag&6&&t.component?(t.transition=e,is(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ph(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Wt?(a.patchFlag&128&&r++,i=i.concat(ph(a.children,e,o))):(e||a.type!==zt)&&i.push(o!=null?Si(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function hs(t,e){return Be(t)?xt({name:t.name},e,{setup:t}):t}function mh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const to=new WeakMap;function $r(t,e,n,i,r=!1){if(Ue(t)){t.forEach((_,m)=>$r(_,e&&(Ue(e)?e[m]:e),n,i,r));return}if(Yr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$r(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ro(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=je(f),p=f===it?Af:_=>sc(u,_)?!1:et(h,_),v=(_,m)=>!(m&&sc(u,m));if(c!=null&&c!==l){if(oc(e),pt(c))u[c]=null,p(c)&&(f[c]=null);else if(ft(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Be(l))fs(l,o,12,[a,u]);else{const _=pt(l),m=ft(l);if(_||m){const d=()=>{if(t.f){const T=_?p(l)?f[l]:u[l]:v()||!t.k?l.value:u[t.k];if(r)Ue(T)&&fl(T,s);else if(Ue(T))T.includes(s)||T.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const M=[s];v(l,t.k)&&(l.value=M),t.k&&(u[t.k]=M)}}else _?(u[l]=a,p(l)&&(f[l]=a)):m&&(v(l,t.k)&&(l.value=a),t.k&&(u[t.k]=a))};if(a){const T=()=>{d(),to.delete(t)};T.id=-1,to.set(t,T),kt(T,n)}else oc(t),d()}}}function oc(t){const e=to.get(t);e&&(e.flags|=8,to.delete(t))}vo().requestIdleCallback;vo().cancelIdleCallback;const Yr=t=>!!t.type.__asyncLoader,Eo=t=>t.type.__isKeepAlive;function Vp(t,e){gh(t,"a",e)}function kp(t,e){gh(t,"da",e)}function gh(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(yo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Eo(r.parent.vnode)&&Wp(i,e,n,r),r=r.parent}}function Wp(t,e,n,i){const r=yo(e,t,i,!0);bl(()=>{fl(i[e],r)},n)}function yo(t,e,n=Lt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Qn();const o=ds(n),l=En(e,n,t,a);return o(),ei(),l});return i?r.unshift(s):r.push(s),s}}const ii=t=>(e,n=Lt)=>{(!ss||t==="sp")&&yo(t,(...i)=>e(...i),n)},Xp=ii("bm"),To=ii("m"),qp=ii("bu"),$p=ii("u"),_h=ii("bum"),bl=ii("um"),Yp=ii("sp"),jp=ii("rtg"),Kp=ii("rtc");function Zp(t,e=Lt){yo("ec",t,e)}const Jp="components";function Qp(t,e){return tm(Jp,t,!0,e)||t}const em=Symbol.for("v-ndc");function tm(t,e,n=!0,i=!1){const r=Qt||Lt;if(r){const s=r.type;{const o=zm(s,!1);if(o&&(o===e||o===Gt(e)||o===_o(Gt(e))))return s}const a=ac(r[t]||s[t],e)||ac(r.appContext[t],e);return!a&&i?s:a}}function ac(t,e){return t&&(t[e]||t[Gt(e)]||t[_o(Gt(e))])}function Al(t,e,n,i){let r;const s=n,a=Ue(t);if(a||pt(t)){const o=a&&Jn(t);let l=!1,c=!1;o&&(l=!tn(t),c=ti(t),t=xo(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Er(Mn(t[u])):Mn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ga=t=>t?Bh(t)?Ro(t):Ga(t.parent):null,jr=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ga(t.parent),$root:t=>Ga(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xh(t),$forceUpdate:t=>t.f||(t.f=()=>{Tl(t.update)}),$nextTick:t=>t.n||(t.n=yl.bind(t.proxy)),$watch:t=>Fp.bind(t)}),qo=(t,e)=>t!==it&&!t.__isScriptSetup&&et(t,e),nm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(qo(i,e))return a[e]=1,i[e];if(r!==it&&et(r,e))return a[e]=2,r[e];if(et(s,e))return a[e]=3,s[e];if(n!==it&&et(n,e))return a[e]=4,n[e];Va&&(a[e]=0)}}const c=jr[e];let u,f;if(c)return e==="$attrs"&&Pt(t.attrs,"get",""),c(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==it&&et(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return qo(r,e)?(r[e]=n,!0):i!==it&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==it&&o[0]!=="$"&&et(t,o)||qo(e,o)||et(s,o)||et(i,o)||et(jr,o)||et(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lc(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Va=!0;function im(t){const e=xh(t),n=t.proxy,i=t.ctx;Va=!1,e.beforeCreate&&cc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:M,unmounted:y,render:R,renderTracked:P,renderTriggered:C,errorCaptured:V,serverPrefetch:S,expose:A,inheritAttrs:X,components:F,directives:J,filters:D}=e;if(c&&rm(c,i,null),a)for(const z in a){const oe=a[z];Be(oe)&&(i[z]=oe.bind(n))}if(r){const z=r.call(n,n);tt(z)&&(t.data=us(z))}if(Va=!0,s)for(const z in s){const oe=s[z],he=Be(oe)?oe.bind(n,n):Be(oe.get)?oe.get.bind(n,n):In,ue=!Be(oe)&&Be(oe.set)?oe.set.bind(n):In,N=Tt({get:he,set:ue});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>N.value,set:O=>N.value=O})}if(o)for(const z in o)vh(o[z],i,n,z);if(l){const z=Be(l)?l.call(n):l;Reflect.ownKeys(z).forEach(oe=>{$s(oe,z[oe])})}u&&cc(u,t,"c");function K(z,oe){Ue(oe)?oe.forEach(he=>z(he.bind(n))):oe&&z(oe.bind(n))}if(K(Xp,f),K(To,h),K(qp,p),K($p,v),K(Vp,_),K(kp,m),K(Zp,V),K(Kp,P),K(jp,C),K(_h,T),K(bl,y),K(Yp,S),Ue(A))if(A.length){const z=t.exposed||(t.exposed={});A.forEach(oe=>{Object.defineProperty(z,oe,{get:()=>n[oe],set:he=>n[oe]=he,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===In&&(t.render=R),X!=null&&(t.inheritAttrs=X),F&&(t.components=F),J&&(t.directives=J),S&&mh(t)}function rm(t,e,n=In){Ue(t)&&(t=ka(t));for(const i in t){const r=t[i];let s;tt(r)?"default"in r?s=hn(r.from||i,r.default,!0):s=hn(r.from||i):s=hn(r),ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function cc(t,e,n){En(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function vh(t,e,n,i){let r=i.includes(".")?lh(n,i):()=>n[i];if(pt(t)){const s=e[t];Be(s)&&qr(r,s)}else if(Be(t))qr(r,t.bind(n));else if(tt(t))if(Ue(t))t.forEach(s=>vh(s,e,n,i));else{const s=Be(t.handler)?t.handler.bind(n):e[t.handler];Be(s)&&qr(r,s,t)}}function xh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>no(l,c,a,!0)),no(l,e,a)),tt(e)&&s.set(e,l),l}function no(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&no(t,s,n,!0),r&&r.forEach(a=>no(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=sm[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const sm={data:uc,props:fc,emits:fc,methods:Gr,computed:Gr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Gr,directives:Gr,watch:am,provide:uc,inject:om};function uc(t,e){return e?t?function(){return xt(Be(t)?t.call(this,this):t,Be(e)?e.call(this,this):e)}:e:t}function om(t,e){return Gr(ka(t),ka(e))}function ka(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gr(t,e){return t?xt(Object.create(null),t,e):e}function fc(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:xt(Object.create(null),lc(t),lc(e??{})):e}function am(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=Nt(t[i],e[i]);return n}function Sh(){return{app:null,config:{isNativeTag:Af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lm=0;function cm(t,e){return function(i,r=null){Be(i)||(i=xt({},i)),r!=null&&!tt(r)&&(r=null);const s=Sh(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:lm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vm,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Be(u.install)?(a.add(u),u.install(c,...f)):Be(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||qt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ro(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Gi;Gi=c;try{return u()}finally{Gi=f}}};return c}}let Gi=null;const um=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Ei(e)}Modifiers`];function fm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||it;let r=n;const s=e.startsWith("update:"),a=s&&um(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>pt(u)?u.trim():u)),a.number&&(r=n.map(hl)));let o,l=i[o=zo(e)]||i[o=zo(Gt(e))];!l&&s&&(l=i[o=zo(Ei(e))]),l&&En(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,En(c,t,6,r)}}const hm=new WeakMap;function Mh(t,e,n=!1){const i=n?hm:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Be(t)){const l=c=>{const u=Mh(c,e,!0);u&&(o=!0,xt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(tt(t)&&i.set(t,null),null):(Ue(s)?s.forEach(l=>a[l]=null):xt(a,s),tt(t)&&i.set(t,a),a)}function bo(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,Ei(e))||et(t,e))}function hc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:_}=t,m=eo(t);let d,T;try{if(n.shapeFlag&4){const y=r||i,R=y;d=Cn(c.call(R,y,u,f,p,h,v)),T=o}else{const y=e;d=Cn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:dm(o)}}catch(y){Kr.length=0,Mo(y,t,1),d=qt(zt)}let M=d;if(T&&_!==!1){const y=Object.keys(T),{shapeFlag:R}=M;y.length&&R&7&&(s&&y.some(ul)&&(T=pm(T,s)),M=Si(M,T,!1,!0))}return n.dirs&&(M=Si(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&is(M,n.transition),d=M,eo(m),d}const dm=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},pm=(t,e)=>{const n={};for(const i in t)(!ul(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function mm(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?dc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Eh(a,i,h)&&!bo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?dc(i,a,c):!0:!!a;return!1}function dc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Eh(e,t,s)&&!bo(n,s))return!0}return!1}function Eh(t,e,n){const i=t[n],r=e[n];return n==="style"&&tt(i)&&tt(r)?!ml(i,r):i!==r}function gm({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const yh={},Th=()=>Object.create(yh),bh=t=>Object.getPrototypeOf(t)===yh;function _m(t,e,n,i=!1){const r={},s=Th();t.propsDefaults=Object.create(null),Ah(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Jf(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function vm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=je(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(bo(t.emitsOptions,h))continue;const p=e[h];if(l)if(et(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Gt(h);r[v]=Wa(l,o,v,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Ah(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!et(e,f)&&((u=Ei(f))===f||!et(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Wa(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&jn(t.attrs,"set","")}function Ah(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;r&&et(r,u=Gt(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:bo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(n),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Wa(r,l,f,c[f],t,!et(c,f))}}return a}function Wa(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=ds(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ei(n))&&(i=!0))}return i}const xm=new WeakMap;function Rh(t,e,n=!1){const i=n?xm:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Be(t)){const u=f=>{l=!0;const[h,p]=Rh(f,e,!0);xt(a,h),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return tt(t)&&i.set(t,_r),_r;if(Ue(s))for(let u=0;u<s.length;u++){const f=Gt(s[u]);pc(f)&&(a[f]=it)}else if(s)for(const u in s){const f=Gt(u);if(pc(f)){const h=s[u],p=a[f]=Ue(h)||Be(h)?{type:h}:xt({},h),v=p.type;let _=!1,m=!0;if(Ue(v))for(let d=0;d<v.length;++d){const T=v[d],M=Be(T)&&T.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=Be(v)&&v.name==="Boolean";p[0]=_,p[1]=m,(_||et(p,"default"))&&o.push(f)}}const c=[a,o];return tt(t)&&i.set(t,c),c}function pc(t){return t[0]!=="$"&&!kr(t)}const Rl=t=>t==="_"||t==="_ctx"||t==="$stable",wl=t=>Ue(t)?t.map(Cn):[Cn(t)],Sm=(t,e,n)=>{if(e._n)return e;const i=oh((...r)=>wl(e(...r)),n);return i._c=!1,i},wh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rl(r))continue;const s=t[r];if(Be(s))e[r]=Sm(r,s,i);else if(s!=null){const a=wl(s);e[r]=()=>a}}},Ch=(t,e)=>{const n=wl(e);t.slots.default=()=>n},Ph=(t,e,n)=>{for(const i in e)(n||!Rl(i))&&(t[i]=e[i])},Mm=(t,e,n)=>{const i=t.slots=Th();if(t.vnode.shapeFlag&32){const r=e._;r?(Ph(i,e,n),n&&Lf(i,"_",r,!0)):wh(e,i)}else e&&Ch(t,e)},Em=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Ph(r,e,n):(s=!e.$stable,wh(e,r)),a=e}else e&&(Ch(t,e),a={default:1});if(s)for(const o in r)!Rl(o)&&a[o]==null&&delete r[o]},kt=Rm;function ym(t){return Tm(t)}function Tm(t,e){const n=vo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=In,insertStaticContent:v}=t,_=(g,w,L,H=null,k=null,Y=null,ce=void 0,se=null,fe=!!w.dynamicChildren)=>{if(g===w)return;g&&!Oi(g,w)&&(H=G(g),O(g,k,Y,!0),g=null),w.patchFlag===-2&&(fe=!1,w.dynamicChildren=null);const{type:ie,ref:Ae,shapeFlag:E}=w;switch(ie){case Ao:m(g,w,L,H);break;case zt:d(g,w,L,H);break;case Yo:g==null&&T(w,L,H,ce);break;case Wt:F(g,w,L,H,k,Y,ce,se,fe);break;default:E&1?R(g,w,L,H,k,Y,ce,se,fe):E&6?J(g,w,L,H,k,Y,ce,se,fe):(E&64||E&128)&&ie.process(g,w,L,H,k,Y,ce,se,fe,xe)}Ae!=null&&k?$r(Ae,g&&g.ref,Y,w||g,!w):Ae==null&&g&&g.ref!=null&&$r(g.ref,null,Y,g,!0)},m=(g,w,L,H)=>{if(g==null)i(w.el=o(w.children),L,H);else{const k=w.el=g.el;w.children!==g.children&&c(k,w.children)}},d=(g,w,L,H)=>{g==null?i(w.el=l(w.children||""),L,H):w.el=g.el},T=(g,w,L,H)=>{[g.el,g.anchor]=v(g.children,w,L,H,g.el,g.anchor)},M=({el:g,anchor:w},L,H)=>{let k;for(;g&&g!==w;)k=h(g),i(g,L,H),g=k;i(w,L,H)},y=({el:g,anchor:w})=>{let L;for(;g&&g!==w;)L=h(g),r(g),g=L;r(w)},R=(g,w,L,H,k,Y,ce,se,fe)=>{if(w.type==="svg"?ce="svg":w.type==="math"&&(ce="mathml"),g==null)P(w,L,H,k,Y,ce,se,fe);else{const ie=g.el&&g.el._isVueCE?g.el:null;try{ie&&ie._beginPatch(),S(g,w,k,Y,ce,se,fe)}finally{ie&&ie._endPatch()}}},P=(g,w,L,H,k,Y,ce,se)=>{let fe,ie;const{props:Ae,shapeFlag:E,transition:x,dirs:I}=g;if(fe=g.el=a(g.type,Y,Ae&&Ae.is,Ae),E&8?u(fe,g.children):E&16&&V(g.children,fe,null,H,k,$o(g,Y),ce,se),I&&bi(g,null,H,"created"),C(fe,g,g.scopeId,ce,H),Ae){for(const ne in Ae)ne!=="value"&&!kr(ne)&&s(fe,ne,null,Ae[ne],Y,H);"value"in Ae&&s(fe,"value",null,Ae.value,Y),(ie=Ae.onVnodeBeforeMount)&&bn(ie,H,g)}I&&bi(g,null,H,"beforeMount");const te=bm(k,x);te&&x.beforeEnter(fe),i(fe,w,L),((ie=Ae&&Ae.onVnodeMounted)||te||I)&&kt(()=>{ie&&bn(ie,H,g),te&&x.enter(fe),I&&bi(g,null,H,"mounted")},k)},C=(g,w,L,H,k)=>{if(L&&p(g,L),H)for(let Y=0;Y<H.length;Y++)p(g,H[Y]);if(k){let Y=k.subTree;if(w===Y||Ih(Y.type)&&(Y.ssContent===w||Y.ssFallback===w)){const ce=k.vnode;C(g,ce,ce.scopeId,ce.slotScopeIds,k.parent)}}},V=(g,w,L,H,k,Y,ce,se,fe=0)=>{for(let ie=fe;ie<g.length;ie++){const Ae=g[ie]=se?Yn(g[ie]):Cn(g[ie]);_(null,Ae,w,L,H,k,Y,ce,se)}},S=(g,w,L,H,k,Y,ce)=>{const se=w.el=g.el;let{patchFlag:fe,dynamicChildren:ie,dirs:Ae}=w;fe|=g.patchFlag&16;const E=g.props||it,x=w.props||it;let I;if(L&&Ai(L,!1),(I=x.onVnodeBeforeUpdate)&&bn(I,L,w,g),Ae&&bi(w,g,L,"beforeUpdate"),L&&Ai(L,!0),(E.innerHTML&&x.innerHTML==null||E.textContent&&x.textContent==null)&&u(se,""),ie?A(g.dynamicChildren,ie,se,L,H,$o(w,k),Y):ce||oe(g,w,se,null,L,H,$o(w,k),Y,!1),fe>0){if(fe&16)X(se,E,x,L,k);else if(fe&2&&E.class!==x.class&&s(se,"class",null,x.class,k),fe&4&&s(se,"style",E.style,x.style,k),fe&8){const te=w.dynamicProps;for(let ne=0;ne<te.length;ne++){const ae=te[ne],Te=E[ae],me=x[ae];(me!==Te||ae==="value")&&s(se,ae,Te,me,k,L)}}fe&1&&g.children!==w.children&&u(se,w.children)}else!ce&&ie==null&&X(se,E,x,L,k);((I=x.onVnodeUpdated)||Ae)&&kt(()=>{I&&bn(I,L,w,g),Ae&&bi(w,g,L,"updated")},H)},A=(g,w,L,H,k,Y,ce)=>{for(let se=0;se<w.length;se++){const fe=g[se],ie=w[se],Ae=fe.el&&(fe.type===Wt||!Oi(fe,ie)||fe.shapeFlag&198)?f(fe.el):L;_(fe,ie,Ae,null,H,k,Y,ce,!0)}},X=(g,w,L,H,k)=>{if(w!==L){if(w!==it)for(const Y in w)!kr(Y)&&!(Y in L)&&s(g,Y,w[Y],null,k,H);for(const Y in L){if(kr(Y))continue;const ce=L[Y],se=w[Y];ce!==se&&Y!=="value"&&s(g,Y,se,ce,k,H)}"value"in L&&s(g,"value",w.value,L.value,k)}},F=(g,w,L,H,k,Y,ce,se,fe)=>{const ie=w.el=g?g.el:o(""),Ae=w.anchor=g?g.anchor:o("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:I}=w;I&&(se=se?se.concat(I):I),g==null?(i(ie,L,H),i(Ae,L,H),V(w.children||[],L,Ae,k,Y,ce,se,fe)):E>0&&E&64&&x&&g.dynamicChildren&&g.dynamicChildren.length===x.length?(A(g.dynamicChildren,x,L,k,Y,ce,se),(w.key!=null||k&&w===k.subTree)&&Lh(g,w,!0)):oe(g,w,L,Ae,k,Y,ce,se,fe)},J=(g,w,L,H,k,Y,ce,se,fe)=>{w.slotScopeIds=se,g==null?w.shapeFlag&512?k.ctx.activate(w,L,H,ce,fe):D(w,L,H,k,Y,ce,fe):$(g,w,fe)},D=(g,w,L,H,k,Y,ce)=>{const se=g.component=Nm(g,H,k);if(Eo(g)&&(se.ctx.renderer=xe),Om(se,!1,ce),se.asyncDep){if(k&&k.registerDep(se,K,ce),!g.el){const fe=se.subTree=qt(zt);d(null,fe,w,L),g.placeholder=fe.el}}else K(se,g,w,L,k,Y,ce)},$=(g,w,L)=>{const H=w.component=g.component;if(mm(g,w,L))if(H.asyncDep&&!H.asyncResolved){z(H,w,L);return}else H.next=w,H.update();else w.el=g.el,H.vnode=w},K=(g,w,L,H,k,Y,ce)=>{const se=()=>{if(g.isMounted){let{next:E,bu:x,u:I,parent:te,vnode:ne}=g;{const Ce=Dh(g);if(Ce){E&&(E.el=ne.el,z(g,E,ce)),Ce.asyncDep.then(()=>{kt(()=>{g.isUnmounted||ie()},k)});return}}let ae=E,Te;Ai(g,!1),E?(E.el=ne.el,z(g,E,ce)):E=ne,x&&qs(x),(Te=E.props&&E.props.onVnodeBeforeUpdate)&&bn(Te,te,E,ne),Ai(g,!0);const me=hc(g),Se=g.subTree;g.subTree=me,_(Se,me,f(Se.el),G(Se),g,k,Y),E.el=me.el,ae===null&&gm(g,me.el),I&&kt(I,k),(Te=E.props&&E.props.onVnodeUpdated)&&kt(()=>bn(Te,te,E,ne),k)}else{let E;const{el:x,props:I}=w,{bm:te,m:ne,parent:ae,root:Te,type:me}=g,Se=Yr(w);Ai(g,!1),te&&qs(te),!Se&&(E=I&&I.onVnodeBeforeMount)&&bn(E,ae,w),Ai(g,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(me,g.parent?g.parent.type:void 0);const Ce=g.subTree=hc(g);_(null,Ce,L,H,g,k,Y),w.el=Ce.el}if(ne&&kt(ne,k),!Se&&(E=I&&I.onVnodeMounted)){const Ce=w;kt(()=>bn(E,ae,Ce),k)}(w.shapeFlag&256||ae&&Yr(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&kt(g.a,k),g.isMounted=!0,w=L=H=null}};g.scope.on();const fe=g.effect=new Bf(se);g.scope.off();const ie=g.update=fe.run.bind(fe),Ae=g.job=fe.runIfDirty.bind(fe);Ae.i=g,Ae.id=g.uid,fe.scheduler=()=>Tl(Ae),Ai(g,!0),ie()},z=(g,w,L)=>{w.component=g;const H=g.vnode.props;g.vnode=w,g.next=null,vm(g,w.props,H,L),Em(g,w.children,L),Qn(),ic(g),ei()},oe=(g,w,L,H,k,Y,ce,se,fe=!1)=>{const ie=g&&g.children,Ae=g?g.shapeFlag:0,E=w.children,{patchFlag:x,shapeFlag:I}=w;if(x>0){if(x&128){ue(ie,E,L,H,k,Y,ce,se,fe);return}else if(x&256){he(ie,E,L,H,k,Y,ce,se,fe);return}}I&8?(Ae&16&&ye(ie,k,Y),E!==ie&&u(L,E)):Ae&16?I&16?ue(ie,E,L,H,k,Y,ce,se,fe):ye(ie,k,Y,!0):(Ae&8&&u(L,""),I&16&&V(E,L,H,k,Y,ce,se,fe))},he=(g,w,L,H,k,Y,ce,se,fe)=>{g=g||_r,w=w||_r;const ie=g.length,Ae=w.length,E=Math.min(ie,Ae);let x;for(x=0;x<E;x++){const I=w[x]=fe?Yn(w[x]):Cn(w[x]);_(g[x],I,L,null,k,Y,ce,se,fe)}ie>Ae?ye(g,k,Y,!0,!1,E):V(w,L,H,k,Y,ce,se,fe,E)},ue=(g,w,L,H,k,Y,ce,se,fe)=>{let ie=0;const Ae=w.length;let E=g.length-1,x=Ae-1;for(;ie<=E&&ie<=x;){const I=g[ie],te=w[ie]=fe?Yn(w[ie]):Cn(w[ie]);if(Oi(I,te))_(I,te,L,null,k,Y,ce,se,fe);else break;ie++}for(;ie<=E&&ie<=x;){const I=g[E],te=w[x]=fe?Yn(w[x]):Cn(w[x]);if(Oi(I,te))_(I,te,L,null,k,Y,ce,se,fe);else break;E--,x--}if(ie>E){if(ie<=x){const I=x+1,te=I<Ae?w[I].el:H;for(;ie<=x;)_(null,w[ie]=fe?Yn(w[ie]):Cn(w[ie]),L,te,k,Y,ce,se,fe),ie++}}else if(ie>x)for(;ie<=E;)O(g[ie],k,Y,!0),ie++;else{const I=ie,te=ie,ne=new Map;for(ie=te;ie<=x;ie++){const He=w[ie]=fe?Yn(w[ie]):Cn(w[ie]);He.key!=null&&ne.set(He.key,ie)}let ae,Te=0;const me=x-te+1;let Se=!1,Ce=0;const Xe=new Array(me);for(ie=0;ie<me;ie++)Xe[ie]=0;for(ie=I;ie<=E;ie++){const He=g[ie];if(Te>=me){O(He,k,Y,!0);continue}let Le;if(He.key!=null)Le=ne.get(He.key);else for(ae=te;ae<=x;ae++)if(Xe[ae-te]===0&&Oi(He,w[ae])){Le=ae;break}Le===void 0?O(He,k,Y,!0):(Xe[Le-te]=ie+1,Le>=Ce?Ce=Le:Se=!0,_(He,w[Le],L,null,k,Y,ce,se,fe),Te++)}const ge=Se?Am(Xe):_r;for(ae=ge.length-1,ie=me-1;ie>=0;ie--){const He=te+ie,Le=w[He],Ie=w[He+1],De=He+1<Ae?Ie.el||Uh(Ie):H;Xe[ie]===0?_(null,Le,L,De,k,Y,ce,se,fe):Se&&(ae<0||ie!==ge[ae]?N(Le,L,De,2):ae--)}}},N=(g,w,L,H,k=null)=>{const{el:Y,type:ce,transition:se,children:fe,shapeFlag:ie}=g;if(ie&6){N(g.component.subTree,w,L,H);return}if(ie&128){g.suspense.move(w,L,H);return}if(ie&64){ce.move(g,w,L,xe);return}if(ce===Wt){i(Y,w,L);for(let E=0;E<fe.length;E++)N(fe[E],w,L,H);i(g.anchor,w,L);return}if(ce===Yo){M(g,w,L);return}if(H!==2&&ie&1&&se)if(H===0)se.beforeEnter(Y),i(Y,w,L),kt(()=>se.enter(Y),k);else{const{leave:E,delayLeave:x,afterLeave:I}=se,te=()=>{g.ctx.isUnmounted?r(Y):i(Y,w,L)},ne=()=>{Y._isLeaving&&Y[Rn](!0),E(Y,()=>{te(),I&&I()})};x?x(Y,te,ne):ne()}else i(Y,w,L)},O=(g,w,L,H=!1,k=!1)=>{const{type:Y,props:ce,ref:se,children:fe,dynamicChildren:ie,shapeFlag:Ae,patchFlag:E,dirs:x,cacheIndex:I}=g;if(E===-2&&(k=!1),se!=null&&(Qn(),$r(se,null,L,g,!0),ei()),I!=null&&(w.renderCache[I]=void 0),Ae&256){w.ctx.deactivate(g);return}const te=Ae&1&&x,ne=!Yr(g);let ae;if(ne&&(ae=ce&&ce.onVnodeBeforeUnmount)&&bn(ae,w,g),Ae&6)pe(g.component,L,H);else{if(Ae&128){g.suspense.unmount(L,H);return}te&&bi(g,null,w,"beforeUnmount"),Ae&64?g.type.remove(g,w,L,xe,H):ie&&!ie.hasOnce&&(Y!==Wt||E>0&&E&64)?ye(ie,w,L,!1,!0):(Y===Wt&&E&384||!k&&Ae&16)&&ye(fe,w,L),H&&Q(g)}(ne&&(ae=ce&&ce.onVnodeUnmounted)||te)&&kt(()=>{ae&&bn(ae,w,g),te&&bi(g,null,w,"unmounted")},L)},Q=g=>{const{type:w,el:L,anchor:H,transition:k}=g;if(w===Wt){de(L,H);return}if(w===Yo){y(g);return}const Y=()=>{r(L),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:ce,delayLeave:se}=k,fe=()=>ce(L,Y);se?se(g.el,Y,fe):fe()}else Y()},de=(g,w)=>{let L;for(;g!==w;)L=h(g),r(g),g=L;r(w)},pe=(g,w,L)=>{const{bum:H,scope:k,job:Y,subTree:ce,um:se,m:fe,a:ie}=g;mc(fe),mc(ie),H&&qs(H),k.stop(),Y&&(Y.flags|=8,O(ce,g,w,L)),se&&kt(se,w),kt(()=>{g.isUnmounted=!0},w)},ye=(g,w,L,H=!1,k=!1,Y=0)=>{for(let ce=Y;ce<g.length;ce++)O(g[ce],w,L,H,k)},G=g=>{if(g.shapeFlag&6)return G(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const w=h(g.anchor||g.el),L=w&&w[Bp];return L?h(L):w};let le=!1;const ee=(g,w,L)=>{let H;g==null?w._vnode&&(O(w._vnode,null,null,!0),H=w._vnode.component):_(w._vnode||null,g,w,null,null,null,L),w._vnode=g,le||(le=!0,ic(H),ih(),le=!1)},xe={p:_,um:O,m:N,r:Q,mt:D,mc:V,pc:oe,pbc:A,n:G,o:t};return{render:ee,hydrate:void 0,createApp:cm(ee)}}function $o({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ai({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lh(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Yn(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Lh(a,o)),o.type===Ao&&(o.patchFlag===-1&&(o=r[s]=Yn(o)),o.el=a.el),o.type===zt&&!o.el&&(o.el=a.el)}}function Am(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Dh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function mc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Uh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Uh(e.subTree):null}const Ih=t=>t.__isSuspense;function Rm(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):Dp(t)}const Wt=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),Kr=[];let en=null;function at(t=!1){Kr.push(en=t?null:[])}function wm(){Kr.pop(),en=Kr[Kr.length-1]||null}let rs=1;function io(t,e=!1){rs+=t,t<0&&en&&e&&(en.hasOnce=!0)}function Nh(t){return t.dynamicChildren=rs>0?en||_r:null,wm(),rs>0&&en&&en.push(t),t}function ut(t,e,n,i,r,s){return Nh($e(t,e,n,i,r,s,!0))}function Oh(t,e,n,i,r){return Nh(qt(t,e,n,i,r,!0))}function ro(t){return t?t.__v_isVNode===!0:!1}function Oi(t,e){return t.type===e.type&&t.key===e.key}const Fh=({key:t})=>t??null,Ys=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||ft(t)||Be(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,i=0,r=null,s=t===Wt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fh(e),ref:e&&Ys(e),scopeId:sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return o?(Cl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=pt(n)?8:16),rs>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const qt=Cm;function Cm(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===em)&&(t=zt),ro(t)){const o=Si(t,e,!0);return n&&Cl(o,n),rs>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(t)]=o:en.push(o)),o.patchFlag=-2,o}if(Gm(t)&&(t=t.__vccOpts),e){e=Pm(e);let{class:o,style:l}=e;o&&!pt(o)&&(e.class=pl(o)),tt(l)&&(So(l)&&!Ue(l)&&(l=xt({},l)),e.style=dl(l))}const a=pt(t)?1:Ih(t)?128:ch(t)?64:tt(t)?4:Be(t)?2:0;return $e(t,e,n,i,r,a,s,!0)}function Pm(t){return t?So(t)||bh(t)?xt({},t):t:null}function Si(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?Dm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Fh(c),ref:e&&e.ref?n&&s?Ue(s)?s.concat(Ys(e)):[s,Ys(e)]:Ys(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Si(t.ssContent),ssFallback:t.ssFallback&&Si(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&is(u,l.clone(u)),u}function Lm(t=" ",e=0){return qt(Ao,null,t,e)}function mr(t="",e=!1){return e?(at(),Oh(zt,null,t)):qt(zt,null,t)}function Cn(t){return t==null||typeof t=="boolean"?qt(zt):Ue(t)?qt(Wt,null,t.slice()):ro(t)?Yn(t):qt(Ao,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Si(t)}function Cl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!bh(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),i&64?(n=16,e=[Lm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pl([e.class,i.class]));else if(r==="style")e.style=dl([e.style,i.style]);else if(po(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ue(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function bn(t,e,n,i=null){En(t,e,7,[n,i])}const Um=Sh();let Im=0;function Nm(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Um,s={uid:Im++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(i,r),emitsOptions:Mh(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fm.bind(null,s),t.ce&&t.ce(s),s}let Lt=null;const Pl=()=>Lt||Qt;let so,Xa;{const t=vo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};so=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),Xa=e("__VUE_SSR_SETTERS__",n=>ss=n)}const ds=t=>{const e=Lt;return so(t),t.scope.on(),()=>{t.scope.off(),so(e)}},gc=()=>{Lt&&Lt.scope.off(),so(null)};function Bh(t){return t.vnode.shapeFlag&4}let ss=!1;function Om(t,e=!1,n=!1){e&&Xa(e);const{props:i,children:r}=t.vnode,s=Bh(t);_m(t,i,s,e),Mm(t,r,n||e);const a=s?Fm(t,e):void 0;return e&&Xa(!1),a}function Fm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nm);const{setup:i}=n;if(i){Qn();const r=t.setupContext=i.length>1?Hm(t):null,s=ds(t),a=fs(i,t,0,[t.props,r]),o=wf(a);if(ei(),s(),(o||t.sp)&&!Yr(t)&&mh(t),o){if(a.then(gc,gc),e)return a.then(l=>{_c(t,l)}).catch(l=>{Mo(l,t,0)});t.asyncDep=a}else _c(t,a)}else Hh(t)}function _c(t,e,n){Be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=eh(e)),Hh(t)}function Hh(t,e,n){const i=t.type;t.render||(t.render=i.render||In);{const r=ds(t);Qn();try{im(t)}finally{ei(),r()}}}const Bm={get(t,e){return Pt(t,"get",""),t[e]}};function Hm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bm),slots:t.slots,emit:t.emit,expose:e}}function Ro(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(eh(El(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}})):t.proxy}function zm(t,e=!0){return Be(t)?t.displayName||t.name:t.name||e&&t.__name}function Gm(t){return Be(t)&&"__vccOpts"in t}const Tt=(t,e)=>Rp(t,e,ss);function Ll(t,e,n){try{io(-1);const i=arguments.length;return i===2?tt(e)&&!Ue(e)?ro(e)?qt(t,null,[e]):qt(t,e):qt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ro(n)&&(n=[n]),qt(t,e,n))}finally{io(1)}}const Vm="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qa;const vc=typeof window<"u"&&window.trustedTypes;if(vc)try{qa=vc.createPolicy("vue",{createHTML:t=>t})}catch{}const zh=qa?t=>qa.createHTML(t):t=>t,km="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,xc=$n&&$n.createElement("template"),Xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?$n.createElementNS(km,t):e==="mathml"?$n.createElementNS(Wm,t):n?$n.createElement(t,{is:n}):$n.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{xc.innerHTML=zh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=xc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},si="transition",Ir="animation",os=Symbol("_vtc"),Gh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qm=xt({},uh,Gh),$m=t=>(t.displayName="Transition",t.props=qm,t),Ym=$m((t,{slots:e})=>Ll(Gp,jm(t),e)),Ri=(t,e=[])=>{Ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sc=t=>t?Ue(t)?t.some(e=>e.length>1):t.length>1:!1;function jm(t){const e={};for(const F in t)F in Gh||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,v=Km(r),_=v&&v[0],m=v&&v[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:M,onLeave:y,onLeaveCancelled:R,onBeforeAppear:P=d,onAppear:C=T,onAppearCancelled:V=M}=e,S=(F,J,D,$)=>{F._enterCancelled=$,wi(F,J?u:o),wi(F,J?c:a),D&&D()},A=(F,J)=>{F._isLeaving=!1,wi(F,f),wi(F,p),wi(F,h),J&&J()},X=F=>(J,D)=>{const $=F?C:T,K=()=>S(J,F,D);Ri($,[J,K]),Mc(()=>{wi(J,F?l:s),Hn(J,F?u:o),Sc($)||Ec(J,i,_,K)})};return xt(e,{onBeforeEnter(F){Ri(d,[F]),Hn(F,s),Hn(F,a)},onBeforeAppear(F){Ri(P,[F]),Hn(F,l),Hn(F,c)},onEnter:X(!1),onAppear:X(!0),onLeave(F,J){F._isLeaving=!0;const D=()=>A(F,J);Hn(F,f),F._enterCancelled?(Hn(F,h),bc(F)):(bc(F),Hn(F,h)),Mc(()=>{F._isLeaving&&(wi(F,f),Hn(F,p),Sc(y)||Ec(F,i,m,D))}),Ri(y,[F,D])},onEnterCancelled(F){S(F,!1,void 0,!0),Ri(M,[F])},onAppearCancelled(F){S(F,!0,void 0,!0),Ri(V,[F])},onLeaveCancelled(F){A(F),Ri(R,[F])}})}function Km(t){if(t==null)return null;if(tt(t))return[jo(t.enter),jo(t.leave)];{const e=jo(t);return[e,e]}}function jo(t){return qd(t)}function Hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[os]||(t[os]=new Set)).add(e)}function wi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[os];n&&(n.delete(e),n.size||(t[os]=void 0))}function Mc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Zm=0;function Ec(t,e,n,i){const r=t._endId=++Zm,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Jm(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,h)}function Jm(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${si}Delay`),s=i(`${si}Duration`),a=yc(r,s),o=i(`${Ir}Delay`),l=i(`${Ir}Duration`),c=yc(o,l);let u=null,f=0,h=0;e===si?a>0&&(u=si,f=a,h=s.length):e===Ir?c>0&&(u=Ir,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?si:Ir:null,h=u?u===si?s.length:l.length:0);const p=u===si&&/\b(?:transform|all)(?:,|$)/.test(i(`${si}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function yc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Tc(n)+Tc(t[i])))}function Tc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function bc(t){return(t?t.ownerDocument:document).body.offsetHeight}function Qm(t,e,n){const i=t[os];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ac=Symbol("_vod"),eg=Symbol("_vsh"),tg=Symbol(""),ng=/(?:^|;)\s*display\s*:/;function ig(t,e,n){const i=t.style,r=pt(n);let s=!1;if(n&&!r){if(e)if(pt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&js(i,o,"")}else for(const a in e)n[a]==null&&js(i,a,"");for(const a in n)a==="display"&&(s=!0),js(i,a,n[a])}else if(r){if(e!==n){const a=i[tg];a&&(n+=";"+a),i.cssText=n,s=ng.test(n)}}else e&&t.removeAttribute("style");Ac in t&&(t[Ac]=s?i.display:"",t[eg]&&(i.display="none"))}const Rc=/\s*!important$/;function js(t,e,n){if(Ue(n))n.forEach(i=>js(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=rg(t,e);Rc.test(n)?t.setProperty(Ei(i),n.replace(Rc,""),"important"):t[i]=n}}const wc=["Webkit","Moz","ms"],Ko={};function rg(t,e){const n=Ko[e];if(n)return n;let i=Gt(e);if(i!=="filter"&&i in t)return Ko[e]=i;i=_o(i);for(let r=0;r<wc.length;r++){const s=wc[r]+i;if(s in t)return Ko[e]=s}return e}const Cc="http://www.w3.org/1999/xlink";function Pc(t,e,n,i,r,s=Jd(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cc,e.slice(6,e.length)):t.setAttributeNS(Cc,e,n):n==null||s&&!Df(n)?t.removeAttribute(e):t.setAttribute(e,s?"":On(n)?String(n):n)}function Lc(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Df(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function dr(t,e,n,i){t.addEventListener(e,n,i)}function sg(t,e,n,i){t.removeEventListener(e,n,i)}const Dc=Symbol("_vei");function og(t,e,n,i,r=null){const s=t[Dc]||(t[Dc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ag(e);if(i){const c=s[e]=ug(i,r);dr(t,o,c,l)}else a&&(sg(t,o,a,l),s[e]=void 0)}}const Uc=/(?:Once|Passive|Capture)$/;function ag(t){let e;if(Uc.test(t)){e={};let i;for(;i=t.match(Uc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ei(t.slice(2)),e]}let Zo=0;const lg=Promise.resolve(),cg=()=>Zo||(lg.then(()=>Zo=0),Zo=Date.now());function ug(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;En(fg(i,n.value),e,5,[i])};return n.value=t,n.attached=cg(),n}function fg(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hg=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?Qm(t,i,a):e==="style"?ig(t,n,i):po(e)?ul(e)||og(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(t,e,i,a))?(Lc(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pc(t,e,i,a,s,e!=="value")):t._isVueCE&&(pg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!pt(i)))?Lc(t,Gt(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Pc(t,e,i,a))};function dg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ic(e)&&Be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ic(e)&&pt(n)?!1:e in t}function pg(t,e){const n=t._def.props;if(!n)return!1;const i=Gt(e);return Array.isArray(n)?n.some(r=>Gt(r)===i):Object.keys(n).some(r=>Gt(r)===i)}const Nc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ue(e)?n=>qs(e,n):e};function mg(t){t.target.composing=!0}function Oc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jo=Symbol("_assign");function Fc(t,e,n){return e&&(t=t.trim()),n&&(t=hl(t)),t}const gg={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Jo]=Nc(r);const s=i||r.props&&r.props.type==="number";dr(t,e?"change":"input",a=>{a.target.composing||t[Jo](Fc(t.value,n,s))}),(n||s)&&dr(t,"change",()=>{t.value=Fc(t.value,n,s)}),e||(dr(t,"compositionstart",mg),dr(t,"compositionend",Oc),dr(t,"change",Oc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(t[Jo]=Nc(a),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?hl(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},_g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vg=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const s=Ei(r.key);if(e.some(a=>a===s||_g[a]===s))return t(r)})},xg=xt({patchProp:hg},Xm);let Bc;function Sg(){return Bc||(Bc=ym(xg))}const Mg=(...t)=>{const e=Sg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=yg(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Eg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yg(t){return pt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vh;const wo=t=>Vh=t,kh=Symbol();function $a(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zr||(Zr={}));function Tg(){const t=Of(!0),e=t.run(()=>_n({}));let n=[],i=[];const r=El({install(s){wo(r),r._a=s,s.provide(kh,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Wh=()=>{};function Hc(t,e,n,i=Wh){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&Ff()&&ep(r),r}function ji(t,...e){t.forEach(n=>{n(...e)})}const bg=t=>t(),zc=Symbol(),Qo=Symbol();function Ya(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];$a(r)&&$a(i)&&t.hasOwnProperty(n)&&!ft(i)&&!Jn(i)?t[n]=Ya(r,i):t[n]=i}return t}const Ag=Symbol();function Rg(t){return!$a(t)||!Object.prototype.hasOwnProperty.call(t,Ag)}const{assign:hi}=Object;function wg(t){return!!(ft(t)&&t.effect)}function Cg(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=yp(n.state.value[t]);return hi(u,s,Object.keys(a||{}).reduce((f,h)=>(f[h]=El(Tt(()=>{wo(n);const p=n._s.get(t);return a[h].call(p,p)})),f),{}))}return l=Xh(t,c,e,n,i,!0),l}function Xh(t,e,n={},i,r,s){let a;const o=hi({actions:{}},n),l={deep:!0};let c,u,f=new Set,h=new Set,p;const v=i.state.value[t];!s&&!v&&(i.state.value[t]={});let _;function m(V){let S;c=u=!1,typeof V=="function"?(V(i.state.value[t]),S={type:Zr.patchFunction,storeId:t,events:p}):(Ya(i.state.value[t],V),S={type:Zr.patchObject,payload:V,storeId:t,events:p});const A=_=Symbol();yl().then(()=>{_===A&&(c=!0)}),u=!0,ji(f,S,i.state.value[t])}const d=s?function(){const{state:S}=n,A=S?S():{};this.$patch(X=>{hi(X,A)})}:Wh;function T(){a.stop(),f.clear(),h.clear(),i._s.delete(t)}const M=(V,S="")=>{if(zc in V)return V[Qo]=S,V;const A=function(){wo(i);const X=Array.from(arguments),F=new Set,J=new Set;function D(z){F.add(z)}function $(z){J.add(z)}ji(h,{args:X,name:A[Qo],store:R,after:D,onError:$});let K;try{K=V.apply(this&&this.$id===t?this:R,X)}catch(z){throw ji(J,z),z}return K instanceof Promise?K.then(z=>(ji(F,z),z)).catch(z=>(ji(J,z),Promise.reject(z))):(ji(F,K),K)};return A[zc]=!0,A[Qo]=S,A},y={_p:i,$id:t,$onAction:Hc.bind(null,h),$patch:m,$reset:d,$subscribe(V,S={}){const A=Hc(f,V,S.detached,()=>X()),X=a.run(()=>qr(()=>i.state.value[t],F=>{(S.flush==="sync"?u:c)&&V({storeId:t,type:Zr.direct,events:p},F)},hi({},l,S)));return A},$dispose:T},R=us(y);i._s.set(t,R);const C=(i._a&&i._a.runWithContext||bg)(()=>i._e.run(()=>(a=Of()).run(()=>e({action:M}))));for(const V in C){const S=C[V];if(ft(S)&&!wg(S)||Jn(S))s||(v&&Rg(S)&&(ft(S)?S.value=v[V]:Ya(S,v[V])),i.state.value[t][V]=S);else if(typeof S=="function"){const A=M(S,V);C[V]=A,o.actions[V]=S}}return hi(R,C),hi(je(R),C),Object.defineProperty(R,"$state",{get:()=>i.state.value[t],set:V=>{m(S=>{hi(S,V)})}}),i._p.forEach(V=>{hi(R,a.run(()=>V({store:R,app:i._a,pinia:i,options:o})))}),v&&s&&n.hydrate&&n.hydrate(R.$state,v),c=!0,u=!0,R}/*! #__NO_SIDE_EFFECTS__ */function qh(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(a,o){const l=Ip();return a=a||(l?hn(kh,null):null),a&&wo(a),a=Vh,a._s.has(t)||(r?Xh(t,e,i,a):Cg(t,i,a)),a._s.get(t)}return s.$id=t,s}/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const pr=typeof document<"u";function $h(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$h(t.default)}const Qe=Object.assign;function ea(t,e){const n={};for(const i in e){const r=e[i];n[i]=yn(r)?r.map(t):t(r)}return n}const Jr=()=>{},yn=Array.isArray;function Gc(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}let ct=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Yh=Symbol("");ct.MATCHER_NOT_FOUND+"",ct.NAVIGATION_GUARD_REDIRECT+"",ct.NAVIGATION_ABORTED+"",ct.NAVIGATION_CANCELLED+"",ct.NAVIGATION_DUPLICATED+"";function yr(t,e){return Qe(new Error,{type:t,[Yh]:!0},e)}function zn(t,e){return t instanceof Error&&Yh in t&&(e==null||!!(t.type&e))}const Lg=["params","query","hash"];function Dg(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Lg)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Ug=Symbol(""),Vc=Symbol(""),Co=Symbol(""),Dl=Symbol(""),ja=Symbol("");function Ul(){return hn(Co)}function jh(t){return hn(Dl)}/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const Kh=/#/g,Ig=/&/g,Ng=/\//g,Og=/=/g,Fg=/\?/g,Zh=/\+/g,Bg=/%5B/g,Hg=/%5D/g,Jh=/%5E/g,zg=/%60/g,Qh=/%7B/g,Gg=/%7C/g,ed=/%7D/g,Vg=/%20/g;function Il(t){return t==null?"":encodeURI(""+t).replace(Gg,"|").replace(Bg,"[").replace(Hg,"]")}function kg(t){return Il(t).replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function Ka(t){return Il(t).replace(Zh,"%2B").replace(Vg,"+").replace(Kh,"%23").replace(Ig,"%26").replace(zg,"`").replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function Wg(t){return Ka(t).replace(Og,"%3D")}function Xg(t){return Il(t).replace(Kh,"%23").replace(Fg,"%3F")}function qg(t){return Xg(t).replace(Ng,"%2F")}function oo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const $g=/\/$/,Yg=t=>t.replace($g,"");function ta(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=t(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Jg(i??e,n),{fullPath:i+s+a,path:i,query:r,hash:oo(a)}}function jg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kg(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Tr(e.matched[i],n.matched[r])&&td(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function td(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Zg(t[n],e[n]))return!1;return!0}function Zg(t,e){return yn(t)?Wc(t,e):yn(e)?Wc(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function Wc(t,e){return yn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Jg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Za=function(t){return t.pop="pop",t.push="push",t}({}),na=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Qg(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yg(t)}const e_=/^[^#]+#/;function t_(t,e){return t.replace(e_,"#")+e}function n_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Po=()=>({left:window.scrollX,top:window.scrollY});function i_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=n_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xc(t,e){return(history.state?history.state.position-e:-1)+t}const Ja=new Map;function r_(t,e){Ja.set(t,e)}function s_(t){const e=Ja.get(t);return Ja.delete(t),e}function o_(t){return typeof t=="string"||t&&typeof t=="object"}function nd(t){return typeof t=="string"||typeof t=="symbol"}function a_(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Zh," "),s=r.indexOf("="),a=oo(s<0?r:r.slice(0,s)),o=s<0?null:oo(r.slice(s+1));if(a in e){let l=e[a];yn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function qc(t){let e="";for(let n in t){const i=t[n];if(n=Wg(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(i)?i.map(r=>r&&Ka(r)):[i&&Ka(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function l_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=yn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Nr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(yr(ct.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):o_(h)?l(yr(ct.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ia(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if($h(l)){const c=(l.__vccOpts||l)[e];c&&s.push(pi(c,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Pg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&pi(h,n,i,a,o,r)()}))}}return s}function c_(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>Tr(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>Tr(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let u_=()=>location.protocol+"//"+location.host;function id(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),kc(o,"")}return kc(n,t)+i+r}function f_(t,e,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=id(t,location),v=n.value,_=e.value;let m=0;if(h){if(n.value=p,e.value=h,a&&a===v){a=null;return}m=_?h.position-_.position:0}else i(p);r.forEach(d=>{d(n.value,v,{delta:m,type:Za.pop,direction:m?m>0?na.forward:na.back:na.unknown})})};function l(){a=n.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Qe({},h.state,{scroll:Po()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function $c(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Po():null}}function h_(t){const{history:e,location:n}=window,i={value:id(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:u_()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function a(l,c){s(l,Qe({},e.state,$c(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:Po()});s(u.current,u,!0),s(l,Qe({},$c(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function d_(t){t=Qg(t);const e=h_(t),n=f_(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=Qe({location:"",base:t,go:i,createHref:t_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function p_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),d_(t)}let Hi=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var vt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(vt||{});const m_={type:Hi.Static,value:""},g_=/[a-zA-Z0-9_]/;function __(t){if(!t)return[[]];if(t==="/")return[[m_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=vt.Static,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===vt.Static?s.push({type:Hi.Static,value:c}):n===vt.Param||n===vt.ParamRegExp||n===vt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Hi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==vt.ParamRegExp){i=n,n=vt.EscapeNext;continue}switch(n){case vt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),n=vt.Param):h();break;case vt.EscapeNext:h(),n=i;break;case vt.Param:l==="("?n=vt.ParamRegExp:g_.test(l)?h():(f(),n=vt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case vt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=vt.ParamRegExpEnd:u+=l;break;case vt.ParamRegExpEnd:f(),n=vt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===vt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const Yc="[^/]+?",v_={sensitive:!1,strict:!1,start:!0,end:!0};var Ft=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Ft||{});const x_=/[.+*?^${}()[\]/\\]/g;function S_(t,e){const n=Qe({},v_,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Ft.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=Ft.Segment+(n.sensitive?Ft.BonusCaseSensitive:0);if(h.type===Hi.Static)f||(r+="/"),r+=h.value.replace(x_,"\\$&"),p+=Ft.Static;else if(h.type===Hi.Param){const{value:v,repeatable:_,optional:m,regexp:d}=h;s.push({name:v,repeatable:_,optional:m});const T=d||Yc;if(T!==Yc){p+=Ft.BonusCustomRegExp;try{new RegExp(`(${T})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${T}): `+y.message)}}let M=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,p+=Ft.Dynamic,m&&(p+=Ft.BonusOptional),_&&(p+=Ft.BonusRepeatable),T===".*"&&(p+=Ft.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Ft.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===Hi.Static)u+=p.value;else if(p.type===Hi.Param){const{value:v,repeatable:_,optional:m}=p,d=v in c?c[v]:"";if(yn(d)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const T=yn(d)?d.join("/"):d;if(!T)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=T}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function M_(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Ft.Static+Ft.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ft.Static+Ft.Segment?1:-1:0}function rd(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=M_(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(jc(i))return 1;if(jc(r))return-1}return r.length-i.length}function jc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const E_={strict:!1,end:!0,sensitive:!1};function y_(t,e,n){const i=S_(__(t.path),n),r=Qe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function T_(t,e){const n=[],i=new Map;e=Gc(E_,e);function r(f){return i.get(f)}function s(f,h,p){const v=!p,_=Zc(f);_.aliasOf=p&&p.record;const m=Gc(e,f),d=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of y)d.push(Zc(Qe({},_,{components:p?p.record.components:_.components,path:R,aliasOf:p?p.record:_})))}let T,M;for(const y of d){const{path:R}=y;if(h&&R[0]!=="/"){const P=h.record.path,C=P[P.length-1]==="/"?"":"/";y.path=h.record.path+(R&&C+R)}if(T=y_(y,h,m),p?p.alias.push(T):(M=M||T,M!==T&&M.alias.push(T),v&&f.name&&!Jc(T)&&a(f.name)),sd(T)&&l(T),_.children){const P=_.children;for(let C=0;C<P.length;C++)s(P[C],T,p&&p.children[C])}p=p||T}return M?()=>{a(M)}:Jr}function a(f){if(nd(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const h=R_(f,n);n.splice(h,0,f),f.record.name&&!Jc(f)&&i.set(f.record.name,f)}function c(f,h){let p,v={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw yr(ct.MATCHER_NOT_FOUND,{location:f});m=p.record.name,v=Qe(Kc(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Kc(f.params,p.keys.map(M=>M.name))),_=p.stringify(v)}else if(f.path!=null)_=f.path,p=n.find(M=>M.re.test(_)),p&&(v=p.parse(_),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw yr(ct.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,v=Qe({},h.params,f.params),_=p.stringify(v)}const d=[];let T=p;for(;T;)d.unshift(T.record),T=T.parent;return{name:m,path:_,params:v,matched:d,meta:A_(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Kc(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Zc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:b_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function b_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Jc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function A_(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function R_(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;rd(t,e[s])<0?i=s:n=s+1}const r=w_(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function w_(t){let e=t;for(;e=e.parent;)if(sd(e)&&rd(t,e)===0)return e}function sd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qc(t){const e=hn(Co),n=hn(Dl),i=Tt(()=>{const l=nn(t.to);return e.resolve(l)}),r=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Tr.bind(null,u));if(h>-1)return h;const p=eu(l[c-2]);return c>1&&eu(u)===p&&f[f.length-1].path!==p?f.findIndex(Tr.bind(null,l[c-2])):h}),s=Tt(()=>r.value>-1&&U_(n.params,i.value.params)),a=Tt(()=>r.value>-1&&r.value===n.matched.length-1&&td(n.params,i.value.params));function o(l={}){if(D_(l)){const c=e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(Jr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function C_(t){return t.length===1?t[0]:t}const P_=hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qc,setup(t,{slots:e}){const n=us(Qc(t)),{options:i}=hn(Co),r=Tt(()=>({[tu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[tu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&C_(e.default(n));return t.custom?s:Ll("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),L_=P_;function D_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function U_(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!yn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function eu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tu=(t,e,n)=>t??e??n,I_=hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=hn(ja),r=Tt(()=>t.route||i.value),s=hn(Vc,0),a=Tt(()=>{let c=nn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Tt(()=>r.value.matched[a.value]);$s(Vc,Tt(()=>a.value+1)),$s(Ug,o),$s(ja,r);const l=_n();return qr(()=>[l.value,o.value,t.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Tr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,h=f&&f.components[u];if(!h)return nu(n.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ll(h,Qe({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return nu(n.default,{Component:m,route:c})||m}}});function nu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const N_=I_;function O_(t){const e=T_(t.routes,t),n=t.parseQuery||a_,i=t.stringifyQuery||qc,r=t.history,s=Nr(),a=Nr(),o=Nr(),l=Sp(oi);let c=oi;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,G=>""+G),f=ea.bind(null,qg),h=ea.bind(null,oo);function p(G,le){let ee,xe;return nd(G)?(ee=e.getRecordMatcher(G),xe=le):xe=G,e.addRoute(xe,ee)}function v(G){const le=e.getRecordMatcher(G);le&&e.removeRoute(le)}function _(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function d(G,le){if(le=Qe({},le||l.value),typeof G=="string"){const L=ta(n,G,le.path),H=e.resolve({path:L.path},le),k=r.createHref(L.fullPath);return Qe(L,H,{params:h(H.params),redirectedFrom:void 0,href:k})}let ee;if(G.path!=null)ee=Qe({},G,{path:ta(n,G.path,le.path).path});else{const L=Qe({},G.params);for(const H in L)L[H]==null&&delete L[H];ee=Qe({},G,{params:f(L)}),le.params=f(le.params)}const xe=e.resolve(ee,le),Ee=G.hash||"";xe.params=u(h(xe.params));const g=jg(i,Qe({},G,{hash:kg(Ee),path:xe.path})),w=r.createHref(g);return Qe({fullPath:g,hash:Ee,query:i===qc?l_(G.query):G.query||{}},xe,{redirectedFrom:void 0,href:w})}function T(G){return typeof G=="string"?ta(n,G,l.value.path):Qe({},G)}function M(G,le){if(c!==G)return yr(ct.NAVIGATION_CANCELLED,{from:le,to:G})}function y(G){return C(G)}function R(G){return y(Qe(T(G),{replace:!0}))}function P(G,le){const ee=G.matched[G.matched.length-1];if(ee&&ee.redirect){const{redirect:xe}=ee;let Ee=typeof xe=="function"?xe(G,le):xe;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=T(Ee):{path:Ee},Ee.params={}),Qe({query:G.query,hash:G.hash,params:Ee.path!=null?{}:G.params},Ee)}}function C(G,le){const ee=c=d(G),xe=l.value,Ee=G.state,g=G.force,w=G.replace===!0,L=P(ee,xe);if(L)return C(Qe(T(L),{state:typeof L=="object"?Qe({},Ee,L.state):Ee,force:g,replace:w}),le||ee);const H=ee;H.redirectedFrom=le;let k;return!g&&Kg(i,xe,ee)&&(k=yr(ct.NAVIGATION_DUPLICATED,{to:H,from:xe}),N(xe,xe,!0,!1)),(k?Promise.resolve(k):A(H,xe)).catch(Y=>zn(Y)?zn(Y,ct.NAVIGATION_GUARD_REDIRECT)?Y:ue(Y):oe(Y,H,xe)).then(Y=>{if(Y){if(zn(Y,ct.NAVIGATION_GUARD_REDIRECT))return C(Qe({replace:w},T(Y.to),{state:typeof Y.to=="object"?Qe({},Ee,Y.to.state):Ee,force:g}),le||H)}else Y=F(H,xe,!0,w,Ee);return X(H,xe,Y),Y})}function V(G,le){const ee=M(G,le);return ee?Promise.reject(ee):Promise.resolve()}function S(G){const le=de.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(G):G()}function A(G,le){let ee;const[xe,Ee,g]=c_(G,le);ee=ia(xe.reverse(),"beforeRouteLeave",G,le);for(const L of xe)L.leaveGuards.forEach(H=>{ee.push(pi(H,G,le))});const w=V.bind(null,G,le);return ee.push(w),ye(ee).then(()=>{ee=[];for(const L of s.list())ee.push(pi(L,G,le));return ee.push(w),ye(ee)}).then(()=>{ee=ia(Ee,"beforeRouteUpdate",G,le);for(const L of Ee)L.updateGuards.forEach(H=>{ee.push(pi(H,G,le))});return ee.push(w),ye(ee)}).then(()=>{ee=[];for(const L of g)if(L.beforeEnter)if(yn(L.beforeEnter))for(const H of L.beforeEnter)ee.push(pi(H,G,le));else ee.push(pi(L.beforeEnter,G,le));return ee.push(w),ye(ee)}).then(()=>(G.matched.forEach(L=>L.enterCallbacks={}),ee=ia(g,"beforeRouteEnter",G,le,S),ee.push(w),ye(ee))).then(()=>{ee=[];for(const L of a.list())ee.push(pi(L,G,le));return ee.push(w),ye(ee)}).catch(L=>zn(L,ct.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function X(G,le,ee){o.list().forEach(xe=>S(()=>xe(G,le,ee)))}function F(G,le,ee,xe,Ee){const g=M(G,le);if(g)return g;const w=le===oi,L=pr?history.state:{};ee&&(xe||w?r.replace(G.fullPath,Qe({scroll:w&&L&&L.scroll},Ee)):r.push(G.fullPath,Ee)),l.value=G,N(G,le,ee,w),ue()}let J;function D(){J||(J=r.listen((G,le,ee)=>{if(!pe.listening)return;const xe=d(G),Ee=P(xe,pe.currentRoute.value);if(Ee){C(Qe(Ee,{replace:!0,force:!0}),xe).catch(Jr);return}c=xe;const g=l.value;pr&&r_(Xc(g.fullPath,ee.delta),Po()),A(xe,g).catch(w=>zn(w,ct.NAVIGATION_ABORTED|ct.NAVIGATION_CANCELLED)?w:zn(w,ct.NAVIGATION_GUARD_REDIRECT)?(C(Qe(T(w.to),{force:!0}),xe).then(L=>{zn(L,ct.NAVIGATION_ABORTED|ct.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===Za.pop&&r.go(-1,!1)}).catch(Jr),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),oe(w,xe,g))).then(w=>{w=w||F(xe,g,!1),w&&(ee.delta&&!zn(w,ct.NAVIGATION_CANCELLED)?r.go(-ee.delta,!1):ee.type===Za.pop&&zn(w,ct.NAVIGATION_ABORTED|ct.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),X(xe,g,w)}).catch(Jr)}))}let $=Nr(),K=Nr(),z;function oe(G,le,ee){ue(G);const xe=K.list();return xe.length?xe.forEach(Ee=>Ee(G,le,ee)):console.error(G),Promise.reject(G)}function he(){return z&&l.value!==oi?Promise.resolve():new Promise((G,le)=>{$.add([G,le])})}function ue(G){return z||(z=!G,D(),$.list().forEach(([le,ee])=>G?ee(G):le()),$.reset()),G}function N(G,le,ee,xe){const{scrollBehavior:Ee}=t;if(!pr||!Ee)return Promise.resolve();const g=!ee&&s_(Xc(G.fullPath,0))||(xe||!ee)&&history.state&&history.state.scroll||null;return yl().then(()=>Ee(G,le,g)).then(w=>w&&i_(w)).catch(w=>oe(w,G,le))}const O=G=>r.go(G);let Q;const de=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:d,options:t,push:y,replace:R,go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:K.add,isReady:he,install(G){G.component("RouterLink",L_),G.component("RouterView",N_),G.config.globalProperties.$router=pe,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(l)}),pr&&!Q&&l.value===oi&&(Q=!0,y(r.location).catch(xe=>{}));const le={};for(const xe in oi)Object.defineProperty(le,xe,{get:()=>l.value[xe],enumerable:!0});G.provide(Co,pe),G.provide(Dl,Jf(le)),G.provide(ja,l);const ee=G.unmount;de.add(G),G.unmount=function(){de.delete(G),de.size<1&&(c=oi,J&&J(),J=null,l.value=oi,Q=!1,z=!1),ee()}}};function ye(G){return G.reduce((le,ee)=>le.then(()=>S(ee)),Promise.resolve())}return pe}const Nl=qh("rooms",()=>{const t=_n(n()),e=_n(null);function n(){try{return JSON.parse(localStorage.getItem("ar-rooms")??"[]")}catch{return[]}}function i(){localStorage.setItem("ar-rooms",JSON.stringify(t.value))}function r(o){const l={id:crypto.randomUUID(),name:o.trim()};return t.value.push(l),i(),l}function s(o){return t.value.find(l=>l.id===o)}function a(o){e.value=o}return{rooms:t,activeRoomId:e,createRoom:r,getRoomById:s,setActiveRoom:a}}),F_={class:"home"},B_={class:"create-room"},H_=["disabled"],z_={key:0,class:"room-list"},G_={class:"room-name"},V_=["onClick"],k_={key:1,class:"empty"},W_=hs({__name:"HomeView",setup(t){const e=Ul(),n=Nl(),i=_n("");function r(){const a=i.value.trim();if(!a)return;const o=n.createRoom(a);i.value="",e.push(`/rooms/${o.id}`)}function s(a){e.push(`/rooms/${a}`)}return(a,o)=>(at(),ut("div",F_,[o[1]||(o[1]=$e("h1",null,"Mes Pièces",-1)),$e("div",B_,[Up($e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>i.value=l),placeholder:"Nom de la pièce",onKeyup:vg(r,["enter"]),maxlength:"50"},null,544),[[gg,i.value]]),$e("button",{onClick:r,disabled:!i.value.trim()},"Créer",8,H_)]),nn(n).rooms.length>0?(at(),ut("div",z_,[(at(!0),ut(Wt,null,Al(nn(n).rooms,l=>(at(),ut("div",{key:l.id,class:"room-item"},[$e("span",G_,Jt(l.name),1),$e("button",{onClick:c=>s(l.id)},"Ouvrir",8,V_)]))),128))])):(at(),ut("p",k_,"Aucune pièce. Créez-en une pour commencer."))]))}}),Lo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},X_=Lo(W_,[["__scopeId","data-v-1eed523f"]]),od=qh("points",()=>{const t=_n({});function e(s){return t.value[s]??[]}function n(s,a,o=!1){const l={id:crypto.randomUUID(),createdAt:Date.now(),pose:a,anchorSupported:o};return t.value[s]||(t.value[s]=[]),t.value[s].push(l),l}function i(s,a){t.value[s]&&(t.value[s]=t.value[s].filter(o=>o.id!==a))}function r(s){t.value[s]=[]}return{pointsByRoom:t,getPoints:e,addPoint:n,removePoint:i,clearPoints:r}}),q_={key:0,class:"room-page"},$_={class:"room-header"},Y_={class:"points-section"},j_={class:"points-header"},K_={key:0,class:"empty"},Z_={key:1,class:"point-list"},J_={class:"point-info"},Q_={class:"point-coords"},ev=["onClick"],tv=hs({__name:"RoomView",setup(t){const e=jh(),n=Ul(),i=Nl(),r=od(),s=Tt(()=>e.params.id),a=Tt(()=>i.getRoomById(s.value)),o=Tt(()=>r.getPoints(s.value));To(()=>{a.value||n.replace("/")});function l(){n.push(`/rooms/${s.value}/ar`)}function c(f){r.removePoint(s.value,f)}function u(){r.clearPoints(s.value)}return(f,h)=>a.value?(at(),ut("div",q_,[$e("header",$_,[$e("button",{class:"back-btn",onClick:h[0]||(h[0]=p=>nn(n).push("/"))},"← Retour"),$e("h1",null,Jt(a.value.name),1)]),$e("button",{class:"ar-btn",onClick:l},"▶ Démarrer AR"),$e("section",Y_,[$e("div",j_,[$e("h2",null,"Points ("+Jt(o.value.length)+")",1),o.value.length>0?(at(),ut("button",{key:0,class:"danger-btn",onClick:u}," Supprimer tout ")):mr("",!0)]),o.value.length===0?(at(),ut("div",K_," Aucun point. Lancez une session AR pour en placer. ")):(at(),ut("ul",Z_,[(at(!0),ut(Wt,null,Al(o.value,p=>(at(),ut("li",{key:p.id,class:"point-item"},[$e("div",J_,[h[1]||(h[1]=$e("span",{class:"point-label"},"Point",-1)),$e("span",Q_," x="+Jt(p.pose.position.x.toFixed(2))+" y="+Jt(p.pose.position.y.toFixed(2))+" z="+Jt(p.pose.position.z.toFixed(2)),1)]),$e("button",{class:"danger-btn small",onClick:v=>c(p.id)},"Supprimer",8,ev)]))),128))]))])])):mr("",!0)}}),nv=Lo(tv,[["__scopeId","data-v-bf494531"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="158",iv=0,iu=1,rv=2,ad=1,sv=2,qn=3,Mi=0,$t=1,Dn=2,_i=0,Sr=1,ru=2,su=3,ou=4,ov=5,Fi=100,av=101,lv=102,au=103,lu=104,cv=200,uv=201,fv=202,hv=203,Qa=204,el=205,dv=206,pv=207,mv=208,gv=209,_v=210,vv=211,xv=212,Sv=213,Mv=214,Ev=0,yv=1,Tv=2,ao=3,bv=4,Av=5,Rv=6,wv=7,ld=0,Cv=1,Pv=2,vi=0,Lv=1,Dv=2,Uv=3,Iv=4,Nv=5,cd=300,br=301,Ar=302,tl=303,nl=304,Do=306,il=1e3,vn=1001,rl=1002,Bt=1003,cu=1004,ra=1005,cn=1006,Ov=1007,as=1008,xi=1009,Fv=1010,Bv=1011,Fl=1012,ud=1013,mi=1014,gi=1015,ls=1016,fd=1017,hd=1018,Vi=1020,Hv=1021,xn=1023,zv=1024,Gv=1025,ki=1026,Rr=1027,Vv=1028,dd=1029,kv=1030,pd=1031,md=1033,sa=33776,oa=33777,aa=33778,la=33779,uu=35840,fu=35841,hu=35842,du=35843,Wv=36196,pu=37492,mu=37496,gu=37808,_u=37809,vu=37810,xu=37811,Su=37812,Mu=37813,Eu=37814,yu=37815,Tu=37816,bu=37817,Au=37818,Ru=37819,wu=37820,Cu=37821,ca=36492,Pu=36494,Lu=36495,Xv=36283,Du=36284,Uu=36285,Iu=36286,gd=3e3,Wi=3001,qv=3200,$v=3201,_d=0,Yv=1,fn="",At="srgb",ni="srgb-linear",Bl="display-p3",Uo="display-p3-linear",lo="linear",ot="srgb",co="rec709",uo="p3",Ki=7680,Nu=519,jv=512,Kv=513,Zv=514,Jv=515,Qv=516,e0=517,t0=518,n0=519,Ou=35044,Fu="300 es",sl=1035,Zn=2e3,fo=2001;class Cr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,ol=180/Math.PI;function ps(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[t&255]+Rt[t>>8&255]+Rt[t>>16&255]+Rt[t>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[n&63|128]+Rt[n>>8&255]+"-"+Rt[n>>16&255]+Rt[n>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function i0(t,e){return(t%e+e)%e}function fa(t,e,n){return(1-n)*t+n*e}function Bu(t){return(t&t-1)===0&&t!==0}function al(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Or(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],d=r[6],T=r[1],M=r[4],y=r[7],R=r[2],P=r[5],C=r[8];return s[0]=a*_+o*T+l*R,s[3]=a*m+o*M+l*P,s[6]=a*d+o*y+l*C,s[1]=c*_+u*T+f*R,s[4]=c*m+u*M+f*P,s[7]=c*d+u*y+f*C,s[2]=h*_+p*T+v*R,s[5]=h*m+p*M+v*P,s[8]=h*d+p*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ha.makeScale(e,n)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,n){return this.premultiply(ha.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new We;function vd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ho(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function r0(){const t=ho("canvas");return t.style.display="block",t}const Hu={};function Qr(t){t in Hu||(Hu[t]=!0,console.warn(t))}const zu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[ni]:{transfer:lo,primaries:co,toReference:t=>t,fromReference:t=>t},[At]:{transfer:ot,primaries:co,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uo]:{transfer:lo,primaries:uo,toReference:t=>t.applyMatrix3(Gu),fromReference:t=>t.applyMatrix3(zu)},[Bl]:{transfer:ot,primaries:uo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gu),fromReference:t=>t.applyMatrix3(zu).convertLinearToSRGB()}},s0=new Set([ni,Uo]),nt={enabled:!0,_workingColorSpace:ni,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!s0.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ys[e].toReference,r=ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ys[t].primaries},getTransfer:function(t){return t===fn?lo:ys[t].transfer}};function Mr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function da(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zi;class xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=ho("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ho("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mr(n[i]/255)*255):n[i]=Mr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pa(r[a].image)):s.push(pa(r[a]))}else s=pa(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class rn extends Cr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=vn,r=vn,s=cn,a=as,o=xn,l=xi,c=rn.DEFAULT_ANISOTROPY,u=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ps(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wi?At:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Wi:gd}set encoding(e){Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?At:fn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=cd;rn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,y=(p+1)/2,R=(d+1)/2,P=(u+h)/4,C=(f+_)/4,V=(v+m)/4;return M>y&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=P/i,s=C/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=V/s),this.set(i,r,s,n),this}let T=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends Cr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wi?At:fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends l0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Md extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==h||c!==p||u!==v){let m=1-o;const d=l*h+c*p+u*v+f*_,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const R=Math.sqrt(M),P=Math.atan2(R,d*T);m=Math.sin(m*P)/R,o=Math.sin(o*P)/R}const y=o*T;if(l=l*m+h*y,c=c*m+p*y,u=u*m+v*y,f=f*m+_*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*f+l*p-c*h,e[n+1]=l*v+u*h+c*f-o*p,e[n+2]=c*v+u*p+o*h-l*f,e[n+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new W,Vu=new qi;class ms{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),bs.subVectors(this.max,Fr),Ji.subVectors(e.a,Fr),Qi.subVectors(e.b,Fr),er.subVectors(e.c,Fr),ai.subVectors(Qi,Ji),li.subVectors(er,Qi),Ci.subVectors(Ji,er);let n=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ci.z,Ci.y,ai.z,0,-ai.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!ga(n,Ji,Qi,er,bs)||(n=[1,0,0,0,1,0,0,0,1],!ga(n,Ji,Qi,er,bs))?!1:(As.crossVectors(ai,li),n=[As.x,As.y,As.z],ga(n,Ji,Qi,er,bs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new W,new W,new W,new W,new W,new W,new W,new W],dn=new W,Ts=new ms,Ji=new W,Qi=new W,er=new W,ai=new W,li=new W,Ci=new W,Fr=new W,bs=new W,As=new W,Pi=new W;function ga(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pi.fromArray(t,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=n.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const u0=new ms,Br=new W,_a=new W;class Hl{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):u0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const n=Br.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(_a)),this.expandByPoint(Br.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new W,va=new W,Rs=new W,ci=new W,xa=new W,ws=new W,Sa=new W;class f0{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){va.copy(e).add(n).multiplyScalar(.5),Rs.copy(n).sub(e).normalize(),ci.copy(this.origin).sub(va);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Rs),o=ci.dot(this.direction),l=-ci.dot(Rs),c=ci.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(va).addScaledVector(Rs,h),p}intersectSphere(e,n){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,n,i,r,s){xa.subVectors(n,e),ws.subVectors(i,e),Sa.crossVectors(xa,ws);let a=this.direction.dot(Sa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(ws.crossVectors(ci,ws));if(l<0)return null;const c=o*this.direction.dot(xa.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(Sa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,a,o,l,c,u,f,h,p,v,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,p,v,_,m)}set(e,n,i,r,s,a,o,l,c,u,f,h,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,_=c*f;n[0]=h+_*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,_=c*f;n[0]=h-_*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,_=o*f;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=_-h*f,n[8]=v*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+v,n[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+_,n[5]=a*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,d0)}lookAt(e,n,i){const r=this.elements;return Kt.subVectors(e,n),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ui.crossVectors(i,Kt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ui.crossVectors(i,Kt)),ui.normalize(),Cs.crossVectors(Kt,ui),r[0]=ui.x,r[4]=Cs.x,r[8]=Kt.x,r[1]=ui.y,r[5]=Cs.y,r[9]=Kt.y,r[2]=ui.z,r[6]=Cs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],T=i[3],M=i[7],y=i[11],R=i[15],P=r[0],C=r[4],V=r[8],S=r[12],A=r[1],X=r[5],F=r[9],J=r[13],D=r[2],$=r[6],K=r[10],z=r[14],oe=r[3],he=r[7],ue=r[11],N=r[15];return s[0]=a*P+o*A+l*D+c*oe,s[4]=a*C+o*X+l*$+c*he,s[8]=a*V+o*F+l*K+c*ue,s[12]=a*S+o*J+l*z+c*N,s[1]=u*P+f*A+h*D+p*oe,s[5]=u*C+f*X+h*$+p*he,s[9]=u*V+f*F+h*K+p*ue,s[13]=u*S+f*J+h*z+p*N,s[2]=v*P+_*A+m*D+d*oe,s[6]=v*C+_*X+m*$+d*he,s[10]=v*V+_*F+m*K+d*ue,s[14]=v*S+_*J+m*z+d*N,s[3]=T*P+M*A+y*D+R*oe,s[7]=T*C+M*X+y*$+R*he,s[11]=T*V+M*F+y*K+R*ue,s[15]=T*S+M*J+y*z+R*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+_*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],T=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,M=v*h*c-u*m*c-v*l*p+a*m*p+u*l*d-a*h*d,y=u*_*c-v*f*c+v*o*p-a*_*p-u*o*d+a*f*d,R=v*f*l-u*_*l-v*o*h+a*_*h+u*o*m-a*f*m,P=n*T+i*M+r*y+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=T*C,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*C,e[4]=M*C,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*d+n*h*d)*C,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*d-n*l*d)*C,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*C,e[8]=y*C,e[9]=(v*f*s-u*_*s-v*i*p+n*_*p+u*i*d-n*f*d)*C,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*d+n*o*d)*C,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*C,e[12]=R*C,e[13]=(u*_*r-v*f*r+v*i*h-n*_*h-u*i*m+n*f*m)*C,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*C,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,_=a*u,m=a*f,d=o*f,T=l*c,M=l*u,y=l*f,R=i.x,P=i.y,C=i.z;return r[0]=(1-(_+d))*R,r[1]=(p+y)*R,r[2]=(v-M)*R,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(h+d))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(v+M)*C,r[9]=(m-T)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const a=tr.set(r[4],r[5],r[6]).length(),o=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/a,f=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,n.setFromRotationMatrix(pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Zn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(o===Zn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===fo)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Zn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*u;let v,_;if(o===Zn)v=(a+s)*f,_=-2*f;else if(o===fo)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const tr=new W,pn=new dt,h0=new W(0,0,0),d0=new W(1,1,1),ui=new W,Cs=new W,Kt=new W,ku=new dt,Wu=new qi;class Io{constructor(e=0,n=0,i=0,r=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const Xu=new W,nr=new qi,kn=new dt,Ps=new W,Hr=new W,m0=new W,g0=new qi,qu=new W(1,0,0),$u=new W(0,1,0),Yu=new W(0,0,1),_0={type:"added"},v0={type:"removed"};class Dt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new W,n=new Io,i=new qi,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return nr.setFromAxisAngle(e,n),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,n){return nr.setFromAxisAngle(e,n),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,n){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ps.copy(e):Ps.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Hr,Ps,this.up):kn.lookAt(Ps,Hr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(kn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(v0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new W(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new W,Wn=new W,Ma=new W,Xn=new W,ir=new W,rr=new W,ju=new W,Ea=new W,ya=new W,Ta=new W;let Ls=!1;class gn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mn.subVectors(e,n),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mn.subVectors(r,n),Wn.subVectors(i,n),Ma.subVectors(e,n);const a=mn.dot(mn),o=mn.dot(Wn),l=mn.dot(Ma),c=Wn.dot(Wn),u=Wn.dot(Ma),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xn),Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,n,i,r,s,a,o,l){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Xn),l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l}static isFrontFacing(e,n,i,r){return mn.subVectors(i,n),Wn.subVectors(e,n),mn.cross(Wn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ir.subVectors(r,i),rr.subVectors(s,i),Ea.subVectors(e,i);const l=ir.dot(Ea),c=rr.dot(Ea);if(l<=0&&c<=0)return n.copy(i);ya.subVectors(e,r);const u=ir.dot(ya),f=rr.dot(ya);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(ir,a);Ta.subVectors(e,s);const p=ir.dot(Ta),v=rr.dot(Ta);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(rr,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return ju.subVectors(s,r),o=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(ju,o);const d=1/(m+_+h);return a=_*d,o=h*d,n.copy(i).addScaledVector(ir,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function ba(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=i0(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ba(a,s,e+1/3),this.g=ba(a,s,e),this.b=ba(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=At){const i=yd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return nt.fromWorkingColorSpace(wt.copy(this),e),Math.round(Xt(wt.r*255,0,255))*65536+Math.round(Xt(wt.g*255,0,255))*256+Math.round(Xt(wt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(wt.copy(this),n);const i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(wt.copy(this),n),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=At){nt.fromWorkingColorSpace(wt.copy(this),e);const n=wt.r,i=wt.g,r=wt.b;return e!==At?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+n,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(Ds);const i=fa(fi.h,Ds.h,n),r=fa(fi.s,Ds.s,n),s=fa(fi.l,Ds.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ze;Ze.NAMES=yd;let x0=0;class gs extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Sr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zl extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new W,Us=new Je;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ou,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Us.fromBufferAttribute(this,n),Us.applyMatrix3(e),this.setXY(n,Us.x,Us.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Or(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Or(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Or(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Or(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ou&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Td extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bd extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let S0=0;const ln=new dt,Aa=new Dt,sr=new W,Zt=new ms,zr=new ms,yt=new W;class ri extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?bd:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,n,i){return ln.makeTranslation(e,n,i),this.applyMatrix4(ln),this}scale(e,n,i){return ln.makeScale(e,n,i),this.applyMatrix4(ln),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Zt.min,zr.min),Zt.expandByPoint(yt),yt.addVectors(Zt.max,zr.max),Zt.expandByPoint(yt)):(Zt.expandByPoint(zr.min),Zt.expandByPoint(zr.max))}Zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),yt.add(sr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new W,u[A]=new W;const f=new W,h=new W,p=new W,v=new Je,_=new Je,m=new Je,d=new W,T=new W;function M(A,X,F){f.fromArray(r,A*3),h.fromArray(r,X*3),p.fromArray(r,F*3),v.fromArray(a,A*2),_.fromArray(a,X*2),m.fromArray(a,F*2),h.sub(f),p.sub(f),_.sub(v),m.sub(v);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(J),T.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(J),c[A].add(d),c[X].add(d),c[F].add(d),u[A].add(T),u[X].add(T),u[F].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,X=y.length;A<X;++A){const F=y[A],J=F.start,D=F.count;for(let $=J,K=J+D;$<K;$+=3)M(i[$+0],i[$+1],i[$+2])}const R=new W,P=new W,C=new W,V=new W;function S(A){C.fromArray(s,A*3),V.copy(C);const X=c[A];R.copy(X),R.sub(C.multiplyScalar(C.dot(X))).normalize(),P.crossVectors(V,X);const J=P.dot(u[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=J}for(let A=0,X=y.length;A<X;++A){const F=y[A],J=F.start,D=F.count;for(let $=J,K=J+D;$<K;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new dt,Li=new f0,Is=new Hl,Zu=new W,or=new W,ar=new W,lr=new W,Ra=new W,Ns=new W,Os=new Je,Fs=new Je,Bs=new Je,Ju=new W,Qu=new W,ef=new W,Hs=new W,zs=new W;class Un extends Dt{constructor(e=new ri,n=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ra.fromBufferAttribute(f,e),a?Ns.addScaledVector(Ra,u):Ns.addScaledVector(Ra.sub(n),u))}n.add(Ns)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Is.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Is,Zu)===null||Li.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Ku.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Li)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],T=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,R=M;y<R;y+=3){const P=o.getX(y),C=o.getX(y+1),V=o.getX(y+2);r=Gs(this,d,e,i,c,u,f,P,C,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const T=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);r=Gs(this,a,e,i,c,u,f,T,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],T=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,R=M;y<R;y+=3){const P=y,C=y+1,V=y+2;r=Gs(this,d,e,i,c,u,f,P,C,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const T=m,M=m+1,y=m+2;r=Gs(this,a,e,i,c,u,f,T,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function M0(t,e,n,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Mi,o),l===null)return null;zs.copy(o),zs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zs);return c<n.near||c>n.far?null:{distance:c,point:zs.clone(),object:t}}function Gs(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,or),t.getVertexPosition(l,ar),t.getVertexPosition(c,lr);const u=M0(t,e,n,i,or,ar,lr,Hs);if(u){r&&(Os.fromBufferAttribute(r,o),Fs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),u.uv=gn.getInterpolation(Hs,or,ar,lr,Os,Fs,Bs,new Je)),s&&(Os.fromBufferAttribute(s,o),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,c),u.uv1=gn.getInterpolation(Hs,or,ar,lr,Os,Fs,Bs,new Je),u.uv2=u.uv1),a&&(Ju.fromBufferAttribute(a,o),Qu.fromBufferAttribute(a,l),ef.fromBufferAttribute(a,c),u.normal=gn.getInterpolation(Hs,or,ar,lr,Ju,Qu,ef,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};gn.getNormal(or,ar,lr,f.normal),u.face=f}return u}class _s extends ri{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function v(_,m,d,T,M,y,R,P,C,V,S){const A=y/C,X=R/V,F=y/2,J=R/2,D=P/2,$=C+1,K=V+1;let z=0,oe=0;const he=new W;for(let ue=0;ue<K;ue++){const N=ue*X-J;for(let O=0;O<$;O++){const Q=O*A-F;he[_]=Q*T,he[m]=N*M,he[d]=D,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[d]=P>0?1:-1,u.push(he.x,he.y,he.z),f.push(O/C),f.push(1-ue/V),z+=1}}for(let ue=0;ue<V;ue++)for(let N=0;N<C;N++){const O=h+N+$*ue,Q=h+N+$*(ue+1),de=h+(N+1)+$*(ue+1),pe=h+(N+1)+$*ue;l.push(O,Q,pe),l.push(Q,de,pe),oe+=6}o.addGroup(p,oe,S),p+=oe,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=wr(t[n]);for(const r in i)e[r]=i[r]}return e}function E0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ad(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const y0={clone:wr,merge:Ot};var T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Zn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Rd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cr=-90,ur=1;class A0 extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(cr,ur,e,n);r.layers=this.layers,this.add(r);const s=new un(cr,ur,e,n);s.layers=this.layers,this.add(s);const a=new un(cr,ur,e,n);a.layers=this.layers,this.add(a);const o=new un(cr,ur,e,n);o.layers=this.layers,this.add(o);const l=new un(cr,ur,e,n);l.layers=this.layers,this.add(l);const c=new un(cr,ur,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wd extends rn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:br,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R0 extends Xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?At:fn),this.texture=new wd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _s(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:_i});s.uniforms.tEquirect.value=n;const a=new Un(r,s),o=n.minFilter;return n.minFilter===as&&(n.minFilter=cn),new A0(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const wa=new W,w0=new W,C0=new We;class Ii{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wa.subVectors(i,n).cross(w0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||C0.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Hl,Vs=new W;class Gl{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],_=r[10],m=r[11],d=r[12],T=r[13],M=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+a,h+u,m+v,y+T).normalize(),i[3].setComponents(l-a,h-u,m-v,y-T).normalize(),i[4].setComponents(l-o,h-f,m-_,y-M).normalize(),n===Zn)i[5].setComponents(l+o,h+f,m+_,y+M).normalize();else if(n===fo)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function P0(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Vl extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*h-a;for(let M=0;M<c;M++){const y=M*f-s;v.push(y,-T,0),_.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const M=T+c*d,y=T+c*(d+1),R=T+1+c*(d+1),P=T+1+c*d;p.push(M,y,P),p.push(y,R,P)}this.setIndex(p),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`
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
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
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
#endif`,wx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,yS=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,OS=`#define DISTANCE
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
}`,FS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,kS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,YS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,JS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,eM=`#define TOON
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
}`,tM=`#define TOON
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
}`,nM=`uniform float size;
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,sM=`uniform vec3 color;
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
}`,oM=`uniform float rotation;
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
}`,aM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:L0,alphahash_pars_fragment:D0,alphamap_fragment:U0,alphamap_pars_fragment:I0,alphatest_fragment:N0,alphatest_pars_fragment:O0,aomap_fragment:F0,aomap_pars_fragment:B0,begin_vertex:H0,beginnormal_vertex:z0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:k0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:$0,color_fragment:Y0,color_pars_fragment:j0,color_pars_vertex:K0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Ex,envmap_vertex:fx,fog_vertex:hx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_fragment:_x,lightmap_pars_fragment:vx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Mx,lights_toon_fragment:yx,lights_toon_pars_fragment:Tx,lights_phong_fragment:bx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Rx,lights_physical_pars_fragment:wx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:Lx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Nx,map_fragment:Ox,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:Hx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Gx,morphcolor_vertex:Vx,morphnormal_vertex:kx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:$x,normal_pars_fragment:Yx,normal_pars_vertex:jx,normal_vertex:Kx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:fS,shadowmap_vertex:hS,shadowmask_pars_fragment:dS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:_S,specularmap_fragment:vS,specularmap_pars_fragment:xS,tonemapping_fragment:SS,tonemapping_pars_fragment:MS,transmission_fragment:ES,transmission_pars_fragment:yS,uv_pars_fragment:TS,uv_pars_vertex:bS,uv_vertex:AS,worldpos_vertex:RS,background_vert:wS,background_frag:CS,backgroundCube_vert:PS,backgroundCube_frag:LS,cube_vert:DS,cube_frag:US,depth_vert:IS,depth_frag:NS,distanceRGBA_vert:OS,distanceRGBA_frag:FS,equirect_vert:BS,equirect_frag:HS,linedashed_vert:zS,linedashed_frag:GS,meshbasic_vert:VS,meshbasic_frag:kS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:YS,meshnormal_frag:jS,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:oM,sprite_frag:aM},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Pn={basic:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ot([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ot([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ot([Me.points,Me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ot([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ot([Me.common,Me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ot([Me.sprite,Me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ot([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ot([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pn.physical={uniforms:Ot([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ks={r:0,b:0,g:0};function lM(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let T=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?n:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),T=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Do)?(u===void 0&&(u=new Un(new _s(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:wr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,(f!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Un(new Vl(2,2),new $i({name:"BackgroundMaterial",uniforms:wr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ks,Ad(t)),i.buffers.color.setClear(ks.r,ks.g,ks.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:v}}function cM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(D,$,K,z,oe){let he=!1;if(a){const ue=_(z,K,$);c!==ue&&(c=ue,p(c.object)),he=d(D,z,K,oe),he&&T(D,z,K,oe)}else{const ue=$.wireframe===!0;(c.geometry!==z.id||c.program!==K.id||c.wireframe!==ue)&&(c.geometry=z.id,c.program=K.id,c.wireframe=ue,he=!0)}oe!==null&&n.update(oe,t.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,V(D,$,K,z),oe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(oe).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,$,K){const z=K.wireframe===!0;let oe=o[D.id];oe===void 0&&(oe={},o[D.id]=oe);let he=oe[$.id];he===void 0&&(he={},oe[$.id]=he);let ue=he[z];return ue===void 0&&(ue=m(h()),he[z]=ue),ue}function m(D){const $=[],K=[],z=[];for(let oe=0;oe<r;oe++)$[oe]=0,K[oe]=0,z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:K,attributeDivisors:z,object:D,attributes:{},index:null}}function d(D,$,K,z){const oe=c.attributes,he=$.attributes;let ue=0;const N=K.getAttributes();for(const O in N)if(N[O].location>=0){const de=oe[O];let pe=he[O];if(pe===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;ue++}return c.attributesNum!==ue||c.index!==z}function T(D,$,K,z){const oe={},he=$.attributes;let ue=0;const N=K.getAttributes();for(const O in N)if(N[O].location>=0){let de=he[O];de===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),oe[O]=pe,ue++}c.attributes=oe,c.attributesNum=ue,c.index=z}function M(){const D=c.newAttributes;for(let $=0,K=D.length;$<K;$++)D[$]=0}function y(D){R(D,0)}function R(D,$){const K=c.newAttributes,z=c.enabledAttributes,oe=c.attributeDivisors;K[D]=1,z[D]===0&&(t.enableVertexAttribArray(D),z[D]=1),oe[D]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,$),oe[D]=$)}function P(){const D=c.newAttributes,$=c.enabledAttributes;for(let K=0,z=$.length;K<z;K++)$[K]!==D[K]&&(t.disableVertexAttribArray(K),$[K]=0)}function C(D,$,K,z,oe,he,ue){ue===!0?t.vertexAttribIPointer(D,$,K,oe,he):t.vertexAttribPointer(D,$,K,z,oe,he)}function V(D,$,K,z){if(i.isWebGL2===!1&&(D.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const oe=z.attributes,he=K.getAttributes(),ue=$.defaultAttributeValues;for(const N in he){const O=he[N];if(O.location>=0){let Q=oe[N];if(Q===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const de=Q.normalized,pe=Q.itemSize,ye=n.get(Q);if(ye===void 0)continue;const G=ye.buffer,le=ye.type,ee=ye.bytesPerElement,xe=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||Q.gpuType===ud);if(Q.isInterleavedBufferAttribute){const Ee=Q.data,g=Ee.stride,w=Q.offset;if(Ee.isInstancedInterleavedBuffer){for(let L=0;L<O.locationSize;L++)R(O.location+L,Ee.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let L=0;L<O.locationSize;L++)y(O.location+L);t.bindBuffer(t.ARRAY_BUFFER,G);for(let L=0;L<O.locationSize;L++)C(O.location+L,pe/O.locationSize,le,de,g*ee,(w+pe/O.locationSize*L)*ee,xe)}else{if(Q.isInstancedBufferAttribute){for(let Ee=0;Ee<O.locationSize;Ee++)R(O.location+Ee,Q.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)y(O.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,G);for(let Ee=0;Ee<O.locationSize;Ee++)C(O.location+Ee,pe/O.locationSize,le,de,pe*ee,pe/O.locationSize*Ee*ee,xe)}}else if(ue!==void 0){const de=ue[N];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(O.location,de);break;case 3:t.vertexAttrib3fv(O.location,de);break;case 4:t.vertexAttrib4fv(O.location,de);break;default:t.vertexAttrib1fv(O.location,de)}}}}P()}function S(){F();for(const D in o){const $=o[D];for(const K in $){const z=$[K];for(const oe in z)v(z[oe].object),delete z[oe];delete $[K]}delete o[D]}}function A(D){if(o[D.id]===void 0)return;const $=o[D.id];for(const K in $){const z=$[K];for(const oe in z)v(z[oe].object),delete z[oe];delete $[K]}delete o[D.id]}function X(D){for(const $ in o){const K=o[$];if(K[D.id]===void 0)continue;const z=K[D.id];for(const oe in z)v(z[oe].object),delete z[oe];delete K[D.id]}}function F(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:y,disableUnusedAttributes:P}}function uM(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),n.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function fM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,y=a||e.has("OES_texture_float"),R=M&&y,P=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:P}}function hM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ii,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,M=T*4;let y=d.clippingState||null;l.value=y,y=u(v,h,M,p);for(let R=0;R!==M;++R)y[R]=n[R];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=p+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==_;++M,y+=4)a.copy(f[M]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dM(t){let e=new WeakMap;function n(a,o){return o===tl?a.mapping=br:o===nl&&(a.mapping=Ar),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===tl||o===nl)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new R0(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pd extends Rd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gr=4,tf=[.125,.215,.35,.446,.526,.582],Bi=20,Ca=new Pd,nf=new Ze;let Pa=null,La=0,Da=0;const Ni=(1+Math.sqrt(5))/2,fr=1/Ni,rf=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ni,fr),new W(0,Ni,-fr),new W(fr,0,Ni),new W(-fr,0,Ni),new W(Ni,fr,0),new W(-Ni,fr,0)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Da),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ls,format:xn,colorSpace:ni,depthBuffer:!1},r=of(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(s)),this._blurMaterial=mM(s,e,n)}return r}_compileMaterial(e){const n=new Un(this._lodPlanes[0],e);this._renderer.compile(n,Ca)}_sceneToCubeUV(e,n,i,r){const o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(nf),u.toneMapping=vi,u.autoClear=!1;const p=new zl({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),v=new Un(new _s,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(nf),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const M=this._cubeSize;Ws(r,T*M,d>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===br||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ca)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rf[(r-1)%rf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const d=[];let T=0;for(let C=0;C<Bi;++C){const V=C/_,S=Math.exp(-V*V/2);d.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;const y=this._sizeLods[r],R=3*y*(r>M-gr?r-M+gr:0),P=4*(this._cubeSize-y);Ws(n,R,P,3*y,2*y),l.setRenderTarget(n),l.render(f,Ca)}}function pM(t){const e=[],n=[],i=[];let r=t;const s=t-gr+1+tf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-gr?l=tf[a-t+gr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,_=3,m=2,d=1,T=new Float32Array(_*v*p),M=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,V=P>2?0:-1,S=[C,V,0,C+2/3,V,0,C+2/3,V+1,0,C,V,0,C+2/3,V+1,0,C,V+1,0];T.set(S,_*v*P),M.set(h,m*v*P);const A=[P,P,P,P,P,P];y.set(A,d*v*P)}const R=new ri;R.setAttribute("position",new Nn(T,_)),R.setAttribute("uv",new Nn(M,m)),R.setAttribute("faceIndex",new Nn(y,d)),e.push(R),r>gr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function of(t,e,n){const i=new Xi(t,e,n);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mM(t,e,n){const i=new Float32Array(Bi),r=new W(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function af(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function lf(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function gM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===tl||l===nl,u=l===br||l===Ar;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new sf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new sf(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _M(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vM(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const _=p[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let M=0,y=T.length;M<y;M+=3){const R=T[M+0],P=T[M+1],C=T[M+2];h.push(R,P,P,C,C,R)}}else if(v!==void 0){const T=v.array;_=v.version;for(let M=0,y=T.length/3-1;M<y;M+=3){const R=M+0,P=M+1,C=M+2;h.push(R,P,P,C,C,R)}}else return;const m=new(vd(h)?bd:Td)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xM(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,o,h*l),n.update(p,s,1)}function f(h,p,v){if(v===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,h*l,v),n.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function SM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MM(t,e){return t[0]-e[0]}function EM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function yM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let $=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let S=0;M===!0&&(S=1),y===!0&&(S=2),R===!0&&(S=3);let A=u.attributes.position.count*S,X=1;A>e.maxTextureSize&&(X=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const F=new Float32Array(A*X*4*_),J=new Md(F,A,X,_);J.type=gi,J.needsUpdate=!0;const D=S*4;for(let K=0;K<_;K++){const z=P[K],oe=C[K],he=V[K],ue=A*X*4*K;for(let N=0;N<z.count;N++){const O=N*D;M===!0&&(a.fromBufferAttribute(z,N),F[ue+O+0]=a.x,F[ue+O+1]=a.y,F[ue+O+2]=a.z,F[ue+O+3]=0),y===!0&&(a.fromBufferAttribute(oe,N),F[ue+O+4]=a.x,F[ue+O+5]=a.y,F[ue+O+6]=a.z,F[ue+O+7]=0),R===!0&&(a.fromBufferAttribute(he,N),F[ue+O+8]=a.x,F[ue+O+9]=a.y,F[ue+O+10]=a.z,F[ue+O+11]=he.itemSize===4?a.w:1)}}m={count:_,texture:J,size:new Je(A,X)},s.set(u,m),u.addEventListener("dispose",$)}let d=0;for(let M=0;M<h.length;M++)d+=h[M];const T=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",T),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let y=0;y<v;y++)_[y]=[y,0];i[u.id]=_}for(let y=0;y<v;y++){const R=_[y];R[0]=y,R[1]=h[y]}_.sort(EM);for(let y=0;y<8;y++)y<v&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(MM);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const R=o[y],P=R[0],C=R[1];P!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+y)!==m[P]&&u.setAttribute("morphTarget"+y,m[P]),d&&u.getAttribute("morphNormal"+y)!==d[P]&&u.setAttribute("morphNormal"+y,d[P]),r[y]=C,T+=C):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const M=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function TM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Ld=new rn,Dd=new Md,Ud=new c0,Id=new wd,cf=[],uf=[],ff=new Float32Array(16),hf=new Float32Array(9),df=new Float32Array(4);function Pr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cf[r];if(s===void 0&&(s=new Float32Array(r),cf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function No(t,e){let n=uf[e];n===void 0&&(n=new Int32Array(e),uf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function RM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function wM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function CM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;df.set(i),t.uniformMatrix2fv(this.addr,!1,df),Mt(n,i)}}function PM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;hf.set(i),t.uniformMatrix3fv(this.addr,!1,hf),Mt(n,i)}}function LM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;ff.set(i),t.uniformMatrix4fv(this.addr,!1,ff),Mt(n,i)}}function DM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function NM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function OM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function zM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ld,r)}function GM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ud,r)}function VM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Id,r)}function kM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dd,r)}function WM(t){switch(t){case 5126:return bM;case 35664:return AM;case 35665:return RM;case 35666:return wM;case 35674:return CM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return FM;case 36295:return BM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return kM}}function XM(t,e){t.uniform1fv(this.addr,e)}function qM(t,e){const n=Pr(e,this.size,2);t.uniform2fv(this.addr,n)}function $M(t,e){const n=Pr(e,this.size,3);t.uniform3fv(this.addr,n)}function YM(t,e){const n=Pr(e,this.size,4);t.uniform4fv(this.addr,n)}function jM(t,e){const n=Pr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KM(t,e){const n=Pr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZM(t,e){const n=Pr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JM(t,e){t.uniform1iv(this.addr,e)}function QM(t,e){t.uniform2iv(this.addr,e)}function eE(t,e){t.uniform3iv(this.addr,e)}function tE(t,e){t.uniform4iv(this.addr,e)}function nE(t,e){t.uniform1uiv(this.addr,e)}function iE(t,e){t.uniform2uiv(this.addr,e)}function rE(t,e){t.uniform3uiv(this.addr,e)}function sE(t,e){t.uniform4uiv(this.addr,e)}function oE(t,e,n){const i=this.cache,r=e.length,s=No(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ld,s[a])}function aE(t,e,n){const i=this.cache,r=e.length,s=No(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ud,s[a])}function lE(t,e,n){const i=this.cache,r=e.length,s=No(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Id,s[a])}function cE(t,e,n){const i=this.cache,r=e.length,s=No(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Dd,s[a])}function uE(t){switch(t){case 5126:return XM;case 35664:return qM;case 35665:return $M;case 35666:return YM;case 35674:return jM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}class fE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=WM(n.type)}}class hE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=uE(n.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function pf(t,e){t.seq.push(e),t.map[e.id]=e}function pE(t,e,n){const i=t.name,r=i.length;for(Ua.lastIndex=0;;){const s=Ua.exec(i),a=Ua.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pf(n,c===void 0?new fE(o,t,e):new hE(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new dE(o),pf(n,f)),n=f}}}class Ks{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);pE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function mf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mE=37297;let gE=0;function _E(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function vE(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===uo&&n===co?i="LinearDisplayP3ToLinearSRGB":e===co&&n===uo&&(i="LinearSRGBToLinearDisplayP3"),t){case ni:case Uo:return[i,"LinearTransferOETF"];case At:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function gf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_E(t.getShaderSource(e),a)}else return r}function xE(t,e){const n=vE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SE(t,e){let n;switch(e){case Lv:n="Linear";break;case Dv:n="Reinhard";break;case Uv:n="OptimizedCineon";break;case Iv:n="ACESFilmic";break;case Nv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ME(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function EE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Vr(t){return t!==""}function _f(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(t){return t.replace(TE,AE)}const bE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AE(t,e){let n=Ve[e];if(n===void 0){const i=bE.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ll(n)}const RE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(t){return t.replace(RE,wE)}function wE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function DE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Cv:e="ENVMAP_BLENDING_MIX";break;case Pv:e="ENVMAP_BLENDING_ADD";break}return e}function UE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=CE(n),c=PE(n),u=LE(n),f=DE(n),h=UE(n),p=n.isWebGL2?"":ME(n),v=EE(s),_=r.createProgram();let m,d,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(m=[Sf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[p,Sf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==vi?SE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,xE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vr).join(`
`)),a=ll(a),a=_f(a,n),a=vf(a,n),o=ll(o),o=_f(o,n),o=vf(o,n),a=xf(a),o=xf(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=T+m+a,y=T+d+o,R=mf(r,r.VERTEX_SHADER,M),P=mf(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(X){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),J=r.getShaderInfoLog(R).trim(),D=r.getShaderInfoLog(P).trim();let $=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,P);else{const z=gf(r,R,"vertex"),oe=gf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+z+`
`+oe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(J===""||D==="")&&(K=!1);K&&(X.diagnostics={runnable:$,programLog:F,vertexShader:{log:J,prefix:m},fragmentShader:{log:D,prefix:d}})}r.deleteShader(R),r.deleteShader(P),V=new Ks(r,_),S=yE(r,_)}let V;this.getUniforms=function(){return V===void 0&&C(this),V};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,mE)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=P,this}let NE=0;class OE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FE(e),n.set(e,i)),i}}class FE{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}}function BE(t,e,n,i,r,s,a){const o=new Ed,l=new OE,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,A,X,F,J){const D=F.fog,$=J.geometry,K=S.isMeshStandardMaterial?F.environment:null,z=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),oe=z&&z.mapping===Do?z.image.height:null,he=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,N=ue!==void 0?ue.length:0;let O=0;$.morphAttributes.position!==void 0&&(O=1),$.morphAttributes.normal!==void 0&&(O=2),$.morphAttributes.color!==void 0&&(O=3);let Q,de,pe,ye;if(he){const mt=Pn[he];Q=mt.vertexShader,de=mt.fragmentShader}else Q=S.vertexShader,de=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const G=t.getRenderTarget(),le=J.isInstancedMesh===!0,ee=!!S.map,xe=!!S.matcap,Ee=!!z,g=!!S.aoMap,w=!!S.lightMap,L=!!S.bumpMap,H=!!S.normalMap,k=!!S.displacementMap,Y=!!S.emissiveMap,ce=!!S.metalnessMap,se=!!S.roughnessMap,fe=S.anisotropy>0,ie=S.clearcoat>0,Ae=S.iridescence>0,E=S.sheen>0,x=S.transmission>0,I=fe&&!!S.anisotropyMap,te=ie&&!!S.clearcoatMap,ne=ie&&!!S.clearcoatNormalMap,ae=ie&&!!S.clearcoatRoughnessMap,Te=Ae&&!!S.iridescenceMap,me=Ae&&!!S.iridescenceThicknessMap,Se=E&&!!S.sheenColorMap,Ce=E&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,ge=!!S.specularColorMap,He=!!S.specularIntensityMap,Le=x&&!!S.transmissionMap,Ie=x&&!!S.thicknessMap,De=!!S.gradientMap,we=!!S.alphaMap,Ye=S.alphaTest>0,U=!!S.alphaHash,be=!!S.extensions,_e=!!$.attributes.uv1,re=!!$.attributes.uv2,ve=!!$.attributes.uv3;let Ne=vi;return S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ne=t.toneMapping),{isWebGL2:u,shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:de,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:le,instancingColor:le&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:G===null?t.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ni,map:ee,matcap:xe,envMap:Ee,envMapMode:Ee&&z.mapping,envMapCubeUVHeight:oe,aoMap:g,lightMap:w,bumpMap:L,normalMap:H,displacementMap:h&&k,emissiveMap:Y,normalMapObjectSpace:H&&S.normalMapType===Yv,normalMapTangentSpace:H&&S.normalMapType===_d,metalnessMap:ce,roughnessMap:se,anisotropy:fe,anisotropyMap:I,clearcoat:ie,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:Ae,iridescenceMap:Te,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:Xe,specularColorMap:ge,specularIntensityMap:He,transmission:x,transmissionMap:Le,thicknessMap:Ie,gradientMap:De,opaque:S.transparent===!1&&S.blending===Sr,alphaMap:we,alphaTest:Ye,alphaHash:U,combine:S.combine,mapUv:ee&&_(S.map.channel),aoMapUv:g&&_(S.aoMap.channel),lightMapUv:w&&_(S.lightMap.channel),bumpMapUv:L&&_(S.bumpMap.channel),normalMapUv:H&&_(S.normalMap.channel),displacementMapUv:k&&_(S.displacementMap.channel),emissiveMapUv:Y&&_(S.emissiveMap.channel),metalnessMapUv:ce&&_(S.metalnessMap.channel),roughnessMapUv:se&&_(S.roughnessMap.channel),anisotropyMapUv:I&&_(S.anisotropyMap.channel),clearcoatMapUv:te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:Xe&&_(S.specularMap.channel),specularColorMapUv:ge&&_(S.specularColorMap.channel),specularIntensityMapUv:He&&_(S.specularIntensityMap.channel),transmissionMapUv:Le&&_(S.transmissionMap.channel),thicknessMapUv:Ie&&_(S.thicknessMap.channel),alphaMapUv:we&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(H||fe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:re,vertexUv3s:ve,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(ee||we),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:be&&S.extensions.derivatives===!0,extensionFragDepth:be&&S.extensions.fragDepth===!0,extensionDrawBuffers:be&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)A.push(X),A.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(T(A,S),M(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function T(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function M(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const A=v[S.type];let X;if(A){const F=Pn[A];X=y0.clone(F.uniforms)}else X=S.uniforms;return X}function R(S,A){let X;for(let F=0,J=c.length;F<J;F++){const D=c[F];if(D.cacheKey===A){X=D,++X.usedTimes;break}}return X===void 0&&(X=new IE(t,A,S,s),c.push(X)),X}function P(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:V}}function HE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ef(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,v,_,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function o(f,h,p,v,_,m){const d=a(f,h,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,v,_,m){const d=a(f,h,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||zE),i.length>1&&i.sort(h||Mf),r.length>1&&r.sort(h||Mf)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function GE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ef,t.set(i,[a])):r>=s.length?(a=new Ef,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function VE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ze};break;case"SpotLight":n={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function kE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WE=0;function XE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qE(t,e){const n=new VE,i=kE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new dt,o=new dt;function l(u,f){let h=0,p=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,m=0,d=0,T=0,M=0,y=0,R=0,P=0,C=0,V=0,S=0;u.sort(XE);const A=f===!0?Math.PI:1;for(let F=0,J=u.length;F<J;F++){const D=u[F],$=D.color,K=D.intensity,z=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=$.r*K*A,p+=$.g*K*A,v+=$.b*K*A;else if(D.isLightProbe){for(let he=0;he<9;he++)r.probe[he].addScaledVector(D.sh.coefficients[he],K);S++}else if(D.isDirectionalLight){const he=n.get(D);if(he.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const ue=D.shadow,N=i.get(D);N.shadowBias=ue.bias,N.shadowNormalBias=ue.normalBias,N.shadowRadius=ue.radius,N.shadowMapSize=ue.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=oe,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=he,_++}else if(D.isSpotLight){const he=n.get(D);he.position.setFromMatrixPosition(D.matrixWorld),he.color.copy($).multiplyScalar(K*A),he.distance=z,he.coneCos=Math.cos(D.angle),he.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),he.decay=D.decay,r.spot[d]=he;const ue=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,ue.updateMatrices(D),D.castShadow&&V++),r.spotLightMatrix[d]=ue.matrix,D.castShadow){const N=i.get(D);N.shadowBias=ue.bias,N.shadowNormalBias=ue.normalBias,N.shadowRadius=ue.radius,N.shadowMapSize=ue.mapSize,r.spotShadow[d]=N,r.spotShadowMap[d]=oe,P++}d++}else if(D.isRectAreaLight){const he=n.get(D);he.color.copy($).multiplyScalar(K),he.halfWidth.set(D.width*.5,0,0),he.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=he,T++}else if(D.isPointLight){const he=n.get(D);if(he.color.copy(D.color).multiplyScalar(D.intensity*A),he.distance=D.distance,he.decay=D.decay,D.castShadow){const ue=D.shadow,N=i.get(D);N.shadowBias=ue.bias,N.shadowNormalBias=ue.normalBias,N.shadowRadius=ue.radius,N.shadowMapSize=ue.mapSize,N.shadowCameraNear=ue.camera.near,N.shadowCameraFar=ue.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=oe,r.pointShadowMatrix[m]=D.shadow.matrix,R++}r.point[m]=he,m++}else if(D.isHemisphereLight){const he=n.get(D);he.skyColor.copy(D.color).multiplyScalar(K*A),he.groundColor.copy(D.groundColor).multiplyScalar(K*A),r.hemi[M]=he,M++}}T>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==d||X.rectAreaLength!==T||X.hemiLength!==M||X.numDirectionalShadows!==y||X.numPointShadows!==R||X.numSpotShadows!==P||X.numSpotMaps!==C||X.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=T,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=S,X.directionalLength=_,X.pointLength=m,X.spotLength=d,X.rectAreaLength=T,X.hemiLength=M,X.numDirectionalShadows=y,X.numPointShadows=R,X.numSpotShadows=P,X.numSpotMaps=C,X.numLightProbes=S,r.version=WE++)}function c(u,f){let h=0,p=0,v=0,_=0,m=0;const d=f.matrixWorldInverse;for(let T=0,M=u.length;T<M;T++){const y=u[T];if(y.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),h++}else if(y.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function yf(t,e){const n=new qE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $E(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new yf(t,e),n.set(s,[l])):a>=o.length?(l=new yf(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YE extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`;function JE(t,e,n){let i=new Gl;const r=new Je,s=new Je,a=new bt,o=new YE({depthPacking:$v}),l=new jE,c={},u=n.maxTextureSize,f={[Mi]:$t,[$t]:Mi,[Dn]:Dn},h=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ri;v.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let d=this.type;this.render=function(R,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const V=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),X=t.state;X.setBlending(_i),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const F=d!==qn&&this.type===qn,J=d===qn&&this.type!==qn;for(let D=0,$=R.length;D<$;D++){const K=R[D],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const oe=z.getFrameExtents();if(r.multiply(oe),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,z.mapSize.y=s.y)),z.map===null||F===!0||J===!0){const ue=this.type!==qn?{minFilter:Bt,magFilter:Bt}:{};z.map!==null&&z.map.dispose(),z.map=new Xi(r.x,r.y,ue),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const he=z.getViewportCount();for(let ue=0;ue<he;ue++){const N=z.getViewport(ue);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),X.viewport(a),z.updateMatrices(K,ue),i=z.getFrustum(),y(P,C,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===qn&&T(z,C),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(V,S,A)};function T(R,P){const C=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,C,h,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,C,p,_,null)}function M(R,P,C,V){let S=null;const A=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=S.uuid,F=P.uuid;let J=c[X];J===void 0&&(J={},c[X]=J);let D=J[F];D===void 0&&(D=S.clone(),J[F]=D),S=D}if(S.visible=P.visible,S.wireframe=P.wireframe,V===qn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=C}return S}function y(R,P,C,V,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const F=e.update(R),J=R.material;if(Array.isArray(J)){const D=F.groups;for(let $=0,K=D.length;$<K;$++){const z=D[$],oe=J[z.materialIndex];if(oe&&oe.visible){const he=M(R,oe,V,S);t.renderBufferDirect(C,null,F,he,R,z)}}}else if(J.visible){const D=M(R,J,V,S);t.renderBufferDirect(C,null,F,D,R,null)}}const X=R.children;for(let F=0,J=X.length;F<J;F++)y(X[F],P,C,V,S)}}function QE(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const be=new bt;let _e=null;const re=new bt(0,0,0,0);return{setMask:function(ve){_e!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),_e=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Ne,Ke,mt,on){on===!0&&(ve*=mt,Ne*=mt,Ke*=mt),be.set(ve,Ne,Ke,mt),re.equals(be)===!1&&(t.clearColor(ve,Ne,Ke,mt),re.copy(be))},reset:function(){U=!1,_e=null,re.set(-1,0,0,0)}}}function s(){let U=!1,be=null,_e=null,re=null;return{setTest:function(ve){ve?ee(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(ve){be!==ve&&!U&&(t.depthMask(ve),be=ve)},setFunc:function(ve){if(_e!==ve){switch(ve){case Ev:t.depthFunc(t.NEVER);break;case yv:t.depthFunc(t.ALWAYS);break;case Tv:t.depthFunc(t.LESS);break;case ao:t.depthFunc(t.LEQUAL);break;case bv:t.depthFunc(t.EQUAL);break;case Av:t.depthFunc(t.GEQUAL);break;case Rv:t.depthFunc(t.GREATER);break;case wv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=ve}},setLocked:function(ve){U=ve},setClear:function(ve){re!==ve&&(t.clearDepth(ve),re=ve)},reset:function(){U=!1,be=null,_e=null,re=null}}}function a(){let U=!1,be=null,_e=null,re=null,ve=null,Ne=null,Ke=null,mt=null,on=null;return{setTest:function(rt){U||(rt?ee(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(rt){be!==rt&&!U&&(t.stencilMask(rt),be=rt)},setFunc:function(rt,Ut,Tn){(_e!==rt||re!==Ut||ve!==Tn)&&(t.stencilFunc(rt,Ut,Tn),_e=rt,re=Ut,ve=Tn)},setOp:function(rt,Ut,Tn){(Ne!==rt||Ke!==Ut||mt!==Tn)&&(t.stencilOp(rt,Ut,Tn),Ne=rt,Ke=Ut,mt=Tn)},setLocked:function(rt){U=rt},setClear:function(rt){on!==rt&&(t.clearStencil(rt),on=rt)},reset:function(){U=!1,be=null,_e=null,re=null,ve=null,Ne=null,Ke=null,mt=null,on=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,_=[],m=null,d=!1,T=null,M=null,y=null,R=null,P=null,C=null,V=null,S=new Ze(0,0,0),A=0,X=!1,F=null,J=null,D=null,$=null,K=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,he=0;const ue=t.getParameter(t.VERSION);ue.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ue)[1]),oe=he>=1):ue.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),oe=he>=2);let N=null,O={};const Q=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),pe=new bt().fromArray(Q),ye=new bt().fromArray(de);function G(U,be,_e,re){const ve=new Uint8Array(4),Ne=t.createTexture();t.bindTexture(U,Ne),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<_e;Ke++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(be,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(be+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Ne}const le={};le[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(t.DEPTH_TEST),l.setFunc(ao),ce(!1),se(iu),ee(t.CULL_FACE),k(_i);function ee(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function xe(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Ee(U,be){return p[U]!==be?(t.bindFramebuffer(U,be),p[U]=be,i&&(U===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=be),U===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=be)),!0):!1}function g(U,be){let _e=_,re=!1;if(U)if(_e=v.get(be),_e===void 0&&(_e=[],v.set(be,_e)),U.isWebGLMultipleRenderTargets){const ve=U.texture;if(_e.length!==ve.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let Ne=0,Ke=ve.length;Ne<Ke;Ne++)_e[Ne]=t.COLOR_ATTACHMENT0+Ne;_e.length=ve.length,re=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,re=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,re=!0);re&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function w(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const L={[Fi]:t.FUNC_ADD,[av]:t.FUNC_SUBTRACT,[lv]:t.FUNC_REVERSE_SUBTRACT};if(i)L[au]=t.MIN,L[lu]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(L[au]=U.MIN_EXT,L[lu]=U.MAX_EXT)}const H={[cv]:t.ZERO,[uv]:t.ONE,[fv]:t.SRC_COLOR,[Qa]:t.SRC_ALPHA,[_v]:t.SRC_ALPHA_SATURATE,[mv]:t.DST_COLOR,[dv]:t.DST_ALPHA,[hv]:t.ONE_MINUS_SRC_COLOR,[el]:t.ONE_MINUS_SRC_ALPHA,[gv]:t.ONE_MINUS_DST_COLOR,[pv]:t.ONE_MINUS_DST_ALPHA,[vv]:t.CONSTANT_COLOR,[xv]:t.ONE_MINUS_CONSTANT_COLOR,[Sv]:t.CONSTANT_ALPHA,[Mv]:t.ONE_MINUS_CONSTANT_ALPHA};function k(U,be,_e,re,ve,Ne,Ke,mt,on,rt){if(U===_i){d===!0&&(xe(t.BLEND),d=!1);return}if(d===!1&&(ee(t.BLEND),d=!0),U!==ov){if(U!==T||rt!==X){if((M!==Fi||P!==Fi)&&(t.blendEquation(t.FUNC_ADD),M=Fi,P=Fi),rt)switch(U){case Sr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ru:t.blendFunc(t.ONE,t.ONE);break;case su:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ou:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ru:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case su:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ou:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,R=null,C=null,V=null,S.set(0,0,0),A=0,T=U,X=rt}return}ve=ve||be,Ne=Ne||_e,Ke=Ke||re,(be!==M||ve!==P)&&(t.blendEquationSeparate(L[be],L[ve]),M=be,P=ve),(_e!==y||re!==R||Ne!==C||Ke!==V)&&(t.blendFuncSeparate(H[_e],H[re],H[Ne],H[Ke]),y=_e,R=re,C=Ne,V=Ke),(mt.equals(S)===!1||on!==A)&&(t.blendColor(mt.r,mt.g,mt.b,on),S.copy(mt),A=on),T=U,X=!1}function Y(U,be){U.side===Dn?xe(t.CULL_FACE):ee(t.CULL_FACE);let _e=U.side===$t;be&&(_e=!_e),ce(_e),U.blending===Sr&&U.transparent===!1?k(_i):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const re=U.stencilWrite;c.setTest(re),re&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(U){F!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),F=U)}function se(U){U!==iv?(ee(t.CULL_FACE),U!==J&&(U===iu?t.cullFace(t.BACK):U===rv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),J=U}function fe(U){U!==D&&(oe&&t.lineWidth(U),D=U)}function ie(U,be,_e){U?(ee(t.POLYGON_OFFSET_FILL),($!==be||K!==_e)&&(t.polygonOffset(be,_e),$=be,K=_e)):xe(t.POLYGON_OFFSET_FILL)}function Ae(U){U?ee(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function E(U){U===void 0&&(U=t.TEXTURE0+z-1),N!==U&&(t.activeTexture(U),N=U)}function x(U,be,_e){_e===void 0&&(N===null?_e=t.TEXTURE0+z-1:_e=N);let re=O[_e];re===void 0&&(re={type:void 0,texture:void 0},O[_e]=re),(re.type!==U||re.texture!==be)&&(N!==_e&&(t.activeTexture(_e),N=_e),t.bindTexture(U,be||le[U]),re.type=U,re.texture=be)}function I(){const U=O[N];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){pe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Ie(U){ye.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ye.copy(U))}function De(U,be){let _e=f.get(be);_e===void 0&&(_e=new WeakMap,f.set(be,_e));let re=_e.get(U);re===void 0&&(re=t.getUniformBlockIndex(be,U.name),_e.set(U,re))}function we(U,be){const re=f.get(be).get(U);u.get(be)!==re&&(t.uniformBlockBinding(be,re,U.__bindingPointIndex),u.set(be,re))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},N=null,O={},p={},v=new WeakMap,_=[],m=null,d=!1,T=null,M=null,y=null,R=null,P=null,C=null,V=null,S=new Ze(0,0,0),A=0,X=!1,F=null,J=null,D=null,$=null,K=null,pe.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ee,disable:xe,bindFramebuffer:Ee,drawBuffers:g,useProgram:w,setBlending:k,setMaterial:Y,setFlipSided:ce,setCullFace:se,setLineWidth:fe,setPolygonOffset:ie,setScissorTest:Ae,activeTexture:E,bindTexture:x,unbindTexture:I,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:ge,texImage3D:He,updateUBOMapping:De,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:ae,texSubImage3D:Te,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Le,viewport:Ie,reset:Ye}}function ey(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,x){return d?new OffscreenCanvas(E,x):ho("canvas")}function M(E,x,I,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=x?al:Math.floor,Te=ae(ne*E.width),me=ae(ne*E.height);_===void 0&&(_=T(Te,me));const Se=I?T(Te,me):_;return Se.width=Te,Se.height=me,Se.getContext("2d").drawImage(E,0,0,Te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Te+"x"+me+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Bu(E.width)&&Bu(E.height)}function R(E){return o?!1:E.wrapS!==vn||E.wrapT!==vn||E.minFilter!==Bt&&E.minFilter!==cn}function P(E,x){return E.generateMipmaps&&x&&E.minFilter!==Bt&&E.minFilter!==cn}function C(E){t.generateMipmap(E)}function V(E,x,I,te,ne=!1){if(o===!1)return x;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=x;if(x===t.RED&&(I===t.FLOAT&&(ae=t.R32F),I===t.HALF_FLOAT&&(ae=t.R16F),I===t.UNSIGNED_BYTE&&(ae=t.R8)),x===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(ae=t.R8UI),I===t.UNSIGNED_SHORT&&(ae=t.R16UI),I===t.UNSIGNED_INT&&(ae=t.R32UI),I===t.BYTE&&(ae=t.R8I),I===t.SHORT&&(ae=t.R16I),I===t.INT&&(ae=t.R32I)),x===t.RG&&(I===t.FLOAT&&(ae=t.RG32F),I===t.HALF_FLOAT&&(ae=t.RG16F),I===t.UNSIGNED_BYTE&&(ae=t.RG8)),x===t.RGBA){const Te=ne?lo:nt.getTransfer(te);I===t.FLOAT&&(ae=t.RGBA32F),I===t.HALF_FLOAT&&(ae=t.RGBA16F),I===t.UNSIGNED_BYTE&&(ae=Te===ot?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(E,x,I){return P(E,I)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){return E===Bt||E===cu||E===ra?t.NEAREST:t.LINEAR}function X(E){const x=E.target;x.removeEventListener("dispose",X),J(x),x.isVideoTexture&&v.delete(x)}function F(E){const x=E.target;x.removeEventListener("dispose",F),$(x)}function J(E){const x=i.get(E);if(x.__webglInit===void 0)return;const I=E.source,te=m.get(I);if(te){const ne=te[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(E),Object.keys(te).length===0&&m.delete(I)}i.remove(E)}function D(E){const x=i.get(E);t.deleteTexture(x.__webglTexture);const I=E.source,te=m.get(I);delete te[x.__cacheKey],a.memory.textures--}function $(E){const x=E.texture,I=i.get(E),te=i.get(x);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(I.__webglFramebuffer[ne]))for(let ae=0;ae<I.__webglFramebuffer[ne].length;ae++)t.deleteFramebuffer(I.__webglFramebuffer[ne][ae]);else t.deleteFramebuffer(I.__webglFramebuffer[ne]);I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[ne])}else{if(Array.isArray(I.__webglFramebuffer))for(let ne=0;ne<I.__webglFramebuffer.length;ne++)t.deleteFramebuffer(I.__webglFramebuffer[ne]);else t.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ne=0;ne<I.__webglColorRenderbuffer.length;ne++)I.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[ne]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=x.length;ne<ae;ne++){const Te=i.get(x[ne]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(x[ne])}i.remove(x),i.remove(E)}let K=0;function z(){K=0}function oe(){const E=K;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),K+=1,E}function he(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ue(E,x){const I=i.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(I,E,x);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+x)}function N(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ee(I,E,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+x)}function O(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){ee(I,E,x);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+x)}function Q(E,x){const I=i.get(E);if(E.version>0&&I.__version!==E.version){xe(I,E,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+x)}const de={[il]:t.REPEAT,[vn]:t.CLAMP_TO_EDGE,[rl]:t.MIRRORED_REPEAT},pe={[Bt]:t.NEAREST,[cu]:t.NEAREST_MIPMAP_NEAREST,[ra]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Ov]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},ye={[jv]:t.NEVER,[n0]:t.ALWAYS,[Kv]:t.LESS,[Jv]:t.LEQUAL,[Zv]:t.EQUAL,[t0]:t.GEQUAL,[Qv]:t.GREATER,[e0]:t.NOTEQUAL};function G(E,x,I){if(I?(t.texParameteri(E,t.TEXTURE_WRAP_S,de[x.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,de[x.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,de[x.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,pe[x.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,pe[x.minFilter])):(t.texParameteri(E,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(E,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==vn||x.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,t.TEXTURE_MAG_FILTER,A(x.magFilter)),t.texParameteri(E,t.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Bt&&x.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Bt||x.minFilter!==ra&&x.minFilter!==as||x.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function le(E,x){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",X));const te=x.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ae=he(x);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ne[ae].usedTimes++;const Te=ne[E.__cacheKey];Te!==void 0&&(ne[E.__cacheKey].usedTimes--,Te.usedTimes===0&&D(x)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return I}function ee(E,x,I){let te=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=t.TEXTURE_3D);const ne=le(E,x),ae=x.source;n.bindTexture(te,E.__webglTexture,t.TEXTURE0+I);const Te=i.get(ae);if(ae.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+I);const me=nt.getPrimaries(nt.workingColorSpace),Se=x.colorSpace===fn?null:nt.getPrimaries(x.colorSpace),Ce=x.colorSpace===fn||me===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Xe=R(x)&&y(x.image)===!1;let ge=M(x.image,Xe,!1,u);ge=Ae(x,ge);const He=y(ge)||o,Le=s.convert(x.format,x.colorSpace);let Ie=s.convert(x.type),De=V(x.internalFormat,Le,Ie,x.colorSpace,x.isVideoTexture);G(te,x,He);let we;const Ye=x.mipmaps,U=o&&x.isVideoTexture!==!0,be=Te.__version===void 0||ne===!0,_e=S(x,ge,He);if(x.isDepthTexture)De=t.DEPTH_COMPONENT,o?x.type===gi?De=t.DEPTH_COMPONENT32F:x.type===mi?De=t.DEPTH_COMPONENT24:x.type===Vi?De=t.DEPTH24_STENCIL8:De=t.DEPTH_COMPONENT16:x.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ki&&De===t.DEPTH_COMPONENT&&x.type!==Fl&&x.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=mi,Ie=s.convert(x.type)),x.format===Rr&&De===t.DEPTH_COMPONENT&&(De=t.DEPTH_STENCIL,x.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Vi,Ie=s.convert(x.type))),be&&(U?n.texStorage2D(t.TEXTURE_2D,1,De,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ie,null));else if(x.isDataTexture)if(Ye.length>0&&He){U&&be&&n.texStorage2D(t.TEXTURE_2D,_e,De,Ye[0].width,Ye[0].height);for(let re=0,ve=Ye.length;re<ve;re++)we=Ye[re],U?n.texSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Le,Ie,we.data):n.texImage2D(t.TEXTURE_2D,re,De,we.width,we.height,0,Le,Ie,we.data);x.generateMipmaps=!1}else U?(be&&n.texStorage2D(t.TEXTURE_2D,_e,De,ge.width,ge.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge.width,ge.height,Le,Ie,ge.data)):n.texImage2D(t.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ie,ge.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,De,Ye[0].width,Ye[0].height,ge.depth);for(let re=0,ve=Ye.length;re<ve;re++)we=Ye[re],x.format!==xn?Le!==null?U?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,ge.depth,Le,we.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,De,we.width,we.height,ge.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,ge.depth,Le,Ie,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,De,we.width,we.height,ge.depth,0,Le,Ie,we.data)}else{U&&be&&n.texStorage2D(t.TEXTURE_2D,_e,De,Ye[0].width,Ye[0].height);for(let re=0,ve=Ye.length;re<ve;re++)we=Ye[re],x.format!==xn?Le!==null?U?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_2D,re,De,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?n.texSubImage2D(t.TEXTURE_2D,re,0,0,we.width,we.height,Le,Ie,we.data):n.texImage2D(t.TEXTURE_2D,re,De,we.width,we.height,0,Le,Ie,we.data)}else if(x.isDataArrayTexture)U?(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,De,ge.width,ge.height,ge.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ie,ge.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Le,Ie,ge.data);else if(x.isData3DTexture)U?(be&&n.texStorage3D(t.TEXTURE_3D,_e,De,ge.width,ge.height,ge.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ie,ge.data)):n.texImage3D(t.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Le,Ie,ge.data);else if(x.isFramebufferTexture){if(be)if(U)n.texStorage2D(t.TEXTURE_2D,_e,De,ge.width,ge.height);else{let re=ge.width,ve=ge.height;for(let Ne=0;Ne<_e;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,De,re,ve,0,Le,Ie,null),re>>=1,ve>>=1}}else if(Ye.length>0&&He){U&&be&&n.texStorage2D(t.TEXTURE_2D,_e,De,Ye[0].width,Ye[0].height);for(let re=0,ve=Ye.length;re<ve;re++)we=Ye[re],U?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Le,Ie,we):n.texImage2D(t.TEXTURE_2D,re,De,Le,Ie,we);x.generateMipmaps=!1}else U?(be&&n.texStorage2D(t.TEXTURE_2D,_e,De,ge.width,ge.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Ie,ge)):n.texImage2D(t.TEXTURE_2D,0,De,Le,Ie,ge);P(x,He)&&C(te),Te.__version=ae.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xe(E,x,I){if(x.image.length!==6)return;const te=le(E,x),ne=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+I);const ae=i.get(ne);if(ne.version!==ae.__version||te===!0){n.activeTexture(t.TEXTURE0+I);const Te=nt.getPrimaries(nt.workingColorSpace),me=x.colorSpace===fn?null:nt.getPrimaries(x.colorSpace),Se=x.colorSpace===fn||Te===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Xe=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!Ce&&!Xe?ge[re]=M(x.image[re],!1,!0,c):ge[re]=Xe?x.image[re].image:x.image[re],ge[re]=Ae(x,ge[re]);const He=ge[0],Le=y(He)||o,Ie=s.convert(x.format,x.colorSpace),De=s.convert(x.type),we=V(x.internalFormat,Ie,De,x.colorSpace),Ye=o&&x.isVideoTexture!==!0,U=ae.__version===void 0||te===!0;let be=S(x,He,Le);G(t.TEXTURE_CUBE_MAP,x,Le);let _e;if(Ce){Ye&&U&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,we,He.width,He.height);for(let re=0;re<6;re++){_e=ge[re].mipmaps;for(let ve=0;ve<_e.length;ve++){const Ne=_e[ve];x.format!==xn?Ie!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,Ne.width,Ne.height,Ie,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,we,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,Ne.width,Ne.height,Ie,De,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,we,Ne.width,Ne.height,0,Ie,De,Ne.data)}}}else{_e=x.mipmaps,Ye&&U&&(_e.length>0&&be++,n.texStorage2D(t.TEXTURE_CUBE_MAP,be,we,ge[0].width,ge[0].height));for(let re=0;re<6;re++)if(Xe){Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Ie,De,ge[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,ge[re].width,ge[re].height,0,Ie,De,ge[re].data);for(let ve=0;ve<_e.length;ve++){const Ke=_e[ve].image[re].image;Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,Ke.width,Ke.height,Ie,De,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,we,Ke.width,Ke.height,0,Ie,De,Ke.data)}}else{Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,De,ge[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,Ie,De,ge[re]);for(let ve=0;ve<_e.length;ve++){const Ne=_e[ve];Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,Ie,De,Ne.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,we,Ie,De,Ne.image[re])}}}P(x,Le)&&C(t.TEXTURE_CUBE_MAP),ae.__version=ne.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ee(E,x,I,te,ne,ae){const Te=s.convert(I.format,I.colorSpace),me=s.convert(I.type),Se=V(I.internalFormat,Te,me,I.colorSpace);if(!i.get(x).__hasExternalTextures){const Xe=Math.max(1,x.width>>ae),ge=Math.max(1,x.height>>ae);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ae,Se,Xe,ge,x.depth,0,Te,me,null):n.texImage2D(ne,ae,Se,Xe,ge,0,Te,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),fe(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ne,i.get(I).__webglTexture,0,se(x)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ne,i.get(I).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function g(E,x,I){if(t.bindRenderbuffer(t.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(I||fe(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===gi?te=t.DEPTH_COMPONENT32F:ne.type===mi&&(te=t.DEPTH_COMPONENT24));const ae=se(x);fe(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,te,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,te,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const te=se(x);I&&fe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,x.width,x.height):fe(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,E)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],Te=s.convert(ae.format,ae.colorSpace),me=s.convert(ae.type),Se=V(ae.internalFormat,Te,me,ae.colorSpace),Ce=se(x);I&&fe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Se,x.width,x.height):fe(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Se,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Se,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function w(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ue(x.depthTexture,0);const te=i.get(x.depthTexture).__webglTexture,ne=se(x);if(x.depthTexture.format===ki)fe(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(x.depthTexture.format===Rr)fe(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function L(E){const x=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");w(x.__webglFramebuffer,E)}else if(I){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=t.createRenderbuffer(),g(x.__webglDepthbuffer[te],E,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),g(x.__webglDepthbuffer,E,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(E,x,I){const te=i.get(E);x!==void 0&&Ee(te.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&L(E)}function k(E){const x=E.texture,I=i.get(E),te=i.get(x);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=x.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,Te=y(E)||o;if(ne){I.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[me]=[];for(let Se=0;Se<x.mipmaps.length;Se++)I.__webglFramebuffer[me][Se]=t.createFramebuffer()}else I.__webglFramebuffer[me]=t.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)I.__webglFramebuffer[me]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const me=E.texture;for(let Se=0,Ce=me.length;Se<Ce;Se++){const Xe=i.get(me[Se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&fe(E)===!1){const me=ae?x:[x];I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Se=0;Se<me.length;Se++){const Ce=me[Se];I.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[Se]);const Xe=s.convert(Ce.format,Ce.colorSpace),ge=s.convert(Ce.type),He=V(Ce.internalFormat,Xe,ge,Ce.colorSpace,E.isXRRenderTarget===!0),Le=se(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,He,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,I.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),g(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),G(t.TEXTURE_CUBE_MAP,x,Te);for(let me=0;me<6;me++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)Ee(I.__webglFramebuffer[me][Se],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else Ee(I.__webglFramebuffer[me],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);P(x,Te)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const me=E.texture;for(let Se=0,Ce=me.length;Se<Ce;Se++){const Xe=me[Se],ge=i.get(Xe);n.bindTexture(t.TEXTURE_2D,ge.__webglTexture),G(t.TEXTURE_2D,Xe,Te),Ee(I.__webglFramebuffer,E,Xe,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),P(Xe,Te)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?me=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,te.__webglTexture),G(me,x,Te),o&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)Ee(I.__webglFramebuffer[Se],E,x,t.COLOR_ATTACHMENT0,me,Se);else Ee(I.__webglFramebuffer,E,x,t.COLOR_ATTACHMENT0,me,0);P(x,Te)&&C(me),n.unbindTexture()}E.depthBuffer&&L(E)}function Y(E){const x=y(E)||o,I=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=I.length;te<ne;te++){const ae=I[te];if(P(ae,x)){const Te=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(ae).__webglTexture;n.bindTexture(Te,me),C(Te),n.unbindTexture()}}}function ce(E){if(o&&E.samples>0&&fe(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],I=E.width,te=E.height;let ne=t.COLOR_BUFFER_BIT;const ae=[],Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(E),Se=E.isWebGLMultipleRenderTargets===!0;if(Se)for(let Ce=0;Ce<x.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){ae.push(t.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&ae.push(Te);const Xe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Xe===!1&&(E.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Se&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),Se){const ge=i.get(x[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,I,te,0,0,I,te,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Ce=0;Ce<x.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const Xe=i.get(x[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function se(E){return Math.min(f,E.samples)}function fe(E){const x=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ie(E){const x=a.render.frame;v.get(E)!==x&&(v.set(E,x),E.update())}function Ae(E,x){const I=E.colorSpace,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===sl||I!==ni&&I!==fn&&(nt.getTransfer(I)===ot?o===!1?e.has("EXT_sRGB")===!0&&te===xn?(E.format=sl,E.minFilter=cn,E.generateMipmaps=!1):x=xd.sRGBToLinear(x):(te!==xn||ne!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}this.allocateTextureUnit=oe,this.resetTextureUnits=z,this.setTexture2D=ue,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=H,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=fe}function ty(t,e,n){const i=n.isWebGL2;function r(s,a=fn){let o;const l=nt.getTransfer(a);if(s===xi)return t.UNSIGNED_BYTE;if(s===fd)return t.UNSIGNED_SHORT_4_4_4_4;if(s===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Fv)return t.BYTE;if(s===Bv)return t.SHORT;if(s===Fl)return t.UNSIGNED_SHORT;if(s===ud)return t.INT;if(s===mi)return t.UNSIGNED_INT;if(s===gi)return t.FLOAT;if(s===ls)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Hv)return t.ALPHA;if(s===xn)return t.RGBA;if(s===zv)return t.LUMINANCE;if(s===Gv)return t.LUMINANCE_ALPHA;if(s===ki)return t.DEPTH_COMPONENT;if(s===Rr)return t.DEPTH_STENCIL;if(s===sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vv)return t.RED;if(s===dd)return t.RED_INTEGER;if(s===kv)return t.RG;if(s===pd)return t.RG_INTEGER;if(s===md)return t.RGBA_INTEGER;if(s===sa||s===oa||s===aa||s===la)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===la)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uu||s===fu||s===hu||s===du)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===uu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===du)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pu||s===mu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===pu)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===mu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gu||s===_u||s===vu||s===xu||s===Su||s===Mu||s===Eu||s===yu||s===Tu||s===bu||s===Au||s===Ru||s===wu||s===Cu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===gu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_u)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Su)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Au)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ru)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca||s===Pu||s===Lu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ca)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xv||s===Du||s===Uu||s===Iu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ca)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Du)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ny extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ry extends rn{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ki,u!==ki&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=mi),i===void 0&&u===Rr&&(i=Vi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sy extends Cr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const _=n.getContextAttributes();let m=null,d=null;const T=[],M=[],y=new un;y.layers.enable(1),y.viewport=new bt;const R=new un;R.layers.enable(2),R.viewport=new bt;const P=[y,R],C=new ny;C.layers.enable(1),C.layers.enable(2);let V=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=T[N];return O===void 0&&(O=new Ia,T[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=T[N];return O===void 0&&(O=new Ia,T[N]=O),O.getGripSpace()},this.getHand=function(N){let O=T[N];return O===void 0&&(O=new Ia,T[N]=O),O.getHandSpace()};function A(N){const O=M.indexOf(N.inputSource);if(O===-1)return;const Q=T[O];Q!==void 0&&(Q.update(N.inputSource,N.frame,c||a),Q.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",F);for(let N=0;N<T.length;N++){const O=M[N];O!==null&&(M[N]=null,T[N].disconnect(O))}V=null,S=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:p}),d=new Xi(p.framebufferWidth,p.framebufferHeight,{format:xn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let O=null,Q=null,de=null;_.depth&&(de=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=_.stencil?Rr:ki,Q=_.stencil?Vi:mi);const pe={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),d=new Xi(h.textureWidth,h.textureHeight,{format:xn,type:xi,depthTexture:new ry(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(N){for(let O=0;O<N.removed.length;O++){const Q=N.removed[O],de=M.indexOf(Q);de>=0&&(M[de]=null,T[de].disconnect(Q))}for(let O=0;O<N.added.length;O++){const Q=N.added[O];let de=M.indexOf(Q);if(de===-1){for(let ye=0;ye<T.length;ye++)if(ye>=M.length){M.push(Q),de=ye;break}else if(M[ye]===null){M[ye]=Q,de=ye;break}if(de===-1)break}const pe=T[de];pe&&pe.connect(Q)}}const J=new W,D=new W;function $(N,O,Q){J.setFromMatrixPosition(O.matrixWorld),D.setFromMatrixPosition(Q.matrixWorld);const de=J.distanceTo(D),pe=O.projectionMatrix.elements,ye=Q.projectionMatrix.elements,G=pe[14]/(pe[10]-1),le=pe[14]/(pe[10]+1),ee=(pe[9]+1)/pe[5],xe=(pe[9]-1)/pe[5],Ee=(pe[8]-1)/pe[0],g=(ye[8]+1)/ye[0],w=G*Ee,L=G*g,H=de/(-Ee+g),k=H*-Ee;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(k),N.translateZ(H),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Y=G+H,ce=le+H,se=w-k,fe=L+(de-k),ie=ee*le/ce*Y,Ae=xe*le/ce*Y;N.projectionMatrix.makePerspective(se,fe,ie,Ae,Y,ce),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function K(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=R.near=y.near=N.near,C.far=R.far=y.far=N.far,(V!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,S=C.far);const O=N.parent,Q=C.cameras;K(C,O);for(let de=0;de<Q.length;de++)K(Q[de],O);Q.length===2?$(C,y,R):C.projectionMatrix.copy(y.projectionMatrix),z(N,C,O)};function z(N,O,Q){Q===null?N.matrix.copy(O.matrixWorld):(N.matrix.copy(Q.matrixWorld),N.matrix.invert(),N.matrix.multiply(O.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(O.projectionMatrix),N.projectionMatrixInverse.copy(O.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ol*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let oe=null;function he(N,O){if(u=O.getViewerPose(c||a),v=O,u!==null){const Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let de=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,de=!0);for(let pe=0;pe<Q.length;pe++){const ye=Q[pe];let G=null;if(p!==null)G=p.getViewport(ye);else{const ee=f.getViewSubImage(h,ye);G=ee.viewport,pe===0&&(e.setRenderTargetTextures(d,ee.colorTexture,h.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(d))}let le=P[pe];le===void 0&&(le=new un,le.layers.enable(pe),le.viewport=new bt,P[pe]=le),le.matrix.fromArray(ye.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ye.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(G.x,G.y,G.width,G.height),pe===0&&(C.matrix.copy(le.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),de===!0&&C.cameras.push(le)}}for(let Q=0;Q<T.length;Q++){const de=M[Q],pe=T[Q];de!==null&&pe!==void 0&&pe.update(de,O,c||a)}oe&&oe(N,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),v=null}const ue=new Cd;ue.setAnimationLoop(he),this.setAnimationLoop=function(N){oe=N},this.dispose=function(){}}}function oy(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ad(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=M*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ay(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const y=M.program;i.uniformBlockBinding(T,y)}function c(T,M){let y=r[T.id];y===void 0&&(v(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(T,R);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function u(T){const M=f();T.__bindingPointIndex=M;const y=t.createBuffer(),R=T.__size,P=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=r[T.id],y=T.uniforms,R=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let P=0,C=y.length;P<C;P++){const V=y[P];if(p(V,P,R)===!0){const S=V.__offset,A=Array.isArray(V.value)?V.value:[V.value];let X=0;for(let F=0;F<A.length;F++){const J=A[F],D=_(J);typeof J=="number"?(V.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,S+X,V.__data)):J.isMatrix3?(V.__data[0]=J.elements[0],V.__data[1]=J.elements[1],V.__data[2]=J.elements[2],V.__data[3]=J.elements[0],V.__data[4]=J.elements[3],V.__data[5]=J.elements[4],V.__data[6]=J.elements[5],V.__data[7]=J.elements[0],V.__data[8]=J.elements[6],V.__data[9]=J.elements[7],V.__data[10]=J.elements[8],V.__data[11]=J.elements[0]):(J.toArray(V.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,V.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(T,M,y){const R=T.value;if(y[M]===void 0){if(typeof R=="number")y[M]=R;else{const P=Array.isArray(R)?R:[R],C=[];for(let V=0;V<P.length;V++)C.push(P[V].clone());y[M]=C}return!0}else if(typeof R=="number"){if(y[M]!==R)return y[M]=R,!0}else{const P=Array.isArray(y[M])?y[M]:[y[M]],C=Array.isArray(R)?R:[R];for(let V=0;V<P.length;V++){const S=P[V];if(S.equals(C[V])===!1)return S.copy(C[V]),!0}}return!1}function v(T){const M=T.uniforms;let y=0;const R=16;let P=0;for(let C=0,V=M.length;C<V;C++){const S=M[C],A={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let F=0,J=X.length;F<J;F++){const D=X[F],$=_(D);A.boundary+=$.boundary,A.storage+=$.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){P=y%R;const F=R-P;P!==0&&F-A.boundary<0&&(y+=R-P,S.__offset=y)}y+=A.storage}return P=y%R,P>0&&(y+=R-P),T.__size=y,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const T in r)t.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Nd{constructor(e={}){const{canvas:n=r0(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const d=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;const M=this;let y=!1,R=0,P=0,C=null,V=-1,S=null;const A=new bt,X=new bt;let F=null;const J=new Ze(0);let D=0,$=n.width,K=n.height,z=1,oe=null,he=null;const ue=new bt(0,0,$,K),N=new bt(0,0,$,K);let O=!1;const Q=new Gl;let de=!1,pe=!1,ye=null;const G=new dt,le=new Je,ee=new W,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return C===null?z:1}let g=i;function w(b,B){for(let q=0;q<b.length;q++){const j=b[q],Z=n.getContext(j,B);if(Z!==null)return Z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ol}`),n.addEventListener("webglcontextlost",Ye,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",be,!1),g===null){const B=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&B.shift(),g=w(B,b),g===null)throw w(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let L,H,k,Y,ce,se,fe,ie,Ae,E,x,I,te,ne,ae,Te,me,Se,Ce,Xe,ge,He,Le,Ie;function De(){L=new _M(g),H=new fM(g,L,e),L.init(H),He=new ty(g,L,H),k=new QE(g,L,H),Y=new SM(g),ce=new HE,se=new ey(g,L,k,ce,H,He,Y),fe=new dM(M),ie=new gM(M),Ae=new P0(g,H),Le=new cM(g,L,Ae,H),E=new vM(g,Ae,Y,Le),x=new TM(g,E,Ae,Y),Ce=new yM(g,H,se),Te=new hM(ce),I=new BE(M,fe,ie,L,H,Le,Te),te=new oy(M,ce),ne=new GE,ae=new $E(L,H),Se=new lM(M,fe,ie,k,x,h,l),me=new JE(M,x,H),Ie=new ay(g,Y,H,k),Xe=new uM(g,L,Y,H),ge=new xM(g,L,Y,H),Y.programs=I.programs,M.capabilities=H,M.extensions=L,M.properties=ce,M.renderLists=ne,M.shadowMap=me,M.state=k,M.info=Y}De();const we=new sy(M,g);this.xr=we,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize($,K,!1))},this.getSize=function(b){return b.set($,K)},this.setSize=function(b,B,q=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,K=B,n.width=Math.floor(b*z),n.height=Math.floor(B*z),q===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set($*z,K*z).floor()},this.setDrawingBufferSize=function(b,B,q){$=b,K=B,z=q,n.width=Math.floor(b*q),n.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,B,q,j){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,B,q,j),k.viewport(A.copy(ue).multiplyScalar(z).floor())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,B,q,j){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,B,q,j),k.scissor(X.copy(N).multiplyScalar(z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){k.setScissorTest(O=b)},this.setOpaqueSort=function(b){oe=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(b=!0,B=!0,q=!0){let j=0;if(b){let Z=!1;if(C!==null){const Re=C.texture.format;Z=Re===md||Re===pd||Re===dd}if(Z){const Re=C.texture.type,Pe=Re===xi||Re===mi||Re===Fl||Re===Vi||Re===fd||Re===hd,Oe=Se.getClearColor(),Fe=Se.getClearAlpha(),ke=Oe.r,ze=Oe.g,Ge=Oe.b;Pe?(p[0]=ke,p[1]=ze,p[2]=Ge,p[3]=Fe,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=ke,v[1]=ze,v[2]=Ge,v[3]=Fe,g.clearBufferiv(g.COLOR,0,v))}else j|=g.COLOR_BUFFER_BIT}B&&(j|=g.DEPTH_BUFFER_BIT),q&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ye,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",be,!1),ne.dispose(),ae.dispose(),ce.dispose(),fe.dispose(),ie.dispose(),x.dispose(),Le.dispose(),Ie.dispose(),I.dispose(),we.dispose(),we.removeEventListener("sessionstart",on),we.removeEventListener("sessionend",rt),ye&&(ye.dispose(),ye=null),Ut.stop()};function Ye(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Y.autoReset,B=me.enabled,q=me.autoUpdate,j=me.needsUpdate,Z=me.type;De(),Y.autoReset=b,me.enabled=B,me.autoUpdate=q,me.needsUpdate=j,me.type=Z}function be(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _e(b){const B=b.target;B.removeEventListener("dispose",_e),re(B)}function re(b){ve(b),ce.remove(b)}function ve(b){const B=ce.get(b).programs;B!==void 0&&(B.forEach(function(q){I.releaseProgram(q)}),b.isShaderMaterial&&I.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,j,Z,Re){B===null&&(B=xe);const Pe=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=Bd(b,B,q,j,Z);k.setMaterial(j,Pe);let Fe=q.index,ke=1;if(j.wireframe===!0){if(Fe=E.getWireframeAttribute(q),Fe===void 0)return;ke=2}const ze=q.drawRange,Ge=q.attributes.position;let ht=ze.start*ke,Yt=(ze.start+ze.count)*ke;Re!==null&&(ht=Math.max(ht,Re.start*ke),Yt=Math.min(Yt,(Re.start+Re.count)*ke)),Fe!==null?(ht=Math.max(ht,0),Yt=Math.min(Yt,Fe.count)):Ge!=null&&(ht=Math.max(ht,0),Yt=Math.min(Yt,Ge.count));const Et=Yt-ht;if(Et<0||Et===1/0)return;Le.setup(Z,j,Oe,q,Fe);let Fn,lt=Xe;if(Fe!==null&&(Fn=Ae.get(Fe),lt=ge,lt.setIndex(Fn)),Z.isMesh)j.wireframe===!0?(k.setLineWidth(j.wireframeLinewidth*Ee()),lt.setMode(g.LINES)):lt.setMode(g.TRIANGLES);else if(Z.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),k.setLineWidth(qe*Ee()),Z.isLineSegments?lt.setMode(g.LINES):Z.isLineLoop?lt.setMode(g.LINE_LOOP):lt.setMode(g.LINE_STRIP)}else Z.isPoints?lt.setMode(g.POINTS):Z.isSprite&&lt.setMode(g.TRIANGLES);if(Z.isInstancedMesh)lt.renderInstances(ht,Et,Z.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oo=Math.min(q.instanceCount,qe);lt.renderInstances(ht,Et,Oo)}else lt.render(ht,Et)};function Ne(b,B,q){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,xs(b,B,q),b.side=Mi,b.needsUpdate=!0,xs(b,B,q),b.side=Dn):xs(b,B,q)}this.compile=function(b,B,q=null){q===null&&(q=b),m=ae.get(q),m.init(),T.push(m),q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),b!==q&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(M._useLegacyLights);const j=new Set;return b.traverse(function(Z){const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Pe=0;Pe<Re.length;Pe++){const Oe=Re[Pe];Ne(Oe,q,Z),j.add(Oe)}else Ne(Re,q,Z),j.add(Re)}),T.pop(),m=null,j},this.compileAsync=function(b,B,q=null){const j=this.compile(b,B,q);return new Promise(Z=>{function Re(){if(j.forEach(function(Pe){ce.get(Pe).currentProgram.isReady()&&j.delete(Pe)}),j.size===0){Z(b);return}setTimeout(Re,10)}L.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ke=null;function mt(b){Ke&&Ke(b)}function on(){Ut.stop()}function rt(){Ut.start()}const Ut=new Cd;Ut.setAnimationLoop(mt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){Ke=b,we.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},we.addEventListener("sessionstart",on),we.addEventListener("sessionend",rt),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,B,C),m=ae.get(b,T.length),m.init(),T.push(m),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(G),pe=this.localClippingEnabled,de=Te.init(this.clippingPlanes,pe),_=ne.get(b,d.length),_.init(),d.push(_),Tn(b,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(oe,he),this.info.render.frame++,de===!0&&Te.beginShadows();const q=m.state.shadowsArray;if(me.render(q,b,B),de===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(_,b),m.setupLights(M._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let Z=0,Re=j.length;Z<Re;Z++){const Pe=j[Z];$l(_,b,Pe,Pe.viewport)}}else $l(_,b,B);C!==null&&(se.updateMultisampleRenderTarget(C),se.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(M,b,B),Le.resetDefaultState(),V=-1,S=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Tn(b,B,q,j){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){j&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const Pe=x.update(b),Oe=b.material;Oe.visible&&_.push(b,Pe,Oe,q,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Pe=x.update(b),Oe=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ee.copy(Pe.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(Oe)){const Fe=Pe.groups;for(let ke=0,ze=Fe.length;ke<ze;ke++){const Ge=Fe[ke],ht=Oe[Ge.materialIndex];ht&&ht.visible&&_.push(b,Pe,ht,q,ee.z,Ge)}}else Oe.visible&&_.push(b,Pe,Oe,q,ee.z,null)}}const Re=b.children;for(let Pe=0,Oe=Re.length;Pe<Oe;Pe++)Tn(Re[Pe],B,q,j)}function $l(b,B,q,j){const Z=b.opaque,Re=b.transmissive,Pe=b.transparent;m.setupLightsView(q),de===!0&&Te.setGlobalState(M.clippingPlanes,q),Re.length>0&&Fd(Z,Re,B,q),j&&k.viewport(A.copy(j)),Z.length>0&&vs(Z,B,q),Re.length>0&&vs(Re,B,q),Pe.length>0&&vs(Pe,B,q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Fd(b,B,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Re=H.isWebGL2;ye===null&&(ye=new Xi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?ls:xi,minFilter:as,samples:Re?4:0})),M.getDrawingBufferSize(le),Re?ye.setSize(le.x,le.y):ye.setSize(al(le.x),al(le.y));const Pe=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(J),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear();const Oe=M.toneMapping;M.toneMapping=vi,vs(b,q,j),se.updateMultisampleRenderTarget(ye),se.updateRenderTargetMipmap(ye);let Fe=!1;for(let ke=0,ze=B.length;ke<ze;ke++){const Ge=B[ke],ht=Ge.object,Yt=Ge.geometry,Et=Ge.material,Fn=Ge.group;if(Et.side===Dn&&ht.layers.test(j.layers)){const lt=Et.side;Et.side=$t,Et.needsUpdate=!0,Yl(ht,q,j,Yt,Et,Fn),Et.side=lt,Et.needsUpdate=!0,Fe=!0}}Fe===!0&&(se.updateMultisampleRenderTarget(ye),se.updateRenderTargetMipmap(ye)),M.setRenderTarget(Pe),M.setClearColor(J,D),M.toneMapping=Oe}function vs(b,B,q){const j=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Re=b.length;Z<Re;Z++){const Pe=b[Z],Oe=Pe.object,Fe=Pe.geometry,ke=j===null?Pe.material:j,ze=Pe.group;Oe.layers.test(q.layers)&&Yl(Oe,B,q,Fe,ke,ze)}}function Yl(b,B,q,j,Z,Re){b.onBeforeRender(M,B,q,j,Z,Re),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(M,B,q,j,b,Re),Z.transparent===!0&&Z.side===Dn&&Z.forceSinglePass===!1?(Z.side=$t,Z.needsUpdate=!0,M.renderBufferDirect(q,B,j,Z,b,Re),Z.side=Mi,Z.needsUpdate=!0,M.renderBufferDirect(q,B,j,Z,b,Re),Z.side=Dn):M.renderBufferDirect(q,B,j,Z,b,Re),b.onAfterRender(M,B,q,j,Z,Re)}function xs(b,B,q){B.isScene!==!0&&(B=xe);const j=ce.get(b),Z=m.state.lights,Re=m.state.shadowsArray,Pe=Z.state.version,Oe=I.getParameters(b,Z.state,Re,B,q),Fe=I.getProgramCacheKey(Oe);let ke=j.programs;j.environment=b.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(b.isMeshStandardMaterial?ie:fe).get(b.envMap||j.environment),ke===void 0&&(b.addEventListener("dispose",_e),ke=new Map,j.programs=ke);let ze=ke.get(Fe);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Pe)return Kl(b,Oe),ze}else Oe.uniforms=I.getUniforms(b),b.onBuild(q,Oe,M),b.onBeforeCompile(Oe,M),ze=I.acquireProgram(Oe,Fe),ke.set(Fe,ze),j.uniforms=Oe.uniforms;const Ge=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=Te.uniform),Kl(b,Oe),j.needsLights=zd(b),j.lightsStateVersion=Pe,j.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function jl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Ks.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Kl(b,B){const q=ce.get(b);q.outputColorSpace=B.outputColorSpace,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Bd(b,B,q,j,Z){B.isScene!==!0&&(B=xe),se.resetTextureUnits();const Re=B.fog,Pe=j.isMeshStandardMaterial?B.environment:null,Oe=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ni,Fe=(j.isMeshStandardMaterial?ie:fe).get(j.envMap||Pe),ke=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,Yt=!!q.morphAttributes.color;let Et=vi;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=M.toneMapping);const Fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Fn!==void 0?Fn.length:0,qe=ce.get(j),Oo=m.state.lights;if(de===!0&&(pe===!0||b!==S)){const jt=b===S&&j.id===V;Te.setState(j,b,jt)}let gt=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Oo.state.version||qe.outputColorSpace!==Oe||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||qe.envMap!==Fe||j.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==ke||qe.vertexTangents!==ze||qe.morphTargets!==Ge||qe.morphNormals!==ht||qe.morphColors!==Yt||qe.toneMapping!==Et||H.isWebGL2===!0&&qe.morphTargetsCount!==lt)&&(gt=!0):(gt=!0,qe.__version=j.version);let yi=qe.currentProgram;gt===!0&&(yi=xs(j,B,Z));let Zl=!1,Lr=!1,Fo=!1;const It=yi.getUniforms(),Ti=qe.uniforms;if(k.useProgram(yi.program)&&(Zl=!0,Lr=!0,Fo=!0),j.id!==V&&(V=j.id,Lr=!0),Zl||S!==b){It.setValue(g,"projectionMatrix",b.projectionMatrix),It.setValue(g,"viewMatrix",b.matrixWorldInverse);const jt=It.map.cameraPosition;jt!==void 0&&jt.setValue(g,ee.setFromMatrixPosition(b.matrixWorld)),H.logarithmicDepthBuffer&&It.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Lr=!0,Fo=!0)}if(Z.isSkinnedMesh){It.setOptional(g,Z,"bindMatrix"),It.setOptional(g,Z,"bindMatrixInverse");const jt=Z.skeleton;jt&&(H.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),It.setValue(g,"boneTexture",jt.boneTexture,se),It.setValue(g,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bo=q.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0&&H.isWebGL2===!0)&&Ce.update(Z,q,yi),(Lr||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,It.setValue(g,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ti.envMap.value=Fe,Ti.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Lr&&(It.setValue(g,"toneMappingExposure",M.toneMappingExposure),qe.needsLights&&Hd(Ti,Fo),Re&&j.fog===!0&&te.refreshFogUniforms(Ti,Re),te.refreshMaterialUniforms(Ti,j,z,K,ye),Ks.upload(g,jl(qe),Ti,se)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ks.upload(g,jl(qe),Ti,se),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(g,"center",Z.center),It.setValue(g,"modelViewMatrix",Z.modelViewMatrix),It.setValue(g,"normalMatrix",Z.normalMatrix),It.setValue(g,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const jt=j.uniformsGroups;for(let Ho=0,Gd=jt.length;Ho<Gd;Ho++)if(H.isWebGL2){const Jl=jt[Ho];Ie.update(Jl,yi),Ie.bind(Jl,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Hd(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,q){ce.get(b.texture).__webglTexture=B,ce.get(b.depthTexture).__webglTexture=q;const j=ce.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const q=ce.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,q=0){C=b,R=B,P=q;let j=!0,Z=null,Re=!1,Pe=!1;if(b){const Fe=ce.get(b);Fe.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(g.FRAMEBUFFER,null),j=!1):Fe.__webglFramebuffer===void 0?se.setupRenderTarget(b):Fe.__hasExternalTextures&&se.rebindTextures(b,ce.get(b.texture).__webglTexture,ce.get(b.depthTexture).__webglTexture);const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const ze=ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?Z=ze[B][q]:Z=ze[B],Re=!0):H.isWebGL2&&b.samples>0&&se.useMultisampledRTT(b)===!1?Z=ce.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[q]:Z=ze,A.copy(b.viewport),X.copy(b.scissor),F=b.scissorTest}else A.copy(ue).multiplyScalar(z).floor(),X.copy(N).multiplyScalar(z).floor(),F=O;if(k.bindFramebuffer(g.FRAMEBUFFER,Z)&&H.drawBuffers&&j&&k.drawBuffers(b,Z),k.viewport(A),k.scissor(X),k.setScissorTest(F),Re){const Fe=ce.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,q)}else if(Pe){const Fe=ce.get(b.texture),ke=B||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,ke)}V=-1},this.readRenderTargetPixels=function(b,B,q,j,Z,Re,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){k.bindFramebuffer(g.FRAMEBUFFER,Oe);try{const Fe=b.texture,ke=Fe.format,ze=Fe.type;if(ke!==xn&&He.convert(ke)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===ls&&(L.has("EXT_color_buffer_half_float")||H.isWebGL2&&L.has("EXT_color_buffer_float"));if(ze!==xi&&He.convert(ze)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===gi&&(H.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-j&&q>=0&&q<=b.height-Z&&g.readPixels(B,q,j,Z,He.convert(ke),He.convert(ze),Re)}finally{const Fe=C!==null?ce.get(C).__webglFramebuffer:null;k.bindFramebuffer(g.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,B,q=0){const j=Math.pow(2,-q),Z=Math.floor(B.image.width*j),Re=Math.floor(B.image.height*j);se.setTexture2D(B,0),g.copyTexSubImage2D(g.TEXTURE_2D,q,0,0,b.x,b.y,Z,Re),k.unbindTexture()},this.copyTextureToTexture=function(b,B,q,j=0){const Z=B.image.width,Re=B.image.height,Pe=He.convert(q.format),Oe=He.convert(q.type);se.setTexture2D(q,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,j,b.x,b.y,Z,Re,Pe,Oe,B.image.data):B.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,j,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,j,b.x,b.y,Pe,Oe,B.image),j===0&&q.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q,j,Z=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,Oe=b.max.z-b.min.z+1,Fe=He.convert(j.format),ke=He.convert(j.type);let ze;if(j.isData3DTexture)se.setTexture3D(j,0),ze=g.TEXTURE_3D;else if(j.isDataArrayTexture)se.setTexture2DArray(j,0),ze=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,j.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,j.unpackAlignment);const Ge=g.getParameter(g.UNPACK_ROW_LENGTH),ht=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Yt=g.getParameter(g.UNPACK_SKIP_PIXELS),Et=g.getParameter(g.UNPACK_SKIP_ROWS),Fn=g.getParameter(g.UNPACK_SKIP_IMAGES),lt=q.isCompressedTexture?q.mipmaps[0]:q.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,lt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,lt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,b.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,b.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?g.texSubImage3D(ze,Z,B.x,B.y,B.z,Re,Pe,Oe,Fe,ke,lt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(ze,Z,B.x,B.y,B.z,Re,Pe,Oe,Fe,lt.data)):g.texSubImage3D(ze,Z,B.x,B.y,B.z,Re,Pe,Oe,Fe,ke,lt),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Yt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Et),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Fn),Z===0&&j.generateMipmaps&&g.generateMipmap(ze),k.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),k.unbindTexture()},this.resetState=function(){R=0,P=0,C=null,k.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Uo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Wi:gd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?At:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ly extends Nd{}ly.prototype.isWebGL1Renderer=!0;class cy extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Wl extends ri{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const h=(n-e)/r,p=new W,v=new Je;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,u.push(v.x,v.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const T=d+m,M=T,y=T+i+1,R=T+i+2,P=T+1;o.push(M,y,P),o.push(y,R,P)}}this.setIndex(o),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(c,3)),this.setAttribute("uv",new sn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xl extends ri{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new W,h=new W,p=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],M=d/i;let y=0;d===0&&a===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let R=0;R<=n;R++){const P=R/n;f.x=-e*Math.cos(r+P*s)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+M*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(P+y,1-M),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<n;T++){const M=u[d][T+1],y=u[d][T],R=u[d+1][T],P=u[d+1][T+1];(d!==0||a>0)&&p.push(M,y,P),(d!==i-1||l<Math.PI)&&p.push(y,R,P)}this.setIndex(p),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uy extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Na=new dt,Tf=new W,bf=new W;class fy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tf),bf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bf),n.updateMatrixWorld(),Na.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hy extends fy{constructor(){super(new Pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends Od{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class py extends Od{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);const my={class:"ar-page"},gy={key:0,class:"overlay centered"},_y={key:1,class:"overlay centered error-box"},vy={key:2,class:"overlay centered start-box"},xy={key:0,class:"points-panel"},Sy={class:"panel-header"},My={class:"point-list"},Ey={class:"coords"},yy=["onClick"],Ty={key:0,class:"empty"},by={key:0,class:"reticle-hint"},Ay=hs({__name:"ARView",setup(t){const e=jh(),n=Ul(),i=Nl(),r=od(),s=Tt(()=>e.params.id),a=Tt(()=>i.getRoomById(s.value)),o=Tt(()=>r.getPoints(s.value)),l=_n(null),c=_n(null),u=_n(""),f=_n(!1),h=_n(!1);let p=null,v=null,_=null,m=null,d=null,T=!1,M=null,y=null,R=!1;const P=new Map,C=new Map;To(async()=>{if(!a.value){n.replace("/");return}if(!navigator.xr){c.value=!1,u.value="WebXR n'est pas disponible sur ce navigateur.";return}try{c.value=await navigator.xr.isSessionSupported("immersive-ar"),c.value||(u.value="La RA immersive n'est pas supportée sur cet appareil.")}catch{c.value=!1,u.value="Impossible de vérifier le support WebXR."}}),bl(()=>{N()});async function V(){if(navigator.xr){try{m=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["anchors","dom-overlay"]})}catch(O){u.value=`Impossible de démarrer la session AR : ${O.message}`;return}m.addEventListener("end",he),m.addEventListener("select",X),S(),p.xr.setReferenceSpaceType("local"),await p.xr.setSession(m),h.value=!0,p.setAnimationLoop(A)}}function S(){v=new cy,_=new un(70,window.innerWidth/window.innerHeight,.01,20),p=new Nd({canvas:l.value,antialias:!0,alpha:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.xr.enabled=!0,v.add(new py(16777215,1.5));const O=new dy(16777215,1);O.position.set(1,2,1),v.add(O);const Q=new Wl(.04,.06,32);Q.applyMatrix4(new dt().makeRotationX(-Math.PI/2));const de=new zl({color:16777215,side:Dn});y=new Un(Q,de),y.matrixAutoUpdate=!1,y.visible=!1,v.add(y);for(const pe of o.value)K(pe);l.value.addEventListener("pointerdown",F)}function A(O,Q){if(!m||!p||!v||!_)return;M=Q;const de=p.xr.getReferenceSpace();if(de){if(T||(T=!0,m.requestReferenceSpace("viewer").then(pe=>{var le;const ye=m;if(!ye)return;const G=(le=ye.requestHitTestSource)==null?void 0:le.call(ye,{space:pe});G&&G.then(ee=>{d=ee})}).catch(()=>{})),d&&y){const pe=Q.getHitTestResults(d);if(pe.length>0){const G=pe[0].getPose(de);G&&(R=!0,y.visible=!0,y.matrix.fromArray(G.transform.matrix))}else R=!1,y.visible=!1}$(Q,de),p.render(v,_)}}function X(O){J(O.frame)}function F(){J(M)}async function J(O){if(!R||!y||!v)return;const Q=new W,de=new qi,pe=new W;y.matrix.decompose(Q,de,pe);const ye=r.addPoint(s.value,{position:{x:Q.x,y:Q.y,z:Q.z},quaternion:{x:de.x,y:de.y,z:de.z,w:de.w}});K(ye),O&&await D(ye.id,O)}async function D(O,Q){if(!d)return;const de=Q.getHitTestResults(d);if(de.length===0)return;const pe=de[0];if(pe.createAnchor)try{const ye=await pe.createAnchor();C.set(O,ye)}catch{}}function $(O,Q){if(C.size===0)return;const de=new W,pe=new qi,ye=new W;for(const[G,le]of C){const ee=P.get(G);if(!ee)continue;const xe=O.getPose(le.anchorSpace,Q);if(!xe){ee.visible=!1;continue}ee.visible=!0,new dt().fromArray(xe.transform.matrix).decompose(de,pe,ye),ee.position.copy(de),ee.quaternion.copy(pe)}}function K(O){if(!v)return;const Q=new Xl(.03,16,16),de=new uy({color:16729156}),pe=new Un(Q,de);pe.position.set(O.pose.position.x,O.pose.position.y,O.pose.position.z),v.add(pe),P.set(O.id,pe)}function z(O){r.removePoint(s.value,O);const Q=P.get(O);Q&&v&&(v.remove(Q),Q.geometry.dispose(),Q.material.dispose()),P.delete(O);const de=C.get(O);de&&(de.delete(),C.delete(O))}function oe(){for(const[O,Q]of P)v&&v.remove(Q),Q.geometry.dispose(),Q.material.dispose(),P.delete(O);for(const[O,Q]of C)Q.delete(),C.delete(O);r.clearPoints(s.value)}function he(){N(),n.push(`/rooms/${s.value}`)}async function ue(){m?await m.end():(N(),n.push(`/rooms/${s.value}`))}function N(){var O;h.value=!1,m==null||m.removeEventListener("select",X),(O=l.value)==null||O.removeEventListener("pointerdown",F),p==null||p.setAnimationLoop(null);for(const Q of P.values())Q.geometry.dispose(),Q.material.dispose();P.clear();for(const Q of C.values())Q.delete();C.clear(),y&&(y.geometry.dispose(),y.material.dispose(),y=null),p==null||p.dispose(),p=null,v=null,_=null,d=null,T=!1,M=null,R=!1,m=null}return(O,Q)=>{var de;return at(),ut("div",my,[$e("canvas",{ref_key:"canvasRef",ref:l,class:"ar-canvas"},null,512),c.value===null?(at(),ut("div",gy,[...Q[3]||(Q[3]=[$e("p",null,"Vérification du support WebXR…",-1)])])):c.value===!1?(at(),ut("div",_y,[$e("p",null,Jt(u.value),1),$e("button",{onClick:Q[0]||(Q[0]=pe=>nn(n).push(`/rooms/${s.value}`))},"Retour")])):h.value?(at(),ut(Wt,{key:3},[$e("button",{class:"hud-btn ar-back-btn",onClick:ue},"← Retour"),$e("button",{class:"hud-btn exit-btn",onClick:ue},"✕ Quitter"),$e("button",{class:"hud-btn list-btn",onClick:Q[2]||(Q[2]=pe=>f.value=!f.value)}," ☰ Points ("+Jt(o.value.length)+") ",1),qt(Ym,{name:"slide"},{default:oh(()=>[f.value?(at(),ut("div",xy,[$e("div",Sy,[Q[5]||(Q[5]=$e("span",null,"Points placés",-1)),o.value.length>0?(at(),ut("button",{key:0,class:"danger-btn",onClick:oe}," Tout supprimer ")):mr("",!0)]),$e("ul",My,[(at(!0),ut(Wt,null,Al(o.value,pe=>(at(),ut("li",{key:pe.id,class:"point-item"},[$e("span",Ey," ("+Jt(pe.pose.position.x.toFixed(2))+", "+Jt(pe.pose.position.y.toFixed(2))+", "+Jt(pe.pose.position.z.toFixed(2))+") ",1),$e("button",{class:"danger-btn small",onClick:ye=>z(pe.id)},"✕",8,yy)]))),128)),o.value.length===0?(at(),ut("li",Ty,"Tapez l'écran pour placer un point.")):mr("",!0)])])):mr("",!0)]),_:1}),nn(R)?mr("",!0):(at(),ut("div",by," Pointez vers une surface détectée… "))],64)):(at(),ut("div",vy,[$e("h2",null,Jt((de=a.value)==null?void 0:de.name),1),Q[4]||(Q[4]=$e("p",null,"Pointez la caméra vers une surface plane.",-1)),$e("button",{class:"ar-start-btn",onClick:V},"Lancer la RA"),$e("button",{class:"back-btn",onClick:Q[1]||(Q[1]=pe=>nn(n).push(`/rooms/${s.value}`))},"Annuler")]))])}}}),Ry=Lo(Ay,[["__scopeId","data-v-a1086a0d"]]),wy=O_({history:p_(),routes:[{path:"/",component:X_},{path:"/rooms/:id",component:nv},{path:"/rooms/:id/ar",component:Ry}]}),Cy={};function Py(t,e){const n=Qp("RouterView");return at(),Oh(n)}const Ly=Lo(Cy,[["render",Py]]),ql=Mg(Ly);ql.use(Tg());ql.use(wy);ql.mount("#app");
