(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Xl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jy=Xl(Xy);function Sp(t){return!!t||t===""}function Jl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?t_(r):Jl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(et(t))return t;if(Fe(t))return t}}const Zy=/;(?![^(]*\))/g,e_=/:(.+)/;function t_(t){const e={};return t.split(Zy).forEach(n=>{if(n){const r=n.split(e_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ni(t){let e="";if(et(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=ni(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const We=t=>et(t)?t:t==null?"":ce(t)||Fe(t)&&(t.toString===Rp||!ue(t.toString))?JSON.stringify(t,kp,2):String(t),kp=(t,e)=>e&&e.__v_isRef?kp(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xp(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!ce(e)&&!Op(e)?String(e):e,Re={},Wr=[],jt=()=>{},n_=()=>!1,r_=/^on[^a-z]/,_a=t=>r_.test(t),Zl=t=>t.startsWith("onUpdate:"),wt=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},s_=Object.prototype.hasOwnProperty,ve=(t,e)=>s_.call(t,e),ce=Array.isArray,Gr=t=>ba(t)==="[object Map]",xp=t=>ba(t)==="[object Set]",ue=t=>typeof t=="function",et=t=>typeof t=="string",tu=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Ap=t=>Fe(t)&&ue(t.then)&&ue(t.catch),Rp=Object.prototype.toString,ba=t=>Rp.call(t),i_=t=>ba(t).slice(8,-1),Op=t=>ba(t)==="[object Object]",nu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},o_=/-(\w)/g,rn=wa(t=>t.replace(o_,(e,n)=>n?n.toUpperCase():"")),a_=/\B([A-Z])/g,ys=wa(t=>t.replace(a_,"-$1").toLowerCase()),Ea=wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),dc=wa(t=>t?`on${Ea(t)}`:""),ri=(t,e)=>!Object.is(t,e),ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jh;const c_=()=>jh||(jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Wt;class Np{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Pp(t){return new Np(t)}function l_(t,e=Wt){e&&e.active&&e.effects.push(t)}const ru=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dp=t=>(t.w&Hn)>0,Lp=t=>(t.n&Hn)>0,u_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Hn},h_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Dp(s)&&!Lp(s)?s.delete(t):e[n++]=s,s.w&=~Hn,s.n&=~Hn}e.length=n}},qc=new WeakMap;let Ls=0,Hn=1;const Kc=30;let $t;const gr=Symbol(""),Wc=Symbol("");class su{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,l_(this,r)}run(){if(!this.active)return this.fn();let e=$t,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,$n=!0,Hn=1<<++Ls,Ls<=Kc?u_(this):zh(this),this.fn()}finally{Ls<=Kc&&h_(this),Hn=1<<--Ls,$t=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(zh(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const Mp=[];function _s(){Mp.push($n),$n=!1}function bs(){const t=Mp.pop();$n=t===void 0?!0:t}function Rt(t,e,n){if($n&&$t){let r=qc.get(t);r||qc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ru()),Fp(s)}}function Fp(t,e){let n=!1;Ls<=Kc?Lp(t)||(t.n|=Hn,n=!Dp(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function mn(t,e,n,r,s,i){const o=qc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ce(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ce(t)?nu(n)&&a.push(o.get("length")):(a.push(o.get(gr)),Gr(t)&&a.push(o.get(Wc)));break;case"delete":ce(t)||(a.push(o.get(gr)),Gr(t)&&a.push(o.get(Wc)));break;case"set":Gr(t)&&a.push(o.get(gr));break}if(a.length===1)a[0]&&Gc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Gc(ru(c))}}function Gc(t,e){const n=ce(t)?t:[...t];for(const r of n)r.computed&&Hh(r);for(const r of n)r.computed||Hh(r)}function Hh(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const f_=Xl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tu)),d_=iu(),p_=iu(!1,!0),m_=iu(!0),qh=g_();function g_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)Rt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_s();const r=Ie(this)[e].apply(this,n);return bs(),r}}),t}function iu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?N_:zp:e?jp:Bp).get(r))return r;const o=ce(r);if(!t&&o&&ve(qh,s))return Reflect.get(qh,s,i);const a=Reflect.get(r,s,i);return(tu(s)?$p.has(s):f_(s))||(t||Rt(r,"get",s),e)?a:ze(a)?o&&nu(s)?a:a.value:Fe(a)?t?Hp(a):ws(a):a}}const v_=Up(),y_=Up(!0);function Up(t=!1){return function(n,r,s,i){let o=n[r];if(rs(o)&&ze(o)&&!ze(s))return!1;if(!t&&(!zo(s)&&!rs(s)&&(o=Ie(o),s=Ie(s)),!ce(n)&&ze(o)&&!ze(s)))return o.value=s,!0;const a=ce(n)&&nu(r)?Number(r)<n.length:ve(n,r),c=Reflect.set(n,r,s,i);return n===Ie(i)&&(a?ri(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function __(t,e){const n=ve(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function b_(t,e){const n=Reflect.has(t,e);return(!tu(e)||!$p.has(e))&&Rt(t,"has",e),n}function w_(t){return Rt(t,"iterate",ce(t)?"length":gr),Reflect.ownKeys(t)}const Vp={get:d_,set:v_,deleteProperty:__,has:b_,ownKeys:w_},E_={get:m_,set(t,e){return!0},deleteProperty(t,e){return!0}},I_=wt({},Vp,{get:p_,set:y_}),ou=t=>t,Ia=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(e!==i&&Rt(s,"get",e),Rt(s,"get",i));const{has:o}=Ia(s),a=r?ou:n?lu:si;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(t!==s&&Rt(r,"has",t),Rt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function so(t,e=!1){return t=t.__v_raw,!e&&Rt(Ie(t),"iterate",gr),Reflect.get(t,"size",t)}function Kh(t){t=Ie(t);const e=Ie(this);return Ia(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function Wh(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=Ia(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ri(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Gh(t){const e=Ie(this),{has:n,get:r}=Ia(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function Yh(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function io(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ie(o),c=e?ou:t?lu:si;return!t&&Rt(a,"iterate",gr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function oo(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Gr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ou:e?lu:si;return!e&&Rt(i,"iterate",c?Wc:gr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function T_(){const t={get(i){return no(this,i)},get size(){return so(this)},has:ro,add:Kh,set:Wh,delete:Gh,clear:Yh,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return so(this)},has:ro,add:Kh,set:Wh,delete:Gh,clear:Yh,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:io(!0,!1)},r={get(i){return no(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),r[i]=oo(i,!0,!0)}),[t,n,e,r]}const[C_,S_,k_,x_]=T_();function au(t,e){const n=e?t?x_:k_:t?S_:C_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const A_={get:au(!1,!1)},R_={get:au(!1,!0)},O_={get:au(!0,!1)},Bp=new WeakMap,jp=new WeakMap,zp=new WeakMap,N_=new WeakMap;function P_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D_(t){return t.__v_skip||!Object.isExtensible(t)?0:P_(i_(t))}function ws(t){return rs(t)?t:cu(t,!1,Vp,A_,Bp)}function L_(t){return cu(t,!1,I_,R_,jp)}function Hp(t){return cu(t,!0,E_,O_,zp)}function cu(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=D_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Un(t){return rs(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function zo(t){return!!(t&&t.__v_isShallow)}function qp(t){return Un(t)||rs(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ss(t){return jo(t,"__v_skip",!0),t}const si=t=>Fe(t)?ws(t):t,lu=t=>Fe(t)?Hp(t):t;function Kp(t){$n&&$t&&(t=Ie(t),Fp(t.dep||(t.dep=ru())))}function Wp(t,e){t=Ie(t),t.dep&&Gc(t.dep)}function ze(t){return!!(t&&t.__v_isRef===!0)}function Ye(t){return Gp(t,!1)}function M_(t){return Gp(t,!0)}function Gp(t,e){return ze(t)?t:new F_(t,e)}class F_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:si(e)}get value(){return Kp(this),this._value}set value(e){const n=this.__v_isShallow||zo(e)||rs(e);e=n?e:Ie(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),Wp(this))}}function Te(t){return ze(t)?t.value:t}const $_={get:(t,e,n)=>Te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yp(t){return Un(t)?t:new Proxy(t,$_)}function U_(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=B_(t,n);return e}class V_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function B_(t,e,n){const r=t[e];return ze(r)?r:new V_(t,e,n)}var Qp;class j_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qp]=!1,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,Wp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return Kp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qp="__v_isReadonly";function z_(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new j_(r,s,i||!s,n)}function Vn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ta(i,e,n)}return s}function zt(t,e,n,r){if(ue(t)){const i=Vn(t,e,n,r);return i&&Ap(i)&&i.catch(o=>{Ta(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}function Ta(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Vn(c,null,10,[t,o,a]);return}}H_(t,n,s,r)}function H_(t,e,n,r=!0){console.error(t)}let ii=!1,Yc=!1;const ht=[];let Qt=0;const Yr=[];let cn=null,or=0;const Xp=Promise.resolve();let uu=null;function hu(t){const e=uu||Xp;return t?e.then(this?t.bind(this):t):e}function q_(t){let e=Qt+1,n=ht.length;for(;e<n;){const r=e+n>>>1;oi(ht[r])<t?e=r+1:n=r}return e}function fu(t){(!ht.length||!ht.includes(t,ii&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?ht.push(t):ht.splice(q_(t.id),0,t),Jp())}function Jp(){!ii&&!Yc&&(Yc=!0,uu=Xp.then(em))}function K_(t){const e=ht.indexOf(t);e>Qt&&ht.splice(e,1)}function W_(t){ce(t)?Yr.push(...t):(!cn||!cn.includes(t,t.allowRecurse?or+1:or))&&Yr.push(t),Jp()}function Qh(t,e=ii?Qt+1:0){for(;e<ht.length;e++){const n=ht[e];n&&n.pre&&(ht.splice(e,1),e--,n())}}function Zp(t){if(Yr.length){const e=[...new Set(Yr)];if(Yr.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>oi(n)-oi(r)),or=0;or<cn.length;or++)cn[or]();cn=null,or=0}}const oi=t=>t.id==null?1/0:t.id,G_=(t,e)=>{const n=oi(t)-oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function em(t){Yc=!1,ii=!0,ht.sort(G_);const e=jt;try{for(Qt=0;Qt<ht.length;Qt++){const n=ht[Qt];n&&n.active!==!1&&Vn(n,null,14)}}finally{Qt=0,ht.length=0,Zp(),ii=!1,uu=null,(ht.length||Yr.length)&&em()}}function Y_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Re;f&&(s=n.map(v=>v.trim())),h&&(s=n.map(Hc))}let a,c=r[a=dc(e)]||r[a=dc(rn(e))];!c&&i&&(c=r[a=dc(ys(e))]),c&&zt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(l,t,6,s)}}function tm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ue(t)){const c=l=>{const u=tm(l,e,!0);u&&(a=!0,wt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Fe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):wt(o,i),Fe(t)&&r.set(t,o),o)}function Ca(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,ys(e))||ve(t,e))}let ft=null,Sa=null;function Ho(t){const e=ft;return ft=t,Sa=t&&t.type.__scopeId||null,e}function Pt(t){Sa=t}function Dt(){Sa=null}function ct(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&af(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&af(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:v,ctx:w,inheritAttrs:C}=t;let A,_;const T=Ho(t);try{if(n.shapeFlag&4){const z=s||r;A=Yt(u.call(z,z,h,i,v,f,w)),_=c}else{const z=e;A=Yt(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),_=e.props?c:Q_(c)}}catch(z){Bs.length=0,Ta(z,t,1),A=de(qn)}let $=A;if(_&&C!==!1){const z=Object.keys(_),{shapeFlag:q}=$;z.length&&q&7&&(o&&z.some(Zl)&&(_=X_(_,o)),$=is($,_))}return n.dirs&&($=is($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),A=$,Ho(T),A}const Q_=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},X_=(t,e)=>{const n={};for(const r in t)(!Zl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function J_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ca(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xh(r,o,l):!0:!!o;return!1}function Xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ca(n,i))return!0}return!1}function Z_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const e0=t=>t.__isSuspense;function t0(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):W_(t)}function xo(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=Ze||ft;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}function du(t,e){return pu(t,null,e)}const Jh={};function Qr(t,e,n){return pu(t,e,n)}function pu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Re){const a=Ze;let c,l=!1,u=!1;if(ze(t)?(c=()=>t.value,l=zo(t)):Un(t)?(c=()=>t,r=!0):ce(t)?(u=!0,l=t.some(_=>Un(_)||zo(_)),c=()=>t.map(_=>{if(ze(_))return _.value;if(Un(_))return cr(_);if(ue(_))return Vn(_,a,2)})):ue(t)?e?c=()=>Vn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(t,a,3,[f])}:c=jt,e&&r){const _=c;c=()=>cr(_())}let h,f=_=>{h=A.onStop=()=>{Vn(_,a,4)}};if(ci)return f=jt,e?n&&zt(e,a,3,[c(),u?[]:void 0,f]):c(),jt;let v=u?[]:Jh;const w=()=>{if(!!A.active)if(e){const _=A.run();(r||l||(u?_.some((T,$)=>ri(T,v[$])):ri(_,v)))&&(h&&h(),zt(e,a,3,[_,v===Jh?void 0:v,f]),v=_)}else A.run()};w.allowRecurse=!!e;let C;s==="sync"?C=w:s==="post"?C=()=>Tt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),C=()=>fu(w));const A=new su(c,C);return e?n?w():v=A.run():s==="post"?Tt(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&eu(a.scope.effects,A)}}function n0(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?nm(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Ze;os(this);const a=pu(s,i.bind(r),n);return o?os(o):vr(),a}function nm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function cr(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))cr(t.value,e);else if(ce(t))for(let n=0;n<t.length;n++)cr(t[n],e);else if(xp(t)||Gr(t))t.forEach(n=>{cr(n,e)});else if(Op(t))for(const n in t)cr(t[n],e);return t}function rt(t){return ue(t)?{setup:t,name:t.name}:t}const Vs=t=>!!t.type.__asyncLoader,rm=t=>t.type.__isKeepAlive;function r0(t,e){sm(t,"a",e)}function s0(t,e){sm(t,"da",e)}function sm(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rm(s.parent.vnode)&&i0(r,e,n,s),s=s.parent}}function i0(t,e,n,r){const s=ka(e,t,r,!0);mu(()=>{eu(r[e],s)},n)}function ka(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_s(),os(n);const a=zt(e,n,t,o);return vr(),bs(),a});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=Ze)=>(!ci||t==="sp")&&ka(t,(...r)=>e(...r),n),o0=In("bm"),im=In("m"),a0=In("bu"),c0=In("u"),l0=In("bum"),mu=In("um"),u0=In("sp"),h0=In("rtg"),f0=In("rtc");function d0(t,e=Ze){ka("ec",t,e)}function _t(t,e){const n=ft;if(n===null)return t;const r=Aa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Re]=e[i];ue(o)&&(o={mounted:o,updated:o}),o.deep&&cr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(_s(),zt(c,n,8,[t.el,a,t,e]),bs())}}const om="components";function Tr(t,e){return m0(om,t,!0,e)||t}const p0=Symbol();function m0(t,e,n=!0,r=!1){const s=ft||Ze;if(s){const i=s.type;if(t===om){const a=q0(i,!1);if(a&&(a===e||a===rn(e)||a===Ea(rn(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[rn(e)]||t[Ea(rn(e))])}function Gt(t,e,n,r){let s;const i=n&&n[r];if(ce(t)||et(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function g0(t,e,n={},r,s){if(ft.isCE||ft.parent&&Vs(ft.parent)&&ft.parent.isCE)return de("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),H();const o=i&&am(i(n)),a=ut(Le,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function am(t){return t.some(e=>Wo(e)?!(e.type===qn||e.type===Le&&!am(e.children)):!0)?t:null}const Qc=t=>t?_m(t)?Aa(t)||t.proxy:Qc(t.parent):null,qo=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$emit:t=>t.emit,$options:t=>gu(t),$forceUpdate:t=>t.f||(t.f=()=>fu(t.update)),$nextTick:t=>t.n||(t.n=hu.bind(t.proxy)),$watch:t=>n0.bind(t)}),v0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Re&&ve(r,e))return o[e]=1,r[e];if(s!==Re&&ve(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ve(l,e))return o[e]=3,i[e];if(n!==Re&&ve(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=qo[e];let h,f;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ve(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ve(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Re&&ve(s,e)?(s[e]=n,!0):r!==Re&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&ve(t,o)||e!==Re&&ve(e,o)||(a=i[0])&&ve(a,o)||ve(r,o)||ve(qo,o)||ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xc=!0;function y0(t){const e=gu(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&ef(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:v,updated:w,activated:C,deactivated:A,beforeDestroy:_,beforeUnmount:T,destroyed:$,unmounted:z,render:q,renderTracked:S,renderTriggered:b,errorCaptured:d,serverPrefetch:m,expose:M,inheritAttrs:K,components:O,directives:Q,filters:se}=e;if(l&&_0(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Oe in o){const xe=o[Oe];ue(xe)&&(r[Oe]=xe.bind(n))}if(s){const Oe=s.call(n,n);Fe(Oe)&&(t.data=ws(Oe))}if(Xc=!0,i)for(const Oe in i){const xe=i[Oe],Lt=ue(xe)?xe.bind(n,n):ue(xe.get)?xe.get.bind(n,n):jt,tr=!ue(xe)&&ue(xe.set)?xe.set.bind(n):jt,Mt=Ce({get:Lt,set:tr});Object.defineProperty(r,Oe,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Et=>Mt.value=Et})}if(a)for(const Oe in a)cm(a[Oe],r,n,Oe);if(c){const Oe=ue(c)?c.call(n):c;Reflect.ownKeys(Oe).forEach(xe=>{xo(xe,Oe[xe])})}u&&ef(u,t,"c");function Ue(Oe,xe){ce(xe)?xe.forEach(Lt=>Oe(Lt.bind(n))):xe&&Oe(xe.bind(n))}if(Ue(o0,h),Ue(im,f),Ue(a0,v),Ue(c0,w),Ue(r0,C),Ue(s0,A),Ue(d0,d),Ue(f0,S),Ue(h0,b),Ue(l0,T),Ue(mu,z),Ue(u0,m),ce(M))if(M.length){const Oe=t.exposed||(t.exposed={});M.forEach(xe=>{Object.defineProperty(Oe,xe,{get:()=>n[xe],set:Lt=>n[xe]=Lt})})}else t.exposed||(t.exposed={});q&&t.render===jt&&(t.render=q),K!=null&&(t.inheritAttrs=K),O&&(t.components=O),Q&&(t.directives=Q)}function _0(t,e,n=jt,r=!1){ce(t)&&(t=Jc(t));for(const s in t){const i=t[s];let o;Fe(i)?"default"in i?o=en(i.from||s,i.default,!0):o=en(i.from||s):o=en(i),ze(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ef(t,e,n){zt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cm(t,e,n,r){const s=r.includes(".")?nm(n,r):()=>n[r];if(et(t)){const i=e[t];ue(i)&&Qr(s,i)}else if(ue(t))Qr(s,t.bind(n));else if(Fe(t))if(ce(t))t.forEach(i=>cm(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Qr(s,i,t)}}function gu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ko(c,l,o,!0)),Ko(c,e,o)),Fe(e)&&i.set(e,c),c}function Ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ko(t,i,n,!0),s&&s.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=b0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const b0={data:tf,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:sr,directives:sr,watch:E0,provide:tf,inject:w0};function tf(t,e){return e?t?function(){return wt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function w0(t,e){return sr(Jc(t),Jc(e))}function Jc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?wt(wt(Object.create(null),t),e):e}function E0(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function I0(t,e,n,r=!1){const s={},i={};jo(i,xa,1),t.propsDefaults=Object.create(null),lm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:L_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function T0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ca(t.emitsOptions,f))continue;const v=e[f];if(c)if(ve(i,f))v!==i[f]&&(i[f]=v,l=!0);else{const w=rn(f);s[w]=Zc(c,a,w,v,t,!1)}else v!==i[f]&&(i[f]=v,l=!0)}}}else{lm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ve(e,h)&&((u=ys(h))===h||!ve(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Zc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ve(e,h)&&!0)&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function lm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(So(c))continue;const l=e[c];let u;s&&ve(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ca(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Ie(n),l=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Zc(s,c,h,l[h],t,!ve(l,h))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ve(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(os(s),r=l[n]=c.call(null,e),vr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ys(n))&&(r=!0))}return r}function um(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ue(t)){const u=h=>{c=!0;const[f,v]=um(h,e,!0);wt(o,f),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Fe(t)&&r.set(t,Wr),Wr;if(ce(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);nf(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=rn(u);if(nf(h)){const f=i[u],v=o[h]=ce(f)||ue(f)?{type:f}:f;if(v){const w=of(Boolean,v.type),C=of(String,v.type);v[0]=w>-1,v[1]=C<0||w<C,(w>-1||ve(v,"default"))&&a.push(h)}}}const l=[o,a];return Fe(t)&&r.set(t,l),l}function nf(t){return t[0]!=="$"}function rf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sf(t,e){return rf(t)===rf(e)}function of(t,e){return ce(e)?e.findIndex(n=>sf(n,t)):ue(e)&&sf(e,t)?0:-1}const hm=t=>t[0]==="_"||t==="$stable",vu=t=>ce(t)?t.map(Yt):[Yt(t)],C0=(t,e,n)=>{if(e._n)return e;const r=ct((...s)=>vu(e(...s)),n);return r._c=!1,r},fm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hm(s))continue;const i=t[s];if(ue(i))e[s]=C0(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},dm=(t,e)=>{const n=vu(e);t.slots.default=()=>n},S0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),jo(e,"_",n)):fm(e,t.slots={})}else t.slots={},e&&dm(t,e);jo(t.slots,xa,1)},k0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(wt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,fm(e,s)),o=e}else e&&(dm(t,e),o={default:1});if(i)for(const a in s)!hm(a)&&!(a in o)&&delete s[a]};function pm(){return{app:null,config:{isNativeTag:n_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x0=0;function A0(t,e){return function(r,s=null){ue(r)||(r=Object.assign({},r)),s!=null&&!Fe(s)&&(s=null);const i=pm(),o=new Set;let a=!1;const c=i.app={_uid:x0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:W0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ue(l.install)?(o.add(l),l.install(c,...u)):ue(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=de(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Aa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function el(t,e,n,r,s=!1){if(ce(t)){t.forEach((f,v)=>el(f,e&&(ce(e)?e[v]:e),n,r,s));return}if(Vs(r)&&!s)return;const i=r.shapeFlag&4?Aa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(et(l)?(u[l]=null,ve(h,l)&&(h[l]=null)):ze(l)&&(l.value=null)),ue(c))Vn(c,a,12,[o,u]);else{const f=et(c),v=ze(c);if(f||v){const w=()=>{if(t.f){const C=f?ve(h,c)?h[c]:u[c]:c.value;s?ce(C)&&eu(C,i):ce(C)?C.includes(i)||C.push(i):f?(u[c]=[i],ve(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ve(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Tt(w,n)):w()}}}const Tt=t0;function R0(t){return O0(t)}function O0(t,e){const n=c_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:v=jt,insertStaticContent:w}=t,C=(p,y,E,I=null,x=null,D=null,V=!1,P=null,L=!!y.dynamicChildren)=>{if(p===y)return;p&&!Os(p,y)&&(I=F(p),Et(p,x,D,!0),p=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:R,ref:Z,shapeFlag:W}=y;switch(R){case yu:A(p,y,E,I);break;case qn:_(p,y,E,I);break;case Ao:p==null&&T(y,E,I,V);break;case Le:O(p,y,E,I,x,D,V,P,L);break;default:W&1?q(p,y,E,I,x,D,V,P,L):W&6?Q(p,y,E,I,x,D,V,P,L):(W&64||W&128)&&R.process(p,y,E,I,x,D,V,P,L,_e)}Z!=null&&x&&el(Z,p&&p.ref,D,y||p,!y)},A=(p,y,E,I)=>{if(p==null)r(y.el=a(y.children),E,I);else{const x=y.el=p.el;y.children!==p.children&&l(x,y.children)}},_=(p,y,E,I)=>{p==null?r(y.el=c(y.children||""),E,I):y.el=p.el},T=(p,y,E,I)=>{[p.el,p.anchor]=w(p.children,y,E,I,p.el,p.anchor)},$=({el:p,anchor:y},E,I)=>{let x;for(;p&&p!==y;)x=f(p),r(p,E,I),p=x;r(y,E,I)},z=({el:p,anchor:y})=>{let E;for(;p&&p!==y;)E=f(p),s(p),p=E;s(y)},q=(p,y,E,I,x,D,V,P,L)=>{V=V||y.type==="svg",p==null?S(y,E,I,x,D,V,P,L):m(p,y,x,D,V,P,L)},S=(p,y,E,I,x,D,V,P)=>{let L,R;const{type:Z,props:W,shapeFlag:ee,transition:ae,dirs:ge}=p;if(L=p.el=o(p.type,D,W&&W.is,W),ee&8?u(L,p.children):ee&16&&d(p.children,L,null,I,x,D&&Z!=="foreignObject",V,P),ge&&nr(p,null,I,"created"),W){for(const Ae in W)Ae!=="value"&&!So(Ae)&&i(L,Ae,null,W[Ae],D,p.children,I,x,B);"value"in W&&i(L,"value",null,W.value),(R=W.onVnodeBeforeMount)&&Kt(R,I,p)}b(L,p,p.scopeId,V,I),ge&&nr(p,null,I,"beforeMount");const Ne=(!x||x&&!x.pendingBranch)&&ae&&!ae.persisted;Ne&&ae.beforeEnter(L),r(L,y,E),((R=W&&W.onVnodeMounted)||Ne||ge)&&Tt(()=>{R&&Kt(R,I,p),Ne&&ae.enter(L),ge&&nr(p,null,I,"mounted")},x)},b=(p,y,E,I,x)=>{if(E&&v(p,E),I)for(let D=0;D<I.length;D++)v(p,I[D]);if(x){let D=x.subTree;if(y===D){const V=x.vnode;b(p,V,V.scopeId,V.slotScopeIds,x.parent)}}},d=(p,y,E,I,x,D,V,P,L=0)=>{for(let R=L;R<p.length;R++){const Z=p[R]=P?Nn(p[R]):Yt(p[R]);C(null,Z,y,E,I,x,D,V,P)}},m=(p,y,E,I,x,D,V)=>{const P=y.el=p.el;let{patchFlag:L,dynamicChildren:R,dirs:Z}=y;L|=p.patchFlag&16;const W=p.props||Re,ee=y.props||Re;let ae;E&&rr(E,!1),(ae=ee.onVnodeBeforeUpdate)&&Kt(ae,E,y,p),Z&&nr(y,p,E,"beforeUpdate"),E&&rr(E,!0);const ge=x&&y.type!=="foreignObject";if(R?M(p.dynamicChildren,R,P,E,I,ge,D):V||xe(p,y,P,null,E,I,ge,D,!1),L>0){if(L&16)K(P,y,W,ee,E,I,x);else if(L&2&&W.class!==ee.class&&i(P,"class",null,ee.class,x),L&4&&i(P,"style",W.style,ee.style,x),L&8){const Ne=y.dynamicProps;for(let Ae=0;Ae<Ne.length;Ae++){const He=Ne[Ae],Ft=W[He],Mr=ee[He];(Mr!==Ft||He==="value")&&i(P,He,Ft,Mr,x,p.children,E,I,B)}}L&1&&p.children!==y.children&&u(P,y.children)}else!V&&R==null&&K(P,y,W,ee,E,I,x);((ae=ee.onVnodeUpdated)||Z)&&Tt(()=>{ae&&Kt(ae,E,y,p),Z&&nr(y,p,E,"updated")},I)},M=(p,y,E,I,x,D,V)=>{for(let P=0;P<y.length;P++){const L=p[P],R=y[P],Z=L.el&&(L.type===Le||!Os(L,R)||L.shapeFlag&70)?h(L.el):E;C(L,R,Z,null,I,x,D,V,!0)}},K=(p,y,E,I,x,D,V)=>{if(E!==I){if(E!==Re)for(const P in E)!So(P)&&!(P in I)&&i(p,P,E[P],null,V,y.children,x,D,B);for(const P in I){if(So(P))continue;const L=I[P],R=E[P];L!==R&&P!=="value"&&i(p,P,R,L,V,y.children,x,D,B)}"value"in I&&i(p,"value",E.value,I.value)}},O=(p,y,E,I,x,D,V,P,L)=>{const R=y.el=p?p.el:a(""),Z=y.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:ee,slotScopeIds:ae}=y;ae&&(P=P?P.concat(ae):ae),p==null?(r(R,E,I),r(Z,E,I),d(y.children,E,Z,x,D,V,P,L)):W>0&&W&64&&ee&&p.dynamicChildren?(M(p.dynamicChildren,ee,E,x,D,V,P),(y.key!=null||x&&y===x.subTree)&&mm(p,y,!0)):xe(p,y,E,Z,x,D,V,P,L)},Q=(p,y,E,I,x,D,V,P,L)=>{y.slotScopeIds=P,p==null?y.shapeFlag&512?x.ctx.activate(y,E,I,V,L):se(y,E,I,x,D,V,L):he(p,y,L)},se=(p,y,E,I,x,D,V)=>{const P=p.component=V0(p,I,x);if(rm(p)&&(P.ctx.renderer=_e),B0(P),P.asyncDep){if(x&&x.registerDep(P,Ue),!p.el){const L=P.subTree=de(qn);_(null,L,y,E)}return}Ue(P,p,y,E,x,D,V)},he=(p,y,E)=>{const I=y.component=p.component;if(J_(p,y,E))if(I.asyncDep&&!I.asyncResolved){Oe(I,y,E);return}else I.next=y,K_(I.update),I.update();else y.el=p.el,I.vnode=y},Ue=(p,y,E,I,x,D,V)=>{const P=()=>{if(p.isMounted){let{next:Z,bu:W,u:ee,parent:ae,vnode:ge}=p,Ne=Z,Ae;rr(p,!1),Z?(Z.el=ge.el,Oe(p,Z,V)):Z=ge,W&&ko(W),(Ae=Z.props&&Z.props.onVnodeBeforeUpdate)&&Kt(Ae,ae,Z,ge),rr(p,!0);const He=pc(p),Ft=p.subTree;p.subTree=He,C(Ft,He,h(Ft.el),F(Ft),p,x,D),Z.el=He.el,Ne===null&&Z_(p,He.el),ee&&Tt(ee,x),(Ae=Z.props&&Z.props.onVnodeUpdated)&&Tt(()=>Kt(Ae,ae,Z,ge),x)}else{let Z;const{el:W,props:ee}=y,{bm:ae,m:ge,parent:Ne}=p,Ae=Vs(y);if(rr(p,!1),ae&&ko(ae),!Ae&&(Z=ee&&ee.onVnodeBeforeMount)&&Kt(Z,Ne,y),rr(p,!0),W&&fe){const He=()=>{p.subTree=pc(p),fe(W,p.subTree,p,x,null)};Ae?y.type.__asyncLoader().then(()=>!p.isUnmounted&&He()):He()}else{const He=p.subTree=pc(p);C(null,He,E,I,p,x,D),y.el=He.el}if(ge&&Tt(ge,x),!Ae&&(Z=ee&&ee.onVnodeMounted)){const He=y;Tt(()=>Kt(Z,Ne,He),x)}(y.shapeFlag&256||Ne&&Vs(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&p.a&&Tt(p.a,x),p.isMounted=!0,y=E=I=null}},L=p.effect=new su(P,()=>fu(R),p.scope),R=p.update=()=>L.run();R.id=p.uid,rr(p,!0),R()},Oe=(p,y,E)=>{y.component=p;const I=p.vnode.props;p.vnode=y,p.next=null,T0(p,y.props,I,E),k0(p,y.children,E),_s(),Qh(),bs()},xe=(p,y,E,I,x,D,V,P,L=!1)=>{const R=p&&p.children,Z=p?p.shapeFlag:0,W=y.children,{patchFlag:ee,shapeFlag:ae}=y;if(ee>0){if(ee&128){tr(R,W,E,I,x,D,V,P,L);return}else if(ee&256){Lt(R,W,E,I,x,D,V,P,L);return}}ae&8?(Z&16&&B(R,x,D),W!==R&&u(E,W)):Z&16?ae&16?tr(R,W,E,I,x,D,V,P,L):B(R,x,D,!0):(Z&8&&u(E,""),ae&16&&d(W,E,I,x,D,V,P,L))},Lt=(p,y,E,I,x,D,V,P,L)=>{p=p||Wr,y=y||Wr;const R=p.length,Z=y.length,W=Math.min(R,Z);let ee;for(ee=0;ee<W;ee++){const ae=y[ee]=L?Nn(y[ee]):Yt(y[ee]);C(p[ee],ae,E,null,x,D,V,P,L)}R>Z?B(p,x,D,!0,!1,W):d(y,E,I,x,D,V,P,L,W)},tr=(p,y,E,I,x,D,V,P,L)=>{let R=0;const Z=y.length;let W=p.length-1,ee=Z-1;for(;R<=W&&R<=ee;){const ae=p[R],ge=y[R]=L?Nn(y[R]):Yt(y[R]);if(Os(ae,ge))C(ae,ge,E,null,x,D,V,P,L);else break;R++}for(;R<=W&&R<=ee;){const ae=p[W],ge=y[ee]=L?Nn(y[ee]):Yt(y[ee]);if(Os(ae,ge))C(ae,ge,E,null,x,D,V,P,L);else break;W--,ee--}if(R>W){if(R<=ee){const ae=ee+1,ge=ae<Z?y[ae].el:I;for(;R<=ee;)C(null,y[R]=L?Nn(y[R]):Yt(y[R]),E,ge,x,D,V,P,L),R++}}else if(R>ee)for(;R<=W;)Et(p[R],x,D,!0),R++;else{const ae=R,ge=R,Ne=new Map;for(R=ge;R<=ee;R++){const At=y[R]=L?Nn(y[R]):Yt(y[R]);At.key!=null&&Ne.set(At.key,R)}let Ae,He=0;const Ft=ee-ge+1;let Mr=!1,Uh=0;const Rs=new Array(Ft);for(R=0;R<Ft;R++)Rs[R]=0;for(R=ae;R<=W;R++){const At=p[R];if(He>=Ft){Et(At,x,D,!0);continue}let qt;if(At.key!=null)qt=Ne.get(At.key);else for(Ae=ge;Ae<=ee;Ae++)if(Rs[Ae-ge]===0&&Os(At,y[Ae])){qt=Ae;break}qt===void 0?Et(At,x,D,!0):(Rs[qt-ge]=R+1,qt>=Uh?Uh=qt:Mr=!0,C(At,y[qt],E,null,x,D,V,P,L),He++)}const Vh=Mr?N0(Rs):Wr;for(Ae=Vh.length-1,R=Ft-1;R>=0;R--){const At=ge+R,qt=y[At],Bh=At+1<Z?y[At+1].el:I;Rs[R]===0?C(null,qt,E,Bh,x,D,V,P,L):Mr&&(Ae<0||R!==Vh[Ae]?Mt(qt,E,Bh,2):Ae--)}}},Mt=(p,y,E,I,x=null)=>{const{el:D,type:V,transition:P,children:L,shapeFlag:R}=p;if(R&6){Mt(p.component.subTree,y,E,I);return}if(R&128){p.suspense.move(y,E,I);return}if(R&64){V.move(p,y,E,_e);return}if(V===Le){r(D,y,E);for(let W=0;W<L.length;W++)Mt(L[W],y,E,I);r(p.anchor,y,E);return}if(V===Ao){$(p,y,E);return}if(I!==2&&R&1&&P)if(I===0)P.beforeEnter(D),r(D,y,E),Tt(()=>P.enter(D),x);else{const{leave:W,delayLeave:ee,afterLeave:ae}=P,ge=()=>r(D,y,E),Ne=()=>{W(D,()=>{ge(),ae&&ae()})};ee?ee(D,ge,Ne):Ne()}else r(D,y,E)},Et=(p,y,E,I=!1,x=!1)=>{const{type:D,props:V,ref:P,children:L,dynamicChildren:R,shapeFlag:Z,patchFlag:W,dirs:ee}=p;if(P!=null&&el(P,null,E,p,!0),Z&256){y.ctx.deactivate(p);return}const ae=Z&1&&ee,ge=!Vs(p);let Ne;if(ge&&(Ne=V&&V.onVnodeBeforeUnmount)&&Kt(Ne,y,p),Z&6)k(p.component,E,I);else{if(Z&128){p.suspense.unmount(E,I);return}ae&&nr(p,null,y,"beforeUnmount"),Z&64?p.type.remove(p,y,E,x,_e,I):R&&(D!==Le||W>0&&W&64)?B(R,y,E,!1,!0):(D===Le&&W&384||!x&&Z&16)&&B(L,y,E),I&&Lr(p)}(ge&&(Ne=V&&V.onVnodeUnmounted)||ae)&&Tt(()=>{Ne&&Kt(Ne,y,p),ae&&nr(p,null,y,"unmounted")},E)},Lr=p=>{const{type:y,el:E,anchor:I,transition:x}=p;if(y===Le){to(E,I);return}if(y===Ao){z(p);return}const D=()=>{s(E),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:V,delayLeave:P}=x,L=()=>V(E,D);P?P(p.el,D,L):L()}else D()},to=(p,y)=>{let E;for(;p!==y;)E=f(p),s(p),p=E;s(y)},k=(p,y,E)=>{const{bum:I,scope:x,update:D,subTree:V,um:P}=p;I&&ko(I),x.stop(),D&&(D.active=!1,Et(V,p,y,E)),P&&Tt(P,y),Tt(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},B=(p,y,E,I=!1,x=!1,D=0)=>{for(let V=D;V<p.length;V++)Et(p[V],y,E,I,x)},F=p=>p.shapeFlag&6?F(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),J=(p,y,E)=>{p==null?y._vnode&&Et(y._vnode,null,null,!0):C(y._vnode||null,p,y,null,null,null,E),Qh(),Zp(),y._vnode=p},_e={p:C,um:Et,m:Mt,r:Lr,mt:se,mc:d,pc:xe,pbc:M,n:F,o:t};let $e,fe;return e&&([$e,fe]=e(_e)),{render:J,hydrate:$e,createApp:A0(J,$e)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nn(s[i]),a.el=o.el),n||mm(o,a))}}function N0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const P0=t=>t.__isTeleport,Le=Symbol(void 0),yu=Symbol(void 0),qn=Symbol(void 0),Ao=Symbol(void 0),Bs=[];let Vt=null;function H(t=!1){Bs.push(Vt=t?null:[])}function D0(){Bs.pop(),Vt=Bs[Bs.length-1]||null}let ai=1;function af(t){ai+=t}function gm(t){return t.dynamicChildren=ai>0?Vt||Wr:null,D0(),ai>0&&Vt&&Vt.push(t),t}function re(t,e,n,r,s,i){return gm(g(t,e,n,r,s,i,!0))}function ut(t,e,n,r,s){return gm(de(t,e,n,r,s,!0))}function Wo(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const xa="__vInternal",vm=({key:t})=>t!=null?t:null,Ro=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||ze(t)||ue(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function g(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vm(e),ref:e&&Ro(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(bu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),ai>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const de=L0;function L0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===p0)&&(t=qn),Wo(t)){const a=is(t,e,!0);return n&&bu(a,n),ai>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(K0(t)&&(t=t.__vccOpts),e){e=M0(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=ni(a)),Fe(c)&&(qp(c)&&!ce(c)&&(c=wt({},c)),e.style=Jl(c))}const o=et(t)?1:e0(t)?128:P0(t)?64:Fe(t)?4:ue(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function M0(t){return t?qp(t)||xa in t?wt({},t):t:null}function is(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?F0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vm(a),ref:e&&e.ref?n&&s?ce(s)?s.concat(Ro(e)):[s,Ro(e)]:Ro(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor}}function js(t=" ",e=0){return de(yu,null,t,e)}function _u(t,e){const n=de(Ao,null,t);return n.staticCount=e,n}function mc(t="",e=!1){return e?(H(),ut(qn,null,t)):de(qn,null,t)}function Yt(t){return t==null||typeof t=="boolean"?de(qn):ce(t)?de(Le,null,t.slice()):typeof t=="object"?Nn(t):de(yu,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function bu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(xa in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[js(e)]):n=8);t.children=e,t.shapeFlag|=n}function F0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ni([e.class,r.class]));else if(s==="style")e.style=Jl([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){zt(t,e,7,[n,r])}const $0=pm();let U0=0;function V0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$0,i={uid:U0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(r,s),emitsOptions:tm(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Y_.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const ym=()=>Ze||ft,os=t=>{Ze=t,t.scope.on()},vr=()=>{Ze&&Ze.scope.off(),Ze=null};function _m(t){return t.vnode.shapeFlag&4}let ci=!1;function B0(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=_m(t);I0(t,n,s,e),S0(t,r);const i=s?j0(t,e):void 0;return ci=!1,i}function j0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ss(new Proxy(t.ctx,v0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?H0(t):null;os(t),_s();const i=Vn(r,t,0,[t.props,s]);if(bs(),vr(),Ap(i)){if(i.then(vr,vr),e)return i.then(o=>{cf(t,o,e)}).catch(o=>{Ta(o,t,0)});t.asyncDep=i}else cf(t,i,e)}else bm(t,e)}function cf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Yp(e)),bm(t,n)}let lf;function bm(t,e,n){const r=t.type;if(!t.render){if(!e&&lf&&!r.render){const s=r.template||gu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=wt(wt({isCustomElement:i,delimiters:a},o),c);r.render=lf(s,l)}}t.render=r.render||jt}os(t),_s(),y0(t),bs(),vr()}function z0(t){return new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}})}function H0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=z0(t))},slots:t.slots,emit:t.emit,expose:e}}function Aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yp(ss(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qo)return qo[n](t)}}))}function q0(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function K0(t){return ue(t)&&"__vccOpts"in t}const Ce=(t,e)=>z_(t,e,ci);function Ra(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ce(e)?Wo(e)?de(t,null,[e]):de(t,e):de(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wo(n)&&(n=[n]),de(t,e,n))}const W0="3.2.41",G0="http://www.w3.org/2000/svg",ar=typeof document<"u"?document:null,uf=ar&&ar.createElement("template"),Y0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ar.createElementNS(G0,t):ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uf.innerHTML=r?`<svg>${t}</svg>`:t;const a=uf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Q0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function X0(t,e,n){const r=t.style,s=et(n);if(n&&!s){for(const i in n)tl(r,i,n[i]);if(e&&!et(e))for(const i in e)n[i]==null&&tl(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const hf=/\s*!important$/;function tl(t,e,n){if(ce(n))n.forEach(r=>tl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=J0(t,e);hf.test(n)?t.setProperty(ys(r),n.replace(hf,""),"important"):t[r]=n}}const ff=["Webkit","Moz","ms"],gc={};function J0(t,e){const n=gc[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return gc[e]=r;r=Ea(r);for(let s=0;s<ff.length;s++){const i=ff[s]+r;if(i in t)return gc[e]=i}return e}const df="http://www.w3.org/1999/xlink";function Z0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n);else{const i=Jy(e);n==null||i&&!Sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function tb(t,e,n,r){t.removeEventListener(e,n,r)}function nb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=rb(e);if(r){const l=i[e]=ob(r,s);Vr(t,a,l,c)}else o&&(tb(t,a,o,c),i[e]=void 0)}}const pf=/(?:Once|Passive|Capture)$/;function rb(t){let e;if(pf.test(t)){e={};let r;for(;r=t.match(pf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ys(t.slice(2)),e]}let vc=0;const sb=Promise.resolve(),ib=()=>vc||(sb.then(()=>vc=0),vc=Date.now());function ob(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(ab(r,n.value),e,5,[r])};return n.value=t,n.attached=ib(),n}function ab(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mf=/^on[a-z]/,cb=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Q0(t,r,s):e==="style"?X0(t,n,r):_a(e)?Zl(e)||nb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lb(t,e,r,s))?eb(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Z0(t,e,r,s))};function lb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&mf.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mf.test(e)&&et(n)?!1:e in t}const gf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ko(e,n):e};function ub(t){t.target.composing=!0}function vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=gf(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Hc(a)),t._assign(a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",ub),Vr(t,"compositionend",vf),Vr(t,"change",vf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=gf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Hc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},hb=["ctrl","shift","alt","meta"],fb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hb.some(n=>t[`${n}Key`]&&!e.includes(n))},wm=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=fb[e[s]];if(i&&i(n,e))return}return t(n,...r)},ln={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ns(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ns(t,!0),r.enter(t)):r.leave(t,()=>{Ns(t,!1)}):Ns(t,e))},beforeUnmount(t,{value:e}){Ns(t,e)}};function Ns(t,e){t.style.display=e?t._vod:"none"}const db=wt({patchProp:cb},Y0);let yf;function pb(){return yf||(yf=R0(db))}const mb=(...t)=>{const e=pb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gb(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gb(t){return et(t)?document.querySelector(t):t}var vb=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Em;const Oa=t=>Em=t,Im=Symbol();function nl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var zs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zs||(zs={}));function yb(){const t=Pp(!0),e=t.run(()=>Ye({}));let n=[],r=[];const s=ss({install(i){Oa(s),s._a=i,i.provide(Im,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!vb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Tm=()=>{};function _f(t,e,n,r=Tm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ym()&&mu(s),s}function Fr(t,...e){t.slice().forEach(n=>{n(...e)})}function rl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];nl(s)&&nl(r)&&t.hasOwnProperty(n)&&!ze(r)&&!Un(r)?t[n]=rl(s,r):t[n]=r}return t}const _b=Symbol();function bb(t){return!nl(t)||!t.hasOwnProperty(_b)}const{assign:Pn}=Object;function wb(t){return!!(ze(t)&&t.effect)}function Eb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=U_(n.state.value[t]);return Pn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=ss(Ce(()=>{Oa(n);const v=n._s.get(t);return o[f].call(v,v)})),h),{}))}return c=Cm(t,l,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(f=>{Pn(f,h)})},c}function Cm(t,e,n={},r,s,i){let o;const a=Pn({actions:{}},n),c={deep:!0};let l,u,h=ss([]),f=ss([]),v;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Ye({});let C;function A(b){let d;l=u=!1,typeof b=="function"?(b(r.state.value[t]),d={type:zs.patchFunction,storeId:t,events:v}):(rl(r.state.value[t],b),d={type:zs.patchObject,payload:b,storeId:t,events:v});const m=C=Symbol();hu().then(()=>{C===m&&(l=!0)}),u=!0,Fr(h,d,r.state.value[t])}const _=Tm;function T(){o.stop(),h=[],f=[],r._s.delete(t)}function $(b,d){return function(){Oa(r);const m=Array.from(arguments),M=[],K=[];function O(he){M.push(he)}function Q(he){K.push(he)}Fr(f,{args:m,name:b,store:q,after:O,onError:Q});let se;try{se=d.apply(this&&this.$id===t?this:q,m)}catch(he){throw Fr(K,he),he}return se instanceof Promise?se.then(he=>(Fr(M,he),he)).catch(he=>(Fr(K,he),Promise.reject(he))):(Fr(M,se),se)}}const z={_p:r,$id:t,$onAction:_f.bind(null,f),$patch:A,$reset:_,$subscribe(b,d={}){const m=_f(h,b,d.detached,()=>M()),M=o.run(()=>Qr(()=>r.state.value[t],K=>{(d.flush==="sync"?u:l)&&b({storeId:t,type:zs.direct,events:v},K)},Pn({},c,d)));return m},$dispose:T},q=ws(z);r._s.set(t,q);const S=r._e.run(()=>(o=Pp(),o.run(()=>e())));for(const b in S){const d=S[b];if(ze(d)&&!wb(d)||Un(d))i||(w&&bb(d)&&(ze(d)?d.value=w[b]:rl(d,w[b])),r.state.value[t][b]=d);else if(typeof d=="function"){const m=$(b,d);S[b]=m,a.actions[b]=d}}return Pn(q,S),Pn(Ie(q),S),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:b=>{A(d=>{Pn(d,b)})}}),r._p.forEach(b=>{Pn(q,o.run(()=>b({store:q,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(q.$state,w),l=!0,u=!0,q}function xi(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ym();return a=a||l&&en(Im),a&&Oa(a),a=Em,a._s.has(r)||(i?Cm(r,e,s,a):Eb(r,s,a)),a._s.get(r)}return o.$id=r,o}function bf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bf(Object(n),!0).forEach(function(r){Xe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Go(t){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Go(t)}function Ib(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wf(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Tb(t,e,n){return e&&wf(t.prototype,e),n&&wf(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wu(t,e){return Sb(t)||xb(t,e)||Sm(t,e)||Rb()}function Ai(t){return Cb(t)||kb(t)||Sm(t)||Ab()}function Cb(t){if(Array.isArray(t))return sl(t)}function Sb(t){if(Array.isArray(t))return t}function kb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));s=!0);}catch(c){i=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function Sm(t,e){if(!!t){if(typeof t=="string")return sl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sl(t,e)}}function sl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ab(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ef=function(){},Eu={},km={},xm=null,Am={mark:Ef,measure:Ef};try{typeof window<"u"&&(Eu=window),typeof document<"u"&&(km=document),typeof MutationObserver<"u"&&(xm=MutationObserver),typeof performance<"u"&&(Am=performance)}catch{}var Ob=Eu.navigator||{},If=Ob.userAgent,Tf=If===void 0?"":If,Kn=Eu,De=km,Cf=xm,ao=Am;Kn.document;var Tn=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",Rm=~Tf.indexOf("MSIE")||~Tf.indexOf("Trident/"),co,lo,uo,ho,fo,gn="___FONT_AWESOME___",il=16,Om="fa",Nm="svg-inline--fa",Cr="data-fa-i2svg",ol="data-fa-pseudo-element",Nb="data-fa-pseudo-element-pending",Iu="data-prefix",Tu="data-icon",Sf="fontawesome-i2svg",Pb="async",Db=["HTML","HEAD","STYLE","SCRIPT"],Pm=function(){try{return!0}catch{return!1}}(),Pe="classic",Ve="sharp",Cu=[Pe,Ve];function Ri(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var li=Ri((co={},Xe(co,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Xe(co,Ve,{fa:"solid",fass:"solid","fa-solid":"solid"}),co)),ui=Ri((lo={},Xe(lo,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xe(lo,Ve,{solid:"fass"}),lo)),hi=Ri((uo={},Xe(uo,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xe(uo,Ve,{fass:"fa-solid"}),uo)),Lb=Ri((ho={},Xe(ho,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xe(ho,Ve,{"fa-solid":"fass"}),ho)),Mb=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Dm="fa-layers-text",Fb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$b=Ri((fo={},Xe(fo,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xe(fo,Ve,{900:"fass"}),fo)),Lm=[1,2,3,4,5,6,7,8,9,10],Ub=Lm.concat([11,12,13,14,15,16,17,18,19,20]),Vb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fi=new Set;Object.keys(ui[Pe]).map(fi.add.bind(fi));Object.keys(ui[Ve]).map(fi.add.bind(fi));var Bb=[].concat(Cu,Ai(fi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lr.GROUP,lr.SWAP_OPACITY,lr.PRIMARY,lr.SECONDARY]).concat(Lm.map(function(t){return"".concat(t,"x")})).concat(Ub.map(function(t){return"w-".concat(t)})),Hs=Kn.FontAwesomeConfig||{};function jb(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var Hb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hb.forEach(function(t){var e=wu(t,2),n=e[0],r=e[1],s=zb(jb(n));s!=null&&(Hs[r]=s)})}var Mm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Om,replacementClass:Nm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Hs.familyPrefix&&(Hs.cssPrefix=Hs.familyPrefix);var as=j(j({},Mm),Hs);as.autoReplaceSvg||(as.observeMutations=!1);var G={};Object.keys(Mm).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){as[t]=n,qs.forEach(function(r){return r(G)})},get:function(){return as[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){as.cssPrefix=e,qs.forEach(function(n){return n(G)})},get:function(){return as.cssPrefix}});Kn.FontAwesomeConfig=G;var qs=[];function qb(t){return qs.push(t),function(){qs.splice(qs.indexOf(t),1)}}var An=il,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kb(t){if(!(!t||!Tn)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return De.head.insertBefore(e,r),t}}var Wb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function di(){for(var t=12,e="";t-- >0;)e+=Wb[Math.random()*62|0];return e}function Es(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Su(t){return t.classList?Es(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fm(t[n]),'" ')},"").trim()}function Na(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ku(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function Yb(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function Qb(t){var e=t.transform,n=t.width,r=n===void 0?il:n,s=t.height,i=s===void 0?il:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Rm?c+="translate(".concat(e.x/An-r/2,"em, ").concat(e.y/An-i/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/An,"em), calc(-50% + ").concat(e.y/An,"em)) "):c+="translate(".concat(e.x/An,"em, ").concat(e.y/An,"em) "),c+="scale(".concat(e.size/An*(e.flipX?-1:1),", ").concat(e.size/An*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Xb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $m(){var t=Om,e=Nm,n=G.cssPrefix,r=G.replacementClass,s=Xb;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var kf=!1;function yc(){G.autoAddCss&&!kf&&(Kb($m()),kf=!0)}var Jb={mixout:function(){return{dom:{css:$m,insertCss:yc}}},hooks:function(){return{beforeDOMElementCreation:function(){yc()},beforeI2svg:function(){yc()}}}},vn=Kn||{};vn[gn]||(vn[gn]={});vn[gn].styles||(vn[gn].styles={});vn[gn].hooks||(vn[gn].hooks={});vn[gn].shims||(vn[gn].shims=[]);var Bt=vn[gn],Um=[],Zb=function t(){De.removeEventListener("DOMContentLoaded",t),Yo=1,Um.map(function(e){return e()})},Yo=!1;Tn&&(Yo=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Yo||De.addEventListener("DOMContentLoaded",Zb));function e1(t){!Tn||(Yo?setTimeout(t,0):Um.push(t))}function Oi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?Fm(t):"<".concat(e," ").concat(Gb(r),">").concat(i.map(Oi).join(""),"</").concat(e,">")}function xf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var t1=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},_c=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?t1(n,s):n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,e[l],l,e);return u};function n1(t){for(var e=[],n=0,r=t.length;n<r;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function al(t){var e=n1(t);return e.length===1?e[0].toString(16):null}function r1(t,e){var n=t.length,r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Af(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function cl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Af(e);typeof Bt.hooks.addPack=="function"&&!s?Bt.hooks.addPack(t,Af(e)):Bt.styles[t]=j(j({},Bt.styles[t]||{}),i),t==="fas"&&cl("fa",e)}var po,mo,go,zr=Bt.styles,s1=Bt.shims,i1=(po={},Xe(po,Pe,Object.values(hi[Pe])),Xe(po,Ve,Object.values(hi[Ve])),po),xu=null,Vm={},Bm={},jm={},zm={},Hm={},o1=(mo={},Xe(mo,Pe,Object.keys(li[Pe])),Xe(mo,Ve,Object.keys(li[Ve])),mo);function a1(t){return~Bb.indexOf(t)}function c1(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!a1(s)?s:null}var qm=function(){var e=function(i){return _c(zr,function(o,a,c){return o[c]=_c(a,i,{}),o},{})};Vm=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),Bm=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),Hm=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in zr||G.autoFetchSvg,r=_c(s1,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});jm=r.names,zm=r.unicodes,xu=Pa(G.styleDefault,{family:G.familyDefault})};qb(function(t){xu=Pa(t.styleDefault,{family:G.familyDefault})});qm();function Au(t,e){return(Vm[t]||{})[e]}function l1(t,e){return(Bm[t]||{})[e]}function ur(t,e){return(Hm[t]||{})[e]}function Km(t){return jm[t]||{prefix:null,iconName:null}}function u1(t){var e=zm[t],n=Au("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wn(){return xu}var Ru=function(){return{prefix:null,iconName:null,rest:[]}};function Pa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pe:n,s=li[r][t],i=ui[r][t]||ui[r][s],o=t in Bt.styles?t:null;return i||o||null}var Rf=(go={},Xe(go,Pe,Object.keys(hi[Pe])),Xe(go,Ve,Object.keys(hi[Ve])),go);function Da(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(e={},Xe(e,Pe,"".concat(G.cssPrefix,"-").concat(Pe)),Xe(e,Ve,"".concat(G.cssPrefix,"-").concat(Ve)),e),o=null,a=Pe;(t.includes(i[Pe])||t.some(function(l){return Rf[Pe].includes(l)}))&&(a=Pe),(t.includes(i[Ve])||t.some(function(l){return Rf[Ve].includes(l)}))&&(a=Ve);var c=t.reduce(function(l,u){var h=c1(G.cssPrefix,u);if(zr[u]?(u=i1[a].includes(u)?Lb[a][u]:u,o=u,l.prefix=u):o1[a].indexOf(u)>-1?(o=u,l.prefix=Pa(u,{family:a})):h?l.iconName=h:u!==G.replacementClass&&u!==i[Pe]&&u!==i[Ve]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?Km(l.iconName):{},v=ur(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||v||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!zr.far&&zr.fas&&!G.autoFetchSvg&&(l.prefix="fas")}return l},Ru());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Ve&&(zr.fass||G.autoFetchSvg)&&(c.prefix="fass",c.iconName=ur(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Wn()||"fas"),c}var h1=function(){function t(){Ib(this,t),this.definitions={}}return Tb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),cl(a,o[a]);var c=hi[Pe][a];c&&cl(c,o[a]),qm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Of=[],Hr={},Xr={},f1=Object.keys(Xr);function d1(t,e){var n=e.mixoutsTo;return Of=t,Hr={},Object.keys(Xr).forEach(function(r){f1.indexOf(r)===-1&&delete Xr[r]}),Of.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Go(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Hr[o]||(Hr[o]=[]),Hr[o].push(i[o])})}r.provides&&r.provides(Xr)}),n}function ll(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Hr[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Sr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Hr[t]||[];s.forEach(function(i){i.apply(null,n)})}function yn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Xr[t]?Xr[t].apply(null,e):void 0}function ul(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wn();if(!!e)return e=ur(n,e)||e,xf(Wm.definitions,n,e)||xf(Bt.styles,n,e)}var Wm=new h1,p1=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Sr("noAuto")},m1={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tn?(Sr("beforeI2svg",e),yn("pseudoElements2svg",e),yn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,e1(function(){v1({autoReplaceSvgRoot:n}),Sr("watch",e)})}},g1={icon:function(e){if(e===null)return null;if(Go(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Pa(e[0]);return{prefix:r,iconName:ur(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(Mb))){var s=Da(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Wn(),iconName:ur(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=Wn();return{prefix:i,iconName:ur(i,e)||e}}}},Nt={noAuto:p1,config:G,dom:m1,parse:g1,library:Wm,findIconDefinition:ul,toHtml:Oi},v1=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(Bt.styles).length>0||G.autoFetchSvg)&&Tn&&G.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function La(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Oi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Tn){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function y1(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(ku(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=Na(j(j({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function _1(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},s),{},{id:o}),children:r}]}]}function Ou(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,v=f===void 0?!1:f,w=r.found?r:n,C=w.width,A=w.height,_=s==="fak",T=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(function(m){return h.classes.indexOf(m)===-1}).filter(function(m){return m!==""||!!m}).concat(h.classes).join(" "),$={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:T,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(A)})},z=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(C/A*16*.0625,"em")}:{};v&&($.attributes[Cr]=""),c&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(u||di())},children:[c]}),delete $.attributes.title);var q=j(j({},$),{},{prefix:s,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:j(j({},z),h.styles)}),S=r.found&&n.found?yn("generateAbstractMask",q)||{children:[],attributes:{}}:yn("generateAbstractIcon",q)||{children:[],attributes:{}},b=S.children,d=S.attributes;return q.children=b,q.attributes=d,a?_1(q):y1(q)}function Nf(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=j(j(j({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Cr]="");var u=j({},o.styles);ku(s)&&(u.transform=Qb({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Na(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function b1(t){var e=t.content,n=t.title,r=t.extra,s=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Na(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var bc=Bt.styles;function hl(t){var e=t[0],n=t[1],r=t.slice(4),s=wu(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(lr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(lr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(lr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var w1={found:!1,width:512,height:512};function E1(t,e){!Pm&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function fl(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Wn()),new Promise(function(r,s){if(yn("missingIconAbstract"),n==="fa"){var i=Km(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&bc[e]&&bc[e][t]){var o=bc[e][t];return r(hl(o))}E1(t,e),r(j(j({},w1),{},{icon:G.showMissingIcons&&t?yn("missingIconAbstract")||{}:{}}))})}var Pf=function(){},dl=G.measurePerformance&&ao&&ao.mark&&ao.measure?ao:{mark:Pf,measure:Pf},Ms='FA "6.2.0"',I1=function(e){return dl.mark("".concat(Ms," ").concat(e," begins")),function(){return Gm(e)}},Gm=function(e){dl.mark("".concat(Ms," ").concat(e," ends")),dl.measure("".concat(Ms," ").concat(e),"".concat(Ms," ").concat(e," begins"),"".concat(Ms," ").concat(e," ends"))},Nu={begin:I1,end:Gm},Oo=function(){};function Df(t){var e=t.getAttribute?t.getAttribute(Cr):null;return typeof e=="string"}function T1(t){var e=t.getAttribute?t.getAttribute(Iu):null,n=t.getAttribute?t.getAttribute(Tu):null;return e&&n}function C1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function S1(){if(G.autoReplaceSvg===!0)return No.replace;var t=No[G.autoReplaceSvg];return t||No.replace}function k1(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function x1(t){return De.createElement(t)}function Ym(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?k1:x1:n;if(typeof t=="string")return De.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(Ym(o,{ceFn:r}))}),s}function A1(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var No={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(Ym(s),n)}),n.getAttribute(Cr)===null&&G.keepOriginalSource){var r=De.createComment(A1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Su(n).indexOf(G.replacementClass))return No.replace(e);var s=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===G.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Oi(a)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function Lf(t){t()}function Qm(t,e){var n=typeof e=="function"?e:Oo;if(t.length===0)n();else{var r=Lf;G.mutateApproach===Pb&&(r=Kn.requestAnimationFrame||Lf),r(function(){var s=S1(),i=Nu.begin("mutate");t.map(s),i(),n()})}}var Pu=!1;function Xm(){Pu=!0}function pl(){Pu=!1}var Qo=null;function Mf(t){if(!!Cf&&!!G.observeMutations){var e=t.treeCallback,n=e===void 0?Oo:e,r=t.nodeCallback,s=r===void 0?Oo:r,i=t.pseudoElementsCallback,o=i===void 0?Oo:i,a=t.observeMutationsRoot,c=a===void 0?De:a;Qo=new Cf(function(l){if(!Pu){var u=Wn();Es(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Df(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Df(h.target)&&~Vb.indexOf(h.attributeName))if(h.attributeName==="class"&&T1(h.target)){var f=Da(Su(h.target)),v=f.prefix,w=f.iconName;h.target.setAttribute(Iu,v||u),w&&h.target.setAttribute(Tu,w)}else C1(h.target)&&s(h.target)})}}),Tn&&Qo.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function R1(){!Qo||Qo.disconnect()}function O1(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function N1(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Da(Su(t));return s.prefix||(s.prefix=Wn()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=l1(s.prefix,t.innerText)||Au(s.prefix,al(t.innerText))),!s.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function P1(t){var e=Es(t.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||di()):(e["aria-hidden"]="true",e.focusable="false")),e}function D1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ff(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=N1(t),r=n.iconName,s=n.prefix,i=n.rest,o=P1(t),a=ll("parseNodeAttributes",{},t),c=e.styleParser?O1(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var L1=Bt.styles;function Jm(t){var e=G.autoReplaceSvg==="nest"?Ff(t,{styleParser:!1}):Ff(t);return~e.extra.classes.indexOf(Dm)?yn("generateLayersText",t,e):yn("generateSvgReplacementMutation",t,e)}var Gn=new Set;Cu.map(function(t){Gn.add("fa-".concat(t))});Object.keys(li[Pe]).map(Gn.add.bind(Gn));Object.keys(li[Ve]).map(Gn.add.bind(Gn));Gn=Ai(Gn);function $f(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tn)return Promise.resolve();var n=De.documentElement.classList,r=function(h){return n.add("".concat(Sf,"-").concat(h))},s=function(h){return n.remove("".concat(Sf,"-").concat(h))},i=G.autoFetchSvg?Gn:Cu.map(function(u){return"fa-".concat(u)}).concat(Object.keys(L1));i.includes("fa")||i.push("fa");var o=[".".concat(Dm,":not([").concat(Cr,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Es(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Nu.begin("onTree"),l=a.reduce(function(u,h){try{var f=Jm(h);f&&u.push(f)}catch(v){Pm||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){Qm(f,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function M1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jm(t).then(function(n){n&&Qm([n],e)})}function F1(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ul(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:ul(s||{})),t(r,j(j({},n),{},{mask:s}))}}var $1=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Zt:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,v=n.titleId,w=v===void 0?null:v,C=n.classes,A=C===void 0?[]:C,_=n.attributes,T=_===void 0?{}:_,$=n.styles,z=$===void 0?{}:$;if(!!e){var q=e.prefix,S=e.iconName,b=e.icon;return La(j({type:"icon"},e),function(){return Sr("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(f?T["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(w||di()):(T["aria-hidden"]="true",T.focusable="false")),Ou({icons:{main:hl(b),mask:c?hl(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:S,transform:j(j({},Zt),s),symbol:o,title:f,maskId:u,titleId:w,extra:{attributes:T,styles:z,classes:A}})})}},U1={mixout:function(){return{icon:F1($1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$f,n.nodeCallback=M1,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?De:r,i=n.callback,o=i===void 0?function(){}:i;return $f(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(v,w){Promise.all([fl(s,a),u.iconName?fl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var A=wu(C,2),_=A[0],T=A[1];v([n,Ou({icons:{main:_,mask:T},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=Na(a);c.length>0&&(s.style=c);var l;return ku(o)&&(l=yn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:s}}}},V1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return La({type:"layer"},function(){Sr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Ai(i)).join(" ")},children:o}]})}}}},B1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return La({type:"counter",content:n},function(){return Sr("beforeDOMElementCreation",{content:n,params:r}),b1({content:n.toString(),title:i,extra:{attributes:l,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Ai(a))}})})}}}},j1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Zt:s,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,v=f===void 0?{}:f;return La({type:"text",content:n},function(){return Sr("beforeDOMElementCreation",{content:n,params:r}),Nf({content:n,transform:j(j({},Zt),i),title:a,extra:{attributes:h,styles:v,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Ai(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,c=null;if(Rm){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return G.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nf({content:n.innerHTML,width:a,height:c,transform:i,title:s,extra:o,watchable:!0})])}}},z1=new RegExp('"',"ug"),Uf=[1105920,1112319];function H1(t){var e=t.replace(z1,""),n=r1(e,0),r=n>=Uf[0]&&n<=Uf[1],s=e.length===2?e[0]===e[1]:!1;return{value:al(s?e[0]:e),isSecondary:r||s}}function Vf(t,e){var n="".concat(Nb).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=Es(t.children),o=i.filter(function(b){return b.getAttribute(ol)===e})[0],a=Kn.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(Fb),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Ve:Pe,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ui[f][c[2].toLowerCase()]:$b[f][l],w=H1(h),C=w.value,A=w.isSecondary,_=c[0].startsWith("FontAwesome"),T=Au(v,C),$=T;if(_){var z=u1(C);z.iconName&&z.prefix&&(T=z.iconName,v=z.prefix)}if(T&&!A&&(!o||o.getAttribute(Iu)!==v||o.getAttribute(Tu)!==$)){t.setAttribute(n,$),o&&t.removeChild(o);var q=D1(),S=q.extra;S.attributes[ol]=e,fl(T,v).then(function(b){var d=Ou(j(j({},q),{},{icons:{main:b,mask:Ru()},prefix:v,iconName:$,extra:S,watchable:!0})),m=De.createElement("svg");e==="::before"?t.insertBefore(m,t.firstChild):t.appendChild(m),m.outerHTML=d.map(function(M){return Oi(M)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function q1(t){return Promise.all([Vf(t,"::before"),Vf(t,"::after")])}function K1(t){return t.parentNode!==document.head&&!~Db.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ol)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Bf(t){if(!!Tn)return new Promise(function(e,n){var r=Es(t.querySelectorAll("*")).filter(K1).map(q1),s=Nu.begin("searchPseudoElements");Xm(),Promise.all(r).then(function(){s(),pl(),e()}).catch(function(){s(),pl(),n()})})}var W1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bf,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?De:r;G.searchPseudoElements&&Bf(s)}}},jf=!1,G1={mixout:function(){return{dom:{unwatch:function(){Xm(),jf=!0}}}},hooks:function(){return{bootstrap:function(){Mf(ll("mutationObserverCallbacks",{}))},noAuto:function(){R1()},watch:function(n){var r=n.observeMutationsRoot;jf?pl():Mf(ll("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Y1={mixout:function(){return{parse:{transform:function(n){return zf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=zf(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},v={outer:a,inner:h,path:f};return{tag:"g",attributes:j({},v.outer),children:[{tag:"g",attributes:j({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),v.path)}]}]}}}},wc={x:0,y:0,width:"100%",height:"100%"};function Hf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Q1(t){return t.tag==="g"?t.children:[t]}var X1={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Da(s.split(" ").map(function(o){return o.trim()})):Ru();return i.prefix||(i.prefix=Wn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,l=i.width,u=i.icon,h=o.width,f=o.icon,v=Yb({transform:c,containerWidth:h,iconWidth:l}),w={tag:"rect",attributes:j(j({},wc),{},{fill:"white"})},C=u.children?{children:u.children.map(Hf)}:{},A={tag:"g",attributes:j({},v.inner),children:[Hf(j({tag:u.tag,attributes:j(j({},u.attributes),v.path)},C))]},_={tag:"g",attributes:j({},v.outer),children:[A]},T="mask-".concat(a||di()),$="clip-".concat(a||di()),z={tag:"mask",attributes:j(j({},wc),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,_]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:Q1(f)},z]};return r.push(q,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(T,")")},wc)}),{children:r,attributes:s}}}},J1={provides:function(e){var n=!1;Kn.matchMedia&&(n=Kn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Z1={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},ew=[Jb,U1,V1,B1,j1,W1,G1,Y1,X1,J1,Z1];d1(ew,{mixoutsTo:Nt});Nt.noAuto;var Zm=Nt.config,tw=Nt.library;Nt.dom;var Xo=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var nw=Nt.icon;Nt.layer;var rw=Nt.text;Nt.counter;function qf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qf(Object(n),!0).forEach(function(r){It(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jo(t){return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jo(t)}function It(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sw(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function iw(t,e){if(t==null)return{};var n=sw(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function ml(t){return ow(t)||aw(t)||cw(t)||lw()}function ow(t){if(Array.isArray(t))return gl(t)}function aw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cw(t,e){if(!!t){if(typeof t=="string")return gl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gl(t,e)}}function gl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function lw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},eg={exports:{}};(function(t){(function(e){var n=function(_,T,$){if(!l(T)||h(T)||f(T)||v(T)||c(T))return T;var z,q=0,S=0;if(u(T))for(z=[],S=T.length;q<S;q++)z.push(n(_,T[q],$));else{z={};for(var b in T)Object.prototype.hasOwnProperty.call(T,b)&&(z[_(b,$)]=n(_,T[b],$))}return z},r=function(_,T){T=T||{};var $=T.separator||"_",z=T.split||/(?=[A-Z])/;return _.split(z).join($)},s=function(_){return w(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(T,$){return $?$.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var T=s(_);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(_,T){return r(_,T).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},v=function(_){return a.call(_)=="[object Boolean]"},w=function(_){return _=_-0,_===_},C=function(_,T){var $=T&&"process"in T?T.process:T;return typeof $!="function"?_:function(z,q){return $(z,_,q)}},A={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,T){return n(C(s,T),_)},decamelizeKeys:function(_,T){return n(C(o,T),_,T)},pascalizeKeys:function(_,T){return n(C(i,T),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(uw)})(eg);var hw=eg.exports,fw=["class","style"];function dw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=hw.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function pw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Du(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Du(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=pw(u);break;case"style":c.style=dw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=iw(n,fw);return Ra(t.tag,Ut(Ut(Ut({},e),{},{class:s.class,style:Ut(Ut({},s.style),o)},s.attrs),a),r)}var tg=!1;try{tg=!0}catch{}function mw(){if(!tg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ks(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?It({},t,e):{}}function gw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},It(e,"fa-".concat(t.size),t.size!==null),It(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),It(e,"fa-pull-".concat(t.pull),t.pull!==null),It(e,"fa-swap-opacity",t.swapOpacity),It(e,"fa-bounce",t.bounce),It(e,"fa-shake",t.shake),It(e,"fa-beat",t.beat),It(e,"fa-fade",t.fade),It(e,"fa-beat-fade",t.beatFade),It(e,"fa-flash",t.flash),It(e,"fa-spin-pulse",t.spinPulse),It(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Kf(t){if(t&&Jo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xo.icon)return Xo.icon(t);if(t===null)return null;if(Jo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var vw=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ce(function(){return Kf(e.icon)}),i=Ce(function(){return Ks("classes",gw(e))}),o=Ce(function(){return Ks("transform",typeof e.transform=="string"?Xo.transform(e.transform):e.transform)}),a=Ce(function(){return Ks("mask",Kf(e.mask))}),c=Ce(function(){return nw(s.value,Ut(Ut(Ut(Ut({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Qr(c,function(u){if(!u)return mw("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Ce(function(){return c.value?Du(c.value.abstract[0],{},r):null});return function(){return l.value}}});rt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=Zm.familyPrefix,i=Ce(function(){return["".concat(s,"-layers")].concat(ml(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return Ra("div",{class:i.value},r.default?r.default():[])}}});rt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=Zm.familyPrefix,i=Ce(function(){return Ks("classes",[].concat(ml(e.counter?["".concat(s,"-layers-counter")]:[]),ml(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Ce(function(){return Ks("transform",typeof e.transform=="string"?Xo.transform(e.transform):e.transform)}),a=Ce(function(){var l=rw(e.value.toString(),Ut(Ut({},o.value),i.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Ce(function(){return Du(a.value,{},r)});return function(){return c.value}}});var yw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},_w={prefix:"fas",iconName:"bag-shopping",icon:[448,512,["shopping-bag"],"f290","M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"]},bw={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},ww={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Ew={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Iw={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Tw={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof window<"u";function Cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Ws=()=>{},Ht=Array.isArray,Sw=/\/$/,kw=t=>t.replace(Sw,"");function Ic(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ow(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Aw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rw(t[n],e[n]))return!1;return!0}function Rw(t,e){return Ht(t)?Gf(t,e):Ht(e)?Gf(e,t):t===e}function Gf(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ow(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function Nw(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kw(t)}const Pw=/^[^#]+#/;function Dw(t,e){return t.replace(Pw,"#")+e}function Lw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Lw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yf(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function Fw(t,e){vl.set(t,e)}function $w(t){const e=vl.get(t);return vl.delete(t),e}let Uw=()=>location.protocol+"//"+location.host;function rg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wf(c,"")}return Wf(n,t)+r+s}function Vw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const v=rg(t,location),w=n.value,C=e.value;let A=0;if(f){if(n.value=v,e.value=f,o&&o===w){o=null;return}A=C?f.position-C.position:0}else r(v);s.forEach(_=>{_(n.value,w,{delta:A,type:pi.pop,direction:A?A>0?Gs.forward:Gs.back:Gs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const v=()=>{const w=s.indexOf(f);w>-1&&s.splice(w,1)};return i.push(v),v}function u(){const{history:f}=window;!f.state||f.replaceState(Se({},f.state,{scroll:Ma()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Qf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function Bw(t){const{history:e,location:n}=window,r={value:rg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Uw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(v){console.error(v),n[u?"replace":"assign"](f)}}function o(c,l){const u=Se({},e.state,Qf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Se({},s.value,e.state,{forward:c,scroll:Ma()});i(u.current,u,!0);const h=Se({},Qf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function jw(t){t=Nw(t);const e=Bw(t),n=Vw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:Dw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zw(t){return typeof t=="string"||t&&typeof t=="object"}function sg(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ig=Symbol("");var Xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xf||(Xf={}));function ls(t,e){return Se(new Error,{type:t,[ig]:!0},e)}function an(t,e){return t instanceof Error&&ig in t&&(e==null||!!(t.type&e))}const Jf="[^/]+?",Hw={sensitive:!1,strict:!1,start:!0,end:!0},qw=/[.+*?^${}()[\]/\\]/g;function Kw(t,e){const n=Se({},Hw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let v=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(qw,"\\$&"),v+=40;else if(f.type===1){const{value:w,repeatable:C,optional:A,regexp:_}=f;i.push({name:w,repeatable:C,optional:A});const T=_||Jf;if(T!==Jf){v+=10;try{new RegExp(`(${T})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${w}" (${T}): `+z.message)}}let $=C?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||($=A&&l.length<2?`(?:/${$})`:"/"+$),A&&($+="?"),s+=$,v+=20,A&&(v+=-8),C&&(v+=-20),T===".*"&&(v+=-50)}u.push(v)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const v=u[f]||"",w=i[f-1];h[w.name]=v&&w.repeatable?v.split("/"):v}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const v of f)if(v.type===0)u+=v.value;else if(v.type===1){const{value:w,repeatable:C,optional:A}=v,_=w in l?l[w]:"";if(Ht(_)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const T=Ht(_)?_.join("/"):_;if(!T)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ww(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zf(r))return 1;if(Zf(s))return-1}return s.length-r.length}function Zf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yw={type:0,value:""},Qw=/[a-zA-Z0-9_]/;function Xw(t){if(!t)return[[]];if(t==="/")return[[Yw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Qw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Jw(t,e,n){const r=Kw(Xw(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zw(t,e){const n=[],r=new Map;e=nd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const v=!f,w=eE(u);w.aliasOf=f&&f.record;const C=nd(e,u),A=[w];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of $)A.push(Se({},w,{components:f?f.record.components:w.components,path:z,aliasOf:f?f.record:w}))}let _,T;for(const $ of A){const{path:z}=$;if(h&&z[0]!=="/"){const q=h.record.path,S=q[q.length-1]==="/"?"":"/";$.path=h.record.path+(z&&S+z)}if(_=Jw($,h,C),f?f.alias.push(_):(T=T||_,T!==_&&T.alias.push(_),v&&u.name&&!td(_)&&o(u.name)),w.children){const q=w.children;for(let S=0;S<q.length;S++)i(q[S],_,f&&f.children[S])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return T?()=>{o(T)}:Ws}function o(u){if(sg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Gw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!og(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!td(u)&&r.set(u.record.name,u)}function l(u,h){let f,v={},w,C;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ls(1,{location:u});C=f.record.name,v=Se(ed(h.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&ed(u.params,f.keys.map(T=>T.name))),w=f.stringify(v)}else if("path"in u)w=u.path,f=n.find(T=>T.re.test(w)),f&&(v=f.parse(w),C=f.record.name);else{if(f=h.name?r.get(h.name):n.find(T=>T.re.test(h.path)),!f)throw ls(1,{location:u,currentLocation:h});C=f.record.name,v=Se({},h.params,u.params),w=f.stringify(v)}const A=[];let _=f;for(;_;)A.unshift(_.record),_=_.parent;return{name:C,path:w,params:v,matched:A,meta:nE(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ed(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function eE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function tE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nE(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function nd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function og(t,e){return e.children.some(n=>n===t||og(t,n))}const ag=/#/g,rE=/&/g,sE=/\//g,iE=/=/g,oE=/\?/g,cg=/\+/g,aE=/%5B/g,cE=/%5D/g,lg=/%5E/g,lE=/%60/g,ug=/%7B/g,uE=/%7C/g,hg=/%7D/g,hE=/%20/g;function Lu(t){return encodeURI(""+t).replace(uE,"|").replace(aE,"[").replace(cE,"]")}function fE(t){return Lu(t).replace(ug,"{").replace(hg,"}").replace(lg,"^")}function yl(t){return Lu(t).replace(cg,"%2B").replace(hE,"+").replace(ag,"%23").replace(rE,"%26").replace(lE,"`").replace(ug,"{").replace(hg,"}").replace(lg,"^")}function dE(t){return yl(t).replace(iE,"%3D")}function pE(t){return Lu(t).replace(ag,"%23").replace(oE,"%3F")}function mE(t){return t==null?"":pE(t).replace(sE,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cg," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let l=e[a];Ht(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function rd(t){let e="";for(let n in t){const r=t[n];if(n=dE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&yl(i)):[r&&yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const yE=Symbol(""),sd=Symbol(""),Mu=Symbol(""),Fu=Symbol(""),_l=Symbol("");function Ps(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ls(4,{from:n,to:e})):h instanceof Error?a(h):zw(h)?a(ls(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Tc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(_E(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Dn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Cw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Dn(f,n,r,i,o)()}))}}return s}function _E(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function id(t){const e=en(Mu),n=en(Fu),r=Ce(()=>e.resolve(Te(t.to))),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(cs.bind(null,u));if(f>-1)return f;const v=od(c[l-2]);return l>1&&od(u)===v&&h[h.length-1].path!==v?h.findIndex(cs.bind(null,c[l-2])):f}),i=Ce(()=>s.value>-1&&EE(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&ng(n.params,r.value.params));function a(c={}){return wE(c)?e[Te(t.replace)?"replace":"push"](Te(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const bE=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:id,setup(t,{slots:e}){const n=ws(id(t)),{options:r}=en(Mu),s=Ce(()=>({[ad(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ad(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ra("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Po=bE;function wE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function od(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ad=(t,e,n)=>t!=null?t:e!=null?e:n,IE=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(_l),s=Ce(()=>t.route||r.value),i=en(sd,0),o=Ce(()=>{let l=Te(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);xo(sd,Ce(()=>o.value+1)),xo(yE,a),xo(_l,s);const c=Ye();return Qr(()=>[c.value,a.value,t.name],([l,u,h],[f,v,w])=>{u&&(u.instances[h]=l,v&&v!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),l&&u&&(!v||!cs(u,v)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return cd(n.default,{Component:f,route:l});const v=h.props[u],w=v?v===!0?l.params:typeof v=="function"?v(l):v:null,A=Ra(f,Se({},w,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return cd(n.default,{Component:A,route:l})||A}}});function cd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fg=IE;function TE(t){const e=Zw(t.routes,t),n=t.parseQuery||gE,r=t.stringifyQuery||rd,s=t.history,i=Ps(),o=Ps(),a=Ps(),c=M_(Rn);let l=Rn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ec.bind(null,k=>""+k),h=Ec.bind(null,mE),f=Ec.bind(null,Zo);function v(k,B){let F,J;return sg(k)?(F=e.getRecordMatcher(k),J=B):J=k,e.addRoute(J,F)}function w(k){const B=e.getRecordMatcher(k);B&&e.removeRoute(B)}function C(){return e.getRoutes().map(k=>k.record)}function A(k){return!!e.getRecordMatcher(k)}function _(k,B){if(B=Se({},B||c.value),typeof k=="string"){const p=Ic(n,k,B.path),y=e.resolve({path:p.path},B),E=s.createHref(p.fullPath);return Se(p,y,{params:f(y.params),hash:Zo(p.hash),redirectedFrom:void 0,href:E})}let F;if("path"in k)F=Se({},k,{path:Ic(n,k.path,B.path).path});else{const p=Se({},k.params);for(const y in p)p[y]==null&&delete p[y];F=Se({},k,{params:h(k.params)}),B.params=h(B.params)}const J=e.resolve(F,B),_e=k.hash||"";J.params=u(f(J.params));const $e=xw(r,Se({},k,{hash:fE(_e),path:J.path})),fe=s.createHref($e);return Se({fullPath:$e,hash:_e,query:r===rd?vE(k.query):k.query||{}},J,{redirectedFrom:void 0,href:fe})}function T(k){return typeof k=="string"?Ic(n,k,c.value.path):Se({},k)}function $(k,B){if(l!==k)return ls(8,{from:B,to:k})}function z(k){return b(k)}function q(k){return z(Se(T(k),{replace:!0}))}function S(k){const B=k.matched[k.matched.length-1];if(B&&B.redirect){const{redirect:F}=B;let J=typeof F=="function"?F(k):F;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=T(J):{path:J},J.params={}),Se({query:k.query,hash:k.hash,params:"path"in J?{}:k.params},J)}}function b(k,B){const F=l=_(k),J=c.value,_e=k.state,$e=k.force,fe=k.replace===!0,p=S(F);if(p)return b(Se(T(p),{state:typeof p=="object"?Se({},_e,p.state):_e,force:$e,replace:fe}),B||F);const y=F;y.redirectedFrom=B;let E;return!$e&&Aw(r,J,F)&&(E=ls(16,{to:y,from:J}),tr(J,J,!0,!1)),(E?Promise.resolve(E):m(y,J)).catch(I=>an(I)?an(I,2)?I:Lt(I):Oe(I,y,J)).then(I=>{if(I){if(an(I,2))return b(Se({replace:fe},T(I.to),{state:typeof I.to=="object"?Se({},_e,I.to.state):_e,force:$e}),B||y)}else I=K(y,J,!0,fe,_e);return M(y,J,I),I})}function d(k,B){const F=$(k,B);return F?Promise.reject(F):Promise.resolve()}function m(k,B){let F;const[J,_e,$e]=CE(k,B);F=Tc(J.reverse(),"beforeRouteLeave",k,B);for(const p of J)p.leaveGuards.forEach(y=>{F.push(Dn(y,k,B))});const fe=d.bind(null,k,B);return F.push(fe),$r(F).then(()=>{F=[];for(const p of i.list())F.push(Dn(p,k,B));return F.push(fe),$r(F)}).then(()=>{F=Tc(_e,"beforeRouteUpdate",k,B);for(const p of _e)p.updateGuards.forEach(y=>{F.push(Dn(y,k,B))});return F.push(fe),$r(F)}).then(()=>{F=[];for(const p of k.matched)if(p.beforeEnter&&!B.matched.includes(p))if(Ht(p.beforeEnter))for(const y of p.beforeEnter)F.push(Dn(y,k,B));else F.push(Dn(p.beforeEnter,k,B));return F.push(fe),$r(F)}).then(()=>(k.matched.forEach(p=>p.enterCallbacks={}),F=Tc($e,"beforeRouteEnter",k,B),F.push(fe),$r(F))).then(()=>{F=[];for(const p of o.list())F.push(Dn(p,k,B));return F.push(fe),$r(F)}).catch(p=>an(p,8)?p:Promise.reject(p))}function M(k,B,F){for(const J of a.list())J(k,B,F)}function K(k,B,F,J,_e){const $e=$(k,B);if($e)return $e;const fe=B===Rn,p=Br?history.state:{};F&&(J||fe?s.replace(k.fullPath,Se({scroll:fe&&p&&p.scroll},_e)):s.push(k.fullPath,_e)),c.value=k,tr(k,B,F,fe),Lt()}let O;function Q(){O||(O=s.listen((k,B,F)=>{if(!to.listening)return;const J=_(k),_e=S(J);if(_e){b(Se(_e,{replace:!0}),J).catch(Ws);return}l=J;const $e=c.value;Br&&Fw(Yf($e.fullPath,F.delta),Ma()),m(J,$e).catch(fe=>an(fe,12)?fe:an(fe,2)?(b(fe.to,J).then(p=>{an(p,20)&&!F.delta&&F.type===pi.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(F.delta&&s.go(-F.delta,!1),Oe(fe,J,$e))).then(fe=>{fe=fe||K(J,$e,!1),fe&&(F.delta&&!an(fe,8)?s.go(-F.delta,!1):F.type===pi.pop&&an(fe,20)&&s.go(-1,!1)),M(J,$e,fe)}).catch(Ws)}))}let se=Ps(),he=Ps(),Ue;function Oe(k,B,F){Lt(k);const J=he.list();return J.length?J.forEach(_e=>_e(k,B,F)):console.error(k),Promise.reject(k)}function xe(){return Ue&&c.value!==Rn?Promise.resolve():new Promise((k,B)=>{se.add([k,B])})}function Lt(k){return Ue||(Ue=!k,Q(),se.list().forEach(([B,F])=>k?F(k):B()),se.reset()),k}function tr(k,B,F,J){const{scrollBehavior:_e}=t;if(!Br||!_e)return Promise.resolve();const $e=!F&&$w(Yf(k.fullPath,0))||(J||!F)&&history.state&&history.state.scroll||null;return hu().then(()=>_e(k,B,$e)).then(fe=>fe&&Mw(fe)).catch(fe=>Oe(fe,k,B))}const Mt=k=>s.go(k);let Et;const Lr=new Set,to={currentRoute:c,listening:!0,addRoute:v,removeRoute:w,hasRoute:A,getRoutes:C,resolve:_,options:t,push:z,replace:q,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:xe,install(k){const B=this;k.component("RouterLink",Po),k.component("RouterView",fg),k.config.globalProperties.$router=B,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(c)}),Br&&!Et&&c.value===Rn&&(Et=!0,z(s.location).catch(_e=>{}));const F={};for(const _e in Rn)F[_e]=Ce(()=>c.value[_e]);k.provide(Mu,B),k.provide(Fu,ws(F)),k.provide(_l,c);const J=k.unmount;Lr.add(k),k.unmount=function(){Lr.delete(k),Lr.size<1&&(l=Rn,O&&O(),O=null,c.value=Rn,Et=!1,Ue=!1),J()}}};return to}function $r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function CE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>cs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>cs(l,c))||s.push(c))}return[n,r,s]}function SE(){return en(Fu)}const kE="/assets/logo.a8ed021a.png",Is=xi("authUser",()=>{const t=Ye({id:"",name:"",email:"",auth:!1});return{user:t,setUser:n=>{t.value=n}}}),Do=xi("ui",()=>{const t=Ye(!1);return{isSidebarOpen:t,toggleMenu:()=>{t.value=!t.value}}}),$u=t=>(Pt("data-v-fa01195e"),t=t(),Dt(),t),xE={class:"header"},AE={class:"container"},RE={class:"container_1"},OE=$u(()=>g("div",{class:"logo"},[g("img",{src:kE,alt:""})],-1)),NE={class:"container_2"},PE=$u(()=>g("span",null,"Carrito",-1)),DE=$u(()=>g("div",{class:"bar"},null,-1)),LE=rt({__name:"Navbar",setup(t){const e=Do(),n=Is(),r=()=>{e.toggleMenu()};return(s,i)=>{const o=Tr("font-awesome-icon");return H(),re(Le,null,[g("header",xE,[g("div",AE,[g("div",RE,[Te(e).isSidebarOpen?(H(),ut(o,{key:1,icon:"fa-solid fa-xmark",class:"icon",style:{"font-size":"1.5rem"},onClick:r})):(H(),ut(o,{key:0,icon:"fa-solid fa-bars",class:"icon",onClick:r})),de(Te(Po),{to:"/",class:"router"},{default:ct(()=>[OE]),_:1})]),g("div",NE,[de(Te(Po),{to:Te(n).user.auth?"/user":"/login",class:"item router"},{default:ct(()=>[de(o,{icon:"fa-solid fa-user",class:"icon"}),g("span",null,We(Te(n).user.auth?Te(n).user.name:"Cuenta"),1)]),_:1},8,["to"]),de(Te(Po),{to:"/cart",class:"item router"},{default:ct(()=>[de(o,{icon:"fa-solid fa-bag-shopping",class:"icon"}),PE]),_:1})])])]),DE],64)}}});const vt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ME=vt(LE,[["__scopeId","data-v-fa01195e"]]);xi("counter",()=>{const t=Ye(0),e=Ce(()=>t.value*2);function n(){t.value++}return{count:t,doubleCount:e,increment:n}});const Ni=t=>(Pt("data-v-cc93535f"),t=t(),Dt(),t),FE={class:"nav"},$E={class:"nav_container"},UE=Ni(()=>g("h4",{class:"home"},"Home",-1)),VE=Ni(()=>g("h4",{class:"link"},"Carrito",-1)),BE=Ni(()=>g("h4",{class:"link"},"Cuenta",-1)),jE=Ni(()=>g("h4",{class:"link"},"Login",-1)),zE=Ni(()=>g("h4",{class:"link"},"Register",-1)),HE=rt({__name:"SlideNavbar",setup(t){const e=Is(),n=Ce(()=>Do().isSidebarOpen?"slide active":"slide"),r=Ce(()=>Do().isSidebarOpen?"backSider active":"backSider"),s=()=>{Do().toggleMenu()};return(i,o)=>{const a=Tr("RouterLink"),c=Tr("router-link");return H(),re(Le,null,[g("div",{class:ni(Te(r)),onClick:s},null,2),g("div",{class:ni(Te(n))},[g("nav",FE,[g("div",$E,[de(a,{to:"/",onClick:s,class:"router"},{default:ct(()=>[UE]),_:1}),g("ul",null,[g("li",null,[de(c,{to:"/drinks",onClick:s,class:"router"},{default:ct(()=>[js("Drinks")]),_:1})]),g("li",null,[de(c,{to:"/sweet",class:"router"},{default:ct(()=>[js("Sweets and Salads")]),_:1})]),g("li",null,[de(c,{to:"/fastfood",class:"router"},{default:ct(()=>[js("Fast Food")]),_:1})])]),de(a,{class:"router step second",to:"/cart",onClick:s},{default:ct(()=>[VE]),_:1}),Te(e).user.auth?(H(),ut(a,{key:0,class:"router second",to:"/login",onClick:s},{default:ct(()=>[BE]),_:1})):mc("",!0),Te(e).user.auth?mc("",!0):(H(),ut(a,{key:1,class:"router second",to:"/login",onClick:s},{default:ct(()=>[jE]),_:1})),Te(e).user.auth?mc("",!0):(H(),ut(a,{key:2,class:"router second",to:"/register",onClick:s},{default:ct(()=>[zE]),_:1}))])])],2)],64)}}});const qE=vt(HE,[["__scopeId","data-v-cc93535f"]]);const KE={},WE={class:"footer"},GE=_u('<div class="footer__container" data-v-eac58631><span data-v-eac58631><a href="pages/Mision.html" data-v-eac58631>Mision</a></span><span data-v-eac58631><a href="pages/Vision.html" data-v-eac58631>Vision</a></span><span data-v-eac58631><a href="https://wa.me/51935364598?text=Hola%20buen%20d\xEDa" data-v-eac58631>Contacto</a></span><span data-v-eac58631><a href="pages/HorarioAtencion.html" data-v-eac58631>Horarios de Atencion</a></span><span data-v-eac58631><a href="pages/LibroReclamaciones.html" data-v-eac58631>Libro de reclamaciones</a></span></div>',1),YE={class:"social"},QE={href:"https://www.instagram.com/mokita_08/?igshid=YmMyMTA2M2Y%3D",target:"_blank"},XE={href:"https://www.facebook.com/people/Mokita/100085343790899/",target:"_blank"},JE={href:""};function ZE(t,e){const n=Tr("font-awesome-icon");return H(),re("footer",WE,[GE,g("div",YE,[g("a",QE,[de(n,{icon:"fa-brands fa-instagram"})]),g("a",XE,[de(n,{icon:"fa-brands fa-facebook"})]),g("a",JE,[de(n,{icon:"fa-solid fa-heart",class:"heart"})])])])}const eI=vt(KE,[["render",ZE],["__scopeId","data-v-eac58631"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,v=l&63;c||(v=64,o||(f=64)),r.push(n[u],n[h],n[f],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const v=a<<4&240|l>>2;if(r.push(v),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nI=function(t){const e=dg(t);return pg.encodeByteArray(e,!0)},ea=function(t){return nI(t).replace(/\./g,"")},mg=function(t){try{return pg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function sI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return typeof indexedDB=="object"}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mg(t[1]);return e&&JSON.parse(e)},Uu=()=>{try{return uI()||hI()||fI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,n;return(n=(e=Uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dI=t=>{const e=gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pI=()=>{var t;return(t=Uu())===null||t===void 0?void 0:t.config},vg=t=>{var e;return(e=Uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Cn(s,a,r)}}function yI(t,e){return t.replace(_I,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _I=/\{\$([^}]+)}/g;function bI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ld(i)&&ld(o)){if(!ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ld(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wI(t,e){const n=new EI(t,e);return n.subscribe.bind(n)}class EI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cc),s.error===void 0&&(s.error=Cc),s.complete===void 0&&(s.complete=Cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cc(){}/**
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
 */function Jn(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class TI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(t){return t===ir?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
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
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const xI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},AI=Ee.INFO,RI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=AI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let ud,hd;function PI(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,bl=new WeakMap,_g=new WeakMap,Sc=new WeakMap,Bu=new WeakMap;function LI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yg.set(n,t)}).catch(()=>{}),Bu.set(e,t),e}function MI(t){if(bl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bl.set(t,e)}let wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_g.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){wl=t(wl)}function $I(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return _g.set(r,e.sort?e.sort():[e]),Bn(r)}:DI().includes(t)?function(...e){return t.apply(kc(this),e),Bn(yg.get(this))}:function(...e){return Bn(t.apply(kc(this),e))}}function UI(t){return typeof t=="function"?$I(t):(t instanceof IDBTransaction&&MI(t),NI(t,PI())?new Proxy(t,wl):t)}function Bn(t){if(t instanceof IDBRequest)return LI(t);if(Sc.has(t))return Sc.get(t);const e=UI(t);return e!==t&&(Sc.set(t,e),Bu.set(e,t)),e}const kc=t=>Bu.get(t);function VI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bn(o.result),c.oldVersion,c.newVersion,Bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const BI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],xc=new Map;function fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return xc.set(e,i),i}FI(t=>({...t,get:(e,n,r)=>fd(e,n)||t.get(e,n,r),has:(e,n)=>!!fd(e,n)||t.has(e,n)}));/**
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
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",dd="0.8.3";/**
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
 */const xr=new Vu("@firebase/app"),qI="@firebase/app-compat",KI="@firebase/analytics-compat",WI="@firebase/analytics",GI="@firebase/app-check-compat",YI="@firebase/app-check",QI="@firebase/auth",XI="@firebase/auth-compat",JI="@firebase/database",ZI="@firebase/database-compat",eT="@firebase/functions",tT="@firebase/functions-compat",nT="@firebase/installations",rT="@firebase/installations-compat",sT="@firebase/messaging",iT="@firebase/messaging-compat",oT="@firebase/performance",aT="@firebase/performance-compat",cT="@firebase/remote-config",lT="@firebase/remote-config-compat",uT="@firebase/storage",hT="@firebase/storage-compat",fT="@firebase/firestore",dT="@firebase/firestore-compat",pT="firebase",mT="9.13.0";/**
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
 */const Il="[DEFAULT]",gT={[El]:"fire-core",[qI]:"fire-core-compat",[WI]:"fire-analytics",[KI]:"fire-analytics-compat",[YI]:"fire-app-check",[GI]:"fire-app-check-compat",[QI]:"fire-auth",[XI]:"fire-auth-compat",[JI]:"fire-rtdb",[ZI]:"fire-rtdb-compat",[eT]:"fire-fn",[tT]:"fire-fn-compat",[nT]:"fire-iid",[rT]:"fire-iid-compat",[sT]:"fire-fcm",[iT]:"fire-fcm-compat",[oT]:"fire-perf",[aT]:"fire-perf-compat",[cT]:"fire-rc",[lT]:"fire-rc-compat",[uT]:"fire-gcs",[hT]:"fire-gcs-compat",[fT]:"fire-fst",[dT]:"fire-fst-compat","fire-js":"fire-js",[pT]:"fire-js-all"};/**
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
 */const na=new Map,Tl=new Map;function vT(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Tl.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of na.values())vT(n,t);return!0}function ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Pi("app","Firebase",yT);/**
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
 */class _T{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=mT;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Il,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=pI()),!n)throw jn.create("no-options");const i=na.get(s);if(i){if(ta(n,i.options)&&ta(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new kI(s);for(const c of Tl.values())o.addComponent(c);const a=new _T(n,r,o);return na.set(s,a),a}function wg(t=Il){const e=na.get(t);if(!e&&t===Il)return bg();if(!e)throw jn.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let s=(r=gT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}us(new kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bT="firebase-heartbeat-database",wT=1,mi="firebase-heartbeat-store";let Ac=null;function Eg(){return Ac||(Ac=VI(bT,wT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mi)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function ET(t){var e;try{return(await Eg()).transaction(mi).objectStore(mi).get(Ig(t))}catch(n){if(n instanceof Cn)xr.warn(n.message);else{const r=jn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});xr.warn(r.message)}}}async function pd(t,e){var n;try{const s=(await Eg()).transaction(mi,"readwrite");return await s.objectStore(mi).put(e,Ig(t)),s.done}catch(r){if(r instanceof Cn)xr.warn(r.message);else{const s=jn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});xr.warn(s.message)}}}function Ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IT=1024,TT=30*24*60*60*1e3;class CT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=md();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=TT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=md(),{heartbeatsToSend:n,unsentEntries:r}=ST(this._heartbeatsCache.heartbeats),s=ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function md(){return new Date().toISOString().substring(0,10)}function ST(t,e=IT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ET(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gd(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xT(t){us(new kr("platform-logger",e=>new zI(e),"PRIVATE")),us(new kr("heartbeat",e=>new CT(e),"PRIVATE")),zn(El,dd,t),zn(El,dd,"esm2017"),zn("fire-js","")}xT("");var AT="firebase",RT="9.13.0";/**
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
 */zn(AT,RT,"app");var OT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,zu=zu||{},oe=OT||self;function ra(){}function Fa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function NT(t){return Object.prototype.hasOwnProperty.call(t,Rc)&&t[Rc]||(t[Rc]=++PT)}var Rc="closure_uid_"+(1e9*Math.random()>>>0),PT=0;function DT(t,e,n){return t.call.apply(t.bind,arguments)}function LT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=DT:dt=LT,dt.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var MT=0;Zn.prototype.s=!1;Zn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),MT!=0)&&NT(this)};Zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var FT=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",ra,e),oe.removeEventListener("test",ra,e)}catch{}return t}();function sa(t){return/^[\s\xa0]*$/.test(t)}var yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oc(t,e){return t<e?-1:t>e?1:0}function $a(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return $a().indexOf(t)!=-1}function qu(t){return qu[" "](t),t}qu[" "]=ra;function $T(t){var e=BT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var UT=Xt("Opera"),hs=Xt("Trident")||Xt("MSIE"),Cg=Xt("Edge"),Cl=Cg||hs,Sg=Xt("Gecko")&&!($a().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),VT=$a().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function kg(){var t=oe.document;return t?t.documentMode:void 0}var ia;e:{var Nc="",Pc=function(){var t=$a();if(Sg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cg)return/Edge\/([\d\.]+)/.exec(t);if(hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VT)return/WebKit\/(\S+)/.exec(t);if(UT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pc&&(Nc=Pc?Pc[1]:""),hs){var Dc=kg();if(Dc!=null&&Dc>parseFloat(Nc)){ia=String(Dc);break e}}ia=Nc}var BT={};function jT(){return $T(function(){let t=0;const e=yd(String(ia)).split("."),n=yd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Oc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Oc(s[2].length==0,i[2].length==0)||Oc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Sl;if(oe.document&&hs){var _d=kg();Sl=_d||parseInt(ia,10)||void 0}else Sl=void 0;var zT=Sl;function gi(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sg){e:{try{qu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gi.X.h.call(this)}}at(gi,pt);var HT={2:"touch",3:"pen",4:"mouse"};gi.prototype.h=function(){gi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),qT=0;function KT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++qT,this.ba=this.ea=!1}function Ua(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ku(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}const bd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ag(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<bd.length;i++)n=bd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Va(t){this.src=t,this.g={},this.h=0}Va.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=xl(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new KT(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function kl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Tg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ua(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Wu="closure_lm_"+(1e6*Math.random()|0),Lc={};function Rg(t,e,n,r,s){if(r&&r.once)return Ng(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rg(t,e[i],n,r,s);return null}return n=Qu(n),t&&t[Fi]?t.N(e,n,Mi(r)?!!r.capture:!!r,s):Og(t,e,n,!1,r,s)}function Og(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Mi(s)?!!s.capture:!!s,a=Yu(t);if(a||(t[Wu]=a=new Va(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=WT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Dg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WT(){function t(n){return e.call(t.src,t.listener,n)}const e=GT;return t}function Ng(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ng(t,e[i],n,r,s);return null}return n=Qu(n),t&&t[Fi]?t.O(e,n,Mi(r)?!!r.capture:!!r,s):Og(t,e,n,!0,r,s)}function Pg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pg(t,e[i],n,r,s);else r=Mi(r)?!!r.capture:!!r,n=Qu(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=xl(i,n,r,s),-1<n&&(Ua(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xl(e,n,r,s)),(n=-1<t?e[t]:null)&&Gu(n))}function Gu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fi])kl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yu(e))?(kl(n,t),n.h==0&&(n.src=null,e[Wu]=null)):Ua(t)}}}function Dg(t){return t in Lc?Lc[t]:Lc[t]="on"+t}function GT(t,e){if(t.ba)t=!0;else{e=new gi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Gu(t),t=n.call(r,e)}return t}function Yu(t){return t=t[Wu],t instanceof Va?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qu(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function tt(){Zn.call(this),this.i=new Va(this),this.P=this,this.I=null}at(tt,Zn);tt.prototype[Fi]=!0;tt.prototype.removeEventListener=function(t,e,n,r){Pg(this,t,e,n,r)};function ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var s=e;e=new pt(r,t),Ag(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=yo(o,r,!0,e)&&s}if(o=e.g=t,s=yo(o,r,!0,e)&&s,s=yo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=yo(o,r,!1,e)&&s}tt.prototype.M=function(){if(tt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ua(n[r]);delete t.g[e],t.h--}}this.I=null};tt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&kl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Xu=oe.JSON.stringify;function YT(){var t=Fg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QT{constructor(){this.h=this.g=null}add(e,n){const r=Lg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Lg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new XT,t=>t.reset());class XT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function JT(t){oe.setTimeout(()=>{throw t},0)}function Mg(t,e){Al||ZT(),Rl||(Al(),Rl=!0),Fg.add(t,e)}var Al;function ZT(){var t=oe.Promise.resolve(void 0);Al=function(){t.then(eC)}}var Rl=!1,Fg=new QT;function eC(){for(var t;t=YT();){try{t.h.call(t.g)}catch(n){JT(n)}var e=Lg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rl=!1}function Ba(t,e){tt.call(this),this.h=t||1,this.g=e||oe,this.j=dt(this.lb,this),this.l=Date.now()}at(Ba,tt);Y=Ba.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ot(this,"tick"),this.ca&&(Ju(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ju(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){Ba.X.M.call(this),Ju(this),delete this.g};function Zu(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function $g(t){t.g=Zu(()=>{t.g=null,t.i&&(t.i=!1,$g(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tC extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$g(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(t){Zn.call(this),this.h=t,this.g={}}at(vi,Zn);var wd=[];function Ug(t,e,n,r){Array.isArray(n)||(n&&(wd[0]=n.toString()),n=wd);for(var s=0;s<n.length;s++){var i=Rg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Vg(t){Ku(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gu(e)},t),t.g={}}vi.prototype.M=function(){vi.X.M.call(this),Vg(this)};vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Aa=function(){this.g=!1};function nC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function rC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iC(t,n)+(r?" "+r:"")})}function sC(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function iC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Xu(n)}catch{return e}}var Pr={},Ed=null;function za(){return Ed=Ed||new tt}Pr.Pa="serverreachability";function Bg(t){pt.call(this,Pr.Pa,t)}at(Bg,pt);function yi(t){const e=za();ot(e,new Bg(e))}Pr.STAT_EVENT="statevent";function jg(t,e){pt.call(this,Pr.STAT_EVENT,t),this.stat=e}at(jg,pt);function bt(t){const e=za();ot(e,new jg(e,t))}Pr.Qa="timingevent";function zg(t,e){pt.call(this,Pr.Qa,t),this.size=e}at(zg,pt);function $i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var Ha={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eh(){}eh.prototype.h=null;function Id(t){return t.h||(t.h=t.i())}function qg(){}var Ui={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function th(){pt.call(this,"d")}at(th,pt);function nh(){pt.call(this,"c")}at(nh,pt);var Ol;function qa(){}at(qa,eh);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};Ol=new qa;function Vi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new vi(this),this.O=oC,t=Cl?125:void 0,this.T=new Ba(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kg}function Kg(){this.i=null,this.g="",this.h=!1}var oC=45e3,Nl={},oa={};Y=Vi.prototype;Y.setTimeout=function(t){this.O=t};function Pl(t,e,n){t.K=1,t.v=Wa(_n(e)),t.s=n,t.P=!0,Wg(t,null)}function Wg(t,e){t.F=Date.now(),Bi(t),t.A=_n(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),tv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Kg,t.g=Ev(t.l,n?e:null,!t.s),0<t.N&&(t.L=new tC(dt(t.La,t,t.g),t.N)),Ug(t.S,t.g,"readystatechange",t.ib),e=t.H?xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yi(),nC(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Cl||this.g&&(this.h.h||this.g.fa()||kd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?yi(3):yi(2)),Ka(this);var n=this.g.aa();this.Y=n;t:if(Gg(this)){var r=kd(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),Ys(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,rC(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(a)){var l=a;break t}}l=null}if(n=l)qr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dl(this,n);else{this.i=!1,this.o=3,bt(12),hr(this),Ys(this);break e}}this.P?(Yg(this,u,o),Cl&&this.i&&u==3&&(Ug(this.S,this.T,"tick",this.hb),this.T.start())):(qr(this.j,this.m,o,null),Dl(this,o)),u==4&&hr(this),this.i&&!this.I&&(u==4?yv(this.l,this):(this.i=!1,Bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),hr(this),Ys(this)}}}catch{}finally{}};function Gg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=aC(t,n),s==oa){e==4&&(t.o=4,bt(14),r=!1),qr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Nl){t.o=4,bt(15),qr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qr(t.j,t.m,s,null),Dl(t,s);Gg(t)&&s!=oa&&s!=Nl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lh(e),e.K=!0,bt(11))):(qr(t.j,t.m,n,"[Invalid Chunked Response]"),hr(t),Ys(t))}Y.hb=function(){if(this.g){var t=fn(this.g),e=this.g.fa();this.C<e.length&&(Ka(this),Yg(this,t,e),this.i&&t!=4&&Bi(this))}};function aC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oa:(n=Number(e.substring(n,r)),isNaN(n)?Nl:(r+=1,r+n>e.length?oa:(e=e.substr(r,n),t.C=r+n,e)))}Y.cancel=function(){this.I=!0,hr(this)};function Bi(t){t.V=Date.now()+t.O,Qg(t,t.O)}function Qg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$i(dt(t.gb,t),e)}function Ka(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sC(this.j,this.A),this.K!=2&&(yi(),bt(17)),hr(this),this.o=2,Ys(this)):Qg(this,this.V-t)};function Ys(t){t.l.G==0||t.I||yv(t.l,t)}function hr(t){Ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ju(t.T),Vg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ll(n.h,t))){if(!t.J&&Ll(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)la(n),Qa(n);else break e;ch(n),bt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=$i(dt(n.cb,n),6e3));if(1>=sv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else fr(n,11)}else if((t.J||n.g==t)&&la(n),!sa(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=t.g;if(v){const w=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(rh(i,i.h),i.h=null))}if(r.D){const C=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.za=C,Me(r.F,r.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=wv(r,r.H?r.ka:null,r.V),o.J){iv(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ka(a),Bi(a)),r.g=o}else gv(r);0<n.i.length&&Xa(n)}else l[0]!="stop"&&l[0]!="close"||fr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?fr(n,7):ah(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}yi(4)}catch{}}function cC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function lC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lC(t),r=cC(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yr){this.h=e!==void 0?e:t.h,aa(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l,e=t.i;var n=new _i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Td(this,n),this.o=t.o}else t&&(n=String(t).match(Jg))?(this.h=!!e,aa(this,n[1]||"",!0),this.s=Fs(n[2]||""),this.g=Fs(n[3]||"",!0),ca(this,n[4]),this.l=Fs(n[5]||"",!0),Td(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.h=!!e,this.i=new _i(null,this.h))}yr.prototype.toString=function(){var t=[],e=this.j;e&&t.push($s(e,Cd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($s(e,Cd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($s(n,n.charAt(0)=="/"?dC:fC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$s(n,mC)),t.join("")};function _n(t){return new yr(t)}function aa(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Td(t,e,n){e instanceof _i?(t.i=e,gC(t.i,t.h)):(n||(e=$s(e,pC)),t.i=new _i(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Wa(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $s(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cd=/[#\/\?@]/g,fC=/[#\?:]/g,dC=/[#\?]/g,pC=/[#\?@]/g,mC=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function er(t){t.g||(t.g=new Map,t.h=0,t.i&&uC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=_i.prototype;Y.add=function(t,e){er(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zg(t,e){er(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ev(t,e){return er(t),e=Ts(t,e),t.g.has(e)}Y.forEach=function(t,e){er(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};Y.oa=function(){er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};Y.W=function(t){er(this);let e=[];if(typeof t=="string")ev(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return er(this),this.i=null,t=Ts(this,t),ev(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tv(t,e,n){Zg(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),Hu(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gC(t,e){e&&!t.j&&(er(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Zg(this,r),tv(this,s,n))},t)),t.j=e}var vC=class{constructor(t,e){this.h=t,this.g=e}};function nv(t){this.l=t||yC,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ga&&oe.g.Ga()&&oe.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yC=10;function rv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sv(t){return t.h?1:t.g?t.g.size:0}function Ll(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rh(t,e){t.g?t.g.add(e):t.h=e}function iv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nv.prototype.cancel=function(){if(this.i=ov(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ov(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hu(t.i)}function sh(){}sh.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};sh.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function _C(){this.g=new sh}function bC(t,e,n){const r=n||"";try{Xg(t,function(s,i){let o=s;Mi(s)&&(o=Xu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function wC(t,e){const n=new ja;if(oe.Image){const r=new Image;r.onload=vo(_o,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vo(_o,n,r,"TestLoadImage: error",!1,e),r.onabort=vo(_o,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vo(_o,n,r,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _o(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ji(t){this.l=t.ac||null,this.j=t.jb||!1}at(ji,eh);ji.prototype.g=function(){return new Ga(this.l,this.j)};ji.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ih,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Ga,tt);var ih=0;Y=Ga.prototype;Y.open=function(t,e){if(this.readyState!=ih)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=ih};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;av(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function av(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):bi(this),this.readyState==3&&av(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,zi(this))};Y.Ua=function(t){this.g&&(this.response=t,zi(this))};Y.ga=function(){this.g&&zi(this)};function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EC=oe.JSON.parse;function je(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cv,this.K=this.L=!1}at(je,tt);var cv="",IC=/^https?$/i,TC=["POST","PUT"];Y=je.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ol.g(),this.C=this.u?Id(this.u):Id(Ol),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Sd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=oe.FormData&&t instanceof oe.FormData,!(0<=Tg(TC,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hv(this),0<this.B&&((this.K=CC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=Zu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sd(this,i)}};function CC(t){return hs&&jT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof zu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Sd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lv(t),Ya(t)}function lv(t){t.D||(t.D=!0,ot(t,"complete"),ot(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Ya(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ya(this,!0)),je.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?uv(this):this.fb())};Y.fb=function(){uv(this)};function uv(t){if(t.h&&typeof zu<"u"&&(!t.C[1]||fn(t)!=4||t.aa()!=2)){if(t.v&&fn(t)==4)Zu(t.Ha,0,t);else if(ot(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Jg)[1]||null;if(!s&&oe.self&&oe.self.location){var i=oe.self.location.protocol;s=i.substr(0,i.length-1)}r=!IC.test(s?s.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lv(t)}}finally{Ya(t)}}}}function Ya(t,e){if(t.g){hv(t);const n=t.g,r=t.C[0]?ra:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function hv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EC(e)}};function kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fv(t){let e="";return Ku(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function oh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=fv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dv(t){this.Ca=0,this.i=[],this.j=new ja,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ds("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ds("baseRetryDelayMs",5e3,t),this.bb=Ds("retryDelaySeedMs",1e4,t),this.$a=Ds("forwardChannelMaxRetries",2,t),this.ta=Ds("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new nv(t&&t.concurrentRequestLimit),this.Fa=new _C,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=dv.prototype;Y.ma=8;Y.G=1;function ah(t){if(pv(t),t.G==3){var e=t.U++,n=_n(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),Hi(t,n),e=new Vi(t,t.j,e,void 0),e.K=2,e.v=Wa(_n(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ev(e.l,null),e.g.da(e.v)),e.F=Date.now(),Bi(e)}bv(t)}function Qa(t){t.g&&(lh(t),t.g.cancel(),t.g=null)}function pv(t){Qa(t),t.u&&(oe.clearTimeout(t.u),t.u=null),la(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function Xa(t){rv(t.h)||t.m||(t.m=!0,Mg(t.Ja,t),t.C=0)}function SC(t,e){return sv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=$i(dt(t.Ja,t,e),_v(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Vi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=xg(i),Ag(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mv(this,s,e),n=_n(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Hi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(fv(i)))+"&"+e:this.o&&oh(n,this.o,i)),rh(this.h,s),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),s.Z=!0,Pl(s,n,null)):Pl(s,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.i.length==0||rv(this.h)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.U++;const r=_n(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),Hi(t,r),t.o&&t.s&&oh(r,t.o,t.s),n=new Vi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=mv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rh(t.h,n),Pl(n,r,e)}function Hi(t,e){t.ia&&Ku(t.ia,function(n,r){Me(e,r,n)}),t.l&&Xg({},function(n,r){Me(e,r,n)})}function mv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?dt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{bC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function gv(t){t.g||t.u||(t.Z=1,Mg(t.Ia,t),t.A=0)}function ch(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=$i(dt(t.Ia,t),_v(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,vv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=$i(dt(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,bt(10),Qa(this),vv(this))};function lh(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function vv(t){t.g=new Vi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_n(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),Hi(t,e),t.o&&t.s&&oh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wa(_n(e)),n.s=null,n.P=!0,Wg(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,Qa(this),ch(this),bt(19))};function la(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function yv(t,e){var n=null;if(t.g==e){la(t),lh(t),t.g=null;var r=2}else if(Ll(t.h,e))n=e.D,iv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=za(),ot(r,new zg(r,n)),Xa(t)}else gv(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&SC(t,e)||r==2&&ch(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:fr(t,5);break;case 4:fr(t,10);break;case 3:fr(t,6);break;default:fr(t,2)}}}function _v(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function fr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=dt(t.kb,t);n||(n=new yr("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||aa(n,"https"),Wa(n)),wC(n.toString(),r)}else bt(2);t.G=0,t.l&&t.l.va(e),bv(t),pv(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function bv(t){if(t.G=0,t.la=[],t.l){const e=ov(t.h);(e.length!=0||t.i.length!=0)&&(vd(t.la,e),vd(t.la,t.i),t.h.i.length=0,Hu(t.i),t.i.length=0),t.l.ua()}}function wv(t,e,n){var r=n instanceof yr?_n(n):new yr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ca(r,r.m);else{var s=oe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new yr(null,void 0);r&&aa(i,r),e&&(i.g=e),s&&ca(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),Hi(t,r),r}function Ev(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new ji({jb:!0})):new je(t.ra),e.Ka(t.H),e}function Iv(){}Y=Iv.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function ua(){if(hs&&!(10<=Number(zT)))throw Error("Environmental error: no available transport.")}ua.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){tt.call(this),this.g=new dv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!sa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}at(Ot,tt);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wv(t,null,t.V),Xa(t)};Ot.prototype.close=function(){ah(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xu(t),t=n);e.i.push(new vC(e.ab++,t)),e.G==3&&Xa(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,ah(this.g),delete this.g,Ot.X.M.call(this)};function Tv(t){th.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(Tv,th);function Cv(){nh.call(this),this.status=1}at(Cv,nh);function Cs(t){this.g=t}at(Cs,Iv);Cs.prototype.xa=function(){ot(this.g,"a")};Cs.prototype.wa=function(t){ot(this.g,new Tv(t))};Cs.prototype.va=function(t){ot(this.g,new Cv)};Cs.prototype.ua=function(){ot(this.g,"b")};ua.prototype.createWebChannel=ua.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Ha.NO_ERROR=0;Ha.TIMEOUT=8;Ha.HTTP_ERROR=6;Hg.COMPLETE="complete";qg.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";tt.prototype.listen=tt.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var kC=function(){return new ua},xC=function(){return za()},Fc=Ha,AC=Hg,RC=Pr,Ad={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},OC=ji,bo=qg,NC=je;const Rd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Vu("@firebase/firestore");function Od(){return Ar.logLevel}function X(t,...e){if(Ar.logLevel<=Ee.DEBUG){const n=e.map(uh);Ar.debug(`Firestore (${Ss}): ${t}`,...n)}}function bn(t,...e){if(Ar.logLevel<=Ee.ERROR){const n=e.map(uh);Ar.error(`Firestore (${Ss}): ${t}`,...n)}}function Ml(t,...e){if(Ar.logLevel<=Ee.WARN){const n=e.map(uh);Ar.warn(`Firestore (${Ss}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function Ge(t,e){t||pe()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class DC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LC{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string"),new Sv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new lt(e)}}class MC{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ge(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class FC{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new MC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.A=n.token,new $C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=VC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new kt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new kt(0,0))}static max(){return new me(new kt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends wi{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const jC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends wi{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return jC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Be.fromString(e))}static fromName(e){return new te(Be.fromString(e).popFirst(5))}static empty(){return new te(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Be(e.slice()))}}function zC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new kt(n+1,0):new kt(n,r));return new Yn(s,te.empty(),e)}function HC(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(me.min(),te.empty(),-1)}static max(){return new Yn(me.max(),te.empty(),-1)}}function qC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
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
 */const KC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==KC)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ja(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fh.at=-1;class nt{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:st.RED,this.left=s!=null?s:st.EMPTY,this.right=i!=null?i:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(t,e,n,r,s){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class br{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new br([])}unionWith(e){let n=new Qe(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new br(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const YC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=YC.exec(t);if(Ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function kv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xv(t){const e=t.mapValue.fields.__previous_value__;return kv(e)?xv(e):e}function Ei(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new kt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}function Za(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}/**
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
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kv(t)?4:XC(t)?9007199254740991:10:pe()}function sn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Qn(r.timestampValue),o=Qn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ds(r.bytesValue).isEqual(ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ke(r.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ke(r.integerValue)===Ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ke(r.doubleValue),o=Ke(s.doubleValue);return i===o?Fl(i)===Fl(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Nd(i)!==Nd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!sn(i[a],o[a])))return!1;return!0}(t,e);default:return pe()}}function Ti(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ke(s.integerValue||s.doubleValue),a=Ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dd(t.timestampValue,e.timestampValue);case 4:return Dd(Ei(t),Ei(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ds(s),a=ds(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ke(o[c],a[c]);if(l!==0)return l}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ke(Ke(s.latitude),Ke(i.latitude));return o!==0?o:ke(Ke(s.longitude),Ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ps(o[c],a[c]);if(l)return l}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Eo.mapValue&&i===Eo.mapValue)return 0;if(s===Eo.mapValue)return 1;if(i===Eo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ke(a[u],l[u]);if(h!==0)return h;const f=ps(o[a[u]],c[l[u]]);if(f!==0)return f}return ke(a.length,l.length)}(t.mapValue,e.mapValue);default:throw pe()}}function Dd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Qn(t),r=Qn(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function Jr(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Qn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=$l(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${$l(r.fields[a])}`;return i+"}"}(t.mapValue):pe();var e,n}function Ul(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function Ld(t){return!!t&&"nullValue"in t}function Md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $c(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ja(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$c(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ja(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(Qs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new it(e,0,me.min(),me.min(),Jt.empty(),0)}static newFoundDocument(e,n,r){return new it(e,1,n,me.min(),r,0)}static newNoDocument(e,n){return new it(e,2,n,me.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,me.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class JC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new JC(t,e,n,r,s,i,o)}function ph(t){const e=we(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Jr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),e.ht=n}return e.ht}function ZC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Jr(r.value)}`;var r}).join(", ")}]`),Za(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Jr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Jr(n)).join(",")),`Target(${e})`}function mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!aS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ud(t.startAt,e.startAt)&&Ud(t.endAt,e.endAt)}function Vl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class St extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new eS(e,n,r):n==="array-contains"?new rS(e,r):n==="in"?new sS(e,r):n==="not-in"?new iS(e,r):n==="array-contains-any"?new oS(e,r):new St(e,n,r)}static lt(e,n,r){return n==="in"?new tS(e,r):new nS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ps(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.ft(ps(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eS extends St{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.ft(n)}}class tS extends St{constructor(e,n){super(e,"in",n),this.keys=Av("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nS extends St{constructor(e,n){super(e,"not-in",n),this.keys=Av("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Av(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class rS extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&Ti(n.arrayValue,this.value)}}class sS extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class iS extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class oS extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}class ha{constructor(e,n){this.position=e,this.inclusive=n}}class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function aS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $d(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function cS(t,e,n,r,s,i,o,a){return new ec(t,e,n,r,s,i,o,a)}function Rv(t){return new ec(t)}function Vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uS(t){for(const e of t.filters)if(e.dt())return e.field;return null}function hS(t){return t.collectionGroup!==null}function Ci(t){const e=we(t);if(e._t===null){e._t=[];const n=uS(e),r=lS(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Xs(n)),e._t.push(new Xs(Ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Xs(Ct.keyField(),i))}}}return e._t}function wn(t){const e=we(t);if(!e.wt)if(e.limitType==="F")e.wt=Fd(e.path,e.collectionGroup,Ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ci(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xs(i.field,o))}const r=e.endAt?new ha(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ha(e.startAt.position,e.startAt.inclusive):null;e.wt=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function Bl(t,e,n){return new ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return mh(wn(t),wn(e))&&t.limitType===e.limitType}function Ov(t){return`${ph(wn(t))}|lt:${t.limitType}`}function jl(t){return`Query(target=${ZC(wn(t))}; limitType=${t.limitType})`}function gh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):te.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=$d(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ci(n),r)||n.endAt&&!function(s,i,o){const a=$d(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ci(n),r))}(t,e)}function fS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nv(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=dS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dS(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ps(a,c):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */function pS(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function mS(t){return{integerValue:""+t}}/**
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
 */class nc{constructor(){this._=void 0}}function gS(t,e,n){return t instanceof zl?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof fa?Pv(t,e):t instanceof da?Dv(t,e):function(r,s){const i=yS(r,s),o=Bd(i)+Bd(r.yt);return Ul(i)&&Ul(r.yt)?mS(o):pS(r.It,o)}(t,e)}function vS(t,e,n){return t instanceof fa?Pv(t,e):t instanceof da?Dv(t,e):n}function yS(t,e){return t instanceof Hl?Ul(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zl extends nc{}class fa extends nc{constructor(e){super(),this.elements=e}}function Pv(t,e){const n=Lv(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class da extends nc{constructor(e){super(),this.elements=e}}function Dv(t,e){let n=Lv(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class Hl extends nc{constructor(e,n){super(),this.It=e,this.yt=n}}function Bd(t){return Ke(t.integerValue||t.doubleValue)}function Lv(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _S(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fa&&r instanceof fa||n instanceof da&&r instanceof da?fs(n.elements,r.elements,sn):n instanceof Hl&&r instanceof Hl?sn(n.yt,r.yt):n instanceof zl&&r instanceof zl}(t.transform,e.transform)}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vh{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wS(t.key,wr.none()):new yh(t.key,t.data,wr.none());{const n=t.data,r=Jt.empty();let s=new Qe(Ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rc(t.key,r,new br(s.toArray()),wr.none())}}function bS(t,e,n){t instanceof yh?function(r,s,i){const o=r.value.clone(),a=zd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rc?function(r,s,i){if(!Lo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=zd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Fv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof yh?function(s,i,o,a){if(!Lo(s.precondition,i))return o;const c=s.value.clone(),l=Hd(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof rc?function(s,i,o,a){if(!Lo(s.precondition,i))return o;const c=Hd(s.fieldTransforms,a,i),l=i.data;return l.setAll(Fv(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Lo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fs(n,r,(s,i)=>_S(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yh extends vh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rc extends vh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zd(t,e,n){const r=new Map;Ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,vS(o,a,n[s]))}return r}function Hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gS(i,o,e))}return r}class wS extends vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ye;function $v(t){if(t===void 0)return bn("GRPC error has no .code"),U.UNKNOWN;switch(t){case qe.OK:return U.OK;case qe.CANCELLED:return U.CANCELLED;case qe.UNKNOWN:return U.UNKNOWN;case qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case qe.INTERNAL:return U.INTERNAL;case qe.UNAVAILABLE:return U.UNAVAILABLE;case qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case qe.NOT_FOUND:return U.NOT_FOUND;case qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case qe.ABORTED:return U.ABORTED;case qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case qe.DATA_LOSS:return U.DATA_LOSS;default:return pe()}}(ye=qe||(qe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ja(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return GC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new nt(te.comparator);function Xn(){return IS}const Uv=new nt(te.comparator);function Us(...t){let e=Uv;for(const n of t)e=e.insert(n.key,n);return e}function TS(t){let e=Uv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return Zs()}function Vv(){return Zs()}function Zs(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}new nt(te.comparator);const CS=new Qe(te.comparator);function be(...t){let e=CS;for(const n of t)e=e.add(n);return e}const SS=new Qe(ke);function Bv(){return SS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(me.min(),s,Bv(),Xn(),be())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ki(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class jv{constructor(e,n){this.targetId=e,this.At=n}}class zv{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qd{constructor(){this.Rt=0,this.bt=Wd(),this.Pt=gt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=be(),n=be(),r=be();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Ki(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Wd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class kS{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Xn(),this.qt=Kd(),this.Kt=new Qe(ke)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Vl(i))if(r===0){const o=new te(i.path);this.jt(n,o,it.newNoDocument(o,me.min()))}else Ge(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Vl(a.target)){const c=new te(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,it.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=be();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new sc(e,n,this.Kt,this.Ut,r);return this.Ut=Xn(),this.qt=Kd(),this.Kt=new Qe(ke),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new qd,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Qe(ke),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new qd),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Kd(){return new nt(te.comparator)}function Wd(){return new nt(te.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class RS{constructor(e,n){this.databaseId=e,this.gt=n}}function OS(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NS(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Si(t){return Ge(!!t),me.fromTimestamp(function(e){const n=Qn(e);return new kt(n.seconds,n.nanos)}(t))}function PS(t,e){return function(n){return new Be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Hv(t){const e=Be.fromString(t);return Ge(Wv(e)),e}function Uc(t,e){const n=Hv(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(qv(n))}function ql(t,e){return PS(t.databaseId,e)}function DS(t){const e=Hv(t);return e.length===4?Be.emptyPath():qv(e)}function Gd(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Ge(l===void 0||typeof l=="string"),gt.fromBase64String(l||"")):(Ge(l===void 0||l instanceof Uint8Array),gt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?U.UNKNOWN:$v(c.code);return new ne(l,c.message||"")}(o);n=new zv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Si(r.document.updateTime),o=new Jt({mapValue:{fields:r.document.fields}}),a=it.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Mo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Si(r.readTime):me.min(),o=it.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new Mo([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new ES(s),o=r.targetId;n=new jv(o,i)}}return n}function MS(t,e){return{documents:[ql(t,e.path)]}}function FS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ql(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ql(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Md(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NAN"}};if(Ld(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Md(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NOT_NAN"}};if(Ld(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(h.field),op:BS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ur(u.field),direction:VS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Za(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $S(t){let e=DS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ge(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Kv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xs(Kr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Za(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ha(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ha(f,h)}(n.endAt)),cS(e,s,o,i,a,"F",c,l)}function US(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return pe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kv(t){return t?t.unaryFilter!==void 0?[zS(t)]:t.fieldFilter!==void 0?[jS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Kv(e)).reduce((e,n)=>e.concat(n)):pe():[]}function VS(t){return xS[t]}function BS(t){return AS[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Kr(t){return Ct.fromServerFormat(t.fieldPath)}function jS(t){return St.create(Kr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}function zS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Kr(t.unaryFilter.field);return St.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Kr(t.unaryFilter.field);return St.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kr(t.unaryFilter.field);return St.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Kr(t.unaryFilter.field);return St.create(s,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}function Wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Mv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>jd(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}/**
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
 */class qS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Er{constructor(e,n,r,s,i=me.min(),o=me.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.re=e}}function WS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
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
 */class GS{constructor(){this.Ye=new YS}addToCollectionParentIndex(e,n){return this.Ye.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Yn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class YS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ms(0)}static vn(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Js(r.mutation,s,br.empty(),kt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Xn();const o=Zs(),a=Zs();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof rc)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Js(u.mutation,l,u.mutation.getFieldMask(),kt.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new XS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new nt((o,a)=>o-a),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||br.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||be()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vv();u.forEach(f=>{if(!i.has(f)){const v=Mv(n.get(f),r.get(f));v!==null&&h.set(f,v),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return te.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(dr());let a=-1,c=i;return o.next(l=>N.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?N.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,be())).next(u=>({batchId:a,changes:TS(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Us();return this.indexManager.getCollectionParents(e,s).next(o=>N.forEach(o,a=>{const c=function(l,u){return new ec(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,it.newInvalidDocument(l)))});let o=Us();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Js(l.mutation,c,br.empty(),kt.now()),gh(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):N.resolve(it.newInvalidDocument(n))}}/**
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
 */class ZS{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Si(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:WS(r.bundledQuery),readTime:Si(r.readTime)}}(n)),N.resolve()}}/**
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
 */class ek{constructor(){this.overlays=new nt(te.comparator),this.es=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=dr(),i=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new nt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=dr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return N.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qS(n,r));let i=this.es.get(n);i===void 0&&(i=be(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.ns=new Qe(Je.ss),this.rs=new Qe(Je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Je(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Je(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new te(new Be([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new te(new Be([])),r=new Je(n,e),s=new Je(n,e+1);let i=be();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return te.comparator(e.key,n.key)||ke(e._s,n._s)}static os(e,n){return ke(e._s,n._s)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Qe(Je.ss)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ke);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),N.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Je(new te(i),0);let a=new Qe(ke);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),N.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ge(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return N.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Je(n,0),s=this.gs.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.Es=e,this.docs=new nt(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),N.resolve(r)}getAllFromCollection(e,n,r){let s=Xn();const i=new te(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||qC(HC(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,s){pe()}As(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rk(this)}getSize(e){return N.resolve(this.size)}}class rk extends QS{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.persistence=e,this.Rs=new ks(n=>ph(n),mh),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _h,this.targetCount=0,this.vs=ms.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),N.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Dn(n),N.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new fh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sk(this),this.indexManager=new GS,this.remoteDocumentCache=function(r){return new nk(r)}(r=>this.referenceDelegate.xs(r)),this.It=new KS(n),this.Ns=new ZS(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ek,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new tk(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new ok(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return N.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class ok extends WC{constructor(e){super(),this.currentSequenceNumber=e}}class bh{constructor(e){this.persistence=e,this.Fs=new _h,this.$s=null}static Bs(e){return new bh(e)}get Ls(){if(this.$s)return this.$s;throw pe()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),N.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ls,r=>{const s=te.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return N.or([()=>N.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wh(e,n.fromCache,r,s)}}/**
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
 */class ak{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Vd(n))return N.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bl(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Bl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return Vd(n)||s.isEqual(me.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Od()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jl(n)),this.Bi(e,o,n,zC(s,-1)))})}Fi(e,n){let r=new Qe(Nv(e));return n.forEach((s,i)=>{gh(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Od()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",jl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Yn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ck{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new nt(ke),this.qi=new ks(i=>ph(i),mh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JS(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function lk(t,e,n,r){return new ck(t,e,n,r)}async function Gv(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=be();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Yv(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function uk(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let v=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?v=v.withResumeToken(gt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):u.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(u.resumeToken,r)),s=s.insert(h,v),function(w,C,A){return w.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,v,u)&&a.push(n.Cs.updateTargetData(i,v))});let c=Xn(),l=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(hk(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(me.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=s,i))}function hk(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Xn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function fk(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new Er(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=we(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function Yd(t,e,n){const r=we(t);let s=me.min(),i=be();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=we(a),h=u.qi.get(l);return h!==void 0?N.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:be())).next(a=>(dk(r,fS(e),a),{documents:a,Hi:i})))}function dk(t,e,n){let r=t.Ki.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class Qd{constructor(){this.activeTargetIds=Bv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pk{constructor(){this.Lr=new Qd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mk{qr(e){}shutdown(){}}/**
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
 */class Xd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const gk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);X("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(X("RestConnection","Received: ",c),c),c=>{throw Ml("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ss,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=gk[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new NC;a.setWithCredentials(!0),a.listenOnce(AC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fc.NO_ERROR:const l=a.getResponseJson();X("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Fc.TIMEOUT:X("Connection",'RPC "'+e+'" timed out'),o(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const u=a.getStatus();if(X("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(h.status);o(new ne(f,h.message))}else o(new ne(U.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ne(U.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{X("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=kC(),o=xC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new OC({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");X("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new vk({Hr:w=>{h?X("Connection","Not sending because WebChannel is closed:",w):(u||(X("Connection","Opening WebChannel transport."),l.open(),u=!0),X("Connection","WebChannel sending:",w),l.send(w))},Jr:()=>l.close()}),v=(w,C,A)=>{w.listen(C,_=>{try{A(_)}catch(T){setTimeout(()=>{throw T},0)}})};return v(l,bo.EventType.OPEN,()=>{h||X("Connection","WebChannel transport opened.")}),v(l,bo.EventType.CLOSE,()=>{h||(h=!0,X("Connection","WebChannel transport closed"),f.io())}),v(l,bo.EventType.ERROR,w=>{h||(h=!0,Ml("Connection","WebChannel transport errored:",w),f.io(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),v(l,bo.EventType.MESSAGE,w=>{var C;if(!h){const A=w.data[0];Ge(!!A);const _=A,T=_.error||((C=_[0])===null||C===void 0?void 0:C.error);if(T){X("Connection","WebChannel received error:",T);const $=T.status;let z=function(S){const b=qe[S];if(b!==void 0)return $v(b)}($),q=T.message;z===void 0&&(z=U.INTERNAL,q="Unknown error status: "+$+" with message "+T.message),h=!0,f.io(new ne(z,q)),l.close()}else X("Connection","WebChannel received:",A),f.ro(A)}}),v(o,RC.STAT_EVENT,w=>{w.stat===Ad.PROXY?X("Connection","Detected buffering proxy"):w.stat===Ad.NOPROXY&&X("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Vc(){return typeof document<"u"?document:null}/**
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
 */function Qv(t){return new RS(t,!0)}class Xv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bk extends _k{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=LS(this.It,e),r=function(s){if(!("targetChange"in s))return me.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?me.min():i.readTime?Si(i.readTime):me.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Gd(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Vl(a)?{documents:MS(s,a)}:{query:FS(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=NS(s,i.resumeToken):i.snapshotVersion.compareTo(me.min())>0&&(o.readTime=OS(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=US(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Gd(this.It),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(U.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Ek{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(bn(n),this.ou=!1):X("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=we(a);c._u.add(4),await Wi(c),c.gu.set("Unknown"),c._u.delete(4),await ic(c)}(this))})}),this.gu=new Ek(r,s)}}async function ic(t){if(Gi(t))for(const e of t.wu)await e(!0)}async function Wi(t){for(const e of t.wu)await e(!1)}function Jv(t,e){const n=we(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Th(n)?Ih(n):xs(n).ko()&&Eh(n,e))}function Zv(t,e){const n=we(t),r=xs(n);n.du.delete(e),r.ko()&&ey(n,e),n.du.size===0&&(r.ko()?r.Fo():Gi(n)&&n.gu.set("Unknown"))}function Eh(t,e){t.yu.Mt(e.targetId),xs(t).zo(e)}function ey(t,e){t.yu.Mt(e),xs(t).Ho(e)}function Ih(t){t.yu=new kS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),xs(t).start(),t.gu.uu()}function Th(t){return Gi(t)&&!xs(t).No()&&t.du.size>0}function Gi(t){return we(t)._u.size===0}function ty(t){t.yu=void 0}async function Tk(t){t.du.forEach((e,n)=>{Eh(t,e)})}async function Ck(t,e){ty(t),Th(t)?(t.gu.hu(e),Ih(t)):t.gu.set("Unknown")}async function Sk(t,e,n){if(t.gu.set("Online"),e instanceof zv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jd(t,r)}else if(e instanceof Mo?t.yu.Gt(e):e instanceof jv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(me.min()))try{const r=await Yv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(gt.EMPTY_BYTE_STRING,c.snapshotVersion)),ey(s,a);const l=new Er(c.target,a,1,c.sequenceNumber);Eh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Jd(t,r)}}async function Jd(t,e,n){if(!qi(e))throw e;t._u.add(1),await Wi(t),t.gu.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ic(t)})}async function Zd(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n._u.add(3),await Wi(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ic(n)}async function kk(t,e){const n=we(t);e?(n._u.delete(2),await ic(n)):e||(n._u.add(2),await Wi(n),n.gu.set("Unknown"))}function xs(t){return t.pu||(t.pu=function(e,n,r){const s=we(e);return s.su(),new bk(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:Tk.bind(null,t),Zr:Ck.bind(null,t),Wo:Sk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Th(t)?Ih(t):t.gu.set("Unknown")):(await t.pu.stop(),ty(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ch(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ny(t,e){if(bn("AsyncQueue",`${e}: ${t}`),qi(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Tu=new nt(te.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):pe():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gs(e,n,Zr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.Au=void 0,this.listeners=[]}}class Ak{constructor(){this.queries=new ks(e=>Ov(e),tc),this.onlineState="Unknown",this.Ru=new Set}}async function Rk(t,e){const n=we(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new xk),s)try{i.Au=await n.onListen(r)}catch(o){const a=ny(o,`Initialization of query '${jl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Sh(n)}async function Ok(t,e){const n=we(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Nk(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Sh(n)}function Pk(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.Ru.forEach(e=>{e.next()})}class Dk{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.key=e}}class sy{constructor(e){this.key=e}}class Lk{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=be(),this.mutatedKeys=be(),this.Gu=Nv(e),this.Qu=new Zr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new ep,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),v=gh(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let A=!1;f&&v?f.data.isEqual(v.data)?w!==C&&(r.track({type:3,doc:v}),A=!0):this.Hu(f,v)||(r.track({type:2,doc:v}),A=!0,(c&&this.Gu(v,c)>0||l&&this.Gu(v,l)<0)&&(a=!0)):!f&&v?(r.track({type:0,doc:v}),A=!0):f&&!v&&(r.track({type:1,doc:f}),A=!0,(c||l)&&(a=!0)),A&&(v?(o=o.add(v),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return v(h)-v(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new gs(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ep,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=be(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new sy(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ry(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=be();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return gs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Mk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Fk{constructor(e){this.key=e,this.nc=!1}}class $k{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ks(a=>Ov(a),tc),this.rc=new Map,this.oc=new Set,this.uc=new nt(te.comparator),this.cc=new Map,this.ac=new _h,this.hc={},this.lc=new Map,this.fc=ms.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Uk(t,e){const n=Kk(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await fk(n.localStore,wn(e));n.isPrimaryClient&&Jv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Vk(n,e,r,a==="current",o.resumeToken)}return s}async function Vk(t,e,n,r,s){t._c=(h,f,v)=>async function(w,C,A,_){let T=C.view.Wu(A);T.$i&&(T=await Yd(w.localStore,C.query,!1).then(({documents:q})=>C.view.Wu(q,T)));const $=_&&_.targetChanges.get(C.targetId),z=C.view.applyChanges(T,w.isPrimaryClient,$);return np(w,C.targetId,z.Xu),z.snapshot}(t,h,f,v);const i=await Yd(t.localStore,e,!0),o=new Lk(e,i.Hi),a=o.Wu(i.documents),c=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,l.Xu);const u=new Mk(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Bk(t,e){const n=we(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!tc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zv(n.remoteStore,r.targetId),Wl(n,r.targetId)}).catch(hh)):(Wl(n,r.targetId),await Kl(n.localStore,r.targetId,!0))}async function iy(t,e){const n=we(t);try{const r=await uk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ge(o.nc):s.removedDocuments.size>0&&(Ge(o.nc),o.nc=!1))}),await ay(n,r,e)}catch(r){await hh(r)}}function tp(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=we(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Sh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jk(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new nt(te.comparator);o=o.insert(i,it.newNoDocument(i,me.min()));const a=be().add(i),c=new sc(me.min(),new Map,new Qe(ke),o,a);await iy(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),kh(r)}else await Kl(r.localStore,e,!1).then(()=>Wl(r,e,n)).catch(hh)}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||oy(t,r)})}function oy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Zv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),kh(t))}function np(t,e,n){for(const r of n)r instanceof ry?(t.ac.addReference(r.key,e),zk(t,r)):r instanceof sy?(X("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||oy(t,r.key)):pe()}function zk(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(X("SyncEngine","New document in limbo: "+n),t.oc.add(r),kh(t))}function kh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new te(Be.fromString(e)),r=t.fc.next();t.cc.set(r,new Fk(n)),t.uc=t.uc.insert(n,r),Jv(t.remoteStore,new Er(wn(Rv(n.path)),r,2,fh.at))}}async function ay(t,e,n){const r=we(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=wh.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=we(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(c,h=>N.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>N.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!qi(u))throw u;X("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),v=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(v);l.Ui=l.Ui.insert(h,w)}}}(r.localStore,i))}async function Hk(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Gv(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new ne(U.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ay(n,r.ji)}}function qk(t,e){const n=we(t),r=n.cc.get(e);if(r&&r.nc)return be().add(r.key);{let s=be();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function Kk(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jk.bind(null,e),e.sc.Wo=Nk.bind(null,e.eventManager),e.sc.wc=Pk.bind(null,e.eventManager),e}class Wk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Qv(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return lk(this.persistence,new ak,e.initialUser,this.It)}yc(e){return new ik(bh.Bs,this.It)}gc(e){return new pk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await kk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ak}createDatastore(e){const n=Qv(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new yk(s));var s;return function(i,o,a,c){return new wk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>tp(this.syncEngine,a,0),o=Xd.C()?new Xd:new mk,new Ik(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new $k(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=we(e);X("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Wi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qk(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(te.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function Gl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xk(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const sp=new Map;class ip{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ip(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PC;switch(n.type){case"gapi":const r=n.client;return new FC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sp.get(e);n&&(X("ComponentProvider","Removing Datastore"),sp.delete(e),n.terminate())}(this),Promise.resolve()}}function Jk(t,e,n,r={}){var s;const i=(t=Gl(t,xh))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ml("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=gI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}t._authCredentials=new DC(new Sv(o,a))}}/**
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
 */class As{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new As(this.firestore,e,this._key)}}class oc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class es extends oc{constructor(e,n,r){super(e,n,Rv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new As(this.firestore,null,new te(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function Zk(t,e,...n){if(t=Jn(t),Yk("collection","path",e),t instanceof xh){const r=Be.fromString(e,...n);return rp(r),new es(t,null,r)}{if(!(t instanceof As||t instanceof es))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return rp(r),new es(t.firestore,null,r)}}/**
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
 */class ex{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=BC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ny(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nx(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function rx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sx(t);X("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Zd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Zd(e.remoteStore,i)),t.onlineComponents=e}async function sx(t){return t.offlineComponents||(X("FirestoreClient","Using default OfflineComponentProvider"),await nx(t,new Wk)),t.offlineComponents}async function ix(t){return t.onlineComponents||(X("FirestoreClient","Using default OnlineComponentProvider"),await rx(t,new Gk)),t.onlineComponents}async function ox(t){const e=await ix(t),n=e.eventManager;return n.onListen=Uk.bind(null,e.syncEngine),n.onUnlisten=Bk.bind(null,e.syncEngine),n}function ax(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new ex({next:h=>{i.enqueueAndForget(()=>Ok(s,u)),h.fromCache&&a.source==="server"?c.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Dk(o,l,{includeMetadataChanges:!0,Nu:!0});return Rk(s,u)}(await ox(t),t.asyncQueue,e,n,r)),r.promise}class cx{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xv(this,"async_queue_retry"),this.Wc=()=>{const n=Vc();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Vc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new _r;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!qi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Ch.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&pe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class cy extends xh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cx,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ly(this),this._firestoreClient.terminate()}}function lx(t,e){const n=typeof t=="object"?t:wg(),r=typeof t=="string"?t:e||"(default)",s=ju(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dI("firestore");i&&Jk(s,...i)}return s}function ux(t){return t._firestoreClient||ly(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ly(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new QC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tx(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class pa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pa(gt.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pa(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}const fx=new RegExp("[~\\*/\\[\\]]");function dx(t,e,n){if(e.search(fx)>=0)throw op(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uy(...e.split("."))._internalPath}catch{throw op(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function op(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(U.INVALID_ARGUMENT,a+t+c)}/**
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
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new As(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new px(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class px extends hy{data(){return super.data()}}function fy(t,e){return typeof e=="string"?dx(t,e):e instanceof uy?e._internalPath:e._delegate._internalPath}/**
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
 */function mx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class gx{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){const r={};return Ja(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new hx(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new kt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ge(Wv(r));const s=new Ii(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vx extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends vx{data(e={}){return super.data(e)}}class yx{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Io(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Fo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Io(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Fo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Io(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:_x(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _x(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class bx extends gx{constructor(e){super(),this.firestore=e}convertBytes(e){return new pa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new As(this.firestore,null,n)}}function wx(t){t=Gl(t,oc);const e=Gl(t.firestore,cy),n=ux(e),r=new bx(e);return mx(t._query),ax(n,t._query).then(s=>new yx(e,r,t,s))}(function(t,e=!0){(function(n){Ss=n})(Li),us(new kr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new cy(new LC(n.getProvider("auth-internal")),new UC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),zn(Rd,"3.7.2",t),zn(Rd,"3.7.2","esm2017")})();function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ex=dy,py=new Pi("auth","Firebase",dy());/**
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
 */const ap=new Vu("@firebase/auth");function $o(t,...e){ap.logLevel<=Ee.ERROR&&ap.error(`Auth (${Li}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Rh(t,...e)}function tn(t,...e){return Rh(t,...e)}function my(t,e,n){const r=Object.assign(Object.assign({},Ex()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Ix(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),my(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return py.create(t,...e)}function ie(t,e,...n){if(!t)throw Rh(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function En(t,e){t||dn(e)}/**
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
 */const cp=new Map;function pn(t){En(t instanceof Function,"Expected a class definition");let e=cp.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cp.set(t,e),e)}/**
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
 */function Tx(t,e){const n=ju(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ta(i,e!=null?e:{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function Cx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sx(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sx()||sI()||"connection"in navigator)?navigator.onLine:!0}function xx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=rI()||iI()}get(){return kx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oh(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ax={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Rx=new Yi(3e4,6e4);function vy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qi(t,e,n,r,s={}){return yy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gy.fetch()(by(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ax),e);try{const s=new Ox(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw my(t,u,l);on(t,u)}}catch(s){if(s instanceof Cn)throw s;on(t,"network-request-failed")}}async function _y(t,e,n,r,s={}){const i=await Qi(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function by(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Oh(t.config,s):`${t.config.apiScheme}://${s}`}class Ox{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Rx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Nx(t,e){return Qi(t,"POST","/v1/accounts:delete",e)}async function Px(t,e){return Qi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dx(t,e=!1){const n=Jn(t),r=await n.getIdToken(e),s=Nh(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(Bc(s.auth_time)),issuedAtTime:ei(Bc(s.iat)),expirationTime:ei(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Nh(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=mg(r);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Lx(t){const e=Nh(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&Mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ma(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vs(t,Px(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vx(i.providerUserInfo):[],a=Ux(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function $x(t){const e=Jn(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ux(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vx(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bx(t,e){const n=await yy(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=by(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ki;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function On(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dx(this,e)}reload(){return $x(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,Nx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:z,isAnonymous:q,providerData:S,stsTokenManager:b}=n;ie($&&b,e,"internal-error");const d=ki.fromJSON(this.name,b);ie(typeof $=="string",e,"internal-error"),On(h,e.name),On(f,e.name),ie(typeof z=="boolean",e,"internal-error"),ie(typeof q=="boolean",e,"internal-error"),On(v,e.name),On(w,e.name),On(C,e.name),On(A,e.name),On(_,e.name),On(T,e.name);const m=new Ir({uid:$,auth:e,email:f,emailVerified:z,displayName:h,isAnonymous:q,photoURL:w,phoneNumber:v,tenantId:C,stsTokenManager:d,createdAt:_,lastLoginAt:T});return S&&Array.isArray(S)&&(m.providerData=S.map(M=>Object.assign({},M))),A&&(m._redirectEventId=A),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new ki;s.updateFromServerResponse(n);const i=new Ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ma(i),i}}/**
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
 */class Ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ey.type="NONE";const up=Ey;/**
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
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(pn(up),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(up);const o=Uo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ir._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ts(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ts(i,e,r))}}/**
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
 */function hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Iy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ky(e))return"Blackberry";if(xy(e))return"Webos";if(Ph(e))return"Safari";if((e.includes("chrome/")||Ty(e))&&!e.includes("edge/"))return"Chrome";if(Sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iy(t=mt()){return/firefox\//i.test(t)}function Ph(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ty(t=mt()){return/crios\//i.test(t)}function Cy(t=mt()){return/iemobile/i.test(t)}function Sy(t=mt()){return/android/i.test(t)}function ky(t=mt()){return/blackberry/i.test(t)}function xy(t=mt()){return/webos/i.test(t)}function ac(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jx(t=mt()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zx(){return oI()&&document.documentMode===10}function Ay(t=mt()){return ac(t)||Sy(t)||xy(t)||ky(t)||/windows phone/i.test(t)||Cy(t)}function Hx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ry(t,e=[]){let n;switch(t){case"Browser":n=hp(mt());break;case"Worker":n=`${hp(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
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
 */class qx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Kx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fp(this),this.idTokenSubscription=new fp(this),this.beforeStateQueue=new qx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=py,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ma(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ie(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Xi(t){return Jn(t)}class fp{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Wx(t,e,n){const r=Xi(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Oy(e),{host:o,port:a}=Gx(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Yx()}function Oy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gx(t){const e=Oy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dp(o)}}}function dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ny{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function ns(t,e){return _y(t,"POST","/v1/accounts:signInWithIdp",vy(t,e))}/**
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
 */const Qx="http://localhost";class Or extends Ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:Qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */class Dh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Dh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Ji{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class Mn extends Ji{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Fn extends Ji{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function Xx(t,e){return _y(t,"POST","/v1/accounts:signUp",vy(t,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ir._fromIdTokenResponse(e,r,s),o=pp(r);return new Nr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pp(r);return new Nr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ga extends Cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ga(e,n,r,s)}}function Py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(t,i,e,r):i})}async function Jx(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
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
 */async function Zx(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await vs(t,Py(s,i,e,t),n);ie(o.idToken,s,"internal-error");const a=Nh(o.idToken);ie(a,s,"internal-error");const{sub:c}=a;return ie(t.uid===c,s,"user-mismatch"),Nr._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&on(s,"user-mismatch"),o}}/**
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
 */async function eA(t,e,n=!1){const r="signIn",s=await Py(t,r,e),i=await Nr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tA(t,e,n){const r=Xi(t),s=await Xx(r,{returnSecureToken:!0,email:e,password:n}),i=await Nr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}/**
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
 */async function nA(t,e){return Qi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function rA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Jn(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(r,nA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sA(t,e,n,r){return Jn(t).onIdTokenChanged(e,n,r)}function iA(t,e,n){return Jn(t).beforeAuthStateChanged(e,n)}const va="__sak";/**
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
 */class Dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oA(){const t=mt();return Ph(t)||ac(t)}const aA=1e3,cA=10;class Ly extends Dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oA()&&Hx(),this.fallbackToPolling=Ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ly.type="LOCAL";const lA=Ly;/**
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
 */class My extends Dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}My.type="SESSION";const Fy=My;/**
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
 */function uA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await uA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function Lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function fA(t){nn().location.href=t}/**
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
 */function $y(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function dA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mA(){return $y()?self:null}/**
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
 */const Uy="firebaseLocalStorageDb",gA=1,ya="firebaseLocalStorage",Vy="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([ya],e?"readwrite":"readonly").objectStore(ya)}function vA(){const t=indexedDB.deleteDatabase(Uy);return new Zi(t).toPromise()}function Ql(){const t=indexedDB.open(Uy,gA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ya,{keyPath:Vy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ya)?e(r):(r.close(),await vA(),e(await Ql()))})})}async function mp(t,e,n){const r=lc(t,!0).put({[Vy]:e,value:n});return new Zi(r).toPromise()}async function yA(t,e){const n=lc(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function gp(t,e){const n=lc(t,!0).delete(e);return new Zi(n).toPromise()}const _A=800,bA=3;class By{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dA(),!this.activeServiceWorker)return;this.sender=new hA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ql();return await mp(e,va,"1"),await gp(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lc(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}By.type="LOCAL";const wA=By;/**
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
 */function EA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EA().appendChild(r)})}function TA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Yi(3e4,6e4);/**
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
 */function jy(t,e){return e?pn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mh extends Ny{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CA(t){return eA(t.auth,new Mh(t),t.bypassAuthState)}function SA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Zx(n,new Mh(t),t.bypassAuthState)}async function kA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Jx(n,new Mh(t),t.bypassAuthState)}/**
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
 */class zy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CA;case"linkViaPopup":case"linkViaRedirect":return kA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:on(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xA=new Yi(2e3,1e4);async function AA(t,e,n){const r=Xi(t);Ix(t,e,Dh);const s=jy(r,n);return new pr(r,"signInViaPopup",e,s).executeNotNull()}class pr extends zy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xA.get())};e()}}pr.currentPopupAction=null;/**
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
 */const RA="pendingRedirect",Vo=new Map;class OA extends zy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(t,e){const n=LA(e),r=DA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function PA(t,e){Vo.set(t._key(),e)}function DA(t){return pn(t._redirectPersistence)}function LA(t){return Uo(RA,t.config.apiKey,t.name)}async function MA(t,e,n=!1){const r=Xi(t),s=jy(r,e),o=await new OA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const FA=10*60*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(t);default:return!1}}/**
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
 */async function VA(t,e={}){return Qi(t,"GET","/v1/projects",e)}/**
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
 */const BA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function zA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(HA(n))return}catch{}on(t,"unauthorized-domain")}function HA(t){const e=Yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jA.test(n))return!1;if(BA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qA=new Yi(3e4,6e4);function yp(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KA(t){return new Promise((e,n)=>{var r,s,i;function o(){yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yp(),n(tn(t,"network-request-failed"))},timeout:qA.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=TA("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},IA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function WA(t){return Bo=Bo||KA(t),Bo}/**
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
 */const GA=new Yi(5e3,15e3),YA="__/auth/iframe",QA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZA(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oh(e,QA):`https://${t.config.authDomain}/${YA}`,r={apiKey:e.apiKey,appName:t.name,v:Li},s=JA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function eR(t){const e=await WA(t),n=nn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:ZA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},GA.get());function c(){nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nR=500,rR=600,sR="_blank",iR="http://localhost";class _p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oR(t,e,n,r=nR,s=rR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=mt().toLowerCase();n&&(a=Ty(l)?sR:n),Iy(l)&&(e=e||iR,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[v,w])=>`${f}${v}=${w},`,"");if(jx(l)&&a!=="_self")return aR(e||"",a),new _p(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new _p(h)}function aR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cR="__/auth/handler",lR="emulator/auth/handler";function bp(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Li,eventId:s};if(e instanceof Dh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ji){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uR(t)}?${Di(a).slice(1)}`}function uR({config:t}){return t.emulator?Oh(t,lR):`https://${t.authDomain}/${cR}`}/**
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
 */const jc="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=MA,this._overrideRedirectResult=PA}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=bp(e,n,r,Yl(),s);return oR(e,o,Lh())}async _openRedirect(e,n,r,s){return await this._originValidation(e),fA(bp(e,n,r,Yl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eR(e),r=new $A(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ay()||Ph()||ac()}}const fR=hR;var wp="@firebase/auth",Ep="0.20.11";/**
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
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mR(t){us(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{ie(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),ie(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ry(t)},u=new Kx(a,c,l);return Cx(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),us(new kr("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(wp,Ep,pR(t)),zn(wp,Ep,"esm2017")}/**
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
 */const gR=5*60,vR=vg("authIdTokenMaxAge")||gR;let Ip=null;const yR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vR)return;const s=n==null?void 0:n.token;Ip!==s&&(Ip=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _R(t=wg()){const e=ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tx(t,{popupRedirectResolver:fR,persistence:[wA,lA,Fy]}),r=vg("authTokenSyncURL");if(r){const i=yR(r);iA(n,i,()=>i(n.currentUser)),sA(n,o=>i(o))}const s=gg("auth");return s&&Wx(n,`http://${s}`),n}mR("Browser");const bR={apiKey:"AIzaSyDYJFEbUoUW-baDPs3mfmtTEIkclyjyoPc",authDomain:"webproject-73f1c.firebaseapp.com",projectId:"webproject-73f1c",storageBucket:"webproject-73f1c.appspot.com",messagingSenderId:"998732665482",appId:"1:998732665482:web:f8cb4fd0e2abb0302e5373"},qy=bg(bR),wR=lx(qy),Ky=_R(qy),uc=xi("products",()=>{const t=Ye([]),e=o=>{t.value=o},n=o=>t.value.find(a=>a.id===o),r=Ce(()=>t.value.filter(o=>o.category==="drinks")),s=Ce(()=>t.value.filter(o=>o.category==="sweets")),i=Ce(()=>t.value.filter(o=>o.category==="fastfood"));return{products:t,setProducts:e,getDrinks:r,getSweets:s,getFastFoods:i,getProductById:n}}),ER=rt({__name:"App",setup(t){const e=uc();async function n(){const r=[];try{(await wx(Zk(wR,"Productos"))).forEach(i=>{r.push({id:i.id,...i.data()})})}catch(s){console.log(s)}e.setProducts(r),console.log("se ejecuto")}return n(),(r,s)=>(H(),re(Le,null,[de(ME),de(qE),de(Te(fg)),de(eI)],64))}});const IR=vt(ER,[["__scopeId","data-v-4d9a1462"]]),TR="modulepreload",CR=function(t){return"/"+t},Tp={},SR=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=CR(i),i in Tp)return;Tp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":TR,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},kR="/assets/frappes.81d79d2b.jpg",xR="/assets/coffes.59f607c7.jpg",AR="/assets/frozen.46686f29.jpg",RR="/assets/milshakes.f2421047.jpg",OR="/assets/jugos.8afda52e.jpg",NR="/assets/waffles.95de6c8d.jpg",PR="/assets/crepes.43a07766.jpg",DR="/assets/yoguis.45fcc101.jpg",LR="/assets/sandwiches.e2343e7c.jpg",MR="/assets/hamburguesas.db007287.jpg",FR="/assets/salchipapa.d44eb6d2.jpg",$R="/assets/alitas.0c7d5ee1.jpg",UR="/assets/fritos.7bea8a91.jpg",VR="/assets/platos_carta.a5553187.jpg",BR="/assets/wave.43405d23.svg",jR=_u(`<div id="container" data-v-63d00818><span class="" id="text1" data-v-63d00818></span><span class="" id="text2" data-v-63d00818></span></div><svg id="filters" data-v-63d00818><defs data-v-63d00818><filter id="threshold" data-v-63d00818><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0\r
							  0 1 0 0 0\r
							  0 0 1 0 0\r
							  0 0 0 255 -140" data-v-63d00818></feColorMatrix></filter></defs></svg><div class="wave" data-v-63d00818><img src="`+BR+'" alt="" data-v-63d00818></div>',3),zR=rt({__name:"Banner",setup(t){return im(()=>{const e={text1:document.getElementById("text1"),text2:document.getElementById("text2")},n=["Mokita","Caffe","Dulces","Y mas ...",":)"],r=2,s=2;let i=n.length-1,o=new Date,a=0,c=s;e.text1.textContent=n[i%n.length],e.text2.textContent=n[(i+1)%n.length];function l(){a-=c,c=0;let v=a/r;v>1&&(c=s,v=1),u(v)}function u(v){e.text2.style.filter=`blur(${Math.min(8/v-8,100)}px)`,e.text2.style.opacity=`${Math.pow(v,.4)*100}%`,v=1-v,e.text1.style.filter=`blur(${Math.min(8/v-8,100)}px)`,e.text1.style.opacity=`${Math.pow(v,.4)*100}%`,e.text1.textContent=n[i%n.length],e.text2.textContent=n[(i+1)%n.length]}function h(){a=0,e.text2.style.filter="",e.text2.style.opacity="100%",e.text1.style.filter="",e.text1.style.opacity="0%"}function f(){requestAnimationFrame(f);let v=new Date,w=c>0,C=(Number(v)-Number(o))/1e3;o=v,c-=C,c<=0?(w&&i++,l()):h()}f()}),(e,n)=>jR}});const HR=vt(zR,[["__scopeId","data-v-63d00818"]]);const qR={},KR={class:"container"},WR=_u('<img class="image" src="https://images.pexels.com/photos/11443453/pexels-photo-11443453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="" data-v-78bd0229><div class="description" data-v-78bd0229><h3 class="subtitle" data-v-78bd0229>Vive la experiencia</h3><h4 class="title_logo" data-v-78bd0229>Mokita</h4><span data-v-78bd0229>\xBFQuienes somos?</span><p class="paragraph" data-v-78bd0229> Mokita una empresa comercializadora de postres y bebidas , que busca consolidarse en el mercado y con sus clientes ofreciendo un servicio de excelencia y brindando los mejores precios hacia el publico. </p><h3 class="subtitle" data-v-78bd0229>Nuestra Carta</h3><a href="https://firebasestorage.googleapis.com/v0/b/webproject-73f1c.appspot.com/o/Men\xFA%20de%20Cafeter\xEDa%20Premium%20Ilustrado%20Pastel%20Marr\xF3n.pdf?alt=media&amp;token=83903508-6fe4-4bc0-b05d-115e19a8d0f1" target="_blank" rel="noopener noreferrer" class="reference" data-v-78bd0229> Ver carta </a></div>',2),GR=[WR];function YR(t,e){return H(),re("section",KR,GR)}const QR=vt(qR,[["render",YR],["__scopeId","data-v-78bd0229"]]),le=t=>(Pt("data-v-327f0176"),t=t(),Dt(),t),XR={class:"",id:"main"},JR={class:"banner"},ZR=le(()=>g("h3",null,"Bebidas",-1)),eO=le(()=>g("img",{src:kR,alt:""},null,-1)),tO=le(()=>g("span",null,"Frappes",-1)),nO=le(()=>g("div",{class:"card_description"}," El caf\xE9 frapp\xE9 o caf\xE9 frap\xE9 es un caf\xE9 con hielo cubierto de espuma elaborado a partir de caf\xE9 instant\xE1neo. Es muy popular en Grecia y Chipre. ",-1)),rO=[eO,tO,nO],sO=le(()=>g("img",{src:xR,alt:""},null,-1)),iO=le(()=>g("span",null,"Caf\xE9",-1)),oO=le(()=>g("div",{class:"card_description"}," El caf\xE9 es la bebida que se obtiene a partir de los granos tostados y molidos de los frutos de la planta del caf\xE9. ",-1)),aO=[sO,iO,oO],cO=le(()=>g("img",{src:AR,alt:""},null,-1)),lO=le(()=>g("span",null,"Frozen",-1)),uO=le(()=>g("div",{class:"card_description"}," Las bebidas heladas son la compa\xF1\xEDa ideal del verano. Aqu\xED encontrar\xE1s opciones refrescantes para iniciar el d\xEDa o finalizar una jornada ",-1)),hO=[cO,lO,uO],fO=le(()=>g("img",{src:RR,alt:""},null,-1)),dO=le(()=>g("span",null,"Milkshakes",-1)),pO=le(()=>g("div",{class:"card_description"}," Es una bebida elaborada principalmente con leche y/o helado al que se le agrega frutas y otros ingredientes. Lo que hace especial a las milkshakes es la textura dulce y espesa que le aporta el helado... ",-1)),mO=[fO,dO,pO],gO=le(()=>g("img",{src:OR,alt:""},null,-1)),vO=le(()=>g("span",null,"Jugos",-1)),yO=le(()=>g("h3",null,"Dulces y Salados",-1)),_O=le(()=>g("img",{src:NR,alt:""},null,-1)),bO=le(()=>g("span",null,"Waffles",-1)),wO=le(()=>g("div",{class:"card_description"}," Los waffles tienen caracter\xEDsticas inconfundibles, primero por su estilo en forma de rejillas o cuadr\xEDcula y segundo por su combinaci\xF3n crujiente en el exterior y ligeramente suave en el interior, un punto intermedio entre los pasteles y las galletas que a todos encanta. ",-1)),EO=[_O,bO,wO],IO=le(()=>g("img",{src:PR,alt:""},null,-1)),TO=le(()=>g("span",null,"Crepes",-1)),CO=le(()=>g("div",{class:"card_description"}," Receta europea de origen franc\xE9s hecha fundamentalmente de harina de trigo, con la que se elabora una masa en forma de disco ... ",-1)),SO=[IO,TO,CO],kO=le(()=>g("img",{src:DR,alt:""},null,-1)),xO=le(()=>g("span",null,"Yoguis",-1)),AO=le(()=>g("div",{class:"card_description"}," Los Yoguis son una comida fusionara de la comida asi\xE1tica en esos paises se le conoce como wafles de hot dog, y como todos sabemos muchos orientales viven en nuestro territorio ... ",-1)),RO=[kO,xO,AO],OO=le(()=>g("h3",null,"Fast Food",-1)),NO=le(()=>g("img",{src:LR,alt:""},null,-1)),PO=le(()=>g("span",null,"Sandwiches",-1)),DO=le(()=>g("div",{class:"card_description"}," El s\xE1ndwich, s\xE1nduche, s\xE1nguche, sang\xFCich o emparedado es un tipo de hamburguesa, a modo de tentempi\xE9, aperitivo o la comida que se suele hacer a diario t\xEDpica de la gastronom\xEDa inglesa ",-1)),LO=[NO,PO,DO],MO=le(()=>g("img",{src:MR,alt:""},null,-1)),FO=le(()=>g("span",null,"Hamburguesas",-1)),$O=le(()=>g("div",{class:"card_description"}," Una hamburguesa es un s\xE1ndwich hecho a base de carne molida o de origen vegetal,\u200B aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque ... ",-1)),UO=[MO,FO,$O],VO=le(()=>g("img",{src:FR,alt:""},null,-1)),BO=le(()=>g("span",null,"Salchipapas",-1)),jO=le(()=>g("div",{class:"card_description"}," La salchipapa o salchipapas es una comida r\xE1pida consumida como comida callejera en distintos pa\xEDses de Hispanoam\xE9rica. ",-1)),zO=[VO,BO,jO],HO=le(()=>g("img",{src:$R,alt:""},null,-1)),qO=le(()=>g("span",null,"Alitas",-1)),KO=le(()=>g("div",{class:"card_description"}," El origen de las alitas es un tanto discutido, pero la versi\xF3n m\xE1s aceptada es que viene desde B\xFAfalo, Nueva York, donde un restaurante al ordenar sus insumos diarios solamente le llegaron ... ",-1)),WO=[HO,qO,KO],GO=le(()=>g("img",{src:UR,alt:""},null,-1)),YO=le(()=>g("span",null,"Fritos",-1)),QO=le(()=>g("div",{class:"card_description"}," Los fritos, al igual que toda la comida t\xEDpica colombiana, son una representaci\xF3n de la cultura del pa\xEDs, y al mismo tiempo, un homenaje a las tradiciones de las diferentes regiones de Colombia. ",-1)),XO=[GO,YO,QO],JO=le(()=>g("img",{src:VR,alt:""},null,-1)),ZO=le(()=>g("span",null,"Platos a la carta",-1)),eN=le(()=>g("div",{class:"card_description"}," Por lo general, el sabor de la comida es lo que m\xE1s recuerdan las personas. Ya sea dulce, agr\xEDo, salado, picante o amargo, permanecer\xE1 en la memoria del cliente. Si un filete tiene el sabor perfecto, un cliente lo recordar\xE1. ",-1)),tN=[JO,ZO,eN],nN=rt({__name:"HomeView",setup(t){const e=()=>{xt.push("/sweet")},n=()=>{xt.push("/drinks")},r=()=>{xt.push("/fastfood")};return(s,i)=>(H(),re("main",XR,[g("section",JR,[de(HR)]),de(QR),g("section",{class:"container_section"},[ZR,g("div",{class:"container_img"},[g("div",{class:"card",onClick:n},rO),g("div",{class:"card",onClick:n},aO),g("div",{class:"card",onClick:n},hO),g("div",{class:"card",onClick:n},mO),g("div",{class:"card",onClick:n},[gO,vO,g("div",{class:"card_description",onClick:n}," Elaborados con frutas naturales son un importante complemento nutricional, un importante contribuyente a la salud, debido a las propiedades de las frutas y/o verduras. ")])])]),g("section",{class:"container_section"},[yO,g("div",{class:"container_img"},[g("div",{class:"card",onClick:e},EO),g("div",{class:"card",onClick:e},SO),g("div",{class:"card",onClick:e},RO)])]),g("section",{class:"container_section"},[OO,g("div",{class:"container_img"},[g("div",{class:"card",onClick:r},LO),g("div",{class:"card",onClick:r},UO),g("div",{class:"card",onClick:r},zO),g("div",{class:"card",onClick:r},WO),g("div",{class:"card",onClick:r},XO),g("div",{class:"card",onClick:r},tN)])])]))}});const Cp=vt(nN,[["__scopeId","data-v-327f0176"]]);var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wy={exports:{}};(function(t,e){(function(n,r){t.exports=r(n)})(typeof Co<"u"?Co:window||Co.window||Co.global,function(n){var r={},s="iziToast";document.querySelector("body");var i=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a=typeof InstallTrigger<"u",c="ontouchstart"in document.documentElement,l=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],u={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},h=568,f={};r.children={};var v={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var w=function(S,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");return d.initCustomEvent(S,b.bubbles,b.cancelable,b.detail),d};w.prototype=window.Event.prototype,window.CustomEvent=w}var C=function(S,b,d){if(Object.prototype.toString.call(S)==="[object Object]")for(var m in S)Object.prototype.hasOwnProperty.call(S,m)&&b.call(d,S[m],m,S);else if(S)for(var M=0,K=S.length;M<K;M++)b.call(d,S[M],M,S)},A=function(S,b){var d={};return C(S,function(m,M){d[M]=S[M]}),C(b,function(m,M){d[M]=b[M]}),d},_=function(S){var b=document.createDocumentFragment(),d=document.createElement("div");for(d.innerHTML=S;d.firstChild;)b.appendChild(d.firstChild);return b},T=function(S){var b=btoa(encodeURIComponent(S));return b.replace(/=/g,"")},$=function(S){return S.substring(0,1)=="#"||S.substring(0,3)=="rgb"||S.substring(0,3)=="hsl"},z=function(S){try{return btoa(atob(S))==S}catch{return!1}},q=function(){return{move:function(S,b,d,m){var M,K=.3,O=180;m!==0&&(S.classList.add(s+"-dragged"),S.style.transform="translateX("+m+"px)",m>0?(M=(O-m)/O,M<K&&b.hide(A(d,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),S,"drag")):(M=(O+m)/O,M<K&&b.hide(A(d,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),S,"drag")),S.style.opacity=M,M<K&&((o||a)&&(S.style.left=m+"px"),S.parentNode.style.opacity=K,this.stopMoving(S,null)))},startMoving:function(S,b,d,m){m=m||window.event;var M=c?m.touches[0].clientX:m.clientX,K=S.style.transform.replace("px)","");K=K.replace("translateX(","");var O=M-K;d.transitionIn&&S.classList.remove(d.transitionIn),d.transitionInMobile&&S.classList.remove(d.transitionInMobile),S.style.transition="",c?document.ontouchmove=function(Q){Q.preventDefault(),Q=Q||window.event;var se=Q.touches[0].clientX,he=se-O;q.move(S,b,d,he)}:document.onmousemove=function(Q){Q.preventDefault(),Q=Q||window.event;var se=Q.clientX,he=se-O;q.move(S,b,d,he)}},stopMoving:function(S,b){c?document.ontouchmove=function(){}:document.onmousemove=function(){},S.style.opacity="",S.style.transform="",S.classList.contains(s+"-dragged")&&(S.classList.remove(s+"-dragged"),S.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){S.style.transition=""},400))}}}();return r.setSetting=function(S,b,d){r.children[S][b]=d},r.getSetting=function(S,b){return r.children[S][b]},r.destroy=function(){C(document.querySelectorAll("."+s+"-overlay"),function(S,b){S.remove()}),C(document.querySelectorAll("."+s+"-wrapper"),function(S,b){S.remove()}),C(document.querySelectorAll("."+s),function(S,b){S.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),f={}},r.settings=function(S){r.destroy(),f=S,v=A(v,S||{})},C(u,function(S,b){r[b]=function(d){var m=A(f,d||{});m=A(S,m||{}),this.show(m)}}),r.progress=function(S,b,d){var m=this,M=b.getAttribute("data-iziToast-ref"),K=A(this.children[M],S||{}),O=b.querySelector("."+s+"-progressbar div");return{start:function(){typeof K.time.REMAINING>"u"&&(b.classList.remove(s+"-reseted"),O!==null&&(O.style.transition="width "+K.timeout+"ms "+K.progressBarEasing,O.style.width="0%"),K.time.START=new Date().getTime(),K.time.END=K.time.START+K.timeout,K.time.TIMER=setTimeout(function(){clearTimeout(K.time.TIMER),b.classList.contains(s+"-closing")||(m.hide(K,b,"timeout"),typeof d=="function"&&d.apply(m))},K.timeout),m.setSetting(M,"time",K.time))},pause:function(){if(typeof K.time.START<"u"&&!b.classList.contains(s+"-paused")&&!b.classList.contains(s+"-reseted")){if(b.classList.add(s+"-paused"),K.time.REMAINING=K.time.END-new Date().getTime(),clearTimeout(K.time.TIMER),m.setSetting(M,"time",K.time),O!==null){var Q=window.getComputedStyle(O),se=Q.getPropertyValue("width");O.style.transition="none",O.style.width=se}typeof d=="function"&&setTimeout(function(){d.apply(m)},10)}},resume:function(){typeof K.time.REMAINING<"u"?(b.classList.remove(s+"-paused"),O!==null&&(O.style.transition="width "+K.time.REMAINING+"ms "+K.progressBarEasing,O.style.width="0%"),K.time.END=new Date().getTime()+K.time.REMAINING,K.time.TIMER=setTimeout(function(){clearTimeout(K.time.TIMER),b.classList.contains(s+"-closing")||(m.hide(K,b,"timeout"),typeof d=="function"&&d.apply(m))},K.time.REMAINING),m.setSetting(M,"time",K.time)):this.start()},reset:function(){clearTimeout(K.time.TIMER),delete K.time.REMAINING,m.setSetting(M,"time",K.time),b.classList.add(s+"-reseted"),b.classList.remove(s+"-paused"),O!==null&&(O.style.transition="none",O.style.width="100%"),typeof d=="function"&&setTimeout(function(){d.apply(m)},10)}}},r.hide=function(S,b,d){typeof b!="object"&&(b=document.querySelector(b));var m=this,M=A(this.children[b.getAttribute("data-iziToast-ref")],S||{});M.closedBy=d||null,delete M.time.REMAINING,b.classList.add(s+"-closing"),function(){var Q=document.querySelector("."+s+"-overlay");if(Q!==null){var se=Q.getAttribute("data-iziToast-ref");se=se.split(",");var he=se.indexOf(String(M.ref));he!==-1&&se.splice(he,1),Q.setAttribute("data-iziToast-ref",se.join()),se.length===0&&(Q.classList.remove("fadeIn"),Q.classList.add("fadeOut"),setTimeout(function(){Q.remove()},700))}}(),M.transitionIn&&b.classList.remove(M.transitionIn),M.transitionInMobile&&b.classList.remove(M.transitionInMobile),i||window.innerWidth<=h?M.transitionOutMobile&&b.classList.add(M.transitionOutMobile):M.transitionOut&&b.classList.add(M.transitionOut);var K=b.parentNode.offsetHeight;b.parentNode.style.height=K+"px",b.style.pointerEvents="none",(!i||window.innerWidth>h)&&(b.parentNode.style.transitionDelay="0.2s");try{var O=new CustomEvent(s+"-closing",{detail:M,bubbles:!0,cancelable:!0});document.dispatchEvent(O)}catch(Q){console.warn(Q)}setTimeout(function(){b.parentNode.style.height="0px",b.parentNode.style.overflow="",setTimeout(function(){delete m.children[M.ref],b.parentNode.remove();try{var Q=new CustomEvent(s+"-closed",{detail:M,bubbles:!0,cancelable:!0});document.dispatchEvent(Q)}catch(se){console.warn(se)}typeof M.onClosed<"u"&&M.onClosed.apply(null,[M,b,d])},1e3)},200),typeof M.onClosing<"u"&&M.onClosing.apply(null,[M,b,d])},r.show=function(S){var b=this,d=A(f,S||{});if(d=A(v,d),d.time={},d.id===null&&(d.id=T(d.title+d.message+d.color)),d.displayMode===1||d.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+d.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+d.id+". Try to set an valid id.")}if(d.displayMode===2||d.displayMode=="replace")try{C(document.querySelectorAll("."+s+"#"+d.id),function(O,Q){b.hide(d,O,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+d.id+". Try to set an valid id.")}d.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[d.ref]=d;var m={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:d.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};m.toast.setAttribute("data-iziToast-ref",d.ref),m.toast.appendChild(m.toastBody),m.toastCapsule.appendChild(m.toast),function(){if(m.toast.classList.add(s),m.toast.classList.add(s+"-opening"),m.toastCapsule.classList.add(s+"-capsule"),m.toastBody.classList.add(s+"-body"),m.toastTexts.classList.add(s+"-texts"),i||window.innerWidth<=h?d.transitionInMobile&&m.toast.classList.add(d.transitionInMobile):d.transitionIn&&m.toast.classList.add(d.transitionIn),d.class){var O=d.class.split(" ");C(O,function(Q,se){m.toast.classList.add(Q)})}d.id&&(m.toast.id=d.id),d.rtl&&(m.toast.classList.add(s+"-rtl"),m.toast.setAttribute("dir","rtl")),d.layout>1&&m.toast.classList.add(s+"-layout"+d.layout),d.balloon&&m.toast.classList.add(s+"-balloon"),d.maxWidth&&(isNaN(d.maxWidth)?m.toast.style.maxWidth=d.maxWidth:m.toast.style.maxWidth=d.maxWidth+"px"),(d.theme!==""||d.theme!=="light")&&m.toast.classList.add(s+"-theme-"+d.theme),d.color&&($(d.color)?m.toast.style.background=d.color:m.toast.classList.add(s+"-color-"+d.color)),d.backgroundColor&&(m.toast.style.background=d.backgroundColor,d.balloon&&(m.toast.style.borderColor=d.backgroundColor))}(),function(){d.image&&(m.cover.classList.add(s+"-cover"),m.cover.style.width=d.imageWidth+"px",z(d.image.replace(/ /g,""))?m.cover.style.backgroundImage="url(data:image/png;base64,"+d.image.replace(/ /g,"")+")":m.cover.style.backgroundImage="url("+d.image+")",d.rtl?m.toastBody.style.marginRight=d.imageWidth+10+"px":m.toastBody.style.marginLeft=d.imageWidth+10+"px",m.toast.appendChild(m.cover))}(),function(){d.close?(m.buttonClose=document.createElement("button"),m.buttonClose.type="button",m.buttonClose.classList.add(s+"-close"),m.buttonClose.addEventListener("click",function(O){O.target,b.hide(d,m.toast,"button")}),m.toast.appendChild(m.buttonClose)):d.rtl?m.toast.style.paddingLeft="18px":m.toast.style.paddingRight="18px"}(),function(){d.progressBar&&(m.progressBar=document.createElement("div"),m.progressBarDiv=document.createElement("div"),m.progressBar.classList.add(s+"-progressbar"),m.progressBarDiv.style.background=d.progressBarColor,m.progressBar.appendChild(m.progressBarDiv),m.toast.appendChild(m.progressBar)),d.timeout&&(d.pauseOnHover&&!d.resetOnHover&&(m.toast.addEventListener("mouseenter",function(O){b.progress(d,m.toast).pause()}),m.toast.addEventListener("mouseleave",function(O){b.progress(d,m.toast).resume()})),d.resetOnHover&&(m.toast.addEventListener("mouseenter",function(O){b.progress(d,m.toast).reset()}),m.toast.addEventListener("mouseleave",function(O){b.progress(d,m.toast).start()})))}(),function(){d.iconUrl?(m.icon.setAttribute("class",s+"-icon"),m.icon.setAttribute("src",d.iconUrl)):d.icon&&(m.icon.setAttribute("class",s+"-icon "+d.icon),d.iconText&&m.icon.appendChild(document.createTextNode(d.iconText)),d.iconColor&&(m.icon.style.color=d.iconColor)),(d.icon||d.iconUrl)&&(d.rtl?m.toastBody.style.paddingRight="33px":m.toastBody.style.paddingLeft="33px",m.toastBody.appendChild(m.icon))}(),function(){d.title.length>0&&(m.strong=document.createElement("strong"),m.strong.classList.add(s+"-title"),m.strong.appendChild(_(d.title)),m.toastTexts.appendChild(m.strong),d.titleColor&&(m.strong.style.color=d.titleColor),d.titleSize&&(isNaN(d.titleSize)?m.strong.style.fontSize=d.titleSize:m.strong.style.fontSize=d.titleSize+"px"),d.titleLineHeight&&(isNaN(d.titleSize)?m.strong.style.lineHeight=d.titleLineHeight:m.strong.style.lineHeight=d.titleLineHeight+"px")),d.message.length>0&&(m.p=document.createElement("p"),m.p.classList.add(s+"-message"),m.p.appendChild(_(d.message)),m.toastTexts.appendChild(m.p),d.messageColor&&(m.p.style.color=d.messageColor),d.messageSize&&(isNaN(d.titleSize)?m.p.style.fontSize=d.messageSize:m.p.style.fontSize=d.messageSize+"px"),d.messageLineHeight&&(isNaN(d.titleSize)?m.p.style.lineHeight=d.messageLineHeight:m.p.style.lineHeight=d.messageLineHeight+"px")),d.title.length>0&&d.message.length>0&&(d.rtl?m.strong.style.marginLeft="10px":d.layout!==2&&!d.rtl&&(m.strong.style.marginRight="10px"))}(),m.toastBody.appendChild(m.toastTexts);var M;(function(){d.inputs.length>0&&(m.inputs.classList.add(s+"-inputs"),C(d.inputs,function(O,Q){m.inputs.appendChild(_(O[0])),M=m.inputs.childNodes,M[Q].classList.add(s+"-inputs-child"),O[3]&&setTimeout(function(){M[Q].focus()},300),M[Q].addEventListener(O[1],function(se){var he=O[2];return he(b,m.toast,this,se)})}),m.toastBody.appendChild(m.inputs))})(),function(){d.buttons.length>0&&(m.buttons.classList.add(s+"-buttons"),C(d.buttons,function(O,Q){m.buttons.appendChild(_(O[0]));var se=m.buttons.childNodes;se[Q].classList.add(s+"-buttons-child"),O[2]&&setTimeout(function(){se[Q].focus()},300),se[Q].addEventListener("click",function(he){he.preventDefault();var Ue=O[1];return Ue(b,m.toast,this,he,M)})})),m.toastBody.appendChild(m.buttons)}(),d.message.length>0&&(d.inputs.length>0||d.buttons.length>0)&&(m.p.style.marginBottom="0"),(d.inputs.length>0||d.buttons.length>0)&&(d.rtl?m.toastTexts.style.marginLeft="10px":m.toastTexts.style.marginRight="10px",d.inputs.length>0&&d.buttons.length>0&&(d.rtl?m.inputs.style.marginLeft="8px":m.inputs.style.marginRight="8px")),function(){m.toastCapsule.style.visibility="hidden",setTimeout(function(){var O=m.toast.offsetHeight,Q=m.toast.currentStyle||window.getComputedStyle(m.toast),se=Q.marginTop;se=se.split("px"),se=parseInt(se[0]);var he=Q.marginBottom;he=he.split("px"),he=parseInt(he[0]),m.toastCapsule.style.visibility="",m.toastCapsule.style.height=O+he+se+"px",setTimeout(function(){m.toastCapsule.style.height="auto",d.target&&(m.toastCapsule.style.overflow="visible")},500),d.timeout&&b.progress(d,m.toast).start()},100)}(),function(){var O=d.position;if(d.target)m.wrapper=document.querySelector(d.target),m.wrapper.classList.add(s+"-target"),d.targetFirst?m.wrapper.insertBefore(m.toastCapsule,m.wrapper.firstChild):m.wrapper.appendChild(m.toastCapsule);else{if(l.indexOf(d.position)==-1){console.warn("["+s+`] Incorrect position.
It can be \u203A `+l);return}i||window.innerWidth<=h?d.position=="bottomLeft"||d.position=="bottomRight"||d.position=="bottomCenter"?O=s+"-wrapper-bottomCenter":d.position=="topLeft"||d.position=="topRight"||d.position=="topCenter"?O=s+"-wrapper-topCenter":O=s+"-wrapper-center":O=s+"-wrapper-"+O,m.wrapper=document.querySelector("."+s+"-wrapper."+O),m.wrapper||(m.wrapper=document.createElement("div"),m.wrapper.classList.add(s+"-wrapper"),m.wrapper.classList.add(O),document.body.appendChild(m.wrapper)),d.position=="topLeft"||d.position=="topCenter"||d.position=="topRight"?m.wrapper.insertBefore(m.toastCapsule,m.wrapper.firstChild):m.wrapper.appendChild(m.toastCapsule)}isNaN(d.zindex)?console.warn("["+s+"] Invalid zIndex."):m.wrapper.style.zIndex=d.zindex}(),function(){d.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(m.overlay=document.querySelector("."+s+"-overlay"),m.overlay.setAttribute("data-iziToast-ref",m.overlay.getAttribute("data-iziToast-ref")+","+d.ref),!isNaN(d.zindex)&&d.zindex!==null&&(m.overlay.style.zIndex=d.zindex-1)):(m.overlay.classList.add(s+"-overlay"),m.overlay.classList.add("fadeIn"),m.overlay.style.background=d.overlayColor,m.overlay.setAttribute("data-iziToast-ref",d.ref),!isNaN(d.zindex)&&d.zindex!==null&&(m.overlay.style.zIndex=d.zindex-1),document.querySelector("body").appendChild(m.overlay)),d.overlayClose?(m.overlay.removeEventListener("click",{}),m.overlay.addEventListener("click",function(O){b.hide(d,m.toast,"overlay")})):m.overlay.removeEventListener("click",{}))}(),function(){if(d.animateInside){m.toast.classList.add(s+"-animateInside");var O=[200,100,300];(d.transitionIn=="bounceInLeft"||d.transitionIn=="bounceInRight")&&(O=[400,200,400]),d.title.length>0&&setTimeout(function(){m.strong.classList.add("slideIn")},O[0]),d.message.length>0&&setTimeout(function(){m.p.classList.add("slideIn")},O[1]),(d.icon||d.iconUrl)&&setTimeout(function(){m.icon.classList.add("revealIn")},O[2]);var Q=150;d.buttons.length>0&&m.buttons&&setTimeout(function(){C(m.buttons.childNodes,function(se,he){setTimeout(function(){se.classList.add("revealIn")},Q),Q=Q+150})},d.inputs.length>0?150:0),d.inputs.length>0&&m.inputs&&(Q=150,C(m.inputs.childNodes,function(se,he){setTimeout(function(){se.classList.add("revealIn")},Q),Q=Q+150}))}}(),d.onOpening.apply(null,[d,m.toast]);try{var K=new CustomEvent(s+"-opening",{detail:d,bubbles:!0,cancelable:!0});document.dispatchEvent(K)}catch(O){console.warn(O)}setTimeout(function(){m.toast.classList.remove(s+"-opening"),m.toast.classList.add(s+"-opened");try{var O=new CustomEvent(s+"-opened",{detail:d,bubbles:!0,cancelable:!0});document.dispatchEvent(O)}catch(Q){console.warn(Q)}d.onOpened.apply(null,[d,m.toast])},1e3),d.drag&&(c?(m.toast.addEventListener("touchstart",function(O){q.startMoving(this,b,d,O)},!1),m.toast.addEventListener("touchend",function(O){q.stopMoving(this,O)},!1)):(m.toast.addEventListener("mousedown",function(O){O.preventDefault(),q.startMoving(this,b,d,O)},!1),m.toast.addEventListener("mouseup",function(O){O.preventDefault(),q.stopMoving(this,O)},!1))),d.closeOnEscape&&document.addEventListener("keyup",function(O){O=O||window.event,O.keyCode==27&&b.hide(d,m.toast,"esc")}),d.closeOnClick&&m.toast.addEventListener("click",function(O){b.hide(d,m.toast,"toast")}),b.toast=m.toast},r})})(Wy);const mr=Wy.exports,rN=async(t,e,n,r)=>{try{const s=await tA(Ky,t,e);await rA(s.user,{displayName:n+" "+r}),console.log("userCredential",s.user)}catch(s){mr.error({title:"Error",message:s.message||"Error al crear usuario",position:"bottomRight",transitionIn:"fadeInUp",transitionOut:"fadeOutDown",timeout:4e3})}},sN=async()=>{const t=new hn;try{const e=await AA(Ky,t),n={id:e.user.uid,name:e.user.displayName,email:e.user.email,auth:!0};Is().setUser(n),console.log(e)}catch(e){mr.error({title:"Error",message:e.message,position:"bottomRight",transitionIn:"fadeInUp",transitionOut:"fadeOutDown",timeout:1e3})}},Sn=t=>(Pt("data-v-5b2fbe00"),t=t(),Dt(),t),iN={class:"container"},oN={class:"container_register"},aN=Sn(()=>g("h1",{class:"title"},"Registrarse",-1)),cN=["onSubmit"],lN={class:"container_input"},uN=Sn(()=>g("label",{class:"label"},"Correo electr\xF3nico",-1)),hN={class:"container_input"},fN=Sn(()=>g("label",{class:"label"},"Nombre",-1)),dN={class:"container_input"},pN=Sn(()=>g("label",{class:"label"},"Apellido",-1)),mN={class:"container_input"},gN=Sn(()=>g("label",{class:"label"},"Contrase\xF1a",-1)),vN=Sn(()=>g("input",{type:"submit",value:"Crear una cuenta",class:"btn"},null,-1)),yN=Sn(()=>g("div",{class:"division"},null,-1)),_N=Sn(()=>g("div",{class:"have"},"\xBFYa tienes una cuenta?",-1)),bN=Sn(()=>g("button",{class:"btn"},"Login",-1)),wN=rt({__name:"RegisterView",setup(t){const e=Ye(""),n=Ye(""),r=Ye(""),s=Ye(""),i=Is(),o=async()=>{if(e.value===""||n.value===""||r.value===""||s.value===""){mr.error({title:"Error",message:"Todos los campos son obligatorios",position:"bottomRight"});return}if(s.value.length<6){mr.error({title:"Error",message:"La contrase\xF1a debe tener al menos 6 caracteres",position:"bottomRight"});return}if(!e.value.includes("@")){mr.error({title:"Error",message:"El correo no es v\xE1lido",position:"bottomRight"});return}await rN(e.value,s.value,n.value,r.value),mr.error({title:"Success",message:"User created successfully",position:"topCenter",transitionIn:"fadeInUp",transitionOut:"fadeOutDown",timeout:1e3})};return i.user.auth&&xt.push("/user"),(a,c)=>{const l=Tr("RouterLink");return H(),re("div",iN,[g("div",oN,[aN,g("form",{class:"form",onSubmit:wm(o,["prevent"])},[g("div",lN,[_t(g("input",{class:"input",type:"text",autocomplete:"off","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:""},null,512),[[jr,e.value]]),uN]),g("div",hN,[_t(g("input",{class:"input",type:"text",required:"","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u)},null,512),[[jr,n.value]]),fN]),g("div",dN,[_t(g("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),class:"input",type:"text",required:""},null,512),[[jr,r.value]]),pN]),g("div",mN,[_t(g("input",{"onUpdate:modelValue":c[3]||(c[3]=u=>s.value=u),class:"input",type:"password",required:""},null,512),[[jr,s.value]]),gN]),vN],40,cN),yN,g("div",null,[_N,de(l,{to:"/login"},{default:ct(()=>[bN]),_:1})])])])}}});const EN=vt(wN,[["__scopeId","data-v-5b2fbe00"]]),kn=t=>(Pt("data-v-9f7a4458"),t=t(),Dt(),t),IN={class:"container"},TN={class:"container_register"},CN=kn(()=>g("h1",{class:"title"},"Login",-1)),SN={class:"container_input"},kN=kn(()=>g("label",{class:"label"},"Correo electr\xF3nico",-1)),xN={class:"container_input"},AN=kn(()=>g("label",{class:"label"},"Contrase\xF1a",-1)),RN=kn(()=>g("input",{type:"submit",value:"Login",class:"btn"},null,-1)),ON=kn(()=>g("div",{class:"division"},null,-1)),NN=kn(()=>g("div",{class:"have"},"Ingresar con:",-1)),PN=kn(()=>g("div",{class:"division"},null,-1)),DN=kn(()=>g("div",{class:"have"},"\xBFNo tienes cuenta una cuenta?",-1)),LN=kn(()=>g("button",{class:"btn"},"Crear Una cuenta",-1)),MN=rt({__name:"LoginView",setup(t){const e=Is(),n=Ye(""),r=Ye(""),s=async()=>{await sN(),xt.push("/user")};return e.user.auth&&xt.push("/user"),(i,o)=>{const a=Tr("RouterLink");return H(),re("div",IN,[g("div",TN,[CN,g("form",{onSubmit:o[2]||(o[2]=wm(()=>{},["prevent"])),class:"form"},[g("div",SN,[_t(g("input",{class:"input",type:"text",autocomplete:"off",required:"","onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c)},null,512),[[jr,n.value]]),kN]),g("div",xN,[_t(g("input",{class:"input",type:"password","onUpdate:modelValue":o[1]||(o[1]=c=>r.value=c),required:""},null,512),[[jr,r.value]]),AN]),RN],32),ON,g("div",null,[NN,g("button",{class:"btn",onClick:s}," Facebook "),g("button",{class:"btn",onClick:s}," Google ")]),PN,g("div",null,[DN,de(a,{to:"/register"},{default:ct(()=>[LN]),_:1})])])])}}});const FN=vt(MN,[["__scopeId","data-v-9f7a4458"]]),$N="/assets/bagshop.c1b1c753.svg",ti=t=>Number(t).toLocaleString("en",{style:"currency",currency:"PEN"}),Fh=xi("cart",()=>{const t=Ye({products:[],subtotal:0,tax:0,total:0}),e=()=>{t.value.subtotal=t.value.products.reduce((s,i)=>s+Number(i.price)*i.quantity,0),t.value.tax=t.value.subtotal*.18,t.value.total=t.value.subtotal+t.value.tax};return{cart:t,setCart:s=>{const i=t.value.products.find(o=>o.id===s.id);i?(i.quantity+=s.quantity,e()):(t.value.products.push(s),e())},deleteProduct:s=>{t.value.products.find(o=>o.id===s)&&(t.value.products=t.value.products.filter(o=>o.id!==s),e())}}}),$h=t=>(Pt("data-v-7d7ae45e"),t=t(),Dt(),t),UN={class:"price_container"},VN=$h(()=>g("span",null,"Subtotal",-1)),BN=$h(()=>g("span",null,"Impuestos (18%)",-1)),jN=$h(()=>g("span",null,"Total",-1)),zN=rt({__name:"PriceComponent",setup(t){const e=Fh();return(n,r)=>(H(),re("div",UN,[g("div",null,[VN,g("span",null,We(Te(ti)(String(Te(e).cart.subtotal))),1)]),g("div",null,[BN,g("span",null,We(Te(ti)(String(Te(e).cart.tax))),1)]),g("div",null,[jN,g("span",null,We(Te(ti)(String(Te(e).cart.total))),1)]),g0(n.$slots,"default",{},void 0,!0)]))}});const HN=vt(zN,[["__scopeId","data-v-7d7ae45e"]]),eo=t=>(Pt("data-v-86a9371d"),t=t(),Dt(),t),qN={key:0,class:"container"},KN={class:"modal"},WN=eo(()=>g("img",{src:$N,alt:"",class:"bagshop"},null,-1)),GN=eo(()=>g("h1",null,"Tu carrito parece vac\xEDo",-1)),YN=eo(()=>g("p",null,"Agregue articulos a su carrito",-1)),QN={key:1},XN={class:"cart_container"},JN=eo(()=>g("h2",{class:"title"},"Su carrito",-1)),ZN={class:"grid2"},e2={class:"card_flex"},t2=["onClick"],n2={class:"card_product"},r2=["src"],s2={class:""},i2={class:"card_amount"},o2=["onClick"],a2=eo(()=>g("button",{class:"btn"},"Finalizar Pedido",-1)),c2=rt({__name:"CartView",setup(t){const e=Fh(),n=s=>{e.deleteProduct(s)},r=s=>{const i=e.cart.products.find(o=>o.id===s);(i==null?void 0:i.category)==="drinks"?xt.push(`/drinks/${s}`):(i==null?void 0:i.category)==="fastfood"?xt.push(`/frozen/${s}`):(i==null?void 0:i.category)==="sweets"&&xt.push(`/sweet/${s}`)};return(s,i)=>{const o=Tr("RouterLink");return Te(e).cart.products.length===0?(H(),re("div",qN,[g("div",KN,[WN,GN,YN,de(o,{class:"btn",to:"/"},{default:ct(()=>[js("Seguir comprando")]),_:1})])])):(H(),re("div",QN,[g("div",XN,[JN,g("div",ZN,[g("div",e2,[(H(!0),re(Le,null,Gt(Te(e).cart.products,a=>(H(),re("div",{class:"card",key:a.id,onClick:c=>r(a.id)},[g("div",n2,[g("img",{src:a.imgs[0],alt:""},null,8,r2),g("div",s2,[g("span",null,We(a.name),1),g("span",null,"cantidad: "+We(a.quantity),1)])]),g("div",i2,[g("span",{onClick:c=>n(a.id)},"X",8,o2),g("span",null,We(Te(ti)(String(Number(a.price)*a.quantity))),1)])],8,t2))),128))]),de(HN,null,{default:ct(()=>[a2]),_:1})])])]))}}});const l2=vt(c2,[["__scopeId","data-v-86a9371d"]]),Gy=t=>(Pt("data-v-b61fd1b9"),t=t(),Dt(),t),u2={class:"main"},h2=Gy(()=>g("p",null,"Mis Pedidos",-1)),f2=Gy(()=>g("button",null,"Logout",-1)),d2=rt({__name:"UserView",setup(t){const e=Is();return e.user.auth||xt.push("/login"),(n,r)=>(H(),re("main",u2,[g("h1",null,"Hola,"+We(Te(e).user.name),1),h2,f2]))}});const p2=vt(d2,[["__scopeId","data-v-b61fd1b9"]]),Yy=t=>(Pt("data-v-58561a0a"),t=t(),Dt(),t),m2={key:0},g2={key:1,class:"container"},v2=["src"],y2={class:"info"},_2=Yy(()=>g("div",{class:"separator"},null,-1)),b2={class:"description_container"},w2=Yy(()=>g("p",{class:"description_title"},"Descripcion del producto",-1)),E2={class:"description_paragraph"},I2=rt({__name:"ProductView",setup(t){const e=Ye(uc().getProductById(SE().params.id)),n=()=>{e.value&&(Fh().setCart({...e.value,quantity:1}),mr.success({title:"Se agreg\xF3 al carrito",message:"El producto se agreg\xF3 al carrito",position:"topLeft"}))};return du(()=>{e.value||xt.push("/")}),(r,s)=>e.value?(H(),re("div",g2,[g("img",{src:e.value.imgs[0],alt:""},null,8,v2),g("div",y2,[g("h2",null,We(e.value.name),1),g("p",null,We(Te(ti)(e.value.price)),1),g("button",{onClick:n},"A\xF1adir al carrito"),_2,g("div",b2,[w2,g("p",E2,We(e.value.description),1)])])])):(H(),re("div",m2,"Error al cargar"))}});const zc=vt(I2,[["__scopeId","data-v-58561a0a"]]);const T2={},Qy=t=>(Pt("data-v-82f98281"),t=t(),Dt(),t),C2={class:"lds-ripple"},S2=Qy(()=>g("div",null,null,-1)),k2=Qy(()=>g("div",null,null,-1)),x2=[S2,k2];function A2(t,e){return H(),re("div",C2,x2)}const un=vt(T2,[["render",A2],["__scopeId","data-v-82f98281"]]),Dr=t=>(Pt("data-v-5144fd28"),t=t(),Dt(),t),R2={class:"main"},O2=Dr(()=>g("h1",null,"Dulces y Salados",-1)),N2={class:"section"},P2=Dr(()=>g("h2",{class:"title_text"},"Sandwiches",-1)),D2={key:1,class:"container"},L2=["onClick"],M2=["src"],F2={class:"section"},$2=Dr(()=>g("h2",{class:"title_text"},"Hamburguesas",-1)),U2={key:1,class:"container"},V2=["onClick"],B2=["src"],j2={class:"section"},z2=Dr(()=>g("h2",{class:"title_text"},"Salchipapas",-1)),H2={key:1,class:"container"},q2=["onClick"],K2={class:"card_img"},W2=["src"],G2=["src"],Y2={class:"section"},Q2=Dr(()=>g("h2",{class:"title_text"},"Alitas",-1)),X2={key:1,class:"container"},J2=["onClick"],Z2=["src"],eP={class:"section"},tP=Dr(()=>g("h2",{class:"title_text"},"Fritos",-1)),nP={key:1,class:"container"},rP=["onClick"],sP={class:"card_img"},iP=["src"],oP=["src"],aP={class:"section"},cP=Dr(()=>g("h2",{class:"title_text"},"Platos a la carta",-1)),lP={key:1,class:"container"},uP=["onClick"],hP=["src"],fP=rt({__name:"FastFoodView",setup(t){const e=uc(),n=Ye(e.getFastFoods),r=Ye(!0);du(()=>{n.value=e.getFastFoods,n.value.length>0&&(r.value=!1,console.log(n.value))});const s=i=>{xt.push(`/fastfood/${i}`)};return(i,o)=>(H(),re("main",R2,[O2,g("div",N2,[P2,r.value?(H(),ut(un,{key:0})):(H(),re("div",D2,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("img",{src:a.imgs[0],alt:""},null,8,M2),g("span",null,We(a.name),1)],8,L2)),[[ln,a.type==="sandwiches"]])),128))]))]),g("div",F2,[$2,r.value?(H(),ut(un,{key:0})):(H(),re("div",U2,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("img",{src:a.imgs[0],alt:""},null,8,B2),g("span",null,We(a.name),1)],8,V2)),[[ln,a.type==="hamburguesa"]])),128))]))]),g("div",j2,[z2,r.value?(H(),ut(un,{key:0})):(H(),re("div",H2,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("div",K2,[g("img",{src:a.imgs[0],alt:""},null,8,W2),g("img",{src:a.imgs[1],alt:""},null,8,G2)]),g("span",null,We(a.name),1)],8,q2)),[[ln,a.type==="salchipapa"]])),128))]))]),g("div",Y2,[Q2,r.value?(H(),ut(un,{key:0})):(H(),re("div",X2,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("img",{src:a.imgs[0],alt:""},null,8,Z2),g("span",null,We(a.name),1)],8,J2)),[[ln,a.type==="alita"]])),128))]))]),g("div",eP,[tP,r.value?(H(),ut(un,{key:0})):(H(),re("div",nP,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("div",sP,[g("img",{src:a.imgs[0],alt:""},null,8,iP),g("img",{src:a.imgs[1],alt:""},null,8,oP)]),g("span",null,We(a.name),1)],8,rP)),[[ln,a.type==="frito"]])),128))]))]),g("div",aP,[cP,r.value?(H(),ut(un,{key:0})):(H(),re("div",lP,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("img",{src:a.imgs[0],alt:""},null,8,hP),g("span",null,We(a.name),1)],8,uP)),[[ln,a.type==="plato"]])),128))]))])]))}});const dP=vt(fP,[["__scopeId","data-v-5144fd28"]]),hc=t=>(Pt("data-v-ed361715"),t=t(),Dt(),t),pP={class:"main"},mP=hc(()=>g("h1",null,"Dulces y Salados",-1)),gP={class:"section"},vP=hc(()=>g("h2",{class:"title_text"},"Yoguis",-1)),yP={key:1,class:"container"},_P=["onClick"],bP={class:"card_img"},wP=["src"],EP=["src"],IP={class:"section"},TP=hc(()=>g("h2",{class:"title_text"},"Creepes",-1)),CP={key:1,class:"container"},SP=["onClick"],kP={class:"card_img"},xP=["src"],AP=["src"],RP={class:"section"},OP=hc(()=>g("h2",{class:"title_text"},"Waffles",-1)),NP={key:1,class:"container"},PP=["onClick"],DP={class:"card_img"},LP=["src"],MP=["src"],FP=rt({__name:"SweetView",setup(t){const e=uc(),n=Ye(e.getSweets),r=Ye(!0);du(()=>{n.value=e.getSweets,n.value.length>0&&(r.value=!1,console.log(n.value.filter(i=>i.type==="frozen")))});const s=i=>{xt.push(`/sweet/${i}`)};return(i,o)=>(H(),re("main",pP,[mP,g("div",gP,[vP,r.value?(H(),ut(un,{key:0})):(H(),re("div",yP,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("div",bP,[g("img",{src:a.imgs[0],alt:""},null,8,wP),g("img",{src:a.imgs[1],alt:""},null,8,EP)]),g("span",null,We(a.name),1)],8,_P)),[[ln,a.type==="yogui"]])),128))]))]),g("div",IP,[TP,r.value?(H(),ut(un,{key:0})):(H(),re("div",CP,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("div",kP,[g("img",{src:a.imgs[0],alt:""},null,8,xP),g("img",{src:a.imgs[1],alt:""},null,8,AP)]),g("span",null,We(a.name),1)],8,SP)),[[ln,a.type==="creepe"]])),128))]))]),g("div",RP,[OP,r.value?(H(),ut(un,{key:0})):(H(),re("div",NP,[(H(!0),re(Le,null,Gt(n.value,a=>_t((H(),re("div",{key:a.id,onClick:c=>s(a.id),class:"card"},[g("div",DP,[g("img",{src:a.imgs[0],alt:""},null,8,LP),g("img",{src:a.imgs[1],alt:""},null,8,MP)]),g("span",null,We(a.name),1)],8,PP)),[[ln,a.type==="waffles"]])),128))]))])]))}});const $P=vt(FP,[["__scopeId","data-v-ed361715"]]),xt=TE({history:jw(),routes:[{path:"/",name:"home",component:Cp},{path:"/register",name:"register",component:EN},{path:"/login",name:"login",component:FN},{path:"/cart",name:"cart",component:l2},{path:"/user",name:"user",component:p2},{path:"/drinks",name:"drinks",component:()=>SR(()=>import("./DrinksView.af20bb52.js"),["assets/DrinksView.af20bb52.js","assets/DrinksView.6f9011c5.css"])},{path:"/drinks/:id",name:"drink",component:zc},{path:"/fastfood",name:"fastfood",component:dP},{path:"/fastfood/:id",name:"foods",component:zc},{path:"/sweet",name:"sweets",component:$P},{path:"/sweet/:id",name:"sweet",component:zc},{path:"/:pathMatch(.*)*",name:"not-found",component:Cp}]});tw.add(yw,bw,_w,Ew,Tw,Iw,ww);const fc=mb(IR);fc.component("font-awesome-icon",vw);fc.use(yb());fc.use(xt);fc.mount("#app");export{Le as F,un as L,vt as _,g as a,ut as b,re as c,rt as d,Gt as e,_t as f,Dt as g,xt as h,H as o,Pt as p,Ye as r,We as t,uc as u,ln as v,du as w};
